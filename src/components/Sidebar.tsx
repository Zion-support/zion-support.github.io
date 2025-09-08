import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { 
  ChevronRight, 
  ChevronDown,
  Plus,
  Minus,
  Star,
  CheckCircle,
  BookOpen as BookOpenIcon,
  FileText,
  Video,
  GraduationCap,
  Lightbulb,
  Shield as ShieldIcon,
  Lock,
  Eye,
  Heart,
  Zap as ZapIcon
} from 'lucide-react';
import { cn } from '../lib/utils';

interface SidebarItem {
  label: string;
  href: string;
  icon: React.ReactNode;
  children?: SidebarItem[];
}

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const sidebarItems: SidebarItem[] = [
  {
    label: 'Home',
    href: '/',
    icon: <Home className="w-5 h-5" />
  },
  {
    label: 'AI & Machine Learning',
    href: '/services/ai',
    icon: <Brain className="w-5 h-5" />,
    children: [
      { label: 'AI Workflow Orchestrator', href: '/services/ai-workflow-orchestrator', icon: <TrendingUp className="w-4 h-4" /> },
      { label: 'AI Data Governance Platform', href: '/services/ai-data-governance-platform', icon: <Shield className="w-4 h-4" /> },
      { label: 'AI Customer Experience Analytics', href: '/services/ai-customer-experience-analytics', icon: <BarChart3 className="w-4 h-4" /> },
      { label: 'AI Financial Risk Management', href: '/services/ai-financial-risk-management', icon: <DollarSign className="w-4 h-4" /> },
      { label: 'AI Code Review Security Scanner', href: '/services/ai-code-review-security-scanner', icon: <Code className="w-4 h-4" /> },
      { label: 'AI Sales Copilot', href: '/services/ai-sales-copilot', icon: <Users className="w-4 h-4" /> },
      { label: 'AI-Powered SEO', href: '/services/ai-powered-seo', icon: <TrendingUp className="w-4 h-4" /> },
      { label: 'AI Project Management', href: '/services/ai-project-management', icon: <Target className="w-4 h-4" /> },
      { label: 'AI Marketing Automation', href: '/services/ai-marketing-automation-personalization', icon: <Target className="w-4 h-4" /> }
    ]
  },
  {
    label: 'Cloud & Infrastructure',
    href: '/services/cloud-devops',
    icon: <Cloud className="w-5 h-5" />,
    children: [
      { label: 'Cloud DevOps', href: '/services/cloud-devops', icon: <Server className="w-4 h-4" /> },
      { label: 'IT Infrastructure', href: '/services/it-infrastructure', icon: <Building className="w-4 h-4" /> },
      { label: 'FinOps Advisor', href: '/services/finops-advisor', icon: <DollarSign className="w-4 h-4" /> },
      { label: 'Cloud FinOps Optimizer', href: '/services/cloud-finops-optimizer', icon: <BarChart3 className="w-4 h-4" /> }
    ]
  },
  {
    label: 'Cybersecurity & Privacy',
    href: '/services/cybersecurity',
    icon: <Shield className="w-5 h-5" />,
    children: [
      { label: 'AI Cybersecurity Platform', href: '/services/ai-cybersecurity-platform', icon: <Lock className="w-4 h-4" /> },
      { label: 'Security Headers & CSP', href: '/services/security-headers-csp', icon: <Shield className="w-4 h-4" /> },
      { label: 'DSR Privacy Portal', href: '/services/dsr-portal', icon: <Eye className="w-4 h-4" /> },
      { label: 'Zero Trust Network Access', href: '/services/zero-trust-network-access', icon: <Lock className="w-4 h-4" /> }
    ]
  },
  {
    label: 'Emerging Technologies',
    href: '/services/quantum-computing',
    icon: <Atom className="w-5 h-5" />,
    children: [
      { label: 'Quantum Computing', href: '/services/quantum-computing', icon: <Atom className="w-4 h-4" /> },
      { label: 'IoT Edge Computing', href: '/services/iot-edge-computing', icon: <Network className="w-4 h-4" /> },
      { label: 'Space Technology', href: '/space-tech', icon: <Satellite className="w-4 h-4" /> },
      { label: 'Digital Twin', href: '/services/digital-twin', icon: <Eye className="w-4 h-4" /> }
    ]
  },
  {
    label: 'Micro SaaS Solutions',
    href: '/services/micro-saas',
    icon: <ShoppingCart className="w-5 h-5" />,
    children: [
      { label: 'Micro CRM', href: '/services/micro-crm', icon: <Users className="w-4 h-4" /> },
      { label: 'Helpdesk Platform', href: '/services/helpdesk-platform', icon: <MessageCircle className="w-4 h-4" /> },
      { label: 'Website Analytics', href: '/services/website-analytics', icon: <BarChart3 className="w-4 h-4" /> },
      { label: 'IT Helpdesk', href: '/services/it-helpdesk', icon: <HelpCircle className="w-4 h-4" /> },
      { label: 'Affiliate Tracking', href: '/services/affiliate-tracking', icon: <TrendingUp className="w-4 h-4" /> },
      { label: 'Mobile Survey', href: '/services/mobile-survey', icon: <MessageCircle className="w-4 h-4" /> }
    ]
  },
  {
    label: 'Solutions',
    href: '/solutions',
    icon: <Building className="w-5 h-5" />,
    children: [
      { label: 'Enterprise Solutions', href: '/solutions/enterprise', icon: <Building className="w-4 h-4" /> },
      { label: 'Healthcare Solutions', href: '/solutions/healthcare', icon: <Heart className="w-4 h-4" /> },
      { label: 'Financial Solutions', href: '/solutions/financial', icon: <DollarSign className="w-4 h-4" /> },
      { label: 'Government Solutions', href: '/solutions/government', icon: <Building className="w-4 h-4" /> },
      { label: 'Manufacturing Solutions', href: '/solutions/manufacturing', icon: <Cpu className="w-4 h-4" /> },
      { label: 'Retail Solutions', href: '/solutions/retail', icon: <ShoppingCart className="w-4 h-4" /> }
    ]
  },
  {
    label: 'Company',
    href: '/about',
    icon: <Users className="w-5 h-5" />,
    children: [
      { label: 'About Us', href: '/about', icon: <Users className="w-4 h-4" /> },
      { label: 'Team', href: '/team', icon: <Users className="w-4 h-4" /> },
      { label: 'Careers', href: '/careers', icon: <GraduationCap className="w-4 h-4" /> },
      { label: 'Partners', href: '/partners', icon: <Users className="w-4 h-4" /> },
      { label: 'News', href: '/news', icon: <Newspaper className="w-4 h-4" /> },
      { label: 'Case Studies', href: '/case-studies', icon: <FileText className="w-4 h-4" /> }
    ]
  },
  {
    label: 'Resources',
    href: '/resources',
    icon: <BookOpen className="w-5 h-5" />,
    children: [
      { label: 'Blog', href: '/blog', icon: <Newspaper className="w-4 h-4" /> },
      { label: 'FAQ', href: '/faq', icon: <HelpCircle className="w-4 h-4" /> },
      { label: 'Help Center', href: '/help', icon: <HelpCircle className="w-4 h-4" /> },
      { label: 'Training', href: '/training', icon: <GraduationCap className="w-4 h-4" /> },
      { label: 'White Papers', href: '/white-papers', icon: <FileText className="w-4 h-4" /> },
      { label: 'Webinars', href: '/webinars', icon: <Video className="w-4 h-4" /> }
    ]
  },
  {
    label: 'Pricing',
    href: '/pricing',
    icon: <DollarSign className="w-5 h-5" />
  },
  {
    label: 'Contact',
    href: '/contact',
    icon: <Phone className="w-5 h-5" />
  }
];

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());
  const location = useLocation();

  const toggleItem = (label: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(label)) {
      newExpanded.delete(label);
    } else {
      newExpanded.add(label);
    }
    setExpandedItems(newExpanded);
  };

  const isActive = (path: string) => location.pathname === path;

  const mainNavigation = [
    { name: 'Home', href: '/', icon: Home, badge: null },
    { name: 'Services', href: '/services', icon: Zap, badge: 'New', hasDropdown: true },
    { name: 'Solutions', href: '/solutions', icon: Target, badge: null },
    { name: 'Company', href: '/about', icon: Users, badge: null },
    { name: 'Resources', href: '/resources', icon: BookOpen, badge: null },
    { name: 'Support', href: '/help', icon: HelpCircle, badge: null },
    { name: 'Pricing', href: '/pricing', icon: DollarSign, badge: null },
    { name: 'Contact', href: '/contact', icon: MessageCircle, badge: null },
  ];

  const serviceCategories = [
    {
      id: 'ai-ml',
      title: 'AI & Machine Learning',
      icon: Brain,
      color: 'text-blue-500',
      services: [
        { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence' },
        { name: 'AI Compliance Assistant', href: '/services/ai-compliance-assistant' },
        { name: 'AI Sales Copilot', href: '/services/ai-sales-copilot' },
        { name: 'AI Content Marketing', href: '/services/ai-content-marketing-suite' },
        { name: 'AI Customer Support', href: '/services/ai-customer-support-automation' },
        { name: 'AI Project Management', href: '/services/ai-project-management' },
        { name: 'AI Financial Analytics', href: '/services/ai-financial-analytics' },
        { name: 'AI Healthcare Platform', href: '/services/ai-healthcare-platform' },
        { name: 'AI Research Assistant', href: '/services/ai-autonomous-research-assistant' },
        { name: 'AI Financial Trading', href: '/services/ai-financial-trading-platform' }
      ]
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
      icon: Shield,
      color: 'text-red-500',
      services: [
        { name: 'AI Cybersecurity Platform', href: '/services/ai-cybersecurity-platform' },
        { name: 'Security Headers & CSP', href: '/services/security-headers-csp' },
        { name: 'DSR Privacy Portal', href: '/services/dsr-portal' },
        { name: 'Zero Trust Network', href: '/services/zero-trust-network-access' },
        { name: 'SOC2 Compliance', href: '/services/soc2-compliance-automation' },
        { name: 'Threat Intelligence', href: '/services/ai-cyber-threat-intelligence' }
      ]
    },
    {
      id: 'cloud-infrastructure',
      title: 'Cloud & Infrastructure',
      icon: Cloud,
      color: 'text-cyan-500',
      services: [
        { name: 'Cloud DevOps', href: '/services/cloud-devops' },
        { name: 'IT Infrastructure', href: '/services/it-infrastructure' },
        { name: 'FinOps Advisor', href: '/services/finops-advisor' },
        { name: 'Cloud Migration', href: '/services/cloud-migration-services' },
        { name: 'Edge Computing', href: '/services/iot-edge-computing' },
        { name: 'Container Orchestration', href: '/services/kubernetes-services' }
      ]
    },
    {
      id: 'quantum-computing',
      title: 'Quantum Computing',
      icon: Atom,
      color: 'text-purple-500',
      services: [
        { name: 'Quantum Edge Computing', href: '/services/quantum-edge-computing' },
        { name: 'Quantum Neural Networks', href: '/services/quantum-neural-networks' },
        { name: 'Quantum Financial Trading', href: '/services/quantum-financial-trading' },
        { name: 'AI Quantum Hybrid', href: '/services/ai-quantum-hybrid-platform' }
      ]
    },
    {
      id: 'digital-transformation',
      title: 'Digital Transformation',
      icon: Rocket,
      color: 'text-green-500',
      services: [
        { name: 'Digital Twin Solutions', href: '/services/digital-twin' },
        { name: 'IoT Edge Computing', href: '/services/iot-edge-computing' },
        { name: 'Blockchain Solutions', href: '/services/blockchain-enterprise-solutions' },
        { name: '5G Enterprise Solutions', href: '/services/5g-enterprise-solutions' },
        { name: 'IT Consulting', href: '/services/it-consulting' }
      ]
    },
    {
      id: 'micro-saas',
      title: 'Micro SaaS',
      icon: Code,
      color: 'text-yellow-500',
      services: [
        { name: 'Custom SaaS Development', href: '/services/micro-saas-solutions' },
        { name: 'API Development', href: '/services/api-development' },
        { name: 'Mobile App Development', href: '/services/mobile-development' },
        { name: 'Web Application Development', href: '/services/web-development' },
        { name: 'E-commerce Solutions', href: '/services/ecommerce-personalization' }
      ]
    }
  ];

  const solutionCategories = [
    {
      id: 'industry-solutions',
      title: 'Industry Solutions',
      icon: Target,
      color: 'text-green-500',
      solutions: [
        { name: 'Healthcare Solutions', href: '/solutions/healthcare' },
        { name: 'Financial Solutions', href: '/solutions/financial' },
        { name: 'Manufacturing Solutions', href: '/solutions/manufacturing' },
        { name: 'Government Solutions', href: '/solutions/government' },
        { name: 'Retail Solutions', href: '/solutions/retail' },
        { name: 'Education Solutions', href: '/solutions/education' },
        { name: 'Startup Solutions', href: '/solutions/startup' }
      ]
    },
    {
      id: 'technology-solutions',
      title: 'Technology Solutions',
      icon: Zap,
      color: 'text-blue-500',
      solutions: [
        { name: 'Quantum Edge Computing', href: '/solutions/quantum-edge-computing' },
        { name: 'AI Autonomous Business', href: '/solutions/ai-autonomous-business' },
        { name: 'Blockchain & Web3', href: '/solutions/blockchain-web3' },
        { name: 'IoT Edge Computing', href: '/solutions/iot-edge-computing' },
        { name: 'Space Technology', href: '/solutions/space-tech' }
      ]
    }
  ];

  const resourceCategories = [
    {
      id: 'content',
      title: 'Content & Learning',
      icon: BookOpenIcon,
      color: 'text-purple-500',
      resources: [
        { name: 'Blog', href: '/blog' },
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'White Papers', href: '/white-papers' },
        { name: 'Webinars', href: '/webinars' },
        { name: 'Training', href: '/training' },
        { name: 'Tutorials', href: '/tutorials' }
      ]
    },
    {
      id: 'technical',
      title: 'Technical Resources',
      icon: FileText,
      color: 'text-cyan-500',
      resources: [
        { name: 'Documentation', href: '/documentation' },
        { name: 'API Reference', href: '/api' },
        { name: 'Developer Portal', href: '/developer' },
        { name: 'Code Examples', href: '/code-examples' }
      ]
    },
    {
      id: 'research',
      title: 'Research & Innovation',
      icon: Lightbulb,
      color: 'text-yellow-500',
      resources: [
        { name: 'Research & Development', href: '/research-development' },
        { name: 'Innovation Lab', href: '/innovation-lab' },
        { name: 'Technology Trends', href: '/tech-trends' },
        { name: 'Future Insights', href: '/future-insights' }
      ]
    }
  ];

  const quickActions = [
    { name: 'Request Quote', href: '/request-quote', icon: MessageCircle, color: 'bg-blue-500' },
    { name: 'Schedule Demo', href: '/schedule-demo', icon: Users, color: 'bg-green-500' },
    { name: 'Support Chat', href: '/support', icon: HelpCircle, color: 'bg-purple-500' },
    { name: 'Documentation', href: '/documentation', icon: BookOpen, color: 'bg-orange-500' }
  ];

  const contactInfo = [
    { icon: Phone, text: '+1 302 464 0950', href: 'tel:+13024640950' },
    { icon: Mail, text: 'kleber@ziontechgroup.com', href: 'mailto:kleber@ziontechgroup.com' },
    { icon: MapPin, text: 'Middletown, DE 19709', href: 'https://maps.google.com/?q=Middletown,DE' },
    { icon: Clock, text: 'Mon-Fri: 9AM-6PM EST', href: '#' }
  ];

  const recentServices = [
    { name: 'AI Cybersecurity Platform', href: '/services/ai-cybersecurity-platform', views: '2.3k' },
    { name: 'Quantum Edge Computing', href: '/services/quantum-edge-computing', views: '1.8k' },
    { name: 'AI Healthcare Platform', href: '/services/ai-healthcare-platform', views: '1.5k' },
    { name: 'Micro SaaS Solutions', href: '/services/micro-saas-solutions', views: '1.2k' }
  ];

  const achievements = [
    { number: '500+', label: 'Projects', icon: CheckCircle, color: 'text-green-500' },
    { number: '50+', label: 'Team Members', icon: Users, color: 'text-blue-500' },
    { number: '25+', label: 'Countries', icon: Globe, color: 'text-purple-500' },
    { number: '99%', label: 'Satisfaction', icon: Star, color: 'text-yellow-500' }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={onClose}
          />
          
          {/* Sidebar */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 20, stiffness: 100 }}
            className="fixed left-0 top-0 h-full w-80 bg-slate-900/95 backdrop-blur-md border-r border-slate-700/50 z-50 overflow-y-auto"
          >
            {/* Header */}
            <div className="p-6 border-b border-slate-700/50">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">Zion Tech</h2>
                  <p className="text-sm text-slate-400">Navigation</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 text-zion-slate-light hover:text-white hover:bg-zion-blue-light rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation Items */}
            <nav className="p-4 space-y-2">
              {sidebarItems.map((item) => (
                <div key={item.label}>
                  {item.children ? (
                    <div>
                      <button
                        onClick={() => toggleSection(item.name.toLowerCase())}
                        className={`w-full flex items-center justify-between px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                          isActive(item.href) 
                            ? 'bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300' 
                            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          {item.icon}
                          <span className="font-medium">{item.label}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          {item.badge && (
                            <span className="px-2 py-1 text-xs font-medium bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-300 rounded-full">
                              {item.badge}
                            </span>
                          )}
                          {expandedSections.includes(item.name.toLowerCase()) ? (
                            <ChevronDown className="w-4 h-4" />
                          ) : (
                            <ChevronRight className="w-4 h-4" />
                          )}
                        </div>
                      </button>
                    ) : (
                      <Link
                        to={item.href}
                        className={`flex items-center justify-between px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                          isActive(item.href) 
                            ? 'bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300' 
                            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <item.icon className="w-4 h-4" />
                          <span>{item.name}</span>
                        </div>
                        {item.badge && (
                          <span className="px-2 py-1 text-xs font-medium bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-300 rounded-full">
                            {item.badge}
                          </span>
                        )}
                      </button>
                      
                      {expandedItems.has(item.label) && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="ml-6 mt-2 space-y-1"
                        >
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              to={child.href}
                              className={`flex items-center space-x-3 px-4 py-2 rounded-lg transition-colors duration-200 ${
                                isItemActive(child.href)
                                  ? 'bg-cyan-500/20 text-cyan-400'
                                  : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                              }`}
                              onClick={onClose}
                            >
                              {child.icon}
                              <span className="text-sm">{child.label}</span>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </button>
                    
                    {expandedSections.includes(category.id) && (
                      <div className="mt-2 ml-6 space-y-1">
                        {category.services.map((service) => (
                          <Link
                            key={service.name}
                            to={service.href}
                            className={`block px-3 py-2 text-sm rounded-md transition-colors duration-200 ${
                              isActive(service.href)
                                ? 'bg-blue-50 dark:bg-blue-900/10 text-blue-700 dark:text-blue-300'
                                : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-slate-800'
                            }`}
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Solutions Dropdown */}
            {expandedSections.includes('solutions') && (
              <div className="ml-4 space-y-4">
                {solutionCategories.map((category) => (
                  <div key={category.id}>
                    <button
                      onClick={() => toggleSection(category.id)}
                      className="flex items-center justify-between w-full text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors duration-200"
                    >
                      <div className="flex items-center space-x-2">
                        <category.icon className={`w-4 h-4 ${category.color}`} />
                        <span>{category.title}</span>
                      </div>
                      {expandedSections.includes(category.id) ? (
                        <Minus className="w-4 h-4" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                    </button>
                    
                    {expandedSections.includes(category.id) && (
                      <div className="mt-2 ml-6 space-y-1">
                        {category.solutions.map((solution) => (
                          <Link
                            key={solution.name}
                            to={solution.href}
                            className={`block px-3 py-2 text-sm rounded-md transition-colors duration-200 ${
                              isActive(solution.href)
                                ? 'bg-blue-50 dark:bg-blue-900/10 text-blue-700 dark:text-blue-300'
                                : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-slate-800'
                            }`}
                          >
                            {solution.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Resources Dropdown */}
            {expandedSections.includes('resources') && (
              <div className="ml-4 space-y-4">
                {resourceCategories.map((category) => (
                  <div key={category.id}>
                    <button
                      onClick={() => toggleSection(category.id)}
                      className="flex items-center justify-between w-full text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors duration-200"
                    >
                      <div className="flex items-center space-x-2">
                        <category.icon className={`w-4 h-4 ${category.color}`} />
                        <span>{category.title}</span>
                      </div>
                      {expandedSections.includes(category.id) ? (
                        <Minus className="w-4 h-4" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                    </button>
                    
                    {expandedSections.includes(category.id) && (
                      <div className="mt-2 ml-6 space-y-1">
                        {category.resources.map((resource) => (
                          <Link
                            key={resource.name}
                            to={resource.href}
                            className={`block px-3 py-2 text-sm rounded-md transition-colors duration-200 ${
                              isActive(resource.href)
                                ? 'bg-blue-50 dark:bg-blue-900/10 text-blue-700 dark:text-blue-300'
                                : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-slate-800'
                            }`}
                          >
                            {resource.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Quick Actions */}
            <div>
              <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                Quick Actions
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {quickActions.map((action) => (
                  <Link
                    key={action.name}
                    to={action.href}
                    className="flex flex-col items-center p-3 rounded-lg bg-gray-50 dark:bg-slate-800 hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors duration-200"
                  >
                    <div className={`w-8 h-8 ${action.color} rounded-lg flex items-center justify-center mb-2`}>
                      <action.icon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-xs font-medium text-gray-700 dark:text-gray-300 text-center">
                      {action.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                Our Achievements
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {achievements.map((achievement) => (
                  <div key={achievement.label} className="text-center p-3 bg-gray-50 dark:bg-slate-800 rounded-lg">
                    <div className="flex justify-center mb-2">
                      <achievement.icon className={`w-6 h-6 ${achievement.color}`} />
                    </div>
                    <div className="text-lg font-bold text-gray-900 dark:text-white">{achievement.number}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">{achievement.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Services */}
            <div>
              <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                Popular Services
              </h3>
              <div className="space-y-2">
                {recentServices.map((service) => (
                  <Link
                    key={service.name}
                    to={service.href}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors duration-200"
                  >
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300 truncate">
                      {service.name}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {service.views}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                Contact Info
              </h3>
              <div className="space-y-2">
                {contactInfo.map((contact) => (
                  <a
                    key={contact.text}
                    href={contact.href}
                    className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors duration-200"
                  >
                    <contact.icon className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {contact.text}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* User Tools */}
            <div className="pt-4 border-t border-gray-200 dark:border-slate-700">
              <div className="flex items-center space-x-3 p-3">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-white" />
                </div>
              ))}
            </nav>

            {/* Footer */}
            <div className="p-4 border-t border-slate-700/50 mt-auto">
              <div className="space-y-3 text-sm text-slate-400">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>info@ziontechgroup.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>123 Tech Street, Digital City</span>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
