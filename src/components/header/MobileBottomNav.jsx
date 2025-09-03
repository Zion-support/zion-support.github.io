import React from "react";"
import { Link, useLocation  } from 'react-router-dom';"
import { Home, Search, MessageSquare, User, MessageCircle, ShoppingCart import { useCart } from '@/context/CartContext';"
import { cn } from '@/lib/utils';"
import { useAuth } from '@/hooks/useAuth';"
import { useFavorites } from '@/hooks/useFavorites';
export default function Page() {
 = useCart();
    const cartCount = items.reduce((sum, i) => sum + i.quantity, 0);
    const navItems = [{
"
            name: "Home","
            href: "/",
            icon: Home,"
            matches: (path) => path === "/"
        },
        {
"
            name: "Browse","
            href: "/talent",
            icon: Search,"
            matches: (path) => path.startsWith("/talent") || path.startsWith("/categories") || path.startsWith("/marketplace")
        },
        {
"
            name: "Community","
            href: "/community",
            icon: MessageCircle,"
            matches: (path) => path.startsWith("/community") || path.startsWith("/forum")
        },
        {
"
            name: "Messages","
            href: "/messages",
            icon: MessageSquare,"
            matches: (path) => path.startsWith("/messages") || path.startsWith("/inbox"),
            badge: unreadCount,
            authRequired: true
        },
        {
"
            name: "Cart","
            href: "/cart",
            icon: ShoppingCart,"
            matches: (path) => path.startsWith("/cart"),
            badge: cartCount
        },
        {
"
            name: "Dashboard","
            href: "/dashboard",
            icon: User,"
            matches: (path) => path.startsWith("/dashboard"),
            authRequired: true


}>
            <div className="relative">
              <item.icon className="h-5 w-5 mb-1"/>              {item.badge && item.badge > 0 && (<span className="absolute -top-2 -right-2 bg-zion-purple text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  {item.badge > 9 ? '9+' : item.badge}
                </span>)}
            </div>"
            <span className="text-xs font-medium">{item.name}</span>
          </Link>))}
      </div>
    </nav>)}
'"
