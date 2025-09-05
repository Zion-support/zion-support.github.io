<<<<<<< HEAD
<<<<<<< HEAD
import { useNavigate } from "react-router-dom",
import { Badge } from "@/components/ui/badge",
import { Button } from "@/components/ui/button",
import { ProductListing } from "@/types/listings",
import { Star, DollarSign } from "lucide-react",
=======
import { useNavigate } from &quot;react-router-dom&quot;;
import { Badge } from &quot;@/components/ui/badge&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { ProductListing } from &quot;@/types/listings&quot;;
import { Star, DollarSign } from &quot;lucide-react&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

interface ProductListingCardProps {
  listing: ProductListing,
  view?: 'grid' | 'list',
  onRequestQuote?: (id: string) => void
}

export function ProductListingCard({ 
  listing, 
  view = 'grid',
  onRequestQuote
}: ProductListingCardProps) {
  const isGrid = view === 'grid',
  const navigate = useNavigate(),
  
  // Get the first image or use a placeholder
  const imageUrl = listing.images && listing.images.length > 0 
    ? listing.images[0] 
    : '/placeholder.svg',
    
  // Format price display
  const formatPrice = () => {
<<<<<<< HEAD
    if (listing.price === null) return "Custom pricing",
    return `${listing.currency}${listing.price.toLocaleString()}`
  },
=======
    if (listing.price === null) return &quot;Custom pricing&quot;;
    return `${listing.currency}${listing.price.toLocaleString()}`;
  };
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

  // Handle image loading errors
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = '/placeholder.svg'
  },
  
  // Handle navigating to listing detail
  const handleViewListing = () => {
    navigate(`/listing/${listing.id}`)
  },
  
  // Handle request quote button click
  const handleRequestQuote = (e: React.MouseEvent) => {
    e.preventDefault(),
    e.stopPropagation(),
    
    if (onRequestQuote) {
      onRequestQuote(listing.id)
    } else {
      // Default behavior if no handler provided
      navigate(`/request-quote?listing=${listing.id}`)
=======
import { useNavigate } from "react-router-dom",;
import { Badge } from "@/components/ui/badge",;
import { Button } from "@/components/ui/button",;
import { ProductListing } from "@/types/listings",;
import { Star, DollarSign } from "lucide-react",;
interface ProductListingCardProps {;
  listing: ProductListing,;
  view?: 'grid' | 'list',;
  onRequestQuote?: (id: string) => void;
}
;
export function ProductListingCard({;
  listing,;
  view = 'grid',;
  onRequestQuote;
}: ProductListingCardProps) {;
  const isGrid = view === 'grid',;
  const navigate = useNavigate(),;
  // Get the first image or use a placeholder;
  const imageUrl = listing.images && listing.images.length > 0;
    ? listing.images[0];
    : '/placeholder.svg',;
  // Format price display;
  const formatPrice = () => {;
    if (listing.price === null) return "Custom pricing",;
    return `${listing.currency}${listing.price.toLocaleString()}`;
  },;
  // Handle image loading errors;
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {;
    e.currentTarget.src = '/placeholder.svg';
  },;
  // Handle navigating to listing detail;
  const handleViewListing = () => {;
    navigate(`/listing/${listing.id}`);
  },;
  // Handle request quote button click;
  const handleRequestQuote = (e: React.MouseEvent) => {;
    e.preventDefault(),;
    e.stopPropagation(),;
    if (onRequestQuote) {;
      onRequestQuote(listing.id);
    } else {;
      // Default behavior if no handler provided;
      navigate(`/request-quote?listing=${listing.id}`);
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
    }
  };
  return (;
    <div className={`bg-zion-blue-dark border border-zion-blue-light rounded-lg overflow-hidden flex ${isGrid ? 'flex-col' : 'flex-row'} cursor-pointer`} onClick={handleViewListing}>;
      {/* Image */}
      <div className={isGrid ? 'block w-full' : 'block w-1/3'} onClick={handleViewListing}>;
        <div className={`relative ${isGrid ? 'h-48' : 'h-full'}`}>;
          <img;
            src={imageUrl} ;
            alt={listing.title}
<<<<<<< HEAD
            className=&quot;w-full h-full object-cover&quot;
            onError={handleImageError}
          />
          {listing.featured && (
            <Badge className=&quot;absolute top-2 right-2 bg-zion-purple text-white border-none&quot;>
              Featured
            </Badge>
=======
            className="w-full h-full object-cover";
            onError={handleImageError}
          />;
          {listing.featured && (;
            <Badge className="absolute top-2 right-2 bg-zion-purple text-white border-none">;
              Featured;
            </Badge>;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
          )}
        </div>;
      </div>;
      {/* Content */}
      <div className={`flex flex-col justify-between ${isGrid ? 'p-4 flex-1' : 'p-4 flex-1'}`}>;
        <div>;
          {/* Category & Rating */}
<<<<<<< HEAD
          <div className=&quot;flex justify-between items-center mb-2&quot;>
            <Badge variant=&quot;outline&quot; className=&quot;bg-zion-blue-light/20 text-zion-slate-light border-zion-blue-light&quot;>
              {listing.category}
            </Badge>
            {listing.rating && (
              <div className=&quot;flex items-center text-zion-slate-light&quot;>
                <Star className=&quot;h-4 w-4 fill-zion-cyan text-zion-cyan mr-1&quot; />
                <span>{listing.rating}</span>
                {listing.reviewCount && (
                  <span className=&quot;text-xs ml-1&quot;>({listing.reviewCount})</span>
=======
          <div className="flex justify-between items-center mb-2">;
            <Badge variant="outline" className="bg-zion-blue-light/20 text-zion-slate-light border-zion-blue-light">;
              {listing.category}
            </Badge>;
            {listing.rating && (;
              <div className="flex items-center text-zion-slate-light">;
                <Star className="h-4 w-4 fill-zion-cyan text-zion-cyan mr-1" />;
                <span>{listing.rating}</span>;
                {listing.reviewCount && (;
                  <span className="text-xs ml-1">({listing.reviewCount})</span>;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
                )}
              </div>;
            )}
          </div>;
          {/* Title & Description */}
<<<<<<< HEAD
          <div onClick={handleViewListing} className=&quot;block&quot;>
            <h3 className=&quot;text-lg font-semibold text-white mb-2 hover:text-zion-cyan transition-colors&quot;>
              {listing.title}
            </h3>
          </div>
          <p className=&quot;text-sm text-zion-slate line-clamp-2 mb-4&quot;>
=======
          <div onClick={handleViewListing} className="block">;
            <h3 className="text-lg font-semibold text-white mb-2 hover:text-zion-cyan transition-colors">;
              {listing.title}
            </h3>;
          </div>;
          <p className="text-sm text-zion-slate line-clamp-2 mb-4">;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
            {listing.description}
          </p>;
          {/* Tags */}
<<<<<<< HEAD
          {listing.tags && listing.tags.length > 0 && (
            <div className=&quot;flex flex-wrap gap-1 mb-4&quot;>
              {listing.tags.map((tag, idx) => (
                <span 
                  key={idx} 
                  className=&quot;text-xs text-zion-slate bg-zion-blue-light/20 px-2 py-1 rounded-full&quot;
                >
=======
          {listing.tags && listing.tags.length > 0 && (;
            <div className="flex flex-wrap gap-1 mb-4">;
              {listing.tags.map((tag, idx) => (;
                <span;
                  key={idx} ;
                  className="text-xs text-zion-slate bg-zion-blue-light/20 px-2 py-1 rounded-full";
                >;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
                  {tag}
                </span>;
              ))}
            </div>;
          )}
        </div>;
        {/* Footer with price and button */}
<<<<<<< HEAD
        <div className=&quot;flex items-center justify-between mt-auto pt-3 border-t border-zion-blue-light&quot;>
          <div className=&quot;text-sm font-medium&quot;>
            {listing.price !== null ? (
              <div className=&quot;flex items-center text-zion-purple&quot;>
                <DollarSign className=&quot;h-4 w-4 mr-1&quot; />
                {formatPrice()}
              </div>
            ) : (
              <span className=&quot;text-zion-slate-light&quot;>
=======
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-zion-blue-light">;
          <div className="text-sm font-medium">;
            {listing.price !== null ? (;
              <div className="flex items-center text-zion-purple">;
                <DollarSign className="h-4 w-4 mr-1" />;
                {formatPrice()}
              </div>;
            ) : (;
              <span className="text-zion-slate-light">;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
                {formatPrice()}
              </span>;
            )}
<<<<<<< HEAD
          </div>
          
          <div className=&quot;flex gap-2&quot;>
            <Button 
              size=&quot;sm&quot; 
              onClick={(e) => {
                e.stopPropagation(),
                navigate(`/listing/${listing.id}`)
              }}
              className=&quot;bg-zion-purple hover:bg-zion-purple-dark text-white&quot;
            >
              Buy Now
            </Button>
            
            {onRequestQuote && (
              <Button 
                size=&quot;sm&quot;
                variant=&quot;outline&quot; 
                onClick={handleRequestQuote}
                className=&quot;border-zion-purple text-zion-purple hover:bg-zion-purple/10&quot;
              >
                Request Quote
              </Button>
=======
          </div>;
          <div className="flex gap-2">;
            <Button;
              size="sm";
              onClick={(e) => {;
                e.stopPropagation();
                navigate(`/listing/${listing.id}`);
              }}
              className="bg-zion-purple hover:bg-zion-purple-dark text-white";
            >;
              Buy Now;
            </Button>;
            {onRequestQuote && (;
              <Button;
                size="sm";
                variant="outline";
                onClick={handleRequestQuote}
                className="border-zion-purple text-zion-purple hover:bg-zion-purple/10";
              >;
                Request Quote;
              </Button>;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
            )}
          </div>;
        </div>;
      </div>;
    </div>;
  );
}