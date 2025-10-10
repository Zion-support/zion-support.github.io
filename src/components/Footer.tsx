<<<<<<< HEAD
import React from 'react';
import { Phone, Mail, MapPin, Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, Globe, Database, Settings, Target, MessageSquare, Eye, Cpu, Lock, BarChart3, FileText, Search, Bot, Calculator, TrendingUp, CheckCircle } from 'lucide-react';

const Footer: React.FC = () => {
  const microSaasServices = [
    { name: 'AI Project Manager', url: '/ai-project-manager', description: 'Intelligent project planning' },
    { name: 'AI Social Media Manager', url: '/ai-social-media-manager', description: 'Automated social media' },
    { name: 'AI Analytics Dashboard', url: '/ai-analytics-dashboard', description: 'Data insights & analytics' },
    { name: 'AI Email Marketing', url: '/ai-email-marketing', description: 'Smart email campaigns' },
    { name: 'AI Customer Support Bot', url: '/ai-customer-support-bot', description: '24/7 AI support' },
    { name: 'AI Code Review Assistant', url: '/ai-code-generation', description: 'Automated code analysis' },
    { name: 'AI Video Generator Pro', url: '/ai-video-generation', description: 'AI-powered video creation' },
    { name: 'AI Voice Cloning Studio', url: '/ai-voice-cloning', description: 'Realistic voice synthesis' },
    { name: 'AI Music Composer', url: '/ai-music-composition', description: 'AI-generated music' },
    { name: 'AI Fashion Designer', url: '/ai-fashion-design', description: 'AI fashion design' },
    { name: 'AI Fitness Coach', url: '/ai-fitness-coach', description: 'Personalized fitness plans' },
    { name: 'AI 3D Generation Studio', url: '/ai-3d-generation', description: 'AI 3D content creation' }
  ];

  const aiServices = [
    { name: 'Machine Learning', url: '/machine-learning', description: 'Custom ML models' },
    { name: 'Natural Language Processing', url: '/nlp', description: 'Text analysis & understanding' },
    { name: 'Computer Vision', url: '/computer-vision', description: 'Image & video analysis' },
    { name: 'AI Automation', url: '/ai-automation', description: 'Process automation' },
    { name: 'Quantum AI Computing', url: '/quantum-ai', description: 'Next-gen algorithms' },
    { name: 'AI Cybersecurity', url: '/ai-cybersecurity', description: 'AI-powered security' },
    { name: 'AI Healthcare Solutions', url: '/ai-healthcare', description: 'Medical AI applications' },
    { name: 'AI Fintech Solutions', url: '/ai-fintech', description: 'Financial AI services' },
    { name: 'AI Mobile App Development', url: '/ai-mobile-app-development', description: 'Smart mobile apps' },
    { name: 'AI CRM Solutions', url: '/ai-crm', description: 'Intelligent customer management' },
    { name: 'AI Email Assistant', url: '/ai-email-assistant', description: 'Smart email management' },
    { name: 'AI Scheduler Pro', url: '/ai-scheduler', description: 'Intelligent scheduling' }
  ];

  const itServices = [
    { name: 'Cloud Services', url: '/cloud-services', description: 'AWS/Azure/GCP setup' },
    { name: 'Cybersecurity', url: '/cybersecurity', description: 'Advanced security solutions' },
    { name: 'DevOps & CI/CD', url: '/devops', description: 'Automated workflows' },
    { name: 'Database Services', url: '/database-services', description: 'Database optimization' },
    { name: 'Network Infrastructure', url: '/network-infrastructure', description: 'Enterprise networking' },
    { name: 'IT Support & Helpdesk', url: '/it-support', description: '24/7 technical support' },
    { name: 'IT Consulting', url: '/it-consulting', description: 'Strategic IT guidance' },
    { name: 'Cloud Migration', url: '/cloud-migration', description: 'Seamless cloud migration' },
    { name: 'Compliance & Governance', url: '/compliance', description: 'Regulatory compliance' },
    { name: 'Developer Tools', url: '/developer-tools', description: 'Advanced dev tools' },
    { name: 'Marketing Tools', url: '/marketing-tools', description: 'Marketing automation' },
    { name: 'Productivity Solutions', url: '/productivity', description: 'Enterprise productivity' }
  ];

  const specializedServices = [
    { name: 'Quantum Computing', url: '/quantum-computing', description: 'Quantum algorithms' },
    { name: 'Autonomous Systems', url: '/autonomous-systems', description: 'Self-managing systems' },
    { name: 'Blockchain & Web3', url: '/blockchain', description: 'Decentralized solutions' },
    { name: 'IoT & Edge Computing', url: '/iot-edge', description: 'Connected devices' },
    { name: 'Business Intelligence', url: '/business-intelligence', description: 'Data-driven insights' },
    { name: 'Robotics Solutions', url: '/robotics', description: 'Intelligent automation' },
    { name: 'Enterprise Solutions', url: '/enterprise', description: 'Enterprise-grade solutions' },
    { name: 'Analytics Tools', url: '/analytics-tools', description: 'Advanced analytics' },
    { name: 'Business Apps', url: '/business-apps', description: 'Custom business apps' },
    { name: 'Expense Tracker Pro', url: '/expense-tracker', description: 'AI expense management' },
    { name: 'Task Manager Pro', url: '/task-manager-pro', description: 'AI task management' },
    { name: 'Smart Analytics', url: '/smart-analytics', description: 'Intelligent analytics' }
  ];

  const additionalServices = [
    { name: 'AI Project Manager', url: '/ai-project-manager', description: 'Intelligent project planning' },
    { name: 'AI Social Media Manager', url: '/ai-social-media-manager', description: 'Automated social media' },
    { name: 'AI Email Marketing', url: '/ai-email-marketing', description: 'Smart email campaigns' },
    { name: 'AI Customer Support Bot', url: '/ai-customer-support-bot', description: '24/7 AI support' },
    { name: 'AI SEO Optimizer', url: '/ai-seo-optimizer', description: 'SEO automation' },
    { name: 'AI Financial Analyzer', url: '/ai-financial-analyzer', description: 'Financial insights' }
=======
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Award, Shield, Zap, ArrowRight, Brain, Cloud, Code, BarChart, Users, Globe, Facebook, Twitter, Linkedin, Instagram, Youtube, Github, MessageSquare, Star, TrendingUp, CheckCircle, ArrowUp } from 'lucide-react';

const Footer: React.FC = memo(() => {
  const currentYear = new Date().getFullYear();

  const aiServices = [
    { name: 'AI Services', url: '/ai-services', description: 'Comprehensive AI solutions' },
    { name: 'AI Marketing', url: '/ai-marketing', description: 'AI-powered marketing automation' },
    { name: 'AI Automation', url: '/ai-automation', description: 'Intelligent process automation' },
    { name: 'AI Healthcare', url: '/ai-healthcare', description: 'Medical AI solutions' },
    { name: 'AI Fintech', url: '/ai-fintech', description: 'Financial AI applications' },
    { name: 'AI Customer Support', url: '/ai-customer-support', description: 'AI-powered customer service' },
    { name: 'AI Sales Automation', url: '/ai-sales-automation', description: 'Intelligent sales processes' },
    { name: 'AI Data Analytics', url: '/ai-data-analytics', description: 'Advanced data insights' },
    { name: 'AI Workflow Automation', url: '/ai-workflow-automation', description: 'Workflow optimization' },
    { name: 'AI Computer Vision', url: '/ai-computer-vision', description: 'Advanced computer vision' },
    { name: 'AI Natural Language Processing', url: '/ai-nlp', description: 'Advanced NLP solutions' },
    { name: 'AI Robotics Platform', url: '/ai-robotics', description: 'Intelligent robotics' }
  ];

  const itServices = [
    { name: 'IT Services', url: '/it-services', description: 'Comprehensive IT support' },
    { name: 'IT Infrastructure', url: '/it-infrastructure', description: 'Enterprise infrastructure' },
    { name: 'Cybersecurity', url: '/cybersecurity', description: 'Security solutions' },
    { name: 'Cloud Migration', url: '/cloud-migration', description: 'Cloud migration & setup' },
    { name: 'DevOps & CI/CD', url: '/devops-cicd', description: 'DevOps automation' },
    { name: 'Database Management', url: '/database-management', description: 'Database management' },
    { name: 'Network Solutions', url: '/network-solutions', description: 'Network infrastructure' },
    { name: 'System Administration', url: '/system-administration', description: 'System management' },
    { name: 'IT Consulting', url: '/it-consulting', description: 'Strategic IT planning' },
    { name: 'IT Support', url: '/it-support', description: '24/7 IT support' },
    { name: 'IT Training', url: '/it-training', description: 'Professional IT training' },
    { name: 'IT Disaster Recovery', url: '/it-disaster-recovery', description: 'Disaster recovery solutions' }
  ];

  const microSaasServices = [
    { name: 'AI Analytics Dashboard', url: '/ai-analytics-dashboard', description: 'Real-time business intelligence' },
    { name: 'AI E-commerce Assistant', url: '/ai-ecommerce-solutions', description: 'Complete e-commerce automation' },
    { name: 'AI Mobile App Builder', url: '/ai-mobile-app-development', description: 'No-code mobile app development' },
    { name: 'AI Document Processor', url: '/ai-document-processing', description: 'Intelligent document processing' },
    { name: 'AI Chatbot Builder', url: '/ai-chatbot-builder', description: 'Create intelligent chatbots' },
    { name: 'AI Content Creator', url: '/ai-content-generation', description: 'AI-powered content generation' },
    { name: 'AI Email Marketing', url: '/ai-email-marketing', description: 'Intelligent email campaigns' },
    { name: 'AI Project Manager', url: '/ai-project-manager', description: 'Intelligent project management' }
>>>>>>> origin/resolve-merge-conflicts
  ];

  const companyLinks = [
    { name: 'About Us', url: '/about' },
    { name: 'Our Team', url: '/team' },
    { name: 'Careers', url: '/careers' },
    { name: 'Case Studies', url: '/case-studies' },
    { name: 'Blog', url: '/blog' },
    { name: 'News', url: '/news' },
<<<<<<< HEAD
    { name: 'Pricing', url: '/pricing' },
    { name: 'Demo', url: '/demo' }
  ];

  const supportLinks = [
    { name: 'Contact Us', url: '/contact' },
    { name: 'Support Center', url: '/support' },
    { name: 'Documentation', url: '/docs' },
    { name: 'API Reference', url: '/api-docs' },
    { name: 'Status Page', url: '/status' },
    { name: 'System Health', url: '/system-status' }
=======
    { name: 'Partners', url: '/partners' },
    { name: 'Contact', url: '/contact' }
  ];

  const supportLinks = [
    { name: 'Help Center', url: '/help' },
    { name: 'Documentation', url: '/docs' },
    { name: 'API Documentation', url: '/api-docs' },
    { name: 'Status Page', url: '/status' },
    { name: 'System Status', url: '/system-status' },
    { name: 'FAQ', url: '/faq' },
    { name: 'Support', url: '/support' },
    { name: 'Request Quote', url: '/request-quote' }
>>>>>>> origin/resolve-merge-conflicts
  ];

  const legalLinks = [
    { name: 'Privacy Policy', url: '/privacy' },
    { name: 'Terms of Service', url: '/terms' },
    { name: 'Cookie Policy', url: '/cookies' },
    { name: 'GDPR Compliance', url: '/gdpr' },
    { name: 'Security', url: '/security' },
    { name: 'Compliance', url: '/compliance' }
  ];

<<<<<<< HEAD
  return (
    <footer className="bg-slate-900/95 backdrop-blur-md border-t border-cyan-400/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white neon-text">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading provider of AI-powered enterprise solutions, quantum computing, and digital transformation services.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-4 h-4 text-cyan-400" />
                <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-4 h-4 text-cyan-400" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
=======
  const socialLinks = [
    { name: 'Facebook', url: 'https://facebook.com/ziontechgroup', icon: Facebook },
    { name: 'Twitter', url: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'LinkedIn', url: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
    { name: 'Instagram', url: 'https://instagram.com/ziontechgroup', icon: Instagram },
    { name: 'YouTube', url: 'https://youtube.com/ziontechgroup', icon: Youtube },
    { name: 'GitHub', url: 'https://github.com/ziontechgroup', icon: Github }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="text-white font-bold text-xl">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading provider of AI and IT solutions, delivering innovative technology services 
              to help businesses transform and thrive in the digital age.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-cyan-400" />
                <a href="tel:+13024640950" className="text-gray-300 hover:text-white transition-colors">
                  (302) 464-0950
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-cyan-400" />
                <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-white transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-cyan-400 mt-1" />
                <div className="text-gray-300">
                  <div>364 E Main St STE 1008</div>
                  <div>Middletown, DE 19709</div>
                </div>
>>>>>>> origin/resolve-merge-conflicts
              </div>
            </div>
          </div>

<<<<<<< HEAD
          {/* Micro SAAS Services */}
          <div>
            <h3 className="text-cyan-400 font-semibold mb-4 flex items-center">
              <Zap className="w-4 h-4 mr-2" />
              Micro SAAS
            </h3>
            <ul className="space-y-2">
              {microSaasServices.map((service) => (
                <li key={service.name}>
                  <a href={service.url}
                    className="group flex items-center text-sm text-gray-300 hover:text-cyan-400 transition-colors"
                  >
                    <span>{service.name}</span>
                    <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </li>
              ))}
            </ul>
            <a href="/services"
              className="inline-flex items-center text-cyan-400 hover:text-white transition-colors mt-4"
            >
              View All Micro SAAS →
            </a>
          </div>

          {/* AI & IT Services */}
          <div>
            <h3 className="text-cyan-400 font-semibold mb-4 flex items-center">
              <Brain className="w-4 h-4 mr-2" />
              AI & IT Services
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-white font-medium mb-2">AI Services</h4>
                <ul className="space-y-1">
                  {aiServices.slice(0, 3).map((service) => (
                    <li key={service.name}>
                      <a href={service.url}
                        className="text-sm text-gray-300 hover:text-cyan-400 transition-colors"
                      >
                        {service.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-white font-medium mb-2">IT Services</h4>
                <ul className="space-y-1">
                  {itServices.slice(0, 3).map((service) => (
                    <li key={service.name}>
                      <a href={service.url}
                        className="text-sm text-gray-300 hover:text-cyan-400 transition-colors"
                      >
                        {service.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <a href="/services"
              className="inline-flex items-center text-cyan-400 hover:text-white transition-colors mt-4"
            >
              View All Services →
            </a>
          </div>

          {/* Additional AI Services */}
          <div>
            <h3 className="text-cyan-400 font-semibold mb-4 flex items-center">
              <Zap className="w-4 h-4 mr-2" />
              AI Tools
            </h3>
            <ul className="space-y-2">
              {additionalServices.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.url}
                    className="group flex items-center text-sm text-gray-300 hover:text-cyan-400 transition-colors"
                  >
                    <span>{service.name}</span>
                    <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
=======
          {/* AI Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
              <Brain className="h-5 w-5 text-purple-400 mr-2" />
              AI Services
            </h3>
            <ul className="space-y-3">
              {aiServices.slice(0, 8).map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.url} 
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  to="/ai-services" 
                  className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 text-sm font-medium flex items-center"
                >
                  View All AI Services <ArrowRight className="h-3 w-3 ml-1" />
                </Link>
              </li>
            </ul>
          </div>

          {/* IT Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
              <Cloud className="h-5 w-5 text-blue-400 mr-2" />
              IT Services
            </h3>
            <ul className="space-y-3">
              {itServices.slice(0, 8).map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.url} 
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  to="/it-services" 
                  className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 text-sm font-medium flex items-center"
                >
                  View All IT Services <ArrowRight className="h-3 w-3 ml-1" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Micro SAAS & Company */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
              <Zap className="h-5 w-5 text-cyan-400 mr-2" />
              Micro SAAS
            </h3>
            <ul className="space-y-3 mb-8">
              {microSaasServices.slice(0, 6).map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.url} 
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  to="/micro-saas" 
                  className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 text-sm font-medium flex items-center"
                >
                  View All Micro SAAS <ArrowRight className="h-3 w-3 ml-1" />
                </Link>
              </li>
            </ul>

            <h3 className="text-lg font-semibold text-white mb-6">Company</h3>
            <ul className="space-y-3">
              {companyLinks.slice(0, 6).map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.url} 
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
>>>>>>> origin/resolve-merge-conflicts
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

<<<<<<< HEAD
          {/* Company & Support */}
          <div>
            <h3 className="text-cyan-400 font-semibold mb-4">Company</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="text-white font-medium mb-2">Company</h4>
                <ul className="space-y-1">
                  {companyLinks.slice(0, 4).map((link) => (
                    <li key={link.name}>
                      <a href={link.url}
                        className="text-sm text-gray-300 hover:text-cyan-400 transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-white font-medium mb-2">Support</h4>
                <ul className="space-y-1">
                  {supportLinks.slice(0, 4).map((link) => (
                    <li key={link.name}>
                      <a href={link.url}
                        className="text-sm text-gray-300 hover:text-cyan-400 transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Zion Tech Group. All rights reserved.
            </div>
            <div className="flex space-x-6">
              {legalLinks.map((link) => (
                <a key={link.name}
                  href={link.url}
                  className="text-sm text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  {link.name}
                </a>
              ))}
=======
        {/* Additional Links */}
        <div className="border-t border-slate-700 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                {supportLinks.slice(0, 4).map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link.url} 
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                {legalLinks.slice(0, 4).map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link.url} 
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                    aria-label={social.name}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-slate-700 mt-8 pt-8">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-lg font-semibold text-white mb-2">Stay Updated</h3>
            <p className="text-gray-300 mb-4 text-sm">
              Get the latest news and updates about our AI and IT solutions.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-slate-800 border border-slate-600 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
              <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-r-lg transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-700 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Shield className="h-4 w-4" />
                <span>Secure & Reliable</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Clock className="h-4 w-4" />
                <span>24/7 Support</span>
              </div>
              <button
                onClick={scrollToTop}
                className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
                aria-label="Scroll to top"
              >
                <ArrowUp className="h-4 w-4" />
                <span className="text-sm">Top</span>
              </button>
>>>>>>> origin/resolve-merge-conflicts
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

<<<<<<< HEAD
export default Footer;
=======
Footer.displayName = 'Footer';

export default Footer;
>>>>>>> origin/resolve-merge-conflicts
