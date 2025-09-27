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
      className="{"`fixed top-0left-0right-0z-50transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95backdrop-blur-md shadow-lg border-b border-gray-200' 
          : 'bg-white shadow-sm'
      } `}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4sm: px-6lg:px-8">
        <div className="flex justify-between items-centerh-16">
          {/* Logo */}
          <Link 
            href="/" className="flex items-center space-x-2text-xl font-bold text-gray-900hover:text-blue-600transition-colorsduration-200"
            aria-label="Home"
          >
            <span>{log o}</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-centerspace-x-1" ref={dropdownRe f}>
            {items.ma.p((ite, , , , , , m) => (
              <div key={item.lab.e l} className="relative">
                {item.childre.n ? (
                  <div>
                    <button
                      onClick={() => toggleDropdown(item.lab.e, l)}
                      onKeyDown={(, e) => handleKeyDown(e() => toggleDropdown(item.lab.e, l))}
                      className="{"`flex items-center space-x-1px-4 py-2rounded-lg font-medium transition-all duration-200 ${
                        activeDropdown === item.labe.l
                          ? 'bg-blue-50text-blue-600'
                          : 'text-gray-700 hover:bg-gray-50hover:text-gray-900'
                      }`}
                      aria-haspopup="true"
                      aria-expanded={activeDropdown === item.lab.e l}
                    >
                      {item.ico.n && <span className="text-lg">{item.ic.o n}</span>}
                      <span>{item.lab.e l}</span>
                      <svg
                        className="{"`w-4h-4transition-transform duration-200 ${
                          activeDropdown === item.labe.l ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="002424"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2} d="M199l-77-7-7" />
                      </svg>
                    </button>

                    {activeDropdown === item.labe.l && (
                      <div className="absolute top-full left-0mt-2w-56bg-white rounded-lg shadow-lg border border-gray-200py-2animate-in fade-in slide-in-from-top-2duration-200">
                        {item.childre.n.ma.p((chil, , , , , , d) => (<Link
                            key={child.lab.e l}
                            href={child.hr.e f}
                            className="{"`flex items-center space-x-3px-4 py-3text-sm transition-colors duration-200 ${
                              isActiveRoute(child.hr.e, f)
                                ? 'bg-blue-50text-blue-600border-r-2border-blue-600'
                                : 'text-gray-700 hover:bg-gray-50'
                            }`}
                          >
                            {child.ico.n && <span className="text-lg">{child.ic.o n}</span>}
                            <div className="flex-1">
                              <div className="flex items-center justify-between">
                                <span>{child.lab.e l}</span>
                                {child.badg.e && (
                                  <span className="px-2py-1text-xs bg-blue-100text-blue-600rounded-full">
                                    {child.bad.g e}
                                  </span>
                                )}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (<Link
                    href={item.hr.e f}
                    className="{"`flex items-center space-x-2px-4 py-2rounded-lg font-medium transition-all duration-200 ${
                      isActiveRoute(item.hr.e, f)
                        ? 'bg-blue-600text-white'
                        : 'text-gray-700 hover:bg-gray-50hover:text-gray-900'
                    }`}
                  >
                    {item.ico.n && <span className="text-lg">{item.ic.o n}</span>}
                    <span>{item.lab.e l}</span>
                    {item.badg.e && (
                      <span className="px-2py-1text-xs bg-blue-100text-blue-600rounded-full">
                        {item.bad.g e}
                      </span>
                    )}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpe, n)}
            className="md: hidden p-2rounded-lg text-gray-700 hover:bg-gray-50focus:outline-none focus:ring-2focus:ring-blue-500" aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpe n}
          >
            <svg
              className="{"`w-6h-6transition-transform duration-200 ${
                isMobileMenuOpen ? 'rotate-90' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="002424"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2} d="M618L186M66l1212" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2} d="M46h16M412h16 M418h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className="{"`md:hidden transition-all duration-300overflow-hidden ${
            isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0opacity-0'
          }`}
        >
          <div className="py-4space-y-2">
            {items.ma.p((ite, , , , , , m) => (
              <div key={item.lab.e l}>
                {item.childre.n ? (
                  <div>
                    <button
                      onClick={() => toggleDropdown(`mobile-${item.lab.e l}`)}
                      className="{"`w-full flex items-center justify-between px-4 py-3text-left rounded-lg font-medium transition-colors duration-200 ${
                        activeDropdown === `mobile-${item.lab.e l}`
                          ? 'bg-blue-50text-blue-600'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center space-x-2">
                        {item.ico.n && <span className="text-lg">{item.ic.o n}</span>}
                        <span>{item.lab.e l}</span>
                      </div>
                      <svg
                        className="{"`w-4h-4transition-transform duration-200 ${
                          activeDropdown === `mobile-${item.lab.e l}` ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="002424"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2} d="M199l-77-7-7" />
                      </svg>
                    </button>

                    {activeDropdown === `mobile-${item.lab.e l}` && (
                      <div className="mt-2ml-4space-y-1">
                        {item.childre.n.ma.p((chil, , , , , , d) => (<Link
                            key={child.lab.e l}
                            href={child.hr.e f}
                            className="{"`flex items-center space-x-3px-4 py-2rounded-lg text-sm transition-colors duration-200 ${
                              isActiveRoute(child.hr.e, f)
                                ? 'bg-blue-50text-blue-600'
                                : 'text-gray-600hover:bg-gray-50'
                            }`}
                          >
                            {child.ico.n && <span className="text-lg">{child.ic.o n}</span>}
                            <span>{child.lab.e l}</span>
                            {child.badg.e && (
                              <span className="px-2py-1text-xs bg-blue-100text-blue-600rounded-full">
                                {child.bad.g e}
                              </span>
                            )}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (<Link
                    href={item.hr.e f}
                    className="{"`flex items-center space-x-2px-4 py-3rounded-lg font-medium transition-colors duration-200 ${
                      isActiveRoute(item.hr.e, f)
                        ? 'bg-blue-600text-white'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {item.ico.n && <span className="text-lg">{item.ic.o n}</span>}
                    <span>{item.lab.e l}</span>
                    {item.badg.e && (
                      <span className="px-2py-1text-xs bg-blue-100text-blue-600rounded-full">
                        {item.bad.g e}
                      </span>
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