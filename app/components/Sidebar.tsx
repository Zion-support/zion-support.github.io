'use client';
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  X, 
  Brain, 
  Cloud, 
  Shield, 
  Code, 
  BarChart, 
  Users, 
  Zap, 
  ArrowRight, 
  ChevronDown, 
  ChevronRight,
  Home,
  FileText,
  Briefcase,
  DollarSign,
  Phone,
  MessageSquare,
  HelpCircle,
  Settings,
  Globe,
  Database,
  Smartphone,
  Lock,
  TrendingUp,
  Target,
  Calendar,
  CheckSquare,
  Play,
  Mail,
  MapPin,
  Clock
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const location = useLocation();
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleSection = (section: string) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const isActive = (path: string) => location.pathname === path;

  const aiServices = [
    { name: 'AI Solutions', url: '/ai-services', icon: Brain },
    { name: 'AI Marketing', url: '/ai-marketing', icon: TrendingUp },
    { name: 'AI Customer Support', url: '/ai-customer-support', icon: Users },
    { name: 'AI Data Analytics', url: '/ai-data-analytics', icon: BarChart },
    { name: 'AI Content Generation', url: '/ai-content-generation', icon: FileText },
    { name: 'AI Healthcare', url: '/ai-healthcare', icon: Shield },
    { name: 'AI Financial Services', url: '/ai-fintech', icon: DollarSign },
    { name: 'AI E-commerce', url: '/ai-ecommerce-solutions', icon: Globe },
    { name: 'AI Cybersecurity', url: '/ai-cybersecurity', icon: Lock },
    { name: 'AI Mobile Apps', url: '/ai-mobile-app-development', icon: Smartphone }
  ];

  const itServices = [
    { name: 'IT Solutions', url: '/it-services', icon: Code },
    { name: 'Cloud Services', url: '/cloud-services', icon: Cloud },
    { name: 'Cloud Migration', url: '/cloud-migration', icon: Cloud },
    { name: 'DevOps & CI/CD', url: '/devops', icon: Settings },
    { name: 'Cybersecurity', url: '/cybersecurity', icon: Shield },
    { name: 'Security Monitoring', url: '/security-monitoring', icon: Shield },
    { name: 'Penetration Testing', url: '/penetration-testing', icon: Shield },
    { name: 'IT Infrastructure', url: '/it-infrastructure', icon: Cloud },
    { name: 'Managed IT Services', url: '/managed-it', icon: Settings },
    { name: 'IT Consulting', url: '/it-consulting', icon: Globe },
    { name: 'Database Services', url: '/database-services', icon: Database },
    { name: 'Network Solutions', url: '/network-solutions', icon: Globe },
    { name: 'IT Support', url: '/it-support', icon: HelpCircle },
    { name: 'Data Analytics', url: '/data-analytics', icon: BarChart },
    { name: 'Mobile Development', url: '/mobile-development', icon: Smartphone },
    { name: 'Web Development', url: '/web-development', icon: Globe },
    { name: 'Process Automation', url: '/process-automation', icon: Zap }
  ];

  const microSaasServices = [
    { name: 'Analytics Dashboard', url: '/micro-saas/analytics-dashboard', icon: BarChart },
    { name: 'Content Generator', url: '/micro-saas/content-generator', icon: FileText },
    { name: 'Email Marketing', url: '/micro-saas/email-marketing', icon: MessageSquare },
    { name: 'Social Manager', url: '/micro-saas/social-manager', icon: Users },
    { name: 'Expense Tracker', url: '/micro-saas/expense-tracker', icon: DollarSign },
    { name: 'Appointment Scheduler', url: '/micro-saas/appointment-scheduler', icon: Calendar }
  ];

  const companyLinks = [
    { name: 'About Us', url: '/about', icon: Users },
    { name: 'Case Studies', url: '/case-studies', icon: Briefcase },
    { name: 'Blog', url: '/blog', icon: FileText },
    { name: 'Careers', url: '/careers', icon: Briefcase },
    { name: 'Partners', url: '/partners', icon: Users },
    { name: 'Pricing', url: '/pricing', icon: DollarSign },
    { name: 'Contact', url: '/contact', icon: Phone }
  ];

  const supportLinks = [
    { name: 'Support Center', url: '/support', icon: HelpCircle },
    { name: 'FAQ', url: '/faq', icon: HelpCircle },
    { name: 'Documentation', url: '/docs', icon: FileText },
    { name: 'Status Page', url: '/status', icon: CheckSquare },
    { name: 'Demo', url: '/demo', icon: Play },
    { name: 'Consultation', url: '/consultation', icon: MessageSquare }
  ];

  const renderServiceSection = (title: string, services: any[], sectionKey: string, icon: React.ElementType) => {
    const isExpanded = expandedSections.includes(sectionKey);
    
    return (
      <div className="mb-4">
        <button
          onClick={() => toggleSection(sectionKey)}
          className="w-full flex items-center justify-between px-3 py-2 text-left text-gray-300 hover:text-white hover:bg-slate-700 rounded-md transition-colors"
        >
          <div className="flex items-center">
            <icon className="w-5 h-5 mr-3" />
            <span className="font-medium">{title}</span>
          </div>
          {isExpanded ? (
            <ChevronDown className="w-4 h-4" />
          ) : (
            <ChevronRight className="w-4 h-4" />
          )}
        </button>
        
        {isExpanded && (
          <div className="ml-8 mt-2 space-y-1">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.url}
                onClick={onClose}
                className={`flex items-center px-3 py-2 text-sm rounded-md transition-colors ${
                  isActive(service.url)
                    ? 'text-blue-400 bg-blue-400/10'
                    : 'text-gray-400 hover:text-white hover:bg-slate-700'
                }`}
              >
                <service.icon className="w-4 h-4 mr-3" />
                {service.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 w-80 bg-slate-900 text-white z-50 transform transition-transform duration-300 ease-in-out lg:translate-x-0">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-700">
            <Link to="/" className="flex items-center space-x-2" onClick={onClose}>
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Zion Tech Group</span>
            </Link>
            <button
              onClick={onClose}
              className="p-2 hover:bg-slate-700 rounded-md transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation */}
          <div className="flex-1 overflow-y-auto p-4">
            {/* Home */}
            <Link
              to="/"
              onClick={onClose}
              className={`flex items-center px-3 py-2 mb-4 rounded-md transition-colors ${
                isActive('/')
                  ? 'text-blue-400 bg-blue-400/10'
                  : 'text-gray-300 hover:text-white hover:bg-slate-700'
              }`}
            >
              <Home className="w-5 h-5 mr-3" />
              <span className="font-medium">Home</span>
            </Link>

            {/* AI Services */}
            {renderServiceSection('AI Services', aiServices, 'ai-services', Brain)}

            {/* IT Services */}
            {renderServiceSection('IT Services', itServices, 'it-services', Code)}

            {/* Micro SaaS */}
            {renderServiceSection('Micro SaaS', microSaasServices, 'micro-saas', Zap)}

            {/* Company */}
            <div className="mb-4">
              <div className="px-3 py-2 text-sm font-semibold text-gray-400 uppercase tracking-wider">
                Company
              </div>
              <div className="mt-2 space-y-1">
                {companyLinks.map((link, index) => (
                  <Link
                    key={index}
                    to={link.url}
                    onClick={onClose}
                    className={`flex items-center px-3 py-2 text-sm rounded-md transition-colors ${
                      isActive(link.url)
                        ? 'text-blue-400 bg-blue-400/10'
                        : 'text-gray-400 hover:text-white hover:bg-slate-700'
                    }`}
                  >
                    <link.icon className="w-4 h-4 mr-3" />
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Support */}
            <div className="mb-4">
              <div className="px-3 py-2 text-sm font-semibold text-gray-400 uppercase tracking-wider">
                Support
              </div>
              <div className="mt-2 space-y-1">
                {supportLinks.map((link, index) => (
                  <Link
                    key={index}
                    to={link.url}
                    onClick={onClose}
                    className={`flex items-center px-3 py-2 text-sm rounded-md transition-colors ${
                      isActive(link.url)
                        ? 'text-blue-400 bg-blue-400/10'
                        : 'text-gray-400 hover:text-white hover:bg-slate-700'
                    }`}
                  >
                    <link.icon className="w-4 h-4 mr-3" />
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="mt-8 p-4 bg-slate-800/50 rounded-lg">
              <h3 className="text-sm font-semibold text-cyan-400 mb-3">Contact Information</h3>
              <div className="space-y-2 text-sm text-gray-300">
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span>(302) 464-0950</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span className="truncate">kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs">364 E Main St STE 1008<br />Middletown, DE 19709</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs">Mon-Fri: 9AM-6PM EST</span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-gray-700">
            <Link
              to="/consultation"
              onClick={onClose}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-4 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
