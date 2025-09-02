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
  Calendar,
  GraduationCap
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
            { label: 'AI Business Intelligence', href: '/services/ai-business-intelligence' },
            { label: 'AI Customer Support', href: '/services/ai-customer-support-automation' },
            { label: 'AI Project Management', href: '/services/ai-project-management-platform' },
            { label: 'AI Marketing Automation', href: '/services/ai-marketing-automation-platform' },
            { label: 'AI Data Analytics', href: '/services/ai-data-analytics-platform' },
            { label: 'AI Cybersecurity', href: '/services/ai-cybersecurity-platform' },
            { label: 'AI Research Assistant', href: '/services/ai-autonomous-research-assistant' },
            { label: 'AI Financial Trading', href: '/services/ai-financial-trading-platform' },
            { label: 'AI Healthcare', href: '/services/ai-healthcare-platform' },
            { label: 'Quantum AI Platform', href: '/services/ai-quantum-hybrid-platform' },
            { label: 'Supply Chain AI', href: '/services/ai-supply-chain-optimization' },
            { label: 'AI Sales Copilot', href: '/services/ai-sales-copilot' },
            { label: 'AI Compliance', href: '/services/ai-compliance-assistant' },
            { label: 'AI Healthcare Analytics', href: '/services/ai-healthcare-analytics' }
          ]
        },
        {
          label: 'IT & Infrastructure',
          icon: Server,
          items: [
            { label: 'Cloud & DevOps', href: '/services/cloud-devops' },
            { label: 'Cybersecurity', href: '/services/cybersecurity' },
            { label: 'Infrastructure Management', href: '/services/it-infrastructure-management' },
            { label: 'Digital Transformation', href: '/services/digital-transformation' }
          ]
        },
        {
          label: 'Micro SaaS & Specialized',
          icon: Building2,
          items: [
            { label: 'Comprehensive Solutions', href: '/services/micro-saas-solutions-comprehensive' },
            { label: 'AI Sales Copilot', href: '/services/ai-sales-copilot' },
            { label: 'Cloud FinOps Optimizer', href: '/services/cloud-finops-optimizer' },
            { label: 'AI Compliance Assistant', href: '/services/ai-compliance-assistant' }
          ]
        },
        {
          label: 'Legal & Education',
          icon: GraduationCap,
          items: [
            { label: 'AI Legal Research Platform', href: '/services/ai-autonomous-legal-research-platform' },
            { label: 'AI Educational Content', href: '/services/ai-educational-content-creation-platform' },
            { label: 'AI Autonomous Education Platform', href: '/services/ai-autonomous-education-platform' },
            { label: 'AI Autonomous Creative Studio', href: '/services/ai-autonomous-creative-studio' },
            { label: 'AI Real Estate Analytics', href: '/services/ai-real-estate-investment-analytics-platform' }
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
        { label: 'Financial Services', href: '/solutions/financial' },
        { label: 'Manufacturing', href: '/solutions/manufacturing' },
        { label: 'Retail & E-commerce', href: '/solutions/retail' },
        { label: 'Government', href: '/solutions/government' }
      ]
    },
    {
      id: 'company',
      label: 'Company',
      icon: Building2,
      items: [
        { label: 'About Us', href: '/about' },
        { label: 'Leadership', href: '/leadership' },
        { label: 'Careers', href: '/careers' },
        { label: 'News', href: '/news' },
        { label: 'Events', href: '/events' },
        { label: 'Partners', href: '/partners' },
        { label: 'Contact', href: '/contact' }
      ]
    },
    {
      id: 'resources',
      label: 'Resources',
      icon: FileText,
      items: [
        { label: 'Blog', href: '/blog' },
        { label: 'API Documentation', href: '/docs' },
        { label: 'Help Center', href: '/help' },
        { label: 'White Papers', href: '/white-papers' },
        { label: 'Webinars', href: '/webinars' },
        { label: 'Training', href: '/training' },
        { label: 'Research', href: '/research-development' },
        { label: 'Case Studies', href: '/case-studies' },
        { label: 'Innovative Services Showcase 2026', href: '/innovative-services-showcase-2026' },
        { label: 'Innovative Services Showcase 2027', href: '/innovative-services-showcase-2027' },
        { label: 'Marketplace', href: '/marketplace' },
        { label: 'Request Quote', href: '/request-quote' }
      ]
    }
  ];

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Menu Panel */}
      <div className="fixed right-0 top-0 h-full w-80 max-w-[90vw] bg-zion-blue-dark border-l border-zion-purple/30 shadow-2xl shadow-zion-purple/20">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-zion-purple/20">
          <h2 className="text-lg font-semibold text-white">Menu</h2>
          <button
            onClick={onClose}
            className="p-2 text-zion-slate-light hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Content */}
        <div className="p-4 space-y-6 overflow-y-auto h-[calc(100vh-80px)]">
          {/* Home */}
          <Link
            to="/"
            className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${
              isActive('/') 
                ? 'bg-zion-cyan/10 text-zion-cyan' 
                : 'text-zion-slate-light hover:bg-zion-purple/10 hover:text-white'
            }`}
            onClick={onClose}
          >
            <Home className="w-5 h-5" />
            <span className="font-medium">Home</span>
          </Link>

          {/* Services Section */}
          <div>
            <button
              onClick={toggleServices}
              className="flex items-center justify-between w-full p-3 rounded-lg text-zion-slate-light hover:bg-zion-purple/10 hover:text-white transition-colors"
            >
              <div className="flex items-center space-x-3">
                <Zap className="w-5 h-5" />
                <span className="font-medium">Services</span>
              </div>
              <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isServicesOpen && (
              <div className="mt-2 ml-6 space-y-2">
                {navigationSections.find(s => s.id === 'services')?.items.map((category, categoryIndex) => (
                  <div key={categoryIndex} className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm text-zion-cyan font-medium">
                      {React.createElement(category.icon, { className: 'w-4 h-4' })}
                      <span>{category.label}</span>
                    </div>
                    <div className="ml-4 space-y-1">
                      {category.items?.map((item, itemIndex) => (
                        <Link
                          key={itemIndex}
                          to={item.href}
                          className={`block px-3 py-2 rounded text-sm transition-colors ${
                            isActive(item.href)
                              ? 'text-zion-cyan bg-zion-cyan/10'
                              : 'text-zion-slate-light hover:text-white hover:bg-zion-purple/10'
                          }`}
                          onClick={onClose}
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

          {/* Solutions Section */}
          <div>
            <button
              onClick={toggleSolutions}
              className="flex items-center justify-between w-full p-3 rounded-lg text-zion-slate-light hover:bg-zion-purple/10 hover:text-white transition-colors"
            >
              <div className="flex items-center space-x-3">
                <Target className="w-5 h-5" />
                <span className="font-medium">Solutions</span>
              </div>
              <ChevronDown className={`w-4 h-4 transition-transform ${isSolutionsOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isSolutionsOpen && (
              <div className="mt-2 ml-6 space-y-1">
                {navigationSections.find(s => s.id === 'solutions')?.items.map((item, index) => (
                  <Link
                    key={index}
                    to={item.href}
                    className={`block px-3 py-2 rounded text-sm transition-colors ${
                      isActive(item.href)
                        ? 'text-zion-cyan bg-zion-cyan/10'
                        : 'text-zion-slate-light hover:text-white hover:bg-zion-purple/10'
                    }`}
                    onClick={onClose}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Company Section */}
          <div>
            <h3 className="text-sm font-medium text-zion-cyan mb-2">Company</h3>
            <div className="ml-4 space-y-1">
              {navigationSections.find(s => s.id === 'company')?.items.map((item, index) => (
                <Link
                  key={index}
                  to={item.href}
                  className={`block px-3 py-2 rounded text-sm transition-colors ${
                    isActive(item.href)
                      ? 'text-zion-cyan bg-zion-cyan/10'
                      : 'text-zion-slate-light hover:text-white hover:bg-zion-purple/10'
                  }`}
                  onClick={onClose}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Resources Section */}
          <div>
            <h3 className="text-sm font-medium text-zion-cyan mb-2">Resources</h3>
            <div className="ml-4 space-y-1">
              {navigationSections.find(s => s.id === 'resources')?.items.map((item, index) => (
                <Link
                  key={index}
                  to={item.href}
                  className={`block px-3 py-2 rounded text-sm transition-colors ${
                    isActive(item.href)
                      ? 'text-zion-cyan bg-zion-cyan/10'
                      : 'text-zion-slate-light hover:text-white hover:bg-zion-purple/10'
                  }`}
                  onClick={onClose}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="pt-4 border-t border-zion-purple/20">
            <div className="space-y-2">
              <Link
                to="/contact"
                className="flex items-center justify-center w-full px-4 py-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-medium rounded-lg hover:from-zion-cyan-light hover:to-zion-blue-light transition-all duration-300"
                onClick={onClose}
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                Contact Us
              </Link>
              
              <Link
                to="/pricing"
                className="flex items-center justify-center w-full px-4 py-3 border border-zion-purple/30 text-zion-slate-light hover:text-white hover:bg-zion-purple/10 rounded-lg transition-all duration-300"
                onClick={onClose}
              >
                <DollarSign className="w-4 h-4 mr-2" />
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
