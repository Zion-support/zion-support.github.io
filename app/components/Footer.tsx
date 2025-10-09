'use client';
import React, { memo } from 'react';
import { Phone, Mail, MapPin, Clock, Award, Shield, Zap, ArrowRight, Brain, Cloud, Code, BarChart, Users, Globe, Facebook, Twitter, Linkedin, Instagram, Youtube, Github, MessageSquare, Star, TrendingUp, CheckCircle } from 'lucide-react';

const Footer: React.FC = memo(() => {
  const currentYear = new Date().getFullYear();
  
  const aiServices = [
    { name: 'AI Services', url: '/ai-services', description: 'Comprehensive AI solutions' },
    { name: 'AI Marketing', url: '/ai-marketing', description: 'AI-powered marketing automation' },
    { name: 'AI Automation', url: '/ai-automation', description: 'Intelligent process automation' },
    { name: 'AI Healthcare', url: '/ai-healthcare', description: 'Medical AI solutions' },
    { name: 'AI Fintech', url: '/ai-fintech', description: 'Financial AI applications' },
    { name: 'AI Content Generation', url: '/ai-content-generation', description: 'AI content creation' },
    { name: 'AI Data Analytics', url: '/ai-data-analytics', description: 'Advanced data insights' },
    { name: 'AI Cybersecurity', url: '/ai-cybersecurity', description: 'AI security solutions' },
    { name: 'AI Workflow Automation', url: '/ai-workflow-automation', description: 'Workflow optimization' },
    { name: 'AI Customer Support', url: '/ai-customer-support', description: 'AI-powered customer service' },
    { name: 'AI Sales Automation', url: '/ai-sales-automation', description: 'Intelligent sales processes' },
    { name: 'AI Data Visualization', url: '/ai-data-visualization', description: 'Advanced data visualization' },
    { name: 'AI Lead Generation', url: '/ai-lead-generation', description: 'AI-powered lead generation' },
    { name: 'AI Document Processing', url: '/ai-document-processing', description: 'AI document processing' },
    { name: 'AI Mobile Apps', url: '/ai-mobile-app-development', description: 'Mobile AI applications' },
    { name: 'AI E-commerce', url: '/ai-ecommerce-solutions', description: 'E-commerce AI solutions' },
    { name: 'AI Voice Assistant', url: '/ai-voice-assistant', description: 'Intelligent Voice Solutions' },
    { name: 'AI Predictive Maintenance', url: '/ai-predictive-maintenance', description: 'Equipment Failure Prediction' },
    { name: 'AI Supply Chain Optimization', url: '/ai-supply-chain-optimization', description: 'Supply Chain Intelligence' },
    { name: 'AI Personalization Engine', url: '/ai-personalization-engine', description: 'Hyper-Personalized Experiences' },
    { name: 'AI Fraud Detection', url: '/ai-fraud-detection', description: 'Advanced Fraud Prevention' },
    { name: 'AI Computer Vision', url: '/ai-computer-vision', description: 'Visual Recognition Systems' },
    { name: 'AI NLP Processing', url: '/ai-nlp-processing', description: 'Natural Language Processing' }
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
    { name: 'Managed IT Services', url: '/managed-it', description: '24/7 IT management' },
    { name: 'Cloud Migration Services', url: '/cloud-migration-services', description: 'Seamless cloud migration' },
    { name: 'Cybersecurity Consulting', url: '/cybersecurity-consulting', description: 'Security strategy & implementation' },
    { name: 'DevOps Automation', url: '/devops-automation', description: 'CI/CD pipeline automation' },
    { name: 'Database Optimization', url: '/database-optimization', description: 'Database performance tuning' },
    { name: 'Network Security', url: '/network-security', description: 'Network protection & monitoring' },
    { name: 'Backup & Disaster Recovery', url: '/backup-disaster-recovery', description: 'Data protection & recovery' }
  ];

  const microSaasServices = [
    { name: 'Micro SAAS Solutions', url: '/micro-saas', description: '50+ AI Tools' },
    { name: 'Business Apps', url: '/business-apps', description: 'Business Applications' },
    { name: 'Productivity Tools', url: '/productivity', description: 'Productivity Suite' },
    { name: 'Marketing Tools', url: '/marketing-tools', description: 'Marketing Suite' },
    { name: 'Developer Tools', url: '/developer-tools', description: 'Development Tools' },
    { name: 'Smart Scheduling SAAS', url: '/smart-scheduling-saas', description: 'AI-powered scheduling' },
    { name: 'AI Content Optimizer', url: '/ai-content-optimizer', description: 'Content optimization AI' },
    { name: 'AI Social Media Manager', url: '/ai-social-media-manager', description: 'Social media automation' },
    { name: 'AI Email Marketing Suite', url: '/ai-email-marketing-suite', description: 'Email marketing AI' },
    { name: 'AI CRM Automation', url: '/ai-crm-automation', description: 'CRM intelligence' }
  ];

  const emergingTech = [
    { name: 'Quantum Computing', url: '/quantum-computing', description: 'Quantum Solutions' },
    { name: 'Robotics', url: '/robotics', description: 'Intelligent Robotics' },
    { name: 'IoT & Edge Computing', url: '/iot-edge-computing', description: 'Connected Devices' },
    { name: 'Blockchain & Web3', url: '/blockchain-web3', description: 'Decentralized Solutions' },
    { name: 'Business Intelligence', url: '/business-intelligence', description: 'Data Insights' }
  ];

  const companyLinks = [
    { name: 'About Us', url: '/about' },
    { name: 'Our Team', url: '/team' },
    { name: 'Case Studies', url: '/case-studies' },
    { name: 'Careers', url: '/careers' },
    { name: 'News', url: '/news' },
    { name: 'Contact', url: '/contact' }
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
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold text-white neon-text">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.
            </p>
            
            {/* Achievements */}
            <div className="space-y-3 mb-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <achievement.icon className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm text-gray-300">{achievement.text}</span>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-cyan-500/20 transition-colors duration-300 group"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-cyan-400" />
                </a>
              ))}
            </div>
          </div>

          {/* AI Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-cyan-400 neon-text">AI Services</h3>
            <ul className="space-y-3">
              {aiServices.slice(0, 8).map((service, index) => (
                <li key={index}>
                  <a 
                    href={service.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm group flex items-center"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.name}
                  </a>
                  <p className="text-xs text-gray-500 ml-5">{service.description}</p>
                </li>
              ))}
              <li>
                <a 
                  href="/ai-services"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 text-sm font-medium"
                >
                  View All AI Services →
                </a>
              </li>
            </ul>
          </div>

          {/* IT Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-cyan-400 neon-text">IT Services</h3>
            <ul className="space-y-3">
              {itServices.slice(0, 8).map((service, index) => (
                <li key={index}>
                  <a 
                    href={service.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm group flex items-center"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.name}
                  </a>
                  <p className="text-xs text-gray-500 ml-5">{service.description}</p>
                </li>
              ))}
              <li>
                <a 
                  href="/it-services"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 text-sm font-medium"
                >
                  View All IT Services →
                </a>
              </li>
            </ul>
          </div>

          {/* Micro SAAS & Emerging Tech */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-cyan-400 neon-text">Solutions</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium text-white mb-2">Micro SAAS</h4>
                <ul className="space-y-2">
                  {microSaasServices.slice(0, 4).map((service, index) => (
                    <li key={index}>
                      <a 
                        href={service.url}
                        className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm group flex items-center"
                      >
                        <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                        {service.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-medium text-white mb-2">Emerging Tech</h4>
                <ul className="space-y-2">
                  {emergingTech.slice(0, 3).map((service, index) => (
                    <li key={index}>
                      <a 
                        href={service.url}
                        className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm group flex items-center"
                      >
                        <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                        {service.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

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
                <div className="text-gray-400 text-sm">Our location</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Clock className="w-5 h-5 text-cyan-400" />
              <div>
                <div className="text-white font-medium">{contactInfo.hours}</div>
                <div className="text-gray-400 text-sm">Business hours</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex space-x-6">
              {companyLinks.slice(0, 3).map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                >
                  {link.name}
                </a>
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