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
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/', icon: HomeIcon },
    { name: 'About', href: '/about', icon: InformationCircleIcon },
    { 
      name: 'Services', 
      href: '/services', 
      icon: BriefcaseIcon,
      submenu: [
        { name: 'AI Solutions', href: '/ai-solutions', icon: CpuChipIcon },
        { name: 'IT Solutions', href: '/it-solutions', icon: CogIcon },
        { name: 'Micro SaaS Solutions', href: '/micro-saas-solutions', icon: GlobeAltIcon },
        { name: 'Cybersecurity', href: '/cybersecurity', icon: ShieldCheckIcon },
        { name: 'Cloud Infrastructure', href: '/cloud-solutions', icon: CloudIcon },
        { name: 'Digital Transformation', href: '/digital-transformation', icon: CogIcon },
        { name: '5G Solutions', href: '/5g-solutions', icon: SignalIcon }
      ]
    },
    { 
      name: 'Solutions', 
      href: '/solutions', 
      icon: CogIcon,
      submenu: [
        { name: 'AI Solutions', href: '/ai-solutions', icon: CpuChipIcon },
        { name: 'IT Solutions', href: '/it-solutions', icon: CogIcon },
        { name: 'Micro SaaS Solutions', href: '/micro-saas-solutions', icon: GlobeAltIcon },
        { name: 'Cloud Solutions', href: '/cloud-solutions', icon: CloudIcon },
        { name: 'Cybersecurity Solutions', href: '/cybersecurity', icon: ShieldCheckIcon }
      ]
    },
    { name: 'Resources', href: '#', icon: DocumentTextIcon, submenu: [
      { name: 'Blog', href: '/blog', icon: DocumentTextIcon },
      { name: 'Tutorials', href: '/tutorials', icon: AcademicCapIcon },
      { name: 'Documentation', href: '/docs', icon: DocumentTextIcon },
      { name: 'Case Studies', href: '/case-studies', icon: DocumentTextIcon }
    ]},
    { name: 'Company', href: '#', icon: UserGroupIcon, submenu: [
      { name: 'About Us', href: '/about', icon: InformationCircleIcon },
      { name: 'Team', href: '/team', icon: UserGroupIcon },
      { name: 'Careers', href: '/careers', icon: UserGroupIcon },
      { name: 'Contact', href: '/contact', icon: PhoneIcon }
    ]},
    { name: 'Pricing', href: '/pricing', icon: CurrencyDollarIcon },
    { name: 'Support', href: '/support', icon: QuestionMarkCircleIcon }
  ];

  const isActive = (href: string) => {
    return location.pathname === href;
  };

  const toggleServicesMenu = () => {
    setIsServicesOpen(!isServicesOpen);
    setIsSolutionsOpen(false);
  };

  const toggleSolutionsMenu = () => {
    setIsSolutionsOpen(!isSolutionsOpen);
    setIsServicesOpen(false);
  };

  const toggleResourcesMenu = () => {
    setIsResourcesOpen(!isResourcesOpen);
    setIsServicesOpen(false);
    setIsSolutionsOpen(false);
  };

  const toggleCompanyMenu = () => {
    setIsCompanyOpen(!isCompanyOpen);
    setIsServicesOpen(false);
    setIsSolutionsOpen(false);
    setIsResourcesOpen(false);
  };

  return (
    <nav className="bg-slate-900 border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <div className="h-8 w-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="ml-2 text-white font-bold text-xl">Zion Tech Group</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  to={item.href}
                  className="flex items-center space-x-1 text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  onMouseEnter={() => {
                    if (item.name === 'Services') setIsServicesOpen(true);
                    else if (item.name === 'Solutions') setIsSolutionsOpen(true);
                    else if (item.name === 'Resources') setIsResourcesOpen(true);
                    else if (item.name === 'Company') setIsCompanyOpen(true);
                  }}
                  onMouseLeave={() => {
                    if (item.name === 'Services') setIsServicesOpen(false);
                    else if (item.name === 'Solutions') setIsSolutionsOpen(false);
                    else if (item.name === 'Resources') setIsResourcesOpen(false);
                    else if (item.name === 'Company') setIsCompanyOpen(false);
                  }}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                  {item.submenu && <ChevronDownIcon className="w-4 h-4" />}
                </Link>
                
                {/* Dropdown Menu */}
                {item.submenu && (
                  <div className={`absolute left-0 mt-2 w-56 bg-slate-800 rounded-lg shadow-lg py-2 z-50 border border-slate-700 ${
                    (item.name === 'Services' && isServicesOpen) ||
                    (item.name === 'Solutions' && isSolutionsOpen) ||
                    (item.name === 'Resources' && isResourcesOpen) ||
                    (item.name === 'Company' && isCompanyOpen)
                      ? 'block' : 'hidden'
                  }`}>
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.href}
                        className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-slate-700 transition-colors"
                        onClick={() => {
                          setIsServicesOpen(false);
                          setIsSolutionsOpen(false);
                          setIsResourcesOpen(false);
                          setIsCompanyOpen(false);
                        }}
                      >
                        <div className="flex items-center">
                          <subItem.icon className="w-4 h-4 mr-3" />
                          {subItem.name}
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2 rounded-md"
            >
              {isOpen ? (
                <XMarkIcon className="block h-6 w-6" />
              ) : (
                <Bars3Icon className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800 border-t border-slate-700">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.submenu ? (
                  <div>
                    <button
                      onClick={() => {
                        if (item.name === 'Services') toggleServicesMenu();
                        else if (item.name === 'Solutions') toggleSolutionsMenu();
                        else if (item.name === 'Resources') toggleResourcesMenu();
                        else if (item.name === 'Company') toggleCompanyMenu();
                      }}
                      className={`flex items-center w-full px-3 py-2 rounded-md text-base font-medium transition-colors ${
                        isActive(item.href) || (item.submenu && item.submenu.some(sub => isActive(sub.href)))
                          ? 'text-white bg-slate-700'
                          : 'text-gray-300 hover:text-white hover:bg-slate-700'
                      }`}
                    >
                      <item.icon className="w-5 h-5 mr-3" />
                      {item.name}
                      <ChevronDownIcon className="w-4 h-4 ml-auto" />
                    </button>
                    
                    {/* Mobile Submenu */}
                    <div className={`pl-6 ${
                      (item.name === 'Services' && isServicesOpen) ||
                      (item.name === 'Solutions' && isSolutionsOpen) ||
                      (item.name === 'Resources' && isResourcesOpen) ||
                      (item.name === 'Company' && isCompanyOpen)
                        ? 'block' : 'hidden'
                    }`}>
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="flex items-center px-3 py-2 rounded-md text-sm text-gray-300 hover:text-white hover:bg-slate-700 transition-colors"
                          onClick={() => {
                            setIsOpen(false);
                            setIsServicesOpen(false);
                            setIsSolutionsOpen(false);
                            setIsResourcesOpen(false);
                            setIsCompanyOpen(false);
                          }}
                        >
                          <subItem.icon className="w-4 h-4 mr-3" />
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`flex items-center px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      isActive(item.href)
                        ? 'text-white bg-slate-700'
                        : 'text-gray-300 hover:text-white hover:bg-slate-700'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <item.icon className="w-5 h-5 mr-3" />
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;