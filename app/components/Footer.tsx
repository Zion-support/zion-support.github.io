'use client';
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Award, Shield, Zap, ArrowRight, Brain, Cloud, Code, BarChart, Users, Globe, Facebook, Twitter, Linkedin, Instagram, Youtube, Github, MessageSquare, Star, TrendingUp, CheckCircle } from 'lucide-react';

const Footer: React.FC = memo(() => {
  const currentYear = new Date().getFullYear();
  
  const microSaasServices = [
    { name: 'AI Project Manager', url: '/ai-project-manager', description: 'Intelligent project planning', icon: '📊', popular: true },
    { name: 'AI Social Media Manager', url: '/ai-social-media-manager', description: 'Automated social media', icon: '📱', popular: true },
    { name: 'AI Analytics Dashboard', url: '/ai-analytics-dashboard', description: 'AI-powered analytics', icon: '📈', popular: true },
    { name: 'AI Email Marketing', url: '/ai-email-marketing', description: 'Intelligent email campaigns', icon: '📧', popular: true },
    { name: 'AI Customer Support Bot', url: '/ai-customer-support-bot', description: '24/7 AI support', icon: '🤖', popular: true },
    { name: 'AI Code Review Assistant', url: '/ai-code-generation', description: 'Automated code analysis', icon: '🔍', popular: false }
  ];

  const aiServices = [
    { name: 'Machine Learning', url: '/ai-services', description: 'Custom ML models' },
    { name: 'Natural Language Processing', url: '/ai-services', description: 'Text analysis & NLP' },
    { name: 'Computer Vision', url: '/ai-services', description: 'Image & video analysis' },
    { name: 'AI Automation', url: '/ai-automation', description: 'Process automation' },
    { name: 'AI Healthcare', url: '/ai-healthcare', description: 'Medical AI solutions' },
    { name: 'AI Fintech', url: '/ai-fintech', description: 'Financial AI services' }
  ];

  const itServices = [
    { name: 'Cloud Migration', url: '/cloud-migration', description: 'AWS, Azure, GCP' },
    { name: 'Cybersecurity', url: '/cybersecurity', description: 'Security solutions' },
    { name: 'DevOps & CI/CD', url: '/devops', description: 'Development workflows' },
    { name: 'Database Management', url: '/database', description: 'Database optimization' },
    { name: 'IT Consulting', url: '/it-consulting', description: 'Strategic IT guidance' },
    { name: 'Infrastructure', url: '/it-infrastructure', description: 'IT infrastructure setup' }
  ];

  const companyLinks = [
    { name: 'About Us', url: '/about' },
    { name: 'Our Team', url: '/team' },
    { name: 'Careers', url: '/careers' },
    { name: 'Case Studies', url: '/case-studies' },
    { name: 'Blog', url: '/blog' },
    { name: 'News', url: '/news' }
  ];

  const supportLinks = [
    { name: 'Contact Us', url: '/contact' },
    { name: 'Support Center', url: '/support' },
    { name: 'Documentation', url: '/docs' },
    { name: 'API Reference', url: '/api-docs' },
    { name: 'Status Page', url: '/status' },
    { name: 'System Status', url: '/system-status' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', url: '/privacy' },
    { name: 'Terms of Service', url: '/terms' },
    { name: 'Cookie Policy', url: '/cookies' },
    { name: 'GDPR Compliance', url: '/gdpr' },
    { name: 'Security', url: '/security' },
    { name: 'Compliance', url: '/compliance' }
  ];

  return (
    <footer className="bg-slate-900 border-t border-cyan-500/20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">Z</span>
              </div>
              <span className="text-xl font-bold text-white neon-text">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com/company/ziontechgroup" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/ziontechgroup" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://github.com/ziontechgroup" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Micro SAAS Solutions */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-cyan-400 neon-text">Micro SAAS Solutions</h3>
            <ul className="space-y-3">
              {microSaasServices.slice(0, 6).map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm group flex items-center"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* AI & IT Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-cyan-400 neon-text">AI & IT Services</h3>
            <ul className="space-y-3">
              {aiServices.slice(0, 4).map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm group flex items-center"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.name}
                  </Link>
                </li>
              ))}
              {itServices.slice(0, 2).map((service, index) => (
                <li key={index + 4}>
                  <Link 
                    to={service.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm group flex items-center"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Support */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-cyan-400 neon-text">Company & Support</h3>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <h4 className="text-sm font-medium text-white mb-3">Company</h4>
                <ul className="space-y-2">
                  {companyLinks.slice(0, 3).map((link, index) => (
                    <li key={index}>
                      <Link 
                        to={link.url}
                        className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-medium text-white mb-3">Support</h4>
                <ul className="space-y-2">
                  {supportLinks.slice(0, 3).map((link, index) => (
                    <li key={index}>
                      <Link 
                        to={link.url}
                        className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm"
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

        {/* Contact Information */}
        <div className="border-t border-cyan-500/20 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-cyan-400" />
              <div>
                <p className="text-white font-medium">Phone</p>
                <p className="text-gray-300 text-sm">(302) 464-0950</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-cyan-400" />
              <div>
                <p className="text-white font-medium">Email</p>
                <p className="text-gray-300 text-sm">kleber@ziontechgroup.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-cyan-400" />
              <div>
                <p className="text-white font-medium">Address</p>
                <p className="text-gray-300 text-sm">364 E Main St STE 1008, Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cyan-500/20 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-green-400" />
                <span className="text-sm text-gray-300">SOC 2 Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-4 h-4 text-yellow-400" />
                <span className="text-sm text-gray-300">ISO 27001 Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-gray-300">Global Reach</span>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              {legalLinks.slice(0, 3).map((link, index) => (
                <Link 
                  key={index}
                  to={link.url}
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="text-center mt-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';
export default Footer;