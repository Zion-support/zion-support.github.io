'use client';
<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
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

  const emergingTech = [
    { name: 'Blockchain Solutions', href: '/blockchain', description: 'Decentralized applications' },
    { name: 'IoT Platform', href: '/iot', description: 'Internet of Things solutions' },
    { name: 'Quantum Computing', href: '/quantum-computing', description: 'Quantum algorithms and solutions' },
    { name: 'AR/VR Development', href: '/ar-vr-platform', description: 'Immersive experiences' },
    { name: 'Robotics Integration', href: '/robotics', description: 'Automated systems' },
    { name: 'Edge Computing', href: '/edge-computing', description: 'Distributed computing solutions' }
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

  return (
    <nav className="bg-slate-900/95 backdrop-blur-md border-b border-cyan-500/20 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 text-cyan-400 font-bold text-xl">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span>Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
<<<<<<< HEAD
=======
import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone, Mail, MapPin, Menu, X, Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Settings, Calendar, CheckSquare, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Server, Package, Mic, Workflow, Eye, Wifi, MessageSquare, CheckCircle, ShoppingCart } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aiServicesOpen, setAiServicesOpen] = useState(false);
  const [itServicesOpen, setItServicesOpen] = useState(false);
  const [microSaasOpen, setMicroSaasOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && !(event.target as Element).closest('.mobile-menu')) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

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

  const closeAllMenus = useCallback(() => {
    setIsOpen(false);
    setServicesOpen(false);
    setAiServicesOpen(false);
    setItServicesOpen(false);
    setMicroSaasOpen(false);
  }, []);

<<<<<<< HEAD
=======
  // Service data
  const aiServices = [
    { name: 'AI Analytics', href: '/ai-analytics', icon: BarChart, description: 'Advanced data insights' },
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
  ]

  const itServices = [
    { name: 'Cloud Infrastructure', href: '/cloud-infrastructure', icon: Cloud, description: 'Scalable cloud solutions' },
    { name: 'API Development', href: '/api-development', icon: Code, description: 'API development & management' },
    { name: 'Cybersecurity', href: '/cybersecurity-solutions', icon: Shield, description: 'Comprehensive security' },
    { name: 'Database Management', href: '/database-management', icon: Database, description: 'Data processing & storage' },
    { name: 'Mobile Development', href: '/mobile-development', icon: Smartphone, description: 'iOS & Android apps' },
    { name: 'Web Development', href: '/web-development', icon: Globe, description: 'Modern web applications' },
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
    { name: 'Blockchain Development', href: '/blockchain-development', icon: Link, description: 'Smart contracts & DeFi' },
    { name: 'IoT Development', href: '/iot-development', icon: Wifi, description: 'Connected device solutions' },
    { name: 'E-commerce Development', href: '/e-commerce-development', icon: ShoppingCart, description: 'Online store platforms' },
    { name: 'Advanced API Development', href: '/api-development-advanced', icon: Code, description: 'Enterprise-grade APIs' },
    { name: 'Data Engineering', href: '/data-engineering', icon: Database, description: 'Data pipeline development' },
    { name: 'Advanced Cybersecurity', href: '/cybersecurity-advanced', icon: Shield, description: 'Threat hunting & response' },
    { name: 'Cloud Migration', href: '/cloud-migration-advanced', icon: Cloud, description: 'Zero-downtime migration' },
    { name: 'Advanced DevOps & SRE', href: '/devops-advanced', icon: Settings, description: 'Site reliability engineering' },
    { name: 'MLOps & AI Operations', href: '/machine-learning-ops', icon: Cpu, description: 'ML model deployment' },
    { name: 'Enterprise Integration', href: '/enterprise-integration', icon: Link, description: 'System integration' },
    { name: 'Performance Optimization', href: '/performance-optimization', icon: Zap, description: 'App & infrastructure optimization' },
    { name: 'Disaster Recovery', href: '/disaster-recovery-advanced', icon: Shield, description: 'Business continuity' },
    { name: 'Compliance Automation', href: '/compliance-automation', icon: CheckCircle, description: 'Regulatory compliance' },
    { name: 'Cloud Cost Optimization', href: '/cloud-cost-optimization', icon: TrendingUp, description: 'Cost reduction' },
    { name: 'Security Automation', href: '/security-automation', icon: Shield, description: 'Automated security' },
    { name: 'Data Visualization & BI', href: '/data-visualization', icon: BarChart, description: 'Advanced dashboards' },
    { name: 'Workflow Automation', href: '/workflow-automation', icon: Settings, description: 'Process automation' },
    { name: 'Cloud-Native Security', href: '/cloud-native-security', icon: Shield, description: 'Container security' }
  ]

  const microSaasServices = [
    { name: 'Zion Analytics Pro', href: '/zion-analytics-pro', icon: BarChart, description: 'Business intelligence platform' },
    { name: 'Zion Chat AI', href: '/zion-chat-ai', icon: MessageCircle, description: 'AI customer support' },
    { name: 'Zion Security Shield', href: '/zion-security-shield', icon: Shield, description: 'Cybersecurity monitoring' },
    { name: 'Zion Cloud Vault', href: '/zion-cloud-vault', icon: Cloud, description: 'Cloud backup & recovery' },
    { name: 'Zion Content Studio', href: '/zion-content-studio', icon: FileText, description: 'AI content creation' },
    { name: 'Zion CRM Intelligence', href: '/zion-crm-intelligence', icon: Users, description: 'AI-enhanced CRM' },
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
  ]

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
  ]

