import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
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
  GitFork,
  Briefcase,
  Newspaper,
  FileText,
  Leaf,
  Building,
  Truck,
  Mail,
  Video,
  Satellite,
  TestTube,
  Code,
  Target,
  GraduationCap,
  Smartphone
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const location = useLocation();
  const [expandedSections, setExpandedSections] = useState<string[]>(['Main Navigation']);

  const toggleSection = (section: string) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const navigationSections = [
    {
      title: 'Main Navigation',
      items: [
        { name: 'Home', href: '/', icon: Home },
        { name: 'About', href: '/about', icon: Users },
        { name: 'Services', href: '/services', icon: Zap },
        { name: 'Contact', href: '/contact', icon: MessageCircle },
        { name: 'Blog', href: '/blog', icon: BookOpen },
        { name: 'Careers', href: '/careers', icon: Briefcase },
        { name: 'Partners', href: '/partners', icon: Users },
        { name: 'Case Studies', href: '/case-studies', icon: FileText },
        { name: 'Help Center', href: '/help', icon: HelpCircle }
      ]
    },
    {
      title: 'Featured Services',
      featured: true,
      items: [
        { name: 'AI Solutions Hub', href: '/ai-solutions', icon: Brain, featured: true },
        { name: 'Quantum Computing', href: '/services/quantum-computing', icon: Atom, featured: true },
        { name: 'AI Cybersecurity Platform', href: '/services/ai-cybersecurity-platform', icon: Shield },
        { name: 'IoT Edge Computing', href: '/services/iot-edge-computing', icon: Network },
        { name: 'AI Content Creation', href: '/services/ai-content-creation', icon: PenTool },
        { name: 'AI HR Platform', href: '/services/ai-hr-platform', icon: Users },
        { name: 'AI Predictive Maintenance', href: '/services/ai-predictive-maintenance', icon: TrendingUp },
        { name: 'Quantum Machine Learning', href: '/services/quantum-machine-learning', icon: Brain }
      ]
    },
    {
      title: 'AI & Machine Learning',
      icon: Brain,
      items: [
        { name: 'AI Workflow Orchestrator', href: '/services/ai-workflow-orchestrator', icon: GitFork },
        { name: 'AI Data Governance Platform', href: '/services/ai-data-governance-platform', icon: Shield },
        { name: 'AI Customer Experience Analytics', href: '/services/ai-customer-experience-analytics', icon: Brain },
        { name: 'AI Business Intelligence Analytics', href: '/services/ai-business-intelligence-analytics', icon: BarChart3 },
        { name: 'AI Compliance Assistant', href: '/services/ai-compliance-assistant', icon: Shield },
        { name: 'AI Sales Copilot', href: '/services/ai-sales-copilot', icon: Users },
        { name: 'AI-Powered SEO', href: '/services/ai-powered-seo', icon: TrendingUp },
        { name: 'AI Content Marketing Suite', href: '/services/ai-content-marketing-suite', icon: FileText },
        { name: 'AI Customer Support Automation', href: '/services/ai-customer-support-automation', icon: MessageCircle },
        { name: 'AI Project Management', href: '/services/ai-project-management', icon: Target },
        { name: 'AI Financial Analytics', href: '/services/ai-financial-analytics', icon: DollarSign },
        { name: 'AI Financial Risk Management', href: '/services/ai-financial-risk-management', icon: Shield },
        { name: 'AI Code Review Security Scanner', href: '/services/ai-code-review-security-scanner', icon: Code },
        { name: 'AI DevOps Automation Platform', href: '/services/ai-devops-automation-platform', icon: GitFork },
        { name: 'AI Customer Experience Support', href: '/services/ai-customer-experience-support', icon: MessageCircle },
        { name: 'AI Marketing Automation Personalization', href: '/services/ai-marketing-automation-personalization', icon: Target },
        { name: 'AI Quantum Hybrid Platform', href: '/services/ai-quantum-hybrid-platform', icon: Atom },
        { name: 'AI Quantum Financial Trading', href: '/services/ai-quantum-financial-trading', icon: BarChart3 },
        { name: 'AI Autonomous Supply Chain', href: '/services/ai-autonomous-supply-chain', icon: Truck },
        { name: 'AI Cybersecurity Threat Intelligence', href: '/services/ai-cybersecurity-threat-intelligence', icon: Shield }
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      items: [
        { name: 'Cloud DevOps', href: '/services/cloud-devops', icon: Server },
        { name: 'IT Infrastructure', href: '/services/it-infrastructure', icon: Building },
        { name: 'FinOps Advisor', href: '/services/finops-advisor', icon: DollarSign },
        { name: 'Cloud FinOps Optimizer', href: '/services/cloud-finops-optimizer', icon: BarChart3 },
        { name: 'IT Consulting', href: '/it-consulting', icon: Cpu },
        { name: 'Enterprise Solutions', href: '/solutions/enterprise', icon: Building },
        { name: 'Healthcare Solutions', href: '/solutions/healthcare', icon: Heart }
      ]
    },
    {
      title: 'Cybersecurity & Privacy',
      icon: Shield,
      items: [
        { name: 'AI Cybersecurity Platform', href: '/services/ai-cybersecurity-platform', icon: Shield },
        { name: 'Security Headers & CSP', href: '/services/security-headers-csp', icon: Lock },
        { name: 'DSR Privacy Portal', href: '/services/dsr-portal', icon: Shield },
        { name: 'Zero Trust Network Access', href: '/services/zero-trust-network-access', icon: Lock },
        { name: 'AI Compliance Assistant', href: '/services/ai-compliance-assistant', icon: Shield }
      ]
    },
    {
      title: 'Digital Transformation',
      icon: Zap,
      items: [
        { name: 'Data Analytics', href: '/services/data-analytics', icon: BarChart3 },
        { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence', icon: TrendingUp },
        { name: 'Website Analytics', href: '/services/website-analytics', icon: BarChart3 },
        { name: 'AI Financial Analytics', href: '/services/ai-financial-analytics', icon: DollarSign },
        { name: 'AI Healthcare Analytics', href: '/services/ai-healthcare-analytics', icon: Heart },
        { name: 'Digital Twin', href: '/services/digital-twin', icon: Eye },
        { name: 'Digital Transformation', href: '/services/digital-transformation', icon: Zap },
        { name: 'IT Consulting', href: '/it-consulting', icon: Cpu },
        { name: 'Enterprise Solutions', href: '/solutions/enterprise', icon: Building }
      ]
    },
    {
      title: 'Emerging Technologies',
      icon: Atom,
      items: [
        { name: 'Quantum Computing', href: '/services/quantum-computing', icon: Atom },
        { name: 'IoT Edge Computing', href: '/services/iot-edge-computing', icon: Network },
        { name: 'AI Healthcare Platform', href: '/services/ai-healthcare-platform', icon: Heart },
        { name: 'AI Autonomous Research', href: '/services/ai-autonomous-research-assistant', icon: Brain },
        { name: 'AI Quantum Hybrid Platform', href: '/services/ai-quantum-hybrid-platform', icon: Atom },
        { name: 'Digital Twin', href: '/services/digital-twin', icon: Eye },
        { name: 'Space Technology', href: '/space-tech', icon: Satellite }
      ]
    },
    {
      title: 'Data & Analytics',
      icon: BarChart3,
      items: [
        { name: 'Data Analytics', href: '/services/data-analytics', icon: BarChart3 },
        { name: 'Business Intelligence', href: '/services/ai-business-intelligence-analytics', icon: TrendingUp }
      ]
    },
    {
      title: 'Micro SaaS Solutions',
      icon: ShoppingCart,
      items: [
        { name: 'Micro SaaS Platform', href: '/micro-saas', icon: ShoppingCart },
        { name: 'Micro CRM', href: '/services/micro-crm', icon: Users },
        { name: 'Helpdesk Platform', href: '/services/helpdesk-platform', icon: MessageCircle },
        { name: 'Website Analytics', href: '/services/website-analytics', icon: BarChart3 },
        { name: 'IT Helpdesk', href: '/services/it-helpdesk', icon: HelpCircle },
        { name: 'Affiliate Tracking', href: '/services/affiliate-tracking', icon: TrendingUp },
        { name: 'Mobile Survey', href: '/services/mobile-survey', icon: Smartphone },
        { name: 'Podcast Transcription', href: '/services/podcast-transcription', icon: MessageCircle },
        { name: 'Email Sequencer', href: '/services/email-sequencer', icon: Mail },
        { name: 'Returns Management', href: '/services/returns-management', icon: Truck },
        { name: 'LLM Content Studio', href: '/services/llm-content-studio', icon: FileText }
      ]
    },
    {
      title: 'Featured Services',
      icon: Star,
      items: [
        { name: '2025 New Innovative Services', href: '/new-innovative-services-2025', icon: Star },
        { name: '2026 Services Overview', href: '/ultimate-services-showcase-2026', icon: Star },
        { name: '2027 Services Overview', href: '/comprehensive-services-showcase-2027', icon: Star },
        { name: '2029 Cutting-Edge Services', href: '/zion-cutting-edge-services-2029', icon: Star },
        { name: '2029 Comprehensive Services Showcase', href: '/comprehensive-services-showcase-2029', icon: Star }
      ]
    },
    {
      title: 'Support & Resources',
      icon: HelpCircle,
      items: [
        { name: 'Help Center', href: '/help', icon: HelpCircle },
        { name: 'FAQ', href: '/faq', icon: HelpCircle },
        { name: 'Documentation', href: '/documentation', icon: BookOpen },
        { name: 'API Documentation', href: '/api-docs', icon: Code },
        { name: 'Developer Portal', href: '/developer', icon: Cpu },
        { name: 'Training', href: '/training', icon: GraduationCap },
        { name: 'Webinars', href: '/webinars', icon: Video },
        { name: 'White Papers', href: '/white-papers', icon: FileText }
      ]
    }
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(href);
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
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed left-0 top-0 h-full w-80 bg-zion-slate-dark border-r border-cyan-400/20 shadow-2xl z-50 overflow-y-auto"
          >
            {/* Header */}
            <div className="p-6 border-b border-cyan-400/20">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    Zion Tech
                  </span>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg text-gray-400 hover:text-cyan-400 hover:bg-cyan-400/10 transition-colors duration-200"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Navigation Content */}
            <div className="p-4 space-y-6">
              {navigationSections.map((section) => (
                <div key={section.title} className="space-y-3">
                  {/* Section Header */}
                  <button
                    onClick={() => toggleSection(section.title)}
                    className="flex items-center justify-between w-full text-left group"
                  >
                    <div className="flex items-center space-x-2">
                      <section.icon className="w-5 h-5 text-cyan-400" />
                      <span className="font-semibold text-white group-hover:text-cyan-400 transition-colors duration-200">
                        {section.title}
                      </span>
                    </div>
                    <ChevronRight 
                      className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                        expandedSections.includes(section.title) ? 'rotate-90' : ''
                      }`} 
                    />
                  </button>

                  {/* Section Items */}
                  <AnimatePresence>
                    {expandedSections.includes(section.title) && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="ml-6 space-y-1"
                      >
                        {section.items.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            onClick={onClose}
                            className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-all duration-200 group ${
                              isActive(item.href)
                                ? 'bg-cyan-400/20 text-cyan-400 border border-cyan-400/30'
                                : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/10'
                            }`}
                          >
                            <item.icon className={`w-4 h-4 ${
                              isActive(item.href) ? 'text-cyan-400' : 'text-gray-500 group-hover:text-cyan-400'
                            }`} />
                            <span className="text-sm font-medium">{item.name}</span>
                            {isActive(item.href) && (
                              <div className="ml-auto w-2 h-2 bg-cyan-400 rounded-full"></div>
                            )}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-cyan-400/20 bg-zion-slate-dark/50 backdrop-blur-sm">
              <div className="text-center text-sm text-gray-400">
                <p>© 2024 Zion Tech Group</p>
                <p className="text-xs mt-1">Innovation Hub</p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
