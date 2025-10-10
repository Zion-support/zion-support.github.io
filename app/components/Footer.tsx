<<<<<<< HEAD
'use client';
=======
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, ArrowRight, Shield, Award, Globe, Facebook, Twitter, Linkedin, Instagram, Youtube, Github } from 'lucide-react';
>>>>>>> origin/resolve-merge-conflicts

import React from 'react';
import { Link } from 'react-router-dom';
import {
  Brain,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Github,
  Instagram,
  Youtube,
  ArrowRight,
  ExternalLink,
  Heart,
  Shield,
  Award,
  CheckCircle,
  Star,
  Zap,
  Cloud,
  Database,
  Globe,
  Lock,
  Target,
  TrendingUp,
  Users,
  Briefcase,
  FileText,
  MessageSquare,
  BarChart,
  Settings,
  HelpCircle,
  Bookmark,
  Play,
  Home,
  Building,
  GraduationCap,
  ThumbsUp,
  MessageCircle,
  Share2,
  Eye,
  Filter,
  SortAsc,
  SortDesc,
  Calendar,
  Video,
  Camera,
  Mic,
  Headphones,
  Volume2,
  VolumeX,
  Wifi,
  WifiOff,
  Battery,
  BatteryCharging,
  Power,
  PowerOff,
  RefreshCw,
  RotateCcw,
  RotateCw,
  Move,
  Maximize,
  Minimize,
  Maximize2,
  Minimize2,
  Square,
  Circle,
  Triangle,
  Hexagon,
  Octagon,
  Pentagon,
  Diamond,
  Smile,
  Frown,
  Meh,
  Laugh,
  Angry,
  Sad,
  Surprised,
  Confused,
  Wink,
  Kiss,
  Tongue,
  ThumbsDown,
  Hand,
  Handshake,
  Clap,
  Wave,
  Point,
  Fingerprint,
  Key,
  Unlock,
  EyeOff,
  ShieldCheck,
  ShieldAlert,
  ShieldX,
  AlertTriangle,
  AlertCircle,
  AlertOctagon,
  AlertSquare,
  Info,
  QuestionMarkCircle,
  ExclamationTriangle,
  ExclamationCircle,
  ExclamationMarkCircle,
  XCircle,
  PlusCircle,
  MinusCircle,
  X,
  Plus,
  Minus,
  Divide,
  Equal,
  NotEqual,
  LessThan,
  GreaterThan,
  LessThanOrEqual,
  GreaterThanOrEqual,
  Infinity,
  Pi,
  Sigma,
  Alpha,
  Beta,
  Gamma,
  Delta,
  Epsilon,
  Zeta,
  Eta,
  Theta,
  Iota,
  Kappa,
  Lambda,
  Mu,
  Nu,
  Xi,
  Omicron,
  Rho,
  Tau,
  Upsilon,
  Phi,
  Chi,
  Psi,
  Omega
} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

<<<<<<< HEAD
  const footerLinks = {
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Team', href: '/team' },
      { name: 'Careers', href: '/careers' },
      { name: 'Contact', href: '/contact' },
      { name: 'Press', href: '/press' },
      { name: 'Blog', href: '/blog' }
    ],
<<<<<<< HEAD
    services: [
      { name: 'AI Solutions', href: '/ai-services' },
      { name: 'IT Services', href: '/it-services' },
      { name: 'Cloud Services', href: '/cloud-services' },
      { name: 'Cybersecurity', href: '/cybersecurity' },
      { name: 'DevOps', href: '/devops' },
      { name: 'Consulting', href: '/consultation' }
    ],
    resources: [
      { name: 'Documentation', href: '/docs' },
      { name: 'API Reference', href: '/api-docs' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'White Papers', href: '/white-papers' },
      { name: 'Tutorials', href: '/tutorials' },
      { name: 'Support', href: '/support' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
      { name: 'GDPR', href: '/gdpr' },
      { name: 'Compliance', href: '/compliance' },
      { name: 'Security', href: '/security' }
    ]
  };

  const socialLinks = [
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'LinkedIn', href: 'https://linkedin.com/company/zion-tech-group', icon: Linkedin },
    { name: 'GitHub', href: 'https://github.com/zion-tech-group', icon: Github },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram },
    { name: 'YouTube', href: 'https://youtube.com/ziontechgroup', icon: Youtube }
