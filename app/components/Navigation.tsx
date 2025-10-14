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
  ChartBarIcon,
  RocketLaunchIcon,
  WrenchScrewdriverIcon,
  ServerIcon,
  CodeBracketIcon,
  DatabaseIcon,
  LockClosedIcon,
  EyeIcon,
  CommandLineIcon,
  BeakerIcon,
  MicrophoneIcon,
  VideoCameraIcon,
  SparklesIcon,
  CalculatorIcon,
  ClipboardDocumentListIcon,
  ShoppingCartIcon,
  ChatBubbleLeftRightIcon,
  DocumentMagnifyingGlassIcon
} from '@heroicons/react/24/outline';

interface NavigationProps {
  onSidebarToggle?: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onSidebarToggle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isMicroSaaSOpen, setIsMicroSaaSOpen] = useState(false);
  const [isAIServicesOpen, setIsAIServicesOpen] = useState(false);
  const [isITServicesOpen, setIsITServicesOpen] = useState(false);
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
        { name: 'Digital Transformation', href: '/digital-transformation', icon: RocketLaunchIcon },
        { name: 'DevOps & CI/CD', href: '/devops-cicd', icon: WrenchScrewdriverIcon },
        { name: 'Database Management', href: '/database-management', icon: DatabaseIcon },
        { name: 'Custom Development', href: '/custom-development', icon: CodeBracketIcon }
      ]
    },
    { 
      name: 'Solutions', 
      href: '/solutions', 
      icon: CogIcon,
      submenu: [
        { name: 'AI Solutions', href: '/ai-solutions', icon: CpuChipIcon },
        { name: 'IT Solutions', href: '/it-solutions', icon: ServerIcon },
        { name: 'Micro SaaS Solutions', href: '/micro-saas-solutions', icon: GlobeAltIcon },
        { name: 'Cybersecurity', href: '/cybersecurity', icon: ShieldCheckIcon },
        { name: 'Cloud Infrastructure', href: '/cloud-solutions', icon: CloudIcon },
        { name: 'Digital Transformation', href: '/digital-transformation', icon: RocketLaunchIcon },
        { name: '5G Solutions', href: '/5g-solutions', icon: SignalIcon }
      ]
    },
    { 
      name: 'Micro SaaS', 
      href: '/micro-saas-solutions', 
      icon: GlobeAltIcon,
      submenu: [
        { name: 'AI Analytics Dashboard', href: '/ai-analytics-dashboard-pro', icon: ChartBarIcon },
        { name: 'AI Customer Support Bot', href: '/ai-customer-support-bot', icon: ChatBubbleLeftRightIcon },
        { name: 'AI Content Moderation', href: '/ai-content-moderation-pro', icon: DocumentMagnifyingGlassIcon },
        { name: 'AI Accounting Assistant', href: '/ai-accounting-assistant', icon: CalculatorIcon },
        { name: 'AI Project Management', href: '/ai-project-management-pro', icon: ClipboardDocumentListIcon },
        { name: 'AI E-commerce Optimizer', href: '/ai-ecommerce-optimizer', icon: ShoppingCartIcon }
      ]
    },
    { 
      name: 'AI Services', 
      href: '/ai-solutions', 
      icon: CpuChipIcon,
      submenu: [
        { name: 'Machine Learning Platform', href: '/ai-ml-platform', icon: CpuChipIcon },
        { name: 'Voice Processing Suite', href: '/ai-voice-processing', icon: MicrophoneIcon },
        { name: 'Computer Vision Platform', href: '/ai-computer-vision', icon: VideoCameraIcon },
        { name: 'Content Generation Pro', href: '/ai-content-generation-pro', icon: SparklesIcon },
        { name: 'Data Science Platform', href: '/ai-data-science-platform', icon: BeakerIcon },
        { name: 'Cybersecurity Monitor', href: '/ai-cybersecurity-monitor-pro', icon: LockClosedIcon }
      ]
    },
    { 
      name: 'IT Services', 
      href: '/it-solutions', 
      icon: ServerIcon,
      submenu: [
        { name: 'Cloud Infrastructure', href: '/cloud-infrastructure', icon: CloudIcon },
        { name: 'DevOps & CI/CD', href: '/devops-cicd', icon: WrenchScrewdriverIcon },
        { name: 'Database Management', href: '/database-management', icon: DatabaseIcon },
        { name: 'Custom Development', href: '/custom-development', icon: CodeBracketIcon },
        { name: 'IT Security', href: '/it-security', icon: ShieldCheckIcon },
        { name: 'IT Support', href: '/it-support', icon: CogIcon }
      ]
    },
    { name: 'Blog', href: '/blog', icon: DocumentTextIcon },
    { name: 'Tutorials', href: '/tutorials', icon: AcademicCapIcon },
    { name: 'Demo', href: '/demo', icon: PlayIcon },
    { name: 'Support', href: '/support', icon: QuestionMarkCircleIcon },
    { name: 'Pricing', href: '/pricing', icon: CurrencyDollarIcon },
    { name: 'Contact', href: '/contact', icon: PhoneIcon }
  ];

  const isActive = (href: string) => {
    return location.pathname === href;
  };

  const handleMouseEnter = (menuType: string) => {
    setIsServicesOpen(menuType === 'services');
    setIsSolutionsOpen(menuType === 'solutions');
    setIsMicroSaaSOpen(menuType === 'micro-saas');
    setIsAIServicesOpen(menuType === 'ai-services');
    setIsITServicesOpen(menuType === 'it-services');
  };

  const handleMouseLeave = () => {
    setIsServicesOpen(false);
    setIsSolutionsOpen(false);
    setIsMicroSaaSOpen(false);
    setIsAIServicesOpen(false);
    setIsITServicesOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
                Zion Tech Group
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:ml-6 lg:flex lg:space-x-8">
              {navigation.map((item) => (
                <div key={item.name} className="relative">
                  {item.submenu ? (
                    <div className="relative group">
                      <button
                        className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium flex items-center transition-colors"
                        onMouseEnter={() => handleMouseEnter(item.name.toLowerCase().replace(' ', '-'))}
                        onMouseLeave={handleMouseLeave}
                      >
                        {item.name}
                        <ChevronDownIcon className="ml-1 h-4 w-4" />
                      </button>
                      {(isServicesOpen && item.name === 'Services') ||
                       (isSolutionsOpen && item.name === 'Solutions') ||
                       (isMicroSaaSOpen && item.name === 'Micro SaaS') ||
                       (isAIServicesOpen && item.name === 'AI Services') ||
                       (isITServicesOpen && item.name === 'IT Services') ? (
                        <div 
                          className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200"
                          onMouseEnter={() => handleMouseEnter(item.name.toLowerCase().replace(' ', '-'))}
                          onMouseLeave={handleMouseLeave}
                        >
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className="block px-4 py-3 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors"
                            >
                              <div className="flex items-center">
                                <subItem.icon className="w-4 h-4 mr-3 text-purple-500" />
                                {subItem.name}
                              </div>
                            </Link>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className={`${
                        isActive(item.href)
                          ? 'text-purple-600 border-b-2 border-purple-600'
                          : 'text-gray-700 hover:text-purple-600'
                      } px-3 py-2 text-sm font-medium transition-colors`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-purple-600 focus:outline-none focus:text-purple-600"
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
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.submenu ? (
                    <div>
                      <button
                        onClick={() => {
                          if (item.name === 'Services') setIsServicesOpen(!isServicesOpen);
                          if (item.name === 'Solutions') setIsSolutionsOpen(!isSolutionsOpen);
                          if (item.name === 'Micro SaaS') setIsMicroSaaSOpen(!isMicroSaaSOpen);
                          if (item.name === 'AI Services') setIsAIServicesOpen(!isAIServicesOpen);
                          if (item.name === 'IT Services') setIsITServicesOpen(!isITServicesOpen);
                        }}
                        className="text-gray-700 hover:text-purple-600 block px-3 py-2 text-base font-medium w-full text-left flex items-center justify-between"
                      >
                        <span>{item.name}</span>
                        <ChevronDownIcon className="h-4 w-4" />
                      </button>
                      {((isServicesOpen && item.name === 'Services') ||
                        (isSolutionsOpen && item.name === 'Solutions') ||
                        (isMicroSaaSOpen && item.name === 'Micro SaaS') ||
                        (isAIServicesOpen && item.name === 'AI Services') ||
                        (isITServicesOpen && item.name === 'IT Services')) && (
                        <div className="pl-4 space-y-1">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className="text-gray-600 hover:text-purple-600 block px-3 py-2 text-sm flex items-center"
                              onClick={() => setIsOpen(false)}
                            >
                              <subItem.icon className="w-4 h-4 mr-2 text-purple-500" />
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
                          ? 'text-purple-600 bg-purple-50'
                          : 'text-gray-700 hover:text-purple-600'
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