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

  );

}onError= {;
  (e) => handleImageError (e) ;
}priority= {;
  false ;
}/>) : (<div className="w-full h-full bg-gray-200 flex items-center justify-center" > <span className="text-gray-500" >No Image</span> </div>) ;
}src= {;
  imageUrl ;
}alt= {;
  imageAltText ;
}style= {;
  {';
  objectFit: 'cover' ;

}onError= {;
  (e) => handleImageError (e) ;
}priority= {;
  false ";
}/>) : (<div className="w-full h-full bg-gray-200 flex items-center justify-center" > <span className="text-gray-500" >No Image</span> </div>) ;
}{;
  product.currency ;
}{;
  product.price ;
}</p>) ;
}Add to Cart </Button> {;
  onBuy && (<TooltipProvider> <Tooltip> <TooltipTrigger asChild> <Button onClick={;
  (e) => {;
  e.stopPropagation ();
if (onBuy) {;
  setIsRedirecting (true);
onBuy () > {'";
  isRedirecting ? (<> <span className="animate-spin inline-block mr-2 h-4 w-4 border-2 border-current border-t-transparent rounded-full" role="status" aria-hidden="true" ></span> Processing... </>) : ('Buy Now') ;
}</Button> </TooltipTrigger> {;
  !isAuthenticated && !isRedirecting && (<TooltipContent>Login required</TooltipContent>) ;
}</Tooltip> </TooltipProvider>) ;
}</div> </div>) ;
}'"
  )
}
  )
}
