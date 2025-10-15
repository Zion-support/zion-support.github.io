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

  const navigation = [
    { name: 'Home', href: '/', icon: HomeIcon },
    { name: 'About', href: '/about', icon: InformationCircleIcon },
    { 
      name: 'Services', 
      href: '/services', 
      icon: BriefcaseIcon,
      submenu: [
        { name: 'AI Solutions', href: '/ai-solutions' },
        { name: 'IT Solutions', href: '/it-solutions' },
        { name: 'Micro SaaS Solutions', href: '/micro-saas-solutions' },
        { name: 'Cybersecurity', href: '/cybersecurity' },
        { name: 'Cloud Infrastructure', href: '/cloud-solutions' },
        { name: 'Digital Transformation', href: '/digital-transformation' },
        { name: '5G Solutions', href: '/5g-solutions' }
      ]
    },
    { 
      name: 'Solutions', 
      href: '/solutions', 
      icon: CogIcon,
      submenu: [
        { name: 'AI Solutions', href: '/ai-solutions' },
        { name: 'IT Solutions', href: '/it-solutions' },
        { name: 'Micro SaaS Solutions', href: '/micro-saas-solutions' },
        { name: 'Cybersecurity', href: '/cybersecurity' },
        { name: 'Cloud Infrastructure', href: '/cloud-solutions' },
        { name: 'Digital Transformation', href: '/digital-transformation' },
        { name: '5G Solutions', href: '/5g-solutions' }
      ]
    },
    { name: 'Blog', href: '/blog', icon: DocumentTextIcon },
    { name: 'Tutorials', href: '/tutorials', icon: AcademicCapIcon },
    { name: 'Demo', href: '/demo', icon: PlayIcon },
    { name: 'Support', href: '/support', icon: QuestionMarkCircleIcon },
    { name: 'Contact', href: '/contact', icon: PhoneIcon }
  ];

  const isActive = (href: string) => {
    return location.pathname === href;
  };

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
    setIsSolutionsOpen(false);
  };

  const toggleSolutions = () => {
    setIsSolutionsOpen(!isSolutionsOpen);
    setIsServicesOpen(false);
  };

  return (
    <nav className="bg-slate-900 border-b border-slate-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <span className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                Zion Tech Group
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.submenu ? (
                  <div className="relative">
                    <button
                      onClick={item.name === 'Services' ? toggleServices : toggleSolutions}
                      className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        isActive(item.href) || (item.name === 'Services' && isServicesOpen) || (item.name === 'Solutions' && isSolutionsOpen)
                          ? 'text-purple-300 bg-purple-900/20'
                          : 'text-gray-300 hover:text-white hover:bg-slate-800'
                      }`}
                    >
                      <item.icon className="w-4 h-4" />
                      <span>{item.name}</span>
                      <ChevronDownIcon className={`w-4 h-4 transition-transform ${(item.name === 'Services' && isServicesOpen) || (item.name === 'Solutions' && isSolutionsOpen) ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {/* Dropdown Menu */}
                    {(item.name === 'Services' && isServicesOpen) || (item.name === 'Solutions' && isSolutionsOpen) ? (
                      <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800 rounded-lg shadow-xl border border-slate-700 py-2 z-50">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className="flex items-center space-x-3 px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-slate-700 transition-colors"
                            onClick={() => {
                              setIsServicesOpen(false);
                              setIsSolutionsOpen(false);
                            }}
                          >
                            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                            <span>{subItem.name}</span>
                          </Link>
                        ))}
                      </div>
                    ) : null}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive(item.href)
                        ? 'text-purple-300 bg-purple-900/20'
                        : 'text-gray-300 hover:text-white hover:bg-slate-800'
                    }`}
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2 rounded-md hover:bg-slate-800 transition-colors"
            >
              {isOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3Icon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-800 rounded-lg mt-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.submenu ? (
                    <div>
                      <button
                        onClick={item.name === 'Services' ? toggleServices : toggleSolutions}
                        className="flex items-center justify-between w-full px-3 py-2 text-left text-sm font-medium text-gray-300 hover:text-white hover:bg-slate-700 rounded-md transition-colors"
                      >
                        <div className="flex items-center space-x-2">
                          <item.icon className="w-4 h-4" />
                          <span>{item.name}</span>
                        </div>
                        <ChevronDownIcon className={`w-4 h-4 transition-transform ${(item.name === 'Services' && isServicesOpen) || (item.name === 'Solutions' && isSolutionsOpen) ? 'rotate-180' : ''}`} />
                      </button>
                      
                      {(item.name === 'Services' && isServicesOpen) || (item.name === 'Solutions' && isSolutionsOpen) ? (
                        <div className="ml-4 space-y-1">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className="flex items-center space-x-3 px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-slate-700 rounded-md transition-colors"
                              onClick={() => {
                                setIsOpen(false);
                                setIsServicesOpen(false);
                                setIsSolutionsOpen(false);
                              }}
                            >
                              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                              <span>{subItem.name}</span>
                            </Link>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-slate-700 rounded-md transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      <item.icon className="w-4 h-4" />
                      <span>{item.name}</span>
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
