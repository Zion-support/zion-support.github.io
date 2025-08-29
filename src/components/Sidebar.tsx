import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronRight, 
  Home, 
  Settings, 
  Brain, 
  Shield, 
  Cloud, 
  Rocket, 
  Users, 
  BookOpen, 
  HelpCircle, 
  Phone, 
  DollarSign,
  Star,
  Zap,
  Heart,
  Globe,
  Cpu,
  Lock,
  ShoppingCart,
  MessageCircle,
  TrendingUp,
  Award,
  Building,
  FileText,
  Video,
  Briefcase,
  MapPin,
  Mail,
  Phone as PhoneIcon
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const location = useLocation();
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  const toggleSection = (section: string) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const navigationSections = [
    {
      id: 'main',
      title: 'Main',
      icon: Home,
      items: [
        { name: 'Home', href: '/', icon: Home },
        { name: 'About Us', href: '/about', icon: Building },
        { name: 'Contact', href: '/contact', icon: Phone },
        { name: 'Request Quote', href: '/request-quote', icon: DollarSign }
      ]
    },
    {
      id: 'services',
      title: 'Services',
      icon: Settings,
      items: [
        { name: 'Services Overview', href: '/services-overview', icon: Settings },
        { name: 'AI Services', href: '/ai-services', icon: Brain },
        { name: 'IT Services', href: '/it-services', icon: Cpu },
        { name: 'Micro SaaS', href: '/micro-saas', icon: ShoppingCart },
        { name: 'Services Catalog', href: '/services-catalog', icon: BookOpen },
        { name: 'Services Comparison', href: '/services-comparison', icon: TrendingUp }
      ]
    },
    {
      id: 'ai-solutions',
      title: 'AI Solutions',
      icon: Brain,
      items: [
        { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence', icon: Brain },
        { name: 'AI Sales Copilot', href: '/services/ai-sales-copilot', icon: MessageCircle },
        { name: 'AI Compliance Assistant', href: '/services/ai-compliance-assistant', icon: Shield },
        { name: 'LLM Content Studio', href: '/services/llm-content-studio', icon: FileText },
        { name: 'AI Content Generation', href: '/services/ai-content-generation-platform', icon: FileText },
        { name: 'AI Cybersecurity Suite', href: '/services/ai-cybersecurity-suite', icon: Shield }
      ]
    },
    {
      id: 'cloud-devops',
      title: 'Cloud & DevOps',
      icon: Cloud,
      items: [
        { name: 'Cloud DevOps', href: '/services/cloud-devops', icon: Cloud },
        { name: 'Cloud FinOps Optimizer', href: '/services/cloud-finops-optimizer', icon: DollarSign },
        { name: 'FinOps Advisor', href: '/services/finops-advisor', icon: DollarSign },
        { name: 'Edge Computing Platform', href: '/services/edge-computing-platform', icon: Cpu }
      ]
    },
    {
      id: 'digital-solutions',
      title: 'Digital Solutions',
      icon: Rocket,
      items: [
        { name: 'Digital Twin', href: '/services/digital-twin', icon: Rocket },
        { name: 'IT Infrastructure', href: '/services/it-infrastructure', icon: Cpu },
        { name: 'Data Analytics', href: '/services/data-analytics', icon: TrendingUp },
        { name: 'IoT Edge Computing', href: '/services/iot-edge', icon: Cpu },
        { name: 'Blockchain Solutions', href: '/services/blockchain-enterprise-solutions', icon: Lock }
      ]
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
      icon: Shield,
      items: [
        { name: 'AI Compliance Copilot', href: '/services/ai-compliance-copilot', icon: Shield },
        { name: 'Zero Trust Architecture', href: '/services/zero-trust-network-architecture', icon: Lock },
        { name: 'AI Cybersecurity Suite', href: '/services/ai-cybersecurity-suite', icon: Shield },
        { name: 'Security', href: '/security', icon: Shield }
      ]
    },
    {
      id: 'company',
      title: 'Company',
      icon: Building,
      items: [
        { name: 'Team', href: '/team', icon: Users },
        { name: 'Careers', href: '/careers', icon: Briefcase },
        { name: 'News', href: '/news', icon: FileText },
        { name: 'Press', href: '/press', icon: FileText },
        { name: 'Partners', href: '/partners', icon: Users }
      ]
    },
    {
      id: 'resources',
      title: 'Resources',
      icon: BookOpen,
      items: [
        { name: 'Blog', href: '/blog', icon: FileText },
        { name: 'Case Studies', href: '/case-studies', icon: FileText },
        { name: 'White Papers', href: '/white-papers', icon: FileText },
        { name: 'Webinars', href: '/webinars', icon: Video },
        { name: 'Training', href: '/training', icon: BookOpen }
      ]
    },
    {
      id: 'support',
      title: 'Support',
      icon: HelpCircle,
      items: [
        { name: 'Help Center', href: '/help', icon: HelpCircle },
        { name: 'Support Portal', href: '/support', icon: HelpCircle },
        { name: 'FAQ', href: '/faq', icon: HelpCircle },
        { name: 'Documentation', href: '/docs', icon: BookOpen },
        { name: 'Community', href: '/community', icon: Users },
        { name: 'Status Page', href: '/status', icon: Zap }
      ]
    },
    {
      id: 'legal',
      title: 'Legal',
      icon: Shield,
      items: [
        { name: 'Privacy Policy', href: '/privacy', icon: Shield },
        { name: 'Terms of Service', href: '/terms', icon: FileText },
        { name: 'Cookie Policy', href: '/cookies', icon: FileText },
        { name: 'Accessibility', href: '/accessibility', icon: Heart },
        { name: 'Compliance', href: '/compliance', icon: Shield }
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
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={onClose}
          />
          
          {/* Sidebar */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed left-0 top-0 h-full w-80 bg-slate-900 border-r border-slate-700 z-50 overflow-y-auto"
          >
            {/* Header */}
            <div className="p-6 border-b border-slate-700">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-xl font-bold text-white">Navigation</h2>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Navigation Sections */}
            <div className="p-4 space-y-2">
              {navigationSections.map((section) => (
                <div key={section.id} className="space-y-1">
                  <button
                    onClick={() => toggleSection(section.id)}
                    className={`w-full flex items-center justify-between p-3 rounded-lg text-left transition-colors ${
                      expandedSections.includes(section.id)
                        ? 'bg-slate-800 text-white'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <section.icon className="w-5 h-5" />
                      <span className="font-medium">{section.title}</span>
                    </div>
                    <ChevronRight 
                      className={`w-4 h-4 transition-transform ${
                        expandedSections.includes(section.id) ? 'rotate-90' : ''
                      }`}
                    />
                  </button>
                  
                  <AnimatePresence>
                    {expandedSections.includes(section.id) && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="ml-8 space-y-1"
                      >
                        {section.items.map((item) => (
                          <Link
                            key={item.href}
                            to={item.href}
                            onClick={onClose}
                            className={`block p-2 rounded-lg transition-colors ${
                              isActive(item.href)
                                ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                                : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                            }`}
                          >
                            <div className="flex items-center space-x-2">
                              <item.icon className="w-4 h-4" />
                              <span className="text-sm">{item.name}</span>
                            </div>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Contact Info */}
            <div className="p-4 border-t border-slate-700 mt-auto">
              <div className="space-y-3 text-sm text-slate-300">
                <div className="flex items-center space-x-2">
                  <PhoneIcon className="w-4 h-4" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 mt-0.5" />
                  <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
