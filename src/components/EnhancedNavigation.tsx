import React, { memo, useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
  external?: boolean;
}

const EnhancedNavigation = memo(() => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navRef = useRef<HTMLElement>(null);

  const navItems: NavItem[] = [
    {
      label: 'Home',
      href: '/'
    },
    {
      label: 'Services',
      href: '/services',
      children: [
        { label: 'AI Solutions', href: '/services/ai-services' },
        { label: 'IT Services', href: '/services/it-services' },
        { label: 'Cybersecurity', href: '/services/cybersecurity' },
        { label: 'Cloud Migration', href: '/services/cloud-solutions' },
        { label: 'Mobile Development', href: '/services/mobile-development' },
        { label: 'Micro SaaS', href: '/services/micro-saas' }
      ]
    },
    {
      label: 'Solutions',
      href: '/solutions',
      children: [
        { label: 'AI Matcher', href: '/match' },
        { label: 'Talent Directory', href: '/talent' },
        { label: 'Request Quote', href: '/request-quote' },
        { label: 'Service Calculator', href: '/service-calculator' }
      ]
    },
    {
      label: 'About',
      href: '/about'
    },
    {
      label: 'Contact',
      href: '/contact'
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

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
        setActiveDropdown(null);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  const NavLink = memo<{ item: NavItem; isMobile?: boolean }>(({ item, isMobile = false }) => {
    const isActive = location.pathname === item.href;
    
    if (item.children) {
      return (
        <div className="relative">
          <button
            onClick={() => toggleDropdown(item.label)}
            className={`
              flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors
              ${isMobile 
                ? 'text-white hover:bg-white/10 w-full justify-between' 
                : 'text-white hover:text-blue-200'
              }
              ${isActive ? 'text-blue-200' : ''}
            `}
            aria-expanded={activeDropdown === item.label}
            aria-haspopup="true"
          >
            <span>{item.label}</span>
            <ChevronDown className={`w-4 h-4 transition-transform ${
              activeDropdown === item.label ? 'rotate-180' : ''
            }`} />
          </button>
          
          {(activeDropdown === item.label || isMobile) && (
            <div className={`
              ${isMobile 
                ? 'mt-2 space-y-1' 
                : 'absolute top-full left-0 mt-1 w-48 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 shadow-lg z-50'
              }
            `}>
              {item.children.map((child) => (
                <Link
                  key={child.href}
                  to={child.href}
                  className={`
                    block px-3 py-2 text-sm transition-colors
                    ${isMobile 
                      ? 'text-white hover:bg-white/10 rounded-md' 
                      : 'text-white hover:bg-white/10 hover:text-blue-200 rounded-md'
                    }
                    ${location.pathname === child.href ? 'text-blue-200 bg-white/10' : ''}
                  `}
                >
                  {child.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      );
    }

    return (
      <Link
        to={item.href}
        className={`
          px-3 py-2 rounded-md text-sm font-medium transition-colors
          ${isMobile 
            ? 'text-white hover:bg-white/10 block' 
            : 'text-white hover:text-blue-200'
          }
          ${isActive ? 'text-blue-200' : ''}
        `}
      >
        {item.label}
      </Link>
    );
  });

  return (
    <nav 
      ref={navRef}
      id="navigation"
      className={`
        fixed top-0 left-0 right-0 z-40 transition-all duration-300
        ${isScrolled 
          ? 'bg-black/80 backdrop-blur-md border-b border-white/20' 
          : 'bg-transparent'
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">Z</span>
            </div>
            <span className="text-white font-bold text-xl">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <NavLink key={item.label} item={item} />
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/80 backdrop-blur-md rounded-lg mt-2 border border-white/20">
              {navItems.map((item) => (
                <NavLink key={item.label} item={item} isMobile />
              ))}
              <div className="pt-4 border-t border-white/20">
                <Link
                  to="/contact"
                  className="block w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium text-center transition-colors"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
});

EnhancedNavigation.displayName = 'EnhancedNavigation';

export default EnhancedNavigation;