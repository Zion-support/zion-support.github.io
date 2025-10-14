<<<<<<< HEAD
import React, { useState, useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { X, Brain, Shield, Zap, Globe, Home, Mail, Phone } from 'lucide-react';
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-54ad
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
  ChevronDownIcon,
  GlobeAltIcon,
  CloudIcon,
  CpuChipIcon,
  SignalIcon,
  UserGroupIcon
<<<<<<< HEAD
} from '@heroicons/react/24/outline";
interface SidebarProps {isOpen: boolean;
  onClose: () => void}
>>>>>>> origin/main
>>>>>>> origin/main

  ];

  const additionalLinks = [
    { name: "Privacy Policy", href: "/privacy", icon: ShieldCheckIcon },
    { name: "Terms of Service", href: "/terms", icon: DocumentTextIcon },
    { name: "Our Team", href: "/team", icon: UserGroupIcon },
    { name: "Documentation", href: "/docs", icon: DocumentTextIcon },
    { name: "Careers", href: "/careers", icon: BriefcaseIcon }
  ];

  const aiServices = [
    { name: 'AI Analytics', href: '/ai-analytics' },
    { name: 'AI Automation', href: '/ai-automation-platform' },
    { name: 'AI Content Generation', href: '/ai-content-generation' },
    { name: 'AI Customer Support', href: '/ai-customer-support' },
    { name: 'AI Cybersecurity', href: '/ai-cybersecurity' },
    { name: 'AI Data Analytics', href: '/ai-data-analytics' },
  ];

  const itServices = [
    { name: 'Cloud Migration', href: '/cloud-migration' },
    { name: 'DevOps Services', href: '/devops-services' },
    { name: 'IT Consulting', href: '/it-consulting' },
    { name: 'Network Security', href: '/network-security' },
    { name: 'Software Development', href: '/software-development' },
    { name: 'Web Development', href: '/web-development' },
  ];

  const microSaasServices = [
    { name: 'Project Management Pro', href: '/project-management-pro' },
    { name: 'AI CRM Pro', href: '/zion-ai-crm-pro' },
    { name: 'Inventory Smart', href: '/zion-inventory-smart' },
    { name: 'Financial Analytics Pro', href: '/ai-financial-analytics-pro' },
    { name: 'Performance Monitor', href: '/zion-performance-monitor' },
    { name: 'Email Automation', href: '/zion-email-automation' },
  ];

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 z-50 md:hidden">
        <div className="fixed inset-0 bg-black/50" onClick={onClose} />
        <div className="fixed top-0 right-0 h-full w-80 bg-slate-900/95 backdrop-blur-md border-l border-cyan-500/20 overflow-y-auto">
          <div className="flex items-center justify-between p-4 border-b border-cyan-500/20">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-semibold text-white">Zion Tech Group</span>
            </div>
