import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
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

interface NavigationProps {
  onSidebarToggle?: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onSidebarToggle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: 'Home', href: '/', icon: HomeIcon },
    { name: 'About', href: '/about', icon: InformationCircleIcon },
    { 
      name: 'Services', 
      href: '#', 
      icon: BriefcaseIcon,
      children: [
        { name: 'AI Solutions', href: '/ai-solutions', icon: CpuChipIcon },
        { name: '5G Solutions', href: '/5g-solutions', icon: SignalIcon },
        { name: 'Cloud Services', href: '/cloud-services', icon: CloudIcon },
        { name: 'Cybersecurity', href: '/cybersecurity', icon: ShieldCheckIcon },
        { name: 'Consulting', href: '/consulting', icon: UserGroupIcon }
      ]
    },
    { 
      name: 'Solutions', 
      href: '#', 
      icon: CogIcon,
      children: [
        { name: 'AI Content Generation', href: '/ai-content-generation-pro', icon: DocumentTextIcon },
        { name: 'AI Cybersecurity Platform', href: '/ai-cybersecurity-platform', icon: ShieldCheckIcon },
        { name: 'AI Database Solutions', href: '/ai-database-solutions', icon: CpuChipIcon },
        { name: 'AI E-commerce Platform', href: '/ai-ecommerce-platform', icon: CurrencyDollarIcon },
        { name: 'AI Education Solutions', href: '/ai-education-solutions-pro', icon: AcademicCapIcon },
        { name: 'AI Financial Platform', href: '/ai-financial-platform', icon: CurrencyDollarIcon },
        { name: 'AI Healthcare Platform', href: '/ai-healthcare-platform', icon: ShieldCheckIcon },
        { name: 'AI Healthcare Solutions', href: '/ai-healthcare-solutions-pro', icon: ShieldCheckIcon },
        { name: 'AI IoT Management', href: '/ai-iot-management-pro', icon: GlobeAltIcon }
      ]
    },
    { name: 'Portfolio', href: '/portfolio', icon: DocumentTextIcon },
    { name: 'Contact', href: '/contact', icon: PhoneIcon }
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(href);
  };

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
    onSidebarToggle?.();
  };

  const closeMobileMenu = () => {
    setIsOpen(false);
    onSidebarToggle?.();
  };

  return (
    <nav className="bg-white/10 backdrop-blur-lg border-b border-white/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="text-white font-bold text-xl">Zion Tech Group</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative group">
                  <button
                    className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                      isActive(item.href) || (item.children && item.children.some(child => isActive(child.href)))
                        ? 'text-white bg-white/20'
                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                    onClick={() => {
                      if (item.children) {
                        if (item.name === 'Services') {
                          setIsServicesOpen(!isServicesOpen);
                          setIsSolutionsOpen(false);
                        } else if (item.name === 'Solutions') {
                          setIsSolutionsOpen(!isSolutionsOpen);
                          setIsServicesOpen(false);
                        }
                      }
                    }}
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.name}</span>
                    {item.children && (
                      <ChevronDownIcon className="w-4 h-4" />
                    )}
                  </button>

                  {/* Dropdown Menu */}
                  {item.children && (
                    <div className={`absolute left-0 mt-2 w-64 bg-white/95 backdrop-blur-lg rounded-lg shadow-lg border border-white/20 transform transition-all duration-200 ${
                      (item.name === 'Services' && isServicesOpen) || (item.name === 'Solutions' && isSolutionsOpen)
                        ? 'opacity-100 visible translate-y-0'
                        : 'opacity-0 invisible -translate-y-2'
                    }`}>
                      <div className="py-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            to={child.href}
                            className={`flex items-center space-x-3 px-4 py-3 text-sm transition-colors duration-200 ${
                              isActive(child.href)
                                ? 'text-purple-600 bg-purple-50'
                                : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50'
                            }`}
                            onClick={closeMobileMenu}
                          >
                            <child.icon className="w-4 h-4" />
                            <span>{child.name}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/10 backdrop-blur-lg border-t border-white/20">
          {navigationItems.map((item) => (
            <div key={item.name}>
              <button
                className={`flex items-center space-x-3 w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  isActive(item.href) || (item.children && item.children.some(child => isActive(child.href)))
                    ? 'text-white bg-white/20'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
                onClick={() => {
                  if (item.children) {
                    if (item.name === 'Services') {
                      setIsServicesOpen(!isServicesOpen);
                      setIsSolutionsOpen(false);
                    } else if (item.name === 'Solutions') {
                      setIsSolutionsOpen(!isSolutionsOpen);
                      setIsServicesOpen(false);
                    }
                  } else {
                    closeMobileMenu();
                  }
                }}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.name}</span>
                {item.children && (
                  <ChevronDownIcon className="w-4 h-4 ml-auto" />
                )}
              </button>

              {/* Mobile Dropdown */}
              {item.children && (
                <div className={`ml-6 space-y-1 transition-all duration-300 ${
                  (item.name === 'Services' && isServicesOpen) || (item.name === 'Solutions' && isSolutionsOpen)
                    ? 'max-h-96 opacity-100'
                    : 'max-h-0 opacity-0 overflow-hidden'
                }`}>
                  {item.children.map((child) => (
                    <Link
                      key={child.name}
                      to={child.href}
                      className={`flex items-center space-x-3 px-3 py-2 rounded-md text-sm transition-colors duration-200 ${
                        isActive(child.href)
                          ? 'text-white bg-white/20'
                          : 'text-gray-300 hover:text-white hover:bg-white/10'
                      }`}
                      onClick={closeMobileMenu}
                    >
                      <child.icon className="w-4 h-4" />
                      <span>{child.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
