'use client';
import React, { memo } from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, Award, Shield, Zap, ArrowRight, Brain, Cloud, Code, BarChart, Users, Globe, Facebook, Twitter, Linkedin, Instagram, Youtube, Github, MessageSquare, Star, TrendingUp, CheckCircle, Target, Settings, Database, Eye, MessageSquare as ChatIcon, Share2, BarChart3, Projector, Headphones } from 'lucide-react';

const Footer: React.FC = memo(() => {
  const currentYear = new Date().getFullYear();
  
  const microSaasServices = [
    { name: 'AI Project Manager', url: '/ai-project-manager', description: 'Intelligent project planning', icon: '📊', popular: true },
    { name: 'AI Social Media Manager', url: '/ai-social-media-manager', description: 'Automated social media', icon: '📱', popular: true },
    { name: 'AI Analytics Dashboard', url: '/ai-analytics-dashboard', description: 'AI-powered analytics', icon: '📈', popular: true },
    { name: 'AI Email Marketing', url: '/ai-email-marketing', description: 'Intelligent email campaigns', icon: '📧', popular: true },
    { name: 'AI Customer Support Bot', url: '/ai-customer-support-bot', description: '24/7 AI support', icon: '🤖', popular: true },
    { name: 'AI Code Review Assistant', url: '/ai-code-generation', description: 'Automated code analysis', icon: '🔍', popular: false },
    { name: 'AI Content Generator', url: '/ai-content-generation', description: 'AI content creation', icon: '✍️', popular: false },
    { name: 'AI SEO Optimizer', url: '/ai-marketing', description: 'AI-driven SEO', icon: '🎯', popular: false }
  ];

  const aiServices = [
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-82c7
    { name: 'AI Services', url: '/ai-services', description: 'Comprehensive AI solutions' },
    { name: 'AI Marketing', url: '/ai-marketing', description: 'AI-powered marketing automation' },
    { name: 'AI Automation', url: '/ai-automation', description: 'Intelligent process automation' },
    { name: 'AI Healthcare', url: '/ai-healthcare', description: 'Medical AI solutions' },
    { name: 'AI Fintech', url: '/ai-fintech', description: 'Financial AI applications' },
    { name: 'AI Content Generation', url: '/ai-content-generation', description: 'AI content creation' },
    { name: 'AI Data Analytics', url: '/ai-data-analytics', description: 'Advanced data insights' },
    { name: 'AI Cybersecurity', url: '/ai-cybersecurity', description: 'AI security solutions' },
    { name: 'AI Workflow Automation', url: '/ai-workflow-automation', description: 'Workflow optimization' },
    { name: 'AI Mobile App Development', url: '/ai-mobile-app-development', description: 'Mobile AI applications' },
    { name: 'AI E-commerce Solutions', url: '/ai-ecommerce-solutions', description: 'E-commerce AI platforms' },
    { name: 'AI Customer Support', url: '/ai-customer-support', description: 'AI-powered customer service' },
    { name: 'AI Sales Automation', url: '/ai-sales-automation', description: 'Intelligent sales processes' },
    { name: 'AI Data Visualization', url: '/ai-data-visualization', description: 'Advanced data visualization' },
    { name: 'AI Lead Generation', url: '/ai-lead-generation', description: 'AI-powered lead generation' },
<<<<<<< HEAD
    { name: 'AI Document Processing', url: '/ai-document-processing', description: 'Intelligent document processing' },
    { name: 'AI Machine Learning Platform', url: '/ai-ml-platform', description: 'Complete ML platform' },
    { name: 'AI Computer Vision', url: '/ai-computer-vision', description: 'Advanced computer vision' },
    { name: 'AI Natural Language Processing', url: '/ai-nlp', description: 'Advanced NLP solutions' },
    { name: 'AI Robotics Platform', url: '/ai-robotics', description: 'Intelligent robotics' },
    { name: 'AI Research & Development', url: '/ai-research-development', description: 'Custom AI R&D' },
    { name: 'AI Edge Computing', url: '/ai-edge-computing', description: 'AI at the edge' }
=======
    { name: 'AI Document Processing', url: '/ai-document-processing', description: 'AI document processing' },
    { name: 'AI Mobile Apps', url: '/ai-mobile-app-development', description: 'Mobile AI applications' },
    { name: 'AI E-commerce', url: '/ai-ecommerce-solutions', description: 'E-commerce AI solutions' }
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-82c7
  ];

  const itServices = [
    { name: 'IT Services', url: '/it-services', description: 'Comprehensive IT support' },
    { name: 'IT Infrastructure', url: '/it-infrastructure', description: 'Enterprise infrastructure' },
<<<<<<< HEAD
    { name: 'Cybersecurity', url: '/cybersecurity', description: 'Security solutions' },
    { name: 'Cloud Migration', url: '/cloud-migration', description: 'Cloud migration & setup' },
    { name: 'DevOps & CI/CD', url: '/devops-cicd', description: 'DevOps automation' },
    { name: 'Database Management', url: '/database-management', description: 'Database management' },
    { name: 'Network Solutions', url: '/network-solutions', description: 'Network infrastructure' },
    { name: 'System Administration', url: '/system-administration', description: 'System management' },
    { name: 'IT Consulting', url: '/it-consulting', description: 'Strategic IT planning' },
    { name: 'IT Support & Maintenance', url: '/it-support', description: '24/7 IT management' },
    { name: 'IT Training & Certification', url: '/it-training', description: 'Staff development' },
    { name: 'IT Infrastructure Design', url: '/it-infrastructure-design', description: 'Custom infrastructure' },
    { name: 'IT Performance Monitoring', url: '/it-performance-monitoring', description: 'Real-time monitoring' },
    { name: 'IT Disaster Recovery', url: '/it-disaster-recovery', description: 'Disaster recovery' },
    { name: 'IT Automation', url: '/it-automation', description: 'IT process automation' },
    { name: 'Global IT Support', url: '/global-it-support', description: 'Worldwide support' }
  ];

  const microSaasServices = [
    { name: 'Micro SAAS Solutions', url: '/micro-saas', description: '50+ AI-powered tools' },
    { name: 'AI-Powered CRM', url: '/ai-crm', description: 'Intelligent CRM with AI insights' },
    { name: 'AI Analytics Dashboard', url: '/ai-analytics', description: 'Real-time business intelligence' },
    { name: 'AI Content Studio', url: '/ai-content-studio', description: 'Complete content creation suite' },
=======
    { name: 'Cybersecurity Suite', url: '/cybersecurity-suite', description: 'Advanced security solutions' },
    { name: 'Cloud Migration', url: '/cloud-migration', description: 'AWS, Azure, GCP migration' },
    { name: 'DevOps & CI/CD', url: '/devops-cicd', description: 'Development operations' },
    { name: 'Database Management', url: '/database-management', description: 'Database optimization' },
    { name: 'Network Solutions', url: '/network-solutions', description: 'Enterprise networking' },
    { name: 'Mobile App Development', url: '/mobile-app-development', description: 'Native & cross-platform' },
    { name: 'IT Consulting', url: '/it-consulting', description: 'Strategic IT planning' },
    { name: 'IT Support & Maintenance', url: '/it-support-maintenance', description: '24/7 technical support' },
    { name: 'System Integration', url: '/system-integration', description: 'API & system integration' },
    { name: 'Data Backup & Recovery', url: '/data-backup-recovery', description: 'Disaster recovery' },
    { name: 'Enterprise Solutions', url: '/enterprise-solutions', description: 'Large-scale solutions' },
    { name: 'Identity & Access Management', url: '/identity-access-management', description: 'Security & access control' },
    { name: 'Performance Optimization', url: '/performance-optimization', description: 'System tuning' },
    { name: 'Global IT Services', url: '/global-it-services', description: 'Worldwide IT support' }
  ];

  const microSaasServices = [
    { name: 'Micro SAAS Solutions', url: '/micro-saas', description: '100+ AI-powered tools' },
    { name: 'AI-Powered CRM', url: '/ai-crm', description: 'Intelligent customer management' },
    { name: 'AI Analytics Dashboard', url: '/ai-analytics-dashboard', description: 'Business intelligence' },
    { name: 'AI Content Studio', url: '/ai-content-studio', description: 'Content creation suite' },
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-82c7
    { name: 'AI Chatbot Builder', url: '/ai-chatbot-builder', description: 'No-code chatbot creation' },
    { name: 'AI Email Marketing', url: '/ai-email-marketing', description: 'Automated email campaigns' },
    { name: 'AI Mobile App Builder', url: '/ai-mobile-builder', description: 'AI-assisted app development' },
    { name: 'AI SEO Optimizer', url: '/ai-seo-optimizer', description: 'Automated SEO analysis' },
    { name: 'AI Invoice Generator', url: '/ai-invoice-generator', description: 'Automated invoicing' },
    { name: 'AI Lead Scoring', url: '/ai-lead-scoring', description: 'Intelligent lead qualification' },
    { name: 'AI Sales Forecasting', url: '/ai-sales-forecasting', description: 'Advanced sales predictions' },
    { name: 'AI E-commerce Optimizer', url: '/ai-ecommerce-optimizer', description: 'E-commerce optimization' },
    { name: 'AI Design Assistant', url: '/ai-design-assistant', description: 'AI-powered design tool' },
    { name: 'AI Document Processor', url: '/ai-document-processor', description: 'Intelligent document processing' },
    { name: 'AI Security Monitor', url: '/ai-security-monitor', description: 'Real-time security monitoring' },
    { name: 'AI Performance Tracker', url: '/ai-performance-tracker', description: 'Comprehensive performance tracking' },
    { name: 'AI Voice Assistant', url: '/ai-voice-assistant', description: 'Custom voice assistants' },
    { name: 'AI Social Media Manager', url: '/ai-social-media-manager', description: 'Automated social media' },
    { name: 'AI HR Assistant', url: '/ai-hr-assistant', description: 'Intelligent HR management' },
    { name: 'AI Inventory Manager', url: '/ai-inventory-manager', description: 'Smart inventory management' },
    { name: 'AI Customer Insights', url: '/ai-customer-insights', description: 'Deep customer insights' },
    { name: 'AI Workflow Automation', url: '/ai-workflow-automation', description: 'Process automation' },
    { name: 'AI A/B Testing Platform', url: '/ai-ab-testing', description: 'Advanced A/B testing' },
    { name: 'AI Predictive Analytics', url: '/ai-predictive-analytics', description: 'Future outcome predictions' }
  ];

  const emergingTech = [
    { name: 'Quantum Computing', url: '/quantum-computing', description: 'Quantum solutions' },
    { name: 'Robotics', url: '/robotics', description: 'Intelligent robotics' },
    { name: 'IoT & Edge Computing', url: '/iot-edge-computing', description: 'Connected devices' },
    { name: 'Blockchain & Web3', url: '/blockchain-web3', description: 'Decentralized solutions' },
<<<<<<< HEAD
    { name: 'Business Intelligence', url: '/business-intelligence', description: 'Data insights' },
    { name: 'Autonomous Systems', url: '/autonomous-systems', description: 'Self-managing systems' },
    { name: 'AR/VR Solutions', url: '/ar-vr-solutions', description: 'Immersive experiences' },
    { name: 'Smart Cities', url: '/smart-cities', description: 'Urban technology solutions' },
    { name: 'Digital Transformation', url: '/digital-transformation', description: 'Business modernization' },
    { name: 'Innovation Labs', url: '/innovation-labs', description: 'R&D and prototyping' },
    { name: 'Sustainability Tech', url: '/sustainability-tech', description: 'Green technology solutions' },
    { name: 'Future Technologies', url: '/future-technologies', description: 'Emerging tech solutions' }
=======
    { name: 'Machine Learning Solutions', url: '/ai-services', description: 'Custom ML models', icon: Brain },
    { name: 'Natural Language Processing', url: '/ai-services', description: 'Advanced text analysis', icon: MessageSquare },
    { name: 'Computer Vision', url: '/ai-services', description: 'Image and video analysis', icon: Eye },
    { name: 'AI Automation', url: '/ai-services', description: 'Intelligent automation', icon: Zap },
    { name: 'AI Healthcare', url: '/ai-healthcare', description: 'Medical AI solutions', icon: '🏥' },
    { name: 'AI Fintech', url: '/ai-fintech', description: 'Financial AI applications', icon: '💳' },
    { name: 'AI Cybersecurity', url: '/ai-cybersecurity', description: 'AI security solutions', icon: Shield },
    { name: 'AI Data Analytics', url: '/ai-data-analytics', description: 'Advanced data insights', icon: BarChart3 }
  ];

  const itServices = [
    { name: 'Cloud Services', url: '/cloud-services', description: 'Cloud migration & optimization', icon: Cloud },
    { name: 'Cybersecurity', url: '/cybersecurity', description: 'Advanced security solutions', icon: Shield },
    { name: 'DevOps & CI/CD', url: '/devops', description: 'Streamlined workflows', icon: Settings },
    { name: 'Database Services', url: '/database', description: 'Database design & optimization', icon: Database },
    { name: 'IT Infrastructure', url: '/it-infrastructure', description: 'Enterprise infrastructure', icon: Code },
    { name: 'Network Services', url: '/networking', description: 'Network design & management', icon: Globe },
    { name: 'Business Intelligence', url: '/business-intelligence', description: 'Data-driven insights', icon: BarChart },
    { name: 'Compliance', url: '/compliance', description: 'Regulatory compliance', icon: CheckCircle }
  ];

  const specializedSolutions = [
    { name: 'Quantum Computing', url: '/quantum-computing', description: 'Quantum algorithms', icon: '⚛️' },
    { name: 'Autonomous Systems', url: '/autonomous-systems', description: 'Self-managing systems', icon: '🤖' },
    { name: 'Blockchain & Web3', url: '/blockchain-web3', description: 'Decentralized solutions', icon: '⛓️' },
    { name: 'IoT & Edge Computing', url: '/iot-edge-computing', description: 'Connected devices', icon: '🌐' },
    { name: 'Robotics Solutions', url: '/robotics', description: 'Intelligent robotics', icon: '🦾' },
    { name: 'Business Apps', url: '/business-apps', description: 'Custom applications', icon: '📱' }
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-05a6
=======
    { name: 'Biotech AI', url: '/biotech-ai', description: 'AI-powered biotechnology' },
    { name: 'Autonomous Systems', url: '/autonomous-systems', description: 'Self-driving & drones' },
    { name: 'Business Intelligence', url: '/business-intelligence', description: 'Data-driven insights' },
    { name: 'AR/VR Solutions', url: '/ar-vr-solutions', description: 'Immersive experiences' }
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-82c7
  ];

  const companyLinks = [
    { name: 'About Us', url: '/about' },
    { name: 'Our Team', url: '/team' },
    { name: 'Careers', url: '/careers' },
<<<<<<< HEAD
    { name: 'News', url: '/news' },
    { name: 'Contact', url: '/contact' }
=======
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
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-05a6
  ];

  const supportLinks = [
    { name: 'Documentation', url: '/docs' },
    { name: 'API Reference', url: '/api-docs' },
    { name: 'Support Center', url: '/support' },
    { name: 'System Status', url: '/status' },
    { name: 'Privacy Policy', url: '/privacy' },
    { name: 'Terms of Service', url: '/terms' }
  ];

  const socialLinks = [
<<<<<<< HEAD
    { name: 'Facebook', url: 'https://facebook.com/ziontechgroup', icon: Facebook },
    { name: 'Twitter', url: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'LinkedIn', url: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
    { name: 'Instagram', url: 'https://instagram.com/ziontechgroup', icon: Instagram },
    { name: 'YouTube', url: 'https://youtube.com/@ziontechgroup', icon: Youtube },
    { name: 'GitHub', url: 'https://github.com/ziontechgroup', icon: Github }
  ];

  const contactInfo = {
    phone: '+1 (302) 464-0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown, DE 19709',
    hours: 'Mon-Fri: 9AM-6PM EST'
  };

  const achievements = [
    { icon: Award, text: '50+ Successful Projects' },
    { icon: Users, text: '100+ Happy Clients' },
    { icon: TrendingUp, text: '300% Average ROI' },
    { icon: Shield, text: '99.9% Uptime Guarantee' }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid">
=======
    { name: 'LinkedIn', url: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
    { name: 'Twitter', url: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'Facebook', url: 'https://facebook.com/ziontechgroup', icon: Facebook },
    { name: 'Instagram', url: 'https://instagram.com/ziontechgroup', icon: Instagram },
    { name: 'YouTube', url: 'https://youtube.com/@ziontechgroup', icon: Youtube },
    { name: 'GitHub', url: 'https://github.com/ziontechgroup', icon: Github }
  ];

  return (
    <footer className="bg-slate-900/95 backdrop-blur-md border-t border-cyan-400/20">
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-05a6
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <Link href="/" className="flex items-center space-x-2 group">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">Z</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white cyber-text neon-pulse">Zion Tech Group</h3>
                  <p className="text-sm text-cyan-400">AI & IT Solutions</p>
                </div>
              </Link>
            </div>
            
            <p className="text-gray-300 text-sm leading-relaxed">
              Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, 
              and digital transformation services. Transform your business with cutting-edge technology.
            </p>

<<<<<<< HEAD
=======
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-cyan-400">
                <Phone className="w-4 h-4" />
                <a href="tel:+13024640950" className="text-sm hover:text-cyan-300 transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center space-x-3 text-pink-400">
                <Mail className="w-4 h-4" />
                <a href="mailto:kleber@ziontechgroup.com" className="text-sm hover:text-pink-300 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-start space-x-3 text-green-400">
                <MapPin className="w-4 h-4 mt-0.5" />
                <div className="text-sm">
                  <div>364 E Main St STE 1008</div>
                  <div>Middletown, DE 19709</div>
                </div>
              </div>
            </div>

>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-05a6
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:bg-slate-700 transition-all duration-300 group"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Micro SAAS Solutions */}
          <div>
<<<<<<< HEAD
            <h3 className="text-lg font-semibold mb-6 text-cyan-400 neon-text">AI Services</h3>
            <ul className="space-y-3">
              {aiServices.slice(0, 8).map((service, index) => (
                <li key={index}>
                  <Link 
                    href={service.url}
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
                  href="/ai-services"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 text-sm font-medium"
                >
                  View All AI Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* IT Services */}
          <div>
<<<<<<< HEAD
            <h3 className="text-lg font-semibold mb-6 text-cyan-400 neon-text">IT Services</h3>
            <ul className="space-y-3">
              {itServices.slice(0, 6).map((service, index) => (
=======
            <h3 className="text-lg font-semibold mb-6 text-blue-400 neon-text">IT Services</h3>
            <ul className="space-y-3">
              {itServices.slice(0, 8).map((service, index) => (
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-82c7
                <li key={index}>
                  <Link 
                    href={service.url}
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
                  href="/it-services"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 text-sm font-medium"
                >
                  View All IT Services →
<<<<<<< HEAD
=======
            <h4 className="text-lg font-semibold text-white mb-6 neon-text flex items-center">
              <Zap className="w-5 h-5 mr-2 text-cyan-400" />
              Micro SAAS Solutions
            </h4>
            <div className="space-y-3">
              {microSaasServices.slice(0, 6).map((service, index) => (
                <Link
                  key={index}
                  href={service.url}
                  className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300 group"
                >
                  <span className="text-sm">{service.icon}</span>
                  <div className="flex-1">
                    <div className="text-sm font-medium group-hover:text-cyan-400 transition-colors">
                      {service.name}
                      {service.popular && <span className="ml-2 text-xs text-cyan-400">★</span>}
                    </div>
                    <div className="text-xs text-gray-400">{service.description}</div>
                  </div>
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-05a6
                </Link>
              ))}
              <Link
                href="/micro-saas"
                className="text-cyan-400 hover:text-cyan-300 text-sm font-medium flex items-center group"
              >
                View All Solutions
                <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>

          {/* AI & IT Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 neon-text flex items-center">
              <Brain className="w-5 h-5 mr-2 text-purple-400" />
              AI & IT Services
            </h4>
            <div className="space-y-4">
              <div>
                <h5 className="text-sm font-semibold text-purple-400 mb-2">AI Services</h5>
                <div className="space-y-2">
                  {aiServices.slice(0, 4).map((service, index) => (
                    <Link
                      key={index}
                      href={service.url}
                      className="flex items-center space-x-2 text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm"
                    >
                      <service.icon className="w-3 h-3" />
                      <span>{service.name}</span>
                    </Link>
                  ))}
<<<<<<< HEAD
                </ul>
=======
                </div>
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-05a6
              </div>
              <div>
                <h5 className="text-sm font-semibold text-blue-400 mb-2">IT Services</h5>
                <div className="space-y-2">
                  {itServices.slice(0, 4).map((service, index) => (
                    <Link
                      key={index}
                      href={service.url}
                      className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm"
                    >
                      <service.icon className="w-3 h-3" />
                      <span>{service.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
=======
                </a>
              </li>
            </ul>
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-82c7
          </div>
<<<<<<< HEAD
        </div>

<<<<<<< HEAD
        {/* Contact Information */}
        <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg p-6 mb-8 cyber-card">
          <h3 className="text-xl font-bold text-white mb-4 text-center neon-text">Get In Touch</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-cyan-400" />
              <div>
                <div className="text-white font-medium">{contactInfo.phone}</div>
                <div className="text-gray-400 text-sm">Call us anytime</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-cyan-400" />
              <div>
                <div className="text-white font-medium">{contactInfo.email}</div>
                <div className="text-gray-400 text-sm">Email us</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-cyan-400" />
              <div>
                <div className="text-white font-medium">Middletown, DE</div>
                <div className="text-gray-400 text-sm">{contactInfo.address}</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Clock className="w-5 h-5 text-cyan-400" />
              <div>
                <div className="text-white font-medium">{contactInfo.hours}</div>
                <div className="text-gray-400 text-sm">Business hours</div>
              </div>
            </div>
=======
          {/* Micro SAAS & Emerging Tech */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-green-400 neon-text">Micro SAAS & Emerging Tech</h3>
            <ul className="space-y-3">
              {microSaasServices.slice(0, 6).map((service, index) => (
                <li key={index}>
                  <a 
                    href={service.url}
                    className="text-gray-300 hover:text-green-400 transition-colors duration-300 text-sm group flex items-center"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.name}
                  </a>
                  <p className="text-xs text-gray-500 ml-5">{service.description}</p>
                </li>
              ))}
              <li>
                <a 
                  href="/micro-saas"
                  className="text-green-400 hover:text-green-300 transition-colors duration-200 text-sm font-medium"
                >
                  View All Micro SAAS →
                </a>
              </li>
            </ul>
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-82c7
          </div>
        </div>

        {/* Company Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.url}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-2">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.url}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
<<<<<<< HEAD
              <li><Link href="/services" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm">All Services</Link></li>
              <li><Link href="/pricing" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm">Pricing</Link></li>
              <li><Link href="/demo" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm">Request Demo</Link></li>
              <li><Link href="/consultation" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm">Free Consultation</Link></li>
=======
              {emergingTech.map((tech, index) => (
                <li key={index}>
                  <a 
                    href={tech.url}
                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 text-sm"
                  >
                    {tech.name}
                  </a>
                </li>
              ))}
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-82c7
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">Stay updated with our latest news and offers.</p>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 bg-slate-800 border border-gray-600 rounded-lg text-white text-sm focus:outline-none focus:border-cyan-400"
              />
              <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all text-sm">
                Subscribe
              </button>
=======

          {/* Company & Support */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 neon-text flex items-center">
              <Users className="w-5 h-5 mr-2 text-pink-400" />
              Company & Support
            </h4>
            <div className="space-y-4">
              <div>
                <h5 className="text-sm font-semibold text-pink-400 mb-2">Company</h5>
                <div className="space-y-2">
                  {companyLinks.map((link, index) => (
                    <Link
                      key={index}
                      href={link.url}
                      className="block text-gray-300 hover:text-pink-400 transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <h5 className="text-sm font-semibold text-green-400 mb-2">Support</h5>
                <div className="space-y-2">
                  {supportLinks.map((link, index) => (
                    <Link
                      key={index}
                      href={link.url}
                      className="block text-gray-300 hover:text-green-400 transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <h5 className="text-sm font-semibold text-yellow-400 mb-2">Legal</h5>
                <div className="space-y-2">
                  {legalLinks.map((link, index) => (
                    <Link
                      key={index}
                      href={link.url}
                      className="block text-gray-300 hover:text-yellow-400 transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-05a6
            </div>
          </div>
        </div>
      </div>

<<<<<<< HEAD
      {/* Bottom Bar */}
<<<<<<< HEAD
      <div className="border-t border-gray-700/50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                Cookie Policy
              </Link>
=======
      <div className="border-t border-gray-700 bg-slate-800/50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            
=======
        {/* Bottom Bar */}
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved. | 
              <span className="ml-2">Transforming businesses with cutting-edge technology</span>
            </div>
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-82c7
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-green-400" />
                <span>Enterprise Security</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-4 h-4 text-yellow-400" />
                <span>ISO 27001 Certified</span>
              </div>
<<<<<<< HEAD
              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4 text-blue-400" />
                <span>Global Reach</span>
              </div>
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-05a6
=======
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-82c7
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';
<<<<<<< HEAD
export default Footer;
=======

export default Footer;
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-05a6
