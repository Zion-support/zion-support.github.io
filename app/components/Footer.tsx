import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Mail, Phone, MapPin, Globe, Twitter, Linkedin, Github, Zap, Brain, Cpu, Rocket, 
  Shield, Network, BarChart3, Bot, ArrowRight, Sparkles, Layers, Target, Award, 
  Lightbulb, Monitor, Server, CircuitBoard, Atom, Satellite, Wrench, BarChart, 
  PieChart, LineChart, Activity, Eye, Search, Filter, Download, Upload, Share, 
  MessageCircle, Calendar, Timer, Battery, Wifi2, Signal, Bluetooth, Camera, Mic, 
  Headphones, Speaker, Volume2, VolumeX, Play, Pause, SkipForward, SkipBack, Repeat, 
  Shuffle, Heart, ThumbsUp, ThumbsDown, Bookmark, Flag, AlertTriangle, Info, 
  HelpCircle, Plus, Minus, Edit, Trash2, Save, Copy, Paste, Cut, Undo, Redo, 
  RefreshCw, RotateCcw, RotateCw, Move, Maximize, Minimize, Square, Circle, Triangle, 
  Hexagon, Octagon, Pentagon, Star2, Heart2, Smile, Frown, Meh, Laugh, Angry, 
  Surprised, Confused, Wink, Kiss, Tongue, FileText, Package, DollarSign, CheckCircle, 
  Star, Clock, TrendingUp 
} from 'lucide-react'

const Footer = () => {
  const aiServices = [
    { name: 'AI Chatbot Builder', path: '/ai-chatbot-builder' },
    { name: 'AI Analytics Dashboard', path: '/ai-analytics-dashboard' },
    { name: 'AI Code Assistant', path: '/ai-code-assistant' },
    { name: 'AI Customer Support', path: '/ai-customer-support' },
    { name: 'AI Email Marketing', path: '/ai-email-marketing' },
    { name: 'AI Content Generator', path: '/ai-content-generator' },
    { name: 'AI Voice Assistant', path: '/ai-voice-assistant' },
    { name: 'AI Cybersecurity', path: '/ai-cybersecurity' },
    { name: 'AI Data Processing', path: '/ai-document-processing' },
    { name: 'AI Business Intelligence', path: '/ai-business-intelligence' },
    { name: 'AI Project Management', path: '/ai-project-management' },
    { name: 'AI Translation Services', path: '/ai-translation-services' }
  ];

  const itServices = [
    { name: 'Web Development', path: '/web-development' },
    { name: 'Mobile Development', path: '/mobile-development' },
    { name: 'Cloud Migration', path: '/cloud-migration' },
    { name: 'Cybersecurity', path: '/cybersecurity' },
    { name: 'Database Management', path: '/database-management' },
    { name: 'Network Infrastructure', path: '/network-infrastructure' },
    { name: 'Server Management', path: '/server-management' },
    { name: 'API Development', path: '/api-development' },
    { name: 'DevOps Solutions', path: '/devops' },
    { name: 'Data Analytics', path: '/data-analytics' },
    { name: 'IT Security Audit', path: '/it-security-audit' },
    { name: 'IT Support & Maintenance', path: '/it-support' }
  ];

  const microSaasServices = [
    { name: 'AI Customer Insights', path: '/ai-customer-insights' },
    { name: 'AI Workflow Automation', path: '/ai-workflow-automation' },
    { name: 'Contract Manager', path: '/micro-saas/contract-manager' },
    { name: 'Email Signature Manager', path: '/micro-saas/email-signature' },
    { name: 'Employee Directory', path: '/micro-saas/employee-directory' },
    { name: 'Document Processor', path: '/micro-saas/document-processor' },
    { name: 'AI Email Marketing', path: '/micro-saas/email-marketing' },
    { name: 'Expense Tracker Pro', path: '/micro-saas/expense-tracker' },
    { name: 'Inventory Manager', path: '/micro-saas/inventory-management' },
    { name: 'Lead Generation Suite', path: '/micro-saas/lead-generation' },
    { name: 'Social Media Scheduler', path: '/micro-saas/social-scheduler' },
    { name: 'AI Password Manager Pro', path: '/micro-saas/ai-password-manager' },
    { name: 'AI Task Manager', path: '/micro-saas/ai-task-manager' },
    { name: 'AI Email Marketing', path: '/micro-saas/ai-email-marketing' }
  ];

  const fiveGServices = [
    { name: '5G Network Infrastructure', path: '/5g-network-infrastructure' },
    { name: '5G IoT Solutions', path: '/5g-iot-solutions' },
    { name: '5G Edge Computing', path: '/5g-edge-computing' },
    { name: '5G Private Networks', path: '/5g-private-networks' },
    { name: '5G Mobile Applications', path: '/5g-mobile-applications' },
    { name: '5G Data Analytics', path: '/5g-data-analytics' }
  ];

  return (
    <footer className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Leading the future of technology with cutting-edge AI solutions, 
              robust IT infrastructure, and innovative digital transformation services.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com/ziontechgroup" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/company/ziontechgroup" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://github.com/ziontechgroup" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* AI Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400">AI Services</h3>
            <ul className="space-y-2">
              {aiServices.slice(0, 6).map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.path} 
                    className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* IT Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-purple-400">IT Services</h3>
            <ul className="space-y-2">
              {itServices.slice(0, 6).map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.path} 
                    className="text-gray-300 hover:text-purple-400 transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Micro SaaS */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-pink-400">Micro SaaS</h3>
            <ul className="space-y-2">
              {microSaasServices.slice(0, 6).map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.path} 
                    className="text-gray-300 hover:text-pink-400 transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 5G Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-400">5G Solutions</h3>
            <ul className="space-y-2">
              {fiveGServices.map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.path} 
                    className="text-gray-300 hover:text-green-400 transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-cyan-400" />
              <span className="text-gray-300">+1 302 464 0950</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-purple-400" />
              <span className="text-gray-300">kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-pink-400" />
              <span className="text-gray-300">Middletown DE 19709</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Zion Tech Group. All rights reserved. | 
            <Link to="/privacy" className="hover:text-cyan-400 transition-colors ml-2">Privacy Policy</Link> | 
            <Link to="/terms" className="hover:text-cyan-400 transition-colors ml-2">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;