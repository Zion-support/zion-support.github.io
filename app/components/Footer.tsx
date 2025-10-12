import React from 'react'
import { Link } from 'react-router-dom'
<<<<<<< HEAD
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, ArrowRight, Brain, Cloud, Shield, Globe, Database, Smartphone, Zap, Cpu, Wifi } from 'lucide-react'
import NewsletterSignup from './NewsletterSignup'
=======
import { Mail, Phone, MapPin, Globe, Twitter, Linkedin, Github, Zap, Brain, Cpu, Rocket, Shield, Network, BarChart3, Bot, ArrowRight, Sparkles, Layers, Target, Award, Lightbulb, Monitor, Server, CircuitBoard, Atom, Satellite, Wrench, BarChart, PieChart, LineChart, Activity, Eye, Search, Filter, Download, Upload, Share, MessageCircle, Calendar, Timer, Battery, Wifi2, Signal, Bluetooth, Camera, Mic, Headphones, Speaker, Volume2, VolumeX, Play, Pause, SkipForward, SkipBack, Repeat, Shuffle, Heart, ThumbsUp, ThumbsDown, Bookmark, Flag, AlertTriangle, Info, HelpCircle, Plus, Minus, Edit, Trash2, Save, Copy, Paste, Cut, Undo, Redo, RefreshCw, RotateCcw, RotateCw, Move, Maximize, Minimize, Square, Circle, Triangle, Hexagon, Octagon, Pentagon, Star2, Heart2, Smile, Frown, Meh, Laugh, Angry, Surprised, Confused, Wink, Kiss, Tongue, Wink2, Kiss2, Tongue2, Wink3, Kiss3, Tongue3, Wink4, Kiss4, Tongue4, Wink5, Kiss5, Tongue5, Wink6, Kiss6, Tongue6, Wink7, Kiss7, Tongue7, Wink8, Kiss8, Tongue8, Wink9, Kiss9, Tongue9, Wink10, Kiss10, Tongue10, FileText, Package, DollarSign, CheckCircle, Star, Clock, TrendingUp } from 'lucide-react'
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-a81a

