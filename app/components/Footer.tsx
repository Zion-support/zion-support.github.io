import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Globe, Twitter, Linkedin, Github, Zap, Brain, Cpu, Rocket, Shield, Network, BarChart3, Bot, ArrowRight, Sparkles, Layers, Target, Award, Lightbulb, Monitor, Server, CircuitBoard, Atom, Satellite, Wrench, BarChart, PieChart, LineChart, Activity, Eye, Search, Filter, Download, Upload, Share, MessageCircle, Calendar, Timer, Battery, Wifi2, Signal, Bluetooth, Camera, Mic, Headphones, Speaker, Volume2, VolumeX, Play, Pause, SkipForward, SkipBack, Repeat, Shuffle, Heart, ThumbsUp, ThumbsDown, Bookmark, Flag, AlertTriangle, Info, HelpCircle, Plus, Minus, Edit, Trash2, Save, Copy, Paste, Cut, Undo, Redo, RefreshCw, RotateCcw, RotateCw, Move, Maximize, Minimize, Square, Circle, Triangle, Hexagon, Octagon, Pentagon, Star2, Heart2, Smile, Frown, Meh, Laugh, Angry, Surprised, Confused, Wink, Kiss, Tongue, Wink2, Kiss2, Tongue2, Wink3, Kiss3, Tongue3, Wink4, Kiss4, Tongue4, Wink5, Kiss5, Tongue5, Wink6, Kiss6, Tongue6, Wink7, Kiss7, Tongue7, Wink8, Kiss8, Tongue8, Wink9, Kiss9, Tongue9, Wink10, Kiss10, Tongue10, FileText, Package, DollarSign, CheckCircle, Star, Clock, TrendingUp } from 'lucide-react'

