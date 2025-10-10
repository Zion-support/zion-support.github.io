'use client';

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
            </div>
          </div>

          {/* Company Links */}
          <div>
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
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
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
            <div className="flex items-center space-x-3">
              <MapPin className="h-5 w-5 text-blue-400" />
              <div>
                <p className="text-sm text-gray-300">Address</p>
                <p className="text-white">123 Tech Street, Innovation City, IC 12345</p>
              </div>
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
        </div>
      </div>
    </footer>
  );
};

<<<<<<< HEAD
export default Footer;
=======
export default memo(Footer);
>>>>>>> origin/temp-pr-28049
