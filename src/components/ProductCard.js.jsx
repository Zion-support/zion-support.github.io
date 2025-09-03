<<<<<<< HEAD
 export default function ProductCard ({ product, onBuy, buyDisabled = false }) { const { isAuthenticated } = useAuth ()  const { isWishlisted, toggle } = useWishlist ()  const [imageError, setImageError] = useState (false)  const router = useRouter ()  const enqueueSnackbar = useEnqueueSnackbar ()  if () !product ||' typeof product.id !== 'string' ||' typeof product.title !== 'string' ||' product.title.trim () === ') { captureException (' new Error ('Invalid product data received by ProductCard') , { extra: { product }})  return () <div className='relative border rounded - lg bg - card p - 4 text - center h - full flex flex - col justify - center items - center' data - testid='product - card - error' >' <p className='text - destructive text - sm'> Product information unavailable. </p> {}' {} </div>)  } const active = isWishlisted (product.id)  const dispatch = useDispatch () ';'';import Link from 'next/link'';import { Heart } from 'lucide-react'';
import { useWishlist } from '@/hooks/useWishlist'';
import { Button } from '@/components/ui/button';
import {}
  Tooltip,;
=======
<<<<<<< HEAD
import Link from 'next/link';
import {Heart } from 'lucide-react';
import {useWishlist } from '@/hooks/useWishlist';
import {Button } from '@/components/ui/button';
import {Tooltip,
>>>>>>> main
  TooltipContent,;
  TooltipProvider,;
  TooltipTrigger;
} from '@/components/ui/tooltip';
import {useDispatch } from 'react-redux';
import {addItem } from '@/store/cartSlice';
import Image from 'next/image';
import React, {useState } from 'react';
import {useAuth } from '@/context/auth/AuthProvider';
import {useRouter } from 'next/router';
import {useMediaQuery } from 'usehooks-ts';
import {useEnqueueSnackbar } from '@/context/SnackbarContext';
import {captureException } from '@/utils/sentry';
=======
<<<<<<< HEAD
import Link from 'next/link';""
import { Heart } from 'lucide-react';""
import { useWishlist } from '@/hooks/useWishlist';""
import { Button } from '@/components/ui/button';
import {
  Tooltip, TooltipContent,
  TooltipProvider, TooltipTrigger;", "
} from '@/components/ui/tooltip';""
import { useDispatch } from 'react-redux';""
import { addItem } from '@/store/cartSlice';""
import Image from 'next/image';""
import React, { useState } from 'react';""
import { useAuth } from '@/context/auth/AuthProvider';""
import { useRouter } from 'next/router';""
import { useMediaQuery } from 'usehooks-ts';""
import { useEnqueueSnackbar } from '@/context/SnackbarContext';""
=======
import Link from 'next/link
import { Heart } from 'lucide-react
import { useWishlist } from '@/hooks/useWishlist
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
<<<<<<< HEAD
  TooltipTrigger'
} from '@/components/ui/tooltip';
import { useDispatch } from 'react-redux';
import { addItem } from '@/store/cartSlice';
import Image from 'next/image';
import React, { useState } from 'react';
import { useAuth } from '@/context/auth/AuthProvider';
import { useRouter } from 'next/router';
import { useMediaQuery } from 'usehooks-ts';
import { useEnqueueSnackbar } from '@/context/SnackbarContext';
=======
  TooltipTrigger;",
} from '@/components/ui/tooltip
import { useDispatch } from 'react-redux
import { addItem } from '@/store/cartSlice
import Image from 'next/image
import React, { useState } from 'react
import { useAuth } from '@/context/auth/AuthProvider
import { useRouter } from 'next/router
import { useMediaQuery } from 'usehooks-ts
import { useEnqueueSnackbar } from '@/context/SnackbarContext
>>>>>>> main
>>>>>>> main
import { captureException } from '@/utils/sentry';
>>>>>>> main

