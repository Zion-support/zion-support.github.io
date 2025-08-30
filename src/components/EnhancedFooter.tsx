import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
<<<<<<< HEAD
import {
  Zap,
  Brain,
  Shield,
  Cloud,
  Rocket,
  Globe,
  Cpu,
  Lock,
  Heart,
  Users,
  ShoppingCart,
  BookOpen,
  MessageCircle,
  HelpCircle,
  DollarSign,
  Gauge,
  Workflow,
  Atom,
  Star,
  Target,
  TrendingUp,
  Award,
  Code,
  Truck,
  Building,
  BarChart3,
  PenTool,
  Eye,
  Server,
  Smartphone,
  Database,
  Network,
  Clock,
  ArrowRight,
  PanelLeft,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Satellite,
  FileText,
  Linkedin,
  Twitter,
  Github,
  Facebook,
  Instagram,
  Youtube,
  ExternalLink,
  Users
=======
import { 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Instagram,
  Github,
  Youtube,
  ArrowRight,
  Star,
  Shield,
  Zap,
  Brain,
  Cloud,
  Users,
  Award,
  TrendingUp,
  Lightbulb,
  Rocket,
  Target,
  CheckCircle,
  Heart,
  MessageCircle,
  HelpCircle,
  BookOpen,
  ShoppingCart,
  Cpu,
  Database,
  Network,
  Lock,
  BarChart3,
  Code,
  Server,
  Smartphone,
  Chip,
  Wifi,
  ShieldCheck,
  Globe2,
  Bot,
  Workflow,
  Eye,
  Sparkles
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
} from 'lucide-react';
export function EnhancedFooter() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
<<<<<<< HEAD
      title: 'Core Services',
      links: [
        { name: 'AI & Machine Learning', href: '/ai-services', icon: Brain },
        { name: 'IT Services', href: '/it-services', icon: Server },
        { name: 'Micro SaaS', href: '/micro-saas', icon: Rocket },
        { name: 'Cloud & DevOps', href: '/services/cloud-devops', icon: Cloud },
        { name: 'Cybersecurity', href: '/services/ai-cybersecurity-platform', icon: Shield },
        { name: 'Digital Transformation', href: '/services/digital-transformation', icon: TrendingUp }
      ]
    },
    {
      title: 'AI Solutions',
      links: [
        { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence', icon: Brain },
        { name: 'AI Content Creation', href: '/services/ai-content-marketing-suite', icon: PenTool },
        { name: 'AI Project Management', href: '/services/ai-project-management', icon: Workflow },
        { name: 'AI Financial Analytics', href: '/services/ai-financial-analytics', icon: DollarSign },
        { name: 'AI Healthcare Platform', href: '/services/ai-healthcare-platform', icon: Heart },
        { name: 'AI Sales Copilot', href: '/services/ai-sales-copilot', icon: TrendingUp }
      ]
    },
    {
      title: 'Industry Solutions',
      links: [
        { name: 'Enterprise Solutions', href: '/solutions/enterprise', icon: Building },
        { name: 'Healthcare Solutions', href: '/solutions/healthcare', icon: Heart },
        { name: 'Financial Services', href: '/solutions/financial', icon: DollarSign },
        { name: 'Manufacturing', href: '/solutions/manufacturing', icon: Truck },
        { name: 'Government', href: '/solutions/government', icon: Building },
        { name: 'Education', href: '/solutions/education', icon: BookOpen }
=======
      title: "Services",
      links: [
        { name: "AI Services", href: "/ai-services", icon: Brain },
        { name: "IT Services", href: "/it-services", icon: Cpu },
        { name: "Micro SaaS", href: "/micro-saas", icon: ShoppingCart },
        { name: "2025 Services", href: "/comprehensive-services-showcase-2025", icon: Star },
        { name: "2026 Services", href: "/services2026", icon: TrendingUp },
        { name: "2027 Services", href: "/services2027", icon: Rocket },
        { name: "2029 Services", href: "/innovative-services-showcase-2029", icon: Sparkles },
      ]
    },
    {
      title: "Solutions",
      links: [
        { name: "Enterprise", href: "/solutions/enterprise", icon: Building },
        { name: "Healthcare", href: "/solutions/healthcare", icon: Heart },
        { name: "Finance", href: "/solutions/finance", icon: DollarSign },
        { name: "Manufacturing", href: "/solutions/manufacturing", icon: Factory },
        { name: "Retail", href: "/solutions/retail", icon: ShoppingBag },
        { name: "Education", href: "/solutions/education", icon: GraduationCap },
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
      ]
    },
    {
      title: "Company",
      links: [
<<<<<<< HEAD
        { name: 'About Us', href: '/about', icon: Users },
        { name: 'Our Team', href: '/team', icon: Award },
        { name: 'Careers', href: '/careers', icon: Workflow },
        { name: 'Partners', href: '/partners', icon: Users },
        { name: 'News & Updates', href: '/news', icon: FileText },
        { name: 'Case Studies', href: '/case-studies', icon: BarChart3 }
=======
        { name: "About Us", href: "/about", icon: Users },
        { name: "Our Team", href: "/team", icon: Users },
        { name: "Careers", href: "/careers", icon: Star },
        { name: "Partners", href: "/partners", icon: Handshake },
        { name: "News", href: "/news", icon: Newspaper },
        { name: "Blog", href: "/blog", icon: BookOpen },
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
      ]
<<<<<<< HEAD
    },
    {
      title: "Resources",
      links: [
<<<<<<< HEAD
        { name: 'Documentation', href: '/documentation', icon: FileText },
        { name: 'API Reference', href: '/api', icon: Code },
        { name: 'Developer Portal', href: '/developer-portal', icon: Cpu },
        { name: 'Help Center', href: '/help', icon: HelpCircle },
        { name: 'FAQ', href: '/faq', icon: MessageCircle },
        { name: 'Training', href: '/training', icon: BookOpen },
        { name: 'Webinars', href: '/webinars', icon: Users },
        { name: 'White Papers', href: '/white-papers', icon: FileText },
        { name: 'Blog', href: '/blog', icon: PenTool }
=======
        { name: "Documentation", href: "/docs", icon: FileText },
        { name: "API Reference", href: "/api", icon: Code },
        { name: "Developer Portal", href: "/developers", icon: Terminal },
        { name: "White Papers", href: "/white-papers", icon: FileText },
        { name: "Webinars", href: "/webinars", icon: Video },
        { name: "Training", href: "/training", icon: GraduationCap },
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", href: "/help", icon: HelpCircle },
        { name: "Contact Support", href: "/contact", icon: MessageCircle },
        { name: "Status Page", href: "/status", icon: Activity },
        { name: "Request Quote", href: "/request-quote", icon: DollarSign },
        { name: "FAQ", href: "/faq", icon: HelpCircle },
        { name: "Live Chat", href: "/chat", icon: MessageCircle },
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
      ]

=======
    }
>>>>>>> cursor/enhance-pm2-automations-for-app-development-aca0
  ];

  const quickLinks = [
    { name: 'Innovative Services 2025', href: '/innovative-services-2025', badge: 'New' },
    { name: 'Comprehensive Pricing Guide', href: '/comprehensive-pricing-guide-2025', badge: 'Featured' },
    { name: 'Request Quote', href: '/request-quote', badge: 'Get Started' },
    { name: 'Schedule Demo', href: '/schedule-demo', badge: 'Free' },
    { name: 'Support Center', href: '/help', badge: '24/7' },
    { name: 'Developer Portal', href: '/developers', badge: 'API' }
  ];

  const socialLinks = [
<<<<<<< HEAD
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin, color: 'hover:text-blue-500' },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter, color: 'hover:text-blue-400' },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github, color: 'hover:text-gray-400' },
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook, color: 'hover:text-blue-600' },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram, color: 'hover:text-pink-500' },
    { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: Youtube, color: 'hover:text-red-500' }
  ];

  return (
<<<<<<< HEAD
    <footer className="bg-black/95 backdrop-blur-xl border-t border-cyan-500/30 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900 opacity-50"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,212,255,0.1)_0%,transparent_50%)]"></div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/50">
                  <Zap className="w-7 h-7 text-white" />
