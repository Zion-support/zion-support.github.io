<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import Link from 'next/link';

const Navigation: React.FC = () => {
  return (
    <nav className="bg-slate-900 text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            Zion Tech Group
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-emerald-400">Home</Link>
            <Link href="/about" className="hover:text-emerald-400">About</Link>
            <Link href="/services" className="hover:text-emerald-400">Services</Link>
            <Link href="/contact" className="hover:text-emerald-400">Contact</Link>
          </div>
        </div>
=======
'use client';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Brain, 
  Cloud, 
  Cpu, 
  Zap, 
  ArrowRight,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [aiServicesOpen, setAiServicesOpen] = useState(false);
  const [itServicesOpen, setItServicesOpen] = useState(false);
  const [microSaasOpen, setMicroSaasOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const closeAllMenus = () => {
    setIsOpen(false);
    setAiServicesOpen(false);
    setItServicesOpen(false);
    setMicroSaasOpen(false);
    setServicesOpen(false);
  };

  const aiServices = [
    { name: 'AI Analytics', href: '/ai-analytics', description: 'Advanced AI analytics solutions' },
    { name: 'AI Automation', href: '/ai-automation', description: 'Intelligent process automation' },
    { name: 'AI Customer Support', href: '/ai-customer-support', description: 'AI-powered customer service' },
    { name: 'AI Data Analytics', href: '/ai-data-analytics', description: 'Data insights and analytics' },
    { name: 'AI Content Generation', href: '/ai-content-generation', description: 'AI content creation tools' },
    { name: 'AI Healthcare', href: '/ai-healthcare', description: 'Medical AI solutions' },
    { name: 'AI Financial Services', href: '/ai-fintech', description: 'Financial AI applications' },
    { name: 'AI Cybersecurity', href: '/ai-cybersecurity', description: 'AI security solutions' }
  ];

  const itServices = [
    { name: 'Cloud Infrastructure', href: '/cloud-infrastructure', description: 'Scalable cloud solutions' },
    { name: 'DevOps & CI/CD', href: '/devops', description: 'Automated deployment pipelines' },
    { name: 'Cybersecurity', href: '/cybersecurity', description: 'Comprehensive security solutions' },
    { name: 'Data Analytics', href: '/data-analytics', description: 'Business intelligence and analytics' },
    { name: 'Mobile Development', href: '/mobile-development', description: 'Native and cross-platform apps' },
    { name: 'Web Development', href: '/web-development', description: 'Modern web applications' },
    { name: 'Database Management', href: '/database-management', description: 'Database design and optimization' },
    { name: 'IT Consulting', href: '/it-consulting', description: 'Strategic IT guidance' }
  ];

  const microSaasServices = [
    { name: 'AI Content Writer', href: '/micro-saas/ai-content-writer', description: 'AI-powered content creation' },
    { name: 'Analytics Dashboard', href: '/micro-saas/analytics-dashboard', description: 'Business analytics platform' },
    { name: 'Appointment Scheduler', href: '/micro-saas/appointment-scheduler', description: 'Smart scheduling system' },
    { name: 'Chat Analytics', href: '/micro-saas/chat-analytics', description: 'Conversation insights' },
    { name: 'Content Generator', href: '/micro-saas/content-generator', description: 'Automated content creation' },
    { name: 'Document Processor', href: '/micro-saas/document-processor', description: 'Document automation' },
    { name: 'Email Marketing', href: '/micro-saas/email-marketing', description: 'Email campaign management' },
    { name: 'Expense Tracker', href: '/micro-saas/expense-tracker', description: 'Financial tracking tool' }
  ];

  const companyLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/careers' },
    { name: 'Partners', href: '/partners' }
  ];

  const resourcesLinks = [
    { name: 'Pricing', href: '/pricing' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Documentation', href: '/docs' },
    { name: 'API Reference', href: '/api-docs' },
    { name: 'Tutorials', href: '/tutorials' },
    { name: 'Community', href: '/community' },
    { name: 'Demo', href: '/demo' },
    { name: 'Compliance', href: '/compliance' }
  ];

  const enterpriseLinks = [
    { name: 'Enterprise Solutions', href: '/enterprise' },
    { name: 'Digital Transformation', href: '/digital-transformation' },
    { name: 'Business Intelligence', href: '/business-intelligence' },
    { name: 'Edge Computing', href: '/edge-computing' },
    { name: 'Consultation', href: '/consultation' },
    { name: 'Custom Development', href: '/custom-software' }
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        closeAllMenus();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

=======
=======
>>>>>>> cursor/delete-records-bf70
=======
>>>>>>> cursor/delete-records-30ea
'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone, Mail, MapPin, Menu, X, Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Settings, Calendar, CheckSquare, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Server, Package, Mic, Workflow, Eye, Wifi, MessageSquare, CheckCircle, ShoppingCart } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [aiServicesOpen, setAiServicesOpen] = useState(false);
  const [itServicesOpen, setItServicesOpen] = useState(false);
  const [microSaasOpen, setMicroSaasOpen] = useState(false);

  // Handle scroll effect
>>>>>>> cursor/delete-records-fd55
  useEffect(() => {
<<<<<<< HEAD
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

<<<<<<< HEAD
=======
  const toggleMenu = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const toggleServices = useCallback(() => {
    setServicesOpen(!servicesOpen);
    setAiServicesOpen(false);
    setItServicesOpen(false);
    setMicroSaasOpen(false);
  }, [servicesOpen]);

  const toggleAiServices = useCallback(() => {
    setAiServicesOpen(!aiServicesOpen);
    setServicesOpen(false);
    setItServicesOpen(false);
    setMicroSaasOpen(false);
  }, [aiServicesOpen]);

  const toggleItServices = useCallback(() => {
    setItServicesOpen(!itServicesOpen);
    setServicesOpen(false);
    setAiServicesOpen(false);
    setMicroSaasOpen(false);
  }, [itServicesOpen]);

  const toggleMicroSaas = useCallback(() => {
    setMicroSaasOpen(!microSaasOpen);
    setServicesOpen(false);
    setAiServicesOpen(false);
    setItServicesOpen(false);
  }, [microSaasOpen]);

=======
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close all menus
>>>>>>> cursor/delete-records-bf70
  const closeAllMenus = useCallback(() => {
    setIsOpen(false);
    setAiServicesOpen(false);
    setItServicesOpen(false);
    setMicroSaasOpen(false);
  }, []);

  // Service data
  const aiServices = [
    { name: 'AI Analytics', href: '/ai-analytics', icon: BarChart, description: 'Advanced data insights' },
<<<<<<< HEAD
    { name: 'AI Automation', href: '/ai-automation', icon: Workflow, description: 'Process automation' },
    { name: 'AI Chatbot Builder', href: '/ai-chatbot-builder', icon: MessageCircle, description: 'Conversational AI' },
    { name: 'AI Cybersecurity', href: '/ai-cybersecurity', icon: Shield, description: 'AI security solutions' },
    { name: 'AI Customer Support', href: '/ai-customer-support', icon: MessageSquare, description: 'AI customer service' },
    { name: 'AI Data Analytics', href: '/ai-data-analytics', icon: TrendingUp, description: 'Business intelligence' },
    { name: 'AI Workflow Automation', href: '/ai-workflow-automation', icon: Settings, description: 'Workflow optimization' },
    { name: 'AI Content Generator', href: '/ai-content-generator', icon: FileText, description: 'Content creation' }
=======
    { name: 'AI Automation', href: '/ai-automation', icon: Zap, description: 'Streamline workflows' },
    { name: 'AI Chatbot', href: '/ai-chatbot-builder', icon: MessageCircle, description: 'Intelligent conversations' },
    { name: 'AI CRM', href: '/ai-crm', icon: Users, description: 'Customer relationship management' },
    { name: 'AI Cybersecurity', href: '/ai-cybersecurity', icon: Shield, description: 'Advanced threat protection' },
    { name: 'AI Data Analytics', href: '/ai-data-analytics', icon: Database, description: 'Data-driven insights' },
    { name: 'AI Healthcare', href: '/ai-healthcare', icon: Heart, description: 'Medical AI solutions' },
    { name: 'AI Financial Services', href: '/ai-financial-services', icon: DollarSign, description: 'Financial technology' },
    { name: 'AI Computer Vision', href: '/ai-computer-vision', icon: Eye, description: 'Image & video analysis' },
    { name: 'AI Voice Solutions', href: '/ai-voice-solutions', icon: Mic, description: 'Speech recognition' },
    { name: 'AI E-commerce', href: '/ai-ecommerce-solutions', icon: Globe, description: 'E-commerce optimization' },
    { name: 'AI HR Solutions', href: '/ai-hr-solutions', icon: Users, description: 'Human resources AI' },
    { name: 'AI Content Generation', href: '/ai-content-generation', icon: FileText, description: 'Automated content' },
    { name: 'AI Workflow Automation', href: '/ai-workflow-automation', icon: Workflow, description: 'Process optimization' },
    { name: 'AI Document Processing', href: '/ai-document-processing', icon: FileText, description: 'Document analysis' },
    { name: 'AI Predictive Analytics', href: '/ai-predictive-analytics', icon: BarChart, description: 'Business forecasting' },
    { name: 'AI Edge Computing', href: '/ai-edge-computing', icon: Cpu, description: 'Distributed AI processing' },
    { name: 'AI Video Analysis', href: '/ai-video-analysis', icon: Eye, description: 'Video content analysis' },
    { name: 'AI Speech Synthesis', href: '/ai-speech-synthesis', icon: Mic, description: 'Text-to-speech' },
    { name: 'AI Recommendation Engine', href: '/ai-recommendation-engine', icon: Target, description: 'Personalized recommendations' },
    { name: 'AI Sentiment Analysis', href: '/ai-sentiment-analysis', icon: Heart, description: 'Emotion detection' },
    { name: 'AI Enterprise Chatbot', href: '/ai-chatbot-enterprise', icon: MessageSquare, description: 'Enterprise-grade chatbots' },
    { name: 'AI Content Moderation', href: '/ai-content-moderation', icon: Shield, description: 'Automated content filtering' },
    { name: 'AI Predictive Modeling', href: '/ai-predictive-modeling', icon: BarChart, description: 'ML forecasting' },
    { name: 'AI Document Intelligence', href: '/ai-document-intelligence', icon: FileText, description: 'Smart document processing' },
    { name: 'AI Conversation Analytics', href: '/ai-conversation-analytics', icon: Users, description: 'Conversation insights' },
    { name: 'AI Supply Chain Intelligence', href: '/ai-supply-chain-ai', icon: Box, description: 'Supply chain optimization' },
    { name: 'AI Healthcare Diagnostics', href: '/ai-healthcare-diagnostics', icon: Heart, description: 'Medical diagnostics' },
    { name: 'AI Financial Forecasting', href: '/ai-financial-forecasting', icon: TrendingUp, description: 'Financial predictions' },
    { name: 'AI IoT Analytics', href: '/ai-iot-analytics', icon: Cpu, description: 'IoT data analysis' },
    { name: 'AI Conversational AI Platform', href: '/ai-conversational-ai', icon: MessageCircle, description: 'Advanced conversations' },
    { name: 'AI Automated Testing', href: '/ai-automated-testing', icon: CheckCircle, description: 'Intelligent testing' },
    { name: 'AI Knowledge Management', href: '/ai-knowledge-management', icon: FileText, description: 'Smart knowledge systems' },
    { name: 'AI Customer Churn Prediction', href: '/ai-customer-churn', icon: Users, description: 'Churn prevention' },
    { name: 'AI Automated Reporting', href: '/ai-automated-reporting', icon: BarChart, description: 'Smart reporting' },
    { name: 'AI Voice Assistant Platform', href: '/ai-voice-assistant', icon: Mic, description: 'Enterprise voice AI' },
    { name: 'AI Content Generation Pro', href: '/ai-content-generation-pro', icon: FileText, description: 'Advanced content creation' }
>>>>>>> cursor/delete-records-30ea
  ];

  const itServices = [
    { name: 'Cloud Infrastructure', href: '/cloud-infrastructure', icon: Cloud, description: 'Scalable cloud solutions' },
    { name: 'Cybersecurity Solutions', href: '/cybersecurity-solutions', icon: Lock, description: 'Security solutions' },
    { name: 'Web Development', href: '/web-development', icon: Globe, description: 'Modern web applications' },
<<<<<<< HEAD
    { name: 'Mobile Development', href: '/mobile-development', icon: Smartphone, description: 'iOS & Android apps' },
    { name: 'Cloud Migration', href: '/cloud-migration', icon: Server, description: 'Seamless cloud migration' },
    { name: 'Database Management', href: '/database-management', icon: Database, description: 'Database optimization' },
    { name: 'API Development', href: '/api-development', icon: LinkIcon, description: 'RESTful APIs' },
    { name: 'DevOps & CI/CD', href: '/devops', icon: Settings, description: 'Automation pipelines' }
=======
    { name: 'DevOps & CI/CD', href: '/devops-cicd', icon: Settings, description: 'Automated deployment' },
    { name: 'IT Support', href: '/it-support', icon: Monitor, description: '24/7 technical support' },
    { name: 'Data Analytics & BI', href: '/data-analytics-bi', icon: BarChart, description: 'Business intelligence' },
    { name: 'Custom Software', href: '/custom-software', icon: Code, description: 'Tailored solutions' },
    { name: 'Network Infrastructure', href: '/network-infrastructure', icon: Wifi, description: 'Network design & setup' },
    { name: 'IT Asset Management', href: '/it-asset-management', icon: Package, description: 'Asset lifecycle management' },
    { name: 'IT Security Services', href: '/it-security-services', icon: Lock, description: 'Security assessment & monitoring' },
    { name: 'IT Project Management', href: '/it-project-management', icon: Calendar, description: 'Professional project management' },
    { name: 'Cloud-Native Development', href: '/cloud-native-development', icon: Cloud, description: 'Microservices & containers' },
    { name: 'AI Integration Services', href: '/ai-integration-services', icon: Brain, description: 'AI model integration' },
    { name: 'Blockchain Development', href: '/blockchain-development', icon: LinkIcon, description: 'Smart contracts & DeFi' },
    { name: 'IoT Development', href: '/iot-development', icon: Wifi, description: 'Connected device solutions' },
    { name: 'E-commerce Development', href: '/e-commerce-development', icon: ShoppingCart, description: 'Online store platforms' },
    { name: 'Advanced API Development', href: '/api-development-advanced', icon: Code, description: 'Enterprise-grade APIs' },
    { name: 'Data Engineering', href: '/data-engineering', icon: Database, description: 'Data pipeline development' },
    { name: 'Advanced Cybersecurity', href: '/cybersecurity-advanced', icon: Shield, description: 'Threat hunting & response' },
    { name: 'Cloud Migration', href: '/cloud-migration-advanced', icon: Cloud, description: 'Zero-downtime migration' },
    { name: 'Advanced DevOps & SRE', href: '/devops-advanced', icon: Settings, description: 'Site reliability engineering' },
    { name: 'MLOps & AI Operations', href: '/machine-learning-ops', icon: Cpu, description: 'ML model deployment' },
    { name: 'Enterprise Integration', href: '/enterprise-integration', icon: LinkIcon, description: 'System integration' },
    { name: 'Performance Optimization', href: '/performance-optimization', icon: Zap, description: 'App & infrastructure optimization' },
    { name: 'Disaster Recovery', href: '/disaster-recovery-advanced', icon: Shield, description: 'Business continuity' },
    { name: 'Compliance Automation', href: '/compliance-automation', icon: CheckCircle, description: 'Regulatory compliance' },
    { name: 'Cloud Cost Optimization', href: '/cloud-cost-optimization', icon: TrendingUp, description: 'Cost reduction' },
    { name: 'Security Automation', href: '/security-automation', icon: Shield, description: 'Automated security' },
    { name: 'Data Visualization & BI', href: '/data-visualization', icon: BarChart, description: 'Advanced dashboards' },
    { name: 'Workflow Automation', href: '/workflow-automation', icon: Settings, description: 'Process automation' },
    { name: 'Cloud-Native Security', href: '/cloud-native-security', icon: Shield, description: 'Container security' }
>>>>>>> cursor/delete-records-30ea
  ];

  const microSaasServices = [
    { name: 'Zion Analytics Pro', href: '/zion-analytics-pro', icon: BarChart, description: 'Business intelligence' },
    { name: 'Zion Chat AI', href: '/zion-chat-ai', icon: MessageCircle, description: 'AI customer support' },
    { name: 'Zion Security Shield', href: '/zion-security-shield', icon: Shield, description: 'Cybersecurity monitoring' },
    { name: 'Zion Cloud Vault', href: '/zion-cloud-vault', icon: Cloud, description: 'Cloud backup & recovery' },
    { name: 'Zion Content Studio', href: '/zion-content-studio', icon: FileText, description: 'AI content creation' },
    { name: 'Zion CRM Intelligence', href: '/zion-crm-intelligence', icon: Users, description: 'AI-enhanced CRM' },
<<<<<<< HEAD
    { name: 'Zion Lead Magnet', href: '/zion-lead-magnet', icon: Target, description: 'Lead generation' },
    { name: 'Zion Project Master', href: '/zion-project-master', icon: CheckSquare, description: 'Project management' }
=======
    { name: 'Zion Data Sync', href: '/zion-data-sync', icon: Database, description: 'Data integration platform' },
    { name: 'Zion Lead Magnet', href: '/zion-lead-magnet', icon: Target, description: 'Lead generation platform' },
    { name: 'Zion Project Master', href: '/zion-project-master', icon: Calendar, description: 'Project management AI' },
    { name: 'Zion Email Automation', href: '/zion-email-automation', icon: Mail, description: 'Email marketing AI' },
    { name: 'Zion Inventory Smart', href: '/zion-inventory-smart', icon: Package, description: 'Inventory management' },
    { name: 'Zion Invoice Genius', href: '/zion-invoice-genius', icon: DollarSign, description: 'Invoice generation' },
    { name: 'Zion Workflow Automation', href: '/zion-workflow-automation', icon: Settings, description: 'Process automation' },
    { name: 'Zion Performance Monitor', href: '/zion-performance-monitor', icon: Monitor, description: 'Performance monitoring' },
    { name: 'Zion Compliance Manager', href: '/zion-compliance-manager', icon: CheckSquare, description: 'Compliance management' },
    { name: 'Zion Social Scheduler', href: '/zion-social-scheduler', icon: Globe, description: 'Social media management' },
    { name: 'Zion AI Video Editor', href: '/zion-ai-video-editor', icon: Eye, description: 'AI video editing' },
    { name: 'Zion AI Translator Pro', href: '/zion-ai-translator-pro', icon: Globe, description: 'Advanced translation' },
    { name: 'Zion AI Code Reviewer', href: '/zion-ai-code-reviewer', icon: Code, description: 'Intelligent code review' },
    { name: 'Zion Customer Insights Pro', href: '/zion-customer-insights', icon: Users, description: 'Customer analytics' },
    { name: 'Zion AI Email Assistant', href: '/zion-ai-email-assistant', icon: Mail, description: 'Smart email management' },
    { name: 'Zion AI Meeting Assistant', href: '/zion-ai-meeting-assistant', icon: Calendar, description: 'Meeting automation' },
    { name: 'Zion AI SEO Optimizer', href: '/zion-ai-seo-optimizer', icon: Target, description: 'SEO optimization' },
    { name: 'Zion AI Data Cleaner', href: '/zion-ai-data-cleaner', icon: Database, description: 'Data cleaning & validation' },
    { name: 'Zion AI Contract Analyzer', href: '/zion-ai-contract-analyzer', icon: FileText, description: 'Contract analysis' },
    { name: 'Zion AI Survey Builder', href: '/zion-ai-survey-builder', icon: CheckSquare, description: 'Intelligent surveys' },
    { name: 'Zion AI Accounting Assistant', href: '/zion-ai-accounting-assistant', icon: DollarSign, description: 'AI accounting' },
    { name: 'Zion AI Recruitment Pro', href: '/zion-ai-recruitment-pro', icon: Users, description: 'AI recruitment' },
    { name: 'Zion AI Content Moderation', href: '/zion-ai-content-moderation', icon: Shield, description: 'Content moderation' },
    { name: 'Zion AI Predictive Maintenance', href: '/zion-ai-predictive-maintenance', icon: Settings, description: 'Equipment maintenance' },
    { name: 'Zion AI Energy Manager', href: '/zion-ai-energy-manager', icon: Zap, description: 'Energy optimization' },
    { name: 'Zion AI Supply Chain Optimizer', href: '/zion-ai-supply-chain-optimizer', icon: Box, description: 'Supply chain AI' },
    { name: 'Zion AI Fraud Detector', href: '/zion-ai-fraud-detector', icon: Shield, description: 'Fraud detection' },
    { name: 'Zion AI Customer Service Pro', href: '/zion-ai-customer-service-pro', icon: MessageSquare, description: 'Advanced customer service' },
    { name: 'Zion AI Marketing Automation', href: '/zion-ai-marketing-automation', icon: Target, description: 'Marketing AI' },
    { name: 'Zion AI Document AI', href: '/zion-ai-document-ai', icon: FileText, description: 'Document processing' }
>>>>>>> cursor/delete-records-30ea
  ];

<<<<<<< HEAD
  const emergingTech = [
    { name: '5G Implementation', href: '/5g-implementation', icon: Zap, description: 'Next-gen connectivity' },
    { name: 'AI 3D Generation', href: '/ai-3d-generation', icon: Box, description: '3D content creation' },
    { name: 'AI Holographic Workspace', href: '/ai-holographic-workspace', icon: Monitor, description: 'Immersive work environments' },
    { name: 'AI Autonomous Systems', href: '/ai-autonomous-systems', icon: Cpu, description: 'Self-operating systems' },
    { name: 'AI Blockchain Solutions', href: '/ai-blockchain-solutions', icon: LinkIcon, description: 'Decentralized AI' },
    { name: 'AI Edge Computing', href: '/ai-edge-computing', icon: Server, description: 'Distributed processing' },
    { name: 'Quantum Computing', href: '/quantum-computing', icon: Cpu, description: 'Quantum processing power' },
    { name: 'AR/VR Solutions', href: '/ar-vr-solutions', icon: Monitor, description: 'Immersive experiences' },
    { name: 'IoT Integration', href: '/iot-integration', icon: Wifi, description: 'Internet of Things' },
    { name: 'Machine Learning', href: '/machine-learning', icon: Brain, description: 'Advanced ML algorithms' }
<<<<<<< HEAD
  ]
>>>>>>> cursor/delete-records-fd55
=======
>>>>>>> cursor/delete-records-bf70
=======
  ];

>>>>>>> cursor/delete-records-30ea
  return (
    <nav className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white relative z-50 border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<<<<<<< HEAD
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg shadow-cyan-500/25">
                <Brain className="w-6 h-6 text-white" />
              </div>
<<<<<<< HEAD
              <span className="text-xl font-bold neon-text-enhanced group-hover:glow">Zion Tech Group</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-200 py-2"
                onMouseEnter={() => setAiServicesOpen(true)}
                onMouseLeave={() => setAiServicesOpen(false)}
              >
                <span>AI Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {aiServicesOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-80 bg-slate-800 rounded-lg shadow-xl border border-cyan-500/20 py-4 z-50"
                  onMouseEnter={() => setAiServicesOpen(true)}
                  onMouseLeave={() => setAiServicesOpen(false)}
                >
                  <div className="px-4 py-2 border-b border-gray-700 mb-2">
                    <h3 className="text-sm font-semibold text-cyan-400">AI Services</h3>
                  </div>
                  <div className="grid grid-cols-1 gap-1">
                    {aiServices.map((service, index) => (
                      <Link
                        key={index}
                        to={service.href}
                        className="flex items-start space-x-3 px-4 py-2 hover:bg-slate-700 transition-colors duration-200"
                      >
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <div className="text-sm font-medium text-white">{service.name}</div>
                          <div className="text-xs text-gray-400">{service.description}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-200 py-2"
                onMouseEnter={() => setItServicesOpen(true)}
                onMouseLeave={() => setItServicesOpen(false)}
              >
                <span>IT Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {itServicesOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-80 bg-slate-800 rounded-lg shadow-xl border border-cyan-500/20 py-4 z-50"
                  onMouseEnter={() => setItServicesOpen(true)}
                  onMouseLeave={() => setItServicesOpen(false)}
                >
                  <div className="px-4 py-2 border-b border-gray-700 mb-2">
                    <h3 className="text-sm font-semibold text-cyan-400">IT Services</h3>
                  </div>
                  <div className="grid grid-cols-1 gap-1">
                    {itServices.map((service, index) => (
                      <Link
                        key={index}
                        to={service.href}
                        className="flex items-start space-x-3 px-4 py-2 hover:bg-slate-700 transition-colors duration-200"
                      >
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <div className="text-sm font-medium text-white">{service.name}</div>
                          <div className="text-xs text-gray-400">{service.description}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-200 py-2"
                onMouseEnter={() => setMicroSaasOpen(true)}
                onMouseLeave={() => setMicroSaasOpen(false)}
              >
                <span>Micro SAAS</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {microSaasOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-80 bg-slate-800 rounded-lg shadow-xl border border-cyan-500/20 py-4 z-50"
                  onMouseEnter={() => setMicroSaasOpen(true)}
                  onMouseLeave={() => setMicroSaasOpen(false)}
                >
                  <div className="px-4 py-2 border-b border-gray-700 mb-2">
                    <h3 className="text-sm font-semibold text-cyan-400">Micro SAAS</h3>
                  </div>
                  <div className="grid grid-cols-1 gap-1">
                    {microSaasServices.map((service, index) => (
                      <Link
                        key={index}
                        to={service.href}
                        className="flex items-start space-x-3 px-4 py-2 hover:bg-slate-700 transition-colors duration-200"
                      >
                        <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <div className="text-sm font-medium text-white">{service.name}</div>
                          <div className="text-xs text-gray-400">{service.description}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link to="/about" className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 py-2">
              About
            </Link>
            <Link to="/blog" className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 py-2">
              Blog
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 py-2">
=======
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white neon-text-enhanced group-hover:glow">Zion Tech Group</span>
                <span className="text-xs text-cyan-400 font-medium tracking-wider">AI & IT SOLUTIONS</span>
              </div>
            </Link>
          </div>

<<<<<<< HEAD
=======
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg shadow-cyan-500/25">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white neon-text-enhanced group-hover:glow">Zion Tech Group</span>
              <span className="text-xs text-cyan-400 font-medium tracking-wider">AI & IT SOLUTIONS</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
>>>>>>> cursor/delete-records-bf70
=======
>>>>>>> cursor/delete-records-30ea
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Home
            </Link>
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
            <Link to="/about" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              About
            </Link>
>>>>>>> cursor/delete-records-30ea
            
            {/* AI Services Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
                onMouseEnter={() => setAiServicesOpen(true)}
                onMouseLeave={() => setAiServicesOpen(false)}
              >
                <span>AI Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {aiServicesOpen && (
<<<<<<< HEAD
                <div className="absolute top-full left-0 mt-2 w-80 bg-slate-900/95 backdrop-blur-md rounded-xl shadow-2xl border border-cyan-500/20 p-6 z-50"
                     onMouseEnter={() => setAiServicesOpen(true)}
                     onMouseLeave={() => setAiServicesOpen(false)}>
                  <div className="grid grid-cols-2 gap-4">
                    {aiServices.map((service, index) => (
                      <Link
                        key={index}
                        to={service.href}
                        className="group flex items-start space-x-3 p-3 rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
=======
                <div className="absolute top-full left-0 mt-2 w-96 bg-slate-800/95 backdrop-blur-md rounded-lg shadow-xl border border-cyan-500/20 p-4 cyber-card">
                  <div className="grid grid-cols-1 gap-2">
                    {aiServices.slice(0, 12).map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-cyan-500/10 transition-colors duration-300 group"
                        onClick={closeAllMenus}
>>>>>>> cursor/delete-records-30ea
                      >
                        <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                          <service.icon className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <div className="text-white font-medium text-sm group-hover:text-cyan-400 transition-colors">
                            {service.name}
                          </div>
                          <div className="text-gray-400 text-xs">
                            {service.description}
                          </div>
                        </div>
                      </Link>
                    ))}
                    <Link
                      to="/ai-services"
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-cyan-500/10 transition-colors duration-300 group text-cyan-400 font-medium"
                      onClick={closeAllMenus}
                    >
                      <div className="w-2 h-2 bg-cyan-400 rounded-full group-hover:scale-125 transition-transform" />
                      <div>View All AI Services</div>
                      <ArrowRight className="w-4 h-4 text-cyan-400 ml-auto" />
                    </Link>
                  </div>
                  <div className="mt-4 pt-4 border-t border-cyan-500/20">
                    <Link
                      to="/ai-services"
                      className="flex items-center justify-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium text-sm"
                    >
                      <span>View All AI Services</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* IT Services Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
                onMouseEnter={() => setItServicesOpen(true)}
                onMouseLeave={() => setItServicesOpen(false)}
              >
                <span>IT Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {itServicesOpen && (
<<<<<<< HEAD
                <div className="absolute top-full left-0 mt-2 w-80 bg-slate-900/95 backdrop-blur-md rounded-xl shadow-2xl border border-cyan-500/20 p-6 z-50"
                     onMouseEnter={() => setItServicesOpen(true)}
                     onMouseLeave={() => setItServicesOpen(false)}>
                  <div className="grid grid-cols-2 gap-4">
                    {itServices.map((service, index) => (
                      <Link
                        key={index}
                        to={service.href}
                        className="group flex items-start space-x-3 p-3 rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
=======
                <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-md rounded-lg shadow-xl border border-cyan-500/20 p-4 cyber-card">
                  <div className="grid grid-cols-1 gap-2">
                    {itServices.slice(0, 12).map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-cyan-500/10 transition-colors duration-300 group"
                        onClick={closeAllMenus}
>>>>>>> cursor/delete-records-30ea
                      >
                        <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                          <service.icon className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <div className="text-white font-medium text-sm group-hover:text-cyan-400 transition-colors">
                            {service.name}
                          </div>
                          <div className="text-gray-400 text-xs">
                            {service.description}
                          </div>
                        </div>
                      </Link>
                    ))}
                    <Link
                      to="/it-services"
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-cyan-500/10 transition-colors duration-300 group text-cyan-400 font-medium"
                      onClick={closeAllMenus}
                    >
                      <div className="w-2 h-2 bg-cyan-400 rounded-full group-hover:scale-125 transition-transform" />
                      <div>View All IT Services</div>
                      <ArrowRight className="w-4 h-4 text-cyan-400 ml-auto" />
                    </Link>
                  </div>
                  <div className="mt-4 pt-4 border-t border-cyan-500/20">
                    <Link
                      to="/it-services"
                      className="flex items-center justify-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium text-sm"
                    >
                      <span>View All IT Services</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

<<<<<<< HEAD
>>>>>>> cursor/delete-records-bf70
            <Link to="/about" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              About
            </Link>
            <Link to="/services" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Services
            </Link>
=======
            {/* Micro SAAS Dropdown */}
            <div className="relative group">
              <button
                onClick={() => setMicroSaasOpen(!microSaasOpen)}
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
              >
                <Code className="w-4 h-4" />
                <span>Micro SAAS</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${microSaasOpen ? 'rotate-180' : ''}`} />
              </button>
              {microSaasOpen && (
                <div className="absolute top-full left-0 mt-2 w-96 bg-slate-800/95 backdrop-blur-md rounded-lg shadow-xl border border-cyan-500/20 p-4 cyber-card">
                  <div className="grid grid-cols-1 gap-2">
                    {microSaasServices.slice(0, 12).map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-cyan-500/10 transition-colors duration-300 group"
                        onClick={closeAllMenus}
                      >
                        <div className="w-2 h-2 bg-cyan-400 rounded-full group-hover:scale-125 transition-transform" />
                        <div>
                          <div className="text-white font-medium">{service.name}</div>
                          <div className="text-xs text-gray-400">{service.description}</div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 ml-auto" />
                      </Link>
                    ))}
                    <Link
                      to="/micro-saas"
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-cyan-500/10 transition-colors duration-300 group text-cyan-400 font-medium"
                      onClick={closeAllMenus}
                    >
                      <div className="w-2 h-2 bg-cyan-400 rounded-full group-hover:scale-125 transition-transform" />
                      <div>View All Micro SAAS</div>
                      <ArrowRight className="w-4 h-4 text-cyan-400 ml-auto" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

>>>>>>> cursor/delete-records-30ea
            <Link to="/pricing" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Pricing
            </Link>
            <Link to="/case-studies" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Case Studies
            </Link>
            <Link to="/blog" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Blog
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/delete-records-fd55
=======
>>>>>>> cursor/delete-records-bf70
=======
>>>>>>> cursor/delete-records-30ea
              Contact
            </Link>
          </div>

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
          {/* CTA Button */}
          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            <Link
              to="/consultation"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25"
=======
=======
>>>>>>> cursor/delete-records-30ea
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+13024640950"
              className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium"
>>>>>>> cursor/delete-records-fd55
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
=======
          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+13024640950"
              className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm"
            >
              <Phone className="w-4 h-4" />
              <span>+1 302 464 0950</span>
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm"
            >
              <Mail className="w-4 h-4" />
              <span>Email</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-300 hover:text-cyan-400 transition-colors duration-300"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
>>>>>>> cursor/delete-records-bf70
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
<<<<<<< HEAD
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-800 rounded-lg mt-2 border border-cyan-500/20">
              <div className="space-y-2">
                <div className="px-3 py-2 text-sm font-semibold text-cyan-400 border-b border-gray-700">
                  AI Services
                </div>
                {aiServices.slice(0, 4).map((service, index) => (
                  <Link
                    key={index}
                    to={service.href}
                    className="block px-3 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-slate-700 rounded transition-colors duration-200"
                    onClick={closeAllMenus}
                  >
                    {service.name}
                  </Link>
                ))}
                <Link
                  to="/ai-services"
                  className="block px-3 py-2 text-sm text-cyan-400 hover:text-cyan-300 font-medium"
                  onClick={closeAllMenus}
                >
                  View All AI Services →
                </Link>
              </div>

              <div className="space-y-2">
                <div className="px-3 py-2 text-sm font-semibold text-cyan-400 border-b border-gray-700">
                  IT Services
                </div>
                {itServices.slice(0, 4).map((service, index) => (
                  <Link
                    key={index}
                    to={service.href}
                    className="block px-3 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-slate-700 rounded transition-colors duration-200"
                    onClick={closeAllMenus}
                  >
                    {service.name}
                  </Link>
                ))}
                <Link
                  to="/it-services"
                  className="block px-3 py-2 text-sm text-cyan-400 hover:text-cyan-300 font-medium"
                  onClick={closeAllMenus}
                >
                  View All IT Services →
                </Link>
              </div>

              <div className="space-y-2">
                <div className="px-3 py-2 text-sm font-semibold text-cyan-400 border-b border-gray-700">
                  Micro SAAS
                </div>
                {microSaasServices.slice(0, 4).map((service, index) => (
                  <Link
                    key={index}
                    to={service.href}
                    className="block px-3 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-slate-700 rounded transition-colors duration-200"
                    onClick={closeAllMenus}
                  >
                    {service.name}
                  </Link>
                ))}
                <Link
                  to="/micro-saas"
                  className="block px-3 py-2 text-sm text-cyan-400 hover:text-cyan-300 font-medium"
                  onClick={closeAllMenus}
                >
                  View All Micro SAAS →
                </Link>
              </div>

              <div className="space-y-1">
                <Link
                  to="/about"
                  className="block px-3 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-slate-700 rounded transition-colors duration-200"
                  onClick={closeAllMenus}
                >
                  About
                </Link>
                <Link
                  to="/blog"
                  className="block px-3 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-slate-700 rounded transition-colors duration-200"
                  onClick={closeAllMenus}
                >
                  Blog
                </Link>
                <Link
                  to="/contact"
                  className="block px-3 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-slate-700 rounded transition-colors duration-200"
                  onClick={closeAllMenus}
                >
                  Contact
                </Link>
              </div>

              <div className="pt-4 border-t border-gray-700">
                <Link
                  to="/consultation"
                  className="block w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-4 py-3 rounded-lg font-medium text-center transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25"
                  onClick={closeAllMenus}
                >
                  Get Started
                </Link>
              </div>
=======
          <div className="lg:hidden mt-4 pb-4 border-t border-cyan-500/20">
            <div className="pt-4 space-y-4">
              <Link to="/" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={closeAllMenus}>
                Home
              </Link>
              <Link to="/ai-services" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={closeAllMenus}>
                AI Services
              </Link>
              <Link to="/it-services" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={closeAllMenus}>
                IT Services
              </Link>
              <Link to="/about" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={closeAllMenus}>
                About
              </Link>
              <Link to="/services" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={closeAllMenus}>
                Services
              </Link>
              <Link to="/pricing" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={closeAllMenus}>
                Pricing
              </Link>
              <Link to="/case-studies" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={closeAllMenus}>
                Case Studies
              </Link>
              <Link to="/blog" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={closeAllMenus}>
                Blog
              </Link>
              <Link to="/contact" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={closeAllMenus}>
                Contact
              </Link>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/delete-records-fd55
=======
>>>>>>> cursor/delete-records-bf70
=======
>>>>>>> cursor/delete-records-30ea
            </div>
          </div>
        )}
>>>>>>> cursor/delete-records-acd8
      </div>
    </nav>
  );
};

<<<<<<< HEAD
export default Navigation;
<<<<<<< HEAD
<<<<<<< HEAD
=======
export default Navigation;
>>>>>>> cursor/delete-records-acd8
=======
>>>>>>> cursor/delete-records-fd55
=======
>>>>>>> cursor/delete-records-bf70
=======
export default Navigation;
>>>>>>> cursor/delete-records-30ea
