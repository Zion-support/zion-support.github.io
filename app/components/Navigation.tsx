<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
  Network,
  FileText,
  Clock
} from 'lucide-react';
import FuturisticButton from './FuturisticButton';
=======
import React, { useState, useCallback, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ChevronDown, Zap, Cloud, Shield, Database, Code, Brain, BarChart3, Star, ArrowRight, Sidebar as SidebarIcon } from 'lucide-react'
=======
import React, { useState, useCallback, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Globe, 
  Users, 
  Code, 
  Mail, 
  Brain, 
  Shield, 
  Zap,
  ChevronDown
} from 'lucide-react';

interface NavigationItem {
  name: string;
  path: string;
  icon: React.ReactNode;
  children?: NavigationItem[];
}
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1091

>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f9e
interface NavigationProps {
  onSidebarToggle: () => void;
}
<<<<<<< HEAD
import { Menu, X } from 'lucide-react';
=======
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Zap, Cloud, Globe, Code, Smartphone, Brain, Wifi, Shield, Database, Users, BarChart, Settings, Mail, MessageSquare, FileText, Phone, MapPin, ArrowRight, Sparkles, Cpu, Target, Lock, TrendingUp, Calendar, CheckSquare, MessageCircle, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Server, Package, Mic, Workflow, Eye, CheckCircle, ShoppingCart } from 'lucide-react';
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0e37
=======
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ChevronDown, Zap, Cloud, Shield, Globe, Database, Code, Smartphone } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen)
  }
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f49

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
<<<<<<< HEAD
  const [isOpen, setIsOpen] = useState(false);

const Navigation: React.FC<NavigationProps> = ({ onSidebarToggle }) => {
    setIsMenuOpen(prev => !prev);
  }, []);

  const toggleDropdown = useCallback((dropdown: string) => {
    setActiveDropdown(prev => prev === dropdown ? null : dropdown);
  }, []);

