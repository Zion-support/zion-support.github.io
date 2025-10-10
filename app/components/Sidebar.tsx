'use client';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React, {Suspense, lazy}from 'react';
import {Link, useLocation}}from 'react-router-dom';
import {X,}
=======
import React, { Suspense, lazy } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    X,
>>>>>>> cursor/fix-errors-and-merge-to-main-e1a2
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

  Clock;}} from 'lucide-react'
const Sidebar: React.FC = () => {,
    const [isOpen, setIsOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<Set<string></Set>>(new Set(['ai-services', 'micro-saas', 'it-services']));
  const location = useLocation();
useEffect(() => {
    const handleResize = (;
      if (window.innerWidth >= 1024) {) => {
  return($3;)
  )}setIsOpen(false);}
=======
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  ChevronDown, ChevronRight, Brain, Cloud, Shield, Code, BarChart, 
  Users, Zap, ArrowRight, Sparkles, Cpu, Target, Globe, Database, 
  Smartphone, Lock, TrendingUp, Settings, Calendar, CheckSquare, 
  FileText, MessageCircle, Heart, DollarSign, Box, Monitor, 
  Link as LinkIcon, Server, Package, Mic, Workflow, Eye, Wifi, 
  MessageSquare, CheckCircle, ShoppingCart, X, Menu, Book, Phone, Mail
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
  CheckSquare,
  Play,
  Mail,
  MapPin,
  Clock
>>>>>>> cursor/website-audit-and-update-with-deployment-a217
} from 'lucide-react';

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<string[]>([]);
  const location = useLocation();

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && !(event.target as Element).closest('.sidebar')) {
        setIsOpen(false);
>>>>>>> cursor/website-audit-and-update-with-deployment-c0e8
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const toggleSection = (section: string) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const aiServices = [
    { name: 'AI Analytics', href: '/ai-analytics', icon: BarChart },
    { name: 'AI Automation', href: '/ai-automation', icon: Zap },
    { name: 'AI Chatbot Builder', href: '/ai-chatbot-builder', icon: MessageCircle },
    { name: 'AI CRM', href: '/ai-crm', icon: Users },
    { name: 'AI Cybersecurity', href: '/ai-cybersecurity', icon: Shield },
    { name: 'AI Data Analytics', href: '/ai-data-analytics', icon: Database },
    { name: 'AI Healthcare', href: '/ai-healthcare', icon: Heart },
    { name: 'AI Financial Services', href: '/ai-financial-services', icon: DollarSign },
    { name: 'AI Computer Vision', href: '/ai-computer-vision', icon: Eye },
    { name: 'AI Voice Solutions', href: '/ai-voice-solutions', icon: Mic },
    { name: 'AI E-commerce', href: '/ai-ecommerce-solutions', icon: Globe },
    { name: 'AI HR Solutions', href: '/ai-hr-solutions', icon: Users },
    { name: 'AI Content Generation', href: '/ai-content-generation', icon: FileText },
    { name: 'AI Workflow Automation', href: '/ai-workflow-automation', icon: Workflow },
    { name: 'AI Document Processing', href: '/ai-document-processing', icon: FileText },
    { name: 'AI Predictive Analytics', href: '/ai-predictive-analytics', icon: BarChart },
    { name: 'AI Edge Computing', href: '/ai-edge-computing', icon: Cpu },
    { name: 'AI Video Analysis', href: '/ai-video-analysis', icon: Eye },
    { name: 'AI Speech Synthesis', href: '/ai-speech-synthesis', icon: Mic },
    { name: 'AI Recommendation Engine', href: '/ai-recommendation-engine', icon: Target },
    { name: 'AI Sentiment Analysis', href: '/ai-sentiment-analysis', icon: Heart },
    { name: 'AI Enterprise Chatbot', href: '/ai-chatbot-enterprise', icon: MessageSquare },
    { name: 'AI Content Moderation', href: '/ai-content-moderation', icon: Shield },
    { name: 'AI Predictive Modeling', href: '/ai-predictive-modeling', icon: BarChart },
    { name: 'AI Document Intelligence', href: '/ai-document-intelligence', icon: FileText },
    { name: 'AI Conversation Analytics', href: '/ai-conversation-analytics', icon: Users },
    { name: 'AI Supply Chain AI', href: '/ai-supply-chain-ai', icon: Box },
    { name: 'AI Healthcare Diagnostics', href: '/ai-healthcare-diagnostics', icon: Heart },
    { name: 'AI Financial Forecasting', href: '/ai-financial-forecasting', icon: TrendingUp },
    { name: 'AI IoT Analytics', href: '/ai-iot-analytics', icon: Cpu },
    { name: 'AI Conversational AI', href: '/ai-conversational-ai', icon: MessageCircle },
    { name: 'AI Automated Testing', href: '/ai-automated-testing', icon: CheckCircle },
    { name: 'AI Knowledge Management', href: '/ai-knowledge-management', icon: FileText },
    { name: 'AI Customer Churn', href: '/ai-customer-churn', icon: Users },
    { name: 'AI Automated Reporting', href: '/ai-automated-reporting', icon: BarChart },
    { name: 'AI Voice Assistant', href: '/ai-voice-assistant', icon: Mic },
    { name: 'AI Content Generation Pro', href: '/ai-content-generation-pro', icon: FileText }
  ];

  const itServices = [
    { name: 'Cloud Infrastructure', href: '/cloud-infrastructure', icon: Cloud },
    { name: 'API Development', href: '/api-development', icon: Code },
    { name: 'Cybersecurity Solutions', href: '/cybersecurity-solutions', icon: Shield },
    { name: 'Database Management', href: '/database-management', icon: Database },
    { name: 'Mobile Development', href: '/mobile-development', icon: Smartphone },
    { name: 'Web Development', href: '/web-development', icon: Globe },
    { name: 'DevOps & CI/CD', href: '/devops-cicd', icon: Settings },
    { name: 'IT Support', href: '/it-support', icon: Monitor },
    { name: 'Data Analytics & BI', href: '/data-analytics-bi', icon: BarChart },
    { name: 'Custom Software', href: '/custom-software', icon: Code },
    { name: 'Network Infrastructure', href: '/network-infrastructure', icon: Wifi },
    { name: 'IT Asset Management', href: '/it-asset-management', icon: Package },
    { name: 'IT Security Services', href: '/it-security-services', icon: Lock },
    { name: 'IT Project Management', href: '/it-project-management', icon: Calendar },
    { name: 'Cloud Native Development', href: '/cloud-native-development', icon: Cloud },
    { name: 'AI Integration Services', href: '/ai-integration-services', icon: Brain },
    { name: 'Blockchain Development', href: '/blockchain-development', icon: LinkIcon },
    { name: 'IoT Development', href: '/iot-development', icon: Wifi },
    { name: 'E-commerce Development', href: '/e-commerce-development', icon: ShoppingCart },
    { name: 'Advanced API Development', href: '/api-development-advanced', icon: Code },
    { name: 'Data Engineering', href: '/data-engineering', icon: Database },
    { name: 'Advanced Cybersecurity', href: '/cybersecurity-advanced', icon: Shield },
    { name: 'Cloud Migration Advanced', href: '/cloud-migration-advanced', icon: Cloud },
    { name: 'Advanced DevOps', href: '/devops-advanced', icon: Settings },
    { name: 'Machine Learning Ops', href: '/machine-learning-ops', icon: Cpu },
    { name: 'Enterprise Integration', href: '/enterprise-integration', icon: LinkIcon },
    { name: 'Performance Optimization', href: '/performance-optimization', icon: Zap },
    { name: 'Disaster Recovery Advanced', href: '/disaster-recovery-advanced', icon: Shield },
    { name: 'Compliance Automation', href: '/compliance-automation', icon: CheckSquare },
    { name: 'Cloud Cost Optimization', href: '/cloud-cost-optimization', icon: TrendingUp },
    { name: 'Security Automation', href: '/security-automation', icon: Shield },
    { name: 'Data Visualization', href: '/data-visualization', icon: BarChart },
    { name: 'Workflow Automation', href: '/workflow-automation', icon: Settings },
    { name: 'Cloud Native Security', href: '/cloud-native-security', icon: Shield }
  ];

  const microSaasServices = [
    { name: 'Zion Analytics Pro', href: '/zion-analytics-pro', icon: BarChart },
    { name: 'Zion Chat AI', href: '/zion-chat-ai', icon: MessageCircle },
    { name: 'Zion Security Shield', href: '/zion-security-shield', icon: Shield },
    { name: 'Zion Cloud Vault', href: '/zion-cloud-vault', icon: Cloud },
    { name: 'Zion Content Studio', href: '/zion-content-studio', icon: FileText },
    { name: 'Zion CRM Intelligence', href: '/zion-crm-intelligence', icon: Users },
    { name: 'Zion Data Sync', href: '/zion-data-sync', icon: Database },
    { name: 'Zion Lead Magnet', href: '/zion-lead-magnet', icon: Target },
    { name: 'Zion Project Master', href: '/zion-project-master', icon: Calendar },
    { name: 'Zion Email Automation', href: '/zion-email-automation', icon: MessageCircle },
    { name: 'Zion Inventory Smart', href: '/zion-inventory-smart', icon: Package },
    { name: 'Zion Invoice Genius', href: '/zion-invoice-genius', icon: DollarSign },
    { name: 'Zion Workflow Automation', href: '/zion-workflow-automation', icon: Settings },
    { name: 'Zion Performance Monitor', href: '/zion-performance-monitor', icon: Monitor },
    { name: 'Zion Compliance Manager', href: '/zion-compliance-manager', icon: CheckSquare },
    { name: 'Zion Social Scheduler', href: '/zion-social-scheduler', icon: Globe },
    { name: 'Zion AI Video Editor', href: '/zion-ai-video-editor', icon: Eye },
    { name: 'Zion AI Translator Pro', href: '/zion-ai-translator-pro', icon: Globe },
    { name: 'Zion AI Code Reviewer', href: '/zion-ai-code-reviewer', icon: Code },
    { name: 'Zion Customer Insights', href: '/zion-customer-insights', icon: Users },
    { name: 'Zion AI Email Assistant', href: '/zion-ai-email-assistant', icon: MessageCircle },
    { name: 'Zion AI Meeting Assistant', href: '/zion-ai-meeting-assistant', icon: Calendar },
    { name: 'Zion AI SEO Optimizer', href: '/zion-ai-seo-optimizer', icon: Target },
    { name: 'Zion AI Data Cleaner', href: '/zion-ai-data-cleaner', icon: Database },
    { name: 'Zion AI Contract Analyzer', href: '/zion-ai-contract-analyzer', icon: FileText },
    { name: 'Zion AI Survey Builder', href: '/zion-ai-survey-builder', icon: CheckSquare },
    { name: 'Zion AI Accounting Assistant', href: '/zion-ai-accounting-assistant', icon: DollarSign },
    { name: 'Zion AI Recruitment Pro', href: '/zion-ai-recruitment-pro', icon: Users },
    { name: 'Zion AI Content Moderation', href: '/zion-ai-content-moderation', icon: Shield },
    { name: 'Zion AI Predictive Maintenance', href: '/zion-ai-predictive-maintenance', icon: Settings },
    { name: 'Zion AI Energy Manager', href: '/zion-ai-energy-manager', icon: Zap },
    { name: 'Zion AI Supply Chain Optimizer', href: '/zion-ai-supply-chain-optimizer', icon: Box },
    { name: 'Zion AI Fraud Detector', href: '/zion-ai-fraud-detector', icon: Shield },
    { name: 'Zion AI Customer Service Pro', href: '/zion-ai-customer-service-pro', icon: MessageSquare },
    { name: 'Zion AI Marketing Automation', href: '/zion-ai-marketing-automation', icon: Target },
    { name: 'Zion AI Document AI', href: '/zion-ai-document-ai', icon: FileText }
  ];

  const emergingTech = [
    { name: '5G Implementation', href: '/5g-implementation', icon: Zap },
    { name: 'AI 3D Generation', href: '/ai-3d-generation', icon: Box },
    { name: 'AI Holographic Workspace', href: '/ai-holographic-workspace', icon: Monitor },
    { name: 'AI Autonomous Systems', href: '/ai-autonomous-systems', icon: Cpu },
    { name: 'AI Blockchain Solutions', href: '/ai-blockchain-solutions', icon: LinkIcon },
    { name: 'AI Edge Computing', href: '/ai-edge-computing', icon: Server },
    { name: 'Quantum Computing', href: '/quantum-computing', icon: Cpu },
    { name: 'AR/VR Solutions', href: '/ar-vr-solutions', icon: Monitor },
    { name: 'IoT Integration', href: '/iot-integration', icon: Wifi },
    { name: 'Machine Learning', href: '/machine-learning', icon: Brain }
  ];

  const mainPages = [
    { name: 'Home', href: '/', icon: Globe },
    { name: 'About', href: '/about', icon: Users },
    { name: 'Services', href: '/services', icon: Settings },
    { name: 'Pricing', href: '/pricing', icon: DollarSign },
    { name: 'Case Studies', href: '/case-studies', icon: FileText },
    { name: 'Blog', href: '/blog', icon: FileText },
    { name: 'Tutorials', href: '/tutorials', icon: Book },
    { name: 'Contact', href: '/contact', icon: MessageCircle }
  ];

  const renderServiceSection = (title: string, services: any[], sectionKey: string, icon: any) => {
    const isExpanded = expandedSections.includes(sectionKey);
    
    return (
      <div className="mb-4">
        <button
          onClick={() => toggleSection(sectionKey)}
          className="w-full flex items-center justify-between p-3 text-left text-gray-300 hover:text-cyan-400 transition-colors duration-300 rounded-lg hover:bg-white/5"
        >
          <div className="flex items-center space-x-3">
            <icon className="w-5 h-5" />
            <span className="font-medium">{title}</span>
          </div>
          {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
        </button>
        
        {isExpanded && (
          <div className="ml-6 mt-2 space-y-1 max-h-64 overflow-y-auto custom-scrollbar">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.href}
                className={`flex items-center space-x-3 p-2 rounded-lg text-sm transition-colors duration-300 ${
                  location.pathname === service.href
                    ? 'bg-cyan-500/20 text-cyan-400'
                    : 'text-gray-400 hover:text-cyan-400 hover:bg-white/5'
                }`}
                onClick={() => setIsOpen(false)}
              >
                <service.icon className="w-4 h-4 flex-shrink-0" />
                <span className="truncate">{service.name}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  };

<<<<<<< HEAD
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(section)) {) => {
  return($3;)
  )}newExpanded.delete(section);}
    } else {newExpanded.add(section)}}}
    setExpandedSections(newExpanded);
  }
