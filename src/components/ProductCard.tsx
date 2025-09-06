<<<<<<< HEAD
<<<<<<< HEAD
import Link from 'next/link';
import { Heart } from 'lucide-react'
import { useWishlist  } from '@/hooks/useWishlist';
import { Button  } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tooltip;
  TooltipContent;
  TooltipProvider;
  TooltipTrigger } from '@/components/ui/tooltip';
import { useDispatch  } from 'react-redux';
import type { AppDispatch } from '@/store';
import { addItem  } from '@/store/cartSlice';
import Image from 'next/image',
import React, { useState, useEffect } from 'react';
import { useAuth  } from '@/context/auth/AuthProvider';
import { useRouter  } from 'next/router';
import { Product  } from '@/services/marketplace';
import { useMediaQuery  } from 'usehooks-ts';
import { toast } from '@/hooks/use-toast';
import { captureException } from '@/utils/sentry';
interface ProductCardProps {
  product: Product;
  onBuy?: () => Promise<void>, // Changed to allow async and signal completion/failure
  onBuyAttemptComplete?: () => void, // Callback to signal the buy attempt is finished (success or fail)
  /** Disable the Buy Now button (e.g. when the checkout route isn't ready). */
  buyDisabled?: boolean
}


  const stockStatus =
    product.stock === undefined
      : 'In stock'
  const stockVariant =
    product.stock === undefined
  const productTitle = product.title
  const imageUrl = Array.isArray(product.images) && product.images.length > 0 ? product.images[0] : null
  const imageAltText = productTitle
  const isMobile = useMediaQuery('(max-width: 768px)')
  const isTablet = useMediaQuery('(max-width: 1200px)')
  const imageSizes = isMobile ? '100vw' : isTablet ? '50vw' : '33vw'
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

  const imageSizes = isMobile ? '100vw' : isTablet ? '50vw' : '33vw';
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a

  );
}
<<<<<<< HEAD
  )
}
=======
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
