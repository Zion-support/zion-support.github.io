import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import {
  Bars3Icon,
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
  ChevronDownIcon,
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
  CheckCircleIcon
} from '@heroicons/react/24/outline';

interface NavigationProps {
  onSidebarToggle?: () => void;
  sidebarOpen?: boolean;
}

const Navigation: React.FC<NavigationProps> = ({ onSidebarToggle, sidebarOpen = false }) => {
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
      name: 'AI Services',
      href: '/ai-solutions',
      icon: CpuChipIcon,
      submenu: [
        { name: 'AI Solutions Overview', href: '/ai-solutions', icon: CpuChipIcon },
        { name: 'AI Services', href: '/ai-services', icon: CpuChipIcon },
        { name: 'AI Chatbot Builder', href: '/ai-chatbot-builder', icon: ChatBubbleLeftRightIcon },
        { name: 'AI Document Processor', href: '/ai-document-processor', icon: DocumentTextIcon },
        { name: 'AI Form Builder', href: '/ai-form-builder', icon: DocumentTextIcon },
        { name: 'AI Voice Assistant', href: '/ai-voice-assistant', icon: ChatBubbleLeftRightIcon },
        { name: 'AI Fraud Detection', href: '/ai-fraud-detection', icon: ShieldCheckIcon },
        { name: 'AI Image Recognition', href: '/ai-image-recognition', icon: EyeIcon },
        { name: 'AI Lead Scoring', href: '/ai-lead-scoring', icon: ChartBarIcon },
        { name: 'AI Predictive Maintenance', href: '/ai-predictive-maintenance', icon: CogIcon },
        { name: 'AI Price Optimizer', href: '/ai-price-optimizer', icon: CurrencyDollarIcon },
        { name: 'AI Scheduling Assistant', href: '/ai-scheduling-assistant', icon: CogIcon },
        { name: 'AI Content Generator', href: '/ai-content-generator', icon: DocumentTextIcon },
        { name: 'AI CRM Optimizer', href: '/ai-crm-optimizer', icon: UserGroupIcon },
        { name: 'AI Data Visualizer', href: '/ai-data-visualizer', icon: ChartBarIcon },
        { name: 'AI Email Optimizer', href: '/ai-email-optimizer', icon: EnvelopeIcon },
        { name: 'AI Website Analyzer', href: '/ai-website-analyzer', icon: EyeIcon },
        { name: 'AI Social Media Manager', href: '/ai-social-media-manager', icon: ShareIcon },
        { name: 'AI Project Manager', href: '/ai-project-manager', icon: CogIcon },
        { name: 'AI Customer Support', href: '/ai-customer-support-chatbot', icon: ChatBubbleLeftRightIcon },
        { name: 'AI Analytics Dashboard', href: '/ai-analytics-dashboard', icon: ChartBarIcon },
        { name: 'AI Email Marketing', href: '/ai-email-marketing-automation', icon: EnvelopeIcon },
        { name: 'AI Social Media Pro', href: '/ai-social-media-manager-pro', icon: ShareIcon },
        { name: 'Data Analytics', href: '/data-analytics', icon: ChartBarIcon }
      ]
    },
    {
      name: 'Micro SaaS',
      href: '/micro-saas-solutions',
      icon: GlobeAltIcon,
      submenu: [
        { name: 'Micro SaaS Overview', href: '/micro-saas-solutions', icon: GlobeAltIcon },
        { name: 'Smart Analytics Dashboard', href: '/zion-smart-analytics-dashboard', icon: ChartBarIcon },
        { name: 'Smart CRM Automation', href: '/zion-smart-crm-automation', icon: ChatBubbleLeftRightIcon },
        { name: 'Smart Inventory Manager', href: '/zion-smart-inventory-manager', icon: CircleStackIcon },
        { name: 'Smart Expense Tracker', href: '/zion-smart-expense-tracker', icon: CurrencyDollarIcon },
        { name: 'Task Manager Pro', href: '/task-manager-pro', icon: CheckCircleIcon },
        { name: 'Analytics Dashboard', href: '/analytics-dashboard', icon: ChartBarIcon },
        { name: 'Customer Support Hub', href: '/customer-support-hub', icon: ChatBubbleLeftRightIcon },
        { name: 'Inventory Manager', href: '/inventory-manager', icon: CircleStackIcon },
        { name: 'Social Media Scheduler', href: '/social-media-scheduler', icon: ShareIcon },
        { name: 'Expense Tracker Pro', href: '/expense-tracker-pro', icon: CurrencyDollarIcon },
        { name: 'AI Code Assistant', href: '/ai-code-assistant', icon: CodeBracketIcon },
        { name: 'AI Translator', href: '/ai-translator', icon: GlobeAltIcon },
        { name: 'AI Video Generator', href: '/ai-video-generator', icon: EyeIcon },
        { name: 'AI Audio Processor', href: '/ai-audio-processor', icon: ChatBubbleLeftRightIcon },
        { name: 'AI 3D Model Generator', href: '/ai-3d-model-generator', icon: EyeIcon },
        { name: 'AI Legal Assistant', href: '/ai-legal-assistant', icon: ShieldCheckIcon },
        { name: 'AI Medical Assistant', href: '/ai-medical-assistant', icon: UserGroupIcon },
        { name: 'AI Education Tutor', href: '/ai-education-tutor', icon: AcademicCapIcon },
        { name: 'AI Real Estate Analyzer', href: '/ai-real-estate-analyzer', icon: ChartBarIcon },
        { name: 'AI Supply Chain Optimizer', href: '/ai-supply-chain-optimizer', icon: CogIcon }
      ]
    },
    {
      name: 'IT Solutions',
      href: '/it-solutions',
      icon: CogIcon,
      submenu: [
        { name: 'IT Solutions Overview', href: '/it-solutions', icon: CogIcon },
        { name: 'Cloud Infrastructure', href: '/cloud-infrastructure', icon: CloudIcon },
        { name: 'Web Development', href: '/web-development', icon: CodeBracketIcon },
        { name: 'Mobile App Development', href: '/mobile-development', icon: DevicePhoneMobileIcon },
        { name: 'Database Management', href: '/database-management', icon: CircleStackIcon },
        { name: 'Network Infrastructure', href: '/network-infrastructure', icon: SignalIcon },
        { name: '5G Solutions', href: '/5g-solutions', icon: SignalIcon },
        { name: 'Digital Transformation', href: '/digital-transformation', icon: CogIcon },
        { name: 'Blockchain Solutions', href: '/blockchain-solutions', icon: ShieldCheckIcon },
        { name: 'IoT Solutions', href: '/iot-solutions', icon: SignalIcon },
        { name: 'DevOps Automation', href: '/devops-automation', icon: CogIcon },
        { name: 'Data Engineering', href: '/data-engineering', icon: CircleStackIcon },
        { name: 'API Development', href: '/api-development', icon: CodeBracketIcon },
        { name: 'Security Audit', href: '/security-audit', icon: ShieldCheckIcon },
        { name: 'Quantum Computing', href: '/quantum-computing-solutions', icon: CpuChipIcon },
        { name: 'Edge Computing', href: '/edge-computing-solutions', icon: CloudIcon },
        { name: 'AR Solutions', href: '/augmented-reality-solutions', icon: EyeIcon },
        { name: 'VR Solutions', href: '/virtual-reality-solutions', icon: EyeIcon },
        { name: 'RPA Solutions', href: '/robotic-process-automation', icon: CogIcon },
        { name: 'Low-Code Platform', href: '/low-code-platform', icon: CodeBracketIcon },
        { name: 'Serverless Architecture', href: '/serverless-architecture', icon: CloudIcon },
        { name: 'Container Orchestration', href: '/container-orchestration', icon: CircleStackIcon },
        { name: 'AI Infrastructure', href: '/ai-infrastructure', icon: CpuChipIcon },
        { name: 'Data Lake Solutions', href: '/data-lake-solutions', icon: CircleStackIcon }
      ]
    },
    {
      name: 'Resources',
      href: '#',
      icon: DocumentTextIcon,
      submenu: [
        { name: 'Blog', href: '/blog', icon: DocumentTextIcon },
        { name: 'Case Studies', href: '/case-studies', icon: DocumentTextIcon },
        { name: 'API Documentation', href: '/api-docs', icon: CodeBracketIcon },
        { name: 'Help Center', href: '/help', icon: QuestionMarkCircleIcon },
        { name: 'Accessibility', href: '/accessibility', icon: ShieldCheckIcon }
      ]
    },
    {
      name: 'Company',
      href: '#',
      icon: UserGroupIcon,
      submenu: [
        { name: 'About Us', href: '/about', icon: InformationCircleIcon },
        { name: 'Our Team', href: '/team', icon: UserGroupIcon },
        { name: 'Careers', href: '/careers', icon: UserGroupIcon },
        { name: 'Partnerships', href: '/partnerships', icon: UserPlusIcon },
        { name: 'Contact', href: '/contact', icon: PhoneIcon }
      ]
    },
    {
      name: 'Zion AI Tools',
      href: '#',
      icon: CpuChipIcon,
      submenu: [
        { name: 'AI Content Moderator', href: '/zion-ai-content-moderator', icon: ShieldCheckIcon },
        { name: 'AI Customer Support Pro', href: '/zion-ai-customer-support-pro', icon: ChatBubbleLeftRightIcon },
        { name: 'AI Workflow Automator Pro', href: '/zion-ai-workflow-automator-pro', icon: CogIcon },
        { name: 'AI Email Marketing Pro', href: '/zion-ai-email-marketing-pro', icon: EnvelopeIcon },
        { name: 'AI Sales Predictor', href: '/zion-ai-sales-predictor', icon: ChartBarIcon },
        { name: 'AI Financial Forecaster', href: '/zion-ai-financial-forecaster', icon: CurrencyDollarIcon },
        { name: 'AI Document Analyzer', href: '/zion-ai-document-analyzer', icon: DocumentTextIcon },
        { name: 'AI Task Scheduler', href: '/zion-ai-task-scheduler', icon: CogIcon },
        { name: 'AI Translation Service', href: '/zion-ai-translation-service', icon: GlobeAltIcon },
        { name: 'AI Video Generator', href: '/zion-ai-video-generator', icon: EyeIcon }
      ]
    },
    { name: 'Pricing', href: '/pricing', icon: CurrencyDollarIcon },
    { name: 'Support', href: '/help', icon: QuestionMarkCircleIcon }
  ];

  const isActive = (path: string) => {
    try {
      return location.pathname === path;
    } catch (error) {
      // Fallback for SSR or if location is undefined
      return false;
    }
  };

  const toggleServicesMenu = () => {
    setIsServicesOpen(!isServicesOpen);
    setIsSolutionsOpen(false);
    setIsResourcesOpen(false);
    setIsCompanyOpen(false);
  };

  const toggleSolutionsMenu = () => {
    setIsSolutionsOpen(!isSolutionsOpen);
    setIsServicesOpen(false);
    setIsResourcesOpen(false);
    setIsCompanyOpen(false);
  };

  const toggleResourcesMenu = () => {
    setIsResourcesOpen(!isResourcesOpen);
    setIsServicesOpen(false);
    setIsSolutionsOpen(false);
    setIsCompanyOpen(false);
  };

  const toggleCompanyMenu = () => {
    setIsCompanyOpen(!isCompanyOpen);
    setIsServicesOpen(false);
    setIsSolutionsOpen(false);
    setIsResourcesOpen(false);
  };

  const closeAllMenus = () => {
    setIsServicesOpen(false);
    setIsSolutionsOpen(false);
    setIsResourcesOpen(false);
    setIsCompanyOpen(false);
  };

  return (
    <nav className="bg-slate-900 border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <div className="h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="ml-2 text-white font-bold text-xl">Zion Tech Group</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                <Link
                  to={item.href}
                  onClick={() => {
                    if (item.name === 'AI Services') toggleServicesMenu();
                    else if (item.name === 'Micro SaaS') toggleSolutionsMenu();
                    else if (item.name === 'IT Solutions') toggleResourcesMenu();
                    else if (item.name === 'Resources') toggleResourcesMenu();
                    else if (item.name === 'Company') toggleCompanyMenu();
                    else if (item.name === 'Zion AI Tools') toggleSolutionsMenu();
                    else closeAllMenus();
                  }}
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors border-b-2 ${
                    isActive(item.href)
                      ? 'border-blue-500 text-white'
                      : 'border-transparent text-gray-300 hover:border-gray-300 hover:text-white'
                  }`}
                  aria-expanded={item.submenu ? (item.name === 'AI Services' && isServicesOpen) ||
                    (item.name === 'Micro SaaS' && isSolutionsOpen) ||
                    (item.name === 'IT Solutions' && isResourcesOpen) ||
                    (item.name === 'Resources' && isResourcesOpen) ||
                    (item.name === 'Company' && isCompanyOpen) ||
                    (item.name === 'Zion AI Tools' && isSolutionsOpen) : undefined}
                  aria-haspopup={item.submenu ? 'true' : undefined}
                >
                  <item.icon className="w-4 h-4" aria-hidden="true" />
                  <span>{item.name}</span>
                  {item.submenu && <ChevronDownIcon className="w-4 h-4" aria-hidden="true" />}
                </Link>
                {/* Dropdown Menu */}
                {item.submenu && (
                  <div 
                    className={`absolute left-0 mt-2 w-56 bg-slate-800 rounded-lg shadow-lg py-2 z-50 border border-slate-700 ${
                      (item.name === 'AI Services' && isServicesOpen) ||
                      (item.name === 'Micro SaaS' && isSolutionsOpen) ||
                      (item.name === 'IT Solutions' && isResourcesOpen) ||
                      (item.name === 'Resources' && isResourcesOpen) ||
                      (item.name === 'Company' && isCompanyOpen) ||
                      (item.name === 'Zion AI Tools' && isSolutionsOpen)
                        ? 'block' : 'hidden'
                    }`}
                    role="menu"
                    aria-label={`${item.name} submenu`}
                  >
                    {item.submenu.map((subItem) => (
                      <div key={subItem.name} role="none">
                        <Link
                          to={subItem.href}
                          className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-slate-700 hover:text-white"
                          role="menuitem"
                        >
                          <subItem.icon className="w-4 h-4 mr-3" aria-hidden="true" />
                          <span>{subItem.name}</span>
                        </Link>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={onSidebarToggle}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-label="Toggle navigation menu"
              aria-expanded={sidebarOpen}
              aria-controls="mobile-menu"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
