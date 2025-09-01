import React, { useState } from 'react';
import { Button } from '@/components / ui / button';
export default function Page() {
,
    { id: 'cybersecurity', name: 'Cybersecurity', count: 12, icon: Shield },
    { id: 'cloud', name: 'Cloud & DevOps', count: 15, icon: Cloud },
    { id: 'iot', name: 'IoT & Edge Computing', count: 10, icon: Zap },
    { id: 'blockchain', name: 'Blockchain', count: 6, icon: Globe },
    { id: 'healthcare', name: 'Healthcare Tech', count: 9, icon: Brain },
  ];

import React, { useState, useEffect, useMemo } from "react";
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { AuthModal } from '@/components/auth/AuthModal';
import { ArrowUp, Filter, SortAsc, Sparkles, TrendingUp, Star } from 'lucide-react'
import { SkeletonCard } from '@/components/ui/skeleton';
import { ErrorState } from '@/components/jobs/applications/ErrorState';
import { ProductsEmptyState } from '@/components/marketplace/EmptyState';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Spinner from '@/components/ui/spinner';
import { ProductListing } from '@/types/listings';
import { useInfiniteScrollPagination } from '@/hooks/useInfiniteScroll';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/context/auth/AuthProvider';
import { MARKETPLACE_LISTINGS } from '@/data/listingData';
import { MAX_PRICE, MIN_PRICE } from '@/data/marketplaceData';
import { logInfo, logErrorToProduction } from '@/utils/productionLogger';

interface ProductContainerProps {
  listings: ProductListing[];
  onRequestQuote: (id: string) => void;
}

async function fetchProducts() {
  // Network errors are caught and logged here.
  // The error is re-thrown to be handled by react-query.
  try {
    const res = await fetch('/api/marketplace?type=all');
    if (!res.ok) {
      throw new Error('Failed to fetch products');
    }
    return res.json() as Promise<Product[]>;
  } catch (error) {
    // During static export, allow build to succeed with empty data
    if (process.env.NEXT_PHASE === 'phase-export') {
      console.warn('Static export: fetchProducts failed, returning empty array');
      return [];
    }
    console.error('Error fetching products:', error);
    throw error;
  }
}

export interface MarketplaceProps {
  products?: Product[];
}

export default function Marketplace({ products: initialProducts = [] }: MarketplaceProps) {
  const router = useRouter(); // Changed from navigate
  const {
    data: products = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
    initialData: initialProducts,
  });

  if (isLoading) {
    return <div className="p-6 text-white">Loading...</div>;
  }

  if (error) {
    return (
      <div className="p-6 text-white text-center">
        <p className="text-xl mb-4">We couldn't load the marketplace products at this moment.</p>
        <p className="mb-2">Please try again later.</p>
        <button
          onClick={() => window.location.reload()}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Refresh Page
        </button>
      </div>
    );
  }

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">Marketplace</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products
          // Filter out products that are null/undefined or lack an 'id' property
          // to prevent rendering errors and ensure data integrity for ProductCard.
          .filter(p => p && p.id)
          .map((p) => (
            <ProductCard
              key={p.id}
              product={p}
              onBuy={() => router.push(`/checkout/${p.id}`)} // Changed to router.push
            />
          ))}
      </div>
      {products.length === 0 && (
        <div className="text-center text-gray-500">
          <p>No products available.</p>
        </div>
      )}
    </div>
  );
}

function ProductList({ listings, onRequestQuote }: ProductContainerProps) {
  return (
    <div className={`${styles.list} gap-4 product-list`}>
      {listings.map(listing => (
        <ProductListingCard
          key={listing.id}
          listing={listing}
          onRequestQuote={onRequestQuote}
          view="list"
        />
      ))}
    </div>
  );
}

