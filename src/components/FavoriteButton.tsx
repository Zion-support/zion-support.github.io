<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
import React from 'react';
<<<<<<< HEAD
import { Heart } from 'lucide-react'

import { cn } from '@/lib/utils'
import { useWishlist } from '@/hooks/useWishlist'
import { useAuth } from '@/hooks/useAuth'
import { toast } from '@/hooks/use-toast'
import { LoginModal } from '@/components/auth/LoginModal'
import {
  Tooltip
  TooltipContent
  TooltipProvider
  TooltipTrigger
} from '@/components/ui/tooltip'
=======
import { Heart } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useWishlist } from '@/hooks/useWishlist';
import { useAuth } from '@/hooks/useAuth';
import { toast } from '@/hooks/use-toast';
import { LoginModal } from '@/components/auth/LoginModal';
import {;
  Tooltip,;
  TooltipContent,;
  TooltipProvider,;
  TooltipTrigger,;
} from '@/components/ui/tooltip';
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a

interface FavoriteButtonProps {;
  itemId: string;
<<<<<<< HEAD
  className?: string
export function FavoriteButton({ itemId, className }: FavoriteButtonProps) {

  const { isWishlisted, toggle } = useWishlist()
  const { isAuthenticated } = useAuth()
  const [loginOpen, setLoginOpen] = React.useState(false)
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();    if (!isAuthenticated) {
      setLoginOpen(true)
      return
    }
    const wasWishlisted = isWishlisted(itemId)
    toggle(itemId)
    // Provide feedback
    toast({
      title: wasWishlisted ? 'Removed from wishlist' : 'Added to wishlist'
      description: wasWishlisted
        ? 'Item has been removed from your wishlist'
        : 'Item has been added to your wishlist'
    })
  }
  const active = isWishlisted(itemId)
=======
  className?: string;
export function FavoriteButton(): any ({ itemId, className }: FavoriteButtonProps) {;
  const { isWishlisted, toggle } = useWishlist();
  const { isAuthenticated } = useAuth();
  const [loginOpen, setLoginOpen] = React && React.useState(false);

  const handleClick = (e: React && React.MouseEvent) => {;
    e && e.stopPropagation();    if (!isAuthenticated) {;
      setLoginOpen(true);
      return;
    }

    const wasWishlisted = isWishlisted(itemId);
    toggle(itemId);

    // Provide feedback;
    toast({;
      title: wasWishlisted ? 'Removed from wishlist' : 'Added to wishlist',;
      description: wasWishlisted;
        ? 'Item has been removed from your wishlist';
        : 'Item has been added to your wishlist',;
    });
  };

  const active = isWishlisted(itemId);

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
import React from 'react';
import { Heart } from 'lucide-react';
import { cn } from '@/lib / utils';
import { use_wishlist } from '@/hooks / use_wishlist';
import { use_auth } from '@/hooks / use_auth';
import { toast } from '@/hooks / use - toast';
import { LoginModal } from '@/components / auth / LoginModal';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components / ui / tooltip';
interface FavoriteButtonProps {
  item_id: string;
  class_name?: string;
export /**
 * FavoriteButton - Function description
 */
function FavoriteButton() {
  const { is_wishlisted, toggle } = use_wishlist ();
  const { is_authenticated } = use_auth ();
  const [login_open, setLoginOpen] = React.useState (false);
  const handle_click = (e: React.MouseEvent) =>: any {
    e.stop_propagation ();    // Check condition
if ( {) {
  $2
}
      setLoginOpen (true);
      return;
    }
    const was_wishlisted = is_wishlisted (item_id);
    toggle (item_id);
    // Provide feedback;
    toast ({
      title: was_wishlisted ? 'Removed from wishlist' : 'Added to wishlist',
      description: was_wishlisted;
        ? 'Item has been removed from your wishlist';
        : 'Item has been added to your wishlist',
    });
  }
  const active = is_wishlisted (item_id);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  return (
    <>;
      <TooltipProvider>;
        <Tooltip>;
<<<<<<< HEAD
          <TooltipTrigger asChild>;
            <button
              className = {cn(
                'absolute top-2 right-2 z-10 p-2 rounded-full bg-zion-blue-dark/80 hover:bg-zion-blue-light/30 transition-colors'
                className
              )}
              onClick={handleClick}
              aria-label={
                active ? 'Remove from favorites' : 'Save to favorites'
              }             aria-label="Button">;
              <Heart
                className = {cn(
                  'h-4 w-4 transition-transform duration-200'
                  active
                    ? 'fill-red-500 text-red-500 scale-110'
                    : 'text-zion-slate'
<<<<<<< HEAD
                )}              />

            </button>
          </TooltipTrigger>
          {!isAuthenticated && <TooltipContent>Login required</TooltipContent>}
        </Tooltip>
      </TooltipProvider>
      <LoginModal isOpen={loginOpen} onOpenChange={setLoginOpen} />
    </>
  )
}
      // Add to favorites`
      // console.log(`Added ${itemType} ${itemId} to favorites`)}  }
  return ()
=======
                )}              />;
            </button>;
          </TooltipTrigger>;
          {!isAuthenticated && <TooltipContent>Login required</TooltipContent>}
        </Tooltip>;
      </TooltipProvider>;
      <LoginModal isOpen={loginOpen} onOpenChange={setLoginOpen} />;
    </>;
  );
}
      // Add to favorites`;
      // console && console.log(`Added ${itemType} ${itemId} to favorites`)}  };
  return ();
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    <button
      onClick = {handleToggleFavorite}`
      className={`absolute top-2 right-2 p-2 rounded-full transition-all duration-300 ${isFavorited'
          ? 'bg-red-500 hover:bg-red-600 text-white''
          : 'bg-zion-blue-dark/80 hover:bg-zion-cyan text-white'`
} ${className}`}
      aria-label={isFavorited ? 'Remove from favorites' : 'Add to favorites'}
