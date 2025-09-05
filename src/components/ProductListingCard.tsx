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
import Image from 'next/image'; // Import next/image
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

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
  
  const handleViewListing = () => {
    // Debug logging for development
    if (process.env.NODE_ENV === 'development') {
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
      return;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
    
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
    }
  },
  
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
      }}
    >
      {/* Image */}
      <div
        className={isGrid ? 'block w-full' : 'block w-48 flex-shrink-0'}
        onClick={handleViewListing} // Keep existing onClick for navigation
        role=&quot;button&quot;
        tabIndex={-1} // Remove from tab order as parent is focusable
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault(),
            handleViewListing()
          }
        }}
      >
        <div className={`relative ${imageContainerClasses}`}> {/* Ensure this container has dimensions */}
          <Image
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
              Featured
            </Badge>
          )}
          {stockStatus && (
            <Badge
              variant={stockVariant as any}
              className=&quot;absolute top-2 left-2&quot;
            >
              {stockStatus}
            </Badge>
          )}
           <FavoriteButton itemId={listing.id} />
        </div>
      </div>
      
      {/* Content */}
      <div className={`flex flex-col justify-between ${isGrid ? 'p-4 flex-1' : 'p-4 flex-1'}`}>
        <div>
          {/* Category & Rating */}
          <div className=&quot;flex justify-between items-center mb-2&quot;>
            <Badge variant=&quot;outline&quot; className=&quot;bg-background text-foreground/80 border-primary/10&quot;>
              {listing.category}
            </Badge>
            {listing.rating && (
              <RatingStars value={listing.rating} count={listing.reviewCount} />
            )}
          </div>
          
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
                <span 
                  key={idx} 
                  className=&quot;text-xs text-foreground/70 bg-background/50 px-2 py-1 rounded-full&quot;
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
        
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
              </span>
            )}
          </div>
          
          <div className=&quot;flex gap-2&quot;>
            <Button
<<<<<<< HEAD
              size="sm"
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
            >
              {loading ? (
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
              }}
              disabled={loading}
            >
              Buy Now
            </Button>
            
            {onRequestQuote && (
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

export const ProductListingCard = React.memo(ProductListingCardComponent),
ProductListingCard.displayName = 'ProductListingCard',
