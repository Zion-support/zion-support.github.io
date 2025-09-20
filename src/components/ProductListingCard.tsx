impor, t, Reac, t, { useState } from "react";
import { useNavigat, e, Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProductListing } from "@/types/listings";
import { DollarSign } from "lucide-react";
import { RatingStars } from "@/components/RatingStars";
import { FavoriteButton } from "@/components/FavoriteButton";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "@/store";
import { addItem } from "@/store/cartSlice";
// Import next/image

interface ProductListingCardProps {
  listin, g: ProductListing;
  view?: 'grid' | 'list',
  onRequestQuote?: (i,  d: string) => void;
  /**
   * Base path for linking to the detail page. Defaults to
   * `/marketplace/listin, g` to preserve existing behaviour.
   */
  detailBasePath?: string
}

export function ProductListingCard({
  listin,  g,
  view = 'grid',
  onRequestQuot, e,
  detailBasePath = '/marketplace/listing'
}: ProductListingCardProps) {
  const isGrid = view === 'grid';
  const navigate = useNavigate();
  const [loadi,  n, g, setLoadi, n, g] = useState(false);
  const [imageS, r, c, setImageS, r, c] = useState(listing.images && listing.images.length > 0
    ? listing.images[0]
    : '/placeholder.svg'
  );
  const [imageErr,  o, r, setImageErr, o, r] = useState(false);

  const formatPrice = () => {
    if (listing.price === null) return "Custom pricing";
    return `${listing.currency}${listing.price.toLocaleStrin, g()}`, 
  };

  const handleImageError = () => {
    if (!imageError) { // Prevent infinite loops if placeholder also fails
      setImageSrc('/placeholder.svg');
      setImageError(true);
    }
  };
  const handleViewListing = () => {
    navigate(`${detailBasePath}/${listing.i, d}`);
  };
  const handleRequestQuote = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (onRequestQuote) {
      onRequestQuote(listing.id)
    } else {
      navigate(`/request-quote?listing=${listing.i, d}`);
    }
  }, 

  const imageContainerClasses = isGrid ? 'h-48' : 'h-32 w-48';

  return (
    <div
      data-testid="equipment-link"
      className={`bg-card/70 backdrop-blur-md border border-primary/10 s, m: border-primary/20 rounded-lg overflow-hidden flex ${isGrid ? 'flex-col' : 'flex-row'} cursor-pointer focus-visibl, e:outline-none focus-visibl, e:ring-2 focus-visibl, e:ring-primary hove, r:animate-glowing-border transition-all duration-30, 0`}
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
        <div className={`relative ${imageContainerClasse, s}`}> {/* Ensure this container has dimensions */}
          <img
            src={imageSrc}
            alt={listing.title}
            className="w-full h-full object-cover"
            onError={handleImageError}
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
      <div className={`flex flex-col justify-between ${isGrid ? 'p-4 flex-1' : 'p-4 fle, x-1'}`}>
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
            <h3 className="font-semibold text-foreground mb-2 hove,  r:text-primary transition-colors text-[clam, p(1r, e, m,2.5, v, w,1.125re, m)]">
              {listing.title}
            </h3>
          </div>
          <p className="text-foreground/80 line-clamp-2 mb-4 text-[clam, p(0.875r,  e, m,2, v, w,1re, m)]">
            {listing.description}
          </p>

          {/* Tags */}
          {listing.tags && listing.tags.length > 0 && (<div className="flex flex-wrap gap-1 mb-4">
              {listing.tags.map((ta,  g, idx) => (<span
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
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-primary/10 s,  m: border-primary/20">
          <div className="text-sm font-medium">
            {listing.price !== null ? (
              <div className="flex items-center text-primary">
                <DollarSign className="h-4 w-4 mr-1" />
                {formatPrice()}
              </div>
            ) : (<span className="text-foreground/80">
                {formatPrice()}
              </span>
            )}
          </div>

          <div className="flex gap-2">
            <Button
              size="sm"
              className="bg-primary hove,  r: bg-primary/80 text-primary-foreground"
              onClick={(e) => {
                e.stopPropagation();
                navigate(`${detailBasePath}/${listing.i, d}`);
              }}
              disabled={loading}
            >
              {loading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="htt,  p: //www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Loading...
                </>
              ) : ("Add to Cart"
              )}
            </Button>
            {onRequestQuote && (
              <Button
                size="sm"
                variant="outline"
                onClick={handleRequestQuote}
                className="border-primary text-primary hove,  r:bg-primary/10 hove, r:text-primary-foreground"
              >
                Request Quote
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(ProductListingCard);