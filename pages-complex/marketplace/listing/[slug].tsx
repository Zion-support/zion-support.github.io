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
  }

  return (
    <>
      <NextSeo 
        title={`${listing.title} - Zion Tech Group Marketplace`}
        description={listing.description}
      />
      <div className="min-h-screen bg-white">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <Link 
            href="/marketplace" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Marketplace
          </Link>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <img 
                src={listing.image} 
                alt={listing.title}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{listing.title}</h1>
              <div className="flex items-center mb-4">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <span className="ml-1 text-gray-600">{listing.rating}/5</span>
                <span className="ml-4 text-sm text-gray-500">{listing.category}</span>
              </div>
              
              <div className="mb-6">
                <div className="flex items-center text-3xl font-bold text-green-600 mb-2">
                  <DollarSign className="h-8 w-8" />
                  {listing.price}
                </div>
              </div>
              
              <div className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed">{listing.description}</p>
              </div>
              
              <div className="mt-8">
                <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                  Contact Seller
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
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

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  
  const listing = {
    slug,
    title: 'Sample Marketplace Listing',
    description: 'This is a sample marketplace listing description. In a real implementation, this would be loaded from a database.',
    price: '99',
    rating: 4.5,
    category: 'Software',
    image: '/images/placeholder-product.jpg'
  };

  return {
    props: {
      listing
    }
  };
};

export default ListingPage;