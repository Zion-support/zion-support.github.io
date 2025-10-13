<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import { Link } from 'react-router-dom';
=======
'use client';
=======
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-08bc
import React, { useState, useCallback, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Zap, 
  Globe, 
  ArrowRight, 
  Star, 
  Users, 
  Award, 
  BarChart3, 
  Cloud, 
  Sparkles, 
  Mail, 
  Smartphone, 
  Monitor,
  Phone,
  MapPin,
  Code,
  Database,
  ChevronDown,
  Menu,
  X,
  SidebarIcon,
  Package,
=======
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Brain,
  Shield,
  Zap,
  Globe,
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Star,
  Users,
  Award,
  BarChart3,
  Cloud,
  Code,
  Database,
  Network,
  Smartphone,
  Monitor,
  Target,
  Calendar,
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-09ab
  Heart,
  Receipt,
  TrendingUp,
  Cpu,
<<<<<<< HEAD
  Network,
  FileText,
  Clock
} from 'lucide-react';
import FuturisticButton from './FuturisticButton';
<<<<<<< HEAD
=======
  Package,
  SidebarIcon
} from "lucide-react";
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-09ab
=======
import React, { useState, useCallback, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ChevronDown, Zap, Cloud, Shield, Database, Code, Brain, BarChart3, Star, ArrowRight, Globe, Cpu, Link as LinkIcon, Sidebar as SidebarIcon } from 'lucide-react'
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0acf
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0c2e

<<<<<<< HEAD
interface NavigationProps {
  onSidebarToggle: () => void;
}
=======
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
<<<<<<< HEAD
import { Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-084e

const Navigation: React.FC<NavigationProps> = ({ onSidebarToggle }) => {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0c2e
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const toggleMenu = useCallback(() => {
<<<<<<< HEAD
    setIsMenuOpen(prev => !prev);
  }, []);

<<<<<<< HEAD
  const toggleDropdown = useCallback((dropdown: string) => {
    setActiveDropdown(prev => prev === dropdown ? null : dropdown);
  }, []);

=======
    setIsOpen(!isOpen)
  }, [isOpen])

  const toggleServices = useCallback(() => {
    setIsServicesOpen(!isServicesOpen)
  }, [isServicesOpen])

  const toggleMicroSaas = useCallback(() => {
    setIsMicroSaasOpen(!isMicroSaasOpen)
  }, [isMicroSaasOpen])

  const toggleItServices = useCallback(() => {
    setIsItServicesOpen(!isItServicesOpen);
  }, [isItServicesOpen]);

  const toggle5GServices = useCallback(() => {
    setIs5GServicesOpen(!is5GServicesOpen);
  }, [is5GServicesOpen]);

>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0c2e
  const isActive = useCallback((path: string) => {
    return location.pathname === path;
  }, [location.pathname]);

  const navigationItems = useMemo(() => [
    {
      name: 'Home',
      path: '/',
      icon: <Globe className="w-4 h-4" />
    },
    {
      name: 'About',
      path: '/about',
      icon: <Users className="w-4 h-4" />
    },
    {
      name: 'Services',
      path: '/services',
      icon: <Award className="w-4 h-4" />,
      hasDropdown: true,
      dropdownItems: [
        {
          name: 'AI Services',
          icon: <Brain className="w-4 h-4" />,
          items: [
            { name: 'AI Analytics', path: '/ai-analytics', icon: <BarChart3 className="w-4 h-4" /> },
            { name: 'AI Automation', path: '/ai-automation', icon: <Zap className="w-4 h-4" /> },
            { name: 'AI Business Intelligence', path: '/ai-business-intelligence', icon: <BarChart3 className="w-4 h-4" /> },
            { name: 'AI Content Generation', path: '/ai-content-generation', icon: <Code className="w-4 h-4" /> },
            { name: 'AI Customer Service', path: '/ai-customer-service', icon: <Users className="w-4 h-4" /> },
            { name: 'AI Data Analytics', path: '/ai-data-analytics', icon: <Database className="w-4 h-4" /> },
            { name: 'AI Email Automation', path: '/ai-email-automation', icon: <Mail className="w-4 h-4" /> },
            { name: 'AI Fraud Detection', path: '/ai-fraud-detection', icon: <Shield className="w-4 h-4" /> },
            { name: 'AI Healthcare', path: '/ai-healthcare', icon: <Heart className="w-4 h-4" /> },
            { name: 'AI Marketing', path: '/ai-marketing', icon: <TrendingUp className="w-4 h-4" /> },
            { name: 'AI Predictive Analytics', path: '/ai-predictive-analytics', icon: <BarChart3 className="w-4 h-4" /> },
            { name: 'AI Project Management', path: '/ai-project-management', icon: <Award className="w-4 h-4" /> },
            { name: 'AI Recommendation Engine', path: '/ai-recommendation-engine', icon: <Star className="w-4 h-4" /> },
            { name: 'AI Sales Automation', path: '/ai-sales-automation', icon: <TrendingUp className="w-4 h-4" /> },
            { name: 'AI Workflow Automation', path: '/ai-workflow-automation', icon: <Zap className="w-4 h-4" /> }
          ]
        },
        {
          name: 'IT Services',
          icon: <Monitor className="w-4 h-4" />,
          items: [
            { name: 'Cloud Infrastructure', path: '/cloud-infrastructure', icon: <Cloud className="w-4 h-4" /> },
            { name: 'Cybersecurity Solutions', path: '/cybersecurity-solutions', icon: <Shield className="w-4 h-4" /> },
            { name: 'Web Development', path: '/web-development', icon: <Globe className="w-4 h-4" /> },
            { name: 'Mobile Development', path: '/mobile-development', icon: <Smartphone className="w-4 h-4" /> },
            { name: 'Database Management', path: '/database-management', icon: <Database className="w-4 h-4" /> },
            { name: 'Custom Software', path: '/custom-software', icon: <Code className="w-4 h-4" /> },
            { name: 'Network Infrastructure', path: '/network-infrastructure', icon: <Network className="w-4 h-4" /> }
          ]
        },
        {
          name: 'Micro SAAS',
          icon: <Package className="w-4 h-4" />,
          items: [
            { name: 'Zion Analytics Pro', path: '/zion-analytics-pro', icon: <BarChart3 className="w-4 h-4" /> },
            { name: 'Zion Security Shield', path: '/zion-security-shield', icon: <Shield className="w-4 h-4" /> },
            { name: 'Zion Cloud Vault', path: '/zion-cloud-vault', icon: <Cloud className="w-4 h-4" /> },
            { name: 'Zion Content Studio', path: '/zion-content-studio', icon: <Code className="w-4 h-4" /> }
          ]
        },
        {
          name: '5G Solutions',
          icon: <Network className="w-4 h-4" />,
          items: [
            { name: '5G Solutions', path: '/5g-solutions', icon: <Network className="w-4 h-4" /> },
            { name: '5G Data Analytics', path: '/5g-data-analytics', icon: <BarChart3 className="w-4 h-4" /> },
            { name: '5G Edge Computing', path: '/5g-edge-computing', icon: <Cloud className="w-4 h-4" /> },
            { name: '5G Implementation', path: '/5g-implementation', icon: <Zap className="w-4 h-4" /> },
            { name: '5G Mobile Applications', path: '/5g-mobile-applications', icon: <Smartphone className="w-4 h-4" /> },
            { name: '5G Network Infrastructure', path: '/5g-network-infrastructure', icon: <Cpu className="w-4 h-4" /> },
            { name: '5G Private Networks', path: '/5g-private-networks', icon: <Shield className="w-4 h-4" /> },
            { name: '5G Smart City Solutions', path: '/5g-smart-city-solutions', icon: <Globe className="w-4 h-4" /> },
            { name: '5G IoT Solutions', path: '/5g-iot-solutions', icon: <Smartphone className="w-4 h-4" /> }
          ]
        }
      ]
    },
    {
      name: 'Contact',
      path: '/contact',
      icon: <Phone className="w-4 h-4" />
<<<<<<< HEAD
=======
      label: 'Home',
      href: '/',
      icon: <Star className="w-4 h-4" />
    },
    {
      label: 'AI Services',
      href: '/ai-services',
      icon: <Brain className="w-4 h-4" />,
      dropdown: [
        { label: 'AI Analytics', href: '/ai-analytics' },
        { label: 'AI Automation', href: '/ai-automation' },
        { label: 'AI Business Intelligence', href: '/ai-business-intelligence' },
        { label: 'AI Content Generation', href: '/ai-content-generation' },
        { label: 'AI Customer Service', href: '/ai-customer-service' },
        { label: 'AI Data Analytics', href: '/ai-data-analytics' },
        { label: 'AI Email Automation', href: '/ai-email-automation' },
        { label: 'AI Fraud Detection', href: '/ai-fraud-detection' },
        { label: 'AI Healthcare', href: '/ai-healthcare' },
        { label: 'AI Marketing', href: '/ai-marketing' },
        { label: 'AI Predictive Analytics', href: '/ai-predictive-analytics' },
        { label: 'AI Project Management', href: '/ai-project-management' },
        { label: 'AI Recommendation Engine', href: '/ai-recommendation-engine' },
        { label: 'AI Sales Automation', href: '/ai-sales-automation' },
        { label: 'AI Workflow Automation', href: '/ai-workflow-automation' }
      ]
    },
    {
      label: 'IT Services',
      href: '/services',
      icon: <Shield className="w-4 h-4" />,
      dropdown: [
        { label: 'Cloud Infrastructure', href: '/cloud-infrastructure' },
        { label: 'Cybersecurity Solutions', href: '/cybersecurity-solutions' },
        { label: 'Web Development', href: '/web-development' },
        { label: 'Mobile Development', href: '/mobile-development' },
        { label: 'Database Management', href: '/database-management' },
        { label: 'Custom Software', href: '/custom-software' },
        { label: 'Network Infrastructure', href: '/network-infrastructure' }
      ]
    },
    {
      label: 'Micro SAAS',
      href: '/micro-saas',
      icon: <Zap className="w-4 h-4" />,
      dropdown: [
        { label: 'Zion Analytics Pro', href: '/zion-analytics-pro' },
        { label: 'Zion Security Shield', href: '/zion-security-shield' },
        { label: 'Zion Cloud Vault', href: '/zion-cloud-vault' },
        { label: 'Zion Content Studio', href: '/zion-content-studio' }
      ]
    },
    {
      label: '5G Solutions',
      href: '/5g-solutions',
      icon: <Globe className="w-4 h-4" />,
      dropdown: [
        { label: '5G Data Analytics', href: '/5g-data-analytics' },
        { label: '5G Edge Computing', href: '/5g-edge-computing' },
        { label: '5G Implementation', href: '/5g-implementation' },
        { label: '5G Mobile Applications', href: '/5g-mobile-applications' },
        { label: '5G Network Infrastructure', href: '/5g-network-infrastructure' },
        { label: '5G Private Networks', href: '/5g-private-networks' },
        { label: '5G Smart City Solutions', href: '/5g-smart-city-solutions' },
        { label: '5G IoT Solutions', href: '/5g-iot-solutions' }
      ]
    },
    {
      label: 'About',
      href: '/about',
      icon: <Users className="w-4 h-4" />
    },
    {
      label: 'Contact',
      href: '/contact',
      icon: <Mail className="w-4 h-4" />
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0c2e
    }
  ], []);
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0792

