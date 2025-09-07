import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronRight,
  ChevronDown,
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
  Phone,
  Mail,
  MapPin,
  Globe,
  Code,
  Cloud,
  Lock,
  Cpu,
  Database,
  Network,
  Smartphone,
  Server,
  Wifi,
  Bot,
  Workflow,
  Eye,
  Sparkles,
  Atom,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  Activity,
  MessageCircle,
  Search,
  Settings,
  Palette,
  Rocket,
  Target,
  Handshake,
  Lightbulb,
  Home,
  Info,
  Contact,
  Briefcase,
  BookOpen,
  Users2,
  Award,
  Star,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, className = '' }) => {
  const [expandedSections, setExpandedSections] = useState<string[]>([]);
  const location = useLocation();

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const isActive = (path: string) => location.pathname === path;

  const navigationSections = [
    {
      id: 'main',
      title: 'Main Navigation',
      icon: Home,
      items: [
        { name: 'Home', path: '/', icon: Home },
        { name: 'About Us', path: '/about', icon: Info },
        { name: 'Contact', path: '/contact', icon: Contact },
        { name: 'Services Overview', path: '/services', icon: Briefcase }
      ]
    },
    {
      id: 'ai-services',
      title: 'AI & Machine Learning',
      icon: Brain,
      items: [
        { name: 'AI Healthcare Platform', path: '/services/ai-healthcare-platform', icon: Activity, price: '$2,500/month' },
        { name: 'AI Cybersecurity Platform', path: '/services/ai-cybersecurity-platform', icon: Shield, price: '$3,200/month' },
        { name: 'AI Supply Chain Optimization', path: '/services/ai-supply-chain-optimization', icon: TrendingUp, price: '$2,800/month' },
        { name: 'AI Quantum Hybrid Platform', path: '/services/ai-quantum-hybrid-platform', icon: Atom, price: '$5,000/month' },
        { name: 'AI Business Intelligence', path: '/services/ai-business-intelligence', icon: BarChart3, price: '$1,800/month' },
        { name: 'AI Content Optimization', path: '/services/ai-content-optimizer-pro', icon: FileText, price: '$1,200/month' },
        { name: 'AI Workflow Automation', path: '/services/ai-workflow-automation', icon: Workflow, price: '$199/month' },
        { name: 'AI Project Management', path: '/services/ai-project-management-platform', icon: Target, price: '$299/month' },
        { name: 'AI Autonomous Business Operations', path: '/services/ai-autonomous-business-operations', icon: Rocket, price: '$5,999/month' }
      ]
    },
    {
      id: 'micro-saas',
      title: 'Micro SAAS Solutions',
      icon: Zap,
      items: [
        { name: 'Micro CRM Platform', path: '/services/micro-crm', icon: Users, price: '$99/month' },
        { name: 'AI Sales Copilot', path: '/services/ai-sales-copilot', icon: MessageCircle, price: '$399/month' },
        { name: 'Cloud FinOps Optimizer', path: '/services/cloud-finops-optimizer', icon: Coins, price: '$599/month' },
        { name: 'AI Compliance Assistant', path: '/services/ai-compliance-assistant', icon: CheckCircle, price: '$249/month' },
        { name: 'AI Code Review Security', path: '/services/ai-code-review-security', icon: Code, price: '$199/month' },
        { name: 'AI Customer Support', path: '/services/ai-customer-support-automation', icon: HelpCircle, price: '$299/month' }
      ]
    },
    {
      id: 'it-infrastructure',
      title: 'IT Infrastructure',
      icon: Server,
      items: [
        { name: 'Cloud & DevOps', path: '/services/cloud-devops', icon: Cloud, price: '$1,500/month' },
        { name: 'Cybersecurity Suite', path: '/services/cybersecurity', icon: Lock, price: '$2,000/month' },
        { name: 'Digital Transformation', path: '/services/digital-transformation', icon: Rocket, price: '$3,500/month' },
        { name: 'IoT Edge Computing', path: '/services/iot-edge', icon: Cpu, price: '$2,200/month' },
        { name: 'Quantum Computing', path: '/services/quantum-computing-solutions', icon: Atom, price: '$4,500/month' },
        { name: 'Green IT Solutions', path: '/services/green-it', icon: Leaf, price: '$1,800/month' },
        { name: '5G Enterprise Solutions', path: '/services/5g-enterprise', icon: Wifi, price: '$4,200/month' },
        { name: 'Network Infrastructure', path: '/services/network-infrastructure', icon: Network, price: '$2,800/month' }
      ]
    },
    {
      id: 'emerging-tech',
      title: 'Emerging Technologies',
      icon: Rocket,
      items: [
        { name: 'Blockchain Solutions', path: '/services/blockchain-enterprise-solutions', icon: Database, price: '$3,800/month' },
        { name: 'Digital Twin Platform', path: '/services/digital-twin', icon: Eye, price: '$2,600/month' },
        { name: 'Space Technology', path: '/services/space-tech', icon: Satellite, price: '$6,000/month' },
        { name: 'Sustainability Analytics', path: '/services/sustainability', icon: Leaf, price: '$1,900/month' },
        { name: 'Edge AI Computing', path: '/services/ai-iot-edge-computing-platform', icon: Cpu, price: '$3,600/month' },
        { name: 'Smart Contract Risk Scanner', path: '/services/smart-contract-risk-scanner', icon: Shield, price: '$1,500/month' },
        { name: 'Quantum AI Trading Platform', path: '/services/quantum-ai-trading-platform', icon: Atom, price: '$12,999/month' }
      ]
    },
    {
      id: 'solutions',
      title: 'Industry Solutions',
      icon: Building2,
      items: [
        { name: 'Healthcare Technology', path: '/solutions/healthcare', icon: Activity, price: 'Custom Pricing' },
        { name: 'Financial Services', path: '/solutions/financial', icon: Coins, price: 'Custom Pricing' },
        { name: 'Manufacturing', path: '/solutions/manufacturing', icon: HardDrive, price: 'Custom Pricing' },
        { name: 'Retail & E-commerce', path: '/solutions/retail', icon: ShoppingBag, price: 'Custom Pricing' },
        { name: 'Education Technology', path: '/solutions/education', icon: BookOpen, price: 'Custom Pricing' },
        { name: 'Government Solutions', path: '/solutions/government', icon: Building2, price: 'Custom Pricing' }
      ]
    },
    {
      id: 'resources',
      title: 'Resources & Support',
      icon: FileText,
      items: [
        { name: 'Documentation', path: '/documentation', icon: FileText },
        { name: 'Help Center', path: '/help-center', icon: HelpCircle },
        { name: 'Blog & Insights', path: '/blog', icon: BookOpen },
        { name: 'Case Studies', path: '/case-studies', icon: Award },
        { name: 'Webinars & Events', path: '/webinars', icon: Users2 },
        { name: 'API Reference', path: '/api', icon: Code },
        { name: 'Developer Portal', path: '/developers', icon: Settings },
        { name: 'Training & Certification', path: '/training', icon: Star }
      ]
    }
  ];

  const quickActions = [
    {
      name: 'Get Started',
      path: '/get-started',
      icon: Rocket,
      color: 'from-zion-cyan to-zion-purple'
    },
    {
      name: 'Request Demo',
      path: '/demo',
      icon: Eye,
      color: 'from-zion-purple to-zion-cyan'
    },
    {
      name: 'Contact Sales',
      path: '/contact',
      icon: MessageCircle,
      color: 'from-zion-cyan to-zion-purple'
    }
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
          <motion.aside
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className={`fixed left-0 top-0 h-full w-80 bg-zion-blue-dark border-r border-zion-purple/30 z-50 overflow-y-auto ${className}`}
          >
            {/* Header */}
            <div className="p-6 border-b border-zion-purple/20">
              <div className="flex items-center justify-between">
                <Link to="/" className="flex items-center space-x-2" onClick={onClose}>
                  <div className="w-10 h-10 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center">
                    <Rocket className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h1 className="text-lg font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                      Zion Tech Group
                    </h1>
                    <p className="text-xs text-zion-slate-light">Innovation • Security • Growth</p>
                  </div>
                </Link>
                <button
                  onClick={onClose}
                  className="p-2 text-zion-slate-light hover:text-zion-cyan transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="p-6 border-b border-zion-purple/20">
              <h3 className="text-sm font-semibold text-zion-cyan mb-4">Quick Actions</h3>
              <div className="space-y-3">
                {quickActions.map((action, index) => (
                  <Link
                    key={index}
                    to={action.path}
                    onClick={onClose}
                    className={`block w-full bg-gradient-to-r ${action.color} text-white p-3 rounded-lg font-medium text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                  >
                    <div className="flex items-center justify-center space-x-2">
                      <action.icon className="w-4 h-4" />
                      <span>{action.name}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Navigation Sections */}
            <div className="p-6 space-y-6">
              {navigationSections.map((section) => (
                <div key={section.id} className="space-y-3">
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="flex items-center justify-between w-full text-left text-sm font-semibold text-zion-cyan hover:text-zion-cyan-light transition-colors"
                  >
                    <div className="flex items-center space-x-2">
                      <section.icon className="w-4 h-4" />
                      <span>{section.title}</span>
                    </div>
                    {expandedSections.includes(section.id) ? (
                      <ChevronDown className="w-4 h-4" />
                    ) : (
                      <ChevronRight className="w-4 h-4" />
                    )}
                  </button>
                  
                  <AnimatePresence>
                    {expandedSections.includes(section.id) && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="ml-6 space-y-2"
                      >
                        {section.items.map((item, itemIndex) => (
                          <Link
                            key={itemIndex}
                            to={item.path}
                            onClick={onClose}
                            className={`flex items-center justify-between py-2 px-3 rounded-lg transition-all duration-200 group ${
                              isActive(item.path)
                                ? 'bg-zion-cyan/10 text-zion-cyan border border-zion-cyan/20'
                                : 'text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/10'
                            }`}
                          >
                            <div className="flex items-center space-x-2">
                              <item.icon className="w-4 h-4" />
                              <span className="text-sm">{item.name}</span>
                            </div>
                            {item.price && (
                              <span className="text-xs text-zion-purple/70 bg-zion-purple/10 px-2 py-1 rounded">
                                {item.price}
                              </span>
                            )}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Contact Info */}
            <div className="p-6 border-t border-zion-purple/20 mt-auto">
              <h3 className="text-sm font-semibold text-zion-cyan mb-4">Contact Information</h3>
              <div className="space-y-3 text-sm text-zion-slate-light">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-zion-cyan" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-zion-cyan" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-zion-cyan" />
                  <span>364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Globe className="w-4 h-4 text-zion-cyan" />
                  <span>ziontechgroup.com</span>
                </div>
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};

// Missing icon component
const ShoppingBag = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
  </svg>
);