<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDown, Phone, Mail, MapPin, Menu, X, Brain, Cloud, Shield, Code, BarChart, Users, Zap } from 'lucide-react';
=======
'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-02f6

const Navigation: React.FC = () => {
=======
import React, { useState, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import React, { useState, useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Home } from 'lucide-react';
import { Clock } from 'lucide-react';
import { Users } from 'lucide-react';
import { Award } from 'lucide-react';
import { Star } from 'lucide-react';
import { Cpu } from 'lucide-react';
import { MapPin } from 'lucide-react';
import { Shield } from 'lucide-react';
import { Database } from 'lucide-react';
import { TrendingUp } from 'lucide-react';
import { Zap } from 'lucide-react';
import { Brain } from 'lucide-react';
import { Sparkles } from 'lucide-react';
import { Globe } from 'lucide-react';
import { Network } from 'lucide-react';
import { Code } from 'lucide-react';
import { Monitor } from 'lucide-react';
import { BarChart3 } from 'lucide-react';
import { Mail } from 'lucide-react';
import { Phone } from 'lucide-react';
import { Smartphone } from 'lucide-react';
import { FileText } from 'lucide-react';
import { Mic } from 'lucide-react';
import { Cloud } from 'lucide-react';
import { Package } from 'lucide-react';
import { Heart } from 'lucide-react';
import { Receipt } from 'lucide-react';
interface NavigationProps {
  onSidebarToggle?: () => void;
}
export default function Navigation({ onSidebarToggle }: NavigationProps) {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0314
  const [isOpen, setIsOpen] = useState(false);

<<<<<<< HEAD
  const navigationItems = [
<<<<<<< HEAD
    { name: "Home", href: "/" },
    { name: "AI Services", href: "/ai-services" },
    { name: "IT Services", href: "/it-services" },
    { name: "Micro SaaS", href: "/micro-saas-solutions" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" }
  ];

  const aiServices = [
    { name: "AI Analytics", href: "/ai-analytics" },
    { name: "AI Cloud Infrastructure", href: "/ai-cloud-infrastructure" },
    { name: "AI Cybersecurity", href: "/ai-cybersecurity" },
    { name: "AI Data Analytics", href: "/ai-data-analytics" },
    { name: "AI E-commerce Solutions", href: "/ai-ecommerce-solutions" },
    { name: "AI Mobile App Development", href: "/ai-mobile-app-development" },
    { name: "AI Workflow Automation", href: "/ai-workflow-automation" }
  ];

  const itServices = [
    { name: "Autonomous Systems", href: "/autonomous-systems" },
    { name: "Blockchain Solutions", href: "/blockchain" },
    { name: "Blockchain Web3", href: "/blockchain-web3" },
    { name: "Business Intelligence", href: "/business-intelligence" }
  ];

  const microSaaSServices = [
    { name: "E-commerce Analytics Pro", href: "/ecommerce-analytics-pro" },
    { name: "Legal Document Manager", href: "/legal-document-manager" },
    { name: "Medical Records Manager", href: "/medical-records-manager" },
    { name: "Online Learning Platform", href: "/online-learning-platform" },
    { name: "Property Management AI", href: "/property-management-ai" },
    { name: "Supply Chain Optimizer", href: "/supply-chain-optimizer" }
  ];

  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const handleDropdownClose = () => {
    setActiveDropdown(null);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.dropdown-container')) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

=======
    {
      name: 'Home',
      path: '/',
      icon: <Globe className="w-4 h-4" />
    },
    {
      name: 'About',
      path: '/about',
      icon: <Brain className="w-4 h-4" />
    },
    {
      name: 'Services',
      path: '/services',
      icon: <Shield className="w-4 h-4" />
    },
    {
      name: 'AI Services',
      path: '/ai-services',
      icon: <Brain className="w-4 h-4" />
    },
    {
      name: 'Micro SAAS',
      path: '/micro-saas',
      icon: <Zap className="w-4 h-4" />
    },
    {
      name: '5G Solutions',
      path: '/5g-solutions',
      icon: <Zap className="w-4 h-4" />
    },
    {
      name: 'Blog',
      path: '/blog',
      icon: <Globe className="w-4 h-4" />
    },
    {
      name: 'Contact',
      path: '/contact',
      icon: <Globe className="w-4 h-4" />
  ];

  const serviceDropdownItems = [
    {
      title: 'AI Solutions',
      items: [
        { name: 'AI Analytics', path: '/ai-analytics' },
        { name: 'AI Content Generation', path: '/ai-content-generation' },
        { name: 'AI Customer Support', path: '/ai-customer-support' },
        { name: 'AI Cybersecurity', path: '/ai-cybersecurity' },
        { name: 'AI Data Analytics', path: '/ai-data-analytics' }
      ]
    },
    {
      title: '5G Solutions',
      items: [
        { name: '5G Network Design', path: '/5g-network-design' },
        { name: '5G Implementation', path: '/5g-implementation' },
        { name: '5G Private Networks', path: '/5g-private-networks' }
      ]
  ];

  return null;
};

export default function Navigation({ className = '', children, ...props }: NavigationProps) {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0314
  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">
                Zion Tech Group
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item, index) => (
              <div key={index} className="relative dropdown-container">
                {item.name === "AI Services" ? (
                  <div className="relative">
                    <button
                      onClick={() => handleDropdownToggle('ai')}
                      className="flex items-center space-x-1 text-gray-700 hover:text-purple-600 transition-colors font-medium"
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    {activeDropdown === 'ai' && (
                      <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                        {aiServices.map((service, serviceIndex) => (
                          <Link
                            key={serviceIndex}
                            href={service.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors"
                            onClick={handleDropdownClose}
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : item.name === "IT Services" ? (
                  <div className="relative">
                    <button
                      onClick={() => handleDropdownToggle('it')}
                      className="flex items-center space-x-1 text-gray-700 hover:text-purple-600 transition-colors font-medium"
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    {activeDropdown === 'it' && (
                      <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                        {itServices.map((service, serviceIndex) => (
                          <Link
                            key={serviceIndex}
                            href={service.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors"
                            onClick={handleDropdownClose}
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : item.name === "Micro SaaS" ? (
                  <div className="relative">
                    <button
                      onClick={() => handleDropdownToggle('saas')}
                      className="flex items-center space-x-1 text-gray-700 hover:text-purple-600 transition-colors font-medium"
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    {activeDropdown === 'saas' && (
                      <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                        {microSaaSServices.map((service, serviceIndex) => (
                          <Link
                            key={serviceIndex}
                            href={service.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors"
                            onClick={handleDropdownClose}
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 font-medium"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-purple-600 transition-colors"
=======
  return (
    <nav className="bg-slate-900/95 backdrop-blur-sm border-b border-amber-500/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-white">
              Zion Tech Group
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Home
              </Link>
              <Link href="/about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                About
              </Link>
              <Link href="/services" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Services
              </Link>
              <Link href="/contact" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Contact
              </Link>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2"
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-02f6
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
<<<<<<< HEAD
=======
'use client'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
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
  MessageCircle, 
  Heart, 
  DollarSign, 
  Box, 
  Monitor, 
  Link as LinkIcon, 
  Server, 
  Package 
} from 'lucide-react'

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [aiServicesOpen, setAiServicesOpen] = useState(false)
  const [itServicesOpen, setItServicesOpen] = useState(false)
  const [microSaasOpen, setMicroSaasOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const aiServices = [
<<<<<<< HEAD
    { name: 'AI Chatbots & NLP', href: '/ai-chatbot-builder', icon: MessageCircle, description: 'Conversational AI' },
    { name: 'AI Content Generation', href: '/ai-content-generation', icon: FileText, description: 'Automated content' },
    { name: 'AI Data Analytics', href: '/ai-data-analytics', icon: BarChart, description: 'Business intelligence' },
    { name: 'AI Computer Vision', href: '/ai-computer-vision', icon: Monitor, description: 'Image analysis' },
    { name: 'AI Marketing Automation', href: '/ai-marketing', icon: Target, description: 'Marketing AI' },
    { name: 'AI Process Automation', href: '/ai-automation', icon: Settings, description: 'Workflow automation' }
  ]

  const itServices = [
    { name: 'Cloud Infrastructure', href: '/cloud-infrastructure', icon: Cloud, description: 'Scalable cloud solutions' },
    { name: 'API Development', href: '/api-development', icon: Code, description: 'RESTful & GraphQL APIs' },
    { name: 'Cybersecurity', href: '/cybersecurity', icon: Shield, description: 'Security solutions' },
    { name: 'DevOps & CI/CD', href: '/devops', icon: Server, description: 'Deployment automation' },
    { name: 'Database Management', href: '/database', icon: Database, description: 'Data optimization' },
    { name: 'System Integration', href: '/integration', icon: LinkIcon, description: 'Seamless connectivity' }
  ]

  const microSaasProducts = [
    { name: 'AI Social Media Manager', href: '/ai-social-media-manager', icon: Smartphone, description: 'Social media automation' },
    { name: 'AI Video Generator', href: '/ai-video-generator', icon: Monitor, description: 'Video creation AI' },
    { name: 'AI Voice Assistant', href: '/ai-voice-assistant', icon: MessageCircle, description: 'Voice AI solutions' },
    { name: 'AI Analytics Dashboard', href: '/ai-analytics', icon: BarChart, description: 'Data visualization' },
    { name: 'AI Content Optimizer', href: '/ai-content-optimizer', icon: FileText, description: 'Content optimization' },
    { name: 'AI Customer Support', href: '/ai-customer-support', icon: Heart, description: 'Customer service AI' }
  ]

=======
    { name: 'AI Solutions', href: '/ai-services', icon: Brain, description: 'Core AI Solutions' ,},
    { name: 'AI Marketing Automation', href: '/ai-marketing', icon: Target, description: 'AI-Powered Marketing' ,},
    { name: 'AI Customer Support', href: '/ai-customer-support', icon: Users, description: 'AI Support Systems' ,},
    { name: 'AI Data Analytics', href: '/ai-data-analytics', icon: BarChart, description: 'Data Intelligence' ,},
    { name: 'AI Content Generation', href: '/ai-content-generation', icon: Code, description: 'Content Creation' ,},
    { name: 'AI Healthcare Solutions', href: '/ai-healthcare', icon: Shield, description: 'Medical AI Solutions' ,},
    { name: 'AI Financial Services', href: '/ai-fintech', icon: TrendingUp, description: 'Financial AI' ,},
    { name: 'AI E-commerce Solutions', href: '/ai-ecommerce-solutions', icon: Globe, description: 'E-commerce AI' ,},
    { name: 'AI Cybersecurity', href: '/ai-cybersecurity', icon: Lock, description: 'Security AI' ,},
    { name: 'AI Mobile Apps', href: '/ai-mobile-app-development', icon: Smartphone, description: 'Mobile AI' ,},
    { name: 'AI Sales Automation', href: '/ai-sales-automation', icon: Target, description: 'Sales AI' ,},
    { name: 'AI Workflow Automation', href: '/ai-workflow-automation', icon: Zap, description: 'Workflow AI' ,},
    { name: 'AI Data Visualization', href: '/ai-data-visualization', icon: BarChart, description: 'Data Viz AI' ,},
    { name: 'AI Lead Generation', href: '/ai-lead-generation', icon: Target, description: 'Lead Gen AI' ,},
    { name: 'AI Document Processing', href: '/ai-document-processing', icon: Code, description: 'Document AI' ,},
    { name: 'AI Process Automation', href: '/ai-automation', icon: Zap, description: 'Process Automation' ,},
    { name: 'AI Voice Assistant', href: '/ai-voice-assistant', icon: Brain, description: 'Voice AI Platform' ,},
    { name: 'AI Predictive Maintenance', href: '/ai-predictive-maintenance', icon: Settings, description: 'Maintenance AI' ,},
    { name: 'AI Supply Chain', href: '/ai-supply-chain', icon: BarChart, description: 'Supply Chain AI' ,},
    { name: 'AI Quality Control', href: '/ai-quality-control', icon: Shield, description: 'Quality AI' ,},
    { name: 'AI Energy Management', href: '/ai-energy-management', icon: Zap, description: 'Energy AI' ,},
    { name: 'AI Legal Analysis', href: '/ai-legal-analysis', icon: FileText, description: 'Legal AI' ,},
    { name: 'AI Real Estate', href: '/ai-real-estate', icon: Globe, description: 'Real Estate AI' ,},
    { name: 'AI HR Assistant', href: '/ai-hr-assistant', icon: Users, description: 'HR AI' ,},
    { name: 'AI Insurance', href: '/ai-insurance', icon: Shield, description: 'Insurance AI' ,},
    { name: 'AI Education', href: '/ai-education', icon: Users, description: 'Educational AI' ,},
    { name: 'AI Transportation', href: '/ai-transportation', icon: Globe, description: 'Transportation AI' ,},
    { name: 'AI Environmental', href: '/ai-environmental', icon: Globe, description: 'Environmental AI' ,},
    { name: 'AI Retail', href: '/ai-retail', icon: Globe, description: 'Retail AI' ,},
    { name: 'AI Sports', href: '/ai-sports', icon: BarChart, description: 'Sports AI' ,},
    { name: 'AI Mental Health', href: '/ai-mental-health', icon: Users, description: 'Mental Health AI' ,}
  ];
  const itServices = [
    { name: 'Cloud Services', href: '/cloud-services', icon: Cloud, description: 'Cloud Solutions' ,},
    { name: 'Cloud Migration', href: '/cloud-migration', icon: Cloud, description: 'Seamless Migration' ,},
    { name: 'DevOps & CI/CD', href: '/devops', icon: Settings, description: 'Development Operations' ,},
    { name: 'Database Services', href: '/database', icon: Database, description: 'Data Management' ,},
    { name: 'Cybersecurity', href: '/cybersecurity', icon: Shield, description: 'Security Solutions' ,},
    { name: 'Security Monitoring', href: '/security-monitoring', icon: Shield, description: '24/7 Security' ,},
    { name: 'Penetration Testing', href: '/penetration-testing', icon: Shield, description: 'Security Testing' ,},
    { name: 'IT Infrastructure', href: '/it-infrastructure', icon: Cloud, description: 'Infrastructure Setup' ,},
    { name: 'Managed IT Services', href: '/managed-it', icon: Settings, description: '24/7 IT Support' ,},
    { name: 'IT Consulting', href: '/it-consulting', icon: Users, description: 'IT Strategy' ,},
    { name: 'Data Analytics', href: '/data-analytics', icon: BarChart, description: 'Business Intelligence' ,},
    { name: 'Mobile Development', href: '/mobile-development', icon: Smartphone, description: 'Mobile Apps' ,},
    { name: 'Web Development', href: '/web-development', icon: Globe, description: 'Web Applications' ,},
    { name: 'Process Automation', href: '/process-automation', icon: Zap, description: 'Workflow Automation' ,},
    { name: 'Cloud Infrastructure', href: '/cloud-infrastructure', icon: Cloud, description: 'Infrastructure Management' ,},
    { name: 'Network Security', href: '/network-security', icon: Shield, description: 'Network Protection' ,},
    { name: 'Data Backup', href: '/data-backup', icon: Database, description: 'Backup Solutions' ,},
    { name: 'IT Asset Management', href: '/it-asset-management', icon: Settings, description: 'Asset Management' ,},
    { name: 'Website Hosting', href: '/website-hosting', icon: Globe, description: 'Hosting Services' ,},
    { name: 'Mobile Device Management', href: '/mobile-device-management', icon: Smartphone, description: 'Device Management' ,},
    { name: 'Compliance Services', href: '/compliance-services', icon: Shield, description: 'Compliance Solutions' ,},
    { name: 'IT Performance Monitoring', href: '/it-performance-monitoring', icon: BarChart, description: 'Performance Monitoring' ,},
    { name: 'IT Training', href: '/it-training', icon: Users, description: 'Training Services' ,},
    { name: 'IT Project Management', href: '/it-project-management', icon: Settings, description: 'Project Management' ,},
    { name: 'Vulnerability Assessment', href: '/vulnerability-assessment', icon: Shield, description: 'Security Assessment' ,},
    { name: 'Hybrid Cloud', href: '/hybrid-cloud', icon: Cloud, description: 'Hybrid Solutions' ,},
    { name: 'Data Migration', href: '/data-migration', icon: Database, description: 'Migration Services' ,},
    { name: 'API Development', href: '/api-development', icon: Globe, description: 'API Services' ,},
    { name: 'IT Governance', href: '/it-governance', icon: Settings, description: 'Governance Solutions' ,}
  ];
  const microSaasServices = [
    { name: 'Micro SAAS Solutions', href: '/micro-saas', icon: Cpu, description: '50+ AI Tools' ,},
    { name: 'AI Analytics Dashboard', href: '/ai-analytics-dashboard', icon: BarChart, description: 'Business Intelligence' ,},
    { name: 'AI-Powered CRM', href: '/ai-crm', icon: Users, description: 'Customer Management' ,},
    { name: 'AI Content Studio', href: '/ai-content-studio', icon: Code, description: 'Content Creation' ,},
    { name: 'AI Chatbot Builder', href: '/ai-chatbot-builder', icon: Users, description: 'Chatbot Platform' ,},
    { name: 'AI Email Marketing', href: '/ai-email-marketing', icon: Mail, description: 'Email Marketing' ,},
    { name: 'AI Mobile App Builder', href: '/ai-mobile-app-builder', icon: Smartphone, description: 'Mobile Development' ,},
    { name: 'AI SEO Optimizer', href: '/ai-seo-optimizer', icon: Search, description: 'SEO Tools' ,},
    { name: 'AI Invoice Generator', href: '/ai-invoice-generator', icon: BarChart, description: 'Invoice Management' ,},
    { name: 'AI Writing Assistant', href: '/ai-writing-assistant', icon: Code, description: 'Writing Tools' ,},
    { name: 'Smart Analytics', href: '/smart-analytics', icon: BarChart, description: 'Analytics Platform' ,},
    { name: 'AI Scheduler', href: '/ai-scheduler', icon: Calendar, description: 'Scheduling Tools' ,},
    { name: 'Expense Tracker', href: '/expense-tracker', icon: BarChart, description: 'Expense Management' ,},
    { name: 'Task Manager Pro', href: '/task-manager-pro', icon: CheckSquare, description: 'Task Management' ,},
    { name: 'CRM Lite', href: '/crm-lite', icon: Users, description: 'Lightweight CRM' ,},
    { name: 'Email Optimizer', href: '/email-optimizer', icon: Mail, description: 'Email Optimization' ,},
    { name: 'Social Media Manager', href: '/social-media-manager', icon: Globe, description: 'Social Media Tools' ,},
    { name: 'AI Design Studio', href: '/ai-design-studio', icon: Sparkles, description: 'Design Tools' ,},
    { name: 'Landing Page Builder', href: '/landing-page-builder', icon: Globe, description: 'Page Builder' ,},
    { name: 'SEO Optimizer', href: '/seo-optimizer', icon: Search, description: 'SEO Tools' ,},
    { name: 'Ad Campaign Manager', href: '/ad-campaign-manager', icon: BarChart, description: 'Ad Management' ,},
    { name: 'Code Assistant', href: '/code-assistant', icon: Code, description: 'Development Tools' ,},
    { name: 'API Builder', href: '/api-builder', icon: Settings, description: 'API Development' ,},
    { name: 'Bug Tracker Pro', href: '/bug-tracker-pro', icon: Shield, description: 'Bug Tracking' ,},
    { name: 'Doc Generator', href: '/doc-generator', icon: FileText, description: 'Documentation' ,},
    { name: 'AI Recruitment Assistant', href: '/ai-recruitment-assistant', icon: Users, description: 'HR & Recruitment' ,},
    { name: 'Medical Records Manager', href: '/medical-records-manager', icon: Shield, description: 'Healthcare' ,},
    { name: 'AI Accounting Assistant', href: '/ai-accounting-assistant', icon: BarChart, description: 'Finance & Accounting' ,},
    { name: 'Property Management AI', href: '/property-management-ai', icon: BarChart, description: 'Real Estate' ,},
    { name: 'Legal Document Manager', href: '/legal-document-manager', icon: Shield, description: 'Legal & Compliance' ,},
    { name: 'Online Learning Platform', href: '/online-learning-platform', icon: Users, description: 'Education' ,},
    { name: 'Supply Chain Optimizer', href: '/supply-chain-optimizer', icon: BarChart, description: 'Manufacturing' ,}
  ];
  const emergingTech = [
    { name: 'Quantum Computing', href: '/quantum-computing', icon: Cpu, description: 'Quantum Solutions' ,},
    { name: 'Robotics & Automation', href: '/robotics', icon: Brain, description: 'Intelligent Robotics' ,},
    { name: 'IoT & Edge Computing', href: '/iot-edge-computing', icon: Globe, description: 'Connected Devices' ,},
    { name: 'Blockchain & Web3', href: '/blockchain-web3', icon: Shield, description: 'Decentralized Solutions' ,},
    { name: 'Business Intelligence', href: '/business-intelligence', icon: BarChart, description: 'Data Insights' ,},
    { name: 'Autonomous Systems', href: '/autonomous-systems', icon: Zap, description: 'Self-Managing Systems' ,},
    { name: '5G Implementation', href: '/5g-implementation', icon: Globe, description: '5G Solutions' ,},
    { name: 'AI 3D Generation', href: '/ai-3d-generation', icon: Brain, description: '3D AI Solutions' ,},
    { name: 'Holographic Workspace', href: '/ai-holographic-workspace', icon: Brain, description: 'Holographic AI' ,}
  ];
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-sm border-b border-slate-700' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-white transition-colors">
              Home
            </Link>
            
            {/* AI Services Dropdown */}
            <div className="relative group">
              <button
                onMouseEnter={() => setAiServicesOpen(true)}
                onMouseLeave={() => setAiServicesOpen(false)}
                className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors"
              >
                <Brain className="w-4 h-4" />
                <span>AI Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {aiServicesOpen && (
                <div
                  onMouseEnter={() => setAiServicesOpen(true)}
                  onMouseLeave={() => setAiServicesOpen(false)}
                  className="absolute top-full left-0 mt-2 w-80 bg-slate-800 rounded-lg shadow-xl border border-slate-700 p-6"
                >
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                    <Brain className="w-5 h-5 mr-2 text-cyan-400" />
                    AI Services
                  </h3>
                  <div className="grid grid-cols-1 gap-3">
                    {aiServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-700 transition-colors group"
                      >
                        <service.icon className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300" />
                        <div>
                          <div className="text-white font-medium">{service.name}</div>
                          <div className="text-gray-400 text-sm">{service.description}</div>
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
                onMouseEnter={() => setItServicesOpen(true)}
                onMouseLeave={() => setItServicesOpen(false)}
                className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors"
              >
                <Code className="w-4 h-4" />
                <span>IT Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {itServicesOpen && (
                <div
                  onMouseEnter={() => setItServicesOpen(true)}
                  onMouseLeave={() => setItServicesOpen(false)}
                  className="absolute top-full left-0 mt-2 w-80 bg-slate-800 rounded-lg shadow-xl border border-slate-700 p-6"
                >
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                    <Code className="w-5 h-5 mr-2 text-purple-400" />
                    IT Services
                  </h3>
                  <div className="grid grid-cols-1 gap-3">
                    {itServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-700 transition-colors group"
                      >
                        <service.icon className="w-5 h-5 text-purple-400 group-hover:text-purple-300" />
                        <div>
<<<<<<< HEAD
                          <div className="text-white font-medium">{service.name}</div>
                          <div className="text-gray-400 text-sm">{service.description}</div>
=======
                          <div className="text-white font-medium">{service.name}</div></div></div></div></div>
                          <div className="text-xs text-gray-400">{service.description}</div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
<<<<<<< HEAD

            <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
=======
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
                          <div className="text-white font-medium">{service.name}</div></div></div></div></div>
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
                          <div className="text-white font-medium">{service.name}</div></div></div></div></div>
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
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
              About
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group"
            >
              Get Started
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-02d3
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
<<<<<<< HEAD
<<<<<<< HEAD
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              {navigationItems.map((item, index) => (
                <div key={index}>
                  {item.name === "AI Services" ? (
                    <div>
                      <button
                        onClick={() => handleDropdownToggle('ai-mobile')}
                        className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-md transition-colors"
                      >
                        <span>{item.name}</span>
                        <ChevronDown className="w-4 h-4" />
                      </button>
                      {activeDropdown === 'ai-mobile' && (
                        <div className="pl-4 space-y-1">
                          {aiServices.map((service, serviceIndex) => (
                            <Link
                              key={serviceIndex}
                              href={service.href}
                              className="block px-3 py-2 text-sm text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-md transition-colors"
                              onClick={() => {
                                setIsOpen(false);
                                handleDropdownClose();
                              }}
                            >
                              {service.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : item.name === "IT Services" ? (
                    <div>
                      <button
                        onClick={() => handleDropdownToggle('it-mobile')}
                        className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-md transition-colors"
                      >
                        <span>{item.name}</span>
                        <ChevronDown className="w-4 h-4" />
                      </button>
                      {activeDropdown === 'it-mobile' && (
                        <div className="pl-4 space-y-1">
                          {itServices.map((service, serviceIndex) => (
                            <Link
                              key={serviceIndex}
                              href={service.href}
                              className="block px-3 py-2 text-sm text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-md transition-colors"
                              onClick={() => {
                                setIsOpen(false);
                                handleDropdownClose();
                              }}
                            >
                              {service.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : item.name === "Micro SaaS" ? (
                    <div>
                      <button
                        onClick={() => handleDropdownToggle('saas-mobile')}
                        className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-md transition-colors"
                      >
                        <span>{item.name}</span>
                        <ChevronDown className="w-4 h-4" />
                      </button>
                      {activeDropdown === 'saas-mobile' && (
                        <div className="pl-4 space-y-1">
                          {microSaaSServices.map((service, serviceIndex) => (
                            <Link
                              key={serviceIndex}
                              href={service.href}
                              className="block px-3 py-2 text-sm text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-md transition-colors"
                              onClick={() => {
                                setIsOpen(false);
                                handleDropdownClose();
                              }}
                            >
                              {service.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-md transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              
              {/* Mobile CTA Button */}
              <div className="pt-4 border-t border-gray-200">
                <Link
                  href="/contact"
                  className="block w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 font-medium text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Get Started
=======
          <div className="lg:hidden absolute top-full left-0 right-0 bg-slate-900 border-t border-slate-700 shadow-xl">
            <div className="container mx-auto px-4 py-6 space-y-4">
              <Link
                to="/"
                className="block text-gray-300 hover:text-white transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              
              <div className="space-y-2">
                <div className="text-gray-400 font-medium py-2">AI Services</div>
                {aiServices.map((service) => (
                  <Link
                    key={service.name}
                    to={service.href}
                    className="block text-gray-300 hover:text-white transition-colors py-2 ml-4"
                    onClick={() => setIsOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>

              <div className="space-y-2">
                <div className="text-gray-400 font-medium py-2">IT Services</div>
                {itServices.map((service) => (
                  <Link
                    key={service.name}
                    to={service.href}
                    className="block text-gray-300 hover:text-white transition-colors py-2 ml-4"
                    onClick={() => setIsOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>

              <Link
                to="/about"
                className="block text-gray-300 hover:text-white transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="block text-gray-300 hover:text-white transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
=======
          <div className="lg:hidden mt-4 pb-4 border-t border-cyan-500/20">
            <div className="pt-4 space-y-4">
              <Link href="/" className="block text-gray-300 hover: text-cyan-400 transition-colors duration-300 font-medium" onClick={closeAllMenus,}>
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
                  </div></div></div></div>
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
                  </div></div>
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
                  </div></div>
                )}
              </div>
              <Link href="/about" className="block text-gray-300 hover: text-cyan-400 transition-colors duration-300 font-medium" onClick={closeAllMenus,}>
                About
              </Link>
              <Link href="/services" className="block text-gray-300 hover: text-cyan-400 transition-colors duration-300 font-medium" onClick={closeAllMenus,}>
                Services
              </Link>
              <Link href="/pricing" className="block text-gray-300 hover: text-cyan-400 transition-colors duration-300 font-medium" onClick={closeAllMenus,}>
                Pricing
              </Link>
              <Link href="/blog" className="block text-gray-300 hover: text-cyan-400 transition-colors duration-300 font-medium" onClick={closeAllMenus,}>
                Blog
              </Link>
              <Link href="/contact" className="block text-gray-300 hover: text-cyan-400 transition-colors duration-300 font-medium" onClick={closeAllMenus,}>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
                Contact
              </Link>

              <div className="pt-4 border-t border-slate-700">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group"
                  onClick={() => setIsOpen(false)}
                >
<<<<<<< HEAD
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-02d3
                </Link>
=======
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
                </div></div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
              </div>
            </div>
          </div>
        )}
=======
          </div>
        </div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-02f6
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-900/95">
            <Link href="/" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Home
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              About
            </Link>
            <Link href="/services" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Services
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
<<<<<<< HEAD
};

<<<<<<< HEAD
export default Navigation;
=======
}
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0314
=======

export default Navigation
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-02d3
=======
export default Navigation;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-02f6
