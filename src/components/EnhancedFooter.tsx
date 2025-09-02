import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Phone, Mail, MapPin, Globe, Linkedin, Twitter, Facebook, Instagram, Github, Youtube, 
  ArrowRight, Star, Shield, Zap, Brain, Cloud, Users, Award, TrendingUp, Lightbulb, 
  Rocket, Target, CheckCircle, Heart, MessageCircle, HelpCircle, BookOpen, ShoppingCart, 
  Cpu, Database, Network, Lock, BarChart3, Code, Server, Smartphone, Wifi, ShieldCheck, 
  Globe2, Bot, Workflow, Eye, Sparkles, ExternalLink, Building, Handshake, FileText, 
  Video, GraduationCap, Atom, PenTool, Leaf, ChevronRight, ChevronDown, DollarSign,
  Package, Truck, AlertTriangle, Send, MailCheck, UserCheck, PieChart, LineChart, Activity
} from 'lucide-react';

export function EnhancedFooter() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Featured Services',
      links: [
        { name: 'AI Content Generator', href: '/services/ai-content-generator', icon: PenTool, featured: true },
        { name: 'Smart Inventory Management', href: '/services/smart-inventory-management', icon: Package, featured: true },
        { name: 'AI Cybersecurity Platform', href: '/services/ai-cybersecurity', icon: Shield, featured: true },
        { name: 'AI Email Automation', href: '/services/ai-email-automation', icon: Mail, featured: true },
        { name: 'Data Analytics Platform', href: '/services/data-analytics', icon: BarChart3, featured: true }
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
        { name: 'Cloud Migration Services', href: '/services/cloud-migration-services', icon: Cloud }
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
    { name: 'Terms of Service', href: '/terms', icon: FileText }
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
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
              </div>
            </div>
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
            </div>
            {/* Social Links */}
            <div className="mt-6">
              <h4 className="text-white font-semibold mb-3">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-400 ${social.color} transition-colors hover:scale-110 transform`}
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
              <h4 className="text-lg font-semibold text-white mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
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
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Quick Links Section */}
        <div className="mt-12 pt-8 border-t border-gray-700">
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
        <div className="mt-12 pt-8 border-t border-gray-700">
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
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Footer */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link to="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}