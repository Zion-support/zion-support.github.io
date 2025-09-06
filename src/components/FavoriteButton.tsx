<<<<<<< HEAD
<<<<<<< HEAD

=======
import React from 'react';
<<<<<<< HEAD
=======
<<<<<<< HEAD
import React from 'react'
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

interface FavoriteButtonProps {
  itemId: string;
  className?: string
export function FavoriteButton({ itemId, className }: FavoriteButtonProps) {
<<<<<<< HEAD

=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

  const { isWishlisted, toggle } = useWishlist()
  const { isAuthenticated } = useAuth()
  const [loginOpen, setLoginOpen] = React.useState(false)
  const handleClick = (e: React.MouseEvent) => {
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
  const { isWishlisted, toggle } = useWishlist();
  const { isAuthenticated } = useAuth();
  const [loginOpen, setLoginOpen] = React.useState(false);
  const handleClick = (e: React.MouseEvent) => {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
<<<<<<< HEAD
=======
import React from 'react';
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

<<<<<<< HEAD
<<<<<<< HEAD
  return (
=======
>>>>>>>   return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  return (
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <button
<<<<<<< HEAD
<<<<<<< HEAD

=======
              className = {cn(
                'absolute top-2 right-2 z-10 p-2 rounded-full bg-zion-blue-dark/80 hover:bg-zion-blue-light/30 transition-colors'
                className
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
    <button
      onClick = {handleToggleFavorite}`
      className={`absolute top-2 right-2 p-2 rounded-full transition-all duration-300 ${isFavorited'
          ? 'bg-red-500 hover:bg-red-600 text-white''
          : 'bg-zion-blue-dark/80 hover:bg-zion-cyan text-white'`
} ${className}`}
      aria-label={isFavorited ? 'Remove from favorites' : 'Add to favorites'}
    >
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
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
              className={cn(
                'absolute top-2 right-2 z-10 p-2 rounded-full bg-zion-blue-dark/80 hover:bg-zion-blue-light/30 transition-colors',
                className
=======
;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
            <button;
<<<<<<< HEAD
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
;
<<<<<<< HEAD

=======
>>>>>>> 

  return (
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <button


>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
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
  );
}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
