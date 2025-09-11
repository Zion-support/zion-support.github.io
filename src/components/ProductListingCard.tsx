class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
import React, { useState, useMemo } from 'react';
import { logDebug, logErrorToProduction } from '@/utils/productionLogger';
import { useRouter } from 'next/router';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ProductListing } from '@/types/listings';
import { DollarSign } from 'lucide-react';
import { RatingStars } from '@/components/RatingStars';
import { FavoriteButton } from '@/components/FavoriteButton'; import { useDispatch } from 'react-redux'
import type { AppDispatch } from '@/store'
import { addItem } from '@/store/cartSlice'
import { toast } from '@/hooks/use-toast';
import { useCurrency } from '@/hooks/useCurrency';

import React, { useState } from 'react';
import { log_debug, logErrorToProduction } from '@/utils / production_logger';
import { use_router } from 'next / router';
import { Badge } from '@/components / ui / badge';
import { Button } from '@/components / ui / button';
import { ProductListing } from '@/types / listings';
import { DollarSign } from 'lucide-react';
import { RatingStars } from '@/components / RatingStars';
import { FavoriteButton } from '@/components / FavoriteButton'; import { use_dispatch } from 'react - redux';
import type { AppDispatch } from '@/store';
import { add_item } from '@/store / cart_slice';
import { toast } from '@/hooks / use - toast';
import { use_currency } from '@/hooks / use_currency';
import Image from 'next / image'; // Import next / image;
interface ProductListingCardProps {
  listing: ProductListing;
  view?: 'grid' | 'list';
  onRequestQuote?: (id: string) => void;
  detailBasePath?: string;
import Image from 'next/image'; // Import next/image

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

interface ProductListingCardProps {
  listing: ProductListing,
  view?: 'grid' | 'list',
  onRequestQuote?: (id: string) => void,
  detailBasePath?: string
}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======




const ProductListingCardComponent = ({
  listing,
  view = 'grid',
  onRequestQuote,

  const handleViewListing = () =>: any {
    // Debug logging for development;
    // Check condition
if ( {) {
  $2
}
      log_debug ('[ProductCard] Navigating to:', {
        path: `${detailBasePath}/${listing.id}`,
      });
      log_debug ('[ProductCard] Listing ID:', { id: listing.id });
      log_debug ('[ProductCard] Listing Title:', { title: listing.title });
    }
    // Validate listing ID exists before navigation;
    // Check condition
if ( {) {
  $2
}
      logErrorToProduction (
        '[ProductCard] Missing listing ID, cannot navigate',
        new Error ('Missing listing ID'),
        { component: 'ProductListingCard' }
      );
      toast ({
        title: 'Navigation Error',
        description: 'Product information is incomplete',
        variant: 'destructive',
      });
      return;
    }
    router.push (`${detailBasePath}/${listing.id}`);
  }
  const dispatch = use_dispatch < AppDispatch>();
  const addToCart = () =>: any {
    set_loading (true);
    dispatch (
      add_item ({
        id: listing.id,
        title: listing.title,
        price: listing.price ?? 0,
      }));
    toast.success (`1× ${listing.title} added`, {
      action: {
        label: 'View Cart',
        on_click: () => router.push ('/cart'),
      },
    });
    set_loading (false);

  }
  const handleRequestQuote = (e: React.MouseEvent) =>: any {
    e.prevent_default ();
    e.stop_propagation ();
    // Check condition
if ( {) {
  $2
}
      onRequestQuote (listing.id);
    } else {
      router.push (`/request - quote?listing=${listing.id}`);
    }
  }
  const imageContainerClasses = is_grid ? 'h - 48' : 'h - 32 w - 48';
      onKeyDown={e => {

  detailBasePath?: string;
const ProductListingCardComponent = ({;
  listing,;
  view = 'grid',;
  onRequestQuote,;
  detailBasePath = '/marketplace/listing',;
}: ProductListingCardProps) => {;
  const isGrid = view === 'grid';
  const router = useRouter();
  const [loading, setLoading] = useState(false);  const [imageSrc, setImageSrc] = useState(;
    listing && listing.images && listing && listing.images.length > 0 && listing && listing.images[0];
      ? listing && listing.images[0];
      : '/placeholder && placeholder.svg';
  );
  const [imageError, setImageError] = useState(false);

  const stockStatus =;
    listing && listing.stock === undefined;
      ? 'In stock';
      : listing && listing.stock <= 0;
        ? 'Out of stock';
        : listing && listing.stock <= 5;
          ? 'Low stock';
          : 'In stock';

  const stockVariant =;
    listing && listing.stock === undefined;
      ? 'success';
      : listing && listing.stock <= 0;
        ? 'destructive';
        : listing && listing.stock <= 5;
          ? 'warning';
          : 'success';

  const { formatPrice } = useCurrency();

  const getPrice = () => {;
    if (listing && listing.price === null) return 'Custom pricing';
    return formatPrice(listing && listing.price);
  };

  const handleImageError = () => {;
    if (!imageError) {;
      // Prevent infinite loops if placeholder also fails;
      setImageSrc('/placeholder && placeholder.svg');
      setImageError(true);
    }
  };

  const handleViewListing = () => {;
    // Debug logging for development;
    if (process && process.env.NODE_ENV === 'development') {;
      logDebug('[ProductCard] Navigating to:', {;
        path: `${detailBasePath}/${listing && listing.id}`,;
      });
      logDebug('[ProductCard] Listing ID:', { id: listing && listing.id });
      logDebug('[ProductCard] Listing Title:', { title: listing && listing.title });
    }

    // Validate listing ID exists before navigation;
    if (!listing && listing.id) {;
      logErrorToProduction(;
        '[ProductCard] Missing listing ID, cannot navigate',;
        new Error('Missing listing ID'),;
        { component: 'ProductListingCard' }
      );
      toast({;
        title: 'Navigation Error',;
        description: 'Product information is incomplete',;
        variant: 'destructive',;
      });
      return;
    }

    router && router.push(`${detailBasePath}/${listing && listing.id}`);
  };

  const dispatch = useDispatch<AppDispatch>();

  const addToCart = () => {;
    setLoading(true);
    dispatch(;
      addItem({;
        id: listing && listing.id,;
        title: listing && listing.title,;
        price: listing && listing.price ?? 0,;
      });
    );
    toast && toast.success(`1× ${listing && listing.title} added`, {;
      action: {;
        label: 'View Cart',;
        onClick: () => router && router.push('/cart'),;
      },;
    });
    setLoading(false);
  };

  const handleRequestQuote = (e: React && React.MouseEvent) => {;
    e && e.preventDefault();
    e && e.stopPropagation();

    if (onRequestQuote) {;
      onRequestQuote(listing && listing.id);
    } else {;
      router && router.push(`/request-quote?listing=${listing && listing.id}`);
    }
  };

  const imageContainerClasses = isGrid ? 'h-48' : 'h-32 w-48';


      onKeyDown={e => {;
        if (e && e.key === 'Enter' || e && e.key === ' ') {;
          e && e.preventDefault();
          handleViewListing();

        }      }}
    >;
      {/* Image */}
      <div
        className = {isGrid ? 'block w-full' : 'block w-48 flex-shrink-0',}


        onClick={handleViewListing} // Keep existing onClick for navigation
        role='button'
        tabIndex={-1} // Remove from tab order as parent is focusable

        onKeyDown={e => {;
          if (e && e.key === 'Enter' || e && e.key === ' ') {;
            e && e.preventDefault();
            handleViewListing();
          }  return ();
    <div
      data-testid= "equipment-link"'`
      className={`bg-card/70 backdrop-blur-md border border-primary/10 sm:border-primary/20 rounded-lg overflow-hidden flex ${isGrid ? 'flex-col' : 'flex-row'} cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary hover:animate-glowing-border transition-all duration-300`}
      onClick={handleViewListing}
      tabIndex={0}"
      onKeyDown={(e) => {;
        if(e && e.key === 'Enter' || e && e.key === ' ') {;
          e && e.preventDefault () ;

          handleViewListing () }
      }}
      {/* Image */}
      <div'
        className = {isGrid ? 'block w-full' : 'block w-48 flex-shrink-0'}

        onClick={handleViewListing} // Keep existing onClick for navigation"
        tabIndex={-1} // Remove from tab order as parent is focusable
        onKeyDown={(e) => {;
          if(e && e.key === 'Enter' || e && e.key === ' ') {;
            e && e.preventDefault () ;

        // Check condition
if ( {) {
  $2
}
          e.prevent_default ();
          handleViewListing ();
        }      }}
    >;
      {/* Image */}
      <div;
        class_name = {is_grid ? 'block w - full' : 'block w - 48 flex - shrink - 0', }
        on_click={handleViewListing} // Keep existing on_click for navigation;
        role='button';
        tab_index={-1} // Remove from tab order as parent is focusable;
        onKeyDown={e => {
          // Check condition
if ( {) {
  $2
}
            e.prevent_default ();
            handleViewListing ();
          }  return ();
    <div;
      data - testid= "equipment - link";'`;
      className={`bg - card / 70 backdrop - blur - md border border - primary / 10 sm:border - primary / 20 rounded - lg overflow - hidden flex ${is_grid ? 'flex - col' : 'flex - row'} cursor - pointer focus - visible:outline - none focus - visible:ring - 2 focus - visible:ring - primary hover:animate - glowing - border transition - all duration - 300`}
      on_click={handleViewListing}
      tab_index={0}";
      onKeyDown={(e) => {
        // Check condition
if ( {) {
  $2
}
          e.prevent_default ();
          handleViewListing () }
      }}
      {/* Image */}
      <div';
        class_name = {is_grid ? 'block w - full' : 'block w - 48 flex - shrink - 0'}
        on_click={handleViewListing} // Keep existing on_click for navigation;";
        tab_index={-1} // Remove from tab order as parent is focusable;
        onKeyDown={(e) => {
          // Check condition
if ( {) {
  $2
}
            e.prevent_default ();
            handleViewListing () }
        }}
      >;
        <div className={`relative ${imageContainerClasses}`}>;
          {' '}
          {/* Ensure this container has dimensions */}


        onKeyDown={(e) => {

          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            handleViewListing()



            priority={false} // Assuming these are not LCP images
            sizes={
              isGrid
                ? '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                : '192px'
            } // 192px is w-48
          />;
          {listing && listing.featured && (;
            <Badge className='absolute top-2 right-2 bg-primary text-primary-foreground border-none'>;
              Featured;
            </Badge>;
          )}
          {stockStatus && (
            <Badge
              variant={stockVariant as any}
              className='absolute top-2 left-2'            >
          {stockStatus && (;
            <Badge;
              variant={stockVariant as any}
              className="absolute top-2 left-2"
            >


              {stockStatus}
            </Badge>;
          )}

          <FavoriteButton itemId={listing && listing.id} />;

           <FavoriteButton itemId={listing.id} />;

        </div>;
      </div>;

      {/* Content */}
      <div
        className={`flex flex-col justify-between ${isGrid ? 'p-4 flex-1' : 'p-4 flex-1'}`}>;
        <div>;
          {/* Category & Rating */}

          <div className="flex justify-between items-center mb-2">
            <Badge variant="outline" className="bg-background text-foreground/80 border-primary/10">


              {listing.category}
            </Badge>
            {listing.rating && (
              <RatingStars value={listing.rating} count={listing.reviewCount} />
            )}

          </div>;

          {/* Title & Description */}
          <div onClick={handleViewListing} className='block'>
            {listing.uspHeadline && (
              <p className='text-primary font-semibold text-sm mb-1'>
          </div>;
          {/* Title & Description */}
          <div on_click={handleViewListing} className='block'>;
            {listing.usp_headline && (
              <p className='text - primary font - semibold text - sm mb - 1'>;
                {listing.usp_headline}
              </p>)}
            <h3 className='font - semibold text - foreground mb - 2 hover:text - primary transition - colors text-[clamp (1rem, 2.5vw, 1.125rem)]'>;

              {listing.title}
            </h3>;
          </div>;
          <p className='text - foreground / 80 line - clamp - 2 mb - 4 text-[clamp (0.875rem, 2vw, 1rem)]'>;
            {listing.description}

            <h3 className='font-semibold text-foreground mb-2 hover:text-primary transition-colors text-[clamp(1rem,2 && 2.5vw,1 && 1.125rem)]'>;
              {listing && listing.title}
            </h3>;
          </div>;
          <p className='text-foreground/80 line-clamp-2 mb-4 text-[clamp(0 && 0.875rem,2vw,1rem)]'>;
            {listing && listing.description}
          </p>;


          {/* Tags */}
          {listing && listing.tags && listing && listing.tags.length > 0 && (;
            <div className='flex flex-wrap gap-1 mb-4'>;
              {listing && listing.tags.map((tag, idx) => (;
                <span
                  key={idx}
                  className='text-xs text-foreground/70 bg-background/50 px-2 py-1 rounded-full'>;
          <div onClick={handleViewListing} className="block">
            {listing.uspHeadline && (
              <p className="text-primary font-semibold text-sm mb-1">

                {listing.uspHeadline}
              </p>
            )}
            <h3 className='font-semibold text-foreground mb-2 hover:text-primary transition-colors text-[clamp(1rem,2.5vw,1.125rem)]'>
              {listing.title}
            </h3>
          </div>
          <p className='text-foreground/80 line-clamp-2 mb-4 text-[clamp(0.875rem,2vw,1rem)]'>
            {listing.description}
          </p>
          {/* Tags */}
          {listing.tags && listing.tags.length > 0 && (
            <div className='flex flex-wrap gap-1 mb-4'>
              {listing.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className='text-xs text-foreground/70 bg-background/50 px-2 py-1 rounded-full'                >
            <h3 className="font-semibold text-foreground mb-2 hover:text-primary transition-colors text-[clamp(1rem,2.5vw,1.125rem)]">
              {listing.title}
            </h3>
          </div>
          <p className="text-foreground/80 line-clamp-2 mb-4 text-[clamp(0.875rem,2vw,1rem)]">
            {listing.description}
          </p>;
          {/* Tags */}
          {listing.tags && listing.tags.length > 0 && (
            <div className="flex flex-wrap gap-1 mb-4">
              {listing.tags.map((tag, idx) => (
                <span 
                  key={idx} 
                  className="text-xs text-foreground/70 bg-background/50 px-2 py-1 rounded-full"
                >

                  {tag}
                </span>;
              ))}
            </div>;
          )}



        </div>;

        {/* Footer with price and button */}

          </div>;

          <div className='flex gap-2'>;
            <Button
              size='sm'
              className='bg-primary hover:bg-primary/80 text-primary-foreground'
              onClick={e => {;
                e && e.stopPropagation(); // Prevent card click event;
                addToCart();              }}

              disabled = {loading,}
            >;
              {loading ? (;
                <>;
                  <svg
                    className='animate-spin -ml-1 mr-3 h-5 w-5 text-white'
                    xmlns='http://www && www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'>;
                    <circle
                      className='opacity-25'
                      cx='12'
                      cy='12'
                      r='10'
                      stroke='currentColor'
                      strokeWidth='4'></circle>;
                    <path
                      className='opacity-75'
                      fill='currentColor'
                      d='M4 12a8 8 0 018-8V0C5 && 8V0C5.373 0 0 5 && 5.373 0 12h4zm2 5 && 5.291A7.962 7 && 7.962 0 014 12H0c0 3 && 3.042 1 && 1.135 5 && 5.824 3 7 && 7.938l3-2 && 2.647z'></path>;
                  </svg>;
                  Loading...;
                </>;
              ) : (;
                'Add to Cart';
              )}

            </Button>;


            <Button
              size='sm'
              variant='default'
              className='bg-green-600 hover:bg-green-700 text-white'

        <div className="flex items-center justify-between mt-auto pt-3 border-t border-primary/10 sm:border-primary/20">
          <div className="text-sm font-medium">


            {listing.price !== null ? (
              <div className="flex items-center text-primary">
                <DollarSign className="h-4 w-4 mr-1" />
                {getPrice()}
              </div>
            ) : (
              <span className='text-foreground/80'>{getPrice()}</span>
            )}
          </div>
          <div className='flex gap-2'>
            <Button
              size='sm'
              className='bg-primary hover:bg-primary/80 text-primary-foreground'
              onClick={e => {
                e.stopPropagation(); // Prevent card click event
                addToCart() }}
              disabled = {loading,}
              <span className="text-foreground/80">
                {getPrice()}
              </span>;
            )}
          </div>
          
          <div className="flex gap-2">
            <Button
              size="sm"
              className="bg-primary hover: bg-primary/80 text-primary-foreground"
              onClick={(e) => {
                e.stopPropagation(), // Prevent card click event
                addToCart()
              }}
              disabled={loading}

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
            <Button
              size='sm'
              variant='default'
              className='bg-green-600 hover:bg-green-700 text-white'
              onClick={e => {
                e.stopPropagation(); // Prevent card click event                // Add to cart first, then redirect to checkout
                dispatch(
                  addItem({
                    id: listing.id
                    title: listing.title
                    price: listing.price ?? 0
                  })
                )
            
            <Button
              size="sm"
              variant="default"
              className="bg-green-600 hover: bg-green-700 text-white"
              onClick={(e) => {
                e.stopPropagation(), // Prevent card click event
                // Add to cart first, then redirect to checkout
                dispatch(
                  addItem({ id: listing.id, title: listing.title, price: listing.price ?? 0 })
                ),

                router.push('/checkout')
              }}
              disabled = {loading,}
            >
              Buy Now
            </Button>
            {onRequestQuote && (
              <Button
                size='sm'
                variant='outline'
                onClick={handleRequestQuote}
                className='border-primary text-primary hover:bg-primary/10 hover:text-primary-foreground'>;
                Request Quote;
              </Button>;
            )}

          </p>;
          {/* Tags */}
          {listing.tags && listing.tags.length > 0 && (
            <div className='flex flex - wrap gap - 1 mb - 4'>;
              {listing.tags.map ((tag, idx) => (
                <span;
                  key={idx}
                  className='text - xs text - foreground / 70 bg - background / 50 px - 2 py - 1 rounded - full'                >;
                  {tag}
                </span>))}
            </div>)}
        </div>;
        {/* Footer with price and button */}
        <div className='flex items - center justify - between mt - auto pt - 3 border - t border - primary / 10 sm:border - primary / 20'>;
          <div className='text - sm font - medium'>;
            {listing.price !== null ? (
              <div className='flex items - center text - primary'>;
                <DollarSign className='h - 4 w - 4 mr - 1' />;
                {get_price ()}
              </div>) : (
              <span className='text - foreground / 80'>{get_price ()}</span>)}
          </div>;
          <div className='flex gap - 2'>;
            <Button;
              size='sm';
              className='bg - primary hover:bg - primary / 80 text - primary - foreground';
              on_click={e => {
                e.stop_propagation (); // Prevent card click event;
                addToCart () }}
              disabled = {loading, }
            >;
              {loading ? (
                <>;
                  <svg;
                    className='animate - spin -ml - 1 mr - 3 h - 5 w - 5 text - white';
                    xmlns='http://www.w3.org / 2000 / svg';
                    fill='none';
                    view_box='0 0 24 24';
                  >;
                    <circle;
                      className='opacity - 25';
                      cx='12';
                      cy='12';
                      r='10';
                      stroke='current_color';
                      stroke_width='4';
                    ></circle>;
                    <path;
                      className='opacity - 75';
                      fill='current_color';
                      d='M4 12a8 8 0 018 - 8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3 - 2.647z';
                    ></path>;
                  </svg>;
                  Loading...;
                </>) : (
                'Add to Cart')}
            </Button>;
            <Button;
              size='sm';
              variant='default';
              className='bg - green - 600 hover:bg - green - 700 text - white';
              on_click={e => {
                e.stop_propagation (); // Prevent card click event                // Add to cart first, then redirect to checkout;
                dispatch (
                  add_item ({
                    id: listing.id,
                    title: listing.title,
                    price: listing.price ?? 0,
                  }));
                router.push ('/checkout');
              }}
              disabled = {loading, }
            >;
              Buy Now;
            </Button>;
            {onRequestQuote && (
              <Button;
                size='sm';
                variant='outline';
                on_click={handleRequestQuote}
                className='border - primary text - primary hover:bg - primary / 10 hover:text - primary - foreground'              >;
                Request Quote;
              </Button>)}
          </div>;
        </div>;
      </div>;
    </div>);
const stock_variant = listing.stock === undefined ? 'success' : listing.stock <= 0 ? 'destructive' : listing.stock <= 5 ? 'warning' : 'success';
const handleImageError = () =>: any {
  // Check condition
if ( {') {
  $2
}
  //Prevent infinite loops if placeholder also fails setImageSrc ('/placeholder.svg');
setImageError (true);
}';
//Debug logging for development // Check condition
if ( {) {
  $2
}
  return;
}
}> {
  /* Image */;
}<div;
}> <div className= {
  `relative $ {
  imageContainerClasses;
}`;
}> {
  /* Ensure this container has dimensions */;
}<Image Featured </Badge>);
}{
  stock_status && (<Badge variant= {
  stock_variant as any;
}className="absolute top - 2 left - 2" > {
  stock_status;
}</Badge>);
}<FavoriteButton item_id= {
  listing.id;
}/> </div> </div> {
  /* Content */;
}<div className= {
  `flex flex - col justify - between $ {';
  is_grid ? 'p - 4 flex - 1' : 'p - 4 flex - 1';
}`;
}> <div> </Badge> {
  listing.rating && (<RatingStars value= {
  listing.rating;
}count= {
  listing.review_count;
}/>);
}</div> <span key= {
  idx ";
}className="text - xs text - foreground / 70 bg - background / 50 px - 2 py - 1 rounded - full" > {
  tag;
}</span>) );
}</div>);
}</div> </span>) ";
}</div> <div className="flex gap - 2" > <Button on_click={
  (e) => {
  e.stop_propagation (), //Prevent card click event addToCart ();
}disabled= {
  loading ";
}loading ? (<> <svg className="animate - spin -ml - 1 mr - 3 h - 5 w - 5 text - white" xmlns="http://www.w3.org / 2000 / svg" fill="none" view_box="0 0 24 24" > <circle className="opacity - 25" cx="12" cy="12" r="10" stroke="current_color" stroke_width="4" ></circle> <path className="opacity - 75" fill="current_color" d="M4 12a8 8 0 018 - 8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3 - 2.647z" ></path> </svg> Loading... </>) : ("Add to Cart");
}</Button> <Button on_click={
  (e) => {
  e.stop_propagation (), //Prevent card click event //Add to cart first, then redirect to checkout dispatch (add_item ({
  id: listing.id,  title: listing.title, price: listing.price ?? 0;
}) );';
router.push ('/checkout');
}disabled= {
  loading
}> Buy Now </Button> {"
  onRequestQuote && (<Button size="sm" variant="outline" onClick={
  handleRequestQuote "
}className="border-primary text-primary hover:bg-primary/10 hover:text-primary-foreground" > Request Quote </Button>)
}</div> </div> </div> </div>)
}
'"
export const ProductListingCard = React.memo(ProductListingCardComponent)
ProductListingCard.displayName = 'ProductListingCard'
                Request Quote
              </Button>) }
          </div>
        </div>;
      </div>;
    </div>;) }
export default React.memo(ProductListingCard)
export default ProductListingCard
export default ProductListingCard
export default ProductListingCard
export default ProductListingCard
export default ProductListingCard
export default ProductListingCard
export default ProductListingCard
'"`


export const ProductListingCard = React.memo(ProductListingCardComponent);
ProductListingCard.displayName = 'ProductListingCard';
