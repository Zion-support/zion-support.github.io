<<<<<<< HEAD
=======
<<<<<<< HEAD
import React, {useState } from 'react';"
import Link from 'next/link';"
import Image from 'next/image';"
import {Heart } from 'lucide-react';"
import {useWishlist } from '@/hooks/useWishlist';"
=======
<<<<<<< HEAD
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
=======
<<<<<<< HEAD
>>>>>>> main
import React, { useState } from 'react';""
import Link from 'next/link';""
import Image from 'next/image';""
import { Heart } from 'lucide-react';""
<<<<<<< HEAD
import { useWishlist } from '@/hooks/useWishlist';""
=======
import { useWishlist } from '@/hooks/useWishlist';""
""
=======
<<<<<<< HEAD
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Heart } from 'lucide-react';
import { useWishlist } from '@/hooks/useWishlist';
import { Button } from '@/components/ui/button';
<<<<<<< HEAD
import {;
  Tooltip,;
  TooltipContent,;
  TooltipProvider,;
  TooltipTrigger;
=======
import {
  Tooltip, TooltipContent,
  TooltipProvider, TooltipTrigger
>>>>>>> main
} from '@/components/ui/tooltip';
import { useDispatch } from 'react-redux';
import { addItem } from '@/store/cartSlice';
import { useAuth } from '@/context/auth/AuthProvider';
import { useRouter } from 'next/router';
import { useMediaQuery } from 'usehooks-ts';
import { useEnqueueSnackbar } from '@/context/SnackbarContext';
import { captureException } from '@sentry/nextjs';
<<<<<<< HEAD
;
export default function ProductCard({ product, onBuy, buyDisabled = false }) {;
  const { isAuthenticated } = useAuth();
=======
>>>>>>> main

export default function ProductCard({ product, onBuy, buyDisabled = false }) {}
  const ;{ isAuthenticated } = useAuth();
>>>>>>> main
  const { isWishlisted, toggle } = useWishlist();
  const [imageError, setImageError] = useState(false);
  const router = useRouter();
  const enqueueSnackbar = useEnqueueSnackbar();
<<<<<<< HEAD
;
  if (!product || typeof product.id !== 'string' || typeof product.title !== 'string' || product.title.trim() === ') {;
    captureException(new Error('Invalid product data received by ProductCard'), {;
      extra: { product }
    });
    return (;
      <div className="relative border rounded-lg bg-card p-4 text-center h-full flex flex-col justify-center items-center" data-testid="product-card-error">;
        <p className="text-destructive text-sm">Product information unavailable.</p>;
      </div>;
=======

  if (!product || typeof product.id !== &apos;string&apos; || typeof product.title !== &apos;string&apos; || product.title.trim() === &apos;&apos;) {
    captureException(new Error(&apos;Invalid product data received by ProductCard&apos;), {
      extra: { product }
    });
    return (&apos;&apos;
      <div className=&quot;relative border rounded-lg bg-card p-4 text-center h-full flex flex-col justify-center items-center&quot; data-testid=&quot;product-card-error&quot;>&quot;"
        <p className=&quot;text-destructive text-sm&quot;>Product information unavailable.&quot;</p>
      </div>
>>>>>>> main
    );
  }
;
  const active = isWishlisted(product.id);
  const dispatch = useDispatch();
<<<<<<< HEAD
  const isMobile = useMediaQuery('(max-width: 768px)');
;
  const handleWishlistToggle = (e) => {;
    e.preventDefault();
    e.stopPropagation();
    if (!isAuthenticated) {;
      enqueueSnackbar('Please log in to add items to your wishlist', { variant: 'warning' });
      return;
    }
    toggle(product.id, product);
  };
;
  const handleAddToCart = (e) => {;
    e.preventDefault();
    e.stopPropagation();
    if (!isAuthenticated) {;
      enqueueSnackbar('Please log in to add items to your cart', { variant: 'warning' });
      return;
    }
    dispatch(addItem({;
      id: product.id,;
      title: product.title,;
      price: product.price,;
      image: product.image,;
      quantity: 1;
    }));
    enqueueSnackbar('Item added to cart', { variant: 'success' });
  };
;
  const handleCardClick = () => {;
    router.push(`/products/${product.id}`);
  };
;
  return (;
    <div ;
      className="relative border rounded-lg bg-card p-4 text-center h-full flex flex-col justify-between cursor-pointer hover:shadow-lg transition-shadow";
      onClick={handleCardClick}
      data-testid="product-card";
    >;
      <div className="flex-1">;
        <div className="relative w-full h-48 mb-4">;
          <Image;
            src={imageError ? '/placeholder-product.jpg' : product.image || '/placeholder-product.jpg'}
            alt={product.title}
            fill;
            className="object-cover rounded-md";
            onError={() => setImageError(true)}
          />;
        </div>;
        ;
        <h3 className="font-semibold text-lg mb-2 line-clamp-2">{product.title}</h3>;
        ;
        {product.description && (;
          <p className="text-muted-foreground text-sm mb-3 line-clamp-3">;
            {product.description}
          </p>;
        )}
        ;
        <div className="text-2xl font-bold text-primary mb-4">;
          ${product.price?.toFixed(2) || '0.00'}
        </div>;
      </div>;

      <div className="flex gap-2">;
        <TooltipProvider>;
          <Tooltip>;
            <TooltipTrigger asChild>;
              <Button;
                variant="outline";
                size={isMobile ? "sm" : "default"}
                onClick={handleWishlistToggle}
                className={`flex-1 ${active ? 'text-red-500' : '}`}
              >;
                <Heart className={`h-4 w-4 ${active ? 'fill-current' : '}`} />;
                {!isMobile && <span className="ml-2">{active ? 'Saved' : 'Save'}</span>}
              </Button>;
            </TooltipTrigger>;
            <TooltipContent>;
              <p>{active ? 'Remove from wishlist' : 'Add to wishlist'}</p>;
            </TooltipContent>;
          </Tooltip>;
        </TooltipProvider>;
=======
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
      id: product.id, title: product.title,
      price: product.price, image: product.image,
      quantity: 1
    }));
    enqueueSnackbar(&apos;Item added to cart&apos;, { variant: &apos;success&apos; });
  };&apos;

  const handleCardClick = () => {
    router.push(`/products/${product.id}`);
  };

  return (
    <div 
<<<<<<< HEAD
      className=&quot;relative border rounded-lg bg-card p-4 text-center h-full flex flex-col justify-between cursor-pointer hover:shadow-lg transition-shadow&quot;
=======
      className="relative border rounded-lg bg-card p-4 text-center h-full flex flex-col justify-between cursor-pointer hover: shadow-lg transition-shadow"
>>>>>>> main
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
>>>>>>> main

        <Button;
          onClick={handleAddToCart}
          disabled={buyDisabled}
<<<<<<< HEAD
          className="flex-1";
          size={isMobile ? "sm" : "default"}
        >;
          Add to Cart;
        </Button>;
      </div>;
    </div>;
=======
          className=&quot;flex-1&quot;
          size={isMobile ? &quot;sm&quot; : &quot;default&quot;}
        >
          Add to Cart&quot;
        </Button>
      </div>
    </div>
>>>>>>> main
  );
}
=======
import React, { useState } from 'react
import Link from 'next/link
import Image from 'next/image
import { Heart } from 'lucide-react
import { useWishlist } from '@/hooks/useWishlist
"
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