=======
  const aiServices = [
    { name: 'AI Business Intelligence', url: '/ai-services/business-intelligence', description: 'Advanced analytics & insights' },
    { name: 'AI Document Processing', url: '/ai-services/document-processing', description: 'Intelligent document analysis' },
    { name: 'AI Customer Experience', url: '/ai-services/customer-experience', description: 'AI-powered customer interactions' },
    { name: 'AI Marketing Automation', url: '/ai-services/marketing-automation', description: 'Intelligent marketing campaigns' },
    { name: 'AI Predictive Maintenance', url: '/ai-services/predictive-maintenance', description: 'Equipment failure prevention' },
    { name: 'AI Supply Chain', url: '/ai-services/supply-chain', description: 'Supply chain optimization' },
    { name: 'AI Fraud Detection', url: '/ai-services/fraud-detection', description: 'Advanced fraud prevention' },
    { name: 'AI Content Generation', url: '/ai-services/content-generation', description: 'AI content creation' },
    { name: 'AI HR Analytics', url: '/ai-services/hr-analytics', description: 'Human resources optimization' },
    { name: 'AI Process Automation', url: '/ai-services/process-automation', description: 'Intelligent workflow automation' },
    { name: 'AI Quality Assurance', url: '/ai-services/quality-assurance', description: 'AI-powered quality control' },
    { name: 'AI Energy Management', url: '/ai-services/energy-management', description: 'Energy optimization solutions' }
  ];

  const microSaaSServices = [
    { name: 'AI Analytics Dashboard', url: '/micro-saas/analytics-dashboard', description: 'Real-time business intelligence' },
    { name: 'Smart Support Bot', url: '/micro-saas/support-bot', description: 'AI customer service automation' },
    { name: 'Social Media Manager', url: '/micro-saas/social-manager', description: 'AI social media automation' },
    { name: 'Email Marketing Suite', url: '/micro-saas/email-marketing', description: 'AI email campaigns' },
    { name: 'Inventory Management', url: '/micro-saas/inventory-management', description: 'Smart inventory optimization' },
    { name: 'Lead Scoring System', url: '/micro-saas/lead-scoring', description: 'Intelligent lead qualification' },
    { name: 'Document Processor', url: '/micro-saas/document-processor', description: 'AI document analysis' },
    { name: 'SEO Optimizer', url: '/micro-saas/seo-optimizer', description: 'AI SEO automation' },
    { name: 'Appointment Scheduler', url: '/micro-saas/appointment-scheduler', description: 'Smart scheduling system' },
    { name: 'Chat Analytics', url: '/micro-saas/chat-analytics', description: 'Conversation analysis' },
    { name: 'Expense Tracker', url: '/micro-saas/expense-tracker', description: 'AI expense management' },
    { name: 'Content Generator', url: '/micro-saas/content-generator', description: 'AI content creation' }
  ];

  const itServices = [
    { name: 'IT Infrastructure', url: '/it-infrastructure', description: 'Enterprise infrastructure' },
    { name: 'IT Support', url: '/it-support', description: 'Comprehensive IT support' },
    { name: 'Cloud Infrastructure', url: '/cloud-infrastructure', description: 'Cloud migration & setup' },
    { name: 'Cybersecurity', url: '/cybersecurity', description: 'Security solutions' },
    { name: 'Database Management', url: '/database-management', description: 'Database management' },
    { name: 'Managed IT', url: '/managed-it', description: '24/7 IT management' }
  ];

  const emergingTech = [
    { name: 'Quantum Computing', url: '/quantum-computing', description: 'Next-gen computing' },
    { name: 'Autonomous Systems', url: '/autonomous-systems', description: 'Self-managing systems' },
    { name: 'Blockchain', url: '/blockchain', description: 'Decentralized solutions' },
    { name: 'IoT Edge Computing', url: '/iot-edge-computing', description: 'Connected devices' },
    { name: 'Robotics', url: '/robotics', description: 'Intelligent robots' }
  ];

  const companyLinks = [
    { name: 'About Us', url: '/about' },
    { name: 'Our Team', url: '/team' },
    { name: 'Careers', url: '/careers' },
    { name: 'Blog', url: '/blog' },
    { name: 'Case Studies', url: '/case-studies' },
    { name: 'Contact', url: '/contact' }
  ];

  const supportLinks = [
    { name: 'Documentation', url: '/docs' },
    { name: 'API Docs', url: '/api-docs' },
    { name: 'Support', url: '/support' },
    { name: 'Status', url: '/status' },
    { name: 'Free Consultation', url: '/consultation' },
    { name: 'Pricing', url: '/pricing' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', url: '/privacy' },
    { name: 'Terms of Service', url: '/terms' },
    { name: 'Cookie Policy', url: '/cookies' },
    { name: 'GDPR Compliance', url: '/gdpr' },
    { name: 'SLA', url: '/sla' }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, url: 'https://facebook.com/ziontechgroup' },
    { name: 'Twitter', icon: Twitter, url: 'https://twitter.com/ziontechgroup' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/company/ziontechgroup' },
    { name: 'Instagram', icon: Instagram, url: 'https://instagram.com/ziontechgroup' },
    { name: 'YouTube', icon: Youtube, url: 'https://youtube.com/ziontechgroup' },
    { name: 'GitHub', icon: Github, url: 'https://github.com/ziontechgroup' }
  ];

  const contactInfo = {
    phone: '(302) 464-0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown, DE 19709',
    hours: 'Mon-Fri 9AM-6PM EST'
  };

  const achievements = [
    { text: '50+ Successful Projects' },
    { text: '100+ Happy Clients' },
    { text: '300% Average ROI' },
    { text: '99.9% Uptime Guarantee' }
>>>>>>> origin/resolve-merge-conflicts
  ];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Zion Tech Group</span>
            </div>
            <p className="text-slate-300 mb-4 max-w-md">
              Leading provider of AI-powered enterprise solutions, quantum computing, and digital transformation services. 
              Transform your business with our advanced AI capabilities.
            </p>
            <div className="flex space-x-4">
<<<<<<< HEAD
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-cyan-400 transition-colors duration-200"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
=======
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:bg-slate-700 transition-all duration-300 group"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                </a>
              ))}
