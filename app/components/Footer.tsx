'use client';
import React from 'react';
import { Phone, Mail, MapPin, Clock, Brain, Cpu, Zap, Shield, Globe, ArrowRight, Facebook, Twitter, Linkedin, Instagram, Github, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Services',
      links: [
        { label: 'AI Solutions', href: '/ai-solutions' },
        { label: 'IT Services', href: '/it-services' },
        { label: 'Micro SAAS', href: '/micro-saas' },
        { label: 'Cloud Services', href: '/cloud-services' },
        { label: 'Cybersecurity', href: '/cybersecurity' },
        { label: 'DevOps', href: '/devops' }
      ]
    },
    {
      title: 'AI Tools',
      links: [
        { label: 'AI Project Manager', href: '/ai-project-manager' },
        { label: 'AI Analytics', href: '/ai-analytics' },
        { label: 'AI Automation', href: '/ai-automation' },
        { label: 'AI Customer Support', href: '/ai-customer-support' },
        { label: 'AI Email Marketing', href: '/ai-email-marketing' },
        { label: 'AI Social Media', href: '/ai-social-media-manager' }
      ]
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'Our Team', href: '/team' },
        { label: 'Careers', href: '/careers' },
        { label: 'Blog', href: '/blog' },
        { label: 'Case Studies', href: '/case-studies' },
        { label: 'News', href: '/news' }
      ]
    },
    {
      title: 'Support',
      links: [
        { label: 'Contact Us', href: '/contact' },
        { label: 'Help Center', href: '/help' },
        { label: 'Documentation', href: '/docs' },
        { label: 'API Reference', href: '/api' },
        { label: 'Status', href: '/status' },
        { label: 'Privacy Policy', href: '/privacy' }
      ]
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com/ziontechgroup', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com/ziontechgroup', label: 'Twitter' },
    { icon: Linkedin, href: 'https://linkedin.com/company/zion-tech-group', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://instagram.com/ziontechgroup', label: 'Instagram' },
    { icon: Github, href: 'https://github.com/ziontechgroup', label: 'GitHub' },
    { icon: Youtube, href: 'https://youtube.com/ziontechgroup', label: 'YouTube' }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 border-t border-cyan-400/20">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white neon-text">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, 
              and digital transformation services. Transform your business with cutting-edge technology.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a 
                href="tel:+13024640950" 
                className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <Phone className="w-4 h-4 mr-3" />
                +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <Mail className="w-4 h-4 mr-3" />
                kleber@ziontechgroup.com
              </a>
              <div className="flex items-center text-gray-300">
                <MapPin className="w-4 h-4 mr-3" />
                364 E Main St STE 1008, Middletown, DE 19709
              </div>
              <div className="flex items-center text-gray-300">
                <Clock className="w-4 h-4 mr-3" />
                24/7 Support Available
              </div>
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold text-white mb-4 neon-text">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center group"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 pt-8 border-t border-cyan-400/20">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-4 neon-text">
              Stay Updated with AI Innovations
            </h3>
            <p className="text-gray-300 mb-8">
              Get the latest insights, updates, and exclusive offers delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-slate-800/50 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
              />
              <button className="cyber-button px-6 py-3 font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-12 pt-8 border-t border-cyan-400/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-6 md:mb-0">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-400">
              <span>© {currentYear} Zion Tech Group. All rights reserved.</span>
              <div className="flex space-x-4">
                <a href="/privacy" className="hover:text-cyan-400 transition-colors">Privacy Policy</a>
                <a href="/terms" className="hover:text-cyan-400 transition-colors">Terms of Service</a>
                <a href="/cookies" className="hover:text-cyan-400 transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-slate-900/50 border-t border-cyan-400/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <div className="flex items-center space-x-4 mb-2 md:mb-0">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>All systems operational</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span>Powered by AI & Quantum Computing</span>
              <div className="flex items-center space-x-1">
                <Brain className="w-4 h-4 text-cyan-400" />
                <Cpu className="w-4 h-4 text-purple-400" />
                <Zap className="w-4 h-4 text-yellow-400" />
                <Shield className="w-4 h-4 text-green-400" />
                <Globe className="w-4 h-4 text-blue-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;