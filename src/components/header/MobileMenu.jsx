import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  User, 
  MessageSquare, 
  Home, 
  Store, 
  Users, 
  Settings,
  ChevronDown,
  ChevronRight,
  Brain,
  Shield,
  Cloud,
  TrendingUp,
  Zap,
  Building2,
  FileText,
  HelpCircle,
  BarChart3,
  Server,
  Lock,
  BarChart,
  Cpu,
  Workflow,
  Database,
  Globe,
  Target,
  Rocket,
  Lightbulb,
  Code,
  Monitor,
  Smartphone,
  Network,
  Wifi,
  Activity,
  Eye,
  Search,
  Palette,
  Phone,
  Mail,
  MapPin,
  Clock,
  DollarSign,
  Atom,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  MessageCircle,
  Star,
  Users2,
  Cog,
  ArrowRight,
  Handshake,
  Calendar
} from 'lucide-react';

export function MobileMenu({ onClose }) {
  const [expandedSections, setExpandedSections] = useState({});
  const location = useLocation();
  
  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const isActive = (path) => location.pathname === path || location.pathname.startsWith(path);
  
  const navigationSections = [
    {
      id: 'services',
      label: 'Services',
      icon: Zap,
      items: [
        {
          label: 'AI & Automation',
          icon: Brain,
          items: [
            { href: '/services/ai-business-intelligence-dashboard', label: 'AI BI Dashboard' },
            { href: '/services/ai-customer-support-automation', label: 'AI Support Automation' },
            { href: '/services/ai-project-management-platform', label: 'AI Project Management' },
            { href: '/services/ai-marketing-automation-platform', label: 'AI Marketing Automation' },
            { href: '/services/ai-enterprise-automation-platform', label: 'AI Enterprise Automation' },
            { href: '/services/ai-enterprise-intelligence-platform', label: 'AI Enterprise Intelligence' },
            { href: '/services/ai-data-analytics-platform', label: 'AI Data Analytics' },
            { href: '/services/ai-cybersecurity-platform', label: 'AI Cybersecurity' },
            { href: '/services/ai-autonomous-research-assistant', label: 'AI Research Assistant' },
            { href: '/services/ai-financial-trading-platform', label: 'AI Trading Platform' },
            { href: '/services/ai-healthcare-platform', label: 'AI Healthcare' },
            { href: '/services/ai-quantum-hybrid-platform', label: 'Quantum AI Platform' },
            { href: '/services/ai-supply-chain-optimization', label: 'Supply Chain AI' },
            { href: '/services/ai-sales-copilot', label: 'AI Sales Copilot' },
            { href: '/services/ai-compliance-assistant', label: 'AI Compliance' },
            { href: '/services/ai-business-intelligence', label: 'AI Business Intelligence' },
            { href: '/services/ai-healthcare-analytics', label: 'AI Healthcare Analytics' }
          ]
        },
        {
          label: 'IT & Infrastructure',
          icon: Server,
          items: [
            { href: '/services/it-infrastructure-management', label: 'Infrastructure Management' },
            { href: '/services/cloud-devops', label: 'Cloud & DevOps' },
            { href: '/services/cybersecurity', label: 'Cybersecurity' },
            { href: '/services/blockchain-enterprise-solutions', label: 'Blockchain Solutions' },
            { href: '/services/it-infrastructure', label: 'IT Infrastructure' },
            { href: '/services/digital-transformation', label: 'Digital Transformation' },
            { href: '/services/cloud-finops-optimizer', label: 'Cloud FinOps' }
          ]
        },
        {
          label: 'Micro SaaS',
          icon: Rocket,
          items: [
            { href: '/services/micro-saas-solutions-comprehensive', label: 'Comprehensive Solutions' },
            { href: '/services/ai-customer-success-automation', label: 'Customer Success AI' },
            { href: '/services/ai-financial-risk-management-enhanced', label: 'Financial Risk Management' },
            { href: '/services/ai-workflow-orchestrator', label: 'AI Workflow Orchestrator' },
            { href: '/services/ai-predictive-maintenance', label: 'AI Predictive Maintenance' },
            { href: '/services/ai-hr-platform', label: 'AI HR Platform' },
            { href: '/services/ai-financial-trading-risk-management', label: 'AI Trading Risk Management' }
          ]
        }
      ]
    },
    {
      id: 'solutions',
      label: 'Solutions',
      icon: Target,
      items: [
        { href: '/solutions/healthcare', label: 'Healthcare' },
        { href: '/solutions/financial', label: 'Financial Services' },
        { href: '/solutions/manufacturing', label: 'Manufacturing' },
        { href: '/solutions/government', label: 'Government' },
        { href: '/solutions/retail', label: 'Retail' },
        { href: '/solutions/quantum-edge-computing', label: 'Quantum Edge' },
        { href: '/solutions/ai-autonomous-business', label: 'AI Autonomous', icon: Brain },
        { href: '/solutions/blockchain-web3', label: 'Blockchain Web3', icon: Network },
        { href: '/solutions/iot-edge-computing', label: 'IoT Edge', icon: Wifi },
        { href: '/solutions/space-tech', label: 'Space Tech', icon: Satellite }
      ]
    },
    { 
      label: 'Company', 
      icon: Users, 
      matches: (path) => path.startsWith('/about') || path.startsWith('/leadership') || path.startsWith('/careers'),
      hasDropdown: true,
      dropdownItems: [
        { href: '/about', label: 'About Us', icon: Users },
        { href: '/leadership', label: 'Leadership', icon: Star },
        { href: '/careers', label: 'Careers', icon: Rocket },
        { href: '/partners', label: 'Partners', icon: Handshake },
        { href: '/news', label: 'News', icon: FileText },
        { href: '/events', label: 'Events', icon: Calendar }
      ]
    },
    { 
      label: 'Resources', 
      icon: FileText, 
      matches: (path) => path.startsWith('/blog') || path.startsWith('/docs') || path.startsWith('/webinars'),
      hasDropdown: true,
      dropdownItems: [
        { href: '/blog', label: 'Blog', icon: FileText },
        { href: '/docs', label: 'Documentation', icon: FileText },
        { href: '/white-papers', label: 'White Papers', icon: FileText },
        { href: '/webinars', label: 'Webinars', icon: Monitor },
        { href: '/training', label: 'Training', icon: Users2 },
        { href: '/case-studies', label: 'Case Studies', icon: BarChart3 },
        { href: '/research-development', label: 'R&D', icon: Lightbulb }
      ]
    },
    { href: '/contact', label: 'Contact', icon: MessageSquare, matches: (path) => path.startsWith('/contact') },
  ];
  
  const directLinks = [
    { href: '/pricing', label: 'Pricing' },
    { href: '/contact', label: 'Contact' },
    { href: '/support', label: 'Support' },
    { href: '/training', label: 'Training' }
  ];

  const contactInfo = [
    { icon: Phone, label: '+1 (555) 123-4567', href: 'tel:+15551234567' },
    { icon: Mail, label: 'info@ziontechgroup.com', href: 'mailto:info@ziontechgroup.com' },
    { icon: MapPin, label: '123 Innovation Drive, Tech City, TC 12345' }
  ];

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm" 
        onClick={onClose}
        aria-hidden="true"
      />
      
      {/* Menu Panel */}
      <div className="fixed right-0 top-0 h-full w-80 max-w-[90vw] bg-gradient-to-b from-zion-slate-dark via-zion-blue-dark to-zion-slate-dark border-l border-zion-purple/30 shadow-2xl shadow-zion-purple/20 overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-zion-purple/20">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">Z</span>
            </div>
            <div>
              <h2 className="text-white font-bold">Zion Tech Group</h2>
              <p className="text-zion-cyan text-xs">AI-Powered Innovation</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-zion-slate-light hover:text-white hover:bg-zion-purple/20 rounded-lg transition-all duration-300"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Content */}
        <div className="p-6 space-y-8">
          {/* Navigation Sections */}
          {navigationSections.map((section) => (
            <div key={section.id} className="space-y-3">
              <button
                onClick={() => toggleSection(section.id)}
                className={`flex items-center justify-between w-full p-3 rounded-lg transition-all duration-300 ${
                  expandedSections[section.id]
                    ? 'bg-zion-purple/20 text-zion-cyan border border-zion-cyan/30'
                    : 'text-zion-slate-light hover:text-white hover:bg-zion-purple/10'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <section.icon className="w-4 h-4" />
                  <span className="font-medium">{section.label}</span>
                </div>
                <ChevronRight 
                  className={`w-4 h-4 transition-transform duration-300 ${
                    expandedSections[section.id] ? 'rotate-90' : ''
                  }`} 
                />
              </button>
              
              {expandedSections[section.id] && (
                <div className="ml-6 space-y-2">
                  {section.items.map((item, index) => {
                    if (item.items) {
                      // Subsection with nested items
                      return (
                        <div key={index} className="space-y-2">
                          <div className="flex items-center space-x-2 text-zion-cyan font-medium text-sm">
                            <item.icon className="w-3 h-3" />
                            <span>{item.label}</span>
                          </div>
                          <div className="ml-4 space-y-1">
                            {item.items.map((subItem, subIndex) => (
                              <Link
                                key={subIndex}
                                to={subItem.href}
                                onClick={onClose}
                                className={`block px-3 py-2 text-sm rounded-lg transition-all duration-300 ${
                                  isActive(subItem.href)
                                    ? 'bg-zion-cyan/20 text-zion-cyan border border-zion-cyan/30'
                                    : 'text-zion-slate-light hover:text-white hover:bg-zion-purple/10'
                                }`}
                              >
                                {subItem.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      );
                    } else {
                      // Direct link
                      return (
                        <Link
                          key={index}
                          to={item.href}
                          onClick={onClose}
                          className={`block px-3 py-2 text-sm rounded-lg transition-all duration-300 ${
                            isActive(item.href)
                              ? 'bg-zion-cyan/20 text-zion-cyan border border-zion-cyan/30'
                              : 'text-zion-slate-light hover:text-white hover:bg-zion-purple/10'
                          }`}
                        >
                          {item.label}
                        </Link>
                      );
                    }
                  })}
                </div>
              )}
            </div>
          ))}

          {/* Direct Links */}
          <div className="space-y-3">
            <h3 className="text-zion-purple font-semibold text-sm uppercase tracking-wide">Quick Links</h3>
            <div className="space-y-2">
              {directLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={onClose}
                  className={`block px-3 py-2 text-sm rounded-lg transition-all duration-300 ${
                    isActive(link.href)
                      ? 'bg-zion-purple/20 text-zion-purple border border-zion-purple/30'
                      : 'text-zion-slate-light hover:text-white hover:bg-zion-purple/10'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-3">
            <h3 className="text-zion-cyan font-semibold text-sm uppercase tracking-wide">Contact Info</h3>
            <div className="space-y-3">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-center space-x-3 text-zion-slate-light text-sm">
                  <contact.icon className="w-4 h-4 text-zion-cyan flex-shrink-0" />
                  {contact.href ? (
                    <a 
                      href={contact.href}
                      className="hover:text-zion-cyan transition-colors"
                    >
                      {contact.label}
                    </a>
                  ) : (
                    <span>{contact.label}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="p-6 border-t border-zion-purple/20 space-y-3">
          <Link
            to="/get-started"
            onClick={onClose}
            className="block w-full px-4 py-3 text-center bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-lg hover:from-zion-cyan-light hover:to-zion-blue-light transition-all duration-300 transform hover:scale-105"
          >
            Get Started
            <ArrowRight className="w-4 h-4 ml-2 inline" />
          </Link>
          <Link
            to="/contact"
            onClick={onClose}
            className="block w-full px-4 py-3 text-center border-2 border-zion-purple text-zion-purple font-semibold rounded-lg hover:bg-zion-purple hover:text-white transition-all duration-300"
          >
            Contact Sales
          </Link>
        </div>
      </div>
    </div>
  );
}
