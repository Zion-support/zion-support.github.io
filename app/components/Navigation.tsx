<<<<<<< HEAD
'use client';
<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import EnhancedSearchModal from '../../src/components/EnhancedSearchModal';
import {
  ChevronDown, 
  Menu, 
  X, 
  Search, 
  ArrowRight, 
  Brain, 
  Cloud, 
  Zap, 
  Sparkles, 
  Settings, 
  BarChart, 
  Phone, 
  Home, 
  Users, 
  Briefcase, 
  FileText, 
  DollarSign, 
  MessageSquare, 
  Shield, 
  Cpu, 
  Database, 
  Globe, 
  Lock, 
  Target, 
  TrendingUp, 
  Award, 
  Clock, 
  CheckCircle, 
  Play, 
  Download, 
  ExternalLink, 
  ChevronRight, 
  Star, 
  Quote, 
  User, 
  Building, 
  GraduationCap, 
  Heart, 
  ThumbsUp, 
  MessageCircle, 
  Share2, 
  Bookmark, 
  Eye, 
  MousePointer, 
  Volume2, 
  Accessibility, 
  Wrench, 
  Cog, 
  Layers, 
  Network, 
  Server, 
  Smartphone, 
  Monitor, 
  Wifi, 
  Code, 
  Palette, 
  Calendar, 
  FileText as FileTextIcon, 
  MapPin as Location, 
  Truck, 
  ChefHat, 
  Rocket, 
  Sprout, 
  Scale
} from 'lucide-react';
=======
import React, { memo, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone, Mail, Menu, X, Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Star, Settings, Calendar, CheckSquare, FileText, Briefcase } from 'lucide-react';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0174

