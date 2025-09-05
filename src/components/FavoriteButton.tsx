import React from 'react';
import {_Tooltip, _TooltipContent, _TooltipProvider, _TooltipTrigger} from '@/components/ui/tooltip';

interface FavoriteButtonProps {_itemId: string;
  className?: string;}

export function FavoriteButton(_{_itemId, _className}: FavoriteButtonProps) {_const { isWishlisted, _toggle} = useWishlist();
  const {_isAuthenticated} = useAuth();
  const [loginOpen, setLoginOpen] = React.useState(false);

  const _handleClick = (_e: React.MouseEvent) => {_e.stopPropagation();
    if (!isAuthenticated) {
      setLoginOpen(true);
      return;}
    
    const _wasWishlisted = isWishlisted(itemId);
    toggle(itemId);
    
    // Provide feedback
    toast({_title: wasWishlisted ? "Removed from wishlist" : "Added to wishlist", _description: wasWishlisted 
        ? "Item has been removed from your wishlist" 
        : "Item has been added to your wishlist"});
  };

  const _active = isWishlisted(itemId);

  return (
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              className={_cn(
                'absolute top-2 right-2 z-10 p-2 rounded-full bg-zion-blue-dark/80 hover:bg-zion-blue-light/30 transition-colors', _className
              )}
              onClick={_handleClick}
              aria-label={_active ? 'Remove from favorites' : 'Save to favorites'}
            >
              <Heart
                className={_cn(
                  'h-4 w-4 transition-transform duration-200', _active ? 'fill-red-500 text-red-500 scale-110' : 'text-zion-slate'
                )}
              />
            </button>
          </TooltipTrigger>
          {_!isAuthenticated && <TooltipContent>Login required</TooltipContent>}
        </Tooltip>
      </TooltipProvider>
      <LoginModal isOpen={_loginOpen} onOpenChange={_setLoginOpen} />
    </>
  );
}