=======
    { name: "LinkedIn", href: "https://linkedin.com/company/ziontechgroup", icon: Linkedin, color: "hover:text-blue-400" },
    { name: "Twitter", href: "https://twitter.com/ziontechgroup", icon: Twitter, color: "hover:text-blue-400" },
    { name: "Facebook", href: "https://facebook.com/ziontechgroup", icon: Facebook, color: "hover:text-blue-600" },
    { name: "Instagram", href: "https://instagram.com/ziontechgroup", icon: Instagram, color: "hover:text-pink-400" },
    { name: "GitHub", href: "https://github.com/ziontechgroup", icon: Github, color: "hover:text-gray-400" },
    { name: "YouTube", href: "https://youtube.com/@ziontechgroup", icon: Youtube, color: "hover:text-red-400" },
  ];

  const contactInfo = {
    phone: "+1 302 464 0950",
    email: "kleber@ziontechgroup.com",
    address: "364 E Main St STE 1008 Middletown DE 19709",
    website: "https://ziontechgroup.com"
  };

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-t border-slate-700/50 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-green-500/5 to-teal-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Company info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mr-4">
                  <Zap className="w-6 h-6 text-white" />
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Zion Tech Group</h3>
                  <p className="text-cyan-400 text-sm font-semibold">Future of Technology</p>
                </div>
              </div>
