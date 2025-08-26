import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const services = [
    { name: 'AI Solutions', href: '/ai-solutions', description: 'Machine Learning & AI Services' },
    { name: 'Cloud & DevOps', href: '/cloud-devops', description: 'Cloud Migration & Automation' },
    { name: 'Cybersecurity', href: '/services/cybersecurity', description: 'Security & Threat Protection' },
    { name: 'IT Infrastructure', href: '/services/it-infrastructure', description: 'Network & System Management' },
    { name: 'Digital Transformation', href: '/digital-transformation', description: 'Business Process Optimization' },
    { name: 'Quantum Computing', href: '/services/quantum-technology', description: 'Next-Generation Computing' },
    { name: 'Blockchain Solutions', href: '/blockchain-enterprise-solutions', description: 'Distributed Ledger Technology' },
    { name: 'IoT & Data Analytics', href: '/iot-data-analytics', description: 'Connected Devices & Insights' }
  ];

  const company = [
    { name: 'About Us', href: '/about', description: 'Learn about our mission and values' },
    { name: 'Our Team', href: '/team', description: 'Meet our leadership and experts' },
    { name: 'Mission & Vision', href: '/mission', description: 'Our purpose and future goals' },
    { name: 'Careers', href: '/careers', description: 'Join our innovative team' },
    { name: 'Partners', href: '/partners', description: 'Strategic partnerships and alliances' },
    { name: 'News', href: '/news', description: 'Company updates and announcements' }
  ];

  const closeMenu = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  const companyLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Leadership', href: '/leadership' },
    { name: 'Careers', href: '/careers' },
    { name: 'Partners', href: '/partners' },
    { name: 'Case Studies', href: '/case-studies' }
  ];

  const resourcesLinks = [
    { name: 'Blog', href: '/blog' },
    { name: 'News', href: '/news' },
    { name: 'Events', href: '/events' },
    { name: 'Webinars', href: '/webinars' },
    { name: 'White Papers', href: '/white-papers' },
    { name: 'Research & Development', href: '/research-development' },
    { name: 'Tutorials', href: '/tutorials' }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) {
      setIsServicesOpen(false);
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  };

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const navigationItems = [
    {
      name: 'Home',
      path: '/',
      hasDropdown: false
    },
    {
      name: 'Services',
      path: '/services',
      hasDropdown: true,
      dropdownItems: [
        { name: 'AI Solutions', path: '/services/ai-solutions' },
        { name: 'Cybersecurity', path: '/services/cybersecurity' },
        { name: 'Cloud & DevOps', path: '/services/cloud-devops' },
        { name: 'IT Infrastructure', path: '/services/it-infrastructure' },
        { name: 'Digital Transformation', path: '/services/digital-transformation' },
        { name: 'Green IT', path: '/green-it' },
        { name: 'Quantum Technology', path: '/quantum-technology' },
        { name: 'Space Tech', path: '/space-tech' },
        { name: 'Mobile Solutions', path: '/mobile' },
        { name: 'Financial Solutions', path: '/financial-solutions' },
        { name: 'Micro SaaS Services', path: '/micro-saas-services' }
      ]
    },
    {
      name: 'Company',
      path: '/about',
      hasDropdown: true,
      dropdownItems: [
        { name: 'About Us', path: '/about' },
        { name: 'Our Team', path: '/team' },
        { name: 'Careers', path: '/careers' },
        { name: 'Partners', path: '/partners' },
        { name: 'Research & Development', path: '/research-development' }
      ]
    },
    {
      name: 'Resources',
      path: '/resources',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Blog & Insights', path: '/blog' },
        { name: 'Tutorials', path: '/tutorials' },
        { name: 'Webinars', path: '/webinars' },
        { name: 'White Papers', path: '/white-papers' },
        { name: 'Case Studies', path: '/case-studies' },
        { name: 'Documentation', path: '/documentation' },
        { name: 'API Reference', path: '/api' },
        { name: 'Developer Portal', path: '/developer' }
      ]
    },
    {
      name: 'Support',
      path: '/support',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Help Center', path: '/help-center' },
        { name: 'FAQ', path: '/faq' },
        { name: 'Contact Support', path: '/contact' },
        { name: 'Request Quote', path: '/request-quote' },
        { name: 'Service Comparison', path: '/service-comparison' }
      ]
    },
    {
      name: 'Enterprise',
      path: '/enterprise',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Enterprise Solutions', path: '/enterprise' },
        { name: 'Custom Solutions', path: '/solutions' },
        { name: 'Community', path: '/community' },
        { name: 'Marketplace', path: '/marketplace' }
      ]
    },
    {
      name: 'Talent',
      path: '/talent',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Browse Talents', path: '/talents' },
        { name: 'Talent Directory', path: '/talent-directory' },
        { name: 'Hire Now', path: '/talent' }
      ]
    }
  ];

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-xl border-b border-white/20 shadow-2xl' 
        : 'bg-slate-900/80 backdrop-blur-lg border-b border-white/10'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Enhanced Logo */}
          <Link to="/" className="flex items-center group" onClick={closeMenu}>
            <motion.div 
              className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue rounded-xl flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300 shadow-lg"
              whileHover={{ rotate: 5 }}
            >
              <span className="text-white font-bold text-xl lg:text-2xl">Z</span>
            </motion.div>
            <motion.span 
              className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-zion-cyan via-white to-zion-purple bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              Zion Tech Group
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <nav 
            className="hidden md:flex items-center space-x-8"
            role="navigation"
            aria-label="Main navigation"
          >
            {[
              { path: '/', label: 'Home' },
              { path: '/services', label: 'Services' },
              { path: '/about', label: 'About' },
              { path: '/news', label: 'News' },
              { path: '/careers', label: 'Careers' },
              { path: '/blog', label: 'Blog' },
              { path: '/contact', label: 'Contact' }
            ].map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`relative px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                  isActive(path)
                    ? 'text-blue-400'
                    : 'text-gray-300 hover:text-white'
                }`}
                aria-current={isActive(path) ? 'page' : undefined}
              >
                {label}
                {isActive(path) && (
                  <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-blue-400 to-cyan-400" />
                )}
              </div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/pricing"
              className="text-gray-300 hover:text-white transition-colors duration-300 px-4 py-2"
            >
              Pricing
            </Link>
            <Link
              to="/request-quote"
              className="bg-gradient-to-r from-zion-purple to-zion-cyan text-white px-6 py-3 rounded-xl font-medium hover:from-zion-purple-dark hover:to-zion-cyan-dark transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-zion-purple/25"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200"
            aria-label="Toggle mobile menu"
            aria-expanded={isMenuOpen}
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-6 w-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-6 w-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'max-h-screen opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800/95 rounded-lg mt-2 border border-white/10">
            {[
              { path: '/', label: 'Home' },
              { path: '/services', label: 'Services' },
              { path: '/about', label: 'About' },
              { path: '/news', label: 'News' },
              { path: '/careers', label: 'Careers' },
              { path: '/blog', label: 'Blog' },
              { path: '/contact', label: 'Contact' }
            ].map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`block px-3 py-2 text-base font-medium rounded-md transition-colors duration-200 ${
                  isActive(path)
                    ? 'text-blue-400 bg-blue-900/20'
                    : 'text-gray-300 hover:text-white hover:bg-gray-700'
                }`}
                aria-current={isActive(path) ? 'page' : undefined}
              >
                {label}
              </Link>
            ))}
            
            {/* Mobile CTA */}
            <div className="pt-4 border-t border-gray-700 space-y-2">
              <Link
                to="/pricing"
                className="block w-full text-center px-6 py-2 text-gray-300 hover:text-white transition-colors duration-300"
                onClick={closeMenu}
              >
                Pricing
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              
              <Link
                to="/blog"
                className="block text-white hover:text-zion-cyan transition-colors duration-200 font-medium py-2"
                onClick={closeMenu}
              >
                Blog
                {isActive('/blog') && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
                )}
              </Link>
              
              <Link
                to="/contact"
                className="block text-white hover:text-zion-cyan transition-colors duration-200 font-medium py-2"
                onClick={closeMenu}
              >
                Contact
                {isActive('/contact') && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
                )}
              </Link>
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
                aria-label="Get started with our services"
              >
                Get Started
              </Link>
              
              <div className="pt-4 border-t border-white/10">
                <Link
                  to="/request-quote"
                  className="block w-full text-center bg-gradient-to-r from-zion-purple to-zion-cyan text-white px-6 py-3 rounded-xl font-medium hover:from-zion-purple-dark hover:to-zion-cyan-dark transition-all duration-300"
                  onClick={closeMenu}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
