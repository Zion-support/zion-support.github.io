import Link from 'next/link',
import { useRouter } from 'next/router',
import { useState } from 'react',
import { cn } from '@/lib/utils',
import { useAuth } from '@/hooks/useAuth',
import { useTranslation } from 'react-i18next',
import { useFavorites } from '@/hooks/useFavorites',

interface MainNavigationProps {
  isAdmin?: boolean,
  unreadCount?: number,
  className?: string

import { use_router } from 'next / router';
import { useState } from 'react';
import { cn } from '@/lib / utils';
import { use_auth } from '@/hooks / use_auth';
import { use_translation } from 'react - i18next';
import { use_favorites } from '@/hooks / use_favorites';
import { use_cart } from '@/context / CartContext';

export function MainNavigation({ isAdmin;
                      router.pathname.startsWith('/cart')
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { cn } from '@/lib/utils'
import { useAuth } from '@/hooks/useAuth'
import { useTranslation } from 'react-i18next'
import { useFavorites } from '@/hooks/useFavorites'
import { useCart } from '@/context/CartContext'
origin/cursor/automate-test-improve-and-merge-code-2533
import {

  Heart,
  MessageSquare,
  CreditCard,
  ShoppingCart,
  Wallet,';
} from 'lucide-react';'
import { LanguageSelector } from '@/components / header / LanguageSelector';
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,'
} from '@/components / ui / hover - card';'
import { MiniCartPreview } from '@/components / cart / MiniCartPreview';'
import { LoginModal } from '@/components / auth / LoginModal'; import { LanguageSelector } from '@/components / header / LanguageSelector';'
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components / ui / hover - card';'
import { LoginModal } from '@/components / auth / LoginModal';
interface MainNavigationProps {}
  is_admin?: boolean,
  unread_count?: number,
  class_name?: string;
}
interface MainNavigationProps {}
  is_admin?: boolean;
  unread_count?: number;
  class_name?: string;
export /**;
 * MainNavigation - Function description;
 */
function MainNavigation() {}
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState (false); // Add state;
  const { user } = use_auth ();
  const is_authenticated = !!user;
  const [login_open, setLoginOpen] = useState (false);
  const { count } = use_favorites ();
  const { items } = use_cart ();
  const cart_count = items.length;
  const router = use_router (); // Changed from use_location;
  const { t } = use_translation ();
  const handleCartClick = (e: React.MouseEvent, ) =>: any {}
    // Check condition;
if ( {) {}
  $2;
}
      e.prevent_default ();
      setLoginOpen (true);
      return;

    }
    setIsMobileMenuOpen(false)
  }
  const baseLinks = []
    {'
      key: 'home''
      href: '/''
      matches: (path: string) => path === '/',    }
    {}
class ErrorBoundary extends React.Component {}
  constructor(props) {}
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {}
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {'
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {}
    if (this.state.hasError) {}
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}'
import React from 'react';'
import Link from 'next/link';'
import { useRouter } from 'next/router';'
import { useState } from 'react';'
import { cn } from '@/lib/utils';'
import { useAuth } from '@/hooks/useAuth';'
import { useTranslation } from 'react-i18next';'
import { useFavorites } from '@/hooks/useFavorites';'
import { useCart } from '@/context/CartContext';
import {;
  Heart,;
  MessageSquare,;
  CreditCard,;
  ShoppingCart,;
  Wallet,;'
} from 'lucide-react';'
import { LanguageSelector } from '@/components/header/LanguageSelector';
import {;
  HoverCard,;
  HoverCardTrigger,;
  HoverCardContent,;'
} from '@/components/ui/hover-card';'
import { MiniCartPreview } from '@/components/cart/MiniCartPreview';'
import { LoginModal } from '@/components/auth/LoginModal';import { LanguageSelector } from '@/components/header/LanguageSelector';'
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components/ui/hover-card';'
import { MiniCartPreview } from '@/components/cart/MiniCartPreview';'
import { LoginModal } from '@/components/auth/LoginModal';

