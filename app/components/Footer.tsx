'use client';
import React, { memo } from 'react';
import { Phone, Mail, MapPin, Clock, Award, Shield, Zap, ArrowRight, Brain, Cloud, Code, BarChart, Users, Globe, Facebook, Twitter, Linkedin, Instagram, Youtube, Github, MessageSquare, Star, TrendingUp, CheckCircle, Cpu, Database, Smartphone, Lock, Target, Sparkles, FileText, Calendar, Settings, PieChart, Activity, DollarSign, Award as AwardIcon, Users as UsersIcon, Star as StarIcon, CheckCircle as CheckIcon } from 'lucide-react';

const Footer: React.FC = memo(() => {
  const currentYear = new Date().getFullYear();
  
  const aiServices = [
    { name: 'AI Services', url: '/ai-services', description: 'Core AI Solutions' },
    { name: 'AI Marketing', url: '/ai-marketing', description: 'AI-Powered Marketing' },
    { name: 'AI Automation', url: '/ai-automation', description: 'Process Automation' },
    { name: 'AI Healthcare', url: '/ai-healthcare', description: 'Medical AI Solutions' },
    { name: 'AI Fintech', url: '/ai-fintech', description: 'Financial AI' },
    { name: 'AI Content Generation', url: '/ai-content-generation', description: 'Content Creation' },
    { name: 'AI Data Analytics', url: '/ai-data-analytics', description: 'Data Intelligence' },
    { name: 'AI Cybersecurity', url: '/ai-cybersecurity', description: 'Security AI' },
    { name: 'AI Workflow Automation', url: '/ai-workflow-automation', description: 'Workflow Optimization' },
    { name: 'AI Customer Support', url: '/ai-customer-support', description: 'AI Customer Service' },
    { name: 'AI Sales Automation', url: '/ai-sales-automation', description: 'Sales Intelligence' },
    { name: 'AI Data Visualization', url: '/ai-data-visualization', description: 'Data Visualization' },
    { name: 'AI Lead Generation', url: '/ai-lead-generation', description: 'Lead Intelligence' },
    { name: 'AI Document Processing', url: '/ai-document-processing', description: 'Document AI' },
    { name: 'AI Mobile Apps', url: '/ai-mobile-app-development', description: 'Mobile AI' },
    { name: 'AI E-commerce', url: '/ai-ecommerce-solutions', description: 'E-commerce AI' }
  ];

  const itServices = [
    { name: 'IT Services', url: '/it-services', description: 'Comprehensive IT Support' },
    { name: 'IT Infrastructure', url: '/it-infrastructure', description: 'Enterprise Infrastructure' },
    { name: 'Cybersecurity', url: '/cybersecurity', description: 'Security Solutions' },
    { name: 'DevOps & CI/CD', url: '/devops', description: 'Development Operations' },
    { name: 'Database Services', url: '/database', description: 'Database Management' },
    { name: 'Cloud Services', url: '/cloud-services', description: 'Cloud Solutions' },
    { name: 'Networking', url: '/networking', description: 'Network Infrastructure' },
    { name: 'IT Consulting', url: '/it-consulting', description: 'Strategic IT Planning' },
    { name: 'Managed IT Services', url: '/managed-it', description: '24/7 IT Management' },
    { name: 'System Administration', url: '/system-admin', description: 'System Management' },
    { name: 'Performance Optimization', url: '/performance-optimization', description: 'System Tuning' },
    { name: 'Backup & Recovery', url: '/backup-recovery', description: 'Data Protection' }
  ];

  const microSaasServices = [
    { name: 'AI Code Review Assistant', url: '/ai-code-review', description: 'Code Quality Analysis' },
    { name: 'AI SEO Optimizer', url: '/ai-seo-optimizer', description: 'SEO Intelligence' },
    { name: 'AI Analytics Dashboard', url: '/ai-analytics-dashboard', description: 'Business Intelligence' },
    { name: 'AI Document Processing', url: '/ai-document-processing', description: 'Document Intelligence' },
    { name: 'AI Email Assistant', url: '/ai-email-assistant', description: 'Email Intelligence' },
    { name: 'AI Data Visualization', url: '/ai-data-visualization', description: 'Data Visualization' },
    { name: 'AI E-commerce Solutions', url: '/ai-ecommerce-solutions', description: 'E-commerce Intelligence' },
    { name: 'AI Scheduler', url: '/ai-scheduler', description: 'Smart Scheduling' },
    { name: 'AI Writing Assistant', url: '/ai-writing-assistant', description: 'Writing Intelligence' },
    { name: 'AI Workflow Automation', url: '/ai-workflow-automation', description: 'Workflow Intelligence' },
    { name: 'AI CRM System', url: '/ai-crm', description: 'Customer Intelligence' },
    { name: 'AI Expense Tracker', url: '/expense-tracker', description: 'Financial Intelligence' },
    { name: 'AI Task Manager Pro', url: '/task-manager-pro', description: 'Task Intelligence' },
    { name: 'AI Marketing Tools', url: '/marketing-tools', description: 'Marketing Intelligence' },
    { name: 'AI Productivity Suite', url: '/productivity', description: 'Productivity Intelligence' }
  ];

  const specializedServices = [
    { name: 'Quantum Computing', url: '/quantum-computing', description: 'Next-Gen Computing' },
    { name: 'Autonomous Systems', url: '/autonomous-systems', description: 'Self-Managing Systems' },
    { name: 'Blockchain & Web3', url: '/blockchain-web3', description: 'Decentralized Solutions' },
    { name: 'IoT & Edge Computing', url: '/iot-edge-computing', description: 'Connected Devices' },
    { name: 'Business Intelligence', url: '/business-intelligence', description: 'Data-Driven Insights' },
    { name: 'Robotics', url: '/robotics', description: 'Intelligent Robots' },
    { name: 'Smart Analytics', url: '/smart-analytics', description: 'Advanced Analytics' },
    { name: 'Enterprise Solutions', url: '/enterprise', description: 'Enterprise-Grade Solutions' }
  ];

  const companyLinks = [
    { name: 'About Us', url: '/about', description: 'Our Story & Mission' },
    { name: 'Our Team', url: '/team', description: 'Meet the Experts' },
    { name: 'Careers', url: '/careers', description: 'Join Our Team' },
    { name: 'Case Studies', url: '/case-studies', description: 'Success Stories' },
    { name: 'Blog', url: '/blog', description: 'Latest Insights' },
    { name: 'News', url: '/news', description: 'Industry News' },
    { name: 'Contact', url: '/contact', description: 'Get in Touch' },
    { name: 'Support', url: '/support', description: 'Customer Support' }
  ];

  const resourcesLinks = [
    { name: 'Documentation', url: '/docs', description: 'Technical Documentation' },
    { name: 'API Reference', url: '/api-docs', description: 'API Documentation' },
    { name: 'Tutorials', url: '/tutorials', description: 'Learning Resources' },
    { name: 'White Papers', url: '/white-papers', description: 'Research Papers' },
    { name: 'Webinars', url: '/webinars', description: 'Educational Webinars' },
    { name: 'Community', url: '/community', description: 'Developer Community' },
    { name: 'Status', url: '/status', description: 'System Status' },
    { name: 'Sitemap', url: '/sitemap', description: 'Site Navigation' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', url: '/privacy', description: 'Data Protection' },
    { name: 'Terms of Service', url: '/terms', description: 'Terms & Conditions' },
    { name: 'Cookie Policy', url: '/cookies', description: 'Cookie Information' },
    { name: 'GDPR Compliance', url: '/gdpr', description: 'GDPR Information' },
    { name: 'Security', url: '/security', description: 'Security Information' },
    { name: 'Compliance', url: '/compliance', description: 'Regulatory Compliance' }
  ];

  const socialLinks = [
    { name: 'LinkedIn', url: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin, color: 'hover:text-blue-400' },
    { name: 'Twitter', url: 'https://twitter.com/ziontechgroup', icon: Twitter, color: 'hover:text-blue-400' },
    { name: 'Facebook', url: 'https://facebook.com/ziontechgroup', icon: Facebook, color: 'hover:text-blue-400' },
    { name: 'Instagram', url: 'https://instagram.com/ziontechgroup', icon: Instagram, color: 'hover:text-pink-400' },
    { name: 'YouTube', url: 'https://youtube.com/@ziontechgroup', icon: Youtube, color: 'hover:text-red-400' },
    { name: 'GitHub', url: 'https://github.com/ziontechgroup', icon: Github, color: 'hover:text-gray-400' }
  ];

  const stats = [
    { icon: Users, value: '500+', label: 'Happy Clients' },
    { icon: Award, value: '50+', label: 'Awards Won' },
    { icon: TrendingUp, value: '300%', label: 'Average ROI' },
    { icon: Shield, value: '99.9%', label: 'Uptime SLA' }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white neon-text cyber-text">Zion Tech Group</h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services. 
              Transform your business with cutting-edge technology.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-cyan-400" />
                <a href="tel:+13024640950" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-cyan-400" />
                <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span className="text-gray-300">364 E Main St STE 1008, Middletown, DE 19709</span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 cyber-card energy-pulse">
                  <stat.icon className="w-6 h-6 text-cyan-400 mb-2" />
                  <div className="text-2xl font-bold text-white neon-text">{stat.value}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center text-gray-300 ${social.color} transition-all duration-300 hover:bg-white/20 hover:scale-110 cyber-card`}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* AI Services */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 neon-text flex items-center">
              <Brain className="w-5 h-5 mr-2 text-purple-400" />
              AI Services
            </h4>
            <ul className="space-y-3">
              {aiServices.slice(0, 8).map((service, index) => (
                <li key={index}>
                  <a
                    href={service.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors text-sm flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* IT Services */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 neon-text flex items-center">
              <Cpu className="w-5 h-5 mr-2 text-blue-400" />
              IT Services
            </h4>
            <ul className="space-y-3">
              {itServices.slice(0, 8).map((service, index) => (
                <li key={index}>
                  <a
                    href={service.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors text-sm flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Micro SAAS */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 neon-text flex items-center">
              <Code className="w-5 h-5 mr-2 text-green-400" />
              Micro SAAS
            </h4>
            <ul className="space-y-3">
              {microSaasServices.slice(0, 8).map((service, index) => (
                <li key={index}>
                  <a
                    href={service.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors text-sm flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Resources */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 neon-text flex items-center">
              <Globe className="w-5 h-5 mr-2 text-orange-400" />
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.slice(0, 8).map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors text-sm flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Specialized Services Section */}
        <div className="mt-16 pt-8 border-t border-gray-700">
          <h4 className="text-xl font-bold text-white mb-8 neon-text text-center cyber-text">
            Specialized Solutions
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {specializedServices.map((service, index) => (
              <a
                key={index}
                href={service.url}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-white/10 transition-all duration-300 cyber-card energy-pulse hover:scale-105"
              >
                <div className="text-2xl mb-2">⚡</div>
                <div className="text-sm font-medium text-white mb-1">{service.name}</div>
                <div className="text-xs text-gray-400">{service.description}</div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved. | 
              <a href="/privacy" className="hover:text-cyan-400 transition-colors ml-2">Privacy</a> | 
              <a href="/terms" className="hover:text-cyan-400 transition-colors ml-2">Terms</a> | 
              <a href="/cookies" className="hover:text-cyan-400 transition-colors ml-2">Cookies</a>
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-green-400" />
                <span>SSL Secured</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-blue-400" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-4 h-4 text-yellow-400" />
                <span>ISO Certified</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;