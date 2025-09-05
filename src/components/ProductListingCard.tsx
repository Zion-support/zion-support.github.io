<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from 'react',
import { logDebug, logErrorToProduction } from '@/utils/productionLogger',
import { useRouter } from 'next/router',
import { Badge } from "@/components/ui/badge",
import { Button } from "@/components/ui/button",
import { ProductListing } from "@/types/listings",
import { DollarSign } from 'lucide-react'
import { RatingStars } from "@/components/RatingStars",
import { FavoriteButton } from "@/components/FavoriteButton",
import { useDispatch } from 'react-redux',
import type { AppDispatch } from '@/store',
import { addItem } from '@/store/cartSlice',
import { toast } from '@/hooks/use-toast',
import { useCurrency } from '@/hooks/useCurrency',
import Image from 'next/image', // Import next/image
=======
import React, { useState } from 'react';
import { logDebug, logErrorToProduction } from '@/utils/productionLogger';
import { useRouter } from 'next/router';
import { Badge } from &quot;@/components/ui/badge&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { ProductListing } from &quot;@/types/listings&quot;;
import { DollarSign } from 'lucide-react'
import { RatingStars } from &quot;@/components/RatingStars&quot;;
import { FavoriteButton } from &quot;@/components/FavoriteButton&quot;;
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '@/store';
import { addItem } from '@/store/cartSlice';
import { toast } from '@/hooks/use-toast';
import { useCurrency } from '@/hooks/useCurrency';
=======
import React, {_useState} from 'react';
import type {_AppDispatch} from '@/store';
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
import Image from 'next/image'; // Import next/image
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

<<<<<<< HEAD
interface ProductListingCardProps {
  listing: ProductListing,
  view?: 'grid' | 'list',
  onRequestQuote?: (id: string) => void,
  detailBasePath?: string
}

const ProductListingCardComponent = ({
  listing,
  view = 'grid',
  onRequestQuote,
  detailBasePath = '/marketplace/listing'
}: ProductListingCardProps) => {
  const isGrid = view === 'grid',
  const router = useRouter(),
  const [loading, setLoading] = useState(false),
  const [imageSrc, setImageSrc] = useState(
    listing.images && listing.images.length > 0 && listing.images[0]
    ? listing.images[0] 
    : '/placeholder.svg'
  ),
  const [imageError, setImageError] = useState(false),
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  const _stockStatus =
    listing.stock === undefined
      ? 'In stock'
      : listing.stock <= 0
      ? 'Out of stock'
      : listing.stock <= 5
      ? 'Low stock'
      : 'In stock',

  const _stockVariant =
    listing.stock === undefined
      ? 'success'
      : listing.stock <= 0
      ? 'destructive'
      : listing.stock <= 5
      ? 'warning'
      : 'success',
    
<<<<<<< HEAD
  const { formatPrice } = useCurrency(),

  const getPrice = () => {
<<<<<<< HEAD
    if (listing.price === null) return "Custom pricing",
    return formatPrice(listing.price)
  },
=======
    if (listing.price === null) return &quot;Custom pricing&quot;;
    return formatPrice(listing.price);
  };
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

  const handleImageError = () => {
    if (!imageError) { // Prevent infinite loops if placeholder also fails
      setImageSrc('/placeholder.svg'),
      setImageError(true)
    }
  },
=======
  const { formatPrice} = useCurrency();

  const _getPrice = () => {_if (listing.price === null) return "Custom pricing";
    return formatPrice(listing.price);};

  const _handleImageError = () => {_if (!imageError) { // Prevent infinite loops if placeholder also fails
      setImageSrc('/placeholder.svg');
      setImageError(true);}
  };
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  
  const _handleViewListing = () => {_// Debug logging for development
    if (process.env.NODE_ENV === 'development') {
<<<<<<< HEAD
      logDebug('[ProductCard] Navigating to:', { path: `${detailBasePath}/${listing.id}` }),
      logDebug('[ProductCard] Listing ID:', { id: listing.id }),
      logDebug('[ProductCard] Listing Title:', { title: listing.title })
    }
    
    // Validate listing ID exists before navigation
    if (!listing.id) {
      logErrorToProduction('[ProductCard] Missing listing ID, cannot navigate', new Error('Missing listing ID'), { component: 'ProductListingCard' }),
      toast({
<<<<<<< HEAD
        title: "Navigation Error",
        description: "Product information is incomplete",
        variant: "destructive"}),
      return
=======
        title: &quot;Navigation Error&quot;,
        description: &quot;Product information is incomplete&quot;,
        variant: &quot;destructive&quot;});
