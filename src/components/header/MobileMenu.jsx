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
  Zap,
  Target,
  Building2,
  FileText,
  ChevronDown,
  ChevronRight,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Rocket,
  Brain,
  Server,
  Shield,
  Cloud,
  Network,
  TrendingUp,
  Workflow,
  BarChart3,
  MessageCircle
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
          ]
        },
        {
          label: 'Micro SaaS',
          icon: Rocket,
          items: [
            { href: '/services/micro-saas-solutions-comprehensive', label: 'Comprehensive Solutions' },
            { href: '/services/ai-customer-success-automation', label: 'Customer Success AI' },
            { href: '/services/ai-financial-risk-management-enhanced', label: 'Financial Risk Management' },
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
      ]
    },
    {
      id: 'company',
      label: 'Company',
      icon: Building2,
      items: [
        { href: '/about', label: 'About Us' },
        { href: '/careers', label: 'Careers' },
        { href: '/partners', label: 'Partners' },
        { href: '/news', label: 'News' },
      ]
    },
    {
      id: 'resources',
      label: 'Resources',
      icon: FileText,
      items: [
        { href: '/blog', label: 'Blog & Insights' },
        { href: '/webinars', label: 'Webinars' },
        { href: '/white-papers', label: 'White Papers' },
        { href: '/case-studies', label: 'Case Studies' },
        { href: '/research-development', label: 'Research' },
      ]
    }
  ];

  const directLinks = [
    { href: '/pricing', label: 'Pricing' },
    { href: '/contact', label: 'Contact' },
    { href: '/help', label: 'Support' },
    { href: '/get-started', label: 'Get Started' },
    { href: '/request-quote', label: 'Request Quote' },
  ];

  const contactInfo = [
    { icon: Phone, label: '+1 302 464 0950', href: 'tel:+1 302 464 0950' },
    { icon: Mail, label: 'kleber@ziontechgroup.com', href: 'mailto:kleber@ziontechgroup.com' },
    { icon: MapPin, label: '364 E Main St STE 1008 Middletown DE 19709' },
  ];
  
  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">
      <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-gradient-to-b from-zion-blue-dark via-zion-slate-dark to-zion-blue-dark border-l border-zion-purple/30 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-zion-purple/20">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-xl font-bold text-white">Zion Tech Group</h2>
          </div>
          <button 
            onClick={onClose} 
            className="p-2 text-zion-slate-light hover:text-white hover:bg-zion-purple/20 rounded-lg transition-all duration-300"
          >
            <X className="w-6 h-6"/>
          </button>
        </div>

        {/* Navigation Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-6 space-y-6">
            {/* Main Navigation Sections */}
            {navigationSections.map((section) => (
              <div key={section.id} className="space-y-3">
                <button
                  onClick={() => toggleSection(section.id)}
                  className="flex items-center justify-between w-full p-3 text-left text-white hover:bg-zion-purple/10 rounded-lg transition-all duration-300 group"
                >
                  <div className="flex items-center space-x-3">
                    <section.icon className="w-5 h-5 text-zion-cyan" />
                    <span className="font-semibold">{section.label}</span>
                  </div>
                  {expandedSections[section.id] ? (
                    <ChevronDown className="w-4 h-4 text-zion-purple transition-transform duration-300" />
                  ) : (
                    <ChevronRight className="w-4 h-4 text-zion-purple transition-transform duration-300" />
                  )}
                </button>
                
                {expandedSections[section.id] && (
                  <div className="ml-6 space-y-2">
                    {section.items.map((item, index) => {
                      if (item.items) {
                        // Subsection with nested items
                        return (
                          <div key={index} className="space-y-2">
                            <div className="flex items-center space-x-2 text-zion-cyan font-medium text-sm">
                              <item.icon className="w-4 h-4" />
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
