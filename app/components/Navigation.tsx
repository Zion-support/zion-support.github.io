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
}

const Navigation: React.FC<NavigationProps> = ({ onSidebarToggle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const [isEnterpriseOpen, setIsEnterpriseOpen] = useState(false);
  const [isZionAIOpen, setIsZionAIOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/', icon: HomeIcon },
    { name: 'About', href: '/about', icon: InformationCircleIcon },
    {
      name: 'AI Services',
      href: '/ai-services',
      icon: CpuChipIcon,
      submenu: [
        { name: 'AI Services Overview', href: '/ai-services', icon: CpuChipIcon },
        { name: 'AI Solutions', href: '/ai-solutions', icon: CpuChipIcon },
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
        { name: 'AI Legal Assistant', href: '/ai-legal-assistant', icon: ShieldCheckIcon },
        { name: 'AI Medical Assistant', href: '/ai-medical-assistant', icon: UserGroupIcon },
        { name: 'AI Education Tutor', href: '/ai-education-tutor', icon: AcademicCapIcon },
        { name: 'AI Real Estate Analyzer', href: '/ai-real-estate-analyzer', icon: ChartBarIcon },
        { name: 'AI Supply Chain Optimizer', href: '/ai-supply-chain-optimizer', icon: CogIcon },
        { name: 'AI 3D Model Generator', href: '/ai-3d-model-generator', icon: EyeIcon },
        { name: 'AI Audio Processor', href: '/ai-audio-processor', icon: ChatBubbleLeftRightIcon },
        { name: 'Data Analytics', href: '/data-analytics', icon: ChartBarIcon }
      ]
    },
    {
      name: 'Micro SaaS',
      href: '/micro-saas-solutions',
      icon: GlobeAltIcon,
      submenu: [
        { name: 'Micro SaaS Overview', href: '/micro-saas-solutions', icon: GlobeAltIcon },
        { name: 'Task Manager Pro', href: '/task-manager-pro', icon: CheckCircleIcon },
        { name: 'Analytics Dashboard', href: '/analytics-dashboard', icon: ChartBarIcon },
        { name: 'Customer Support Hub', href: '/customer-support-hub', icon: ChatBubbleLeftRightIcon },
        { name: 'Inventory Manager', href: '/inventory-manager', icon: CircleStackIcon },
        { name: 'AI Meeting Transcriber', href: '/zion-ai-meeting-transcriber', icon: ChatBubbleLeftRightIcon },
        { name: 'AI Customer Satisfaction Monitor', href: '/zion-customer-satisfaction-monitor', icon: UserGroupIcon },
        { name: 'AI Inventory Optimizer', href: '/zion-ai-inventory-optimizer-pro', icon: CircleStackIcon },
        { name: 'AI Email Marketing Automation', href: '/zion-ai-email-marketing-pro', icon: EnvelopeIcon },
        { name: 'AI Workflow Automation', href: '/zion-ai-workflow-automator-pro', icon: CogIcon },
        { name: 'AI Social Media Scheduler', href: '/zion-ai-social-scheduler-pro', icon: ShareIcon },
        { name: 'AI Video Generator', href: '/zion-ai-video-generator', icon: EyeIcon },
        { name: 'AI Translation Service', href: '/zion-ai-translation-service', icon: GlobeAltIcon },
        { name: 'Smart Analytics Dashboard', href: '/zion-smart-analytics-dashboard', icon: ChartBarIcon },
        { name: 'Smart CRM Automation', href: '/zion-smart-crm-automation', icon: ChatBubbleLeftRightIcon },
        { name: 'Smart Inventory Manager', href: '/zion-smart-inventory-manager', icon: CircleStackIcon },
        { name: 'Smart Expense Tracker', href: '/zion-smart-expense-tracker', icon: CurrencyDollarIcon },
        { name: 'Task Manager Pro', href: '/task-manager-pro', icon: CheckCircleIcon },
        { name: 'Social Media Scheduler', href: '/social-media-scheduler', icon: ShareIcon },
        { name: 'Expense Tracker Pro', href: '/expense-tracker-pro', icon: CurrencyDollarIcon }
      ]
    },
    {
      name: 'IT Solutions',
      href: '/it-solutions',
      icon: CogIcon,
      submenu: [
        { name: 'IT Solutions Overview', href: '/it-solutions', icon: CogIcon },
        { name: 'IT Services', href: '/it-services', icon: CogIcon },
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
        { name: 'Augmented Reality', href: '/augmented-reality-solutions', icon: EyeIcon },
        { name: 'Virtual Reality', href: '/virtual-reality-solutions', icon: EyeIcon },
        { name: 'Robotic Process Automation', href: '/robotic-process-automation', icon: CogIcon },
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
        { name: 'AI Video Generator', href: '/zion-ai-video-generator', icon: EyeIcon },
        { name: 'AI Meeting Transcriber', href: '/zion-ai-meeting-transcriber', icon: ChatBubbleLeftRightIcon },
        { name: 'AI Customer Satisfaction Monitor', href: '/zion-customer-satisfaction-monitor', icon: UserGroupIcon },
        { name: 'AI Inventory Optimizer Pro', href: '/zion-ai-inventory-optimizer-pro', icon: CircleStackIcon },
        { name: 'AI Social Scheduler Pro', href: '/zion-ai-social-scheduler-pro', icon: ShareIcon },
        { name: 'AI Code Assistant', href: '/zion-ai-code-assistant', icon: CodeBracketIcon },
        { name: 'AI Voice Assistant', href: '/zion-ai-voice-assistant', icon: ChatBubbleLeftRightIcon },
        { name: 'AI Image Generator', href: '/zion-ai-image-generator', icon: EyeIcon },
        { name: 'AI Voice Synthesis', href: '/zion-ai-voice-synthesis', icon: ChatBubbleLeftRightIcon },
        { name: 'AI Website Analyzer', href: '/zion-ai-website-analyzer', icon: EyeIcon },
        { name: 'AI Predictive Analytics', href: '/zion-ai-predictive-analytics', icon: ChartBarIcon }
      ]
    },
    {
      name: 'Enterprise Solutions',
      href: '#',
      icon: ShieldCheckIcon,
      submenu: [
        { name: 'Blockchain Solutions Pro', href: '/blockchain-solutions-pro', icon: ShieldCheckIcon },
        { name: 'IoT Solutions Pro', href: '/iot-solutions-pro', icon: SignalIcon },
        { name: 'DevOps Automation Pro', href: '/devops-automation-pro', icon: CogIcon },
        { name: 'AI Fraud Detection Pro', href: '/ai-fraud-detection-pro', icon: ShieldCheckIcon },
        { name: 'AI Image Recognition Pro', href: '/ai-image-recognition-pro', icon: EyeIcon },
        { name: 'AI Lead Scoring Pro', href: '/ai-lead-scoring-pro', icon: ChartBarIcon },
        { name: 'AI Predictive Maintenance Pro', href: '/ai-predictive-maintenance-pro', icon: CogIcon },
        { name: 'AI Price Optimizer Pro', href: '/ai-price-optimizer-pro', icon: CurrencyDollarIcon },
        { name: 'AI Voice Assistant Pro', href: '/ai-voice-assistant-pro', icon: ChatBubbleLeftRightIcon },
        { name: 'Customer Churn Predictor Pro', href: '/zion-ai-customer-churn-predictor-pro', icon: UserGroupIcon },
        { name: 'Cybersecurity Audit', href: '/zion-cybersecurity-audit', icon: ShieldCheckIcon },
        { name: 'API Development', href: '/zion-api-development', icon: CodeBracketIcon }
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
    setIsEnterpriseOpen(false);
    setIsZionAIOpen(false);
  };

  const toggleSolutionsMenu = () => {
    setIsSolutionsOpen(!isSolutionsOpen);
    setIsServicesOpen(false);
    setIsResourcesOpen(false);
    setIsCompanyOpen(false);
    setIsEnterpriseOpen(false);
    setIsZionAIOpen(false);
  };

  const toggleResourcesMenu = () => {
    setIsResourcesOpen(!isResourcesOpen);
    setIsServicesOpen(false);
    setIsSolutionsOpen(false);
    setIsCompanyOpen(false);
    setIsEnterpriseOpen(false);
    setIsZionAIOpen(false);
  };

  const toggleCompanyMenu = () => {
    setIsCompanyOpen(!isCompanyOpen);
    setIsServicesOpen(false);
    setIsSolutionsOpen(false);
    setIsResourcesOpen(false);
    setIsEnterpriseOpen(false);
    setIsZionAIOpen(false);
  };

  const toggleEnterpriseMenu = () => {
    setIsEnterpriseOpen(!isEnterpriseOpen);
    setIsServicesOpen(false);
    setIsSolutionsOpen(false);
    setIsResourcesOpen(false);
    setIsCompanyOpen(false);
    setIsZionAIOpen(false);
  };

  const toggleZionAIMenu = () => {
    setIsZionAIOpen(!isZionAIOpen);
    setIsServicesOpen(false);
    setIsSolutionsOpen(false);
    setIsResourcesOpen(false);
    setIsCompanyOpen(false);
    setIsEnterpriseOpen(false);
  };

  return (
    <nav className="bg-slate-900/95 backdrop-blur-lg border-b border-cyan-500/30 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5"></div>
      <div className="absolute inset-0 opacity-30">
        <div className="cyber-grid"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center group">
              <div className="h-8 w-8 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform neon-glow">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="ml-2 text-white font-bold text-xl group-hover:text-cyan-300 transition-colors holographic-text">Zion Tech Group</span>
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
                    else if (item.name === 'Zion AI Tools') toggleCompanyMenu();
                  }}
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 border-b-2 group hover:scale-105 ${
                    isActive(item.href)
                      ? 'border-cyan-500 text-cyan-300 neon-glow'
                      : 'border-transparent text-gray-300 hover:border-cyan-300 hover:text-cyan-300 hover:shadow-lg hover:shadow-cyan-500/25'
                  }`}
                >
                  <item.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span className="ml-2">{item.name}</span>
                  {item.submenu && <ChevronDownIcon className="w-4 h-4 ml-1 group-hover:rotate-180 transition-transform" />}
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
                      (item.name === 'Zion AI Tools' && isCompanyOpen)
                        ? 'block' : 'hidden'
                    }`}
                    role="menu"
                    aria-label={`${item.name} submenu`}
                  >
                    {item.submenu.map((subItem) => (
                      <div key={subItem.name} role="none">
                        <Link
                          to={subItem.href}
                          className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-300 transition-all duration-300 group"
                        >
                          <subItem.icon className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span className="group-hover:text-white transition-colors">{subItem.name}</span>
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
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-cyan-300 hover:bg-cyan-500/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500 transition-all duration-300 neon-glow"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6 hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
