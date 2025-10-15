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
        { name: 'AI Content Generator Pro', href: '/ai-content-generator', icon: DocumentTextIcon, featured: true },
        { name: 'AI CRM Optimizer', href: '/ai-crm-optimizer', icon: UserGroupIcon, featured: true },
        { name: 'AI Data Visualizer', href: '/ai-data-visualizer', icon: ChartBarIcon, featured: true },
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
        { name: 'AI Email Optimizer', href: '/ai-email-optimizer', icon: EnvelopeIcon },
        { name: 'AI Website Analyzer', href: '/ai-website-analyzer', icon: EyeIcon },
        { name: 'AI Social Media Manager', href: '/ai-social-media-manager', icon: ShareIcon },
        { name: 'Data Analytics', href: '/data-analytics', icon: ChartBarIcon }
      ]
    },
    {
      name: 'Micro SaaS',
      href: '/micro-saas-solutions',
      icon: GlobeAltIcon,
      submenu: [
        { name: 'Micro SaaS Overview', href: '/micro-saas-solutions', icon: GlobeAltIcon },
        { name: 'AI Content Generator Pro', href: '/ai-content-generator', icon: DocumentTextIcon, featured: true, price: '$199/mo' },
        { name: 'AI CRM Optimizer', href: '/ai-crm-optimizer', icon: UserGroupIcon, featured: true, price: '$299/mo' },
        { name: 'AI Data Visualizer', href: '/ai-data-visualizer', icon: ChartBarIcon, featured: true, price: '$149/mo' },
        { name: 'Social Media Scheduler Pro', href: '/social-media-scheduler', icon: ShareIcon, featured: true, price: '$49/mo' },
        { name: 'AI Expense Tracker Pro', href: '/expense-tracker-pro', icon: CurrencyDollarIcon, price: '$79/mo' },
        { name: 'AI Inventory Manager', href: '/zion-smart-inventory-manager', icon: CircleStackIcon, price: '$199/mo' },
        { name: 'AI Task Scheduler Pro', href: '/zion-ai-task-scheduler', icon: CheckCircleIcon, price: '$39/mo' },
        { name: 'AI Email Marketing Pro', href: '/zion-ai-email-marketing-pro', icon: EnvelopeIcon, price: '$99/mo' },
        { name: 'AI Customer Support Pro', href: '/zion-ai-customer-support-pro', icon: ChatBubbleLeftRightIcon, price: '$149/mo' },
        { name: 'AI Analytics Dashboard', href: '/zion-smart-analytics-dashboard', icon: ChartBarIcon, price: '$199/mo' },
        { name: 'AI Translation Service Pro', href: '/zion-ai-translation-service', icon: GlobeAltIcon, price: '$79/mo' },
        { name: 'AI Video Generator Pro', href: '/zion-ai-video-generator', icon: EyeIcon, price: '$149/mo' },
        { name: 'Smart CRM Automation', href: '/zion-smart-crm-automation', icon: ChatBubbleLeftRightIcon },
        { name: 'Smart Expense Tracker', href: '/zion-smart-expense-tracker', icon: CurrencyDollarIcon },
        { name: 'AI Code Assistant', href: '/zion-ai-code-assistant', icon: CodeBracketIcon },
        { name: 'AI Legal Assistant', href: '/ai-legal-assistant', icon: ShieldCheckIcon },
        { name: 'AI Medical Assistant', href: '/ai-medical-assistant', icon: UserGroupIcon },
        { name: 'AI Education Tutor', href: '/ai-education-tutor', icon: AcademicCapIcon },
        { name: 'AI Real Estate Analyzer', href: '/ai-real-estate-analyzer', icon: ChartBarIcon },
        { name: 'AI Supply Chain Optimizer', href: '/ai-supply-chain-optimizer', icon: CogIcon }
      ]
    },
    {
      name: 'IT Solutions',
      href: '/it-services',
      icon: CogIcon,
      submenu: [
        { name: 'IT Services Overview', href: '/it-services', icon: CogIcon },
        { name: 'Cloud Infrastructure', href: '/cloud-infrastructure', icon: CloudIcon, featured: true },
        { name: 'Web Development', href: '/web-development', icon: CodeBracketIcon, featured: true },
        { name: 'Mobile App Development', href: '/mobile-development', icon: DevicePhoneMobileIcon, featured: true },
        { name: 'Digital Transformation', href: '/digital-transformation', icon: CogIcon, featured: true },
        { name: 'Database Management', href: '/database-management', icon: CircleStackIcon },
        { name: 'Network Infrastructure', href: '/network-infrastructure', icon: SignalIcon },
        { name: '5G Solutions', href: '/5g-solutions', icon: SignalIcon },
        { name: 'Blockchain Solutions', href: '/blockchain-solutions', icon: ShieldCheckIcon },
        { name: 'IoT Solutions', href: '/iot-solutions', icon: SignalIcon },
        { name: 'DevOps Automation', href: '/devops-automation', icon: CogIcon },
        { name: 'Data Engineering', href: '/data-engineering', icon: CircleStackIcon },
        { name: 'API Development', href: '/api-development', icon: CodeBracketIcon },
        { name: 'Security Audit', href: '/security-audit', icon: ShieldCheckIcon },
        { name: 'Cybersecurity Services', href: '/cybersecurity-services', icon: ShieldCheckIcon },
        { name: 'Cloud Migration', href: '/cloud-migration', icon: CloudIcon },
        { name: 'System Integration', href: '/system-integration', icon: CogIcon },
        { name: 'IT Consulting', href: '/it-consulting', icon: UserGroupIcon },
        { name: 'Managed IT Services', href: '/managed-it-services', icon: CogIcon },
        { name: 'Disaster Recovery', href: '/disaster-recovery', icon: ShieldCheckIcon },
        { name: 'Backup Solutions', href: '/backup-solutions', icon: CircleStackIcon },
        { name: 'Network Security', href: '/network-security', icon: ShieldCheckIcon },
        { name: 'Endpoint Protection', href: '/endpoint-protection', icon: ShieldCheckIcon }
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
        { name: 'Tutorials', href: '/tutorials', icon: AcademicCapIcon },
        { name: 'Webinars', href: '/webinars', icon: EyeIcon },
        { name: 'White Papers', href: '/white-papers', icon: DocumentTextIcon },
        { name: 'E-books', href: '/ebooks', icon: DocumentTextIcon },
        { name: 'Video Library', href: '/video-library', icon: EyeIcon },
        { name: 'FAQ', href: '/faq', icon: QuestionMarkCircleIcon },
        { name: 'Accessibility', href: '/accessibility', icon: ShieldCheckIcon },
        { name: 'Status Page', href: '/status', icon: CheckCircleIcon }
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
        { name: 'Contact', href: '/contact', icon: PhoneIcon },
        { name: 'News & Press', href: '/news', icon: DocumentTextIcon },
        { name: 'Investor Relations', href: '/investors', icon: CurrencyDollarIcon },
        { name: 'Sustainability', href: '/sustainability', icon: GlobeAltIcon },
        { name: 'Diversity & Inclusion', href: '/diversity', icon: UserGroupIcon },
        { name: 'Leadership', href: '/leadership', icon: UserGroupIcon }
      ]
    },
    {
      name: 'Zion AI Tools',
      href: '#',
      icon: CpuChipIcon,
      submenu: [
        { name: 'AI Content Moderator', href: '/zion-ai-content-moderator', icon: ShieldCheckIcon, price: '$99/mo' },
        { name: 'AI Customer Support Pro', href: '/zion-ai-customer-support-pro', icon: ChatBubbleLeftRightIcon, price: '$149/mo' },
        { name: 'AI Workflow Automator Pro', href: '/zion-ai-workflow-automator-pro', icon: CogIcon, price: '$199/mo' },
        { name: 'AI Email Marketing Pro', href: '/zion-ai-email-marketing-pro', icon: EnvelopeIcon, price: '$99/mo' },
        { name: 'AI Sales Predictor', href: '/zion-ai-sales-predictor', icon: ChartBarIcon, price: '$299/mo' },
        { name: 'AI Financial Forecaster', href: '/zion-ai-financial-forecaster', icon: CurrencyDollarIcon, price: '$399/mo' },
        { name: 'AI Document Analyzer', href: '/zion-ai-document-analyzer', icon: DocumentTextIcon, price: '$149/mo' },
        { name: 'AI Task Scheduler', href: '/zion-ai-task-scheduler', icon: CogIcon, price: '$39/mo' },
        { name: 'AI Translation Service', href: '/zion-ai-translation-service', icon: GlobeAltIcon, price: '$79/mo' },
        { name: 'AI Video Generator', href: '/zion-ai-video-generator', icon: EyeIcon, price: '$149/mo' },
        { name: 'AI Code Assistant', href: '/zion-ai-code-assistant', icon: CodeBracketIcon, price: '$199/mo' },
        { name: 'AI Meeting Transcriber', href: '/zion-ai-meeting-transcriber', icon: DocumentTextIcon, price: '$79/mo' },
        { name: 'AI Voice Synthesis', href: '/zion-ai-voice-synthesis', icon: ChatBubbleLeftRightIcon, price: '$99/mo' },
        { name: 'AI Image Generator', href: '/zion-ai-image-generator', icon: EyeIcon, price: '$149/mo' },
        { name: 'AI Website Analyzer', href: '/zion-ai-website-analyzer', icon: EyeIcon, price: '$79/mo' }
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
                          className="flex items-center justify-between px-4 py-2 text-sm text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-300 transition-all duration-300 group"
                        >
                          <div className="flex items-center">
                            <subItem.icon className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                            <span className="group-hover:text-white transition-colors">{subItem.name}</span>
                            {(subItem as any).featured && (
                              <span className="ml-2 px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded-full">Featured</span>
                            )}
                          </div>
                          {(subItem as any).price && (
                            <span className="text-cyan-400 text-xs font-medium">{(subItem as any).price}</span>
                          )}
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
