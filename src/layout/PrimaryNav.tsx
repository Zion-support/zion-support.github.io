import React from 'react';
import { Link, useLocation  } from 'react-router-dom.ts';
import { Logo  } from '@/components/header/Logo';
import { PointsBadge  } from '@/components/loyalty/PointsBadge';
import { UserMenu  } from '@/components/header/UserMenu';
import { LanguageSelector  } from '@/components/header/LanguageSelector';
import { ModeToggle  } from '@/components/ModeToggle';
import { useAuth  } from '@/hooks/useAuth';
import { useIsMobile  } from '@/hooks/use-mobile';
import { useMessaging  } from '@/context/MessagingContext';
import { EnhancedSearchInput  } from '@/components/search/EnhancedSearchInput';
import { generateSearchSuggestions  } from '@/data/marketplaceData';
import { slugify  } from '@/lib/slugify';
import { ResponsiveNavigation  } from '@/components/navigation/ResponsiveNavigation';
import { MobileMenu  } from '@/components/header/MobileMenu';
import { MobileBottomNav  } from '@/components/header/MobileBottomNav';
import { Menu, X, ShoppingCart  } from 'lucide-react';
import { HoverCard, HoverCardContent, HoverCardTrigger  } from '@/components/ui/hover-card';
import { useTranslation  } from 'react-i18next.ts';
import { useSelector  } from 'react-redux.ts';
import type { RootState } from '@/store';

