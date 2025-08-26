import React, { useState } from 'react';
<<<<<<< HEAD:src/components/ProductCard.tsx
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { getStripe } from '@/utils/getStripe';
import { useAuth } from '@/hooks/useAuth';

=======
import { useAuth } from '@/context/auth/AuthProvider';
import { useRouter } from 'next/router';
import { Product } from '@/services/marketplace';
import { useMediaQuery } from 'usehooks-ts';
import { useEnqueueSnackbar } from '@/context/SnackbarContext';
import { closeSnackbar } from 'notistack';
import { captureException } from '@/utils/sentry';
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/ProductCard.tsx
interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  priceId: string;
}
<<<<<<< HEAD:src/components/ProductCard.tsx

export function ProductCard({ id, name, price, priceId }: ProductCardProps) {
  const { user } = useAuth();
  const [showGuest, setShowGuest] = useState(false);
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  const createSession = async (body: any) => {
    const res = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    const { sessionId } = await res.json();
    const stripe = await getStripe();
    if (stripe && sessionId) {
      await stripe.redirectToCheckout({ sessionId });
    }
  };

  const handleBuy = async () => {
    if (!user) {
      setShowGuest(true);
      return;
    }
    await createSession({ priceId });
  };

  const handleGuest = async (e: React.FormEvent) => {
    e.preventDefault();
    await createSession({ priceId, email, shipping: address });
  };

  return (
    <div className="border p-4 rounded-md space-y-3">
      <h3 className="font-bold">{name}</h3>
      <p>${price.toFixed(2)}</p>
      <Button onClick={handleBuy}>Buy Now</Button>

      <Dialog open={showGuest} onOpenChange={setShowGuest}>
        <DialogContent>
          <form onSubmit={handleGuest} className="space-y-4">
            <DialogHeader>
              <DialogTitle>Checkout as Guest</DialogTitle>
              <DialogDescription>Enter email and shipping address</DialogDescription>
            </DialogHeader>
            <Input aria-label="Email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            <Input aria-label="Shipping" required value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Shipping Address" />
            <DialogFooter>
              <Button type="submit" className="w-full">Checkout</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
=======
export default function ProductCard({ product, onBuy, buyDisabled = false }: ProductCardProps) {
  const { isAuthenticated } = useAuth();
  const { isWishlisted, toggle } = useWishlist();
  const [imageError, setImageError] = useState(false);
  const router = useRouter();
  const enqueueSnackbar = useEnqueueSnackbar();
  if (!product || typeof product.id !== 'string' || typeof product.title !== 'string' || product.title.trim() === '') {
    captureException(new Error('Invalid product data received by ProductCard'), {
      extra: { product },
    });
    return (
      <div className="relative border rounded-lg bg-card p-4 text-center h-full flex flex-col justify-center items-center" data-testid="product-card-error">
        <p className="text-destructive text-sm">Product information unavailable.</p>
        {/* Optionally, provide more details if product ID is known */}
        {/* {product && product.id && <p className="text-xs text-muted-foreground">ID: {product.id}</p>} */}
      </div>
    );
  }
  const active = isWishlisted(product.id);
  const dispatch = useDispatch<AppDispatch>();
  // Title is now guaranteed to be a non-empty string by the check above.
  const productTitle = product.title;
  const addToCart = () => {
    dispatch(
      addItem({
        id: product.id,
        title: productTitle,
        price: product.price ?? 0,
        image: imageUrl || undefined,
      })
    );
  };
  const imageUrl = Array.isArray(product.images) && product.images.length > 0 ? product.images[0] : null;
  const imageAltText = productTitle;
  const handleImageError = (error: any) => {
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
  return (
    <div className="relative border rounded-lg bg-card p-4" data-testid="product-card">
      <button
        className="absolute top-2 right-2 p-1 rounded-full bg-background/70"
        onClick={() => toggle(product.id)}
        aria-label={active ? 'Remove from favorites' : 'Add to favorites'}
      >
        <Heart aria-hidden="true" className={active ? 'text-red-500 fill-red-500' : 'text-gray-500'} />
      </button>
    <div className="w-full h-40 relative mb-2">
      {imageUrl && !imageError ? (
        <Image
          src={imageUrl}
          alt={imageAltText}
          fill
          style={{ objectFit: 'cover' }}
          onError={(e) => handleImageError(e)}
          priority={false}
          sizes={imageSizes}
        />
      ) : (
        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
          <span className="text-gray-500">No Image</span>
        </div>
      )}
      {active && (
        <div className="absolute top-2 left-2 p-1 rounded-full bg-background/70">
          <Heart aria-hidden="true" className="text-red-500 fill-red-500" />
        </div>
      )}
    </div>
      <Link href={`/marketplace/listing/${product.id}`}>
        <h3 className="font-semibold mb-1">{productTitle}</h3>
      </Link>
      {product.price != null && (
        <p className="text-sm text-muted-foreground">
          {product.currency}
          {product.price}
        </p>
      )}
      <div className="mt-2 flex gap-2">
        <Button size="sm" className="flex-1" onClick={addToCart}>
          Add to Cart
        </Button>
        {onBuy && (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  onClick={(e) => {
                    e.stopPropagation();
                    onBuy();
                  }}
                  size="sm"
                  variant="outline"
                  className="flex-1"
                  data-testid="buy-now-button"
                  disabled={!isAuthenticated || buyDisabled}
                >
                  Buy Now
                </Button>
              </TooltipTrigger>
              {!isAuthenticated && (
                <TooltipContent>Login required</TooltipContent>
              )}
            </Tooltip>
          </TooltipProvider>
        )}
      </div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/ProductCard.tsx
    </div>
  );
}
