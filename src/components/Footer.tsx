'use client';
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Brain, Cloud, Shield, Code, BarChart, Users, Zap, Target, Globe, Database, Smartphone, Settings, Lock, TrendingUp, Star, Award, ArrowRight, Facebook, Twitter, Linkedin, Github, Youtube, Instagram, MessageSquare, Share2, Heart, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const microSaasServices = [
    { name: 'AI Project Manager', url: '/ai-project-manager', description: 'Intelligent project planning', icon: '📊', popular: true },
    { name: 'AI Social Media Manager', url: '/ai-social-media-manager', description: 'Automated social media', icon: '📱', popular: true },
    { name: 'AI Analytics Dashboard', url: '/ai-analytics', description: 'AI-powered analytics', icon: '📈', popular: true },
    { name: 'AI Email Marketing', url: '/ai-email-marketing', description: 'Intelligent email campaigns', icon: '📧', popular: true },
    { name: 'AI Customer Support Bot', url: '/ai-customer-support-bot', description: '24/7 AI support', icon: '🤖', popular: true },
    { name: 'AI Code Review Assistant', url: '/ai-code-generation', description: 'Automated code analysis', icon: '🔍', popular: false },
    { name: 'AI Content Generator', url: '/ai-content-generation', description: 'AI content creation', icon: '✍️', popular: false },
    { name: 'AI SEO Optimizer', url: '/ai-marketing', description: 'AI-driven SEO', icon: '🎯', popular: false },
    { name: 'AI Invoice Generator', url: '/ai-invoice-generator', description: 'Automated invoice creation', icon: '💰', popular: false },
    { name: 'AI Lead Scoring', url: '/ai-lead-scoring', description: 'Intelligent lead qualification', icon: '🎯', popular: false },
    { name: 'AI Sales Forecasting', url: '/ai-sales-forecasting', description: 'Advanced sales predictions', icon: '📊', popular: false },
    { name: 'AI E-commerce Optimizer', url: '/ai-ecommerce-optimizer', description: 'E-commerce optimization', icon: '🛒', popular: false }
  ];

  const serviceCategories = [
    {
      title: 'AI Services',
      icon: Brain,
      services: [
        { name: 'Machine Learning', href: '/ai-services' },
        { name: 'Natural Language Processing', href: '/ai-nlp' },
        { name: 'Computer Vision', href: '/ai-computer-vision' },
        { name: 'AI Automation', href: '/ai-automation' },
        { name: 'AI Consulting', href: '/ai-consulting' },
        { name: 'AI Research', href: '/ai-research' }
      ]
    },
    {
      title: 'IT Services',
      icon: Cloud,
      services: [
        { name: 'Cloud Migration', href: '/cloud-migration' },
        { name: 'Cybersecurity', href: '/cybersecurity' },
        { name: 'DevOps & CI/CD', href: '/devops' },
        { name: 'Database Management', href: '/database' },
        { name: 'IT Infrastructure', href: '/it-infrastructure' },
        { name: 'IT Consulting', href: '/it-consulting' }
      ]
    },
    {
      title: 'Micro SAAS',
      icon: Zap,
      services: [
        { name: 'AI Project Manager', href: '/ai-project-manager' },
        { name: 'AI Social Media Manager', href: '/ai-social-media-manager' },
        { name: 'AI Analytics Dashboard', href: '/ai-analytics-dashboard' },
        { name: 'AI Email Marketing', href: '/ai-email-marketing' },
        { name: 'AI Customer Support Bot', href: '/ai-customer-support-bot' },
        { name: 'AI Code Generation', href: '/ai-code-generation' }
      ]
    }
  ];

  const companyLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Blog', href: '/blog' },
    { name: 'News', href: '/news' }
  ];

  const supportLinks = [
    { name: 'Contact Us', href: '/contact' },
    { name: 'Support Center', href: '/support' },
    { name: 'Documentation', href: '/docs' },
    { name: 'API Documentation', href: '/api-docs' },
    { name: 'Status Page', href: '/status' },
    { name: 'System Status', href: '/status' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'Compliance', href: '/compliance' },
    { name: 'GDPR', href: '/gdpr' },
    { name: 'Security', href: '/security' }
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/zion-tech-group', icon: Linkedin },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github },
    { name: 'YouTube', href: 'https://youtube.com/ziontechgroup', icon: Youtube },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram }
  ];

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+1 (302) 464-0950', 'Mon-Fri 9AM-6PM EST'],
      action: 'tel:+13024640950'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['kleber@ziontechgroup.com', 'support@ziontechgroup.com'],
      action: 'mailto:kleber@ziontechgroup.com'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: ['364 E Main St STE 1008', 'Middletown, DE 19709', 'United States'],
      action: 'https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Expert Team Members' },
    { number: '99.9%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <footer className="bg-slate-900 border-t border-cyan-400/20">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Top Section */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">Z</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white cyber-text neon-pulse">Zion Tech Group</h3>
                  <p className="text-xs text-cyan-400">AI & IT Solutions</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, 
                and digital transformation services. Transform your business with cutting-edge technology.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:bg-slate-700 transition-colors"
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="lg:col-span-1">
              <h4 className="text-lg font-bold text-white mb-6 neon-text">Services</h4>
              <div className="space-y-4">
                {serviceCategories.map((category, categoryIndex) => (
                  <div key={categoryIndex}>
                    <div className="flex items-center space-x-2 mb-3">
                      <category.icon className="w-4 h-4 text-cyan-400" />
                      <span className="text-sm font-semibold text-white">{category.title}</span>
                    </div>
                    <div className="ml-6 space-y-2">
                      {category.services.slice(0, 3).map((service, serviceIndex) => (
                        <Link
                          key={serviceIndex}
                          to={service.href}
                          className="block text-sm text-gray-300 hover:text-cyan-400 transition-colors"
                        >
                          {service.name}
                        </Link>
                      ))}
                      <Link
                        to="/services"
                        className="block text-sm text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                      >
                        View All Services →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Company Links */}
            <div className="lg:col-span-1">
              <h4 className="text-lg font-bold text-white mb-6 neon-text">Company</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  {companyLinks.slice(0, 3).map((link, index) => (
                    <Link
                      key={index}
                      to={link.href}
                      className="block text-sm text-gray-300 hover:text-cyan-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
                <div className="space-y-2">
                  {companyLinks.slice(3).map((link, index) => (
                    <Link
                      key={index}
                      to={link.href}
                      className="block text-sm text-gray-300 hover:text-cyan-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h4 className="text-lg font-bold text-white mb-6 neon-text">Contact Info</h4>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <info.icon className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <h5 className="text-sm font-semibold text-white mb-1">{info.title}</h5>
                      <div className="space-y-1">
                        {info.details.map((detail, detailIndex) => (
                          <a
                            key={detailIndex}
                            href={info.action}
                            className="block text-sm text-gray-300 hover:text-cyan-400 transition-colors"
                          >
                            {detail}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="border-t border-gray-700 pt-8 mb-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-cyan-400 mb-2 neon-text">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="border-t border-gray-700 pt-8 mb-8">
            <div className="max-w-2xl mx-auto text-center">
              <h4 className="text-xl font-bold text-white mb-4 neon-text">Stay Updated</h4>
              <p className="text-gray-300 mb-6">
                Subscribe to our newsletter for the latest AI and technology insights, industry trends, and company updates.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                />
                <button className="cyber-button whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-300 text-sm">
                © {currentYear} Zion Tech Group. All rights reserved. Made with{' '}
                <Heart className="w-4 h-4 text-red-400 inline" /> in Delaware, USA.
              </div>
              <div className="flex flex-wrap gap-6">
                {legalLinks.map((link, index) => (
                  <Link
                    key={index}
                    to={link.href}
                    className="text-sm text-gray-300 hover:text-cyan-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;