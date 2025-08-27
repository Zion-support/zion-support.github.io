import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Zap, Brain, Shield, Cloud, Rocket, Globe, Cpu, Lock, Heart, Users, 
  ShoppingCart, BookOpen, MessageCircle, HelpCircle, DollarSign, 
  Gauge, Workflow, Atom, Star, Target, TrendingUp, Award, Code, 
  Truck, Building, BarChart3, PenTool, Eye, Server, Smartphone, 
  Database, Network, Clock, ArrowRight, Mail, Phone, MapPin,
  Facebook, Twitter, LinkedIn, Instagram, Youtube, Github
} from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Services',
      links: [
        { name: '2029 Revolutionary Services', href: '/revolutionary-services-2029', featured: true },
        { name: '2027 Services', href: '/services2027', featured: true },
        { name: '2026 Services', href: '/services2026', featured: true },
        { name: 'AI & Automation', href: '/services/ai-autonomous-business-operations' },
        { name: 'Quantum Computing', href: '/services/quantum-ai-hybrid-platform' },
        { name: 'Cybersecurity', href: '/services/ai-cybersecurity-platform' },
        { name: 'Cloud & DevOps', href: '/services/cloud-devops-platform' },
        { name: 'Data Analytics', href: '/services/ai-data-analytics-bi' },
        { name: 'Micro SaaS', href: '/services/micro-saas-solutions' },
        { name: 'View All Services', href: '/services', featured: true }
      ]
    },
    {
      title: 'Solutions',
      links: [
        { name: 'Enterprise Solutions', href: '/solutions/enterprise' },
        { name: 'Healthcare', href: '/solutions/healthcare' },
        { name: 'Financial Services', href: '/solutions/financial' },
        { name: 'Manufacturing', href: '/solutions/manufacturing' },
        { name: 'Retail & E-commerce', href: '/solutions/retail' },
        { name: 'Education', href: '/solutions/education' },
        { name: 'Government', href: '/solutions/government' },
        { name: 'Startups', href: '/solutions/startups' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Our Team', href: '/team' },
        { name: 'Careers', href: '/careers' },
        { name: 'Partners', href: '/partners' },
        { name: 'News & Updates', href: '/news' },
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'Investor Relations', href: '/investors' },
        { name: 'Sustainability', href: '/sustainability' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Blog', href: '/blog' },
        { name: 'Documentation', href: '/documentation' },
        { name: 'API Reference', href: '/api' },
        { name: 'Developer Portal', href: '/developers' },
        { name: 'White Papers', href: '/white-papers' },
        { name: 'Webinars', href: '/webinars' },
        { name: 'Training', href: '/training' },
        { name: 'Help Center', href: '/help-center' }
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Contact Us', href: '/contact' },
        { name: 'Request Quote', href: '/request-quote' },
        { name: 'Technical Support', href: '/support' },
        { name: 'Status Page', href: '/status' },
        { name: 'Security', href: '/security' },
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Cookie Policy', href: '/cookies' }
      ]
    }
  ];

  const socialLinks = [
    { name: 'Facebook', href: '#', icon: Facebook },
    { name: 'Twitter', href: '#', icon: Twitter },
    { name: 'LinkedIn', href: '#', icon: LinkedIn },
    { name: 'Instagram', href: '#', icon: Instagram },
    { name: 'YouTube', href: '#', icon: Youtube },
    { name: 'GitHub', href: '#', icon: Github }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-transparent to-cyan-900/20"></div>
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-20"
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Top Section with Logo and Contact */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl flex items-center justify-center">
                    <Zap className="w-7 h-7 text-white" />
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl blur opacity-75"></div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    Zion Tech Group
                  </h3>
                  <p className="text-sm text-gray-400">Innovation • Technology • Future</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Leading the future of technology with cutting-edge AI automation, quantum computing, 
                and revolutionary micro SAAS solutions that transform businesses worldwide.
              </p>

              {/* Contact Information */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300">
                  <Phone className="w-4 h-4 text-purple-400" />
                  <a href={`tel:${contactInfo.phone}`} className="hover:text-purple-400">
                    {contactInfo.phone}
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300">
                  <Mail className="w-4 h-4 text-purple-400" />
                  <a href={`mailto:${contactInfo.email}`} className="hover:text-purple-400">
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-start space-x-3 text-gray-300">
                  <MapPin className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                  <span className="text-sm">{contactInfo.address}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300">
                  <Globe className="w-4 h-4 text-purple-400" />
                  <a href={contactInfo.website} target="_blank" rel="noopener noreferrer" className="hover:text-purple-400">
                    {contactInfo.website}
                  </a>
                </div>
              </div>
            </div>

            {/* Services Overview */}
            <div className="lg:col-span-2">
              <h4 className="text-lg font-semibold text-white mb-6">Revolutionary 2029 Services</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                      <Brain className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-white">AI Autonomous Operations</div>
                      <div className="text-sm text-gray-400">24/7 Business Management</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg flex items-center justify-center">
                      <Atom className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-white">Quantum AI Platform</div>
                      <div className="text-sm text-gray-400">Next-Gen Computing</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
                    <div className="w-8 h-8 bg-gradient-to-r from-red-600 to-orange-600 rounded-lg flex items-center justify-center">
                      <Shield className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-white">AI Cybersecurity</div>
                      <div className="text-sm text-gray-400">Advanced Threat Detection</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg flex items-center justify-center">
                      <BarChart3 className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-white">AI Data Analytics</div>
                      <div className="text-sm text-gray-400">Business Intelligence</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            {footerSections.map((section) => (
              <div key={section.title}>
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                  {section.title}
                  {section.title === 'Services' && (
                    <span className="ml-2 px-2 py-1 text-xs font-bold bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-full">
                      NEW
                    </span>
                  )}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className={`text-gray-300 hover:text-white transition-colors duration-300 flex items-center space-x-2 group ${
                          link.featured ? 'font-medium' : ''
                        }`}
                      >
                        <span>{link.name}</span>
                        {link.featured && (
                          <span className="px-2 py-1 text-xs font-bold bg-gradient-to-r from-purple-400 to-pink-500 text-white rounded-full">
                            {link.name.includes('2029') ? 'REVOLUTIONARY' : 
                             link.name.includes('2027') ? 'HOT' : 
                             link.name.includes('2026') ? 'POPULAR' : 'FEATURED'}
                          </span>
                        )}
                        <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Section */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
              {/* Copyright */}
              <div className="text-gray-400 text-sm">
                © {currentYear} Zion Tech Group. All rights reserved. 
                <span className="ml-2 text-purple-400">Innovating the future, one solution at a time.</span>
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="p-2 bg-white/10 hover:bg-white/20 rounded-lg text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-110"
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-6 pt-6 border-t border-white/10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-400">
                <div>
                  <strong className="text-white">Certifications:</strong> ISO 27001, SOC 2 Type II, GDPR Compliant
                </div>
                <div>
                  <strong className="text-white">Partners:</strong> AWS, Microsoft, Google Cloud, IBM
                </div>
                <div>
                  <strong className="text-white">Global Reach:</strong> Serving 50+ countries worldwide
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-purple-600/20 to-cyan-600/20 border-t border-white/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Stay Ahead with Latest Innovations
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Get exclusive access to our latest AI breakthroughs, quantum computing updates, 
                and revolutionary micro SAAS solutions delivered directly to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-gray-400 mt-3">
                No spam, unsubscribe at any time. We respect your privacy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
