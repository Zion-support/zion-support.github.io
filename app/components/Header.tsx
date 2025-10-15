import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Mail, MapPin } from 'lucide-react';

const Header: React.FC = () => {
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
      name: 'Micro SAAS', 
      path: '/micro-saas',
      dropdown: [
        { name: 'AI Content Writer Pro', path: '/ai-content-writer-pro' },
        { name: 'AI Project Manager', path: '/ai-project-manager' },
        { name: 'AI Email Marketing', path: '/ai-email-marketing' },
        { name: 'Business Intelligence', path: '/business-intelligence' },
        { name: 'AI Customer Support', path: '/ai-customer-support' },
        { name: 'AI Social Media Manager', path: '/ai-social-media-manager' },
        { name: 'AI Accounting Assistant', path: '/ai-accounting-assistant' },
        { name: 'View All Micro SAAS', path: '/micro-saas' }
      ]
    },
    { 
      name: 'AI Services', 
      path: '/ai-services',
      dropdown: [
        { name: 'Machine Learning Solutions', path: '/machine-learning-solutions' },
        { name: 'Computer Vision Pro', path: '/computer-vision-pro' },
        { name: 'Natural Language Processing', path: '/natural-language-processing' },
        { name: 'AI Process Automation', path: '/ai-process-automation' },
        { name: 'AI Business Intelligence', path: '/ai-business-intelligence' },
        { name: 'AI Cybersecurity Suite', path: '/ai-cybersecurity-suite' },
        { name: 'AI Customer Experience', path: '/ai-customer-experience' },
        { name: 'View All AI Services', path: '/ai-services' }
      ]
    },
    { 
      name: 'IT Services', 
      path: '/it-services',
      dropdown: [
        { name: 'Cloud Migration & Management', path: '/cloud-migration-management' },
        { name: 'Enterprise Cybersecurity', path: '/enterprise-cybersecurity' },
        { name: 'DevOps & CI/CD', path: '/devops-cicd' },
        { name: 'Full-Stack Development', path: '/full-stack-development' },
        { name: 'Mobile App Development', path: '/mobile-app-development' },
        { name: 'Database Solutions', path: '/database-solutions' },
        { name: 'IT Infrastructure', path: '/it-infrastructure' },
        { name: 'View All IT Services', path: '/it-services' }
      ]
    },
    { name: 'About', path: '/about' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'News', path: '/news' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
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
            <Link to="/" className="flex items-center space-x-2 text-white font-bold text-xl">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">Z</span>
              </div>
              <span>Zion Tech Group</span>
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
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          to={dropdownItem.path}
                          className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {dropdownItem.name}
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
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-white p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-slate-900/95 backdrop-blur-md border-t border-white/20 max-h-screen overflow-y-auto">
            <div className="container mx-auto px-4 py-4">
              {navigationItems.map((item) => (
                <div key={item.name} className="mb-4">
                  {item.dropdown ? (
                    <div className="py-2">
                      <div className="text-white font-semibold mb-3 text-lg">{item.name}</div>
                      <div className="ml-4 space-y-2">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.path}
                            className="block text-gray-300 hover:text-blue-400 py-2 px-3 rounded-lg hover:bg-slate-700/50 transition-all duration-200"
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
                      className={`block py-3 px-3 text-white hover:text-blue-400 transition-colors rounded-lg hover:bg-slate-700/50 ${
                        isActive(item.path) ? 'text-blue-400 font-semibold bg-slate-700/30' : ''
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-white/20 mt-6">
                <div className="space-y-3">
                  <Link
                    to="/contact"
                    className="block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold text-center transition-all duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Get Started
                  </Link>
                  <div className="text-center text-sm text-gray-400">
                    <div className="mb-1">Call: +1 302 464 0950</div>
                    <div>Email: kleber@ziontechgroup.com</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;