import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronRight, 
  ChevronDown,
  Home,
  Brain,
  Cloud,
  Shield,
  Zap,
  Building,
  Users,
  FileText,
  HelpCircle,
  DollarSign,
  Phone,
  Mail,
  MapPin,
  Globe,
  Rocket,
  Atom,
  ShoppingCart,
  BarChart3,
  Server,
  Cpu,
  Network,
  Satellite,
  MessageCircle,
  TrendingUp,
  Code,
  Lock,
  Eye,
  Truck,
  Target,
  Star,
  Heart,
  GraduationCap,
  Newspaper,
  Video,
  BookOpen
} from 'lucide-react';

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

  const isItemActive = (href: string) => {
    return location.pathname === href || location.pathname.startsWith(href + '/');
  };

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
            </div>

            {/* Navigation Items */}
            <nav className="p-4 space-y-2">
              {sidebarItems.map((item) => (
                <div key={item.label}>
                  {item.children ? (
                    <div>
                      <button
                        onClick={() => toggleItem(item.label)}
                        className={`w-full flex items-center justify-between px-4 py-3 text-left rounded-lg transition-colors duration-200 ${
                          isItemActive(item.href)
                            ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                            : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          {item.icon}
                          <span className="font-medium">{item.label}</span>
                        </div>
                        {expandedItems.has(item.label) ? (
                          <ChevronDown className="w-4 h-4" />
                        ) : (
                          <ChevronRight className="w-4 h-4" />
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
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors duration-200 ${
                        isItemActive(item.href)
                          ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                          : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                      }`}
                      onClick={onClose}
                    >
                      {item.icon}
                      <span className="font-medium">{item.label}</span>
                    </Link>
                  )}
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
};