>>>>>>> origin/main
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-2xl border-b border-cyan-500/20' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg shadow-cyan-500/25">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white neon-text-enhanced group-hover:glow">Zion Tech Group</span>
                <span className="text-xs text-cyan-400 font-medium tracking-wider">AI & IT SOLUTIONS</span>
=======
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Home
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              About
            </Link>
            <div className="relative group">
              <button className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium flex items-center">
                Services
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-md rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-2">
                  <Link href="/services" className="block px-4 py-2 text-gray-300 hover:text-cyan-400 hover:bg-white/10 transition-colors duration-200">
                    All Services
                  </Link>
                  <div className="border-t border-gray-700 my-2"></div>
                  <div className="px-4 py-2 text-cyan-400 text-sm font-semibold">AI Services</div>
                  <Link href="/ai-services" className="block px-4 py-2 text-gray-300 hover:text-cyan-400 hover:bg-white/10 transition-colors duration-200">
                    AI Services Overview
                  </Link>
                  <Link href="/ai-customer-support" className="block px-4 py-2 text-gray-300 hover:text-cyan-400 hover:bg-white/10 transition-colors duration-200">
                    AI Customer Support
                  </Link>
                  <Link href="/ai-data-analytics" className="block px-4 py-2 text-gray-300 hover:text-cyan-400 hover:bg-white/10 transition-colors duration-200">
                    AI Data Analytics
                  </Link>
                  <Link href="/ai-workflow-automation" className="block px-4 py-2 text-gray-300 hover:text-cyan-400 hover:bg-white/10 transition-colors duration-200">
                    AI Workflow Automation
                  </Link>
                  <Link href="/ai-content-generator" className="block px-4 py-2 text-gray-300 hover:text-cyan-400 hover:bg-white/10 transition-colors duration-200">
                    AI Content Generator
                  </Link>
                  <div className="border-t border-gray-700 my-2"></div>
                  <div className="px-4 py-2 text-cyan-400 text-sm font-semibold">IT Services</div>
                  <Link href="/it-services" className="block px-4 py-2 text-gray-300 hover:text-cyan-400 hover:bg-white/10 transition-colors duration-200">
                    IT Services Overview
                  </Link>
                  <Link href="/cloud-migration" className="block px-4 py-2 text-gray-300 hover:text-cyan-400 hover:bg-white/10 transition-colors duration-200">
                    Cloud Migration
                  </Link>
                  <Link href="/cybersecurity" className="block px-4 py-2 text-gray-300 hover:text-cyan-400 hover:bg-white/10 transition-colors duration-200">
                    Cybersecurity
                  </Link>
                  <Link href="/data-analytics" className="block px-4 py-2 text-gray-300 hover:text-cyan-400 hover:bg-white/10 transition-colors duration-200">
                    Data Analytics
                  </Link>
                </div>
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-a9d9
              </div>
            </Link>
          </div>

>>>>>>> origin/main
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Home
            </Link>
