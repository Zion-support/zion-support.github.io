import React, { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProductListing } from "@/types/listings";
<<<<<<< HEAD:src/components/ProductListingCard.tsx
import { Star, DollarSign, Heart } from "lucide-react";
import { useAppDispatch } from "@/store/hooks";
import { addToWishlist, getApiUrl } from "@/store/wishlistSlice";
import { useAuth } from "@/hooks/useAuth";
import { useLocation } from "react-router-dom";
import { toast } from "sonner";

=======
import { DollarSign } from "lucide-react";
import { RatingStars } from "@/components/RatingStars";
import { FavoriteButton } from "@/components/FavoriteButton";
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '@/store';
import { addItem } from '@/store/cartSlice';
import Image from 'next/image'; // Import next/image
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/ProductListingCard.tsx
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
<<<<<<< HEAD:src/components/ProductListingCard.tsx

export function ProductListingCard({
=======
const ProductListingCardComponent = ({
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/ProductListingCard.tsx
  listing,
  view = 'grid',
  onRequestQuote,
  detailBasePath = '/marketplace/listing'
}: ProductListingCardProps) {
  const isGrid = view === 'grid';
  const navigate = useNavigate();
<<<<<<< HEAD:src/components/ProductListingCard.tsx
  const location = useLocation();
  const { user } = useAuth();
  const dispatch = useAppDispatch();
  
  // Get the first image or use a placeholder
  const imageUrl = listing.images && listing.images.length > 0 
    ? listing.images[0] 
=======
  const [loading, setLoading] = useState(false);
  const [imageSrc, setImageSrc] = useState(
    listing.images && listing.images.length > 0
    ? listing.images[0]
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/ProductListingCard.tsx
    : '/placeholder.svg'
  );
  const [imageError, setImageError] = useState(false);
  const formatPrice = () => {
    if (listing.price === null) return "Custom pricing";
    return `${listing.currency}${listing.price.toLocaleString()}`;
  };
  const handleImageError = () => {
    if (!imageError) { // Prevent infinite loops if placeholder also fails
      setImageSrc('/placeholder.svg');
      setImageError(true);
    }
  };
  const handleViewListing = () => {
    navigate(`${detailBasePath}/${listing.id}`);
  };
<<<<<<< HEAD:src/components/ProductListingCard.tsx
  
=======
  const dispatch = useDispatch<AppDispatch>();
  const addToCart = () => {
    setLoading(true);
    dispatch(
      addItem({
        id: listing.id,
        title: listing.title,
        price: listing.price ?? 0,
        image: listing.images && listing.images.length > 0 ? listing.images[0] : undefined,
      })
    );
    setLoading(false);
    navigate('/cart');
  };
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/ProductListingCard.tsx
  const handleRequestQuote = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (onRequestQuote) {
      onRequestQuote(listing.id);
    } else {
      navigate(`/request-quote?listing=${listing.id}`);
    }
  };
<<<<<<< HEAD:src/components/ProductListingCard.tsx

  const handleSave = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!user) {
      toast.info('Log in to save favorites');
      navigate(`/login?next=${encodeURIComponent(location.pathname + location.search)}`);
      return;
    }
    dispatch(addToWishlist({ id: listing.id, type: 'product', data: listing }));
    fetch(`${getApiUrl()}/wishlist`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: listing.id, type: 'product' }),
    }).catch(() => {});
  };
  
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/ProductListingCard.tsx
  const imageContainerClasses = isGrid ? 'h-48' : 'h-32 w-48';
  return (
    <div
      data-testid="equipment-link"
      className={`bg-card/70 backdrop-blur-md border border-primary/10 sm:border-primary/20 rounded-lg overflow-hidden flex ${isGrid ? 'flex-col' : 'flex-row'} cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary hover:animate-glowing-border transition-all duration-300`}
      onClick={handleViewListing}
      tabIndex={0}
      role="button"
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleViewListing();
        }
      }}
    >
      {/* Image */}
      <div className={isGrid ? 'block w-full' : 'block w-48 flex-shrink-0'} onClick={handleViewListing}>
        <div className={`relative ${isGrid ? 'h-48' : 'h-32 w-48'}`}>
          <img
            src={imageUrl}
            alt={`Image of ${listing.title}`}
            className="w-full h-full object-cover"
            onError={handleImageError}
            priority={false} // Assuming these are not LCP images
            sizes={isGrid ? "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" : "192px"} // 192px is w-48
          />
          {listing.featured && (
            <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground border-none">
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
            <Badge variant="outline" className="bg-background text-foreground/80 border-primary/10">
              {listing.category}
            </Badge>
            {listing.rating && (
              <RatingStars value={listing.rating} count={listing.reviewCount} />
            )}
          </div>
          {/* Title & Description */}
          <div onClick={handleViewListing} className="block">
            <h3 className="font-semibold text-foreground mb-2 hover:text-primary transition-colors text-[clamp(1rem,2.5vw,1.125rem)]">
              {listing.title}
            </h3>
          </div>
          <p className="text-foreground/80 line-clamp-2 mb-4 text-[clamp(0.875rem,2vw,1rem)]">
            {listing.description}
          </p>
          {/* Tags */}
          {listing.tags && listing.tags.length > 0 && (
            <div className="flex flex-wrap gap-1 mb-4">
              {listing.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-xs text-foreground/70 bg-background/50 px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
        {/* Footer with price and button */}
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-primary/10 sm:border-primary/20">
          <div className="text-sm font-medium">
            {listing.price !== null ? (
              <div className="flex items-center text-primary">
                <DollarSign className="h-4 w-4 mr-1" />
                {formatPrice()}
              </div>
            ) : (
              <span className="text-foreground/80">
                {formatPrice()}
              </span>
            )}
          </div>
          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={handleSave}
              aria-label="save-to-wishlist"
              className="text-zion-slate-light hover:text-zion-cyan"
            >
              <Heart className="h-5 w-5" />
            </Button>
            <Link
              to={`${detailBasePath}/${listing.id}`}
              onClick={(e) => e.stopPropagation()}
            >
              {loading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Loading...
                </>
              ) : (
                "Add to Cart"
              )}
            </Button>
            {onRequestQuote && (
              <Button
                size="sm"
                variant="outline"
                onClick={handleRequestQuote}
                className="border-primary text-primary hover:bg-primary/10 hover:text-primary-foreground"
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
export const ProductListingCard = React.memo(ProductListingCardComponent);
ProductListingCard.displayName = 'ProductListingCard';