const Footer: React.FC = () => {
  const aiServices = [
    { name: 'AI Content Generator', path: '/ai-content-generator', price: '$99/month', icon: Edit },
    { name: 'AI Chatbot Builder', path: '/ai-chatbot-builder', price: '$199/month', icon: Bot },
    { name: 'AI Analytics Dashboard', path: '/ai-analytics-dashboard', price: '$149/month', icon: BarChart3 },
    { name: 'AI Automated Reporting', path: '/ai-automated-reporting', price: '$249/month', icon: FileText },
    { name: 'AI Password Manager', path: '/ai-password-manager', price: '$89/month', icon: Lock },
    { name: 'AI Task Manager', path: '/ai-task-manager', price: '$79/month', icon: CheckCircle },
    { name: 'AI Document Processing', path: '/ai-document-processing', price: '$179/month', icon: FileText },
    { name: 'AI Email Marketing', path: '/ai-email-marketing', price: '$119/month', icon: Mail }
  ];

  const itServices = [
    { name: 'Cloud Migration', path: '/cloud-migration', price: '$299/month', icon: Cloud },
    { name: 'DevOps Solutions', path: '/devops', price: '$399/month', icon: Settings },
    { name: 'Cybersecurity', path: '/cybersecurity', price: '$399/month', icon: Shield },
    { name: 'Database Services', path: '/database-services', price: '$249/month', icon: Database },
    { name: 'Enterprise Security', path: '/enterprise-security', price: '$599/month', icon: Lock },
    { name: 'IoT Edge Computing', path: '/iot-edge-computing', price: '$499/month', icon: Cpu },
    { name: 'System Integration', path: '/system-integration', price: '$349/month', icon: Network },
    { name: 'IT Consulting', path: '/it-consulting', price: '$199/hour', icon: Lightbulb }
  ];

  const microSaasServices = [
    { name: 'Analytics Dashboard', path: '/micro-saas/analytics-dashboard', price: '$149/month', icon: BarChart3 },
    { name: 'Appointment Scheduler', path: '/micro-saas/appointment-scheduler', price: '$79/month', icon: Calendar },
    { name: 'Chat Analytics', path: '/micro-saas/chat-analytics', price: '$129/month', icon: MessageCircle },
    { name: 'Content Generator', path: '/micro-saas/content-generator', price: '$99/month', icon: Edit },
    { name: 'Document Processor', path: '/micro-saas/document-processor', price: '$179/month', icon: FileText },
    { name: 'Email Marketing', path: '/micro-saas/email-marketing', price: '$119/month', icon: Mail },
    { name: 'Expense Tracker', path: '/micro-saas/expense-tracker', price: '$69/month', icon: DollarSign },
    { name: 'Inventory Management', path: '/micro-saas/inventory-management', price: '$199/month', icon: Package }
  ];

  const fiveGServices = [
    { name: '5G Network Infrastructure', path: '/5g-network-infrastructure', price: '$599/month', icon: Network },
    { name: '5G Edge Computing', path: '/5g-edge-computing', price: '$699/month', icon: Cpu },
    { name: '5G IoT Solutions', path: '/5g-iot-solutions', price: '$499/month', icon: CircuitBoard },
    { name: '5G Mobile Applications', path: '/5g-mobile-applications', price: '$399/month', icon: Smartphone },
    { name: '5G Private Networks', path: '/5g-private-networks', price: '$799/month', icon: Shield },
    { name: '5G Data Analytics', path: '/5g-data-analytics', price: '$299/month', icon: BarChart }
  ];

  const companyLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Our Team', path: '/team' },
    { name: 'Careers', path: '/careers' },
    { name: 'Blog', path: '/blog' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Press Kit', path: '/press' }
  ];

  const supportLinks = [
    { name: 'Help Center', path: '/help' },
    { name: 'Documentation', path: '/docs' },
    { name: 'API Reference', path: '/api-docs' },
    { name: 'Status Page', path: '/status' },
    { name: 'Contact Support', path: '/contact' },
    { name: 'Community', path: '/community' }
  ];

  const legalPages = [
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Terms of Service', path: '/terms-of-service' },
    { name: 'Cookie Policy', path: '/cookie-policy' },
    { name: 'GDPR Compliance', path: '/gdpr-compliance' }
  ];

  return (
    <footer className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(6,182,212,0.1)_0%,transparent_50%)] animate-pulse" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.1)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_0%,rgba(236,72,153,0.05)_50%,transparent_100%)] animate-pulse" style={{ animationDelay: '2s' }} />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center group hover:scale-110 transition-transform duration-300">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Zion Tech Group
                </h3>
                <p className="text-sm text-cyan-400 font-medium">Next-Gen Technology Solutions</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Leading provider of AI-powered solutions, cybersecurity, and digital transformation services. 
              Empowering businesses to thrive in the digital age with cutting-edge technology and innovative solutions.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com/ziontechgroup" className="group p-3 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-110">
                <Twitter className="w-5 h-5 text-cyan-400 group-hover:text-white" />
              </a>
              <a href="https://linkedin.com/company/ziontechgroup" className="group p-3 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-110">
                <Linkedin className="w-5 h-5 text-purple-400 group-hover:text-white" />
              </a>
              <a href="https://github.com/ziontechgroup" className="group p-3 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-110">
                <Github className="w-5 h-5 text-pink-400 group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* AI Services */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Brain className="w-4 h-4 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white">AI Services</h3>
            </div>
            <ul className="space-y-3">
              {aiServices.map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.path} 
                    className="group block p-3 bg-white/5 hover:bg-white/10 rounded-xl transition-all duration-300 border border-white/10 hover:border-white/20"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <service.icon className="w-4 h-4 text-purple-400" />
                        <span className="text-gray-300 group-hover:text-white transition-colors text-sm">
                          {service.name}
                        </span>
                      </div>
                      <span className="text-xs text-purple-400 font-bold">
                        {service.price}
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* IT Services */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-6 h-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                <Cloud className="w-4 h-4 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white">IT Services</h3>
            </div>
            <ul className="space-y-3">
              {itServices.map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.path} 
                    className="group block p-3 bg-white/5 hover:bg-white/10 rounded-xl transition-all duration-300 border border-white/10 hover:border-white/20"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <service.icon className="w-4 h-4 text-cyan-400" />
                        <span className="text-gray-300 group-hover:text-white transition-colors text-sm">
                          {service.name}
                        </span>
                      </div>
                      <span className="text-xs text-cyan-400 font-bold">
                        {service.price}
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Micro SAAS Services */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-6 h-6 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <Layers className="w-4 h-4 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white">Micro SAAS</h3>
            </div>
            <ul className="space-y-3">
              {microSaasServices.map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.path} 
                    className="group block p-3 bg-white/5 hover:bg-white/10 rounded-xl transition-all duration-300 border border-white/10 hover:border-white/20"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <service.icon className="w-4 h-4 text-emerald-400" />
                        <span className="text-gray-300 group-hover:text-white transition-colors text-sm">
                          {service.name}
                        </span>
                      </div>
                      <span className="text-xs text-emerald-400 font-bold">
                        {service.price}
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 5G Services */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-6 h-6 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                <Wifi className="w-4 h-4 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white">5G Solutions</h3>
            </div>
            <ul className="space-y-3">
              {fiveGServices.map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.path} 
                    className="group block p-3 bg-white/5 hover:bg-white/10 rounded-xl transition-all duration-300 border border-white/10 hover:border-white/20"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <service.icon className="w-4 h-4 text-orange-400" />
                        <span className="text-gray-300 group-hover:text-white transition-colors text-sm">
                          {service.name}
                        </span>
                      </div>
                      <span className="text-xs text-orange-400 font-bold">
                        {service.price}
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Company & Support Links */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-2">
                {companyLinks.map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link.path} 
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
              <ul className="space-y-2">
                {supportLinks.map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link.path} 
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group flex items-center p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">Email</p>
                <p className="text-white font-semibold">kleber@ziontechgroup.com</p>
              </div>
            </div>
            <div className="group flex items-center p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">Phone</p>
                <p className="text-white font-semibold">+1 302 464 0950</p>
              </div>
            </div>
            <div className="group flex items-center p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">Address</p>
                <p className="text-white font-semibold">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-6 h-6 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <p className="text-gray-400 text-sm">
                © 2024 Zion Tech Group. All rights reserved.
              </p>
            </div>
            <div className="flex flex-wrap justify-center space-x-6">
              {legalPages.map((page, index) => (
                <Link 
                  key={index} 
                  to={page.path} 
                  className="text-gray-400 hover:text-cyan-400 text-sm transition-colors hover:underline"
                >
                  {page.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