<<<<<<< HEAD
=======
'use client';
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-01d9
=======
'use client';
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-029f
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
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
} from 'lucide-react';
=======
import { ChevronDown, Phone, Mail, MapPin, Menu, X, Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Star, Settings, Calendar, CheckSquare, FileText } from 'lucide-react';
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-08e3
=======
import { ChevronDown, Phone, Mail, MapPin, Menu, X, Brain, Cloud, Shield, Code, BarChart, Users, Zap } from 'lucide-react';
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0ac5
=======
  const aiServices = useMemo(() => [
    { name: 'AI Analytics', path: '/ai-analytics', icon: <BarChart3 className="w-4 h-4" /> },
    { name: 'AI Automation', path: '/ai-automation', icon: <Cpu className="w-4 h-4" /> },
    { name: 'AI Content Generation', path: '/ai-content-generation', icon: <Sparkles className="w-4 h-4" /> },
    { name: 'AI Customer Service', path: '/ai-customer-service', icon: <Users className="w-4 h-4" /> },
    { name: 'AI Data Analytics', path: '/ai-data-analytics', icon: <Database className="w-4 h-4" /> },
    { name: 'AI Marketing', path: '/ai-marketing', icon: <TrendingUp className="w-4 h-4" /> },
    { name: 'AI Predictive Analytics', path: '/ai-predictive-analytics', icon: <Brain className="w-4 h-4" /> },
    { name: 'AI Workflow Automation', path: '/ai-workflow-automation', icon: <Zap className="w-4 h-4" /> }
  ], []);
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0c2e

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aiServicesOpen, setAiServicesOpen] = useState(false);
  const [itServicesOpen, setItServicesOpen] = useState(false);
<<<<<<< HEAD
  const [microSaasOpen, setMicroSaasOpen] = useState(false);
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0ac5
  const [isScrolled, setIsScrolled] = useState(false);

<<<<<<< HEAD
  const handleResize = () => {
    if (window.innerWidth >= 1024) {
      setIsOpen(false);
=======
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ChevronDown, Zap, Cloud, Shield, Globe, Database, Smartphone } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen)
  }

  const services = [
    {
      title: 'AI Services',
      href: '/ai-services',
      icon: <Zap className="w-4 h-4" />,
      description: 'AI-powered solutions for your business'
    },
    {
      title: 'IT Services',
      href: '/it-services',
<<<<<<< HEAD
      icon: <Database className="w-4 h-4" />,
      description: 'Comprehensive IT infrastructure services'
=======
      icon: Shield,
      description: 'Information Technology Solutions'
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0aab
    },
    {
      title: 'Cloud Services',
      href: '/cloud-services',
      icon: <Cloud className="w-4 h-4" />,
      description: 'Cloud migration and management'
    },
    {
      title: 'Micro SAAS',
      href: '/micro-saas-services',
      icon: <Smartphone className="w-4 h-4" />,
      description: 'Powerful micro SaaS tools'
    },
    {
      title: '5G Implementation',
      href: '/5g-implementation',
      icon: <Globe className="w-4 h-4" />,
      description: 'Next-generation 5G solutions'
    },
    {
      title: 'Digital Transformation',
      href: '/digital-transformation',
      icon: <Shield className="w-4 h-4" />,
      description: 'Transform your digital presence'
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-033b
    }
<<<<<<< HEAD
  };

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

<<<<<<< HEAD
  useEffect(() => {
<<<<<<< HEAD
=======
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
=======
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
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0b69
        setIsOpen(false);
      }
    };

<<<<<<< HEAD
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
=======
  const aiServices = useMemo(() => [
    { name: 'AI Quantum Computing', path: '/ai-quantum-computing', icon: <Cpu className="w-4 h-4" />, featured: true },
    { name: 'AI Blockchain Solutions', path: '/ai-blockchain-solutions', icon: <LinkIcon className="w-4 h-4" />, featured: true },
    { name: 'AI Analytics Dashboard', path: '/ai-analytics-dashboard-pro', icon: <BarChart3 className="w-4 h-4" /> },
    { name: 'AI Content Generator', path: '/ai-content-generator', icon: <Brain className="w-4 h-4" /> },
    { name: 'AI Cybersecurity Suite', path: '/ai-cybersecurity-suite-pro', icon: <Shield className="w-4 h-4" /> },
    { name: 'AI Customer Support', path: '/ai-customer-support-chatbot', icon: <Zap className="w-4 h-4" /> },
    { name: 'AI Code Assistant', path: '/ai-code-assistant-pro', icon: <Code className="w-4 h-4" /> },
    { name: 'AI Business Intelligence', path: '/ai-business-intelligence-pro', icon: <Database className="w-4 h-4" /> },
    { name: 'AI Marketing Automation', path: '/ai-marketing', icon: <Zap className="w-4 h-4" /> },
    { name: 'AI Data Analytics', path: '/ai-data-analytics', icon: <BarChart3 className="w-4 h-4" /> }
  ], [])
  const itServices = useMemo(() => [
    { name: 'AI-Powered DevOps', path: '/ai-powered-devops', icon: <Cpu className="w-4 h-4" />, featured: true },
    { name: 'Cloud Infrastructure', path: '/cloud-infrastructure', icon: <Cloud className="w-4 h-4" /> },
    { name: 'Cybersecurity Solutions', path: '/cybersecurity-solutions', icon: <Shield className="w-4 h-4" /> },
    { name: 'Web Development', path: '/web-development', icon: <Code className="w-4 h-4" /> },
    { name: 'Mobile Development', path: '/mobile-development', icon: <Code className="w-4 h-4" /> },
    { name: 'Database Management', path: '/database-management', icon: <Database className="w-4 h-4" /> },
    { name: 'Custom Software', path: '/custom-software', icon: <Code className="w-4 h-4" /> },
    { name: 'Network Infrastructure', path: '/network-infrastructure', icon: <Cloud className="w-4 h-4" /> },
    { name: 'Data Analytics', path: '/data-analytics', icon: <BarChart3 className="w-4 h-4" /> }
  ], [])
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0acf

>>>>>>> origin/cursor/analyze-improve-and-deploy-application-08e3
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
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

  const closeAllMenus = useCallback(() => {
    setIsOpen(false);
    setServicesOpen(false);
    setAiServicesOpen(false);
    setItServicesOpen(false);
    setMicroSaasOpen(false);
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0b69
  }, []);

  const closeAllMenus = () => {
    setServicesOpen(false);
    setAiServicesOpen(false);
    setItServicesOpen(false);
<<<<<<< HEAD
    setMicroSaasOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

<<<<<<< HEAD
<<<<<<< HEAD
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
=======
    setIsOpen(false);
  };
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0ac5

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

