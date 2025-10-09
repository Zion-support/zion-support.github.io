'use client';
import React, { memo } from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, Award, Shield, Zap, ArrowRight, Brain, Cloud, Code, BarChart, Users, Globe, Facebook, Twitter, Linkedin, Instagram, Youtube, Github, MessageSquare, Star, TrendingUp, CheckCircle, Settings, Database, Smartphone, Lock, Target, Sparkles } from 'lucide-react';

const Footer: React.FC = memo(() => {
  const currentYear = new Date().getFullYear();
  
  const aiServices = [
    { name: 'AI Services', url: '/ai-services', description: 'Comprehensive AI solutions' },
    { name: 'AI Marketing', url: '/ai-marketing', description: 'AI-powered marketing automation' },
    { name: 'AI Automation', url: '/ai-workflow-automation', description: 'Intelligent process automation' },
    { name: 'AI Healthcare', url: '/ai-healthcare', description: 'Medical AI solutions' },
    { name: 'AI Fintech', url: '/ai-fintech', description: 'Financial AI applications' },
    { name: 'AI Content Generation', url: '/ai-content-generation', description: 'AI content creation' },
    { name: 'AI Data Analytics', url: '/ai-data-analytics', description: 'Advanced data insights' },
    { name: 'AI Cybersecurity', url: '/ai-cybersecurity', description: 'AI security solutions' },
    { name: 'AI Customer Support', url: '/ai-customer-support', description: 'AI-powered customer service' },
    { name: 'AI Sales Automation', url: '/ai-sales-automation', description: 'Intelligent sales processes' },
    { name: 'AI Data Visualization', url: '/ai-data-visualization', description: 'Advanced data visualization' },
    { name: 'AI Lead Generation', url: '/ai-lead-generation', description: 'AI-powered lead generation' },
    { name: 'AI Document Processing', url: '/ai-document-processing', description: 'AI document processing' },
    { name: 'AI Mobile Apps', url: '/ai-mobile-app-development', description: 'Mobile AI applications' },
    { name: 'AI E-commerce', url: '/ai-ecommerce-solutions', description: 'E-commerce AI solutions' }
  ];

  const itServices = [
    { name: 'IT Services', url: '/it-services', description: 'Comprehensive IT support' },
    { name: 'IT Infrastructure', url: '/it-infrastructure', description: 'Enterprise infrastructure' },
    { name: 'Cybersecurity', url: '/cybersecurity', description: 'Security solutions' },
    { name: 'DevOps & CI/CD', url: '/devops', description: 'Development operations' },
    { name: 'Database Services', url: '/database', description: 'Database management' },
    { name: 'Cloud Services', url: '/cloud-services', description: 'Cloud solutions' },
    { name: 'Networking', url: '/networking', description: 'Network infrastructure' },
    { name: 'IT Consulting', url: '/it-consulting', description: 'Strategic IT planning' },
    { name: 'Managed IT Services', url: '/managed-it', description: '24/7 IT management' }
  ];

  const microSaasServices = [
    { name: 'Micro SAAS Solutions', url: '/micro-saas', description: '50+ AI-powered tools' },
    { name: 'AI Writing Assistant', url: '/ai-writing-assistant', description: 'AI writing tool' },
    { name: 'Smart Analytics', url: '/smart-analytics', description: 'Business analytics' },
    { name: 'AI Scheduler', url: '/ai-scheduler', description: 'Smart scheduling' },
    { name: 'Expense Tracker', url: '/expense-tracker', description: 'Expense management' },
    { name: 'Task Manager Pro', url: '/task-manager-pro', description: 'Task management' },
    { name: 'CRM Lite', url: '/crm-lite', description: 'Customer management' },
    { name: 'Email Optimizer', url: '/email-optimizer', description: 'Email marketing' },
    { name: 'Social Media Manager', url: '/social-media-manager', description: 'Social media tools' },
    { name: 'AI Design Studio', url: '/ai-design-studio', description: 'Design tools' },
    { name: 'Landing Page Builder', url: '/landing-page-builder', description: 'Page builder' },
    { name: 'SEO Optimizer', url: '/seo-optimizer', description: 'SEO tools' },
    { name: 'Ad Campaign Manager', url: '/ad-campaign-manager', description: 'Ad management' },
    { name: 'Code Assistant', url: '/code-assistant', description: 'Development AI' },
    { name: 'API Builder', url: '/api-builder', description: 'API development' },
    { name: 'Bug Tracker Pro', url: '/bug-tracker-pro', description: 'Bug management' }
  ];

  const emergingTech = [
    { name: 'Quantum Computing', url: '/quantum-computing', description: 'Quantum solutions' },
    { name: 'Robotics', url: '/robotics', description: 'Intelligent robotics' },
    { name: 'IoT & Edge Computing', url: '/iot-edge-computing', description: 'Connected devices' },
    { name: 'Blockchain & Web3', url: '/blockchain-web3', description: 'Decentralized solutions' },
    { name: 'Business Intelligence', url: '/business-intelligence', description: 'Data insights' },
    { name: 'Autonomous Systems', url: '/autonomous-systems', description: 'Self-managing systems' }
  ];

  const companyLinks = [
    { name: 'About Us', url: '/about' },
    { name: 'Our Team', url: '/team' },
    { name: 'Case Studies', url: '/case-studies' },
    { name: 'Careers', url: '/careers' },
    { name: 'News', url: '/news' },
    { name: 'Blog', url: '/blog' }
  ];

  const supportLinks = [
    { name: 'Contact Us', url: '/contact' },
    { name: 'Support Center', url: '/support' },
    { name: 'Documentation', url: '/docs' },
    { name: 'API Reference', url: '/api-docs' },
    { name: 'System Status', url: '/status' },
    { name: 'Help Center', url: '/help' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', url: '/privacy' },
    { name: 'Terms of Service', url: '/terms' },
    { name: 'Cookie Policy', url: '/cookies' },
    { name: 'GDPR Compliance', url: '/gdpr' },
    { name: 'Security', url: '/security' },
    { name: 'Compliance', url: '/compliance' }
  ];

  const socialLinks = [
    { name: 'LinkedIn', url: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
    { name: 'Twitter', url: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'GitHub', url: 'https://github.com/ziontechgroup', icon: Github },
    { name: 'YouTube', url: 'https://youtube.com/@ziontechgroup', icon: Youtube },
    { name: 'Facebook', url: 'https://facebook.com/ziontechgroup', icon: Facebook },
    { name: 'Instagram', url: 'https://instagram.com/ziontechgroup', icon: Instagram }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg quantum-particles">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white cyber-text">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 mb-6 cyber-body">
              Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                <Phone className="w-4 h-4" />
                <a href="tel:+13024640950" className="text-sm">+1 (302) 464-0950</a>
              </div>
              <div className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                <Mail className="w-4 h-4" />
                <a href="mailto:kleber@ziontechgroup.com" className="text-sm">kleber@ziontechgroup.com</a>
              </div>
              <div className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">364 E Main St STE 1008<br />Middletown, DE 19709</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-cyan-400 mb-3 uppercase tracking-wider">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300"
                    aria-label={social.name}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* AI Services */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Brain className="w-5 h-5 text-purple-400" />
              <h3 className="text-lg font-semibold text-white cyber-subtitle">AI Services</h3>
            </div>
            <ul className="space-y-2">
              {aiServices.slice(0, 8).map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.url}
                    className="text-sm text-gray-300 hover:text-cyan-400 transition-colors duration-300 block py-1"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/ai-services"
                  className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium"
                >
                  View all AI services →
                </Link>
              </li>
            </ul>
          </div>

          {/* IT Services */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Cloud className="w-5 h-5 text-blue-400" />
              <h3 className="text-lg font-semibold text-white cyber-subtitle">IT Services</h3>
            </div>
            <ul className="space-y-2">
              {itServices.slice(0, 8).map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.url}
                    className="text-sm text-gray-300 hover:text-cyan-400 transition-colors duration-300 block py-1"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/it-services"
                  className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium"
                >
                  View all IT services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Micro SAAS */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Zap className="w-5 h-5 text-green-400" />
              <h3 className="text-lg font-semibold text-white cyber-subtitle">Micro SAAS</h3>
            </div>
            <ul className="space-y-2">
              {microSaasServices.slice(0, 8).map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.url}
                    className="text-sm text-gray-300 hover:text-cyan-400 transition-colors duration-300 block py-1"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/micro-saas"
                  className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium"
                >
                  View all 50+ tools →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Secondary Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 pt-8 border-t border-gray-700">
          <div>
            <h4 className="text-sm font-semibold text-cyan-400 mb-4 uppercase tracking-wider">Company</h4>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.url}
                    className="text-sm text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-cyan-400 mb-4 uppercase tracking-wider">Support</h4>
            <ul className="space-y-2">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.url}
                    className="text-sm text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-cyan-400 mb-4 uppercase tracking-wider">Legal</h4>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.url}
                    className="text-sm text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-cyan-600/20 to-purple-600/20 rounded-lg p-6 mb-8 cyber-card neon-border">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h4 className="text-lg font-semibold text-white mb-2">Stay Updated</h4>
              <p className="text-gray-300 text-sm">Get the latest AI and tech insights delivered to your inbox.</p>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-2 bg-slate-800 border border-gray-600 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors duration-300"
              />
              <button className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-r-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gray-700">
          <div className="text-sm text-gray-400 mb-4 md:mb-0">
            © {currentYear} Zion Tech Group. All rights reserved.
          </div>
          <div className="flex items-center space-x-6 text-sm text-gray-400">
            <span className="flex items-center space-x-1">
              <Shield className="w-4 h-4 text-green-400" />
              <span>SSL Secured</span>
            </span>
            <span className="flex items-center space-x-1">
              <Award className="w-4 h-4 text-yellow-400" />
              <span>ISO 27001 Certified</span>
            </span>
            <span className="flex items-center space-x-1">
              <Clock className="w-4 h-4 text-blue-400" />
              <span>24/7 Support</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;