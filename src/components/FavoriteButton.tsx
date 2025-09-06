import React from 'react';
import { Heart } from 'lucide-react'
import { cn  } from '@/lib/utils';
import { useWishlist  } from '@/hooks/useWishlist';
import { useAuth  } from '@/hooks/useAuth';
import { toast  } from '@/hooks/use-toast';
import { LoginModal } from '@/components/auth/LoginModal';
import { Tooltip;
  TooltipContent;
  TooltipProvider;
  TooltipTrigger } from '@/components/ui/tooltip';
interface FavoriteButtonProps {
  itemId: string;
  className?: string
export function FavoriteButton({ itemId, className }: FavoriteButtonProps) {
  const { isWishlisted, toggle } = useWishlist();
  const { isAuthenticated } = useAuth();
  const [loginOpen, setLoginOpen] = React.useState(false);
  const handleClick = null;
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
;