import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
<<<<<<< HEAD
  Zap, Mail, Phone, MapPin, Globe, 
  Twitter, Linkedin, Facebook, Instagram, 
  Youtube, Github, ArrowRight, Star,
  Shield, Rocket, Brain, Atom, DollarSign,
  Users, FileText, HelpCircle, Settings,
  TrendingUp, Award, CheckCircle, Clock,
  Globe as GlobeIcon, Cpu, Database, Lock,
  Sparkles, Crown, Infinity, Target, Eye,
  MessageCircle, Calendar, ExternalLink,
  Building, Code
=======
  Rocket, Brain, Atom, Zap, Sparkles, Shield, 
  Phone, Mail, MapPin, Globe, ArrowRight,
  Linkedin, Twitter, Facebook, Instagram, Youtube, Github,
  CheckCircle, Award, Star, Crown, Gem, Infinity,
  Heart, ShieldCheck, Users, Briefcase, BookOpen,
  Target, Microscope, Cpu, Database, Cloud, Lock,
  Home, Building, DollarSign, FileText, MessageSquare, MessageCircle, Newspaper, Handshake, LifeBuoy, Activity,
  ShoppingCart, UserCheck, BarChart, Palette, Video, LockIcon, GlobeIcon, CpuIcon
>>>>>>> autobot/2025-08-24T03-49-38-332Z
} from 'lucide-react';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const serviceCategories = [
  {
<<<<<<< HEAD
    title: '🧠 AI & Consciousness',
    icon: <Brain className="w-5 h-5 text-cyan-400" />,
    services: [
      { name: 'AI Consciousness Evolution Pro', href: '/ai-consciousness-evolution-pro', isNew: true },
      { name: 'Quantum AI Fusion Platform', href: '/quantum-ai-fusion-platform', isHot: true },
      { name: 'AI Autonomous Ecosystem', href: '/ai-autonomous-ecosystem' },
      { name: 'AI Ethics & Governance', href: '/ai-ethics-governance' },
      { name: 'AI Creativity Studio Pro', href: '/ai-creativity-studio-pro', isNew: true }
=======
    title: '🧠 Revolutionary AI Services',
    icon: Brain,
    services: [
      { name: 'AI Business Intelligence Pro', href: '/ai-business-intelligence-pro', price: '$299/month' },
      { name: 'AI Video Generation Platform', href: '/ai-video-generation-platform', price: '$499/month' },
      { name: 'AI-Powered Cybersecurity', href: '/ai-cybersecurity-platform', price: '$799/month' },
      { name: 'AI Drug Discovery Platform', href: '/ai-drug-discovery-platform', price: '$3,999/month' }
>>>>>>> autobot/2025-08-24T03-49-38-332Z
    ]
  },
  {
    title: '⚛️ Quantum & Emerging Tech',
    icon: Atom,
    services: [
      { name: 'Quantum Machine Learning', href: '/quantum-machine-learning-platform', price: '$1,999/month' },
      { name: 'Blockchain AI Platform', href: '/blockchain-ai-platform', price: '$899/month' },
      { name: 'Edge AI Computing', href: '/edge-ai-computing-platform', price: '$599/month' },
      { name: 'AI Climate Modeling', href: '/ai-climate-modeling-platform', price: '$1,299/month' }
    ]
  },
  {
    title: '🏙️ Enterprise IT Solutions',
    icon: Cpu,
    services: [
      { name: 'API Security & Monitoring', href: '/api-security-monitoring-suite', price: '$399/month' },
      { name: 'Customer Success Automation', href: '/customer-success-automation', price: '$199/month' },
      { name: 'HR Automation Suite', href: '/hr-automation-suite', price: '$179/month' },
      { name: 'Project Management AI', href: '/project-management-ai-platform', price: '$199/month' }
    ]
  },
  {
    title: '🛒 Business Automation',
    icon: ShoppingCart,
    services: [
<<<<<<< HEAD
      { name: 'AI Content Factory Enterprise', href: '/ai-content-factory-enterprise', isNew: true },
      { name: 'Quantum CRM Suite Enterprise', href: '/quantum-crm-suite-enterprise', isHot: true },
      { name: 'AI Autonomous Decision Engine', href: '/ai-autonomous-decision-engine', isNew: true },
      { name: 'AI Legal Contract Analyzer', href: '/ai-legal-contract-analyzer', isNew: true },
      { name: 'AI Healthcare Diagnostics Pro', href: '/ai-healthcare-diagnostics-pro', isPremium: true }
=======
      { name: 'E-commerce Automation', href: '/ecommerce-automation-platform', price: '$249/month' },
      { name: 'Marketing Automation Suite', href: '/marketing-automation-suite', price: '$279/month' },
      { name: 'Financial Analytics Platform', href: '/financial-analytics-platform', price: '$349/month' },
      { name: 'Legal Document Automation', href: '/legal-document-automation', price: '$399/month' }
>>>>>>> autobot/2025-08-24T03-49-38-332Z
    ]
  }
];

const quickLinks = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Services', href: '/services', icon: Briefcase },
  { name: 'Solutions', href: '/solutions', icon: Target },
  { name: 'Pricing', href: '/pricing-2034', icon: DollarSign },
  { name: 'Resources', href: '/resources', icon: BookOpen },
  { name: 'Case Studies', href: '/case-studies', icon: FileText },
  { name: 'Blog', href: '/blog', icon: MessageSquare },
  { name: 'Contact', href: '/contact', icon: MessageCircle }
];

