import { useFavorites  } from '@/hooks/useFavorites';
import { X } from 'lucide-react'
import { MARKETPLACE_LISTINGS  } from '@/data/marketplaceData';
import { TALENT_PROFILES  } from '@/data/talentData';
import { ProductListingCard  } from '@/components/ProductListingCard';
import { TalentCard  } from '@/components/talent/TalentCard';
import { Button  } from '@/components/ui/button';
import { useCart  } from '@/context/CartContext';
import { toast  } from '@/hooks/use-toast';
import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/router', // Changed from useNavigate
import { useEffect } from 'react', // Added useEffect
origin/cursor/automate-test-improve-and-merge-code-2533

import { useFavorites } from '@/hooks/useFavorites',;
import { X } from 'lucide-react';
import { MARKETPLACE_LISTINGS } from '@/data/marketplaceData',;
import { TALENT_PROFILES } from '@/data/talentData',;
import { ProductListingCard } from '@/components/ProductListingCard',;
import { TalentCard } from '@/components/talent/TalentCard',;
import { Button } from '@/components/ui/button',;
import { useCart } from '@/context/CartContext',;
import { toast } from '@/hooks/use-toast',;
import { useAuth } from '@/hooks/useAuth',;
import { useRouter } from 'next/router', // Changed from useNavigate;
import { useEffect } from 'react', // Added useEffect;
export default function WishlistPage() {;
  const { favorites, loading, toggleFavorite } = useFavorites(),;
  const { user, isLoading: isAuthLoading } = useAuth(), // Added isAuthLoading;
  const router = useRouter(), // Changed from navigate;
  useEffect(() => {;
    // Redirect if not authenticated and auth loading is complete;
    if (!isAuthLoading && !user) {;
      router.push('/login');
    }
  }, [user, isAuthLoading, router]),;
  if (isAuthLoading || !user) { // Show loading or null while auth check or redirect happens;
    return null, // Or a loading spinner;
  }

    </div>
  );

}onRequestHire= {;
  () => {;
  ;

}isAuthenticated= {;
  true ;
}/> Saved {;
  new Date (fav.created at) .toLocaleDateString () ;
}</p>) ;
}</div>) : null ';
}> <X className='h-4 w-4' /> </button> <ProductListingCard listing= {;
  item ;
}/> <Button > {';
  items.some (i => i.id === item.id) ? 'In Cart': 'Add to Cart' ;
}</Button> Saved {;
  new Date (fav.created at) .toLocaleDateString () ;
}</p>) ;
}</div>) : null ;
});
}</div>) ;
}</div>) ;
}''