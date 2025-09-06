interface MobileBottomNavProps {
  unreadCount?: number;

export function MobileBottomNav({ unreadCount = 0 }: MobileBottomNavProps) {
  const router = useRouter();
  const { user } = useAuth();
  const isAuthenticated = !!user;
  const { items: wishlistItems } = useWishlist(); // Renamed to avoid conflict
  const favoritesCount = wishlistItems.length;

  const cartContextValue = useCart(); // Call hook at top level
  let cartCount = 0;
  if (cartContextValue && cartContextValue.items) {

  } else {
    // logWarn("MobileBottomNav: Cart data or items not available, defaulting cartCount to 0.");
  }

  const navItems = [
    {
      name: 'Home',
      href: '/',
      icon: Home,

    },
    {
      name: 'Browse',
      href: '/talent',
      icon: Search,

    },
    {
      name: 'Community',
      href: '/community',
      icon: MessageCircle,

    },
    {
      name: 'Wishlist',
      href: '/wishlist',
      icon: Heart,

      badge: favoritesCount,
      authRequired: true,
    },
    {
      name: 'Messages',
      href: '/messages',
      icon: MessageSquare,

      badge: unreadCount,
      authRequired: true,
    },
    {
      name: 'Cart',
      href: '/cart',
      icon: ShoppingCart,

    },
    {
      name: 'Dashboard',
      href: '/dashboard',
      icon: User,

  // Filter items based on auth status
  const visibleItems = navItems.filter(
    item => !item.authRequired || (item.authRequired && isAuthenticated)
  );

  return (
    <nav className='md:hidden fixed bottom-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-t border-primary/20'>
      <div className='flex justify-around items-center h-16'>
        {visibleItems.map(item => (
          <Link

          >
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