
import React from "react",
import { useRouter } from "next/router",
import Link from "next/link",
import { cn } from "@/lib/utils",
import { useAuth } from "@/hooks/useAuth",
import { useWishlist } from "@/hooks/useWishlist";
import { useCart  } from '@/context/CartContext';
import { logWarn } from '@/utils/productionLogger';
import { Home, Search, MessageCircle, Heart, MessageSquare, ShoppingCart, User } from 'lucide-react'


interface MobileBottomNavProps {
  unreadCount?: number;


export function MobileBottomNav({ unreadCount;

              item.matches(router.pathname)
                ? 'text-primary'
                : 'text-foreground/70 hover:text-foreground'
            )}          >
            <div className='relative'>
              <item.icon className='h-5 w-5 mb-1' aria-hidden='true' />
              {item.badge && item.badge > 0 && (
                <span className='absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full h-4 w-4 flex items-center justify-center'>
                  {item.badge > 9 ? '9+' : item.badge}
                </span>
              )}
            </div>
            <span className='hidden sm:block text-xs font-medium'>
              {item.name}
            </span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
;