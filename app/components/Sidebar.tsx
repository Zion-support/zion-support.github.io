<<<<<<< HEAD
'use client';
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  ChevronDown,
  ChevronRight,
  Brain,
  Cloud,
  Code,
  Zap,
  Sparkles,
  Home,
  Users,
  FileText,
  Settings,
  HelpCircle,
  Phone,
  Mail,
  MapPin,
  Clock,
  Award,
  Shield,
  BarChart,
  Globe,
  Facebook,
  Twitter,
  Linkedin,
  Github,
  MessageSquare,
  Star,
  TrendingUp,
  CheckCircle,
  Menu,
  X;
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;,
    onClose: () => void;
}

const Sidebar: React.FC<SidebarProps>= ({ isOpen, onClose }) => {</SidebarProps>
  const location = useLocation();</SidebarProps>
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  const toggleSection = (section: string) => {
    setExpandedSections(prev =>)
    prev.includes(section)
        ? prev.filter(s => s !== section)
  const toggleSection = (section: string) => {,
    setExpandedSections(prev =>)
      prev.includes(section),
        ? prev.filter(s => s !== section),
        : [...prev, section]
    );
  };

  const serviceCategories = [
    {
      title: 'AI Services'
      icon: Brain;
      color: 'text-purple-400',
      services: [,
        { name: 'AI Workflow Automation', path: '/ai-workflow-automation' },
        { name: 'AI Customer Support', path: '/ai-customer-support' },
        { name: 'AI Data Analytics', path: '/ai-data-analytics' },
        { name: 'AI Content Generation', path: '/ai-content-generation' },
        { name: 'AI Healthcare Solutions', path: '/ai-healthcare' },
        { name: 'AI Fintech Platform', path: '/ai-fintech' },
        { name: 'AI Computer Vision', path: '/ai-computer-vision' },
        { name: 'AI Machine Learning', path: '/ai-ml-platform' },
        { name: 'AI Quantum Computing', path: '/ai-quantum-computing' }
      ]
    },
    {
      title: 'IT Services'
      icon: Cloud;
      color: 'text-blue-400',
      services: [,
        { name: 'Cloud Migration', path: '/cloud-migration' },
        { name: 'Cybersecurity', path: '/cybersecurity' },
        { name: 'IT Infrastructure', path: '/it-infrastructure' },
        { name: 'IT Support', path: '/it-support' },
        { name: 'Custom Development', path: '/custom-development' },
        { name: 'DevOps & CI/CD', path: '/devops-cicd' },
        { name: 'Database Management', path: '/database-management' },
        { name: 'Network Design', path: '/network-design' }
      ]
    },
    {
      title: 'Micro SAAS'
      icon: Code;
      color: 'text-cyan-400',
      services: [,
        { name: 'AI Project Manager', path: '/ai-project-manager' },
        { name: 'AI Social Media Manager', path: '/ai-social-media-manager' },
        { name: 'AI Analytics Dashboard', path: '/ai-analytics-dashboard' },
        { name: 'AI Email Marketing', path: '/ai-email-marketing' },
        { name: 'AI Customer Support Bot', path: '/ai-customer-support-bot' },
        { name: 'AI Content Studio', path: '/ai-content-studio' },
        { name: 'AI Financial Advisor', path: '/ai-financial-advisor' },
        { name: 'AI Workflow Automation', path: '/ai-workflow-automation' }
      ]
    },
    {
      title: 'Emerging Tech'
      icon: Sparkles;
      color: 'text-pink-400',
      services: [,
        { name: 'Quantum Computing', path: '/ai-quantum-computing' },
        { name: 'Autonomous Systems', path: '/autonomous-systems' },
        { name: 'Blockchain & Web3', path: '/blockchain-web3' },
        { name: 'IoT & Edge Computing', path: '/iot-edge-computing' },
        { name: 'AR/VR Solutions', path: '/ar-vr-solutions' },
        { name: 'Smart Cities', path: '/smart-cities' },
        { name: 'Digital Transformation', path: '/digital-transformation' },
        { name: 'Innovation Labs', path: '/innovation-labs' }
      ]
    }
  ];

  const mainLinks = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'About', path: '/about', icon: Users },
    { name: 'Services', path: '/services', icon: Settings },
    { name: 'Case Studies', path: '/case-studies', icon: FileText },
    { name: 'Pricing', path: '/pricing', icon: BarChart },
    { name: 'Blog', path: '/blog', icon: MessageSquare },
    { name: 'Contact', path: '/contact', icon: Phone }
  ];

  const supportLinks = [
    { name: 'Support Center', path: '/support', icon: HelpCircle },
    { name: 'Documentation', path: '/docs', icon: FileText },
    { name: 'API Reference', path: '/api-docs', icon: Code },
    { name: 'Status Page', path: '/status', icon: CheckCircle },
    { name: 'Demo Request', path: '/demo', icon: Star },
    { name: 'Free Consultation', path: '/consultation', icon: MessageSquare }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', path: '/privacy', icon: Shield },
    { name: 'Terms of Service', path: '/terms', icon: FileText },
    { name: 'Cookie Policy', path: '/cookies', icon: Settings }
  ];

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

  if (!isOpen) return null;
