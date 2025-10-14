<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
<<<<<<< HEAD
import { 
  XMarkIcon,
  HomeIcon,
  InformationCircleIcon,
  BriefcaseIcon,
  PhoneIcon,
  DocumentTextIcon,
  AcademicCapIcon,
  PlayIcon,
  QuestionMarkCircleIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon,
  CogIcon,
  ChevronDownIcon,
  GlobeAltIcon,
  CloudIcon,
  CpuChipIcon,
  SignalIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';
<<<<<<< HEAD
=======
=======
import { ArrowRight, ChevronDown, ChevronRight, Brain, Shield, Zap, Globe, BarChart3, Cloud, Settings, Search, Star, TrendingUp, Users, Clock, CheckCircle, HelpCircle, Phone, Mail, MapPin, X, Home, BookOpen, FileText, MessageSquare, Calendar, DollarSign, Play } from 'lucide-react';
>>>>>>> origin/main
>>>>>>> origin/main

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/main
const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const location = useLocation();
<<<<<<< HEAD
=======
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const toggleExpanded = (item: string) => {
    setExpandedItems(prev => 
      prev.includes(item) 
        ? prev.filter(i => i !== item)
        : [...prev, item]
    );
  };
>>>>>>> origin/main

  const navigation = [
    { name: "Home", href: "/", icon: HomeIcon },
    { name: "About", href: "/about", icon: InformationCircleIcon },
    { 
      name: "Services", 
      href: "/services", 
      icon: BriefcaseIcon,
      submenu: [
<<<<<<< HEAD
        { name: "AI Services", href: "/ai-services", icon: CpuChipIcon },
        { name: "IT Services", href: "/it-services", icon: CogIcon },
        { name: "Cloud Infrastructure", href: "/cloud-infrastructure", icon: CloudIcon },
        { name: "Cybersecurity", href: "/cybersecurity", icon: ShieldCheckIcon }
      ]
    },
    { 
      name: "Solutions", 
      href: "/solutions", 
      icon: CogIcon,
      submenu: [
        { name: "AI Solutions", href: "/ai-solutions", icon: CpuChipIcon },
        { name: "Cybersecurity", href: "/cybersecurity", icon: ShieldCheckIcon },
        { name: "Cloud Infrastructure", href: "/cloud-solutions", icon: CloudIcon },
        { name: "Digital Transformation", href: "/digital-transformation", icon: CogIcon },
        { name: "Micro SaaS", href: "/micro-saas", icon: GlobeAltIcon },
        { name: "5G Solutions", href: "/5g-solutions", icon: SignalIcon }
      ]
    },
    { name: "Blog", href: "/blog", icon: DocumentTextIcon },
    { name: "Tutorials", href: "/tutorials", icon: AcademicCapIcon },
    { name: "Demo", href: "/demo", icon: PlayIcon },
    { name: "Support", href: "/support", icon: QuestionMarkCircleIcon },
    { name: "Pricing", href: "/pricing", icon: CurrencyDollarIcon },
    { name: "Contact", href: "/contact", icon: PhoneIcon }
  ];

  const additionalLinks = [
    { name: "Privacy Policy", href: "/privacy", icon: ShieldCheckIcon },
    { name: "Terms of Service", href: "/terms", icon: DocumentTextIcon },
    { name: "Our Team", href: "/team", icon: UserGroupIcon },
    { name: "Documentation", href: "/docs", icon: DocumentTextIcon },
    { name: "Careers", href: "/careers", icon: BriefcaseIcon }
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const toggleSection = (sectionName: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionName) 
        ? prev.filter(name => name !== sectionName)
        : [...prev, sectionName]
    );
  };

  const isExpanded = (sectionName: string) => {
    return expandedSections.includes(sectionName);
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg z-50 overflow-y-auto">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold text-gray-900">Navigation</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-md"
          >
            <XMarkIcon className="w-5 h-5" />
          </button>
        </div>
        
        <nav className="mt-4">
          {navigation.map((item) => (
            <div key={item.name}>
              {item.submenu ? (
                <div>
                  <button
                    onClick={() => toggleSection(item.name)}
                    className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center">
                      <item.icon className="w-5 h-5 mr-3" />
                      {item.name}
                    </div>
                    <ChevronDownIcon 
                      className={`w-4 h-4 transition-transform ${
                        isExpanded(item.name) ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>
                  {isExpanded(item.name) && (
                    <div className="pl-4 space-y-1">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className={`block px-4 py-2 text-sm transition-colors ${
                            isActive(subItem.href)
                              ? 'text-blue-600 bg-blue-50'
                              : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                          }`}
                          onClick={onClose}
                        >
                          {subItem.name}
=======
        { name: 'AI Services', href: '/ai-services', icon: CpuChipIcon },
        { name: 'IT Services', href: '/it-services', icon: CogIcon },
        { name: 'Cloud Infrastructure', href: '/cloud-infrastructure', icon: CloudIcon },
        { name: 'Cybersecurity', href: '/cybersecurity', icon: ShieldCheckIcon },
        { name: '5G Solutions', href: '/5g-solutions', icon: SignalIcon }
      ]
    },
    { name: 'Solutions', href: '/solutions', icon: GlobeAltIcon },
    { name: 'Case Studies', href: '/case-studies', icon: DocumentTextIcon },
    { name: 'Blog', href: '/blog', icon: AcademicCapIcon },
    { name: 'Resources', href: '/resources', icon: PlayIcon },
    { name: 'FAQ', href: '/faq', icon: QuestionMarkCircleIcon },
    { name: 'Contact', href: '/contact', icon: PhoneIcon }
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
      <div className="relative flex flex-col w-64 h-full bg-slate-900">
        <div className="flex items-center justify-between p-4 border-b border-slate-700">
          <span className="text-xl font-bold text-white">Menu</span>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <XMarkIcon className="w-6 h-6" />
          </button>
        </div>
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {navigation.map((link) => (
            <div key={link.name}>
              {link.submenu ? (
                <div>
                  <button
                    onClick={() => toggleExpanded(link.name)}
                    className="flex items-center justify-between w-full px-3 py-2 text-gray-300 hover:text-white hover:bg-slate-800 rounded"
                  >
                    <div className="flex items-center">
                      <link.icon className="w-5 h-5 mr-3" />
                      {link.name}
                    </div>
                    <ChevronDownIcon 
                      className={`w-4 h-4 transition-transform ${
                        expandedItems.includes(link.name) ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>
                  {expandedItems.includes(link.name) && (
                    <div className="ml-4 mt-2 space-y-1">
                      {link.submenu.map((subLink) => (
                        <Link
                          key={subLink.name}
                          to={subLink.href}
                          className={`flex items-center px-3 py-2 text-sm transition-colors ${
                            isActive(subLink.href)
                              ? 'text-blue-400 bg-blue-900/20'
                              : 'text-gray-400 hover:text-white hover:bg-slate-800'
                          }`}
                          onClick={onClose}
                        >
                          <subLink.icon className="w-4 h-4 mr-3" />
                          {subLink.name}
>>>>>>> origin/main
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
<<<<<<< HEAD
                  to={item.href}
                  className={`flex items-center px-4 py-3 transition-colors ${
                    isActive(item.href)
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                  onClick={onClose}
                >
                  <item.icon className="w-5 h-5 mr-3" />
                  {item.name}
=======
                  to={link.href}
                  className={`flex items-center px-3 py-2 text-gray-300 hover:text-white hover:bg-slate-800 rounded ${
                    isActive(link.href) ? 'text-blue-400 bg-blue-900/20' : ''
                  }`}
                  onClick={onClose}
                >
                  <link.icon className="w-5 h-5 mr-3" />
                  {link.name}
>>>>>>> origin/main
                </Link>
              )}
            </div>
          ))}
<<<<<<< HEAD
          
          {/* Additional Links */}
          <div className="border-t border-gray-200 mt-4 pt-4">
            <h3 className="px-4 py-2 text-sm font-semibold text-gray-500 uppercase tracking-wider">
              Additional
            </h3>
            {additionalLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`flex items-center px-4 py-2 text-sm transition-colors ${
                  isActive(link.href)
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
                onClick={onClose}
              >
                <link.icon className="w-4 h-4 mr-3" />
                {link.name}
              </Link>
            ))}
          </div>
=======
>>>>>>> origin/main
        </nav>
=======
const ImprovedSidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const [expandedSections, setExpandedSections] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  // Close sidebar when route changes
  useEffect(() => {
    onClose();
  }, [location, onClose]);

  const toggleSection = (section: string) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const navigationSections = [
    {
      id: 'ai-services',
      title: 'AI Services',
      icon: <Brain className="w-5 h-5" />,
      color: 'from-blue-500 to-cyan-500',
      href: '/ai-services',
      items: [
        { label: 'AI Analytics Dashboard Pro', href: '/ai-analytics-dashboard-pro', icon: <BarChart3 className="w-4 h-4" /> },
        { label: 'AI Cybersecurity Suite Pro', href: '/ai-cybersecurity-suite-pro', icon: <Shield className="w-4 h-4" /> },
        { label: 'AI Content Generation Pro', href: '/ai-content-generation-pro', icon: <FileText className="w-4 h-4" /> },
        { label: 'AI Customer Support Chatbot', href: '/ai-customer-support-chatbot', icon: <MessageSquare className="w-4 h-4" /> },
        { label: 'AI Code Assistant Pro', href: '/ai-code-assistant-pro', icon: <Settings className="w-4 h-4" /> },
        { label: 'AI Business Intelligence Pro', href: '/ai-business-intelligence-pro', icon: <TrendingUp className="w-4 h-4" /> },
        { label: 'AI Automation Platform', href: '/ai-automation-platform', icon: <Zap className="w-4 h-4" /> },
        { label: 'AI Data Analytics Pro', href: '/ai-data-analytics-pro', icon: <BarChart3 className="w-4 h-4" /> },
        { label: 'AI Marketing Automation', href: '/ai-marketing-automation', icon: <TrendingUp className="w-4 h-4" /> },
        { label: 'AI HR & Recruitment Pro', href: '/ai-hr-recruitment-pro', icon: <Users className="w-4 h-4" /> },
        { label: 'AI Financial Analysis', href: '/ai-financial-analysis', icon: <DollarSign className="w-4 h-4" /> },
        { label: 'AI Supply Chain Optimizer', href: '/ai-supply-chain-optimizer', icon: <Globe className="w-4 h-4" /> },
        { label: 'AI Voice Assistant Pro', href: '/ai-voice-assistant-pro', icon: <MessageSquare className="w-4 h-4" /> },
        { label: 'AI Image Recognition Pro', href: '/ai-image-recognition-pro', icon: <Settings className="w-4 h-4" /> },
        { label: 'AI Predictive Maintenance', href: '/ai-predictive-maintenance', icon: <Clock className="w-4 h-4" /> },
        { label: 'AI Sentiment Analysis Pro', href: '/ai-sentiment-analysis-pro', icon: <TrendingUp className="w-4 h-4" /> },
        { label: 'AI Recommendation Engine', href: '/ai-recommendation-engine', icon: <Star className="w-4 h-4" /> },
        { label: 'AI Fraud Detection Pro', href: '/ai-fraud-detection-pro', icon: <Shield className="w-4 h-4" /> },
        { label: 'AI Language Translation', href: '/ai-language-translation', icon: <Globe className="w-4 h-4" /> },
        { label: 'AI Chatbot Enterprise', href: '/ai-chatbot-enterprise', icon: <MessageSquare className="w-4 h-4" /> },
        { label: 'AI Data Mining Pro', href: '/ai-data-mining-pro', icon: <BarChart3 className="w-4 h-4" /> },
        { label: 'AI Video Analysis', href: '/ai-video-analysis', icon: <Play className="w-4 h-4" /> },
        { label: 'AI Time Series Forecasting', href: '/ai-time-series-forecasting', icon: <TrendingUp className="w-4 h-4" /> },
        { label: 'AI NLP Text Analysis', href: '/ai-nlp-text-analysis', icon: <FileText className="w-4 h-4" /> }
      ]
    },
    {
      id: 'it-services',
      title: 'IT Services',
      icon: <Shield className="w-5 h-5" />,
      color: 'from-green-500 to-emerald-500',
      href: '/services',
      items: [
        { label: 'Cloud Infrastructure', href: '/cloud-infrastructure', icon: <Cloud className="w-4 h-4" /> },
        { label: 'Blockchain Development', href: '/blockchain-development', icon: <Settings className="w-4 h-4" /> },
        { label: 'IoT Solutions', href: '/iot-solutions', icon: <Globe className="w-4 h-4" /> },
        { label: 'AR/VR Development', href: '/ar-vr-development', icon: <Settings className="w-4 h-4" /> },
        { label: 'DevOps Solutions', href: '/devops-solutions', icon: <Settings className="w-4 h-4" /> },
        { label: 'Mobile Development', href: '/mobile-development', icon: <Settings className="w-4 h-4" /> },
        { label: 'Web Development', href: '/web-development', icon: <Settings className="w-4 h-4" /> },
        { label: 'IT Support', href: '/it-support', icon: <HelpCircle className="w-4 h-4" /> },
        { label: 'Network Infrastructure', href: '/network-infrastructure', icon: <Globe className="w-4 h-4" /> },
        { label: 'IT Consulting', href: '/it-consulting', icon: <Users className="w-4 h-4" /> },
        { label: 'Cybersecurity Audit', href: '/cybersecurity-audit', icon: <Shield className="w-4 h-4" /> },
        { label: 'Data Center Services', href: '/data-center-services', icon: <Settings className="w-4 h-4" /> },
        { label: 'Asset Management', href: '/asset-management', icon: <BarChart3 className="w-4 h-4" /> }
      ]
    },
    {
      id: 'micro-saas',
      title: 'Micro SAAS',
      icon: <Zap className="w-5 h-5" />,
      color: 'from-purple-500 to-pink-500',
      href: '/micro-saas',
      items: [
        { label: 'Zion Analytics Pro', href: '/zion-analytics-pro', icon: <BarChart3 className="w-4 h-4" /> },
        { label: 'Zion Security Shield', href: '/zion-security-shield', icon: <Shield className="w-4 h-4" /> },
        { label: 'Zion Cloud Vault', href: '/zion-cloud-vault', icon: <Cloud className="w-4 h-4" /> },
        { label: 'Zion AI Inventory Manager', href: '/zion-ai-inventory-manager', icon: <BarChart3 className="w-4 h-4" /> },
        { label: 'Zion HR Assistant Pro', href: '/zion-hr-assistant-pro', icon: <Users className="w-4 h-4" /> },
        { label: 'Zion AI Accounting Suite', href: '/zion-ai-accounting-suite', icon: <DollarSign className="w-4 h-4" /> },
        { label: 'Zion E-commerce Optimizer', href: '/zion-ecommerce-optimizer', icon: <TrendingUp className="w-4 h-4" /> },
        { label: 'Zion AI Customer Insights', href: '/zion-ai-customer-insights', icon: <Users className="w-4 h-4" /> },
        { label: 'Zion AI Lead Scoring', href: '/zion-ai-lead-scoring', icon: <Star className="w-4 h-4" /> },
        { label: 'Zion AI Document Processor', href: '/zion-ai-document-processor', icon: <FileText className="w-4 h-4" /> },
        { label: 'Zion AI Social Listener', href: '/zion-ai-social-listener', icon: <Globe className="w-4 h-4" /> },
        { label: 'Zion AI Email Optimizer', href: '/zion-ai-email-optimizer', icon: <Mail className="w-4 h-4" /> },
        { label: 'Zion AI Meeting Assistant', href: '/zion-ai-meeting-assistant', icon: <Calendar className="w-4 h-4" /> },
        { label: 'Zion AI Expense Tracker', href: '/zion-ai-expense-tracker', icon: <DollarSign className="w-4 h-4" /> },
        { label: 'Zion AI Survey Builder', href: '/zion-ai-survey-builder', icon: <Settings className="w-4 h-4" /> },
        { label: 'Zion AI Chatbot Builder', href: '/zion-ai-chatbot-builder', icon: <MessageSquare className="w-4 h-4" /> },
        { label: 'Zion AI Workflow Automation', href: '/zion-ai-workflow-automation', icon: <Zap className="w-4 h-4" /> },
        { label: 'Zion AI SEO Optimizer', href: '/zion-ai-seo-optimizer', icon: <TrendingUp className="w-4 h-4" /> },
        { label: 'Zion AI Data Warehouse', href: '/zion-ai-data-warehouse', icon: <Cloud className="w-4 h-4" /> },
        { label: 'Zion AI Mobile App Builder', href: '/zion-ai-mobile-app-builder', icon: <Settings className="w-4 h-4" /> },
        { label: 'Zion AI API Manager', href: '/zion-ai-api-manager', icon: <Settings className="w-4 h-4" /> },
        { label: 'Zion AI Backup Manager', href: '/zion-ai-backup-manager', icon: <Cloud className="w-4 h-4" /> },
        { label: 'Zion AI Testing Automation', href: '/zion-ai-testing-automation', icon: <CheckCircle className="w-4 h-4" /> }
      ]
    },
    {
      id: '5g-solutions',
      title: '5G Solutions',
      icon: <Globe className="w-5 h-5" />,
      color: 'from-orange-500 to-red-500',
      href: '/5g-solutions',
      items: [
        { label: '5G Data Analytics', href: '/5g-data-analytics', icon: <BarChart3 className="w-4 h-4" /> },
        { label: '5G Edge Computing', href: '/5g-edge-computing', icon: <Settings className="w-4 h-4" /> },
        { label: '5G Implementation', href: '/5g-implementation', icon: <Settings className="w-4 h-4" /> },
        { label: '5G Mobile Applications', href: '/5g-mobile-applications', icon: <Settings className="w-4 h-4" /> },
        { label: '5G Network Infrastructure', href: '/5g-network-infrastructure', icon: <Globe className="w-4 h-4" /> },
        { label: '5G Private Networks', href: '/5g-private-networks', icon: <Shield className="w-4 h-4" /> },
        { label: '5G Smart City Solutions', href: '/5g-smart-city-solutions', icon: <Globe className="w-4 h-4" /> }
      ]
    }
  ];

  const quickLinks = [
    { label: 'Home', href: '/', icon: <Home className="w-4 h-4" /> },
    { label: 'Pricing', href: '/pricing', icon: <DollarSign className="w-4 h-4" /> },
    { label: 'Demo', href: '/demo', icon: <Play className="w-4 h-4" /> },
    { label: 'Support', href: '/support', icon: <HelpCircle className="w-4 h-4" /> },
    { label: 'Documentation', href: '/docs', icon: <BookOpen className="w-4 h-4" /> },
    { label: 'Blog', href: '/blog', icon: <FileText className="w-4 h-4" /> },
    { label: 'Contact', href: '/contact', icon: <Phone className="w-4 h-4" /> }
  ];

  const companyLinks = [
    { label: 'About Us', href: '/about' },
    { label: 'Our Team', href: '/team' },
    { label: 'Careers', href: '/careers' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'News', href: '/news' },
    { label: 'Press', href: '/press' },
    { label: 'Partners', href: '/partners' }
  ];

  const filteredSections = navigationSections.map(section => ({
    ...section,
    items: section.items.filter(item => 
      item.label.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(section => section.items.length > 0 || searchQuery === '');

  if (!isOpen) return null;
=======
import React from "react";
>>>>>>> origin/main

const Sidebar = () => {
  return (
<<<<<<< HEAD
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      <div className="fixed right-0 top-0 h-full w-80 bg-slate-900/95 backdrop-blur-sm border-l border-white/10 overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold text-white">Navigation</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Search */}
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
          </div>

          {/* Quick Links */}
          <div className="mb-8">
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              {quickLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.href}
                  className="flex items-center space-x-3 p-2 rounded-lg hover:bg-white/10 transition-colors"
                  onClick={onClose}
                >
                  {link.icon}
                  <span className="text-gray-300">{link.label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation Sections */}
          <div className="space-y-4">
            {filteredSections.map((section) => (
              <div key={section.id} className="space-y-2">
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${section.color} flex items-center justify-center`}>
                      {section.icon}
                    </div>
                    <div className="text-left">
                      <div className="text-white font-medium">{section.title}</div>
                      <div className="text-gray-400 text-sm">{section.items.length} services</div>
                    </div>
                  </div>
                  {expandedSections.includes(section.id) ? (
                    <ChevronDown className="w-4 h-4 text-gray-400" />
                  ) : (
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  )}
                </button>

                {expandedSections.includes(section.id) && (
                  <div className="ml-4 space-y-1 max-h-64 overflow-y-auto">
                    {section.items.map((item, index) => (
                      <Link
                        key={index}
                        to={item.href}
                        className="flex items-center space-x-3 p-2 rounded-lg hover:bg-white/10 transition-colors group"
                        onClick={onClose}
                      >
                        <div className="text-gray-400 group-hover:text-cyan-400 transition-colors">
                          {item.icon}
                        </div>
                        <span className="text-gray-300 group-hover:text-cyan-400 transition-colors text-sm">
                          {item.label}
                        </span>
                      </Link>
                    ))}
                    <Link
                      to={section.href}
                      className="flex items-center space-x-3 p-2 rounded-lg hover:bg-white/10 transition-colors group text-cyan-400"
                      onClick={onClose}
                    >
                      <ArrowRight className="w-4 h-4" />
                      <span className="text-sm font-medium">View All {section.title}</span>
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Company Links */}
          <div className="mt-8 pt-6 border-t border-white/10">
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <div className="space-y-2">
              {companyLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.href}
                  className="block text-gray-300 hover:text-cyan-400 transition-colors text-sm py-1"
                  onClick={onClose}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-8 pt-6 border-t border-white/10">
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span className="text-gray-300 text-sm">+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span className="text-gray-300 text-sm">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-cyan-400 mt-0.5" />
                <span className="text-gray-300 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</span>
              </div>
            </div>
          </div>
        </div>
>>>>>>> origin/main
      </div>
<<<<<<< HEAD
    </>
  );
};

export default Sidebar;
=======
=======
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-2">Sidebar</h2>
      <p>This component is under construction.</p>
>>>>>>> origin/main
    </div>
  );
};

<<<<<<< HEAD
export default Sidebar;
=======
<<<<<<< HEAD
export default ImprovedSidebar;
=======
export default Sidebar;
>>>>>>> origin/main
>>>>>>> origin/main
>>>>>>> origin/main
