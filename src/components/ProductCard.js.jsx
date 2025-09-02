import React from 'react';'
import Link from 'next/link';"'"'"
import { Heart } from 'lucide-react';"'"'"
import { useWishlist } from '@/hooks/useWishlist';"''
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,;"
  TooltipProvider,;"'"
  TooltipTrigger;",'"'"
} from '@/components/ui/tooltip';"'"'"
import { useDispatch } from 'react-redux';"'"'"
import { addItem } from '@/store/cartSlice';"'"'"
import Image from 'next/image';"'"'"
import React, { useState } from 'react';"'"'"
import { useAuth } from '@/context/auth/AuthProvider';"'"'"
import { useRouter } from 'next/router';"'"'"
import { useMediaQuery } from 'usehooks-ts';"'"'"
import { useEnqueueSnackbar } from '@/context/SnackbarContext';"''
import { captureException } from '@/utils/sentry';

export default function ProductCard({ product, onBuy, buyDisabled = false }) {
  const { isAuthenticated } = useAuth();
  const { isWishlisted, toggle } = useWishlist();
  const [imageError, setImageError] = useState(false);
  const router = useRouter();
  const enqueueSnackbar = useEnqueueSnackbar();
"
  if ("'"
    !product ||"'"'"
    typeof product.id !== 'string' ||"'"'"
    typeof product.title !== 'string' ||"'
    product.title.trim() === "
  ) {"'"
    captureException("''
      new Error('Invalid product data received by ProductCard'),
      { extra: { product } }"
    );"'"
    return ("'"'"
      <div className='relative border rounded-lg bg-card p-4 text-center h-full flex flex-col justify-center items-center' data-testid='product-card-error'></div>"''
        <p className='text-destructive text-sm'></p>"
          Product information unavailable."'"
        </p>"'"'"
 export default function ProductCard ({ product, onBuy, buyDisabled = false }) { const { isAuthenticated } = useAuth ()  const { isWishlisted, toggle } = useWishlist ()  const [imageError, setImageError] = useState (false)  const router = useRouter ()  const enqueueSnackbar = useEnqueueSnackbar ()  if () !product ||' typeof product.id !== 'string' ||' typeof product.title !== 'string' ||' product.title.trim () === ') { captureException (' new Error ('Invalid product data received by ProductCard') , { extra: { product }})  return () <div className='relative border rounded - lg bg - card p - 4 text - center h - full flex flex - col justify - center items - center' data - testid='product - card - error'" ></di>' <p className='text - destructive text - sm'> Product information unavailable. </p> {}' {} </div>)  } const active = isWishlisted (product.id)  const dispatch = useDispatch () ';;import Link from 'react';'
import { Heart } from 'react';'
import { useWishlist } from 'react';'"
import { Button } from '@/components/ui/button';"'"
import {}"'
  Tooltip, TooltipContent, TooltipProvider,;'"
  TooltipTrigger} from '@/components/ui/tooltip';'"'"
import { useDispatch } from 'react-redux';"'"'"
import { addItem } from '@/store/cartSlice';"''"
import Image from 'next/image";'"
import React, { useState } from 'react';'"'"
import { useAuth } from '@/context/auth/AuthProvider';"'"'"
import { useRouter } from 'next/router';"'"'"
import { useMediaQuery } from 'usehooks-ts';"'"'"
import { useEnqueueSnackbar } from '@/context/SnackbarContext';"''
import { captureException } from '@/utils/sentry';
export default function ProductCard({ product, onBuy, buyDisabled = false }) {}
  const { isAuthenticated } = useAuth()"
  const { isWishlisted, toggle } = useWishlist()"'"
  const [imageError, setImageError] = useState(false)"'
  const router = useRouter()
  const enqueueSnackbar = useEnqueueSnackbar()
  if()'
    !product ||''
    typeof product.id !== 'string' ||''
    typeof product.title !== 'string' ||'"
    product.title.trim() === "'"
  ) {}"'
'
'
'
    captureException(''
      new Error('Invalid product data received by ProductCard'), {}
        extra: { product }}
    )"
    return ()"'"
      <div "''"
        className='relative border rounded-lg bg-card p-4 text-center h-full flex flex-col justify-center items-center'"'"
        data-testid='product-card-error" ></div>''"
        <p className='text-destructive text-sm'></p>"'"
          Product information unavailable."'
        </p>'
        {/* Optionally, provide more details if product ID is known */}''
        {/* {product && product.id && <p className='text-xs text-muted-foreground'>ID: {product.id}</p>} */}
      </div>
    ),
};
;
  const active = isWishlisted(product.id);
  const dispatch = useDispatch();
