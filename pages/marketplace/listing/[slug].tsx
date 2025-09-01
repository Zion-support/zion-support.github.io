import type { GetStaticProps, GetStaticPaths } from 'next'; // Updated import
import type { ProductListing } from '@/types/listings';
import { MARKETPLACE_LISTINGS } from '@/data/marketplaceData';
import { INITIAL_MARKETPLACE_PRODUCTS } from '@/data/initialMarketplaceProducts';
import { SERVICES } from '@/data/servicesData';
import * as Sentry from '@sentry/nextjs';
import Head from 'next/head';
import Link from 'next/link';
import { RatingStars } from '@/components/RatingStars';
import ProductReviews from '@/components/ProductReviews';
import { ProductGallery } from '@/components/gallery/ProductGallery';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '@/store';
import { addItem } from '@/store/cartSlice';
import { toast } from '@/hooks/use-toast';
import { getBreadcrumbsForPath } from '@/utils/routeUtils';
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd';
import { logInfo, logWarn, logError } from '@/utils/productionLogger';
import { fetchProducts, validateProductData, ensureProductIntegrity } from '@/services/marketplace';
// import { AppLayout } from '@/layout/AppLayout'; // Unused
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

// Define ProductWithReviewStats here or import from a shared types file
// This should match the type returned by `/api/products/[productId]/details`
export type ProductWithReviewStats = Product & {
  averageRating: number | null;
  reviewCount: number;
  // Adding fields to match the enriched type from the API / product card expectations
  title?: string; // Usually mapped from product.name
  category?: string;
  images?: { url: string; alt?: string }[];
  price?: number | null;
  currency?: string;
  tags?: string[];
};

interface RatingStarsProps {
  value: number;
  count?: number;
}

const ListingPage: React.FC<ListingPageProps> = ({ listing }) => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>(); // Moved hook to the top
  
  if (!listing) {
    return <div className="max-w-3xl mx-auto py-8 px-4">Listing not found.</div>;
  }

  const canonicalUrl = `/marketplace/listing/${listing.id}`;
  const breadcrumbs = getBreadcrumbsForPath(canonicalUrl);
  // const dispatch = useDispatch<AppDispatch>(); // Original position

  const handleAddToCart = () => {
    // Ensure listing is not null before accessing its properties, though the early return should cover this.
    if (!listing) return;
    dispatch(
      addItem({ id: listing.id, title: listing.title, price: listing.price ?? 0 })
    );
    toast({
      title: "Added to cart",
      description: `${listing.title} has been added to your cart`,
    });
  };

  return (
    <div className="flex items-center">
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={i < roundedRating ? 'text-yellow-400' : 'text-gray-300'}>★</span>
      ))}
      <span className="ml-1 text-sm text-gray-600 dark:text-gray-400">
        {ratingValue > 0 ? `${ratingValue.toFixed(1)}/5` : 'Not rated'}
      </span>
      {typeof count !== 'undefined' && (
        <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">({count} reviews)</span>
      )}
    </div>
  );
};

// export const getServerSideProps: GetServerSideProps<ListingPageProps> = async ({ params }) => {
//   const slug = params?.slug as string;
//   const listing = MARKETPLACE_LISTINGS.find((l) => l.id === slug) || null;
//   if (!listing) {
//     return { notFound: true };
//   }
//   return { props: { listing } };
// };

export const getStaticPaths: GetStaticPaths = async () => {
  // For a dummy setup, we don't pre-render any paths
  // Real implementation might query a DB for all slugs
  return {
    paths: [],
    fallback: 'blocking', // or true, if you want to show a fallback UI
  };
};

export const getStaticProps: GetStaticProps<ListingPageProps> = async (context) => {
  const slug = context.params?.slug as string;
  // In a real scenario, fetch data based on slug
  // For this dummy version, we'll try to find it in the static data or return null
  const listing = MARKETPLACE_LISTINGS.find((l) => l.id === slug) || null;

  if (!listing) {
    return { notFound: true };
  }

  return {
    props: { listing },
    // revalidate: 60, // Optional: enable ISR
  };
};

export const getServerSideProps: GetServerSideProps<ListingPageProps> = async (context) => {
  const slug = context.params?.slug as string;
  if (!slug) {
    return { notFound: true };
  }

  try {
    // Fetch product details including review stats
    const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
    const res = await fetch(`${appUrl}/api/products/${slug}/details`);

    if (!res.ok) {
      if (res.status === 404) {
        return { notFound: true };
      }
      let errorMsg = `Failed to fetch product: ${res.status}`;
      try {
        const errorData = await res.json();
        errorMsg = errorData.error || errorMsg;
      } catch (jsonError) {
        // If response is not JSON, use the status text or default message
        errorMsg = res.statusText || errorMsg;
      }
      return { props: { product: null, error: errorMsg } };
    }

    const product: ProductWithReviewStats = await res.json();
    return { props: { product, error: undefined } }; // Ensure error is undefined on success
  } catch (e: any) {
    console.error('Error in getServerSideProps for [slug]:', e);
    // More generic error for the client
    return { props: { product: null, error: 'An unexpected error occurred while trying to load product details.' } };
  }
};

export default MarketplaceListingPage;
