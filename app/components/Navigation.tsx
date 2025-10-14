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
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/', icon: HomeIcon },
    { name: 'About', href: '/about', icon: InformationCircleIcon },
    { 
      name: 'Services', 
      href: '/services', 
      icon: BriefcaseIcon,
      submenu: [
        { name: 'AI Services', href: '/ai-services', icon: CpuChipIcon },
        { name: 'IT Services', href: '/it-services', icon: CogIcon },
        { name: 'Cloud Infrastructure', href: '/cloud-infrastructure', icon: CloudIcon },
        { name: 'Cybersecurity', href: '/cybersecurity', icon: ShieldCheckIcon },
        { name: 'Digital Transformation', href: '/digital-transformation', icon: CogIcon },
        { name: 'Micro SaaS Solutions', href: '/micro-saas-solutions', icon: GlobeAltIcon }
      ]
    },
    { 
      name: 'Solutions', 
      href: '/solutions', 
      icon: CogIcon,
      submenu: [
        { name: 'AI Solutions', href: '/ai-solutions', icon: CpuChipIcon },
        { name: 'IT Solutions', href: '/it-solutions', icon: CogIcon },
        { name: 'Cloud Solutions', href: '/cloud-solutions', icon: CloudIcon },
        { name: 'Cybersecurity Solutions', href: '/cybersecurity', icon: ShieldCheckIcon },
        { name: '5G Solutions', href: '/5g-solutions', icon: SignalIcon },
        { name: 'Industry Solutions', href: '/solutions', icon: GlobeAltIcon }
      ]
    },
    { 
      name: 'Resources', 
      href: '#', 
      icon: DocumentTextIcon,
      submenu: [
        { name: 'Blog', href: '/blog', icon: DocumentTextIcon },
        { name: 'Tutorials', href: '/tutorials', icon: AcademicCapIcon },
        { name: 'Case Studies', href: '/case-studies', icon: DocumentTextIcon },
        { name: 'Documentation', href: '/docs', icon: DocumentTextIcon },
        { name: 'Support', href: '/support', icon: QuestionMarkCircleIcon }
      ]
    },
    { name: 'Pricing', href: '/pricing', icon: CurrencyDollarIcon },
    { name: 'Demo', href: '/demo', icon: PlayIcon },
    { name: 'Contact', href: '/contact', icon: PhoneIcon }
  ];

  const isActive = (href: string) => {
    return location.pathname === href;
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-2xl font-bold text-blue-600">
                Zion Tech Group
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              {navigation.map((item) => (
                <div key={item.name} className="relative">
                  {item.submenu ? (
                    <div className="relative group">
                      <button
                        className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium flex items-center"
                        onMouseEnter={() => setActiveDropdown(item.name)}
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        {item.name}
                        <ChevronDownIcon className="ml-1 h-4 w-4" />
                      </button>
                      {activeDropdown === item.name && (
                        <div 
                          className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg py-1 z-50"
                          onMouseEnter={() => setActiveDropdown(item.name)}
                          onMouseLeave={() => setActiveDropdown(null)}
                        >
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                            >
                              <subItem.icon className="w-4 h-4 mr-2" />
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className={`${
                        isActive(item.href)
                          ? 'text-blue-600 border-b-2 border-blue-600'
                          : 'text-gray-700 hover:text-blue-600'
                      } px-3 py-2 text-sm font-medium`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
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
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.submenu ? (
                    <div>
                      <button
                        onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                        className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium w-full text-left flex items-center"
                      >
                        {item.name}
                        <ChevronDownIcon className="ml-1 h-4 w-4" />
                      </button>
                      {activeDropdown === item.name && (
                        <div className="pl-4 space-y-1">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className="text-gray-600 hover:text-blue-600 block px-3 py-2 text-sm flex items-center"
                              onClick={() => setIsOpen(false)}
                            >
                              <subItem.icon className="w-4 h-4 mr-2" />
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className={`${
                        isActive(item.href)
                          ? 'text-blue-600 bg-blue-50'
                          : 'text-gray-700 hover:text-blue-600'
                      } block px-3 py-2 text-base font-medium`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
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