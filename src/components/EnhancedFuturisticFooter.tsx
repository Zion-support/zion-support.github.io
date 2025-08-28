import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Instagram,
  Youtube,
  Github,
  ArrowRight,
  Star,
  Shield,
  Zap,
  Brain,
  Rocket,
  Heart,
  Crown,
  Sparkles,
  Flame,
  Sun,
  Moon,
  Infinity,
  Cloud,
  Cpu,
  Users,
  Workflow,
  Atom,
  BarChart3,
  MessageCircle,
  HelpCircle,
  DollarSign,
  Gauge,
  ShoppingCart,
  BookOpen,
  Activity,
  Settings,
  Network,
  Server,
  Smartphone,
  Tablet,
  Laptop,
  Globe2,
  Wifi,
  Bluetooth,
  Radio,
  Target,
  Search,
  Calendar,
  Newspaper,
  Briefcase
} from 'lucide-react';

export const EnhancedFuturisticFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Featured Services',
      featured: true,
      links: [
        { name: 'AI Workflow Automation', href: '/services/ai-workflow-automation', featured: true, icon: Workflow },
        { name: 'AI Cybersecurity', href: '/services/ai-cybersecurity', featured: true, icon: Shield },
        { name: 'Quantum Computing', href: '/services/quantum-computing-solutions', featured: true, icon: Atom },
        { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence', icon: Brain },
        { name: 'IoT Edge Computing', href: '/services/iot-edge-computing', icon: Cpu },
        { name: 'Digital Twin Platform', href: '/services/digital-twin', icon: Rocket }
      ]
    },
    {
      title: 'AI & Analytics',
      links: [
        { name: 'AI Content Generator', href: '/services/ai-content-generator', icon: MessageCircle },
        { name: 'AI Customer Support', href: '/services/ai-customer-support', icon: Users },
        { name: 'AI Data Analytics', href: '/services/ai-data-analytics', icon: BarChart3 },
        { name: 'AI Marketing Automation', href: '/services/ai-marketing-automation', icon: Target },
        { name: 'AI Project Manager', href: '/services/ai-project-manager', icon: Settings },
        { name: 'AI SEO Optimizer', href: '/services/ai-seo', icon: Search }
      ]
    },
    {
      title: 'Micro SaaS Solutions',
      links: [
        { name: 'Micro CRM', href: '/services/micro-crm', icon: Users },
        { name: 'Website Analytics', href: '/services/website-analytics', icon: Gauge },
        { name: 'IT Helpdesk', href: '/services/it-helpdesk', icon: HelpCircle },
        { name: 'Affiliate Tracking', href: '/services/affiliate-tracking', icon: ShoppingCart },
        { name: 'Returns Management', href: '/services/returns-management', icon: ShoppingCart },
        { name: 'Email Sequencer', href: '/services/email-sequencer', icon: MessageCircle }
      ]
    },
    {
      title: 'Enterprise Solutions',
      links: [
        { name: 'Cloud & DevOps', href: '/services/cloud-devops', icon: Cloud },
        { name: 'IT Infrastructure', href: '/services/it-infrastructure', icon: Server },
        { name: 'Data Analytics', href: '/services/data-analytics', icon: BarChart3 },
        { name: 'Green IT Solutions', href: '/services/green-it', icon: Globe },
        { name: 'Compliance Assistant', href: '/services/ai-compliance-assistant', icon: Shield },
        { name: 'FinOps Advisor', href: '/services/finops-advisor', icon: DollarSign }
      ]
    }
  ];

  const quickLinks = [
    { name: 'Marketplace', href: '/marketplace', icon: ShoppingCart },
    { name: 'Blog', href: '/blog', icon: BookOpen },
    { name: 'Case Studies', href: '/case-studies', icon: Activity },
    { name: 'Research & Development', href: '/research-development', icon: Rocket },
    { name: 'Events', href: '/events', icon: Calendar },
    { name: 'News', href: '/news', icon: Newspaper },
    { name: 'Pricing', href: '/pricing', icon: DollarSign },
    { name: 'Partners', href: '/partners', icon: Users },
    { name: 'Careers', href: '/careers', icon: Briefcase },
    { name: 'Help Center', href: '/help', icon: HelpCircle },
    { name: 'Documentation', href: '/documentation', icon: BookOpen },
    { name: 'Status', href: '/status', icon: Activity }
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin, color: 'hover:text-blue-400' },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter, color: 'hover:text-blue-400' },
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook, color: 'hover:text-blue-400' },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram, color: 'hover:text-pink-400' },
    { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: Youtube, color: 'hover:text-red-400' },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github, color: 'hover:text-gray-400' }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 border-t border-slate-700/50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-indigo-600/5 animate-pulse"></div>
        <motion.div 
          className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.6, 0.3, 0.6] }}
          transition={{ duration: 4, repeat: Infinity, delay: 2 }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl blur opacity-75"></div>
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Zion Tech Group
                </h3>
                <p className="text-sm text-gray-400">Innovation • Intelligence • Impact</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 max-w-md">
              Leading technology solutions provider specializing in AI, cybersecurity, cloud infrastructure, 
              and digital transformation services. Transforming businesses with cutting-edge technology.
            </p>

            {/* Contact Information */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-200">
                <Phone className="w-4 h-4 text-blue-400" />
                <a href={`tel:${contactInfo.phone}`} className="hover:text-blue-400 transition-colors duration-200">
                  {contactInfo.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-200">
                <Mail className="w-4 h-4 text-blue-400" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-blue-400 transition-colors duration-200">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span>{contactInfo.address}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-200">
                <Globe className="w-4 h-4 text-blue-400" />
                <a href={contactInfo.website} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors duration-200">
                  {contactInfo.website}
                </a>
              </div>
            </div>
          </div>

          {/* Service Sections */}
          {footerSections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h4 className="text-lg font-semibold text-white flex items-center">
                {section.title}
                {section.featured && (
                  <Star className="w-4 h-4 text-yellow-400 ml-2" />
                )}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.href}
                      className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200 group"
                    >
                      <link.icon className="w-4 h-4 text-gray-500 group-hover:text-blue-400 transition-colors duration-200" />
                      <span className="text-sm">{link.name}</span>
                      {link.featured && (
                        <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-xs font-medium bg-gradient-to-r from-yellow-400 to-orange-500 text-black">
                          Featured
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Quick Links Section */}
        <div className="border-t border-slate-700/50 pt-8 mb-8">
          <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {quickLinks.map((link, index) => (
              <Link
                key={index}
                to={link.href}
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200 group"
              >
                <link.icon className="w-4 h-4 text-gray-500 group-hover:text-blue-400 transition-colors duration-200" />
                <span className="text-sm">{link.name}</span>
              </Link>
            ))}
          </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-700/50 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 text-gray-400 ${social.color} transition-colors duration-200 hover:scale-110`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white transition-colors duration-200">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-white transition-colors duration-200">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 p-6 bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-xl">
          <div className="text-center">
            <h4 className="text-xl font-semibold text-white mb-2">Stay Updated</h4>
            <p className="text-gray-300 mb-4">Get the latest insights on AI, cybersecurity, and technology trends.</p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center"
              >
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}