const navigationSections = [
    {title: 'Main',
      items: [,}{ name: 'Home', path: '/', icon: Home ,},
        {name: 'About', path: '/about', icon: Users ,},
        {name: 'Services', path: '/services', icon: Settings ,},
        {name: 'Contact', path: '/contact', icon: Phone ,},
        {name: 'Blog', path: '/blog', icon: BarChart ,},
        {name: 'Case Studies', path: '/case-studies', icon: BarChart ,},
      ]
    },
    {title: 'AI Services',
      key: 'ai-services',
      items: [,}{ name: 'AI Services Overview', path: '/ai-services', icon: Brain ,},
        {name: 'Business Intelligence', path: '/ai-services/business-intelligence', icon: BarChart ,},
        {name: 'Document Processing', path: '/ai-services/document-processing', icon: Settings ,},
        {name: 'Customer Experience', path: '/ai-services/customer-experience', icon: Users ,},
        {name: 'Marketing Automation', path: '/ai-services/marketing-automation', icon: Settings ,},
        {name: 'Predictive Maintenance', path: '/ai-services/predictive-maintenance', icon: Settings ,},
        {name: 'Supply Chain', path: '/ai-services/supply-chain', icon: Settings ,},
        {name: 'Fraud Detection', path: '/ai-services/fraud-detection', icon: Shield ,},
        {name: 'Content Generation', path: '/ai-services/content-generation', icon: Settings ,},
        {name: 'HR Analytics', path: '/ai-services/hr-analytics', icon: BarChart ,},
        {name: 'Process Automation', path: '/ai-services/process-automation', icon: Settings ,},
        {name: 'Quality Assurance', path: '/ai-services/quality-assurance', icon: Shield ,},
        {name: 'Energy Management', path: '/ai-services/energy-management', icon: Settings ,},
      ]
    },
    {title: 'Micro SaaS',
      key: 'micro-saas',
      items: [,}{ name: 'Micro SaaS Overview', path: '/micro-saas', icon: Settings ,},
        {name: 'Analytics Dashboard', path: '/micro-saas/analytics-dashboard', icon: BarChart ,},
        {name: 'Support Bot', path: '/micro-saas/support-bot', icon: Users ,},
        {name: 'Social Manager', path: '/micro-saas/social-manager', icon: Settings ,},
        {name: 'Email Marketing', path: '/micro-saas/email-marketing', icon: Mail ,},
        {name: 'Inventory Management', path: '/micro-saas/inventory-management', icon: Settings ,},
        {name: 'Lead Scoring', path: '/micro-saas/lead-scoring', icon: BarChart ,},
        {name: 'Document Processor', path: '/micro-saas/document-processor', icon: Settings ,},
        {name: 'SEO Optimizer', path: '/micro-saas/seo-optimizer', icon: Settings ,},
        {name: 'Appointment Scheduler', path: '/micro-saas/appointment-scheduler', icon: Clock ,},
        {name: 'Chat Analytics', path: '/micro-saas/chat-analytics', icon: BarChart ,},
        {name: 'Expense Tracker', path: '/micro-saas/expense-tracker', icon: BarChart ,},
        {name: 'Content Generator', path: '/micro-saas/content-generator', icon: Settings ,},
      ]
    },
    {title: 'IT Services',
      key: 'it-services',
      items: [,}{ name: 'IT Services Overview', path: '/it-services', icon: Code ,},
        {name: 'IT Consulting', path: '/it-consulting', icon: Users ,},
        {name: 'IT Infrastructure', path: '/it-infrastructure', icon: Settings ,},
        {name: 'IT Support', path: '/it-support', icon: Users ,},
        {name: 'Cloud Infrastructure', path: '/cloud-infrastructure', icon: Cloud ,},
        {name: 'Cloud Migration', path: '/cloud-migration', icon: Cloud ,},
        {name: 'Cybersecurity', path: '/cybersecurity', icon: Shield ,},
        {name: 'Database Management', path: '/database-management', icon: Settings ,},
        {name: 'Managed IT', path: '/managed-it', icon: Settings ,},
      ]
    },
    {title: 'Company',
      items: [,}{ name: 'Team', path: '/team', icon: Users ,},
        {name: 'Careers', path: '/careers', icon: Users ,},
        {name: 'Consultation', path: '/consultation', icon: Phone ,},
        {name: 'Pricing', path: '/pricing', icon: BarChart ,},
      ]
    },
    {title: 'Resources',
      items: [,}{ name: 'Documentation', path: '/docs', icon: Settings ,},
        {name: 'API Docs', path: '/api-docs', icon: Code ,},
        {name: 'Support', path: '/support', icon: Users ,},
        {name: 'Status', path: '/status', icon: Settings ,},
      ]
    }
  ]
