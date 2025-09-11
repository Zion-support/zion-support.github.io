import Link from 'next/link';
import { _Heart } from 'lucide-react';
import { _useWishlist } from '../hooks/useWishlist';
import { _Button } from '../components/ui/button';
import { _Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, } from '../components/ui/tooltip';
import { _useDispatch } from 'react-redux';
import { _addItem } from '../store/cartSlice';
import Image from 'next/image';
import React, { useState } from 'react';
import { _useAuth } from '../context/auth/AuthProvider';
import { _useRouter } from 'next/router';
import { _useMediaQuery } from 'usehooks-ts';
import { _useEnqueueSnackbar } from '../context/SnackbarContext';
import { _captureException } from '../utils/sentry';

import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
export default function ProductCard({ product, onBuy, buyDisabled = false }) {
    const { isAuthenticated } = useAuth();
    const { isWishlisted, toggle } = useWishlist();
    const [imageError, setImageError] = useState(false);
    const _router = useRouter();
    const _enqueueSnackbar = useEnqueueSnackbar();
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
    const _active = isWishlisted(product.id);
    const _dispatch = useDispatch();
    // Title is now guaranteed to be a non-empty string by the check above.
    const _productTitle = product.title;
    const _addToCart = () => {
        dispatch(addItem({
            id: product.id,
            title: productTitle,
            price: product.price ?? 0,
            image: imageUrl || undefined,
        }));
    };
    const _imageUrl = Array.isArray(product.images) && product.images.length > 0 ? product.images[0] : null;
    const _imageAltText = productTitle;
    const _handleImageError = (error) => {
        if (!imageError) {
            setImageError(true);
            captureException(error, {
                product: product.id,
                imageUrl,
            });
        }
    };
    const _isMobile = useMediaQuery('(max-width: 768px)');
    const _isTablet = useMediaQuery('(max-width: 1200px)');
    const _imageSizes = isMobile ? '100vw' : isTablet ? '50vw' : '33vw';
    return (<div className="relative border rounded-lg bg-card p-4" data-testid="product-card">
      <button className="absolute top-2 right-2 p-1 rounded-full bg-background/70" onClick={() => toggle(product.id)} aria-label={active ? 'Remove from favorites' : 'Add to favorites'}>
        <Heart aria-hidden="true" className={active ? 'text-red-500 fill-red-500' : 'text-gray-500'}/>
      </button>

    <div className="w-full h-40 relative mb-2">
      {imageUrl && !imageError ? (<Image src={imageUrl} alt={imageAltText} fill style={{ objectFit: 'cover' }} onError={(e) => handleImageError(e)} priority={false} sizes={imageSizes}/>) : (<div className="w-full h-full bg-gray-200 flex items-center justify-center">
          <span className="text-gray-500">No Image</span>
        </div>)}
      {active && (<div className="absolute top-2 left-2 p-1 rounded-full bg-background/70">
          <Heart aria-hidden="true" className="text-red-500 fill-red-500"/>
        </div>)}
    </div>
      <Link href={`/marketplace/listing/${product.id}`}>
        <h3 className="font-semibold mb-1">{productTitle}</h3>
      </Link>
      {product.price != null && (<p className="text-sm text-muted-foreground">
          {product.currency}
          {product.price}
        </p>)}
      <div className="mt-2 flex gap-2">
        <Button size="sm" className="flex-1" onClick={addToCart}>
          Add to Cart
        </Button>
        {onBuy && (<TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button onClick={(e) => {
                e.stopPropagation();
                onBuy();
            }} size="sm" variant="outline" className="flex-1" data-testid="buy-now-button" disabled={!isAuthenticated || buyDisabled}>
                  Buy Now
                </Button>
              </TooltipTrigger>
              {!isAuthenticated && (<TooltipContent>Login required</TooltipContent>)}
            </Tooltip>
          </TooltipProvider>)}
      </div>
    </div>);
}