<<<<<<< HEAD
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
=======
  ]
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0aab

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
=======
  const serviceCategories = [
=======
  const serviceCategories = [
    {
      title: 'Micro SAAS Solutions',
      icon: Zap,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10',
      hoverColor: 'hover:bg-cyan-500/20',
      services: [
        { name: 'AI Project Manager Pro', path: '/ai-project-manager', description: 'Intelligent project planning with predictive analytics', icon: '📊', popular: true },
        { name: 'AI Social Media Manager', path: '/ai-social-media-manager', description: 'Automated social media management', icon: '📱', popular: true },
        { name: 'AI Analytics Dashboard', path: '/ai-analytics-dashboard', description: 'AI-powered business intelligence', icon: '📈', popular: true },
        { name: 'AI Email Marketing Suite', path: '/ai-email-marketing', description: 'Intelligent email campaigns', icon: '📧', popular: true },
        { name: 'AI Customer Support Bot', path: '/ai-customer-support-bot', description: '24/7 AI customer support', icon: '🤖', popular: true },
        { name: 'AI Content Studio', path: '/ai-content-studio', description: 'Complete content creation suite', icon: '✍️', popular: true },
        { name: 'AI Financial Advisor', path: '/ai-financial-advisor', description: 'Personalized financial planning', icon: '💰', popular: false },
        { name: 'AI Workflow Automation', path: '/ai-workflow-automation', description: 'Visual workflow builder', icon: '⚡', popular: true },
        { name: 'AI Smart Calendar', path: '/ai-smart-calendar', description: 'Intelligent scheduling and time management', icon: '📅', popular: true },
        { name: 'AI Content Writer', path: '/ai-content-writer', description: 'Advanced content generation', icon: '✍️', popular: true },
        { name: 'AI Video Generator', path: '/ai-video-generator', description: 'AI-powered video creation', icon: '🎥', popular: true },
        { name: 'AI CRM Assistant', path: '/ai-crm-assistant', description: 'Intelligent customer relationship management', icon: '👥', popular: true },
        { name: 'AI Quantum Financial Oracle', path: '/ai-quantum-financial-oracle', description: 'Quantum-powered financial analysis', icon: '⚛️', popular: true },
        { name: 'AI 3D Generation Studio', path: '/ai-3d-generation', description: 'AI-powered 3D model generation', icon: '🎨', popular: true },
        { name: 'AI Mobile App Builder', path: '/ai-mobile-app-builder', description: 'AI-powered mobile app development', icon: '📱', popular: true },
        { name: 'AI Logo Designer Pro', path: '/ai-logo-designer', description: 'AI-powered logo design', icon: '🎨', popular: true }
      ]
    },
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-091f
    {
      title: 'AI Services',
      icon: Brain,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      hoverColor: 'hover:bg-purple-100',
      services: [
<<<<<<< HEAD
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
=======
        { name: 'AI Workflow Automation Platform', path: '/ai-workflow-automation', description: 'End-to-end business process automation', icon: '⚡', popular: true },
        { name: 'AI Customer Support Suite', path: '/ai-customer-support', description: 'Advanced 24/7 customer support', icon: '🤖', popular: true },
        { name: 'AI Data Analytics Platform', path: '/ai-data-analytics', description: 'Advanced analytics with ML predictions', icon: '📊', popular: true },
        { name: 'AI Content Generation Studio', path: '/ai-content-generation', description: 'Complete content creation suite', icon: '✍️', popular: true },
        { name: 'AI Healthcare Solutions', path: '/ai-healthcare', description: 'Medical AI and diagnosis support', icon: '🏥', popular: true },
        { name: 'AI Fintech Platform', path: '/ai-fintech', description: 'Financial AI and fraud detection', icon: '💳', popular: true },
        { name: 'AI Computer Vision Platform', path: '/ai-computer-vision', description: 'Advanced image recognition', icon: '👁️', popular: true },
        { name: 'AI Machine Learning Platform', path: '/ai-ml-platform', description: 'Complete ML platform', icon: '🧠', popular: true },
        { name: 'AI Quantum Computing', path: '/ai-quantum-computing', description: 'Next-gen quantum solutions', icon: '⚛️', popular: true },
        { name: 'AI Drug Discovery Pro', path: '/ai-drug-discovery-pro', description: 'Advanced pharmaceutical AI', icon: '💊', popular: true },
        { name: 'AI Climate Solutions Pro', path: '/ai-climate-solutions-pro', description: 'Environmental AI solutions', icon: '🌱', popular: true },
        { name: 'AI Space Technology Pro', path: '/ai-space-technology-pro', description: 'Space exploration AI', icon: '🚀', popular: true },
        { name: 'AI Neural Memory Assistant', path: '/ai-neural-memory-assistant', description: 'Advanced AI with persistent memory', icon: '🧠', popular: true },
        { name: 'AI Holographic Workspace', path: '/ai-holographic-workspace', description: 'Immersive 3D collaboration', icon: '🥽', popular: false },
        { name: 'AI Fashion Design Studio', path: '/ai-fashion-design', description: 'AI-powered fashion design', icon: '👗', popular: true }
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-091f
      ]
    },
    {
      title: 'IT Services',
      icon: Cloud,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      hoverColor: 'hover:bg-blue-100',
      services: [
<<<<<<< HEAD
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
=======
        { name: 'Cloud Migration & Setup', path: '/cloud-migration', description: 'Seamless cloud migration', icon: '☁️', popular: true },
        { name: 'Enterprise Cybersecurity Suite', path: '/cybersecurity', description: 'Comprehensive security solutions', icon: '🛡️', popular: true },
        { name: 'IT Infrastructure Design', path: '/it-infrastructure', description: 'Scalable infrastructure architecture', icon: '🏗️', popular: true },
        { name: '24/7 IT Support & Monitoring', path: '/it-support', description: 'Round-the-clock technical support', icon: '🔄', popular: true },
        { name: 'Custom Software Development', path: '/custom-development', description: 'Tailored software solutions', icon: '💻', popular: true },
        { name: 'DevOps & CI/CD Implementation', path: '/devops-cicd', description: 'Streamlined development processes', icon: '⚙️', popular: true },
        { name: 'Database Management & Optimization', path: '/database-management', description: 'Performance tuning & security', icon: '🗄️', popular: true },
        { name: 'Network Design & Implementation', path: '/network-design', description: 'Secure network infrastructure', icon: '🌐', popular: true },
        { name: 'AI Infrastructure Monitoring', path: '/ai-infrastructure-monitoring', description: 'Intelligent infrastructure monitoring', icon: '📊', popular: true },
        { name: 'Blockchain Integration Services', path: '/blockchain-integration-services', description: 'Web3 and blockchain solutions', icon: '⛓️', popular: true },
        { name: 'AI API Management', path: '/ai-api-management', description: 'Intelligent API management', icon: '🔗', popular: true },
        { name: 'Smart Contract Security Audit', path: '/smart-contract-security-audit', description: 'Blockchain security auditing', icon: '🔒', popular: true },
        { name: 'AI IT Operations (AIOps)', path: '/ai-ops', description: 'AI-powered IT operations', icon: '🤖', popular: true },
        { name: 'Healthcare IT Solutions', path: '/healthcare-it', description: 'HIPAA-compliant healthcare IT', icon: '🏥', popular: true },
        { name: 'Financial Services IT', path: '/financial-it', description: 'SOX-compliant financial IT', icon: '💳', popular: true },
        { name: 'Edge Computing Solutions', path: '/edge-computing', description: 'Low-latency edge infrastructure', icon: '📡', popular: true },
        { name: '5G Network Implementation', path: '/5g-implementation', description: 'High-speed 5G networks', icon: '📶', popular: false },
        { name: 'IoT Platform Development', path: '/iot-platform', description: 'Comprehensive IoT solutions', icon: '🌐', popular: true }
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-091f
      ]
    },
    {
      title: 'Micro SAAS',
      icon: Code,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      hoverColor: 'hover:bg-green-100',
      services: [
<<<<<<< HEAD
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
=======
        { name: 'Quantum Computing Solutions', path: '/ai-quantum-computing', description: 'Next-gen quantum solutions', icon: '⚛️', popular: true },
        { name: 'Autonomous Systems', path: '/autonomous-systems', description: 'Self-managing systems', icon: '🤖', popular: true },
        { name: 'Blockchain & Web3', path: '/blockchain-web3', description: 'Decentralized solutions', icon: '⛓️', popular: true },
        { name: 'IoT & Edge Computing', path: '/iot-edge-computing', description: 'Connected devices', icon: '📡', popular: true },
        { name: 'AR/VR Solutions', path: '/ar-vr-solutions', description: 'Immersive experiences', icon: '🥽', popular: true },
        { name: 'Smart Cities', path: '/smart-cities', description: 'Urban technology solutions', icon: '🏙️', popular: true },
        { name: 'AI Autonomous Systems', path: '/ai-autonomous-systems', description: 'AI-powered autonomous systems', icon: '🤖', popular: true },
        { name: 'AI Blockchain Solutions', path: '/ai-blockchain-solutions', description: 'AI-powered blockchain technology', icon: '⛓️', popular: true },
        { name: 'AI Holographic Workspace', path: '/ai-holographic-workspace', description: 'Immersive 3D collaboration', icon: '🥽', popular: false },
        { name: 'AI Energy Management', path: '/ai-energy', description: 'Smart energy optimization', icon: '⚡', popular: true },
        { name: 'AI Music Composition', path: '/ai-music-composition', description: 'AI-powered music creation', icon: '🎵', popular: true },
        { name: 'Digital Transformation', path: '/digital-transformation', description: 'Business modernization', icon: '🔄', popular: true },
        { name: 'Innovation Labs', path: '/innovation-labs', description: 'R&D and prototyping', icon: '🧪', popular: true },
        { name: 'AI Financial Crime Detection Pro', path: '/ai-financial-crime-detection-pro', description: 'Advanced fraud detection', icon: '🔍', popular: true },
        { name: 'AI Supply Chain Optimization Pro', path: '/ai-supply-chain-optimization-pro', description: 'Intelligent supply chain', icon: '📦', popular: true },
        { name: 'AI Energy Grid Management Pro', path: '/ai-energy-grid-management-pro', description: 'Smart energy solutions', icon: '⚡', popular: true },
        { name: 'AI Agricultural Intelligence Pro', path: '/ai-agricultural-intelligence-pro', description: 'Smart farming solutions', icon: '🌾', popular: true }
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-091f
      ]
    }
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-08e3
  ];
>>>>>>> origin/cursor/ad-creation-and-management-f267
=======
  ];
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0ac5

