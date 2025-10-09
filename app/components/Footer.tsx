'use client';
import React, { memo } from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, Award, Shield, Zap, ArrowRight, Brain, Cloud, Code, BarChart, Users, Globe, Facebook, Twitter, Linkedin, Instagram, Youtube, Github, MessageSquare, Star, TrendingUp, CheckCircle } from 'lucide-react';

const Footer: React.FC = memo(() => {
  const currentYear = new Date().getFullYear();
  
  const aiServices = [
    { name: 'AI Services', url: '/ai-services', description: 'Comprehensive AI Solutions', price: '$1,500/mo' },
    { name: 'AI Marketing', url: '/ai-marketing', description: 'AI-Powered Marketing', price: '$199/mo' },
    { name: 'AI Automation', url: '/ai-automation', description: 'Process Automation', price: '$399/mo' },
    { name: 'AI Healthcare', url: '/ai-healthcare', description: 'Medical AI Solutions', price: '$1,999/mo' }
  ];

  const itServices = [
    { name: 'Cloud Migration', url: '/cloud-migration', description: 'Seamless Cloud Migration', price: '$2,500/mo' },
    { name: 'Cybersecurity', url: '/cybersecurity', description: 'Enterprise Security', price: '$1,800/mo' },
    { name: 'DevOps Automation', url: '/devops-automation', description: 'Complete DevOps Pipeline', price: '$1,200/mo' },
    { name: 'Data Analytics', url: '/data-analytics', description: 'Advanced Analytics', price: '$1,600/mo' }
  ];

  const microSaasServices = [
    { name: 'AI-Powered CRM', url: '/ai-crm', description: 'Intelligent Customer Management', price: '$149/mo' },
    { name: 'AI Analytics Dashboard', url: '/ai-analytics', description: 'Real-time Business Intelligence', price: '$199/mo' },
    { name: 'AI Content Studio', url: '/ai-content-studio', description: 'Complete Content Creation Suite', price: '$299/mo' },
    { name: 'AI Chatbot Builder', url: '/ai-chatbot-builder', description: 'No-code Chatbot Creation', price: '$99/mo' }
  ];

  const emergingTech = [
    { name: 'Quantum Computing', url: '/quantum-computing', description: 'Next-gen Computing', price: 'Custom' },
    { name: 'Robotics Solutions', url: '/robotics', description: 'Intelligent Robotics', price: '$5,000/mo' },
    { name: 'IoT & Edge Computing', url: '/iot-edge-computing', description: 'Connected Devices', price: '$1,800/mo' },
    { name: 'Blockchain & Web3', url: '/blockchain-web3', description: 'Decentralized Solutions', price: '$2,200/mo' }
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
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* AI Services */}
          <div>
            <h4 className="text-sm font-medium text-white mb-4 flex items-center">
              <Brain className="w-4 h-4 mr-2 text-purple-400" />
              AI Services
            </h4>
            <ul className="space-y-3">
              {aiServices.map((service, index) => (
                <li key={index}>
                  <a 
                    href={service.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm group flex items-center justify-between"
                  >
                    <div className="flex items-center">
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {service.name}
                    </div>
                    <span className="text-xs text-cyan-400 font-semibold">{service.price}</span>
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
            <h4 className="text-sm font-medium text-white mb-4 flex items-center">
              <Cloud className="w-4 h-4 mr-2 text-blue-400" />
              IT Services
            </h4>
            <ul className="space-y-3">
              {itServices.map((service, index) => (
                <li key={index}>
                  <a 
                    href={service.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm group flex items-center justify-between"
                  >
                    <div className="flex items-center">
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {service.name}
                    </div>
                    <span className="text-xs text-cyan-400 font-semibold">{service.price}</span>
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

          {/* Micro SAAS */}
          <div>
            <h4 className="text-sm font-medium text-white mb-4 flex items-center">
              <Code className="w-4 h-4 mr-2 text-green-400" />
              Micro SAAS
            </h4>
            <ul className="space-y-3">
              {microSaasServices.map((service, index) => (
                <li key={index}>
                  <a 
                    href={service.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm group flex items-center justify-between"
                  >
                    <div className="flex items-center">
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {service.name}
                    </div>
                    <span className="text-xs text-cyan-400 font-semibold">{service.price}</span>
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

          {/* Emerging Tech */}
          <div>
            <h4 className="text-sm font-medium text-white mb-4 flex items-center">
              <Zap className="w-4 h-4 mr-2 text-orange-400" />
              Emerging Tech
            </h4>
            <ul className="space-y-3">
              {emergingTech.map((service, index) => (
                <li key={index}>
                  <a 
                    href={service.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm group flex items-center justify-between"
                  >
                    <div className="flex items-center">
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {service.name}
                    </div>
                    <span className="text-xs text-cyan-400 font-semibold">{service.price}</span>
                  </a>
                  <p className="text-xs text-gray-500 ml-5">{service.description}</p>
                </li>
              ))}
              <li>
                <Link 
                  href="/emerging-tech"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 text-sm font-medium"
                >
                  View All Emerging Tech →
                </Link>
              </li>
            </ul>
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

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-8">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
              aria-label={social.name}
            >
              <social.icon className="w-5 h-5" />
            </a>
          ))}
        </div>

        {/* Achievements */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center">
              <achievement.icon className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
              <p className="text-sm text-gray-300">{achievement.text}</p>
            </div>
          ))}
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
