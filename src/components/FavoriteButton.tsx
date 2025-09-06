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
}

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