const companyLinks = [
<<<<<<< HEAD
  { name: 'About Us', href: '/about', description: 'Our mission and vision', icon: <Users className="w-4 h-4" /> },
  { name: 'Careers', href: '/careers', description: 'Join our team', icon: <Award className="w-4 h-4" /> },
  { name: 'News & Updates', href: '/news', description: 'Latest company news', icon: <FileText className="w-4 h-4" /> },
  { name: 'Case Studies', href: '/case-studies', description: 'Success stories', icon: <TrendingUp className="w-4 h-4" /> },
  { name: 'Resources', href: '/resources', description: 'Whitepapers and guides', icon: <HelpCircle className="w-4 h-4" /> },
  { name: 'Blog', href: '/blog', description: 'Industry insights', icon: <FileText className="w-4 h-4" /> }
];

const supportLinks = [
  { name: 'Contact Support', href: '/support', description: 'Get help from our team', icon: <MessageCircle className="w-4 h-4" /> },
  { name: 'Documentation', href: '/docs', description: 'Technical guides', icon: <FileText className="w-4 h-4" /> },
  { name: 'API Reference', href: '/api-docs', description: 'Developer documentation', icon: <Code className="w-4 h-4" /> },
  { name: 'Status Page', href: '/status', description: 'Service status and uptime', icon: <Eye className="w-4 h-4" /> },
  { name: 'Training', href: '/training', description: 'Learn to use our platforms', icon: <Users className="w-4 h-4" /> },
  { name: 'Community', href: '/community', description: 'Connect with other users', icon: <Globe className="w-4 h-4" /> }
];

const socialLinks = [
  { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: <Twitter className="w-5 h-5" />, color: 'hover:text-blue-400' },
  { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: <Linkedin className="w-5 h-5" />, color: 'hover:text-blue-600' },
  { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: <Facebook className="w-5 h-5" />, color: 'hover:text-blue-500' },
  { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: <Instagram className="w-5 h-5" />, color: 'hover:text-pink-500' },
  { name: 'YouTube', href: 'https://youtube.com/ziontechgroup', icon: <Youtube className="w-5 h-5" />, color: 'hover:text-red-500' },
  { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: <Github className="w-5 h-5" />, color: 'hover:text-gray-400' }
];