=======
      logDebug('[ProductCard] Navigating to:', _{ path: `${detailBasePath}/${_listing.id}` });
      logDebug('[ProductCard] Listing ID:', {_id: listing.id});
      logDebug('[ProductCard] Listing Title:', {_title: listing.title});
    }
    
    // Validate listing ID exists before navigation
    if (!listing.id) {_logErrorToProduction('[ProductCard] Missing listing ID, _cannot navigate', _new Error('Missing listing ID'), _{ component: 'ProductListingCard'});
      toast({_title: "Navigation Error", _description: "Product information is incomplete", _variant: "destructive"});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      return;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
    
<<<<<<< HEAD
    router.push(`${detailBasePath}/${listing.id}`)
  },

  const dispatch = useDispatch<AppDispatch>(),

  const addToCart = () => {
    setLoading(true),
    dispatch(
      addItem({ id: listing.id, title: listing.title, price: listing.price ?? 0 })
    ),
    toast.success(`1× ${listing.title} added`, {
      action: {
        label: 'View Cart',
        onClick: () => router.push('/cart')}}),
    setLoading(false)
  },
  
  const handleRequestQuote = (e: React.MouseEvent) => {
    e.preventDefault(),
    e.stopPropagation(),
    
    if (onRequestQuote) {
      onRequestQuote(listing.id)
    } else {
      router.push(`/request-quote?listing=${listing.id}`)
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }
  },
  
<<<<<<< HEAD
  const imageContainerClasses = isGrid ? 'h-48' : 'h-32 w-48',

  return (
    <div
      data-testid=&quot;equipment-link&quot;
      className={`bg-card/70 backdrop-blur-md border border-primary/10 sm:border-primary/20 rounded-lg overflow-hidden flex ${isGrid ? 'flex-col' : 'flex-row'} cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary hover:animate-glowing-border transition-all duration-300`}
      onClick={handleViewListing}
      tabIndex={0}
      role=&quot;button&quot;
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault(),
          handleViewListing()
        }
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      }}
    >
      {_/* Image */}
      <div
<<<<<<< HEAD
        className={isGrid ? 'block w-full' : 'block w-48 flex-shrink-0'}
        onClick={handleViewListing} // Keep existing onClick for navigation
        role=&quot;button&quot;
        tabIndex={-1} // Remove from tab order as parent is focusable
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault(),
            handleViewListing()
          }
=======
        className={_isGrid ? 'block w-full' : 'block w-48 flex-shrink-0'}
        onClick={_handleViewListing} // Keep existing onClick for navigation
        role="button"
        tabIndex={_-1} // Remove from tab order as parent is focusable
        onKeyDown={_(_e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleViewListing();}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        }}
      >
        <div className={_`relative ${imageContainerClasses}`}> {_/* Ensure this container has dimensions */}
          <Image