>>>>>>> origin/resolve-merge-conflicts
            </div>
          </div>

          {/* Company Links */}
          <div>
<<<<<<< HEAD
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-slate-300 hover:text-cyan-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
=======
            <h3 className="text-lg font-semibold mb-6 text-cyan-400 neon-text">AI Services</h3>
            <ul className="space-y-3">
              {aiServices.slice(0, 6).map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm group flex items-center"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.name}
                  </Link>
                  <p className="text-xs text-gray-500 ml-5">{service.description}</p>
                </li>
              ))}
              <li>
                <Link
                  to="/ai-services"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 text-sm font-medium"
                >
                  View All AI Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Micro SaaS Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-cyan-400 neon-text">Micro SaaS</h3>
            <ul className="space-y-3">
              {microSaaSServices.slice(0, 6).map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm group flex items-center"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.name}
                  </Link>
                  <p className="text-xs text-gray-500 ml-5">{service.description}</p>
                </li>
              ))}
              <li>
                <Link
                  to="/micro-saas"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 text-sm font-medium"
                >
                  View All Micro SaaS →
                </Link>
              </li>
            </ul>
          </div>

          {/* IT Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-cyan-400 neon-text">IT Services</h3>
            <ul className="space-y-3">
              {itServices.map((service, index) => (
                <li key={index}>
>>>>>>> origin/resolve-merge-conflicts
                  <Link
                    to={link.href}
                    className="text-slate-300 hover:text-cyan-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
<<<<<<< HEAD
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
=======
            <h3 className="text-lg font-semibold mb-6 text-cyan-400 neon-text">Emerging Tech</h3>
            <ul className="space-y-3">
              {emergingTech.map((service, index) => (
                <li key={index}>
>>>>>>> origin/resolve-merge-conflicts
                  <Link
                    to={link.href}
                    className="text-slate-300 hover:text-cyan-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-slate-800 mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-cyan-400" />
              <div>
                <p className="text-sm text-slate-400">Email</p>
                <p className="text-slate-300">kleber@ziontechgroup.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-cyan-400" />
              <div>
                <p className="text-sm text-slate-400">Phone</p>
                <p className="text-slate-300">+1-302-464-0950</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-cyan-400" />
              <div>
                <p className="text-sm text-slate-400">Address</p>
                <p className="text-slate-300">364 E Main St STE 1008, Middletown, DE 19709</p>
              </div>
=======
    'Marketing': [
      { name: 'AI Social Media Manager', url: '/ai-social-media-manager', description: 'Automated social media' },
      { name: 'AI Email Marketing Pro', url: '/ai-email-marketing', description: 'Smart email campaigns' },
      { name: 'AI Content Creator', url: '/ai-content-creator', description: 'Automated content generation' },
      { name: 'AI SEO Optimizer', url: '/ai-seo-optimizer', description: 'Search engine optimization' }
    ],
    'Analytics': [
      { name: 'AI Analytics Dashboard', url: '/ai-analytics', description: 'Business intelligence' },
      { name: 'AI Performance Tracker', url: '/ai-performance-tracker', description: 'Performance monitoring' },
      { name: 'AI Data Visualizer', url: '/ai-data-visualization', description: 'Data visualization' },
      { name: 'AI Report Generator', url: '/ai-report-generator', description: 'Automated reporting' }
    ],
    'Customer Service': [
      { name: 'AI Customer Support Bot', url: '/ai-customer-support-bot', description: '24/7 customer support' },
      { name: 'AI Chat Assistant', url: '/ai-chat-assistant', description: 'Intelligent chat support' },
      { name: 'AI Help Desk', url: '/ai-help-desk', description: 'Automated help desk' },
      { name: 'AI Ticket Manager', url: '/ai-ticket-manager', description: 'Smart ticket management' }
    ]
  };

  const aiServices = [
    { name: 'AI Development', href: '/ai-development' },
    { name: 'Machine Learning', href: '/machine-learning' },
    { name: 'Natural Language Processing', href: '/nlp' },
    { name: 'Computer Vision', href: '/computer-vision' },
    { name: 'Predictive Analytics', href: '/predictive-analytics' },
    { name: 'AI Consulting', href: '/ai-consulting' },
  ];

  const itServices = [
    { name: 'Cloud Solutions', href: '/cloud-solutions' },
    { name: 'DevOps', href: '/devops' },
    { name: 'Cybersecurity', href: '/cybersecurity' },
    { name: 'Database Management', href: '/database-management' },
    { name: 'API Development', href: '/api-development' },
    { name: 'System Integration', href: '/system-integration' },
  ];

  const companyLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Partners', href: '/partners' },
    { name: 'Press', href: '/press' },
  ];

  const supportLinks = [
    { name: 'Documentation', href: '/docs' },
    { name: 'API Reference', href: '/api-docs' },
    { name: 'Tutorials', href: '/tutorials' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Support Center', href: '/support' },
    { name: 'Status Page', href: '/status' },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'GDPR Compliance', href: '/gdpr' },
    { name: 'Security', href: '/security' },
    { name: 'Compliance', href: '/compliance' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Brain className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Leading provider of AI and IT solutions, empowering businesses with cutting-edge technology and innovative digital transformation services.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://github.com" className="text-gray-400 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://youtube.com" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
>>>>>>> origin/temp-pr-28049
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-white transition-colors flex items-center group"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* AI Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">AI Services</h3>
            <ul className="space-y-2">
              {aiServices.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="text-gray-300 hover:text-white transition-colors flex items-center group"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* IT Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">IT Services</h3>
            <ul className="space-y-2">
              {itServices.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="text-gray-300 hover:text-white transition-colors flex items-center group"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-white transition-colors flex items-center group"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

<<<<<<< HEAD
        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4 text-sm text-slate-400">
            <p>&copy; {currentYear} Zion Tech Group. All rights reserved.</p>
            <div className="flex items-center space-x-2">
              <Heart className="w-4 h-4 text-red-500" />
              <span>Made with love for innovation</span>
=======
        {/* Micro SaaS Services Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <h3 className="text-xl font-semibold mb-6 text-center">Our Micro SaaS Solutions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(microSaasServices).map(([category, services]) => (
              <div key={category} className="bg-gray-800 rounded-lg p-4">
                <h4 className="font-semibold text-blue-400 mb-3">{category}</h4>
                <ul className="space-y-2">
                  {services.map((service) => (
                    <li key={service.name}>
                      <Link
                        to={service.url}
                        className="text-gray-300 hover:text-white transition-colors text-sm flex items-start group"
                      >
                        <ArrowRight className="h-3 w-3 mr-2 mt-1 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                        <div>
                          <div className="font-medium">{service.name}</div>
                          <div className="text-xs text-gray-400">{service.description}</div>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-blue-400" />
              <div>
                <p className="text-sm text-gray-300">Phone</p>
                <p className="text-white">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-blue-400" />
              <div>
                <p className="text-sm text-gray-300">Email</p>
                <p className="text-white">info@ziontechgroup.com</p>
              </div>
            </div>
<<<<<<< HEAD
            <div className="flex items-center space-x-3">
              <MapPin className="h-5 w-5 text-blue-400" />
              <div>
                <p className="text-sm text-gray-300">Address</p>
                <p className="text-white">123 Tech Street, Innovation City, IC 12345</p>
              </div>
=======
          </div>
        </div>

        {/* Company Links */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-8">
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.url}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-2">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.url}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.url}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm">All Services</Link></li>
              <li><Link to="/ai-services" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm">AI Services</Link></li>
              <li><Link to="/micro-saas" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm">Micro SaaS</Link></li>
              <li><Link to="/case-studies" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm">Case Studies</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">Stay updated with our latest news and offers.</p>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 bg-slate-800 border border-gray-600 rounded-lg text-white text-sm focus:outline-none focus:border-cyan-400"
              />
              <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all text-sm">
                Subscribe
              </button>
>>>>>>> origin/resolve-merge-conflicts
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-gray-400 text-sm">
                © {currentYear} Zion Tech Group. All rights reserved.
              </p>
              <div className="flex space-x-6">
                {legalLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
<<<<<<< HEAD
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <Shield className="h-4 w-4" />
              <span>Secure & Compliant</span>
>>>>>>> origin/temp-pr-28049
            </div>
          </div>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-sm text-slate-400 hover:text-cyan-400 transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </div>
=======
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                Cookie Policy
              </Link>
              <Link to="/gdpr" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                GDPR
              </Link>
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-green-400" />
                <span>Enterprise Security</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-4 h-4 text-yellow-400" />
                <span>ISO 27001 Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4 text-blue-400" />
                <span>Global Reach</span>
              </div>
            </div>
          </div>
>>>>>>> origin/resolve-merge-conflicts
        </div>
      </div>
    </footer>
  );
};

<<<<<<< HEAD
<<<<<<< HEAD
export default Footer;
=======
export default memo(Footer);
>>>>>>> origin/temp-pr-28049
=======
Footer.displayName = 'Footer';

export default Footer;
>>>>>>> origin/resolve-merge-conflicts
