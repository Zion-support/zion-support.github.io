<<<<<<< HEAD
import React, { useState } from 'react';';';
import { Link, useLocation } from 'react-router-dom';
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/test-and-fix-pm2-automations-and-merge-2088
=======
>>>>>>> d200903062be89cd2962b930112f6c17412cdf5b
import {
  Home,
  Zap,
  Brain,
  Shield,
  Users,
  HardDrive,
  TrendingUp,
  Building2,
  FileText,
  HelpCircle,
  BarChart3,
  Settings,
<<<<<<< HEAD
  ChevronRight,';
  ChevronDown';';
} from 'lucide-react';
=======
  ChevronRight,
  ChevronDown,
  Cloud,
  Target,
  Heart,
  DollarSign,
  Briefcase,
  Newspaper,
  Mail,
  Phone,
  Search,
  Star,
  Layers,
  Globe,
  Cpu,
  Database,
  Lock,
  Smartphone,
  Monitor,
  Lightbulb,
  Rocket
} from 'lucide-react';

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export function Sidebar({ isOpen = true, onClose }: SidebarProps) {
  const [expandedSections, setExpandedSections] = useState<string[]>(['Services', 'Solutions']);
  const location = useLocation();

  const toggleSection = (sectionName: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionName) 
        ? prev.filter(name => name !== sectionName)
        : [...prev, sectionName]
    );
  };

  const isActive = (path: string) => location.pathname === path;

  const sidebarSections = [
    {
      name: 'Main',
      items: [
        { name: 'Home', href: '/', icon: Home },
        { name: 'Dashboard', href: '/dashboard', icon: BarChart3 },
        { name: 'Search', href: '/search', icon: Search }
      ]
    },
    {
      name: 'Services',
      expandable: true,
      items: [
        { name: 'All Services', href: '/services', icon: Layers },
        { name: 'New Services 2025', href: '/new-services-2025', icon: Star, featured: true },
        { name: 'AI Services', href: '/ai-services', icon: Brain },
        { name: 'IT Infrastructure', href: '/it-services', icon: HardDrive },
        { name: 'Micro SaaS', href: '/micro-saas', icon: Zap },
        { name: 'Cloud Solutions', href: '/services/cloud-devops', icon: Cloud },
        { name: 'Cybersecurity', href: '/services/cybersecurity', icon: Shield },
        { name: 'Data Analytics', href: '/services/data-analytics', icon: Database },
        { name: 'Quantum Computing', href: '/services/quantum-computing', icon: Cpu },
        { name: 'Mobile Development', href: '/services/mobile-development', icon: Smartphone }
      ]
    },
    {
      name: 'Solutions',
      expandable: true,
      items: [
        { name: 'Enterprise', href: '/solutions/enterprise', icon: Building2 },
        { name: 'Healthcare', href: '/solutions/healthcare', icon: Heart },
        { name: 'Financial', href: '/solutions/financial', icon: DollarSign },
        { name: 'Education', href: '/solutions/education', icon: Lightbulb },
        { name: 'Startups', href: '/solutions/startups', icon: Rocket }
      ]
    },
    {
      name: 'Resources',
      expandable: true,
      items: [
        { name: 'Pricing', href: '/pricing', icon: DollarSign },
        { name: 'Pricing Guide 2025', href: '/comprehensive-pricing-guide-2025', icon: TrendingUp, featured: true },
        { name: 'White Papers', href: '/white-papers', icon: FileText },
        { name: 'Case Studies', href: '/case-studies', icon: Target },
        { name: 'Documentation', href: '/docs', icon: FileText },
        { name: 'FAQ', href: '/faq', icon: HelpCircle }
      ]
    },
    {
      name: 'Company',
      expandable: true,
      items: [
        { name: 'About Us', href: '/about', icon: Users },
        { name: 'Careers', href: '/careers', icon: Briefcase },
        { name: 'News & Updates', href: '/news', icon: Newspaper },
        { name: 'Contact', href: '/contact', icon: Mail },
        { name: 'Support', href: '/help', icon: HelpCircle }
      ]
    }
  ];

