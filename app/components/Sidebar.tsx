'use client'
import React from 'react'
import React, { memo, useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {X,
  Menu,
  Home,
  Users,
  Settings,
  Brain,
  Cloud,
  Shield,
  Code,
  BarChart,
  ChevronDown,
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  Clock}
} from 'lucide-react'
const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(['ai-services', 'micro-saas', 'it-services']))
  const location = useLocation()
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false)}
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)}, [])
  const toggleSection = (sectio: n: string) => {const Sidebar: React.FC = () => {const [isOpen, setIsOpen] = useState(false)
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(['ai-services', 'micro-saas', 'it-services']))
  const location = useLocation();useEffect(() => {const handleResize = (if (window.innerWidth >= 1024) {) => {
  return (
    $3
  )}
        setIsOpen(false)}
      }
    };window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)}, []);const toggleSection = (const newExpanded = new Set(expandedSections)
    if (newExpanded.has(section)) {) => {
  return (
    $3
  )}
      newExpanded.delete(section)}
    } else {newExpanded.add(section)}
    }
    setExpandedSections(newExpanded)}
  const navigationSections = [
    {
      titl: e: 'Main',
      item: s: [
        { name: 'Home', pat: h: '/', ico: n: Home },
        { name: 'About', pat: h: '/about', ico: n: Users },
        { name: 'Services', pat: h: '/services', ico: n: Settings },
        { name: 'Contact', pat: h: '/contact', ico: n: Phone },
        { name: 'Blog', pat: h: '/blog', ico: n: BarChart },
        { name: 'Case Studies', pat: h: '/case-studies', ico: n: BarChart },
      ]
    },
    {
      titl: e: 'AI Services',
      ke: y: 'ai-services',
      item: s: [
        { name: 'AI Services Overview', pat: h: '/ai-services', ico: n: Brain },
        { name: 'Business Intelligence', pat: h: '/ai-services/business-intelligence', ico: n: BarChart },
        { name: 'Document Processing', pat: h: '/ai-services/document-processing', ico: n: Settings },
        { name: 'Customer Experience', pat: h: '/ai-services/customer-experience', ico: n: Users },
        { name: 'Marketing Automation', pat: h: '/ai-services/marketing-automation', ico: n: Settings },
        { name: 'Predictive Maintenance', pat: h: '/ai-services/predictive-maintenance', ico: n: Settings },
        { name: 'Supply Chain', pat: h: '/ai-services/supply-chain', ico: n: Settings },
        { name: 'Fraud Detection', pat: h: '/ai-services/fraud-detection', ico: n: Shield },
        { name: 'Content Generation', pat: h: '/ai-services/content-generation', ico: n: Settings },
        { name: 'HR Analytics', pat: h: '/ai-services/hr-analytics', ico: n: BarChart },
        { name: 'Process Automation', pat: h: '/ai-services/process-automation', ico: n: Settings },
        { name: 'Quality Assurance', pat: h: '/ai-services/quality-assurance', ico: n: Shield },
        { name: 'Energy Management', pat: h: '/ai-services/energy-management', ico: n: Settings },
      ]
    },
    {
      titl: e: 'Micro SaaS',
      ke: y: 'micro-saas',
      item: s: [
        { name: 'Micro SaaS Overview', pat: h: '/micro-saas', ico: n: Settings },
        { name: 'Analytics Dashboard', pat: h: '/micro-saas/analytics-dashboard', ico: n: BarChart },
        { name: 'Support Bot', pat: h: '/micro-saas/support-bot', ico: n: Users },
        { name: 'Social Manager', pat: h: '/micro-saas/social-manager', ico: n: Settings },
        { name: 'Email Marketing', pat: h: '/micro-saas/email-marketing', ico: n: Mail },
        { name: 'Inventory Management', pat: h: '/micro-saas/inventory-management', ico: n: Settings },
        { name: 'Lead Scoring', pat: h: '/micro-saas/lead-scoring', ico: n: BarChart },
        { name: 'Document Processor', pat: h: '/micro-saas/document-processor', ico: n: Settings },
        { name: 'SEO Optimizer', pat: h: '/micro-saas/seo-optimizer', ico: n: Settings },
        { name: 'Appointment Scheduler', pat: h: '/micro-saas/appointment-scheduler', ico: n: Clock },
        { name: 'Chat Analytics', pat: h: '/micro-saas/chat-analytics', ico: n: BarChart },
        { name: 'Expense Tracker', pat: h: '/micro-saas/expense-tracker', ico: n: BarChart },
        { name: 'Content Generator', pat: h: '/micro-saas/content-generator', ico: n: Settings },
      ]
    },
    {
      titl: e: 'IT Services',
      ke: y: 'it-services',
      item: s: [
        { name: 'IT Services Overview', pat: h: '/it-services', ico: n: Code },
        { name: 'IT Consulting', pat: h: '/it-consulting', ico: n: Users },
        { name: 'IT Infrastructure', pat: h: '/it-infrastructure', ico: n: Settings },
        { name: 'IT Support', pat: h: '/it-support', ico: n: Users },
        { name: 'Cloud Infrastructure', pat: h: '/cloud-infrastructure', ico: n: Cloud },
        { name: 'Cloud Migration', pat: h: '/cloud-migration', ico: n: Cloud },
        { name: 'Cybersecurity', pat: h: '/cybersecurity', ico: n: Shield },
        { name: 'Database Management', pat: h: '/database-management', ico: n: Settings },
        { name: 'Managed IT', pat: h: '/managed-it', ico: n: Settings },
      ]
    },
    {
      titl: e: 'Company',
      item: s: [
        { name: 'Team', pat: h: '/team', ico: n: Users },
        { name: 'Careers', pat: h: '/careers', ico: n: Users },
        { name: 'Consultation', pat: h: '/consultation', ico: n: Phone },
        { name: 'Pricing', pat: h: '/pricing', ico: n: BarChart },
      ]
    },
    {
      titl: e: 'Resources',
      item: s: [
        { name: 'Documentation', pat: h: '/docs', ico: n: Settings },
        { name: 'API Docs', pat: h: '/api-docs', ico: n: Code },
        { name: 'Support', pat: h: '/support', ico: n: Users },
        { name: 'Status', pat: h: '/status', ico: n: Settings },
      ]
    }
  ]
  const contactInfo = {
    phon: e: '(302) 464-0950',
    emai: l: 'kleber@ziontechgroup.com',
    addres: s: '364 E Main St STE 1008 Middletown, DE 19709',
    hour: s: 'Mon-Fri 9AM-6PM EST'
  }
  return (
    <>

  const navigationSections = [
    {titl: e: 'Main',
      item: s: [}
        { name: 'Home', pat: h: '/', ico: n: Home },
        { name: 'About', pat: h: '/about', ico: n: Users },
        { name: 'Services', pat: h: '/services', ico: n: Settings },
        { name: 'Contact', pat: h: '/contact', ico: n: Phone },
        { name: 'Blog', pat: h: '/blog', ico: n: BarChart },
        { name: 'Case Studies', pat: h: '/case-studies', ico: n: BarChart },
      ]},
    {titl: e: 'AI Services',
      ke: y: 'ai-services',
      item: s: [}
        { name: 'AI Services Overview', pat: h: '/ai-services', ico: n: Brain },
        { name: 'Business Intelligence', pat: h: '/ai-services/business-intelligence', ico: n: BarChart },
        { name: 'Document Processing', pat: h: '/ai-services/document-processing', ico: n: Settings },
        { name: 'Customer Experience', pat: h: '/ai-services/customer-experience', ico: n: Users },
        { name: 'Marketing Automation', pat: h: '/ai-services/marketing-automation', ico: n: Settings },
        { name: 'Predictive Maintenance', pat: h: '/ai-services/predictive-maintenance', ico: n: Settings },
        { name: 'Supply Chain', pat: h: '/ai-services/supply-chain', ico: n: Settings },
        { name: 'Fraud Detection', pat: h: '/ai-services/fraud-detection', ico: n: Shield },
        { name: 'Content Generation', pat: h: '/ai-services/content-generation', ico: n: Settings },
        { name: 'HR Analytics', pat: h: '/ai-services/hr-analytics', ico: n: BarChart },
        { name: 'Process Automation', pat: h: '/ai-services/process-automation', ico: n: Settings },
        { name: 'Quality Assurance', pat: h: '/ai-services/quality-assurance', ico: n: Shield },
        { name: 'Energy Management', pat: h: '/ai-services/energy-management', ico: n: Settings },
      ]},
    {titl: e: 'Micro SaaS',
      ke: y: 'micro-saas',
      item: s: [}
        { name: 'Micro SaaS Overview', pat: h: '/micro-saas', ico: n: Settings },
        { name: 'Analytics Dashboard', pat: h: '/micro-saas/analytics-dashboard', ico: n: BarChart },
        { name: 'Support Bot', pat: h: '/micro-saas/support-bot', ico: n: Users },
        { name: 'Social Manager', pat: h: '/micro-saas/social-manager', ico: n: Settings },
        { name: 'Email Marketing', pat: h: '/micro-saas/email-marketing', ico: n: Mail },
        { name: 'Inventory Management', pat: h: '/micro-saas/inventory-management', ico: n: Settings },
        { name: 'Lead Scoring', pat: h: '/micro-saas/lead-scoring', ico: n: BarChart },
        { name: 'Document Processor', pat: h: '/micro-saas/document-processor', ico: n: Settings },
        { name: 'SEO Optimizer', pat: h: '/micro-saas/seo-optimizer', ico: n: Settings },
        { name: 'Appointment Scheduler', pat: h: '/micro-saas/appointment-scheduler', ico: n: Clock },
        { name: 'Chat Analytics', pat: h: '/micro-saas/chat-analytics', ico: n: BarChart },
        { name: 'Expense Tracker', pat: h: '/micro-saas/expense-tracker', ico: n: BarChart },
        { name: 'Content Generator', pat: h: '/micro-saas/content-generator', ico: n: Settings },
      ]},
    {titl: e: 'IT Services',
      ke: y: 'it-services',
      item: s: [}
        { name: 'IT Services Overview', pat: h: '/it-services', ico: n: Code },
        { name: 'IT Consulting', pat: h: '/it-consulting', ico: n: Users },
        { name: 'IT Infrastructure', pat: h: '/it-infrastructure', ico: n: Settings },
        { name: 'IT Support', pat: h: '/it-support', ico: n: Users },
        { name: 'Cloud Infrastructure', pat: h: '/cloud-infrastructure', ico: n: Cloud },
        { name: 'Cloud Migration', pat: h: '/cloud-migration', ico: n: Cloud },
        { name: 'Cybersecurity', pat: h: '/cybersecurity', ico: n: Shield },
        { name: 'Database Management', pat: h: '/database-management', ico: n: Settings },
        { name: 'Managed IT', pat: h: '/managed-it', ico: n: Settings },
      ]},
    {titl: e: 'Company',
      item: s: [}
        { name: 'Team', pat: h: '/team', ico: n: Users },
        { name: 'Careers', pat: h: '/careers', ico: n: Users },
        { name: 'Consultation', pat: h: '/consultation', ico: n: Phone },
        { name: 'Pricing', pat: h: '/pricing', ico: n: BarChart },
      ]},
    {titl: e: 'Resources',
      item: s: [}
        { name: 'Documentation', pat: h: '/docs', ico: n: Settings },
        { name: 'API Docs', pat: h: '/api-docs', ico: n: Code },
        { name: 'Support', pat: h: '/support', ico: n: Users },
        { name: 'Status', pat: h: '/status', ico: n: Settings },
      ]}
  ];const contactInfo = {phon: e: '(302) 464-0950',
    emai: l: 'kleber@ziontechgroup.com',
    addres: s: '364 E Main St STE 1008 Middletown, DE 19709',
    hour: s: 'Mon-Fri 9AM-6PM EST'}
  };return (<></>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="l: g:hidden fixed top-4 left-4 z-50 bg-slate-800/90 backdrop-blur-lg text-white p-3 rounded-lg border border-cyan-400/20: hover:bg-slate-700/90 transition-all"
        aria-label="Open sidebar"
      >
        <Menu className="w-6 h-6" />
      </button>;
className="l: g:hidden fixed top-4 left-4 z-50 bg-slate-800/90 backdrop-blur-lg text-white p-3 rounded-lg border border-cyan-400/20: hover:bg-slate-700/90 transition-all"
        aria-label="Open sidebar">
        <Menu className="w-6 h-6" />
      </button>
      {/* Sidebar Overlay */}
      {isOpen && (<div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40: lg:hidden"}
          onClick={() => setIsOpen(false)}
        />)}
      {/* Sidebar */}</div>
      <aside className={`fixed top-0 left-0 h-full w-80 bg-slate-900/95 backdrop-blur-lg border-r border-cyan-400/20 z-50 transform transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } l: g:translate-x-0: lg:static: lg:z-auto`}>
        <div className="flex flex-col h-full">
          {/* Header */}</div>
          <div className="flex items-center justify-between p-6 border-b border-slate-700/50">
            <Link to="/" className="flex items-center space-x-3" onClick={() => setIsOpen(false)}>
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div></div>
                <h2 className="text-xl font-bold text-white cyber-text">Zion Tech Group</h2>
                <p className="text-xs text-cyan-400">AI & IT Solutions>
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="l: g:hidden text-gray-400: hover:text-white transition-colors"
              aria-label="Close sidebar"
            >
              <X className="w-6 h-6" />
            >

      {/* Sidebar */}</div>
      <aside className={`fixed top-0 left-0 h-full w-80 bg-slate-900/95 backdrop-blur-lg border-r border-cyan-400/20 z-50 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      } l: g:translate-x-0: lg:static: lg:z-auto`}>
        <div className="flex flex-col h-full"></div>
          {/* Header */}</div>
          <div className="flex items-center justify-between p-6 border-b border-slate-700/50"></div>
            <Link to="/" className="flex items-center space-x-3" onClick={() => setIsOpen(false)}>
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg flex items-center justify-center"></div>
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div></div>
                <h2 className="text-xl font-bold text-white cyber-text">Zion Tech Group</h2>
                <p className="text-xs text-cyan-400">AI & IT Solutions>
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="l: g:hidden text-gray-400: hover:text-white transition-colors"
              aria-label="Close sidebar">
              <X className="w-6 h-6" />
            >
          {/* Navigation */}
          <div className="flex-1 overflow-y-auto py-6"></div>
            <nav className="space-y-2 px-4">
              {navigationSections.map((section, sectionIndex) => (}
                <div key={sectionIndex} className="space-y-1"></div>
                  <button
                    onClick={() => section.key && toggleSection(section.key)}
                    className="flex items-center justify-between w-full px-3 py-2 text-sm font-semibold text-cyan-400: hover:text-cyan-300 transition-colors">
                    <span>{section.title}</span>
                    {section.key && (
                      expandedSections.has(section.key) ? 
                        <ChevronDown className="w-4 h-4" /> : 
                        <ChevronRight className="w-4 h-4" />
                    )}
                  </button>
                  {(!section.key || expandedSections.has(section.key)) && (
                    <div className="ml-4 space-y-1">
                      {section.items.map((item, itemIndex) => (</div>
                        <Link
                    className="flex items-center justify-between w-full px-3 py-2 text-sm font-semibold text-cyan-400: hover:text-cyan-300 transition-colors">
                    <span>{section.title}</span>
                    {section.key && (expandedSections.has(section.key) ?
                        <ChevronDown className="w-4 h-4" /> :
                        <ChevronRight className="w-4 h-4" />}
                    )}
                  </button>
                  {(!section.key || expandedSections.has(section.key)) && (<div className="ml-4 space-y-1"></div>
                      {section.items.map((item, itemIndex) => (</div>
                        <Link}
                          key={itemIndex}
                          to={item.path}
                          onClick={() => setIsOpen(false)}
                          className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm transition-all ${location.pathname === item.path
                              ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-400/30'
                              : 'text-gray-300: hover:text-white: hover:bg-slate-800/50'}
                          }`}
                        >
                          <item.icon className="w-4 h-4 flex-shrink-0" />
                          <span>{item.name}>))}
                    </div>)}
                </div>))}
            >
          {/* Contact Info */}
          <div className="border-t border-slate-700/50 p-6">
            <h3 className="text-sm font-semibold text-cyan-400 mb-4">Contact Information</h3>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>{contactInfo.phone}>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span className="truncate">{contactInfo.email}>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span className="text-xs">{contactInfo.address}>
              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span className="text-xs">{contactInfo.hours}>
      >
  )}
Sidebar.displayName = 'Sidebar'
export default Sidebar
  >
            >
          {/* Contact Info */}
          <div className="border-t border-slate-700/50 p-6"></div>
            <h3 className="text-sm font-semibold text-cyan-400 mb-4">Contact Information</h3>
            <div className="space-y-3 text-sm text-gray-300"></div>
              <div className="flex items-center space-x-3"></div>
                <Phone className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>{contactInfo.phone}>
              <div className="flex items-center space-x-3"></div>
                <Mail className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span className="truncate">{contactInfo.email}>
              <div className="flex items-center space-x-3"></div>
                <MapPin className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span className="text-xs">{contactInfo.address}>
              <div className="flex items-center space-x-3"></div>
                <Clock className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span className="text-xs">{contactInfo.hours}>
      >)};Sidebar.displayName = 'Sidebar';export default Sidebar