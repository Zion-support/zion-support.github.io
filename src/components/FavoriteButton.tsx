<<<<<<< HEAD
<<<<<<< HEAD

  const { isWishlisted, toggle } = useWishlist()
  const { isAuthenticated } = useAuth()
  const [loginOpen, setLoginOpen] = React.useState(false)
  const handleClick = (e: React.MouseEvent) => {
=======
import React from 'react';
import React from 'react'
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
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
return (
    <>;
      <TooltipProvider>;
        <Tooltip>;
<<<<<<< HEAD

interface FavoriteButtonProps {
  itemId: string;
  className?: string
export function FavoriteButton({ itemId, className }: FavoriteButtonProps) {

  const { isWishlisted, toggle } = useWishlist();
  const { isAuthenticated } = useAuth();
  const [loginOpen, setLoginOpen] = React.useState(false);
  const handleClick = (e: React.MouseEvent) => {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
import React from 'react';
import React from 'react';
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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


=======
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
  return ()
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
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
              className={cn(
                'absolute top-2 right-2 z-10 p-2 rounded-full bg-zion-blue-dark/80 hover:bg-zion-blue-light/30 transition-colors',
                className
;
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD

          <TooltipTrigger as_child>;
            <button;
=======
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
  );
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

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a



  return (
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
<<<<<<< HEAD
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
            <button
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
