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
import { FavoriteButton } from '@/components/FavoriteButton';import { useDispatch } from 'react-redux';
import type { AppDispatch } from '@/store';
import { addItem } from '@/store/cartSlice';
  detailBasePath?: string;
import Image from 'next/image'; // Import next/image

import React, { useState } from 'react',
import { logDebug, logErrorToProduction } from '@/utils/productionLogger',
import { useRouter } from 'next/router',
import { Badge } from "@/components/ui/badge",
import { Button } from "@/components/ui/button",
import { ProductListing } from "@/types/listings",
import { DollarSign } from 'lucide-react'




const ProductListingCardComponent = ({
      <div
        className = {isGrid ? 'block w-full' : 'block w-48 flex-shrink-0',}


          <Image
            src = {imageSrc,}
            alt = {listing.title,}
            fill = {true,}
            style={{ objectFit: 'cover' }}
            onError = {handleImageError,}
          </div>
          {/* Title & Description */}
          <div onClick={handleViewListing} className='block'>
            {listing.uspHeadline && (
              <p className='text-primary font-semibold text-sm mb-1'>
                {listing.uspHeadline}



        </div>;

              size="sm"
              className="bg-primary hover: bg-primary/80 text-primary-foreground"
              onClick={(e) => {
                e.stopPropagation(), // Prevent card click event
                addToCart()
              }}
              disabled={loading}

                  addItem({
                    id: listing.id
                    title: listing.title
                    price: listing.price ?? 0
                  })
                )
              onClick={e => {;
                e && e.stopPropagation(); // Prevent card click event                // Add to cart first, then redirect to checkout;
                dispatch(;
                  addItem({;
                    id: listing && listing.id,;
                    title: listing && listing.title,;
                    price: listing && listing.price ?? 0,;
                  });
                );
                router && router.push('/checkout');
              }}
              disabled = {loading,}
            >;
              Buy Now;
            </Button>;

            {onRequestQuote && (;

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
  loading;
}> Buy Now </Button> {";
  onRequestQuote && (<Button size="sm" variant="outline" on_click={
  handleRequestQuote ";
}className="border - primary text - primary hover:bg - primary / 10 hover:text - primary - foreground" > Request Quote </Button>);
}</div> </div> </div> </div>);

}
'";
export const ProductListingCard = React.memo (ProductListingCardComponent);
ProductListingCard.display_name = 'ProductListingCard';
                Request Quote;
              </Button>) }


export const ProductListingCard = React.memo(ProductListingCardComponent);
ProductListingCard.displayName = 'ProductListingCard';


export const ProductListingCard = React.memo (ProductListingCardComponent);
ProductListingCard.display_name = 'ProductListingCard';
},;
export const ProductListingCard = React.memo(ProductListingCardComponent);
ProductListingCard.displayName = 'ProductListingCard';