<<<<<<< HEAD
    >
=======
     aria-label="Button">;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      <Heart`
        className={`w-4 h-4 transition-all duration-300 ${
          isFavorited ? 'fill-current' : ''`
}`}
      />    </button>
  )};`
className: {`w-4 h-4 transition-all duration-300 ${
          isFavorited ? 'fill-current' : '';`
}`}
      />
    </button>;) }
'`
}
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
          <TooltipTrigger as_child>;
            <button;
              class_name = {cn (
                'absolute top - 2 right - 2 z - 10 p - 2 rounded - full bg - zion - blue - dark / 80 hover:bg - zion - blue - light / 30 transition - colors',
                class_name)}
              on_click={handle_click}
              aria - label={
                active ? 'Remove from favorites' : 'Save to favorites';
              }            >;
              <Heart;
                class_name = {cn (
                  'h - 4 w - 4 transition - transform duration - 200',
                  active;
                    ? 'fill - red - 500 text - red - 500 scale - 110';
                    : 'text - zion - slate')}              />;
            </button>;
          </TooltipTrigger>;
          {!is_authenticated && <TooltipContent > Login required</TooltipContent>}
        </Tooltip>;
      </TooltipProvider>;
      <LoginModal is_open={login_open} onOpenChange={setLoginOpen} />;
    </>);
}
      // Add to favorites`;
      // console.log (`Added ${item_type} ${item_id} to favorites`)}  }
  return ();
    <button;
      on_click = {handleToggleFavorite}`;
      className={`absolute top - 2 right - 2 p - 2 rounded - full transition - all duration - 300 ${is_favorited';
          ? 'bg - red - 500 hover:bg - red - 600 text - white'';
          : 'bg - zion - blue - dark / 80 hover:bg - zion - cyan text - white'`;
} ${class_name}`}
      aria - label={is_favorited ? 'Remove from favorites' : 'Add to favorites'}
    >;
      <Heart`;
        className={`w - 4 h - 4 transition - all duration - 300 ${
          is_favorited ? 'fill - current' : ''`;
}`}
      />    </button>)}`;
class_name: {`w - 4 h - 4 transition - all duration - 300 ${
          is_favorited ? 'fill - current' : '';`;
}`}
      />;
    </button>) }
'`;
}
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