export default function ProductCard(  {product, onBuy, buyDisabled = false }) {const { isAuthenticated } = useAuth();
  const {isWishlisted, toggle } = useWishlist();
  const [imageError, setImageError] = useState(false);
  const router = useRouter();
  const enqueueSnackbar = useEnqueueSnackbar();

  if (
<<<<<<< HEAD
    !product ||'
    typeof product.id !== 'string' ||'
    typeof product.title !== 'string' ||'
    product.title.trim() === ''
  ) {
    captureException('
=======
    !product ||""
    typeof product.id !== 'string' ||""
    typeof product.title !== 'string' ||""
    product.title.trim() === ''
<<<<<<< HEAD
  ) {captureException(
>>>>>>> main
      new Error('Invalid product data received by ProductCard'),
      { extra: { product } }
=======
  ) {
    captureException(""
      new Error('Invalid product data received by ProductCard'), { extra: { product } }
>>>>>>> main
    );
<<<<<<< HEAD
    return ('
      <div className='relative border rounded-lg bg-card p-4 text-center h-full flex flex-col justify-center items-center' data-testid='product-card-error>
=======
    return (""
      <div className='relative border rounded-lg bg-card p-4 text-center h-full flex flex-col justify-center items-center' data-testid='product-card-error'>""
>>>>>>> main
        <p className='text-destructive text-sm'>
          Product information unavailable.
<<<<<<< HEAD
        </p>""
import { Heart } from 'lucide-react'''
import { useWishlist } from '@/hooks/useWishlist'''
import {}""
  Tooltip, TooltipContent, TooltipProvider, ''
  TooltipTrigger} from '@/components/ui/tooltip'
import Image from 'next/image'
import React, { useState } from 'react'
=======
        </p>"
 export default function ProductCard ({ product, onBuy, buyDisabled = false }) { const { isAuthenticated } = useAuth ()  const { isWishlisted, toggle } = useWishlist ()  const [imageError, setImageError] = useState (false)  const router = useRouter ()  const enqueueSnackbar = useEnqueueSnackbar ()  if () !product ||' typeof product.id !== 'string' ||' typeof product.title !== 'string' ||' product.title.trim () === ') { captureException (' new Error ('Invalid product data received by ProductCard') , { extra: { product }})  return () <div className='relative border rounded - lg bg - card p - 4 text - center h - full flex flex - col justify - center items - center' data - testid='product - card - error'" >' <p className='text - destructive text - sm'> Product information unavailable. </p> {}' {} </div>)  } const active = isWishlisted (product.id)  const dispatch = useDispatch () ';import Link from 'next/link''
import { Heart } from 'lucide-react''
import { useWishlist }  from '@/hooks/useWishlist
import { Button } from '@/components/ui/button';
import {}"
  Tooltip, TooltipContent, TooltipProvider,'
  TooltipTrigger}  from '@/components/ui/tooltip';import { useDispatch } from 'react-redux
import { addItem } from '@/store/cartSlice
import Image from 'next/image'
import React, { useState }  from 'react';import { useAuth } from '@/context/auth/AuthProvider
import { useRouter } from 'next/router
import { useMediaQuery } from 'usehooks-ts
import { useEnqueueSnackbar } from '@/context/SnackbarContext
import { captureException } from '@/utils/sentry';
export default function ProductCard({ product, onBuy, buyDisabled = false }) {}
>>>>>>> main
  const { isAuthenticated } = useAuth()
  const { isWishlisted, toggle } = useWishlist()
  const [imageError, setImageError] = useState(false)""
  const router = useRouter()''
  const enqueueSnackbar = useEnqueueSnackbar()''
  if()''''
    !product ||''''
    typeof product.id !== 'string' ||''''
    typeof product.title !== 'string' ||''''
    product.title.trim() === ''
  ) {}""
''
''
''''
    captureException(''''
      new Error('Invalid product data received by ProductCard'), {}
        extra: { product }}
    )
    return ()
<<<<<<< HEAD
      <div ""
        className='relative border rounded-lg bg-card p-4 text-center h-full flex flex-col justify-center items-center'''''
        data-testid='product-card-error''''" >'''''"
=======
      <div "
        className='relative border rounded-lg bg-card p-4 text-center h-full flex flex-col justify-center items-center''
        data-testid='product-card-error''''" >''''
>>>>>>> main
        <p className='text-destructive text-sm'>
          Product information unavailable.""
        </p>''''
        {/* Optionally, provide more details if product ID is known */}''''
        {/* {product && product.id && <p className='text-xs text-muted-foreground'>ID: {product.id}</p>} */}
      </div>
    ), }
;
  const active = isWishlisted(product.id);
  const dispatch = useDispatch();

<<<<<<< HEAD
  const handleWishlistToggle = () => {if (!isAuthenticated) {
=======
  const handleWishlistToggle = () => {
<<<<<<< HEAD
    if (!isAuthenticated) {'
=======
    if (!isAuthenticated) {""
>>>>>>> main
>>>>>>> main
      enqueueSnackbar('Please log in to add items to your wishlist', { variant: 'warning' });
      return;, }
    toggle(product.id);, };

<<<<<<< HEAD
  const handleBuy = () => {if (onBuy) {
      onBuy(product);
    } else {dispatch(addItem(product));
      enqueueSnackbar(`${product.title} added to cart`, {variant: 'success' });
    }
=======
  const handleBuy = () => {
    if (onBuy) {
      onBuy(product);, } else {
      dispatch(addItem(product));""
      enqueueSnackbar(`${product.title} added to cart`, { variant: 'success' });, }
>>>>>>> main
  };
<<<<<<< HEAD
'
  const isMobile = useMediaQuery('(max-width: 768px));

  return ('
    <div className='relative border rounded-lg bg-card p-4 text-center h-full flex flex-col justify-between>
      <div className='flex-1>
        <div className='relative mb-4>
          <Link href={`/products/${product.id}`}>`
=======
""
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (""
    <div className='relative border rounded-lg bg-card p-4 text-center h-full flex flex-col justify-between'>""
      <div className='flex-1'>""
        <div className='relative mb-4'>`
          <Link href={`/products/${product.id}`}" >"
>>>>>>> main
            <div className='relative w-full h-48 bg-gray-100 rounded-lg overflow-hidden cursor-pointer'>
              {product.image && !imageError ? (
<<<<<<< HEAD
                <Image src={product.image} alt={product.title} fill className='object-cover' onError={() => setImageError(true)}
=======
                <Image src={product.image}
                  alt={product.title}
<<<<<<< HEAD
                  fill'
=======
                  fill""
>>>>>>> main
                  className='object-cover'
                  onError={() =" > setImageError(true)}"
>>>>>>> main
                />
<<<<<<< HEAD
              ) : ('
=======
              ) : (""
>>>>>>> main
                <div className='w-full h-full flex items-center justify-center text-gray-400'>
                  No Image
                </div>
              )}
            </div>
          </Link>
          
          <TooltipProvider>
            <Tooltip>
<<<<<<< HEAD
              <TooltipTrigger asChild>
<<<<<<< HEAD
                <Button'
                  variant='ghost''
                  size='icon''
                  className='absolute top-2 right-2 h-8 w-8 bg-white/80 hover:bg-white'
                  onClick={handleWishlistToggle}
                >
                  <Heart'
                    className={`h-4 w-4 ${`
                      active ? 'fill-red-500 text-red-500' : 'text-gray-600''
                    }`}
                  />
                </Button>
              </TooltipTrigger>
              <TooltipContent>`
=======
                <Button variant='ghost' size='icon' className='absolute top-2 right-2 h-8 w-8 bg-white/80 hover: bg-white' onClick={handleWishlistToggle} >
                  <Heart className={`h-4 w-4 ${ active ? 'fill-red-500 text-red-500' : 'text-gray-600' }`} />
=======
              <TooltipTrigger asChild" >"
                <Button ""
                  variant='ghost'
                  size='icon'
                  className='absolute top-2 right-2 h-8 w-8 bg-white/80 hover: bg-white'
                  onClick={handleWishlistToggle}" >`"
                  <Heart className={`h-4 w-4 ${""
                      active ? 'fill-red-500 text-red-500' : 'text-gray-600', `
}`}
                  /" >"
>>>>>>> main
                </Button>
              </TooltipTrigger>
              <TooltipContent>""
>>>>>>> main
                <p>{active ? 'Remove from wishlist' : 'Add to wishlist'}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
<<<<<<< HEAD
'
        <div className='text-left>
          <Link href={`/products/${product.id}`}>`
=======
<<<<<<< HEAD

        <div className='text-left'>
          <Link href={`/products/${product.id}`}>
            <h3 className='font-semibold text-lg mb-2 line-clamp-2 hover: text-primary cursor-pointer'>
=======
""
        <div className='text-left'>`
          <Link href={`/products/${product.id}`}" >"
>>>>>>> main
            <h3 className='font-semibold text-lg mb-2 line-clamp-2 hover:text-primary cursor-pointer'>
>>>>>>> main
              {product.title}
            </h3>
          </Link>
          
<<<<<<< HEAD
          {product.description && ('
=======
          {product.description && (""
>>>>>>> main
            <p className='text-sm text-muted-foreground mb-3 line-clamp-2'>
              {product.description}
            </p>
          )}
<<<<<<< HEAD
          '
          <div className='flex items-center justify-between mb-3>
            <span className='text-lg font-bold text-primary>
              ${product.price?.toFixed(2) || '0.00'}
            </span>
            {product.rating && ('
              <div className='flex items-center text-sm text-muted-foreground'>
                <span>★</span>'
=======
          ""
          <div className='flex items-center justify-between mb-3'>""
            <span className='text-lg font-bold text-primary'>""
              ${product.price?.toFixed(2) || '0.00'}
            </span>
            {product.rating && (""
              <div className='flex items-center text-sm text-muted-foreground'>
                <span>★</span>""
>>>>>>> main
                <span className='ml-1'>{product.rating}</span>
              </div>
            )}
          </div>
        </div>
      </div>
<<<<<<< HEAD
    </div>)}
;
export { ProductCard };
;
export { ProductCard };
;
export { ProductCard };
;
export { ProductCard };
;
export { ProductCard };
=======

<<<<<<< HEAD
      <Button
        onClick={handleBuy}
        disabled={buyDisabled}
        className='w-full''
        size={isMobile ? 'sm' : 'default'}
      >'
=======
<<<<<<< HEAD
      <Button onClick={handleBuy} disabled={buyDisabled} className='w-full' size={isMobile ? 'sm' : 'default'} >
=======
      <Button onClick={handleBuy}
        disabled={buyDisabled}""
        className='w-full'
        size={isMobile ? 'sm' : 'default'}" >"
>>>>>>> main
>>>>>>> main
        {buyDisabled ? 'Out of Stock' : 'Add to Cart'}
      </Button>
    </div>
  );,
}
"`"
>>>>>>> main