interface MainNavigationProps {;
  isAdmin?: boolean,;
  unreadCount?: number,;
  className?: string;
}
;

  const { user } = useAuth(),;
  const isAuthenticated = !!user,;
  const [loginOpen, setLoginOpen] = useState(false),;
  const { count } = useFavorites(),;
  const { items } = useCart(),;
  const cartCount = items.length,;
  const router = useRouter(), // Changed from useLocation;
  const { t } = useTranslation(),;
  const handleCartClick = (e: React.MouseEvent) => {;,
  const handleCartClick = (e: React.MouseEvent) => {;
    if (!isAuthenticated) {;
      e.preventDefault(),;
      setLoginOpen(true),;
      return;
    }
    setIsMobileMenuOpen(false);
  },;,
  },;

  const baseLinks = [;

      matches: (path: string) => path === '/';
    },;
    {;'
      key: 'marketplace',;'
      href: '/marketplace',;'
      matches: (path: string) => path.startsWith('/marketplace');
    },;
    {;'
      key: 'categories',;'
      href: '/categories',;'
      matches: (path: string) => path.startsWith('/categories');
    },;
    {;'
      key: 'talent',;'
      href: '/talent',;'
      matches: (path: string) => path.startsWith('/talent') && !path.includes('/talent-dashboard');
    },;
    {;'
      key: 'equipment',;'
      href: '/equipment',;'
      matches: (path: string) => path.startsWith('/equipment');
    },;
    {;'
      key: 'community',;'
      href: '/community',;'
      matches: (path: string) => path.startsWith('/community') || path.startsWith('/forum');
    }
  ],;
  const links = baseLinks.map(link => ({ ...link, name: t(`nav.${link.key}`) })),;
  // Add authenticated-only links;
  if (isAuthenticated) {;
    links.push({;'
      key: 'dashboard',;'
      name: t('nav.dashboard'),;'
      href: '/dashboard',;'
      matches: (path: string) => path === '/dashboard' || path === '/client-dashboard' || path === '/talent-dashboard';
    });
  }
;
  // Add admin-only links;
  if (isAdmin) {;

  return (
    <>;
      <button
        className='navbar-toggler md:hidden ml-auto mr-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary' // Added ml-auto and mr-4 for positioning
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-expanded={isMobileMenuOpen}

      matches: (path: string) => path && path.startsWith('/analytics'),;
    });  }

  return (

      <nav

        className={cn('navbar', className)}
        role='navigation'
        aria-label='Main navigation'>;

        <div

          id='main-navbar-collapse'

          className={cn(

                  href={link.href}
                  aria-label={link.name}
                  onClick={() => setIsMobileMenuOpen(false)}

                    'nav-link',
                    'inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',

                    link.matches(router.pathname)
                      ? 'bg-zion-purple/20 text-zion-cyan'
                      : 'text-white hover:bg-zion-purple/10 hover:text-zion-cyan'
                  )}                >

                    'nav-link',

                    'inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
                    link.matches(router.pathname)'
                      ? 'bg-zion-purple/20 text-zion-cyan''
                      : 'text-white hover:bg-zion-purple/10 hover:text-zion-cyan'
                  )}
                >;

                  {link.name}

                </Link>;
              </li>;
            ))}

                    onClick={handleCartClick}

                    className={cn(

                        ? 'bg-zion-purple/20 text-zion-cyan'

                        : 'text-white hover:bg-zion-purple/10 hover:text-zion-cyan'

}

      href: '/dashboard',
      matches: (path: string) =>;'
        path === '/dashboard' ||;'
        path === '/client - dashboard' ||;'
        path === '/talent - dashboard',

    }) }
  // Add admin - only links;
  // Check condition;
if ( {) {}
  $2;
}

            {/* Added navbar - nav and flex direction classes */}
            {links.map (link => ('
              <li key={link.name} className='nav - item'>;
                <Link ;
                  href={link.href}
                  aria - label={link.name}

                      : 'text - white hover:bg - zion - purple / 10 hover:text - zion - cyan')}                >;
                  {link.name}
                </Link>;
              </li>))}
            {/* Wishlist link */}
            {is_authenticated && ('
              <li className='nav - item'>;

                  <Heart className='w - 4 h - 4' />;
                  {count > 0 && ('
                    <span className='absolute -top - 1 -right - 1 bg - zion - purple text - white text - xs rounded - full h - 4 w - 4 flex items - center justify - center'>;
                      {count}
                    </span>)}
                </Link>;
              </li>)}
            {/* Wallet link */}
            {is_authenticated && ('
              <li className='nav - item'>;

                  <Wallet className='w - 4 h - 4' />;
                </Link>;
              </li>)}
            {/* Messages link */}
            {is_authenticated && ('
              <li className='nav - item'>;

                    </span>)}
                </Link>;
              </li>)}
            {/* Cart icon with badge */}'
            <li className='nav - item'>;
              <HoverCard open_delay={100}>;
                <HoverCardTrigger as_child>;

                      <span className='absolute -top - 1 -right - 1 bg - zion - purple text - white text - xs rounded - full h - 5 w - 5 flex items - center justify - center'>;
                        {cart_count}
                      </span>;'
