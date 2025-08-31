import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Home, 
  Zap, 
  Brain, 
  Building2, 
  FileText, 
  ChevronDown, 
  ChevronRight,
  Users,
  HelpCircle,
  BarChart3,
  Phone,
  Mail,
  MessageCircle,
  Star,
  TrendingUp,
  Shield,
  Server,
  Rocket
} from 'lucide-react';

export function MobileMenu({ onClose }) {
  const location = useLocation();
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const mainNavItems = [
    { href: '/', label: 'Home', icon: Home },
  ];

  const servicesItems = [
    {
      label: 'AI & Automation',
      items: [
        { href: '/services/ai-enterprise-automation-platform', label: 'AI Enterprise Automation' },
        { href: '/services/ai-data-analytics-platform', label: 'AI Data Analytics' },
        { href: '/services/ai-business-intelligence', label: 'AI Business Intelligence' },
        { href: '/services/ai-cybersecurity-platform', label: 'AI Cybersecurity' },
        { href: '/services/ai-sales-copilot', label: 'AI Sales Copilot' },
        { href: '/services/ai-compliance-assistant', label: 'AI Compliance Assistant' },
      ]
    },
    {
      label: 'IT & Infrastructure',
      items: [
        { href: '/services/it-infrastructure-management', label: 'Infrastructure Management' },
        { href: '/services/cloud-devops', label: 'Cloud & DevOps' },
        { href: '/services/cybersecurity', label: 'Cybersecurity' },
        { href: '/services/digital-transformation', label: 'Digital Transformation' },
        { href: '/services/quantum-computing-solutions', label: 'Quantum Computing' },
        { href: '/services/cloud-finops-optimizer', label: 'Cloud FinOps' },
      ]
    }
  ];

  const solutionsItems = [
    { href: '/solutions/healthcare', label: 'Healthcare' },
    { href: '/solutions/financial', label: 'Financial' },
    { href: '/solutions/manufacturing', label: 'Manufacturing' },
    { href: '/solutions/government', label: 'Government' },
    { href: '/solutions/retail', label: 'Retail' },
    { href: '/enterprise', label: 'Enterprise Solutions' },
  ];

  const companyItems = [
    { href: '/about', label: 'About Us' },
    { href: '/careers', label: 'Careers' },
    { href: '/news', label: 'News' },
    { href: '/events', label: 'Events' },
    { href: '/partners', label: 'Partners' },
    { href: '/contact', label: 'Contact' },
  ];

  const resourcesItems = [
    { href: '/blog', label: 'Blog' },
    { href: '/docs', label: 'Documentation' },
    { href: '/white-papers', label: 'White Papers' },
    { href: '/webinars', label: 'Webinars' },
    { href: '/training', label: 'Training' },
    { href: '/case-studies', label: 'Case Studies' },
  ];

  return (
    <div className="lg:hidden fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">
      <div className="fixed inset-y-0 right-0 w-80 bg-zion-blue-dark border-l border-zion-cyan/20 overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-zion-cyan/20">
          <h2 className="text-lg font-semibold text-white">Navigation</h2>
          <button 
            onClick={onClose} 
            className="p-2 text-white hover:bg-zion-cyan/20 rounded-lg transition-colors"
          >
            <X className="h-5 w-5"/>
          </button>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-2">
          {/* Home */}
          {mainNavItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.href;
            return (
              <Link 
                key={item.href} 
                to={item.href} 
                onClick={onClose} 
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive
                    ? "bg-zion-cyan/20 text-zion-cyan border border-zion-cyan/40"
                    : "text-white hover:bg-zion-cyan/10 hover:text-zion-cyan"
                }`}
              >
                <Icon className="w-5 h-5"/>
                <span className="font-medium">{item.label}</span>
              </Link>
            );
          })}

          {/* Services */}
          <div>
            <button
              onClick={() => toggleSection('services')}
              className="flex items-center justify-between w-full px-4 py-3 text-white hover:bg-zion-cyan/10 hover:text-zion-cyan rounded-lg transition-colors"
            >
              <div className="flex items-center gap-3">
                <Zap className="w-5 h-5"/>
                <span className="font-medium">Services</span>
              </div>
              {expandedSection === 'services' ? <ChevronDown className="w-4 h-4"/> : <ChevronRight className="w-4 h-4"/>}
            </button>
            
            {expandedSection === 'services' && (
              <div className="ml-4 mt-2 space-y-1">
                {servicesItems.map((category, categoryIndex) => (
                  <div key={categoryIndex}>
                    <div className="px-4 py-2 text-zion-cyan text-sm font-medium">
                      {category.label}
                    </div>
                    {category.items.map((item) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        onClick={onClose}
                        className="block px-4 py-2 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10 rounded transition-colors text-sm"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                ))}
                <Link
                  to="/services"
                  onClick={onClose}
                  className="block px-4 py-2 text-zion-cyan hover:bg-zion-cyan/10 rounded transition-colors text-sm font-medium mt-2"
                >
                  View All Services →
                </Link>
              </div>
            )}
          </div>

          {/* Solutions */}
          <div>
            <button
              onClick={() => toggleSection('solutions')}
              className="flex items-center justify-between w-full px-4 py-3 text-white hover:bg-zion-cyan/10 hover:text-zion-cyan rounded-lg transition-colors"
            >
              <div className="flex items-center gap-3">
                <Brain className="w-5 h-5"/>
                <span className="font-medium">Solutions</span>
              </div>
              {expandedSection === 'solutions' ? <ChevronDown className="w-4 h-4"/> : <ChevronRight className="w-4 h-4"/>}
            </button>
            
            {expandedSection === 'solutions' && (
              <div className="ml-4 mt-2 space-y-1">
                {solutionsItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={onClose}
                    className="block px-4 py-2 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10 rounded transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Company */}
          <div>
            <button
              onClick={() => toggleSection('company')}
              className="flex items-center justify-between w-full px-4 py-3 text-white hover:bg-zion-cyan/10 hover:text-zion-cyan rounded-lg transition-colors"
            >
              <div className="flex items-center gap-3">
                <Building2 className="w-5 h-5"/>
                <span className="font-medium">Company</span>
              </div>
              {expandedSection === 'company' ? <ChevronDown className="w-4 h-4"/> : <ChevronRight className="w-4 h-4"/>}
            </button>
            
            {expandedSection === 'company' && (
              <div className="ml-4 mt-2 space-y-1">
                {companyItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={onClose}
                    className="block px-4 py-2 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10 rounded transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Resources */}
          <div>
            <button
              onClick={() => toggleSection('resources')}
              className="flex items-center justify-between w-full px-4 py-3 text-white hover:bg-zion-cyan/10 hover:text-zion-cyan rounded-lg transition-colors"
            >
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5"/>
                <span className="font-medium">Resources</span>
              </div>
              {expandedSection === 'resources' ? <ChevronDown className="w-4 h-4"/> : <ChevronRight className="w-4 h-4"/>}
            </button>
            
            {expandedSection === 'resources' && (
              <div className="ml-4 mt-2 space-y-1">
                {resourcesItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={onClose}
                    className="block px-4 py-2 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10 rounded transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Direct Links */}
          <Link 
            to="/help" 
            onClick={onClose} 
            className="flex items-center gap-3 px-4 py-3 text-white hover:bg-zion-cyan/10 hover:text-zion-cyan rounded-lg transition-colors"
          >
            <HelpCircle className="w-5 h-5"/>
            <span className="font-medium">Support</span>
          </Link>

          <Link 
            to="/pricing" 
            onClick={onClose} 
            className="flex items-center gap-3 px-4 py-3 text-white hover:bg-zion-cyan/10 hover:text-zion-cyan rounded-lg transition-colors"
          >
            <BarChart3 className="w-5 h-5"/>
            <span className="font-medium">Pricing</span>
          </Link>
        </nav>

        {/* Bottom Actions */}
        <div className="p-4 border-t border-zion-cyan/20 space-y-3">
          <Link 
            to="/signup" 
            onClick={onClose} 
            className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all font-medium"
          >
            <Rocket className="w-4 h-4"/>
            Get Started
          </Link>
          
          <div className="grid grid-cols-2 gap-2">
            <Link 
              to="/request-quote" 
              onClick={onClose} 
              className="flex items-center justify-center gap-2 px-3 py-2 border border-zion-cyan text-zion-cyan rounded-lg hover:bg-zion-cyan hover:text-white transition-colors text-sm"
            >
              <TrendingUp className="w-3 h-3"/>
              Quote
            </Link>
            <Link 
              to="/contact" 
              onClick={onClose} 
              className="flex items-center justify-center gap-2 px-3 py-2 border border-zion-cyan text-zion-cyan rounded-lg hover:bg-zion-cyan hover:text-white transition-colors text-sm"
            >
              <MessageCircle className="w-3 h-3"/>
              Contact
            </Link>
          </div>

          {/* Contact Info */}
          <div className="pt-3 border-t border-zion-cyan/20">
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-zion-slate-light">
                <Phone className="w-3 h-3"/>
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center gap-2 text-zion-slate-light">
                <Mail className="w-3 h-3"/>
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
