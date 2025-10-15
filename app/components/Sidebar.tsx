import React, { memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  XMarkIcon,
  HomeIcon,
  InformationCircleIcon,
  PhoneIcon,
  DocumentTextIcon,
  AcademicCapIcon,
  QuestionMarkCircleIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon,
  CogIcon,
  ChevronRightIcon,
  GlobeAltIcon,
  CloudIcon,
  CpuChipIcon,
  SignalIcon,
  UserGroupIcon,
  EnvelopeIcon,
  ShareIcon,
  ChatBubbleLeftRightIcon,
  ChartBarIcon,
  EyeIcon,
  CircleStackIcon,
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  UserPlusIcon,
  CheckCircleIcon,
  SparklesIcon,
  RocketLaunchIcon,
  FireIcon,
  StarIcon,
  ClockIcon,
  MicrophoneIcon,
  VideoCameraIcon,
  ScaleIcon,
  HeartIcon
} from '@heroicons/react/24/outline';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = memo(({ isOpen, onClose }) => {
  const location = useLocation();
  const [expandedSections, setExpandedSections] = React.useState<string[]>([]);

  const toggleSection = (section: string) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const navigation = [
    { name: 'Home', href: '/', icon: HomeIcon },
    { name: 'About', href: '/about', icon: InformationCircleIcon },
    { name: 'Pricing', href: '/pricing', icon: CurrencyDollarIcon },
    { name: 'Case Studies', href: '/case-studies', icon: DocumentTextIcon },
    { name: 'Blog', href: '/blog', icon: DocumentTextIcon },
    { name: 'Contact', href: '/contact', icon: PhoneIcon },
    {
      name: 'AI Services',
      icon: CpuChipIcon,
      section: 'ai-services',
      items: [
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
      icon: CodeBracketIcon,
      section: 'it-solutions',
      items: [
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
      icon: SparklesIcon,
      section: 'advanced-solutions',
      items: [
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
    {
      name: 'Company',
      icon: UserGroupIcon,
      section: 'company',
      items: [
        { name: 'About Us', href: '/about', icon: InformationCircleIcon },
        { name: 'Our Team', href: '/team', icon: UserGroupIcon },
        { name: 'Careers', href: '/careers', icon: UserPlusIcon },
        { name: 'Partnerships', href: '/partnerships', icon: ShareIcon }
      ]
    },
    {
      name: 'Resources',
      icon: DocumentTextIcon,
      section: 'resources',
      items: [
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

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case 'Popular':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'New':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'Hot':
        return 'bg-red-500/20 text-red-400 border-red-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed top-0 left-0 h-full w-80 glass-card z-50 transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 lg:static lg:z-auto
      `}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-700">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center">
                <CpuChipIcon className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-lg font-bold holographic-text">ZION TECH</div>
                <div className="text-xs text-gray-400">AI & IT Solutions</div>
              </div>
            </div>
            <button
              onClick={onClose}
              className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>

          {/* Navigation */}
          <div className="flex-1 overflow-y-auto py-6">
            <nav className="px-4 space-y-2">
              {navigation.map((item, index) => {
                if (item.section) {
                  const isExpanded = expandedSections.includes(item.section);
                  return (
                    <div key={index}>
                      <button
                        onClick={() => toggleSection(item.section!)}
                        className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all duration-200 group"
                      >
                        <div className="flex items-center">
                          <item.icon className="h-5 w-5 mr-3 text-cyan-400" />
                          {item.name}
                        </div>
                        <ChevronRightIcon className={`h-4 w-4 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                      </button>
                      
                      {isExpanded && (
                        <div className="ml-4 mt-2 space-y-1">
                          {item.items?.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              to={subItem.href}
                              className={`flex items-center justify-between px-4 py-2 text-sm rounded-lg transition-all duration-200 group ${
                                isActive(subItem.href)
                                  ? 'text-cyan-400 bg-cyan-500/10 border border-cyan-400/30'
                                  : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                              }`}
                              onClick={onClose}
                            >
                              <div className="flex items-center">
                                <subItem.icon className="h-4 w-4 mr-3 text-cyan-400" />
                                {subItem.name}
                              </div>
                              {subItem.badge && (
                                <span className={`px-2 py-1 text-xs rounded-full border ${getBadgeColor(subItem.badge)}`}>
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
                    key={index}
                    to={item.href}
                    className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 group ${
                      isActive(item.href)
                        ? 'text-cyan-400 bg-cyan-500/10 border border-cyan-400/30'
                        : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                    }`}
                    onClick={onClose}
                  >
                    <item.icon className="h-5 w-5 mr-3 text-cyan-400" />
                    {item.name}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-gray-700">
            <div className="space-y-4">
              <div className="text-sm text-gray-400">
                <p className="font-semibold text-white mb-2">Contact Info</p>
                <p>📞 <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">+1 302 464 0950</a></p>
                <p>✉️ <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">kleber@ziontechgroup.com</a></p>
              </div>
              
              <div className="flex space-x-3">
                <Link
                  to="/contact"
                  className="flex-1 btn-neon text-center py-2 text-sm font-semibold"
                  onClick={onClose}
                >
                  Contact
                </Link>
                <Link
                  to="/pricing"
                  className="flex-1 glass-card text-cyan-400 hover:text-white text-center py-2 text-sm font-semibold border border-cyan-400/30"
                  onClick={onClose}
                >
                  Pricing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

Sidebar.displayName = 'Sidebar';

export default Sidebar;