import { ChevronDown, Menu, X, Home, Settings, Users, Building, Globe, Zap, Brain, Shield, Cloud, Code, BarChart3'  } from 'lucide-react';
export default /**;
 * Page - Function description;
 */

  ];
              </div>;
            </motion.div>)}
        </AnimatePresence>;
      </div>)}

};
      key: 'contact',;
      href: '/contact',;
      name: 'Contact',;

      matches: (path: string) => path && path.startsWith('/contact')};

  ];
              </div>;
            </motion && motion.div>;
          )};
        </AnimatePresence>;
      </div>;
    )};

      <div className='hidden lg: flex items-center space-x-1'>;
        {baseLinks && baseLinks.map((link (;
          <div key={link && link.key}>;
            {link && link.children ? (;
              renderDropdown();
                link,;'
                link && link.key === 'services' ? isServicesOpen : isCompOpen,;'
                link && link.key === 'services' ? setIsServicesOpen : setIsCompOpen;
              );
            ) : (;

                to={link && link.href}`
`
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${isActive(link)'
                    ? 'bg-zion-cyan text-white'''`
                    : 'text-zion-slate-light hover:text-white hover:bg-white/10'``
}`}

                {link && link.name}
              </Link />;
            )}
          </div>
        ))}
      </div>
      {/* Mobile Menu Button */}

                {link.name}
              </Link />)}
          </div>))}
      </div>;
      {/* Mobile Menu Button */}

      {/* Mobile Navigation */}
      <AnimatePresence>;
        {isMobileMenuOpen &&;
          <motion.div;

  coordinate_x: '100%';
}
            animate = {}
  { opacity: 1,
  coordinate_x: 0;
}
            exit = {}
  { opacity: 0,'
  coordinate_x: '100%';

}
            transition={ duration: 0.3 }';
            className='lg:hidden fixed inset - y-0 right - 0 w - 80 bg - zion - slate - dark border - l border - white / 10 shadow - xl z-50';
';
            <div className='p-6'>';
              <div className='flex justify - between items - center mb-8'>';
                <h2 className='text - xl font - bold text-white'>Menu</h2>;
                <button;
                  on_click={() => setIsMobileMenuOpen (false)}';
                  className='p - 2 text - zion - slate - light hover:text - white hover:bg - white / 10 rounded - md transition-colors';
';
                  <X className='w - 6 h-6'  />                </button>;
              </div>;
