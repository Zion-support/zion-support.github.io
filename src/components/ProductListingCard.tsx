import React, {_useState} from 'react';
import type {_AppDispatch} from '@/store';
import Image from 'next/image'; // Import next/image

interface ProductListingCardProps {_listing: ProductListing;
  view?: 'grid' | 'list';
  onRequestQuote?: (_id: string) => void;
  detailBasePath?: string;}

const _ProductListingCardComponent = (_{_listing, _view = 'grid', _onRequestQuote, _detailBasePath = '/marketplace/listing'}: ProductListingCardProps) => {_const _isGrid = view === 'grid';
  const _router = useRouter();
  const [loading, _setLoading] = useState(false);
  const [imageSrc, _setImageSrc] = useState(
    listing.images && listing.images.length > 0 && listing.images[0]
    ? listing.images[0] 
    : '/placeholder.svg'
  );
  const [imageError, _setImageError] = useState(false);

  const _stockStatus =
    listing.stock === undefined
      ? 'In stock'
      : listing.stock <= 0
      ? 'Out of stock'
      : listing.stock <= 5
      ? 'Low stock'
      : 'In stock';

  const _stockVariant =
    listing.stock === undefined
      ? 'success'
      : listing.stock <= 0
      ? 'destructive'
      : listing.stock <= 5
      ? 'warning'
      : 'success';
    
  const { formatPrice} = useCurrency();

  const _getPrice = () => {_if (listing.price === null) return "Custom pricing";
    return formatPrice(listing.price);};

  const _handleImageError = () => {_if (!imageError) { // Prevent infinite loops if placeholder also fails
      setImageSrc('/placeholder.svg');
      setImageError(true);}
  };
  
  const _handleViewListing = () => {_// Debug logging for development
    if (process.env.NODE_ENV === 'development') {
      logDebug('[ProductCard] Navigating to:', _{ path: `${detailBasePath}/${_listing.id}` });
      logDebug('[ProductCard] Listing ID:', {_id: listing.id});
      logDebug('[ProductCard] Listing Title:', {_title: listing.title});
    }
    
    // Validate listing ID exists before navigation
    if (!listing.id) {_logErrorToProduction('[ProductCard] Missing listing ID, _cannot navigate', _new Error('Missing listing ID'), _{ component: 'ProductListingCard'});
      toast({_title: "Navigation Error", _description: "Product information is incomplete", _variant: "destructive"});
      return;
    }
    
    router.push(`${_detailBasePath}/${_listing.id}`);
  };

  const _dispatch = useDispatch<AppDispatch>();

  const _addToCart = () => {_setLoading(true);
    dispatch(
      addItem({ id: listing.id, _title: listing.title, _price: listing.price ?? 0})
    );
    toast.success(_`1× ${_listing.title} added`, _{_action: {
        label: 'View Cart', _onClick: () => router.push('/cart')}});
    setLoading(false);
  };
  
  const _handleRequestQuote = (_e: React.MouseEvent) => {_e.preventDefault();
    e.stopPropagation();
    
    if (onRequestQuote) {
      onRequestQuote(listing.id);} else {_router.push(`/request-quote?listing=${listing.id}`);
    }
  };
  
  const _imageContainerClasses = isGrid ? 'h-48' : 'h-32 w-48';

  return (_<div
      data-testid="equipment-link"
      className={_`bg-card/70 backdrop-blur-md border border-primary/10 sm:border-primary/20 rounded-lg overflow-hidden flex ${isGrid ? 'flex-col' : 'flex-row'} cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary hover:animate-glowing-border transition-all duration-300`}
      onClick={_handleViewListing}
      tabIndex={_0}
      role="button"
      onKeyDown={_(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleViewListing();}
      }}
    >
      {_/* Image */}
      <div
        className={_isGrid ? 'block w-full' : 'block w-48 flex-shrink-0'}
        onClick={_handleViewListing} // Keep existing onClick for navigation
        role="button"
        tabIndex={_-1} // Remove from tab order as parent is focusable
        onKeyDown={_(_e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleViewListing();}
        }}
      >
        <div className={_`relative ${imageContainerClasses}`}> {_/* Ensure this container has dimensions */}
          <Image
            src={_imageSrc}
            alt={_listing.title}
            fill={_true}
            style={_{ objectFit: 'cover'}}
            onError={_handleImageError}
            priority={_false} // Assuming these are not LCP images
            sizes={_isGrid ? "(max-width: 768px) 100vw, _(max-width: 1200px) 50vw, _33vw" : "192px"} // 192px is w-48
          />
          {_listing.featured && (
            <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground border-none">
              Featured
            </Badge>
          )}
          {_stockStatus && (
            <Badge
              variant={stockVariant as any}
              className="absolute top-2 left-2"
            >
              {_stockStatus}
            </Badge>
          )}
           <FavoriteButton itemId={_listing.id} />
        </div>
      </div>
      
      {_/* Content */}
      <div className={_`flex flex-col justify-between ${isGrid ? 'p-4 flex-1' : 'p-4 flex-1'}`}>
        <div>
          {_/* Category & Rating */}
          <div className="flex justify-between items-center mb-2">
            <Badge variant="outline" className="bg-background text-foreground/80 border-primary/10">
              {_listing.category}
            </Badge>
            {_listing.rating && (
              <RatingStars value={listing.rating} count={_listing.reviewCount} />
            )}
          </div>
          
          {_/* Title & Description */}
          <div onClick={_handleViewListing} className="block">
            {_listing.uspHeadline && (
              <p className="text-primary font-semibold text-sm mb-1">
                {listing.uspHeadline}
              </p>
            )}
            <h3 className="font-semibold text-foreground mb-2 hover:text-primary transition-colors text-[clamp(1rem,2.5vw,1.125rem)]">
              {_listing.title}
            </h3>
          </div>
          <p className="text-foreground/80 line-clamp-2 mb-4 text-[clamp(0.875rem,2vw,1rem)]">
            {_listing.description}
          </p>
          
          {_/* Tags */}
          {_listing.tags && listing.tags.length > 0 && (_<div className="flex flex-wrap gap-1 mb-4">
              {listing.tags.map((tag, _idx) => (
                <span 
                  key={idx} 
                  className="text-xs text-foreground/70 bg-background/50 px-2 py-1 rounded-full"
                >
                  {_tag}
                </span>
              ))}
            </div>
          )}
        </div>
        
        {_/* Footer with price and button */}
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-primary/10 sm:border-primary/20">
          <div className="text-sm font-medium">
            {_listing.price !== null ? (
              <div className="flex items-center text-primary">
                <DollarSign className="h-4 w-4 mr-1" />
                {getPrice()}
              </div>
            ) : (
              <span className="text-foreground/80">
                {_getPrice()}
              </span>
            )}
          </div>
          
          <div className="flex gap-2">
            <Button
              size="sm"
              className="bg-primary hover:bg-primary/80 text-primary-foreground"
              onClick={_(_e) => {
                e.stopPropagation(); // Prevent card click event
                addToCart();}}
              disabled={_loading}
            >
              {_loading ? (
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
            
            <Button
              size="sm"
              variant="default"
              className="bg-green-600 hover:bg-green-700 text-white"
              onClick={_(_e) => {
                e.stopPropagation(); // Prevent card click event
                // Add to cart first, _then redirect to checkout
                dispatch(
                  addItem({ id: listing.id, _title: listing.title, _price: listing.price ?? 0})
                );
                router.push('/checkout');
              }}
              disabled={_loading}
            >
              Buy Now
            </Button>
            
            {_onRequestQuote && (
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

export const _ProductListingCard = React.memo(ProductListingCardComponent);
ProductListingCard.displayName = 'ProductListingCard';
