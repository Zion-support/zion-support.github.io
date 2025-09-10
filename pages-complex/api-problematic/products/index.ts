import type { NextApiRequest, NextApiResponse } from 'next';
import { MARKETPLACE_LISTINGS } from '../../../src/data/listingData';
import { applyCorsHeaders } from '@/middleware/cors';
import { logInfo, logErrorToProduction } from '../../../src/utils/productionLogger';

export default function handler(req: NextApiRequest, res: NextApiResponse) {

  // Apply CORS headers for API documentation
  applyCorsHeaders(req, res);

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  try {
    const page = parseInt(((req.query as any).page as string), 10) || 1;
    const limit = parseInt(((req.query as any).limit as string), 10) || 20;
    const category = (((req.query as any).category as string | undefined))?.toLowerCase();
    const sort = (((req.query as any).sort as string | undefined))?.toLowerCase();

    let products = [...MARKETPLACE_LISTINGS]; // Create a copy to avoid mutations

    // Apply category filter if specified
    if (category) {
      products = products.filter(
        (p) => p.category?.toLowerCase() === category
      );
    }

    // Apply sorting before pagination
    switch (sort) {
      case 'price-low':
        products.sort((a, b) => (a.price || 0) - (b.price || 0));
        break;
      case 'price-high':
        products.sort((a, b) => (b.price || 0) - (a.price || 0));
        break;
      case 'rating':
        products.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      case 'popular':
        products.sort((a, b) => (b.reviewCount || 0) - (a.reviewCount || 0));
        break;
      case 'ai-score':
        products.sort((a, b) => (b.aiScore || 0) - (a.aiScore || 0));
        break;
      case 'newest':
      default:
        products.sort(
          (a, b) =>
            new Date(b.createdAt || '').getTime() -
            new Date(a.createdAt || '').getTime()
        );
        break;
    }

    // Apply pagination
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const items = products.slice(startIndex, endIndex).map(product => ({
      ...product,
      // Placeholder/default values for other fields potentially expected by UI components
      // These would ideally come from an expanded Product model or other data sources
      category: product.category || 'Uncategorized', // Default placeholder
      // Removed direct access to product.images, product.price, product.currency, product.tags
      // as they are not in the Prisma Product model.
      // These fields are optional in ProductWithReviewStats or will use defaults if not set.
      // If these need to be populated, it should be from other data sources or model extensions.
      images: product.images || [], // Default to empty array or define based on other logic if available
      price: product.price || null,  // Default to null or define based on other logic
      currency: product.currency || 'USD', // Default currency or define based on other logic
      tags: product.tags || [], // Default to empty array or define based on other logic
    }));

    logInfo(`[API] /api/products - Found ${products.length} total products, returning ${items.length} for page ${page} (limit: ${limit})`);
    
    // Add metadata for better debugging
    const response = {
      products: items,
      pagination: {
        page,
        limit,
        total: products.length,
        hasMore: end < products.length
      },
      filters: {
        category: category || null
      }
    };

    return res.status(200).json(response);
  } catch (error) {
    logErrorToProduction('[API] Error in /api/products:', { data: error });
    // Return fallback data instead of error to prevent empty marketplace
    return res.status(200).json({
      products: MARKETPLACE_LISTINGS.slice(0, 20),
      pagination: { page: 1, limit: 20, total: MARKETPLACE_LISTINGS.length, hasMore: false },
      filters: { category: null },
      fallback: true
    });
  }
}
