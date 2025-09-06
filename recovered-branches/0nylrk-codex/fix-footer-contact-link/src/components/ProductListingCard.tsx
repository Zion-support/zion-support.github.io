import {useNavigate} from "react-router-dom";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {ProductListing} from "@/types/listings";
import {Star, DollarSign} from "lucide-react";
import { useNavigate } from "react-router-dom",
import { Badge } from "@/components/ui/badge",
import { Button } from "@/components/ui/button",
import { ProductListing } from "@/types/listings";
import { Star, DollarSign } from "lucide-react";
interface ProductListingCardProps {

interface ProductListingCardProps {;
  listing: ProductListing,;

  view?: 'grid' | 'list';
  onRequestQuote?: (id: string) => void;
}
  view = 'grid';
  onRequestQuote;
}: ProductListingCardProps) {;
  const isGrid = view === 'grid';
  const navigate = useNavigate();


interface ProductListingCardProps {
  listing: ProductListing,
  view?: 'grid' | 'list',
  onRequestQuote?: (id: string) => void
}

export function ProductListingCard({ 
  onRequestQuote
}: ProductListingCardProps) {
  const isGrid = view === 'grid',
  const navigate = useNavigate(),
  
  // Get the first image or use a placeholder
  // Format price display
  const formatPrice = () => {
    if (listing.price === null) return "Custom pricing";
    return `${listing.currency}${listing.price.toLocaleString()}`
  // Handle image loading errors
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = '/placeholder.svg'
  }
  // Handle navigating to listing detail
  const handleViewListing = () => {
    navigate(`/listing/${listing.id}`)
  }
  // Handle request quote button click
  const handleRequestQuote = (e: React.MouseEvent) => {
    } else {
      // Default behavior if no handler provided;
      navigate (`/request - quote?listing=${listing.id}`);
    }
  }
      {/* Image */}
            className="w-full h-full object-cover"
            onError={handleImageError}
          />;
          {listing && listing.featured && (;
            <Badge className="absolute top-2 right-2 bg-zion-purple text-white border-none">;
              Featured;
            </Badge>;
          )}
      {/* Content */}
      <div className={`flex flex-col justify-between ${isGrid ? 'p-4 flex-1' : 'p-4 flex-1'}`}>
        <div>
          {/* Category & Rating */}
          <div className="flex justify-between items-center mb-2">;
            <Badge variant="outline" className="bg-zion-blue-light/20 text-zion-slate-light border-zion-blue-light">;
              {listing && listing.category}
            </Badge>;
            {listing && listing.rating && (;
              <div className="flex items-center text-zion-slate-light">;
                <Star className="h-4 w-4 fill-zion-cyan text-zion-cyan mr-1" />;
                <span>{listing && listing.rating}</span>;
                {listing && listing.reviewCount && (;
                  <span className="text-xs ml-1">({listing && listing.reviewCount})</span>;
                )}
              </div>;
            )}
          {/* Title & Description */}
          <div onClick={handleViewListing} className="block">
            <h3 className="text-lg font-semibold text-white mb-2 hover:text-zion-cyan transition-colors">
              {listing.title}
            </h3>
          </div>
          <p className="text-sm text-zion-slate line-clamp-2 mb-4">
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
              </span>;
            )}
          </div>
          <div className="flex gap-2">
            <Button
              size="sm"
              onClick={(e) => {
                e.stopPropagation();

          {/* Title & Description */}
          <div on_click={handleViewListing} className="block">;
            <h3 className="text - lg font - semibold text - white mb - 2 hover:text - zion - cyan transition - colors">;
              {listing.title}
            </h3>;
          </div>;
          <p className="text - sm text - zion - slate line - clamp - 2 mb - 4">;
            {listing.description}
                  {tag}
                </span>;
              ))}
            </div>;
          )}
        {/* Footer with price and button */}
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-zion-blue-light">;
          <div className="text-sm font-medium">;
            {listing && listing.price !== null ? (;
              <div className="flex items-center text-zion-purple">;
                <DollarSign className="h-4 w-4 mr-1" />;
                {formatPrice()}
              </div>;
            ) : (;
              <span className="text-zion-slate-light">;
                {formatPrice()}


                e.stopPropagation(),
                navigate(`/listing/${listing.id}`)
              }}
              className="bg-zion-purple hover:bg-zion-purple-dark text-white"
            >
              Buy Now
            </Button>
            {onRequestQuote && (
          <div className="flex gap-2">;
            <Button
              size="sm" 
              onClick={(e) => {;
                e && e.stopPropagation();
                navigate(`/listing/${listing && listing.id}`);
              }}
              className="bg-zion-purple hover:bg-zion-purple-dark text-white";
            >;
              Buy Now;
            </Button>;
            {onRequestQuote && (;
              <Button
                size="sm"
                variant="outline"
                onClick={handleRequestQuote}
            )}
          </div>;
        </div>;
      </div>;
    </div>;
  );
          </p>;
          {/* Tags */}
          {listing.tags && listing.tags.length > 0 && (
            <div className="flex flex - wrap gap - 1 mb - 4">;
              {listing.tags.map ((tag, idx) => (
                <span;
                  key={idx}
                  className="text - xs text - zion - slate bg - zion - blue - light / 20 px - 2 py - 1 rounded - full";
                >;
                  {tag}
                </span>))}
            </div>)}
        </div>;
        {/* Footer with price and button */}
        <div className="flex items - center justify - between mt - auto pt - 3 border - t border - zion - blue - light">;
          <div className="text - sm font - medium">;
            {listing.price !== null ? (
              <div className="flex items - center text - zion - purple">;
                <DollarSign className="h - 4 w - 4 mr - 1" />;
                {format_price ()}
              </div>) : (
              <span className="text - zion - slate - light">;
                {format_price ()}
              </span>)}
          </div>;
          <div className="flex gap - 2">;
            <Button;
              size="sm";
              on_click={(e) => {
                e.stop_propagation ();
                navigate (`/listing/${listing.id}`);
              }}
              className="bg - zion - purple hover:bg - zion - purple - dark text - white";
            >;
              Buy Now;
            </Button>;
            {onRequestQuote && (
              <Button;
                size="sm";
                variant="outline";
                on_click={handleRequestQuote}
                className="border - zion - purple text - zion - purple hover:bg - zion - purple / 10";
              >;
                Request Quote;
              </Button>)}
          </div>;
        </div>;
      </div>;
    </div>);
}