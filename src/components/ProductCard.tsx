import Link from 'next/link';
import { Heart } from 'lucide-react'
import { useWishlist  } from '@/hooks/useWishlist';
import { Button  } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tooltip;
  TooltipContent;
  TooltipProvider;
  TooltipTrigger } from '@/components/ui/tooltip';
import { useDispatch  } from 'react-redux';
import type { AppDispatch } from '@/store';
import { addItem  } from '@/store/cartSlice';
import Image from 'next/image',
import React, { useState, useEffect } from 'react';
import { useAuth  } from '@/context/auth/AuthProvider';
import { useRouter  } from 'next/router';
import { Product  } from '@/services/marketplace';
import { useMediaQuery  } from 'usehooks-ts';
import { toast } from '@/hooks/use-toast';
import { captureException } from '@/utils/sentry';
interface ProductCardProps {
  product: Product;
  onBuy?: () => Promise<void>, // Changed to allow async and signal completion/failure
  onBuyAttemptComplete?: () => void, // Callback to signal the buy attempt is finished (success or fail)
  /** Disable the Buy Now button (e.g. when the checkout route isn't ready). */
  buyDisabled?: boolean
}

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
                  disabled={!isAuthenticated || buyDisabled || isRedirecting}
                >
                  {isRedirecting ? (
                    <>
                      <span className="animate-spin inline-block mr-2 h-4 w-4 border-2 border-current border-t-transparent rounded-full" role="status" aria-hidden="true"></span>
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
=======
  const stockStatus =
    product.stock === undefined
      : 'In stock'
  const stockVariant =
    product.stock === undefined
  const productTitle = product.title
  const imageUrl = Array.isArray(product.images) && product.images.length > 0 ? product.images[0] : null
  const imageAltText = productTitle
  const isMobile = useMediaQuery('(max-width: 768px)')
  const isTablet = useMediaQuery('(max-width: 1200px)')
  const imageSizes = isMobile ? '100vw' : isTablet ? '50vw' : '33vw'
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  )
}
  )
}