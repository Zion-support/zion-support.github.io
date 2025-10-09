'use client';
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Award, Shield, Zap, ArrowRight, Brain, Cloud, Code, BarChart, Users, Globe, Facebook, Twitter, Linkedin, Instagram, Youtube, Github, MessageSquare, Star, TrendingUp, CheckCircle } from 'lucide-react';

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
    { name: 'AI Services', url: '/ai-services', description: 'Comprehensive AI solutions' },
    { name: 'AI Marketing', url: '/ai-marketing', description: 'AI-powered marketing automation' },
    { name: 'AI Automation', url: '/ai-automation', description: 'Intelligent process automation' },
    { name: 'AI Healthcare', url: '/ai-healthcare', description: 'Medical AI solutions' },
    { name: 'AI Fintech', url: '/ai-fintech', description: 'Financial AI solutions' },
    { name: 'AI E-commerce', url: '/ai-ecommerce-solutions', description: 'E-commerce AI solutions' },
    { name: 'AI Mobile Apps', url: '/ai-mobile-app-development', description: 'AI mobile development' },
    { name: 'AI Cybersecurity', url: '/ai-cybersecurity', description: 'AI security solutions' }
  ];

  const itServices = [
    { name: 'IT Services', url: '/it-services', description: 'Complete IT solutions' },
    { name: 'Cloud Services', url: '/cloud-services', description: 'Cloud infrastructure' },
    { name: 'DevOps', url: '/devops', description: 'Development operations' },
    { name: 'Cybersecurity', url: '/cybersecurity', description: 'Security solutions' },
    { name: 'Database Management', url: '/database', description: 'Database solutions' },
    { name: 'IT Infrastructure', url: '/it-infrastructure', description: 'Infrastructure design' },
    { name: 'Networking', url: '/networking', description: 'Network solutions' },
    { name: 'IT Support', url: '/support', description: 'Technical support' }
  ];

  const emergingTech = [
    { name: 'Quantum Computing', url: '/quantum-computing', description: 'Quantum solutions' },
    { name: 'Robotics', url: '/robotics', description: 'Intelligent robotics' },
    { name: 'IoT & Edge Computing', url: '/iot-edge-computing', description: 'Connected devices' },
    { name: 'Blockchain & Web3', url: '/blockchain-web3', description: 'Decentralized solutions' },
    { name: 'Business Intelligence', url: '/business-intelligence', description: 'Data insights' },
    { name: 'Autonomous Systems', url: '/autonomous-systems', description: 'Self-managing systems' },
    { name: 'AR/VR Solutions', url: '/ar-vr-solutions', description: 'Immersive experiences' },
    { name: 'Smart Cities', url: '/smart-cities', description: 'Urban technology solutions' },
    { name: 'Digital Transformation', url: '/digital-transformation', description: 'Business modernization' },
    { name: 'Innovation Labs', url: '/innovation-labs', description: 'R&D and prototyping' },
    { name: 'Sustainability Tech', url: '/sustainability-tech', description: 'Green technology solutions' },
    { name: 'Future Technologies', url: '/future-technologies', description: 'Emerging tech solutions' }
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
    { name: 'Contact Support', url: '/support' },
    { name: 'Documentation', url: '/docs' },
    { name: 'API Documentation', url: '/api-docs' },
    { name: 'System Status', url: '/status' },
    { name: 'Help Center', url: '/help' },
    { name: 'Community', url: '/community' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', url: '/privacy' },
    { name: 'Terms of Service', url: '/terms' },
    { name: 'Cookie Policy', url: '/cookies' },
    { name: 'GDPR Compliance', url: '/gdpr' },
    { name: 'Security', url: '/security' }
  ];

  const socialLinks = [
    { name: 'LinkedIn', url: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
    { name: 'Twitter', url: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'GitHub', url: 'https://github.com/ziontechgroup', icon: Github },
    { name: 'YouTube', url: 'https://youtube.com/@ziontechgroup', icon: Youtube }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white cyber-text neon-pulse">Zion Tech Group</h3>
                <p className="text-sm text-cyan-400">AI & IT Solutions</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Leading provider of AI-powered solutions and comprehensive IT services. 
              Transforming businesses through innovative technology and intelligent automation.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* AI Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-cyan-400 neon-text">AI Services</h3>
            <ul className="space-y-3">
              {aiServices.slice(0, 6).map((service, index) => (
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
            </ul>
          </div>

          {/* IT Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-purple-400 neon-text">IT Services</h3>
            <ul className="space-y-3">
              {itServices.slice(0, 6).map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.url}
                    className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm group flex items-center"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.name}
                  </Link>
                  <p className="text-xs text-gray-500 ml-5">{service.description}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-green-400 neon-text">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.url}
                    className="text-gray-300 hover:text-green-400 transition-colors duration-300 text-sm group flex items-center"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <div className="mt-8">
              <h4 className="text-sm font-semibold mb-4 text-yellow-400">Support</h4>
              <ul className="space-y-2">
                {supportLinks.slice(0, 4).map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link.url}
                      className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-cyan-400" />
              <div>
                <p className="text-sm font-medium text-white">Phone</p>
                <a href="tel:+13024640950" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  +1 (302) 464-0950
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-purple-400" />
              <div>
                <p className="text-sm font-medium text-white">Email</p>
                <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-purple-400 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-green-400" />
              <div>
                <p className="text-sm font-medium text-white">Location</p>
                <p className="text-gray-300">Global Services</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6">
              <p className="text-sm text-gray-400">
                © {currentYear} Zion Tech Group. All rights reserved.
              </p>
              <div className="flex space-x-4">
                {legalLinks.map((link, index) => (
                  <Link 
                    key={index}
                    to={link.url}
                    className="text-sm text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-green-400" />
                <span className="text-sm text-gray-400">Secure & Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-4 h-4 text-yellow-400" />
                <span className="text-sm text-gray-400">ISO 27001 Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-gray-400">Global Reach</span>
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