import { 
  ChevronDown, 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X, 
  Brain, 
  Cloud, 
  Shield, 
  Code, 
  BarChart, 
  Users, 
  Zap, 
  ArrowRight, 
  Sparkles, 
  Cpu, 
  Target, 
  Globe, 
<<<<<<< HEAD
<<<<<<< HEAD
  Database, 
  Smartphone, 
  Lock, 
  TrendingUp, 
  Settings, 
  Calendar, 
  CheckSquare, 
  FileText, 
  Search,
  Palette
=======
  ChevronDown,
  ChevronUp
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0fdb
=======
  ChevronDown,
  ChevronUp
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0fe6
} from 'lucide-react';
  const [microSaasOpen, setMicroSaasOpen] = useState(false);
  const handleResize = () => {
    if (window.innerWidth >= 1024) {
      setIsOpen(false);
      icon: <Database className="w-4 h-4" />,
      description: 'Comprehensive IT infrastructure services'
  };

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };
=======
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aiServicesOpen, setAiServicesOpen] = useState(false);
  const [itServicesOpen, setItServicesOpen] = useState(false);
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0e37
=======
import { ChevronDown, Menu, X } from 'lucide-react';
=======
import React, { useState, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Brain, Zap } from "lucide-react";
interface NavigationProps {
  onSidebarToggle?: () => void;
}
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0ff3

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
<<<<<<< HEAD
  const [servicesOpen, setServicesOpen] = useState(false);
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f74
=======
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isAIServicesOpen, setIsAIServicesOpen] = useState(false);
  const [isITServicesOpen, setIsITServicesOpen] = useState(false);
  const [isMicroSaasOpen, setIsMicroSaasOpen] = useState(false);
  const [is5GServicesOpen, setIs5GServicesOpen] = useState(false);
  const location = useLocation();
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0ff3

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
<<<<<<< HEAD
    setMicroSaasOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  const aiServices = [
<<<<<<< HEAD
    { name: 'AI Solutions', href: '/ai-services', icon: Brain, description: 'Core AI Solutions' },
    { name: 'AI Marketing Automation', href: '/ai-marketing', icon: Target, description: 'AI-Powered Marketing' },
    { name: 'AI Customer Support', href: '/ai-customer-support', icon: Users, description: 'AI Support Systems' },
    { name: 'AI Data Analytics', href: '/ai-data-analytics', icon: BarChart, description: 'Data Intelligence' },
    { name: 'AI Content Generation', href: '/ai-content-generation', icon: Code, description: 'Content Creation' },
    { name: 'AI Healthcare Solutions', href: '/ai-healthcare', icon: Shield, description: 'Medical AI Solutions' },
    { name: 'AI Financial Services', href: '/ai-fintech', icon: TrendingUp, description: 'Financial AI' },
    { name: 'AI E-commerce Solutions', href: '/ai-ecommerce-solutions', icon: Globe, description: 'E-commerce AI' },
    { name: 'AI Cybersecurity', href: '/ai-cybersecurity', icon: Lock, description: 'Security AI' },
    { name: 'AI Mobile Apps', href: '/ai-mobile-app-development', icon: Smartphone, description: 'Mobile AI' },
    { name: 'AI Sales Automation', href: '/ai-sales-automation', icon: Target, description: 'Sales AI' },
    { name: 'AI Workflow Automation', href: '/ai-workflow-automation', icon: Zap, description: 'Workflow AI' },
    { name: 'AI Data Visualization', href: '/ai-data-visualization', icon: BarChart, description: 'Data Viz AI' },
    { name: 'AI Lead Generation', href: '/ai-lead-generation', icon: Target, description: 'Lead Gen AI' },
    { name: 'AI Document Processing', href: '/ai-document-processing', icon: Code, description: 'Document AI' },
    { name: 'AI Process Automation', href: '/ai-automation', icon: Zap, description: 'Process Automation' },
    { name: 'AI Voice Assistant', href: '/ai-voice-assistant', icon: Brain, description: 'Voice AI Platform' },
    { name: 'AI Predictive Maintenance', href: '/ai-predictive-maintenance', icon: Settings, description: 'Maintenance AI' },
    { name: 'AI Supply Chain', href: '/ai-supply-chain', icon: BarChart, description: 'Supply Chain AI' },
    { name: 'AI Quality Control', href: '/ai-quality-control', icon: Shield, description: 'Quality AI' },
    { name: 'AI Energy Management', href: '/ai-energy-management', icon: Zap, description: 'Energy AI' },
    { name: 'AI Legal Analysis', href: '/ai-legal-analysis', icon: FileText, description: 'Legal AI' },
    { name: 'AI Real Estate', href: '/ai-real-estate', icon: Globe, description: 'Real Estate AI' },
    { name: 'AI HR Assistant', href: '/ai-hr-assistant', icon: Users, description: 'HR AI' },
    { name: 'AI Insurance', href: '/ai-insurance', icon: Shield, description: 'Insurance AI' },
    { name: 'AI Education', href: '/ai-education', icon: Users, description: 'Educational AI' },
    { name: 'AI Transportation', href: '/ai-transportation', icon: Globe, description: 'Transportation AI' },
    { name: 'AI Environmental', href: '/ai-environmental', icon: Globe, description: 'Environmental AI' },
    { name: 'AI Retail', href: '/ai-retail', icon: Globe, description: 'Retail AI' },
    { name: 'AI Sports', href: '/ai-sports', icon: BarChart, description: 'Sports AI' },
    { name: 'AI Mental Health', href: '/ai-mental-health', icon: Users, description: 'Mental Health AI' }
  ];
  const microSaasServices = [
    { name: 'Micro SAAS Solutions', href: '/micro-saas', icon: Cpu, description: '50+ AI Tools' },
    { name: 'AI Analytics Dashboard', href: '/ai-analytics-dashboard', icon: BarChart, description: 'Business Intelligence' },
    { name: 'AI-Powered CRM', href: '/ai-crm', icon: Users, description: 'Customer Management' },
    { name: 'AI Content Studio', href: '/ai-content-studio', icon: Code, description: 'Content Creation' },
    { name: 'AI Chatbot Builder', href: '/ai-chatbot-builder', icon: Users, description: 'Chatbot Platform' },
    { name: 'AI Email Marketing', href: '/ai-email-marketing', icon: Mail, description: 'Email Marketing' },
    { name: 'AI Mobile App Builder', href: '/ai-mobile-app-builder', icon: Smartphone, description: 'Mobile Development' },
    { name: 'AI SEO Optimizer', href: '/ai-seo-optimizer', icon: Search, description: 'SEO Tools' },
    { name: 'AI Invoice Generator', href: '/ai-invoice-generator', icon: BarChart, description: 'Invoice Management' },
    { name: 'AI Writing Assistant', href: '/ai-writing-assistant', icon: Code, description: 'Writing Tools' },
    { name: 'Smart Analytics', href: '/smart-analytics', icon: BarChart, description: 'Analytics Platform' },
    { name: 'AI Scheduler', href: '/ai-scheduler', icon: Calendar, description: 'Scheduling Tools' },
    { name: 'Expense Tracker', href: '/expense-tracker', icon: BarChart, description: 'Expense Management' },
    { name: 'Task Manager Pro', href: '/task-manager-pro', icon: CheckSquare, description: 'Task Management' },
    { name: 'CRM Lite', href: '/crm-lite', icon: Users, description: 'Lightweight CRM' },
    { name: 'Email Optimizer', href: '/email-optimizer', icon: Mail, description: 'Email Optimization' },
    { name: 'Social Media Manager', href: '/social-media-manager', icon: Globe, description: 'Social Media Tools' },
    { name: 'AI Design Studio', href: '/ai-design-studio', icon: Sparkles, description: 'Design Tools' },
    { name: 'Landing Page Builder', href: '/landing-page-builder', icon: Globe, description: 'Page Builder' },
    { name: 'SEO Optimizer', href: '/seo-optimizer', icon: Search, description: 'SEO Tools' },
    { name: 'Ad Campaign Manager', href: '/ad-management', icon: BarChart, description: 'Ad Management' },
    { name: 'Code Assistant', href: '/code-assistant', icon: Code, description: 'Development Tools' },
    { name: 'API Builder', href: '/api-builder', icon: Settings, description: 'API Development' },
    { name: 'Bug Tracker Pro', href: '/bug-tracker-pro', icon: Shield, description: 'Bug Tracking' },
    { name: 'Doc Generator', href: '/doc-generator', icon: FileText, description: 'Documentation' },
    { name: 'AI Recruitment Assistant', href: '/ai-recruitment-assistant', icon: Users, description: 'HR & Recruitment' },
    { name: 'Medical Records Manager', href: '/medical-records-manager', icon: Shield, description: 'Healthcare' },
    { name: 'AI Accounting Assistant', href: '/ai-accounting-assistant', icon: BarChart, description: 'Finance & Accounting' },
    { name: 'Property Management AI', href: '/property-management-ai', icon: BarChart, description: 'Real Estate' },
    { name: 'Legal Document Manager', href: '/legal-document-manager', icon: Shield, description: 'Legal & Compliance' },
    { name: 'Online Learning Platform', href: '/online-learning-platform', icon: Users, description: 'Education' },
    { name: 'Supply Chain Optimizer', href: '/supply-chain-optimizer', icon: BarChart, description: 'Manufacturing' }
  ];
        { name: 'AI Services', path: '/ai-services', description: 'Comprehensive AI solutions' },
        { name: 'AI Marketing', path: '/ai-marketing', description: 'AI-powered marketing automation' },
        { name: 'AI Automation', path: '/ai-automation', description: 'Intelligent process automation' },
        { name: 'AI Healthcare', path: '/ai-healthcare', description: 'Medical AI solutions' },
        { name: 'AI Fintech', path: '/ai-fintech', description: 'Financial AI applications' },
        { name: 'AI Content Generation', path: '/ai-content-generation', description: 'AI content creation' },
        { name: 'AI Data Analytics', path: '/ai-data-analytics', description: 'Advanced data insights' },
        { name: 'AI Cybersecurity', path: '/ai-cybersecurity', description: 'AI security solutions' },
        { name: 'AI Workflow Automation', path: '/ai-workflow-automation', description: 'Workflow optimization' },
        { name: 'AI Mobile App Development', path: '/ai-mobile-app-development', description: 'Mobile AI applications' },
        { name: 'AI E-commerce Solutions', path: '/ai-ecommerce-solutions', description: 'E-commerce AI platforms' },
        { name: 'AI Customer Support', path: '/ai-customer-support', description: 'AI-powered customer service' },
        { name: 'AI Sales Automation', path: '/ai-sales-automation', description: 'Intelligent sales processes' },
        { name: 'AI Data Visualization', path: '/ai-data-visualization', description: 'Advanced data visualization' },
        { name: 'AI Lead Generation', path: '/ai-lead-generation', description: 'AI-powered lead generation' },
        { name: 'AI Document Processing', path: '/ai-document-processing', description: 'AI document processing' },
        { name: 'AI Content Studio', path: '/ai-content-studio', description: 'Complete content creation suite' },
        { name: 'AI Analytics Dashboard', path: '/ai-analytics', description: 'Real-time business intelligence' },
        { name: 'AI Chatbot Builder', path: '/ai-chatbot-builder', description: 'No-code chatbot creation' },
        { name: 'AI Machine Learning Platform', path: '/ai-ml-platform', description: 'Complete ML platform' },
        { name: 'AI Computer Vision', path: '/ai-computer-vision', description: 'Advanced computer vision' },
        { name: 'AI Natural Language Processing', path: '/ai-nlp', description: 'Advanced NLP solutions' },
        { name: 'AI Robotics Platform', path: '/ai-robotics', description: 'Intelligent robotics' }
        { name: 'IT Services', path: '/it-services', description: 'Comprehensive IT support' },
        { name: 'IT Infrastructure', path: '/it-infrastructure', description: 'Enterprise infrastructure' },
        { name: 'Cybersecurity', path: '/cybersecurity', description: 'Security solutions' },
        { name: 'DevOps & CI/CD', path: '/devops', description: 'Development operations' },
        { name: 'Cloud Services', path: '/cloud-services', description: 'Cloud solutions' },
        { name: 'Database Management', path: '/database-management', description: 'Data management' },
        { name: 'IT Consulting', path: '/it-consulting', description: 'Strategic IT planning' },
        { name: 'Managed IT Services', path: '/managed-it', description: '24/7 IT management' },
        { name: 'Cloud Migration', path: '/cloud-migration', description: 'Cloud migration & setup' },
        { name: 'Cybersecurity Suite', path: '/cybersecurity-suite', description: 'Security solutions' },
        { name: 'Network Infrastructure', path: '/network-infrastructure', description: 'Network setup & management' },
        { name: 'Data Backup & Recovery', path: '/data-backup', description: 'Data protection' },
        { name: 'IT Support & Helpdesk', path: '/it-support', description: 'Technical support' },
        { name: 'IT Training & Certification', path: '/it-training', description: 'Staff development' },
        { name: 'Global IT Support', path: '/global-it-support', description: 'Worldwide support' }
        { name: 'Micro SAAS Solutions', path: '/micro-saas', description: '50+ AI Tools' },
        { name: 'Business Apps', path: '/business-apps', description: 'Business Applications' },
        { name: 'Productivity Tools', path: '/productivity', description: 'Productivity Suite' },
        { name: 'Marketing Tools', path: '/marketing-tools', description: 'Marketing Suite' },
        { name: 'Analytics Dashboard', path: '/analytics', description: 'Business Intelligence' },
        { name: 'CRM Solutions', path: '/crm', description: 'Customer Management' },
        { name: 'Project Management', path: '/project-management', description: 'Project Tools' },
        { name: 'Communication Tools', path: '/communication', description: 'Team Collaboration' }
      ]
    },
    {
      title: 'Emerging Tech',
      icon: Sparkles,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
      hoverColor: 'hover:bg-indigo-100',
      services: [
        { name: 'Quantum Computing', path: '/quantum-computing', description: 'Quantum Solutions' },
        { name: 'Robotics', path: '/robotics', description: 'Intelligent Robotics' },
        { name: 'IoT & Edge Computing', path: '/iot-edge-computing', description: 'Connected Devices' },
        { name: 'Blockchain & Web3', path: '/blockchain-web3', description: 'Decentralized Solutions' },
        { name: 'Business Intelligence', path: '/business-intelligence', description: 'Data Insights' },
        { name: 'Autonomous Systems', path: '/autonomous-systems', description: 'Self-managing systems' }
  ];
export default function Navigation() {
=======
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
<<<<<<< HEAD

<<<<<<< HEAD
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
    { name: 'Zion AI Document AI', href: '/zion-ai-document-ai', icon: FileText, description: 'Document processing' },
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
  ]
=======
  const technologies = [
    { name: 'Quantum Computing', url: '/quantum-computing' },
    { name: 'Autonomous Systems', url: '/autonomous-systems' },
    { name: 'Business Intelligence', url: '/business-intelligence' },
    { name: 'Blockchain & Web3', url: '/blockchain-web3' },
    { name: 'IoT & Edge Computing', url: '/iot-edge-computing' },
  ];
=======
  const toggleAIServices = useCallback(() => {
    setIsAIServicesOpen(!isAIServicesOpen);
  }, [isAIServicesOpen]);

  const toggleITServices = useCallback(() => {
    setIsITServicesOpen(!isITServicesOpen);
  }, [isITServicesOpen]);

  const toggleMicroSaas = useCallback(() => {
    setIsMicroSaasOpen(!isMicroSaasOpen);
  }, [isMicroSaasOpen]);

  const toggle5GServices = useCallback(() => {
    setIs5GServicesOpen(!is5GServicesOpen);
  }, [is5GServicesOpen]);

  const isActive = (path: string) => location.pathname === path;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0ff3

  const company = [
    { name: 'About Us', url: '/about' },
    { name: 'Our Team', url: '/team' },
    { name: 'Case Studies', url: '/case-studies' },
    { name: 'Enterprise Solutions', url: '/enterprise' },
    { name: 'Contact Us', url: '/contact' },
  ];

  const resources = [
    { name: 'Blog', url: '/blog' },
    { name: 'Technical Guides', url: '/guides' },
    { name: 'Privacy Policy', url: '/privacy' },
    { name: 'Terms of Service', url: '/terms' },
    { name: 'Sitemap', url: '/sitemap' },
  ];
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f74

>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0d10
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f49
  return (
<<<<<<< HEAD
    <nav className="bg-white shadow-lg">
=======
'use client';
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { 
      name: 'Services', 
      href: '#',
      dropdown: [
        { name: 'AI Services', href: '/ai-services' },
        { name: 'IT Services', href: '/it-services' },
        { name: 'Micro SaaS', href: '/micro-saas' },
      ]
    },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Blog', href: '/blog' },
    { name: 'Team', href: '/team' },
    { name: 'Contact', href: '/contact' },
=======

const Navigation: React.FC<NavigationProps> = ({ onSidebarToggle }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const navigationItems: NavigationItem[] = [
    {
      name: 'Home',
      path: '/',
      icon: <Globe className="w-4 h-4" />
    },
    {
      name: 'AI Services',
      path: '/ai-services',
      icon: <Brain className="w-4 h-4" />,
      children: [
        { name: 'AI Analytics', path: '/ai-analytics', icon: <Code className="w-4 h-4" /> },
        { name: 'AI Content Generation', path: '/ai-content-generation', icon: <Code className="w-4 h-4" /> },
        { name: 'AI Customer Support', path: '/ai-customer-support', icon: <Users className="w-4 h-4" /> },
        { name: 'AI Cybersecurity', path: '/ai-cybersecurity', icon: <Shield className="w-4 h-4" /> },
        { name: 'AI Data Analytics', path: '/ai-data-analytics', icon: <Code className="w-4 h-4" /> },
        { name: 'AI Document Processing', path: '/ai-document-processing', icon: <Code className="w-4 h-4" /> },
        { name: 'AI Marketing Automation', path: '/ai-marketing-automation', icon: <Code className="w-4 h-4" /> },
        { name: 'AI Predictive Analytics', path: '/ai-predictive-analytics', icon: <Code className="w-4 h-4" /> },
        { name: 'AI Voice Assistant', path: '/ai-voice-assistant', icon: <Code className="w-4 h-4" /> },
        { name: 'AI Workflow Automation', path: '/ai-workflow-automation', icon: <Code className="w-4 h-4" /> }
      ]
    },
    {
      name: 'IT Services',
      path: '/services',
      icon: <Shield className="w-4 h-4" />,
      children: [
        { name: 'Cloud Migration', path: '/cloud-migration', icon: <Globe className="w-4 h-4" /> },
        { name: 'DevOps Services', path: '/devops-services', icon: <Code className="w-4 h-4" /> },
        { name: 'IT Consulting', path: '/it-consulting', icon: <Users className="w-4 h-4" /> },
        { name: 'Network Security', path: '/network-security', icon: <Shield className="w-4 h-4" /> },
        { name: 'Software Development', path: '/software-development', icon: <Code className="w-4 h-4" /> },
        { name: 'System Integration', path: '/system-integration', icon: <Code className="w-4 h-4" /> },
        { name: 'Web Development', path: '/web-development', icon: <Code className="w-4 h-4" /> }
      ]
    },
    {
      name: 'Micro SAAS',
      path: '/micro-saas',
      icon: <Zap className="w-4 h-4" />
    },
    {
      name: '5G Solutions',
      path: '/5g-solutions',
      icon: <Globe className="w-4 h-4" />
    },
    {
      name: 'About',
      path: '/about',
      icon: <Users className="w-4 h-4" />
    },
    {
      name: 'Contact',
      path: '/contact',
      icon: <Mail className="w-4 h-4" />
    }
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1091
  ];

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 10);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
<<<<<<< HEAD
      isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1009
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
<<<<<<< HEAD
          <Link to="/" className="text-xl font-bold text-gray-800">
            Zion Tech Group
          </Link>
          <div className="space-x-6">
            <Link to="/about" className="text-gray-600 hover:text-gray-800">
              About
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
            <Link to="/contact" className="text-gray-600 hover:text-gray-800">
              Contact
            </Link>
<<<<<<< HEAD
          <div className="hidden md:flex items-center space-x-8">
                  className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(item.path)
                      ? 'text-cyan-400 bg-cyan-500/10'
                      : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10'
                  }`}
                    <ChevronDown className="w-4 h-4" />
                  )}
                </Link>
=======
          </div>

          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-1">
              <Link to="/" className="text-white hover:text-purple-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-white hover:text-purple-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                About
              </Link>
              
=======
    <nav className="relative bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 border-b border-purple-500/20 shadow-2xl">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-blue-600/10 to-purple-600/10 animate-pulse"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
<<<<<<< HEAD
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-all duration-300">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg blur opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {/* Home */}
              <Link
                to="/"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  isActive('/') 
                    ? 'bg-purple-600/20 text-purple-200 border border-purple-400/30' 
                    : 'text-gray-300 hover:text-white hover:bg-purple-600/10'
                }`}
              >
                Home
              </Link>

              {/* About */}
              <Link
                to="/about"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  isActive('/about') 
                    ? 'bg-purple-600/20 text-purple-200 border border-purple-400/30' 
                    : 'text-gray-300 hover:text-white hover:bg-purple-600/10'
                }`}
              >
                About
              </Link>

>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0ff3
              {/* Services Dropdown */}
              <div className="relative">
                <button
                  onClick={toggleServices}
<<<<<<< HEAD
                  className="text-white hover:text-purple-300 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
                >
                  Services
                  <ChevronDown className="w-4 h-4 ml-1" />
                </button>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f49
                
<<<<<<< HEAD
<<<<<<< HEAD
                {/* Services Dropdown */}
                {item.hasDropdown && (
                  <div className="absolute top-full left-0 mt-2 w-96 bg-slate-800/95 backdrop-blur-sm border border-cyan-500/20 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <div className="p-6">
                      <h3 className="text-white font-semibold mb-4 text-lg">Our Services</h3>
                      <div className="space-y-6">
                        {serviceDropdownItems.map((category, categoryIndex) => (
                          <div key={categoryIndex}>
                            <h4 className="text-cyan-400 font-medium mb-3 text-sm uppercase tracking-wide">
                              {category.category}
                            </h4>
                            <div className="space-y-2">
                              {category.items.map((service, serviceIndex) => (
                      <div className="mt-6 pt-4 border-t border-cyan-500/20">
                        <Link
                          to="/services"
                          className="block text-center text-cyan-400 hover:text-cyan-300 font-medium text-sm transition-colors"
=======
                  className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-purple-600/10 transition-all duration-300"
                >
                  Services
                  <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isServicesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-lg rounded-lg shadow-2xl border border-purple-500/20 z-50">
                    <div className="py-2">
                      {/* AI Services */}
                      <div className="px-4 py-2">
                        <button
                          onClick={toggleAIServices}
                          className="flex items-center w-full text-left text-sm font-medium text-purple-200 hover:text-white transition-colors duration-200"
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0ff3
                        >
                          <Brain className="w-4 h-4 mr-2" />
                          AI Services
                          <ChevronDown className={`ml-auto h-4 w-4 transition-transform duration-300 ${isAIServicesOpen ? 'rotate-180' : ''}`} />
                        </button>
                        {isAIServicesOpen && (
                          <div className="ml-6 mt-2 space-y-1">
                            <Link to="/ai-analytics" className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-purple-600/20 rounded transition-colors duration-200">
                              AI Analytics Dashboard
                            </Link>
                            <Link to="/ai-content-generation" className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-purple-600/20 rounded transition-colors duration-200">
                              AI Content Generation
                            </Link>
                            <Link to="/ai-customer-support" className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-purple-600/20 rounded transition-colors duration-200">
                              AI Customer Support
                            </Link>
                            <Link to="/ai-cybersecurity" className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-purple-600/20 rounded transition-colors duration-200">
                              AI Cybersecurity
                            </Link>
                            <Link to="/ai-data-analytics" className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-purple-600/20 rounded transition-colors duration-200">
                              AI Data Analytics
                            </Link>
                            <Link to="/ai-workflow-automation" className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-purple-600/20 rounded transition-colors duration-200">
                              AI Workflow Automation
                            </Link>
                          </div>
                        )}
                      </div>

                      {/* IT Services */}
                      <div className="px-4 py-2">
                        <button
                          onClick={toggleITServices}
                          className="flex items-center w-full text-left text-sm font-medium text-purple-200 hover:text-white transition-colors duration-200"
                        >
                          <Settings className="w-4 h-4 mr-2" />
                          IT Services
                          <ChevronDown className={`ml-auto h-4 w-4 transition-transform duration-300 ${isITServicesOpen ? 'rotate-180' : ''}`} />
                        </button>
                        {isITServicesOpen && (
                          <div className="ml-6 mt-2 space-y-1">
                            <Link to="/cloud-infrastructure" className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-purple-600/20 rounded transition-colors duration-200">
                              Cloud Infrastructure
                            </Link>
                            <Link to="/cybersecurity" className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-purple-600/20 rounded transition-colors duration-200">
                              Cybersecurity Solutions
                            </Link>
                            <Link to="/data-management" className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-purple-600/20 rounded transition-colors duration-200">
                              Data Management
                            </Link>
                            <Link to="/network-solutions" className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-purple-600/20 rounded transition-colors duration-200">
                              Network Solutions
                            </Link>
                            <Link to="/it-consulting" className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-purple-600/20 rounded transition-colors duration-200">
                              IT Consulting
                            </Link>
                            <Link to="/system-integration" className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-purple-600/20 rounded transition-colors duration-200">
                              System Integration
                            </Link>
                          </div>
                        )}
                      </div>

                      {/* Micro SAAS */}
                      <div className="px-4 py-2">
                        <button
                          onClick={toggleMicroSaas}
                          className="flex items-center w-full text-left text-sm font-medium text-purple-200 hover:text-white transition-colors duration-200"
                        >
                          <Package className="w-4 h-4 mr-2" />
                          Micro SAAS
                          <ChevronDown className={`ml-auto h-4 w-4 transition-transform duration-300 ${isMicroSaasOpen ? 'rotate-180' : ''}`} />
                        </button>
                        {isMicroSaasOpen && (
                          <div className="ml-6 mt-2 space-y-1">
                            <Link to="/project-management-tool" className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-purple-600/20 rounded transition-colors duration-200">
                              Project Management Tool
                            </Link>
                            <Link to="/team-collaboration" className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-purple-600/20 rounded transition-colors duration-200">
                              Team Collaboration
                            </Link>
                            <Link to="/analytics-dashboard" className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-purple-600/20 rounded transition-colors duration-200">
                              Analytics Dashboard
                            </Link>
                            <Link to="/customer-relationship" className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-purple-600/20 rounded transition-colors duration-200">
                              Customer Relationship
                            </Link>
                            <Link to="/inventory-management" className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-purple-600/20 rounded transition-colors duration-200">
                              Inventory Management
                            </Link>
                            <Link to="/financial-tracking" className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-purple-600/20 rounded transition-colors duration-200">
                              Financial Tracking
                            </Link>
                          </div>
                        )}
                      </div>

                      {/* 5G Solutions */}
                      <div className="px-4 py-2">
                        <button
                          onClick={toggle5GServices}
                          className="flex items-center w-full text-left text-sm font-medium text-purple-200 hover:text-white transition-colors duration-200"
                        >
                          <Wifi className="w-4 h-4 mr-2" />
                          5G Solutions
                          <ChevronDown className={`ml-auto h-4 w-4 transition-transform duration-300 ${is5GServicesOpen ? 'rotate-180' : ''}`} />
                        </button>
                        {is5GServicesOpen && (
                          <div className="ml-6 mt-2 space-y-1">
                            <Link to="/5g-network-infrastructure" className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-purple-600/20 rounded transition-colors duration-200">
                              5G Network Infrastructure
                            </Link>
                            <Link to="/5g-iot-solutions" className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-purple-600/20 rounded transition-colors duration-200">
                              5G IoT Solutions
                            </Link>
                            <Link to="/5g-smart-city" className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-purple-600/20 rounded transition-colors duration-200">
                              5G Smart City
                            </Link>
                            <Link to="/5g-edge-computing" className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-purple-600/20 rounded transition-colors duration-200">
                              5G Edge Computing
                            </Link>
                            <Link to="/5g-mobile-apps" className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-purple-600/20 rounded transition-colors duration-200">
                              5G Mobile Applications
                            </Link>
                            <Link to="/5g-data-analytics" className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-purple-600/20 rounded transition-colors duration-200">
                              5G Data Analytics
                            </Link>
                          </div>
                        )}
                      </div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link to="/" className="text-white hover:text-purple-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-white hover:text-purple-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              About
            </Link>
            
            {/* Services Dropdown */}
=======
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-cyan-400 neon-text flex items-center">
            <span className="text-3xl mr-2">⚡</span>
            Zion Tech Group
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center font-medium"
                aria-expanded={servicesOpen}
                aria-haspopup="true"
              >
                Services
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-96 bg-white rounded-lg shadow-xl border py-4 z-50">
                  <div className="grid grid-cols-2 gap-4 px-4">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Core Services</h3>
                      {services.slice(0, 8).map((service, index) => (
=======
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0fe6
                {/* Dropdown Menu */}
                {item.hasDropdown && item.dropdownItems && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-slate-800/95 backdrop-blur-sm border border-cyan-500/20 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-2">
                      {item.dropdownItems.map((dropdownItem, index) => (
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0fdb
                        <Link
                          key={index}
                          to={service.url}
                          className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors"
                          onClick={() => setServicesOpen(false)}
                        >
                          {service.name}
                        </Link>
                      ))}
<<<<<<< HEAD
<<<<<<< HEAD
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Additional Services</h3>
                      {services.slice(8).map((service, index) => (
                        <Link
                          key={index}
                          to={service.url}
                          className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors"
                          onClick={() => setServicesOpen(false)}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Technologies Dropdown */}
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f74
            <div className="relative">
              <button
                onClick={toggleServices}
                className="text-white hover:text-purple-300 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
              >
                Services
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-lg rounded-lg shadow-lg border border-white/20 py-2 z-50">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      to={service.href}
                      className="flex items-center px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      <div className="flex-shrink-0 text-purple-600 mr-3">
                        {service.icon}
                      </div>
                      <div>
                        <div className="font-medium">{service.title}</div>
                        <div className="text-sm text-gray-500">{service.description}</div>
                      </div>
                    </Link>
                  ))}
=======

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsOpen(!isOpen);
  const closeMobileMenu = () => setIsOpen(false);

  const aiServices = [
    { name: 'AI Chatbots', url: '/ai-chatbot-builder', icon: MessageSquare },
    { name: 'AI Content Generation', url: '/ai-content-generation', icon: FileText },
    { name: 'AI Analytics', url: '/ai-data-analytics', icon: BarChart },
    { name: 'AI Automation', url: '/ai-automation', icon: Workflow },
    { name: 'AI Voice Assistant', url: '/ai-voice-assistant', icon: Mic },
    { name: 'AI Computer Vision', url: '/ai-computer-vision', icon: Eye }
  ];

  const itServices = [
    { name: 'Cloud Services', url: '/cloud-services', icon: Cloud },
    { name: 'Cybersecurity', url: '/cybersecurity-solutions', icon: Shield },
    { name: 'Web Development', url: '/web-development', icon: Code },
    { name: 'Mobile Development', url: '/mobile-development', icon: Smartphone },
    { name: 'DevOps & CI/CD', url: '/devops-cicd', icon: Settings },
    { name: 'Data Analytics', url: '/data-analytics', icon: Database }
  ];
=======
import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown, ArrowRight, Brain, Code, Cloud, Shield, Zap } from 'lucide-react'

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigationItems = [
    {
      name: 'Home',
      href: '/',
      icon: null
    },
    {
      name: 'AI Services',
      href: '/ai-services',
      icon: Brain,
      dropdown: [
        { name: 'AI Marketing', href: '/ai-marketing' },
        { name: 'AI Automation', href: '/ai-automation' },
        { name: 'AI Healthcare', href: '/ai-healthcare' },
        { name: 'AI Fintech', href: '/ai-fintech' },
        { name: 'AI Content Generation', href: '/ai-content-generation' },
        { name: 'AI Data Analytics', href: '/ai-data-analytics' },
        { name: 'AI Cybersecurity', href: '/ai-cybersecurity' },
        { name: 'AI Workflow Automation', href: '/ai-workflow-automation' },
        { name: 'AI Customer Support', href: '/ai-customer-support' },
        { name: 'AI Sales Automation', href: '/ai-sales-automation' },
        { name: 'AI Data Visualization', href: '/ai-data-visualization' }
      ]
    },
    {
      name: 'IT Services',
      href: '/it-services',
      icon: Code,
      dropdown: [
        { name: 'IT Infrastructure', href: '/it-infrastructure' },
        { name: 'IT Support', href: '/it-support' },
        { name: 'Cloud Infrastructure', href: '/cloud-infrastructure' },
        { name: 'Cybersecurity', href: '/cybersecurity' }
      ]
    },
    {
      name: 'Emerging Tech',
      href: '/blockchain',
      icon: Zap,
      dropdown: [
        { name: 'Blockchain Solutions', href: '/blockchain' },
        { name: 'Quantum Computing', href: '/quantum-computing' },
        { name: 'IoT & Edge Computing', href: '/iot-edge-computing' },
        { name: 'AR/VR Solutions', href: '/ar-vr-solutions' },
        { name: 'Autonomous Systems', href: '/autonomous-systems' }
      ]
    },
    {
      name: 'Micro SaaS',
      href: '/micro-saas',
      icon: Cloud,
      dropdown: [
        { name: 'AI Content Writer Pro', href: '/micro-saas/ai-content-writer-pro' }
      ]
    },
    {
      name: 'About',
      href: '/about',
      icon: null
    },
    {
      name: 'Contact',
      href: '/contact',
      icon: null
    }
  ]

  const isActive = (href: string) => {
    if (href === '/') {
      return location.pathname === '/'
    }
    return location.pathname.startsWith(href)
  }
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f1c

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
<<<<<<< HEAD
        ? 'bg-slate-900/95 backdrop-blur-md border-b border-gray-700/50' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
=======
        ? 'bg-slate-900/95 backdrop-blur-md border-b border-white/10' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Zap className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f1c
              Zion Tech Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
<<<<<<< HEAD
            <Link 
              to="/" 
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 font-medium"
            >
              Home
            </Link>
            
            <Link 
              to="/about" 
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 font-medium"
            >
              About
            </Link>

            {/* AI Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-200 font-medium">
                <span>AI Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800/95 backdrop-blur-md border border-gray-700/50 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="p-4">
                  <div className="grid grid-cols-1 gap-2">
                    {aiServices.map((service, index) => (
                      <Link
                        key={index}
                        to={service.url}
                        className="flex items-center space-x-3 p-2 rounded-lg hover:bg-slate-700/50 transition-colors duration-200"
                      >
                        <service.icon className="w-4 h-4 text-cyan-400" />
                        <span className="text-gray-300 text-sm">{service.name}</span>
                      </Link>
                    ))}
                  </div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0e37
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
      isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-cyan-500/20' : 'bg-transparent'
          <Link href="/" className="flex items-center space-x-2 group" onClick={closeAllMenus}>
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white neon-text">Zion Tech Group</span>
          </Link>

            {/* AI Services Dropdown */}
            <div className="relative group">
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className={`font-medium transition-colors hover:text-purple-600 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            <Link 
              to="/about" 
              className={`font-medium transition-colors hover:text-purple-600 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
              onClick={closeAllMenus}
            >
              About
            </Link>

                className={`flex items-center space-x-1 font-medium transition-colors hover:text-purple-600 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
                    {serviceCategories.map((category, index) => (
                      <div key={index} className="space-y-3">
                        <div className="flex items-center space-x-2 mb-3">
                          <div className={`w-8 h-8 ${category.bgColor} rounded-lg flex items-center justify-center`}>
                            <category.icon className={`w-4 h-4 ${category.color}`} />
                          </div>
                          <h3 className="font-semibold text-gray-900 text-sm">{category.title}</h3>

            {/* IT Services Dropdown */}
            <div className="relative group">
<<<<<<< HEAD
                    ))}
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
                        <service.icon className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300" />
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
                        <service.icon className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300" />
                        <div>
                          <div className="text-white font-medium">{service.name}</div>
                          <div className="text-xs text-gray-400">{service.description}</div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 ml-auto" />
                      </Link>
              <div className="absolute top-full left-0 mt-2 w-screen max-w-6xl bg-white rounded-xl shadow-2xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {serviceCategories.map((category, index) => (
                      <div key={index} className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <div className={`w-10 h-10 ${category.bgColor} rounded-lg flex items-center justify-center`}>
                            <category.icon className={`w-5 h-5 ${category.color}`} />
                          </div>
                          <h3 className="text-lg font-semibold text-gray-900">{category.title}</h3>
                        </div>
                        <ul className="space-y-2">
                          {category.services.slice(0, 6).map((service, serviceIndex) => (
                            <li key={serviceIndex}>
                              <Link 
                                href={service.path}
                                className="block p-2 rounded-lg hover:bg-gray-50 transition-colors group"
                              >
                                <div className="font-medium text-gray-900 group-hover:text-purple-600 transition-colors">
                                  {service.name}
                                </div>
                                <div className="text-sm text-gray-500">
                                  {service.description}
                                </div>
                              </Link>
                            </li>
                          ))}
                        </ul>
                        {category.services.length > 6 && (
                          <Link 
                            href={`/${category.title.toLowerCase().replace(/\s+/g, '-')}`}
                            className="inline-flex items-center text-sm text-purple-600 hover:text-purple-700 font-medium"
                          >
                            View all {category.title}
                            <ArrowRight className="w-4 h-4 ml-1" />
                          </Link>
                        )}
                      </div>
            {/* Ad Management Link */}
            <Link href="/ad-management" className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              <Palette className="w-4 h-4" />
              <span>Ad Management</span>
            </Link>

            <Link href="/about" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              About
            </Link>
            <Link href="/services" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Services
            </Link>
            <Link href="/pricing" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Pricing
            </Link>
            <Link href="/blog" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
            >
          {/* Contact Info */}
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
=======
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  to={item.href}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-300 ${
                    isActive(item.href)
                      ? 'text-cyan-400 bg-cyan-400/10'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {item.icon && <item.icon className="h-4 w-4" />}
                  <span>{item.name}</span>
                  {item.dropdown && <ChevronDown className="h-4 w-4" />}
                </Link>

                {/* Dropdown Menu */}
                {item.dropdown && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800/95 backdrop-blur-md rounded-xl border border-white/10 shadow-2xl py-2 z-50">
                    {item.dropdown.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.name}
                        to={dropdownItem.href}
                        className="flex items-center justify-between px-4 py-3 text-gray-300 hover:text-white hover:bg-white/10 transition-colors duration-200"
                        onClick={() => setActiveDropdown(null)}
                      >
                        <span>{dropdownItem.name}</span>
                        <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                      </Link>
                    ))}
                  </div>
                )}
              </div>
