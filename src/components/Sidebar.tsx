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
  Target
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
        { name: 'FAQ', href: '/faq', icon: HelpCircle },
        { name: 'Help Center', href: '/help', icon: HelpCircle }
      ]
    },
    {
      title: 'AI & Machine Learning',
      icon: Brain,
      items: [
        { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence', icon: BarChart3 },
        { name: 'AI Compliance Assistant', href: '/services/ai-compliance-assistant', icon: Shield },
        { name: 'AI Sales Copilot', href: '/services/ai-sales-copilot', icon: Users },
        { name: 'AI-Powered SEO', href: '/services/ai-seo', icon: TrendingUp },
        { name: 'AI Content Marketing Suite', href: '/services/ai-content-marketing-suite', icon: FileText },
        { name: 'AI Customer Support', href: '/services/ai-customer-support-automation', icon: MessageCircle },
        { name: 'AI Project Management', href: '/services/ai-project-management', icon: Target },
        { name: 'AI Financial Analytics', href: '/services/ai-financial-analytics', icon: DollarSign }
      ]
    },
    {
      title: 'Cloud & Infrastructure',
      icon: Cloud,
      items: [
        { name: 'Cloud DevOps', href: '/services/cloud-devops', icon: Server },
        { name: 'IT Infrastructure', href: '/services/it-infrastructure', icon: Building },
        { name: 'FinOps Advisor', href: '/services/finops-advisor', icon: DollarSign },
        { name: 'Cloud FinOps Optimizer', href: '/services/cloud-finops-optimizer', icon: BarChart3 },
        { name: 'IT Consulting', href: '/it-consulting', icon: Cpu }
      ]
    },
    {
      title: 'Cybersecurity & Privacy',
      icon: Shield,
      items: [
        { name: 'AI Cybersecurity Platform', href: '/services/ai-cybersecurity-platform', icon: Lock },
        { name: 'Security Headers & CSP', href: '/services/security-headers-csp', icon: Shield },
        { name: 'DSR Privacy Portal', href: '/services/dsr-portal', icon: Eye },
        { name: 'Zero Trust Network Access', href: '/services/zero-trust-network-access', icon: Lock }
      ]
    },
    {
      title: 'Emerging Technologies',
      icon: Atom,
      items: [
        { name: 'Quantum Computing', href: '/services/quantum-computing', icon: Atom },
        { name: 'IoT Edge Computing', href: '/services/iot-edge-computing', icon: Network },
        { name: 'AI Quantum Hybrid Platform', href: '/services/ai-quantum-hybrid-platform', icon: Brain },
        { name: 'Space Technology', href: '/space-tech', icon: Satellite },
        { name: 'Digital Twin', href: '/services/digital-twin', icon: Eye },
        { name: 'Digital Transformation', href: '/services/digital-transformation', icon: Zap }
      ]
    },
    {
      title: 'Micro SaaS Solutions',
      icon: ShoppingCart,
      items: [
        { name: 'Micro CRM', href: '/services/micro-crm', icon: Users },
        { name: 'Helpdesk Platform', href: '/services/helpdesk', icon: MessageCircle },
        { name: 'Website Analytics', href: '/services/website-analytics', icon: BarChart3 },
        { name: 'IT Helpdesk', href: '/services/it-helpdesk', icon: HelpCircle },
        { name: 'Affiliate Tracking', href: '/services/affiliate-tracking', icon: TrendingUp },
        { name: 'Mobile Survey', href: '/services/mobile-survey', icon: Smartphone },
        { name: 'Email Sequencer', href: '/services/email-sequencer', icon: Mail },
        { name: 'Podcast Transcription', href: '/services/podcast-transcription', icon: Video }
      ]
    },
    {
      title: 'Quick Access',
      icon: Star,
      items: [
        { name: 'Marketplace', href: '/marketplace', icon: ShoppingCart },
        { name: 'Pricing', href: '/pricing', icon: DollarSign },
        { name: 'News', href: '/news', icon: Newspaper },
        { name: 'Sitemap', href: '/sitemap', icon: FileText }
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