const quickActions = [
  { name: 'Get Quote', href: '/contact', icon: <DollarSign className="w-4 h-4" />, color: 'from-green-500 to-emerald-600' },
  { name: 'Book Demo', href: '/contact', icon: <Calendar className="w-4 h-4" />, color: 'from-blue-500 to-cyan-600' },
  { name: 'Live Chat', href: '/contact', icon: <MessageCircle className="w-4 h-4" />, color: 'from-purple-500 to-pink-600' }
=======
  { name: 'About Us', href: '/about', icon: Users },
  { name: 'Careers', href: '/careers', icon: Briefcase },
  { name: 'News', href: '/news', icon: Newspaper },
  { name: 'Partners', href: '/partners', icon: Handshake },
  { name: 'Support', href: '/support', icon: LifeBuoy },
  { name: 'Status', href: '/status', icon: Activity }
];

const socialLinks = [
  { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
  { name: 'GitHub', href: 'https://github.com/Zion-Holdings', icon: Github },
  { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram },
  { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: Youtube },
  { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter }
];

const certifications = [
  'ISO 27001 Certified',
  'SOC 2 Type II Compliant',
  'GDPR Compliant',
  'HIPAA Compliant',
  'PCI DSS Level 1',
  'FedRAMP Authorized',
  'Quantum Security Certified',
  'AI Ethics Compliant'
>>>>>>> autobot/2025-08-24T03-49-38-332Z
];

const stats = [
  { label: 'Happy Customers', value: '50K+', icon: Users },
  { label: 'Services Delivered', value: '200+', icon: Rocket },
  { label: 'Countries Served', value: '45+', icon: Globe },
  { label: 'Success Rate', value: '99.9%', icon: CheckCircle }
];

export default function UltraFuturisticFooter2034() {
  return (
<<<<<<< HEAD
    <footer className="bg-black/95 backdrop-blur-xl border-t border-cyan-500/20 relative overflow-hidden">
      {/* Futuristic Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-cyan-500/5 to-purple-500/5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,255,255,0.03),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.03),transparent_50%)]" />
=======
    <footer className="bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-green-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
>>>>>>> autobot/2025-08-24T03-49-38-332Z
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
<<<<<<< HEAD
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    Zion Tech Group
                  </h3>
                  <p className="text-sm text-gray-400">Future Technology Solutions</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
                Pioneering the future of autonomous technology and AI-driven innovation. 
                We deliver cutting-edge solutions that transform businesses and accelerate growth.
              </p>

              {/* Contact Information */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <a href={`tel:${contactInfo.mobile}`} className="hover:text-cyan-400 transition-colors">
                    {contactInfo.mobile}
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <a href={`mailto:${contactInfo.email}`} className="hover:text-cyan-400 transition-colors">
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span>{contactInfo.address}</span>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="flex flex-wrap gap-3">
                {quickActions.map((action) => (
                  <Link
                    key={action.name}
                    href={action.href}
                    className={`px-4 py-2 rounded-lg text-sm font-medium bg-gradient-to-r ${action.color} text-white hover:scale-105 transition-all duration-200 flex items-center space-x-2`}
                  >
                    {action.icon}
                    <span>{action.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Service Categories */}
            {serviceCategories.map((category) => (
              <div key={category.title} className="space-y-4">
                <div className="flex items-center space-x-2 mb-4">
                  {category.icon}
                  <h4 className="text-lg font-semibold text-white">{category.title.replace(/^[^\s]+ /, '')}</h4>
                </div>
                <div className="space-y-2">
                  {category.services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-800/50 transition-colors duration-200 group"
=======
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                      <Rocket className="w-7 h-7 text-white" />
                    </div>
                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-xl blur opacity-30"></div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                      Zion Tech Group
                    </h3>
                    <p className="text-sm text-gray-400">Future Technology Solutions</p>
                  </div>
                </div>
                
                <p className="text-gray-300 leading-relaxed">
                  Leading provider of cutting-edge AI, quantum computing, and emerging technology solutions. 
                  Empowering businesses with innovative tools for the future.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="text-center p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10"
>>>>>>> autobot/2025-08-24T03-49-38-332Z
                    >
                      <stat.icon className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                      <div className="text-lg font-bold text-white">{stat.value}</div>
                      <div className="text-xs text-gray-400">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>

<<<<<<< HEAD
          {/* Additional Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 pt-8 border-t border-gray-800/50">
            {/* Company Links */}
            <div className="space-y-4">
              <h5 className="text-lg font-semibold text-white flex items-center space-x-2">
                <Building className="w-5 h-5 text-cyan-400" />
                <span>Company</span>
              </h5>
              <div className="space-y-2">
                {companyLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-800/50 transition-colors duration-200 group"
                  >
                    {link.icon}
                    <div>
                      <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                        {link.name}
                      </span>
                      <p className="text-xs text-gray-500">{link.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Support Links */}
            <div className="space-y-4">
              <h5 className="text-lg font-semibold text-white flex items-center space-x-2">
                <HelpCircle className="w-5 h-5 text-purple-400" />
                <span>Support</span>
              </h5>
              <div className="space-y-2">
                {supportLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-800/50 transition-colors duration-200 group"
                  >
                    {link.icon}
                    <div>
                      <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                        {link.name}
                      </span>
                      <p className="text-xs text-gray-500">{link.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Social Links & Newsletter */}
            <div className="space-y-4">
              <h5 className="text-lg font-semibold text-white flex items-center space-x-2">
                <Globe className="w-5 h-5 text-green-400" />
                <span>Connect</span>
              </h5>
              
              {/* Social Links */}
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-gray-800/50 rounded-lg flex items-center justify-center text-gray-400 border border-gray-700/50 hover:border-cyan-500/50 hover:scale-110 transition-all duration-200 ${social.color}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
=======
                {/* Contact Info */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors">
                    <Phone className="w-4 h-4" />
                    <span>{contactInfo.mobile}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors">
                    <Mail className="w-4 h-4" />
                    <span>{contactInfo.email}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300 hover:text-purple-400 transition-colors">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{contactInfo.address}</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Services */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <h3 className="text-xl font-bold text-white mb-6">Our Services</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {serviceCategories.map((category, index) => (
                    <motion.div
                      key={category.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="space-y-4"
                    >
                      <div className="flex items-center space-x-2">
                        <category.icon className="w-5 h-5 text-cyan-400" />
                        <h4 className="font-semibold text-white">{category.title}</h4>
                      </div>
                      <div className="space-y-2">
                        {category.services.map((service) => (
                          <Link
                            key={service.name}
                            href={service.href}
                            className="flex items-center justify-between group hover:bg-white/5 rounded-lg p-2 transition-all duration-200"
                          >
                            <span className="text-gray-300 group-hover:text-cyan-400 transition-colors text-sm">
                              {service.name}
                            </span>
                            <span className="text-xs text-gray-500 group-hover:text-cyan-400 transition-colors">
                              {service.price}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
>>>>>>> autobot/2025-08-24T03-49-38-332Z

            {/* Quick Links & Social */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                {/* Quick Links */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
                  <div className="space-y-2">
                    {quickLinks.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors group"
                      >
                        <link.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                        <span className="text-sm">{link.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
<<<<<<< HEAD
              </div>
            </div>
          </div>
=======

                {/* Company Links */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
                  <div className="space-y-2">
                    {companyLinks.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors group"
                      >
                        <link.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                        <span className="text-sm">{link.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
                  <div className="flex space-x-4">
                    {socialLinks.map((social) => (
                      <Link
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center text-white hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 hover:scale-110"
                      >
                        <social.icon className="w-5 h-5" />
                      </Link>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 pt-8 border-t border-white/10"
          >
            <h4 className="text-lg font-semibold text-white mb-6 text-center">Certifications & Compliance</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-center p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-200"
                >
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  <span className="text-xs text-gray-300 text-center">{cert}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
>>>>>>> autobot/2025-08-24T03-49-38-332Z
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 bg-black/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <span>&copy; 2024 Zion Tech Group. All rights reserved.</span>
                <Link href="/privacy" className="hover:text-cyan-400 transition-colors">Privacy Policy</Link>
                <Link href="/terms" className="hover:text-cyan-400 transition-colors">Terms of Service</Link>
              </div>
              
              <div className="flex items-center space-x-2 text-gray-400">
                <Heart className="w-4 h-4 text-red-400" />
                <span className="text-sm">Made with ❤️ for the future</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}