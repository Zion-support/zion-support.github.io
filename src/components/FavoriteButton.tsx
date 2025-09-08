return (
    <>;
      <TooltipProvider>;
        <Tooltip>;
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

interface FavoriteButtonProps extends React.PropsWithChildren<{}> {

interface FavoriteButtonProps {
  itemId: string;
  itemType: 'product' | 'talent' | 'equipment' | 'service';
  className?: string;
}

export function FavoriteButton(...args: []):  {
  const [isFavorited, setIsFavorited] = useState(false);

  const handleToggleFavorite = (e: React.MouseEvent)    => {
    e.stopPropagation();
    setIsFavorited(!isFavorited);
    
    // Here you would typically make an API call to save/remove from favorites
    if (isFavorited) {
      // Remove from favorites
      // // // console.log(`Removed ${itemType} ${itemId} from favorites`);
    } else {
      // Add to favorites
      // // // console.log(`Added ${itemType} ${itemId} to favorites`);
    }
  };

  return (
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              )}
              onClick={handleClick}
              aria-label={
                active ? 'Remove from favorites' : 'Save to favorites'
              }            >
              <Heart
                className = {cn(
                  'h-4 w-4 transition-transform duration-200'
                  active
                    ? 'fill-red-500 text-red-500 scale-110'
                    : 'text-zion-slate'
                )}              />

          {!isAuthenticated && <TooltipContent>Login required</TooltipContent>}
        </Tooltip>
      </TooltipProvider>
      <LoginModal isOpen={loginOpen} onOpenChange={setLoginOpen} />
    </>
  )
}
      // Add to favorites`
      // console.log(`Added ${itemType} ${itemId} to favorites`)}  }
  return ()    <button
      onClick = {handleToggleFavorite}`
      className={`absolute top-2 right-2 p-2 rounded-full transition-all duration-300 ${isFavorited'
          ? 'bg-red-500 hover:bg-red-600 text-white''
          : 'bg-zion-blue-dark/80 hover:bg-zion-cyan text-white'`
} ${className}`}
      aria-label={isFavorited ? 'Remove from favorites' : 'Add to favorites'}

     aria-label="Button">;

      <Heart`
        className={`w-4 h-4 transition-all duration-300 ${
          isFavorited ? 'fill-current' : ''
        }`} 
      />
    </button>;) }
'`
}
;
    const wasWishlisted = isWishlisted(itemId),;
    toggle(itemId),;
    // Provide feedback;
    toast({;
      title: wasWishlisted ? "Removed from wishlist" : "Added to wishlist",,
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
            <button;
              className={cn(;
                'absolute top-2 right-2 z-10 p-2 rounded-full bg-zion-blue-dark/80 hover:bg-zion-blue-light/30 transition-colors';
                className;
              )}
              onClick={handleClick}
              aria-label={active ? 'Remove from favorites' : 'Save to favorites'}
            >;
              <Heart;
                className={cn(;
                  'h-4 w-4 transition-transform duration-200';
                  active ? 'fill-red-500 text-red-500 scale-110' : 'text-zion-slate';
                )}
              />;
            </button>;
          </TooltipTrigger>;
          {!isAuthenticated && <TooltipContent>Login required</TooltipContent>}
        </Tooltip>;
      </TooltipProvider>;
      <LoginModal isOpen={loginOpen} onOpenChange={setLoginOpen} />;
    </>;
  );}
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
<<<<<<< HEAD