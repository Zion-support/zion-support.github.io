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
  UserGroupIcon,
  SparklesIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';

interface NavigationProps {
  onSidebarToggle?: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onSidebarToggle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/', icon: HomeIcon },
    { name: 'About', href: '/about', icon: InformationCircleIcon },
    { 
      name: 'Services', 
      href: '/services', 
      icon: BriefcaseIcon,
      children: [
        { name: 'AI Solutions', href: '/ai-solutions', icon: CpuChipIcon },
        { name: 'IT Solutions', href: '/it-solutions', icon: CogIcon },
        { name: 'Cybersecurity', href: '/cybersecurity', icon: ShieldCheckIcon },
        { name: 'Cloud Solutions', href: '/cloud-solutions', icon: CloudIcon },
        { name: 'Digital Transformation', href: '/digital-transformation', icon: GlobeAltIcon },
        { name: 'Micro SaaS', href: '/micro-saas-solutions', icon: SignalIcon },
        { name: '5G Solutions', href: '/5g-solutions', icon: SignalIcon },
      ]
    },
    { 
      name: 'Micro SAAS', 
      href: '/micro-saas-solutions', 
      icon: SparklesIcon,
      children: [
        { name: 'AI Content Generator', href: '/ai-content-generator', icon: CpuChipIcon },
        { name: 'Business Intelligence', href: '/business-intelligence-dashboard', icon: ChartBarIcon },
        { name: 'Cybersecurity Monitor', href: '/cybersecurity-monitor-pro', icon: ShieldCheckIcon },
        { name: 'Cloud Manager', href: '/cloud-infrastructure-manager', icon: CloudIcon },
        { name: 'Support Automation', href: '/customer-support-automation', icon: UserGroupIcon },
        { name: 'API Management', href: '/api-management-suite', icon: CogIcon },
      ]
    },
    { name: 'Blog', href: '/blog', icon: DocumentTextIcon },
    { name: 'Tutorials', href: '/tutorials', icon: AcademicCapIcon },
    { name: 'Demo', href: '/demo', icon: PlayIcon },
    { name: 'Support', href: '/support', icon: QuestionMarkCircleIcon },
    { name: 'Contact', href: '/contact', icon: PhoneIcon },
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(href);
  };

  return (
    <nav className="bg-slate-900/95 backdrop-blur-sm border-b border-slate-700/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <CpuChipIcon className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                Zion Tech Group
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigation.map((item) => (
                <div key={item.name} className="relative">
                  {item.children ? (
                    <div className="relative group">
                      <button
                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                        className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                          isActive(item.href) || isServicesOpen
                            ? 'text-purple-400 bg-slate-800 shadow-lg shadow-purple-500/25'
                            : 'text-gray-300 hover:text-white hover:bg-slate-800 hover:shadow-lg hover:shadow-purple-500/10'
                        }`}
                      >
                        <item.icon className="w-4 h-4" />
                        <span>{item.name}</span>
                        <ChevronDownIcon className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                      </button>
                      
                      {/* Dropdown Menu */}
                      {isServicesOpen && (
                        <div className="absolute left-0 mt-2 w-72 bg-slate-800/95 backdrop-blur-sm rounded-xl shadow-2xl border border-slate-700 py-2 z-50">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              to={child.href}
                              className="flex items-center space-x-3 px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-slate-700/50 transition-all duration-200 group"
                              onClick={() => setIsServicesOpen(false)}
                            >
                              <child.icon className="w-4 h-4 text-purple-400 group-hover:text-purple-300" />
                              <span className="group-hover:translate-x-1 transition-transform">{child.name}</span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                        isActive(item.href)
                          ? 'text-purple-400 bg-slate-800 shadow-lg shadow-purple-500/25'
                          : 'text-gray-300 hover:text-white hover:bg-slate-800 hover:shadow-lg hover:shadow-purple-500/10'
                      }`}
                    >
                      <item.icon className="w-4 h-4" />
                      <span>{item.name}</span>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => {
                setIsOpen(!isOpen);
                onSidebarToggle?.();
              }}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-all duration-300"
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

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800/95 backdrop-blur-sm rounded-lg mt-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.children ? (
                    <div>
                      <button
                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                        className="flex items-center space-x-2 w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-slate-700 transition-all duration-300"
                      >
                        <item.icon className="w-5 h-5" />
                        <span>{item.name}</span>
                        <ChevronDownIcon className="w-4 h-4 ml-auto transition-transform duration-200" />
                      </button>
                      {isServicesOpen && (
                        <div className="pl-8 space-y-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              to={child.href}
                              className="flex items-center space-x-2 px-3 py-2 rounded-md text-sm text-gray-400 hover:text-white hover:bg-slate-700 transition-all duration-300"
                              onClick={() => {
                                setIsOpen(false);
                                setIsServicesOpen(false);
                              }}
                            >
                              <child.icon className="w-4 h-4" />
                              <span>{child.name}</span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                        isActive(item.href)
                          ? 'text-purple-400 bg-slate-700'
                          : 'text-gray-300 hover:text-white hover:bg-slate-700'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      <item.icon className="w-5 h-5" />
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