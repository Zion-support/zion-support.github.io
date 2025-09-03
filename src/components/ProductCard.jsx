import React, { useState } from 'reactimport Link from next/linkimport Image from next/imageimport { Heart } from lucide-reactimport { useWishlist } from @/hooks/useWishlistimport { Button } from @/components/ui/buttonimport {'
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from @/components/ui/tooltipimport { useDispatch } from react-reduximport { addItem } from @/store/cartSliceimport { useAuth } from @/context/auth/AuthProviderimport { useRouter } from next/routerimport { useMediaQuery } from usehooks-tsimport { useEnqueueSnackbar } from @/context/SnackbarContextimport { captureException } from @sentry/nextjsexport default function ProductCard({ product, onBuy, buyDisabled = false }) {
  const { isAuthenticated } = useAuth();
  const { isWishlisted, toggle } = useWishlist();
  const [imageError, setImageError] = useState(false);
  const router = useRouter();
  const enqueueSnackbar = useEnqueueSnackbar();

  if (!product || typeof product.id !== string' || typeof product.title !== 'string' || product.title.trim() === '') {'
    captureException(new Error('Invalid product data received by ProductCard'), {
      extra: { product }
    });
    return (
      <div className="relative border rounded-lg bg-card p-4 text-center h-full flex flex-col justify-center items-center" data-testid="product-card-error">
        <p className="text-destructive text-sm">Product information unavailable.</p>
      </div>
    );
  }

  const active = isWishlisted(product.id);
  const dispatch = useDispatch();
  const isMobile = useMediaQuery('(max-width: 768px)');

  const handleWishlistToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!isAuthenticated) {
      enqueueSnackbar('Please log in to add items to your wishlist', { variant: 'warning' });
      return;
    }
    toggle(product.id, product);
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!isAuthenticated) {
      enqueueSnackbar('Please log in to add items to your cart', { variant: 'warning' });
      return;
    }
    dispatch(addItem({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      quantity: 1
    }));
    enqueueSnackbar('Item added to cart', { variant: 'success' });
  };

  const handleCardClick = () => {
    router.push(`/products/${product.id}`);
  };

  return (
    <div 
      className="relative border rounded-lg bg-card p-4 text-center h-full flex flex-col justify-between cursor-pointer hover:shadow-lg transition-shadow"
      onClick={handleCardClick}
      data-testid="product-card"
    >
      <div className="flex-1">
        <div className="relative w-full h-48 mb-4">
          <Image
            src={imageError ? '/placeholder-product.jpg' : product.image || '/placeholder-product.jpg'}
            alt={product.title}
            fill
            className="object-cover rounded-md"
            onError={() => setImageError(true)}
          />
        </div>
        
        <h3 className="font-semibold text-lg mb-2 line-clamp-2">{product.title}</h3>
        
        {product.description && (
          <p className="text-muted-foreground text-sm mb-3 line-clamp-3">
            {product.description}
          </p>
        )}
        
        <div className="text-2xl font-bold text-primary mb-4">
          ${product.price?.toFixed(2) || '0.00'}
        </div>
      </div>

      <div className="flex gap-2">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="outline"
                size={isMobile ? "sm" : "default"}
                onClick={handleWishlistToggle}
                className={`flex-1 ${active ? 'text-red-500' : ''}`}
              >
                <Heart className={`h-4 w-4 ${active ? 'fill-current' : ''}`} />
                {!isMobile && <span className="ml-2">{active ? 'Saved' : 'Save'}</span>}
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>{active ? 'Remove from wishlist' : 'Add to wishlist'}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <Button
          onClick={handleAddToCart}
          disabled={buyDisabled}
          className="flex-1"
          size={isMobile ? "sm" : "default"}
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
}