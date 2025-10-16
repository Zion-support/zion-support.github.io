import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import {
  Bars3Icon,
  HomeIcon,
  InformationCircleIcon,
  PhoneIcon,
  DocumentTextIcon,
  AcademicCapIcon,
  QuestionMarkCircleIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon,
  CogIcon,
  ChevronDownIcon,
  GlobeAltIcon,
  CloudIcon,
  CpuChipIcon,
  SignalIcon,
  UserGroupIcon,
  EnvelopeIcon,
  ShareIcon,
  ChatBubbleLeftRightIcon,
  ChartBarIcon,
  EyeIcon,
  CircleStackIcon,
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  UserPlusIcon,
  XMarkIcon,
  SparklesIcon,
  RocketLaunchIcon,
  MicrophoneIcon,
  ClockIcon,
  VideoCameraIcon,
  ScaleIcon,
  HeartIcon,
  CubeIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

<<<<<<< HEAD
interface NavigationProps {
  onSidebarToggle?: () => void;
}

const Navigation: React.FC<NavigationProps> = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/", icon: HomeIcon },
    { name: "About", href: "/about", icon: InformationCircleIcon },
    {
      name: "AI Services",
      href: "/ai-services",
      icon: CpuChipIcon,
      submenu: [
        {
          name: "AI Solutions Overview",
          href: "/ai-solutions",
          icon: CpuChipIcon,
          badge: "Overview",
        },
        {
          name: "AI Chatbot Builder",
          href: "/ai-chatbot-builder",
          icon: ChatBubbleLeftRightIcon,
          badge: "Popular",
        },
        {
          name: "AI Document Processor",
          href: "/ai-document-processor",
          icon: DocumentTextIcon,
          badge: "New",
        },
        {
          name: "AI Form Builder",
          href: "/ai-form-builder",
          icon: DocumentTextIcon,
        },
        {
          name: "AI Voice Assistant",
          href: "/ai-voice-assistant",
          icon: MicrophoneIcon,
        },
        {
          name: "AI Fraud Detection",
          href: "/ai-fraud-detection",
          icon: ShieldCheckIcon,
        },
        {
          name: "AI Image Recognition",
          href: "/ai-image-recognition",
          icon: EyeIcon,
        },
        {
          name: "AI Lead Scoring",
          href: "/ai-lead-scoring",
          icon: ChartBarIcon,
        },
        {
          name: "AI Predictive Maintenance",
          href: "/ai-predictive-maintenance",
          icon: CogIcon,
        },
        {
          name: "AI Price Optimizer",
          href: "/ai-price-optimizer",
          icon: CurrencyDollarIcon,
        },
        {
          name: "AI Scheduling Assistant",
          href: "/ai-scheduling-assistant",
          icon: ClockIcon,
        },
        {
          name: "AI CRM Optimizer",
          href: "/ai-crm-optimizer",
          icon: UserGroupIcon,
        },
        {
          name: "AI Data Visualizer",
          href: "/ai-data-visualizer",
          icon: ChartBarIcon,
        },
        {
          name: "AI Email Optimizer",
          href: "/ai-email-optimizer",
          icon: EnvelopeIcon,
        },
        {
          name: "AI Content Generator",
          href: "/ai-content-generator",
          icon: DocumentTextIcon,
        },
        {
          name: "AI Social Media Manager",
          href: "/ai-social-media-manager",
          icon: ShareIcon,
        },
        {
          name: "AI Video Generator",
          href: "/ai-video-generator",
          icon: VideoCameraIcon,
        },
        {
          name: "AI Translation Service",
          href: "/ai-translator",
          icon: GlobeAltIcon,
        },
        {
          name: "AI Legal Assistant",
          href: "/ai-legal-assistant",
          icon: ScaleIcon,
        },
        {
          name: "AI Medical Assistant",
          href: "/ai-medical-assistant",
          icon: HeartIcon,
        },
        {
          name: "AI Education Tutor",
          href: "/ai-education-tutor",
          icon: AcademicCapIcon,
        },
        {
          name: "AI Real Estate Analyzer",
          href: "/ai-real-estate-analyzer",
          icon: HomeIcon,
        },
        {
          name: "AI Supply Chain Optimizer",
          href: "/ai-supply-chain-optimizer",
          icon: CogIcon,
        },
        {
          name: "AI 3D Model Generator",
          href: "/ai-3d-model-generator",
          icon: CubeIcon,
        },
        {
          name: "AI Audio Processor",
          href: "/ai-audio-processor",
          icon: MicrophoneIcon,
        },
      ],
    },
    {
      name: "Micro SaaS",
      href: "/micro-saas-solutions",
      icon: CloudIcon,
      submenu: [
        {
          name: "Micro SaaS Overview",
          href: "/micro-saas-solutions",
          icon: CloudIcon,
          badge: "Overview",
        },
        {
          name: "Social Media Scheduler",
          href: "/social-media-scheduler",
          icon: ShareIcon,
          badge: "Popular",
        },
        {
          name: "Expense Tracker Pro",
          href: "/expense-tracker-pro",
          icon: CurrencyDollarIcon,
        },
        {
          name: "Task Manager Pro",
          href: "/task-manager-pro",
          icon: CheckCircleIcon,
        },
        {
          name: "AI Content Generator",
          href: "/ai-content-generator",
          icon: DocumentTextIcon,
        },
        { name: "AI Translator", href: "/ai-translator", icon: GlobeAltIcon },
        {
          name: "AI Video Generator",
          href: "/ai-video-generator",
          icon: VideoCameraIcon,
        },
        {
          name: "AI Audio Processor",
          href: "/ai-audio-processor",
          icon: MicrophoneIcon,
        },
        {
          name: "Analytics Dashboard",
          href: "/analytics-dashboard",
          icon: ChartBarIcon,
        },
        {
          name: "Customer Support Hub",
          href: "/customer-support-hub",
          icon: UserGroupIcon,
        },
      ],
    },
    {
      name: "IT Solutions",
      href: "/it-services",
      icon: CodeBracketIcon,
      submenu: [
        {
          name: "IT Services Overview",
          href: "/it-services",
          icon: CodeBracketIcon,
          badge: "Overview",
        },
        {
          name: "Cloud Infrastructure",
          href: "/cloud-infrastructure",
          icon: CloudIcon,
          badge: "Popular",
        },
        {
          name: "Web Development",
          href: "/web-development",
          icon: GlobeAltIcon,
        },
        {
          name: "Mobile Development",
          href: "/mobile-development",
          icon: DevicePhoneMobileIcon,
        },
        {
          name: "API Development",
          href: "/api-development",
          icon: CodeBracketIcon,
        },
        {
          name: "Database Management",
          href: "/database-management",
          icon: CircleStackIcon,
        },
        {
          name: "Network Infrastructure",
          href: "/network-infrastructure",
          icon: SignalIcon,
        },
        {
          name: "DevOps Automation",
          href: "/devops-automation",
          icon: CogIcon,
        },
        {
          name: "Data Engineering",
          href: "/data-engineering",
          icon: ChartBarIcon,
        },
        {
          name: "Security Audit",
          href: "/security-audit",
          icon: ShieldCheckIcon,
        },
        {
          name: "Digital Transformation",
          href: "/digital-transformation",
          icon: RocketLaunchIcon,
        },
      ],
    },
    {
      name: "Zion AI Services",
      href: "/zion-ai-services",
      icon: SparklesIcon,
      submenu: [
        {
          name: "Zion AI Chatbot Builder",
          href: "/zion-ai-chatbot-builder",
          icon: ChatBubbleLeftRightIcon,
          badge: "Pro",
        },
        {
          name: "Zion AI Code Assistant",
          href: "/zion-ai-code-assistant",
          icon: CodeBracketIcon,
        },
        {
          name: "Zion AI Content Moderator",
          href: "/zion-ai-content-moderator",
          icon: ShieldCheckIcon,
        },
        {
          name: "Zion AI Customer Support Pro",
          href: "/zion-ai-customer-support-pro",
          icon: UserGroupIcon,
          badge: "Pro",
        },
        {
          name: "Zion AI Workflow Automator Pro",
          href: "/zion-ai-workflow-automator-pro",
          icon: CogIcon,
          badge: "Pro",
        },
        {
          name: "Zion AI Email Marketing Pro",
          href: "/zion-ai-email-marketing-pro",
          icon: EnvelopeIcon,
          badge: "Pro",
        },
        {
          name: "Zion AI Financial Forecaster",
          href: "/zion-ai-financial-forecaster",
          icon: CurrencyDollarIcon,
        },
        {
          name: "Zion AI Sales Predictor",
          href: "/zion-ai-sales-predictor",
          icon: ChartBarIcon,
        },
        {
          name: "Zion AI Translation Service",
          href: "/zion-ai-translation-service",
          icon: GlobeAltIcon,
        },
        {
          name: "Zion AI Voice Synthesis",
          href: "/zion-ai-voice-synthesis",
          icon: MicrophoneIcon,
        },
      ],
    },
    {
      name: "Advanced Solutions",
      href: "/solutions",
      icon: RocketLaunchIcon,
      submenu: [
        {
          name: "All Solutions",
          href: "/solutions",
          icon: SparklesIcon,
          badge: "Overview",
        },
        {
          name: "Blockchain Solutions",
          href: "/blockchain-solutions",
          icon: CircleStackIcon,
          badge: "Hot",
        },
        { name: "IoT Solutions", href: "/iot-solutions", icon: SignalIcon },
        { name: "5G Solutions", href: "/5g-solutions", icon: SignalIcon },
        {
          name: "Edge Computing",
          href: "/edge-computing-solutions",
          icon: CloudIcon,
        },
        {
          name: "Augmented Reality",
          href: "/augmented-reality-solutions",
          icon: EyeIcon,
        },
        {
          name: "Virtual Reality",
          href: "/virtual-reality-solutions",
          icon: EyeIcon,
        },
        {
          name: "Quantum Computing",
          href: "/quantum-computing-solutions",
          icon: CpuChipIcon,
        },
        {
          name: "Robotic Process Automation",
          href: "/robotic-process-automation",
          icon: CogIcon,
        },
        {
          name: "Low-Code Platform",
          href: "/low-code-platform",
          icon: CodeBracketIcon,
        },
        {
          name: "Serverless Architecture",
          href: "/serverless-architecture",
          icon: CloudIcon,
        },
        {
          name: "Container Orchestration",
          href: "/container-orchestration",
          icon: CogIcon,
        },
        {
          name: "AI Infrastructure",
          href: "/ai-infrastructure",
          icon: CpuChipIcon,
        },
        {
          name: "Data Lake Solutions",
          href: "/data-lake-solutions",
          icon: CircleStackIcon,
        },
      ],
    },
    { name: "Pricing", href: "/pricing", icon: CurrencyDollarIcon },
    { name: "Case Studies", href: "/case-studies", icon: DocumentTextIcon },
    { name: "Blog", href: "/blog", icon: DocumentTextIcon },
    {
      name: "Company",
      href: "#",
      icon: UserGroupIcon,
      submenu: [
        { name: "About Us", href: "/about", icon: InformationCircleIcon },
        { name: "Our Team", href: "/team", icon: UserGroupIcon },
        { name: "Careers", href: "/careers", icon: UserPlusIcon },
        { name: "Partnerships", href: "/partnerships", icon: ShareIcon },
        { name: "Contact", href: "/contact", icon: PhoneIcon },
      ],
    },
    {
      name: "Resources",
      href: "#",
      icon: DocumentTextIcon,
      submenu: [
        { name: "API Documentation", href: "/api-docs", icon: CodeBracketIcon },
        { name: "Help Center", href: "/help", icon: QuestionMarkCircleIcon },
        { name: "Accessibility", href: "/accessibility", icon: EyeIcon },
        { name: "Privacy Policy", href: "/privacy", icon: ShieldCheckIcon },
        { name: "Terms of Service", href: "/terms", icon: DocumentTextIcon },
        { name: "Cookie Policy", href: "/cookies", icon: DocumentTextIcon },
      ],
    },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(href);
  };

  const NavItem = ({
    item,
    isMobile = false,
  }: {
    item: any;
    isMobile?: boolean;
  }) => {
    const hasSubmenu = item.submenu && item.submenu.length > 0;

    if (hasSubmenu) {
      return (
        <div className="relative group">
          <button
            className={`flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
              isActive(item.href)
                ? "text-cyan-400 bg-cyan-500/10 border border-cyan-400/30"
                : "text-gray-300 hover:text-white hover:bg-gray-800/50"
            } ${isMobile ? "w-full justify-between" : ""}`}
            onMouseEnter={() => !isMobile && setIsServicesOpen(true)}
            onMouseLeave={() => !isMobile && setIsServicesOpen(false)}
            onClick={() => isMobile && setIsServicesOpen(!isServicesOpen)}
          >
            <div className="flex items-center">
              <item.icon className="h-5 w-5 mr-2" />
              {item.name}
            </div>
            <ChevronDownIcon
              className={`h-4 w-4 transition-transform ${isServicesOpen ? "rotate-180" : ""}`}
            />
          </button>

          {/* Desktop Dropdown */}
          {!isMobile && (
            <div
              className={`absolute top-full left-0 mt-2 w-80 glass-card p-6 z-50 transition-all duration-200 ${
                isServicesOpen ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <div className="grid grid-cols-1 gap-2">
                {item.submenu.map((subItem: any, index: number) => (
                  <Link
                    key={index}
                    to={subItem.href}
                    className="flex items-center justify-between px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all duration-200 group"
                  >
                    <div className="flex items-center">
                      <subItem.icon className="h-4 w-4 mr-3 text-cyan-400" />
                      {subItem.name}
                    </div>
                    {subItem.badge && (
                      <span
                        className={`px-2 py-1 text-xs rounded-full ${
                          subItem.badge === "Popular"
                            ? "bg-green-500/20 text-green-400"
                            : subItem.badge === "New"
                              ? "bg-blue-500/20 text-blue-400"
                              : subItem.badge === "Hot"
                                ? "bg-red-500/20 text-red-400"
                                : "bg-gray-500/20 text-gray-400"
                        }`}
                      >
                        {subItem.badge}
                      </span>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Mobile Dropdown */}
          {isMobile && isServicesOpen && (
            <div className="ml-4 mt-2 space-y-1">
              {item.submenu.map((subItem: any, index: number) => (
                <Link
                  key={index}
                  to={subItem.href}
                  className="flex items-center justify-between px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <div className="flex items-center">
                    <subItem.icon className="h-4 w-4 mr-3 text-cyan-400" />
                    {subItem.name}
                  </div>
                  {subItem.badge && (
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${
                        subItem.badge === "Popular"
                          ? "bg-green-500/20 text-green-400"
                          : subItem.badge === "New"
                            ? "bg-blue-500/20 text-blue-400"
                            : subItem.badge === "Hot"
                              ? "bg-red-500/20 text-red-400"
                              : "bg-gray-500/20 text-gray-400"
                      }`}
                    >
                      {subItem.badge}
                    </span>
                  )}
                </Link>
              ))}
            </div>
          )}
        </div>
      );
    }

    return (
      <Link
        to={item.href}
        className={`flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
          isActive(item.href)
            ? "text-cyan-400 bg-cyan-500/10 border border-cyan-400/30"
            : "text-gray-300 hover:text-white hover:bg-gray-800/50"
        } ${isMobile ? "w-full" : ""}`}
        onClick={() => isMobile && setIsMobileMenuOpen(false)}
      >
        <item.icon className="h-5 w-5 mr-2" />
        {item.name}
      </Link>
    );
  };

  return (
    <nav className="relative z-50">
      {/* Desktop Navigation */}
      <div className="hidden lg:block">
        <div className="glass-card mx-4 mt-4 rounded-2xl">
          <div className="px-6 py-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link to="/" className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <CpuChipIcon className="h-6 w-6 text-white" />
=======
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDown, Phone, Mail, MapPin, Menu, X, Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Settings, Calendar, CheckSquare, FileText, Search } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [servicesOpen, setServicesOpen] = useState(false);
  const [aiServicesOpen, setAiServicesOpen] = useState(false);
  const [itServicesOpen, setItServicesOpen] = useState(false);
  const [microSaasOpen, setMicroSaasOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleResize = () => {
    if (window.innerWidth >= 1024) {
      setIsOpen(false);
    }
  };

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const closeAllMenus = () => {
    setServicesOpen(false);
    setAiServicesOpen(false);
    setItServicesOpen(false);
    setMicroSaasOpen(false);
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const aiServices = [

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

  const itServices = [

    { name: 'Cloud Services', href: '/cloud-services', icon: Cloud, description: 'Cloud Solutions' },
    { name: 'Cloud Migration', href: '/cloud-migration', icon: Cloud, description: 'Seamless Migration' },
    { name: 'DevOps & CI/CD', href: '/devops', icon: Settings, description: 'Development Operations' },
    { name: 'Database Services', href: '/database', icon: Database, description: 'Data Management' },
    { name: 'Cybersecurity', href: '/cybersecurity', icon: Shield, description: 'Security Solutions' },
    { name: 'Security Monitoring', href: '/security-monitoring', icon: Shield, description: '24/7 Security' },
    { name: 'Penetration Testing', href: '/penetration-testing', icon: Shield, description: 'Security Testing' },
    { name: 'IT Infrastructure', href: '/it-infrastructure', icon: Cloud, description: 'Infrastructure Setup' },
    { name: 'Managed IT Services', href: '/managed-it', icon: Settings, description: '24/7 IT Support' },
    { name: 'IT Consulting', href: '/it-consulting', icon: Users, description: 'IT Strategy' },
    { name: 'Data Analytics', href: '/data-analytics', icon: BarChart, description: 'Business Intelligence' },
    { name: 'Mobile Development', href: '/mobile-development', icon: Smartphone, description: 'Mobile Apps' },
    { name: 'Web Development', href: '/web-development', icon: Globe, description: 'Web Applications' },
    { name: 'Process Automation', href: '/process-automation', icon: Zap, description: 'Workflow Automation' },
    { name: 'Cloud Infrastructure', href: '/cloud-infrastructure', icon: Cloud, description: 'Infrastructure Management' },
    { name: 'Network Security', href: '/network-security', icon: Shield, description: 'Network Protection' },
    { name: 'Data Backup', href: '/data-backup', icon: Database, description: 'Backup Solutions' },
    { name: 'IT Asset Management', href: '/it-asset-management', icon: Settings, description: 'Asset Management' },
    { name: 'Website Hosting', href: '/website-hosting', icon: Globe, description: 'Hosting Services' },
    { name: 'Mobile Device Management', href: '/mobile-device-management', icon: Smartphone, description: 'Device Management' },
    { name: 'Compliance Services', href: '/compliance-services', icon: Shield, description: 'Compliance Solutions' },
    { name: 'IT Performance Monitoring', href: '/it-performance-monitoring', icon: BarChart, description: 'Performance Monitoring' },
    { name: 'IT Training', href: '/it-training', icon: Users, description: 'Training Services' },
    { name: 'IT Project Management', href: '/it-project-management', icon: Settings, description: 'Project Management' },
    { name: 'Vulnerability Assessment', href: '/vulnerability-assessment', icon: Shield, description: 'Security Assessment' },
    { name: 'Hybrid Cloud', href: '/hybrid-cloud', icon: Cloud, description: 'Hybrid Solutions' },
    { name: 'Data Migration', href: '/data-migration', icon: Database, description: 'Migration Services' },
    { name: 'API Development', href: '/api-development', icon: Globe, description: 'API Services' },
    { name: 'IT Governance', href: '/it-governance', icon: Settings, description: 'Governance Solutions' }
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
    { name: 'Ad Campaign Manager', href: '/ad-campaign-manager', icon: BarChart, description: 'Ad Management' },
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

  const emergingTech = [

    { name: 'Quantum Computing', href: '/quantum-computing', icon: Cpu, description: 'Quantum Solutions' },
    { name: 'Robotics & Automation', href: '/robotics', icon: Brain, description: 'Intelligent Robotics' },
    { name: 'IoT & Edge Computing', href: '/iot-edge-computing', icon: Globe, description: 'Connected Devices' },
    { name: 'Blockchain & Web3', href: '/blockchain-web3', icon: Shield, description: 'Decentralized Solutions' },
    { name: 'Business Intelligence', href: '/business-intelligence', icon: BarChart, description: 'Data Insights' },
    { name: 'Autonomous Systems', href: '/autonomous-systems', icon: Zap, description: 'Self-Managing Systems' },
    { name: '5G Implementation', href: '/5g-implementation', icon: Globe, description: '5G Solutions' },
    { name: 'AI 3D Generation', href: '/ai-3d-generation', icon: Brain, description: '3D AI Solutions' },
    { name: 'Holographic Workspace', href: '/ai-holographic-workspace', icon: Brain, description: 'Holographic AI' }
  ];

  return (

    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-cyan-500/20' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}

          <Link href="/" className="flex items-center space-x-2 group" onClick={closeAllMenus}>
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white neon-text">Zion Tech Group</span>
          </Link>
          {/* Desktop Navigation */}

          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Home
            </Link>
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
                        <service.icon className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300" />
                        <div>
                          <div className="text-white font-medium">{service.name}</div>
                          <div className="text-xs text-gray-400">{service.description}</div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 ml-auto" />
                      </Link>
                      ))}

                  </div>
>>>>>>> 79e154b6d026b9fc6b6271031f5928bd87a51d0b
                </div>
                <div>
                  <div className="text-xl font-bold holographic-text">
                    ZION TECH GROUP
                  </div>
                  <div className="text-xs text-gray-400">AI & IT Solutions</div>
                </div>
              </Link>

              {/* Navigation Links */}
              <div className="flex items-center space-x-1">
                {navigation.map((item, index) => (
                  <NavItem key={index} item={item} />
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex items-center space-x-3">
                <Link
                  to="/contact"
                  className="px-4 py-2 text-sm font-medium text-cyan-400 hover:text-white border border-cyan-400/30 rounded-lg hover:bg-cyan-500/10 transition-all duration-200"
                >
                  Contact
                </Link>
                <Link
                  to="/pricing"
                  className="btn-neon px-6 py-2 text-sm font-semibold"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden">
        <div className="glass-card mx-4 mt-4 rounded-2xl">
          <div className="px-4 py-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link to="/" className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <CpuChipIcon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="text-lg font-bold holographic-text">
                    ZION TECH
                  </div>
                  <div className="text-xs text-gray-400">AI & IT Solutions</div>
                </div>
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-gray-400 hover:text-white transition-colors"
              >
                {isMobileMenuOpen ? (
                  <XMarkIcon className="h-6 w-6" />
                ) : (
                  <Bars3Icon className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="glass-card mx-4 mt-2 rounded-2xl">
            <div className="px-4 py-6 space-y-2">
              {navigation.map((item, index) => (
                <NavItem key={index} item={item} isMobile={true} />
              ))}

              {/* Mobile CTA Buttons */}
              <div className="pt-4 border-t border-gray-700 space-y-2">
                <Link
                  to="/contact"
                  className="block w-full px-4 py-3 text-center text-sm font-medium text-cyan-400 border border-cyan-400/30 rounded-lg hover:bg-cyan-500/10 transition-all duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact Us
                </Link>
                <Link
                  to="/pricing"
                  className="block w-full btn-neon text-center py-3 text-sm font-semibold"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
