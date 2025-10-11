'use client';
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Zap, Brain, Cloud, Code, Users, ArrowRight, Star, CheckCircle } from 'lucide-react';

const Footer: React.FC = memo(() => {
  const currentYear = new Date().getFullYear();
  
  const aiServices = [
    { name: 'AI Chatbots & NLP', url: '/ai-chatbot-builder', description: 'Conversational AI' },
    { name: 'AI Content Generation', url: '/ai-content-generation', description: 'Automated content' },
    { name: 'AI Data Analytics', url: '/ai-data-analytics', description: 'Business intelligence' },
    { name: 'AI Computer Vision', url: '/ai-computer-vision', description: 'Image analysis' },
    { name: 'AI Voice Solutions', url: '/ai-voice-solutions', description: 'Speech recognition' },
    { name: 'AI Workflow Automation', url: '/ai-automation', description: 'Process automation' },
    { name: 'AI Marketing', url: '/ai-marketing', description: 'AI-powered marketing' },
    { name: 'AI Healthcare', url: '/ai-healthcare', description: 'Medical AI solutions' },
    { name: 'AI Fintech', url: '/ai-fintech', description: 'Financial AI services' },
    { name: 'AI E-commerce', url: '/ai-ecommerce', description: 'E-commerce optimization' }
  ];

  const itServices = [
    { name: 'Cloud Migration', url: '/cloud-migration', description: 'AWS, Azure, GCP' },
    { name: 'Cybersecurity', url: '/cybersecurity', description: 'Advanced security' },
    { name: 'DevOps & CI/CD', url: '/devops', description: 'Automated deployment' },
    { name: 'Database Management', url: '/database', description: 'Database optimization' },
    { name: 'API Development', url: '/api-development', description: 'RESTful APIs' },
    { name: 'Mobile Development', url: '/mobile-development', description: 'Native apps' },
    { name: 'Network Solutions', url: '/network-solutions', description: 'Enterprise networking' },
    { name: 'IT Consulting', url: '/it-consulting', description: 'Strategic planning' },
    { name: 'System Integration', url: '/system-integration', description: 'Connect systems' },
    { name: 'IT Support', url: '/it-support', description: '24/7 support' }
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
    { name: 'System Requirements', url: '/requirements' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', url: '/privacy' },
    { name: 'Terms of Service', url: '/terms' },
    { name: 'Cookie Policy', url: '/cookies' },
    { name: 'GDPR Compliance', url: '/gdpr' },
    { name: 'Security', url: '/security' },
    { name: 'SLA', url: '/sla' }
  ];

  const microSaasServices = [
    { name: 'AI Writing Assistant', url: '/ai-writing-assistant', description: 'Content creation' },
    { name: 'Smart Analytics', url: '/smart-analytics', description: 'Business insights' },
    { name: 'AI Scheduler', url: '/ai-scheduler', description: 'Intelligent scheduling' },
    { name: 'Expense Tracker', url: '/expense-tracker', description: 'Financial management' },
    { name: 'Task Manager Pro', url: '/task-manager-pro', description: 'Project management' },
    { name: 'CRM Lite', url: '/crm-lite', description: 'Customer relations' },
    { name: 'Email Optimizer', url: '/email-optimizer', description: 'Email marketing' },
    { name: 'Social Media Manager', url: '/social-media-manager', description: 'Social media automation' }
  ];

  return (
    <footer className="relative bg-slate-900 text-gray-300 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
      
      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Zion Tech Group</h3>
                <p className="text-xs text-cyan-400 font-medium tracking-wider">AI & IT SOLUTIONS</p>
              </div>
            </div>
            
            <p className="text-gray-400 mb-6 leading-relaxed">
              Leading provider of cutting-edge AI and IT solutions that drive innovation, 
              efficiency, and growth for businesses worldwide.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors font-medium">
                  +1 (302) 464-0950
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors font-medium">
                  kleber@ziontechgroup.com
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-sm">364 E Main St STE 1008</p>
                  <p className="text-sm">Middletown, DE 19709</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                  <Clock className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-sm">Mon-Fri: 9AM-6PM EST</p>
                  <p className="text-sm text-cyan-400">24/7 Emergency Support</p>
                </div>
              </div>
            </div>
          </div>

          {/* AI Services */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 flex items-center">
              <Brain className="w-5 h-5 text-cyan-400 mr-2" />
              AI Services
            </h4>
            <ul className="space-y-3">
              {aiServices.slice(0, 8).map((service) => (
                <li key={service.name}>
                  <Link 
                    to={service.url} 
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="text-sm">{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* IT Services */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 flex items-center">
              <Cloud className="w-5 h-5 text-green-400 mr-2" />
              IT Services
            </h4>
            <ul className="space-y-3">
              {itServices.slice(0, 8).map((service) => (
                <li key={service.name}>
                  <Link 
                    to={service.url} 
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="text-sm">{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Support */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 flex items-center">
              <Users className="w-5 h-5 text-purple-400 mr-2" />
              Company
            </h4>
            <ul className="space-y-3 mb-8">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.url} 
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="text-sm">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
            
            <h4 className="text-lg font-bold text-white mb-6 flex items-center">
              <Code className="w-5 h-5 text-yellow-400 mr-2" />
              Support
            </h4>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.url} 
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="text-sm">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Micro SAAS Section */}
        <div className="mt-16 pt-8 border-t border-gray-700/50">
          <h4 className="text-lg font-bold text-white mb-6 text-center flex items-center justify-center">
            <Zap className="w-5 h-5 text-pink-400 mr-2" />
            Micro SAAS Solutions
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {microSaasServices.map((service) => (
              <Link
                key={service.name}
                to={service.url}
                className="bg-slate-800/50 hover:bg-slate-700/50 rounded-lg p-3 text-center transition-all duration-300 group border border-gray-700/50 hover:border-cyan-500/30"
              >
                <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">🚀</div>
                <div className="text-xs text-gray-300 group-hover:text-cyan-300 transition-colors">
                  {service.name}
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 pt-8 border-t border-gray-700/50">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex items-center justify-center space-x-2">
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <span className="text-white font-semibold">4.9/5 Rating</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Users className="w-5 h-5 text-cyan-400" />
              <span className="text-white font-semibold">500+ Happy Clients</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span className="text-white font-semibold">99% Success Rate</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-gray-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-end space-x-6">
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.url}
                  className="text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-300"
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