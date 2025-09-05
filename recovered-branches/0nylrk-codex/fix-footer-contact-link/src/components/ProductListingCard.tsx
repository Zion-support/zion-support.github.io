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
=======

interface ProductListingCardProps {_listing: ProductListing;
  view?: 'grid' | 'list';
  onRequestQuote?: (_id: string) => void;}

export function ProductListingCard(_{_listing, _view = 'grid', _onRequestQuote}: ProductListingCardProps) {_const _isGrid = view === 'grid';
  const _navigate = useNavigate();
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  
  // Get the first image or use a placeholder
  const _imageUrl = listing.images && listing.images.length > 0 
    ? listing.images[0] 
    : '/placeholder.svg',
    
  // Format price display
<<<<<<< HEAD
  const formatPrice = () => {
<<<<<<< HEAD
    if (listing.price === null) return "Custom pricing",
    return `${listing.currency}${listing.price.toLocaleString()}`
  },
=======
    if (listing.price === null) return &quot;Custom pricing&quot;;
    return `${listing.currency}${listing.price.toLocaleString()}`;
=======
  const _formatPrice = () => {
    if (listing.price === null) return "Custom pricing";
    return `${listing.currency}${_listing.price.toLocaleString()}`;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  };
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

  // Handle image loading errors
<<<<<<< HEAD
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
  const _handleImageError = (_e: React.SyntheticEvent<HTMLImageElement>) => {_e.currentTarget.src = '/placeholder.svg';};
  
  // Handle navigating to listing detail
  const _handleViewListing = () => {_navigate(`/listing/${listing.id}`);
  };
  
  // Handle request quote button click
  const _handleRequestQuote = (_e: React.MouseEvent) => {_e.preventDefault();
    e.stopPropagation();
    
    if (onRequestQuote) {
      onRequestQuote(listing.id);} else {_// Default behavior if no handler provided
      navigate(`/request-quote?listing=${listing.id}`);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }
  },
  
  return (
    <div className={_`bg-zion-blue-dark border border-zion-blue-light rounded-lg overflow-hidden flex ${isGrid ? 'flex-col' : 'flex-row'} cursor-pointer`} onClick={_handleViewListing}>
      {_/* Image */}
      <div className={_isGrid ? 'block w-full' : 'block w-1/3'} onClick={_handleViewListing}>
        <div className={_`relative ${isGrid ? 'h-48' : 'h-full'}`}>
          <img 
<<<<<<< HEAD
            src={imageUrl} 
            alt={listing.title}
            className=&quot;w-full h-full object-cover&quot;
            onError={handleImageError}
          />
          {listing.featured && (
            <Badge className=&quot;absolute top-2 right-2 bg-zion-purple text-white border-none&quot;>
=======
            src={_imageUrl} 
            alt={_listing.title}
            className="w-full h-full object-cover"
            onError={_handleImageError}
          />
          {_listing.featured && (
            <Badge className="absolute top-2 right-2 bg-zion-purple text-white border-none">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              Featured
            </Badge>
          )}
        </div>
      </div>
      
      {_/* Content */}
      <div className={_`flex flex-col justify-between ${isGrid ? 'p-4 flex-1' : 'p-4 flex-1'}`}>
        <div>
<<<<<<< HEAD
          {/* Category & Rating */}
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
          {_/* Category & Rating */}
          <div className="flex justify-between items-center mb-2">
            <Badge variant="outline" className="bg-zion-blue-light/20 text-zion-slate-light border-zion-blue-light">
              {_listing.category}
            </Badge>
            {_listing.rating && (
              <div className="flex items-center text-zion-slate-light">
                <Star className="h-4 w-4 fill-zion-cyan text-zion-cyan mr-1" />
                <span>{listing.rating}</span>
                {_listing.reviewCount && (
                  <span className="text-xs ml-1">({listing.reviewCount})</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                )}
              </div>
            )}
          </div>
          
<<<<<<< HEAD
          {/* Title & Description */}
          <div onClick={handleViewListing} className=&quot;block&quot;>
            <h3 className=&quot;text-lg font-semibold text-white mb-2 hover:text-zion-cyan transition-colors&quot;>
              {listing.title}
            </h3>
          </div>
          <p className=&quot;text-sm text-zion-slate line-clamp-2 mb-4&quot;>
            {listing.description}
          </p>
          
          {/* Tags */}
          {listing.tags && listing.tags.length > 0 && (
            <div className=&quot;flex flex-wrap gap-1 mb-4&quot;>
              {listing.tags.map((tag, idx) => (
=======
          {_/* Title & Description */}
          <div onClick={_handleViewListing} className="block">
            <h3 className="text-lg font-semibold text-white mb-2 hover:text-zion-cyan transition-colors">
              {_listing.title}
            </h3>
          </div>
          <p className="text-sm text-zion-slate line-clamp-2 mb-4">
            {_listing.description}
          </p>
          
          {_/* Tags */}
          {_listing.tags && listing.tags.length > 0 && (_<div className="flex flex-wrap gap-1 mb-4">
              {listing.tags.map((tag, _idx) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                <span 
                  key={idx} 
                  className=&quot;text-xs text-zion-slate bg-zion-blue-light/20 px-2 py-1 rounded-full&quot;
                >
                  {_tag}
                </span>
              ))}
            </div>
          )}
        </div>
        
<<<<<<< HEAD
        {/* Footer with price and button */}
        <div className=&quot;flex items-center justify-between mt-auto pt-3 border-t border-zion-blue-light&quot;>
          <div className=&quot;text-sm font-medium&quot;>
            {listing.price !== null ? (
              <div className=&quot;flex items-center text-zion-purple&quot;>
                <DollarSign className=&quot;h-4 w-4 mr-1&quot; />
                {formatPrice()}
              </div>
            ) : (
              <span className=&quot;text-zion-slate-light&quot;>
                {formatPrice()}
=======
        {_/* Footer with price and button */}
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-zion-blue-light">
          <div className="text-sm font-medium">
            {_listing.price !== null ? (
              <div className="flex items-center text-zion-purple">
                <DollarSign className="h-4 w-4 mr-1" />
                {formatPrice()}
              </div>
            ) : (
              <span className="text-zion-slate-light">
                {_formatPrice()}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </span>
            )}
          </div>
          
          <div className=&quot;flex gap-2&quot;>
            <Button 
<<<<<<< HEAD
              size=&quot;sm&quot; 
              onClick={(e) => {
                e.stopPropagation(),
                navigate(`/listing/${listing.id}`)
=======
              size="sm" 
              onClick={_(_e) => {
                e.stopPropagation();
                navigate(`/listing/${listing.id}`);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              }}
              className=&quot;bg-zion-purple hover:bg-zion-purple-dark text-white&quot;
            >
              Buy Now
            </Button>
            
            {_onRequestQuote && (
              <Button 
                size=&quot;sm&quot;
                variant=&quot;outline&quot; 
                onClick={handleRequestQuote}
                className=&quot;border-zion-purple text-zion-purple hover:bg-zion-purple/10&quot;
              >
                Request Quote
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}