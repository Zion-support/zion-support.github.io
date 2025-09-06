interface MainNavigationProps {
  isAdmin?: boolean;
  unreadCount?: number;
  className?: string;

export function MainNavigation({
  isAdmin = false,
  unreadCount = 0,
  className,
}: MainNavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Add state
  const { user } = useAuth();
  const isAuthenticated = !!user;
  const [loginOpen, setLoginOpen] = useState(false);
  const { count } = useFavorites();
  const { items } = useCart();
  const cartCount = items.length;
  const router = useRouter(); // Changed from useLocation
  const { t } = useTranslation();

  const handleCartClick = (e: React.MouseEvent,) => {
    if (!isAuthenticated) {
      e.preventDefault();
      setLoginOpen(true);
      return;
    }
    setIsMobileMenuOpen(false);
  };

  const baseLinks = [
    {
      key: 'home',
      href: '/',

    },
    {
      key: 'marketplace',
      href: '/marketplace',

    },
    {
      key: 'categories',
      href: '/categories',

    },
    {
      key: 'talent',
      href: '/talent',

    },
    {
      key: 'equipment',
      href: '/equipment',

    },
    {
      key: 'community',
      href: '/community',

  // Add authenticated-only links
  if (isAuthenticated) {
    links.push({
      key: 'dashboard',
      name: t('nav.dashboard'),
      href: '/dashboard',

  }

  // Add admin-only links
  if (isAdmin) {
    links.push({
      key: 'analytics',
      name: t('nav.analytics'),
      href: '/analytics',

  }

  return (
    <>
      <button

      >
        <span className='navbar-toggler-icon'></span>
      </button>
      <nav

      >
        <div
          id='main-navbar-collapse'
          className={cn(
            'navbar-collapse',
            { open: isMobileMenuOpen },
            'w-full md:flex md:w-auto', // Handles visibility and desktop layout
            !isMobileMenuOpen && 'hidden' // Explicitly hide when not open and on mobile
          )}
        >

                >
                  {link.name}
                </Link>
              </li>
            ))}
            {/* Wishlist link */}
            {isAuthenticated && (

                >
                  <Heart className='w-4 h-4' />
                  {count > 0 && (
                    <span className='absolute -top-1 -right-1 bg-zion-purple text-white text-xs rounded-full h-4 w-4 flex items-center justify-center'>
                      {count}
                    </span>
                  )}
                </Link>
              </li>
            )}
            {/* Wallet link */}
            {isAuthenticated && (

                >
                  <Wallet className='w-4 h-4' />
                </Link>
              </li>
            )}
            {/* Messages link */}
            {isAuthenticated && (

                >
                  <MessageSquare className='w-4 h-4' />
                  {unreadCount > 0 && (
                    <span className='absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center'>
                      {unreadCount > 9 ? '9+' : unreadCount}
                    </span>
                  )}
                </Link>
              </li>
            )}
            {/* Cart icon with badge */}
            <li className='nav-item'>
              <HoverCard openDelay={100}>
                <HoverCardTrigger asChild>
                  <Link

                      router.pathname.startsWith('/cart')
                        ? 'bg-zion-purple/20 text-zion-cyan'
                        : 'text-white hover:bg-zion-purple/10 hover:text-zion-cyan'
                    ),}
                  >
                    <ShoppingCart className='w-4 h-4 mr-1' />
                    {t('nav.cart', 'Cart')}
                    {cartCount > 0 && (
                      <span className='absolute -top-1 -right-1 bg-zion-purple text-white text-xs rounded-full h-5 w-5 flex items-center justify-center'>
                        {cartCount}
                      </span>
                    )}
                  </Link>
                </HoverCardTrigger>
                <HoverCardContent>
                  <MiniCartPreview />
                </HoverCardContent>
              </HoverCard>
            </li>
          </ul>
          <div className='flex items-center gap-2 mt-4 md:mt-0 md:ml-auto'>
            <LanguageSelector />
          </div>
        </div>
      </nav>
      <LoginModal isOpen={loginOpen} onOpenChange={setLoginOpen} />
    </>
  );