<<<<<<< HEAD
            src={imageSrc}
            alt={listing.title}
            fill={true}
            style={{ objectFit: 'cover' }}
            onError={handleImageError}
            priority={false} // Assuming these are not LCP images
            sizes={isGrid ? &quot;(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw&quot; : &quot;192px&quot;} // 192px is w-48
          />
          {listing.featured && (
            <Badge className=&quot;absolute top-2 right-2 bg-primary text-primary-foreground border-none&quot;>
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              Featured
            </Badge>
          )}
          {_stockStatus && (
            <Badge
              variant={stockVariant as any}
              className=&quot;absolute top-2 left-2&quot;
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
<<<<<<< HEAD
          {/* Category & Rating */}
          <div className=&quot;flex justify-between items-center mb-2&quot;>
            <Badge variant=&quot;outline&quot; className=&quot;bg-background text-foreground/80 border-primary/10&quot;>
              {listing.category}
=======
          {_/* Category & Rating */}
          <div className="flex justify-between items-center mb-2">
            <Badge variant="outline" className="bg-background text-foreground/80 border-primary/10">
              {_listing.category}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </Badge>
            {_listing.rating && (
              <RatingStars value={listing.rating} count={_listing.reviewCount} />
            )}
          </div>
          
<<<<<<< HEAD
          {/* Title & Description */}
          <div onClick={handleViewListing} className=&quot;block&quot;>
            {listing.uspHeadline && (
              <p className=&quot;text-primary font-semibold text-sm mb-1&quot;>
                {listing.uspHeadline}
              </p>
            )}
            <h3 className=&quot;font-semibold text-foreground mb-2 hover:text-primary transition-colors text-[clamp(1rem,2.5vw,1.125rem)]&quot;>
              {listing.title}
            </h3>
          </div>
          <p className=&quot;text-foreground/80 line-clamp-2 mb-4 text-[clamp(0.875rem,2vw,1rem)]&quot;>
            {listing.description}
          </p>
          
          {/* Tags */}
          {listing.tags && listing.tags.length > 0 && (
            <div className=&quot;flex flex-wrap gap-1 mb-4&quot;>
              {listing.tags.map((tag, idx) => (
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                <span 
                  key={idx} 
                  className=&quot;text-xs text-foreground/70 bg-background/50 px-2 py-1 rounded-full&quot;
                >
                  {_tag}
                </span>
              ))}
            </div>
          )}
        </div>
        
<<<<<<< HEAD
        {/* Footer with price and button */}
        <div className=&quot;flex items-center justify-between mt-auto pt-3 border-t border-primary/10 sm:border-primary/20&quot;>
          <div className=&quot;text-sm font-medium&quot;>
            {listing.price !== null ? (
              <div className=&quot;flex items-center text-primary&quot;>
                <DollarSign className=&quot;h-4 w-4 mr-1&quot; />
                {getPrice()}
              </div>
            ) : (
              <span className=&quot;text-foreground/80&quot;>
                {getPrice()}
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </span>
            )}
          </div>
          
          <div className=&quot;flex gap-2&quot;>
            <Button
<<<<<<< HEAD
              size="sm"
<<<<<<< HEAD
              className="bg-primary hover: bg-primary/80 text-primary-foreground"
=======
              size=&quot;sm&quot;
              className=&quot;bg-primary hover:bg-primary/80 text-primary-foreground&quot;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
              onClick={(e) => {
                e.stopPropagation(), // Prevent card click event
                addToCart()
              }}
              disabled={loading}
=======
              className="bg-primary hover:bg-primary/80 text-primary-foreground"
              onClick={_(_e) => {
                e.stopPropagation(); // Prevent card click event
                addToCart();}}
              disabled={_loading}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            >
              {_loading ? (
                <>
                  <svg className=&quot;animate-spin -ml-1 mr-3 h-5 w-5 text-white&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; fill=&quot;none&quot; viewBox=&quot;0 0 24 24&quot;>
                    <circle className=&quot;opacity-25&quot; cx=&quot;12&quot; cy=&quot;12&quot; r=&quot;10&quot; stroke=&quot;currentColor&quot; strokeWidth=&quot;4&quot;></circle>
                    <path className=&quot;opacity-75&quot; fill=&quot;currentColor&quot; d=&quot;M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z&quot;></path>
                  </svg>
                  Loading...
                </>
              ) : (
                &quot;Add to Cart&quot;
              )}
            </Button>
            
            <Button
<<<<<<< HEAD
              size="sm"
              variant="default"
<<<<<<< HEAD
              className="bg-green-600 hover: bg-green-700 text-white"
=======
              size=&quot;sm&quot;
              variant=&quot;default&quot;
              className=&quot;bg-green-600 hover:bg-green-700 text-white&quot;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
              onClick={(e) => {
                e.stopPropagation(), // Prevent card click event
                // Add to cart first, then redirect to checkout
                dispatch(
                  addItem({ id: listing.id, title: listing.title, price: listing.price ?? 0 })
                ),
                router.push('/checkout')
=======
              className="bg-green-600 hover:bg-green-700 text-white"
              onClick={_(_e) => {
                e.stopPropagation(); // Prevent card click event
                // Add to cart first, _then redirect to checkout
                dispatch(
                  addItem({ id: listing.id, _title: listing.title, _price: listing.price ?? 0})
                );
                router.push('/checkout');
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              }}
              disabled={_loading}
            >
              Buy Now
            </Button>
            
            {_onRequestQuote && (
              <Button 
                size=&quot;sm&quot;
                variant=&quot;outline&quot; 
                onClick={handleRequestQuote}
                className=&quot;border-primary text-primary hover:bg-primary/10 hover:text-primary-foreground&quot;
              >
                Request Quote
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
},

<<<<<<< HEAD
export const ProductListingCard = React.memo(ProductListingCardComponent),
ProductListingCard.displayName = 'ProductListingCard',
=======
export const _ProductListingCard = React.memo(ProductListingCardComponent);
ProductListingCard.displayName = 'ProductListingCard';
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