export function PrimaryNav(...args[]):  {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const { user } = useAuth();
  const isLoggedIn = !!user;
  const isMobile = useIsMobile();
  const { t } = useTranslation();
  const router = useLocation();
  const [query, setQuery] = React.useState('');
  const suggestions = generateSearchSuggestions();

  let unreadCount = 0;
  try {
    const messaging = useMessaging();
    unreadCount = messaging.unreadCount} catch {
    // context not available
  }

  const cartCount = useSelector((s: RootState)  =>
    s.cart.items.reduce((sum, i) => sum + i.quantity, 0),
  );

  const handleSubmit = (e: React.FormEvent)  => {
    e.preventDefault();
    if (query.trim()) {
      // // // // console.log('PrimaryNav search submit:', query);
      router.push(`/search/${slugify(query)}`);
      setQuery('')}
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
    >
      {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
    </button>
  );
};

export function PrimaryNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      category: 'AI & Research',
      items: [
        { name: 'AI Autonomous Research Assistant', path: '/services/ai-autonomous-research-assistant', icon: <Brain className="w-4 h-4" /> },
        { name: 'AI Content Marketing Suite', path: '/services/ai-content-marketing-suite', icon: <FileText className="w-4 h-4" /> },
        { name: 'AI Supply Chain Optimization', path: '/services/ai-supply-chain-optimization', icon: <Network className="w-4 h-4" /> }
      ]
    },
    {
      category: 'Quantum & Advanced',
      items: [
        { name: 'AI Quantum Hybrid Platform', path: '/services/ai-quantum-hybrid-platform', icon: <Cpu className="w-4 h-4" /> },
        { name: 'AI Cybersecurity Platform', path: '/services/ai-cybersecurity-platform', icon: <Shield className="w-4 h-4" /> },
        { name: 'AI Healthcare Platform', path: '/services/ai-healthcare-platform', icon: <Heart className="w-4 h-4" /> }
      ]
    },
    {
      category: 'Innovation Hub',
      items: [
        { name: 'Innovative Services Showcase', path: '/innovative-services-showcase-2028', icon: <Sparkles className="w-4 h-4" /> },
        { name: 'Comprehensive Pricing 2028', path: '/comprehensive-pricing-2028', icon: <BarChart3 className="w-4 h-4" /> },
        { name: 'All Services', path: '/services', icon: <Globe className="w-4 h-4" /> }
      ]
    }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/95 backdrop-blur-md border-b border-white/10 shadow-2xl' 
        : 'bg-gradient-to-r from-black/90 via-slate-900/90 to-black/90 backdrop-blur-sm'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center group-hover:from-blue-600 group-hover:to-cyan-600 transition-all duration-300">
              <Rocket className="w-6 h-6 text-white" />
            </div>
            <span className="text-white text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Zion Tech Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Services Dropdown */}
            <div className="relative group">
              <button
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
                className="flex items-center space-x-2 text-white hover:text-cyan-400 transition-colors duration-200 py-2"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                    className="absolute top-full left-0 mt-2 w-96 bg-slate-900/95 backdrop-blur-md border border-white/10 rounded-xl shadow-2xl p-4"
                  >
                    <div className="grid grid-cols-1 gap-4">
                      {services.map((category, index) => (
                        <div key={index}>
                          <h3 className="text-sm font-semibold text-cyan-400 mb-2 px-2">
                            {category.category}
                          </h3>
                          <div className="space-y-1">
                            {category.items.map((service, serviceIndex) => (
                              <Link
                                key={serviceIndex}
                                to={service.path}
                                className="flex items-center space-x-3 p-2 rounded-lg hover:bg-white/5 transition-colors duration-200 group"
                                onClick={() => setIsServicesOpen(false)}
                              >
                                <div className="text-gray-400 group-hover:text-cyan-400 transition-colors duration-200">
                                  {service.icon}
                                </div>
                                <span className="text-gray-300 group-hover:text-white transition-colors duration-200">
                                  {service.name}
                                </span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link 
              to="/solutions" 
              className={`text-white hover:text-cyan-400 transition-colors duration-200 py-2 ${
                isActive('/solutions') ? 'text-cyan-400' : ''
              }`}
            >
              Solutions
            </Link>
            
            <Link 
              to="/about" 
              className={`text-white hover:text-cyan-400 transition-colors duration-200 py-2 ${
                isActive('/about') ? 'text-cyan-400' : ''
              }`}
            >
              About
            </Link>
            
            <Link 
              to="/blog" 
              className={`text-white hover:text-cyan-400 transition-colors duration-200 py-2 ${
                isActive('/blog') ? 'text-cyan-400' : ''
              }`}
            >
              Blog
            </Link>
            
            <Link 
              to="/contact" 
              className={`text-white hover:text-cyan-400 transition-colors duration-200 py-2 ${
                isActive('/contact') ? 'text-cyan-400' : ''
              }`}
            >
              Contact
            </Link>

            {/* Theme Toggle */}
            <ModeToggle />

            {/* CTA Button */}
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get Started
            </Link>
          </div>
          
          {/* Actions container with responsive layout */}
          <div className="hidden md:flex items-center gap-2 order-2 flex-shrink-0 min-w-0">
            {/* Search form with clamped width */}
            <form onSubmit={handleSubmit} className="flex-shrink-0" style={{ width: 'clamp(12rem, 20vw, 16rem)' }}>
              <EnhancedSearchInput
                value={query}
                onChange={setQuery}
                onSelectSuggestion={(sugg) => {
                  // // // // console.log('PrimaryNav search suggestion selected:', sugg);
                  // Handle different suggestion types with proper navigation
                  if (sugg.id) {
                    // Product listings with IDs go to product detail page
                    router.push(`/marketplace/listing/${sugg.id}`)} else if (sugg.type === 'doc' && sugg.slug && sugg.slug.startsWith('/')) {
                    // Documentation suggestions navigate directly to their path
                    router.push(sugg.slug)} else if (sugg.type === 'blog' && sugg.slug) {
                    // Blog posts navigate to blog detail page
                    router.push(`/blog/${sugg.slug}`)} else {
                    // Default: search results page with slug
                    router.push(`/search/${sugg.slug || slugify(sugg.text)}`)}
                  setQuery('');
                  
                  // Track analytics event
                  if (typeof window !== 'undefined' && window.gtag) {
                    window.gtag('event', 'search_suggestion_click', {
                      search_term: sugg.text,
                      suggestion_type: sugg.type,
                      suggestion_id: sugg.id || sugg.slug
                    })}
                }}
                searchSuggestions={suggestions}
              />
            </form>
            
            {/* Compact actions group */}
            <div className="flex items-center gap-1">
              <PointsBadge />
              <HoverCard openDelay={100}>
                <HoverCardTrigger asChild>
                  <Link
                    href="/cart"
                    className="relative p-1"
                    aria-label={t('nav.cart', 'Cart')}
                  >
                    <ShoppingCart aria-hidden="true" className="h-5 w-5 text-foreground hover:text-primary" />
                    {cartCount > 0 && (
                      <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-[10px] rounded-full h-4 w-4 flex items-center justify-center">
                        {cartCount}
                      </span>
                    )}
                  </Link>
                </HoverCardTrigger>
                <HoverCardContent>
                  <div className="p-4">
                    <p className="text-sm text-muted-foreground">Cart preview</p>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>
            
            {/* Compact controls group */}
            <div className="flex items-center gap-1 border-l border-primary/20 pl-1 ml-1">
              <ModeToggle />
              <LanguageSelector />
            </div>
            
            {/* Auth links - flex wrap for very small screens */}
            <div className="flex items-center gap-1 flex-wrap">
              {!isLoggedIn && (
                <>
                  <Link
                    href="/auth/login"
                    className="text-sm hover:text-primary whitespace-nowrap"
                    data-testid="login-link"
                  >
                    {t('auth.login')}
                  </Link>
                  <Link
                    href="/signup"
                    className="text-sm hover:text-primary whitespace-nowrap"
                  >
                    {t('auth.signup')}
                  </Link>
                </>
              )}
              {isLoggedIn && <UserMenu />}
            </div>
          </div>
          
          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white hover:text-cyan-400 transition-colors duration-200"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-60 pt-16">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
          <div className="relative bg-card border-t border-primary/20 max-h-[calc(100vh-4rem)] overflow-y-auto">
            <MobileMenu
              unreadCount={unreadCount}
              onClose={() => setMobileMenuOpen(false)}
            />
          </div>
        </div>
      )}
      {isMobile && <MobileBottomNav unreadCount={unreadCount} />}
    </>
  )}
