import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
<<<<<<< HEAD
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
  Cpu as CpuIcon,
  Wifi,
  ShieldCheck,
  Globe2,
  Bot,
  Workflow,
  Eye,
  Sparkles,
  ExternalLink,
  Building,
  Handshake,
  FileText,
  Video,
  GraduationCap,
  Atom,
  PenTool,
  Leaf,
  ChevronRight,
  ChevronDown,
  DollarSign
=======
  Zap, Mail, Phone, MapPin, Globe, Twitter, Linkedin, 
  Facebook, Instagram, Youtube, Github, ArrowRight,
  Shield, Users, Code, Building, BookOpen, HelpCircle
>>>>>>> cursor/add-new-services-and-advertise-them-650b
} from 'lucide-react';

export function EnhancedFooter() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
<<<<<<< HEAD
      title: 'Featured Services',
      links: [
        { name: 'AI Content Creation Studio Pro', href: '/services/AI-Content-Creation-Studio-Pro', icon: PenTool, featured: true },
        { name: 'Quantum AI Trading Platform', href: '/services/Quantum-AI-Trading-Platform', icon: Atom, featured: true },
        { name: '2029 Cutting-Edge Services', href: '/zion-cutting-edge-services-2029', icon: Sparkles, featured: true },
        { name: 'AI-Powered Micro SAAS', href: '/zion-cutting-edge-services-2029', icon: Brain, featured: true }
      ]
    },
    {
      title: 'Core Services',
      links: [
        { name: 'Micro SAAS Solutions', href: '/services/micro-saas-solutions', icon: Rocket },
        { name: 'AI Services', href: '/ai-services', icon: Brain },
        { name: 'IT Infrastructure', href: '/it-services', icon: Server },
        { name: 'Quantum Computing', href: '/services/quantum-computing', icon: Atom },
        { name: 'Blockchain Solutions', href: '/services/blockchain-enterprise-solutions', icon: Shield },
        { name: '2025 Innovative Services', href: '/zion-innovative-services-2025', icon: Sparkles }
      ]
    },
    {
      title: 'Solutions',
      links: [
        { name: 'Enterprise Solutions', href: '/solutions/enterprise', icon: Building },
        { name: 'Healthcare Solutions', href: '/solutions/healthcare', icon: Heart },
        { name: 'Financial Solutions', href: '/solutions/financial', icon: TrendingUp },
        { name: 'Manufacturing Solutions', href: '/solutions/manufacturing', icon: Cpu },
        { name: 'Retail Solutions', href: '/solutions/retail', icon: ShoppingCart },
        { name: 'Space Technology', href: '/solutions/space-tech', icon: Globe2 }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about', icon: Users },
        { name: 'Our Team', href: '/team', icon: Award },
        { name: 'Careers', href: '/careers', icon: Target },
        { name: 'News & Press', href: '/press', icon: BookOpen },
        { name: 'Case Studies', href: '/case-studies', icon: BarChart3 },
        { name: 'Partners', href: '/partners', icon: Handshake }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Blog', href: '/blog', icon: BookOpen },
        { name: 'Documentation', href: '/documentation', icon: FileText },
        { name: 'Help Center', href: '/help', icon: HelpCircle },
        { name: 'Webinars', href: '/webinars', icon: Video },
        { name: 'White Papers', href: '/white-papers', icon: FileText },
        { name: 'Training', href: '/training', icon: GraduationCap }
      ]
    }
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin, color: 'hover:text-blue-400' },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter, color: 'hover:text-blue-400' },
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook, color: 'hover:text-blue-600' },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram, color: 'hover:text-pink-400' },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github, color: 'hover:text-gray-400' },
    { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: Youtube, color: 'hover:text-red-400' }
  ];

  const quickLinks = [
    { name: 'Contact Us', href: '/contact', icon: MessageCircle },
    { name: 'Request Quote', href: '/request-quote', icon: DollarSign },
    { name: 'Support', href: '/help', icon: HelpCircle },
    { name: 'Privacy Policy', href: '/privacy', icon: Shield },
    { name: 'Terms of Service', href: '/terms', icon: FileText },
    { name: 'Cookie Policy', href: '/cookies', icon: Cookie }
  ];

  return (
    <footer className="bg-zion-slate-dark border-t border-white/20">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Zion Tech Group</h3>
                <p className="text-blue-400 text-sm font-medium">Innovation Group</p>
=======
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about', description: 'Our mission and values' },
        { name: 'Our Team', href: '/team', description: 'Meet our experts' },
        { name: 'Leadership', href: '/leadership', description: 'Executive team' },
        { name: 'Careers', href: '/careers', description: 'Join our team' },
        { name: 'Partners', href: '/partners', description: 'Strategic partnerships' },
        { name: 'News', href: '/news', description: 'Latest updates' },
      ]
    },
    {
      title: 'Services',
      links: [
        { name: 'AI Solutions', href: '/ai-solutions', description: 'Machine learning & automation' },
        { name: 'Cloud Services', href: '/services/cloud-devops', description: 'Infrastructure & DevOps' },
        { name: 'Cybersecurity', href: '/services/ai-cybersecurity-platform', description: 'Security & compliance' },
        { name: 'Digital Transformation', href: '/services/digital-transformation', description: 'Business modernization' },
        { name: 'Quantum Computing', href: '/services/ai-quantum-financial-trading-platform', description: 'Next-gen computing power' },
        { name: 'Smart City Solutions', href: '/services/ai-smart-city-infrastructure-management', description: 'Urban infrastructure management' },
        { name: 'Autonomous Systems', href: '/services/ai-autonomous-vehicle-management-platform', description: 'AI-powered automation' },
        { name: 'Micro SaaS', href: '/micro-saas', description: 'Lightweight applications' },
        { name: 'Consulting', href: '/it-consulting', description: 'Technology advisory' },
      ]
    },
    {
      title: 'Solutions',
      links: [
        { name: 'Enterprise', href: '/solutions/enterprise', description: 'Large-scale solutions' },
        { name: 'Healthcare', href: '/solutions/healthcare', description: 'Medical technology' },
        { name: 'Financial', href: '/financial-solutions', description: 'Fintech solutions' },
        { name: 'Manufacturing', href: '/manufacturing-solutions', description: 'Industry 4.0' },
        { name: 'Research & Development', href: '/research-development', description: 'Innovation labs' },
        { name: 'Green IT', href: '/green-it', description: 'Sustainable technology' },
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Blog', href: '/blog', description: 'Insights & updates' },
        { name: 'Case Studies', href: '/case-studies', description: 'Success stories' },
        { name: 'White Papers', href: '/white-papers', description: 'In-depth research' },
        { name: 'Webinars', href: '/webinars', description: 'Educational content' },
        { name: 'Documentation', href: '/documentation', description: 'Technical guides' },
        { name: 'API Reference', href: '/api', description: 'Developer resources' },
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Help Center', href: '/help', description: 'Find answers' },
        { name: 'FAQ', href: '/faq', description: 'Common questions' },
        { name: 'Contact Support', href: '/support', description: 'Get help' },
        { name: 'Training', href: '/training', description: 'Skill development' },
        { name: 'Status Page', href: '/status', description: 'Service status' },
        { name: 'Community', href: '/community', description: 'User forums' },
      ]
    }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'Data Protection', href: '/data-protection' },
    { name: 'Accessibility', href: '/accessibility' },
    { name: 'Sitemap', href: '/sitemap' },
  ];

  const socialLinks = [
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter, color: 'text-blue-400 hover:text-blue-300' },
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin, color: 'text-blue-600 hover:text-blue-500' },
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook, color: 'text-blue-700 hover:text-blue-600' },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram, color: 'text-pink-500 hover:text-pink-400' },
    { name: 'YouTube', href: 'https://youtube.com/ziontechgroup', icon: Youtube, color: 'text-red-500 hover:text-red-400' },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github, color: 'text-gray-600 hover:text-gray-500' },
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'kleber@ziontechgroup.com',
      href: 'mailto:kleber@ziontechgroup.com',
      description: 'Send us a message'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 302 464 0950',
      href: 'tel:+13024640950',
      description: 'Call us directly'
    },
    {
      icon: MapPin,
      label: 'Address',
      value: '364 E Main St STE 1008, Middletown DE 19709',
      href: 'https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709',
      description: 'Visit our office'
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
>>>>>>> cursor/add-new-services-and-advertise-them-650b
              </div>
              <span className="text-2xl font-bold">Zion Tech Group</span>
            </div>
            
<<<<<<< HEAD
            <p className="text-gray-300 mb-6 max-w-md">
              Leading the future of technology with cutting-edge AI solutions, quantum computing, and innovative micro SAAS services that transform businesses and drive exponential growth.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-4 h-4 text-blue-400" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-4 h-4 text-green-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-start space-x-3 text-gray-300">
                <MapPin className="w-4 h-4 text-purple-400 mt-0.5" />
                <span className="max-w-xs">364 E Main St STE 1008<br />Middletown DE 19709</span>
              </div>
=======
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading the future of technology with cutting-edge AI solutions, 
              quantum computing, and innovative micro SAAS services. 
              Transforming businesses through digital innovation.
            </p>

            {/* Contact Information */}
            <div className="space-y-4">
              {contactInfo.map((contact) => (
                <div key={contact.label} className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <contact.icon className="w-4 h-4 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-300">{contact.label}</div>
                    <a
                      href={contact.href}
                      className="text-white hover:text-blue-400 transition-colors font-medium"
                    >
                      {contact.value}
                    </a>
                    <div className="text-xs text-gray-400">{contact.description}</div>
                  </div>
                </div>
              ))}
>>>>>>> cursor/add-new-services-and-advertise-them-650b
            </div>

            {/* Social Links */}
            <div className="mt-6">
<<<<<<< HEAD
              <h4 className="text-white font-semibold mb-3">Follow Us</h4>
              <div className="flex space-x-4">
=======
              <h4 className="text-sm font-semibold text-gray-300 mb-3">Follow Us</h4>
              <div className="flex space-x-3">
>>>>>>> cursor/add-new-services-and-advertise-them-650b
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
<<<<<<< HEAD
                    className={`text-gray-400 ${social.color} transition-colors hover:scale-110 transform`}
=======
                    className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center transition-colors hover:bg-gray-700 ${social.color}`}
>>>>>>> cursor/add-new-services-and-advertise-them-650b
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
<<<<<<< HEAD
              <h4 className="text-lg font-semibold text-white mb-4">{section.title}</h4>
=======
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                {section.title === 'Company' && <Building className="w-5 h-5 mr-2 text-blue-400" />}
                {section.title === 'Services' && <Code className="w-5 h-5 mr-2 text-green-400" />}
                {section.title === 'Solutions' && <Users className="w-5 h-5 mr-2 text-purple-400" />}
                {section.title === 'Resources' && <BookOpen className="w-5 h-5 mr-2 text-orange-400" />}
                {section.title === 'Support' && <HelpCircle className="w-5 h-5 mr-2 text-red-400" />}
                {section.title}
              </h3>
              
>>>>>>> cursor/add-new-services-and-advertise-them-650b
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
<<<<<<< HEAD
                      className={`flex items-center space-x-2 text-gray-300 hover:text-white transition-colors group ${
                        link.featured ? 'font-medium text-blue-300 hover:text-blue-200' : ''
                      }`}
                    >
                      <link.icon className={`w-4 h-4 transition-transform group-hover:scale-110 ${
                        link.featured ? 'text-blue-400' : 'text-blue-400'
                      }`} />
                      <span className="text-sm">{link.name}</span>
                      {link.featured && (
                        <Star className="w-3 h-3 text-yellow-400 ml-1" />
                      )}
=======
                      className="group flex items-start space-x-2 text-gray-300 hover:text-white transition-colors"
                    >
                      <ArrowRight className="w-3 h-3 mt-1 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div>
                        <div className="font-medium group-hover:text-blue-400 transition-colors">
                          {link.name}
                        </div>
                        <div className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors">
                          {link.description}
                        </div>
                      </div>
>>>>>>> cursor/add-new-services-and-advertise-them-650b
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
<<<<<<< HEAD

        {/* Quick Links Section */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {quickLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors group"
              >
                <link.icon className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform" />
                <span className="text-sm">{link.name}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated with Innovation
            </h3>
            <p className="text-gray-300 mb-6">
              Get the latest insights on AI, quantum computing, and emerging technologies delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105">
                Subscribe
              </button>
            </div>
=======
      </div>

      {/* Newsletter Section */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated with Zion Tech Group
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Get the latest insights on AI, quantum computing, and emerging technologies. 
              Join our newsletter for exclusive content and updates.
            </p>
            
            <form className="max-w-md mx-auto flex space-x-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                Subscribe
              </button>
            </form>
>>>>>>> cursor/add-new-services-and-advertise-them-650b
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
<<<<<<< HEAD
      <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>

            {/* Back to Top */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <ArrowRight className="w-4 h-4 rotate-[-90deg]" />
            </button>
=======
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-gray-400">
              <Shield className="w-4 h-4" />
              <span>© {currentYear} Zion Tech Group. All rights reserved.</span>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center md:justify-end space-x-6">
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-6 pt-6 border-t border-gray-800 text-center text-gray-500 text-sm">
            <p>
              Zion Tech Group is a leading technology company specializing in AI solutions, 
              quantum computing, and digital transformation services. 
              <span className="mx-2">•</span>
              ISO 27001 Certified
              <span className="mx-2">•</span>
              SOC 2 Type II Compliant
              <span className="mx-2">•</span>
              GDPR Ready
            </p>
>>>>>>> cursor/add-new-services-and-advertise-them-650b
          </div>
        </div>
      </div>

<<<<<<< HEAD
      {/* Floating Contact Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <Link
          to="/contact"
          className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group transform hover:scale-105"
        >
          <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
          <span className="hidden sm:block font-medium">Contact Us</span>
        </Link>
      </motion.div>
    </footer>
  );
}

// Placeholder icon components
const Handshake = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

const FileText = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const Video = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
  </svg>
);

const GraduationCap = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
  </svg>
);

const Cookie = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
  </svg>
);
=======
      {/* Back to Top Button */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Back to top"
      >
        <ArrowRight className="w-6 h-6 transform rotate-[-90deg] mx-auto" />
      </motion.button>
    </footer>
  );
}
>>>>>>> cursor/add-new-services-and-advertise-them-650b