<<<<<<< HEAD

              <p className="text-gray-300 mb-6 leading-relaxed">
                Leading the future of technology with cutting-edge AI, quantum computing, and innovative solutions that transform businesses and drive digital transformation.
              </p>

              {/* Contact Information */}
=======
              
              <p className="text-slate-300 mb-6 leading-relaxed">
                Leading provider of cutting-edge AI, quantum computing, and emerging technology solutions. 
                Transforming businesses through intelligent automation and revolutionary innovations.
              </p>
              
              {/* Contact info */}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
              <div className="space-y-3">
                <div className="flex items-center text-slate-300 hover:text-cyan-400 transition-colors duration-300">
                  <Phone className="w-4 h-4 mr-3 text-cyan-400" />
                  <a href={`tel:${contactInfo.phone}`} className="hover:text-cyan-400">
                    {contactInfo.phone}
                  </a>
                </div>
                <div className="flex items-center text-slate-300 hover:text-cyan-400 transition-colors duration-300">
                  <Mail className="w-4 h-4 mr-3 text-cyan-400" />
                  <a href={`mailto:${contactInfo.email}`} className="hover:text-cyan-400">
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-start text-slate-300">
                  <MapPin className="w-4 h-4 mr-3 text-cyan-400 mt-1 flex-shrink-0" />
                  <span className="text-sm leading-relaxed">{contactInfo.address}</span>
                </div>
              </div>