<<<<<<< HEAD
            ))}
=======
              
              <Link to="/ai-services" className="text-white hover:text-purple-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                AI Services
              </Link>
              <Link to="/contact" className="text-white hover:text-purple-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Contact
              </Link>
            </div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f49
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/consultation"
              className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center space-x-2"
            >
              <span>Free Consultation</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f1c
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
<<<<<<< HEAD
<<<<<<< HEAD
              onClick={toggleMenu}
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
              aria-label="Toggle menu"
            {/* AI Services Dropdown */}
            <div className="relative">
              <button
                onClick={toggleAiServices}
                className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
              >
                <span>AI Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${aiServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {aiServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-96 bg-slate-800/95 backdrop-blur-md rounded-lg shadow-2xl border border-cyan-500/20 p-6">
                  <div className="grid grid-cols-2 gap-4">
                    {aiServices.slice(0, 12).map((service, index) => (
                      <Link
                        key={index}
                        to={service.href}
                        className="flex items-center space-x-3 p-2 rounded-lg hover:bg-slate-700/50 transition-colors duration-200"
                        onClick={closeAllMenus}
                      >
                        <service.icon className="w-4 h-4 text-cyan-400" />
                        <div>
                          <div className="text-white text-sm font-medium">{service.name}</div>
                          <div className="text-gray-400 text-xs">{service.description}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-700">
                      <span>View All AI Services</span>
                      <ArrowRight className="w-4 h-4" />
                  <div className="mt-4 pt-4 border-t border-gray-700">
            {/* Micro SaaS Dropdown */}
            <div className="relative">
              <button
                onClick={toggleMicroSaas}
                className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
              >
                <span>Micro SaaS</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${microSaasOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {microSaasOpen && (
                <div className="absolute top-full left-0 mt-2 w-96 bg-slate-800/95 backdrop-blur-md rounded-lg shadow-2xl border border-cyan-500/20 p-6">
                  <div className="grid grid-cols-2 gap-4">
                    {microSaasServices.slice(0, 12).map((service, index) => (
                      <Link
                        key={index}
                        to={service.href}
                        className="flex items-center space-x-3 p-2 rounded-lg hover:bg-slate-700/50 transition-colors duration-200"
                        onClick={closeAllMenus}
                      >
                        <service.icon className="w-4 h-4 text-pink-400" />
                        <div>
                          <div className="text-white text-sm font-medium">{service.name}</div>
                          <div className="text-gray-400 text-xs">{service.description}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-700">
                    <Link
                      to="/micro-saas"
                      className="flex items-center justify-center space-x-2 text-pink-400 hover:text-pink-300 transition-colors duration-200 font-medium"
                      onClick={closeAllMenus}
                    >
                      <span>View All Micro SaaS</span>
                      <ArrowRight className="w-4 h-4" />
            <Link 
              to="/pricing" 
              className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
            
            <Link 
              to="/contact" 
              className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
              onClick={closeAllMenus}
=======
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white transition-colors duration-200"
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f1c
            >
          <div className="lg:hidden flex items-center space-x-4">
            <button
              onClick={onSidebarToggle}
              className="text-white hover:text-cyan-400 transition-colors"
              aria-label="Toggle sidebar"
            >
              <SidebarIcon className="w-6 h-6" />
            </button>
            <button
              onClick={toggleMenu}
              className="p-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-md transition-all duration-300"
              aria-label="Toggle menu"
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
        {/* Mobile Menu */}
                className="block px-3 py-2 text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
              <Link
                to="/about"
                className="block px-3 py-2 text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
                onClick={closeAllMenus}
              >
                About
              </Link>

              <Link
                to="/ai-services"
                className="block px-3 py-2 text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
                onClick={closeAllMenus}
              >
                AI Services
              </Link>

              <Link
                to="/it-services"
                className="block px-3 py-2 text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
                onClick={closeAllMenus}
              >
                IT Services
              </Link>

              <Link
                to="/micro-saas"
                className="block px-3 py-2 text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
                onClick={closeAllMenus}
              >
                Micro SaaS
              </Link>

              <Link
                to="/pricing"
                className="block px-3 py-2 text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
                onClick={closeAllMenus}
              >
                Pricing
              </Link>
              
              <Link
                to="/contact"
                className="block px-3 py-2 text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
                onClick={closeAllMenus}
=======
              <button className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-200 font-medium">
                <span>IT Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800/95 backdrop-blur-md border border-gray-700/50 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="p-4">
                  <div className="grid grid-cols-1 gap-2">
                    {itServices.map((service, index) => (
                      <Link
                        key={index}
                        to={service.url}
                        className="flex items-center space-x-3 p-2 rounded-lg hover:bg-slate-700/50 transition-colors duration-200"
                      >
                        <service.icon className="w-4 h-4 text-purple-400" />
                        <span className="text-gray-300 text-sm">{service.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <Link 
              to="/contact" 
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 font-medium"
            >
=======
              onClick={toggleMenu}
              className="text-white hover:text-purple-300 focus:outline-none focus:text-purple-300"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/10 backdrop-blur-lg border-t border-white/20">
            <Link to="/" className="text-white hover:text-purple-300 block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link to="/about" className="text-white hover:text-purple-300 block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsOpen(false)}>
              About
            </Link>
            
            {/* Mobile Services Section */}
            <div className="px-3 py-2">
              <div className="text-white font-medium text-base mb-2">Services</div>
              <div className="pl-4 space-y-1">
                {services.map((service, index) => (
                  <Link
                    key={index}
                    to={service.path}
                    className="flex items-center text-gray-300 hover:text-purple-300 block px-3 py-2 rounded-md text-sm transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {service.icon}
                    <span className="ml-3">{service.name}</span>
                  </Link>
                ))}
              </div>
            </div>
            
            <Link to="/ai-services" className="text-white hover:text-purple-300 block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsOpen(false)}>
              AI Services
            </Link>
            <Link to="/contact" className="text-white hover:text-purple-300 block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsOpen(false)}>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f49
              Contact
            </Link>

            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
<<<<<<< HEAD
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200"
=======
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-300 hover:text-cyan-400 transition-colors"
            aria-expanded={isOpen}
            aria-label="Toggle mobile menu"
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f74
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
<<<<<<< HEAD
          <div className="lg:hidden absolute top-16 left-0 right-0 bg-slate-900/95 backdrop-blur-md border-b border-gray-700/50">
            <div className="px-4 py-6 space-y-4">
              <Link 
                to="/" 
                className="block text-gray-300 hover:text-cyan-400 transition-colors duration-200 font-medium"
                onClick={closeMobileMenu}
              >
                Home
              </Link>
              
              <Link 
                to="/about" 
                className="block text-gray-300 hover:text-cyan-400 transition-colors duration-200 font-medium"
                onClick={closeMobileMenu}
              >
                About
              </Link>

              {/* Mobile AI Services */}
              <div>
                <button 
                  onClick={() => setAiServicesOpen(!aiServicesOpen)}
                  className="flex items-center justify-between w-full text-gray-300 hover:text-cyan-400 transition-colors duration-200 font-medium"
                >
                  <span>AI Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${aiServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {aiServicesOpen && (
                  <div className="mt-2 ml-4 space-y-2">
                    {aiServices.map((service, index) => (
                      <Link
                        key={index}
                        to={service.url}
                        className="flex items-center space-x-3 text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm"
                        onClick={closeMobileMenu}
                      >
                        <service.icon className="w-4 h-4" />
                        <span>{service.name}</span>
                      </Link>
                    ))}
=======
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">Z</span>
            </div>
            <span className="text-white font-bold text-xl cyber-text">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <div className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors cursor-pointer">
                    <span>{item.name}</span>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`text-gray-300 hover:text-cyan-400 transition-colors ${
                      location.pathname === item.href ? 'text-cyan-400' : ''
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
                
                {item.dropdown && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-slate-800/95 backdrop-blur-md rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <div className="py-2">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          to={dropdownItem.href}
                          className="block px-4 py-2 text-gray-300 hover:text-cyan-400 hover:bg-slate-700/50 transition-colors"
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1009
                  </div>
                )}
              </div>
            ))}
          </div>

<<<<<<< HEAD
              {/* Mobile IT Services */}
              <div>
                <button 
                  onClick={() => setItServicesOpen(!itServicesOpen)}
                  className="flex items-center justify-between w-full text-gray-300 hover:text-cyan-400 transition-colors duration-200 font-medium"
                >
                  <span>IT Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${itServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {itServicesOpen && (
                  <div className="mt-2 ml-4 space-y-2">
                    {itServices.map((service, index) => (
                      <Link
                        key={index}
                        to={service.url}
                        className="flex items-center space-x-3 text-gray-400 hover:text-purple-400 transition-colors duration-200 text-sm"
                        onClick={closeMobileMenu}
                      >
                        <service.icon className="w-4 h-4" />
                        <span>{service.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link 
                to="/contact" 
                className="block text-gray-300 hover:text-cyan-400 transition-colors duration-200 font-medium"
                onClick={closeMobileMenu}
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0e37
              >
                Contact
              </Link>

<<<<<<< HEAD
              <Link
                to="/consultation"
                className="block px-3 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-medium text-center mt-4"
});

Navigation.displayName = 'Navigation';

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen) {
        closeAllMenus();
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-b border-cyan-500/20 sticky top-0 z-50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg shadow-cyan-500/25">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                  Zion Tech Group
                </span>
                <span className="text-xs text-cyan-400 font-medium tracking-wider">
                  AI & IT SOLUTIONS
                </span>
              </div>
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                to="/"
                className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
=======
              <Link 
                to="/contact" 
                className="block bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-3 rounded-lg font-semibold text-center hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
                onClick={closeMobileMenu}
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0e37
              >
                Get Started
              </Link>
<<<<<<< HEAD
              
              <Link
                to="/about"
                className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                About
              </Link>

              {/* Services Dropdown */}
              <div className="relative group">
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center"
                >
                  Services
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                
                {servicesOpen && (
                  <div className="absolute left-0 mt-2 w-96 bg-slate-800 rounded-lg shadow-xl border border-cyan-500/20 p-6 z-50">
                    <div className="grid grid-cols-1 gap-6">
                      <div>
                        <h3 className="text-lg font-semibold text-cyan-400 mb-3 flex items-center">
                          <Brain className="w-5 h-5 mr-2" />
                          AI Services
                        </h3>
                        <div className="grid grid-cols-2 gap-2">
                          {aiServices.slice(0, 4).map((service, index) => (
                            <Link
                              key={index}
                              to={service.href}
                              className="text-gray-300 hover:text-cyan-400 text-sm transition-colors duration-200 block py-1"
                              onClick={closeAllMenus}
                            >
                              {service.name}
                            </Link>
                          ))}
                        </div>
                        <Link
                          to="/ai-services"
                          className="text-cyan-400 hover:text-cyan-300 text-sm font-medium mt-2 inline-flex items-center"
                          onClick={closeAllMenus}
                        >
                          View All AI Services
                          <ArrowRight className="ml-1 h-3 w-3" />
                        </Link>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold text-cyan-400 mb-3 flex items-center">
                          <Cloud className="w-5 h-5 mr-2" />
                          IT Services
                        </h3>
                        <div className="grid grid-cols-2 gap-2">
                          {itServices.slice(0, 4).map((service, index) => (
                            <Link
                              key={index}
                              to={service.href}
                              className="text-gray-300 hover:text-cyan-400 text-sm transition-colors duration-200 block py-1"
                              onClick={closeAllMenus}
                            >
                              {service.name}
                            </Link>
                          ))}
                        </div>
                        <Link
                          to="/it-services"
                          className="text-cyan-400 hover:text-cyan-300 text-sm font-medium mt-2 inline-flex items-center"
                          onClick={closeAllMenus}
                        >
                          View All IT Services
                          <ArrowRight className="ml-1 h-3 w-3" />
                        </Link>
                      </div>
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0fdb
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0fe6
                    </div>
                  </div>
                )}
              </div>

<<<<<<< HEAD
              <Link
                to="/pricing"
                className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Pricing
              </Link>
              
              <Link
                to="/blog"
                className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Blog
              </Link>
              
              <Link
                to="/contact"
                className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              to="/consultation"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25"
            >
              Get Started
            </Link>
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200 shadow-lg">
=======
=======
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-900/95 backdrop-blur-md rounded-lg mt-2 border border-white/10">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                      isActive(item.href)
                        ? 'text-cyan-400 bg-cyan-400/10'
                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.icon && <item.icon className="h-4 w-4" />}
                    <span>{item.name}</span>
                  </Link>
                  
                  {/* Mobile Dropdown */}
                  {item.dropdown && (
                    <div className="ml-4 mt-2 space-y-1">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          to={dropdownItem.href}
                          className="block px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors duration-200"
                          onClick={() => setIsOpen(false)}
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              <div className="pt-4 border-t border-white/10">
                <Link
                  to="/consultation"
                  className="flex items-center justify-center space-x-2 w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  <span>Free Consultation</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f1c
            </div>
          </div>
        )}
=======
              {/* Contact */}
              <Link
                to="/contact"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  isActive('/contact') 
                    ? 'bg-purple-600/20 text-purple-200 border border-purple-400/30' 
                    : 'text-gray-300 hover:text-white hover:bg-purple-600/10'
                }`}
              >
                Contact
              </Link>

              {/* Blog */}
              <Link
                to="/blog"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  isActive('/blog') 
                    ? 'bg-purple-600/20 text-purple-200 border border-purple-400/30' 
                    : 'text-gray-300 hover:text-white hover:bg-purple-600/10'
                }`}
              >
                Blog
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-purple-600/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500 transition-all duration-300"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0ff3
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800/95 backdrop-blur-lg border-t border-purple-500/20">
            <Link
              to="/"
              className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                isActive('/') 
                  ? 'bg-purple-600/20 text-purple-200 border border-purple-400/30' 
                  : 'text-gray-300 hover:text-white hover:bg-purple-600/10'
              }`}
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                isActive('/about') 
                  ? 'bg-purple-600/20 text-purple-200 border border-purple-400/30' 
                  : 'text-gray-300 hover:text-white hover:bg-purple-600/10'
              }`}
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              to="/services"
              className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                isActive('/services') 
                  ? 'bg-purple-600/20 text-purple-200 border border-purple-400/30' 
                  : 'text-gray-300 hover:text-white hover:bg-purple-600/10'
              }`}
              onClick={toggleMenu}
            >
              Services
            </Link>
            <Link
              to="/contact"
              className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                isActive('/contact') 
                  ? 'bg-purple-600/20 text-purple-200 border border-purple-400/30' 
                  : 'text-gray-300 hover:text-white hover:bg-purple-600/10'
              }`}
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <Link
              to="/blog"
              className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                isActive('/blog') 
                  ? 'bg-purple-600/20 text-purple-200 border border-purple-400/30' 
                  : 'text-gray-300 hover:text-white hover:bg-purple-600/10'
              }`}
              onClick={toggleMenu}
            >
              Blog
            </Link>
          </div>
=======
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-md border-b border-white/10' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">Z</span>
            </div>
            <span className="text-white font-bold text-xl">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative">
                {item.children ? (
                  <div className="relative">
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors ${
                        isActive(item.path) || activeDropdown === item.name
                          ? 'text-cyan-400 bg-cyan-500/10'
                          : 'text-gray-300 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      {item.icon}
                      <span>{item.name}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`} />
                    </button>
                    
                    {activeDropdown === item.name && (
                      <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800/95 backdrop-blur-md rounded-lg border border-white/10 shadow-xl z-50">
                        <div className="p-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.path}
                              to={child.path}
                              className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                                isActive(child.path)
                                  ? 'text-cyan-400 bg-cyan-500/10'
                                  : 'text-gray-300 hover:text-white hover:bg-white/10'
                              }`}
                              onClick={() => setActiveDropdown(null)}
                            >
                              {child.icon}
                              <span>{child.name}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors ${
                      isActive(item.path)
                        ? 'text-cyan-400 bg-cyan-500/10'
                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={onSidebarToggle}
              className="text-gray-300 hover:text-white transition-colors"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-md border-t border-white/10">
          <div className="px-4 py-2 space-y-1">
            {navigationItems.map((item) => (
              <div key={item.name}>
                {item.children ? (
                  <div>
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="flex items-center justify-between w-full px-3 py-2 text-left text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                    >
                      <div className="flex items-center space-x-2">
                        {item.icon}
                        <span>{item.name}</span>
                      </div>
                      <ChevronDown className={`w-4 h-4 transition-transform ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`} />
                    </button>
                    
                    {activeDropdown === item.name && (
                      <div className="ml-4 space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path}
                            className="flex items-center space-x-2 px-3 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                            onClick={() => {
                              setActiveDropdown(null);
                              setIsMobileMenuOpen(false);
                            }}
                          >
                            {child.icon}
                            <span>{child.name}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className="flex items-center space-x-2 px-3 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </Link>
                )}
              </div>
            ))}
          </div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1091
        </div>
      )}
    </nav>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f74
  );
<<<<<<< HEAD
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0e37
};
Navigation.displayName = 'Navigation';

<<<<<<< HEAD
export default Navigation;
export default Navigation;
=======
export default Navigation;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0e37
=======
  )
}

export default Navigation
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f1c
=======
}
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0ff3
=======
          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+13024640950"
              className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm">(302) 464-0950</span>
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span className="text-sm">Email</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white hover:text-cyan-400 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-slate-900/95 backdrop-blur-md rounded-lg mt-2 shadow-lg">
            <div className="px-4 py-2 space-y-2">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div className="space-y-1">
                      <div className="text-gray-300 font-medium py-2">{item.name}</div>
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          to={dropdownItem.href}
                          onClick={() => setIsOpen(false)}
                          className="block pl-4 py-2 text-gray-400 hover:text-cyan-400 transition-colors"
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`block py-2 text-gray-300 hover:text-cyan-400 transition-colors ${
                        location.pathname === item.href ? 'text-cyan-400' : ''
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              
              {/* Mobile Contact Info */}
              <div className="pt-4 border-t border-gray-700 space-y-2">
                <a
                  href="tel:+13024640950"
                  className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>(302) 464-0950</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>kleber@ziontechgroup.com</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
<<<<<<< HEAD
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1009
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1091
