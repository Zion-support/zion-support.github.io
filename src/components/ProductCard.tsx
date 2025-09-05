import Link from 'next/link',
import { Heart } from 'lucide-react'
import { useWishlist } from '@/hooks/useWishlist',
import { Button } from '@/components/ui/button',
import { Badge } from '@/components/ui/badge',
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger} from '@/components/ui/tooltip',
import { useDispatch } from 'react-redux',
import type { AppDispatch } from '@/store',
import { addItem } from '@/store/cartSlice',
import Image from 'next/image',
import React, { useState, useEffect } from 'react',
import { useAuth } from '@/context/auth/AuthProvider',
import { useRouter } from 'next/router',
import { Product } from '@/services/marketplace',
import { useMediaQuery } from 'usehooks-ts',
import { toast } from '@/hooks/use-toast',
import { captureException } from '@/utils/sentry',
interface ProductCardProps {
  product: Product,
  onBuy?: () => Promise<void>, // Changed to allow async and signal completion/failure
  onBuyAttemptComplete?: () => void, // Callback to signal the buy attempt is finished (success or fail)
  /** Disable the Buy Now button (e.g. when the checkout route isn't ready). */
  buyDisabled?: boolean
}

export default function ProductCard({ product, onBuy, onBuyAttemptComplete, buyDisabled = false }: ProductCardProps) {
  const { isAuthenticated } = useAuth(),
  const { isWishlisted, toggle } = useWishlist(),
  const [imageError, setImageError] = useState(false),
  const [isRedirecting, setIsRedirecting] = useState(false), // Added for loading state
  const router = useRouter(),

  const stockStatus =
    product.stock === undefined
      ? 'In stock'
      : product.stock <= 0
      ? 'Out of stock'
      : product.stock <= 5
      ? 'Low stock'
      : 'In stock',

  const stockVariant =
    product.stock === undefined
      ? 'success'
      : product.stock <= 0
      ? 'destructive'
      : product.stock <= 5
      ? 'warning'
      : 'success',
  // Reset redirecting state if component unmounts (e.g., navigation cancelled by user)
  useEffect(() => {
    return () => {
      setIsRedirecting(false)
    }
  }, []),

  if (!product || typeof product.id !== 'string' || typeof product.title !== 'string' || product.title.trim() === '') {
    captureException(new Error('Invalid product data received by ProductCard'), {
      extra: { product }}),
    return (
      <div className=&quot;relative border rounded-lg bg-card p-4 text-center h-full flex flex-col justify-center items-center&quot; data-testid=&quot;product-card-error&quot;>
        <p className=&quot;text-destructive text-sm&quot;>Product information unavailable.</p>
        {/* Optionally, provide more details if product ID is known */}
        {/* {product && product.id && <p className=&quot;text-xs text-muted-foreground&quot;>ID: {product.id}</p>} */}
      </div>
    )
  }

  const active = isWishlisted(product.id),
  const dispatch = useDispatch<AppDispatch>(),

  // Title is now guaranteed to be a non-empty string by the check above.
  const productTitle = product.title,

  const addToCart = () => {
    if (!isAuthenticated) {
      toast({
        title: 'Login Required',
        description: 'Please log in to add items to your cart.',
        variant: 'destructive'}),
      router.push(`/auth/login?returnTo=${encodeURIComponent(router.asPath)}`),
      return
    }
    dispatch(addItem({ id: product.id, title: productTitle, price: product.price ?? 0 })),
    toast({
      title: 'Added to cart',
      description: `${productTitle} has been added to your cart`,
      action: {
        label: 'View Cart',
        onClick: () => router.push('/cart')}})
  },

  const imageUrl = Array.isArray(product.images) && product.images.length > 0 ? product.images[0] : null,
  const imageAltText = productTitle,

  const handleImageError = (error: any) => {
    if (!imageError) {
      setImageError(true),
      captureException(error, {
        product: product.id,
        imageUrl})
    }
  },

  const isMobile = useMediaQuery('(max-width: 768px)'),
  const isTablet = useMediaQuery('(max-width: 1200px)'),

  const imageSizes = isMobile ? '100vw' : isTablet ? '50vw' : '33vw',

  return (
    <div className=&quot;relative border rounded-lg bg-card p-4&quot; data-testid=&quot;product-card&quot;>
      <button
        className=&quot;absolute top-2 right-2 p-1 rounded-full bg-background/70&quot;
        onClick={() => toggle(product.id)}
        aria-label={active ? 'Remove from favorites' : 'Add to favorites'}
      >
        <Heart className={active ? 'text-red-500 fill-red-500' : 'text-gray-500'} />
      </button>

    <div className=&quot;w-full h-40 relative mb-2&quot;>
      {imageUrl && !imageError ? (
        <Image
          src={imageUrl}
          alt={imageAltText}
          style={{ objectFit: 'cover' }}
          onError={(e) => handleImageError(e)}
          priority={false}
        />
      ) : (
        <div className=&quot;w-full h-full bg-gray-200 flex items-center justify-center&quot;>
          <span className=&quot;text-gray-500&quot;>No Image</span>
        </div>
      )}
      {stockStatus && (
        <Badge variant={stockVariant as any} className=&quot;absolute top-2 left-2&quot;>
          {stockStatus}
        </Badge>
      )}
      {active && (
        <div className=&quot;absolute top-10 left-2 p-1 rounded-full bg-background/70&quot;>
          <Heart className=&quot;text-red-500 fill-red-500&quot; />
        </div>
      )}
    </div>
      <Link href={`/marketplace/listing/${product.id}`}>
        <div className=&quot;w-full h-40 relative mb-2 cursor-pointer&quot;>
          {imageUrl && !imageError ? (
            <Image
              src={imageUrl}
              alt={imageAltText}
              style={{ objectFit: 'cover' }}
              onError={(e) => handleImageError(e)}
              priority={false}
            />
          ) : (
            <div className=&quot;w-full h-full bg-gray-200 flex items-center justify-center&quot;>
              <span className=&quot;text-gray-500&quot;>No Image</span>
            </div>
          )}
          {active && (
            <div className=&quot;absolute top-2 left-2 p-1 rounded-full bg-background/70&quot;>
              <Heart className=&quot;text-red-500 fill-red-500&quot; />
            </div>
          )}
        </div>
        <h3 className=&quot;font-semibold mb-1&quot;>{productTitle}</h3>
      </Link>
      {product.price != null && (
        <p className=&quot;text-sm text-muted-foreground&quot;>
          {product.currency}
          {product.price}
        </p>
      )}
      <div className=&quot;mt-2 flex gap-2&quot;>
        <Button size=&quot;sm&quot; className=&quot;flex-1&quot; onClick={addToCart}>
          Add to Cart
        </Button>
        {onBuy && (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  onClick={(e) => {
                    e.stopPropagation(),
                    if (onBuy) {
                      setIsRedirecting(true),
                      onBuy()
                        .catch(() => {
                          // Error is handled by parent, but we still need to reset loading locally
                        })
                        .finally(() => {
                          setIsRedirecting(false), // Always reset loading state
                          if (onBuyAttemptComplete) {
                            onBuyAttemptComplete(), // Notify parent if it provided this callback
                          }
                        })
                    }
                  }}
                  size=&quot;sm&quot;
                  variant=&quot;outline&quot;
                  className=&quot;flex-1&quot;
                  data-testid=&quot;buy-now-button&quot;
                  disabled={!isAuthenticated || buyDisabled || isRedirecting}
                >
                  {isRedirecting ? (
                    <>
                      <span className=&quot;animate-spin inline-block mr-2 h-4 w-4 border-2 border-current border-t-transparent rounded-full&quot; role=&quot;status&quot; aria-hidden=&quot;true&quot;></span>
                      Processing...
                    </>
                  ) : (
                    'Buy Now'
                  )}
                </Button>
              </TooltipTrigger>
              {!isAuthenticated && !isRedirecting && (
                <TooltipContent>Login required</TooltipContent>
              )}
            </Tooltip>
          </TooltipProvider>
        )}
      </div>
    </div>
  )
}