=======

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const location = useLocation();

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {const location = useLocation()
  const [expandedItems, setExpandedItems] = useState<string[]>([])
  const isActive = (path: string) => {
    return location.pathname === path}
  const toggleExpanded = (item: string) => {
    setExpandedItems(prev => 
      prev.includes(item) 
        ? prev.filter(i => i !== item)
        : [...prev, item]

  const navigation = [
    { name: "Home", href: "/", icon: HomeIcon },
    { name: "About", href: "/about", icon: InformationCircleIcon },
    { 
      name: "Services", 
      href: "/services", 
      icon: BriefcaseIcon,
      submenu: [
>>>>>>> cursor/fix-errors-and-merge-to-main-54ad
      ]
    },
    { name: 'Solutions', href: '/solutions', icon: GlobeAltIcon },'
    { name: 'Case Studies', href: '/case-studies', icon: DocumentTextIcon },'
    { name: 'Blog', href: '/blog', icon: AcademicCapIcon },'
    { name: 'Resources', href: '/resources', icon: PlayIcon },'
    { name: 'FAQ', href: '/faq', icon: QuestionMarkCircleIcon },'
    { name: 'Contact', href: '/contact', icon: PhoneIcon }'
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">"
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose}></div>"
      <div className="relative flex flex-col w-64 h-full bg-slate-900">"
        <div className="flex items-center justify-between p-4 border-b border-slate-700">"
          <span className="text-xl font-bold text-white">Menu</span>"
          <button onClick={onClose} className="text-gray-400 hover:text-white">"
            <XMarkIcon className="w-6 h-6" />"
          </button>
        </div>
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">"
          {navigation.map((link) => (
            <div key={link.name}>
              {link.submenu ? (
                <div>
                  <button
                    onClick={() => toggleExpanded(link.name)
                    className="flex items-center justify-between w-full px-3 py-2 text-gray-300 hover:text-white hover:bg-slate-800 rounded""
                  >
                    <div className="flex items-center">"
                      <link.icon className="w-5 h-5 mr-3" />"
                      {link.name}
                    </div>
                    <ChevronDownIcon 
                      className={`w-4 h-4 transition-transform ${`
                        expandedItems.includes(link.name) ? 'rotate-180' : '''
                      }`} `
                    />
                  </button>
                  {expandedItems.includes(link.name) && (
                    <div className="ml-4 mt-2 space-y-1">"
                      {link.submenu.map((subLink) => (
                        <Link
                          key={subLink.name}
                          to={subLink.href}
                          className={`flex items-center px-3 py-2 text-sm transition-colors ${`
                            isActive(subLink.href)
                              ? 'text-blue-400 bg-blue-900/20''
                              : 'text-gray-400 hover:text-white hover:bg-slate-800''
                          }`}`
                          onClick={onClose}
                        >
                          <subLink.icon className="w-4 h-4 mr-3" />"
                          {subLink.name}
<<<<<<< HEAD
>>>>>>> origin/main
            <button
              onClick={onClose}
              className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="p-4 space-y-6">
            {/* Main Navigation */}
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                Main
              </h3>
              <nav className="space-y-2">
                {mainNavItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={onClose}
                    className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-colors duration-200"
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.name}</span>
                  </Link>
                ))}
              </nav>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                Services
              </h3>
              <nav className="space-y-2">
                {serviceItems.map((item) => (
                  <div key={item.name}>
                    <Link
                      to={item.href}
                      onClick={onClose}
                      className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-colors duration-200"
                    >
                      <item.icon className="w-5 h-5" />
                      <span>{item.name}</span>
                    </Link>
                  </div>
                ))}
              </nav>
            </div>

            {/* AI Services Dropdown */}
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                AI Services
              </h3>
              <nav className="space-y-1">
                {aiServices.map((service) => (
                  <Link
                    key={service.name}
                    to={service.href}
                    onClick={onClose}
                    className="block px-6 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors duration-200"
                  >
                    {service.name}
                  </Link>
                ))}
              </nav>
            </div>

            {/* IT Services Dropdown */}
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                IT Services
              </h3>
              <nav className="space-y-1">
                {itServices.map((service) => (
                  <Link
                    key={service.name}
                    to={service.href}
                    onClick={onClose}
                    className="block px-6 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors duration-200"
                  >
                    {service.name}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Micro SAAS Services Dropdown */}
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                Micro SAAS
              </h3>
              <nav className="space-y-1">
                {microSaasServices.map((service) => (
                  <Link
                    key={service.name}
                    to={service.href}
                    onClick={onClose}
                    className="block px-6 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors duration-200"
                  >
                    {service.name}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div className="pt-6 border-t border-gray-700">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                Contact
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-cyan-400" />
                  <span className="text-sm text-gray-300">contact@ziontechgroup.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-cyan-400" />
                  <span className="text-sm text-gray-300">+1 302 464 0950</span>
                </div>
              </div>
            </div>
          </div>
        </div>
>>>>>>> origin/main
      </div>
    </>
  );
};

<<<<<<< HEAD
export default Sidebar;
    </div>
  )
export default Sidebar;
>>>>>>> origin/main
>>>>>>> origin/main
>>>>>>> origin/main
>>>>>>> origin/main
=======
                        </Link>
                      ))
                    </div>
                  )
                </div>
              ) : (
                <Link
                </Link>
              )
            </div>
        </nav>
const ImprovedSidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const [expandedSections, setExpandedSections] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  // Close sidebar when route changes
  useEffect(() => {
    onClose();
  }, [location, onClose]);

  const toggleSection = (section: string) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const navigationSections = [
    {
      id: 'ai-services',
      title: 'AI Services',
      icon: <Brain className="w-5 h-5" />,
      color: 'from-blue-500 to-cyan-500',
      href: '/ai-services',
      items: [
        { label: 'AI Analytics Dashboard Pro', href: '/ai-analytics-dashboard-pro', icon: <BarChart3 className="w-4 h-4" /> },
        { label: 'AI Cybersecurity Suite Pro', href: '/ai-cybersecurity-suite-pro', icon: <Shield className="w-4 h-4" /> },
        { label: 'AI Content Generation Pro', href: '/ai-content-generation-pro', icon: <FileText className="w-4 h-4" /> },
        { label: 'AI Customer Support Chatbot', href: '/ai-customer-support-chatbot', icon: <MessageSquare className="w-4 h-4" /> },
        { label: 'AI Code Assistant Pro', href: '/ai-code-assistant-pro', icon: <Settings className="w-4 h-4" /> },
        { label: 'AI Business Intelligence Pro', href: '/ai-business-intelligence-pro', icon: <TrendingUp className="w-4 h-4" /> },
        { label: 'AI Automation Platform', href: '/ai-automation-platform', icon: <Zap className="w-4 h-4" /> },
        { label: 'AI Data Analytics Pro', href: '/ai-data-analytics-pro', icon: <BarChart3 className="w-4 h-4" /> },
        { label: 'AI Marketing Automation', href: '/ai-marketing-automation', icon: <TrendingUp className="w-4 h-4" /> },
        { label: 'AI HR & Recruitment Pro', href: '/ai-hr-recruitment-pro', icon: <Users className="w-4 h-4" /> },
        { label: 'AI Financial Analysis', href: '/ai-financial-analysis', icon: <DollarSign className="w-4 h-4" /> },
        { label: 'AI Supply Chain Optimizer', href: '/ai-supply-chain-optimizer', icon: <Globe className="w-4 h-4" /> },
        { label: 'AI Voice Assistant Pro', href: '/ai-voice-assistant-pro', icon: <MessageSquare className="w-4 h-4" /> },
        { label: 'AI Image Recognition Pro', href: '/ai-image-recognition-pro', icon: <Settings className="w-4 h-4" /> },
        { label: 'AI Predictive Maintenance', href: '/ai-predictive-maintenance', icon: <Clock className="w-4 h-4" /> },
        { label: 'AI Sentiment Analysis Pro', href: '/ai-sentiment-analysis-pro', icon: <TrendingUp className="w-4 h-4" /> },
        { label: 'AI Recommendation Engine', href: '/ai-recommendation-engine', icon: <Star className="w-4 h-4" /> },
        { label: 'AI Fraud Detection Pro', href: '/ai-fraud-detection-pro', icon: <Shield className="w-4 h-4" /> },
        { label: 'AI Language Translation', href: '/ai-language-translation', icon: <Globe className="w-4 h-4" /> },
        { label: 'AI Chatbot Enterprise', href: '/ai-chatbot-enterprise', icon: <MessageSquare className="w-4 h-4" /> },
        { label: 'AI Data Mining Pro', href: '/ai-data-mining-pro', icon: <BarChart3 className="w-4 h-4" /> },
        { label: 'AI Video Analysis', href: '/ai-video-analysis', icon: <Play className="w-4 h-4" /> },
        { label: 'AI Time Series Forecasting', href: '/ai-time-series-forecasting', icon: <TrendingUp className="w-4 h-4" /> },
        { label: 'AI NLP Text Analysis', href: '/ai-nlp-text-analysis', icon: <FileText className="w-4 h-4" /> }
      ]
    },
    {
      id: 'it-services',
      title: 'IT Services',
      icon: <Shield className="w-5 h-5" />,
      color: 'from-green-500 to-emerald-500',
      href: '/services',
      items: [
        { label: 'Cloud Infrastructure', href: '/cloud-infrastructure', icon: <Cloud className="w-4 h-4" /> },
        { label: 'Blockchain Development', href: '/blockchain-development', icon: <Settings className="w-4 h-4" /> },
        { label: 'IoT Solutions', href: '/iot-solutions', icon: <Globe className="w-4 h-4" /> },
        { label: 'AR/VR Development', href: '/ar-vr-development', icon: <Settings className="w-4 h-4" /> },
        { label: 'DevOps Solutions', href: '/devops-solutions', icon: <Settings className="w-4 h-4" /> },
        { label: 'Mobile Development', href: '/mobile-development', icon: <Settings className="w-4 h-4" /> },
        { label: 'Web Development', href: '/web-development', icon: <Settings className="w-4 h-4" /> },
        { label: 'IT Support', href: '/it-support', icon: <HelpCircle className="w-4 h-4" /> },
        { label: 'Network Infrastructure', href: '/network-infrastructure', icon: <Globe className="w-4 h-4" /> },
        { label: 'IT Consulting', href: '/it-consulting', icon: <Users className="w-4 h-4" /> },
        { label: 'Cybersecurity Audit', href: '/cybersecurity-audit', icon: <Shield className="w-4 h-4" /> },
        { label: 'Data Center Services', href: '/data-center-services', icon: <Settings className="w-4 h-4" /> },
        { label: 'Asset Management', href: '/asset-management', icon: <BarChart3 className="w-4 h-4" /> }
      ]
    },
    {
      id: 'micro-saas',
      title: 'Micro SAAS',
      icon: <Zap className="w-5 h-5" />,
      color: 'from-purple-500 to-pink-500',
      href: '/micro-saas',
      items: [
        { label: 'Zion Analytics Pro', href: '/zion-analytics-pro', icon: <BarChart3 className="w-4 h-4" /> },
        { label: 'Zion Security Shield', href: '/zion-security-shield', icon: <Shield className="w-4 h-4" /> },
        { label: 'Zion Cloud Vault', href: '/zion-cloud-vault', icon: <Cloud className="w-4 h-4" /> },
        { label: 'Zion AI Inventory Manager', href: '/zion-ai-inventory-manager', icon: <BarChart3 className="w-4 h-4" /> },
        { label: 'Zion HR Assistant Pro', href: '/zion-hr-assistant-pro', icon: <Users className="w-4 h-4" /> },
        { label: 'Zion AI Accounting Suite', href: '/zion-ai-accounting-suite', icon: <DollarSign className="w-4 h-4" /> },
        { label: 'Zion E-commerce Optimizer', href: '/zion-ecommerce-optimizer', icon: <TrendingUp className="w-4 h-4" /> },
        { label: 'Zion AI Customer Insights', href: '/zion-ai-customer-insights', icon: <Users className="w-4 h-4" /> },
        { label: 'Zion AI Lead Scoring', href: '/zion-ai-lead-scoring', icon: <Star className="w-4 h-4" /> },
        { label: 'Zion AI Document Processor', href: '/zion-ai-document-processor', icon: <FileText className="w-4 h-4" /> },
        { label: 'Zion AI Social Listener', href: '/zion-ai-social-listener', icon: <Globe className="w-4 h-4" /> },
        { label: 'Zion AI Email Optimizer', href: '/zion-ai-email-optimizer', icon: <Mail className="w-4 h-4" /> },
        { label: 'Zion AI Meeting Assistant', href: '/zion-ai-meeting-assistant', icon: <Calendar className="w-4 h-4" /> },
        { label: 'Zion AI Expense Tracker', href: '/zion-ai-expense-tracker', icon: <DollarSign className="w-4 h-4" /> },
        { label: 'Zion AI Survey Builder', href: '/zion-ai-survey-builder', icon: <Settings className="w-4 h-4" /> },
        { label: 'Zion AI Chatbot Builder', href: '/zion-ai-chatbot-builder', icon: <MessageSquare className="w-4 h-4" /> },
        { label: 'Zion AI Workflow Automation', href: '/zion-ai-workflow-automation', icon: <Zap className="w-4 h-4" /> },
        { label: 'Zion AI SEO Optimizer', href: '/zion-ai-seo-optimizer', icon: <TrendingUp className="w-4 h-4" /> },
        { label: 'Zion AI Data Warehouse', href: '/zion-ai-data-warehouse', icon: <Cloud className="w-4 h-4" /> },
        { label: 'Zion AI Mobile App Builder', href: '/zion-ai-mobile-app-builder', icon: <Settings className="w-4 h-4" /> },
        { label: 'Zion AI API Manager', href: '/zion-ai-api-manager', icon: <Settings className="w-4 h-4" /> },
        { label: 'Zion AI Backup Manager', href: '/zion-ai-backup-manager', icon: <Cloud className="w-4 h-4" /> },
        { label: 'Zion AI Testing Automation', href: '/zion-ai-testing-automation', icon: <CheckCircle className="w-4 h-4" /> }
      ]
    },
    {
      id: '5g-solutions',
      title: '5G Solutions',
      icon: <Globe className="w-5 h-5" />,
      color: 'from-orange-500 to-red-500',
      href: '/5g-solutions',
      items: [
        { label: '5G Data Analytics', href: '/5g-data-analytics', icon: <BarChart3 className="w-4 h-4" /> },
        { label: '5G Edge Computing', href: '/5g-edge-computing', icon: <Settings className="w-4 h-4" /> },
        { label: '5G Implementation', href: '/5g-implementation', icon: <Settings className="w-4 h-4" /> },
        { label: '5G Mobile Applications', href: '/5g-mobile-applications', icon: <Settings className="w-4 h-4" /> },
        { label: '5G Network Infrastructure', href: '/5g-network-infrastructure', icon: <Globe className="w-4 h-4" /> },
        { label: '5G Private Networks', href: '/5g-private-networks', icon: <Shield className="w-4 h-4" /> },
        { label: '5G Smart City Solutions', href: '/5g-smart-city-solutions', icon: <Globe className="w-4 h-4" /> }
      ]
    }
  ];

  const quickLinks = [
    { label: 'Home', href: '/', icon: <Home className="w-4 h-4" /> },
    { label: 'Pricing', href: '/pricing', icon: <DollarSign className="w-4 h-4" /> },
    { label: 'Demo', href: '/demo', icon: <Play className="w-4 h-4" /> },
    { label: 'Support', href: '/support', icon: <HelpCircle className="w-4 h-4" /> },
    { label: 'Documentation', href: '/docs', icon: <BookOpen className="w-4 h-4" /> },
    { label: 'Blog', href: '/blog', icon: <FileText className="w-4 h-4" /> },
    { label: 'Contact', href: '/contact', icon: <Phone className="w-4 h-4" /> }
  ];

  const companyLinks = [
    { label: 'About Us', href: '/about' },
    { label: 'Our Team', href: '/team' },
    { label: 'Careers', href: '/careers' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'News', href: '/news' },
    { label: 'Press', href: '/press' },
    { label: 'Partners', href: '/partners' }
  ];

  const filteredSections = navigationSections.map(section => ({
    ...section,
    items: section.items.filter(item => 
      item.label.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(section => section.items.length > 0 || searchQuery === '');

  if (!isOpen) return null;
import React from "react";

const Sidebar = () => {
  return (
      </div>
    </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-54ad