export default function Footer() {
  const aiServices = [
<<<<<<< HEAD
    { name: 'AI Content Generator', path: '/ai-content-generator' },
    { name: 'AI Chatbot Builder', path: '/ai-chatbot-builder' },
    { name: 'AI Analytics Dashboard', path: '/ai-analytics-dashboard' },
    { name: 'AI Email Assistant', path: '/ai-email-assistant' },
    { name: 'AI Voice Assistant', path: '/ai-voice-assistant' },
    { name: 'AI CRM Assistant', path: '/ai-crm-assistant' },
    { name: 'AI Social Media Manager', path: '/ai-social-media-manager' },
    { name: 'AI Email Marketing', path: '/ai-email-marketing-automation' },
    { name: 'AI Automation Suite', path: '/ai-automation' },
    { name: 'AI Project Manager', path: '/ai-project-manager' },
    { name: 'AI 3D Generation', path: '/ai-3d-generation' },
    { name: 'AI Drug Discovery Pro', path: '/ai-drug-discovery-pro' }
  ];

  const itServices = [
    { name: 'Web Development', path: '/web-development' },
    { name: 'Mobile Development', path: '/mobile-development' },
    { name: 'DevOps', path: '/devops' },
    { name: 'Data Analytics', path: '/data-analytics' },
    { name: 'Cloud Services', path: '/cloud-services' },
    { name: 'Cybersecurity', path: '/cybersecurity' },
    { name: 'AI Cybersecurity Suite', path: '/ai-cybersecurity-suite' },
    { name: 'Blockchain Solutions', path: '/blockchain' },
    { name: 'Quantum Computing', path: '/quantum-computing-solutions' }
  ];

  const microSaasServices = [
    { name: 'AI Task Manager', path: '/ai-task-manager' },
    { name: 'AI Expense Tracker', path: '/ai-expense-tracker' },
    { name: 'AI Password Manager', path: '/ai-password-manager' },
    { name: 'AI Invoice Generator', path: '/ai-invoice-generator' },
    { name: 'AI Health Tracker', path: '/ai-health-tracker' },
    { name: 'AI Meeting Transcriber', path: '/ai-meeting-transcriber' },
    { name: 'AI Social Media Manager', path: '/ai-social-media-manager' },
    { name: 'AI Email Marketing', path: '/ai-email-marketing-automation' },
    { name: 'AI Smart Calendar', path: '/ai-smart-calendar' },
    { name: 'AI Climate Solutions', path: '/ai-climate-solutions-pro' }
  ];

  const fiveGServices = [
    { name: '5G Implementation', path: '/5g-implementation' },
    { name: '5G Network Infrastructure', path: '/5g-network-infrastructure' },
    { name: '5G IoT Solutions', path: '/5g-iot-solutions' },
    { name: '5G Edge Computing', path: '/5g-edge-computing' },
    { name: '5G Private Networks', path: '/5g-private-networks' },
    { name: '5G Mobile Applications', path: '/5g-mobile-applications' },
    { name: '5G Data Analytics', path: '/5g-data-analytics' },
    { name: 'AI Smart City Solutions', path: '/ai-smart-city-solutions' }
=======
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
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-a81a
  ];

  const companyLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Micro SAAS', path: '/micro-saas' },
    { name: 'AI Services', path: '/ai-services' },
    { name: 'IT Services', path: '/it-services' },
    { name: 'Contact', path: '/contact' },
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' }
  ];

  const resourceLinks = [
    { name: 'Documentation', path: '/docs' },
    { name: 'API Reference', path: '/api-docs' },
    { name: 'Help Center', path: '/help' },
    { name: 'Community', path: '/community' },
    { name: 'Status Page', path: '/status' },
    { name: 'Resources', path: '/resources' }
  ];

  const supportLinks = [
    { name: 'Help Center', path: '/help' },
    { name: 'Documentation', path: '/docs' },
    { name: 'Support', path: '/support' },
    { name: 'Status', path: '/status' },
    { name: 'SLA', path: '/sla' }
  ];

  return (
<<<<<<< HEAD
    <footer className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Zion Tech Group</span>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-sm">
              Leading provider of AI, cloud services, cybersecurity, and 5G solutions. 
              Transform your business with cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/ziontechgroup" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/company/ziontechgroup" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/ziontechgroup" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Twitter className="w-5 h-5" />
=======
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
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-a81a
              </a>
            </div>
          </div>

          {/* AI Services */}
          <div>
<<<<<<< HEAD
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Brain className="w-5 h-5 mr-2 text-cyan-400" />
              AI Services
            </h3>
            <ul className="space-y-3">
              {aiServices.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.path}
                    className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center"
=======
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
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-a81a
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
<<<<<<< HEAD
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Shield className="w-5 h-5 mr-2 text-green-400" />
              IT Services
            </h3>
            <ul className="space-y-3">
              {itServices.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.path}
                    className="text-gray-300 hover:text-green-400 transition-colors flex items-center"
=======
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
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-a81a
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
<<<<<<< HEAD
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Cpu className="w-5 h-5 mr-2 text-purple-400" />
              Micro SAAS
            </h3>
            <ul className="space-y-3">
              {microSaasServices.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.path}
                    className="text-gray-300 hover:text-purple-400 transition-colors flex items-center"
=======
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
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-a81a
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

<<<<<<< HEAD
          {/* 5G Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Wifi className="w-5 h-5 mr-2 text-yellow-400" />
              5G Solutions
            </h3>
            <ul className="space-y-3">
              {fiveGServices.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.path}
                    className="text-gray-300 hover:text-yellow-400 transition-colors flex items-center"
                  >
                    <ArrowRight className="w-3 h-3 mr-2" />
                    {service.name}
=======
          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              {resourceLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="text-gray-400 hover:text-white transition-colors flex items-center"
                  >
                    <ArrowRight className="w-3 h-3 mr-2" />
                    {link.name}
>>>>>>> cursor/website-audit-and-update-with-deployment-713e
                  </Link>
                </li>
              ))}
            </ul>
          </div>
<<<<<<< HEAD
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <NewsletterSignup variant="inline" />
=======
>>>>>>> cursor/website-audit-and-update-with-deployment-713e
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
<<<<<<< HEAD
            <div className="flex items-center">
              <Mail className="w-5 h-5 text-cyan-400 mr-3" />
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="text-white">kleber@ziontechgroup.com</p>
              </div>
            </div>
            <div className="flex items-center">
              <Phone className="w-5 h-5 text-purple-400 mr-3" />
              <div>
                <p className="text-sm text-gray-400">Phone</p>
                <p className="text-white">+1 (302) 464-0950</p>
              </div>
            </div>
            <div className="flex items-center">
              <MapPin className="w-5 h-5 text-green-400 mr-3" />
              <div>
                <p className="text-sm text-gray-400">Location</p>
                <p className="text-white">364 E Main St STE 1008, Middletown DE 19709</p>
=======
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
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-a81a
              </div>
            </div>
          </div>
        </div>

<<<<<<< HEAD
        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Zion Tech Group. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
            <Link to="/cookies" className="text-gray-400 hover:text-white text-sm transition-colors">
              Cookie Policy
            </Link>
=======
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
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-a81a
          </div>
        </div>
      </div>
    </footer>
  );
}