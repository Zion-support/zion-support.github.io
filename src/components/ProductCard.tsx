<<<<<<< HEAD
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


  const stockStatus = null;
    product.stock === undefined
      : 'In stock'
  const stockVariant = null;
    product.stock === undefined
  const productTitle = product.title
  const imageUrl = Array.isArray(product.images) && product.images.length > 0 ? product.images[0] : null
  const imageAltText = productTitle
  const isMobile = useMediaQuery('(max-width: 768px)')
  const isTablet = useMediaQuery('(max-width: 1200px)')
  const imageSizes = isMobile ? '100vw' : isTablet ? '50vw' : '33vw'

  )
}
  )
}
;
;
import Link from 'next/link',;
import { Heart } from 'lucide-react';
<<<<<<< HEAD
import { useWishlist } from '@/hooks/useWishlist',;
import { Button } from '@/components/ui/button',;
import { Badge } from '@/components/ui/badge',;
import {;
  Tooltip,;
  TooltipContent,;
  TooltipProvider,;
  TooltipTrigger} from '@/components/ui/tooltip',;
import { useDispatch } from 'react-redux',;
import type { AppDispatch } from '@/store',;
import { addItem } from '@/store/cartSlice',;
import Image from 'next/image',;
import React, { useState, useEffect } from 'react',;
import { useAuth } from '@/context/auth/AuthProvider',;
import { useRouter } from 'next/router',;
import { Product } from '@/services/marketplace',;
import { useMediaQuery } from 'usehooks-ts',;
import { toast } from '@/hooks/use-toast',;
import { captureException } from '@/utils/sentry',;
interface ProductCardProps {;
  product: Product,;
  onBuy?: () => Promise<void>, // Changed to allow async and signal completion/failure;
  onBuyAttemptComplete?: () => void, // Callback to signal the buy attempt is finished (success or fail);
  /** Disable the Buy Now button (e.g. when the checkout route isn't ready). */;
  buyDisabled?: boolean;
}
;
export default function ProductCard({ product, onBuy, onBuyAttemptComplete, buyDisabled = false }: ProductCardProps) {;
  const { isAuthenticated } = useAuth(),;
  const { isWishlisted, toggle } = useWishlist(),;
  const [imageError, setImageError] = useState(false),;
  const [isRedirecting, setIsRedirecting] = useState(false), // Added for loading state;
  const router = useRouter(),;
  const stockStatus =;
const stockStatus =;
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
=======
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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const imageSizes = isMobile ? '100vw' : isTablet ? '50vw' : '33vw';

  );
}

  );
}
<<<<<<< HEAD
;


  );
}
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const stock_status =;
    product.stock === undefined;
      : 'In stock';
  const stock_variant =;
    product.stock === undefined;
  const product_title = product.title;
  const image_url = Array.is_array (product.images) && product.images.length > 0 ? product.images[0] : null;
  const imageAltText = product_title;
  const is_mobile = useMediaQuery ('(max - width: 768px)'),
  const is_tablet = useMediaQuery ('(max - width: 1200px)'),
  const image_sizes = is_mobile ? '100vw' : is_tablet ? '50vw' : '33vw');
}
  );
}
<<<<<<< HEAD
import Link from 'next/link',;
import { Heart } from 'lucide-react';
import { useWishlist } from '@/hooks/useWishlist',;
import { Button } from '@/components/ui/button',;
import { Badge } from '@/components/ui/badge',;
import {;
  Tooltip,;
  TooltipContent,;
  TooltipProvider,;
  TooltipTrigger} from '@/components/ui/tooltip',;
import { useDispatch } from 'react-redux',;
import type { AppDispatch } from '@/store',;
import { addItem } from '@/store/cartSlice',;
import Image from 'next/image',;
import React, { useState, useEffect } from 'react',;
import { useAuth } from '@/context/auth/AuthProvider',;
import { useRouter } from 'next/router',;
import { Product } from '@/services/marketplace',;
import { useMediaQuery } from 'usehooks-ts',;
import { toast } from '@/hooks/use-toast',;
import { captureException } from '@/utils/sentry',;
;
interface ProductCardProps {;
  product:Product,;
  onBuy?:() => Promise<void>, // Changed to allow async and signal completion/failure;
  onBuyAttemptComplete?:() => void, // Callback to signal the buy attempt is finished (success or fail);
  /** Disable the Buy Now button (e.g. when the checkout route isn't ready). */;
  buyDisabled?:boolean;
}
;
export default function ProductCard({ product, onBuy, onBuyAttemptComplete, buyDisabled = false } ProductCardProps) {;
  const { isAuthenticated } = useAuth(),;
  const { isWishlisted, toggle } = useWishlist(),;
  const [imageError, setImageError] = useState(false),;
  const [isRedirecting, setIsRedirecting] = useState(false), // Added for loading state;
  const router = useRouter(),;
;
  const stockStatus =;
    product.stock === undefined;
      ? 'In stock';
      :product.stock <= 0;
      ? 'Out of stock';
      :product.stock <= 5;
      ? 'Low stock';
      :'In stock',;
;
  const stockVariant =;
    product.stock === undefined;
      ? 'success';
      :product.stock <= 0;
      ? 'destructive';
      :product.stock <= 5;
      ? 'warning';
      :'success',;
  // Reset redirecting state if component unmounts (e.g., navigation cancelled by user);
  useEffect(() => {;
    return () => {;
      setIsRedirecting(false),;
    },;
  }, []),;
;
  if (!product || typeof product.id !== 'string' || typeof product.title !== 'string' || product.title.trim() === '') {;
    captureException(new Error('Invalid product data received by ProductCard'), {;
      extra:{ product }}),;
    return (;
      <div className="relative border rounded-lg bg-card p-4 text-center h-full flex flex-col justify-center items-center" data-testid="product-card-error">;
        <p className="text-destructive text-sm">Product information unavailable.</p>;
        {/* Optionally, provide more details if product ID is known */}
        {/* {product && product.id && <p className="text-xs text-muted-foreground">ID:{product.id}</p>} */}
      </div>;
    ),;
    product.stock === undefined;
      ? 'In stock';
      : product.stock <= 0;
      ? 'Out of stock';
      : product.stock <= 5;
      ? 'Low stock';
      : 'In stock',;
  const stockVariant =;
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
=======
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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <p className="text-destructive text-sm">Product information unavailable.</p>
        {/* Optionally, provide more details if product ID is known */}
        {/* {product && product.id && <p className="text-xs text-muted-foreground">ID: {product.id}</p>} */}
      </div>
    </div>);
}
;
;
=======
;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
