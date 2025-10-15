import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Bars3Icon, HomeIcon, InformationCircleIcon, PhoneIcon, DocumentTextIcon, AcademicCapIcon, QuestionMarkCircleIcon, ShieldCheckIcon, CurrencyDollarIcon, CogIcon, ChevronDownIcon, GlobeAltIcon, CloudIcon, CpuChipIcon, SignalIcon, UserGroupIcon, EnvelopeIcon, ShareIcon, ChatBubbleLeftRightIcon, ChartBarIcon, EyeIcon, CircleStackIcon, CodeBracketIcon, DevicePhoneMobileIcon, UserPlusIcon, XMarkIcon, SparklesIcon, RocketLaunchIcon, MicrophoneIcon, ClockIcon, VideoCameraIcon, ScaleIcon, HeartIcon } from '@heroicons/react/24/outline';

interface NavigationProps {
  onSidebarToggle?: () => void;
}

const Navigation: React.FC<NavigationProps> = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/', icon: HomeIcon },
    { name: 'About', href: '/about', icon: InformationCircleIcon },
    {
      name: 'AI Services',
      href: '/ai-services',
      icon: CpuChipIcon,
      submenu: [
        { name: 'AI Chatbot Builder', href: '/ai-chatbot-builder', icon: ChatBubbleLeftRightIcon, badge: 'Popular' },
        { name: 'AI Document Processor', href: '/ai-document-processor', icon: DocumentTextIcon, badge: 'New' },
        { name: 'AI Form Builder', href: '/ai-form-builder', icon: DocumentTextIcon },
        { name: 'AI Voice Assistant', href: '/ai-voice-assistant', icon: MicrophoneIcon },
        { name: 'AI Fraud Detection', href: '/ai-fraud-detection', icon: ShieldCheckIcon },
        { name: 'AI Image Recognition', href: '/ai-image-recognition', icon: EyeIcon },
        { name: 'AI Lead Scoring', href: '/ai-lead-scoring', icon: ChartBarIcon },
        { name: 'AI Predictive Maintenance', href: '/ai-predictive-maintenance', icon: CogIcon },
        { name: 'AI Price Optimizer', href: '/ai-price-optimizer', icon: CurrencyDollarIcon },
        { name: 'AI Scheduling Assistant', href: '/ai-scheduling-assistant', icon: ClockIcon },
        { name: 'AI CRM Optimizer', href: '/ai-crm-optimizer', icon: UserGroupIcon },
        { name: 'AI Data Visualizer', href: '/ai-data-visualizer', icon: ChartBarIcon },
        { name: 'AI Email Optimizer', href: '/ai-email-optimizer', icon: EnvelopeIcon },
        { name: 'AI Content Generator', href: '/ai-content-generator', icon: DocumentTextIcon },
        { name: 'AI Social Media Manager', href: '/ai-social-media-manager', icon: ShareIcon },
        { name: 'AI Video Generator', href: '/ai-video-generator', icon: VideoCameraIcon },
        { name: 'AI Translation Service', href: '/ai-translator', icon: GlobeAltIcon },
        { name: 'AI Legal Assistant', href: '/ai-legal-assistant', icon: ScaleIcon },
        { name: 'AI Medical Assistant', href: '/ai-medical-assistant', icon: HeartIcon },
        { name: 'AI Education Tutor', href: '/ai-education-tutor', icon: AcademicCapIcon }
      ]
    },
    {
      name: 'IT Solutions',
      href: '/it-services',
      icon: CodeBracketIcon,
      submenu: [
        { name: 'Cloud Infrastructure', href: '/cloud-infrastructure', icon: CloudIcon, badge: 'Popular' },
        { name: 'API Development', href: '/api-development', icon: CodeBracketIcon },
        { name: 'DevOps Automation', href: '/devops-automation', icon: CogIcon },
        { name: 'Data Engineering', href: '/data-engineering', icon: ChartBarIcon },
        { name: 'Web Development', href: '/web-development', icon: GlobeAltIcon },
        { name: 'Mobile Development', href: '/mobile-development', icon: DevicePhoneMobileIcon },
        { name: 'Database Management', href: '/database-management', icon: CircleStackIcon },
        { name: 'Network Infrastructure', href: '/network-infrastructure', icon: SignalIcon },
        { name: 'Security Audit', href: '/security-audit', icon: ShieldCheckIcon },
        { name: 'Digital Transformation', href: '/digital-transformation', icon: RocketLaunchIcon }
      ]
    },
    {
      name: 'Advanced Solutions',
      href: '/solutions',
      icon: SparklesIcon,
      submenu: [
        { name: 'All Solutions', href: '/solutions', icon: SparklesIcon, badge: 'Overview' },
        { name: 'Blockchain Solutions', href: '/blockchain-solutions', icon: CircleStackIcon, badge: 'Hot' },
        { name: 'IoT Solutions', href: '/iot-solutions', icon: SignalIcon },
        { name: '5G Solutions', href: '/5g-solutions', icon: SignalIcon },
        { name: 'Edge Computing', href: '/edge-computing-solutions', icon: CloudIcon },
        { name: 'Augmented Reality', href: '/augmented-reality-solutions', icon: EyeIcon },
        { name: 'Virtual Reality', href: '/virtual-reality-solutions', icon: EyeIcon },
        { name: 'Quantum Computing', href: '/quantum-computing-solutions', icon: CpuChipIcon },
        { name: 'Robotic Process Automation', href: '/robotic-process-automation', icon: CogIcon },
        { name: 'Low-Code Platform', href: '/low-code-platform', icon: CodeBracketIcon },
        { name: 'Serverless Architecture', href: '/serverless-architecture', icon: CloudIcon }
      ]
    },
    { name: 'Pricing', href: '/pricing', icon: CurrencyDollarIcon },
    { name: 'Case Studies', href: '/case-studies', icon: DocumentTextIcon },
    { name: 'Blog', href: '/blog', icon: DocumentTextIcon },
    {
      name: 'Company',
      href: '#',
      icon: UserGroupIcon,
      submenu: [
        { name: 'About Us', href: '/about', icon: InformationCircleIcon },
        { name: 'Our Team', href: '/team', icon: UserGroupIcon },
        { name: 'Careers', href: '/careers', icon: UserPlusIcon },
        { name: 'Partnerships', href: '/partnerships', icon: ShareIcon },
        { name: 'Contact', href: '/contact', icon: PhoneIcon }
      ]
    },
    {
      name: 'Resources',
      href: '#',
      icon: DocumentTextIcon,
      submenu: [
        { name: 'API Documentation', href: '/api-docs', icon: CodeBracketIcon },
        { name: 'Help Center', href: '/help', icon: QuestionMarkCircleIcon },
        { name: 'Accessibility', href: '/accessibility', icon: EyeIcon },
        { name: 'Privacy Policy', href: '/privacy', icon: ShieldCheckIcon },
        { name: 'Terms of Service', href: '/terms', icon: DocumentTextIcon },
        { name: 'Cookie Policy', href: '/cookies', icon: DocumentTextIcon }
      ]
    }
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(href);
  };

  const NavItem = ({ item, isMobile = false }: { item: any; isMobile?: boolean }) => {
    const hasSubmenu = item.submenu && item.submenu.length > 0;
    
    if (hasSubmenu) {
      return (
        <div className="relative group">
          <button
            className={`flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
              isActive(item.href)
                ? 'text-cyan-400 bg-cyan-500/10 border border-cyan-400/30'
                : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
            } ${isMobile ? 'w-full justify-between' : ''}`}
            onMouseEnter={() => !isMobile && setIsServicesOpen(true)}
            onMouseLeave={() => !isMobile && setIsServicesOpen(false)}
            onClick={() => isMobile && setIsServicesOpen(!isServicesOpen)}
          >
            <div className="flex items-center">
              <item.icon className="h-5 w-5 mr-2" />
              {item.name}
            </div>
            <ChevronDownIcon className={`h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
          </button>
          
          {/* Desktop Dropdown */}
          {!isMobile && (
            <div
              className={`absolute top-full left-0 mt-2 w-80 glass-card p-6 z-50 transition-all duration-200 ${
                isServicesOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
              }`}
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <div className="grid grid-cols-1 gap-2">
                {item.submenu.map((subItem: any, index: number) => (
                  <Link
                    key={index}
                    to={subItem.href}
                    className="flex items-center justify-between px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all duration-200 group"
                  >
                    <div className="flex items-center">
                      <subItem.icon className="h-4 w-4 mr-3 text-cyan-400" />
                      {subItem.name}
                    </div>
                    {subItem.badge && (
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        subItem.badge === 'Popular' ? 'bg-green-500/20 text-green-400' :
                        subItem.badge === 'New' ? 'bg-blue-500/20 text-blue-400' :
                        subItem.badge === 'Hot' ? 'bg-red-500/20 text-red-400' :
                        'bg-gray-500/20 text-gray-400'
                      }`}>
                        {subItem.badge}
                      </span>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          )}
          
          {/* Mobile Dropdown */}
          {isMobile && isServicesOpen && (
            <div className="ml-4 mt-2 space-y-1">
              {item.submenu.map((subItem: any, index: number) => (
                <Link
                  key={index}
                  to={subItem.href}
                  className="flex items-center justify-between px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <div className="flex items-center">
                    <subItem.icon className="h-4 w-4 mr-3 text-cyan-400" />
                    {subItem.name}
                  </div>
                  {subItem.badge && (
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      subItem.badge === 'Popular' ? 'bg-green-500/20 text-green-400' :
                      subItem.badge === 'New' ? 'bg-blue-500/20 text-blue-400' :
                      subItem.badge === 'Hot' ? 'bg-red-500/20 text-red-400' :
                      'bg-gray-500/20 text-gray-400'
                    }`}>
                      {subItem.badge}
                    </span>
                  )}
                </Link>
              ))}
            </div>
          )}
        </div>
      );
    }

    return (
      <Link
        to={item.href}
        className={`flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
          isActive(item.href)
            ? 'text-cyan-400 bg-cyan-500/10 border border-cyan-400/30'
            : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
        } ${isMobile ? 'w-full' : ''}`}
        onClick={() => isMobile && setIsMobileMenuOpen(false)}
      >
        <item.icon className="h-5 w-5 mr-2" />
        {item.name}
      </Link>
    );
  };

  return (
    <nav className="relative z-50">
      {/* Desktop Navigation */}
      <div className="hidden lg:block">
        <div className="glass-card mx-4 mt-4 rounded-2xl">
          <div className="px-6 py-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link to="/" className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <CpuChipIcon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-xl font-bold holographic-text">ZION TECH GROUP</div>
                  <div className="text-xs text-gray-400">AI & IT Solutions</div>
                </div>
              </Link>

              {/* Navigation Links */}
              <div className="flex items-center space-x-1">
                {navigation.map((item, index) => (
                  <NavItem key={index} item={item} />
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex items-center space-x-3">
                <Link
                  to="/contact"
                  className="px-4 py-2 text-sm font-medium text-cyan-400 hover:text-white border border-cyan-400/30 rounded-lg hover:bg-cyan-500/10 transition-all duration-200"
                >
                  Contact
                </Link>
                <Link
                  to="/pricing"
                  className="btn-neon px-6 py-2 text-sm font-semibold"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden">
        <div className="glass-card mx-4 mt-4 rounded-2xl">
          <div className="px-4 py-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link to="/" className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <CpuChipIcon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="text-lg font-bold holographic-text">ZION TECH</div>
                  <div className="text-xs text-gray-400">AI & IT Solutions</div>
                </div>
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-gray-400 hover:text-white transition-colors"
              >
                {isMobileMenuOpen ? (
                  <XMarkIcon className="h-6 w-6" />
                ) : (
                  <Bars3Icon className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="glass-card mx-4 mt-2 rounded-2xl">
            <div className="px-4 py-6 space-y-2">
              {navigation.map((item, index) => (
                <NavItem key={index} item={item} isMobile={true} />
              ))}
              
              {/* Mobile CTA Buttons */}
              <div className="pt-4 border-t border-gray-700 space-y-2">
                <Link
                  to="/contact"
                  className="block w-full px-4 py-3 text-center text-sm font-medium text-cyan-400 border border-cyan-400/30 rounded-lg hover:bg-cyan-500/10 transition-all duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact Us
                </Link>
                <Link
                  to="/pricing"
                  className="block w-full btn-neon text-center py-3 text-sm font-semibold"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;