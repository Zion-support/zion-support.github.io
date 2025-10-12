import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ChevronDown, Zap, Cloud, Shield, Globe, Database, Code, Smartphone, Brain, Cpu, Rocket, Network, BarChart3, Bot, Lock, Star, CheckCircle, DollarSign, Users, Clock, TrendingUp, Sparkles, Layers, Target, Award, Lightbulb, Monitor, Server, CircuitBoard, Atom, Satellite, Wrench, Settings, BarChart, PieChart, LineChart, Activity, Eye, Search, Filter, Download, Upload, Share, MessageCircle, Mail, Phone, MapPin, Calendar, Timer, Battery, Wifi2, Signal, Bluetooth, Camera, Mic, Headphones, Speaker, Volume2, VolumeX, Play, Pause, SkipForward, SkipBack, Repeat, Shuffle, Heart, ThumbsUp, ThumbsDown, Bookmark, Flag, AlertTriangle, Info, HelpCircle, Plus, Minus, Edit, Trash2, Save, Copy, Paste, Cut, Undo, Redo, RefreshCw, RotateCcw, RotateCw, Move, Maximize, Minimize, Square, Circle, Triangle, Hexagon, Octagon, Pentagon, Star2, Heart2, Smile, Frown, Meh, Laugh, Angry, Surprised, Confused, Wink, Kiss, Tongue, Wink2, Kiss2, Tongue2, Wink3, Kiss3, Tongue3, Wink4, Kiss4, Tongue4, Wink5, Kiss5, Tongue5, Wink6, Kiss6, Tongue6, Wink7, Kiss7, Tongue7, Wink8, Kiss8, Tongue8, Wink9, Kiss9, Tongue9, Wink10, Kiss10, Tongue10, FileText, Package } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

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

  return (
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
          </div>

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
          <div className="lg:hidden">
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
                  <div className="pl-6 space-y-1">
                    {item.dropdown.map((dropdownItem, index) => (
                      <Link
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
    </nav>
  )
}