'use client';
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Github,
  ArrowRight,
  Shield,
  Zap,
  Cloud,
  Database
} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/careers' }
  ];

  const aiServices = [
    { name: 'AI Analytics', href: '/ai-analytics' },
    { name: 'AI Automation', href: '/ai-automation' },
    { name: 'AI Chatbot', href: '/ai-chatbot-builder' },
    { name: 'AI CRM', href: '/ai-crm' },
    { name: 'AI Cybersecurity', href: '/ai-cybersecurity' },
    { name: 'AI Healthcare', href: '/ai-healthcare' }
  ];

  const itServices = [
    { name: 'Cloud Infrastructure', href: '/cloud-infrastructure' },
    { name: 'DevOps Services', href: '/devops' },
    { name: 'API Development', href: '/api-development' },
    { name: 'Database Management', href: '/database-management' },
    { name: 'Security Solutions', href: '/security-solutions' },
    { name: 'System Administration', href: '/system-admin' }
  ];

  const microSaasServices = [
    { name: 'Analytics Tools', href: '/analytics-tools' },
    { name: 'Project Management', href: '/project-management' },
    { name: 'Customer Support', href: '/customer-support' },
    { name: 'Inventory Management', href: '/inventory-management' }
  ];

  const socialLinks = [
    { name: 'Facebook', href: '#', icon: Facebook },
    { name: 'Twitter', href: '#', icon: Twitter },
    { name: 'LinkedIn', href: '#', icon: Linkedin },
    { name: 'GitHub', href: '#', icon: Github }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Futuristic Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3 group">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg shadow-cyan-500/25">
                <Brain className="w-7 h-7 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold neon-text-enhanced group-hover:glow">Zion Tech Group</span>
                <span className="text-sm text-cyan-400 font-medium tracking-wider">AI & IT SOLUTIONS</span>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Leading provider of AI and IT solutions for modern businesses. 
              We help companies transform their operations with cutting-edge technology, 
              delivering measurable results and exceptional value.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-slate-800 hover:bg-cyan-500 rounded-lg flex items-center justify-center transition-all duration-300 group"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-cyan-400 neon-text-enhanced">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* AI Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-cyan-400 neon-text-enhanced">AI Services</h3>
            <ul className="space-y-2">
              {aiServices.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* IT Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-cyan-400 neon-text-enhanced">IT Services</h3>
            <ul className="space-y-2">
              {itServices.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                <Mail className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="text-white font-medium">contact@ziontechgroup.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                <Phone className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Phone</p>
                <p className="text-white font-medium">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                <MapPin className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Location</p>
                <p className="text-white font-medium">San Francisco, CA</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6">
              <p className="text-gray-400 text-sm">
                © {currentYear} Zion Tech Group. All rights reserved.
              </p>
              <div className="flex space-x-4">
                <Link to="/privacy" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <Shield className="w-4 h-4" />
              <span>Secure & Reliable</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;