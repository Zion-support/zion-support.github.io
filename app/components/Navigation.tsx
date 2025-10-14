<<<<<<< HEAD
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
=======
'use client';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {}
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div>Page content</div>
  );
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
        <div className="flex justify-between items-center py-4">
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
          <Link to="/" className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
            Zion Tech Group
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
      </div>
      </div>
      </div>
      </div>
      </div>
            <Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors">Home</Link>
            <Link to="/about" className="text-gray-600 hover:text-blue-600 transition-colors">About</Link>
            <Link to="/services" className="text-gray-600 hover:text-blue-600 transition-colors">Services</Link>
            <Link to="/blog" className="text-gray-600 hover:text-blue-600 transition-colors">Blog</Link>
            <Link to="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-600 hover:text-gray-900 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
import { Link, useLocation } from 'react-router-dom';
import {}
  Bars3Icon, 
  XMarkIcon,
  HomeIcon,
  InformationCircleIcon,
  BriefcaseIcon,
  PhoneIcon,
  DocumentTextIcon,
  AcademicCapIcon,
  PlayIcon,
  QuestionMarkCircleIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon,
  CogIcon,
  ChevronDownIcon,
  GlobeAltIcon,
  CloudIcon,
  CpuChipIcon,
  SignalIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';
interface NavigationProps {}
  onSidebarToggle?: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onSidebarToggle }) => {}
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/', icon: HomeIcon },
    { name: 'About', href: '/about', icon: InformationCircleIcon },
    {}
>>>>>>> cursor/fix-errors-and-merge-to-main-ca79
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
<<<<<<< HEAD
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
=======
    {}
      name: 'Solutions',
      href: '/solutions',
      icon: CogIcon,
      submenu: [
        { name: 'AI Solutions', href: '/ai-solutions', icon: CpuChipIcon },
        { name: 'Cybersecurity', href: '/cybersecurity', icon: ShieldCheckIcon },
        { name: 'Cloud Infrastructure', href: '/cloud-solutions', icon: CloudIcon },
        { name: 'Digital Transformation', href: '/digital-transformation', icon: CogIcon },
        { name: 'Micro SaaS', href: '/micro-saas', icon: GlobeAltIcon },
        { name: '5G Solutions', href: '/5g-solutions', icon: SignalIcon }
      ]
    },
    { name: 'Blog', href: '/blog', icon: DocumentTextIcon },
    { name: 'Tutorials', href: '/tutorials', icon: AcademicCapIcon },
    { name: 'Demo', href: '/demo', icon: PlayIcon },
    { name: 'Support', href: '/support', icon: QuestionMarkCircleIcon },
    { name: 'Pricing', href: '/pricing', icon: CurrencyDollarIcon },;
    { name: 'Contact', href: '/contact', icon: PhoneIcon };
  ];

  const isActive = (path: string) => {;
    return location.pathname === path;
  };

  return (
    <div>Page content</div>
  );
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
        <div className="flex justify-between h-16">
      </div>
      </div>
      </div>
      </div>
      </div>
          <div className="flex">
      </div>
      </div>
      </div>
      </div>
      </div>
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
      </div>
      </div>
      </div>
      </div>
      </div>
              <Link to="/" className="text-2xl font-bold text-blue-600">
                Zion Tech Group
              </Link>
>>>>>>> cursor/fix-errors-and-merge-to-main-ca79
            </div>
            <span className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
              Zion Tech Group
            </span>
          </Link>

<<<<<<< HEAD
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
=======
            {/* Desktop Navigation */}
            <div className="hidden md: ml-6 md:flex m,d:space-x-8">
      </div>
      </div>
      </div>
      </div>
      </div>
              {navigation.map((item) => ()
                <div key={item.name} className="relative">
      </div>
      </div>
      </div>
      </div>
      </div>
                  {item.submenu ? ()
                    <div className="relative group">
      </div>
      </div>
      </div>
      </div>
      </div>
                      <button
                        className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium flex items-center"
                        onMouseEnter={() => setIsServicesOpen(true)}
                        onMouseLeave={() => setIsServicesOpen(false)}
                      >
                        {item.name}
                        <ChevronDownIcon className="ml-1 h-4 w-4" />
                      </button>
                      {isServicesOpen && ()
                        <div 
                          className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50"
                          onMouseEnter={() =>
      </div>
      </div>
      </div>
      </div>
      </div> setIsServicesOpen(true)}
                          onMouseLeave={() => setIsServicesOpen(false)}
                        >
                          {item.submenu.map((subItem) => ()
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : ()
                    <Link
                      to={item.href}
                      className={`text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium ${}
                        isActive(item.href) ? 'text-blue-600' : }`}
>>>>>>> cursor/fix-errors-and-merge-to-main-ca79
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
      </div>
      </div>
      </div>
      </div>
      </div>
            <Link
              to="/contact"
              className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-105"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
<<<<<<< HEAD
          <div className="lg:hidden">
=======
          <div className="md:hidden flex items-center">
      </div>
      </div>
      </div>
      </div>
      </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-ca79
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors duration-200"
            >
<<<<<<< HEAD
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
=======
              {isOpen ? ()
                <XMarkIcon className="h-6 w-6" />
              ) : ()
                <Bars3Icon className="h-6 w-6" />
              )}
>>>>>>> cursor/fix-errors-and-merge-to-main-ca79
            </button>
          </div>
        </div>
      </div>

<<<<<<< HEAD
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
=======
        {/* Mobile Navigation */}
        {isOpen && ()
          <div className="md:hidden py-4 border-t border-gray-200">
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
            <div className="flex flex-col space-y-4">
      </div>
      </div>
      </div>
      </div>
      </div>
              <Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors" onClick={toggleMenu}>Home</Link>
              <Link to="/about" className="text-gray-600 hover:text-blue-600 transition-colors" onClick={toggleMenu}>About</Link>
              <Link to="/services" className="text-gray-600 hover:text-blue-600 transition-colors" onClick={toggleMenu}>Services</Link>
              <Link to="/blog" className="text-gray-600 hover:text-blue-600 transition-colors" onClick={toggleMenu}>Blog</Link>
              <Link to="/contact" className="text-gray-600 hover:text-blue-600 transition-colors" onClick={toggleMenu}>Contact</Link>
          <div className="md:hidden">
      </div>
      </div>
      </div>
      </div>
      </div>
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
      </div>
      </div>
      </div>
      </div>
      </div>
              {navigation.map((item) => ()
                <div key="{item.name}">
      </div>
      </div>
      </div>
      </div>
      </div>
                  {item.submenu ? ()
                    <div>
      </div>
      </div>
      </div>
      </div>
      </div>
                      <button
                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                        className="w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                      >
                        {item.name}
                      </button>
                      {isServicesOpen && ()
                        <div className="pl-4 space-y-1">
      </div>
      </div>
      </div>
      </div>
      </div>
                          {item.submenu.map((subItem) => ()
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className={`block px-3 py-2 text-base font-medium ${}
                                isActive(subItem.href)
                                  ? 'text-blue-600 bg-blue-50'
                                  : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                              }`}
                              onClick={() => setIsOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : ()
                    <Link
                      to={item.href}
                      className={`block px-3 py-2 text-base font-medium ${}
                        isActive(item.href)
                          ? 'text-blue-600 bg-blue-50'
                          : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
>>>>>>> cursor/fix-errors-and-merge-to-main-ca79
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;