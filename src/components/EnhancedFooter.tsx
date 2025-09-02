import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
<<<<<<< HEAD
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
} from 'lucide-react';

export function EnhancedFooter() {
=======
import { 
  Globe, 
  Phone, 
  Mail, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Instagram,
  Github,
  ArrowRight,
  Heart,
  Shield,
  Zap,
  Users
} from 'lucide-react';

const EnhancedFooter: React.FC = () => {
>>>>>>> origin/main
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
<<<<<<< HEAD
      title: 'Featured Services',
      links: [
        { name: 'AI Content Creation Studio Pro', href: '/services/AI-Content-Creation-Studio-Pro', icon: PenTool, featured: true },
        { name: 'Quantum AI Trading Platform', href: '/services/Quantum-AI-Trading-Platform', icon: Atom, featured: true },
        { name: '2025 Services Showcase', href: '/innovative-services-showcase-2025', icon: Sparkles, featured: true },
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
        { name: '2025 Innovative Services', href: '/zion-innovative-services-2025', icon: Sparkles },
        { name: '2025 Services Showcase', href: '/innovative-services-showcase-2025', icon: Sparkles }
=======
      title: 'Services',
      links: [
        { name: 'AI Solutions', href: '/services/ai-services' },
        { name: 'IT & Security', href: '/services/it-services' },
        { name: 'Blockchain & Web3', href: '/services/blockchain-services' },
        { name: 'Sustainability', href: '/services/sustainability' },
        { name: 'Healthcare Tech', href: '/services/healthcare-tech' },
        { name: 'Edge Computing', href: '/services/edge-computing' }
>>>>>>> origin/main
      ]
    },
    {
      title: 'Solutions',
      links: [
<<<<<<< HEAD
        { name: 'Enterprise Solutions', href: '/solutions/enterprise', icon: Building },
        { name: 'Healthcare Solutions', href: '/solutions/healthcare', icon: Heart },
        { name: 'Financial Solutions', href: '/solutions/financial', icon: TrendingUp },
        { name: 'Manufacturing Solutions', href: '/solutions/manufacturing', icon: Cpu },
        { name: 'Retail Solutions', href: '/solutions/retail', icon: ShoppingCart },
        { name: 'Space Technology', href: '/solutions/space-tech', icon: Globe2 }
=======
        { name: 'Enterprise', href: '/solutions/enterprise' },
        { name: 'Startups', href: '/solutions/startups' },
        { name: 'Healthcare', href: '/solutions/healthcare' },
        { name: 'Financial Services', href: '/solutions/financial' },
        { name: 'Manufacturing', href: '/solutions/manufacturing' },
        { name: 'Education', href: '/solutions/education' }
>>>>>>> origin/main
      ]
    },
    {
      title: 'Company',
      links: [
<<<<<<< HEAD
        { name: 'About Us', href: '/about', icon: Users },
        { name: 'Our Team', href: '/team', icon: Award },
        { name: 'Careers', href: '/careers', icon: Target },
        { name: 'News & Press', href: '/press', icon: BookOpen },
        { name: 'Case Studies', href: '/case-studies', icon: BarChart3 },
        { name: 'Partners', href: '/partners', icon: Handshake }
=======
        { name: 'About Us', href: '/about' },
        { name: 'Our Team', href: '/about/team' },
        { name: 'Careers', href: '/careers' },
        { name: 'Partners', href: '/partners' },
        { name: 'Press', href: '/press' },
        { name: 'Case Studies', href: '/case-studies' }
>>>>>>> origin/main
      ]
    },
    {
      title: 'Resources',
      links: [
<<<<<<< HEAD
        { name: 'Blog', href: '/blog', icon: BookOpen },
        { name: 'Documentation', href: '/documentation', icon: FileText },
        { name: 'Help Center', href: '/help', icon: HelpCircle },
        { name: 'Webinars', href: '/webinars', icon: Video },
        { name: 'White Papers', href: '/white-papers', icon: FileText },
        { name: 'Training', href: '/training', icon: GraduationCap }
=======
        { name: 'Blog', href: '/blog' },
        { name: 'Documentation', href: '/docs' },
        { name: 'API Reference', href: '/api' },
        { name: 'Developer Tools', href: '/developer' },
        { name: 'Training', href: '/training' },
        { name: 'Support', href: '/support' }
>>>>>>> origin/main
      ]
    }
  ];

  const socialLinks = [
<<<<<<< HEAD
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
    { name: 'Terms of Service', href: '/terms', icon: FileText }
  ];

  return (
    <footer className="bg-slate-900 border-t border-cyan-500/20">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Zion Tech Group</h3>
                <p className="text-cyan-400 text-sm font-medium">Innovation Group</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading provider of innovative technology solutions, specializing in AI, cybersecurity, 
              cloud infrastructure, and emerging technologies. Transforming businesses through 
              cutting-edge innovation and expert consultation.
            </p>

            {/* Contact Information */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>364 E Main St STE 1008 Middletown DE 19709</span>
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
                  className={`w-10 h-10 bg-gray-800/50 rounded-lg flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 hover:bg-cyan-500/20 hover:scale-110`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h4 className="text-white font-semibold text-lg">{section.title}</h4>
              <div className="space-y-3">
                {section.links.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors group"
                  >
                    <link.icon className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                    <span className="text-sm">{link.name}</span>
                    {link.featured && (
                      <Star className="w-3 h-3 text-yellow-400" />
                    )}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mt-12 pt-8 border-t border-cyan-500/20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="flex items-center space-x-3 p-4 bg-gray-800/30 rounded-lg hover:bg-cyan-500/10 transition-all duration-300 group"
              >
                <link.icon className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
                <span className="text-white font-medium">{link.name}</span>
                <ArrowRight className="w-4 h-4 text-cyan-400 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-cyan-500/20">
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="text-white text-xl font-semibold mb-3">Stay Updated with Innovation</h4>
            <p className="text-gray-300 mb-6">
              Get the latest insights on AI, cybersecurity, and emerging technologies delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-cyan-500/20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>&copy; {currentYear} Zion Tech Group. All rights reserved.</span>
              <span>•</span>
              <span>Innovation Group</span>
              <span>•</span>
              <span>Delaware, USA</span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <Link to="/privacy" className="hover:text-cyan-400 transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-cyan-400 transition-colors">Terms of Service</Link>
              <Link to="/cookies" className="hover:text-cyan-400 transition-colors">Cookie Policy</Link>
              <Link to="/accessibility" className="hover:text-cyan-400 transition-colors">Accessibility</Link>
=======
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github }
  ];

  const contactInfo = [
    { icon: Phone, text: '+1 302 464 0950', href: 'tel:+13024640950' },
    { icon: Mail, text: 'kleber@ziontechgroup.com', href: 'mailto:kleber@ziontechgroup.com' },
    { icon: MapPin, text: '364 E Main St STE 1008, Middletown DE 19709', href: '#' }
  ];

  const certifications = [
    'SOC 2 Type II',
    'ISO 27001',
    'GDPR Compliant',
    'HIPAA Ready',
    'PCI DSS'
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(6,182,212,0.1)_0%,transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.1)_0%,transparent_50%)]"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <Link to="/" className="inline-flex items-center space-x-3 mb-6 group">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Globe className="w-7 h-7 text-white" />
                </div>
                <div>
                  <span className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    Zion Tech Group
                  </span>
                  <div className="text-sm text-cyan-400 font-medium">Innovation • Security • Growth</div>
                </div>
              </Link>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                Pioneering the future with cutting-edge AI, cybersecurity, and space technology solutions. 
                Transform your business with our innovative services and expert guidance.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                {contactInfo.map((info, idx) => (
                  <a
                    key={idx}
                    href={info.href}
                    className="flex items-center space-x-3 text-gray-400 hover:text-cyan-400 transition-colors group"
                  >
                    <info.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span className="text-sm">{info.text}</span>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:bg-gray-700 transition-all duration-200 group"
                  >
                    <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>
            </div>

            {/* Footer Sections */}
            {footerSections.map((section, idx) => (
              <div key={idx}>
                <h3 className="text-white font-semibold mb-4 text-lg">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <Link
                        to={link.href}
                        className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm hover:translate-x-1 inline-block"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16 pt-8 border-t border-gray-800">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Stay Updated with Innovation
              </h3>
              <p className="text-gray-400 mb-6">
                Get the latest insights on AI, cybersecurity, and emerging technologies delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 flex items-center justify-center gap-2 group">
                  Subscribe
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Copyright */}
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <span>© {currentYear} Zion Tech Group. All rights reserved.</span>
                <span className="hidden sm:inline">•</span>
                <span className="hidden sm:inline">Made with</span>
                <Heart className="w-4 h-4 text-red-500 hidden sm:inline" />
                <span className="hidden sm:inline">in Delaware</span>
              </div>

              {/* Certifications */}
              <div className="flex items-center space-x-4 text-xs text-gray-500">
                {certifications.map((cert, idx) => (
                  <div key={idx} className="flex items-center space-x-1">
                    <Shield className="w-3 h-3" />
                    <span>{cert}</span>
                  </div>
                ))}
              </div>

              {/* Legal Links */}
              <div className="flex items-center space-x-6 text-sm">
                <Link to="/privacy-policy" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Privacy Policy
                </Link>
                <Link to="/terms-of-service" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Terms of Service
                </Link>
                <Link to="/cookie-policy" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Cookie Policy
                </Link>
              </div>
>>>>>>> origin/main
            </div>
          </div>
        </div>
      </div>

      {/* Floating Contact Button */}
      <motion.div
<<<<<<< HEAD
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <Link
          to="/contact"
          className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/60 transition-all duration-300 hover:scale-110"
        >
          <MessageCircle className="w-8 h-8 text-white" />
=======
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="fixed bottom-6 left-6 z-40"
      >
        <Link
          to="/contact"
          className="w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full shadow-lg hover:shadow-xl flex items-center justify-center text-white transition-all duration-200 hover:scale-110"
        >
          <Phone className="w-6 h-6" />
>>>>>>> origin/main
        </Link>
      </motion.div>
    </footer>
  );
<<<<<<< HEAD
}
=======
};

export default EnhancedFooter;
>>>>>>> origin/main