const contactInfo = {phone: '(302) 464-0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown, DE 19709',
<<<<<<< HEAD
    hours: 'Mon-Fri 9AM-6PM EST',}}
return(<>)
      {/* Mobile Menu Button */} <button;
        onClick={() =>setIsOpen(true)</button>}className="lg: hidden fixed top-4 left-4 z-50 bg-slate-800/90 backdrop-blur-lg text-white p-3 rounded-lg border border-cyan-400/20 hover:bg-slate-700/90 transition-all",
=======
    hours: 'Mon-Fri 9AM-6PM EST'
  }
  }
return (
=======
  return (
>>>>>>> cursor/website-audit-and-update-with-deployment-c0e8
    <>
      {/* Mobile Menu Button */}
<<<<<<< HEAD
      <button;
        onClick={() =></button> setIsOpen(true)}

        className="lg: hidden fixed top-4 left-4 z-50 bg-slate-800/90 backdrop-blur-lg text-white p-3 rounded-lg border border-cyan-400/20 hover:bg-slate-700/90 transition-all"
>>>>>>> cursor/fix-errors-and-merge-to-main-e1a2
        aria-label="Open sidebar"
      >,
        <Menu></Menu>
      </button>

      {/* Sidebar Overlay */}{
    isOpen && (;
        <div;
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg: hidden",
  }
<<<<<<< HEAD
          onClick={() =>setIsOpen(false)</div>}/>
=======
          onClick={() =></div> setIsOpen(false)}
        />
>>>>>>> cursor/fix-errors-and-merge-to-main-e1a2
      )}
{/* Sidebar */}</div>
      <aside></aside>
        <div className="flex flex-col h-full"></di></div>
          {/* Header */}</div>
          <div className="flex items-center justify-between p-6 border-b border-slate-700/50"></di></div>
            <Link to="/" className="flex items-center space-x-3" onClick={() =></Link> setIsOpen(false)}>;
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg flex items-center justify-center"></di></div>
                <Brain /></Brain>
              <div /></div>
                <h2 className="text-xl font-bold text-white cyber-text"></h>Zion Tech Group</h2>
                <p className="text-xs text-cyan-400">AI & IT Solutions</p>
              </div>
            </Link>
            <button;
<<<<<<< HEAD
              onClick={() =>setIsOpen(false)</button>}className="lg: hidden text-gray-400 hover:text-white transition-colors",
              aria-label="Close sidebar"
            >,
              <X>
=======
              onClick={() =></button> setIsOpen(false)}
              className="lg: hidden text-gray-400 hover:text-white transition-colors"
              aria-label="Close sidebar"
            >,
              <X></X>

>>>>>>> cursor/fix-errors-and-merge-to-main-e1a2
            </button>
=======
      <button
        onClick={() => setIsOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-slate-900/80 backdrop-blur-md rounded-lg text-white hover:bg-slate-800 transition-colors"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Sidebar Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setIsOpen(false)} />
      )}

      {/* Sidebar */}
      <div className={`sidebar fixed top-0 left-0 h-full w-80 bg-slate-900/95 backdrop-blur-xl border-r border-cyan-500/20 z-50 transform transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0 lg:static lg:z-auto`}>
        <div className="flex flex-col h-full">
          {/* Header */}
