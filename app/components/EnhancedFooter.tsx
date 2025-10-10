'use client';
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ArrowRight, 
  Star, 
  CheckCircle, 
  Zap, 
  Shield, 
  Brain, 
  Cloud, 
  Code, 
  BarChart, 
  Users, 
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
  Search,
  Filter,
  Package,
  Headphones,
  Wifi,
  HardDrive,
  Printer,
  Router,
  Laptop,
  Bot,
  Eye,
  Mic,
  Palette,
  Workflow,
  Layers,
  MessageSquare,
  Heart as HeartIcon,
  DollarSign as DollarSignIcon,
  Box as BoxIcon,
  Monitor as MonitorIcon,
  Link as LinkIconAlt,
  Server as ServerIcon,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Github
} from 'lucide-react';

const EnhancedFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const serviceCategories = [
    {
      title: 'AI Services',
      icon: Brain,
      services: [
        { name: 'AI Chatbots & Virtual Assistants', href: '/ai-chatbot-builder' },
        { name: 'AI Content Generation', href: '/ai-content-generation' },
        { name: 'AI Data Analytics', href: '/ai-data-analytics' },
        { name: 'AI Computer Vision', href: '/ai-computer-vision' },
        { name: 'AI Voice Processing', href: '/ai-voice-processing' },
        { name: 'AI Workflow Automation', href: '/ai-workflow-automation' },
        { name: 'AI Cybersecurity', href: '/ai-cybersecurity' },
        { name: 'AI Mobile Apps', href: '/ai-mobile-apps' }
      ]
    },
    {
      title: 'IT Services',
      icon: Cloud,
      services: [
        { name: 'Cloud Infrastructure', href: '/cloud-services' },
        { name: 'Cybersecurity Solutions', href: '/cybersecurity' },
        { name: 'DevOps & CI/CD', href: '/devops' },
        { name: 'Database Management', href: '/database' },
        { name: 'IT Infrastructure', href: '/it-infrastructure' },
        { name: 'Managed IT Services', href: '/managed-it' },
        { name: 'Web Development', href: '/web-development' },
        { name: 'Mobile Development', href: '/mobile-development' }
      ]
    },
    {
      title: 'Micro SAAS',
      icon: Cpu,
      services: [
        { name: 'AI CRM Assistant', href: '/ai-crm-assistant' },
        { name: 'AI Email Marketing', href: '/ai-email-marketing' },
        { name: 'AI Expense Tracker', href: '/ai-expense-tracker' },
        { name: 'AI Invoice Generator', href: '/ai-invoice-generator' },
        { name: 'AI Lead Generation', href: '/ai-lead-generation' },
        { name: 'AI Project Manager', href: '/ai-project-manager' },
        { name: 'AI Inventory Manager', href: '/ai-inventory-manager' },
        { name: 'AI Social Media Manager', href: '/ai-social-media' }
      ]
    },
    {
      title: 'Emerging Tech',
      icon: Sparkles,
      services: [
        { name: 'Quantum Computing', href: '/quantum-computing' },
        { name: '5G Implementation', href: '/5g-implementation' },
        { name: 'Blockchain Solutions', href: '/blockchain-solutions' },
        { name: 'Autonomous Systems', href: '/autonomous-systems' },
        { name: 'Edge Computing', href: '/edge-computing' },
        { name: 'IoT Solutions', href: '/iot-solutions' }
      ]
    }
  ];

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' }
  ];

  const supportLinks = [
    { name: 'Help Center', href: '/help' },
    { name: 'Documentation', href: '/docs' },
    { name: 'API Reference', href: '/api-docs' },
    { name: 'Status Page', href: '/status' },
    { name: 'System Requirements', href: '/requirements' },
    { name: 'Training & Certification', href: '/training' },
    { name: 'Community Forum', href: '/community' },
    { name: 'Support Tickets', href: '/support' }
  ];

  const socialLinks = [
    { name: 'Facebook', href: '#', icon: Facebook },
    { name: 'Twitter', href: '#', icon: Twitter },
    { name: 'LinkedIn', href: '#', icon: Linkedin },
    { name: 'Instagram', href: '#', icon: Instagram },
    { name: 'YouTube', href: '#', icon: Youtube },
    { name: 'GitHub', href: '#', icon: Github }
  ];

  return (
    <footer className="bg-slate-900/95 backdrop-blur-md border-t border-cyan-500/20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,255,255,0.05)_0%,transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.05)_0%,transparent_50%)]"></div>
      
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Brain className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Zion Tech Group</h3>
                  <p className="text-cyan-400 text-sm font-medium">AI & IT Solutions</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Leading provider of advanced AI and IT solutions. We transform businesses with cutting-edge technology, 
                delivering innovative solutions that drive growth and efficiency.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors duration-300">
                    +1 302 464 0950
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors duration-300">
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div className="flex items-start space-x-3 text-gray-300">
                  <MapPin className="w-4 h-4 text-cyan-400 mt-1" />
                  <span className="text-sm">
                    364 E Main St STE 1008<br />
                    Middletown, DE 19709
                  </span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Clock className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm">
                    Mon-Fri: 9AM-6PM EST<br />
                    24/7 Emergency Support
                  </span>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-6">
                <h4 className="text-white font-semibold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      className="w-10 h-10 bg-slate-800 hover:bg-cyan-500 rounded-lg flex items-center justify-center transition-all duration-300 group"
                      aria-label={social.name}
                    >
                      <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="lg:col-span-2">
              <h3 className="text-xl font-bold text-white mb-6">Our Services</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {serviceCategories.map((category) => (
                  <div key={category.title}>
                    <div className="flex items-center space-x-2 mb-4">
                      <category.icon className="w-5 h-5 text-cyan-400" />
                      <h4 className="text-lg font-semibold text-white">{category.title}</h4>
                    </div>
                    <ul className="space-y-2">
                      {category.services.map((service) => (
                        <li key={service.name}>
                          <Link
                            to={service.href}
                            className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm flex items-center group"
                          >
                            <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            {service.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Links & Support */}
            <div className="lg:col-span-1">
              <div className="grid grid-cols-1 gap-8">
                {/* Quick Links */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
                  <ul className="space-y-2">
                    {quickLinks.map((link) => (
                      <li key={link.name}>
                        <Link
                          to={link.href}
                          className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm flex items-center group"
                        >
                          <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Support Links */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Support</h4>
                  <ul className="space-y-2">
                    {supportLinks.map((link) => (
                      <li key={link.name}>
                        <Link
                          to={link.href}
                          className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm flex items-center group"
                        >
                          <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-cyan-500/20 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-500/20">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-2">Stay Updated</h3>
                <p className="text-gray-300 mb-6">
                  Get the latest news, updates, and insights about AI and IT solutions delivered to your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                  />
                  <button className="cyber-button-enhanced px-8 py-3">
                    Subscribe
                  </button>
                </div>
                <p className="text-xs text-gray-400 mt-4">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cyan-500/20 py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400 text-sm">
                © {currentYear} Zion Tech Group. All rights reserved.
              </div>
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <Link to="/privacy" className="hover:text-cyan-400 transition-colors duration-300">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="hover:text-cyan-400 transition-colors duration-300">
                  Terms of Service
                </Link>
                <Link to="/cookies" className="hover:text-cyan-400 transition-colors duration-300">
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default EnhancedFooter;