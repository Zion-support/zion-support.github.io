const stockStatus =;
    product && product.stock === undefined;
      : 'In stock';

  const stockVariant =;
    product && product.stock === undefined;
  const productTitle = product && product.title;

  const imageUrl = Array && Array.isArray(product && product.images) && product && product.images.length > 0 ? product && product.images[0] : null;
  const imageAltText = productTitle;

  const isMobile = useMediaQuery('(max-width: 768px)'),;
  const isTablet = useMediaQuery('(max-width: 1200px)'),;

  const imageSizes = isMobile ? '100vw' : isTablet ? '50vw' : '33vw';

  );
}
    product.stock === undefined;
      ? 'success';
      : product.stock <= 0;
      ? 'destructive';
      : product.stock <= 5;
      ? 'warning';
      : 'success',;
  // Reset redirecting state if component unmounts (e.g., navigation cancelled by user);
  useEffect(() => {;
    return () => {;
      setIsRedirecting(false);
    }
  }, []),

  if (!product || typeof product.id !== 'string' || typeof product.title !== 'string' || product.title.trim() === '') {
    captureException(new Error('Invalid product data received by ProductCard'), {
      extra: { product }}),
    return (
      <div className="relative border rounded-lg bg-card p-4 text-center h-full flex flex-col justify-center items-center" data-testid="product-card-error">
        <p className="text-destructive text-sm">Product information unavailable.</p>
        {/* Optionally, provide more details if product ID is known */}
        {/* {product && product.id && <p className="text-xs text-muted-foreground">ID: {product.id}</p>} */}
      </div>
    )
  }
;
  const active = isWishlisted(product.id),;
  const dispatch = useDispatch<AppDispatch>(),;
  // Title is now guaranteed to be a non-empty string by the check above.;
  const productTitle = product.title,;
  const addToCart = () => {;
    if (!isAuthenticated) {;
      toast({;
        title: 'Login Required',,
  description: 'Please log in to add items to your cart.',;
        variant: 'destructive'}),;
      router.push(`/auth/login?returnTo=${encodeURIComponent(router.asPath)}`),;
      return;
    }
    dispatch(addItem({ id: product.id, title: productTitle, price: product.price ?? 0 })),;
    toast({;
      title: 'Added to cart',,
  description: `${productTitle} has been added to your cart`,;
      action: {;
        label: 'View Cart',;
        onClick: () => router.push('/cart')}});
  },;
  const imageUrl = Array.isArray(product.images) && product.images.length > 0 ? product.images[0] : null,;
  const imageAltText = productTitle,;
  const handleImageError = (error: any) => {;
    if (!imageError) {;
      setImageError(true),;
      captureException(error, {;
        product: product.id,;
        imageUrl});
    }
  },

  const isMobile = useMediaQuery('(max-width: 768px)'),
  const isTablet = useMediaQuery('(max-width: 1200px)'),

  const imageSizes = isMobile ? '100vw' : isTablet ? '50vw' : '33vw',

  return (
    <div className="relative border rounded-lg bg-card p-4" data-testid="product-card">
      <button
        className="absolute top-2 right-2 p-1 rounded-full bg-background/70"
        onClick={() => toggle(product.id)}
        aria-label={active ? 'Remove from favorites' : 'Add to favorites'}
      >
        <Heart className={active ? 'text-red-500 fill-red-500' : 'text-gray-500'} />
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
;