<<<<<<< HEAD
            
            {/* AI Services Dropdown */}
            <div className="relative group">
              <button
                onClick={() => setAiServicesOpen(!aiServicesOpen)}
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
              >
                <Brain className="w-4 h-4" />
                <span>AI Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${aiServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {aiServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-96 bg-slate-800/95 backdrop-blur-md rounded-lg shadow-xl border border-cyan-500/20 p-4 cyber-card">
                  <div className="grid grid-cols-1 gap-2">
                    {aiServices.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
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
                  </div>
                </div>
              )}
            </div>

            {/* IT Services Dropdown */}
            <div className="relative group">
              <button
                onClick={() => setItServicesOpen(!itServicesOpen)}
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
              >
                <Cloud className="w-4 h-4" />
                <span>IT Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${itServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {itServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-md rounded-lg shadow-xl border border-cyan-500/20 p-4 cyber-card">
                  <div className="grid grid-cols-1 gap-2">
                    {itServices.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
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
                  </div>
                </div>
              )}
            </div>

            {/* Micro SAAS Dropdown */}
            <div className="relative group">
              <button
                onClick={() => setMicroSaasOpen(!microSaasOpen)}
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
              >
                <Cpu className="w-4 h-4" />
                <span>Micro SAAS</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${microSaasOpen ? 'rotate-180' : ''}`} />
              </button>
              {microSaasOpen && (
                <div className="absolute top-full left-0 mt-2 w-96 bg-slate-800/95 backdrop-blur-md rounded-lg shadow-xl border border-cyan-500/20 p-4 cyber-card">
                  <div className="grid grid-cols-1 gap-2">
                    {microSaasServices.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
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
                  </div>
                </div>
              )}
            </div>

            {/* Emerging Technologies Dropdown */}
            <div className="relative group">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
              >
                <Zap className="w-4 h-4" />
                <span>Emerging Tech</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-md rounded-lg shadow-xl border border-cyan-500/20 p-4 cyber-card">
                  <div className="grid grid-cols-1 gap-2">
                    {emergingTech.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
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
                  </div>
                </div>
              )}
            </div>

            <Link href="/about" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
=======
            <Link to="/about" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
>>>>>>> origin/main
              About
            </Link>
            <Link to="/services" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Services
            </Link>
            <Link to="/pricing" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Pricing
            </Link>
<<<<<<< HEAD
            <Link href="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
=======
            <Link to="/case-studies" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Case Studies
            </Link>
            <Link to="/blog" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Blog
            </Link>
            <Link to="/tutorials" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Tutorials
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
>>>>>>> origin/main
              Contact
            </Link>
          </div>

<<<<<<< HEAD
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-300 hover:text-cyan-400 transition-colors duration-300"
            aria-label="Toggle mobile menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-cyan-500/20">
            <div className="pt-4 space-y-4">
              <Link href="/" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
                Home
              </Link>
              
              {/* Mobile AI Services */}
              <div>
                <button
                  onClick={() => setAiServicesOpen(!aiServicesOpen)}
                  className="flex items-center justify-between w-full text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
                >
                  <span className="flex items-center space-x-2">
                    <Brain className="w-4 h-4" />
                    <span>AI Services</span>
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${aiServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {aiServicesOpen && (
                  <div className="mt-2 ml-4 space-y-2">
                    {aiServices.slice(0, 8).map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="block text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                        onClick={closeAllMenus}
                      >
                        {service.name}
                      </Link>
                    ))}
                    <Link
                      href="/ai-services"
                      className="block text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium"
                      onClick={closeAllMenus}
                    >
                      View All AI Services →
                    </Link>
                  </div>
                )}
              </div>

              {/* Mobile IT Services */}
              <div>
                <button
                  onClick={() => setItServicesOpen(!itServicesOpen)}
                  className="flex items-center justify-between w-full text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
                >
                  <span className="flex items-center space-x-2">
                    <Cloud className="w-4 h-4" />
                    <span>IT Services</span>
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${itServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {itServicesOpen && (
                  <div className="mt-2 ml-4 space-y-2">
                    {itServices.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="block text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                        onClick={closeAllMenus}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Micro SAAS */}
              <div>
                <button
                  onClick={() => setMicroSaasOpen(!microSaasOpen)}
                  className="flex items-center justify-between w-full text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
                >
                  <span className="flex items-center space-x-2">
                    <Cpu className="w-4 h-4" />
                    <span>Micro SAAS</span>
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${microSaasOpen ? 'rotate-180' : ''}`} />
                </button>
                {microSaasOpen && (
                  <div className="mt-2 ml-4 space-y-2">
                    {microSaasServices.slice(0, 8).map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="block text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                        onClick={closeAllMenus}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link href="/about" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
                About
              </Link>
              <Link href="/services" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
                Services
              </Link>
              <Link href="/pricing" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
                Pricing
              </Link>
              <Link href="/contact" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
                Contact
              </Link>

              {/* Contact Info */}
              <div className="pt-4 border-t border-cyan-500/20 space-y-3">
                <a href="tel:+15551234567" className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors">
                  <Phone className="w-4 h-4" />
                  <span>+1 (555) 123-4567</span>
                </a>
                <a href="mailto:kleber@ziontechgroup.com" className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors">
                  <Mail className="w-4 h-4" />
                  <span>kleber@ziontechgroup.com</span>
                </a>
                <div className="flex items-center space-x-2 text-gray-400">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
              </div>
=======
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+13024640950"
              className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm">(302) 464-0950</span>
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium"
            >
              <Mail className="w-4 h-4" />
              <span className="text-sm">Email</span>
            </a>
          </div>

          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white p-2 rounded-md transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

<<<<<<< HEAD
=======
        {/* Mobile Navigation */}
>>>>>>> origin/main
        {isOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-cyan-500/20">
            <div className="pt-4 space-y-4">
              <Link to="/" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={closeAllMenus}>
                Home
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
              <Link to="/tutorials" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={closeAllMenus}>
                Tutorials
              </Link>
              <Link to="/contact" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={closeAllMenus}>
                Contact
              </Link>
>>>>>>> origin/main
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

<<<<<<< HEAD
export default Navigation;
=======
export default Navigation;
>>>>>>> origin/main
