'use client';
import React, { useState, useEffect } from 'react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ChevronDown, Zap, Cloud, Shield, Globe, Database, Code, Smartphone, Brain, Cpu, Network, Bot, BarChart3, Settings, Rocket, Lock, Wifi, BarChart, Users, Mail, Phone, MapPin, Sparkles, Layers, Target, Award, Lightbulb, Monitor, Server, CircuitBoard, Atom, Satellite, Wrench, PieChart, LineChart, Activity, Eye, Search, Filter, Download, Upload, Share, MessageCircle, Calendar, Timer, Battery, Wifi2, Signal, Bluetooth, Camera, Mic, Headphones, Speaker, Volume2, VolumeX, Play, Pause, SkipForward, SkipBack, Repeat, Shuffle, Heart, ThumbsUp, ThumbsDown, Bookmark, Flag, AlertTriangle, Info, HelpCircle, Plus, Minus, Edit, Trash2, Save, Copy, Paste, Cut, Undo, Redo, RefreshCw, RotateCcw, RotateCw, Move, Maximize, Minimize, Square, Circle, Triangle, Hexagon, Octagon, Pentagon, Star2, Heart2, Smile, Frown, Meh, Laugh, Angry, Surprised, Confused, Wink, Kiss, Tongue, Wink2, Kiss2, Tongue2, Wink3, Kiss3, Tongue3, Wink4, Kiss4, Tongue4, Wink5, Kiss5, Tongue5, Wink6, Kiss6, Tongue6, Wink7, Kiss7, Tongue7, Wink8, Kiss8, Tongue8, Wink9, Kiss9, Tongue9, Wink10, Kiss10, Tongue10, FileText, Package, DollarSign, CheckCircle, Star, Clock, TrendingUp } from 'lucide-react'
import { Menu, X, ChevronDown, Database, Code, Brain } from 'lucide-react';
import SearchModal from './SearchModal'
import ThemeToggle from './ThemeToggle'
export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    // Throttle scroll events for better performance
    let ticking = false
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', throttledHandleScroll, { passive: true })
    return () => window.removeEventListener('scroll', throttledHandleScroll)
  }, [])
  const navigationItems = [
    {
      name: 'AI Services',
      path: '/ai-services',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      dropdown: [
        { name: 'AI Content Generator', path: '/ai-content-generator', price: '$99/month', icon: Edit },
        { name: 'AI Chatbot Builder', path: '/ai-chatbot-builder', price: '$199/month', icon: Bot },
        { name: 'AI Analytics Dashboard', path: '/ai-analytics-dashboard', price: '$149/month', icon: BarChart3 },
        { name: 'AI Automated Reporting', path: '/ai-automated-reporting', price: '$249/month', icon: FileText },
        { name: 'AI Password Manager', path: '/ai-password-manager', price: '$89/month', icon: Lock },
        { name: 'AI Task Manager', path: '/ai-task-manager', price: '$79/month', icon: CheckCircle },
        { name: 'AI Document Processing', path: '/ai-document-processing', price: '$179/month', icon: FileText },
        { name: 'AI Email Marketing', path: '/ai-email-marketing', price: '$119/month', icon: Mail },
        { name: 'AI CRM Assistant', path: '/ai-crm-assistant', price: '$199/month', icon: Users },
        { name: 'AI Voice Assistant', path: '/ai-voice-assistant', price: '$299/month', icon: Mic }
      ]
    },
    {
      name: 'IT Services',
      path: '/it-services',
      icon: Cloud,
      color: 'from-cyan-500 to-blue-500',
      dropdown: [
        { name: 'Cloud Migration', path: '/cloud-migration', price: '$299/month', icon: Cloud },
        { name: 'DevOps Solutions', path: '/devops', price: '$399/month', icon: Settings },
        { name: 'Cybersecurity', path: '/cybersecurity', price: '$399/month', icon: Shield },
        { name: 'Database Services', path: '/database-services', price: '$249/month', icon: Database },
        { name: 'Enterprise Security', path: '/enterprise-security', price: '$599/month', icon: Lock },
        { name: 'IoT Edge Computing', path: '/iot-edge-computing', price: '$499/month', icon: Cpu },
        { name: 'System Integration', path: '/system-integration', price: '$349/month', icon: Network },
        { name: 'IT Consulting', path: '/it-consulting', price: '$199/hour', icon: Lightbulb },
        { name: 'Data Center', path: '/data-center', price: '$799/month', icon: Server }
      ]
    },
    {
      name: 'Micro SAAS',
      path: '/micro-saas',
      icon: Code,
      icon: Layers,
      color: 'from-emerald-500 to-cyan-500',
      dropdown: [
        { name: 'Analytics Dashboard', path: '/micro-saas/analytics-dashboard', price: '$149/month', icon: BarChart3 },
        { name: 'Appointment Scheduler', path: '/micro-saas/appointment-scheduler', price: '$79/month', icon: Calendar },
        { name: 'Chat Analytics', path: '/micro-saas/chat-analytics', price: '$129/month', icon: MessageCircle },
        { name: 'Content Generator', path: '/micro-saas/content-generator', price: '$99/month', icon: Edit },
        { name: 'Document Processor', path: '/micro-saas/document-processor', price: '$179/month', icon: FileText },
        { name: 'Email Marketing', path: '/micro-saas/email-marketing', price: '$119/month', icon: Mail },
        { name: 'Expense Tracker', path: '/micro-saas/expense-tracker', price: '$69/month', icon: DollarSign },
        { name: 'Inventory Management', path: '/micro-saas/inventory-management', price: '$199/month', icon: Package },
        { name: 'Lead Scoring', path: '/micro-saas/lead-scoring', price: '$159/month', icon: Target },
        { name: 'SEO Optimizer', path: '/micro-saas/seo-optimizer', price: '$89/month', icon: Search }
      ]
    },
    {
      name: '5G Solutions',
      path: '/5g-implementation',
      icon: Wifi,
      color: 'from-orange-500 to-red-500',
      dropdown: [
        { name: '5G Network Infrastructure', path: '/5g-network-infrastructure', price: '$599/month', icon: Network },
        { name: '5G Edge Computing', path: '/5g-edge-computing', price: '$699/month', icon: Cpu },
        { name: '5G IoT Solutions', path: '/5g-iot-solutions', price: '$499/month', icon: CircuitBoard },
        { name: '5G Mobile Applications', path: '/5g-mobile-applications', price: '$399/month', icon: Smartphone },
        { name: '5G Private Networks', path: '/5g-private-networks', price: '$799/month', icon: Shield },
        { name: '5G Data Analytics', path: '/5g-data-analytics', price: '$299/month', icon: BarChart }
      ]
    },
    {
      name: 'Business Intelligence',
      path: '/business-intelligence',
      icon: BarChart,
      color: 'from-indigo-500 to-purple-500',
      dropdown: [
        { name: 'Data Analytics', path: '/ai-data-analytics', price: '$249/month', icon: BarChart3 },
        { name: 'Predictive Analytics', path: '/ai-predictive-analytics', price: '$349/month', icon: TrendingUp },
        { name: 'Business Intelligence', path: '/business-intelligence', price: '$299/month', icon: BarChart },
        { name: 'Data Visualization', path: '/ai-data-visualization', price: '$199/month', icon: PieChart },
        { name: 'Real-time Monitoring', path: '/ai-real-time-monitoring', price: '$399/month', icon: Activity },
        { name: 'Custom Dashboards', path: '/custom-dashboards', price: '$449/month', icon: Monitor }
      ]
    },
    {
      name: 'Resources',
      path: '/resources',
      icon: Globe,
      dropdown: [
        { name: 'Documentation', path: '/docs' },
        { name: 'API Reference', path: '/api-docs' },
        { name: 'Help Center', path: '/help' },
        { name: 'Community', path: '/community' },
        { name: 'Status Page', path: '/status' },
        { name: 'Press Kit', path: '/press' }
      ]
    }
  ];
  const simpleLinks = [
    { name: 'About', path: '/about' },
    { name: 'Team', path: '/team' },
    { name: 'Blog', path: '/blog' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' }
    { name: 'About', path: '/about', icon: Info },
    { name: 'Contact', path: '/contact', icon: Phone },
    { name: 'Pricing', path: '/pricing', icon: DollarSign },
    { name: 'Blog', path: '/blog', icon: FileText },
    { name: 'Support', path: '/support', icon: HelpCircle }
  ];
  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }
  const closeDropdown = () => {
    setActiveDropdown(null)
  }
  const aiServices = [
    { name: 'AI Content Generator', path: '/ai-content-generator' },
    { name: 'AI Chatbot Builder', path: '/ai-chatbot-builder' },
    { name: 'AI Analytics Dashboard', path: '/ai-analytics-dashboard' },
    { name: 'AI Email Assistant', path: '/ai-email-assistant' },
    { name: 'AI Voice Assistant', path: '/ai-voice-assistant' },
    { name: 'AI CRM Assistant', path: '/ai-crm-assistant' },
    { name: 'AI Social Media Manager', path: '/ai-social-media-manager' },
    { name: 'AI Email Marketing', path: '/ai-email-marketing-automation' },
    { name: 'AI Business Intelligence Pro', path: '/ai-business-intelligence-pro' },
    { name: 'AI Cybersecurity Suite', path: '/ai-cybersecurity-suite' },
    { name: 'AI Automation', path: '/ai-automation' },
    { name: 'AI 3D Generation', path: '/ai-3d-generation' },
    { name: 'AI Drug Discovery Pro', path: '/ai-drug-discovery-pro' }
  ];
  const itServices = [
    { name: 'Web Development', path: '/web-development', icon: <Code className="w-4 h-4" /> },
    { name: 'Mobile Development', path: '/mobile-development', icon: <Smartphone className="w-4 h-4" /> },
    { name: 'DevOps', path: '/devops', icon: <Server className="w-4 h-4" /> },
    { name: 'Data Analytics', path: '/data-analytics', icon: <BarChart3 className="w-4 h-4" /> },
    { name: 'Cloud Services', path: '/cloud-services', icon: <Cloud className="w-4 h-4" /> },
    { name: 'Cybersecurity', path: '/cybersecurity', icon: <Shield className="w-4 h-4" /> },
    { name: 'AI Cybersecurity Suite', path: '/ai-cybersecurity-suite', icon: <Shield className="w-4 h-4" /> }
  ];
  const fiveGServices = [
    { name: '5G Implementation', path: '/5g-implementation', icon: <Wifi className="w-4 h-4" /> },
    { name: '5G Network Infrastructure', path: '/5g-network-infrastructure', icon: <Server className="w-4 h-4" /> },
    { name: '5G IoT Solutions', path: '/5g-iot-solutions', icon: <Smartphone className="w-4 h-4" /> },
    { name: '5G Edge Computing', path: '/5g-edge-computing', icon: <Cpu className="w-4 h-4" /> },
    { name: '5G Private Networks', path: '/5g-private-networks', icon: <Shield className="w-4 h-4" /> },
    { name: '5G Mobile Applications', path: '/5g-mobile-applications', icon: <Smartphone className="w-4 h-4" /> },
    { name: 'AI Smart City Solutions', path: '/ai-smart-city-solutions', icon: <Database className="w-4 h-4" /> }
  ];
  const microSaasServices = [
    { name: 'AI Task Manager', path: '/ai-task-manager' },
    { name: 'AI Expense Tracker', path: '/ai-expense-tracker' },
    { name: 'AI Expense Tracker Pro', path: '/ai-expense-tracker-pro' },
    { name: 'AI Password Manager', path: '/ai-password-manager' },
    { name: 'AI Invoice Generator', path: '/ai-invoice-generator' },
    { name: 'AI Smart Invoice', path: '/ai-smart-invoice' },
    { name: 'AI Health Tracker', path: '/ai-health-tracker' },
    { name: 'AI Meeting Transcriber', path: '/ai-meeting-transcriber' },
    { name: 'AI Social Media Manager', path: '/ai-social-media-manager' },
    { name: 'AI Email Marketing', path: '/ai-email-marketing-automation' },
    { name: 'AI Smart Calendar', path: '/ai-smart-calendar' },
    { name: 'AI Climate Solutions', path: '/ai-climate-solutions-pro' }
  ];
  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-900/95 backdrop-blur-md border-b border-cyan-500/20' : 'bg-transparent'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 focus:outline-none focus:ring-4 focus:ring-cyan-500/50 rounded-lg"
            aria-label="Zion Tech Group - Go to homepage"
          >
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" aria-hidden="true" />
    <nav className="bg-gray-900/95 backdrop-blur-lg border-b border-white/10 sticky top-0 z-50 relative">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(6,182,212,0.1)_50%,transparent_100%)] animate-pulse" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 group">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <span className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:via-purple-300 group-hover:to-pink-300 transition-all duration-300">
                  Zion Tech Group
                </span>
              </div>
            </Link>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-center space-x-1">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative group">
                  <button
                    className="flex items-center text-gray-300 hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white/10"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <item.icon className="w-4 h-4 mr-2" />
                    {item.name}
                    <ChevronDown className="w-4 h-4 ml-1 group-hover:rotate-180 transition-transform duration-300" />
                  </button>
                  {activeDropdown === item.name && (
                    <div className="absolute top-full left-0 mt-2 w-96 bg-gray-900/95 backdrop-blur-lg rounded-2xl border border-white/20 shadow-2xl z-50 overflow-hidden">
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-6">
                          <h3 className="text-xl font-bold text-white flex items-center">
                            <div className={`w-8 h-8 bg-gradient-to-r ${item.color} rounded-lg flex items-center justify-center mr-3`}>
                              <item.icon className="w-5 h-5 text-white" />
                            </div>
                            {item.name}
                          </h3>
                          <div className="text-sm text-gray-400">
                            {item.dropdown.length} services
                          </div>
                        </div>
                        <div className="grid grid-cols-1 gap-3 max-h-80 overflow-y-auto">
                          {item.dropdown.map((dropdownItem, index) => (
                            <Link
                              key={index}
                              to={dropdownItem.path}
                              className="group block p-4 bg-white/5 hover:bg-white/10 rounded-xl transition-all duration-300 border border-white/10 hover:border-white/20"
                            >
                              <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                  <div className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors">
                                    <dropdownItem.icon className="w-4 h-4 text-cyan-400" />
                                  </div>
                                  <div>
                                    <div className="font-semibold text-white group-hover:text-cyan-400 transition-colors">
                                      {dropdownItem.name}
                                    </div>
                                  </div>
                                </div>
                                <div className="text-sm font-bold text-cyan-400">
                                  {dropdownItem.price}
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                        <div className="mt-6 pt-4 border-t border-white/10">
                          <Link
                            to={item.path}
                            className={`block w-full text-center bg-gradient-to-r ${item.color} text-white py-3 rounded-xl font-bold hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                          >
                            View All {item.name} →
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
              {simpleLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="group flex items-center space-x-2 text-gray-300 hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white/10"
                >
                  <link.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                  <span>{link.name}</span>
                </Link>
              ))}
            </div>
            <span className="text-xl font-bold text-white">Zion Tech Group</span>
          </Link>
            {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-cyan-400 transition-colors font-medium">
              Home
            </Link>
            <Link to="/about" className="text-white hover:text-cyan-400 transition-colors font-medium">
              About
            </Link>
            <Link to="/micro-saas" className="text-white hover:text-cyan-400 transition-colors font-medium">
              Micro SAAS
            </Link>
            <Link to="/ai-services" className="text-white hover:text-cyan-400 transition-colors font-medium">
              AI Services
            </Link>
            <Link to="/it-services" className="text-white hover:text-cyan-400 transition-colors font-medium">
              IT Services
            </Link>
            {/* AI Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('ai')}
                className="flex items-center text-white hover:text-cyan-400 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500/50 rounded-lg px-2 py-1"
                aria-expanded={activeDropdown === 'ai'}
                aria-haspopup="true"
                aria-label="AI Services menu"
              >
                AI Services
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {activeDropdown === 'ai' && (
                <div 
                  className="absolute top-full left-0 mt-2 w-64 bg-slate-800 rounded-lg shadow-lg border border-cyan-500/20 py-2"
                  role="menu"
                  aria-label="AI Services submenu"
                >
                  {aiServices.map((service, index) => (
                    <Link
                      key={index}
                      to={service.path}
                      onClick={closeDropdown}
                      className="flex items-center px-4 py-2 text-gray-300 hover:text-cyan-400 hover:bg-slate-700/50 transition-colors"
                    >
                      <Brain className="w-4 h-4 mr-3" />
                      <span>{service.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
            {/* IT Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('it')}
                className="flex items-center text-white hover:text-cyan-400 transition-colors"
              >
                IT Services
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {activeDropdown === 'it' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800 rounded-lg shadow-lg border border-cyan-500/20 py-2">
                  {itServices.map((service, index) => (
                    <Link
                      key={index}
                      to={service.path}
                      onClick={closeDropdown}
                      className="flex items-center px-4 py-2 text-gray-300 hover:text-cyan-400 hover:bg-slate-700/50 transition-colors"
                    >
                      {service.icon}
                      <span className="ml-3">{service.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
            {/* Micro SAAS Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('saas')}
                className="flex items-center text-white hover:text-cyan-400 transition-colors"
              >
                Micro SAAS
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {activeDropdown === 'saas' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800 rounded-lg shadow-lg border border-cyan-500/20 py-2">
                  {microSaasServices.map((service, index) => (
                    <Link
                      key={index}
                      to={service.path}
                      onClick={closeDropdown}
                      className="flex items-center px-4 py-2 text-gray-300 hover:text-cyan-400 hover:bg-slate-700/50 transition-colors"
                    >
                      <Cpu className="w-4 h-4 mr-3" />
                      <span>{service.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
            {/* 5G Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('5g')}
                className="flex items-center text-white hover:text-cyan-400 transition-colors"
              >
                5G Solutions
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {activeDropdown === '5g' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800 rounded-lg shadow-lg border border-cyan-500/20 py-2">
                  {fiveGServices.map((service, index) => (
                    <Link
                      key={index}
                      to={service.path}
                      onClick={closeDropdown}
                      className="flex items-center px-4 py-2 text-gray-300 hover:text-cyan-400 hover:bg-slate-700/50 transition-colors"
                    >
                      {service.icon}
                      <span className="ml-3">{service.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link to="/contact" className="text-white hover:text-cyan-400 transition-colors font-medium">
              Contact
            </Link>
            {/* Search Button */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="text-white hover:text-cyan-400 transition-colors p-2 rounded-lg hover:bg-slate-700/50"
              aria-label="Search services"
            >
              <Search className="w-5 h-5" />
            </button>
            {/* Theme Toggle */}
            <ThemeToggle />
          </div>
          {/* Tablet Navigation */}
          <div className="hidden md:flex lg:hidden items-center space-x-6">
            <Link to="/" className="text-white hover:text-cyan-400 transition-colors font-medium">
              Home
            </Link>
            <Link to="/about" className="text-white hover:text-cyan-400 transition-colors font-medium">
              About
            </Link>
            <Link to="/contact" className="text-white hover:text-cyan-400 transition-colors font-medium">
              Contact
          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/contact"
              className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-xl font-bold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-cyan-500/25 transform hover:scale-105"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2 focus:outline-none focus:ring-4 focus:ring-cyan-500/50 rounded-lg"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
            </button>
          </div>
        </div>
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800/95 backdrop-blur-md rounded-lg mt-2 border border-cyan-500/20" role="menu" aria-label="Mobile navigation menu">
              <Link to="/" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors" onClick={() => setIsOpen(false)}>
                Home
              </Link>
              <Link to="/about" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors" onClick={() => setIsOpen(false)}>
                About
              </Link>
              <Link to="/micro-saas" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors" onClick={() => setIsOpen(false)}>
                Micro SAAS
              </Link>
              <Link to="/ai-services" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors" onClick={() => setIsOpen(false)}>
                AI Services
              </Link>
              <Link to="/it-services" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors" onClick={() => setIsOpen(false)}>
                IT Services
              </Link>
              {/* AI Services Mobile */}
              <div>
                <button
                  onClick={() => toggleDropdown('ai-mobile')}
                  className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left flex items-center justify-between"
                >
                  <div className="flex items-center">
                    <Brain className="w-4 h-4 mr-2" />
                    <span>AI Services</span>
          <div className="lg:hidden">
            <div className="px-4 pt-2 pb-6 space-y-1 bg-gray-900/95 backdrop-blur-lg border-t border-white/10">
              {navigationItems.map((item) => (
                <div key={item.name} className="space-y-1">
                  <div className="flex items-center text-gray-300 px-3 py-2 text-base font-medium">
                    <div className={`w-6 h-6 bg-gradient-to-r ${item.color} rounded-lg flex items-center justify-center mr-3`}>
                      <item.icon className="w-4 h-4 text-white" />
                    </div>
                    {item.name}
                  </div>
                  <ChevronDown className="w-4 h-4" />
                </button>
                {activeDropdown === 'ai-mobile' && (
                  <div className="pl-6 space-y-1">
                    {aiServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.path}
                        className="text-gray-400 hover:text-white block px-3 py-2 rounded-md text-sm transition-colors"
                        onClick={() => {
                          setActiveDropdown(null)
                          setIsOpen(false)
                        }}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              {/* IT Services Mobile */}
              <div>
                <button
                  onClick={() => toggleDropdown('it-mobile')}
                  className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left flex items-center justify-between"
                >
                  <div className="flex items-center">
                    <Code className="w-4 h-4 mr-2" />
                    <span>IT Services</span>
                  </div>
                  <ChevronDown className="w-4 h-4" />
                </button>
                {activeDropdown === 'it-mobile' && (
                  <div className="pl-6 space-y-1">
                    {itServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.path}
                        className="text-gray-400 hover:text-white block px-3 py-2 rounded-md text-sm transition-colors"
                        onClick={() => {
                          setActiveDropdown(null)
                          setIsOpen(false)
                        }}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              {/* Micro SAAS Mobile */}
              <div>
                <button
                  onClick={() => toggleDropdown('saas-mobile')}
                  className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left flex items-center justify-between"
                >
                  <div className="flex items-center">
                    <Cpu className="w-4 h-4 mr-2" />
                    <span>Micro SAAS</span>
                  </div>
                  <ChevronDown className="w-4 h-4" />
                </button>
                {activeDropdown === 'saas-mobile' && (
                  <div className="pl-6 space-y-1">
                    {microSaasServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.path}
                        className="text-gray-400 hover:text-white block px-3 py-2 rounded-md text-sm transition-colors"
                        onClick={() => {
                          setActiveDropdown(null)
                          setIsOpen(false)
                        }}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              {/* 5G Services Mobile */}
              <div>
                <button
                  onClick={() => toggleDropdown('5g-mobile')}
                  className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left flex items-center justify-between"
                >
                  <div className="flex items-center">
                    <Wifi className="w-4 h-4 mr-2" />
                    <span>5G Solutions</span>
                  </div>
                  <ChevronDown className="w-4 h-4" />
                </button>
                {activeDropdown === '5g-mobile' && (
                  <div className="pl-6 space-y-1">
                    {fiveGServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.path}
                        className="text-gray-400 hover:text-white block px-3 py-2 rounded-md text-sm transition-colors"
                        onClick={() => {
                          setActiveDropdown(null)
                          setIsOpen(false)
                        }}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link to="/contact" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
              <Link 
                to="/contact" 
                className="block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-2 rounded-lg text-base font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-center mt-4"
                        key={index}
                        to={dropdownItem.path}
                        className="group block text-gray-400 hover:text-white px-3 py-2 rounded-lg text-sm transition-all duration-300"
                        onClick={() => setIsOpen(false)}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <dropdownItem.icon className="w-4 h-4 text-cyan-400" />
                            <span>{dropdownItem.name}</span>
                          </div>
                          <span className="text-xs text-cyan-400 font-bold">{dropdownItem.price}</span>
                        </div>
                      </Link>
                    ))}
                    <Link
                      to={item.path}
                      className={`block text-cyan-400 hover:text-cyan-300 px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-300 bg-gradient-to-r ${item.color} bg-opacity-10`}
                      onClick={() => setIsOpen(false)}
                    >
                      View All {item.name} →
                    </Link>
                  </div>
                </div>
              ))}
              {simpleLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="group flex items-center space-x-2 text-gray-300 hover:text-white px-3 py-2 rounded-lg text-base font-medium transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  <link.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                  <span>{link.name}</span>
                </Link>
              ))}
              <Link
                to="/contact"
                className="group block bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-xl font-bold text-center hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 mt-4 flex items-center justify-center space-x-2"
                onClick={() => setIsOpen(false)}
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        )}
      </div>
      {/* Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </nav>
  )
}