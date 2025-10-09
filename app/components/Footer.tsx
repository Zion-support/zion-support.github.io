'use client';
import React, { memo } from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, Award, Shield, Zap, ArrowRight, Brain, Cloud, Code, BarChart, Users, Globe, Facebook, Twitter, Linkedin, Instagram, Youtube, Github, MessageSquare, Star, TrendingUp, CheckCircle } from 'lucide-react';

const Footer: React.FC = memo(() => {
  const currentYear = new Date().getFullYear();
  
  const aiServices = [
    { name: 'AI Services', url: '/ai-services', description: 'Comprehensive AI Solutions' },
    { name: 'AI Marketing', url: '/ai-marketing', description: 'AI-Powered Marketing' },
    { name: 'AI Automation', url: '/ai-automation', description: 'Process Automation' },
    { name: 'AI Healthcare', url: '/ai-healthcare', description: 'Medical AI Solutions' },
    { name: 'AI Fintech', url: '/ai-fintech', description: 'Financial AI' },
    { name: 'AI Content Generation', url: '/ai-content-generation', description: 'Content Creation' },
    { name: 'AI Data Analytics', url: '/ai-data-analytics', description: 'Data Insights' },
    { name: 'AI Cybersecurity', url: '/ai-cybersecurity', description: 'Security Solutions' }
  ];

  const itServices = [
    { name: 'IT Services', url: '/it-services', description: 'IT Infrastructure' },
    { name: 'Cloud Services', url: '/cloud-services', description: 'Cloud Solutions' },
    { name: 'Cybersecurity', url: '/cybersecurity', description: 'Security Services' },
    { name: 'DevOps', url: '/devops', description: 'DevOps Solutions' },
    { name: 'Database Services', url: '/database', description: 'Database Management' },
    { name: 'Network Services', url: '/networking', description: 'Network Solutions' },
    { name: 'IT Infrastructure', url: '/it-infrastructure', description: 'Infrastructure Setup' },
    { name: 'Managed IT Services', url: '/managed-it', description: '24/7 IT Support' }
  ];

  const microSaasServices = [
    { name: 'Micro SAAS Solutions', url: '/micro-saas', description: '100+ AI Tools' },
    { name: 'AI Code Review Pro', url: '/ai-code-review', description: 'Code Analysis' },
    { name: 'AI SEO Optimizer', url: '/ai-seo-optimizer', description: 'SEO Automation' },
    { name: 'AI Analytics Dashboard', url: '/ai-analytics-dashboard', description: 'Business Intelligence' },
    { name: 'AI Content Generator', url: '/ai-content-generation', description: 'Content Creation' },
    { name: 'AI Chatbot Builder', url: '/ai-chatbot-builder', description: 'Chatbot Creation' },
    { name: 'AI Email Marketing', url: '/ai-email-marketing', description: 'Email Automation' },
    { name: 'AI Invoice Generator', url: '/ai-invoice-generator', description: 'Invoice Automation' }
  ];

  const emergingTech = [
    { name: 'Quantum Computing', url: '/quantum-computing', description: 'Quantum Solutions' },
    { name: 'Robotics', url: '/robotics', description: 'Intelligent Robotics' },
    { name: 'IoT & Edge Computing', url: '/iot-edge-computing', description: 'Connected Devices' },
    { name: 'Blockchain & Web3', url: '/blockchain-web3', description: 'Decentralized Solutions' },
    { name: 'Business Intelligence', url: '/business-intelligence', description: 'Data Insights' },
    { name: 'Autonomous Systems', url: '/autonomous-systems', description: 'Self-Managing Systems' }
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
    { icon: Award, text: '100+ Successful Projects' },
    { icon: Users, text: '500+ Happy Clients' },
    { icon: TrendingUp, text: '300% Average ROI' },
    { icon: Shield, text: '99.9% Uptime Guarantee' }
  ];

  return (
    <footer className="bg-slate-900/95 backdrop-blur-sm border-t border-cyan-500/20">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-white font-bold text-xl neon-text">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 text-sm mb-6 leading-relaxed">
              Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.
            </p>
            
            {/* Achievements */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <achievement.icon className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs text-gray-300">{achievement.text}</span>
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
                  className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-cyan-600 transition-colors duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="w-4 h-4 text-gray-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* AI Services */}
              <div>
                <h4 className="text-sm font-semibold text-white mb-4 flex items-center">
                  <Brain className="w-4 h-4 mr-2 text-purple-400" />
                  AI Services
                </h4>
                <ul className="space-y-2">
                  {aiServices.slice(0, 6).map((service, index) => (
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
                <h4 className="text-sm font-semibold text-white mb-4 flex items-center">
                  <Cloud className="w-4 h-4 mr-2 text-blue-400" />
                  IT Services
                </h4>
                <ul className="space-y-2">
                  {itServices.slice(0, 6).map((service, index) => (
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
                    <Link 
                      href="/it-services"
                      className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 text-sm font-medium"
                    >
                      View All IT Services →
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Micro SAAS & Emerging Tech */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-semibold text-white mb-4 flex items-center">
                    <Code className="w-4 h-4 mr-2 text-green-400" />
                    Micro SAAS
                  </h4>
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
                        <p className="text-xs text-gray-500 ml-5">{service.description}</p>
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
                <div>
                  <h4 className="text-sm font-semibold text-white mb-4 flex items-center">
                    <Globe className="w-4 h-4 mr-2 text-orange-400" />
                    Emerging Tech
                  </h4>
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
          </div>
        </div>

        {/* Company Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.url}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-2">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.url}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/services" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm">All Services</a></li>
              <li><a href="/pricing" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm">Pricing</a></li>
              <li><a href="/demo" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm">Request Demo</a></li>
              <li><a href="/consultation" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm">Free Consultation</a></li>
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
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700/50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="/privacy" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                Terms of Service
              </a>
              <a href="/cookies" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';
export default Footer;