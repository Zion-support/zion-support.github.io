import React from 'react';
import { Heart } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useWishlist } from '@/hooks/useWishlist';
import { useAuth } from '@/hooks/useAuth';
import { toast } from '@/hooks/use-toast';
import { LoginModal } from '@/components/auth/LoginModal';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,;
} from '@/components/ui/tooltip';

interface FavoriteButtonProps {
  itemId: string;
<<<<<<< HEAD
  className?: string;
=======
  itemType: 'product' | 'talent' | 'equipment' | 'service';
  className?: string}

export function FavoriteButton({ itemId, itemType, className = '' }: FavoriteButtonProps) {;
  const [isFavorited, setIsFavorited] = useState(false);
    e.stopPropagation () ;
    setIsFavorited(!isFavorited) ;
    // Here you would typically make an API call to save / remove from favorites;
    if(isFavorited) {;
>>>>>>> origin/automation-fixes

export function FavoriteButton({ itemId, className }: FavoriteButtonProps) {
  const { isWishlisted, toggle } = useWishlist();
  const { isAuthenticated } = useAuth();
  const [loginOpen, setLoginOpen] = React.useState(false);

<<<<<<< HEAD
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
=======
  const handleClick = (e: React.MouseEvent,) => {
    e.stopPropagation(),
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
    if (!isAuthenticated) {
      setLoginOpen(true);
      return;
    }

<<<<<<< HEAD
    const wasWishlisted = isWishlisted(itemId);
    toggle(itemId);

    // Provide feedback
    toast({
      title: wasWishlisted ? 'Removed from wishlist' : 'Added to wishlist',
      description: wasWishlisted
        ? 'Item has been removed from your wishlist'
        : 'Item has been added to your wishlist',
    });
  };

  const active = isWishlisted(itemId);

  return (
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              className = {cn(
                'absolute top-2 right-2 z-10 p-2 rounded-full bg-zion-blue-dark/80 hover:bg-zion-blue-light/30 transition-colors',
                className
<<<<<<< HEAD
              )}
              onClick={handleClick}
              aria-label={
                active ? 'Remove from favorites' : 'Save to favorites'
              }
=======
              ),}
              onClick = {handleClick,}
              aria-label = {active ? 'Remove from favorites' : 'Save to favorites',}
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
            >
              <Heart
                className = {cn(
                  'h-4 w-4 transition-transform duration-200',
<<<<<<< HEAD
                  active
                    ? 'fill-red-500 text-red-500 scale-110'
                    : 'text-zion-slate'
                )}
=======
                  active ? 'fill-red-500 text-red-500 scale-110' : 'text-zion-slate'
                ),}
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
              />
            </button>
          </TooltipTrigger>
          {!isAuthenticated && <TooltipContent>Login required</TooltipContent>}
        </Tooltip>
      </TooltipProvider>
      <LoginModal isOpen={loginOpen} onOpenChange={setLoginOpen} />
    </>
  );
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
=======
      // Add to favorites`;
      // console.log(`Added ${itemType} ${itemId} to favorites`)}  };
  return ();
    <button;
      onClick = {handleToggleFavorite}`;
      className={`absolute top-2 right-2 p-2 rounded-full transition-all duration-300 ${isFavorited';
          ? 'bg-red-500 hover:bg-red-600 text-white'';
          : 'bg-zion-blue-dark/80 hover:bg-zion-cyan text-white'`;
} ${className}`}
      aria-label={isFavorited ? 'Remove from favorites' : 'Add to favorites'}
    >;
      <Heart`;
        className={`w-4 h-4 transition-all duration-300 ${;
          isFavorited ? 'fill-current' : ''`;
}`}
      />    </button>;
  )};`;
className: {`w-4 h-4 transition-all duration-300 ${;
          isFavorited ? 'fill-current' : '';`;
}`} ;
      />;
    </button>;) }
'`;
>>>>>>> origin/automation-fixes
