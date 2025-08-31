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
  Brain,
  Shield,
  Cloud,
  Chip,
  TrendingUp,
  Zap,
  Database,
  Truck,
  ChevronDown,
  ChevronRight,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

export function MobileMenu({ onClose }) {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const location = useLocation();
  
  const toggleServices = () => setIsServicesOpen(!isServicesOpen);
  const toggleSolutions = () => setIsSolutionsOpen(!isSolutionsOpen);
  
  const navigationItems = [
    { href: '/', label: 'Home', icon: Home, matches: (path) => path === '/' },
    { href: '/about', label: 'About', icon: Users, matches: (path) => path.startsWith('/about') },
    { href: '/contact', label: 'Contact', icon: MessageSquare, matches: (path) => path.startsWith('/contact') },
  ];

  const aiServices = [
    { href: '/services/ai-enterprise-automation-platform', label: 'AI Enterprise Automation' },
    { href: '/services/ai-enterprise-intelligence-platform', label: 'AI Enterprise Intelligence' },
    { href: '/services/ai-data-analytics-platform', label: 'AI Data Analytics' },
    { href: '/services/ai-business-intelligence', label: 'AI Business Intelligence' },
    { href: '/services/ai-cybersecurity-platform', label: 'AI Cybersecurity' },
    { href: '/services/ai-autonomous-research-assistant', label: 'AI Research Assistant' },
    { href: '/services/ai-financial-trading-platform', label: 'AI Financial Trading' },
    { href: '/services/ai-healthcare-platform', label: 'AI Healthcare' },
    { href: '/services/ai-enterprise-resource-planning', label: 'AI Enterprise Resource Planning' },
    { href: '/services/ai-customer-success-platform', label: 'AI Customer Success Platform' },
    { href: '/services/ai-supply-chain-intelligence', label: 'AI Supply Chain Intelligence' },
  ];

  const itServices = [
    { href: '/services/it-infrastructure-management', label: 'Infrastructure Management' },
    { href: '/services/cloud-devops', label: 'Cloud & DevOps' },
    { href: '/services/cybersecurity', label: 'Cybersecurity' },
    { href: '/services/digital-transformation', label: 'Digital Transformation' },
    { href: '/services/quantum-computing-solutions', label: 'Quantum Computing' },
    { href: '/services/edge-computing-solutions', label: 'Edge Computing' },
    { href: '/services/blockchain-enterprise-solutions', label: 'Blockchain Solutions' },
  ];

  const microSaasServices = [
    { href: '/services/ai-customer-support-automation', label: 'AI Support Automation' },
    { href: '/services/ai-workflow-orchestrator', label: 'AI Workflow Orchestrator' },
    { href: '/services/ai-project-management-platform', label: 'AI Project Management' },
    { href: '/services/ai-marketing-automation-platform', label: 'AI Marketing Automation' },
    { href: '/services/ai-predictive-maintenance', label: 'AI Predictive Maintenance' },
    { href: '/services/ai-hr-platform', label: 'AI HR Platform' },
    { href: '/services/ai-financial-trading-risk-management', label: 'AI Financial Risk Management' },
  ];

  const solutions = [
    { href: '/solutions/healthcare', label: 'Healthcare' },
    { href: '/solutions/financial', label: 'Financial' },
    { href: '/solutions/manufacturing', label: 'Manufacturing' },
    { href: '/solutions/government', label: 'Government' },
    { href: '/solutions/retail', label: 'Retail' },
  ];
  
  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm md:hidden">
      <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-zion-blue-dark border-l border-zion-purple/20 overflow-y-auto">
        <div className="flex items-center justify-between p-4 border-b border-zion-purple/20">
          <h2 className="text-lg font-semibold text-white">Zion Tech Group</h2>
          <button 
            onClick={onClose} 
            className="p-2 text-zion-slate-light hover:bg-zion-purple/20 rounded-lg transition-colors"
          >
            <X className="h-5 w-5"/>
          </button>
        </div>

        {/* Navigation items */}
        <nav className="p-4 space-y-2">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = item.matches(location.pathname);
            return (
              <Link 
                key={item.href} 
                to={item.href} 
                onClick={onClose} 
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-white transition-colors ${
                  isActive
                    ? "bg-zion-cyan/20 text-zion-cyan border border-zion-cyan/40"
                    : "hover:bg-zion-purple/10 hover:text-zion-cyan"
                }`}
              >
                <Icon className="w-5 h-5"/>
                <span className="font-medium">{item.label}</span>
              </Link>
            );
          })}

          {/* Services Dropdown */}
          <div className="border-t border-zion-purple/20 pt-4">
            <button 
              onClick={toggleServices}
              className="flex items-center justify-between w-full px-4 py-3 text-left text-white hover:bg-zion-purple/10 rounded-lg transition-colors"
            >
              <div className="flex items-center gap-3">
                <Store className="w-5 h-5"/>
                <span className="font-medium">Services</span>
              </div>
              {isServicesOpen ? <ChevronDown className="w-4 h-4"/> : <ChevronRight className="w-4 h-4"/>}
            </button>
            
            {isServicesOpen && (
              <div className="ml-4 mt-2 space-y-1">
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-zion-cyan mb-2 px-4">AI & Automation</h4>
                  {aiServices.map((service) => (
                    <Link
                      key={service.href}
                      to={service.href}
                      onClick={onClose}
                      className="block px-4 py-2 text-sm text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/10 rounded transition-colors"
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-zion-cyan mb-2 px-4">IT & Infrastructure</h4>
                  {itServices.map((service) => (
                    <Link
                      key={service.href}
                      to={service.href}
                      onClick={onClose}
                      className="block px-4 py-2 text-sm text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/10 rounded transition-colors"
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-zion-cyan mb-2 px-4">Micro SaaS</h4>
                  {microSaasServices.map((service) => (
                    <Link
                      key={service.href}
                      to={service.href}
                      onClick={onClose}
                      className="block px-4 py-2 text-sm text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/10 rounded transition-colors"
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Solutions Dropdown */}
          <div className="border-t border-zion-purple/20 pt-4">
            <button 
              onClick={toggleSolutions}
              className="flex items-center justify-between w-full px-4 py-3 text-left text-white hover:bg-zion-purple/10 rounded-lg transition-colors"
            >
              <div className="flex items-center gap-3">
                <Brain className="w-5 h-5"/>
                <span className="font-medium">Solutions</span>
              </div>
              {isSolutionsOpen ? <ChevronDown className="w-4 h-4"/> : <ChevronRight className="w-4 h-4"/>}
            </button>
            
            {isSolutionsOpen && (
              <div className="ml-4 mt-2 space-y-1">
                {solutions.map((solution) => (
                  <Link
                    key={solution.href}
                    to={solution.href}
                    onClick={onClose}
                    className="block px-4 py-2 text-sm text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/10 rounded transition-colors"
                  >
                    {solution.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Contact section */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-zion-purple/20 bg-zion-blue-dark">
          <div className="space-y-3 mb-4">
            <div className="flex items-center gap-2 text-sm text-zion-slate-light">
              <Phone className="w-4 h-4 text-zion-cyan"/>
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-zion-slate-light">
              <Mail className="w-4 h-4 text-zion-cyan"/>
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-zion-slate-light">
              <MapPin className="w-4 h-4 text-zion-cyan"/>
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
          
          <div className="space-y-3">
            <Link 
              to="/contact" 
              onClick={onClose} 
              className="block w-full px-4 py-3 text-center bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg hover:from-zion-cyan/90 hover:to-zion-purple/90 transition-all duration-300 font-semibold"
            >
              Get Started
            </Link>
            <Link 
              to="/contact" 
              onClick={onClose} 
              className="block w-full px-4 py-3 text-center border border-zion-cyan text-zion-cyan rounded-lg hover:bg-zion-cyan/10 transition-colors font-semibold"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
