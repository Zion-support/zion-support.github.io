'use client';
<<<<<<< HEAD
import React, { Suspense, lazy } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    X,;
  Menu,;
  Home,;
  Users,;
  Settings,;
  Brain,;
  Cloud,;
  Shield,;
  Code,;
  BarChart,;
  ChevronDown,;
  ChevronRight,;
  Phone,;
  Mail,;
  MapPin,;
  Clock
  }
} from 'lucide-react';
const Sidebar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(['ai-services', 'micro-saas', 'it-services']));
  const location = useLocation();
useEffect(() => {
    const handleResize = (;
      if (window.innerWidth >= 1024) {) => {
  return (
    $3
  )
  }
        setIsOpen(false);}
      }
    }
window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
const toggleSection = (;

    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(section)) {
    ) => {
  return (
    $3
  )
  }
      newExpanded.delete(section);}
    } else {
    newExpanded.add(section)
  }
    }
    setExpandedSections(newExpanded);
  }
const navigationSections = [
    {
    title: 'Main',;
      items: [
  }
        { name: 'Home', path: '/', icon: Home },;
        { name: 'About', path: '/about', icon: Users },;
        { name: 'Services', path: '/services', icon: Settings },;
        { name: 'Contact', path: '/contact', icon: Phone },;
        { name: 'Blog', path: '/blog', icon: BarChart },;
        { name: 'Case Studies', path: '/case-studies', icon: BarChart },;
      ];
    },;
    {
    title: 'AI Services',;
      key: 'ai-services',;
      items: [
  }
        { name: 'AI Services Overview', path: '/ai-services', icon: Brain },;
        { name: 'Business Intelligence', path: '/ai-services/business-intelligence', icon: BarChart },;
        { name: 'Document Processing', path: '/ai-services/document-processing', icon: Settings },;
        { name: 'Customer Experience', path: '/ai-services/customer-experience', icon: Users },;
        { name: 'Marketing Automation', path: '/ai-services/marketing-automation', icon: Settings },;
        { name: 'Predictive Maintenance', path: '/ai-services/predictive-maintenance', icon: Settings },;
        { name: 'Supply Chain', path: '/ai-services/supply-chain', icon: Settings },;
        { name: 'Fraud Detection', path: '/ai-services/fraud-detection', icon: Shield },;
        { name: 'Content Generation', path: '/ai-services/content-generation', icon: Settings },;
        { name: 'HR Analytics', path: '/ai-services/hr-analytics', icon: BarChart },;
        { name: 'Process Automation', path: '/ai-services/process-automation', icon: Settings },;
        { name: 'Quality Assurance', path: '/ai-services/quality-assurance', icon: Shield },;
        { name: 'Energy Management', path: '/ai-services/energy-management', icon: Settings },;
      ];
    },;
    {
    title: 'Micro SaaS',;
      key: 'micro-saas',;
      items: [
  }
        { name: 'Micro SaaS Overview', path: '/micro-saas', icon: Settings },;
        { name: 'Analytics Dashboard', path: '/micro-saas/analytics-dashboard', icon: BarChart },;
        { name: 'Support Bot', path: '/micro-saas/support-bot', icon: Users },;
        { name: 'Social Manager', path: '/micro-saas/social-manager', icon: Settings },;
        { name: 'Email Marketing', path: '/micro-saas/email-marketing', icon: Mail },;
        { name: 'Inventory Management', path: '/micro-saas/inventory-management', icon: Settings },;
        { name: 'Lead Scoring', path: '/micro-saas/lead-scoring', icon: BarChart },;
        { name: 'Document Processor', path: '/micro-saas/document-processor', icon: Settings },;
        { name: 'SEO Optimizer', path: '/micro-saas/seo-optimizer', icon: Settings },;
        { name: 'Appointment Scheduler', path: '/micro-saas/appointment-scheduler', icon: Clock },;
        { name: 'Chat Analytics', path: '/micro-saas/chat-analytics', icon: BarChart },;
        { name: 'Expense Tracker', path: '/micro-saas/expense-tracker', icon: BarChart },;
        { name: 'Content Generator', path: '/micro-saas/content-generator', icon: Settings },;
      ];
    },;
    {
    title: 'IT Services',;
      key: 'it-services',;
      items: [
  }
        { name: 'IT Services Overview', path: '/it-services', icon: Code },;
        { name: 'IT Consulting', path: '/it-consulting', icon: Users },;
        { name: 'IT Infrastructure', path: '/it-infrastructure', icon: Settings },;
        { name: 'IT Support', path: '/it-support', icon: Users },;
        { name: 'Cloud Infrastructure', path: '/cloud-infrastructure', icon: Cloud },;
        { name: 'Cloud Migration', path: '/cloud-migration', icon: Cloud },;
        { name: 'Cybersecurity', path: '/cybersecurity', icon: Shield },;
        { name: 'Database Management', path: '/database-management', icon: Settings },;
        { name: 'Managed IT', path: '/managed-it', icon: Settings },;
      ];
    },;
    {
    title: 'Company',;
      items: [
  }
        { name: 'Team', path: '/team', icon: Users },;
        { name: 'Careers', path: '/careers', icon: Users },;
        { name: 'Consultation', path: '/consultation', icon: Phone },;
        { name: 'Pricing', path: '/pricing', icon: BarChart },;
      ];
    },;
    {
    title: 'Resources',;
      items: [
  }
        { name: 'Documentation', path: '/docs', icon: Settings },;
        { name: 'API Docs', path: '/api-docs', icon: Code },;
        { name: 'Support', path: '/support', icon: Users },;
        { name: 'Status', path: '/status', icon: Settings },;
      ];
    }
  ];
