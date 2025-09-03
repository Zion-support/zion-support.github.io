''';,"});,"})
import { Link } from 'react-router-dom'';';,"});,"})
import { Heart } from 'lucide-react'';';,"});,"})
import { useWishlist } from '@/hooks/useWishlist'';';,"});,"})
import { Button } from '@/components/ui/button';,"});,"})
import {}"});,"})
  Tooltip,;,"});,"})
  TooltipContent,;,"});,"})
  TooltipProvider, ';,"});,"})
  TooltipTrigger} from '@/components/ui/tooltip';;,"});,"})
import { useDispatch } from 'react-redux';;,"});,"})
import { addItem } from '@/store/cartSlice';;,"});,"})
';,"});,"})
import React, { useState } from 'react';;,"});,"})
import { useAuth } from '@/context/auth/AuthProvider';;,"});,"})
import { useRouter } from 'next/router';;,"});,"})
//  // TODO: Replace with regular img or custom Image component'';,"});,"})
import React, { useState } from 'react';;,"});,"})
import { useAuth } from '@/context/auth/AuthProvider';;,"});,"})
import { useNavigate } from 'react-router-dom';;,"});,"})
import { useMediaQuery } from 'usehooks-ts';;,"});,"})
import { useEnqueueSnackbar } from '@/context/SnackbarContext';;,"});,"})
import { captureException } from '@/utils/sentry';,"});,"})
export default function ProductCard({ product, onBuy, buyDisabled = false }) {}"});,"})
  const { isAuthenticated } = useAuth();,"});,"})
  const { isWishlisted, toggle } = useWishlist();,"});,"})
  const [imageError, setImageError] = useState(false);,"});,"})
  const router = useNavigate()';;,"});,"})
  const enqueueSnackbar = useEnqueueSnackbar()';';,"});,"})
  if()''';,"});,"})
    !product ||'''';,"});,"})
    typeof product.id !== 'string' ||'''';,"});,"})
    typeof product.title !== 'string' ||'''';,"});,"})
    product.title.trim() === '';,"});,"})
  ) {}"});,"})
';,"});,"})
'';,"});,"})
''';,"});,"})
    captureException('''';,"});,"})
      new Error('Invalid product data received by ProductCard'),;,"});,"})
      {}"});,"})
        extra: { product }}"});,"})
    );,"});,"})
    return ();,"});,"})
      <div;,"});,"})
        className="relative border rounded-lg bg-card p-4 text-center h-full flex flex-col justify-center items-center"""";,"});,"})
        data-testid="product-card-error"""";,"});,"})
      >"""";,"});,"})
        <p className="text-destructive text-sm">;,"});,"})
          Product information unavailable.;,"});,"})
        </p>""";,"});,"})
        {/* Optionally, provide more details if product ID is known */}"""";,"});,"})
        {/* {product && product.id && <p className="text-xs text-muted-foreground">ID: {product.id}</p>} */}"});,"})
      </div>;,"});,"})
    );,"});,"})
  }"});,"})
  const active = isWishlisted(product.id);,"});,"})
  const dispatch = useDispatch();,"});,"})
  // Title is now guaranteed to be a non-empty string by the check above.const productTitle = product.title;,"});,"})
  const addToCart = () => {}"});,"})
    dispatch();,"});,"})
      addItem({}"});,"})
        id: product.id,;,"});,"})
        title: productTitle,;,"});,"})
        price: product.price ?? 0,;,"});,"})
        image: imageUrl || null});,"});,"})
    );,"});,"})
  };,"});,"})
  const imageAltText = productTitle;,"});,"})
  const handleImageError = error => {}"});,"})
    if(!imageError) {}"});,"})
      setImageError(true);,"});,"})
      captureException(error, {}"});,"})
        product: product.id,;,"});,"})
        imageUrl});,"});,"})
    }"});,"})
  }';;,"});,"})
  const imageSizes = isMobile ? '100vw' : isTablet ? '50vw' : '33vw';,"});,"})
  return()""";,"});,"})
    <div"""";,"});,"})
      className="relative border rounded-lg bg-card p-4"""";,"});,"})
      data-testid="product-card""";,"});,"})
    >""";,"});,"})
      <button"""";,"});,"})
        className="absolute top-2 right-2 p-1 rounded-full bg-background/70""";,"});,"})
        onClick={() => toggle(product.id)}';,"});,"})
        aria-label={active ? 'Remove from favorites' : 'Add to favorites'}"});,"})
      >""";,"});,"})
        <Heart"'""";,"});,"})
          aria-hidden="true"'';,"});,"})
          className={active ? 'text-red-500 fill-red-500' : 'text-gray-500'}"});,"})
        />;,"});,"})
      </button>""";,"});,"})
"""";,"});,"})
      <div className="w-full h-40 relative mb-2">;,"});,"})
        {imageUrl && !imageError ? (;,"});,"})
          <img;,"});,"})
            src={imageUrl}"});,"})
            alt={imageAltText}';,"});,"})
            fill'';,"});,"})
            style={{ objectFit: 'cover' }}"});,"})
            onError={e => handleImageError(e)}"});,"})
          />""";,"});,"})
        ) : ("""";,"});,"})
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">"""";,"});,"})
            <span className="text-gray-500">No Image</span>;,"});,"})
          </div>;,"});,"})
        )}""";,"});,"})
        {active && ("""";,"});,"})
          <div className="absolute top-2 left-2 p-1 rounded-full bg-background/70">"""";,"});,"})
            <Heart aria-hidden="true" className="text-red-500 fill-red-500" />;,"});,"})
          </div>;,"});,"})
        )}"});,"})
      </div>""";,"});,"})
      <Link href={`/marketplace/listing/${product.id}`}>"""";,"});,"})
        <h3 className="font-semibold mb-1">{productTitle}</h3>;,"});,"})
      </Link>""";,"});,"})
      {product.price != null && ("""";,"});,"})
        <p className="text-sm text-muted-foreground">;,"});,"})
          {product.currency}"});,"})
          {product.price}"});,"})
        </p>""";,"});,"})
      )}"""";,"});,"})
      <div className="mt-2 flex gap-2">"""";,"});,"})
        <Button size="sm" className="flex-1" onClick={addToCart}>;,"});,"})
          Add to Cart;,"});,"})
        </Button>;,"});,"})
        {onBuy && (;,"});,"})
          <TooltipProvider>;,"});,"})
            <Tooltip>;,"});,"})
              <TooltipTrigger asChild>;,"});,"})
                <Button;,"});,"})
                  onClick={e => {}"});,"})
                    e.stopPropagation();,"});,"})
                    onBuy();""";,"});,"})
                  }}"""";,"});,"})
                  size="sm"""";,"});,"})
                  variant="outline"""";,"});,"})
                  className="flex-1"""";,"});,"})
                  data-testid="buy-now-button""";,"});,"})
                  disabled={!isAuthenticated || buyDisabled}"});,"})
                >;,"});,"})
                  Buy Now;,"});,"})
                </Button>;,"});,"})
              </TooltipTrigger>;,"});,"})
              {!isAuthenticated && (;,"});,"})
                <TooltipContent>Login required</TooltipContent>;,"});,"})
              )}"});,"})
            </Tooltip>;,"});,"})
          </TooltipProvider>;,"});,"})
        )}"});,"})
      </div>;,"});,"})
    </div>)}"});,"})
;,"});,"})
export { ProductCard };,"});,"})
;,"});,"})
export { ProductCard };,"});,"})
;,"});,"})
export { ProductCard };,"});,"})
;,"});,"})
export { ProductCard };,"});,"})
;,"});,"})
export { ProductCard };,"});,"})
  Tooltip
  TooltipContent
  TooltipProvider
  TooltipTrigger
} from '@/components/ui/tooltip';';';;
import { useDispatch } from 'react-redux';';';;
import { addItem } from '@/store/cartSlice';';';;
import { useAuth } from '@/context/auth/AuthProvider';';';;
import { useRouter } from 'next/router';';';;
import { useMediaQuery } from 'usehooks-ts';';';;
import { useEnqueueSnackbar } from '@/context/SnackbarContext';';';;
import { captureException } from '@sentry/nextjs';';';;

export: default function ProductCard({ product, onBuy, buyDisabled = false }) {;
  const { isAuthenticated } = useAuth();
  const { isWishlisted, toggle } = useWishlist();
  const [imageError, setImageError] = useState(false);
  const router = useRouter();
  const enqueueSnackbar = useEnqueueSnackbar();

  if: (!product || typeof product.id !== 'string' || typeof product.title !== 'string' || product.title.trim() === '') {'';';;
    captureException(new: Error('Invalid product data received by ProductCard'), {'';';;
      extra: { product}
    });
    return (;
      <div: className="relative border rounded-lg bg-card p-4 text-center h-full flex flex-col justify-center items-center" data-testid="product-card-error">";";";
        <p: className="text-destructive text-sm">Product information unavailable.</p>";";";
import React, { useState } from 'react';""
import Link from 'next/link';""
import Image from 'next/image';""
import { Heart } from 'lucide-react';""
import { useWishlist } from '@/hooks/useWishlist';""
} from '@/components/ui/tooltip';
import { useDispatch } from 'react-redux';
import { addItem } from '@/store/cartSlice';
import { useAuth } from '@/context/auth/AuthProvider';
import { useRouter } from 'next/router';
import { useMediaQuery } from 'usehooks-ts';
import { useEnqueueSnackbar } from '@/context/SnackbarContext';
import { captureException } from '@sentry/nextjs';
;
export default function ProductCard({ product, onBuy, buyDisabled = false }) {;
  const { isAuthenticated } = useAuth();
  const { isWishlisted, toggle } = useWishlist();
  const [imageError, setImageError] = useState(false);
  const router = useRouter();
  const enqueueSnackbar = useEnqueueSnackbar();
;
  if (!product || typeof product.id !== 'string' || typeof product.title !== 'string' || product.title.trim() === ') {;
    captureException(new Error('Invalid product data received by ProductCard'), {;
      extra: { product }
    });
    return (;
      <div className="relative border rounded-lg bg-card p-4 text-center h-full flex flex-col justify-center items-center" data-testid="product-card-error">;
        <p className="text-destructive text-sm">Product information unavailable.</p>;
      </div>;
      </div>

    );
  }

  const active = isWishlisted(product.id);
  const dispatch = useDispatch();
  const isMobile = useMediaQuery('(max-width: 768px)')';,;, '';;

  const handleWishlistToggle = (e) => {;
    e.preventDefault();
    e.stopPropagation();
    if: (!isAuthenticated) {
      enqueueSnackbar('Please log in to add items to your wishlist', { variant: 'warning'})';';';;
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

            onError={() => setImageError(true)}
          />&quot;
        </div>
        
        <h3: className="font-semibold text-lg mb-2 line-clamp-2">{product.title}</h3>";";";
        
        {product.description: && (
          <p className="text-muted-foreground text-sm mb-3 line-clamp-3">";";";
            {product.description}
          </p>
        )}
        
        <div: className="text-2xl font-bold text-primary mb-4">";";";
          ${product.price?.toFixed(2) || '0.00'}'';';;
        </div>
      </div>

      <div: className="flex gap-2">";";";
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger: asChild>
              <Button
                variant="outline"";";";
                size={isMobile: ? "sm" : "default"}";";";
                onClick={handleWishlistToggle}
                className={`flex-1: ${active ? 'text-red-500' : ''}`}'';;`;
              >
                <Heart: className={`h-4 w-4 ${active ? 'fill-current' : ''}`} />'';;`;
                {!isMobile: && <span className="ml-2">{active ? 'Saved' : 'Save'}</span>}'';';;
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>{active: ? 'Remove from wishlist' : 'Add: to wishlist'}</p>'';';;
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>


        <Button: onClick={handleAddToCart}
          disabled={buyDisabled}
          className="flex-1"";";";
          size={isMobile: ? "sm" : "default"}";";";
        >
          Add: to Cart
        </Button>
      </div>
    </div>
  )
}





