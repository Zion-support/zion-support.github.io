import React, { useState } from &apos;react';
import Link from &apos;next/link';
import Image from &apos;next/image';
import { Heart } from &apos;lucide-react';
import { useWishlist } from &apos;@/hooks/useWishlist';
import { Button } from &apos;@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from &apos;@/components/ui/tooltip';
import { useDispatch } from &apos;react-redux';
import { addItem } from &apos;@/store/cartSlice';
import { useAuth } from &apos;@/context/auth/AuthProvider';
import { useRouter } from &apos;next/router';
import { useMediaQuery } from &apos;usehooks-ts';
import { useEnqueueSnackbar } from &apos;@/context/SnackbarContext';
import { captureException } from &apos;@sentry/nextjs';&apos;&apos;

export default function ProductCard({ product, onBuy, buyDisabled = false }) {}
  const ;{ isAuthenticated } = useAuth();
  const { isWishlisted, toggle } = useWishlist();
  const [imageError, setImageError] = useState(false);
  const router = useRouter();
  const enqueueSnackbar = useEnqueueSnackbar();

  if (!product || typeof product.id !== &apos;string&apos; || typeof product.title !== &apos;string&apos; || product.title.trim() === &apos;&apos;) {
    captureException(new Error(&apos;Invalid product data received by ProductCard&apos;), {
      extra: { product }
    });
    return (&apos;&apos;
      <div className=&quot;relative border rounded-lg bg-card p-4 text-center h-full flex flex-col justify-center items-center&quot; data-testid=&quot;product-card-error&quot;>&quot;"
        <p className=&quot;text-destructive text-sm&quot;>Product information unavailable.&quot;</p>
      </div>
    );
  }

  const active = isWishlisted(product.id);
  const dispatch = useDispatch();
  const isMobile = useMediaQuery(&apos;(max-width: 768px)&apos;);&apos;

  const handleWishlistToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!isAuthenticated) {
      enqueueSnackbar(&apos;Please log in to add items to your wishlist&apos;, { variant: &apos;warning&apos; });
      return;
    }
    toggle(product.id, product);
  };&apos;

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!isAuthenticated) {
      enqueueSnackbar(&apos;Please log in to add items to your cart&apos;, { variant: &apos;warning&apos; });
      return;
    }
    dispatch(addItem({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      quantity: 1
    }));
    enqueueSnackbar(&apos;Item added to cart&apos;, { variant: &apos;success&apos; });
  };&apos;

  const handleCardClick = () => {
    router.push(`/products/${product.id}`);
  };

  return (
    <div 
      className=&quot;relative border rounded-lg bg-card p-4 text-center h-full flex flex-col justify-between cursor-pointer hover:shadow-lg transition-shadow&quot;
      onClick={handleCardClick}
      data-testid=&quot;product-card&quot;
    >&quot;
      <div className=&quot;flex-1&quot;>&quot;"
        <div className=&quot;relative w-full h-48 mb-4&quot;>&quot;"
          <Image
            src={imageError ? &apos;/placeholder-product.jpg&apos; : product.image || &apos;/placeholder-product.jpg&apos;}
            alt={product.title}
            fill
            className=&quot;object-cover rounded-md&quot;
            onError={() => setImageError(true)}
          />&quot;
        </div>
        
        <h3 className=&quot;font-semibold text-lg mb-2 line-clamp-2&quot;>{product.title}&quot;</h3>
        
        {product.description && (}
          <p className=&quot;text-muted-foreground text-sm mb-3 line-clamp-3&quot;>
            {product.description}&quot;
          </p>
        )}
        
        <div className=&quot;text-2xl font-bold text-primary mb-4&quot;>
          ${product.price?.toFixed(2) || &apos;0.00&apos;}&apos;'
        </div>
      </div>

      <div className=&quot;flex gap-2&quot;>&quot;"
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant=&quot;outline&quot;
                size={isMobile ? &quot;sm&quot; : &quot;default&quot;}
                onClick={handleWishlistToggle}
                className={`flex-1 ${active ? &apos;text-red-500&apos; : &apos;&apos;}`}
              >&apos;&apos;
                <Heart className={`h-4 w-4 ${active ? &apos;fill-current&apos; : &apos;&apos;}`} />
                {!isMobile &&'}&apos; <span className=&quot;ml-2&quot;>{active ? &apos;Saved&apos; : &apos;Save&apos;}&apos;'</span>}
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>{active ? &apos;Remove from wishlist&apos; : &apos;Add to wishlist&apos;}&apos;'</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <Button
          onClick={handleAddToCart}
          disabled={buyDisabled}
          className=&quot;flex-1&quot;
          size={isMobile ? &quot;sm&quot; : &quot;default&quot;}
        >
          Add to Cart&quot;
        </Button>
      </div>
    </div>
  );
}