return (
    <>;
      <TooltipProvider>;
        <Tooltip>;
interface FavoriteButtonProps {
  itemId: string;
  className?: string
export function FavoriteButton({ itemId, className }: FavoriteButtonProps) {
  const { isWishlisted, toggle } = useWishlist();
  const { isAuthenticated } = useAuth();
  const [loginOpen, setLoginOpen] = React.useState(false);
  const handleClick = (e: React.MouseEvent) => {;
    e.stopPropagation();    if (!isAuthenticated) {
      setLoginOpen(true)
      return;
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
import React from 'react';
import { Heart } from 'lucide-react';
import { cn } from '@/lib/utils',;
import { useWishlist } from '@/hooks/useWishlist',;
import { useAuth } from '@/hooks/useAuth',;
import { toast } from '@/hooks/use-toast',;
import { LoginModal } from '@/components/auth/LoginModal',;
import {;
  Tooltip,;
  TooltipContent,;
  TooltipProvider,;
  TooltipTrigger} from '@/components/ui/tooltip',;
interface FavoriteButtonProps {;
  itemId: string,;
  className?: string;
}
;
export function FavoriteButton({ itemId, className }: FavoriteButtonProps) {;
  const { isWishlisted, toggle } = useWishlist(),;
  const { isAuthenticated } = useAuth(),;
  const [loginOpen, setLoginOpen] = React.useState(false),;
  const handleClick = (e: React.MouseEvent) => {;
    e.stopPropagation(),;
    if (!isAuthenticated) {;
      setLoginOpen(true),;
      return;
    }
    
    const wasWishlisted = isWishlisted(itemId),
    toggle(itemId),
    
    // Provide feedback
    toast({
      title: wasWishlisted ? "Removed from wishlist" : "Added to wishlist",
      description: wasWishlisted 
        ? "Item has been removed from your wishlist" 
        : "Item has been added to your wishlist"})
  },

  const active = isWishlisted(itemId),

  return (
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <button

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

    <button
      onClick = {handleToggleFavorite}`
      className={`absolute top-2 right-2 p-2 rounded-full transition-all duration-300 ${isFavorited'
          ? 'bg-red-500 hover:bg-red-600 text-white''
          : 'bg-zion-blue-dark/80 hover:bg-zion-cyan text-white'`
} ${className}`}
      aria-label={isFavorited ? 'Remove from favorites' : 'Add to favorites'}

     aria-label="Button">;

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

          <TooltipTrigger as_child>;
              className={cn(
                'absolute top-2 right-2 z-10 p-2 rounded-full bg-zion-blue-dark/80 hover:bg-zion-blue-light/30 transition-colors',
                className
=======
;
=======
;
    const wasWishlisted = isWishlisted(itemId),;
    toggle(itemId),;
    // Provide feedback;
    toast({;
      title: wasWishlisted ? "Removed from wishlist" : "Added to wishlist",;
      description: wasWishlisted;
        ? "Item has been removed from your wishlist";
        : "Item has been added to your wishlist"});
  },;
  const active = isWishlisted(itemId),;
  return (;
    <>;
      <TooltipProvider>;
        <Tooltip>;
          <TooltipTrigger asChild>;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
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




  return (
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <button