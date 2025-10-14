import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { 
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
  UserGroupIcon,
  Bars3Icon,
  XMarkIcon
} from '@heroicons/react/24/outline';

interface NavigationProps {
  onSidebarToggle?: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onSidebarToggle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const location = useLocation();

  const isActive = (href: string) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(href);
  };

  const toggleExpanded = (item: string) => {
    setExpandedItems(prev => 
      prev.includes(item) 
        ? prev.filter(i => i !== item)
        : [...prev, item]
    );
  };

  const navigationItems = [
    {
      name: 'Home',
      href: '/',
      icon: HomeIcon
    },
    {
      name: 'Services',
      href: '/services',
      icon: BriefcaseIcon,
      children: [
        { name: 'AI Solutions', href: '/ai-solutions', icon: CpuChipIcon },
        { name: 'IT Services', href: '/it-services', icon: CogIcon },
        { name: 'Cloud Infrastructure', href: '/cloud-infrastructure', icon: CloudIcon },
        { name: 'Digital Transformation', href: '/digital-transformation', icon: SignalIcon }
      ]
    },
    {
      name: 'About',
      href: '/about',
      icon: InformationCircleIcon
    },
    {
      name: 'Resources',
      href: '/resources',
      icon: DocumentTextIcon,
      children: [
        { name: 'Blog', href: '/blog', icon: DocumentTextIcon },
        { name: 'Case Studies', href: '/case-studies', icon: AcademicCapIcon },
        { name: 'Webinars', href: '/webinars', icon: PlayIcon },
        { name: 'Documentation', href: '/docs', icon: DocumentTextIcon }
      ]
    },
    {
      name: 'Support',
      href: '/support',
      icon: QuestionMarkCircleIcon,
      children: [
        { name: 'Help Center', href: '/help', icon: QuestionMarkCircleIcon },
        { name: 'Contact Us', href: '/contact', icon: PhoneIcon },
        { name: 'Security', href: '/security', icon: ShieldCheckIcon },
        { name: 'Pricing', href: '/pricing', icon: CurrencyDollarIcon }
      ]
    }
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <CpuChipIcon className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">Zion Tech</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative">
                {item.children ? (
                  <div className="relative group">
                    <button
                      onClick={() => toggleExpanded(item.name)}
                      className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        isActive(item.href) || expandedItems.includes(item.name)
                          ? 'text-blue-600 bg-blue-50'
                          : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                      }`}
                    >
                      <item.icon className="h-4 w-4" />
                      <span>{item.name}</span>
                      <ChevronDownIcon className="h-3 w-3" />
                    </button>

                    {/* Dropdown Menu */}
                    {expandedItems.includes(item.name) && (
                      <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-md shadow-lg border border-gray-200 z-50">
                        <div className="py-1">
                          {item.children.map((child) => (
                            <a
                              key={child.name}
                              href={child.href}
                              className={`flex items-center space-x-2 px-4 py-2 text-sm transition-colors ${
                                isActive(child.href)
                                  ? 'text-blue-600 bg-blue-50'
                                  : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                              }`}
                            >
                              <child.icon className="h-4 w-4" />
                              <span>{child.name}</span>
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive(item.href)
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                    }`}
                  >
                    <item.icon className="h-4 w-4" />
                    <span>{item.name}</span>
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50 rounded-lg mt-2">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  {item.children ? (
                    <div>
                      <button
                        onClick={() => toggleExpanded(item.name)}
                        className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-white rounded-md"
                      >
                        <div className="flex items-center space-x-2">
                          <item.icon className="h-5 w-5" />
                          <span>{item.name}</span>
                        </div>
                        <ChevronDownIcon className="h-4 w-4" />
                      </button>
                      {expandedItems.includes(item.name) && (
                        <div className="pl-6 space-y-1">
                          {item.children.map((child) => (
                            <a
                              key={child.name}
                              href={child.href}
                              className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-white rounded-md"
                            >
                              <child.icon className="h-4 w-4" />
                              <span>{child.name}</span>
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      className="flex items-center space-x-2 px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-white rounded-md"
                    >
                      <item.icon className="h-5 w-5" />
                      <span>{item.name}</span>
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;