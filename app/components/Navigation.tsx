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
      name: 'AI Solutions', 
      href: '/ai-solutions', 
      icon: CpuChipIcon,
      submenu: [
        { name: 'AI Chatbots', href: '/ai-chatbot-enterprise', icon: MessageSquare },
        { name: 'Computer Vision', href: '/ai-computer-vision', icon: Eye },
        { name: 'Content Generation', href: '/ai-content-generation-pro', icon: DocumentTextIcon },
        { name: 'Analytics Dashboard', href: '/ai-analytics-dashboard-pro', icon: ChartBarIcon },
        { name: 'Automation Platform', href: '/ai-automation-platform', icon: CogIcon },
        { name: 'Blockchain Solutions', href: '/ai-blockchain-solutions', icon: Network }
      ]
    },
    { 
      name: 'IT Solutions', 
      href: '/it-solutions', 
      icon: ServerIcon,
      submenu: [
        { name: 'Cloud Infrastructure', href: '/cloud-infrastructure', icon: CloudIcon },
        { name: 'Cybersecurity', href: '/cybersecurity-solutions', icon: ShieldCheckIcon },
        { name: 'Web Development', href: '/web-development', icon: Code },
        { name: 'Mobile Development', href: '/mobile-development', icon: DevicePhoneMobileIcon },
        { name: 'Database Management', href: '/database-management', icon: Database },
        { name: 'Network Infrastructure', href: '/network-infrastructure', icon: Network }
      ]
    },
    { 
      name: 'Micro SaaS', 
      href: '/micro-saas-solutions', 
      icon: GlobeAltIcon,
      submenu: [
        { name: 'Task Manager Pro', href: '/task-manager-pro', icon: CheckCircle },
        { name: 'Analytics Dashboard', href: '/analytics-dashboard', icon: ChartBarIcon },
        { name: 'Customer Support Hub', href: '/customer-support-hub', icon: MessageSquare },
        { name: 'Inventory Manager', href: '/inventory-manager', icon: Database },
        { name: 'Social Media Scheduler', href: '/social-media-scheduler', icon: GlobeAltIcon },
        { name: 'Expense Tracker Pro', href: '/expense-tracker', icon: CurrencyDollarIcon }
      ]
    },
    { 
      name: '5G Solutions', 
      href: '/5g-solutions', 
      icon: SignalIcon,
      submenu: [
        { name: '5G Network Infrastructure', href: '/5g-network-infrastructure', icon: Network },
        { name: '5G IoT Solutions', href: '/5g-iot-solutions', icon: CogIcon },
        { name: '5G Edge Computing', href: '/5g-edge-computing', icon: CpuChipIcon },
        { name: '5G Smart Cities', href: '/5g-smart-city-solutions', icon: GlobeAltIcon },
        { name: '5G Mobile Apps', href: '/5g-mobile-applications', icon: DevicePhoneMobileIcon },
        { name: '5G Data Analytics', href: '/5g-data-analytics', icon: ChartBarIcon }
      ]
    },
    { name: 'Resources', href: '#', icon: DocumentTextIcon, submenu: [
      { name: 'Blog', href: '/blog', icon: DocumentTextIcon },
      { name: 'Tutorials', href: '/tutorials', icon: AcademicCapIcon },
      { name: 'Documentation', href: '/docs', icon: DocumentTextIcon },
      { name: 'Case Studies', href: '/case-studies', icon: DocumentTextIcon },
      { name: 'API Documentation', href: '/api-docs', icon: Code },
      { name: 'Help Center', href: '/help', icon: QuestionMarkCircleIcon }
    ]},
    { name: 'Company', href: '#', icon: UserGroupIcon, submenu: [
      { name: 'About Us', href: '/about', icon: InformationCircleIcon },
      { name: 'Our Team', href: '/team', icon: UserGroupIcon },
      { name: 'Careers', href: '/careers', icon: UserGroupIcon },
      { name: 'Partnerships', href: '/partnerships', icon: UserGroupIcon },
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
    <nav className="bg-slate-900/95 backdrop-blur-sm border-b border-slate-700/50 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-cyan-500/5 to-purple-500/5"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-between h-16">
          {/* Enhanced Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center group">
              <div className="h-8 w-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-500/25">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="ml-2 text-white font-bold text-xl group-hover:text-purple-300 transition-colors">
                Zion Tech Group
              </span>
            </Link>
          </div>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-6">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  to={item.href}
                  className="flex items-center space-x-1 text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-slate-800/50 hover:shadow-lg hover:shadow-purple-500/10"
                  onMouseEnter={() => {
                    if (item.name === 'AI Solutions') setIsServicesOpen(true);
                    else if (item.name === 'IT Solutions') setIsSolutionsOpen(true);
                    else if (item.name === 'Micro SaaS') setIsResourcesOpen(true);
                    else if (item.name === '5G Solutions') setIsCompanyOpen(true);
                    else if (item.name === 'Resources') setIsResourcesOpen(true);
                    else if (item.name === 'Company') setIsCompanyOpen(true);
                  }}
                  onMouseLeave={() => {
                    if (item.name === 'AI Solutions') setIsServicesOpen(false);
                    else if (item.name === 'IT Solutions') setIsSolutionsOpen(false);
                    else if (item.name === 'Micro SaaS') setIsResourcesOpen(false);
                    else if (item.name === '5G Solutions') setIsCompanyOpen(false);
                    else if (item.name === 'Resources') setIsResourcesOpen(false);
                    else if (item.name === 'Company') setIsCompanyOpen(false);
                  }}
                >
                  <item.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                  <span className="group-hover:text-purple-300 transition-colors">{item.name}</span>
                  {item.submenu && <ChevronDownIcon className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />}
                </Link>
                
                {/* Enhanced Dropdown Menu */}
                {item.submenu && (
                  <div className={`absolute left-0 mt-2 w-64 bg-slate-800/95 backdrop-blur-sm rounded-lg shadow-xl py-2 z-50 border border-slate-700/50 ${
                    (item.name === 'AI Solutions' && isServicesOpen) ||
                    (item.name === 'IT Solutions' && isSolutionsOpen) ||
                    (item.name === 'Micro SaaS' && isResourcesOpen) ||
                    (item.name === '5G Solutions' && isCompanyOpen) ||
                    (item.name === 'Resources' && isResourcesOpen) ||
                    (item.name === 'Company' && isCompanyOpen)
                      ? 'block' : 'hidden'
                  }`}>
                    <div className="px-3 py-2 border-b border-slate-700/50">
                      <h3 className="text-xs font-semibold text-purple-400 uppercase tracking-wider">
                        {item.name}
                      </h3>
                    </div>
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.href}
                        className="block px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-slate-700/50 transition-all duration-300 group/item"
                        onClick={() => {
                          setIsServicesOpen(false);
                          setIsSolutionsOpen(false);
                          setIsResourcesOpen(false);
                          setIsCompanyOpen(false);
                        }}
                      >
                        <div className="flex items-center">
                          <subItem.icon className="w-4 h-4 mr-3 text-purple-400 group-hover/item:text-cyan-400 transition-colors" />
                          <span className="group-hover/item:text-purple-300 transition-colors">{subItem.name}</span>
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

        {/* Enhanced Mobile Navigation */}
        <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800/95 backdrop-blur-sm border-t border-slate-700/50">
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