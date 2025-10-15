import React, { useState, useEffect, memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Mail, MapPin } from 'lucide-react';

const Header: React.FC = memo(() => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Home', path: '/' },
    { 
      name: 'Services', 
      path: '#',
      dropdown: [
        { name: 'Micro SAAS Solutions', path: '/micro-saas', description: 'AI-powered business tools' },
        { name: 'AI Services', path: '/ai-services', description: 'Advanced AI solutions' },
        { name: 'IT Services', path: '/it-services', description: 'Comprehensive IT solutions' },
        { name: '5G Solutions', path: '/5g-solutions', description: 'Next-gen connectivity' },
        { name: 'Blockchain Services', path: '/blockchain-services', description: 'Decentralized solutions' },
        { name: 'IoT Solutions', path: '/iot-solutions', description: 'Smart device integration' }
      ]
    },
    { 
      name: 'Solutions', 
      path: '#',
      dropdown: [
        { name: 'Enterprise AI', path: '/enterprise-ai', description: 'Large-scale AI implementation' },
        { name: 'Cloud Migration', path: '/cloud-migration', description: 'Seamless cloud transition' },
        { name: 'Cybersecurity', path: '/cybersecurity', description: 'Advanced security solutions' },
        { name: 'Data Analytics', path: '/data-analytics', description: 'Business intelligence' },
        { name: 'Mobile Apps', path: '/mobile-apps', description: 'Native & cross-platform' },
        { name: 'Web Development', path: '/web-development', description: 'Modern web solutions' }
      ]
    },
    { name: 'About', path: '/about' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Pricing', path: '/pricing' },
    { 
      name: 'Resources', 
      path: '#',
      dropdown: [
        { name: 'Blog & News', path: '/news', description: 'Latest insights' },
        { name: 'Case Studies', path: '/case-studies', description: 'Success stories' },
        { name: 'Documentation', path: '/docs', description: 'Technical guides' },
        { name: 'API Reference', path: '/api-docs', description: 'Developer resources' },
        { name: 'Support Center', path: '/support', description: 'Help & support' },
        { name: 'Status Page', path: '/status', description: 'System status' }
      ]
    },
    { 
      name: 'Company', 
      path: '#',
      dropdown: [
        { name: 'About Us', path: '/about', description: 'Our story & mission' },
        { name: 'Our Team', path: '/about#team', description: 'Meet the experts' },
        { name: 'Careers', path: '/careers', description: 'Join our team' },
        { name: 'Partners', path: '/partners', description: 'Strategic partnerships' },
        { name: 'Contact', path: '/contact', description: 'Get in touch' }
      ]
    }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Skip to main content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-200"
      >
        Skip to main content
      </a>
      
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
      {/* Top Contact Bar */}
      <div className="bg-slate-800 text-white py-2 px-4 hidden lg:block">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
          <div className="text-sm">
            <span className="text-blue-400">Free Consultation Available</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="group flex items-center space-x-2 text-white font-bold text-xl hover:text-cyan-400 transition-colors duration-300">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-cyan-500/30">
                <span className="text-white font-bold group-hover:text-cyan-100 transition-colors">Z</span>
              </div>
              <span className="group-hover:text-cyan-300 transition-colors">Zion Tech Group</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative group">
                  {item.dropdown ? (
                    <div
                      className="flex items-center space-x-1 text-white hover:text-blue-400 cursor-pointer transition-colors"
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className={`text-white hover:text-blue-400 transition-colors ${
                        isActive(item.path) ? 'text-blue-400 font-semibold' : ''
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                  
                  {/* Dropdown Menu */}
                  {item.dropdown && activeDropdown === item.name && (
                    <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-md rounded-xl shadow-2xl border border-cyan-500/20 py-4 z-50">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          to={dropdownItem.path}
                          className="group block px-4 py-3 text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-400 transition-all duration-200 border-l-2 border-transparent hover:border-cyan-400"
                          onClick={() => setActiveDropdown(null)}
                        >
                          <div className="font-semibold group-hover:text-cyan-300 transition-colors">
                            {dropdownItem.name}
                          </div>
                          {dropdownItem.description && (
                            <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                              {dropdownItem.description}
                            </div>
                          )}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link
                to="/contact"
                className="group relative bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">Get Started</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-white p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div 
            id="mobile-menu"
            className="lg:hidden bg-slate-900/95 backdrop-blur-md border-t border-white/20"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <div className="container mx-auto px-4 py-4">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div className="py-2">
                      <div className="text-white font-semibold mb-2">{item.name}</div>
                      <div className="ml-4 space-y-2">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.path}
                            className="block text-gray-300 hover:text-blue-400 py-1 transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className={`block py-2 text-white hover:text-blue-400 transition-colors ${
                        isActive(item.path) ? 'text-blue-400 font-semibold' : ''
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-white/20 mt-4">
                <Link
                  to="/contact"
                  className="block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold text-center transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
    </>
  );
});

Header.displayName = 'Header';

export default Header;