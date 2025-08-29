import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  Home, 
  Settings, 
  Users, 
  FileText, 
  HelpCircle, 
  Mail, 
  Phone, 
  MapPin,
  Brain,
  Zap,
  Rocket,
  Dna,
  Shield,
  Cloud,
  Cpu,
  Lock,
  Heart,
  Globe,
  ShoppingCart,
  MessageCircle,
  BookOpen,
  DollarSign,
  ChevronRight,
  Star,
  TrendingUp,
  Award
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EnhancedSidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const location = useLocation();
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  const toggleSection = (section: string) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const navigationItems = [
    {
      name: 'Main',
      items: [
        { name: 'Home', href: '/', icon: Home },
        { name: 'About', href: '/about', icon: Users },
        { name: 'Contact', href: '/contact', icon: Mail },
        { name: 'Pricing', href: '/pricing', icon: DollarSign },
        { name: 'Blog', href: '/blog', icon: FileText },
        { name: 'FAQ', href: '/faq', icon: HelpCircle },
      ]
    },
    {
      name: 'Revolutionary AI Services',
      items: [
        { name: 'AI Quantum Computing', href: '/services/ai-quantum-computing', icon: Zap, price: 'From $2,999/month' },
        { name: 'AI Space Technology', href: '/services/ai-space-technology', icon: Rocket, price: 'From $1,999/month' },
        { name: 'AI Biotechnology', href: '/services/ai-biotechnology', icon: Dna, price: 'From $3,999/month' },
      ]
    },
    {
      name: 'AI & Analytics Services',
      items: [
        { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence', icon: Brain, price: 'From $499/month' },
        { name: 'AI Sales Copilot', href: '/services/ai-sales-copilot', icon: TrendingUp, price: 'From $299/month' },
        { name: 'AI Compliance Assistant', href: '/services/ai-compliance-assistant', icon: Shield, price: 'From $399/month' },
        { name: 'LLM Content Studio', href: '/services/llm-content-studio', icon: BookOpen, price: 'From $199/month' },
      ]
    },
    {
      name: 'Cloud & DevOps',
      items: [
        { name: 'Cloud DevOps', href: '/services/cloud-devops', icon: Cloud, price: 'From $799/month' },
        { name: 'Cloud FinOps Optimizer', href: '/services/cloud-finops-optimizer', icon: DollarSign, price: 'From $599/month' },
        { name: 'FinOps Advisor', href: '/services/finops-advisor', icon: Award, price: 'From $899/month' },
      ]
    },
    {
      name: 'Digital Solutions',
      items: [
        { name: 'Digital Twin', href: '/services/digital-twin', icon: Rocket, price: 'From $1,299/month' },
        { name: 'IT Infrastructure', href: '/services/it-infrastructure', icon: Cpu, price: 'From $699/month' },
        { name: 'Data Analytics', href: '/services/data-analytics', icon: TrendingUp, price: 'From $399/month' },
      ]
    },
    {
      name: 'Cybersecurity',
      items: [
        { name: 'AI Compliance Copilot', href: '/services/ai-compliance-copilot', icon: Shield, price: 'From $599/month' },
        { name: 'Zero Trust Architecture', href: '/services/zero-trust-network-architecture', icon: Lock, price: 'From $899/month' },
      ]
    },
    {
      name: 'Specialized Services',
      items: [
        { name: 'Healthcare Tech', href: '/services/healthcare-tech', icon: Heart, price: 'From $1,199/month' },
        { name: 'Sustainability', href: '/services/sustainability', icon: Globe, price: 'From $799/month' },
        { name: 'Blockchain Solutions', href: '/services/blockchain-enterprise-solutions', icon: Lock, price: 'From $1,499/month' },
        { name: 'IoT & Edge', href: '/services/iot-edge', icon: Cpu, price: 'From $899/month' },
      ]
    },
    {
      name: 'Micro SaaS Solutions',
      items: [
        { name: 'AI Auto Email Responder', href: '/services/ai-auto-email-responder', icon: MessageCircle, price: 'From $99/month' },
        { name: 'Customer Feedback Surveys', href: '/services/mobile-feedback-surveys', icon: Users, price: 'From $79/month' },
        { name: 'Micro SaaS Platform', href: '/services/micro-saas-solutions', icon: ShoppingCart, price: 'From $199/month' },
      ]
    }
  ];

  const contactInfo = [
    { icon: Phone, label: 'Phone', value: '+1 302 464 0950', href: 'tel:+13024640950' },
    { icon: Mail, label: 'Email', value: 'kleber@ziontechgroup.com', href: 'mailto:kleber@ziontechgroup.com' },
    { icon: MapPin, label: 'Address', value: '364 E Main St STE 1008, Middletown DE 19709', href: '#' },
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
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed left-0 top-0 h-full w-80 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 border-r border-slate-700 z-50 overflow-y-auto"
          >
            {/* Header */}
            <div className="p-6 border-b border-slate-700">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xl font-bold text-white">Zion Tech</span>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg hover:bg-slate-700 transition-colors"
                >
                  <X className="w-5 h-5 text-slate-300" />
                </button>
              </div>
            </div>

            {/* Navigation */}
            <nav className="p-4 space-y-6">
              {navigationItems.map((section) => (
                <div key={section.name} className="space-y-2">
                  <button
                    onClick={() => toggleSection(section.name)}
                    className="flex items-center justify-between w-full p-3 text-left text-slate-300 hover:text-white hover:bg-slate-700/50 rounded-lg transition-colors"
                  >
                    <span className="font-semibold">{section.name}</span>
                    <ChevronRight 
                      className={`w-4 h-4 transition-transform ${
                        expandedSections.includes(section.name) ? 'rotate-90' : ''
                      }`} 
                    />
                  </button>
                  
                  <AnimatePresence>
                    {expandedSections.includes(section.name) && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="ml-4 space-y-1"
                      >
                        {section.items.map((item) => (
                          <Link
                            key={item.href}
                            to={item.href}
                            onClick={onClose}
                            className={`flex items-center justify-between p-3 rounded-lg transition-colors ${
                              location.pathname === item.href
                                ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-cyan-300'
                                : 'text-slate-400 hover:text-white hover:bg-slate-700/30'
                            }`}
                          >
                            <div className="flex items-center space-x-3">
                              <item.icon className="w-4 h-4" />
                              <span className="text-sm">{item.name}</span>
                            </div>
                            {item.price && (
                              <span className="text-xs text-slate-500 font-medium">
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
            </nav>

            {/* Contact Information */}
            <div className="p-4 border-t border-slate-700 mt-6">
              <h3 className="text-sm font-semibold text-slate-300 mb-4">Contact Information</h3>
              <div className="space-y-3">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <contact.icon className="w-4 h-4 text-cyan-400" />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-slate-400">{contact.label}</p>
                      {contact.href !== '#' ? (
                        <a 
                          href={contact.href}
                          className="text-sm text-slate-300 hover:text-cyan-400 transition-colors truncate block"
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <p className="text-sm text-slate-300 truncate">{contact.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="p-4">
              <Link
                to="/contact"
                onClick={onClose}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-4 rounded-lg font-semibold text-center hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};