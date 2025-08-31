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
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const location = useLocation();
  
  const toggleServices = () => setIsServicesOpen(!isServicesOpen);
  const toggleSolutions = () => setIsSolutionsOpen(!isSolutionsOpen);
  
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
            { label: 'AI Enterprise Automation', href: '/services/ai-enterprise-automation-platform' },
            { label: 'AI Enterprise Intelligence', href: '/services/ai-enterprise-intelligence-platform' },
            { label: 'AI Data Analytics', href: '/services/ai-data-analytics-platform' },
            { label: 'AI Business Intelligence', href: '/services/ai-business-intelligence' },
            { label: 'AI Cybersecurity', href: '/services/ai-cybersecurity-platform' },
            { label: 'AI Research Assistant', href: '/services/ai-autonomous-research-assistant' },
            { label: 'AI Financial Trading', href: '/services/ai-financial-trading-platform' },
            { label: 'AI Healthcare', href: '/services/ai-healthcare-platform' },
            { label: 'AI Enterprise Resource Planning', href: '/services/ai-enterprise-resource-planning' },
            { label: 'AI Customer Success Platform', href: '/services/ai-customer-success-platform' },
            { label: 'AI Supply Chain Intelligence', href: '/services/ai-supply-chain-intelligence' },
          ]
        },
        {
          label: 'IT & Infrastructure',
          icon: Server,
          items: [
            { label: 'Infrastructure Management', href: '/services/it-infrastructure-management' },
            { label: 'Cloud & DevOps', href: '/services/cloud-devops' },
            { label: 'Cybersecurity', href: '/services/cybersecurity' },
            { label: 'Digital Transformation', href: '/services/digital-transformation' },
            { label: 'Quantum Computing', href: '/services/quantum-computing-solutions' },
            { label: 'Edge Computing', href: '/services/edge-computing-solutions' },
            { label: 'Blockchain Solutions', href: '/services/blockchain-enterprise-solutions' },
          ]
        },
        {
          label: 'Micro SaaS',
          icon: Store,
          items: [
            { label: 'AI Support Automation', href: '/services/ai-customer-support-automation' },
            { label: 'AI Workflow Orchestrator', href: '/services/ai-workflow-orchestrator' },
            { label: 'AI Project Management', href: '/services/ai-project-management-platform' },
            { label: 'AI Marketing Automation', href: '/services/ai-marketing-automation-platform' },
            { label: 'AI Predictive Maintenance', href: '/services/ai-predictive-maintenance' },
            { label: 'AI HR Platform', href: '/services/ai-hr-platform' },
            { label: 'AI Financial Risk Management', href: '/services/ai-financial-trading-risk-management' },
          ]
        }
      ]
    },
    {
      id: 'solutions',
      label: 'Solutions',
      icon: Target,
      items: [
        { label: 'Healthcare', href: '/solutions/healthcare' },
        { label: 'Financial', href: '/solutions/financial' },
        { label: 'Manufacturing', href: '/solutions/manufacturing' },
        { label: 'Government', href: '/solutions/government' },
        { label: 'Retail', href: '/solutions/retail' },
      ]
    },
    {
      id: 'company',
      label: 'Company',
      icon: Building2,
      items: [
        { label: 'About', href: '/about' },
        { label: 'Contact', href: '/contact' },
        { label: 'Case Studies', href: '/case-studies' },
        { label: 'Partners', href: '/partners' },
      ]
    }
  ];

  const directLinks = [
    { href: '/get-started', label: 'Get Started' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/blog', label: 'Blog' },
    { href: '/support', label: 'Support' },
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
                  onClick={() => {
                    if (section.id === 'services') toggleServices();
                    if (section.id === 'solutions') toggleSolutions();
                  }}
                  className="flex items-center justify-between w-full p-3 text-left text-white hover:bg-zion-purple/10 rounded-lg transition-all duration-300 group"
                >
                  <div className="flex items-center space-x-3">
                    <section.icon className="w-5 h-5 text-zion-cyan" />
                    <span className="font-semibold">{section.label}</span>
                  </div>
                  {(section.id === 'services' && isServicesOpen) || (section.id === 'solutions' && isSolutionsOpen) ? (
                    <ChevronDown className="w-4 h-4 text-zion-purple transition-transform duration-300" />
                  ) : (
                    <ChevronRight className="w-4 h-4 text-zion-purple transition-transform duration-300" />
                  )}
                </button>
                
                {section.id === 'services' && isServicesOpen && (
                  <div className="ml-6 space-y-2">
                    {section.items.map((item, index) => (
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
                    ))}
                  </div>
                )}

                {section.id === 'solutions' && isSolutionsOpen && (
                  <div className="ml-6 space-y-1">
                    {section.items.map((item, index) => (
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
                    ))}
                  </div>
                )}

                {section.id === 'company' && (
                  <div className="ml-6 space-y-1">
                    {section.items.map((item, index) => (
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
                    ))}
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
