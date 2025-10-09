'use client';
import React from 'react';
import { Phone, Mail, MapPin, Clock, Star, Zap, Brain, Cpu, Shield, Cloud, Code, Bot, ArrowRight, Linkedin, Twitter, Github, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const serviceCategories = [
    {
      title: 'AI Services',
      icon: Brain,
      services: [
        { name: 'AI Analytics', href: '/ai-analytics', price: '$299/mo' },
        { name: 'AI Automation', href: '/ai-automation', price: '$399/mo' },
        { name: 'AI Code Generation', href: '/ai-code-generation', price: '$199/mo' },
        { name: 'AI Customer Support', href: '/ai-customer-support', price: '$149/mo' },
        { name: 'AI Data Visualization', href: '/ai-data-visualization', price: '$249/mo' },
        { name: 'AI Email Marketing', href: '/ai-email-marketing', price: '$59/mo' },
        { name: 'AI Fashion Design', href: '/ai-fashion-design', price: '$79/mo' },
        { name: 'AI Fitness Coach', href: '/ai-fitness-coach', price: '$39/mo' }
      ]
    },
    {
      title: 'IT Services',
      icon: Cpu,
      services: [
        { name: 'Cloud Migration', href: '/cloud-migration', price: '$1,299/mo' },
        { name: 'IT Consulting', href: '/it-consulting', price: '$199/hr' },
        { name: 'Cybersecurity Suite', href: '/cybersecurity-suite', price: '$799/mo' },
        { name: 'DevOps & CI/CD', href: '/devops-cicd', price: '$599/mo' },
        { name: 'Database Management', href: '/database-management', price: '$399/mo' }
      ]
    },
    {
      title: 'Micro SAAS',
      icon: Zap,
      services: [
        { name: 'AI Writing Assistant', href: '/ai-writing-assistant', price: '$19/mo' },
        { name: 'AI Mobile App Builder', href: '/ai-mobile-app-builder', price: '$99/mo' },
        { name: 'AI Design Studio', href: '/ai-design-studio', price: '$39/mo' },
        { name: 'AI SEO Optimizer', href: '/ai-seo-optimizer', price: '$49/mo' },
        { name: 'AI Fintech Solutions', href: '/ai-fintech', price: '$1,499/mo' },
        { name: 'Quantum Computing', href: '/quantum-computing', price: 'Custom' }
      ]
    }
  ];

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/careers' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' }
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/zion-tech-group', icon: Linkedin },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github },
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram },
    { name: 'YouTube', href: 'https://youtube.com/ziontechgroup', icon: Youtube }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 border-t border-cyan-500/20">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white neon-text">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, 
              and digital transformation services. Transform your business with cutting-edge technology.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-4 h-4 text-cyan-400" />
                <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors">
                  +1 (302) 464-0950
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-4 h-4 text-cyan-400" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-start space-x-3 text-gray-300">
                <MapPin className="w-4 h-4 text-cyan-400 mt-1" />
                <span className="text-sm">
                  364 E Main St STE 1008<br />
                  Middletown, DE 19709
                </span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Clock className="w-4 h-4 text-cyan-400" />
                <span className="text-sm">24/7 Support Available</span>
              </div>
            </div>
          </div>

          {/* Services */}
          {serviceCategories.map((category) => (
            <div key={category.title} className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <category.icon className="w-5 h-5 text-cyan-400" />
                <h3 className="text-lg font-semibold text-white">{category.title}</h3>
              </div>
              <ul className="space-y-3">
                {category.services.map((service) => (
                  <li key={service.name}>
                    <a
                      href={service.href}
                      className="flex items-center justify-between text-gray-300 hover:text-cyan-400 transition-colors group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform">
                        {service.name}
                      </span>
                      <span className="text-cyan-400 text-sm font-medium">
                        {service.price}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Quick Links */}
        <div className="mt-12 pt-8 border-t border-cyan-500/20">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {quickLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* Social Links & Newsletter */}
        <div className="mt-12 pt-8 border-t border-cyan-500/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            {/* Social Links */}
            <div className="flex items-center space-x-6">
              <span className="text-gray-300 font-medium">Follow Us:</span>
              <div className="flex items-center space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-300 font-medium">Stay Updated:</span>
              <div className="flex items-center space-x-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 bg-slate-800 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                />
                <button className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 flex items-center space-x-2">
                  <span>Subscribe</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-slate-900/50 border-t border-cyan-500/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>Delivering $50M+ annual savings</span>
              <span>•</span>
              <span>95% process automation</span>
              <span>•</span>
              <span>300% ROI guaranteed</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;