<<<<<<< HEAD
            </div>

            {/* Footer Sections */}
            {footerSections.map((section) => (
              <div key={section.title}>
                <h4 className="text-lg font-semibold text-cyan-400 mb-4 font-rajdhani uppercase tracking-wider">
                  {section.title}
                </h4>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors group"

                        <link.icon className="w-3 h-3 text-cyan-400 group-hover:scale-110 transition-transform" />
                        <span className="text-sm">{link.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
=======
    <footer className="bg-zion-slate-dark border-t border-zion-slate-light/20">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="xl:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-zion-blue to-zion-blue-light p-3">
                <Zap className="w-full h-full text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Zion Tech Group</h3>
                <p className="text-zion-blue-light text-sm">Innovation & Technology</p>
              </div>
            </div>
            
            <p className="text-zion-blue-light mb-6 max-w-md">
              Leading provider of cutting-edge AI solutions, micro SAAS platforms, and revolutionary IT services. 
              Transforming businesses through innovation and technology excellence.
            </p>

            {/* Contact Information */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-zion-blue-light hover:text-white transition-colors duration-300">
                <Phone className="w-4 h-4 text-zion-blue" />
                <a href="tel:+13024640950" className="text-sm">+1 302 464 0950</a>
              </div>
              <div className="flex items-center space-x-3 text-zion-blue-light hover:text-white transition-colors duration-300">
                <Mail className="w-4 h-4 text-zion-blue" />
                <a href="mailto:kleber@ziontechgroup.com" className="text-sm">kleber@ziontechgroup.com</a>
              </div>
              <div className="flex items-start space-x-3 text-zion-blue-light">
                <MapPin className="w-4 h-4 text-zion-blue mt-0.5 flex-shrink-0" />
                <address className="text-sm not-italic">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </address>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-lg bg-zion-slate flex items-center justify-center text-zion-blue-light ${social.color} transition-all duration-300 hover:bg-zion-slate-light`}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Service Categories */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                <section.icon className="w-5 h-5 text-zion-blue mr-2" />
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-zion-blue-light hover:text-white transition-colors duration-300 text-sm flex items-center group"
                    >
                      <link.icon className="w-3 h-3 mr-2 text-zion-blue group-hover:text-zion-blue-light transition-colors duration-300" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Quick Links Section */}
        <div className="mt-12 pt-8 border-t border-zion-slate-light/20">
          <h4 className="text-lg font-semibold text-white mb-6 text-center">Quick Access</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {quickLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="group p-4 rounded-xl bg-zion-slate/30 hover:bg-zion-slate-light/30 transition-all duration-300 border border-zion-slate-light/20 hover:border-zion-blue/50 text-center"
              >
                <div className="mb-2">
                  <span className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${
                    link.badge === 'New' ? 'bg-green-500 text-white' :
                    link.badge === 'Featured' ? 'bg-purple-500 text-white' :
                    link.badge === 'Get Started' ? 'bg-blue-500 text-white' :
                    link.badge === 'Free' ? 'bg-green-500 text-white' :
                    link.badge === '24/7' ? 'bg-orange-500 text-white' :
                    'bg-zion-blue text-white'
                  }`}>
                    {link.badge}
                  </span>
                </div>
                <h5 className="text-sm font-medium text-white group-hover:text-zion-blue-light transition-colors duration-300">
                  {link.name}
                </h5>
              </Link>
>>>>>>> cursor/enhance-pm2-automations-for-app-development-aca0
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-zion-slate py-12 border-t border-zion-slate-light/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-2xl font-bold text-white mb-4"
            >
              Stay Updated with Innovation
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-zion-blue-light mb-6"
            >
              Get the latest insights on AI, emerging technologies, and industry trends delivered to your inbox.
            </motion.p>
            
            <motion.form 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-zion-slate-dark text-white placeholder-zion-blue-light rounded-lg border border-zion-slate-light/30 focus:border-zion-blue focus:outline-none focus:ring-2 focus:ring-zion-blue/20"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-zion-blue hover:bg-zion-blue-light text-white rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center"
              >
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </motion.form>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-zion-slate-dark/80 py-6 border-t border-zion-slate-light/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <div className="text-zion-blue-light text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6 text-sm">
              <Link to="/privacy" className="text-zion-blue-light hover:text-white transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-zion-blue-light hover:text-white transition-colors duration-300">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-zion-blue-light hover:text-white transition-colors duration-300">
                Cookie Policy
              </Link>
              <Link to="/sitemap" className="text-zion-blue-light hover:text-white transition-colors duration-300">
                Sitemap
              </Link>
            </div>

            {/* Back to Top */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center space-x-2 text-zion-blue-light hover:text-white transition-colors duration-300 text-sm"
            >
              <span>Back to Top</span>
              <ArrowRight className="w-4 h-4 rotate-[-90deg]" />
            </button>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="bg-zion-slate-dark/60 py-4 border-t border-zion-slate-light/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-zion-blue-light/60">
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4" />
              <span>ISO 27001 Certified</span>
            </div>
            <div className="flex items-center space-x-2">
              <Lock className="w-4 h-4" />
              <span>SOC 2 Type II Compliant</span>
            </div>
            <div className="flex items-center space-x-2">
              <Globe className="w-4 h-4" />
              <span>GDPR Compliant</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="w-4 h-4" />
              <span>Microsoft Gold Partner</span>
            </div>
            <div className="flex items-center space-x-2">
              <Cloud className="w-4 h-4" />
              <span>AWS Advanced Partner</span>
=======
            </motion.div>
          </div>

          {/* Footer sections */}
          {footerSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                {section.title === "Services" && <Brain className="w-5 h-5 mr-2 text-cyan-400" />}
                {section.title === "Solutions" && <Target className="w-5 h-5 mr-2 text-blue-400" />}
                {section.title === "Company" && <Users className="w-5 h-5 mr-2 text-purple-400" />}
                {section.title === "Resources" && <BookOpen className="w-5 h-5 mr-2 text-green-400" />}
                {section.title === "Support" && <HelpCircle className="w-5 h-5 mr-2 text-pink-400" />}
                {section.title}
              </h4>
              
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: (sectionIndex * 0.1) + (linkIndex * 0.05) }}
                    viewport={{ once: true }}
                  >
                    <Link
                      to={link.href}
                      className="flex items-center text-slate-300 hover:text-cyan-400 transition-all duration-300 group"
                    >
                      <link.icon className="w-4 h-4 mr-2 text-slate-500 group-hover:text-cyan-400 transition-colors duration-300" />
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {link.name}
                      </span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="border-t border-slate-700/50 pt-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Copyright and legal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <p className="text-slate-400 text-sm">
                © {currentYear} Zion Tech Group. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-2">
                <Link to="/privacy" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors duration-300">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors duration-300">
                  Terms of Service
                </Link>
                <Link to="/cookies" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors duration-300">
                  Cookie Policy
                </Link>
                <Link to="/accessibility" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors duration-300">
                  Accessibility
                </Link>
              </div>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex items-center space-x-4"
            >
              <span className="text-slate-400 text-sm mr-2">Follow us:</span>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.3 + (index * 0.1) }}
                  viewport={{ once: true }}
                  className={`w-10 h-10 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-600/50 hover:border-cyan-500/50 rounded-lg flex items-center justify-center text-slate-400 ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/25`}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Newsletter signup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-8 pt-8 border-t border-slate-700/50"
          >
            <div className="text-center">
              <h4 className="text-lg font-semibold text-white mb-2">Stay Updated</h4>
              <p className="text-slate-300 mb-4">
                Get the latest insights on AI, emerging technologies, and industry trends.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                />
                <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 hover:-translate-y-1">
                  Subscribe
                </button>
              </div>
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
            </div>
          </motion.div>
        </div>
<<<<<<< HEAD
<<<<<<< HEAD

        {/* Bottom Footer */}
        <div className="border-t border-gray-700">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              {/* Copyright */}
              <div className="text-gray-400 text-sm">
                © {currentYear} Zion Tech Group. All rights reserved.
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-400 ${social.color} transition-colors duration-300`}
                    aria-label={social.name}

                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>

              {/* Legal Links */}
              <div className="flex items-center space-x-6 text-sm">
                <Link to="/privacy" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Terms of Service
                </Link>
                <Link to="/cookies" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Action Button */}
        <motion.div
          className="fixed bottom-8 right-8 z-50"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}

          <Link
            to="/contact"
            className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center shadow-2xl shadow-cyan-500/50 hover:shadow-cyan-500/70 transition-all duration-300 hover:scale-110 group"

            <MessageCircle className="w-8 h-8 text-white group-hover:rotate-12 transition-transform duration-300" />
          </Link>
        </motion.div>
=======
>>>>>>> cursor/enhance-pm2-automations-for-app-development-aca0
=======
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
      </div>

      {/* Floating elements */}
      <div className="absolute top-10 right-10 w-2 h-2 bg-cyan-400 rounded-full opacity-60 animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-3 h-3 bg-purple-400 rounded-full opacity-40 animate-pulse delay-1000"></div>
      <div className="absolute top-1/3 left-10 w-1 h-1 bg-blue-400 rounded-full opacity-80 animate-pulse delay-2000"></div>
    </footer>
  );

export default EnhancedFooter;}}}