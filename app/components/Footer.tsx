'use client';
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Zap, Brain, Cloud, Code, Users, ArrowRight, Shield, BarChart, Database, Globe, Smartphone, Settings, Calendar, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Target, TrendingUp, CheckCircle, Package, Mic, Workflow, Eye, Wifi, MessageSquare, ShoppingCart } from 'lucide-react';

const Footer: React.FC = memo(() => {
  const currentYear = new Date().getFullYear();
  
  const aiServices = [
    { name: 'AI Workflow Automation', href: '/ai-workflow-automation', icon: Workflow },
    { name: 'AI Fashion Design', href: '/ai-fashion-design', icon: ShoppingCart },
    { name: 'AI Email Assistant', href: '/ai-email-assistant', icon: Mail },
    { name: 'AI Invoice Generator', href: '/ai-invoice-generator', icon: FileText },
    { name: 'AI Voice Assistant', href: '/ai-voice-assistant', icon: Mic },
    { name: 'AI Content Generator', href: '/ai-content-generator', icon: FileText },
  ];

  const itServices = [
    { name: 'IT Services', href: '/it-services', icon: Settings },
    { name: 'Database Management', href: '/database-management', icon: Database },
    { name: 'Global IT Support', href: '/global-it-support', icon: Globe },
    { name: 'IT Training', href: '/it-training', icon: Users },
    { name: 'Cloud Solutions', href: '/cloud-solutions', icon: Cloud },
    { name: 'Cybersecurity', href: '/cybersecurity', icon: Shield },
  ];

  const companyLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
    { name: 'Blog', href: '/blog' },
    { name: 'Case Studies', href: '/case-studies' },
  ];

  const supportLinks = [
    { name: 'Help Center', href: '/help' },
    { name: 'Documentation', href: '/docs' },
    { name: 'API Reference', href: '/api' },
    { name: 'Status Page', href: '/status' },
    { name: 'Community', href: '/community' },
    { name: 'Support', href: '/support' },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'GDPR', href: '/gdpr' },
    { name: 'Security', href: '/security' },
    { name: 'Compliance', href: '/compliance' },
  ];

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Zion AI</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Transforming businesses with cutting-edge AI solutions, quantum computing, 
              and digital transformation services. We help enterprises harness the power 
              of technology to drive innovation and growth.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-300">
              <Mail className="w-4 h-4" />
              <span>contact@zionai.com</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-300">
              <MapPin className="w-4 h-4" />
              <span>San Francisco, CA</span>
            </div>
          </div>

          {/* AI Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">AI Services</h3>
            <ul className="space-y-3">
              {aiServices.map((service) => {
                const IconComponent = service.icon;
                return (
                  <li key={service.name}>
                    <Link 
                      to={service.href}
                      className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm"
                    >
                      <IconComponent className="w-4 h-4" />
                      <span>{service.name}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* IT Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">IT Services</h3>
            <ul className="space-y-3">
              {itServices.map((service) => {
                const IconComponent = service.icon;
                return (
                  <li key={service.name}>
                    <Link 
                      to={service.href}
                      className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm"
                    >
                      <IconComponent className="w-4 h-4" />
                      <span>{service.name}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="text-sm font-medium text-gray-200 mb-3">Company</h4>
                <ul className="space-y-2">
                  {companyLinks.map((link) => (
                    <li key={link.name}>
                      <Link 
                        to={link.href}
                        className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-200 mb-3">Support</h4>
                <ul className="space-y-2">
                  {supportLinks.map((link) => (
                    <li key={link.name}>
                      <Link 
                        to={link.href}
                        className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-xl font-semibold text-white mb-4">
              Stay Updated with AI Innovation
            </h3>
            <p className="text-gray-300 mb-6">
              Get the latest insights on AI trends, quantum computing, and digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-medium rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 flex items-center justify-center space-x-2">
                <span>Subscribe</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Zion AI. All rights reserved.
            </div>
            <div className="flex space-x-6">
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;
