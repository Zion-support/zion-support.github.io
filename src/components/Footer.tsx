'use client';
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Award, Shield, Zap, ArrowRight, Brain, Cloud, Code, BarChart, Users, Globe, Facebook, Twitter, Linkedin, Instagram, Youtube, Github, MessageSquare, Star, TrendingUp, CheckCircle } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const aiServices = [
    { name: 'Machine Learning Solutions', url: '/ai-ml-solutions', description: 'Custom ML models and analytics' },
    { name: 'Natural Language Processing', url: '/ai-nlp', description: 'Advanced text analysis and understanding' },
    { name: 'Computer Vision', url: '/ai-computer-vision', description: 'Image and video analysis solutions' },
    { name: 'AI Automation', url: '/ai-automation', description: 'Intelligent process automation' },
    { name: 'AI Healthcare', url: '/ai-healthcare', description: 'Medical AI solutions' },
    { name: 'AI Fintech', url: '/ai-fintech', description: 'Financial AI applications' },
    { name: 'AI Data Analytics', url: '/ai-data-analytics', description: 'Advanced data insights' },
    { name: 'AI Cybersecurity', url: '/ai-cybersecurity', description: 'AI security solutions' },
    { name: 'AI Workflow Automation', url: '/ai-workflow-automation', description: 'Workflow optimization' }
  ];

  const itServices = [
    { name: 'IT Services', url: '/it-services', description: 'Comprehensive IT support' },
    { name: 'Cloud Migration', url: '/cloud-migration', description: 'Cloud migration & setup' },
    { name: 'Cybersecurity', url: '/cybersecurity', description: 'Security solutions' },
    { name: 'DevOps & CI/CD', url: '/devops-cicd', description: 'DevOps automation' },
    { name: 'Database Management', url: '/database-management', description: 'Database management' },
    { name: 'IT Consulting', url: '/it-consulting', description: 'Strategic IT planning' },
    { name: 'Data Center Services', url: '/data-center-services', description: 'Colocation & managed services' },
    { name: 'IT Support & Maintenance', url: '/it-support', description: '24/7 IT management' },
    { name: 'IT Infrastructure Design', url: '/it-infrastructure-design', description: 'Custom infrastructure' }
  ];

  const companyLinks = [
    { name: 'About Us', url: '/about' },
    { name: 'Our Team', url: '/team' },
    { name: 'Careers', url: '/careers' },
    { name: 'Case Studies', url: '/case-studies' },
    { name: 'Blog', url: '/blog' },
    { name: 'Contact', url: '/contact' }
  ];

  const socialLinks = [
    { name: 'Facebook', url: 'https://facebook.com/ziontechgroup', icon: Facebook },
    { name: 'Twitter', url: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'LinkedIn', url: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
    { name: 'Instagram', url: 'https://instagram.com/ziontechgroup', icon: Instagram },
    { name: 'YouTube', url: 'https://youtube.com/ziontechgroup', icon: Youtube },
    { name: 'GitHub', url: 'https://github.com/ziontechgroup', icon: Github }
  ];

  return (
    <footer className="bg-slate-900 border-t border-cyan-400/20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <Link to="/" className="flex items-center space-x-2 group">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">Z</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white cyber-text neon-pulse">Zion Tech Group</h3>
                  <p className="text-sm text-cyan-400">AI & IT Solutions</p>
                </div>
              </Link>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm text-gray-400">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>+1 (302) 464-0950</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-400">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-400">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  to={social.url}
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* AI Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-cyan-400 neon-text">Micro SAAS Solutions</h3>
            <ul className="space-y-3">
              {microSaasServices.slice(0, 8).map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm group flex items-center"
                  >
                    <service.icon className="w-3 h-3 mr-2" />
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Micro SAAS */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4 neon-text">Micro SAAS</h4>
            <ul className="space-y-2">
              {serviceCategories[1].services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.path}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.name}
                  </a>
                </li>
              ))}
              <li>
                <Link 
                  href="/micro-saas"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 text-sm font-medium"
                >
                  View All Micro SAAS →
                </Link>
              </li>
            </ul>
          </div>

          {/* AI Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-purple-400 neon-text">AI Services</h3>
            <ul className="space-y-3">
              {aiServices.slice(0, 8).map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm group flex items-center"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.name}
                  </Link>
                  <p className="text-xs text-gray-500 ml-5">{service.description}</p>
                </li>
              ))}
              <li>
                <Link 
                  to="/ai-services"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 text-sm font-medium"
                >
                  View All AI Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* IT Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-blue-400 neon-text">IT Services</h3>
            <ul className="space-y-3">
              {itServices.slice(0, 8).map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.url}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm group flex items-center"
                  >
                    <service.icon className="w-3 h-3 mr-2" />
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.name}
                  </a>
                </li>
              ))}
              <li>
                <Link 
                  to="/it-services"
                  className="text-blue-400 hover:text-blue-300 transition-colors duration-200 text-sm font-medium"
                >
                  View All IT Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-purple-400 neon-text">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.url}
                    className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <h4 className="text-sm font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link to="/services" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm">All Services</Link></li>
                <li><Link to="/pricing" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm">Pricing</Link></li>
                <li><Link to="/demo" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm">Request Demo</Link></li>
                <li><Link to="/consultation" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm">Free Consultation</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                Cookie Policy
              </Link>
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-green-400" />
                <span>Enterprise Security</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-4 h-4 text-yellow-400" />
                <span>Certified Solutions</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.displayName = 'Footer';
export default Footer;