export default function Navigation() {
  return (
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-xl font-bold text-gray-800">
            Zion Tech Group
          </Link>
<<<<<<< HEAD
          <div className="space-x-6">
            <Link to="/about" className="text-gray-600 hover:text-gray-800">
              About
=======
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-white/10">
=======
    <nav className="relative z-50 bg-black/20 backdrop-blur-md border-b border-cyan-500/20">
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-08bc
=======
    <nav className="bg-white/95 backdrop-blur-lg shadow-lg fixed w-full top-0 z-50">
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0aab
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
<<<<<<< HEAD
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
=======
  ], [])

  return (
    <nav 
      className="bg-gradient-to-r from-slate-900/95 via-purple-900/95 to-slate-900/95 text-white shadow-2xl border-b border-cyan-500/20 backdrop-blur-md sticky top-0 z-50"
      role="navigation"
      aria-label="Main navigation"
    >
      {/* Contact Bar */}
      <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between py-2 text-sm">
            <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-6">
              <div className="flex items-center text-cyan-400">
                <Phone className="w-4 h-4 mr-2" />
                <a href="tel:+13024640950" className="hover:text-cyan-300 transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center text-cyan-400">
                <Mail className="w-4 h-4 mr-2" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-300 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0c2e
                Zion Tech Group
              </span>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0792
            </Link>
            <Link to="/services" className="text-gray-600 hover:text-gray-800">
              Services
            </Link>
<<<<<<< HEAD
            <Link to="/contact" className="text-gray-600 hover:text-gray-800">
              Contact
            </Link>
=======
    <nav className="bg-white/10 backdrop-blur-lg fixed w-full top-0 z-50 border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-white">Zion Tech Group</span>
=======
            <Link 
              to="/case-studies" 
              className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium hover:neon-glow-cyan"
              onClick={closeAllMenus}
            >
              Case Studies
            </Link>
            <Link 
              to="/micro-saas" 
              className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium hover:neon-glow-cyan"
              onClick={closeAllMenus}
            >
              Micro SaaS
            </Link>
            <Link 
              to="/ai-services" 
              className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium hover:neon-glow-cyan"
              onClick={closeAllMenus}
            >
              AI Services
            </Link>
            <Link 
              to="/it-services" 
              className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium hover:neon-glow-cyan"
              onClick={closeAllMenus}
            >
              IT Services
            </Link>
            <Link 
              to="/pricing" 
              className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium hover:neon-glow-cyan"
              onClick={closeAllMenus}
            >
              Pricing
            </Link>
            <Link 
              to="/blog" 
              className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium hover:neon-glow-cyan"
              onClick={closeAllMenus}
            >
              Blog
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-091f
            </Link>
=======

          {/* Desktop Navigation */}
<<<<<<< HEAD
<<<<<<< HEAD
          <div className="hidden md:flex items-center space-x-8">
=======
          <div className="hidden lg:flex items-center space-x-8">
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0792
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  to={item.path}
<<<<<<< HEAD
                  className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(item.path)
                      ? 'text-cyan-400 bg-cyan-500/10'
                      : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10'
                  }`}
=======
                  className={`flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors py-2 ${
                    isActive(item.path) ? 'text-cyan-400' : ''
                  }`}
                  onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
                  onMouseLeave={() => item.hasDropdown && setActiveDropdown(null)}
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0792
                >
                  {item.icon}
                  <span>{item.name}</span>
                  {item.hasDropdown && (
<<<<<<< HEAD
                    <ChevronDown className="w-4 h-4" />
                  )}
                </Link>
                
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
=======
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative group">
                  <Link
                    to={item.path}
                    className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                      isActive(item.path)
                        ? 'text-cyan-400 bg-cyan-500/10'
                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                    onClick={item.hasDropdown ? (e) => {
                      e.preventDefault();
                      toggleServices();
                    } : undefined}
                  >
                    <span>{item.icon}</span>
                    <span>{item.name}</span>
                    {item.hasDropdown && (
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                        isServicesOpen ? 'rotate-180' : ''
                      }`} />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {item.hasDropdown && isServicesOpen && (
                    <div className="absolute left-0 mt-2 w-96 bg-black/90 backdrop-blur-md border border-cyan-500/30 rounded-lg shadow-xl z-50">
                      <div className="p-4">
                        {item.dropdownItems?.map((section, sectionIndex) => (
                          <div key={sectionIndex} className="mb-4 last:mb-0">
                            <div className="flex items-center space-x-2 mb-2 text-cyan-400 font-semibold">
                              <span>{section.icon}</span>
                              <span>{section.name}</span>
                            </div>
                            <div className="grid grid-cols-1 gap-1">
                              {section.items?.map((subItem, subIndex) => (
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0c2e
                                <Link
                                  key={serviceIndex}
                                  to={service.path}
                                  className="block p-3 rounded-lg hover:bg-cyan-500/10 transition-colors group"
                                >
                                  <div className="font-medium text-white group-hover:text-cyan-400 transition-colors">
                                    {service.name}
                                  </div>
                                  <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                                    {service.description}
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
<<<<<<< HEAD
                      <div className="mt-6 pt-4 border-t border-cyan-500/20">
                        <Link
                          to="/services"
                          className="block text-center text-cyan-400 hover:text-cyan-300 font-medium text-sm transition-colors"
                        >
                          View All Services →
                        </Link>
                      </div>
=======
                    <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                  )}
                </Link>

                {/* Dropdown Menu */}
                {item.hasDropdown && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-2 w-96 bg-slate-800/95 backdrop-blur-sm border border-white/10 rounded-lg shadow-xl z-50">
                    <div className="p-4">
                      {item.dropdownItems?.map((category) => (
                        <div key={category.name} className="mb-6 last:mb-0">
                          <div className="flex items-center space-x-2 text-cyan-400 font-semibold mb-3">
                            {category.icon}
                            <span>{category.name}</span>
                          </div>
                          <div className="grid grid-cols-1 gap-2">
                            {category.items?.map((subItem) => (
                              <Link
                                key={subItem.path}
                                to={subItem.path}
                                className="flex items-center space-x-3 p-2 rounded-lg hover:bg-white/5 transition-colors group"
                                onClick={() => setActiveDropdown(null)}
                              >
                                <div className="text-gray-400 group-hover:text-cyan-400 transition-colors">
                                  {subItem.icon}
                                </div>
                                <span className="text-gray-300 group-hover:text-white transition-colors">
                                  {subItem.name}
                                </span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0792
                    </div>
                  </div>
                )}
              </div>
            ))}
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0680
          </div>

<<<<<<< HEAD
<<<<<<< HEAD
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link to="/" className="text-white hover:text-purple-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-white hover:text-purple-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              About
            </Link>
            
            {/* Services Dropdown */}
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
                </div>
              )}
            </div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-033b
          </div>
        </div>
      </div>
    </nav>
  );
}
=======
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
<<<<<<< HEAD
      isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-cyan-500/20' : 'bg-transparent'
=======
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-08e3
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
<<<<<<< HEAD
          <Link href="/" className="flex items-center space-x-2 group" onClick={closeAllMenus}>
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white neon-text">Zion Tech Group</span>
          </Link>

<<<<<<< HEAD
=======
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">Zion Tech Group</span>
          </Link>

>>>>>>> origin/cursor/analyze-improve-and-deploy-application-08e3
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
              Home
            </Link>
            
<<<<<<< HEAD
<<<<<<< HEAD
            {/* AI Services Dropdown */}
            <div className="relative group">
=======
            {/* Solutions Dropdown */}
            <div className="relative">
>>>>>>> origin/cursor/analyze-and-resolve-javascript-errors-6208
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
=======
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-2xl font-bold"
            onClick={closeAllMenus}
          >
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className={`transition-colors ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
              Zion Tech Group
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className={`font-medium transition-colors hover:text-purple-600 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
              onClick={closeAllMenus}
            >
              Home
            </Link>
            
            <Link 
              to="/about" 
              className={`font-medium transition-colors hover:text-purple-600 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
              onClick={closeAllMenus}
            >
              About
            </Link>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className={`flex items-center space-x-1 font-medium transition-colors hover:text-purple-600 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-96 bg-white rounded-xl shadow-2xl border border-gray-200 py-6 z-50">
                  <div className="grid grid-cols-2 gap-6 px-6">
                    {serviceCategories.map((category, index) => (
                      <div key={index} className="space-y-3">
                        <div className="flex items-center space-x-2 mb-3">
                          <div className={`w-8 h-8 ${category.bgColor} rounded-lg flex items-center justify-center`}>
                            <category.icon className={`w-4 h-4 ${category.color}`} />
                          </div>
                          <h3 className="font-semibold text-gray-900 text-sm">{category.title}</h3>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0ac5
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 ml-auto" />
                      </Link>
                    ))}
                  </div>
<<<<<<< HEAD
=======
                  <div className="border-t border-gray-200 mt-6 pt-4 px-6">
                    <Link
                      to="/services"
                      className="block w-full text-center bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all"
                      onClick={closeAllMenus}
                    >
                      View All Services
                    </Link>
                  </div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0ac5
                </div>
              )}
            </div>
<<<<<<< HEAD

<<<<<<< HEAD
            {/* IT Services Dropdown */}
            <div className="relative group">
=======
            
            {/* AI Services Dropdown */}
            <div className="relative">
>>>>>>> origin/cursor/analyze-and-resolve-javascript-errors-6208
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
=======
            {/* Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-1 text-gray-700 hover:text-purple-600 transition-colors font-medium">
=======
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const services = [
    {
      name: "AI Solutions",
      href: "/ai-services",
      icon: <Brain className="w-5 h-5" />,
      description: "Advanced AI and machine learning solutions",
      color: "from-blue-500 to-cyan-500",
      items: [
        { name: "AI Analytics", href: "/ai-analytics" },
        { name: "AI Automation", href: "/ai-automation" },
        { name: "AI Content Generation", href: "/ai-content-generation" },
        { name: "AI Customer Service", href: "/ai-customer-service" },
        { name: "AI Marketing", href: "/ai-marketing" },
        { name: "AI Healthcare", href: "/ai-healthcare" }
      ]
    },
    {
      name: "IT Services",
      href: "/services",
      icon: <Shield className="w-5 h-5" />,
      description: "Comprehensive technology solutions",
      color: "from-green-500 to-emerald-500",
      items: [
        { name: "Cloud Infrastructure", href: "/cloud-infrastructure" },
        { name: "Cybersecurity", href: "/cybersecurity-solutions" },
        { name: "Web Development", href: "/web-development" },
        { name: "Mobile Development", href: "/mobile-development" },
        { name: "Database Management", href: "/database-management" },
        { name: "Custom Software", href: "/custom-software" }
      ]
    },
    {
      name: "Micro SAAS",
      href: "/micro-saas",
      icon: <Zap className="w-5 h-5" />,
      description: "Ready-to-use software solutions",
      color: "from-purple-500 to-pink-500",
      items: [
        { name: "Zion Analytics Pro", href: "/zion-analytics-pro" },
        { name: "Zion Security Shield", href: "/zion-security-shield" },
        { name: "Zion Cloud Vault", href: "/zion-cloud-vault" },
        { name: "Zion Content Studio", href: "/zion-content-studio" },
        { name: "Zion AI Video Generator", href: "/zion-ai-video-generator" },
        { name: "Zion AI Invoice Generator", href: "/zion-ai-invoice-generator" }
      ]
    },
    {
      name: "5G Solutions",
      href: "/5g-solutions",
      icon: <Globe className="w-5 h-5" />,
      description: "Next-generation connectivity",
      color: "from-orange-500 to-red-500",
      items: [
        { name: "5G Data Analytics", href: "/5g-data-analytics" },
        { name: "5G Edge Computing", href: "/5g-edge-computing" },
        { name: "5G Implementation", href: "/5g-implementation" },
        { name: "5G Mobile Applications", href: "/5g-mobile-applications" },
        { name: "5G Network Infrastructure", href: "/5g-network-infrastructure" },
        { name: "5G Private Networks", href: "/5g-private-networks" }
      ]
    }
  ];

  const mainPages = [
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Blog", href: "/blog" },
    { name: "Demo", href: "/demo" },
    { name: "Support", href: "/support" }
  ];

  const handleDropdownToggle = (serviceName: string) => {
    setActiveDropdown(activeDropdown === serviceName ? null : serviceName);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-900/95 backdrop-blur-md border-b border-cyan-500/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="text-white font-bold text-lg">Z</span>
            </div>
            <span className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
              Zion Tech Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors">
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-09ab
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
<<<<<<< HEAD
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
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-08e3
=======
              <div className="absolute top-full left-0 mt-2 w-96 bg-slate-900/95 backdrop-blur-md rounded-xl border border-cyan-500/20 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-4">
                    {services.map((service, index) => (
                      <Link
                        key={index}
                        to={service.href}
                        className="group/item p-4 rounded-lg hover:bg-slate-800/50 transition-colors"
                      >
                        <div className="flex items-center mb-2">
                          <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center text-white mr-3`}>
                            {service.icon}
                          </div>
                          <span className="font-semibold text-white group-hover/item:text-cyan-400 transition-colors">
                            {service.name}
                          </span>
                        </div>
                        <p className="text-sm text-gray-300">{service.description}</p>
                      </Link>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-09ab
                    ))}
                  </div>
                </div>
              </div>
            </div>

<<<<<<< HEAD
<<<<<<< HEAD
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
=======
            <Link 
              to="/case-studies" 
              className={`font-medium transition-colors hover:text-purple-600 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
              onClick={closeAllMenus}
            >
              Case Studies
            </Link>
            <Link
              to="/blog"
              className={`font-medium transition-colors hover:text-purple-600 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
              onClick={closeAllMenus}
            >
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0ac5
              Blog
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
=======
=======
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

>>>>>>> origin/cursor/analyze-improve-and-deploy-application-08bc
          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              to="/contact"
<<<<<<< HEAD
<<<<<<< HEAD
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
            >
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-033b
=======
            <Link href="/about" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
              About
            </Link>
            <Link href="/case-studies" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
              Case Studies
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
              Blog
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-08e3
              Contact
            </Link>
          </div>

<<<<<<< HEAD
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
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
<<<<<<< HEAD
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
              aria-label="Toggle menu"
=======
              className="text-white hover:text-purple-300 p-2 rounded-md transition-colors"
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-033b
=======
          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <FuturisticButton
              variant="primary"
              size="sm"
              className="group"
            >
              Get Started
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </FuturisticButton>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-2">
            <button
              onClick={onSidebarToggle}
              className="p-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-md transition-all duration-300"
              aria-label="Toggle sidebar"
=======
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center space-x-2"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
=======
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                to="/"
                className="text-gray-900 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-900 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                About
              </Link>
              
              <div className="relative">
                <button
                  onClick={toggleServices}
                  className="text-gray-900 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors flex items-center"
                >
                  Services
                  <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isServicesOpen && (
                  <div className="absolute left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                    <div className="grid grid-cols-2 gap-2 p-4">
                      {services.map((service) => {
                        const IconComponent = service.icon
                        return (
                          <Link
                            key={service.href}
                            to={service.href}
                            className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors"
                            onClick={() => setIsServicesOpen(false)}
                          >
                            <IconComponent className="w-5 h-5 text-purple-600 mr-3" />
                            <div>
                              <div className="font-medium text-gray-900">{service.title}</div>
                              <div className="text-sm text-gray-500">{service.description}</div>
                            </div>
                          </Link>
                        )
                      })}
                    </div>
                  </div>
                )}
              </div>

              <Link
                to="/contact"
                className="text-gray-900 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Contact
              </Link>
              
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              >
                Get Started
              </Link>
            </div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0aab
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={onSidebarToggle}
              className="p-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-md transition-all duration-300"
<<<<<<< HEAD
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-08bc
=======
            {/* Main Pages */}
            {mainPages.map((page, index) => (
              <Link
                key={index}
                to={page.href}
                className="text-white hover:text-cyan-400 transition-colors"
              >
                {page.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center group"
            >
              Get Started
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
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
  ];

  const itServices = [
    { name: 'Cloud Infrastructure', href: '/cloud-infrastructure', icon: Cloud, description: 'Scalable cloud solutions' },
    { name: 'API Development', href: '/api-development', icon: Code, description: 'API development & management' },
    { name: 'Cybersecurity', href: '/cybersecurity-solutions', icon: Shield, description: 'Comprehensive security' },
    { name: 'Database Management', href: '/database-management', icon: Database, description: 'Data processing & storage' },
    { name: 'Web Development', href: '/web-development', icon: Globe, description: 'Modern web applications' },
    { name: 'Mobile Development', href: '/mobile-development', icon: Smartphone, description: 'iOS & Android apps' },
    { name: 'DevOps & CI/CD', href: '/devops-cicd', icon: Settings, description: 'Automation pipelines' },
    { name: 'IT Support', href: '/it-support', icon: Users, description: '24/7 technical support' },
    { name: 'Data Analytics & BI', href: '/data-analytics-bi', icon: BarChart, description: 'Business intelligence' },
    { name: 'Custom Software', href: '/custom-software', icon: Code, description: 'Tailored solutions' },
    { name: 'Network Security', href: '/network-security', icon: Shield, description: 'Network protection' },
    { name: 'Cloud Migration', href: '/cloud-migration', icon: Cloud, description: 'Cloud transition' },
    { name: 'System Integration', href: '/system-integration', icon: LinkIcon, description: 'System connectivity' },
    { name: 'Performance Optimization', href: '/performance-optimization', icon: TrendingUp, description: 'System tuning' },
    { name: 'Disaster Recovery', href: '/disaster-recovery', icon: Shield, description: 'Business continuity' },
    { name: 'Compliance & Governance', href: '/compliance-governance', icon: CheckSquare, description: 'Regulatory compliance' },
    { name: 'Quality Assurance', href: '/quality-assurance', icon: CheckCircle, description: 'Testing & validation' },
    { name: 'Technical Consulting', href: '/technical-consulting', icon: Users, description: 'Expert guidance' },
    { name: 'Legacy Modernization', href: '/legacy-modernization', icon: Server, description: 'System upgrades' },
    { name: 'Data Visualization & BI', href: '/data-visualization', icon: BarChart, description: 'Advanced dashboards' },
    { name: 'Workflow Automation', href: '/workflow-automation', icon: Settings, description: 'Process automation' },
    { name: 'Cloud-Native Security', href: '/cloud-native-security', icon: Shield, description: 'Container security' }
  ];

  const microSaasServices = [
    { name: 'AI Analytics Dashboard', href: '/ai-analytics-dashboard', icon: BarChart, description: 'Real-time BI & Analytics' },
    { name: 'AI Chatbot Builder', href: '/ai-chatbot-builder', icon: MessageCircle, description: 'No-code Chatbot Platform' },
    { name: 'AI Email Marketing', href: '/ai-email-marketing', icon: Mail, description: 'Automated Email Campaigns' },
    { name: 'Social Media AI', href: '/social-media-ai', icon: Globe, description: 'AI Social Management' },
    { name: 'AI Project Management', href: '/ai-project-management', icon: Calendar, description: 'Smart Project Tracking' },
    { name: 'AI SEO Optimizer', href: '/ai-seo-optimizer', icon: TrendingUp, description: 'Automated SEO Tools' },
    { name: 'AI Sales CRM', href: '/ai-sales-crm', icon: Users, description: 'Intelligent CRM System' },
    { name: 'AI Design Studio', href: '/ai-design-studio', icon: Monitor, description: 'AI Design Tools' },
    { name: 'Zion Analytics Pro', href: '/zion-analytics-pro', icon: BarChart, description: 'Business intelligence' },
    { name: 'Zion Chat AI', href: '/zion-chat-ai', icon: MessageCircle, description: 'AI customer support' },
    { name: 'Zion Security Shield', href: '/zion-security-shield', icon: Shield, description: 'Cybersecurity monitoring' },
    { name: 'Zion Cloud Vault', href: '/zion-cloud-vault', icon: Cloud, description: 'Cloud backup & recovery' },
    { name: 'Zion Content Studio', href: '/zion-content-studio', icon: FileText, description: 'AI content creation' },
    { name: 'Zion CRM Intelligence', href: '/zion-crm-intelligence', icon: Users, description: 'AI-enhanced CRM' },
    { name: 'Zion Lead Magnet', href: '/zion-lead-magnet', icon: Target, description: 'Lead generation' },
    { name: 'Zion Project Master', href: '/zion-project-master', icon: Calendar, description: 'Project management' },
    { name: 'Zion Email Automation', href: '/zion-email-automation', icon: Mail, description: 'Email marketing' },
    { name: 'Zion Invoice Genius', href: '/zion-invoice-genius', icon: FileText, description: 'Invoice generation' },
    { name: 'Zion Workflow Automation', href: '/zion-workflow-automation', icon: Settings, description: 'Process automation' },
    { name: 'Zion Social Scheduler', href: '/zion-social-scheduler', icon: Globe, description: 'Social media management' },
    { name: 'Zion AI Video Editor', href: '/zion-ai-video-editor', icon: Eye, description: 'AI video editing' },
    { name: 'Zion AI Translator Pro', href: '/zion-ai-translator-pro', icon: Globe, description: 'Advanced translation' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-md border-b border-cyan-500/20 shadow-2xl' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2" onClick={closeAllMenus}>
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Zion Tech Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
              onClick={closeAllMenus}
            >
              Home
            </Link>
=======
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.label} className="relative group">
                <Link
                  to={item.href}
                  className={`flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors py-2 ${
                    isActive(item.href) ? 'text-cyan-400' : ''
                  }`}
                  onMouseEnter={() => item.dropdown && setActiveDropdown(item.label)}
                  onMouseLeave={() => item.dropdown && setActiveDropdown(null)}
                >
                  {item.icon}
                  <span>{item.label}</span>
                  {item.dropdown && <ChevronDown className="w-4 h-4" />}
                </Link>

                {/* Dropdown Menu */}
                {item.dropdown && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-gray-900 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-2">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.label}
                          to={dropdownItem.href}
                          className={`flex items-center space-x-2 px-4 py-2 text-sm hover:bg-gray-800 transition-colors ${
                            isActive(dropdownItem.href) ? 'text-blue-400' : 'text-gray-300'
                          }`}
                        >
                          <span>{dropdownItem.label}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="sm"
              icon={<Monitor className="w-4 h-4" />}
            >
              Demo
            </FuturisticButton>
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="sm"
              icon={<Sparkles className="w-4 h-4" />}
            >
              Get Started
            </FuturisticButton>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            <button
              onClick={onSidebarToggle}
              className="p-2 text-gray-300 hover:text-cyan-400 transition-colors"
              aria-label="Toggle sidebar"
            >
              <SidebarIcon className="w-6 h-6" />
            </button>
            <button
              onClick={toggleMenu}
              className="p-2 text-gray-300 hover:text-cyan-400 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link 
            to="/" 
            className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent hover:from-cyan-300 hover:to-purple-300 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-slate-900 rounded"
            aria-label="Zion Tech Group - Go to homepage"
          >
            Zion Tech Group
          </Link>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/90 backdrop-blur-md border-t border-cyan-500/20">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.path}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                      isActive(item.path)
                        ? 'text-cyan-400 bg-cyan-500/10'
                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <span>{item.icon}</span>
                    <span>{item.name}</span>
                  </Link>
                </div>
              ))}
              <div className="pt-4">
                <Link
                  to="/contact"
                  className="block w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold text-center hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Get Started
                </Link>
              </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-white/10 mt-4 pt-4 pb-4">
            <div className="space-y-2">
              {navigationItems.map((item) => (
                <div key={item.label}>
                  <Link
                    to={item.href}
                    className={`flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors py-2 px-3 rounded-lg hover:bg-white/5 ${
                      isActive(item.href) ? 'text-cyan-400' : ''
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </Link>
                  
                  {/* Mobile Dropdown */}
                  {item.dropdown && (
                    <div className="ml-4 mt-1 space-y-1">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.label}
                          to={dropdownItem.href}
                          className={`block px-3 py-2 text-sm rounded-md ${
                            isActive(dropdownItem.href)
                              ? 'text-blue-400 bg-blue-900 bg-opacity-50'
                              : 'text-gray-300 hover:text-white hover:bg-gray-800'
                          }`}
                          onClick={closeAllMenus}
                        >
                          {dropdownItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
              <Link
                key={item.name}
                to={item.path}
                className="relative group hover:text-cyan-400 transition-all duration-300 font-medium"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0c2e
            
            <Link 
              to="/about" 
              className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
              onClick={closeAllMenus}
            >
              About
            </Link>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={toggleServices}
                className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-md rounded-lg shadow-2xl border border-cyan-500/20 p-6">
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <h3 className="text-cyan-400 font-semibold mb-3 flex items-center">
                        <Brain className="w-5 h-5 mr-2" />
                        AI Services
                      </h3>
                      <div className="grid grid-cols-1 gap-2">
                        {aiServices.slice(0, 6).map((service, index) => (
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
                    </div>
                  </div>
                </div>
              )}
            </div>

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
                    <Link
                      to="/ai-services"
                      className="flex items-center justify-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-200 font-medium"
                      onClick={closeAllMenus}
                    >
                      <span>View All AI Services</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* IT Services Dropdown */}
            <div className="relative">
              <button
                onClick={toggleItServices}
                className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
              >
                <span>IT Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${itServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {itServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-96 bg-slate-800/95 backdrop-blur-md rounded-lg shadow-2xl border border-cyan-500/20 p-6">
                  <div className="grid grid-cols-2 gap-4">
                    {itServices.slice(0, 12).map((service, index) => (
                      <Link
                        key={index}
                        to={service.href}
                        className="flex items-center space-x-3 p-2 rounded-lg hover:bg-slate-700/50 transition-colors duration-200"
                        onClick={closeAllMenus}
                      >
                        <service.icon className="w-4 h-4 text-purple-400" />
                        <div>
                          <div className="text-white text-sm font-medium">{service.name}</div>
                          <div className="text-gray-400 text-xs">{service.description}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-700">
                    <Link
                      to="/it-services"
                      className="flex items-center justify-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors duration-200 font-medium"
                      onClick={closeAllMenus}
                    >
                      <span>View All IT Services</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

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
                    </Link>
                  </div>
                </div>
              )}
            </div>

<<<<<<< HEAD
            <Link 
              to="/pricing" 
              className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
              onClick={closeAllMenus}
            >
              Pricing
            </Link>
            
            <Link 
              to="/contact" 
              className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
              onClick={closeAllMenus}
            >
              Contact
            </Link>

            {/* CTA Button */}
            <Link
              to="/consultation"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              onClick={closeAllMenus}
            >
              Get Started
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0b69
            </Link>
          </div>

          {/* Mobile Menu Button */}
<<<<<<< HEAD
          <div className="lg:hidden flex items-center space-x-4">
            <button
              onClick={onSidebarToggle}
              className="text-white hover:text-cyan-400 transition-colors"
              aria-label="Toggle sidebar"
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-09ab
            >
              <SidebarIcon className="w-6 h-6" />
            </button>
            <button
<<<<<<< HEAD
              onClick={toggleMenu}
<<<<<<< HEAD
              className="p-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-md transition-all duration-300"
<<<<<<< HEAD
              aria-label="Toggle menu"
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0792
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-08bc
=======
              className="text-gray-900 hover:text-purple-600 p-2"
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0aab
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
=======
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-cyan-400 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-09ab
=======
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-cyan-400 transition-colors duration-200 p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0b69
            </button>
=======
            {/* Mobile 5G Solutions */}
            <div className="pt-2">
              <button
                onClick={toggle5GServices}
                className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 flex items-center justify-between"
              >
                <div className="flex items-center space-x-2">
                  <Zap className="w-4 h-4" />
                  <span>5G Solutions</span>
                </div>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${is5GServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {is5GServicesOpen && (
                <div className="pl-6 space-y-1">
                  {fiveGServices.map((service) => (
                    <Link
                      key={service.name}
                      to={service.path}
                      className="block px-3 py-2 rounded-md text-sm text-gray-300 hover:text-white hover:bg-cyan-500/10 transition-colors duration-200 flex items-center space-x-2"
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setIs5GServicesOpen(false);
                      }}
                    >
                      {service.icon}
                      <span>{service.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0c2e
          </div>
        </div>

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link 
              href="/contact"
              className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-6 py-2 rounded-lg hover:from-purple-600 hover:to-cyan-600 transition-all duration-200 font-medium"
=======
              className={`font-medium transition-colors hover:text-purple-600 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
              onClick={closeAllMenus}
            >
              Contact
            </Link>
            
            {/* Contact Button */}
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl"
              onClick={closeAllMenus}
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0ac5
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
<<<<<<< HEAD
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
=======
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled 
                ? 'text-gray-700 hover:bg-gray-100' 
                : 'text-white hover:bg-white/10'
            }`}
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0ac5
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

<<<<<<< HEAD
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-08e3
        {/* Mobile Menu */}
<<<<<<< HEAD
=======
        {/* Mobile Navigation */}
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-08bc
        {isOpen && (
<<<<<<< HEAD
<<<<<<< HEAD
          <div className="lg:hidden mt-4 pb-4 border-t border-cyan-500/20">
            <div className="pt-4 space-y-4">
              <Link href="/" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={closeAllMenus}>
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
                    <Link
                      href="/micro-saas"
                      className="block text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium"
                      onClick={closeAllMenus}
                    >
                      View All Micro SAAS →
                    </Link>
                  </div>
                )}
              </div>

              {/* Mobile Ad Management */}
              <Link href="/ad-management" className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={closeAllMenus}>
                <Palette className="w-4 h-4" />
                <span>Ad Management</span>
              </Link>

              <Link href="/about" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={closeAllMenus}>
                About
              </Link>
              <Link href="/services" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={closeAllMenus}>
                Services
              </Link>
              <Link href="/pricing" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={closeAllMenus}>
                Pricing
              </Link>
              <Link href="/blog" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={closeAllMenus}>
                Blog
              </Link>
              <Link href="/contact" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={closeAllMenus}>
                Contact
              </Link>

              {/* Mobile Contact Info */}
              <div className="pt-4 border-t border-cyan-500/20 space-y-2">
                <a
                  href="tel:+13024640950"
                  className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium"
                >
                  <Phone className="w-4 h-4" />
                  <span>(302) 464-0950</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium"
                >
                  <Mail className="w-4 h-4" />
                  <span>kleber@ziontechgroup.com</span>
                </a>
                <div className="flex items-center space-x-2 text-gray-400">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
              </div>
<<<<<<< HEAD
=======
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/10 backdrop-blur-lg rounded-lg mt-2">
              <Link to="/" className="text-white hover:text-purple-300 block px-3 py-2 rounded-md text-base font-medium transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-white hover:text-purple-300 block px-3 py-2 rounded-md text-base font-medium transition-colors">
                About
              </Link>
              
              {/* Mobile Services */}
              <div className="space-y-1">
                <div className="text-white px-3 py-2 text-base font-medium">Services</div>
                {services.map((service, index) => (
                  <Link
                    key={index}
                    to={service.href}
                    className="flex items-center text-gray-300 hover:text-white pl-6 pr-3 py-2 rounded-md text-sm transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="flex-shrink-0 text-purple-400 mr-3">
                      {service.icon}
                    </div>
                    <span>{service.title}</span>
                  </Link>
                ))}
              </div>
              
              <Link to="/contact" className="text-white hover:text-purple-300 block px-3 py-2 rounded-md text-base font-medium transition-colors">
                Contact
              </Link>
              <Link 
                to="/contact" 
                className="block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-2 rounded-lg text-base font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-center mt-4"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-033b
=======
        {isMenuOpen && (
          <div className="lg:hidden border-t border-white/10 mt-4 pt-4 pb-4">
            <div className="space-y-2">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.path}
                    className={`flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors py-2 px-3 rounded-lg hover:bg-white/5 ${
                      isActive(item.path) ? 'text-cyan-400' : ''
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </Link>
                  {item.hasDropdown && (
                    <div className="ml-6 mt-2 space-y-1">
                      {item.dropdownItems?.map((category) => (
                        <div key={category.name} className="mb-4">
                          <div className="flex items-center space-x-2 text-cyan-400 font-semibold mb-2 text-sm">
                            {category.icon}
                            <span>{category.name}</span>
                          </div>
                          <div className="space-y-1">
                            {category.items?.map((subItem) => (
                              <Link
                                key={subItem.path}
                                to={subItem.path}
                                className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors py-1 px-3 rounded text-sm"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                {subItem.icon}
                                <span>{subItem.name}</span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            {/* Mobile CTA */}
            <div className="mt-6 pt-4 border-t border-white/10">
              <FuturisticButton
                variant="primary"
                size="sm"
                className="w-full justify-center group"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </FuturisticButton>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0792
            </div>
          </div>
        )}
=======
  const microSaas = [
    { name: 'AI Content Writer', href: '/micro-saas/ai-content-writer', description: 'AI-powered content creation' },
    { name: 'Analytics Dashboard', href: '/micro-saas/analytics-dashboard', description: 'Business analytics platform' },
    { name: 'Appointment Scheduler', href: '/micro-saas/appointment-scheduler', description: 'Smart scheduling system' },
    { name: 'Chat Analytics', href: '/micro-saas/chat-analytics', description: 'Conversation insights' },
    { name: 'Content Generator', href: '/micro-saas/content-generator', description: 'Automated content creation' },
    { name: 'Document Processor', href: '/micro-saas/document-processor', description: 'Document automation' },
    { name: 'Email Marketing', href: '/micro-saas/email-marketing', description: 'Email campaign management' },
    { name: 'Expense Tracker', href: '/micro-saas/expense-tracker', description: 'Financial tracking tool' }
  ];
=======
=======
          <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="px-4 py-6 space-y-6">
              <Link href="/" className="block text-gray-700 hover:text-purple-600 transition-colors font-medium">
                Home
              </Link>
              
              {/* Mobile Services */}
              <div className="space-y-4">
                <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Services</div>
                {serviceCategories.map((category, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center space-x-2 text-gray-700 font-medium">
                      <category.icon className={`w-4 h-4 ${category.color}`} />
                      <span>{category.title}</span>
                    </div>
                    <ul className="ml-6 space-y-1">
                      {category.services.slice(0, 4).map((service, serviceIndex) => (
                        <li key={serviceIndex}>
                          <Link 
                            href={service.path}
                            className="block text-sm text-gray-600 hover:text-purple-600 transition-colors py-1"
                          >
                            {service.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <Link href="/about" className="block text-gray-700 hover:text-purple-600 transition-colors font-medium">
                About
              </Link>
              <Link href="/case-studies" className="block text-gray-700 hover:text-purple-600 transition-colors font-medium">
                Case Studies
              </Link>
              <Link href="/blog" className="block text-gray-700 hover:text-purple-600 transition-colors font-medium">
                Blog
              </Link>
              <Link href="/contact" className="block text-gray-700 hover:text-purple-600 transition-colors font-medium">
                Contact
              </Link>

              <div className="pt-4 border-t border-gray-200">
                <Link 
                  href="/contact"
                  className="block w-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-center px-6 py-3 rounded-lg hover:from-purple-600 hover:to-cyan-600 transition-all duration-200 font-medium"
                >
                  Get Started
                </Link>
              </div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-08e3
=======
        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-900/95 backdrop-blur-md rounded-lg mt-2 border border-cyan-500/20">
              <Link
                to="/"
                className="block px-3 py-2 text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
                onClick={closeAllMenus}
              >
                Home
              </Link>
              
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
              >
                Contact
              </Link>

              <Link
                to="/consultation"
                className="block px-3 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-medium text-center mt-4"
                onClick={closeAllMenus}
              >
                Get Started
              </Link>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0b69
            </div>
          </div>
        )}
      </div>
    </nav>
  );
<<<<<<< HEAD
});

Navigation.displayName = 'Navigation';
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-08bc

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
=======
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-white">
              Zion Tech Group
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-084e
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
<<<<<<< HEAD
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                to="/"
                className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Home
              </Link>
              
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
                    </div>
                  </div>
                )}
              </div>

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
=======
            <div className="ml-10 flex items-baseline space-x-4">
              <Link 
                href="/about" 
                className="text-white hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                About
              </Link>
              <Link 
                href="/blog" 
                className="text-white hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Blog
              </Link>
              <Link 
                href="/contact" 
                className="text-white hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-084e
              >
                Contact
              </Link>
            </div>
<<<<<<< HEAD
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              to="/consultation"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25"
            >
              Get Started
            </Link>
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-084e
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-cyan-400 p-2 rounded-md transition-colors duration-200"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
<<<<<<< HEAD
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-01d9
=======

<<<<<<< HEAD
<<<<<<< HEAD
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200 shadow-lg">
=======
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0aab
              <Link
                to="/"
                className="text-gray-900 hover:text-purple-600 block px-3 py-2 text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-900 hover:text-purple-600 block px-3 py-2 text-base font-medium"
                onClick={() => setIsOpen(false)}
=======
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link 
                href="/about" 
                className="block px-3 py-2 text-white hover:text-blue-400 transition-colors"
                onClick={closeMenu}
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-084e
              >
                About
              </Link>
              
              <div>
                <button
                  onClick={toggleServices}
                  className="text-gray-900 hover:text-purple-600 block px-3 py-2 text-base font-medium w-full text-left flex items-center justify-between"
                >
                  Services
                  <ChevronDown className={`h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isServicesOpen && (
                  <div className="pl-6 space-y-1">
                    {services.map((service) => {
                      const IconComponent = service.icon
                      return (
                        <Link
                          key={service.href}
                          to={service.href}
                          className="text-gray-600 hover:text-purple-600 block px-3 py-2 text-sm font-medium flex items-center"
                          onClick={() => {
                            setIsOpen(false)
                            setIsServicesOpen(false)
                          }}
                        >
                          <IconComponent className="w-4 h-4 text-purple-600 mr-2" />
                          {service.title}
                        </Link>
                      )
                    })}
                  </div>
                )}
              </div>

              <Link
                to="/contact"
                className="text-gray-900 hover:text-purple-600 block px-3 py-2 text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
<<<<<<< HEAD
            </div>
          </div>
        )}
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0440
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-slate-800 border-t border-cyan-500/20">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
              onClick={closeAllMenus}
            >
              Home
            </Link>
            
            <Link
              to="/about"
              className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
              onClick={closeAllMenus}
            >
              About
            </Link>

            <Link
              to="/ai-services"
              className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
              onClick={closeAllMenus}
            >
              AI Services
            </Link>

            <Link
              to="/it-services"
              className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
              onClick={closeAllMenus}
            >
              IT Services
            </Link>

            <Link
              to="/pricing"
              className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
              onClick={closeAllMenus}
            >
              Pricing
            </Link>
            
            <Link
              to="/blog"
              className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
              onClick={closeAllMenus}
            >
              Blog
            </Link>
            
            <Link
              to="/contact"
              className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
              onClick={closeAllMenus}
            >
              Contact
            </Link>

            <Link
              to="/consultation"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 mt-4 text-center"
              onClick={closeAllMenus}
            >
              Get Started
            </Link>
=======
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-md border-b border-cyan-500/20">
            <div className="px-4 py-6 space-y-4">
              {/* Services */}
              <div>
                <h3 className="text-cyan-400 font-semibold mb-3">Services</h3>
                <div className="space-y-2">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      to={service.href}
                      className="flex items-center p-3 rounded-lg hover:bg-slate-800/50 transition-colors"
                    >
                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center text-white mr-3`}>
                        {service.icon}
                      </div>
                      <div>
                        <div className="font-semibold text-white">{service.name}</div>
                        <div className="text-sm text-gray-300">{service.description}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Main Pages */}
              <div>
                <h3 className="text-cyan-400 font-semibold mb-3">Pages</h3>
                <div className="space-y-2">
                  {mainPages.map((page, index) => (
                    <Link
                      key={index}
                      to={page.href}
                      className="block p-3 rounded-lg hover:bg-slate-800/50 transition-colors text-white"
                    >
                      {page.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <Link
                  to="/contact"
                  className="block w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold text-center hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
=======
        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden border-t border-gray-200 py-6 bg-white">
            <div className="space-y-6">
              <Link 
                to="/" 
                className="block text-lg font-medium text-gray-900 hover:text-purple-600 transition-colors"
                onClick={closeAllMenus}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="block text-lg font-medium text-gray-900 hover:text-purple-600 transition-colors"
                onClick={closeAllMenus}
              >
                About
              </Link>
              <Link
                to="/case-studies"
                className="block text-lg font-medium text-gray-900 hover:text-purple-600 transition-colors"
                onClick={closeAllMenus}
              >
                Case Studies
              </Link>
              <Link
                to="/blog"
                className="block text-lg font-medium text-gray-900 hover:text-purple-600 transition-colors"
                onClick={closeAllMenus}
              >
                Blog
              </Link>
              <Link
                to="/contact"
                className="block text-lg font-medium text-gray-900 hover:text-purple-600 transition-colors"
                onClick={closeAllMenus}
              >
                Contact
              </Link>
              
              {/* Mobile Services */}
              <div>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex items-center justify-between w-full text-lg font-medium text-gray-900 hover:text-purple-600 transition-colors"
                >
                  <span>Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {servicesOpen && (
                  <div className="mt-4 space-y-4">
                    {serviceCategories.map((category, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <category.icon className={`w-4 h-4 ${category.color}`} />
                          <h4 className="font-semibold text-gray-700 text-sm">{category.title}</h4>
                        </div>
                        <div className="ml-6 space-y-1">
                          {category.services.map((service, serviceIndex) => (
                            <Link
                              key={serviceIndex}
                              to={service.path}
                              className="block text-sm text-gray-600 hover:text-purple-600 transition-colors"
                              onClick={closeAllMenus}
                            >
                              {service.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              {/* Mobile CTA */}
              <div className="pt-4 border-t border-gray-200">
                <Link
                  to="/contact"
                  className="block w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all"
                  onClick={closeAllMenus}
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0ac5
                >
                  Get Started
                </Link>
              </div>
            </div>
<<<<<<< HEAD
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-09ab
=======
              
              <Link 
                to="/contact" 
                className="block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-2 rounded-lg text-base font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-center mt-4"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0aab
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0ac5
          </div>
        )}
      </div>
    </nav>
  );
<<<<<<< HEAD
};
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
});
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0c2e

<<<<<<< HEAD
Navigation.displayName = 'Navigation';
<<<<<<< HEAD
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0792

export default Navigation;
<<<<<<< HEAD
>>>>>>> origin/cursor/ad-creation-and-management-f267
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-01d9
=======
export default Navigation;
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0c2e

>>>>>>> origin/cursor/analyze-improve-and-deploy-application-084e
=======
export default Navigation;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-08e3
=======

export default Navigation;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-09ab
=======

export default Navigation;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0ac5
=======
};

export default Navigation;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0b69
