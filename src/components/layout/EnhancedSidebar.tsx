import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  Home, 
  Settings, 
  Users, 
  Shield, 
  Brain, 
  Cloud, 
  Rocket, 
  Zap, 
  BarChart3, 
  MessageSquare, 
  FileText, 
  Globe, 
  Phone, 
  Mail, 
  MapPin, 
  ChevronRight,
  Star,
  TrendingUp,
  Award,
  Lightbulb,
  Code,
  Database,
  Network,
  Lock,
  Eye,
  Search,
  Bell,
  HelpCircle,
  BookOpen,
  ExternalLink,
  Play
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function EnhancedSidebar({ isOpen, onClose }: SidebarProps) {
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
      title: 'Main Navigation',
      items: [
        { name: 'Home', href: '/', icon: Home },
        { name: 'About Us', href: '/about', icon: Users },
        { name: 'Contact', href: '/contact', icon: MessageSquare },
        { name: 'Services Overview', href: '/services', icon: Settings },
        { name: 'Showcase 2025', href: '/comprehensive-services-showcase-2025', icon: Star },
      ]
    },
    {
      id: 'ai-services',
      title: 'AI & Machine Learning',
      icon: Brain,
      items: [
        { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence', icon: BarChart3 },
        { name: 'AI Autonomous Business Intelligence', href: '/services/ai-autonomous-business-intelligence-platform', icon: Brain },
        { name: 'AI Healthcare Analytics', href: '/services/ai-healthcare-analytics-platform', icon: TrendingUp },
        { name: 'AI Content Marketing Suite', href: '/services/ai-content-marketing-suite', icon: FileText },
        { name: 'AI Customer Support', href: '/services/ai-customer-support-automation', icon: MessageSquare },
        { name: 'AI Project Management', href: '/services/ai-project-management', icon: Settings },
        { name: 'AI Supply Chain Optimization', href: '/services/ai-supply-chain-optimization', icon: Network },
        { name: 'AI DevOps Automation', href: '/services/ai-devops-automation-platform', icon: Code },
        { name: 'AI Email Responder', href: '/services/ai-auto-email-responder', icon: Mail },
        { name: 'AI Quantum Hybrid Platform', href: '/services/ai-quantum-hybrid-platform', icon: Zap },
      ]
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity & Compliance',
      icon: Shield,
      items: [
        { name: 'AI Cybersecurity Platform', href: '/services/ai-cybersecurity-platform', icon: Shield },
        { name: 'AI Cybersecurity Threat Intelligence', href: '/services/ai-cybersecurity-threat-intelligence-platform', icon: Eye },
        { name: 'Zero Trust Network Access', href: '/services/zero-trust-network-access', icon: Lock },
        { name: 'SOC2 Compliance Automation', href: '/services/soc2-compliance-automation', icon: Award },
        { name: 'Security Headers & CSP', href: '/services/security-headers-csp', icon: Shield },
        { name: 'Smart Contract Risk Scanner', href: '/services/smart-contract-risk-scanner', icon: Code },
      ]
    },
    {
      id: 'cloud-infrastructure',
      title: 'Cloud & Infrastructure',
      icon: Cloud,
      items: [
        { name: 'Cloud DevOps', href: '/services/cloud-devops', icon: Cloud },
        { name: 'IT Infrastructure', href: '/services/it-infrastructure', icon: Database },
        { name: 'FinOps Advisor', href: '/services/finops-advisor', icon: BarChart3 },
        { name: 'Cloud Cost Optimizer', href: '/services/cloud-cost-optimizer', icon: TrendingUp },
        { name: 'Infrastructure Monitoring', href: '/services/infrastructure', icon: Network },
        { name: 'Uptime SLA Monitor', href: '/services/uptime-sla-monitor', icon: Eye },
      ]
    },
    {
      id: 'digital-transformation',
      title: 'Digital Transformation',
      icon: Rocket,
      items: [
        { name: 'Digital Twin', href: '/services/digital-twin', icon: Rocket },
        { name: 'Digital Transformation', href: '/services/digital-transformation', icon: TrendingUp },
        { name: 'IT Consulting', href: '/it-consulting', icon: Users },
        { name: 'Change Management', href: '/services/change-management', icon: Settings },
        { name: 'Strategy Development', href: '/services/strategy-development', icon: Lightbulb },
        { name: 'Implementation Planning', href: '/services/implementation-planning', icon: FileText },
      ]
    },
    {
      id: 'emerging-tech',
      title: 'Emerging Technologies',
      icon: Zap,
      items: [
        { name: 'Quantum Computing', href: '/services/quantum-computing', icon: Zap },
        { name: 'IoT Edge Computing', href: '/services/iot-edge-computing', icon: Network },
        { name: 'Space Technology', href: '/space-tech', icon: Rocket },
        { name: 'Blockchain Solutions', href: '/services/blockchain-enterprise-solutions', icon: Code },
        { name: 'Edge Computing Platform', href: '/services/edge-computing-platform', icon: Network },
      ]
    },
    {
      id: 'micro-saas',
      title: 'Micro SaaS Solutions',
      icon: Settings,
      items: [
        { name: 'Micro CRM', href: '/services/micro-crm', icon: Users },
        { name: 'Helpdesk Platform', href: '/services/helpdesk', icon: MessageSquare },
        { name: 'Website Analytics', href: '/services/website-analytics', icon: BarChart3 },
        { name: 'IT Helpdesk', href: '/services/it-helpdesk', icon: HelpCircle },
        { name: 'Affiliate Tracking', href: '/services/affiliate-tracking', icon: TrendingUp },
        { name: 'Mobile Survey', href: '/services/mobile-survey', icon: FileText },
      ]
    }
  ];

  const quickActions = [
    { name: 'Get Quote', href: '/contact', icon: MessageSquare, color: 'from-cyan-500 to-blue-500' },
    { name: 'View Pricing', href: '/pricing', icon: BarChart3, color: 'from-green-500 to-emerald-500' },
    { name: 'Book Demo', href: '/demo', icon: Play, color: 'from-purple-500 to-pink-500' },
    { name: 'Support', href: '/help', icon: HelpCircle, color: 'from-orange-500 to-red-500' },
  ];

  const contactInfo = [
    { icon: Phone, text: '+1 302 464 0950', href: 'tel:+13024640950' },
    { icon: Mail, text: 'kleber@ziontechgroup.com', href: 'mailto:kleber@ziontechgroup.com' },
    { icon: MapPin, text: '364 E Main St STE 1008, Middletown DE 19709', href: '#' },
    { icon: Globe, text: 'ziontechgroup.com', href: 'https://ziontechgroup.com' },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <>
      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={onClose}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: isOpen ? 0 : '-100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className={`fixed left-0 top-0 h-full w-80 bg-gray-900 border-r border-cyan-500/20 z-50 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-800`}
      >
        {/* Header */}
        <div className="p-6 border-b border-gray-800">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </div>
            <button
              onClick={onClose}
              className="lg:hidden p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search services..."
              className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
            />
          </div>
        </div>

        {/* Quick Actions */}
        <div className="p-6 border-b border-gray-800">
          <h3 className="text-sm font-semibold text-gray-300 mb-4 uppercase tracking-wider">
            Quick Actions
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {quickActions.map((action, index) => (
              <Link
                key={index}
                to={action.href}
                className="p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors group"
              >
                <div className={`w-8 h-8 bg-gradient-to-r ${action.color} rounded-lg flex items-center justify-center mb-2 group-hover:scale-110 transition-transform`}>
                  <action.icon className="w-4 h-4 text-white" />
                </div>
                <span className="text-xs text-gray-300 font-medium">{action.name}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Navigation Sections */}
        <div className="p-6 space-y-6">
          {navigationSections.map((section) => (
            <div key={section.id}>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider flex items-center">
                  {section.icon && <section.icon className="w-4 h-4 mr-2 text-cyan-400" />}
                  {section.title}
                </h3>
                {section.items && section.items.length > 0 && (
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="p-1 text-gray-400 hover:text-white transition-colors"
                  >
                    <ChevronRight 
                      className={`w-4 h-4 transition-transform ${expandedSections.includes(section.id) ? 'rotate-90' : ''}`} 
                    />
                  </button>
                )}
              </div>
              
              {section.items && (
                <AnimatePresence>
                  {expandedSections.includes(section.id) && (
                    <motion.ul
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-1 ml-4"
                    >
                      {section.items.map((item, index) => (
                        <li key={index}>
                          <Link
                            to={item.href}
                            className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                              isActive(item.href)
                                ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                                : 'text-gray-400 hover:text-white hover:bg-gray-800'
                            }`}
                          >
                            <item.icon className="w-4 h-4" />
                            <span>{item.name}</span>
                          </Link>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </div>

        {/* Contact Information */}
        <div className="p-6 border-t border-gray-800 mt-auto">
          <h3 className="text-sm font-semibold text-gray-300 mb-4 uppercase tracking-wider">
            Contact Information
          </h3>
          <div className="space-y-3">
            {contactInfo.map((contact, index) => (
              <div key={index} className="flex items-center space-x-3">
                <contact.icon className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                {contact.href !== '#' ? (
                  <a
                    href={contact.href}
                    target={contact.href.startsWith('http') ? '_blank' : undefined}
                    rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-xs text-gray-400 hover:text-cyan-400 transition-colors flex items-center"
                  >
                    {contact.text}
                    {contact.href.startsWith('http') && <ExternalLink className="w-3 h-3 ml-1" />}
                  </a>
                ) : (
                  <span className="text-xs text-gray-400">{contact.text}</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-800">
          <div className="text-center">
            <p className="text-xs text-gray-500 mb-2">
              © 2025 Zion Tech Group
            </p>
            <div className="flex items-center justify-center space-x-4">
              <button className="p-2 text-gray-500 hover:text-cyan-400 transition-colors">
                <Bell className="w-4 h-4" />
              </button>
              <button className="p-2 text-gray-500 hover:text-cyan-400 transition-colors">
                <HelpCircle className="w-4 h-4" />
              </button>
              <button className="p-2 text-gray-500 hover:text-cyan-400 transition-colors">
                <BookOpen className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}