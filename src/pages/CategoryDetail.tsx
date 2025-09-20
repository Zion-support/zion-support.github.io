import React, { useState, useEffect, Suspense } from 'react';
import { useRouter } from 'next/router';
import { SEO } from '@/components/SEO';
import { Header } from '@/components/Header';
import { ListingGridSkeleton } from '@/components/ListingGridSkeleton';
import { Folder } from 'lucide-react';

interface Listing {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export default function CategoryDetail() {
  const router = useRouter();
  const { slug } = router.query;
  const [listings, setListings] = useState<Listing[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      fetchListings(slug as string);
    }
  }, [slug]);

  const fetchListings = async (categorySlug: string) => {
    try {
      setLoading(true);
      // Mock data for now
      const mockListings: Listing[] = [
        {
          id: '1',
          title: 'AI Chatbot Development',
          description: 'Custom AI chatbot solution for your business',
          price: 5000,
          image: 'https://images.unsplash.com/photo-1677442136019-21780ccad005?w=400&h=300&fit=crop',
          category: categorySlug
        },
        {
          id: '2',
          title: 'Machine Learning Model',
          description: 'Custom ML model for data analysis',
          price: 8000,
          image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop',
          category: categorySlug
        }
      ];
      
      setListings(mockListings);
    } catch (error) {
      console.error('Error fetching listings:', error);
    } finally {
      setLoading(false);
    }
  };

  const seoTitle = `${slug} Services - Zion AI Marketplace`;
  const seoDescription = `Explore ${slug} services and solutions on Zion AI Marketplace`;

  return (
    <>
      <SEO title={seoTitle} description={seoDescription} />
      <Header />
      <div className="min-h-screen bg-gray-50 pt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4 capitalize">
                {slug} Services
              </h1>
              <p className="text-lg text-gray-600">
                Discover the best {slug} services and solutions
              </p>
            </div>

            <Suspense fallback={<ListingGridSkeleton />}>
              {loading ? (
                <ListingGridSkeleton />
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {listings.map((listing) => (
                    <div key={listing.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                      <img
                        src={listing.image}
                        alt={listing.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {listing.title}
                        </h3>
                        <p className="text-gray-600 mb-4">{listing.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-2xl font-bold text-blue-600">
                            ${listing.price.toLocaleString()}
                          </span>
                          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                            View Details
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </Suspense>

            {!loading && listings.length === 0 && (
              <div className="text-center py-12">
                <Folder className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No services found</h3>
                <p className="text-gray-600">Try a different category or check back later.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}