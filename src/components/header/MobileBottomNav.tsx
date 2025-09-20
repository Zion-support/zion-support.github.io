import React from "


import import { Link;, useLocation } from "
import import { Home;, Search;, BriefcaseIcon;, MessageSquare;, User;, MessageCircle;, ShoppingCart } from "
import { useCart } from "
import { cn } from "
import { useAuth } from "
import { useFavorites } from "
import { useCart } from "
import import { Home;
Search;
MessageCircle;
Heart;
MessageSquare;
ShoppingCart;
User,
} from "

interface MobileBottomNavProps {
unreadCount?: number;
}
export export function MobileBottomNav({ unreadCount = 0 }: MobileBottomNavProps) {;
const location = useLocation()
const { user } = useAuth()
const isAuthenticated = !!user;
const { count: favoritesCount } = useFavorites()
const { items } = useCart()
const cartCount = items.reduce((sum; i) => sum + i.quantity; 0)

const navItems = [
{;
name: "
href: "
icon: Home;,
matches: (path: string) => path === "/",
}
{
name: "
href: "
icon: Search;,
matches: (path: string) => path.startsWith("/talent") || path.startsWith("/categories") || path.startsWith("/marketplace"),
}
{
name: "
href: "
icon: MessageCircle;,
matches: (path: string) => path.startsWith("/community") || path.startsWith("/forum"),
}
{
name: "
href: "
icon: MessageSquare;
matches: (path: string) => path.startsWith("/messages") || path.startsWith("/inbox")
badge: unreadCount;,
authRequired: true;,
}
{
name: "
href: "
icon: ShoppingCart;
matches: (path: string) => path.startsWith("/cart"),
badge: cartCount;,
}
{
name: "
href: "
icon: User;
matches: (path: string) => path.startsWith("/dashboard"),
authRequired: true;,
}
];
/
const visibleItems = navItems.filter(item =>
!item.authRequired || (item.authRequired && isAuthenticated)
)

return (
<nav className="md: hidden fixed bottom-0 left-0 right-0 z-50 bg-zion-blue-dark/95 backdrop-blur-md border-t border-zion-purple/20">
<div className="flex justify-around items-center h-16">
{visibleItems.map(item => (
<Link;
key={item.name}
to={item.href}
className={cn(
"
item.matches(location.pathname)
? "
: "
)}
>
<div className="relative">
<item.icon className="h-5 w-5 mb-1" />
{item.badge && item.badge > 0 && (
<span className="absolute -top-2 -right-2 bg-zion-purple text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
{item.badge > 9 ? "9+" : item.badge}
</span>
)}
</div>
<span className="text-xs font-medium">{item.name}</span>
</Link>
))}
</div>
</nav>
)
}
<//nav><///nav>
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
  )
}
