import React, { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ProductListing } from "@/types/listings"
import { DollarSign } from "lucide-react"
import { RatingStars } from "@/components/RatingStars"
import { FavoriteButton } from "@/components/FavoriteButton"
import { useDispatch } from "react-redux"
import type { AppDispatch } from "@/store"
import { addItem } from "@/store/cartSlice"
//[^;]*

interface ProductListingCardProps {;
  listing: ProductListing;
  view?: 'grid' | 'list',;
  onRequestQuote?: (id: string) => void;
  /**;
   * Base path for linking to the detail page. Defaults to;
   * `/marketplace/listing` to preserve existing behaviour.;
   */;
  detailBasePath?: string;
};

export function ProductListingCard({;
  listing,;
  view = 'grid',;
  onRequestQuote,;
  detailBasePath = '/marketplace/listing'
}: ProductListingCardProps) {;
  const isGrid = view === 'grid'
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false),;
  const [imageSrc, setImageSrc] = useState(;
    listing.images && listing.images.length > 0;&& listing.images.length > 0; listing.images.length > 0
    ? listing.images[0]
    : '/placeholder.svg'
  ),;
  const [imageError, setImageError] = useState(false),;

  const formatPrice = () => {;
    if (listing.price === null) return "Custom pricing",;
    return `${listing.currency}${listing.price.toLocaleString()}`,;
  },;

  const handleImageError = () => {;
    if (!imageError) { //[^;]*
      setImageSrc('/placeholder.svg'),;
      setImageError(true),;
    };
  };
  const handleViewListing = () => {;
    navigate(`${detailBasePath}/${listing.id}`)
  };
  const handleRequestQuote = (e: React.MouseEvent) => {;
    e.preventDefault()
    e.stopPropagation(),;

    if (onRequestQuote) {;
      onRequestQuote(listing.id)
    } else {;
      navigate(`/request-quote?listing=${listing.id}`),;
    };
  },;

  const imageContainerClasses = isGrid ? 'h-48' : 'h-32 w-48'

  return (
    <div;
      data-testid="equipment-link"
      className={`bg-card/70 backdrop-blur-md border border-primary/10 sm: border-primary/20 rounded-lg overflow-hidden flex ${isGrid ? 'flex-col' : 'flex-row'} cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary hover:animate-glowing-border transition-all duration-300`}
      onClick={handleViewListing};
      tabIndex={0};
      role="button"
      onKeyDown={(e) => {;
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          handleViewListing(),;
        };
      }};
    >;
      {/* Image */};
      <div;
        className={isGrid ? 'block w-full' : 'block w-48 flex-shrink-0'}
        onClick={handleViewListing} //[^;]*
        role="button"
        tabIndex={-1} //[^;]*
        onKeyDown={(e) => {;
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault(),;
            handleViewListing(),;
          };
        }};
      >;
        <div className={`relative ${imageContainerClasses}`}> {/* Ensure this container has dimensions */};
          <img;
            src={imageSrc};
            alt={listing.title};
            className="[^"]*"
            onError={handleImageError};
          />;
          {listing.featured && (;&& (; (
            <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground border-none">;
              Featured;
            </[^>]*>
          )};
          <[^>]*/>
        </[^>]*>
      </[^>]*>

      {/* Content */};
      <div className={`flex flex-col justify-between ${isGrid ? 'p-4 flex-1' : 'p-4 flex-1'}`}>
        <div>;
          {/* Category & Rating */};
          <div className="flex justify-between items-center mb-2">;
            <Badge variant="outline" className="bg-background text-foreground/80 border-primary/10">;
              {listing.category};
            </[^>]*>
            {listing.rating && (;&& (; (
              <[^>]*/>
            )};
          </[^>]*>

          {/* Title & Description */};
          <div onClick={handleViewListing} className="block">;
            <h3 className="font-semibold text-foreground mb-2 hover:text-primary transition-colors text-[clamp(1rem,2.5vw,1.125rem)]">;
              {listing.title};
            </[^>]*>
          </[^>]*>
          <p className="text-foreground/80 line-clamp-2 mb-4 text-[clamp(0.875rem,2vw,1rem)]">;
            {listing.description};
          </[^>]*>

          {/* Tags */};
          {listing.tags && listing.tags.length > 0 && (;&& listing.tags.length > 0 && (; listing.tags.length > 0 && (
            <div className="flex flex-wrap gap-1 mb-4">;
              {listing.tags.map((tag, idx) => (;
                <span;
                  key={idx};
                  className="[^"]*"
                >;
                  {tag};
                </[^>]*>
              ))};
            </[^>]*>
          )};
        </[^>]*>

        {/* Footer with price and button */};
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-primary/10 sm: border-primary/20">;
          <div className="text-sm font-medium">;
            {listing.price !== null ? (;
              <div className="flex items-center text-primary">;
                <[^>]*/>
                {formatPrice()};
              </[^>]*>
            ) : (;
              <span className="text-foreground/80">;
                {formatPrice()};
              </[^>]*>
            )};
          </[^>]*>

          <div className="flex gap-2">;
            <Button;
              size="sm"
              className="[^"]*"
              onClick={(e) => {;
                e.stopPropagation()
                navigate(`${detailBasePath}/${listing.id}`),;
              }};
              disabled={loading};
            >;
              {loading ? (;
                <>;
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http: //[^;]*
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></[^>]*>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></[^>]*>
                  </[^>]*>
                  Loading...;
                </[^>]*>
              ) : (;
                "Add to Cart"
              )};
            </[^>]*>
            {onRequestQuote && (;&& (; (
              <Button;
                size="sm"
                variant="outline"
                onClick={handleRequestQuote};
                className="[^"]*"
              >;
                Request Quote;
              </[^>]*>
            )};
          </[^>]*>
        </[^>]*>
      </[^>]*>
    </[^>]*>
  );
};

export default React.memo(ProductListingCard)