<<<<<<< HEAD
const Navigation: React.FC = () => {,
=======
import React, { useState, useEffect, useCallback } from 'react';
import { Menu, X, Phone, Mail, MapPin, ChevronDown, Zap, Brain, Cpu, Shield, Globe, Code, Database, Cloud, Bot, Target, BarChart, Settings, Users, Award, Lock, Smartphone, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation as NavIcon, PieChart, TrendingDown, Activity, Star, CheckCircle, ArrowRight, Atom } from 'lucide-react';

interface NavigationProps {
  className?: string;
}

const Navigation: React.FC<NavigationProps> = ({ className = '' }) => {
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-6ffe
=======
const Navigation: React.FC = () => {
>>>>>>> cursor/fix-errors-and-merge-to-main-14e4
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
<<<<<<< HEAD
=======
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
        setServicesOpen(false);
        setAiServicesOpen(false);
        setItServicesOpen(false);
        setMicroSaasOpen(false);
      }
    };

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0174
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
<<<<<<< HEAD
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const handleDropdownToggle = useCallback((dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  }, [activeDropdown]);

  const handlePhoneClick = useCallback(() => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'phone_click', {
        event_category: 'engagement',
        event_label: 'navigation_phone'
      });
    }
  }, []);

  const navigationItems = [
    {
<<<<<<< HEAD
<<<<<<< HEAD
      title: 'Micro SAAS Solutions'
      icon: Zap;
      color: 'text-cyan-400'
=======
      title: 'Micro SAAS Solutions',
      icon: Zap,
      color: 'text-cyan-400',
>>>>>>> cursor/fix-errors-and-merge-to-main-14e4
      bgColor: 'bg-cyan-500/10',
      services: [
        { name: 'AI Project Manager Pro', href: '/ai-project-manager' },
        { name: 'Smart Calendar System', href: '/ai-smart-calendar' },
        { name: 'AI Sentiment Analyzer', href: '/ai-sentiment-analyzer' },
        { name: 'Landing Page Builder', href: '/landing-page-builder' },
        { name: 'AI Transportation', href: '/ai-transportation' },
        { name: 'AI Telepathic Interface', href: '/ai-telepathic-interface' },
        { name: 'AI 3D Generation', href: '/ai-3d-generation' },
        { name: 'AI Agricultural Intelligence', href: '/ai-agricultural-intelligence-pro' }
      ]
    },
    {
      title: 'AI Services',
      icon: Brain,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      services: [
        { name: 'AI Workflow Automation', href: '/ai-workflow-automation' },
        { name: 'AI Customer Support', href: '/ai-customer-support' },
        { name: 'AI Data Analytics', href: '/ai-data-analytics' },
        { name: 'AI Content Generation', href: '/ai-content-generation' },
        { name: 'AI Healthcare Solutions', href: '/ai-healthcare' },
        { name: 'AI Fintech Platform', href: '/ai-fintech' },
        { name: 'AI Computer Vision', href: '/ai-computer-vision' },
        { name: 'AI Machine Learning', href: '/ai-ml-platform' }
      ]
    },
    {
      title: 'IT Services',
      icon: Cloud,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
<<<<<<< HEAD
      hoverColor: 'hover:bg-blue-500/20',
      services: [,
=======
      name: 'AI Services',
      href: '/ai-services',
      icon: Brain,
      dropdown: [
        { name: 'AI Analytics', href: '/ai-analytics', icon: BarChart, price: '$299/month' },
        { name: 'AI Automation', href: '/ai-automation', icon: Settings, price: '$399/month' },
        { name: 'AI Customer Support', href: '/ai-customer-support', icon: Users, price: '$199/month' },
        { name: 'AI Data Visualization', href: '/ai-data-visualization', icon: PieChart, price: '$249/month' },
        { name: 'AI Email Marketing', href: '/ai-email-marketing', icon: Mail, price: '$149/month' },
        { name: 'AI Sales Automation', href: '/ai-sales-automation', icon: Target, price: '$349/month' },
        { name: 'AI Social Media Manager', href: '/ai-social-media-manager', icon: Globe, price: '$199/month' },
        { name: 'AI Video Generation', href: '/ai-video-generation', icon: Video, price: '$499/month' },
        { name: 'AI Voice Cloning', href: '/ai-voice-cloning', icon: Music, price: '$299/month' },
        { name: 'AI Workflow Automation', href: '/ai-workflow-automation', icon: Activity, price: '$399/month' },
        { name: 'AI 3D Generation', href: '/ai-3d-generation', icon: Camera, price: '$599/month' },
        { name: 'AI Code Generation', href: '/ai-code-generation', icon: Code, price: '$199/month' },
        { name: 'AI Fashion Design', href: '/ai-fashion-design', icon: Paintbrush, price: '$299/month' },
        { name: 'AI Fitness Coach', href: '/ai-fitness-coach', icon: Heart, price: '$149/month' },
        { name: 'AI Music Composition', href: '/ai-music-composition', icon: Music, price: '$199/month' },
        { name: 'AI Project Manager', href: '/ai-project-manager', icon: Briefcase, price: '$299/month' }
      ]
    },
    {
<<<<<<< HEAD
      title: 'IT Services',
      icon: Cloud,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      hoverColor: 'hover:bg-blue-500/20',
      services: [
<<<<<<< HEAD
        { name: 'Cloud Services', path: '/cloud-services', description: 'Cloud migration and optimization', icon: Cloud },
        { name: 'Cybersecurity', path: '/cybersecurity', description: 'Advanced security solutions', icon: Shield },
        { name: 'DevOps & CI/CD', path: '/devops', description: 'Streamlined development workflows', icon: Settings },
        { name: 'Database Services', path: '/database', description: 'Database design and optimization', icon: Database },
        { name: 'IT Infrastructure', path: '/it-infrastructure', description: 'Enterprise IT infrastructure', icon: Cpu },
        { name: 'Network Services', path: '/networking', description: 'Network design and management', icon: Globe },
        { name: 'Business Intelligence', path: '/business-intelligence', description: 'Data-driven insights', icon: BarChart },
        { name: 'Compliance', path: '/compliance', description: 'Regulatory compliance solutions', icon: CheckSquare }
        { name: 'Cybersecurity Suite', path: '/cybersecurity-suite', description: 'Advanced security solutions' },
        { name: 'Cloud Migration', path: '/cloud-migration', description: 'AWS, Azure, GCP migration' },
        { name: 'DevOps & CI/CD', path: '/devops-cicd', description: 'Development operations' },
        { name: 'Database Management', path: '/database-management', description: 'Database optimization' },
        { name: 'Network Solutions', path: '/network-solutions', description: 'Enterprise networking' },
        { name: 'Mobile App Development', path: '/mobile-app-development', description: 'Native & cross-platform' },
        { name: 'IT Consulting', path: '/it-consulting', description: 'Strategic IT planning' },
        { name: 'IT Support & Maintenance', path: '/it-support-maintenance', description: '24/7 technical support' },
        { name: 'System Integration', path: '/system-integration', description: 'API & system integration' },
        { name: 'Data Backup & Recovery', path: '/data-backup-recovery', description: 'Disaster recovery' },
        { name: 'Enterprise Solutions', path: '/enterprise-solutions', description: 'Large-scale solutions' },
        { name: 'Identity & Access Management', path: '/identity-access-management', description: 'Security & access control' },
        { name: 'Performance Optimization', path: '/performance-optimization', description: 'System tuning' },
        { name: 'Global IT Services', path: '/global-it-services', description: 'Worldwide IT support' },
        { name: 'IT Training & Certification', path: '/it-training-certification', description: 'Professional development' },
        { name: 'Cloud Services', path: '/cloud-services', description: 'Cloud infrastructure' },
        { name: 'Networking', path: '/networking', description: 'Network infrastructure' },
        { name: 'Security', path: '/security', description: 'Security solutions' }
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-6ffe
        { name: 'Quantum Computing Infrastructure', path: '/quantum-computing-infrastructure', description: 'Quantum computing setup', icon: '⚛️', popular: true },
        { name: '5G Network Implementation', path: '/5g-implementation', description: '5G network deployment', icon: '📶', popular: true },
        { name: 'Metaverse Platform Development', path: '/metaverse-development', description: 'Metaverse solutions', icon: '🥽', popular: true },
        { name: 'Web3 Infrastructure Services', path: '/web3-infrastructure', description: 'Web3 and blockchain', icon: '⛓️', popular: true },
        { name: 'AI Infrastructure as a Service', path: '/ai-infrastructure-service', description: 'AI infrastructure platform', icon: '🧠', popular: true },
        { name: 'MLOps Platform Implementation', path: '/mlops-platform', description: 'MLOps platform', icon: '⚙️', popular: true },
        { name: 'Zero Trust Security Architecture', path: '/zero-trust-architecture', description: 'Zero trust security', icon: '🛡️', popular: true },
        { name: 'AI-Powered Security Operations', path: '/ai-security-operations', description: 'AI security operations', icon: '🔒', popular: true },
        { name: 'Real-time Data Platform', path: '/real-time-data-platform', description: 'Real-time data processing', icon: '📊', popular: true },
        { name: 'Data Lake & Warehouse Modernization', path: '/data-modernization', description: 'Modern data solutions', icon: '🗄️', popular: true },
        { name: 'Multi-Cloud Management Platform', path: '/multi-cloud-management', description: 'Multi-cloud management', icon: '☁️', popular: true },
        { name: 'Hybrid Cloud Architecture', path: '/hybrid-cloud-architecture', description: 'Hybrid cloud solutions', icon: '🌐', popular: true }
>>>>>>> origin/main
=======
      services: [
        { name: 'Cloud Migration & Setup', href: '/cloud-migration' },
        { name: 'Cybersecurity Solutions', href: '/cybersecurity' },
        { name: 'Database Management', href: '/database-services' },
        { name: 'System Integration', href: '/system-integration' },
        { name: 'IT Consulting', href: '/it-consulting' },
        { name: 'Network Security', href: '/network-security' },
        { name: 'Data Backup & Recovery', href: '/data-backup' },
        { name: 'IT Support & Maintenance', href: '/it-support' }
>>>>>>> cursor/fix-errors-and-merge-to-main-14e4
      ]
    },
    {
      title: 'Emerging Technologies',
      icon: Sparkles,
      color: 'text-pink-400',
      bgColor: 'bg-pink-500/10',
<<<<<<< HEAD
      hoverColor: 'hover:bg-pink-500/20',
<<<<<<< HEAD
      services: [,
=======
      services: [
<<<<<<< HEAD
        { name: 'Micro SAAS Solutions', path: '/micro-saas', description: '100+ AI-powered tools' },
        { name: 'AI-Powered CRM', path: '/ai-crm', description: 'Intelligent customer management' },
        { name: 'AI Analytics Dashboard', path: '/ai-analytics-dashboard', description: 'Business intelligence' },
        { name: 'AI Content Studio', path: '/ai-content-studio', description: 'Content creation suite' },
        { name: 'AI Chatbot Builder', path: '/ai-chatbot-builder', description: 'No-code chatbot creation' },
        { name: 'AI Email Marketing', path: '/ai-email-marketing', description: 'Automated email campaigns' },
        { name: 'AI Mobile App Builder', path: '/ai-mobile-builder', description: 'Drag-and-drop app builder' },
        { name: 'AI SEO Optimizer', path: '/ai-seo-optimizer', description: 'Automated SEO analysis' },
        { name: 'AI Invoice Generator', path: '/ai-invoice-generator', description: 'Automated invoicing' },
        { name: 'AI Lead Scoring', path: '/ai-lead-scoring', description: 'Intelligent lead qualification' },
        { name: 'AI Social Media Manager', path: '/ai-social-media-manager', description: 'Social media automation' },
        { name: 'AI E-commerce Assistant', path: '/ai-ecommerce-assistant', description: 'E-commerce optimization' },
        { name: 'AI Document Processor', path: '/ai-document-processor', description: 'Intelligent document processing' },
        { name: 'AI Design Studio', path: '/ai-design-studio', description: 'AI-powered design tools' },
        { name: 'AI Security Monitor', path: '/ai-security-monitor', description: 'Real-time security monitoring' },
        { name: 'AI Financial Planner', path: '/ai-financial-planner', description: 'Financial planning & analysis' },
        { name: 'AI Writing Assistant', path: '/ai-writing-assistant', description: 'AI writing tools' },
        { name: 'AI Code Generator', path: '/ai-code-generator', description: 'AI-assisted coding' },
        { name: 'AI Video Creator', path: '/ai-video-creator', description: 'Automated video production' },
        { name: 'AI Music Composer', path: '/ai-music-composition', description: 'AI music generation' },
        { name: 'AI App Builder', path: '/ai-app-builder', description: 'Native app development' },
        { name: 'AI Market Research', path: '/ai-market-research', description: 'Automated market analysis' },
        { name: 'AI Store Optimizer', path: '/ai-store-optimizer', description: 'E-commerce optimization' },
        { name: 'AI Data Pipeline', path: '/ai-data-pipeline', description: 'Automated data processing' },
        { name: 'AI A/B Testing', path: '/ai-ab-testing', description: 'Intelligent testing' },
        { name: 'AI Website Builder', path: '/ai-website-builder', description: 'AI website creation' },
        { name: 'AI Live Chat', path: '/ai-live-chat', description: 'Intelligent customer chat' },
        { name: 'AI Growth Hacker', path: '/ai-growth-hacker', description: 'Automated growth strategies' },
        { name: 'AI Password Manager', path: '/ai-password-manager', description: 'Secure password management' },
        { name: 'AI Voice Assistant', path: '/ai-voice-assistant', description: 'Custom voice assistants' },
        { name: 'AI HR Assistant', path: '/ai-hr-assistant', description: 'Intelligent HR management' },
        { name: 'AI Inventory Manager', path: '/ai-inventory-manager', description: 'Smart inventory management' },
        { name: 'AI Customer Insights', path: '/ai-customer-insights', description: 'Deep customer insights' },
        { name: 'AI Performance Tracker', path: '/ai-performance-tracker', description: 'Comprehensive performance tracking' },
        { name: 'AI Predictive Analytics', path: '/ai-predictive-analytics', description: 'Future outcome predictions' },
        { name: 'AI Health Tracker', path: '/ai-health-tracker', description: 'Personal health monitoring' },
        { name: 'AI Learning Platform', path: '/ai-learning-platform', description: 'Personalized learning' },
        { name: 'AI Task Manager Pro', path: '/task-manager-pro', description: 'Intelligent task management' },
        { name: 'AI Expense Tracker', path: '/expense-tracker', description: 'Smart expense management' },
        { name: 'AI Scheduler', path: '/ai-scheduler', description: 'Intelligent scheduling' },
        { name: 'AI Business Apps', path: '/business-apps', description: 'Business applications' },
        { name: 'AI Productivity Tools', path: '/productivity', description: 'Productivity suite' },
        { name: 'AI Marketing Tools', path: '/marketing-tools', description: 'Marketing suite' },
        { name: 'AI Developer Tools', path: '/developer-tools', description: 'Development tools' },
        { name: 'AI Analytics Tools', path: '/analytics-tools', description: 'Analytics suite' }
      ]
    },
    {
      title: 'Specialized',
      icon: Zap,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      hoverColor: 'hover:bg-orange-100',
      services: [
        { name: 'Quantum Computing', path: '/quantum-computing', description: 'Next-gen computing' },
        { name: 'Autonomous Systems', path: '/autonomous-systems', description: 'Self-managing systems' },
        { name: 'Blockchain & Web3', path: '/blockchain-web3', description: 'Decentralized solutions' },
        { name: 'IoT & Edge Computing', path: '/iot-edge-computing', description: 'Connected devices' },
        { name: 'Business Intelligence', path: '/business-intelligence', description: 'Data-driven insights' },
        { name: 'Robotics', path: '/robotics', description: 'Intelligent robots' },
        { name: 'AR/VR Solutions', path: '/ar-vr-solutions', description: 'Immersive experiences' },
        { name: 'Smart Cities', path: '/smart-cities', description: 'Urban technology solutions' },
        { name: 'Digital Transformation', path: '/digital-transformation', description: 'Business modernization' },
        { name: 'Innovation Labs', path: '/innovation-labs', description: 'R&D and prototyping' },
        { name: 'Sustainability Tech', path: '/sustainability-tech', description: 'Green technology solutions' },
        { name: 'Future Technologies', path: '/future-technologies', description: 'Emerging tech solutions' }
      ]
    }
        { name: 'Quantum Computing', path: '/quantum-computing', description: 'Next-generation quantum algorithms', icon: '⚛️' },
        { name: 'Autonomous Systems', path: '/autonomous-systems', description: 'Self-managing systems', icon: '🤖' },
        { name: 'Blockchain & Web3', path: '/blockchain-web3', description: 'Decentralized solutions', icon: '⛓️' },
        { name: 'IoT & Edge Computing', path: '/iot-edge-computing', description: 'Connected devices and edge solutions', icon: '🌐' },
        { name: 'Robotics Solutions', path: '/robotics', description: 'Intelligent robotic solutions', icon: '🦾' },
        { name: 'Business Apps', path: '/business-apps', description: 'Custom business applications', icon: '📱' }
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-6ffe
        { name: 'Quantum Computing Solutions', path: '/quantum-computing-infrastructure', description: 'Quantum computing infrastructure', icon: '⚛️', popular: true },
        { name: '5G & Edge Computing', path: '/5g-implementation', description: '5G and edge solutions', icon: '📶', popular: true },
        { name: 'Metaverse & Web3', path: '/metaverse-development', description: 'Metaverse and Web3', icon: '🥽', popular: true },
        { name: 'AI Infrastructure', path: '/ai-infrastructure-service', description: 'AI infrastructure solutions', icon: '🧠', popular: true },
        { name: 'Blockchain & DeFi', path: '/web3-infrastructure', description: 'Blockchain and DeFi', icon: '⛓️', popular: true },
        { name: 'IoT & Smart Cities', path: '/smart-city-solutions', description: 'IoT and smart cities', icon: '🏙️', popular: true },
        { name: 'Cybersecurity & Zero Trust', path: '/zero-trust-architecture', description: 'Advanced security', icon: '🛡️', popular: true },
        { name: 'Data & Analytics', path: '/real-time-data-platform', description: 'Data and analytics', icon: '📊', popular: true },
        { name: 'Cloud & Hybrid', path: '/multi-cloud-management', description: 'Cloud solutions', icon: '☁️', popular: true }
>>>>>>> origin/main
=======
      name: 'IT Services',
      href: '/it-services',
      icon: Cpu,
      dropdown: [
        { name: 'Cloud Migration', href: '/cloud-migration', icon: Cloud, price: 'Custom' },
        { name: 'IT Consulting', href: '/it-consulting', icon: Users, price: '$150/hour' },
        { name: 'Cybersecurity', href: '/cybersecurity', icon: Shield, price: '$299/month' },
        { name: 'Database Management', href: '/database-management', icon: Database, price: '$199/month' },
        { name: 'System Integration', href: '/system-integration', icon: Settings, price: 'Custom' },
        { name: 'Network Security', href: '/network-security', icon: Lock, price: '$249/month' }
      ]
    },
    {
      name: 'Industry Solutions',
      href: '/industry-solutions',
      icon: Building,
      dropdown: [
        { name: 'Healthcare AI', href: '/ai-healthcare', icon: Stethoscope, price: '$1,999/month' },
        { name: 'Fintech AI', href: '/ai-fintech', icon: CreditCard, price: '$1,499/month' },
        { name: 'Manufacturing AI', href: '/ai-manufacturing', icon: Factory, price: '$2,499/month' },
        { name: 'Retail AI', href: '/ai-retail', icon: ShoppingCart, price: '$999/month' },
        { name: 'Education AI', href: '/ai-education', icon: GraduationCap, price: '$799/month' },
        { name: 'Transportation AI', href: '/ai-transportation', icon: Car, price: '$1,299/month' }
      ]
    },
    {
      name: 'Advanced Tech',
      href: '/advanced-tech',
      icon: Zap,
      dropdown: [
        { name: 'Quantum Computing', href: '/quantum-computing', icon: Atom, price: 'Custom' },
        { name: 'Blockchain Solutions', href: '/blockchain', icon: Lock, price: '$999/month' },
        { name: 'IoT Solutions', href: '/iot-solutions', icon: Smartphone, price: '$499/month' },
        { name: 'AR/VR Development', href: '/ar-vr', icon: Gamepad2, price: '$1,999/month' },
        { name: 'Machine Learning', href: '/machine-learning', icon: Brain, price: '$799/month' },
        { name: 'Deep Learning', href: '/deep-learning', icon: Cpu, price: '$1,299/month' }
>>>>>>> d657cf2a1bc2 (fix: resolve merge conflicts in App.tsx, Footer.tsx, and Navigation.tsx)
=======
      services: [
        { name: 'Quantum Computing Solutions', href: '/ai-quantum-computing' },
        { name: '5G Implementation', href: '/5g-implementation' },
        { name: 'Edge Computing', href: '/edge-computing' },
        { name: 'IoT Platform', href: '/iot-platform' },
        { name: 'Blockchain Solutions', href: '/blockchain-solutions' },
        { name: 'AR/VR Development', href: '/ar-vr-development' },
        { name: 'Autonomous Systems', href: '/autonomous-systems' },
        { name: 'Smart City Solutions', href: '/smart-city-solutions' }
>>>>>>> cursor/fix-errors-and-merge-to-main-14e4
      ]
    }
  ];

<<<<<<< HEAD
<<<<<<< HEAD
  const mainNavItems = [
    { name: 'Home', path: '/', icon: '🏠' },
    { name: 'About', path: '/about', icon: '👥' },
    { name: 'Services', path: '/services', icon: '⚙️' },
    { name: 'Pricing', path: '/pricing', icon: '💰' },
    { name: 'Case Studies', path: '/case-studies', icon: '📊' },
    { name: 'Blog', path: '/blog', icon: '📝' },
    { name: 'Contact', path: '/contact', icon: '📞' }
=======
  const mainLinks = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'About', path: '/about', icon: Users },
    { name: 'Services', path: '/services', icon: Briefcase },
    { name: 'Case Studies', path: '/case-studies', icon: FileText },
    { name: 'Blog', path: '/blog', icon: MessageSquare },
    { name: 'Pricing', path: '/pricing', icon: BarChart },
    { name: 'Contact', path: '/contact', icon: Phone }
>>>>>>> origin/main
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeAllMenus = () => {
    setIsOpen(false);
    setServicesOpen(false);
  };

  const handleServicesClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setServicesOpen(!servicesOpen);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2" onClick={closeAllMenus}>
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </Link>

<<<<<<< HEAD
            {/* Services Dropdown */}
            <div className="relative">
=======

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const aiServices = [
    { name: 'AI Services', url: '/ai-services', icon: Brain, description: 'Comprehensive AI solutions' },
    { name: 'AI Marketing', url: '/ai-marketing', icon: Target, description: 'AI-powered marketing automation' },
    { name: 'AI Automation', url: '/ai-automation', icon: Settings, description: 'Intelligent process automation' },
    { name: 'AI Healthcare', url: '/ai-healthcare', icon: Users, description: 'Medical AI solutions' },
    { name: 'AI Fintech', url: '/ai-fintech', icon: BarChart, description: 'Financial AI applications' },
    { name: 'AI Content Generation', url: '/ai-content-generation', icon: FileText, description: 'AI content creation' },
    { name: 'AI Data Analytics', url: '/ai-data-analytics', icon: BarChart, description: 'Advanced data insights' },
    { name: 'AI Cybersecurity', url: '/ai-cybersecurity', icon: Shield, description: 'AI security solutions' }
  ];

  const itServices = [
    { name: 'IT Services', url: '/it-services', icon: Code, description: 'Comprehensive IT solutions' },
    { name: 'IT Infrastructure', url: '/it-infrastructure', icon: Database, description: 'Enterprise infrastructure' },
    { name: 'IT Support', url: '/it-support', icon: Settings, description: 'Comprehensive IT support' },
    { name: 'Cloud Infrastructure', url: '/cloud-infrastructure', icon: Cloud, description: 'Cloud migration & setup' },
    { name: 'Cybersecurity', url: '/cybersecurity', icon: Shield, description: 'Security solutions' },
    { name: 'Database Management', url: '/database-management', icon: Database, description: 'Database management' },
    { name: 'IT Consulting', url: '/it-consulting', icon: Briefcase, description: 'Strategic IT consulting' }
  ];

  const emergingTech = [
    { name: 'Quantum Computing', url: '/quantum-computing', icon: Cpu, description: 'Next-gen computing' },
    { name: 'Autonomous Systems', url: '/autonomous-systems', icon: Settings, description: 'Self-managing systems' },
    { name: 'Blockchain Web3', url: '/blockchain-web3', icon: Globe, description: 'Decentralized solutions' },
    { name: 'Business Intelligence', url: '/business-intelligence', icon: BarChart, description: 'Data-driven insights' },
    { name: 'IoT Edge Computing', url: '/iot-edge-computing', icon: Smartphone, description: 'Connected devices' },
    { name: 'Robotics', url: '/robotics', icon: Settings, description: 'Intelligent robots' },
    { name: 'AR/VR Solutions', url: '/ar-vr-solutions', icon: Globe, description: 'Immersive experiences' }
  ];

  const companyPages = [
    { name: 'About Us', url: '/about' },
    { name: 'Our Team', url: '/team' },
    { name: 'Careers', url: '/careers' },
    { name: 'Case Studies', url: '/case-studies' },
    { name: 'Blog', url: '/blog' },
    { name: 'Contact', url: '/contact' }
  ];

  const handlePhoneClick = () => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as Window & { gtag?: (...args: unknown[]) => void }).gtag?.('event', 'phone_click', {
        event_category: 'engagement',
        event_label: 'navigation_phone_number',
      });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-lg border-b border-white/10' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-cyan-400 transition-colors">
              Home
            </Link>
            
            {/* AI Services Dropdown */}
            <div className="relative group">
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0174
              <button
                className="flex items-center text-white hover:text-cyan-400 transition-colors"
                onMouseEnter={() => setAiServicesOpen(true)}
                onMouseLeave={() => setAiServicesOpen(false)}
              >
<<<<<<< HEAD
                <Brain className="w-4 h-4" />
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {mainNavItems.map((item) => (
=======
            {/* Desktop Navigation */}
<<<<<<< HEAD
<<<<<<< HEAD
            <div className="hidden lg:flex items-center space-x-8"></div>
=======
            <div className="hidden lg:flex items-center space-x-8">
>>>>>>> origin/main
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-6ffe
=======
            <div className="hidden lg:flex items-center space-x-8">
>>>>>>> cursor/fix-errors-and-merge-to-main-14e4
              <Link
                to="/"
                className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
                onClick={closeAllMenus}
=======
                AI Services
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {aiServicesOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-4 z-50"
                  onMouseEnter={() => setAiServicesOpen(true)}
                  onMouseLeave={() => setAiServicesOpen(false)}
                >
                  <div className="grid grid-cols-2 gap-4 px-4">
                    {aiServices.map((service, index) => (
                      <Link
                        key={index}
                        to={service.url}
                        className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <service.icon className="w-5 h-5 text-cyan-400 mt-0.5" />
                        <div>
                          <div className="font-medium text-gray-900">{service.name}</div>
                          <div className="text-sm text-gray-500">{service.description}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* IT Services Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center text-white hover:text-cyan-400 transition-colors"
                onMouseEnter={() => setItServicesOpen(true)}
                onMouseLeave={() => setItServicesOpen(false)}
              >
                IT Services
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {itServicesOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-4 z-50"
                  onMouseEnter={() => setItServicesOpen(true)}
                  onMouseLeave={() => setItServicesOpen(false)}
                >
                  <div className="grid grid-cols-2 gap-4 px-4">
                    {itServices.map((service, index) => (
                      <Link
                        key={index}
                        to={service.url}
                        className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <service.icon className="w-5 h-5 text-cyan-400 mt-0.5" />
                        <div>
                          <div className="font-medium text-gray-900">{service.name}</div>
                          <div className="text-sm text-gray-500">{service.description}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Emerging Tech Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center text-white hover:text-cyan-400 transition-colors"
                onMouseEnter={() => setMicroSaasOpen(true)}
                onMouseLeave={() => setMicroSaasOpen(false)}
              >
                Emerging Tech
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {microSaasOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-4 z-50"
                  onMouseEnter={() => setMicroSaasOpen(true)}
                  onMouseLeave={() => setMicroSaasOpen(false)}
                >
                  <div className="grid grid-cols-2 gap-4 px-4">
                    {emergingTech.map((tech, index) => (
                      <Link
                        key={index}
                        to={tech.url}
                        className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <tech.icon className="w-5 h-5 text-cyan-400 mt-0.5" />
                        <div>
                          <div className="font-medium text-gray-900">{tech.name}</div>
                          <div className="text-sm text-gray-500">{tech.description}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link to="/micro-saas" className="text-white hover:text-cyan-400 transition-colors">
              Micro SaaS
            </Link>

            <Link to="/pricing" className="text-white hover:text-cyan-400 transition-colors">
              Pricing
            </Link>

            <Link to="/blog" className="text-white hover:text-cyan-400 transition-colors">
              Blog
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+13024640950"
              onClick={handlePhoneClick}
              className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">(302) 464-0950</span>
            </a>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white hover:text-cyan-400 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-slate-900/95 backdrop-blur-lg border-t border-white/10">
            <div className="px-4 py-6 space-y-4">
              <Link
                to="/"
                className="block text-white hover:text-cyan-400 transition-colors py-2"
                onClick={() => setIsOpen(false)}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0174
              >
                Home
              </Link>
<<<<<<< HEAD
              <Link
                to="/about"
                className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
                onClick={closeAllMenus}
              >
                About
              </Link>
<<<<<<< HEAD
            ))}

            {/* Services Dropdown */}
            <div className="relative group">
              <button className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center space-x-1">
                <span className="text-sm">⚙️</span>
                <span className="font-medium">Services</span>
                <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-[900px] bg-gray-900 rounded-xl shadow-2xl border border-cyan-500 py-6 z-50">
                  <div className="grid grid-cols-2 gap-6 px-6">
                    {serviceCategories.map((category, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex items-center space-x-2 mb-2">
                          <category.icon className={`w-4 h-4 ${category.color}`} />
                          <span className="text-sm font-semibold text-white">{category.title}</span>
                        </div>
                        <div className="space-y-1">
                          {category.services.slice(0, 3).map((service, serviceIndex) => (
                            <Link
                              key={serviceIndex}
                              href={service.path}
                              className="block text-xs text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-1"
                            >
                              {typeof service.icon === 'string' ? service.icon : <service.icon className="w-3 h-3 inline mr-1" />} {service.name}
                            </Link>
                          ))}
                          <Link
                            href="/services"
                            className="block text-xs text-cyan-400 hover:text-cyan-300 transition-colors duration-300 py-1 font-medium"
                          >
                            View All →
                          </Link>
                        </div>
                      </div>
=======
              
              <div>
                <button
                  className="flex items-center justify-between w-full text-white hover:text-cyan-400 transition-colors py-2"
                  onClick={() => setServicesOpen(!servicesOpen)}
                >
                  Services
                  <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {servicesOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    <div className="text-cyan-400 font-medium text-sm mb-2">AI Services</div>
                    {aiServices.slice(0, 4).map((service, index) => (
                      <Link
                        key={index}
                        to={service.url}
                        className="block text-gray-300 hover:text-cyan-400 transition-colors py-1 text-sm"
                        onClick={() => setIsOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                    <div className="text-cyan-400 font-medium text-sm mb-2 mt-4">IT Services</div>
                    {itServices.slice(0, 4).map((service, index) => (
                      <Link
                        key={index}
                        to={service.url}
                        className="block text-gray-300 hover:text-cyan-400 transition-colors py-1 text-sm"
                        onClick={() => setIsOpen(false)}
                      >
                        {service.name}
                      </Link>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0174
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+13024640950"
              className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">+1 302 464 0950</span>
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="flex items-center space-x-2 text-pink-400 hover:text-pink-300 transition-colors duration-300"
            >
              <Mail className="w-4 h-4" />
              <span className="text-sm font-medium">Email</span>
            </a>
            <a
              href="/contact"
              className="cyber-button px-4 py-2 text-sm font-medium"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-white hover:text-cyan-400 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-slate-900/95 backdrop-blur-md border-t border-cyan-400/20">
            <div className="px-4 py-6 space-y-6">
              {/* Main Navigation */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white mb-3 neon-text">Navigation</h3>
                {mainNavItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.path}
                    onClick={closeAllMenus}
                    className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2"
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span className="font-medium">{item.name}</span>
                  </Link>
                ))}
              </div>

<<<<<<< HEAD
              {/* Services */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white mb-3 neon-text">Services</h3>
                {serviceCategories.map((category, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <category.icon className={`w-4 h-4 ${category.color}`} />
                      <span className="text-sm font-semibold text-white">{category.title}</span>
                    </div>
                    <div className="ml-6 space-y-1">
                      {category.services.slice(0, 4).map((service, serviceIndex) => (
                        <Link
                          key={serviceIndex}
                          href={service.path}
                          onClick={closeAllMenus}
                          className="block text-sm text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-1"
                        >
                          {typeof service.icon === 'string' ? service.icon : <service.icon className="w-3 h-3 inline mr-2" />} {service.name}
                        </Link>
=======
              
              <div className="relative">
                <button
                  className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium flex items-center space-x-1"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <span>Services</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                {servicesOpen && (
                  <div
                    className="absolute top-full left-0 mt-2 w-96 bg-slate-900/95 backdrop-blur-md rounded-lg shadow-xl border border-white/10"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <div className="p-6">
                      <div className="grid grid-cols-2 gap-6">
                        {serviceCategories.map((category, index) => (
                          <div key={index} className="space-y-3">
                            <div className="flex items-center space-x-2">
                              <category.icon className={`w-5 h-5 ${category.color}`} />
                              <h3 className="text-white font-semibold text-sm">{category.title}</h3>
                            </div>
                            <ul className="space-y-2">
                              {category.services.slice(0, 4).map((service, serviceIndex) => (
                                <li key={serviceIndex}>
                                  <Link
                                    to={service.href}
                                    className="text-gray-300 hover:text-cyan-400 transition-colors text-sm block"
                                    onClick={closeAllMenus}
                                  >
                                    {service.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
<<<<<<< HEAD
                          <div className="space-y-2">
<<<<<<< HEAD
                            {category.services.slice(0, 6).map((service, serviceIndex) => (
                              <Link;
=======
                            {category.services.slice(0, 6).map((service, serviceIndex) => (</div>
                              <Link
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
                                key={serviceIndex}
                                to={service.path}
                                className="block px-3 py-2 text-sm text-gray-300 hover: bg-cyan-400/20 hover:text-cyan-400 rounded-lg transition-colors",
                                onClick={closeAllMenus}
                              >
                                {service.name}
                              </Link>
                            ))}
                          </div>
                        </div>
>>>>>>> origin/main
                      ))}
                    </div>
<<<<<<< HEAD
                    <div className="border-t border-cyan-400/20 mt-6 pt-4 px-6">
                      <Link;
=======
                    <div className="border-t border-cyan-400/20 mt-6 pt-4 px-6"></div>
                      <Link
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
                        to="/services"
                        className="block w-full text-center bg-gradient-to-r from-cyan-600 to-purple-600 text-white py-2 px-4 rounded-lg font-medium hover: from-cyan-700 hover:to-purple-700 transition-all",
                        onClick={closeAllMenus}
                      >
                        View All Services;
                      </Link>
=======
                        ))}
                      </div>
                      <div className="border-t border-cyan-400/20 mt-6 pt-4 px-6">
                        <Link
                          to="/services"
                          className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
                          onClick={closeAllMenus}
                        >
                          View All Services
                        </Link>
                      </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-14e4
                    </div>
                  </div>
                )}
              </div>

              <Link
                to="/case-studies"
                className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
                onClick={closeAllMenus}
              >
                Case Studies
              </Link>
              <Link
                to="/blog"
                className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
                onClick={closeAllMenus}
=======
              <Link
                to="/micro-saas"
                className="block text-white hover:text-cyan-400 transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Micro SaaS
              </Link>

              <Link
                to="/pricing"
                className="block text-white hover:text-cyan-400 transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </Link>

              <Link
                to="/blog"
                className="block text-white hover:text-cyan-400 transition-colors py-2"
                onClick={() => setIsOpen(false)}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0174
              >
                Blog
              </Link>
              <Link
                to="/pricing"
                className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
                onClick={closeAllMenus}
              >
                Pricing
              </Link>

<<<<<<< HEAD
<<<<<<< HEAD
              {/* Contact Info */}
              <div className="space-y-4 pt-4 border-t border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-3 neon-text">Contact</h3>
                <a
                  href="tel:+13024640950"
                  className="flex items-center space-x-3 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 py-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>+1 302 464 0950</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="flex items-center space-x-3 text-pink-400 hover:text-pink-300 transition-colors duration-300 py-2"
                >
                  <Mail className="w-5 h-5" />
                  <span>kleber@ziontechgroup.com</span>
                </a>
                <div className="flex items-center space-x-3 text-green-400 py-2">
                  <MapPin className="w-5 h-5" />
                  <span className="text-sm">364 E Main St STE 1008<br />Middletown, DE 19709</span>
                </div>
                <a
                  href="/contact"
                  onClick={closeAllMenus}
                  className="cyber-button px-6 py-3 text-center block w-full"
                >
                  Get Started
                </a>
              </div>
=======
              {/* Search Button */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 text-white hover:text-cyan-400 transition-colors duration-200"
              >
                <Search className="w-5 h-5" />
              </button>

              <Link
                to="/contact"
                className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
                onClick={closeAllMenus}
              >
                Contact
              </Link>
              
              {/* CTA Button */}
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 inline-flex items-center"
                onClick={closeAllMenus}
              >
                Get Started
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
>>>>>>> origin/main
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-white hover:text-cyan-400 transition-colors duration-200"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="lg:hidden bg-slate-900/95 backdrop-blur-md rounded-lg mt-2 p-4">
              <div className="space-y-4">
                {mainLinks.map((link, index) => (
                  <Link
                    key={index}
                    to={link.path}
                    className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium flex items-center space-x-2 py-2"
                    onClick={closeAllMenus}
                  >
                    <link.icon className="w-5 h-5" />
                    <span>{link.name}</span>
                  </Link>
                ))}
                
<<<<<<< HEAD
                {/* Mobile Services */}
<<<<<<< HEAD
                <div>
                  <button;
                    className="text-white hover: text-cyan-400 transition-colors duration-200 font-medium flex items-center space-x-2 py-2",
=======
                <div></div>
                  <button
                    className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium flex items-center space-x-2 py-2"
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
                    onClick={() => setServicesOpen(!servicesOpen)}
                  >
                    <Settings className="w-4 h-4" />
                    <span>Services</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {servicesOpen && (
                    <div className="ml-6 mt-2 space-y-2">
                      {serviceCategories.map((category, categoryIndex) => (</div>
                        <div key={categoryIndex} className="space-y-2"></div>
                          <div className="flex items-center space-x-2"></div>
                            <category.icon className={`w-4 h-4 ${category.color}`} />
                            <span className="text-cyan-400 font-medium text-sm">{category.title}</span>
                          </div>
                          <div className="ml-6 space-y-1">
<<<<<<< HEAD
                            {category.services.slice(0, 3).map((service, serviceIndex) => (
                              <Link;
=======
                            {category.services.slice(0, 3).map((service, serviceIndex) => (</div>
                              <Link
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
                                key={serviceIndex}
                                to={service.path}
                                className="block text-gray-300 hover: text-cyan-400 text-sm py-1",
                                onClick={closeAllMenus}
                              >
                                {service.name}
                              </Link>
                            ))}
                          </div>
                        </div>
=======
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-slate-900/95 backdrop-blur-md border-b border-cyan-400/20'
        : 'bg-transparent'
    } ${className}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
              <Zap className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl lg:text-2xl font-bold text-white cyber-text neon-text">
                Zion Tech Group
              </span>
              <span className="text-xs text-cyan-400 font-medium hidden sm:block">
                AI & IT Solutions
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                <button
                  onClick={() => handleDropdownToggle(item.name)}
                  className="flex items-center space-x-2 text-white hover:text-cyan-400 transition-colors duration-300 font-medium"
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                    activeDropdown === item.name ? 'rotate-180' : ''
                  }`} />
                </button>

                {/* Dropdown Menu */}
                {activeDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-slate-900/95 backdrop-blur-md border border-cyan-400/20 rounded-lg shadow-xl cyber-glow">
                    <div className="p-4">
                      <div className="grid grid-cols-1 gap-2">
                        {item.dropdown?.map((subItem) => (
                          <a
                            key={subItem.name}
                            href={subItem.href}
                            className="flex items-center justify-between p-3 rounded-lg hover:bg-cyan-400/10 transition-colors duration-300 group"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <div className="flex items-center space-x-3">
                              <subItem.icon className="w-4 h-4 text-cyan-400" />
                              <span className="text-white group-hover:text-cyan-400 transition-colors">
                                {subItem.name}
                              </span>
                            </div>
                            <span className="text-xs text-cyan-400 font-medium">
                              {subItem.price}
                            </span>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-4 text-sm">
              <a
                href="tel:+13024640950"
                onClick={handlePhoneClick}
                className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>(302) 464-0950</span>
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Contact</span>
              </a>
            </div>
            <a
              href="/contact"
              className="cyber-button inline-flex items-center space-x-2"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-white hover:text-cyan-400 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden mobile-menu absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-md border-t border-cyan-400/20 cyber-glow">
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <button
                    onClick={() => handleDropdownToggle(item.name)}
                    className="flex items-center justify-between w-full p-3 text-left text-white hover:text-cyan-400 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <item.icon className="w-5 h-5" />
                      <span className="font-medium">{item.name}</span>
                    </div>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                      activeDropdown === item.name ? 'rotate-180' : ''
                    }`} />
                  </button>

                  {activeDropdown === item.name && (
                    <div className="ml-8 space-y-2">
                      {item.dropdown?.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          className="flex items-center justify-between p-2 text-gray-300 hover:text-cyan-400 transition-colors"
                          onClick={() => {
                            setActiveDropdown(null);
                            setIsOpen(false);
                          }}
                        >
                          <div className="flex items-center space-x-3">
                            <subItem.icon className="w-4 h-4" />
                            <span>{subItem.name}</span>
                          </div>
                          <span className="text-xs text-cyan-400">
                            {subItem.price}
                          </span>
                        </a>
>>>>>>> d657cf2a1bc2 (fix: resolve merge conflicts in App.tsx, Footer.tsx, and Navigation.tsx)
                      ))}
                    </div>
                  )}
                </div>
<<<<<<< HEAD
                
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-14e4
                {/* Mobile CTA */}
                <Link
                  key={index}
                  to={item.path}
                  className="block text-white hover:text-cyan-400 transition-colors duration-200 font-medium py-2"
                  onClick={closeAllMenus}
                >
                  Get Started
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Search Modal */}
      <EnhancedSearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
=======
              ))}

              {/* Mobile Contact Info */}
              <div className="pt-4 border-t border-cyan-400/20 space-y-3">
                <a
                  href="tel:+13024640950"
                  onClick={handlePhoneClick}
                  className="flex items-center space-x-3 text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>(302) 464-0950</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="flex items-center space-x-3 text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>kleber@ziontechgroup.com</span>
                </a>
                <a
                  href="/contact"
                  className="cyber-button w-full text-center justify-center mt-4"
                  onClick={() => setIsOpen(false)}
                >
                  Get Started
                </a>
=======
              <div className="pt-4 border-t border-white/10">
                <a
                  href="tel:+13024640950"
                  onClick={handlePhoneClick}
                  className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors py-2"
                >
                  <Phone className="w-4 h-4" />
                  <span className="font-medium">(302) 464-0950</span>
                </a>
                <Link
                  to="/contact"
                  className="block bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold text-center hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 mt-4"
                  onClick={() => setIsOpen(false)}
                >
                  Get Started
                </Link>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0174
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
>>>>>>> d657cf2a1bc2 (fix: resolve merge conflicts in App.tsx, Footer.tsx, and Navigation.tsx)
  );
};

<<<<<<< HEAD
<<<<<<< HEAD
export default Navigation;
export default Navigation;
=======
export default Navigation;
>>>>>>> origin/main
=======
Navigation.displayName = 'Navigation';

export default Navigation;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0174
