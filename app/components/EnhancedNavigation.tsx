import React, { useState, useEffect, useCallback } from 'react';

interface NavigationItem {
  label: string;
  href: string;
  icon?: string;
  children?: NavigationItem[];
  external?: boolean;
}

interface EnhancedNavigationProps {
  className?: string;
}

const EnhancedNavigation: React.FC<EnhancedNavigationProps> = ({ className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const navigationItems: NavigationItem[] = [
    {
      label: 'Home',
      href: '/',
      icon: '🏠'
    },
    {
      label: 'Services',
      href: '/services',
      icon: '⚙️',
      children: [
        { label: 'AI Services', href: '/ai-services', icon: '🤖' },
        { label: 'AI Marketing', href: '/ai-marketing', icon: '📢' },
        { label: 'AI Automation', href: '/ai-automation', icon: '🔄' },
        { label: 'AI Healthcare', href: '/ai-healthcare', icon: '🏥' },
        { label: 'AI Fintech', href: '/ai-fintech', icon: '💰' },
        { label: 'Quantum Computing', href: '/quantum-computing', icon: '⚛️' }
      ]
    },
    {
      label: 'About',
      href: '/about',
      icon: 'ℹ️'
    },
    {
      label: 'Contact',
      href: '/contact',
      icon: '📞'
    },
    {
      label: 'Blog',
      href: '/blog',
      icon: '📝'
    }
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle keyboard navigation
  const handleKeyDown = useCallback((event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      setIsOpen(false);
      setActiveItem(null);
    }
  }, []);

  // Handle mobile menu toggle
  const toggleMobileMenu = useCallback(() => {
    setIsOpen(!isOpen);
    if (isOpen) {
      setActiveItem(null);
    }
  }, [isOpen]);

  // Handle navigation item click
  const handleItemClick = useCallback((item: NavigationItem) => {
    if (item.children) {
      setActiveItem(activeItem === item.label ? null : item.label);
    } else {
      setIsOpen(false);
      setActiveItem(null);
    }
  }, [activeItem]);

  // Handle external link click
  const handleExternalClick = useCallback((href: string) => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'click', {
        event_category: 'navigation',
        event_label: href,
      });
    }
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-900/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      } ${className}`}
      onKeyDown={handleKeyDown}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="/"
              className="flex items-center space-x-2 text-white hover:text-cyan-400 transition-colors duration-200"
              aria-label="Zion Tech Group Home"
            >
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">Z</span>
              </div>
              <span className="font-bold text-xl hidden sm:block">Zion Tech Group</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.label} className="relative group">
                <button
                  onClick={() => handleItemClick(item)}
                  className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors duration-200 py-2 px-3 rounded-md hover:bg-slate-800/50"
                  aria-expanded={item.children ? activeItem === item.label : undefined}
                  aria-haspopup={item.children ? 'true' : undefined}
                >
                  {item.icon && <span className="text-sm">{item.icon}</span>}
                  <span>{item.label}</span>
                  {item.children && (
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${
                        activeItem === item.label ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </button>

                {/* Dropdown Menu */}
                {item.children && (
                  <div
                    className={`absolute top-full left-0 mt-2 w-64 bg-slate-800 rounded-lg shadow-xl border border-slate-700 transition-all duration-200 ${
                      activeItem === item.label
                        ? 'opacity-100 visible translate-y-0'
                        : 'opacity-0 invisible -translate-y-2'
                    }`}
                    role="menu"
                    aria-orientation="vertical"
                  >
                    <div className="py-2">
                      {item.children.map((child) => (
                        <a
                          key={child.href}
                          href={child.href}
                          onClick={() => handleExternalClick(child.href)}
                          className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-slate-700 transition-colors duration-200"
                          role="menuitem"
                        >
                          {child.icon && <span className="text-sm">{child.icon}</span>}
                          <span>{child.label}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+13024640950"
              className="cyber-button px-4 py-2 text-sm"
              aria-label="Call us at (302) 464-0950"
            >
              📞 (302) 464-0950
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-white hover:text-cyan-400 transition-colors duration-200 p-2"
              aria-label="Toggle mobile menu"
              aria-expanded={isOpen}
            >
              <svg
                className={`w-6 h-6 transition-transform duration-200 ${
                  isOpen ? 'rotate-90' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`lg:hidden transition-all duration-300 ${
            isOpen
              ? 'max-h-screen opacity-100 visible'
              : 'max-h-0 opacity-0 invisible'
          }`}
        >
          <div className="py-4 space-y-2 bg-slate-800/95 backdrop-blur-md rounded-lg mt-2 border border-slate-700">
            {navigationItems.map((item) => (
              <div key={item.label}>
                <button
                  onClick={() => handleItemClick(item)}
                  className="flex items-center justify-between w-full px-4 py-3 text-left text-white hover:text-cyan-400 hover:bg-slate-700/50 transition-colors duration-200"
                  aria-expanded={item.children ? activeItem === item.label : undefined}
                >
                  <div className="flex items-center space-x-3">
                    {item.icon && <span className="text-sm">{item.icon}</span>}
                    <span>{item.label}</span>
                  </div>
                  {item.children && (
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${
                        activeItem === item.label ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </button>

                {/* Mobile Submenu */}
                {item.children && (
                  <div
                    className={`transition-all duration-200 ${
                      activeItem === item.label
                        ? 'max-h-96 opacity-100 visible'
                        : 'max-h-0 opacity-0 invisible'
                    }`}
                  >
                    <div className="pl-8 space-y-1">
                      {item.children.map((child) => (
                        <a
                          key={child.href}
                          href={child.href}
                          onClick={() => handleExternalClick(child.href)}
                          className="flex items-center space-x-3 px-4 py-2 text-gray-300 hover:text-white hover:bg-slate-700/50 transition-colors duration-200"
                        >
                          {child.icon && <span className="text-sm">{child.icon}</span>}
                          <span>{child.label}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Mobile CTA */}
            <div className="px-4 pt-4 border-t border-slate-700">
              <a
                href="tel:+13024640950"
                className="cyber-button w-full text-center block py-3"
                aria-label="Call us at (302) 464-0950"
              >
                📞 Call (302) 464-0950
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Backdrop for mobile menu */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm lg:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
    </nav>
  );
};

export default EnhancedNavigation;