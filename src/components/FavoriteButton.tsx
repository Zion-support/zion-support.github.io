
  const { isWishlisted, toggle } = useWishlist()
  const { isAuthenticated } = useAuth()
  const [loginOpen, setLoginOpen] = React.useState(false)
  const handleClick = (e: React.MouseEvent) => {
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

  const active = isWishlisted(itemId),

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



            <button


