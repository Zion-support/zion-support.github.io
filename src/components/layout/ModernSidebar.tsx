import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Home,
  Settings,
  Users,
  Shield,
  Cloud,
  Brain,
  Database,
  Globe,
  Rocket,
  Zap,
  ChevronRight,
  ChevronDown,
  Menu,
  X,
  BarChart3,
  Cpu,
  Smartphone,
  Lock,
  FileText,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Twitter,
  Github,
  Calendar
} from 'lucide-react';

const ModernSidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<string[]>([]);
  const location = useLocation();

  const toggleSection = (section: string) => {
    setExpandedSections(prev =>
      prev.includes(section)
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const navigation = {
    main: [
      { name: 'Home', href: '/', icon: Home, badge: null },
      { name: 'About Us', href: '/about', icon: Users, badge: null },
      { name: 'Contact', href: '/contact', icon: Phone, badge: null },
      { name: 'Pricing', href: '/pricing', icon: BarChart3, badge: null },
      { name: 'Get Quote', href: '/request-quote', icon: MessageCircle, badge: 'Popular' },
    ],
    services: [
      { name: 'All Services', href: '/services', icon: Zap, badge: null },
      { name: 'AI & ML Services', href: '/ai-services', icon: Brain, badge: 'Hot' },
      { name: 'IT Infrastructure', href: '/it-services', icon: Cpu, badge: null },
      { name: 'Cloud & DevOps', href: '/services/cloud-devops', icon: Cloud, badge: null },
      { name: 'Cybersecurity', href: '/services/cybersecurity', icon: Shield, badge: null },
      { name: 'Quantum Computing', href: '/services/quantum-computing-solutions', icon: Rocket, badge: 'New' },
      { name: 'Blockchain & Web3', href: '/services/blockchain-enterprise-solutions', icon: Lock, badge: null },
      { name: 'Edge Computing', href: '/services/edge-computing-solutions', icon: Smartphone, badge: null },
      { name: 'Micro SaaS', href: '/micro-saas', icon: Zap, badge: null },
    ],
    ai: [
      { name: 'Enterprise Automation', href: '/services/ai-enterprise-automation-platform', icon: Brain, badge: null },
      { name: 'Business Intelligence', href: '/services/ai-business-intelligence', icon: BarChart3, badge: null },
      { name: 'Supply Chain AI', href: '/services/ai-supply-chain-optimization', icon: Globe, badge: null },
      { name: 'Customer Support AI', href: '/services/ai-customer-support-automation', icon: MessageCircle, badge: null },
      { name: 'Sales Copilot', href: '/services/ai-sales-copilot', icon: Users, badge: 'Popular' },
      { name: 'Compliance Assistant', href: '/services/ai-compliance-assistant', icon: Shield, badge: null },
    ],
    solutions: [
      { name: 'Healthcare & Biotech', href: '/solutions/healthcare', icon: Users, badge: null },
      { name: 'Financial Services', href: '/solutions/financial', icon: BarChart3, badge: null },
      { name: 'Manufacturing', href: '/solutions/manufacturing', icon: Settings, badge: null },
      { name: 'Government & Public', href: '/solutions/government', icon: Shield, badge: null },
      { name: 'Retail & E-commerce', href: '/solutions/retail', icon: Database, badge: null },
      { name: 'Enterprise Solutions', href: '/enterprise', icon: Globe, badge: null },
    ],
    innovation: [
      { name: '2026 Innovation Showcase', href: '/innovative-services-showcase-2026', icon: Rocket, badge: 'New' },
      { name: '2025 Services Showcase', href: '/comprehensive-services-showcase-2025', icon: Zap, badge: null },
      { name: 'AI Services 2025', href: '/innovative-ai-services-showcase-2025', icon: Brain, badge: null },
      { name: 'Emerging Technologies', href: '/emerging-tech', icon: Cpu, badge: 'Trending' },
      { name: 'Digital Transformation', href: '/digital-transformation', icon: Globe, badge: null },
    ],
    resources: [
      { name: 'Documentation', href: '/docs', icon: FileText, badge: null },
      { name: 'Case Studies', href: '/case-studies', icon: FileText, badge: null },
      { name: 'White Papers', href: '/white-papers', icon: FileText, badge: null },
      { name: 'Webinars', href: '/webinars', icon: Calendar, badge: null },
      { name: 'Training', href: '/training', icon: Users, badge: null },
      { name: 'Research & Development', href: '/research-development', icon: Cpu, badge: null },
      { name: 'Support Center', href: '/help', icon: MessageCircle, badge: null },
    ],
    company: [
      { name: 'Leadership Team', href: '/leadership', icon: Users, badge: null },
      { name: 'News & Updates', href: '/news', icon: FileText, badge: null },
      { name: 'Events & Webinars', href: '/events', icon: Calendar, badge: null },
      { name: 'Partners', href: '/partners', icon: Users, badge: null },
      { name: 'Careers', href: '/careers', icon: Users, badge: 'Hiring' },
      { name: 'Blog', href: '/blog', icon: FileText, badge: null },
    ],
    marketplace: [
      { name: 'Marketplace Home', href: '/marketplace', icon: Database, badge: null },
      { name: 'Sign Up', href: '/signup', icon: Users, badge: 'Free' },
    ]
  };

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github }
  ];

  const renderBadge = (badge: string | null) => {
    if (!badge) return null;
    
    const badgeColors = {
      'New': 'bg-green-500/20 text-green-400 border-green-500/30',
      'Hot': 'bg-red-500/20 text-red-400 border-red-500/30',
      'Popular': 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
      'Trending': 'bg-purple-500/20 text-purple-400 border-purple-500/30',
      'Free': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      'Hiring': 'bg-orange-500/20 text-orange-400 border-orange-500/30'
    };
    
    return (
      <span className={`px-2 py-0.5 text-xs font-medium rounded-full border ${badgeColors[badge] || badgeColors['New']}`}>
        {badge}
      </span>
    );
  };

  const renderNavSection = (title: string, items: any[], sectionKey: string) => (
    <div key={sectionKey} className="mb-6">
      <button
        onClick={() => toggleSection(sectionKey)}
        className="flex items-center justify-between w-full text-left text-gray-300 hover:text-cyan-400 transition-colors py-2 font-medium"
      >
        <span className="text-sm font-semibold uppercase tracking-wider">{title}</span>
        {expandedSections.includes(sectionKey) ? (
          <ChevronDown className="w-4 h-4" />
        ) : (
          <ChevronRight className="w-4 h-4" />
        )}
      </button>
      
      <AnimatePresence>
        {expandedSections.includes(sectionKey) && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="ml-2 mt-2 space-y-1">
              {items.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center justify-between group px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
                    location.pathname === item.href
                      ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 border border-cyan-500/30'
                      : 'text-gray-400 hover:text-cyan-400 hover:bg-gray-800/50 hover:border hover:border-cyan-500/20'
                  }`}
                >
                  <div className="flex items-center space-x-3 flex-1">
                    <item.icon className="w-4 h-4" />
                    <span className="truncate">{item.name}</span>
                  </div>
                  {renderBadge(item.badge)}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-black/80 backdrop-blur-sm rounded-lg text-white hover:bg-black/90 transition-colors"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Sidebar Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        className={`fixed top-0 left-0 h-full w-80 bg-gray-900/95 backdrop-blur-md border-r border-cyan-500/20 z-50 overflow-y-auto ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        } transition-transform duration-300 ease-in-out`}
        initial={{ x: -320 }}
        animate={{ x: isOpen ? 0 : -320 }}
        transition={{ duration: 0.3 }}
      >
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Zion Tech Group
              </h2>
              <p className="text-xs text-gray-400">Innovation Hub</p>
            </div>
          </div>

          {/* Navigation Content */}
          <nav className="space-y-2">
            {/* Main Navigation */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                Main
              </h3>
              <div className="space-y-1">
                {navigation.main.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`flex items-center justify-between group px-3 py-2 rounded-lg transition-all duration-200 ${
                      location.pathname === item.href
                        ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 border border-cyan-500/30'
                        : 'text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 hover:border hover:border-cyan-500/20'
                    }`}
                  >
                    <div className="flex items-center space-x-3 flex-1">
                      <item.icon className="w-4 h-4" />
                      <span className="truncate">{item.name}</span>
                    </div>
                    {renderBadge(item.badge)}
                  </Link>
                ))}
              </div>
            </div>

            {/* Services Section */}
            {renderNavSection('Services', navigation.services, 'services')}

            {/* AI Solutions Section */}
            {renderNavSection('AI Solutions', navigation.ai, 'ai')}

            {/* Industry Solutions Section */}
            {renderNavSection('Industry Solutions', navigation.solutions, 'solutions')}

            {/* Innovation Hub Section */}
            {renderNavSection('Innovation Hub', navigation.innovation, 'innovation')}

            {/* Resources Section */}
            {renderNavSection('Resources', navigation.resources, 'resources')}

            {/* Company Section */}
            {renderNavSection('Company', navigation.company, 'company')}

            {/* Marketplace Section */}
            {renderNavSection('Marketplace', navigation.marketplace, 'marketplace')}
          </nav>

          {/* Contact Information */}
          <div className="mt-8 pt-6 border-t border-gray-800">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
              Contact
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-4 h-4 text-cyan-400" />
                <a href={`tel:${contactInfo.phone}`} className="hover:text-cyan-400 transition-colors">
                  {contactInfo.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-4 h-4 text-cyan-400" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-cyan-400 transition-colors">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-start space-x-3 text-gray-300">
                <MapPin className="w-4 h-4 text-cyan-400 mt-1" />
                <span className="text-xs leading-relaxed">
                  {contactInfo.address}
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-4 flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-gray-800 hover:bg-cyan-500/20 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="mt-8 pt-6 border-t border-gray-800 text-center">
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} Zion Tech Group
            </p>
            <p className="text-xs text-gray-500 mt-1">
              All rights reserved
            </p>
          </div>
        </div>
      </motion.aside>
    </>
  );
};

export default ModernSidebar;