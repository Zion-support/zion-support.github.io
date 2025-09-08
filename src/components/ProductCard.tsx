import Link from 'next/link';
import { Heart } from 'lucide-react';
import { useWishlist } from '@/hooks/useWishlist';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, } from '@/components/ui/tooltip';
import { useDispatch } from 'react-redux';
import { addItem } from '@/store/cartSlice';
import Image from 'next/image';
import React, { useState } from 'react';
import { useAuth } from '@/context/auth/AuthProvider';
import { useRouter } from 'next/router';
import { useMediaQuery } from 'usehooks-ts';
import { useEnqueueSnackbar } from '@/context/SnackbarContext';
import { captureException } from '@/utils/sentry';
export default function ProductCard({ product, onBuy, buyDisabled = false }) {
    const { isAuthenticated } = useAuth();
    const { isWishlisted, toggle } = useWishlist();
    const [imageError, setImageError] = useState(false);
    const router = useRouter();
    const enqueueSnackbar = useEnqueueSnackbar();
    if (!product || typeof product.id !== 'string' || typeof product.title !== 'string' || product.title.trim() === '') {
        captureException(new Error('Invalid product data received by ProductCard'), {
            extra: { product },
        });
        return (<div className="relative border rounded-lg bg-card p-4 text-center h-full flex flex-col justify-center items-center" data-testid="product-card-error">
        <p className="text-destructive text-sm">Product information unavailable.</p>
        {/* Optionally, provide more details if product ID is known */}
        {/* {product && product.id && <p className="text-xs text-muted-foreground">ID: {product.id}</p>} */}
      </div>);
    }
    const active = isWishlisted(product.id);
    const dispatch = useDispatch();
    // Title is now guaranteed to be a non-empty string by the check above.
    const productTitle = product.title;
    const addToCart = () => {
        dispatch(addItem({
            id: product.id,
            title: productTitle,
            price: product.price ?? 0,
            image: imageUrl || undefined,
        }));
    };
    const imageUrl = Array.isArray(product.images) && product.images.length > 0 ? product.images[0] : null;
    const imageAltText = productTitle;
    const handleImageError = (error) => {
        if (!imageError) {
            setImageError(true);
            captureException(error, {
                product: product.id,
                imageUrl,
            });
        }
    };
    const isMobile = useMediaQuery('(max-width: 768px)');
    const isTablet = useMediaQuery('(max-width: 1200px)');
    const imageSizes = isMobile ? '100vw' : isTablet ? '50vw' : '33vw';
    return (<div className="relative border rounded-lg bg-card p-4" data-testid="product-card">
      <button className="absolute top-2 right-2 p-1 rounded-full bg-background/70" onClick={() => toggle(product.id)} aria-label={active ? 'Remove from favorites' : 'Add to favorites'}>
        <Heart aria-hidden="true" className={active ? 'text-red-500 fill-red-500' : 'text-gray-500'}/>
      </button>

<<<<<<< HEAD
export default function ProductCard({ product, onBuy, onBuyAttemptComplete, buyDisabled;
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
                  size="sm"
                  variant="outline"
                  className="flex-1"
                  data-testid="buy-now-button"
                  disabled={!isAuthenticated || buyDisabled || isRedirecting}>{isRedirecting ? (
                    <>
                      <span className="animate-spin inline-block mr-2 h-4 w-4 border-2 border-current border-t-transparent rounded-full" role="status" aria-hidden="true"></span>
                      Processing...
                    </>
                  ) : (
                    'Buy Now'
                  )}
                </Button>
              </TooltipTrigger>
              {!isAuthenticated && (<TooltipContent>Login required</TooltipContent>)}
            </Tooltip>
          </TooltipProvider>)}
      </div>
    </div>);
}
