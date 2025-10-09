'use client';
import React, { memo } from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, Award, Shield, Zap, ArrowRight, Brain, Cloud, Code, BarChart, Users, Globe, Facebook, Twitter, Linkedin, Instagram, Youtube, Github, MessageSquare, Star, TrendingUp, CheckCircle } from 'lucide-react';

const Footer: React.FC = memo(() => {
  const currentYear = new Date().getFullYear();
  
  const aiServices = [
<<<<<<< HEAD
<<<<<<< HEAD
  ];

  const itServices = [
  ];

  const microSaasServices = [
    { name: 'Micro SAAS Solutions', url: '/micro-saas', description: '50+ AI Tools' },
    { name: 'Business Apps', url: '/business-apps', description: 'Business Applications' },
    { name: 'Productivity Tools', url: '/productivity', description: 'Productivity Suite' },
    { name: 'Marketing Tools', url: '/marketing-tools', description: 'Marketing Suite' },
    { name: 'Developer Tools', url: '/developer-tools', description: 'Development Tools' }
  ];

  const emergingTech = [
    { name: 'Quantum Computing', url: '/quantum-computing', description: 'Quantum Solutions' },
    { name: 'Robotics', url: '/robotics', description: 'Intelligent Robotics' },
    { name: 'IoT & Edge Computing', url: '/iot-edge-computing', description: 'Connected Devices' },
    { name: 'Blockchain & Web3', url: '/blockchain-web3', description: 'Decentralized Solutions' },
    { name: 'Business Intelligence', url: '/business-intelligence', description: 'Data Insights' }
=======
=======
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-90b3
    { name: 'AI Services', url: '/ai-services', description: 'Comprehensive AI solutions' },
    { name: 'AI Marketing', url: '/ai-marketing', description: 'AI-powered marketing automation' },
    { name: 'AI Automation', url: '/ai-automation', description: 'Intelligent process automation' },
    { name: 'AI Healthcare', url: '/ai-healthcare', description: 'Medical AI solutions' },
    { name: 'AI Fintech', url: '/ai-fintech', description: 'Financial AI applications' },
<<<<<<< HEAD
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
    { name: 'AI E-commerce', url: '/ai-ecommerce-solutions', description: 'E-commerce AI solutions' }
<<<<<<< HEAD
=======
    { name: 'AI Content Studio', url: '/ai-content-studio', description: 'Complete content creation suite' },
    { name: 'AI Analytics Dashboard', url: '/ai-analytics', description: 'Real-time business intelligence' },
    { name: 'AI Chatbot Builder', url: '/ai-chatbot-builder', description: 'No-code chatbot creation' },
    { name: 'AI Machine Learning Platform', url: '/ai-ml-platform', description: 'Complete ML platform' },
    { name: 'AI Computer Vision', url: '/ai-computer-vision', description: 'Advanced computer vision' },
    { name: 'AI Natural Language Processing', url: '/ai-nlp', description: 'Advanced NLP solutions' },
    { name: 'AI Robotics Platform', url: '/ai-robotics', description: 'Intelligent robotics' }
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-a268
=======
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-90b3
  ];

  const itServices = [
    { name: 'IT Services', url: '/it-services', description: 'Comprehensive IT support' },
    { name: 'IT Infrastructure', url: '/it-infrastructure', description: 'Enterprise infrastructure' },
<<<<<<< HEAD
<<<<<<< HEAD
    { name: 'Cybersecurity', url: '/cybersecurity', description: 'Security solutions' },
    { name: 'DevOps & CI/CD', url: '/devops', description: 'Development operations' },
    { name: 'Database Services', url: '/database', description: 'Database management' },
    { name: 'Cloud Services', url: '/cloud-services', description: 'Cloud solutions' },
    { name: 'Networking', url: '/networking', description: 'Network infrastructure' },
    { name: 'IT Consulting', url: '/it-consulting', description: 'Strategic IT planning' },
    { name: 'Managed IT Services', url: '/managed-it', description: '24/7 IT management' }
=======
    { name: 'Cloud Migration', url: '/cloud-migration', description: 'Cloud migration & setup' },
    { name: 'Cybersecurity Suite', url: '/cybersecurity-suite', description: 'Security solutions' },
    { name: 'DevOps & CI/CD', url: '/devops-cicd', description: 'Development operations' },
    { name: 'Database Management', url: '/database-management', description: 'Database management' },
    { name: 'Network Solutions', url: '/network-solutions', description: 'Network infrastructure' },
    { name: 'System Administration', url: '/system-administration', description: 'System management' },
    { name: 'IT Consulting', url: '/it-consulting', description: 'Strategic IT planning' },
    { name: 'IT Support & Maintenance', url: '/it-support', description: '24/7 IT management' },
    { name: 'IT Training & Certification', url: '/it-training', description: 'Staff development' },
    { name: 'Global IT Support', url: '/global-it-support', description: 'Worldwide support' }
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-a268
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
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-90b3
  ];

  const microSaasServices = [
    { name: 'Micro SAAS Solutions', url: '/micro-saas', description: '100+ AI-powered tools' },
    { name: 'AI-Powered CRM', url: '/ai-crm', description: 'Intelligent customer management' },
    { name: 'AI Analytics Dashboard', url: '/ai-analytics', description: 'Business intelligence' },
    { name: 'AI Content Studio', url: '/ai-content-studio', description: 'Content creation suite' },
    { name: 'AI Chatbot Builder', url: '/ai-chatbot-builder', description: 'No-code chatbot creation' },
    { name: 'AI Email Marketing', url: '/ai-email-marketing', description: 'Automated email campaigns' },
    { name: 'AI Mobile App Builder', url: '/ai-mobile-builder', description: 'Drag-and-drop app builder' },
    { name: 'AI SEO Optimizer', url: '/ai-seo-optimizer', description: 'Automated SEO analysis' },
    { name: 'AI Invoice Generator', url: '/ai-invoice-generator', description: 'Automated invoicing' },
    { name: 'AI Lead Scoring', url: '/ai-lead-scoring', description: 'Intelligent lead qualification' },
    { name: 'AI Social Media Manager', url: '/ai-social-media-manager', description: 'Social media automation' },
    { name: 'AI E-commerce Assistant', url: '/ai-ecommerce-assistant', description: 'E-commerce optimization' },
    { name: 'AI Document Processor', url: '/ai-document-processor', description: 'Intelligent document processing' },
    { name: 'AI Design Studio', url: '/ai-design-studio', description: 'AI-powered design tools' },
    { name: 'AI Security Monitor', url: '/ai-security-monitor', description: 'Real-time security monitoring' },
    { name: 'AI Financial Planner', url: '/ai-financial-planner', description: 'Financial planning & analysis' }
  ];

  const emergingTech = [
    { name: 'Quantum Computing', url: '/quantum-computing', description: 'Next-gen computing' },
    { name: 'Robotics & Automation', url: '/robotics-automation', description: 'Intelligent robotics' },
    { name: 'IoT & Edge Computing', url: '/iot-edge-computing', description: 'Connected devices' },
    { name: 'Blockchain & Web3', url: '/blockchain-web3', description: 'Decentralized solutions' },
<<<<<<< HEAD
    { name: 'Business Intelligence', url: '/business-intelligence', description: 'Data insights' },
    { name: 'Autonomous Systems', url: '/autonomous-systems', description: 'Self-managing systems' }
>>>>>>> cursor/website-audit-and-update-with-deployment-11c2
=======
    { name: 'Biotech AI', url: '/biotech-ai', description: 'AI-powered biotechnology' },
    { name: 'Autonomous Systems', url: '/autonomous-systems', description: 'Self-driving & drones' },
    { name: 'Business Intelligence', url: '/business-intelligence', description: 'Data-driven insights' },
    { name: 'AR/VR Solutions', url: '/ar-vr-solutions', description: 'Immersive experiences' }
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-90b3
  ];

  const companyLinks = [
    { name: 'About Us', url: '/about' },
    { name: 'Our Team', url: '/team' },
    { name: 'Case Studies', url: '/case-studies' },
    { name: 'Careers', url: '/careers' },
    { name: 'News & Blog', url: '/blog' },
    { name: 'Contact', url: '/contact' },
    { name: 'Support', url: '/support' },
    { name: 'Status', url: '/status' }
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
    { name: 'Facebook', icon: Facebook, url: 'https://facebook.com/ziontechgroup' },
    { name: 'Twitter', icon: Twitter, url: 'https://twitter.com/ziontechgroup' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/company/ziontechgroup' },
    { name: 'Instagram', icon: Instagram, url: 'https://instagram.com/ziontechgroup' },
    { name: 'YouTube', icon: Youtube, url: 'https://youtube.com/ziontechgroup' },
    { name: 'GitHub', icon: Github, url: 'https://github.com/ziontechgroup' }
  ];

  const achievements = [
    { icon: Award, text: '50+ Successful Projects' },
    { icon: Users, text: '100+ Happy Clients' },
    { icon: TrendingUp, text: '300% Average ROI' },
    { icon: Shield, text: '99.9% Uptime Guarantee' }
  ];

  return (
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-90b3
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

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-cyan-400" />
                <a href="tel:+13024640950" className="text-sm text-gray-300 hover:text-cyan-400 transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-cyan-400" />
                <a href="mailto:kleber@ziontechgroup.com" className="text-sm text-gray-300 hover:text-cyan-400 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span className="text-sm text-gray-300">364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4 text-cyan-400" />
                <a href="https://ziontechgroup.com" className="text-sm text-gray-300 hover:text-cyan-400 transition-colors">
                  ziontechgroup.com
                </a>
              </div>
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
<<<<<<< HEAD
>>>>>>> cursor/website-audit-and-update-with-deployment-11c2
=======
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-90b3
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
            <h3 className="text-lg font-semibold mb-6 text-cyan-400 neon-text">IT Services</h3>
            <ul className="space-y-3">
              {itServices.slice(0, 6).map((service, index) => (
>>>>>>> cursor/website-audit-and-update-with-deployment-11c2
=======
            <h3 className="text-lg font-semibold mb-6 text-blue-400 neon-text">IT Services</h3>
            <ul className="space-y-3">
              {itServices.slice(0, 8).map((service, index) => (
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-90b3
                <li key={index}>
                  <Link 
                    href={service.url}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm group flex items-center"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.name}
                  </Link>
                  <p className="text-xs text-gray-500 ml-5">{service.description}</p>
                </li>
              ))}
              <li>
                <a 
                  href="/it-services"
                  className="text-blue-400 hover:text-blue-300 transition-colors duration-200 text-sm font-medium"
                >
                  View All IT Services →
<<<<<<< HEAD
                </Link>
              </li>
            </ul>
          </div>
<<<<<<< HEAD
=======

          {/* Micro SAAS & Emerging Tech */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-cyan-400 neon-text">Solutions</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium text-white mb-2">Micro SAAS</h4>
                <ul className="space-y-2">
                  {microSaasServices.slice(0, 3).map((service, index) => (
                    <li key={index}>
                      <Link 
                        href={service.url}
                        className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm group flex items-center"
                      >
                        <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
>>>>>>> cursor/website-audit-and-update-with-deployment-11c2
              </div>
              <div>
                <h4 className="text-sm font-medium text-white mb-2">Emerging Tech</h4>
                <ul className="space-y-2">
                  {emergingTech.slice(0, 3).map((service, index) => (
                    <li key={index}>
                      <Link 
                        href={service.url}
                        className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm group flex items-center"
                      >
                        <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
=======
                </a>
              </li>
            </ul>
          </div>

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
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-90b3
          </div>
        </div>

        {/* Additional Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-purple-400 neon-text">Company</h3>
            <ul className="space-y-2">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.url}
                    className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange-400 neon-text">Legal</h3>
            <ul className="space-y-2">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.url}
                    className="text-gray-300 hover:text-orange-400 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Emerging Technologies */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-400 neon-text">Emerging Technologies</h3>
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
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-90b3
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-2xl p-8 mb-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Stay Updated with Latest Tech Trends</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest AI innovations, IT solutions, and technology insights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg bg-slate-800 text-white placeholder-gray-400 border border-slate-700 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved. | 
              <span className="ml-2">Transforming businesses with cutting-edge technology</span>
            </div>
<<<<<<< HEAD
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
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>All Systems Operational</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-blue-400" />
                <span>SSL Secured</span>
              </div>
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-90b3
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';
export default Footer;