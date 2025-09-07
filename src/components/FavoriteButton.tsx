import React from 'react';,
import { Heart } from 'lucide-react';
import { cn } from '@/lib/utils';,
import { useWishlist } from '@/hooks/useWishlist';,
import { useAuth } from '@/hooks/useAuth';,
import { toast } from '@/hooks/use-toast';,
import { LoginModal } from '@/components/auth/LoginModal';,
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger} from '@/components/ui/tooltip',

interface FavoriteButtonProps {
  itemId: string,
  className?: string
}

export function FavoriteButton({ itemId, className }: FavoriteButtonProps) {
  const { isWishlisted, toggle } = useWishlist($2);
  const { isAuthenticated } = useAuth($2);
  const [loginOpen, setLoginOpen] = React.useState($2);
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation($2);
    if (!isAuthenticated) {
      setLoginOpen($2);
      return
    }
    
    const wasWishlisted = isWishlisted($2);
    toggle($2);
    // Provide feedback
    toast({
      title: wasWishlisted ? "Removed from wishlist" : "Added to wishlist",
      description: wasWishlisted ? "Item has been removed from your wishlist" 
        : "Item has been added to your wishlist"})
  },

  const active = isWishlisted($2);
  return (
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              className = $2;
                className
              )}
              onClick = $2;
                  active ? 'fill-red-500 text-red-500 scale-110' : 'text-zion-slate'
                )}
              />
            </button>
          </TooltipTrigger>
          {!isAuthenticated && <TooltipContent>Login required</TooltipContent>}
        </Tooltip>
      </TooltipProvider>
      <LoginModal isOpen={loginOpen} onOpenChange={setLoginOpen} />
    </>
  )
}
