import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
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
  Youtube
} from 'lucide-react';

export function EnhancedFooter() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Services',
      links: [
        { name: 'AI & Machine Learning', href: '/ai-services', icon: Brain },
        { name: 'IT Services', href: '/it-services', icon: Server },
        { name: 'Micro SaaS', href: '/micro-saas', icon: Rocket },
        { name: 'Cybersecurity', href: '/cybersecurity', icon: Shield },
        { name: 'Cloud & DevOps', href: '/cloud-devops', icon: Cloud },
        { name: 'Quantum Computing', href: '/quantum-computing', icon: Atom },
        { name: 'Emerging Tech', href: '/emerging-tech', icon: Sparkles },
        { name: 'Digital Transformation', href: '/digital-transformation', icon: TrendingUp }
      ]
    },
    {
      title: 'Solutions',
      links: [
        { name: 'Enterprise Solutions', href: '/solutions/enterprise', icon: Building },
        { name: 'Healthcare Solutions', href: '/solutions/healthcare', icon: Heart },
        { name: 'Financial Services', href: '/solutions/financial', icon: DollarSign },
        { name: 'Manufacturing', href: '/solutions/manufacturing', icon: Truck },
        { name: 'Retail Solutions', href: '/solutions/retail', icon: ShoppingCart },
        { name: 'Government', href: '/solutions/government', icon: Building },
        { name: 'Education', href: '/solutions/education', icon: BookOpen },
        { name: 'Space Technology', href: '/space-tech', icon: Satellite }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about', icon: Users },
        { name: 'Our Mission', href: '/mission', icon: Target },
        { name: 'Leadership Team', href: '/leadership', icon: Award },
        { name: 'Careers', href: '/careers', icon: Workflow },
        { name: 'Partners', href: '/partners', icon: Handshake },
        { name: 'News & Updates', href: '/news', icon: FileText },
        { name: 'Case Studies', href: '/case-studies', icon: BarChart3 },
        { name: 'Blog', href: '/blog', icon: PenTool }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Documentation', href: '/docs', icon: FileText },
        { name: 'API Reference', href: '/api', icon: Code },
        { name: 'Developer Portal', href: '/developer', icon: Cpu },
        { name: 'Help Center', href: '/help', icon: HelpCircle },
        { name: 'FAQ', href: '/faq', icon: MessageCircle },
        { name: 'Training', href: '/training', icon: BookOpen },
        { name: 'Webinars', href: '/webinars', icon: Users },
        { name: 'White Papers', href: '/white-papers', icon: FileText }
      ]
    }
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin, color: 'hover:text-blue-400' },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter, color: 'hover:text-blue-400' },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github, color: 'hover:text-gray-400' },
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook, color: 'hover:text-blue-600' },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram, color: 'hover:text-pink-400' },
    { name: 'YouTube', href: 'https://youtube.com/ziontechgroup', icon: Youtube, color: 'hover:text-red-400' }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    hours: 'Mon-Fri: 9AM-6PM EST'
  };

  return (
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
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-orbitron bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    Zion Tech
                  </h3>
                  <p className="text-sm text-cyan-400 font-rajdhani tracking-wider">
                    Innovation Group
                  </p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Leading the future of technology with cutting-edge AI, quantum computing, and innovative solutions that transform businesses and drive digital transformation.
              </p>
              
              {/* Contact Information */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <a href={`tel:${contactInfo.phone}`} className="hover:text-cyan-400 transition-colors">
                    {contactInfo.phone}
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <a href={`mailto:${contactInfo.email}`} className="hover:text-cyan-400 transition-colors">
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-start space-x-3 text-gray-300">
                  <MapPin className="w-4 h-4 text-cyan-400 mt-1" />
                  <div>
                    <p>{contactInfo.address}</p>
                    <p className="text-sm text-gray-400">{contactInfo.hours}</p>
                  </div>
                </div>
              </div>
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
                      >
                        <link.icon className="w-3 h-3 text-cyan-400 group-hover:scale-110 transition-transform" />
                        <span className="text-sm">{link.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16 pt-8 border-t border-gray-700">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-2xl font-bold text-white mb-4 font-orbitron">
                Stay Ahead of the Curve
              </h3>
              <p className="text-gray-300 mb-6">
                Get the latest insights on AI, quantum computing, and emerging technologies delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                />
                <button className="btn-neon-cyan px-6 py-3 whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

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
                  >
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
        >
          <Link
            to="/contact"
            className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center shadow-2xl shadow-cyan-500/50 hover:shadow-cyan-500/70 transition-all duration-300 hover:scale-110 group"
          >
            <MessageCircle className="w-8 h-8 text-white group-hover:rotate-12 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>
    </footer>
  );
}

export default EnhancedFooter;