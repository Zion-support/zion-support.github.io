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
        { name: 'AI Code Assistant Pro', href: '/ai-code-assistant-pro', icon: CodeBracketIcon },
        { name: 'AI Video Analyzer Pro', href: '/ai-video-analyzer-pro', icon: EyeIcon },
        { name: 'AI Translator Pro', href: '/ai-translator-pro', icon: GlobeAltIcon },
        { name: 'AI Personalization Engine Pro', href: '/ai-personalization-engine-pro', icon: CpuChipIcon },
        { name: 'AI Voice Synthesizer Pro', href: '/ai-voice-synthesizer-pro', icon: ChatBubbleLeftRightIcon },
        { name: 'AI Data Scientist Pro', href: '/ai-data-scientist-pro', icon: ChartBarIcon },
        { name: 'AI Quality Assurance Pro', href: '/ai-quality-assurance-pro', icon: ShieldCheckIcon },
        { name: 'AI Knowledge Graph Pro', href: '/ai-knowledge-graph-pro', icon: CpuChipIcon },
        { name: 'AI Recommendation Engine Pro', href: '/ai-recommendation-engine-pro', icon: CpuChipIcon },
        { name: 'AI Anomaly Detector Pro', href: '/ai-anomaly-detector-pro', icon: ShieldCheckIcon },
        { name: 'Data Analytics', href: '/data-analytics', icon: ChartBarIcon }
      ]
    },
    {
      name: 'Micro SaaS',
      href: '/micro-saas-solutions',
      icon: GlobeAltIcon,
      submenu: [
        { name: 'Micro SaaS Overview', href: '/micro-saas-solutions', icon: GlobeAltIcon },
        { name: 'AI Project Manager Pro', href: '/ai-project-manager-pro', icon: CheckCircleIcon },
        { name: 'Smart Invoice Generator Pro', href: '/smart-invoice-generator-pro', icon: DocumentTextIcon },
        { name: 'AI Customer Feedback Analyzer', href: '/ai-customer-feedback-analyzer', icon: ChatBubbleLeftRightIcon },
        { name: 'Smart Contract Manager Pro', href: '/smart-contract-manager-pro', icon: DocumentTextIcon },
        { name: 'AI HR Assistant Pro', href: '/ai-hr-assistant-pro', icon: UserGroupIcon },
        { name: 'Smart Inventory Optimizer Pro', href: '/smart-inventory-optimizer-pro', icon: CircleStackIcon },
        { name: 'AI Social Media Scheduler Pro', href: '/ai-social-media-scheduler-pro', icon: ShareIcon },
        { name: 'Smart Email Marketing Pro', href: '/smart-email-marketing-pro', icon: EnvelopeIcon },
        { name: 'AI Customer Support Pro', href: '/ai-customer-support-pro', icon: ChatBubbleLeftRightIcon },
        { name: 'Smart Analytics Dashboard Pro', href: '/smart-analytics-dashboard-pro', icon: ChartBarIcon },
        { name: 'AI Workflow Automator Pro', href: '/ai-workflow-automator-pro', icon: CogIcon },
        { name: 'Smart Document Manager Pro', href: '/smart-document-manager-pro', icon: DocumentTextIcon },
        { name: 'AI Expense Tracker Pro', href: '/ai-expense-tracker-pro', icon: CurrencyDollarIcon },
        { name: 'Smart Appointment Scheduler Pro', href: '/smart-appointment-scheduler-pro', icon: CogIcon },
        { name: 'AI Password Manager Pro', href: '/ai-password-manager-pro', icon: ShieldCheckIcon },
        { name: 'Smart Backup Manager Pro', href: '/smart-backup-manager-pro', icon: CircleStackIcon },
        { name: 'AI Monitoring Dashboard Pro', href: '/ai-monitoring-dashboard-pro', icon: ChartBarIcon },
        { name: 'Smart API Manager Pro', href: '/smart-api-manager-pro', icon: CodeBracketIcon },
        { name: 'AI Security Scanner Pro', href: '/ai-security-scanner-pro', icon: ShieldCheckIcon }
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
        { name: 'Edge Computing', href: '/edge-computing', icon: CogIcon },
        { name: 'Quantum Computing', href: '/quantum-computing', icon: CpuChipIcon },
        { name: 'Augmented Reality', href: '/augmented-reality', icon: EyeIcon },
        { name: 'Virtual Reality', href: '/virtual-reality', icon: EyeIcon },
        { name: 'Robotic Process Automation', href: '/robotic-process-automation', icon: CogIcon },
        { name: 'AI Infrastructure & MLOps', href: '/artificial-intelligence-infrastructure', icon: CpuChipIcon },
        { name: 'Cybersecurity Operations', href: '/cybersecurity-operations', icon: ShieldCheckIcon },
        { name: 'Cloud Migration', href: '/cloud-migration', icon: CloudIcon },
        { name: 'Managed IT Services', href: '/managed-it-services', icon: CogIcon }
      ]
    },
    {
      name: 'Resources',
      href: '#',
      icon: DocumentTextIcon,
      submenu: [
        { name: 'Blog', href: '/blog', icon: DocumentTextIcon },
        { name: 'Tutorials', href: '/tutorials', icon: AcademicCapIcon },
        { name: 'Documentation', href: '/docs', icon: DocumentTextIcon },
        { name: 'Case Studies', href: '/case-studies', icon: DocumentTextIcon },
        { name: 'API Documentation', href: '/api-docs', icon: CodeBracketIcon },
        { name: 'Help Center', href: '/help', icon: QuestionMarkCircleIcon }
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
    { name: 'Pricing', href: '/pricing', icon: CurrencyDollarIcon },
    { name: 'Support', href: '/support', icon: QuestionMarkCircleIcon }
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
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

  return (
    <nav className="bg-slate-900/95 backdrop-blur-md border-b border-slate-700 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-transparent to-cyan-900/10"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center group">
              <div className="h-8 w-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 neon-glow">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="ml-2 text-white font-bold text-xl group-hover:text-purple-300 transition-colors">Zion Tech Group</span>
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
                  }}
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 border-b-2 group ${
                    isActive(item.href)
                      ? 'border-purple-500 text-white neon-text'
                      : 'border-transparent text-gray-300 hover:border-purple-300 hover:text-white hover:bg-slate-800/50'
                  }`}
                  aria-expanded={item.submenu ? (item.name === 'AI Services' && isServicesOpen) ||
                    (item.name === 'Micro SaaS' && isSolutionsOpen) ||
                    (item.name === 'IT Solutions' && isResourcesOpen) ||
                    (item.name === 'Resources' && isResourcesOpen) ||
                    (item.name === 'Company' && isCompanyOpen) : undefined}
                  aria-haspopup={item.submenu ? 'true' : undefined}
                >
                  <item.icon className="w-4 h-4" aria-hidden="true" />
                  <span>{item.name}</span>
                  {item.submenu && <ChevronDownIcon className="w-4 h-4" aria-hidden="true" />}
                </Link>
                {/* Dropdown Menu */}
                {item.submenu && (
                  <div 
                    className={`absolute left-0 mt-2 w-56 glass-card rounded-lg shadow-lg py-2 z-50 border border-slate-700 neon-border-animated ${
                      (item.name === 'AI Services' && isServicesOpen) ||
                      (item.name === 'Micro SaaS' && isSolutionsOpen) ||
                      (item.name === 'IT Solutions' && isResourcesOpen) ||
                      (item.name === 'Resources' && isResourcesOpen) ||
                      (item.name === 'Company' && isCompanyOpen)
                        ? 'block' : 'hidden'
                    }`}
                    role="menu"
                    aria-label={`${item.name} submenu`}
                  >
                    {item.submenu.map((subItem) => (
                      <div key={subItem.name} role="none">
                        <Link
                          to={subItem.href}
                          className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-slate-700/50 hover:text-white transition-all duration-300 group"
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
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-slate-700/50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500 transition-all duration-300 neon-border"
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