</string>
  return (</string>
    <>

  return(<>
      {/* Backdrop */}
      <div;
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg: hidden",
        onClick={onClose}
      >{/* Sidebar */}</div>
      </div><div className="fixed top-0 left-0 h-full w-80 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 z-50 transform transition-transform duration-300 ease-in-out lg:hidden"></div>
        <div className="flex flex-col h-full">{/* Header */}</div>
      />
      {/* Sidebar */}
      <div className="fixed top-0 left-0 h-full w-80 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 z-50 transform transition-transform duration-300 ease-in-out lg: hidden">,
        <div className="flex flex-col h-full">,
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-700">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
          <div className="flex items-center justify-between p-6 border-b border-gray-700"></div>
            <div className="flex items-center space-x-2"></div>
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-lg flex items-center justify-center"></div>
                <Zap className="w-5 h-5 text-white" />
              <span className="text-white font-bold text-lg">Zion Tech Group</span>
            </div>
            <button;
              onClick={onClose}
              className="text-gray-400 hover: text-white transition-colors"
            >
              <X className="w-6 h-6" />)
            </button>)
          </div>)
),
          {/* Navigation Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">{/* Main Navigation */}</div>
            <div>
              <h3 className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-3">Main Navigation<nav className="space-y-1">{mainLinks.map((link, index) => (</nav>
            <div></div>
              <h3 className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-3">Main Navigation</h3><nav className="space-y-1">{mainLinks.map((link, index) => (</nav>
                  <Link
              <h3 className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-3">
                Main Navigation;
              </h3>
              <nav className="space-y-1">
                {mainLinks.map((link, index) => (
                  <Link;
                    key={index}
                    to={link.path}
                    className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                      location.pathname === link.path;
                        ? 'bg-cyan-500/20 text-cyan-400'}
                        : 'text-gray-300 hover:bg-gray-700/50 hover:text-white'}
                    }`}
                    onClick={onClose}
                  ></Lin>
                    <link.icon className="w-5 h-5" /></lin>
                    <span>{link.name}</spa>
                  </Link>
                ))}
              </nav>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-3">Our Services<div className="space-y-2">{serviceCategories.map((category, categoryIndex) => (</div>
                  <div key={categoryIndex}>
            <div></div>
              <h3 className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-3">Our Services</h3><div className="space-y-2">{serviceCategories.map((category, categoryIndex) => (</div>
                  <div key={categoryIndex}></div>
                    <button
                      onClick={() =>toggleSection(category.title)}</button></<<<butto>className</butto></butto>="flex items-center justify-between w-full px-3 py-2 text-left text-gray-300 hover:bg-gray-700/50 hover:text-white rounded-lg transition-colors"</button>
                    ></button>
                      <div className="flex items-center space-x-3">
              <h3 className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-3">
                Our Services;
              </h3>
              <div className="space-y-2">
                {serviceCategories.map((category, categoryIndex) => (
                  <div key={categoryIndex}>
                    <button;
                      onClick={() => toggleSection(category.title)}
                      className="flex items-center justify-between w-full px-3 py-2 text-left text-gray-300 hover: bg-gray-700/50 hover:text-white rounded-lg transition-colors",
                    >,
                      <div className="flex items-center space-x-3">,
                      <div className="flex items-center space-x-3"></div>
                        <category.icon className={`w-5 h-5 ${category.color}`} />
                        <span>{category.title}</span>
                      </div>
                      {expandedSections.includes(category.title) ? (
                        <ChevronDown className="w-4 h-4" >) : (</ChevronDown><ChevronRight className="w-4 h-4" >)}</ChevronRigh>
                    </ChevronRight>

                    {expandedSections.includes(category.title) && (
                      <div className="ml-8 space-y-1 mt-2">{category.services.map((service, serviceIndex) => (<Link
                      <div className="ml-8 space-y-1 mt-2">
                        {category.services.map((service, serviceIndex) => (
                          <Link;
                      <div className="ml-8 space-y-1 mt-2">{category.services.map((service, serviceIndex) => (</div><Link
                            key={serviceIndex}
                            to={service.path}
                            className={`block px-3 py-2 text-sm rounded-lg transition-colors ${
                              location.pathname === service.path;
                                ? 'bg-cyan-500/20 text-cyan-400'}
                                : 'text-gray-400 hover:bg-gray-700/50 hover:text-white'}
                            }`}
                            onClick={onClose}
                          >{service.name}</Lin>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-3">Support<nav className="space-y-1">{supportLinks.map((link, index) => (</nav>
            <div></div>
              <h3 className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-3">Support</h3><nav className="space-y-1">{supportLinks.map((link, index) => (</nav>
                  <Link
              <h3 className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-3">
                Support;
              </h3>
              <nav className="space-y-1">
                {supportLinks.map((link, index) => (
                  <Link;
                    key={index}
                    to={link.path}
                    className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                      location.pathname === link.path;
                        ? 'bg-cyan-500/20 text-cyan-400'}
                        : 'text-gray-300 hover:bg-gray-700/50 hover:text-white'}
                    }`}
                    onClick={onClose}
                  ></Lin>
                    <link.icon className="w-5 h-5" /></lin>
                    <span>{link.name}</spa>
                  </Link>
                ))}
              </nav>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-3">Legal<nav className="space-y-1">{legalLinks.map((link, index) => (</nav>
            <div></div>
              <h3 className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-3">Legal</h3><nav className="space-y-1">{legalLinks.map((link, index) => (</nav>
                  <Link
              <h3 className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-3">
                Legal;
              </h3>
              <nav className="space-y-1">
                {legalLinks.map((link, index) => (
                  <Link;
                    key={index}
                    to={link.path}
                    className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                      location.pathname === link.path;
                        ? 'bg-cyan-500/20 text-cyan-400'}
                        : 'text-gray-300 hover:bg-gray-700/50 hover:text-white'}
                    }`}
                    onClick={onClose}
                  ></Lin>
                    <link.icon className="w-5 h-5" /></lin>
                    <span>{link.name}</spa>
                  </Link>
                ))}
              </nav>
            </div>
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-gray-700"></div>
            <div className="space-y-4">{/* Contact Info */}</div>
              <div className="space-y-2"></div>
                <div className="flex items-center space-x-2 text-gray-400 text-sm"></div>
                  <Phone className="w-4 h-4" />
                  <span>+1 (302) 464-0950</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400 text-sm"></div>
                  <Mail className="w-4 h-4" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                <a href="https: //linkedin.com/company/zion-tech-group" className="text-gray-400 hover:text-cyan-400 transition-colors">
              <div className="flex space-x-4"></div>
                <a href="https://linkedin.com/company/zion-tech-group" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://twitter.com/ziontechgroup" className="text-gray-400 hover:text-cyan-400 transition-colors"></a>
                  <Twitter className="w-5 h-5" /></Twitte>
                </a>
                <a href="https://github.com/zion-tech-group" className="text-gray-400 hover:text-cyan-400 transition-colors">,
                  <Github className="w-5 h-5" />,
                </a>,
              </div>,
,
              {/* CTA Button */}
              <Link;
                to="/contact"
                className="block w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover: from-cyan-600 hover:to-purple-700 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 text-center",
                onClick={onClose}
              >Get Started Today</Link>
              >
                Get Started Today;
              </Link>
            </div>
          </div>
        </div>
      </div>
    
  );
};

=======
import React, { memo, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  X, 
  Menu, 
  Home, 
  Users, 
  Settings, 
  Brain, 
  Cloud, 
  Shield, 
  Code, 
  BarChart, 
  ChevronDown, 
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  Clock
} from 'lucide-react';

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(['ai-services', 'micro-saas', 'it-services']));
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSection = (section: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(section)) {
      newExpanded.delete(section);
    } else {
      newExpanded.add(section);
    }
    setExpandedSections(newExpanded);
  };

  const navigationSections = [
    {
      title: 'Main',
      items: [
        { name: 'Home', path: '/', icon: Home },
        { name: 'About', path: '/about', icon: Users },
        { name: 'Services', path: '/services', icon: Settings },
        { name: 'Contact', path: '/contact', icon: Phone },
        { name: 'Blog', path: '/blog', icon: BarChart },
        { name: 'Case Studies', path: '/case-studies', icon: BarChart },
      ]
    },
    {
      title: 'AI Services',
      key: 'ai-services',
      items: [
        { name: 'AI Services Overview', path: '/ai-services', icon: Brain },
        { name: 'Business Intelligence', path: '/ai-services/business-intelligence', icon: BarChart },
        { name: 'Document Processing', path: '/ai-services/document-processing', icon: Settings },
        { name: 'Customer Experience', path: '/ai-services/customer-experience', icon: Users },
        { name: 'Marketing Automation', path: '/ai-services/marketing-automation', icon: Settings },
        { name: 'Predictive Maintenance', path: '/ai-services/predictive-maintenance', icon: Settings },
        { name: 'Supply Chain', path: '/ai-services/supply-chain', icon: Settings },
        { name: 'Fraud Detection', path: '/ai-services/fraud-detection', icon: Shield },
        { name: 'Content Generation', path: '/ai-services/content-generation', icon: Settings },
        { name: 'HR Analytics', path: '/ai-services/hr-analytics', icon: BarChart },
        { name: 'Process Automation', path: '/ai-services/process-automation', icon: Settings },
        { name: 'Quality Assurance', path: '/ai-services/quality-assurance', icon: Shield },
        { name: 'Energy Management', path: '/ai-services/energy-management', icon: Settings },
      ]
    },
    {
      title: 'Micro SaaS',
      key: 'micro-saas',
      items: [
        { name: 'Micro SaaS Overview', path: '/micro-saas', icon: Settings },
        { name: 'Analytics Dashboard', path: '/micro-saas/analytics-dashboard', icon: BarChart },
        { name: 'Support Bot', path: '/micro-saas/support-bot', icon: Users },
        { name: 'Social Manager', path: '/micro-saas/social-manager', icon: Settings },
        { name: 'Email Marketing', path: '/micro-saas/email-marketing', icon: Mail },
        { name: 'Inventory Management', path: '/micro-saas/inventory-management', icon: Settings },
        { name: 'Lead Scoring', path: '/micro-saas/lead-scoring', icon: BarChart },
        { name: 'Document Processor', path: '/micro-saas/document-processor', icon: Settings },
        { name: 'SEO Optimizer', path: '/micro-saas/seo-optimizer', icon: Settings },
        { name: 'Appointment Scheduler', path: '/micro-saas/appointment-scheduler', icon: Clock },
        { name: 'Chat Analytics', path: '/micro-saas/chat-analytics', icon: BarChart },
        { name: 'Expense Tracker', path: '/micro-saas/expense-tracker', icon: BarChart },
        { name: 'Content Generator', path: '/micro-saas/content-generator', icon: Settings },
      ]
    },
    {
      title: 'IT Services',
      key: 'it-services',
      items: [
        { name: 'IT Services Overview', path: '/it-services', icon: Code },
        { name: 'IT Consulting', path: '/it-consulting', icon: Users },
        { name: 'IT Infrastructure', path: '/it-infrastructure', icon: Settings },
        { name: 'IT Support', path: '/it-support', icon: Users },
        { name: 'Cloud Infrastructure', path: '/cloud-infrastructure', icon: Cloud },
        { name: 'Cloud Migration', path: '/cloud-migration', icon: Cloud },
        { name: 'Cybersecurity', path: '/cybersecurity', icon: Shield },
        { name: 'Database Management', path: '/database-management', icon: Settings },
        { name: 'Managed IT', path: '/managed-it', icon: Settings },
      ]
    },
    {
      title: 'Company',
      items: [
        { name: 'Team', path: '/team', icon: Users },
        { name: 'Careers', path: '/careers', icon: Users },
        { name: 'Consultation', path: '/consultation', icon: Phone },
        { name: 'Pricing', path: '/pricing', icon: BarChart },
      ]
    },
    {
      title: 'Resources',
      items: [
        { name: 'Documentation', path: '/docs', icon: Settings },
        { name: 'API Docs', path: '/api-docs', icon: Code },
        { name: 'Support', path: '/support', icon: Users },
        { name: 'Status', path: '/status', icon: Settings },
      ]
    }
  ];

  const contactInfo = {
    phone: '(302) 464-0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown, DE 19709',
    hours: 'Mon-Fri 9AM-6PM EST'
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-50 bg-slate-800/90 backdrop-blur-lg text-white p-3 rounded-lg border border-cyan-400/20 hover:bg-slate-700/90 transition-all"
        aria-label="Open sidebar"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Sidebar Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`fixed top-0 left-0 h-full w-80 bg-slate-900/95 backdrop-blur-lg border-r border-cyan-400/20 z-50 transform transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0 lg:static lg:z-auto`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-slate-700/50">
            <Link to="/" className="flex items-center space-x-3" onClick={() => setIsOpen(false)}>
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white cyber-text">Zion Tech Group</h2>
                <p className="text-xs text-cyan-400">AI & IT Solutions</p>
              </div>
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="lg:hidden text-gray-400 hover:text-white transition-colors"
              aria-label="Close sidebar"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation */}
          <div className="flex-1 overflow-y-auto py-6">
            <nav className="space-y-2 px-4">
              {navigationSections.map((section, sectionIndex) => (
                <div key={sectionIndex} className="space-y-1">
                  <button
                    onClick={() => section.key && toggleSection(section.key)}
                    className="flex items-center justify-between w-full px-3 py-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <span>{section.title}</span>
                    {section.key && (
                      expandedSections.has(section.key) ? 
                        <ChevronDown className="w-4 h-4" /> : 
                        <ChevronRight className="w-4 h-4" />
                    )}
                  </button>
                  
                  {(!section.key || expandedSections.has(section.key)) && (
                    <div className="ml-4 space-y-1">
                      {section.items.map((item, itemIndex) => (
                        <Link
                          key={itemIndex}
                          to={item.path}
                          onClick={() => setIsOpen(false)}
                          className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm transition-all ${
                            location.pathname === item.path
                              ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-400/30'
                              : 'text-gray-300 hover:text-white hover:bg-slate-800/50'
                          }`}
                        >
                          <item.icon className="w-4 h-4 flex-shrink-0" />
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
          <div className="border-t border-slate-700/50 p-6">
            <h3 className="text-sm font-semibold text-cyan-400 mb-4">Contact Information</h3>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>{contactInfo.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span className="truncate">{contactInfo.email}</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span className="text-xs">{contactInfo.address}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span className="text-xs">{contactInfo.hours}</span>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

Sidebar.displayName = 'Sidebar';

>>>>>>> origin/resolve-merge-conflicts
export default Sidebar;