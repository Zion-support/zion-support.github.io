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
        {
          label: 'Industry Solutions',
          icon: Building2,
          items: [
            { label: 'Healthcare', href: '/solutions/healthcare' },
            { label: 'Finance', href: '/solutions/finance' },
            { label: 'Manufacturing', href: '/solutions/manufacturing' },
            { label: 'Retail', href: '/solutions/retail' },
            { label: 'Education', href: '/solutions/education' },
            { label: 'Government', href: '/solutions/government' },
          ]
        },
        {
          label: 'Technology Solutions',
          icon: Network,
          items: [
            { label: 'Cloud Solutions', href: '/solutions/cloud' },
            { label: 'AI & ML', href: '/solutions/ai-ml' },
            { label: 'Blockchain', href: '/solutions/blockchain' },
            { label: 'IoT', href: '/solutions/iot' },
            { label: 'Cybersecurity', href: '/solutions/cybersecurity' },
            { label: 'Data Analytics', href: '/solutions/data-analytics' },
          ]
        }
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

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  };

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      
      {/* Menu Panel */}
      <div className="fixed right-0 top-0 h-full w-80 max-w-[85vw] bg-slate-900 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-700">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">Z</span>
            </div>
            <span className="text-white font-semibold">Zion Tech Group</span>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto py-6">
          <nav className="space-y-2 px-6">
            {/* Main Navigation */}
            {navigationSections.map((section) => (
              <div key={section.id} className="space-y-2">
                <button
                  onClick={section.id === 'services' ? toggleServices : toggleSolutions}
                  className={`w-full flex items-center justify-between p-3 rounded-lg text-left transition-colors ${
                    (section.id === 'services' && isServicesOpen) || 
                    (section.id === 'solutions' && isSolutionsOpen)
                      ? 'bg-slate-800 text-white'
                      : 'text-gray-300 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <section.icon className="w-5 h-5" />
                    <span className="font-medium">{section.label}</span>
                  </div>
                  {(section.id === 'services' && isServicesOpen) || 
                   (section.id === 'solutions' && isSolutionsOpen) ? (
                    <ChevronDown className="w-5 h-5" />
                  ) : (
                    <ChevronRight className="w-5 h-5" />
                  )}
                </button>
                
                {/* Submenu */}
                {((section.id === 'services' && isServicesOpen) || 
                  (section.id === 'solutions' && isSolutionsOpen)) && (
                  <div className="ml-6 space-y-2">
                    {section.items.map((category, categoryIndex) => (
                      <div key={categoryIndex} className="space-y-2">
                        <div className="flex items-center space-x-2 text-sm text-gray-400">
                          <category.icon className="w-4 h-4" />
                          <span>{category.label}</span>
                        </div>
                        <div className="ml-6 space-y-1">
                          {category.items.map((item, itemIndex) => (
                            <Link
                              key={itemIndex}
                              to={item.href}
                              onClick={onClose}
                              className={`block p-2 rounded text-sm transition-colors ${
                                isActive(item.href)
                                  ? 'text-purple-400 bg-purple-400/10'
                                  : 'text-gray-400 hover:text-white hover:bg-slate-800'
                              }`}
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Direct Links */}
            <div className="pt-4 border-t border-slate-700">
              {directLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.href}
                  onClick={onClose}
                  className={`block p-3 rounded-lg transition-colors ${
                    isActive(link.href)
                      ? 'text-purple-400 bg-purple-400/10'
                      : 'text-gray-300 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        </div>

        {/* Footer */}
        <div className="border-t border-slate-700 p-6 space-y-4">
          <div className="space-y-3">
            <div className="flex items-center space-x-3 text-sm text-gray-400">
              <Phone className="w-4 h-4" />
              <a href={`tel:${contactInfo.phone}`} className="hover:text-white transition-colors">
                {contactInfo.phone}
              </a>
            </div>
            <div className="flex items-center space-x-3 text-sm text-gray-400">
              <Mail className="w-4 h-4" />
              <a href={`mailto:${contactInfo.email}`} className="hover:text-white transition-colors">
                {contactInfo.email}
              </a>
            </div>
            <div className="flex items-start space-x-3 text-sm text-gray-400">
              <MapPin className="w-4 h-4 mt-0.5" />
              <span>{contactInfo.address}</span>
            </div>
          </div>
          
          <div className="pt-4 border-t border-slate-700">
            <Link
              to="/contact"
              onClick={onClose}
              className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white py-3 px-4 rounded-lg font-medium text-center hover:from-purple-600 hover:to-pink-700 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Get Started</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}