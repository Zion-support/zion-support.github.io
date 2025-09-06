
import { Badge } from "@/components/ui/badge",
import { Button } from "@/components/ui/button",
import { ProductListing } from "@/types/listings",
import { DollarSign } from 'lucide-react'

import { FavoriteButton } from '@/components/FavoriteButton'; import { useDispatch } from 'react-redux'
import type { AppDispatch } from '@/store'
import { addItem } from '@/store/cartSlice'
import { toast } from '@/hooks/use-toast';
import { useCurrency } from '@/hooks/useCurrency';
import Image from 'next/image'; // Import next/image

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

const ProductListingCardComponent = ({
  listing,
  view = 'grid',
  onRequestQuote,

        ? 'Out of stock'
        : listing.stock <= 5
          ? 'Low stock'
          : 'In stock'

  const stockVariant =
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
  }
  const handleViewListing = () => {
    // Debug logging for development
    if (process.env.NODE_ENV === 'development') {
      logDebug('[ProductCard] Navigating to:', {
        path: `${detailBasePath}/${listing.id}`
      })
      logDebug('[ProductCard] Listing ID:', { id: listing.id })
      logDebug('[ProductCard] Listing Title:', { title: listing.title })
    }
    // Validate listing ID exists before navigation
    if (!listing.id) {
      logErrorToProduction(
        '[ProductCard] Missing listing ID, cannot navigate'
        new Error('Missing listing ID')
        { component: 'ProductListingCard' }
      )
      toast({
        title: 'Navigation Error'
        description: 'Product information is incomplete'
        variant: 'destructive'
      })
      return;
    }
    router.push(`${detailBasePath}/${listing.id}`)
  }
  const dispatch = useDispatch<AppDispatch>()
  const addToCart = () => {
    setLoading(true)
    dispatch(
      addItem({
        id: listing.id
        title: listing.title
        price: listing.price ?? 0
      })
    )
    toast.success(`1× ${listing.title} added`, {
      action: {
        label: 'View Cart'
        onClick: () => router.push('/cart')
      }
    })
    setLoading(false)
  }
  const handleRequestQuote = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (onRequestQuote) {
      onRequestQuote(listing.id)
    } else {
      router.push(`/request-quote?listing=${listing.id}`)
    }
  }
  const imageContainerClasses = isGrid ? 'h-48' : 'h-32 w-48'
      onKeyDown={e => {
        if (e.key === 'Enter' |e.key === ' ') {
          e.preventDefault()
          handleViewListing()
        }      }}
    >
      {/* Image */}
      <div
        className = {isGrid ? 'block w-full' : 'block w-48 flex-shrink-0',}

        onClick={handleViewListing} // Keep existing onClick for navigation
        role="button"
        tabIndex={-1} // Remove from tab order as parent is focusable

          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            handleViewListing()

          }
        }}
      >;
        <div className={`relative ${imageContainerClasses}`}> {/* Ensure this container has dimensions */}
          <Image;
            src={imageSrc}
            alt={listing.title}
            fill={true}
            style={{ objectFit: 'cover' }}
            onError={handleImageError}

            priority={false} // Assuming these are not LCP images
            sizes={isGrid ? "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" : "192px"} // 192px is w-48
          />
          {listing.featured && (
            <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground border-none">
              Featured
            </Badge>
          )}

              {stockStatus}
            </Badge>
          )}

              {listing.category}
            </Badge>
            {listing.rating && (
              <RatingStars value={listing.rating} count={listing.reviewCount} />
            )}

                {listing.uspHeadline}
              </p>
            )}

                  {tag}
                </span>
              ))}
            </div>
          )}

            {listing.price !== null ? (
              <div className="flex items-center text-primary">
                <DollarSign className="h-4 w-4 mr-1" />
                {getPrice()}
              </div>
            ) : (

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

                router.push('/checkout')
              }}
              disabled={loading}
            >
              Buy Now
            </Button>