"
  const handleWishlistToggle = () => {"'"
    if (!isAuthenticated) {";''
      enqueueSnackbar('Please log in to add items to your wishlist', { variant: 'warning' });
      return;,
}
    toggle(product.id);,
};

  const handleBuy = () => {
    if (onBuy) {;
      onBuy(product);,"
} else {"'"
      dispatch(addItem(product));"''
      enqueueSnackbar(`${product.title} added to cart`, { variant: 'success' });,
}"
  };"'"
"''
  const isMobile = useMediaQuery('(max-width: 768px)');"
"'"
  return ("'"'"
    <div className='relative border rounded-lg bg-card p-4 text-center h-full flex flex-col justify-between'></div>"'"'"
      <div className='flex-1'></div>"''"
        <div className='relative mb-4'></div>`"'"
          <Link href={`/products/${product.id}`}" ></Link>"''
            <div className='relative w-full h-48 bg-gray-100 rounded-lg overflow-hidden cursor-pointer'></div>
              {product.image && !imageError ? (
                <Image src={product.image}"
                  alt={product.title}"'"
                  fill"''"
                  className='object-cover'""
                  onError={() =" ></Image> setImageError(true)}"
                />"'"
              ) : ("''
                <div className='w-full h-full flex items-center justify-center text-gray-400'></div>
                  No Image
                </div>
              )}
            </div>
          </Link>
          
          <TooltipProvider></TooltipProvider>"
            <Tooltip></Tooltip>""
              <TooltipTrigger asChild" ></TooltipTrigger>"'"
                <Button "''
                  variant='ghost'
                  size='icon'"
                  className='absolute top-2 right-2 h-8 w-8 bg-white/80 hover:bg-white'""
                  onClick={handleWishlistToggle}" ></Button>`"'"
                  <Heart className={`h-4 w-4 ${"''
                      active ? 'fill-red-500 text-red-500' : 'text-gray-600',`"
}`}""
                  /" ></Heart>
                </Button>"
              </TooltipTrigger>"'"
              <TooltipContent></TooltipContent>"''
                <p>{active ? 'Remove from wishlist' : 'Add to wishlist'}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>"
        </div>"'"
"''"
        <div className='text-left'></div>`"'"
          <Link href={`/products/${product.id}`}" ></Link>"''
            <h3 className='font-semibold text-lg mb-2 line-clamp-2 hover:text-primary cursor-pointer'></h3>
              {product.title}
            </h3>
          </Link>"
          "'"
          {product.description && ("''
            <p className='text-sm text-muted-foreground mb-3 line-clamp-2'></p>
              {product.description}
            </p>"
          )}"'"
          "'"'"
          <div className='flex items-center justify-between mb-3'></div>"'"'"
            <span className='text-lg font-bold text-primary'></span>"''
              ${product.price?.toFixed(2) || '0.00'}"
            </span>"'"
            {product.rating && ("''"
              <div className='flex items-center text-sm text-muted-foreground'></div>"'"
                <span></spa>★</span>"''
                <span className='ml-1'></spa>{product.rating}</span>
              </div>
            )}
          </div>
        </div>
      </div>
"
      <Button onClick={handleBuy}"'"
        disabled={buyDisabled}"''"
        className='w-full"'"
        size={isMobile ? 'sm' : 'default'}" ></Button>"''
        {buyDisabled ? 'Out of Stock' : 'Add to Cart'}
      </Button>
    </div>
  );,"
}"'"
"`'"'"