<<<<<<< HEAD
  const renderSidebarItem = (item: any, level = 0) => {
    const isExpanded = expandedSections.includes(item.name);
    const hasActiveChild = item.children?.some((child: any) => isActive(child.href));
    const isItemActive = item.href ? isActive(item.href) : false;

    if (item.type === 'link') {
      return (
        <Link
          key={item.name}
          to={item.href}
          className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
            isItemActive
              ? 'bg-blue-600 text-white'
              : 'text-gray-300 hover:bg-gray-700 hover:text-white'
          }`}
          onClick={props.onClose}
        >
          <item.icon className="w-5 h-5" />
          <span>{item.name}</span>
        </Link>
      );
    }

    if (item.type === 'section') {
      return (
        <div key={item.name} className="space-y-1">
          <button
            onClick={() => toggleSection(item.name)}
            className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              hasActiveChild
                ? 'bg-blue-600 text-white'
                : 'text-gray-300 hover:bg-gray-700 hover:text-white'
            }`}
          >
            <div className="flex items-center space-x-3">
              <item.icon className="w-5 h-5" />
              <span>{item.name}</span>
            </div>
            {isExpanded ? (
              <ChevronDown className="w-4 h-4" />
            ) : (
              <ChevronRight className="w-4 h-4" />
            )}
          </button>
          
          {isExpanded && (
            <div className="ml-6 space-y-1">
              {item.children.map((child: any) => (
                <Link
                  key={child.name}
                  to={child.href}
                  className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                    isActive(child.href)
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-400 hover:bg-gray-700 hover:text-white'
                  }`}
                  onClick={props.onClose}
                >
                  <child.icon className="w-4 h-4" />
                  <span>{child.name}</span>
                </Link>
              ))}
            </div>
          )}
        </div>
      );
    }

    return null;
  };

  return (
    <aside className={`fixed left-0 top-0 z-40 h-full w-80 bg-gray-900 transform transition-transform duration-300 ease-in-out ${
      props.isOpen ? 'translate-x-0' : '-translate-x-full'
    } lg:translate-x-0 lg:static lg:inset-0`}>
      <div className="flex h-full flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-lg font-semibold text-white">Zion Tech Group</h2>
          </div>
          {props.onClose && (
            <button
              onClick={props.onClose}
              className="lg:hidden p-2 text-gray-400 hover:text-white"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-4 space-y-2">
          {sidebarItems.map((item) => renderSidebarItem(item))}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-gray-700">
          <div className="space-y-3">
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <Phone className="w-4 h-4" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <Mail className="w-4 h-4" />
              <span>info@ziontechgroup.com</span>
=======
import { X, Menu, Zap, Home, Settings, User, HelpCircle } from 'lucide-react';
>>>>>>> cursor/test-and-fix-pm2-automations-and-merge-2088

interface SidebarProps {

  isOpen?: boolean;
  onClose?: () => void;

}
';
export default function Sidebar(props: any) {';';
  const [expandedSections, setExpandedSections] = useState<string[]>(['Services']);
  const location = useLocation();

  const toggleSection = (props: any) => {
    setExpandedSections(prev => 
      prev.includes(sectionName) 
        ? prev.filter(name => name !== sectionName)
        : [...prev, sectionName]
    );
  };

  const isActive = (path: string) => location.pathname === path;

  const sidebarItems = [';
    {';';
      name: 'Home',';';
      href: '/',';
      icon: Hom e,';';
      type: 'link'
    },';
    {';';
      name: 'Services',';';
      type: 'section',
      icon: Za p,';
      items: [';';
        { name: 'AI & Automation', href: '/services/ai', icon: Brai n },';';
        { name: 'Cloud & DevOps', href: '/services/cloud', icon: HardDriv e },';';
        { name: 'Cybersecurity', href: '/services/cybersecurity', icon: Shiel d },';';
        { name: 'Digital Transformation', href: '/services/digital', icon: TrendingU p },';';
        { name: 'IT Consulting', href: '/services/consulting', icon: User s },';';
        { name: 'Micro SAAS', href: '/services/micro-saas', icon: Building 2 }
      ]
    },';
    {';';
      name: 'Solutions',';';
      type: 'section',
      icon: Brai n,';
      items: [';';
        { name: 'Enterprise', href: '/solutions/enterprise', icon: Building 2 },';';
        { name: 'Healthcare', href: '/solutions/healthcare', icon: User s },';';
        { name: 'Financial Services', href: '/solutions/financial', icon: TrendingU p },';';
        { name: 'Government', href: '/solutions/government', icon: Shiel d },';';
        { name: 'Manufacturing', href: '/solutions/manufacturing', icon: HardDriv e },';';
        { name: 'Retail', href: '/solutions/retail', icon: BarChart 3 }
      ]
    },';
    {';';
      name: 'Company',';';
      type: 'section',
      icon: Building 2,';
      items: [';';
        { name: 'About Us', href: '/about', icon: User s },';';
        { name: 'Leadership', href: '/about#team', icon: User s },';';
        { name: 'Careers', href: '/careers', icon: User s },';';
        { name: 'Partners', href: '/partners', icon: User s },';';
        { name: 'Press', href: '/press', icon: FileTex t }
      ]
    },';
    {';';
      name: 'Resources',';';
      type: 'section',
      icon: FileTex t,';
      items: [';';
        { name: 'Blog', href: '/blog', icon: FileTex t },';';
        { name: 'Case Studies', href: '/case-studies', icon: FileTex t },';';
        { name: 'White Papers', href: '/white-papers', icon: FileTex t },';';
        { name: 'Webinars', href: '/webinars', icon: FileTex t },';';
        { name: 'Documentation', href: '/docs', icon: FileTex t },';';
        { name: 'API Reference', href: '/api', icon: FileTex t }
      ]
    },';
    {';';
      name: 'Support',';';
      type: 'section',
      icon: HelpCircl e,';
      items: [';';
        { name: 'Help Center', href: '/help', icon: HelpCircl e },';';
        { name: 'Contact Support', href: '/contact', icon: User s },';';
        { name: 'Training', href: '/training', icon: FileTex t },';';
        { name: 'Community', href: '/community', icon: User s },';';
        { name: 'System Status', href: '/status', icon: BarChart 3 }
      ]
    },';
    {';';
      name: 'Pricing',';';
      href: '/pricing',';
      icon: BarChart 3,';';
      type: 'link'
    },';
    {';';
      name: 'Contact',';';
      href: '/contact',';
      icon: User s,';';
      type: 'link'
    }
  ];
';
  const renderSidebarItem = (props: any) => {';';
    if (item.type === 'link') {
      return (
        <Link
          key={item.name}
          to={item.href}
          className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${';
            isActive(item.href)';';
              ? 'bg-blue-600/20 text-blue-400 border border-blue-600/30'';';
              : 'text-gray-300 hover: tex t-white hover: b g-gray-800/50'
          }`}
          onClick={onClose}
        >
          <item.icon className="w-5 h-5" />
          <span className="font-medium">{item.name}</span>
        </Link>
      );
    }';
';';
    if (item.type === 'section') {
      const isExpanded = expandedSections.includes(item.name);
      
      return (
    <div className="min-h-screen bg-white">
          <button
            onClick={() => toggleSection(item.name)}
            className="flex items-center justify-between w-full px-4 py-3 text-left text-gray-300 hover: tex t-white hover: b g-gray-800/50 rounded-lg transition-colors"
          >
            <div className="flex items-center space-x-3">
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.name}</span>
            </div>
            {isExpanded ? (
              <ChevronDown className="w-4 h-4"  />
            ) : (
              <ChevronRight className="w-4 h-4"  />
            )}
          </button>
          
          {isExpanded && (
            <div className="ml-8 space-y-1">
              {item.items.map((subItem: an y) => (
                <Link
                  key={subItem.name}
                  to={subItem.href}
                  className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm transition-colors ${';
                    isActive(subItem.href)';';
                      ? 'text-blue-400 bg-blue-600/10'';';
                      : 'text-gray-400 hover: tex t-white hover: b g-gray-800/30'
                  }`}
                  onClick={onClose}
                >
                  <subItem.icon className="w-4 h-4" />
                  <span>{subItem.name}</span>
                </Link>
              ))}
                </div>
  );
}
        </div>
      );
    }

    return null;
  };

  return (';
    <aside className={`bg-gray-900 text-white w-64 min-h-screen transition-transform duration-300 ${';';
      isOpen ? 'translate-x-0' : '-translate-x-full'
    }`}>
      {/* Sidebar Header */}
      <div className="p-4 border-b border-gray-800">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
            <Zap className="w-5 h-5 text-white"  />
</div>
          <span className="font-bold text-lg">Zion Tech</span>
        </div>
      </div>
{/* Sidebar Content */}
      <div className="p-4 space-y-2">
        {sidebarItems.map(renderSidebarItem)}
      </div>

      {/* Quick Actions */}
      <div className="p-4 border-t border-gray-800 mt-8">
        <h3 className="text-gray-400 text-sm font-semibold uppercase tracking-wider mb-3">
          Quick Actions
        </h3>
        <div className="space-y-2">
          <Link
            to="/request-quote"
            className="flex items-center space-x-3 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover: fro m-blue-700 hover: t o-purple-700 transition-all duration-300"
            onClick={onClose}
          >
            <TrendingUp className="w-5 h-5"  />
            <span className="font-medium">Get Quote</span>
          </Link>
          <Link
            to="/demo"
            className="flex items-center space-x-3 px-4 py-3 border border-gray-600 text-gray-300 rounded-lg hover: b g-gray-800 hover: tex t-white transition-colors"
            onClick={onClose}
          >
            <Settings className="w-5 h-5"  />
            <span className="font-medium">Request Demo</span>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-gray-800 mt-auto">
        <div className="text-center text-gray-400 text-sm">
          <p>© 2024 Zion Tech Group</p>
          <p className="mt-1">Empowering Innovation</p>
        </div>
      </div>
    </aside>
  );
=======';
<<<<<<< HEAD';';
import React, { useState } from 'react';';';
import { Link, useLocation } from 'react-router-dom';';';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronRight, 
  Home, 
  Zap, 
  Brain, 
  Shield, 
  Cloud, 
  Server, 
  BarChart3, 
  Users, 
  ShoppingCart, 
  BookOpen, 
  MessageCircle, 
  HelpCircle, 
  Settings, 
  Star,
  Atom,
  Network,
  Eye,
  PenTool,
  Globe,
  Cpu,
  Lock,
  TrendingUp,
  Rocket,
  Heart,
  Crown,
  Sparkles,
  Flame,
  Sun,
  Moon,
  Infinity,
  ArrowRight,
  DollarSign,
  Workflow,
  Briefcase,
  Newspaper,
  FileText,
  Leaf,
  Building,
  Truck,
  Mail,
  Video,
  Satellite,
  TestTube,';
  Code';';
} from 'lucide-react';

interface SidebarProps {

  isOpen: boolean;
  onClose: () => void;
  >>>>>>> merge-all-prs-20250904-105408: any;

}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {';
  const location = useLocation();';';
  const [expandedSections, setExpandedSections] = useState<string[]>(['2026 Services']);

  const toggleSection = (props: any) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const navigationSections = [';
    {';';
      title: 'Main Navigation',';
      items: [';';
        { name: 'Home', href: '/', icon: Home },';';
        { name: 'About', href: '/about', icon: Users },';';
        { name: 'Contact', href: '/contact', icon: MessageCircle },';';
        { name: 'Blog', href: '/blog', icon: BookOpen },';';
        { name: 'FAQ', href: '/faq', icon: HelpCircle },';';
        { name: 'Help Center', href: '/help', icon: HelpCircle },';';
        { name: 'Careers', href: '/careers', icon: Briefcase },';';
        { name: 'Partners', href: '/partners', icon: Users },';';
        { name: 'News', href: '/news', icon: Newspaper },';';
        { name: 'Case Studies', href: '/case-studies', icon: FileText },';';
        { name: 'Pricing', href: '/pricing', icon: DollarSign },';';
        { name: 'Marketplace', href: '/marketplace', icon: ShoppingCart }
      ]
    },';
    {';';
      title: 'Featured Services',
      featured: true,';
      items: [';';
        { name: '2026 Services Overview', href: '/ultimate-services-showcase-2026', icon: Star, featured: true },';';
        { name: '2027 Services Overview', href: '/comprehensive-services-showcase-2027', icon: Star, featured: true },';';
        { name: '2029 Cutting-Edge Services', href: '/zion-cutting-edge-services-2029', icon: Star, featured: true },';';
        { name: 'AI Solutions Hub', href: '/ai-solutions', icon: Brain, featured: true },';';
        { name: 'Quantum Computing', href: '/services/quantum-computing', icon: Atom },';';
        { name: 'AI Cybersecurity', href: '/services/ai-cybersecurity-platform', icon: Shield },';';
        { name: 'IoT Edge Computing', href: '/services/iot-edge-computing', icon: Network },';';
        { name: 'AI Content Creation', href: '/services/ai-content-creation', icon: PenTool },';';
        { name: 'AI HR Platform', href: '/services/ai-hr-platform', icon: Users },';';
        { name: 'Sustainable Technology', href: '/services/sustainable-technology', icon: Leaf },';';
        { name: 'AI Predictive Maintenance', href: '/services/ai-predictive-maintenance', icon: TrendingUp },';';
        { name: 'Quantum Machine Learning', href: '/services/quantum-machine-learning', icon: Brain },
      ]
    },';
    {';';
      title: 'AI & Machine Learning',';
      items: [';';
        { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence', icon: Brain },';';
        { name: 'AI Compliance Assistant', href: '/services/ai-compliance-assistant', icon: Shield },';';
        { name: 'AI Sales Copilot', href: '/services/ai-sales-copilot', icon: Users },';';
        { name: 'AI-Powered SEO', href: '/services/ai-seo', icon: TrendingUp },';';
        { name: 'Interview Assessment AI', href: '/services/interview-assessment', icon: Users },';';
        { name: 'AI Content Marketing Suite', href: '/services/ai-content-marketing-suite', icon: PenTool },';';
        { name: 'AI Customer Support', href: '/services/ai-customer-support-automation', icon: MessageCircle },';';
        { name: 'AI Data Analytics', href: '/services/data-analytics', icon: BarChart3 },';';
        { name: 'AI Marketing Automation', href: '/services/ai-marketing-automation', icon: Rocket },';';
        { name: 'AI Project Manager', href: '/services/ai-project-management', icon: Settings },';';
        { name: 'AI Workflow Automation', href: '/services/ai-workflow-automation', icon: Workflow },';';
        { name: 'AI Financial Analytics', href: '/services/ai-financial-analytics', icon: DollarSign },';';
        { name: 'AI Autonomous Research Assistant', href: '/services/ai-autonomous-research-assistant', icon: Brain },';';
        { name: 'AI Supply Chain Optimization', href: '/services/ai-supply-chain-optimization', icon: TrendingUp },';';
        { name: 'AI Healthcare Platform', href: '/services/ai-healthcare-platform', icon: Heart },';';
        { name: 'AI Legal Document Automation', href: '/services/ai-legal-document-automation', icon: FileText },';';
        { name: 'AI Healthcare Analytics', href: '/services/ai-healthcare-analytics', icon: Heart },';';
        { name: 'AI Financial Trading', href: '/services/ai-financial-trading', icon: DollarSign },';';
        { name: 'AI Content Creation Suite', href: '/services/ai-content-creation-suite', icon: PenTool },
      ]
    },';
    {';';
      title: 'Cloud & Infrastructure',';
      items: [';';
        { name: 'Cloud DevOps', href: '/services/cloud-devops', icon: Cloud },';';
        { name: 'IT Infrastructure', href: '/services/it-infrastructure', icon: Server },';';
        { name: 'FinOps Advisor', href: '/services/finops-advisor', icon: DollarSign },';';
        { name: 'Cloud FinOps Optimizer', href: '/services/cloud-finops-optimizer', icon: BarChart3 },';';
        { name: 'IT Consulting', href: '/it-consulting', icon: Cpu },';';
        { name: 'Onsite IT Services', href: '/it-onsite-services', icon: Server },';';
        { name: 'Enterprise Solutions', href: '/enterprise', icon: Building },';';
        { name: 'Healthcare Solutions', href: '/healthcare-solutions', icon: Heart },';';
        { name: 'Government Solutions', href: '/government-solutions', icon: Building },';';
        { name: 'Manufacturing Solutions', href: '/manufacturing-solutions', icon: Truck },';';
        { name: 'Digital Transformation', href: '/services/digital-transformation', icon: Zap },';';
        { name: 'Data Analytics', href: '/services/data-analytics', icon: BarChart3 },
      ]
    },';
    {';';
      title: 'Cybersecurity & Privacy',';
      items: [';';
        { name: 'AI Cybersecurity Platform', href: '/services/ai-cybersecurity-platform', icon: Shield },';';
        { name: 'Security Headers & CSP', href: '/services/security-headers-csp', icon: Lock },';';
        { name: 'DSR Privacy Portal', href: '/services/dsr-portal', icon: Shield },';';
        { name: 'Zero Trust Network Access', href: '/services/zero-trust-network-access', icon: Lock },';';
        { name: 'AI Autonomous Forensics', href: '/ai-autonomous-forensics', icon: Shield },';';
        { name: 'AI Autonomous Threat Intelligence', href: '/ai-autonomous-threat-intelligence', icon: Shield },';';
        { name: 'AI Autonomous Mobile Security', href: '/ai-autonomous-mobile-security', icon: Smartphone },';';
        { name: 'AI Autonomous Governance', href: '/ai-autonomous-governance', icon: Shield },
      ]
    },';
    {';';
      title: 'Micro SaaS Solutions',';
      items: [';';
        { name: 'Micro SaaS Platform', href: '/micro-saas', icon: ShoppingCart },';';
        { name: 'Micro CRM', href: '/services/micro-crm', icon: Users },';';
        { name: 'Helpdesk Platform', href: '/services/helpdesk', icon: MessageCircle },';';
        { name: 'Website Analytics', href: '/services/website-analytics', icon: BarChart3 },';';
        { name: 'IT Helpdesk', href: '/services/it-helpdesk', icon: HelpCircle },';';
        { name: 'Affiliate Tracking', href: '/services/affiliate-tracking', icon: TrendingUp },';';
        { name: 'Mobile Survey', href: '/services/mobile-survey', icon: Smartphone },';';
        { name: 'Email Sequencer', href: '/services/email-sequencer', icon: Mail },';';
        { name: 'Podcast Transcription', href: '/services/podcast-transcription', icon: Video },';';
        { name: 'Returns Management', href: '/services/returns-management', icon: Truck },';';
        { name: 'AI Auto Email Responder', href: '/services/ai-auto-email-responder', icon: Mail },';';
        { name: 'Customer Feedback Surveys', href: '/services/mobile-feedback-surveys', icon: MessageCircle },';';
        { name: 'AI Compliance Copilot', href: '/services/ai-compliance-copilot', icon: Shield },';';
        { name: 'LLM Content Studio', href: '/services/llm-content-studio', icon: PenTool },';';
        { name: 'AI Autonomous Code Reviewer', href: '/services/ai-autonomous-code-reviewer', icon: Code },
      ]
    },';
    {';';
      title: 'Emerging Technologies',';
      items: [';';
        { name: 'Quantum Computing', href: '/services/quantum-computing', icon: Atom },';';
        { name: 'AI Quantum Hybrid Platform', href: '/services/ai-quantum-hybrid-platform', icon: Atom },';';
        { name: 'IoT Edge Computing', href: '/services/iot-edge-computing', icon: Network },';';
        { name: 'Digital Twin', href: '/services/digital-twin', icon: Eye },';';
        { name: 'Space Technology', href: '/space-tech', icon: Satellite },';';
        { name: 'Green IT Solutions', href: '/green-it', icon: Leaf },';';
        { name: 'Sustainable Technology', href: '/services/sustainable-technology', icon: Leaf },';';
        { name: 'AI Predictive Maintenance', href: '/services/ai-predictive-maintenance', icon: TrendingUp },';';
        { name: 'Quantum Machine Learning', href: '/services/quantum-machine-learning', icon: Brain },';';
        { name: 'AI Autonomous Scientific Researcher', href: '/ai-autonomous-scientific-researcher', icon: Brain },';';
        { name: 'AI Autonomous Prediction', href: '/ai-autonomous-prediction', icon: TrendingUp },
      ]
    },';
    {';';
      title: 'Industry Solutions',';
      items: [';';
        { name: 'Healthcare Solutions', href: '/healthcare-solutions', icon: Heart },';';
        { name: 'Government Solutions', href: '/government-solutions', icon: Building },';';
        { name: 'Manufacturing Solutions', href: '/manufacturing-solutions', icon: Truck },';';
        { name: 'Enterprise Solutions', href: '/enterprise', icon: Building },';';
        { name: 'Industry Solutions', href: '/industry-solutions', icon: Building },';';
        { name: 'Infrastructure Solutions', href: '/infrastructure', icon: Server },';';
        { name: 'Research & Development', href: '/research-development', icon: TestTube },
      ]
    },';
    {';';
      title: 'Support & Resources',';
      items: [';';
        { name: 'Help Center', href: '/help', icon: HelpCircle },';';
        { name: 'FAQ', href: '/faq', icon: HelpCircle },';';
        { name: 'Documentation', href: '/docs', icon: FileText },';';
        { name: 'API Reference', href: '/api', icon: Code },';';
        { name: 'Community', href: '/community', icon: Users },';';
        { name: 'Blog', href: '/blog', icon: BookOpen },';';
        { name: 'News', href: '/news', icon: Newspaper },';';
        { name: 'Case Studies', href: '/case-studies', icon: FileText },';';
        { name: 'Pricing', href: '/pricing', icon: DollarSign },';';
        { name: 'Contact Support', href: '/contact', icon: MessageCircle },';';
        { name: 'How It Works', href: '/how-it-works', icon: HelpCircle },';';
        { name: 'Get Started', href: '/get-started', icon: Rocket },
      ]
    }
  ];

  const isActive = (href: string) => location.pathname === href;

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
          
          {/* Sidebar */}';
          <motion.div';';
            initial={{ x: '-100%' }}';
            animate={{ x: 0 }}';';
            exit={{ x: '-100%' }}';';
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed left-0 top-0 h-full w-80 bg-slate-900/95 backdrop-blur-xl border-r border-cyan-400/20 z-50 overflow-y-auto"
          >
            {/* Header */}
            <div className="p-6 border-b border-slate-700/50">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-lg font-bold text-white">Navigation</span>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Navigation Content */}
            <div className="p-4 space-y-2">
              {navigationSections.map((section) => (
                <div key={section.title} className="space-y-1">
                  <button
                    onClick={() => toggleSection(section.title)}
                    className={`w-full flex items-center justify-between p-3 rounded-lg text-left transition-all duration-200 ${';
                      expandedSections.includes(section.title)';';
                        ? 'bg-slate-800/50 text-white'';';
                        : 'text-slate-300 hover:text-white hover:bg-slate-800/30'
                    }`}
                  >
                    <div className="flex items-center space-x-3">';
                      {section.featured && <Star className="w-4 h-4 text-yellow-400" />}';';
                      <span className={`font-medium ${section.featured ? 'text-cyan-300' : ''}`}>
                        {section.title}
                      </span>
                    </div>
                    <ChevronRight ';
                      className={`w-4 h-4 transition-transform duration-200 ${';';
                        expandedSections.includes(section.title) ? 'rotate-90' : ''
                      }`} 
                    />
                  </button>
                  
                  <AnimatePresence>
                    {expandedSections.includes(section.title) && (
                      <motion.div';
                        initial={{ opacity: 0, height: 0 }}';';
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="ml-4 space-y-1"
                      >
                        {section.items.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            onClick={onClose}
                            className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 group ${';
                              isActive(item.href)';';
                                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/30'';';
                                : 'text-slate-400 hover:text-white hover:bg-slate-800/30'
                            }`}
                          >';
                            <item.icon className={`w-4 h-4 ${';';
                              isActive(item.href) ? 'text-cyan-400' : 'text-slate-500 group-hover:text-slate-300'
                            }`} />
                            <span className="text-sm">{item.name}</span>
                            {item.featured && <Sparkles className="w-3 h-3 text-yellow-400 ml-auto" />}
                            {isActive(item.href) && <ArrowRight className="w-3 h-3 text-cyan-400 ml-auto" />}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-slate-700/50 mt-auto">
              <div className="text-center">
                <Link
                  to="/contact"
                  onClick={onClose}
                  className="block w-full py-3 px-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 text-center"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};';
=======';';
import React from 'react';';';
import Link from 'next/link';';';
import { X, Brain, Zap, Shield, Code, Users, FileText, Phone, Mail, ArrowRight } from 'lucide-react';

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function Sidebar(props: any) {
  if (!isOpen) return null;
';
  const quickLinks = [';';
    { name: 'AI Services', href: '/services/ai-services', icon: Brain },';';
    { name: 'IT Services', href: '/services/it-services', icon: Zap },';';
    { name: 'Micro SaaS', href: '/services/micro-saas', icon: Code },';';
    { name: 'Cybersecurity', href: '/services/it/cybersecurity', icon: Shield },';';
    { name: 'About Us', href: '/about', icon: Users },';';
    { name: 'Case Studies', href: '/case-studies', icon: FileText }
  ];
';
  const contactInfo = [';';
    { icon: Phone, text: '+1 302 464 0950', href: 'tel:+13024640950' },';';
    { icon: Mail, text: 'kleber@ziontechgroup.com', href: 'mailto:kleber@ziontechgroup.com' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="absolute right-0 top-0 h-full w-96 bg-white shadow-xl overflow-y-auto">
        {/* Header */}
        <div className="p-6 border-b">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg grid place-items-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-gray-900">Zion Tech Group</span>
            </div>
            <button 
              onClick={onClose} 
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Close sidebar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Quick Links */}
        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
          <nav className="space-y-2">
            {quickLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                onClick={onClose}
              >
                <link .icon className="w-5 h-5 text-gray-500 group-hover:text-blue-600"  />
                <span className="text-gray-700 group-hover:text-blue-600">{link.name}</span>
                <ArrowRight className="w-4 h-4 text-gray-400 ml-auto group-hover:text-blue-600" />
              </Link>
            ))}
          </nav>
        </div>

        {/* Contact Information */}
        <div className="p-6 border-t">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Us</h3>
          <div className="space-y-3">
            {contactInfo.map((contact, index) => (
              <a
                key={index}
                href={contact.href}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <contact.icon className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700">{contact.text}</span>
              </a>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="p-6 border-t">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-4 text-white">
            <h4 className="font-semibold mb-2">Ready to Get Started?</h4>';
            <p className="text-sm text-blue-100 mb-4">';';
              Let's discuss how we can help transform your business with cutting-edge technology.
            </p>
            <div className="space-y-2">
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-600 py-2 px-4 rounded-lg font-medium text-center hover:bg-gray-100 transition-colors"
                onClick={onClose}
              >
                Contact Us
              </Link>
              <Link
                href="/request-quote"
                className="block w-full border border-white text-white py-2 px-4 rounded-lg font-medium text-center hover:bg-white hover:text-blue-600 transition-colors"
                onClick={onClose}
              >
                Get Quote
              </Link>
>>>>>>> origin/main
            </div>
          </div>
        </div>
      </div>
<<<<<<< HEAD
    </div>
=======
<<<<<<< HEAD
    </aside>
=======
=======
  return (
    <>
      {/* Backdrop for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div className={`
        fixed top-0 left-0 h-full bg-gray-900 border-r border-gray-800 z-50 transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 lg:static lg:z-auto
        w-80 overflow-y-auto
      `}>
        
        {/* Header */}
        <div className="p-6 border-b border-gray-800">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                Zion Tech Group
              </h2>
              <p className="text-xs text-gray-400">Technology Solutions</p>
            </div>
          </Link>
        </div>

        {/* Quick Stats */}
        <div className="p-4 border-b border-gray-800">
          <div className="grid grid-cols-3 gap-3 text-center">
            <div className="bg-gray-800/50 rounded-lg p-3">
              <div className="text-cyan-400 font-bold text-lg">50+</div>
              <div className="text-gray-400 text-xs">Services</div>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-3">
              <div className="text-green-400 font-bold text-lg">24/7</div>
              <div className="text-gray-400 text-xs">Support</div>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-3">
              <div className="text-purple-400 font-bold text-lg">99%</div>
              <div className="text-gray-400 text-xs">Uptime</div>
            </div>
          </div>
        </div>
>>>>>>> d200903062be89cd2962b930112f6c17412cdf5b

        {/* Navigation */}
        <nav className="p-4 space-y-2">
          {sidebarSections.map((section) => (
            <div key={section.name} className="space-y-1">
              
              {/* Section Header */}
              {section.expandable ? (
                <button
                  onClick={() => toggleSection(section.name)}
                  className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors duration-200"
                >
                  <span>{section.name}</span>
                  {expandedSections.includes(section.name) ? (
                    <ChevronDown className="w-4 h-4" />
                  ) : (
                    <ChevronRight className="w-4 h-4" />
                  )}
                </button>
              ) : (
                <div className="px-3 py-2 text-sm font-medium text-gray-500 uppercase tracking-wider">
                  {section.name}
                </div>
              )}

              {/* Section Items */}
              {(!section.expandable || expandedSections.includes(section.name)) && (
                <div className="space-y-1 pl-2">
                  {section.items.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={onClose}
                      className={`
                        flex items-center space-x-3 px-3 py-2 text-sm rounded-lg transition-colors duration-200 group
                        ${isActive(item.href)
                          ? 'bg-blue-600 text-white'
                          : 'text-gray-300 hover:text-white hover:bg-gray-800'
                        }
                        ${item.featured ? 'border border-cyan-500/30 bg-cyan-500/5' : ''}
                      `}
                    >
                      <item.icon className={`
                        w-4 h-4 flex-shrink-0
                        ${isActive(item.href) ? 'text-white' : 'text-gray-400 group-hover:text-cyan-400'}
                        ${item.featured ? 'text-cyan-400' : ''}
                      `} />
                      <span className="flex-1 truncate">{item.name}</span>
                      {item.featured && (
                        <Star className="w-3 h-3 text-cyan-400 fill-current" />
                      )}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Contact Info */}
        <div className="p-4 border-t border-gray-800 mt-auto">
          <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-lg p-4 border border-blue-500/20">
            <h3 className="text-sm font-semibold text-white mb-3">Get In Touch</h3>
            <div className="space-y-2 text-xs">
              <div className="flex items-center space-x-2 text-gray-300">
                <Phone className="w-3 h-3 text-cyan-400" />
                <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Mail className="w-3 h-3 text-cyan-400" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors truncate">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-start space-x-2 text-gray-300">
                <Globe className="w-3 h-3 text-cyan-400 mt-0.5" />
                <span className="text-xs">Delaware, USA</span>
              </div>
            </div>
            
            <Link
              to="/contact"
              className="inline-flex items-center justify-center w-full mt-3 px-3 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-medium rounded-md hover:from-blue-700 hover:to-purple-700 transition-colors duration-200"
              onClick={onClose}
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-800">
          <div className="text-center text-xs text-gray-500">
            <p>© 2025 Zion Tech Group</p>
            <p className="mt-1">Innovation • Excellence • Growth</p>
          </div>
        </div>
      </div>
    </>
<<<<<<< HEAD
>>>>>>> origin/main
>>>>>>> cursor/test-and-fix-pm2-automations-and-merge-2088
  );
}
>>>>>>> origin/cursor/website-audit-content-update-and-deployment-fe38

</item>
</motion>
</ChevronRight>
</motion>
</string>
</SidebarProps>';
</string>;';;';
=======
  );
}

// Default export for compatibility
export default Sidebar;
>>>>>>> d200903062be89cd2962b930112f6c17412cdf5b
