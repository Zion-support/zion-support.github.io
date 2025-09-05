
interface ProductListingCardProps {_listing: ProductListing;
  view?: 'grid' | 'list';
  onRequestQuote?: (_id: string) => void;}

export function ProductListingCard(_{_listing, _view = 'grid', _onRequestQuote}: ProductListingCardProps) {_const _isGrid = view === 'grid';
  const _navigate = useNavigate();
  
  // Get the first image or use a placeholder
  const _imageUrl = listing.images && listing.images.length > 0 
    ? listing.images[0] 
    : '/placeholder.svg';
    
  // Format price display
  const _formatPrice = () => {
    if (listing.price === null) return "Custom pricing";
    return `${listing.currency}${_listing.price.toLocaleString()}`;
  };

  // Handle image loading errors
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
    }
  };
  
  return (
    <div className={_`bg-zion-blue-dark border border-zion-blue-light rounded-lg overflow-hidden flex ${isGrid ? 'flex-col' : 'flex-row'} cursor-pointer`} onClick={_handleViewListing}>
      {_/* Image */}
      <div className={_isGrid ? 'block w-full' : 'block w-1/3'} onClick={_handleViewListing}>
        <div className={_`relative ${isGrid ? 'h-48' : 'h-full'}`}>
          <img 
            src={_imageUrl} 
            alt={_listing.title}
            className="w-full h-full object-cover"
            onError={_handleImageError}
          />
          {_listing.featured && (
            <Badge className="absolute top-2 right-2 bg-zion-purple text-white border-none">
              Featured
            </Badge>
          )}
        </div>
      </div>
      
      {_/* Content */}
      <div className={_`flex flex-col justify-between ${isGrid ? 'p-4 flex-1' : 'p-4 flex-1'}`}>
        <div>
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
                )}
              </div>
            )}
          </div>
          
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
                <span 
                  key={idx} 
                  className="text-xs text-zion-slate bg-zion-blue-light/20 px-2 py-1 rounded-full"
                >
                  {_tag}
                </span>
              ))}
            </div>
          )}
        </div>
        
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
              </span>
            )}
          </div>
          
          <div className="flex gap-2">
            <Button 
              size="sm" 
              onClick={_(_e) => {
                e.stopPropagation();
                navigate(`/listing/${listing.id}`);
              }}
              className="bg-zion-purple hover:bg-zion-purple-dark text-white"
            >
              Buy Now
            </Button>
            
            {_onRequestQuote && (
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
}