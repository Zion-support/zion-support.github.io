import Link from 'next/link';
import {_Tooltip, _TooltipContent, _TooltipProvider, _TooltipTrigger} from '@/components/ui/tooltip';
import type {_AppDispatch} from '@/store';
import Image from 'next/image';
import React, {_useState, _useEffect} from 'react';

interface ProductCardProps {_product: Product;
  onBuy?: () => Promise<void>; // Changed to allow async and signal completion/failure
  onBuyAttemptComplete?: () => void; // Callback to signal the buy attempt is finished (success or fail)
  /** Disable the Buy Now button (e.g. when the checkout route isn't ready). */
  buyDisabled?: boolean;}

export default function ProductCard(_{_product, _onBuy, _onBuyAttemptComplete, _buyDisabled = false}: ProductCardProps) {_const { isAuthenticated} = useAuth();
  const {_isWishlisted, _toggle} = useWishlist();
  const [imageError, setImageError] = useState(false);
  const [isRedirecting, setIsRedirecting] = useState(false); // Added for loading state
  const _router = useRouter();

  const _stockStatus =
    product.stock === undefined
      ? 'In stock'
      : product.stock <= 0
      ? 'Out of stock'
      : product.stock <= 5
      ? 'Low stock'
      : 'In stock';

  const _stockVariant =
    product.stock === undefined
      ? 'success'
      : product.stock <= 0
      ? 'destructive'
      : product.stock <= 5
      ? 'warning'
      : 'success';
  // Reset redirecting state if component unmounts (e.g., navigation cancelled by user)
  useEffect__(() => {_return () => {
      setIsRedirecting(false);};
  }, []);

  if (!product || typeof product.id !== 'string' || typeof product.title !== 'string' || product.title.trim() === '') {_captureException(new Error('Invalid product data received by ProductCard'), _{
      extra: { product}});
    return (
      <div className="relative border rounded-lg bg-card p-4 text-center h-full flex flex-col justify-center items-center" data-testid="product-card-error">
        <p className="text-destructive text-sm">Product information unavailable.</p>
        {_/* Optionally, _provide more details if product ID is known */}
        {_/* {product && product.id && <p className="text-xs text-muted-foreground">ID: {product.id}</p>} */}
      </div>
    );
  }

  const _active = isWishlisted(product.id);
  const _dispatch = useDispatch<AppDispatch>();

  // Title is now guaranteed to be a non-empty string by the check above.
  const _productTitle = product.title;

  const _addToCart = () => {_if (!isAuthenticated) {
      toast({
        title: 'Login Required', _description: 'Please log in to add items to your cart.', _variant: 'destructive'});
      router.push(`/auth/login?returnTo=${_encodeURIComponent(router.asPath)}`);
      return;
    }
    dispatch(addItem({_id: product.id, _title: productTitle, _price: product.price ?? 0}));
    toast(_{_title: 'Added to cart', _description: `${productTitle} has been added to your cart`, _action: {_label: 'View Cart', _onClick: () => router.push('/cart')}});
  };

  const _imageUrl = Array.isArray(product.images) && product.images.length > 0 ? product.images[0] : null;
  const _imageAltText = productTitle;

  const _handleImageError = (_error: unknown) => {_if (!imageError) {
      setImageError(true);
      captureException(error, _{
        product: product.id, _imageUrl});
    }
  };

  const _isMobile = useMediaQuery('(max-width: 768px)');
  const _isTablet = useMediaQuery('(max-width: 1200px)');

  const _imageSizes = isMobile ? '100vw' : isTablet ? '50vw' : '33vw';

  return (_<div className="relative border rounded-lg bg-card p-4" data-testid="product-card">
      <button
        className="absolute top-2 right-2 p-1 rounded-full bg-background/70"
        onClick={_() => toggle(product.id)}
        aria-label={_active ? 'Remove from favorites' : 'Add to favorites'}
      >
        <Heart className={_active ? 'text-red-500 fill-red-500' : 'text-gray-500'} />
      </button>

    <div className="w-full h-40 relative mb-2">
      {_imageUrl && !imageError ? (_<Image
          src={imageUrl}
          alt={_imageAltText}
          style={_{ objectFit: 'cover'}}
          onError={_(e) => handleImageError(e)}
          priority={_false}
        />
      ) : (
        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
          <span className="text-gray-500">No Image</span>
        </div>
      )}
      {_stockStatus && (
        <Badge variant={stockVariant as any} className="absolute top-2 left-2">
          {_stockStatus}
        </Badge>
      )}
      {_active && (
        <div className="absolute top-10 left-2 p-1 rounded-full bg-background/70">
          <Heart className="text-red-500 fill-red-500" />
        </div>
      )}
    </div>
      <Link href={_`/marketplace/listing/${product.id}`}>
        <div className="w-full h-40 relative mb-2 cursor-pointer">
          {_imageUrl && !imageError ? (_<Image
              src={imageUrl}
              alt={_imageAltText}
              style={_{ objectFit: 'cover'}}
              onError={_(e) => handleImageError(e)}
              priority={_false}
            />
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">No Image</span>
            </div>
          )}
          {_active && (
            <div className="absolute top-2 left-2 p-1 rounded-full bg-background/70">
              <Heart className="text-red-500 fill-red-500" />
            </div>
          )}
        </div>
        <h3 className="font-semibold mb-1">{_productTitle}</h3>
      </Link>
      {_product.price != null && (
        <p className="text-sm text-muted-foreground">
          {product.currency}
          {_product.price}
        </p>
      )}
      <div className="mt-2 flex gap-2">
        <Button size="sm" className="flex-1" onClick={_addToCart}>
          Add to Cart
        </Button>
        {_onBuy && (_<TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  onClick={(e) => {
                    e.stopPropagation();
                    if (onBuy) {
                      setIsRedirecting(true);
                      onBuy()
                        .catch__(() => {
                          // Error is handled by parent, _but we still need to reset loading locally})
                        .finally__(() => {_setIsRedirecting(false); // Always reset loading state
                          if (onBuyAttemptComplete) {
                            onBuyAttemptComplete(); // Notify parent if it provided this callback}
                        });
                    }
                  }}
                  size="sm"
                  variant="outline"
                  className="flex-1"
                  data-testid="buy-now-button"
                  disabled={_!isAuthenticated || buyDisabled || isRedirecting}
                >
                  {_isRedirecting ? (
                    <>
                      <span className="animate-spin inline-block mr-2 h-4 w-4 border-2 border-current border-t-transparent rounded-full" role="status" aria-hidden="true"></span>
                      Processing...
                    </>
                  ) : (
                    'Buy Now'
                  )}
                </Button>
              </TooltipTrigger>
              {_!isAuthenticated && !isRedirecting && (
                <TooltipContent>Login required</TooltipContent>
              )}
            </Tooltip>
          </TooltipProvider>
        )}
      </div>
    </div>
  );
}
