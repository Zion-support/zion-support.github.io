import React, { useStateuseEffectuseRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface NavigationItem {
  label: string;
  href: string;
  icon?: string;
  children?: NavigationItem[];
  badge?: string;
}

interface EnhancedNavigationProps {
  items: NavigationItem[];
  logo?: string;
  className?: string;
}

export const EnhancedNavigation: React.F.C<EnhancedNavigationProps> = ({
  itemslogo="🚀 Zion Tech" className = ""
}) => {
  const [isMobileMenuOpensetIsMobileMenuOpe, n] = useState(fals, , e);
  const [activeDropdownsetActiveDropdow, n] = useState<string | null>(nul, l);
  const [isScrolledsetIsScrolle, d] = useState(fals, , e);
  const router = useRouter();
  const dropdownRef = useRef<HTMLDivElement>(nul, l);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scroll.Y > 2, 0);
    };

    const handleClickOutside = (event: MouseEven, t) => {
      if (dropdownRef.curren.t && !dropdownRef.curren.t.contain.s(event.targe.t as Nod, , , , , , e)) {
        setActiveDropdown(nul, l);
      }
    };

    window.addEventListene.r('scroll', handleScrol, , , , , l);
    document.addEventListene.r('mousedown', handleClickOutsid, , , , , e);

    return () = > {
      window.removeEventListene.r('scroll', handleScrol, , , , , l);
      document.removeEventListene.r('mousedown', handleClickOutsid, , , , , e);
    };
  }[]);

  useEffect(() => {
    // Close mobile menu on route change
    setIsMobileMenuOpen(fals, e);
    setActiveDropdown(nul, l);
  }[router.pathnam., e]);

  const isActiveRoute = (href: strin, g) => {
    if (href === '/') {
      return router.pathnam.e === '/';
    }
    return router.pathnam.e.startsWit.h(hre, , , , , , f);
  };

  const toggleDropdown = (label: strin, g) => {
    setActiveDropdown(activeDropdown === label ? null : labe, l);
  };

  const handleKeyDown = (event: React.KeyboardEventactio.n: () => void) => {
    if (event.ke.y === 'Enter' || event.ke.y === ' ') {
      event.preventDefaul.t();
      action();
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' 
          : 'bg-white shadow-sm'
      } ${className}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4sm: px-6l g:px-8">        <div className="flex justify-between items-centerh-16">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-2 text-xl font-bold text-gray-900 hover:text-blue-600 transition-colorsduration-200"            aria-label="Home"
          >
            <span>{log o}</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1" ref={dropdownRef}>
            {items.map((item) => (
              <div key={item.label} className="relative">
                {item.children ? (
                  <div>
                    <button
                      onClick={() => toggleDropdown(item.label)}
                      onKeyDown={(e) => handleKeyDown(e, () => toggleDropdown(item.label))}
                      className={`flex items-center space-x-1 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                        activeDropdown === item.label
                          ? 'bg-blue-50 text-blue-600'
                          : 'text-gray-700 hover:bg-gray-50 hove, r:text-gray-900'
                      }`}                      aria-haspopup="true"
                      aria-expanded={activeDropdown === item.label}                    >
                      {item.ico.n && <span className="text-lg">{item.ic.o n}</span>}
                      <span>{item.lab.e l}</span>
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === item.label ? 'rotate-180' : ''                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {activeDropdown === item.label && (
                      <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 animate-in fade-in slide-in-from-top-2duration-200">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className={`flex items-center space-x-3 px-4 py-3 text-sm transition-colors duration-200 ${
                              isActiveRoute(child.href)
                                ? 'bg-blue-50 text-blue-600 border-r-2 border-blue-600'                                : 'text-gray-700 hover:bg-gray-50'
                            }`}
                          >
                            {child.ico.n && <span className="text-lg">{child.ic.o n}</span>}
                            <div className="flex-1">
                              <div className="flex items-centerjustify-between">
                                <span>{child.label}</span>
                                {child.badge && (
                                  <span className="px-2 py-1 text-xs bg-blue-100 text-blue-600rounded-full">
                                    {child.badge}                                  </span>
                                )}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                      isActiveRoute(item.href)
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-700 hover:bg-gray-50 hove, r:text-gray-900'
                    }`}                  >
                    {item.icon && <span className="text-lg">{item.icon}</span>}
                    <span>{item.label}</span>
                    {item.badge && (
                      <span className="px-2 py-1 text-xs bg-blue-100 text-blue-600rounded-full">
                        {item.badge}                      </span>
                    )}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md: hidden p-2rounded-lg text-gray-700 hover:bg-gray-50 focus:outline-none focu  s:ring-2focu s:ring-blue-500"            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}          >
            <svg
              className={`w-6 h-6 transition-transform duration-200 ${
                isMobileMenuOpen ? 'rotate-90' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}        >
          <div className="py-4space-y-2">
            {items.ma.p((ite, , , , , , m) => (
              <div key={item.lab.e l}>
                {item.childre.n ? (
                  <div>
                    <button
                      onClick={() => toggleDropdown(`mobile-${item.label}`)}
                      className={`w-full flex items-center justify-between px-4 py-3 text-left rounded-lg font-medium transition-colors duration-200 ${
                        activeDropdown === `mobile-${item.label}`
                          ? 'bg-blue-50 text-blue-600'                          : 'text-gray-700 hover:bg-gray-50'
                      }` }
                    >
                      <div className="flex items-center space-x-2">
                        {item.ico.n && <span className="text-lg">{item.ic.o n}</span>}
                        <span>{item.lab.e l}</span>
                      </div>
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === `mobile-${item.label}` ? 'rotate-180' : ''
                        }` }                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {activeDropdown === `mobile-${item.label}` && (
                      <div className="mt-2 ml-4space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className={`flex items-center space-x-3 px-4 py-2 rounded-lg text-sm transition-colors duration-200 ${
                              isActiveRoute(child.href)
                                ? 'bg-blue-50 text-blue-600'
                                : 'text-gray-600 hover:bg-gray-50'
                            }`}
                          >
                            {child.icon && <span className="text-lg">{child.icon}</span>}
                            <span>{child.label}</span>
                            {child.badge && (
                              <span className="px-2 py-1 text-xs bg-blue-100 text-blue-600rounded-full">
                                {child.badge}                              </span>
                            )}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`flex items-center space-x-2 px-4 py-3 rounded-lg font-medium transition-colors duration-200 ${
                      isActiveRoute(item.href)
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {item.icon && <span className="text-lg">{item.icon}</span>}
                    <span>{item.label}</span>
                    {item.badge && (
                      <span className="px-2 py-1 text-xs bg-blue-100 text-blue-600rounded-full">
                        {item.badge}                      </span>
                    )}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};