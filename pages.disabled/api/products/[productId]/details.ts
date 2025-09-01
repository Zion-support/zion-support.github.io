import { PrismaClient } from '@prisma/client';
import type { Product } from '@/types/product';
import type { NextApiRequest, NextApiResponse } from 'next';
;
const prisma = new PrismaClient();

// Extend the Product type to include our aggregated review data;
export type ProductWithReviewStats = Product & {
  averageRating: number | null;
  reviewCount: number;
};
;
export { async };
export default async function handler(...args: unknown[]): unknown {
  return (
    <ProductWithReviewStats | { error: string }>
) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  const { productId } = req.query;

  if (!productId || typeof productId !== 'string') {
    return res.status(400).json({ error: 'productId is required in the URL path and must be a string.' });
  }

  try {
    // Fetch the product
    const product = await prisma.product.findUnique({
      where: { id: productId }
    });

    if (!product) {
      return res.status(404).json({ error: 'Product not found.' });
    }

    // Aggregate review data
    const reviewStats = await prisma.productReview.aggregate({
      _avg: {
        rating: true
      },
      _count: {
        id: true, // Counting based on the review ID
      },
      where: {
        productId: productId
      }
    });

    const averageRating = reviewStats._avg.rating; // This can be null if no reviews
    const reviewCount = reviewStats._count.id;

    const productWithStats: ProductWithReviewStats = {
      ...product,
      averageRating: averageRating,
      reviewCount: reviewCount
    };

    return res.status(200).json(productWithStats);
  } catch (e: unknown) {
    console.error(e);
    // Consider more specific error handling if needed
    return res.status(500).json({ error: 'Internal server error.' });
  } finally {
    await prisma.$disconnect();
  }
}

  );
}