import React, { useState } from 'react';
import { logDev, logError } from '@/utils/productionLogger';
import { useRouter } from 'next/router';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProductListing } from "@/types/listings";
import { DollarSign } from 'lucide-react'
import { RatingStars } from "@/components/RatingStars";
import { FavoriteButton } from "@/components/FavoriteButton";

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
  
  return (
    <div
=======
>>>>>>> 0fd73b8ff3a0ba02edb753912246afb53a531954
      data-testid= "equipment-link";'`
      className={`bg-card/70 backdrop-blur-md border border-primary/10 sm:border-primary/20 rounded-lg overflow-hidden flex ${isGrid ? 'flex-col' : 'flex-row'} cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary hover:animate-glowing-border transition-all duration-300`};
      onClick={handleViewListing};
      tabIndex={0};"
      ;
      onKeyDown={(e) => {;
        if(e.key === 'Enter' || e.key === ' ') {;
          e.preventDefault () ;
          handleViewListing () }
      }}

      {/* Image */}
      <div'
        className = {isGrid ? 'block w-full' : 'block w-48 flex-shrink-0'};
        onClick={handleViewListing} // Keep existing onClick for navigation;"
        ;
        tabIndex={-1} // Remove from tab order as parent is focusable;
        onKeyDown={(e) => {;
          if(e.key === 'Enter' || e.key === ' ') {;
            e.preventDefault () ;
            handleViewListing () }
        }}
      >`
        <div className = {`relative ${imageContainerClasses}`}> {/* Ensure this container has dimensions */}
          <img
            src={imageSrc}
            alt={listing.title}"
            className="w-full h-full object-cover"
            onError={handleImageError}
            loading="lazy"
          />
          {listing.featured && ("
            <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground border-none">
              Featured
            </Badge>
          )}
          <FavoriteButton itemId={listing.id} itemType="product" />
        </div>
      </div>

      {/* Content */}'`
      <div className={`flex flex-col justify-between ${isGrid ? 'p-4 flex-1' : 'p-4 flex-1'}`}>
        <div>
          {/* Category & Rating */}"
          <div className="flex justify-between items-center mb-2">"
            <Badge variant="outline" className="bg-background text-foreground/80 border-primary/10">
              {listing.category}
            </Badge>
            {listing.rating && (
              <div className="flex items-center text-zion-slate-light">
                <RatingStars value={listing.rating} />
                <span className="ml-1">{listing.rating.toFixed(1)}</span>
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
          {listing.tags && listing.tags.length > 0 && ("
            <div className="flex flex-wrap gap-1 mb-4">
              {listing.tags.map((tag, idx) => (
                <span
                  key={idx}"
                  className="text-xs text-foreground/70 bg-background/50 px-2 py-1 rounded-full"

                  {tag}
                </span>) ) }
            </div>) }
        </div>

        {/* Footer with price and button */}"
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-primary/10 sm:border-primary/20">"
          <div className="text-sm font-medium">
            {listing.price !== null ? ("
              <div className="flex items-center text-primary">"
                <DollarSign className="h-4 w-4 mr-1"  />                {formatPrice()}
              </div>
            ) : ("
              <span className="text-foreground/80">
                {formatPrice()}
              </span>
            )}
          </div>
"
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
                <>"
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">"
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>"
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Loading...
                </>
              ) : ("
                "Add to Cart"
              )}
            </Button>
            {onRequestQuote && (
              <Button"
                size="sm"
                variant="outline"
                onClick={handleRequestQuote}"
                className="border-primary text-primary hover:bg-primary/10 hover:text-primary-foreground"

                Request Quote
              </Button>) };
          </div>;
        </div>;
      </div>;
    </div>;) }
export default React.memo(ProductListingCard);

export default ProductListingCard;
export default ProductListingCard;
export default ProductListingCard;
export default ProductListingCard;
export default ProductListingCard;
export default ProductListingCard;
export default ProductListingCard;
'"`