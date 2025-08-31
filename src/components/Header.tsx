import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { MainNavigation } from './header/MainNavigation';
import { 
  Menu, 
  X, 
  Zap, 
  Phone, 
  Mail, 
  MapPin,
  ChevronDown,
  Globe,
  Search,
  Bell
} from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

interface HeaderProps {
  className?: string;
}

// Memoized navigation data
const navigationData = [
  {
    name: 'Services',
    href: '/services',
    dropdown: true,
    items: [
      { name: 'AI & Machine Learning', href: '/services#ai-ml' },
      { name: 'Quantum Computing', href: '/services#quantum' },
      { name: 'AI Cybersecurity', href: '/services#cybersecurity' },
      { name: 'AI Healthcare', href: '/services#healthcare' },
      { name: 'AI Financial Trading', href: '/services#financial' },
      { name: 'AI Supply Chain', href: '/services#supply-chain' },
      { name: 'AI Marketing & SEO', href: '/services#marketing' },
      { name: 'AI Project Management', href: '/services#project-management' },
      { name: 'AI DevOps & Infrastructure', href: '/services#devops' },
      { name: 'AI IoT & Edge Computing', href: '/services#iot-edge' },
      { name: 'Space Technology', href: '/services#space-tech' },
      { name: 'Micro SAAS Solutions', href: '/services#micro-saas' },
      { name: 'Cybersecurity', href: '/services/cybersecurity' },
      { name: 'Cloud & DevOps', href: '/services/cloud-devops' },
      { name: 'Data & Analytics', href: '/services/ai-business-intelligence' },
      { name: 'Digital Transformation', href: '/digital-transformation' },
      { name: 'IT Infrastructure', href: '/services/it-infrastructure' },
      { name: 'Emerging Technologies', href: '/emerging-tech' }
    ]
  },
  {
    name: 'Solutions',
    href: '/solutions',
    dropdown: true,
    items: [
      { name: 'Healthcare', href: '/solutions/healthcare' },
      { name: 'Financial Services', href: '/financial-solutions' },
      { name: 'Manufacturing', href: '/manufacturing-solutions' },
      { name: 'Enterprise', href: '/enterprise' },
      { name: 'Industry Solutions', href: '/industry-solutions' },
      { name: 'Cloud Solutions', href: '/cloud-solutions' }
    ]
  },
  {
    title: 'Company',
    items: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Team', href: '/about/team' },
      { name: 'Careers', href: '/careers' },
      { name: 'Partners', href: '/partners' },
      { name: 'News', href: '/news' },
      { name: 'Contact', href: '/contact' }
    ]
  },
  {
    title: 'Resources',
    items: [
      { name: 'Blog', href: '/blog' },
      { name: 'Documentation', href: '/docs' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'White Papers', href: '/white-papers' },
      { name: 'Webinars', href: '/webinars' },
      { name: 'Training', href: '/training' },
      { name: 'Tutorials', href: '/tutorials' },
      { name: 'Help Center', href: '/help' }
    ]
  }
];

export const Header = React.memo(({ className }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [showSearch, setShowSearch] = useState(false);
  const location = useLocation();

  // Memoized scroll handler
  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Memoized dropdown toggle
  const toggleDropdown = useCallback((dropdownName: string) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  }, [activeDropdown]);

  // Memoized mobile menu toggle
  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }, [isMobileMenuOpen]);

  // Memoized close mobile menu
  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  // Memoized search toggle
  const toggleSearch = useCallback(() => {
    setShowSearch(!showSearch);
  }, [showSearch]);

  // Memoized header classes
  const headerClasses = useMemo(() => {
    const baseClasses = 'fixed top-0 left-0 right-0 z-50 transition-all duration-300';
    const scrolledClasses = isScrolled 
      ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/20' 
      : 'bg-transparent';
    return `${baseClasses} ${scrolledClasses} ${className || ''}`;
  }, [isScrolled, className]);

  // Memoized logo classes
  const logoClasses = useMemo(() => {
    return isScrolled ? 'text-zion-blue' : 'text-white';
  }, [isScrolled]);

  return (
    <header className={headerClasses}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
            </div>
            <span className={`text-xl lg:text-2xl font-bold transition-colors duration-300 ${logoClasses}`}>
              Zion Tech Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <MainNavigation 
              navigation={navigationData}
              activeDropdown={activeDropdown}
              onToggleDropdown={toggleDropdown}
            />
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Search Toggle */}
            <button
              onClick={toggleSearch}
              className="p-2 text-gray-600 hover:text-zion-blue transition-colors duration-200"
              aria-label="Toggle search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Notifications */}
            <button
              className="p-2 text-gray-600 hover:text-zion-blue transition-colors duration-200 relative"
              aria-label="Notifications"
            >
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Contact Info */}
            <div className="hidden xl:flex items-center space-x-4 text-sm">
              <a href="tel:+1-800-ZION-TECH" className="flex items-center space-x-1 text-gray-600 hover:text-zion-blue transition-colors duration-200">
                <Phone className="w-4 h-4" />
                <span>+1-800-ZION-TECH</span>
              </a>
            </div>

            {/* CTA Button */}
            <Link
              to="/contact"
              className="hidden lg:inline-flex items-center px-4 py-2 bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-lg hover:from-zion-cyan-dark hover:to-zion-blue-dark transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 text-gray-600 hover:text-zion-blue transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <AnimatePresence>
          {showSearch && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="py-4 border-t border-gray-200/20"
            >
              <div className="relative max-w-2xl mx-auto">
                <input
                  type="text"
                  placeholder="Search services, solutions, or resources..."
                  className="w-full px-4 py-3 pl-12 bg-white/10 backdrop-blur-md border border-gray-200/30 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-200/20"
          >
            <div className="container mx-auto px-4 py-6">
              <div className="grid grid-cols-1 gap-6">
                {navigationData.map((section, index) => (
                  <div key={index}>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {section.name || section.title}
                    </h3>
                    <div className="space-y-2">
                      {section.items?.map((item, itemIndex) => (
                        <Link
                          key={itemIndex}
                          to={item.href}
                          onClick={closeMobileMenu}
                          className="block py-2 text-gray-600 hover:text-zion-blue transition-colors duration-200"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
                
                {/* Mobile CTA */}
                <div className="pt-4 border-t border-gray-200/20">
                  <Link
                    to="/contact"
                    onClick={closeMobileMenu}
                    className="block w-full text-center px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-lg hover:from-zion-cyan-dark hover:to-zion-blue-dark transition-all duration-300"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
});

Header.displayName = 'Header';
