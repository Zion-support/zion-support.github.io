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
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/', icon: HomeIcon },
    { name: 'About', href: '/about', icon: InformationCircleIcon },
    { 
      name: 'Services', 
      href: '/services', 
      icon: BriefcaseIcon,
      submenu: [
        { name: 'AI Services', href: '/ai-services', icon: CpuChipIcon, description: 'Advanced AI solutions' },
        { name: 'IT Services', href: '/it-services', icon: CogIcon, description: 'Comprehensive IT solutions' },
        { name: 'Cloud Infrastructure', href: '/cloud-infrastructure', icon: CloudIcon, description: 'Scalable cloud solutions' },
        { name: 'Cybersecurity', href: '/cybersecurity', icon: ShieldCheckIcon, description: 'Security & compliance' },
        { name: 'Digital Transformation', href: '/digital-transformation', icon: CogIcon, description: 'Business modernization' },
        { name: 'Data Analytics', href: '/data-analytics', icon: ChartBarIcon, description: 'Data insights & BI' }
      ]
    },
    { 
      name: 'Solutions', 
      href: '/solutions', 
      icon: GlobeAltIcon,
      submenu: [
        { name: 'AI Solutions', href: '/ai-solutions', icon: CpuChipIcon, description: 'Machine learning & NLP' },
        { name: 'Micro SaaS Solutions', href: '/micro-saas-solutions', icon: GlobeAltIcon, description: 'Specialized SaaS tools' },
        { name: 'IT Solutions', href: '/it-solutions', icon: CogIcon, description: 'Enterprise IT services' },
        { name: 'Cloud Solutions', href: '/cloud-solutions', icon: CloudIcon, description: 'Multi-cloud platforms' },
        { name: '5G Solutions', href: '/5g-solutions', icon: SignalIcon, description: 'Next-gen connectivity' },
        { name: 'IoT Solutions', href: '/iot-solutions', icon: CpuChipIcon, description: 'Internet of Things' }
      ]
    },
    { name: 'Pricing', href: '/pricing', icon: CurrencyDollarIcon },
    { name: 'Resources', href: '/resources', icon: DocumentTextIcon, submenu: [
      { name: 'Blog', href: '/blog', icon: DocumentTextIcon, description: 'Latest insights' },
      { name: 'Tutorials', href: '/tutorials', icon: AcademicCapIcon, description: 'Learning resources' },
      { name: 'Case Studies', href: '/case-studies', icon: ChartBarIcon, description: 'Success stories' },
      { name: 'Documentation', href: '/docs', icon: DocumentTextIcon, description: 'Technical guides' },
      { name: 'Support', href: '/support', icon: QuestionMarkCircleIcon, description: 'Help & support' }
    ]},
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
                        onMouseEnter={() => {
                          if (item.name === 'Services') {
                            setIsServicesOpen(true);
                            setIsSolutionsOpen(false);
                            setIsResourcesOpen(false);
                          } else if (item.name === 'Solutions') {
                            setIsSolutionsOpen(true);
                            setIsServicesOpen(false);
                            setIsResourcesOpen(false);
                          } else if (item.name === 'Resources') {
                            setIsResourcesOpen(true);
                            setIsServicesOpen(false);
                            setIsSolutionsOpen(false);
                          }
                        }}
                        onMouseLeave={() => {
                          if (item.name === 'Services') setIsServicesOpen(false);
                          else if (item.name === 'Solutions') setIsSolutionsOpen(false);
                          else if (item.name === 'Resources') setIsResourcesOpen(false);
                        }}
                      >
                        {item.name}
                        <ChevronDownIcon className="ml-1 h-4 w-4" />
                      </button>
                      {((item.name === 'Services' && isServicesOpen) ||
                        (item.name === 'Solutions' && isSolutionsOpen) ||
                        (item.name === 'Resources' && isResourcesOpen)) && (
                        <div 
                          className="absolute left-0 mt-2 w-80 bg-white rounded-xl shadow-xl py-2 z-50 border border-gray-100"
                          onMouseEnter={() => {
                            if (item.name === 'Services') setIsServicesOpen(true);
                            else if (item.name === 'Solutions') setIsSolutionsOpen(true);
                            else if (item.name === 'Resources') setIsResourcesOpen(true);
                          }}
                          onMouseLeave={() => {
                            if (item.name === 'Services') setIsServicesOpen(false);
                            else if (item.name === 'Solutions') setIsSolutionsOpen(false);
                            else if (item.name === 'Resources') setIsResourcesOpen(false);
                          }}
                        >
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className="block px-6 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                            >
                              <div className="flex items-center">
                                <subItem.icon className="w-5 h-5 mr-3 text-blue-500" />
                                <div>
                                  <div className="font-medium">{subItem.name}</div>
                                  {subItem.description && (
                                    <div className="text-xs text-gray-500">{subItem.description}</div>
                                  )}
                                </div>
                              </div>
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
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.submenu ? (
                    <div>
                      <button
                        onClick={() => {
                          if (item.name === 'Services') {
                            setIsServicesOpen(!isServicesOpen);
                            setIsSolutionsOpen(false);
                            setIsResourcesOpen(false);
                          } else if (item.name === 'Solutions') {
                            setIsSolutionsOpen(!isSolutionsOpen);
                            setIsServicesOpen(false);
                            setIsResourcesOpen(false);
                          } else if (item.name === 'Resources') {
                            setIsResourcesOpen(!isResourcesOpen);
                            setIsServicesOpen(false);
                            setIsSolutionsOpen(false);
                          }
                        }}
                        className="text-gray-700 hover:text-blue-600 block px-3 py-3 text-base font-medium w-full text-left flex items-center justify-between"
                      >
                        <div className="flex items-center">
                          <item.icon className="w-5 h-5 mr-3 text-blue-500" />
                          {item.name}
                        </div>
                        <ChevronDownIcon className={`h-4 w-4 transition-transform ${
                          (item.name === 'Services' && isServicesOpen) ||
                          (item.name === 'Solutions' && isSolutionsOpen) ||
                          (item.name === 'Resources' && isResourcesOpen)
                            ? 'rotate-180' : ''
                        }`} />
                      </button>
                      {((item.name === 'Services' && isServicesOpen) ||
                        (item.name === 'Solutions' && isSolutionsOpen) ||
                        (item.name === 'Resources' && isResourcesOpen)) && (
                        <div className="pl-8 space-y-1 bg-gray-50 rounded-lg mx-2 py-2">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className="text-gray-600 hover:text-blue-600 block px-3 py-2 text-sm flex items-center"
                              onClick={() => setIsOpen(false)}
                            >
                              <subItem.icon className="w-4 h-4 mr-2 text-blue-400" />
                              <div>
                                <div className="font-medium">{subItem.name}</div>
                                {subItem.description && (
                                  <div className="text-xs text-gray-500">{subItem.description}</div>
                                )}
                              </div>
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
                      } block px-3 py-3 text-base font-medium flex items-center`}
                      onClick={() => setIsOpen(false)}
                    >
                      <item.icon className="w-5 h-5 mr-3 text-blue-500" />
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