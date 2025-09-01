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
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
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
        { name: 'Careers', href: '/careers', icon: Target },
        { name: 'News', href: '/news', icon: BookOpen },
        { name: 'Case Studies', href: '/case-studies', icon: BarChart3 },
        { name: 'Events', href: '/events', icon: Video },
        { name: 'Research', href: '/research-development', icon: Lightbulb }
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
            </div>
          </div>
        </div>
      </div>

      {/* Floating Contact Button */}
      <motion.div
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
        </Link>
      </motion.div>
    </footer>
  );
}