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
  TestTube,
  Code
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const location = useLocation();
  const [expandedSections, setExpandedSections] = useState<string[]>(['2026 Services']);

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
        { name: 'Contact', href: '/contact', icon: MessageCircle },
        { name: 'Blog', href: '/blog', icon: BookOpen },
        { name: 'FAQ', href: '/faq', icon: HelpCircle },
        { name: 'Help Center', href: '/help', icon: HelpCircle },
        { name: 'Careers', href: '/careers', icon: Briefcase },
        { name: 'Partners', path: '/partners', icon: Users },
        { name: 'News', path: '/news', icon: Newspaper },
        { name: 'Case Studies', path: '/case-studies', icon: FileText }
      ]
    },
    {
      title: 'Featured Services',
      featured: true,
      items: [
        { name: '2026 Services Overview', href: '/ultimate-services-showcase-2026', icon: Star, featured: true },
        { name: '2027 Services Overview', href: '/comprehensive-services-showcase-2027', icon: Star, featured: true },
        { name: '2029 Cutting-Edge Services', href: '/zion-cutting-edge-services-2029', icon: Star, featured: true },
        { name: 'AI Solutions Hub', href: '/ai-solutions', icon: Brain, featured: true },
        { name: 'Quantum Computing', href: '/services/quantum-computing', icon: Atom },
        { name: 'AI Cybersecurity', href: '/services/ai-cybersecurity-platform', icon: Shield },
        { name: 'IoT Edge Computing', href: '/services/iot-edge-computing', icon: Network },
        { name: 'AI Content Creation', href: '/services/ai-content-creation', icon: PenTool },
        { name: 'AI HR Platform', href: '/services/ai-hr-platform', icon: Users },
        { name: 'Sustainable Technology', href: '/services/sustainable-technology', icon: Leaf },
        { name: 'AI Predictive Maintenance', href: '/services/ai-predictive-maintenance', icon: TrendingUp },
        { name: 'Quantum Machine Learning', href: '/services/quantum-machine-learning', icon: Brain },
      ]
    },
    {
      title: 'AI & Machine Learning',
      items: [
        { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence', icon: Brain },
        { name: 'AI Compliance Assistant', href: '/services/ai-compliance-assistant', icon: Shield },
        { name: 'AI Sales Copilot', href: '/services/ai-sales-copilot', icon: Users },
        { name: 'AI-Powered SEO', href: '/services/ai-seo', icon: TrendingUp },
        { name: 'Interview Assessment AI', href: '/services/interview-assessment', icon: Users },
        { name: 'AI Content Marketing Suite', href: '/services/ai-content-marketing-suite', icon: PenTool },
        { name: 'AI Customer Support', href: '/services/ai-customer-support-automation', icon: MessageCircle },
        { name: 'AI Data Analytics', href: '/services/data-analytics', icon: BarChart3 },
        { name: 'AI Marketing Automation', href: '/services/ai-marketing-automation', icon: Rocket },
        { name: 'AI Project Manager', href: '/services/ai-project-management', icon: Settings },
        { name: 'AI Workflow Automation', href: '/services/ai-workflow-automation', icon: Workflow },
        { name: 'AI Financial Analytics', href: '/services/ai-financial-analytics', icon: DollarSign },
        { name: 'AI Autonomous Research Assistant', href: '/services/ai-autonomous-research-assistant', icon: Brain },
        { name: 'AI Supply Chain Optimization', href: '/services/ai-supply-chain-optimization', icon: TrendingUp },
        { name: 'AI Healthcare Platform', href: '/services/ai-healthcare-platform', icon: Heart },
        { name: 'AI Legal Document Automation', href: '/services/ai-legal-document-automation', icon: FileText },
        { name: 'AI Healthcare Analytics', href: '/services/ai-healthcare-analytics', icon: Heart },
        { name: 'AI Financial Trading', href: '/services/ai-financial-trading', icon: DollarSign },
        { name: 'AI Content Creation Suite', href: '/services/ai-content-creation-suite', icon: PenTool },
      ]
    },
    {
      title: 'Cloud & Infrastructure',
      items: [
        { name: 'Cloud DevOps', href: '/services/cloud-devops', icon: Cloud },
        { name: 'IT Infrastructure', href: '/services/it-infrastructure', icon: Server },
        { name: 'FinOps Advisor', href: '/services/finops-advisor', icon: DollarSign },
        { name: 'Cloud FinOps Optimizer', href: '/services/cloud-finops-optimizer', icon: BarChart3 },
        { name: 'IT Consulting', href: '/it-consulting', icon: Cpu },
        { name: 'Onsite IT Services', href: '/it-onsite-services', icon: Server },
        { name: 'Enterprise Solutions', href: '/enterprise', icon: Building },
        { name: 'Healthcare Solutions', href: '/healthcare-solutions', icon: Heart },
        { name: 'Government Solutions', href: '/government-solutions', icon: Building },
        { name: 'Manufacturing Solutions', href: '/manufacturing-solutions', icon: Truck },
        { name: 'Digital Transformation', href: '/services/digital-transformation', icon: Zap },
        { name: 'Data Analytics', href: '/services/data-analytics', icon: BarChart3 },
      ]
    },
    {
      title: 'Cybersecurity & Privacy',
      items: [
        { name: 'AI Cybersecurity Platform', href: '/services/ai-cybersecurity-platform', icon: Shield },
        { name: 'Security Headers & CSP', href: '/services/security-headers-csp', icon: Lock },
        { name: 'DSR Privacy Portal', href: '/services/dsr-portal', icon: Shield },
        { name: 'Zero Trust Network Access', href: '/services/zero-trust-network-access', icon: Lock },
        { name: 'AI Autonomous Forensics', href: '/ai-autonomous-forensics', icon: Shield },
        { name: 'AI Autonomous Threat Intelligence', href: '/ai-autonomous-threat-intelligence', icon: Shield },
        { name: 'AI Autonomous Mobile Security', href: '/ai-autonomous-mobile-security', icon: Smartphone },
        { name: 'AI Autonomous Governance', href: '/ai-autonomous-governance', icon: Shield },
      ]
    },
    {
      title: 'Micro SaaS Solutions',
      items: [
        { name: 'Micro SaaS Platform', href: '/micro-saas', icon: ShoppingCart },
        { name: 'Micro CRM', href: '/services/micro-crm', icon: Users },
        { name: 'Helpdesk Platform', href: '/services/helpdesk', icon: MessageCircle },
        { name: 'Website Analytics', href: '/services/website-analytics', icon: BarChart3 },
        { name: 'IT Helpdesk', href: '/services/it-helpdesk', icon: HelpCircle },
        { name: 'Affiliate Tracking', href: '/services/affiliate-tracking', icon: TrendingUp },
        { name: 'Mobile Survey', href: '/services/mobile-survey', icon: Smartphone },
        { name: 'Email Sequencer', href: '/services/email-sequencer', icon: Mail },
        { name: 'Podcast Transcription', href: '/services/podcast-transcription', icon: Video },
        { name: 'Returns Management', href: '/services/returns-management', icon: Truck },
        { name: 'AI Auto Email Responder', href: '/services/ai-auto-email-responder', icon: Mail },
        { name: 'Customer Feedback Surveys', href: '/services/mobile-feedback-surveys', icon: MessageCircle },
        { name: 'AI Compliance Copilot', href: '/services/ai-compliance-copilot', icon: Shield },
        { name: 'LLM Content Studio', href: '/services/llm-content-studio', icon: PenTool },
        { name: 'AI Autonomous Code Reviewer', href: '/services/ai-autonomous-code-reviewer', icon: Code },
      ]
    },
    {
      title: 'Emerging Technologies',
      items: [
        { name: 'Quantum Computing', href: '/services/quantum-computing', icon: Atom },
        { name: 'AI Quantum Hybrid Platform', href: '/services/ai-quantum-hybrid-platform', icon: Atom },
        { name: 'IoT Edge Computing', href: '/services/iot-edge-computing', icon: Network },
        { name: 'Digital Twin', href: '/services/digital-twin', icon: Eye },
        { name: 'Space Technology', href: '/space-tech', icon: Satellite },
        { name: 'Green IT Solutions', href: '/green-it', icon: Leaf },
        { name: 'Sustainable Technology', href: '/services/sustainable-technology', icon: Leaf },
        { name: 'AI Predictive Maintenance', href: '/services/ai-predictive-maintenance', icon: TrendingUp },
        { name: 'Quantum Machine Learning', href: '/services/quantum-machine-learning', icon: Brain },
        { name: 'AI Autonomous Scientific Researcher', href: '/ai-autonomous-scientific-researcher', icon: Brain },
        { name: 'AI Autonomous Prediction', href: '/ai-autonomous-prediction', icon: TrendingUp },
      ]
    },
    {
      title: 'Industry Solutions',
      items: [
        { name: 'Healthcare Solutions', href: '/healthcare-solutions', icon: Heart },
        { name: 'Government Solutions', href: '/government-solutions', icon: Building },
        { name: 'Manufacturing Solutions', href: '/manufacturing-solutions', icon: Truck },
        { name: 'Enterprise Solutions', href: '/enterprise', icon: Building },
        { name: 'Industry Solutions', href: '/industry-solutions', icon: Building },
        { name: 'Infrastructure Solutions', href: '/infrastructure', icon: Server },
        { name: 'Research & Development', href: '/research-development', icon: TestTube },
      ]
    },
    {
      title: 'Support & Resources',
      items: [
        { name: 'Help Center', href: '/help', icon: HelpCircle },
        { name: 'FAQ', href: '/faq', icon: HelpCircle },
        { name: 'Documentation', href: '/docs', icon: FileText },
        { name: 'API Reference', href: '/api', icon: Code },
        { name: 'Community', href: '/community', icon: Users },
        { name: 'Blog', href: '/blog', icon: BookOpen },
        { name: 'News', href: '/news', icon: Newspaper },
        { name: 'Case Studies', href: '/case-studies', icon: FileText },
        { name: 'Pricing', href: '/pricing', icon: DollarSign },
        { name: 'Contact Support', href: '/contact', icon: MessageCircle },
        { name: 'How It Works', href: '/how-it-works', icon: HelpCircle },
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
          
          {/* Sidebar */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
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
                    className={`w-full flex items-center justify-between p-3 rounded-lg text-left transition-all duration-200 ${
                      expandedSections.includes(section.title)
                        ? 'bg-slate-800/50 text-white'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800/30'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      {section.featured && <Star className="w-4 h-4 text-yellow-400" />}
                      <span className={`font-medium ${section.featured ? 'text-cyan-300' : ''}`}>
                        {section.title}
                      </span>
                    </div>
                    <ChevronRight 
                      className={`w-4 h-4 transition-transform duration-200 ${
                        expandedSections.includes(section.title) ? 'rotate-90' : ''
                      }`} 
                    />
                  </button>
                  
                  <AnimatePresence>
                    {expandedSections.includes(section.title) && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
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
                            className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 group ${
                              isActive(item.href)
                                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/30'
                                : 'text-slate-400 hover:text-white hover:bg-slate-800/30'
                            }`}
                          >
                            <item.icon className={`w-4 h-4 ${
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
};
