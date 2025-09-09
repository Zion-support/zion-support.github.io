import React, { useState } from 'react';
import { logDev, logError } from '@/utils/productionLogger';
import { useRouter } from 'next/router';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/Button";
import { ProductListing } from "@/types/listings";
import { Star, DollarSign } from "lucide-react";
import { FavoriteButton } from "@/components/FavoriteButton";
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '@/store';
import { addItem } from '@/store/cartSlice';
// Regular img tag will be used instead of next/image

interface ProductListingCardProps {
  listing: ProductListing;
  view?: 'grid' | 'list';
  onRequestQuote?: (id: string) => void;
  /**
   * Base path for linking to the detail page. Defaults to
   * `/marketplace/listing` to preserve existing behaviour.
   */
  detailBasePath?: string;
}

export function ProductListingCard({
  listing,
  view = 'grid',
  onRequestQuote,
  detailBasePath = '/marketplace/listing'
}: ProductListingCardProps) {
  const isGrid = view === 'grid';
  const router = useRouter(); // Changed from useNavigate
  const [loading, setLoading] = useState(false);
  
  // Get the first image or use a placeholder
  const imageUrl = listing.images && listing.images.length > 0 
    ? listing.images[0] 
    : '/placeholder.svg';
    
  // Format price display
  const formatPrice = () => {
    if (listing.price === null) return "Custom pricing";
    return `${listing.currency}${listing.price.toLocaleString()}`;
  };

  // Handle image loading errors
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = '/placeholder.svg';
  };
  
  // Handle navigating to listing detail
  const handleViewListing = () => {
    // Debug logging for development
    if (process.env.NODE_ENV === 'development') {
      logDev('[ProductCard] Navigating to:', `${detailBasePath}/${listing.id}`);
      logDev('[ProductCard] Listing ID:', listing.id);
      logDev('[ProductCard] Listing Title:', listing.title);
    }
    
    // Validate listing ID exists before navigation
    if (!listing.id) {
      logError('[ProductCard] Missing listing ID, cannot navigate');
      toast({
        title: "Navigation Error",
        description: "Product information is incomplete",
        variant: "destructive",
      });
      return;
    }
    
    router.push(`${detailBasePath}/${listing.id}`);
  };

  const dispatch = useDispatch<AppDispatch>();

  const addToCart = () => {
    setLoading(true);
    dispatch(
      addItem({ id: listing.id, title: listing.title, price: listing.price ?? 0 })
    );
    setLoading(false);
    router.push('/cart');
  };
  
  // Handle request quote button click
  const handleRequestQuote = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (onRequestQuote) {
      onRequestQuote(listing.id);
    } else {
      // Default behavior if no handler provided
      router.push(`/request-quote?listing=${listing.id}`);
    }
  };
  
  return (
    <div
      className={`bg-zion-blue-dark border border-zion-blue-light rounded-lg overflow-hidden flex ${isGrid ? 'flex-col' : 'flex-row'} cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zion-purple`}
      onClick={handleViewListing}
      tabIndex={0}
    >
      {/* Image */}
      <div
        className={isGrid ? 'block w-full' : 'block w-48 flex-shrink-0'}
        onClick={handleViewListing} // Keep existing onClick for navigation
        role="button"
        tabIndex={-1} // Remove from tab order as parent is focusable
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleViewListing();
          }
        }}
      >
        <div className={`relative ${imageContainerClasses}`}> {/* Ensure this container has dimensions */}
          <img
            src={imageSrc}
            alt={listing.title}
            className="w-full h-full object-cover"
            onError={handleImageError}
          />
          {listing.featured && (
            <Badge className="absolute top-2 right-2 bg-zion-purple text-white border-none">
              Featured
            </Badge>
          )}
          <FavoriteButton itemId={listing.id} itemType="product" />
        </div>
      </div>
      
      {/* Content */}
      <div className={`flex flex-col justify-between ${isGrid ? 'p-4 flex-1' : 'p-4 flex-1'}`}>
        <div>
          {/* Category & Rating */}
          <div className="flex justify-between items-center mb-2">
            <Badge variant="outline" className="bg-zion-blue-light/20 text-zion-slate-light border-zion-blue-light">
              {listing.category}
            </Badge>
            {listing.rating && (
              <div className="flex items-center text-zion-slate-light">
                <Star className="h-4 w-4 fill-zion-cyan text-zion-cyan mr-1" />
                <span>{listing.rating}</span>
                {listing.reviewCount && (
                  <span className="text-xs ml-1">({listing.reviewCount})</span>
                )}
              </div>
            )}
          </div>
          
          {/* Title & Description */}
          <div onClick={handleViewListing} className="block">
            <h3 className="font-semibold text-white mb-2 hover:text-zion-cyan transition-colors text-[clamp(1rem,2.5vw,1.125rem)]">
              {listing.title}
            </h3>
          </div>
          <p className="text-zion-slate line-clamp-2 mb-4 text-[clamp(0.875rem,2vw,1rem)]">
            {listing.description}
          </p>
          
          {/* Tags */}
          {listing.tags && listing.tags.length > 0 && (
            <div className="flex flex-wrap gap-1 mb-4">
              {listing.tags.map((tag, idx) => (
                <span 
                  key={idx} 
                  className="text-xs text-zion-slate bg-zion-blue-light/20 px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
        
        {/* Footer with price and button */}
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-zion-blue-light">
          <div className="text-sm font-medium">
            {listing.price !== null ? (
              <div className="flex items-center text-zion-purple">
                <DollarSign className="h-4 w-4 mr-1" />
                {formatPrice()}
              </div>
            ) : (
              <span className="text-zion-slate-light">
                {formatPrice()}
              </span>
            )}
          </div>
          
          <div className="flex gap-2">
            <Link
              to={`${detailBasePath}/${listing.id}`}
              onClick={(e) => e.stopPropagation()}
            >
              <Button
                size="sm"
                className="bg-zion-purple hover:bg-zion-purple-dark text-white"
              >
                Buy Now
              </Button>
            </Link>
            
            {onRequestQuote && (
              <Button 
                size="sm"
                variant="outline" 
                onClick={handleRequestQuote}
                className="border-zion-purple text-zion-purple hover:bg-zion-purple/10"
              >
                Request Quote
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const MemoizedProductListingCard = React.memo(ProductListingCard);
MemoizedProductListingCard.displayName = 'ProductListingCard';
export default MemoizedProductListingCard;