const contactInfo = {
    phone: '(302) 464-0950',;
    email: 'kleber@ziontechgroup.com',;
    address: '364 E Main St STE 1008 Middletown, DE 19709',;
    hours: 'Mon-Fri 9AM-6PM EST'
  }
  }
return (
    <></>

      {/* Mobile Menu Button */}
      <button;
        onClick={() => setIsOpen(true)}

        className="lg: hidden fixed top-4 left-4 z-50 bg-slate-800/90 backdrop-blur-lg text-white p-3 rounded-lg border border-cyan-400/20 hover:bg-slate-700/90 transition-all"
        aria-label="Open sidebar"
      >,
        <Menu>
      </button>

      {/* Sidebar Overlay */}
      {
    isOpen && (;
        <div;
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
  }
          onClick={() => setIsOpen(false)}
        />
      )}
{/* Sidebar */}</div>
      <aside>
        <div className="flex flex-col h-full"></div>
          {/* Header */}</div>
          <div className="flex items-center justify-between p-6 border-b border-slate-700/50"></div>
            <Link to="/" className="flex items-center space-x-3" onClick={() => setIsOpen(false)}>;
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg flex items-center justify-center"></div>
                <Brain>
              </div>
              <div></div>
                <h2 className="text-xl font-bold text-white cyber-text">Zion Tech Group</h2>
                <p className="text-xs text-cyan-400">AI & IT Solutions</p>
              </div>
            </Link>
            <button;
              onClick={() => setIsOpen(false)}
              className="lg: hidden text-gray-400 hover:text-white transition-colors"
              aria-label="Close sidebar"
            >,
              <X>
=======
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
  CheckSquare
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
>>>>>>> cursor/website-audit-and-update-with-deployment-3540
            </button>
          </div>

          {/* Navigation */}
<<<<<<< HEAD
          <div className="flex-1 overflow-y-auto py-6"></div>
            <nav>
              {
    navigationSections.map((section, sectionIndex) => (
  }
                <div key={sectionIndex} className="space-y-1"></div>
                  <button;
                    onClick={() => section.key && toggleSection(section.key)}

                    className="flex items-center justify-between w-full px-3 py-2 text-sm font-semibold text-cyan-400 hover: text-cyan-300 transition-colors"
                  >,
                    <span>{section.title}</span>
                    {
    section.key && (;
                      expandedSections.has(section.key) ?;
                        <ChevronDown className="w-4 h-4" /> :;
                        <ChevronRight className="w-4 h-4" />
  }
                    )}
                  </button>
                  {
    (!section.key || expandedSections.has(section.key)) && (;
                    <div className="ml-4 space-y-1"></div>
                      {section.items.map((item, itemIndex) => (</div>
                        <Link
  }

                          key={itemIndex}
                          to={item.path}
                          onClick={() => setIsOpen(false)}
                          className={
    `flex items-center space-x-3 px-3 py-2 rounded-lg text-sm transition-all ${
                            location.pathname === item.path;
                              ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-400/30';
                              : 'text-gray-300 hover:text-white hover:bg-slate-800/50'
  }
                          }`}
                        >;
                          <item>
                          <span>{item.name}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

            </nav>
          </div>
          {/* Contact Info */}
          <div className="border-t border-slate-700/50 p-6"></div>
            <h3 className="text-sm font-semibold text-cyan-400 mb-4">Contact Information</h3>
            <div className="space-y-3 text-sm text-gray-300"></div>
              <div className="flex items-center space-x-3"></div>
                <Phone>
                <span>{contactInfo.phone}</span>
              </div>
              <div className="flex items-center space-x-3"></div>
                <Mail>
                <span className="truncate">{contactInfo.email}</span>
              </div>
              <div className="flex items-center space-x-3"></div>
                <MapPin>
                <span className="text-xs">{contactInfo.address}</span>
              </div>
              <div className="flex items-center space-x-3"></div>
                <Clock>
                <span className="text-xs">{contactInfo.hours}</span>
              </div>
          </div>
      </aside>
    </>
  );
}
Sidebar.displayName = 'Sidebar';
export default Sidebar;

=======
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
>>>>>>> cursor/website-audit-and-update-with-deployment-3540
