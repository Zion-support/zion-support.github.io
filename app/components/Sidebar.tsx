import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
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
  DocumentMagnifyingGlassIcon,
  ChevronDownIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const location = useLocation();
  const [expandedSections, setExpandedSections] = React.useState<string[]>([]);

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

  const toggleSection = (sectionName: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionName) 
        ? prev.filter(name => name !== sectionName)
        : [...prev, sectionName]
    );
  };

  const isExpanded = (sectionName: string) => {
    return expandedSections.includes(sectionName);
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
              Zion Tech Group
            </Link>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 lg:hidden"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto py-4">
            <div className="px-4 space-y-1">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.submenu ? (
                    <div>
                      <button
                        onClick={() => toggleSection(item.name)}
                        className={`w-full flex items-center justify-between px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                          isActive(item.href)
                            ? 'bg-purple-100 text-purple-600'
                            : 'text-gray-700 hover:bg-gray-100 hover:text-purple-600'
                        }`}
                      >
                        <div className="flex items-center">
                          <item.icon className="w-5 h-5 mr-3" />
                          {item.name}
                        </div>
                        {isExpanded(item.name) ? (
                          <ChevronDownIcon className="w-4 h-4" />
                        ) : (
                          <ChevronRightIcon className="w-4 h-4" />
                        )}
                      </button>
                      {isExpanded(item.name) && (
                        <div className="ml-8 space-y-1 mt-1">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className={`flex items-center px-3 py-2 text-sm rounded-md transition-colors ${
                                isActive(subItem.href)
                                  ? 'bg-purple-50 text-purple-600'
                                  : 'text-gray-600 hover:bg-gray-50 hover:text-purple-600'
                              }`}
                              onClick={onClose}
                            >
                              <subItem.icon className="w-4 h-4 mr-3" />
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className={`flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                        isActive(item.href)
                          ? 'bg-purple-100 text-purple-600'
                          : 'text-gray-700 hover:bg-gray-100 hover:text-purple-600'
                      }`}
                      onClick={onClose}
                    >
                      <item.icon className="w-5 h-5 mr-3" />
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-gray-200">
            <div className="text-center">
              <p className="text-sm text-gray-500 mb-2">
                Ready to get started?
              </p>
              <Link
                to="/contact"
                className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-4 py-2 rounded-lg font-medium hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 block text-center"
                onClick={onClose}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;