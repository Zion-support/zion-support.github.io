'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone, Mail, MapPin, Menu, X, Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Settings, Calendar, CheckSquare, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Server, Package, Mic, Workflow, Eye, Wifi, MessageSquare, CheckCircle, ShoppingCart } from 'lucide-react';

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
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && !(event.target as Element).closest('.mobile-menu')) {
        setIsOpen(false);
      }
    }
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

  // Service data - AI Services
  const aiServices = [
    // Conversational AI
    { name: 'AI Enterprise Chatbots', href: '/ai-chatbots-enterprise', icon: MessageSquare, description: 'Enterprise-grade chatbots' },
    { name: 'AI Voice Assistant', href: '/ai-voice-assistant', icon: Mic, description: 'Enterprise voice AI' },
    { name: 'AI Conversational AI', href: '/ai-conversational-ai', icon: MessageCircle, description: 'Advanced conversations' },
    { name: 'AI Customer Support Bot', href: '/ai-customer-support-bot', icon: MessageCircle, description: 'AI customer support' },
    
    // Computer Vision
    { name: 'AI Computer Vision Pro', href: '/ai-computer-vision-pro', icon: Eye, description: 'Image & video analysis' },
    { name: 'AI 3D Generation', href: '/ai-3d-generation', icon: Box, description: '3D content creation' },
    { name: 'AI Holographic Workspace', href: '/ai-holographic-workspace', icon: Monitor, description: 'Immersive work environments' },
    { name: 'AI Video Analytics Pro', href: '/ai-video-analytics-pro', icon: Eye, description: 'Video content analysis' },
    
    // AI Analytics
    { name: 'AI Analytics Pro', href: '/ai-analytics-pro', icon: BarChart, description: 'Advanced data insights' },
    { name: 'AI Predictive Analytics', href: '/ai-predictive-analytics', icon: BarChart, description: 'Business forecasting' },
    { name: 'AI Sentiment Analysis', href: '/ai-sentiment-analysis', icon: Heart, description: 'Emotion detection' },
    { name: 'AI HR Analytics Suite', href: '/ai-hr-analytics-suite', icon: Users, description: 'HR analytics' },
    
    // AI Automation
    { name: 'AI Workflow Automation', href: '/ai-workflow-automation', icon: Zap, description: 'Process optimization' },
    { name: 'AI Autonomous Systems', href: '/ai-autonomous-systems', icon: Cpu, description: 'Self-operating systems' },
    { name: 'AI Email Automation', href: '/ai-email-automation', icon: Mail, description: 'Email marketing AI' },
    { name: 'AI Supply Chain Optimizer', href: '/ai-supply-chain-optimizer', icon: Package, description: 'Supply chain AI' },
    
    // Content AI
    { name: 'AI Content Generation Pro', href: '/ai-content-generation-pro', icon: FileText, description: 'Advanced content creation' },
    { name: 'AI Video Generation', href: '/ai-video-generation', icon: Video, description: 'AI video creation' },
    { name: 'AI Content Moderation', href: '/ai-content-moderation', icon: Shield, description: 'Automated content filtering' },
    { name: 'AI Document AI', href: '/ai-document-ai', icon: FileText, description: 'Document processing' },
    
    // Healthcare AI
    { name: 'AI Healthcare Diagnostics', href: '/ai-healthcare-diagnostics', icon: Heart, description: 'Medical diagnostics' },
    { name: 'AI Drug Discovery Pro', href: '/ai-drug-discovery-pro', icon: Heart, description: 'Pharmaceutical research' },
    { name: 'AI Clinical Trials', href: '/ai-clinical-trials-optimization', icon: Calendar, description: 'Clinical trial optimization' },
    { name: 'AI Healthcare Analytics', href: '/ai-healthcare-analytics', icon: Heart, description: 'Healthcare insights' },
    
    // Financial AI
    { name: 'AI Fraud Detection Pro', href: '/ai-fraud-detection-pro', icon: Shield, description: 'Financial fraud detection' },
    { name: 'AI Algorithmic Trading', href: '/ai-algorithmic-trading', icon: TrendingUp, description: 'Automated trading' },
    { name: 'AI Credit Scoring', href: '/ai-credit-scoring', icon: DollarSign, description: 'Credit risk assessment' },
    { name: 'AI Financial Forecasting', href: '/ai-financial-forecasting-ai', icon: TrendingUp, description: 'Financial predictions' },
    
    // AI Security
    { name: 'AI Cybersecurity Suite', href: '/ai-cybersecurity-suite', icon: Shield, description: 'Advanced threat protection' },
    { name: 'AI Threat Hunting', href: '/ai-threat-hunting', icon: Search, description: 'Proactive threat hunting' },
    { name: 'AI Compliance Automation', href: '/ai-compliance-automation', icon: CheckCircle, description: 'Compliance management' },
    
    // Edge AI
    { name: 'AI Edge Computing', href: '/ai-edge-computing', icon: Cpu, description: 'Distributed AI processing' },
    { name: 'AI IoT Analytics', href: '/ai-iot-analytics', icon: Wifi, description: 'IoT data analysis' },
    { name: 'AI 5G Optimization', href: '/ai-5g-optimization', icon: Wifi, description: '5G network optimization' }
  ]

  // IT Services
  const itServices = [
    // Cloud Services
    { name: 'Cloud Infrastructure Pro', href: '/cloud-infrastructure-pro', icon: Cloud, description: 'Enterprise cloud solutions' },
    { name: 'Advanced Cloud Migration', href: '/cloud-migration-advanced', icon: Cloud, description: 'Zero-downtime migration' },
    { name: 'Cloud Cost Optimization', href: '/cloud-cost-optimization', icon: TrendingUp, description: 'Cost reduction' },
    { name: 'Cloud-Native Development', href: '/cloud-native-development', icon: Cloud, description: 'Microservices & containers' },
    
    // Cybersecurity
    { name: 'Advanced Cybersecurity Suite', href: '/cybersecurity-advanced', icon: Shield, description: 'Threat hunting & response' },
    { name: 'Security Automation Platform', href: '/security-automation', icon: Shield, description: 'Automated security' },
    { name: 'Compliance Automation', href: '/compliance-automation', icon: CheckCircle, description: 'Regulatory compliance' },
    { name: 'Cloud-Native Security', href: '/cloud-native-security', icon: Shield, description: 'Container security' },
    
    // DevOps & CI/CD
    { name: 'Advanced DevOps & SRE', href: '/devops-advanced', icon: Settings, description: 'Site reliability engineering' },
    { name: 'MLOps & AI Operations', href: '/machine-learning-ops', icon: Cpu, description: 'ML model deployment' },
    { name: 'Container Orchestration', href: '/container-orchestration', icon: Server, description: 'Kubernetes management' },
    { name: 'Workflow Automation', href: '/workflow-automation', icon: Settings, description: 'Process automation' },
    
    // Development
    { name: 'Custom Software Development', href: '/custom-software-development', icon: Code, description: 'Tailored solutions' },
    { name: 'Advanced API Development', href: '/api-development-advanced', icon: Code, description: 'Enterprise-grade APIs' },
    { name: 'Blockchain Development', href: '/blockchain-development', icon: Link, description: 'Smart contracts & DeFi' },
    { name: 'Web Development', href: '/web-development', icon: Globe, description: 'Modern web applications' },
    
    // Infrastructure
    { name: 'Network Infrastructure Pro', href: '/network-infrastructure-pro', icon: Wifi, description: 'Enterprise networking' },
    { name: 'Advanced Disaster Recovery', href: '/disaster-recovery-advanced', icon: Shield, description: 'Business continuity' },
    { name: 'Performance Optimization', href: '/performance-optimization', icon: Zap, description: 'App optimization' },
    { name: 'IT Asset Management', href: '/it-asset-management', icon: Package, description: 'Asset lifecycle management' },
    
    // Data & Analytics
    { name: 'Data Engineering', href: '/data-engineering', icon: Database, description: 'Data pipeline development' },
    { name: 'Data Visualization & BI', href: '/data-visualization', icon: BarChart, description: 'Advanced dashboards' },
    { name: 'Big Data Solutions', href: '/big-data-solutions', icon: Database, description: 'Large-scale processing' },
    { name: 'Data Analytics & BI', href: '/data-analytics-bi', icon: BarChart, description: 'Business intelligence' },
    
    // Mobile Solutions
    { name: 'Mobile Development Pro', href: '/mobile-development-pro', icon: Smartphone, description: 'Native & cross-platform' },
    { name: 'Mobile App Optimization', href: '/mobile-app-optimization', icon: TrendingUp, description: 'Performance enhancement' },
    { name: 'Mobile Development', href: '/mobile-development', icon: Smartphone, description: 'iOS & Android apps' },
    
    // IT Support
    { name: 'Enterprise IT Support', href: '/it-support-enterprise', icon: Headphones, description: '24/7 technical support' },
    { name: 'IT Support', href: '/it-support', icon: Monitor, description: 'Technical support' },
    
    // Consulting
    { name: 'IT Consulting', href: '/it-consulting', icon: Users, description: 'Strategic IT guidance' },
    { name: 'Digital Transformation', href: '/digital-transformation', icon: Rocket, description: 'Digital innovation' },
    { name: 'Enterprise Integration', href: '/enterprise-integration', icon: Link, description: 'System integration' }
  ]

  // Micro SAAS Services
  const microSaasServices = [
    // AI-Powered Tools
    { name: 'Zion AI Content Studio Pro', href: '/zion-ai-content-studio-pro', icon: Brain, description: 'AI content creation' },
    { name: 'Zion Analytics Intelligence', href: '/zion-analytics-intelligence', icon: BarChart, description: 'Business intelligence' },
    { name: 'Zion Security Shield Pro', href: '/zion-security-shield-pro', icon: Shield, description: 'Cybersecurity monitoring' },
    { name: 'Zion Workflow Automation Engine', href: '/zion-workflow-automation-engine', icon: Zap, description: 'Process automation' },
    
    // CRM & Sales
    { name: 'Zion CRM Intelligence Suite', href: '/zion-crm-intelligence-suite', icon: Users, description: 'AI-enhanced CRM' },
    { name: 'Zion Email Marketing Pro', href: '/zion-email-marketing-pro', icon: Mail, description: 'Email marketing AI' },
    { name: 'Zion Lead Magnet', href: '/zion-lead-magnet', icon: Target, description: 'Lead generation' },
    { name: 'Zion Customer Support Bot', href: '/zion-customer-support-bot', icon: MessageCircle, description: 'AI customer support' },
    
    // Project & Productivity
    { name: 'Zion Project Management AI', href: '/zion-project-management-ai', icon: Calendar, description: 'Project management' },
    { name: 'Zion Social Media Manager', href: '/zion-social-media-manager', icon: Share2, description: 'Social media management' },
    { name: 'Zion Invoice & Billing AI', href: '/zion-invoice-billing-ai', icon: DollarSign, description: 'Smart invoicing' },
    { name: 'Zion Document AI Processor', href: '/zion-document-ai-processor', icon: FileText, description: 'Document processing' },
    
    // Analytics & Insights
    { name: 'Zion Video Analytics Pro', href: '/zion-video-analytics-pro', icon: Video, description: 'Video analysis' },
    { name: 'Zion HR Analytics Suite', href: '/zion-hr-analytics-suite', icon: Users, description: 'HR analytics' },
    { name: 'Zion Supply Chain Optimizer', href: '/zion-supply-chain-optimizer', icon: Package, description: 'Supply chain AI' },
    { name: 'Zion Financial Forecasting AI', href: '/zion-financial-forecasting-ai', icon: TrendingUp, description: 'Financial predictions' },
    
    // Specialized Tools
    { name: 'Zion Healthcare Analytics', href: '/zion-healthcare-analytics', icon: Heart, description: 'Healthcare insights' },
    { name: 'Zion IoT Device Manager', href: '/zion-iot-device-manager', icon: Wifi, description: 'IoT management' },
    { name: 'Zion Compliance Manager Pro', href: '/zion-compliance-manager-pro', icon: CheckCircle, description: 'Compliance management' },
    { name: 'Zion Learning Management AI', href: '/zion-learning-management-ai', icon: Bookmark, description: 'Learning management' },
    
    // Advanced Solutions
    { name: 'Zion Energy Management System', href: '/zion-energy-management-system', icon: Activity, description: 'Energy optimization' },
    { name: 'Zion Real Estate Analytics', href: '/zion-real-estate-analytics', icon: Building, description: 'Real estate insights' },
    { name: 'Zion AI Video Editor', href: '/zion-ai-video-editor', icon: Video, description: 'AI video editing' },
    { name: 'Zion AI Translator Pro', href: '/zion-ai-translator-pro', icon: Globe, description: 'Advanced translation' }
  ]

  // Emerging Technologies
  const emergingTech = [
    { name: '5G Implementation', href: '/5g-implementation', icon: Zap, description: 'Next-gen connectivity' },
    { name: 'AI 3D Generation', href: '/ai-3d-generation', icon: Box, description: '3D content creation' },
    { name: 'AI Holographic Workspace', href: '/ai-holographic-workspace', icon: Monitor, description: 'Immersive work environments' },
    { name: 'AI Autonomous Systems', href: '/ai-autonomous-systems', icon: Cpu, description: 'Self-operating systems' },
    { name: 'AI Blockchain Solutions', href: '/ai-blockchain-solutions', icon: Link, description: 'Decentralized AI' },
    { name: 'AI Edge Computing', href: '/ai-edge-computing', icon: Server, description: 'Distributed processing' },
    { name: 'Quantum Computing', href: '/quantum-computing', icon: Cpu, description: 'Quantum processing power' },
    { name: 'AR/VR Solutions', href: '/ar-vr-solutions', icon: Monitor, description: 'Immersive experiences' },
    { name: 'IoT Integration', href: '/iot-integration', icon: Wifi, description: 'Internet of Things' },
    { name: 'Machine Learning', href: '/machine-learning', icon: Brain, description: 'Advanced ML algorithms' }
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-2xl border-b border-cyan-500/20' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg shadow-cyan-500/25">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white neon-text-enhanced group-hover:glow">Zion Tech Group</span>
                <span className="text-xs text-cyan-400 font-medium tracking-wider">AI & IT SOLUTIONS</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Home
            </Link>
            
            {/* AI Services Dropdown */}
            <div className="relative group">
              <button
                onClick={toggleAiServices}
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
                <Brain className="w-4 h-4" />
                <span>AI Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${aiServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {aiServicesOpen && (
                <div className="absolute top-full left-0 mt-3 w-[500px] bg-slate-900/98 backdrop-blur-xl rounded-2xl shadow-2xl border border-cyan-500/30 p-6 cyber-card-enhanced holographic-card-enhanced">
                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-cyan-400 neon-text-enhanced">AI Services</h3>
                    <p className="text-sm text-gray-400">Advanced artificial intelligence solutions</p>
                  </div>
                  <div className="grid grid-cols-1 gap-3 max-h-96 overflow-y-auto custom-scrollbar">
                    {aiServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="flex items-center space-x-4 p-4 rounded-xl hover:bg-cyan-500/10 transition-all duration-300 group cyber-card-enhanced"
                        onClick={closeAllMenus}
                      >
                        <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                          <service.icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="text-white font-semibold group-hover:text-cyan-300 transition-colors">{service.name}</div>
                          <div className="text-xs text-gray-400 group-hover:text-gray-300">{service.description}</div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 ml-auto group-hover:translate-x-1 transition-all" />
                      </Link>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-cyan-500/20">
                    <Link
                      to="/ai-services"
                      className="flex items-center justify-center w-full py-2 px-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                      onClick={closeAllMenus}
                    >
                      View All AI Services
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* IT Services Dropdown */}
            <div className="relative group">
              <button
                onClick={toggleItServices}
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
                <Cloud className="w-4 h-4" />
                <span>IT Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${itServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {itServicesOpen && (
                <div className="absolute top-full left-0 mt-3 w-[450px] bg-slate-900/98 backdrop-blur-xl rounded-2xl shadow-2xl border border-purple-500/30 p-6 cyber-card-enhanced holographic-card-enhanced">
                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-purple-400 neon-text-enhanced">IT Services</h3>
                    <p className="text-sm text-gray-400">Complete technology infrastructure solutions</p>
                  </div>
                  <div className="grid grid-cols-1 gap-3 max-h-96 overflow-y-auto custom-scrollbar">
                    {itServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="flex items-center space-x-4 p-4 rounded-xl hover:bg-purple-500/10 transition-all duration-300 group cyber-card-enhanced"
                        onClick={closeAllMenus}
                      >
                        <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                          <service.icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="text-white font-semibold group-hover:text-purple-300 transition-colors">{service.name}</div>
                          <div className="text-xs text-gray-400 group-hover:text-gray-300">{service.description}</div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-purple-400 ml-auto group-hover:translate-x-1 transition-all" />
                      </Link>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-purple-500/20">
                    <Link
                      to="/it-services"
                      className="flex items-center justify-center w-full py-2 px-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg font-medium hover:from-purple-600 hover:to-pink-700 transition-all duration-300"
                      onClick={closeAllMenus}
                    >
                      View All IT Services
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Micro SAAS Dropdown */}
            <div className="relative group">
              <button
                onClick={toggleMicroSaas}
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
                <Cpu className="w-4 h-4" />
                <span>Micro SAAS</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${microSaasOpen ? 'rotate-180' : ''}`} />
              </button>
              {microSaasOpen && (
                <div className="absolute top-full left-0 mt-3 w-[500px] bg-slate-900/98 backdrop-blur-xl rounded-2xl shadow-2xl border border-green-500/30 p-6 cyber-card-enhanced holographic-card-enhanced">
                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-green-400 neon-text-enhanced">Micro SAAS Solutions</h3>
                    <p className="text-sm text-gray-400">Ready-to-use business tools with AI and automation</p>
                  </div>
                  <div className="grid grid-cols-1 gap-3 max-h-96 overflow-y-auto custom-scrollbar">
                    {microSaasServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="flex items-center space-x-4 p-4 rounded-xl hover:bg-green-500/10 transition-all duration-300 group cyber-card-enhanced"
                        onClick={closeAllMenus}
                      >
                        <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                          <service.icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="text-white font-semibold group-hover:text-green-300 transition-colors">{service.name}</div>
                          <div className="text-xs text-gray-400 group-hover:text-gray-300">{service.description}</div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-green-400 ml-auto group-hover:translate-x-1 transition-all" />
                      </Link>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-green-500/20">
                    <Link
                      to="/micro-saas"
                      className="flex items-center justify-center w-full py-2 px-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-medium hover:from-green-600 hover:to-emerald-700 transition-all duration-300"
                      onClick={closeAllMenus}
                    >
                      View All Micro SAAS
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Emerging Technologies Dropdown */}
            <div className="relative group">
              <button
                onClick={toggleServices}
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
                <Zap className="w-4 h-4" />
                <span>Emerging Tech</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-3 w-[400px] bg-slate-900/98 backdrop-blur-xl rounded-2xl shadow-2xl border border-orange-500/30 p-6 cyber-card-enhanced holographic-card-enhanced">
                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-orange-400 neon-text-enhanced">Emerging Technologies</h3>
                    <p className="text-sm text-gray-400">Cutting-edge technology solutions for the future</p>
                  </div>
                  <div className="grid grid-cols-1 gap-3 max-h-80 overflow-y-auto custom-scrollbar">
                    {emergingTech.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="flex items-center space-x-4 p-4 rounded-xl hover:bg-orange-500/10 transition-all duration-300 group cyber-card-enhanced"
                        onClick={closeAllMenus}
                      >
                        <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                          <service.icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="text-white font-semibold group-hover:text-orange-300 transition-colors">{service.name}</div>
                          <div className="text-xs text-gray-400 group-hover:text-gray-300">{service.description}</div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-orange-400 ml-auto group-hover:translate-x-1 transition-all" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link to="/about" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              About
            </Link>
            <Link to="/services" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Services
            </Link>
            <Link to="/pricing" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Pricing
            </Link>
            <Link to="/case-studies" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Case Studies
            </Link>
            <Link to="/blog" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Blog
            </Link>
            <Link to="/tutorials" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Tutorials
            </Link>
            <Link to="/demo" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Demo
            </Link>
            <Link to="/consultation" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Consultation
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Contact
            </Link>
          </div>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+13024640950"
              className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium">
              <Phone className="w-4 h-4" />
              <span className="text-sm">(302) 464-0950</span>
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium">
              <Mail className="w-4 h-4" />
              <span className="text-sm">Email</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white p-2 rounded-md transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-cyan-500/20">
            <div className="pt-4 space-y-4">
              <Link to="/" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={closeAllMenus}>
                Home
              </Link>
              
              {/* Mobile AI Services */}
              <div>
                <button
                  onClick={toggleAiServices}
                  className="flex items-center justify-between w-full text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
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
                        to={service.href}
                        className="block text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                        onClick={closeAllMenus}
                      >
                        {service.name}
                      </Link>
                    ))}
                    <Link
                      to="/ai-services"
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
                  onClick={toggleItServices}
                  className="flex items-center justify-between w-full text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
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
                        to={service.href}
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
                  onClick={toggleMicroSaas}
                  className="flex items-center justify-between w-full text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
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
                        to={service.href}
                        className="block text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                        onClick={closeAllMenus}
                      >
                        {service.name}
                      </Link>
                    ))}
                    <Link
                      to="/micro-saas"
                      className="block text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium"
                      onClick={closeAllMenus}
                    >
                      View All Micro SAAS →
                    </Link>
                  </div>
                )}
              </div>

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
              <Link to="/demo" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={closeAllMenus}>
                Demo
              </Link>
              <Link to="/consultation" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={closeAllMenus}>
                Consultation
              </Link>
              <Link to="/contact" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={closeAllMenus}>
                Contact
              </Link>

              {/* Mobile Contact Info */}
              <div className="pt-4 border-t border-cyan-500/20 space-y-2">
                <a
                  href="tel:+13024640950"
                  className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium">
                  <Phone className="w-4 h-4" />
                  <span>(302) 464-0950</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium">
                  <Mail className="w-4 h-4" />
                  <span>kleber@ziontechgroup.com</span>
                </a>
                <div className="flex items-center space-x-2 text-gray-400">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navigation;
