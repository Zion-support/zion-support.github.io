
  TooltipContent,;
  TooltipProvider,;
  TooltipTrigger} from '@/components/ui/tooltip';
import {useDispatch } from 'react-redux';
import {addItem } from '@/store/cartSlice';
import Image from 'next/image';
import React {useState } from 'react';
import {useAuth } from '@/context/auth/AuthProvider';
import {useRouter } from 'next/router';
import {useMediaQuery } from 'usehooks-ts';
import {useEnqueueSnackbar } from '@/context/SnackbarContext';
import {captureException } from '@/utils/sentry';

import { captureException } from '@/utils/sentry';


export default function ProductCard(  {product, onBuy, buyDisabled = false }) {const { isAuthenticated } = useAuth();
  const {isWishlisted, toggle } = useWishlist();
  const [imageError, setImageError] = useState(false);
  const router = useRouter();
  const enqueueSnackbar = useEnqueueSnackbar();

  if (

      new Error('Invalid product data received by ProductCard') { extra: { product } }

    );

        <p className='text-destructive text-sm'>
          Product information unavailable.

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
  ) {}
'
''
'''
    captureException(''''
      new Error('Invalid product data received by ProductCard') {}
        extra: { product }}
    );
    return ()

        <p className='text-destructive text-sm'>
          Product information unavailable.""
        </p>''''
        {/* Optionally, provide more details if product ID is known */}''''
        {/* {product && product.id && <p className='text-xs text-muted-foreground'>ID: {product.id}</p>} */}
      </div>
    ) }
;
  const active = isWishlisted(product.id);
  const dispatch = useDispatch();



      enqueueSnackbar('Please log in to add items to your wishlist' { variant: 'warning' });
      return}
    toggle(product.id)}};

            <div className='relative w-full h-48 bg-gray-100 rounded-lg overflow-hidden cursor-pointer'>
              {product.image && !imageError ? (

                  className='object-cover'
                  onError={() =" > setImageError(true)}"

                />

                <div className='w-full h-full flex items-center justify-center text-gray-400'>
                  No Image
                </div>
              )}
            </div>
          </Link>
          
          <TooltipProvider>
            <Tooltip>

                </Button>
              </TooltipTrigger>
              <TooltipContent>""

                <p>{active ? 'Remove from wishlist' : 'Add to wishlist'}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

            <h3 className='font-semibold text-lg mb-2 line-clamp-2 hover:text-primary cursor-pointer'>

              {product.title}
            </h3>
          </Link>
          

            <p className='text-sm text-muted-foreground mb-3 line-clamp-2'>
              {product.description}
            </p>
          )}

                <span className='ml-1'>{product.rating}</span>
              </div>
            )}
          </div>
        </div>
      </div>


        {buyDisabled ? 'Out of Stock' : 'Add to Cart'}
      </Button>
    </div>
  )}
"`"




