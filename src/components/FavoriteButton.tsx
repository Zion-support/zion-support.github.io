
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

>>>>>>>   return (
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <button
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
>>>>>>> 

  return (
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <button


>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 