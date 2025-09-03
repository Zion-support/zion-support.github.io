<<<<<<< HEAD
" " " " export function MobileBottomNav({ unreadCount = 0 }) { const location = useLocation(); const { user } = useAuth(); const isAuthenticated = !!user; const { count: favoritesCount } = useFavorites(); const { items } = useCart(); const cartCount = items.reduce((sum, i) => sum + i.quantity, 0); const navItems = [{ " name: "Home"," href: "/", icon: Home," matches: (path) => path === "/" }, { " name: "Browse"," href: "/talent", icon: Search," matches: (path) => path.startsWith("/talent") || path.startsWith("/categories") || path.startsWith("/marketplace") }, { " name: "Community"," href: "/community", icon: MessageCircle," matches: (path) => path.startsWith("/community") || path.startsWith("/forum") }, { " name: "Messages"," href: "/messages", icon: MessageSquare," matches: (path) => path.startsWith("/messages") || path.startsWith("/inbox"), badge: unreadCount, authRequired: true }, { " name: "Cart"," href: "/cart", icon: ShoppingCart," matches: (path) => path.startsWith("/cart"), badge: cartCount }, { " name: "Dashboard"," href: "/dashboard", icon: User," matches: (path) => path.startsWith("/dashboard"), authRequired: true ];
=======
" " " " export function MobileBottomNav({ unreadCount = 0 }) { const location = useLocation(); const { user } = useAuth(); const isAuthenticated = !!user; const { count: favoritesCount } = useFavorites(); const { items } = useCart(); const cartCount = items.reduce((sum, i) => sum + i.quantity, 0); const navItems = [],"
" " " " export function MobileBottomNav({ unreadCount = 0 }) { const location = useLocation(); const { user } = useAuth(); const isAuthenticated = !!user; const { count: favoritesCount } = useFavorites(); const { items } = useCart(); const cartCount = items.reduce((sum, i) => sum + i.quantity, 0); const navItems = [],"});,"})"
";"""""""""""" const navItems = []";"
";"" const navItems = []";";"
";"""""""""""" const navItems = []""
";" const navItems = [];"
";"""""" const navItems = [],
";" const navItems = []";"
";"""""""""""" const navItems = []""
";"" const navItems = []";"
";&quot;&quot;react-router-dom&apos;&quot;&quot;lucide-react&apos;&quot;&quot;@/context/CartContext&apos;&quot;&quot;@/lib/utils&apos;&quot;&quot;@/hooks/useAuth&apos;&quot;&quot;@/hooks/useFavorites&apos;&apos, export function MobileBottomNav({ unreadCount = 0 }) {} const location = useLocation() const { user } = useAuth() const isAuthenticated = !!user const { count: favoritesCount } = useFavorites() const;const;const { items } = useCart()&quot; ;&quot;const cartCount = items.reduce((sum, i) => sum + i.quantity, 0)";&apos;&apos; const navItems = []"
";&apos;&apos;react-router-dom&apos;&apos;&apos;lucide-react&apos;&apos;&apos;@/context/CartContext&apos;&apos;&apos;@/lib/utils&apos;&apos;&apos;@/hooks/useAuth&apos;&apos;&apos;@/hooks/useFavorites&apos;&apos, export function MobileBottomNav({ unreadCount = 0 }) {} const location = useLocation() const { user } = useAuth() const isAuthenticated = !!user const { count: favoritesCount } = useFavorites() const;const;const { items } = useCart()&apos; ;&apos;const cartCount = items.reduce((sum, i) => sum + i.quantity, 0)";&apos;&apos; const navItems = []"
&apos,"
";"""""""""""" const navItems = []""
";"" const navItems = []"
";"" const navItems = []";""
}}"
";"" const navItems = []";"
"""""""""""export function MobileBottomNav({ unreadCount = 0 }) { const location = useLocation() const { user } = useAuth() const isAuthenticated = !!user const { count: favoritesCount } = useFavorites() const { items } = useCart()" const cartCount = items.reduce((sum, i) => sum + i.quantity, 0)"; const navItems = []""
"export function MobileBottomNav({ unreadCount = 0 }) { const location = useLocation() const { user } = useAuth() const isAuthenticated = !!user const { count: favoritesCount } = useFavorites() const { items } = useCart()" const cartCount = items.reduce((sum, i) => sum + i.quantity, 0)"; const navItems = []""
>>>>>>> main
