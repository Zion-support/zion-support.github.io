import React, { useState, useCallback, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Globe, 
  Users, 
  Code, 
  Mail, 
  Brain, 
  Shield, 
  Zap, 
  ArrowRight, 
  Star, 
  Award, 
  BarChart3, 
  Cloud, 
  Sparkles, 
  Smartphone, 
  Monitor,
  Phone,
  MapPin,
  Database,
  ChevronDown,
  ChevronRight
} from 'lucide-react';

interface NavigationProps {
  onSidebarToggle: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onSidebarToggle }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  const toggleDropdown = useCallback((dropdown: string) => {
    setActiveDropdown(prev => prev === dropdown ? null : dropdown);
  }, []);

  const navigationItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { 
      name: 'Services', 
      href: '/services',
      dropdown: [
        { name: 'AI Services', href: '/ai-services', icon: Brain },
        { name: 'IT Services', href: '/services', icon: Code },
        { name: '5G Solutions', href: '/5g-solutions', icon: Zap },
        { name: 'Micro SAAS', href: '/micro-saas', icon: Cloud }
      ]
    },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }
  ];

  const aiServices = [
    { name: 'AI Analytics', href: '/ai-analytics', icon: BarChart3 },
    { name: 'AI Cybersecurity', href: '/ai-cybersecurity', icon: Shield },
    { name: 'AI Content Generation', href: '/ai-content-generation', icon: Code },
    { name: 'AI Customer Support', href: '/ai-customer-support', icon: Users },
    { name: 'AI Data Analytics', href: '/ai-data-analytics', icon: Database },
    { name: 'AI Marketing Automation', href: '/ai-marketing-automation', icon: Zap }
  ];

  const itServices = [
    { name: 'Cloud Migration', href: '/cloud-migration', icon: Cloud },
    { name: 'DevOps Services', href: '/devops', icon: Code },
    { name: 'IT Consulting', href: '/it-consulting', icon: Users },
    { name: 'Network Security', href: '/network-security', icon: Shield },
    { name: 'Software Development', href: '/custom-software', icon: Code },
    { name: 'Web Development', href: '/web-development', icon: Code }
  ];

  const contactInfo = [
    { icon: Mail, text: 'info@ziontechgroup.com', href: 'mailto:info@ziontechgroup.com' },
    { icon: Phone, text: '+1 (555) 012-3456', href: 'tel:+1-555-0123' },
    { icon: MapPin, text: 'San Francisco, CA', href: '#' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-md border-b border-gray-700' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-3">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Zion Tech Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div className="relative">
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="flex items-center text-gray-300 hover:text-white transition-colors"
                    >
                      {item.name}
                      {activeDropdown === item.name ? (
                        <ChevronDown className="w-4 h-4 ml-1" />
                      ) : (
                        <ChevronRight className="w-4 h-4 ml-1" />
                      )}
                    </button>
                    {activeDropdown === item.name && (
                      <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800 rounded-lg shadow-lg border border-gray-700 py-2">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.href}
                            className="flex items-center px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"
                          >
                            <dropdownItem.icon className="w-4 h-4 mr-3" />
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/contact"
              className="px-4 py-2 text-gray-300 hover:text-white transition-colors"
            >
              Contact
            </Link>
            <Link
              to="/demo"
              className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 flex items-center"
            >
              Get Started <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={onSidebarToggle}
            className="lg:hidden text-gray-300 hover:text-white transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-black bg-opacity-50" onClick={toggleMobileMenu} />
      )}

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed top-0 right-0 h-full w-80 bg-slate-900 transform transition-transform duration-300 ease-in-out z-50 ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex items-center justify-between p-6 border-b border-gray-700">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-3">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Zion Tech
            </span>
          </div>
          <button
            onClick={toggleMobileMenu}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Mobile Navigation */}
          <nav className="space-y-4">
            {navigationItems.map((item) => (
              <div key={item.name}>
                {item.dropdown ? (
                  <div>
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="flex items-center justify-between w-full text-left text-gray-300 hover:text-white transition-colors py-2"
                    >
                      {item.name}
                      {activeDropdown === item.name ? (
                        <ChevronDown className="w-4 h-4" />
                      ) : (
                        <ChevronRight className="w-4 h-4" />
                      )}
                    </button>
                    {activeDropdown === item.name && (
                      <div className="ml-4 mt-2 space-y-2">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.href}
                            onClick={toggleMobileMenu}
                            className="flex items-center text-gray-400 hover:text-white transition-colors py-1"
                          >
                            <dropdownItem.icon className="w-4 h-4 mr-3" />
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    onClick={toggleMobileMenu}
                    className="block text-gray-300 hover:text-white transition-colors py-2"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile CTA */}
          <div className="pt-6 border-t border-gray-700">
            <Link
              to="/demo"
              onClick={toggleMobileMenu}
              className="block w-full text-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;