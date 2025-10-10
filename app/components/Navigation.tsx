'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone, Mail, MapPin, Menu, X, Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Settings, Calendar, CheckSquare, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Server, Package, Mic, Workflow, Eye, Wifi, MessageSquare, CheckCircle, ShoppingCart, Calculator, RefreshCw, Trash2, Droplets, Wind, Leaf, AlertTriangle, Phone as PhoneIcon, Building, Map, Car, Bus, Ship, Train, Mountain, Bridge, Lightbulb, Volume2, Flame, Trophy, Plane, Sun, Fish, Wheat, Apple, Grape, Bee, Tree, Snowflake, Waves, ChefHat, Factory, GraduationCap, Book, Home, Cow } from 'lucide-react';

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

  // Service data - Enhanced with more comprehensive AI services
  const aiServices = [
    { name: 'AI Analytics Pro', href: '/ai-analytics', icon: BarChart, description: 'Advanced data insights & BI', price: '$399/mo' },
    { name: 'AI Automation Suite', href: '/ai-automation', icon: Zap, description: 'Intelligent workflow automation', price: '$349/mo' },
    { name: 'AI Chatbot Builder', href: '/ai-chatbot-builder', icon: MessageCircle, description: 'No-code chatbot platform', price: '$299/mo' },
    { name: 'AI CRM Intelligence', href: '/ai-crm', icon: Users, description: 'AI-powered customer management', price: '$499/mo' },
    { name: 'AI Cybersecurity Suite', href: '/ai-cybersecurity', icon: Shield, description: 'Advanced threat protection', price: '$799/mo' },
    { name: 'AI Data Analytics', href: '/ai-data-analytics', icon: Database, description: 'Real-time data insights', price: '$399/mo' },
    { name: 'AI Healthcare Solutions', href: '/ai-healthcare', icon: Heart, description: 'Medical AI diagnostics', price: '$999/mo' },
    { name: 'AI Financial Services', href: '/ai-financial-services', icon: DollarSign, description: 'Fintech AI solutions', price: '$699/mo' },
    { name: 'AI Computer Vision', href: '/ai-computer-vision', icon: Eye, description: 'Image & video analysis', price: '$599/mo' },
    { name: 'AI Voice Solutions', href: '/ai-voice-solutions', icon: Mic, description: 'Speech recognition & synthesis', price: '$399/mo' },
    { name: 'AI E-commerce Optimizer', href: '/ai-ecommerce-solutions', icon: Globe, description: 'E-commerce AI optimization', price: '$449/mo' },
    { name: 'AI HR Solutions', href: '/ai-hr-solutions', icon: Users, description: 'Human resources AI', price: '$399/mo' },
    { name: 'AI Content Generation', href: '/ai-content-generation', icon: FileText, description: 'Automated content creation', price: '$199/mo' },
    { name: 'AI Workflow Automation', href: '/ai-workflow-automation', icon: Workflow, description: 'Process optimization', price: '$349/mo' },
    { name: 'AI Document Processing', href: '/ai-document-processing', icon: FileText, description: 'Smart document analysis', price: '$299/mo' },
    { name: 'AI Predictive Analytics', href: '/ai-predictive-analytics', icon: BarChart, description: 'Business forecasting', price: '$499/mo' },
    { name: 'AI Edge Computing', href: '/ai-edge-computing', icon: Cpu, description: 'Distributed AI processing', price: '$599/mo' },
    { name: 'AI Video Analysis', href: '/ai-video-analysis', icon: Eye, description: 'Video content analysis', price: '$499/mo' },
    { name: 'AI Speech Synthesis', href: '/ai-speech-synthesis', icon: Mic, description: 'Text-to-speech AI', price: '$199/mo' },
    { name: 'AI Recommendation Engine', href: '/ai-recommendation-engine', icon: Target, description: 'Personalized recommendations', price: '$399/mo' },
    { name: 'AI Sentiment Analysis', href: '/ai-sentiment-analysis', icon: Heart, description: 'Emotion detection AI', price: '$299/mo' },
    { name: 'AI Enterprise Chatbot', href: '/ai-chatbot-enterprise', icon: MessageSquare, description: 'Enterprise-grade chatbots', price: '$799/mo' },
    { name: 'AI Content Moderation', href: '/ai-content-moderation', icon: Shield, description: 'Automated content filtering', price: '$399/mo' },
    { name: 'AI Predictive Modeling', href: '/ai-predictive-modeling', icon: BarChart, description: 'ML forecasting models', price: '$599/mo' },
    { name: 'AI Document Intelligence', href: '/ai-document-intelligence', icon: FileText, description: 'Smart document processing', price: '$349/mo' },
    { name: 'AI Conversation Analytics', href: '/ai-conversation-analytics', icon: Users, description: 'Conversation insights', price: '$299/mo' },
    { name: 'AI Supply Chain Intelligence', href: '/ai-supply-chain-ai', icon: Box, description: 'Supply chain optimization', price: '$699/mo' },
    { name: 'AI Healthcare Diagnostics', href: '/ai-healthcare-diagnostics', icon: Heart, description: 'Medical diagnostics AI', price: '$1299/mo' },
    { name: 'AI Financial Forecasting', href: '/ai-financial-forecasting', icon: TrendingUp, description: 'Financial predictions', price: '$799/mo' },
    { name: 'AI IoT Analytics', href: '/ai-iot-analytics', icon: Cpu, description: 'IoT data analysis', price: '$499/mo' },
    { name: 'AI Conversational AI Platform', href: '/ai-conversational-ai', icon: MessageCircle, description: 'Advanced conversations', price: '$599/mo' },
    { name: 'AI Automated Testing', href: '/ai-automated-testing', icon: CheckCircle, description: 'Intelligent testing', price: '$399/mo' },
    { name: 'AI Knowledge Management', href: '/ai-knowledge-management', icon: FileText, description: 'Smart knowledge systems', price: '$349/mo' },
    { name: 'AI Customer Churn Prediction', href: '/ai-customer-churn', icon: Users, description: 'Churn prevention AI', price: '$499/mo' },
    { name: 'AI Automated Reporting', href: '/ai-automated-reporting', icon: BarChart, description: 'Smart reporting', price: '$299/mo' },
    { name: 'AI Voice Assistant Platform', href: '/ai-voice-assistant', icon: Mic, description: 'Enterprise voice AI', price: '$599/mo' },
    { name: 'AI Content Generation Pro', href: '/ai-content-generation-pro', icon: FileText, description: 'Advanced content creation', price: '$399/mo' },
    { name: 'AI Fraud Detection', href: '/ai-fraud-detection', icon: Shield, description: 'Real-time fraud prevention', price: '$799/mo' },
    { name: 'AI Email Marketing', href: '/ai-email-marketing', icon: Mail, description: 'Intelligent email campaigns', price: '$199/mo' },
    { name: 'AI Social Media Management', href: '/ai-social-media-management', icon: Globe, description: 'AI social media automation', price: '$299/mo' },
    { name: 'AI Lead Generation', href: '/ai-lead-generation', icon: Target, description: 'Automated lead scoring', price: '$399/mo' },
    { name: 'AI Inventory Management', href: '/ai-inventory-management', icon: Package, description: 'Smart inventory optimization', price: '$349/mo' },
    { name: 'AI Project Management', href: '/ai-project-management', icon: Calendar, description: 'Intelligent project tracking', price: '$299/mo' },
    { name: 'AI Code Assistant', href: '/ai-code-assistant', icon: Code, description: 'AI-powered coding help', price: '$199/mo' },
    { name: 'AI Design Studio', href: '/ai-design-studio', icon: Eye, description: 'AI graphic design tools', price: '$299/mo' },
    { name: 'AI Translation Services', href: '/ai-translation-services', icon: Globe, description: 'Multi-language translation', price: '$149/mo' },
    { name: 'AI Video Editing', href: '/ai-video-editing', icon: Eye, description: 'Automated video production', price: '$399/mo' },
    { name: 'AI Music Generation', href: '/ai-music-generation', icon: Mic, description: 'AI music composition', price: '$199/mo' },
    { name: 'AI Legal Assistant', href: '/ai-legal-assistant', icon: FileText, description: 'Legal document analysis', price: '$599/mo' },
    { name: 'AI Real Estate Analytics', href: '/ai-real-estate-analytics', icon: BarChart, description: 'Property market insights', price: '$399/mo' },
    { name: 'AI Energy Management', href: '/ai-energy-management', icon: Zap, description: 'Smart energy optimization', price: '$499/mo' },
    { name: 'AI Agriculture Intelligence', href: '/ai-agriculture-intelligence', icon: Target, description: 'Smart farming solutions', price: '$599/mo' },
    { name: 'AI Climate Solutions', href: '/ai-climate-solutions', icon: Globe, description: 'Environmental AI monitoring', price: '$699/mo' },
    { name: 'AI Drug Discovery', href: '/ai-drug-discovery', icon: Heart, description: 'Pharmaceutical AI research', price: '$1999/mo' },
    { name: 'AI Autonomous Systems', href: '/ai-autonomous-systems', icon: Cpu, description: 'Self-operating AI systems', price: '$999/mo' },
    { name: 'AI Blockchain Analytics', href: '/ai-blockchain-analytics', icon: Link, description: 'Crypto market analysis', price: '$599/mo' },
    { name: 'AI 3D Generation', href: '/ai-3d-generation', icon: Box, description: '3D content creation', price: '$499/mo' },
    { name: 'AI Holographic Workspace', href: '/ai-holographic-workspace', icon: Monitor, description: 'Immersive work environments', price: '$1299/mo' }
  ]

  const itServices = [
    { name: 'Cloud Infrastructure', href: '/cloud-infrastructure', icon: Cloud, description: 'Scalable cloud solutions', price: '$2,500/mo' },
    { name: 'API Development', href: '/api-development', icon: Code, description: 'API development & management', price: '$1,800/mo' },
    { name: 'Cybersecurity Solutions', href: '/cybersecurity-solutions', icon: Shield, description: 'Comprehensive security', price: '$1,800/mo' },
    { name: 'Database Management', href: '/database-management', icon: Database, description: 'Data processing & storage', price: '$1,200/mo' },
    { name: 'Mobile Development', href: '/mobile-development', icon: Smartphone, description: 'iOS & Android apps', price: '$8,000/project' },
    { name: 'Web Development', href: '/web-development', icon: Globe, description: 'Modern web applications', price: '$5,000/project' },
    { name: 'DevOps & CI/CD', href: '/devops-cicd', icon: Settings, description: 'Automated deployment', price: '$2,200/mo' },
    { name: 'IT Support', href: '/it-support', icon: Monitor, description: '24/7 technical support', price: '$1,500/mo' },
    { name: 'Data Analytics & BI', href: '/data-analytics-bi', icon: BarChart, description: 'Business intelligence', price: '$2,000/mo' },
    { name: 'Custom Software', href: '/custom-software', icon: Code, description: 'Tailored solutions', price: '$10,000/project' },
    { name: 'Network Infrastructure', href: '/network-infrastructure', icon: Wifi, description: 'Network design & setup', price: '$3,000/project' },
    { name: 'IT Asset Management', href: '/it-asset-management', icon: Package, description: 'Asset lifecycle management', price: '$800/mo' },
    { name: 'IT Security Services', href: '/it-security-services', icon: Lock, description: 'Security assessment & monitoring', price: '$2,500/mo' },
    { name: 'IT Project Management', href: '/it-project-management', icon: Calendar, description: 'Professional project management', price: '$200/hour' },
    { name: 'Cloud-Native Development', href: '/cloud-native-development', icon: Cloud, description: 'Microservices & containers', price: '$3,500/mo' },
    { name: 'AI Integration Services', href: '/ai-integration-services', icon: Brain, description: 'AI model integration', price: '$2,800/mo' },
    { name: 'Blockchain Development', href: '/blockchain-development', icon: Link, description: 'Smart contracts & DeFi', price: '$5,000/project' },
    { name: 'IoT Development', href: '/iot-development', icon: Wifi, description: 'Connected device solutions', price: '$4,000/project' },
    { name: 'E-commerce Development', href: '/e-commerce-development', icon: ShoppingCart, description: 'Online store platforms', price: '$6,000/project' },
    { name: 'Advanced API Development', href: '/api-development-advanced', icon: Code, description: 'Enterprise-grade APIs', price: '$2,500/mo' },
    { name: 'Data Engineering', href: '/data-engineering', icon: Database, description: 'Data pipeline development', price: '$2,200/mo' },
    { name: 'Advanced Cybersecurity', href: '/cybersecurity-advanced', icon: Shield, description: 'Threat hunting & response', price: '$3,500/mo' },
    { name: 'Cloud Migration', href: '/cloud-migration-advanced', icon: Cloud, description: 'Zero-downtime migration', price: '$5,000/project' },
    { name: 'Advanced DevOps & SRE', href: '/devops-advanced', icon: Settings, description: 'Site reliability engineering', price: '$3,000/mo' },
    { name: 'MLOps & AI Operations', href: '/machine-learning-ops', icon: Cpu, description: 'ML model deployment', price: '$2,800/mo' },
    { name: 'Enterprise Integration', href: '/enterprise-integration', icon: Link, description: 'System integration', price: '$4,000/project' },
    { name: 'Performance Optimization', href: '/performance-optimization', icon: Zap, description: 'App & infrastructure optimization', price: '$1,500/mo' },
    { name: 'Disaster Recovery', href: '/disaster-recovery-advanced', icon: Shield, description: 'Business continuity', price: '$2,000/mo' },
    { name: 'Compliance Automation', href: '/compliance-automation', icon: CheckCircle, description: 'Regulatory compliance', price: '$1,800/mo' },
    { name: 'Cloud Cost Optimization', href: '/cloud-cost-optimization', icon: TrendingUp, description: 'Cost reduction', price: '$1,200/mo' },
    { name: 'Security Automation', href: '/security-automation', icon: Shield, description: 'Automated security', price: '$2,200/mo' },
    { name: 'Data Visualization & BI', href: '/data-visualization', icon: BarChart, description: 'Advanced dashboards', price: '$1,800/mo' },
    { name: 'Workflow Automation', href: '/workflow-automation', icon: Settings, description: 'Process automation', price: '$1,500/mo' },
    { name: 'Cloud-Native Security', href: '/cloud-native-security', icon: Shield, description: 'Container security', price: '$2,200/mo' },
    { name: 'IT Consulting', href: '/it-consulting', icon: Users, description: 'Strategic IT consulting', price: '$200/hour' },
    { name: 'Digital Transformation', href: '/digital-transformation', icon: Zap, description: 'Complete digital overhaul', price: '$15,000/project' },
    { name: 'IT Infrastructure Audit', href: '/it-infrastructure-audit', icon: Shield, description: 'Comprehensive IT assessment', price: '$3,000/project' },
    { name: 'Cloud Security Assessment', href: '/cloud-security-assessment', icon: Lock, description: 'Cloud security evaluation', price: '$2,500/project' },
    { name: 'IT Training & Support', href: '/it-training-support', icon: Users, description: 'Staff training programs', price: '$150/hour' },
    { name: 'Managed IT Services', href: '/managed-it-services', icon: Settings, description: 'Complete IT management', price: '$3,500/mo' },
    { name: 'IT Compliance Services', href: '/it-compliance-services', icon: CheckCircle, description: 'Regulatory compliance', price: '$2,000/mo' },
    { name: 'IT Disaster Recovery', href: '/it-disaster-recovery', icon: Shield, description: 'Business continuity planning', price: '$2,500/project' },
    { name: 'IT Vendor Management', href: '/it-vendor-management', icon: Package, description: 'Vendor relationship management', price: '$1,000/mo' },
    { name: 'IT Cost Optimization', href: '/it-cost-optimization', icon: TrendingUp, description: 'IT budget optimization', price: '$1,500/mo' },
    { name: 'IT Innovation Consulting', href: '/it-innovation-consulting', icon: Brain, description: 'Technology innovation strategy', price: '$300/hour' },
    { name: 'IT Risk Management', href: '/it-risk-management', icon: Shield, description: 'IT risk assessment & mitigation', price: '$2,200/mo' },
    { name: 'IT Governance', href: '/it-governance', icon: Settings, description: 'IT governance framework', price: '$1,800/mo' },
    { name: 'IT Service Management', href: '/it-service-management', icon: Settings, description: 'ITSM implementation', price: '$2,500/project' },
    { name: 'IT Change Management', href: '/it-change-management', icon: Settings, description: 'Change management processes', price: '$1,500/mo' },
    { name: 'IT Capacity Planning', href: '/it-capacity-planning', icon: BarChart, description: 'Resource capacity planning', price: '$1,200/mo' },
    { name: 'IT Monitoring & Alerting', href: '/it-monitoring-alerting', icon: Monitor, description: '24/7 system monitoring', price: '$1,800/mo' },
    { name: 'IT Backup & Recovery', href: '/it-backup-recovery', icon: HardDrive, description: 'Data backup solutions', price: '$1,000/mo' },
    { name: 'IT Network Security', href: '/it-network-security', icon: Wifi, description: 'Network security solutions', price: '$2,200/mo' },
    { name: 'IT Endpoint Security', href: '/it-endpoint-security', icon: Shield, description: 'Device security management', price: '$1,500/mo' },
    { name: 'IT Identity Management', href: '/it-identity-management', icon: Users, description: 'Identity & access management', price: '$1,800/mo' },
    { name: 'IT Data Protection', href: '/it-data-protection', icon: Lock, description: 'Data protection & privacy', price: '$2,000/mo' },
    { name: 'IT Incident Response', href: '/it-incident-response', icon: Shield, description: 'Security incident response', price: '$2,500/mo' },
    { name: 'IT Penetration Testing', href: '/it-penetration-testing', icon: Shield, description: 'Security vulnerability testing', price: '$3,000/project' },
    { name: 'IT Security Awareness', href: '/it-security-awareness', icon: Users, description: 'Security training programs', price: '$100/hour' },
    { name: 'IT Compliance Auditing', href: '/it-compliance-auditing', icon: CheckCircle, description: 'Compliance audit services', price: '$2,500/project' }
  ]

  const microSaasServices = [
    { name: 'Zion Analytics Pro', href: '/zion-analytics-pro', icon: BarChart, description: 'Business intelligence platform', price: '$89/mo' },
    { name: 'Zion Chat AI', href: '/zion-chat-ai', icon: MessageCircle, description: 'AI customer support', price: '$149/mo' },
    { name: 'Zion Security Shield', href: '/zion-security-shield', icon: Shield, description: 'Cybersecurity monitoring', price: '$199/mo' },
    { name: 'Zion Cloud Vault', href: '/zion-cloud-vault', icon: Cloud, description: 'Cloud backup & recovery', price: '$99/mo' },
    { name: 'Zion Content Studio', href: '/zion-content-studio', icon: FileText, description: 'AI content creation', price: '$79/mo' },
    { name: 'Zion CRM Intelligence', href: '/zion-crm-intelligence', icon: Users, description: 'AI-enhanced CRM', price: '$129/mo' },
    { name: 'Zion Data Sync', href: '/zion-data-sync', icon: Database, description: 'Data integration platform', price: '$119/mo' },
    { name: 'Zion Lead Magnet', href: '/zion-lead-magnet', icon: Target, description: 'Lead generation platform', price: '$99/mo' },
    { name: 'Zion Project Master', href: '/zion-project-master', icon: Calendar, description: 'Project management AI', price: '$89/mo' },
    { name: 'Zion Email Automation', href: '/zion-email-automation', icon: Mail, description: 'Email marketing AI', price: '$69/mo' },
    { name: 'Zion Inventory Smart', href: '/zion-inventory-smart', icon: Package, description: 'Inventory management', price: '$109/mo' },
    { name: 'Zion Invoice Genius', href: '/zion-invoice-genius', icon: DollarSign, description: 'Invoice generation', price: '$49/mo' },
    { name: 'Zion Workflow Automation', href: '/zion-workflow-automation', icon: Settings, description: 'Process automation', price: '$139/mo' },
    { name: 'Zion Performance Monitor', href: '/zion-performance-monitor', icon: Monitor, description: 'Performance monitoring', price: '$79/mo' },
    { name: 'Zion Compliance Manager', href: '/zion-compliance-manager', icon: CheckSquare, description: 'Compliance management', price: '$159/mo' },
    { name: 'Zion Social Scheduler', href: '/zion-social-scheduler', icon: Globe, description: 'Social media management', price: '$89/mo' },
    { name: 'Zion AI Video Editor', href: '/zion-ai-video-editor', icon: Eye, description: 'AI video editing', price: '$129/mo' },
    { name: 'Zion AI Translator Pro', href: '/zion-ai-translator-pro', icon: Globe, description: 'Advanced translation', price: '$59/mo' },
    { name: 'Zion AI Code Reviewer', href: '/zion-ai-code-reviewer', icon: Code, description: 'Intelligent code review', price: '$99/mo' },
    { name: 'Zion Customer Insights Pro', href: '/zion-customer-insights', icon: Users, description: 'Customer analytics', price: '$119/mo' },
    { name: 'Zion AI Email Assistant', href: '/zion-ai-email-assistant', icon: Mail, description: 'Smart email management', price: '$69/mo' },
    { name: 'Zion AI Meeting Assistant', href: '/zion-ai-meeting-assistant', icon: Calendar, description: 'Meeting automation', price: '$89/mo' },
    { name: 'Zion AI SEO Optimizer', href: '/zion-ai-seo-optimizer', icon: Target, description: 'SEO optimization', price: '$79/mo' },
    { name: 'Zion AI Data Cleaner', href: '/zion-ai-data-cleaner', icon: Database, description: 'Data cleaning & validation', price: '$89/mo' },
    { name: 'Zion AI Contract Analyzer', href: '/zion-ai-contract-analyzer', icon: FileText, description: 'Contract analysis', price: '$149/mo' },
    { name: 'Zion AI Survey Builder', href: '/zion-ai-survey-builder', icon: CheckSquare, description: 'Intelligent surveys', price: '$59/mo' },
    { name: 'Zion AI Accounting Assistant', href: '/zion-ai-accounting-assistant', icon: DollarSign, description: 'AI accounting', price: '$99/mo' },
    { name: 'Zion AI Recruitment Pro', href: '/zion-ai-recruitment-pro', icon: Users, description: 'AI recruitment', price: '$179/mo' },
    { name: 'Zion AI Content Moderation', href: '/zion-ai-content-moderation', icon: Shield, description: 'Content moderation', price: '$119/mo' },
    { name: 'Zion AI Predictive Maintenance', href: '/zion-ai-predictive-maintenance', icon: Settings, description: 'Equipment maintenance', price: '$199/mo' },
    { name: 'Zion AI Energy Manager', href: '/zion-ai-energy-manager', icon: Zap, description: 'Energy optimization', price: '$139/mo' },
    { name: 'Zion AI Supply Chain Optimizer', href: '/zion-ai-supply-chain-optimizer', icon: Box, description: 'Supply chain AI', price: '$189/mo' },
    { name: 'Zion AI Fraud Detector', href: '/zion-ai-fraud-detector', icon: Shield, description: 'Fraud detection', price: '$159/mo' },
    { name: 'Zion AI Customer Service Pro', href: '/zion-ai-customer-service-pro', icon: MessageSquare, description: 'Advanced customer service', price: '$169/mo' },
    { name: 'Zion AI Marketing Automation', href: '/zion-ai-marketing-automation', icon: Target, description: 'Marketing AI', price: '$129/mo' },
    { name: 'Zion AI Document AI', href: '/zion-ai-document-ai', icon: FileText, description: 'Document processing', price: '$109/mo' },
    { name: 'Zion AI Sales Assistant', href: '/zion-ai-sales-assistant', icon: TrendingUp, description: 'AI sales automation', price: '$149/mo' },
    { name: 'Zion AI HR Assistant', href: '/zion-ai-hr-assistant', icon: Users, description: 'Human resources AI', price: '$119/mo' },
    { name: 'Zion AI Financial Planner', href: '/zion-ai-financial-planner', icon: DollarSign, description: 'Financial planning AI', price: '$139/mo' },
    { name: 'Zion AI Legal Assistant', href: '/zion-ai-legal-assistant', icon: FileText, description: 'Legal document AI', price: '$199/mo' },
    { name: 'Zion AI Real Estate Assistant', href: '/zion-ai-real-estate-assistant', icon: Globe, description: 'Real estate AI tools', price: '$129/mo' },
    { name: 'Zion AI Healthcare Assistant', href: '/zion-ai-healthcare-assistant', icon: Heart, description: 'Healthcare AI solutions', price: '$249/mo' },
    { name: 'Zion AI Education Platform', href: '/zion-ai-education-platform', icon: Users, description: 'AI learning management', price: '$99/mo' },
    { name: 'Zion AI E-commerce Optimizer', href: '/zion-ai-ecommerce-optimizer', icon: ShoppingCart, description: 'E-commerce AI tools', price: '$119/mo' },
    { name: 'Zion AI Social Media Manager', href: '/zion-ai-social-media-manager', icon: Globe, description: 'Social media AI', price: '$89/mo' },
    { name: 'Zion AI Email Marketing Pro', href: '/zion-ai-email-marketing-pro', icon: Mail, description: 'Advanced email AI', price: '$79/mo' },
    { name: 'Zion AI Lead Scoring', href: '/zion-ai-lead-scoring', icon: Target, description: 'Intelligent lead scoring', price: '$99/mo' },
    { name: 'Zion AI Customer Segmentation', href: '/zion-ai-customer-segmentation', icon: Users, description: 'Customer segmentation AI', price: '$109/mo' },
    { name: 'Zion AI Price Optimization', href: '/zion-ai-price-optimization', icon: DollarSign, description: 'Dynamic pricing AI', price: '$139/mo' },
    { name: 'Zion AI Inventory Optimizer', href: '/zion-ai-inventory-optimizer', icon: Package, description: 'Smart inventory AI', price: '$119/mo' },
    { name: 'Zion AI Demand Forecasting', href: '/zion-ai-demand-forecasting', icon: BarChart, description: 'Demand prediction AI', price: '$149/mo' },
    { name: 'Zion AI Quality Control', href: '/zion-ai-quality-control', icon: CheckCircle, description: 'Quality assurance AI', price: '$169/mo' },
    { name: 'Zion AI Risk Assessment', href: '/zion-ai-risk-assessment', icon: Shield, description: 'Risk analysis AI', price: '$179/mo' },
    { name: 'Zion AI Compliance Monitor', href: '/zion-ai-compliance-monitor', icon: CheckSquare, description: 'Compliance monitoring AI', price: '$159/mo' },
    { name: 'Zion AI Performance Analytics', href: '/zion-ai-performance-analytics', icon: BarChart, description: 'Performance analysis AI', price: '$129/mo' },
    { name: 'Zion AI Resource Optimizer', href: '/zion-ai-resource-optimizer', icon: Settings, description: 'Resource optimization AI', price: '$139/mo' },
    { name: 'Zion AI Cost Analyzer', href: '/zion-ai-cost-analyzer', icon: DollarSign, description: 'Cost analysis AI', price: '$99/mo' },
    { name: 'Zion AI ROI Calculator', href: '/zion-ai-roi-calculator', icon: TrendingUp, description: 'ROI calculation AI', price: '$79/mo' },
    { name: 'Zion AI Trend Analyzer', href: '/zion-ai-trend-analyzer', icon: BarChart, description: 'Trend analysis AI', price: '$109/mo' },
    { name: 'Zion AI Competitor Analysis', href: '/zion-ai-competitor-analysis', icon: Eye, description: 'Competitor analysis AI', price: '$149/mo' },
    { name: 'Zion AI Market Research', href: '/zion-ai-market-research', icon: Globe, description: 'Market research AI', price: '$179/mo' },
    { name: 'Zion AI Customer Feedback', href: '/zion-ai-customer-feedback', icon: MessageSquare, description: 'Feedback analysis AI', price: '$89/mo' },
    { name: 'Zion AI Brand Monitor', href: '/zion-ai-brand-monitor', icon: Eye, description: 'Brand monitoring AI', price: '$119/mo' },
    { name: 'Zion AI Crisis Management', href: '/zion-ai-crisis-management', icon: Shield, description: 'Crisis management AI', price: '$199/mo' },
    { name: 'Zion AI Innovation Tracker', href: '/zion-ai-innovation-tracker', icon: Brain, description: 'Innovation tracking AI', price: '$159/mo' },
    { name: 'Zion AI Patent Analyzer', href: '/zion-ai-patent-analyzer', icon: FileText, description: 'Patent analysis AI', price: '$189/mo' },
    { name: 'Zion AI Technology Scout', href: '/zion-ai-technology-scout', icon: Cpu, description: 'Technology scouting AI', price: '$169/mo' },
    { name: 'Zion AI Partnership Finder', href: '/zion-ai-partnership-finder', icon: Users, description: 'Partnership discovery AI', price: '$139/mo' },
    { name: 'Zion AI Investment Advisor', href: '/zion-ai-investment-advisor', icon: DollarSign, description: 'Investment advice AI', price: '$199/mo' },
    { name: 'Zion AI Tax Optimizer', href: '/zion-ai-tax-optimizer', icon: Calculator, description: 'Tax optimization AI', price: '$149/mo' },
    { name: 'Zion AI Insurance Advisor', href: '/zion-ai-insurance-advisor', icon: Shield, description: 'Insurance advice AI', price: '$129/mo' },
    { name: 'Zion AI Retirement Planner', href: '/zion-ai-retirement-planner', icon: Calendar, description: 'Retirement planning AI', price: '$119/mo' },
    { name: 'Zion AI Estate Planner', href: '/zion-ai-estate-planner', icon: FileText, description: 'Estate planning AI', price: '$179/mo' },
    { name: 'Zion AI Business Valuator', href: '/zion-ai-business-valuator', icon: DollarSign, description: 'Business valuation AI', price: '$199/mo' },
    { name: 'Zion AI Merger Advisor', href: '/zion-ai-merger-advisor', icon: Link, description: 'Merger analysis AI', price: '$249/mo' },
    { name: 'Zion AI IPO Assistant', href: '/zion-ai-ipo-assistant', icon: TrendingUp, description: 'IPO preparation AI', price: '$299/mo' },
    { name: 'Zion AI Due Diligence', href: '/zion-ai-due-diligence', icon: CheckSquare, description: 'Due diligence AI', price: '$199/mo' },
    { name: 'Zion AI ESG Monitor', href: '/zion-ai-esg-monitor', icon: Globe, description: 'ESG monitoring AI', price: '$159/mo' },
    { name: 'Zion AI Sustainability Tracker', href: '/zion-ai-sustainability-tracker', icon: Heart, description: 'Sustainability AI', price: '$139/mo' },
    { name: 'Zion AI Carbon Footprint', href: '/zion-ai-carbon-footprint', icon: Globe, description: 'Carbon tracking AI', price: '$119/mo' },
    { name: 'Zion AI Green Energy', href: '/zion-ai-green-energy', icon: Zap, description: 'Green energy AI', price: '$149/mo' },
    { name: 'Zion AI Circular Economy', href: '/zion-ai-circular-economy', icon: RefreshCw, description: 'Circular economy AI', price: '$129/mo' },
    { name: 'Zion AI Waste Optimizer', href: '/zion-ai-waste-optimizer', icon: Trash2, description: 'Waste reduction AI', price: '$109/mo' },
    { name: 'Zion AI Water Management', href: '/zion-ai-water-management', icon: Droplets, description: 'Water management AI', price: '$139/mo' },
    { name: 'Zion AI Air Quality', href: '/zion-ai-air-quality', icon: Wind, description: 'Air quality AI', price: '$99/mo' },
    { name: 'Zion AI Biodiversity', href: '/zion-ai-biodiversity', icon: Leaf, description: 'Biodiversity AI', price: '$119/mo' },
    { name: 'Zion AI Climate Risk', href: '/zion-ai-climate-risk', icon: AlertTriangle, description: 'Climate risk AI', price: '$159/mo' },
    { name: 'Zion AI Disaster Preparedness', href: '/zion-ai-disaster-preparedness', icon: Shield, description: 'Disaster prep AI', price: '$179/mo' },
    { name: 'Zion AI Emergency Response', href: '/zion-ai-emergency-response', icon: PhoneIcon, description: 'Emergency response AI', price: '$199/mo' },
    { name: 'Zion AI Public Safety', href: '/zion-ai-public-safety', icon: Shield, description: 'Public safety AI', price: '$219/mo' },
    { name: 'Zion AI Smart City', href: '/zion-ai-smart-city', icon: Building, description: 'Smart city AI', price: '$299/mo' },
    { name: 'Zion AI Urban Planning', href: '/zion-ai-urban-planning', icon: Map, description: 'Urban planning AI', price: '$249/mo' },
    { name: 'Zion AI Traffic Optimization', href: '/zion-ai-traffic-optimization', icon: Car, description: 'Traffic AI', price: '$189/mo' },
    { name: 'Zion AI Parking Management', href: '/zion-ai-parking-management', icon: Car, description: 'Parking AI', price: '$139/mo' },
    { name: 'Zion AI Public Transport', href: '/zion-ai-public-transport', icon: Bus, description: 'Transport AI', price: '$169/mo' },
    { name: 'Zion AI Energy Grid', href: '/zion-ai-energy-grid', icon: Zap, description: 'Energy grid AI', price: '$199/mo' },
    { name: 'Zion AI Water Distribution', href: '/zion-ai-water-distribution', icon: Droplets, description: 'Water distribution AI', price: '$179/mo' },
    { name: 'Zion AI Waste Collection', href: '/zion-ai-waste-collection', icon: Trash2, description: 'Waste collection AI', price: '$149/mo' },
    { name: 'Zion AI Street Lighting', href: '/zion-ai-street-lighting', icon: Lightbulb, description: 'Smart lighting AI', price: '$119/mo' },
    { name: 'Zion AI Noise Monitoring', href: '/zion-ai-noise-monitoring', icon: Volume2, description: 'Noise monitoring AI', price: '$99/mo' },
    { name: 'Zion AI Air Pollution', href: '/zion-ai-air-pollution', icon: Wind, description: 'Air pollution AI', price: '$129/mo' },
    { name: 'Zion AI Weather Prediction', href: '/zion-ai-weather-prediction', icon: Cloud, description: 'Weather AI', price: '$109/mo' },
    { name: 'Zion AI Flood Monitoring', href: '/zion-ai-flood-monitoring', icon: Droplets, description: 'Flood monitoring AI', price: '$139/mo' },
    { name: 'Zion AI Earthquake Detection', href: '/zion-ai-earthquake-detection', icon: AlertTriangle, description: 'Earthquake AI', price: '$159/mo' },
    { name: 'Zion AI Fire Detection', href: '/zion-ai-fire-detection', icon: Flame, description: 'Fire detection AI', price: '$149/mo' },
    { name: 'Zion AI Security Monitoring', href: '/zion-ai-security-monitoring', icon: Shield, description: 'Security AI', price: '$179/mo' },
    { name: 'Zion AI Crowd Management', href: '/zion-ai-crowd-management', icon: Users, description: 'Crowd management AI', price: '$169/mo' },
    { name: 'Zion AI Event Planning', href: '/zion-ai-event-planning', icon: Calendar, description: 'Event planning AI', price: '$119/mo' },
    { name: 'Zion AI Tourism Assistant', href: '/zion-ai-tourism-assistant', icon: Map, description: 'Tourism AI', price: '$99/mo' },
    { name: 'Zion AI Cultural Heritage', href: '/zion-ai-cultural-heritage', icon: Building, description: 'Cultural heritage AI', price: '$139/mo' },
    { name: 'Zion AI Language Translation', href: '/zion-ai-language-translation', icon: Globe, description: 'Language AI', price: '$79/mo' },
    { name: 'Zion AI Accessibility', href: '/zion-ai-accessibility', icon: Users, description: 'Accessibility AI', price: '$109/mo' },
    { name: 'Zion AI Elderly Care', href: '/zion-ai-elderly-care', icon: Heart, description: 'Elderly care AI', price: '$189/mo' },
    { name: 'Zion AI Child Safety', href: '/zion-ai-child-safety', icon: Shield, description: 'Child safety AI', price: '$159/mo' },
    { name: 'Zion AI Pet Care', href: '/zion-ai-pet-care', icon: Heart, description: 'Pet care AI', price: '$89/mo' },
    { name: 'Zion AI Plant Care', href: '/zion-ai-plant-care', icon: Leaf, description: 'Plant care AI', price: '$69/mo' },
    { name: 'Zion AI Home Automation', href: '/zion-ai-home-automation', icon: Home, description: 'Home automation AI', price: '$129/mo' },
    { name: 'Zion AI Smart Kitchen', href: '/zion-ai-smart-kitchen', icon: ChefHat, description: 'Kitchen AI', price: '$149/mo' },
    { name: 'Zion AI Smart Garden', href: '/zion-ai-smart-garden', icon: Leaf, description: 'Garden AI', price: '$99/mo' },
    { name: 'Zion AI Smart Office', href: '/zion-ai-smart-office', icon: Building, description: 'Office AI', price: '$119/mo' },
    { name: 'Zion AI Smart Factory', href: '/zion-ai-smart-factory', icon: Factory, description: 'Factory AI', price: '$199/mo' },
    { name: 'Zion AI Smart Warehouse', href: '/zion-ai-smart-warehouse', icon: Package, description: 'Warehouse AI', price: '$169/mo' },
    { name: 'Zion AI Smart Retail', href: '/zion-ai-smart-retail', icon: ShoppingCart, description: 'Retail AI', price: '$139/mo' },
    { name: 'Zion AI Smart Restaurant', href: '/zion-ai-smart-restaurant', icon: ChefHat, description: 'Restaurant AI', price: '$149/mo' },
    { name: 'Zion AI Smart Hotel', href: '/zion-ai-smart-hotel', icon: Building, description: 'Hotel AI', price: '$159/mo' },
    { name: 'Zion AI Smart Hospital', href: '/zion-ai-smart-hospital', icon: Heart, description: 'Hospital AI', price: '$249/mo' },
    { name: 'Zion AI Smart School', href: '/zion-ai-smart-school', icon: GraduationCap, description: 'School AI', price: '$179/mo' },
    { name: 'Zion AI Smart Library', href: '/zion-ai-smart-library', icon: Book, description: 'Library AI', price: '$119/mo' },
    { name: 'Zion AI Smart Museum', href: '/zion-ai-smart-museum', icon: Building, description: 'Museum AI', price: '$139/mo' },
    { name: 'Zion AI Smart Stadium', href: '/zion-ai-smart-stadium', icon: Trophy, description: 'Stadium AI', price: '$189/mo' },
    { name: 'Zion AI Smart Airport', href: '/zion-ai-smart-airport', icon: Plane, description: 'Airport AI', price: '$219/mo' },
    { name: 'Zion AI Smart Port', href: '/zion-ai-smart-port', icon: Ship, description: 'Port AI', price: '$199/mo' },
    { name: 'Zion AI Smart Railway', href: '/zion-ai-smart-railway', icon: Train, description: 'Railway AI', price: '$179/mo' },
    { name: 'Zion AI Smart Highway', href: '/zion-ai-smart-highway', icon: Car, description: 'Highway AI', price: '$159/mo' },
    { name: 'Zion AI Smart Bridge', href: '/zion-ai-smart-bridge', icon: Bridge, description: 'Bridge AI', price: '$169/mo' },
    { name: 'Zion AI Smart Tunnel', href: '/zion-ai-smart-tunnel', icon: Mountain, description: 'Tunnel AI', price: '$149/mo' },
    { name: 'Zion AI Smart Dam', href: '/zion-ai-smart-dam', icon: Droplets, description: 'Dam AI', price: '$189/mo' },
    { name: 'Zion AI Smart Power Plant', href: '/zion-ai-smart-power-plant', icon: Zap, description: 'Power plant AI', price: '$219/mo' },
    { name: 'Zion AI Smart Water Treatment', href: '/zion-ai-smart-water-treatment', icon: Droplets, description: 'Water treatment AI', price: '$199/mo' },
    { name: 'Zion AI Smart Waste Treatment', href: '/zion-ai-smart-waste-treatment', icon: Trash2, description: 'Waste treatment AI', price: '$179/mo' },
    { name: 'Zion AI Smart Recycling', href: '/zion-ai-smart-recycling', icon: RefreshCw, description: 'Recycling AI', price: '$139/mo' },
    { name: 'Zion AI Smart Composting', href: '/zion-ai-smart-composting', icon: Leaf, description: 'Composting AI', price: '$119/mo' },
    { name: 'Zion AI Smart Aquaponics', href: '/zion-ai-smart-aquaponics', icon: Fish, description: 'Aquaponics AI', price: '$149/mo' },
    { name: 'Zion AI Smart Hydroponics', href: '/zion-ai-smart-hydroponics', icon: Leaf, description: 'Hydroponics AI', price: '$129/mo' },
    { name: 'Zion AI Smart Greenhouse', href: '/zion-ai-smart-greenhouse', icon: Sun, description: 'Greenhouse AI', price: '$139/mo' },
    { name: 'Zion AI Smart Farm', href: '/zion-ai-smart-farm', icon: Wheat, description: 'Farm AI', price: '$159/mo' },
    { name: 'Zion AI Smart Ranch', href: '/zion-ai-smart-ranch', icon: Cow, description: 'Ranch AI', price: '$149/mo' },
    { name: 'Zion AI Smart Orchard', href: '/zion-ai-smart-orchard', icon: Apple, description: 'Orchard AI', price: '$129/mo' },
    { name: 'Zion AI Smart Vineyard', href: '/zion-ai-smart-vineyard', icon: Grape, description: 'Vineyard AI', price: '$139/mo' },
    { name: 'Zion AI Smart Apiary', href: '/zion-ai-smart-apiary', icon: Bee, description: 'Apiary AI', price: '$119/mo' },
    { name: 'Zion AI Smart Fishery', href: '/zion-ai-smart-fishery', icon: Fish, description: 'Fishery AI', price: '$149/mo' },
    { name: 'Zion AI Smart Forest', href: '/zion-ai-smart-forest', icon: Tree, description: 'Forest AI', price: '$169/mo' },
    { name: 'Zion AI Smart Desert', href: '/zion-ai-smart-desert', icon: Sun, description: 'Desert AI', price: '$139/mo' },
    { name: 'Zion AI Smart Arctic', href: '/zion-ai-smart-arctic', icon: Snowflake, description: 'Arctic AI', price: '$159/mo' },
    { name: 'Zion AI Smart Ocean', href: '/zion-ai-smart-ocean', icon: Waves, description: 'Ocean AI', price: '$179/mo' },
    { name: 'Zion AI Smart Lake', href: '/zion-ai-smart-lake', icon: Droplets, description: 'Lake AI', price: '$129/mo' },
    { name: 'Zion AI Smart River', href: '/zion-ai-smart-river', icon: Waves, description: 'River AI', price: '$119/mo' },
    { name: 'Zion AI Smart Mountain', href: '/zion-ai-smart-mountain', icon: Mountain, description: 'Mountain AI', price: '$139/mo' },
    { name: 'Zion AI Smart Valley', href: '/zion-ai-smart-valley', icon: Mountain, description: 'Valley AI', price: '$119/mo' },
    { name: 'Zion AI Smart Plateau', href: '/zion-ai-smart-plateau', icon: Mountain, description: 'Plateau AI', price: '$129/mo' },
    { name: 'Zion AI Smart Canyon', href: '/zion-ai-smart-canyon', icon: Mountain, description: 'Canyon AI', price: '$139/mo' },
    { name: 'Zion AI Smart Cave', href: '/zion-ai-smart-cave', icon: Mountain, description: 'Cave AI', price: '$119/mo' },
    { name: 'Zion AI Smart Volcano', href: '/zion-ai-smart-volcano', icon: Flame, description: 'Volcano AI', price: '$149/mo' },
    { name: 'Zion AI Smart Glacier', href: '/zion-ai-smart-glacier', icon: Snowflake, description: 'Glacier AI', price: '$159/mo' },
    { name: 'Zion AI Smart Iceberg', href: '/zion-ai-smart-iceberg', icon: Snowflake, description: 'Iceberg AI', price: '$139/mo' },
    { name: 'Zion AI Smart Tundra', href: '/zion-ai-smart-tundra', icon: Snowflake, description: 'Tundra AI', price: '$129/mo' },
    { name: 'Zion AI Smart Taiga', href: '/zion-ai-smart-taiga', icon: Tree, description: 'Taiga AI', price: '$139/mo' },
    { name: 'Zion AI Smart Savanna', href: '/zion-ai-smart-savanna', icon: Sun, description: 'Savanna AI', price: '$119/mo' },
    { name: 'Zion AI Smart Prairie', href: '/zion-ai-smart-prairie', icon: Wheat, description: 'Prairie AI', price: '$109/mo' },
    { name: 'Zion AI Smart Steppe', href: '/zion-ai-smart-steppe', icon: Wheat, description: 'Steppe AI', price: '$119/mo' },
    { name: 'Zion AI Smart Pampas', href: '/zion-ai-smart-pampas', icon: Wheat, description: 'Pampas AI', price: '$129/mo' },
    { name: 'Zion AI Smart Veldt', href: '/zion-ai-smart-veldt', icon: Sun, description: 'Veldt AI', price: '$119/mo' },
    { name: 'Zion AI Smart Outback', href: '/zion-ai-smart-outback', icon: Sun, description: 'Outback AI', price: '$139/mo' },
    { name: 'Zion AI Smart Bush', href: '/zion-ai-smart-bush', icon: Tree, description: 'Bush AI', price: '$119/mo' },
    { name: 'Zion AI Smart Jungle', href: '/zion-ai-smart-jungle', icon: Tree, description: 'Jungle AI', price: '$149/mo' },
    { name: 'Zion AI Smart Rainforest', href: '/zion-ai-smart-rainforest', icon: Tree, description: 'Rainforest AI', price: '$159/mo' },
    { name: 'Zion AI Smart Wetland', href: '/zion-ai-smart-wetland', icon: Droplets, description: 'Wetland AI', price: '$129/mo' },
    { name: 'Zion AI Smart Marsh', href: '/zion-ai-smart-marsh', icon: Droplets, description: 'Marsh AI', price: '$119/mo' },
    { name: 'Zion AI Smart Swamp', href: '/zion-ai-smart-swamp', icon: Droplets, description: 'Swamp AI', price: '$109/mo' },
    { name: 'Zion AI Smart Bog', href: '/zion-ai-smart-bog', icon: Droplets, description: 'Bog AI', price: '$99/mo' },
    { name: 'Zion AI Smart Fen', href: '/zion-ai-smart-fen', icon: Droplets, description: 'Fen AI', price: '$89/mo' },
    { name: 'Zion AI Smart Moor', href: '/zion-ai-smart-moor', icon: Droplets, description: 'Moor AI', price: '$79/mo' },
    { name: 'Zion AI Smart Heath', href: '/zion-ai-smart-heath', icon: Sun, description: 'Heath AI', price: '$69/mo' },
    { name: 'Zion AI Smart Moorland', href: '/zion-ai-smart-moorland', icon: Sun, description: 'Moorland AI', price: '$59/mo' },
    { name: 'Zion AI Smart Grassland', href: '/zion-ai-smart-grassland', icon: Wheat, description: 'Grassland AI', price: '$49/mo' },
    { name: 'Zion AI Smart Meadow', href: '/zion-ai-smart-meadow', icon: Wheat, description: 'Meadow AI', price: '$39/mo' },
    { name: 'Zion AI Smart Pasture', href: '/zion-ai-smart-pasture', icon: Wheat, description: 'Pasture AI', price: '$29/mo' },
    { name: 'Zion AI Smart Field', href: '/zion-ai-smart-field', icon: Wheat, description: 'Field AI', price: '$19/mo' },
    { name: 'Zion AI Smart Farmland', href: '/zion-ai-smart-farmland', icon: Wheat, description: 'Farmland AI', price: '$9/mo' }
  ];

  const microSaasServices2 = [
    { name: 'AI Analytics Dashboard', href: '/ai-analytics-dashboard', icon: BarChart, description: 'Real-time BI & Analytics' },
    { name: 'AI Chatbot Builder', href: '/ai-chatbot-builder', icon: Brain, description: 'No-code Chatbot Platform' },
    { name: 'AI Email Marketing', href: '/ai-email-marketing', icon: Mail, description: 'Automated Email Campaigns' },
    { name: 'Social Media AI', href: '/social-media-ai', icon: Globe, description: 'AI Social Management' },
    { name: 'AI Project Management', href: '/ai-project-management', icon: Settings, description: 'Smart Project Tracking' },
    { name: 'AI SEO Optimizer', href: '/ai-seo-optimizer', icon: Target, description: 'Automated SEO Tools' },
    { name: 'AI Sales CRM', href: '/ai-sales-crm', icon: TrendingUp, description: 'Intelligent CRM System' },
    { name: 'AI Design Studio', href: '/ai-design-studio', icon: Code, description: 'AI Design Tools' },
    { name: 'AI Inventory Manager', href: '/ai-inventory-manager', icon: Database, description: 'Smart Inventory Tracking' },
    { name: 'AI Invoice Generator', href: '/ai-invoice-generator', icon: Users, description: 'Automated Invoicing' },
    { name: 'AI Document Processor', href: '/ai-document-processor', icon: Zap, description: 'Document AI Processing' },
    { name: 'AI Lead Scoring', href: '/ai-lead-scoring', icon: Cpu, description: 'Intelligent Lead Qualification' }
  ];

  const emergingTech = [
    { name: '5G Implementation', href: '/5g-implementation', icon: Zap, description: 'Next-gen connectivity', price: '$2,500/mo' },
    { name: 'AI 3D Generation', href: '/ai-3d-generation', icon: Box, description: '3D content creation', price: '$499/mo' },
    { name: 'AI Holographic Workspace', href: '/ai-holographic-workspace', icon: Monitor, description: 'Immersive work environments', price: '$1,299/mo' },
    { name: 'AI Autonomous Systems', href: '/ai-autonomous-systems', icon: Cpu, description: 'Self-operating systems', price: '$999/mo' },
    { name: 'AI Blockchain Solutions', href: '/ai-blockchain-solutions', icon: LinkIcon, description: 'Decentralized AI', price: '$599/mo' },
    { name: 'AI Edge Computing', href: '/ai-edge-computing', icon: Server, description: 'Distributed processing', price: '$599/mo' },
    { name: 'Quantum Computing', href: '/quantum-computing', icon: Cpu, description: 'Quantum processing power', price: '$5,000/mo' },
    { name: 'AR/VR Solutions', href: '/ar-vr-solutions', icon: Monitor, description: 'Immersive experiences', price: '$1,500/mo' },
    { name: 'IoT Integration', href: '/iot-integration', icon: Wifi, description: 'Internet of Things', price: '$800/mo' },
    { name: 'Machine Learning', href: '/machine-learning', icon: Brain, description: 'Advanced ML algorithms', price: '$1,200/mo' }
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
                          {service.price && (
                            <div className="text-xs text-cyan-400 font-medium mt-1">{service.price}</div>
                          )}
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
                          {service.price && (
                            <div className="text-xs text-purple-400 font-medium mt-1">{service.price}</div>
                          )}
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
                          {service.price && (
                            <div className="text-xs text-green-400 font-medium mt-1">{service.price}</div>
                          )}
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
                          {service.price && (
                            <div className="text-xs text-orange-400 font-medium mt-1">{service.price}</div>
                          )}
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