';
              <div className='space-y-2'>;

                {base_links.map (link: unknown <div key={link.key}>;
                    {link.children ? (
                      <div>;

}`}

;
            {/* Wishlist link */}
            {isAuthenticated && ('
              <li className='nav-item'>
                <Link '
                  href='/wishlist''
                  aria-label='Wishlist'
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn('
                    'nav-link','
                    'relative inline-flex h-9 w-9 items-center justify-center rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary','
                    router.pathname === '/wishlist''
                      ? 'bg-zion-purple/20 text-zion-cyan''
                      : 'text-white hover:bg-zion-purple/10 hover:text-zion-cyan'
                  )}
                >'
                  <Heart className='w-4 h-4' />
                  {count > 0 && ('
                    <span className='absolute -top-1 -right-1 bg-zion-purple text-white text-xs rounded-full h-4 w-4 flex items-center justify-center'>
                      {count}
                    </span>;
                  )}
                </Link>;
              </li>;
            )}
;
            {/* Wallet link */}

              <li className='nav-item'>
                <Link '
                  href='/wallet''
                  aria-label='Wallet'
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn('
                    'nav-link','
                    'relative inline-flex h-9 w-9 items-center justify-center rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary','
                    router.pathname === '/wallet''
                      ? 'bg-zion-purple/20 text-zion-cyan''
                      : 'text-white hover:bg-zion-purple/10 hover:text-zion-cyan'
                  )}
                >'
                  <Wallet className='w-4 h-4' />
                </Link>
              </li>
            )}
;
            {/* Messages link */}

              <li className='nav-item'>
                <Link '
                  href='/messages''
                  aria-label='Messages'
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn('
                    'nav-link','
                    'relative inline-flex h-9 w-9 items-center justify-center rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary','
                    router.pathname === '/messages''
                      ? 'bg-zion-purple/20 text-zion-cyan''
                      : 'text-white hover:bg-zion-purple/10 hover:text-zion-cyan'
                  )}
                >'
                  <MessageSquare className='w-4 h-4' />
                  {unreadCount > 0 && ('
                    <span className='absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center'>'
                      {unreadCount > 9 ? '9+' : unreadCount}
                    </span>;
                  )}
                </Link>;
              </li>;
            )}
;

                        : 'text-white hover:bg-zion-purple/10 hover:text-zion-cyan';
                    )} />
                    <ShoppingCart className='w-4 h-4 mr-1' />'
                    {t('nav.cartCart')}'
                    )}

}`};
;'`
                          {link.name}'`;'`
                          <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === link.key ? 'rotate-180' : ''}`}  />                        </button>;
'
                        {activeDropdown === link.key && (;''
                          <div className='ml-4 mt-2 space-y-1'>

                            {link.children.map((child: unknown (

                            {link.children.map ((child: unknown (

        {isMobileMenuOpen ? <X className='w-6 h-6'  /> : <Menu className='w-6 h-6'  />}      </button>;
      {/* Mobile Navigation */}
      <AnimatePresence>;
        {isMobileMenuOpen && ;

  { opacity: 1,
  x: 0;
}

                <h2 className='text-xl font-bold text-white'>Menu</h2>;
                <button'
                  onClick={() => setIsMobileMenuOpen(false)}';'
                  className='p-2 text-zion-slate-light hover:text-white hover:bg-white/10 rounded-md transition-colors';'
';'
                  <X className='w-6 h-6'  />                </button>;
              </div>;'
';'
              <div className='space-y-2'>;
                {baseLinks && baseLinks.map(link: unknown <div key={link && link.key}>;
                    {link && link.children ? (;
                      <div>;

                                onClick={: unknown setIsMobileMenuOpen(false)}
                                {child && child.name}
                              </Link />;
                            ))}
                          </div>
                        )}
                      </div>;
                    ) : (;

                      <span className='absolute -top-1 -right-1 bg-zion-purple text-white text-xs rounded-full h-5 w-5 flex items-center justify-center'>
                  >;'
                    <ShoppingCart className='w-4 h-4 mr-1' />;'
                    {t('nav.cartCart')}
                    {cartCount > 0 && (;'
                      <span className='absolute -top-1 -right-1 bg-zion-purple text-white text-xs rounded-full h-5 w-5 flex items-center justify-center'>;
                        {cartCount}
                      </span>;

                    )}
                  </Link>
                </HoverCardTrigger>
                <HoverCardContent>
                  <MiniCartPreview />
                </HoverCardContent>
              </HoverCard>
            </li>

            <LanguageSelector />
          </div>
        </div>
      </nav>
      <LoginModal isOpen={loginOpen} onOpenChange={setLoginOpen} />
    </>

                        {link && link.name}
                      </Link>;
                    )}
                                on_click={: unknown setIsMobileMenuOpen (false)}
                                {child.name}
                              </Link>))}
                          </div>)}
                      </div>) : (

                        on_click={: unknown setIsMobileMenuOpen (false)}
                        {link.name}
                      </Link />)}
                  </Link>;
                </HoverCardTrigger>;
                <HoverCardContent>;
                  <MiniCartPreview />;
                </HoverCardContent>;
              </HoverCard>;
            </li>;
          </ul>;

          <div className='flex items - center gap - 2 mt - 4 md:mt - 0 md:ml - auto'>;
            <LanguageSelector />;
          </div>;
        </div>;
      </nav>;

      <LoginModal is_open={login_open} onOpenChange={setLoginOpen} />;
    </>));
}
;
}

  )
}