export default function Marketplace() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProductTypes, setSelectedProductTypes] = useState<string[]>([]);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [selectedAvailability, setSelectedAvailability] = useState<string[]>([]);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [listings, setListings] = useState(MARKETPLACE_LISTINGS);
  const [isLoading, setIsLoading] = useState(false);
  const { viewMode, setViewMode } = useViewMode();
  const createViewModeHandler = <T extends ViewMode>(mode: T) => () => setViewMode(mode);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const filteredSolutions = solutions.filter(solution => {
    const matchesCategory = selectedCategory === 'all' || solution.category === selectedCategory;
    const matchesSearch = solution.name.toLowerCase () .includes(searchTerm.toLowerCase () ) ||
      solution.description.toLowerCase () .includes(searchTerm.toLowerCase () ) ||
      solution.vendor.toLowerCase () .includes(searchTerm.toLowerCase () ) ;
    return matchesCategory && matchesSearch;
  }) ;

  useEffect(() => {
    setIsLoading(true);
    const timeout = setTimeout(() => setIsLoading(false), 300);
    return () => clearTimeout(timeout);
  }, [searchQuery, selectedProductTypes, selectedLocations, selectedAvailability, selectedRating]);

  useEffect(() => {
    localStorage.setItem('marketplaceView', view);
  }, [view]);
  
  // Filter listings based on selected filters
  const filteredListings = listings.filter(listing => {
    // Search filter
    if (searchQuery && !listing.title.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !listing.description.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !listing.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))) {
      return false;
    }
    
    // Product type filter
    if (selectedProductTypes.length > 0 && !selectedProductTypes.includes(listing.category)) {
      return false;
    }
    
    // Location filter
    if (selectedLocations.length > 0 && listing.location && !selectedLocations.includes(listing.location)) {
      return false;
    }
    
    // Availability filter
    if (selectedAvailability.length > 0 && listing.availability && !selectedAvailability.includes(listing.availability)) {
      return false;
    }
    
    // Rating filter
    if (selectedRating && (!listing.rating || listing.rating < selectedRating)) {
      return false;
    }
    
    return true;
  });
  
  const handleFilterChange = (filterType: string, value: string) => {
    switch (filterType) {
      case 'productTypes':
        setSelectedProductTypes(prev =>
          prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
        );
        break;
      case 'locations':
        setSelectedLocations(prev =>
          prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
        );
        break;
      case 'availability':
        setSelectedAvailability(prev =>
          prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
        );
        break;
    }
  };
  
  const clearAllFilters = () => {
    setSearchQuery("");
    setSelectedProductTypes([]);
    setSelectedLocations([]);
    setSelectedAvailability([]);
    setSelectedRating(null);
  };
  
  // Handle requesting a quote
  const handleRequestQuote = (listingId: string) => {
    const listing = listings.find(item => item.id === listingId);
    
    if (listing) {
      toast({
        title: "Quote Requested",
        description: `Your quote request for ${listing.title} has been sent.`
      });
      
      // Navigate to the quote request page with the listing information
      navigate("/request-quote", {
        state: { 
          serviceType: listing.category,
          specificItem: {
            id: listing.id,
            title: listing.title,
            category: listing.category,
            image: listing.images?.[0]
          }
        }
      });
    }
  };

  return (
    <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto mb-8">
          <h1 className="font-bold text-white mb-4 text-[clamp(1.5rem,3vw,1.875rem)]">
            {t('marketplace.title')}
          </h1>
          <p className="text-zion-slate-light text-[clamp(1rem,2.5vw,1.125rem)]">
            {t('marketplace.description')}
          </p>
        </div>
        
        {/* Search and filter bar */}
        <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-4 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <EnhancedSearchInput
                value={searchQuery}
                onChange={setSearchQuery}
                onSelectSuggestion={setSearchQuery}
                placeholder={t('marketplace.search_placeholder')}
                searchSuggestions={searchSuggestions}
              />
            </div>
            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={createViewModeHandler('grid')}
                aria-label="Grid view"
                aria-pressed={viewMode === 'grid'}
                className="text-zion-slate-light"
              >
                <Grid3X3 className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={createViewModeHandler('list')}
                aria-label="List view"
                aria-pressed={viewMode === 'list'}
                className="text-zion-slate-light"
              >
                <ListFilter className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating) ;
    const hasHalfStar = rating % 1 !== 0;

            {/* Results count */}
            <div className="mb-6">
              <p className="text-zion-slate-light">
                {t('marketplace.results_count', { count: filteredListings.length })}
                {searchQuery && ` for "${searchQuery}"`}
              </p>
            </div>
            
            {/* Display actual marketplace listings */}
            {isLoading ? (
              <div className="flex justify-center py-20">
                <Loader2 className="h-8 w-8 animate-spin text-zion-purple" />
              </div>
            ) : filteredListings.length > 0 ? (
              viewMode === 'grid' ? (
                <ProductGrid listings={paginatedListings} onRequestQuote={handleRequestQuote} />
              ) : (
                <ProductList listings={paginatedListings} onRequestQuote={handleRequestQuote} />
              )
            ) : (
              <div className="col-span-2 text-center py-16 bg-zion-blue-dark border border-zion-blue-light rounded-lg">
                <h2 className="text-2xl font-bold text-white mb-4">{t('marketplace.no_results_title')}</h2>
                <p className="text-zion-slate-light max-w-md mx-auto mb-8">
                  {t('marketplace.no_results_description')}
                </p>
                <Button
                  onClick={clearAllFilters}
                  className="bg-zion-purple hover:bg-zion-purple-dark"
                >
                  {t('marketplace.clear_filters')}
                </Button>
              </div>
            )}
          </div>
        </section>
      </div>
    </>) ;
};

