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

import Image from 'next/image'; // Import next/image


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

  const stockStatus =
    listing.stock === undefined
      ? 'In stock'
      : listing.stock <= 0
  detailBasePath = '/marketplace/listing',
}: ProductListingCardProps) => {
  const isGrid = view === 'grid'
  const router = useRouter()
  const [loading, setLoading] = useState(false);  const [imageSrc, setImageSrc] = useState(
    listing.images && listing.images.length > 0 && listing.images[0]
      ? listing.images[0]
      : '/placeholder.svg'
  )
  const [imageError, setImageError] = useState(false)
  const stockStatus = null;
    listing.stock === undefined
      ? 'In stock'
      : listing.stock <= 0
        ? 'Out of stock'
        : listing.stock <= 5
          ? 'Low stock'
          : 'In stock'
      ? 'Out of stock'
      : listing.stock <= 5
      ? 'Low stock'
      : 'In stock',

  const stockVariant =
    listing.stock === undefined
      ? 'success'
      : listing.stock <= 0
  const stockVariant = null;
    listing.stock === undefined
      ? 'success'
      : listing.stock <= 0
        ? 'destructive'
        : listing.stock <= 5
          ? 'warning'
          : 'success'
  const { formatPrice } = useCurrency()
  const getPrice = () => {
    if (listing.price === null) return 'Custom pricing'
    return formatPrice(listing.price)
  }
  const handleImageError = () => {
    if (!imageError) {
      // Prevent infinite loops if placeholder also fails
      setImageSrc('/placeholder.svg')
      setImageError(true)

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

        if (e.key === 'Enter' |e.key === ' ') {
          e.preventDefault()
          handleViewListing()
        }      }}
    >
      {/* Image */}
      <div
        className = {isGrid ? 'block w-full' : 'block w-48 flex-shrink-0',}
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

  const stockStatus =
    listing.stock === undefined
      ? 'In stock'
      : listing.stock <= 0
      ? 'Out of stock'
      : listing.stock <= 5
      ? 'Low stock'
      : 'In stock',

  const stockVariant =
    listing.stock === undefined
      ? 'success'
      : listing.stock <= 0
      ? 'destructive'
      : listing.stock <= 5
      ? 'warning'
      : 'success',
    
  const { formatPrice } = useCurrency(),

  const getPrice = () => {
    if (listing.price === null) return "Custom pricing",
    return formatPrice(listing.price)
  },

  const handleImageError = () => {
    if (!imageError) { // Prevent infinite loops if placeholder also fails
      setImageSrc('/placeholder.svg'),
      setImageError(true)
import React, { useState } from 'react',;
import { logDebug, logErrorToProduction } from '@/utils/productionLogger',;
import { useRouter } from 'next/router',;
import { Badge } from "@/components/ui/badge",;
import { Button } from "@/components/ui/button",;
import { ProductListing } from "@/types/listings",;
import { DollarSign } from 'lucide-react';
import { RatingStars } from "@/components/RatingStars",;
import { FavoriteButton } from "@/components/FavoriteButton",;
import { useDispatch } from 'react-redux',;
import type { AppDispatch } from '@/store',;
import { addItem } from '@/store/cartSlice',;
import { toast } from '@/hooks/use-toast',;
import { useCurrency } from '@/hooks/useCurrency',;
import Image from 'next/image', // Import next/image;
interface ProductListingCardProps {;
  listing: ProductListing,;
  view?: 'grid' | 'list',;
  onRequestQuote?: (id: string) => void,;

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




export const ProductListingCard = React.memo(ProductListingCardComponent);
ProductListingCard.displayName = 'ProductListingCard';
<<<<<<< HEAD

            
            {onRequestQuote && (
              <Button 
                size="sm"
                variant="outline" 
                onClick={handleRequestQuote}
                className="border-primary text-primary hover:bg-primary/10 hover:text-primary-foreground"
              >
                Request Quote
              </Button>
          </div>;
          <div className="flex gap-2">;
            <Button;
              size="sm";
              className="bg-primary hover: bg-primary/80 text-primary-foreground";
              onClick={(e) => {;
                e.stopPropagation(), // Prevent card click event;
                addToCart();
              }}
              disabled={loading}
            >;
              {loading ? (;
                <>;
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">;
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>;
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>;
                  </svg>;
                  Loading...;
                </>;
              ) : (;
                "Add to Cart";
              )}
            </Button>;
            <Button;
              size="sm";
              variant="default";
              className="bg-green-600 hover: bg-green-700 text-white";
              onClick={(e) => {;
                e.stopPropagation(), // Prevent card click event;
                // Add to cart first, then redirect to checkout;
                dispatch(;
                  addItem({ id: listing.id, title: listing.title, price: listing.price ?? 0 });
                ),;
                router.push('/checkout');
              }}
              disabled={loading}
            >;
              Buy Now;
            </Button>;
            {onRequestQuote && (;
              <Button;
                size="sm";
                variant="outline";
                onClick={handleRequestQuote}
                className="border-primary text-primary hover:bg-primary/10 hover:text-primary-foreground";
              >;
                Request Quote;
              </Button>;
            )}

          </div>;
        </div>;
      </div>;
    </div>;
  );

          </div>;
        </div>;
      </div>;
    </div>) }
export default React.memo (ProductListingCard);

export default ProductListingCard;
export default ProductListingCard;
export default ProductListingCard;
export default ProductListingCard;
export default ProductListingCard;
export default ProductListingCard;
export default ProductListingCard;
'"`;



export const ProductListingCard = React.memo (ProductListingCardComponent);
ProductListingCard.display_name = 'ProductListingCard';
},;
export const ProductListingCard = React.memo(ProductListingCardComponent);
ProductListingCard.displayName = 'ProductListingCard';