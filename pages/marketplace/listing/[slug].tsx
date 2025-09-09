import type { GetStaticProps, GetStaticPaths } from 'next'; // Updated import
import type { ProductListing } from '@/types/listings';
import { MARKETPLACE_LISTINGS } from '@/data/marketplaceData';

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

const ListingPage: React.FC<ListingProps> = ({ listing }) => {
  if (!listing) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Listing Not Found</h1>
          <p className="text-gray-600 mb-8">The listing you're looking for doesn't exist.</p>
          <Link href="/marketplace" className="text-blue-600 hover:text-blue-800">
            ← Back to Marketplace
          </Link>
        </div>
      </div>
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