<<<<<<< HEAD
          <div className="p-6 border-b border-cyan-500/20">
            <div className="flex items-center justify-between">
              <Link to="/" className="flex items-center space-x-3 group" onClick={() => setIsOpen(false)}>
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg shadow-cyan-500/25">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-white neon-text-enhanced group-hover:glow">Zion Tech</span>
                  <span className="text-xs text-cyan-400 font-medium tracking-wider">AI & IT SOLUTIONS</span>
                </div>
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
>>>>>>> cursor/website-audit-and-update-with-deployment-c0e8
          </div>

          {/* Navigation */}
          <div className="flex-1 overflow-y-auto p-6 space-y-2">
            {/* Main Pages */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-3">Main Pages</h3>
              <div className="space-y-1">
                {mainPages.map((page, index) => (
                  <Link
                    key={index}
                    to={page.href}
                    className={`flex items-center space-x-3 p-3 rounded-lg transition-colors duration-300 ${
                      location.pathname === page.href
                        ? 'bg-cyan-500/20 text-cyan-400'
                        : 'text-gray-300 hover:text-cyan-400 hover:bg-white/5'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <page.icon className="w-5 h-5 flex-shrink-0" />
                    <span className="font-medium">{page.name}</span>
                  </Link>
                ))}
              </div>
            </div>
=======
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
>>>>>>> cursor/website-audit-and-update-with-deployment-a217

            {/* AI Services */}
            {renderServiceSection('AI Services', aiServices, 'ai-services', Brain)}

            {/* IT Services */}
            {renderServiceSection('IT Services', itServices, 'it-services', Cloud)}

            {/* Micro SAAS */}
            {renderServiceSection('Micro SAAS', microSaasServices, 'micro-saas', Cpu)}

<<<<<<< HEAD
            {/* Emerging Technologies */}
            {renderServiceSection('Emerging Tech', emergingTech, 'emerging-tech', Zap)}
=======
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
>>>>>>> cursor/website-audit-and-update-with-deployment-a217
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-cyan-500/20">
            <div className="text-center">
              <p className="text-xs text-gray-400 mb-2">© 2024 Zion Tech Group</p>
              <div className="flex justify-center space-x-4">
                <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  <Phone className="w-4 h-4" />
                </a>
                <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

<<<<<<< HEAD
export default Sidebar;
=======
export default Sidebar;
>>>>>>> cursor/website-audit-and-update-with-deployment-a217
