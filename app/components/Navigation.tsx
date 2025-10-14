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
  Mail as MailIcon, 
  Smartphone, 
  Monitor,
  Phone,
  MapPin,
  Database,
  ChevronDown,
  ChevronRight,
  Home,
  Info,
  Briefcase,
  BookOpen,
  MessageSquare,
  Settings,
  HelpCircle,
  ExternalLink
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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navigationItems = [
    {
      name: 'Home',
      href: '/',
      icon: <Home className="w-4 h-4" />
    },
    {
      name: 'About',
      href: '/about',
      icon: <Info className="w-4 h-4" />
    },
    {
      name: 'Services',
      href: '/services',
      icon: <Briefcase className="w-4 h-4" />,
      dropdown: [
        {
          name: 'AI Services',
          href: '/ai-services',
          icon: <Brain className="w-4 h-4" />,
          description: 'Artificial Intelligence Solutions'
        },
        {
          name: 'IT Services',
          href: '/services',
          icon: <Code className="w-4 h-4" />,
          description: 'Information Technology Solutions'
        },
        {
          name: '5G Solutions',
          href: '/5g-solutions',
          icon: <Zap className="w-4 h-4" />,
          description: 'Next-Generation Connectivity'
        },
        {
          name: 'Micro SAAS',
          href: '/micro-saas',
          icon: <Cloud className="w-4 h-4" />,
          description: 'Software as a Service Solutions'
        }
      ]
    },
    {
      name: 'Blog',
      href: '/blog',
      icon: <BookOpen className="w-4 h-4" />
    },
    {
      name: 'Contact',
      href: '/contact',
      icon: <MessageSquare className="w-4 h-4" />
    }
  ];

  const isActive = (href: string) => {
    return location.pathname === href;
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-md border-b border-white/10' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
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
                      className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors duration-200 ${
                        isActive(item.href) || activeDropdown === item.name
                          ? 'text-purple-400 bg-purple-500/20'
                          : 'text-gray-300 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      {item.icon}
                      <span>{item.name}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`} />
                    </button>
                    
                    {activeDropdown === item.name && (
                      <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800/95 backdrop-blur-md rounded-lg shadow-xl border border-white/10 py-2 z-50">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.href}
                            className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-white/10 transition-colors duration-200"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <div className="w-8 h-8 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center">
                              {dropdownItem.icon}
                            </div>
                            <div>
                              <div className="font-medium">{dropdownItem.name}</div>
                              <div className="text-sm text-gray-400">{dropdownItem.description}</div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors duration-200 ${
                      isActive(item.href)
                        ? 'text-purple-400 bg-purple-500/20'
                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/contact"
              className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-105"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors duration-200"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-slate-900/95 backdrop-blur-md border-t border-white/10">
          <div className="px-4 py-6 space-y-4">
            {navigationItems.map((item) => (
              <div key={item.name}>
                {item.dropdown ? (
                  <div>
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="flex items-center justify-between w-full px-3 py-2 text-left text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors duration-200"
                    >
                      <div className="flex items-center space-x-2">
                        {item.icon}
                        <span>{item.name}</span>
                      </div>
                      <ChevronRight className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === item.name ? 'rotate-90' : ''
                      }`} />
                    </button>
                    
                    {activeDropdown === item.name && (
                      <div className="ml-6 mt-2 space-y-2">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.href}
                            className="flex items-center space-x-2 px-3 py-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors duration-200"
                            onClick={closeMobileMenu}
                          >
                            {dropdownItem.icon}
                            <span>{dropdownItem.name}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className="flex items-center space-x-2 px-3 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors duration-200"
                    onClick={closeMobileMenu}
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </Link>
                )}
              </div>
            ))}
            
            <div className="pt-4 border-t border-white/10">
              <Link
                to="/contact"
                className="block w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium text-center hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
                onClick={closeMobileMenu}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;