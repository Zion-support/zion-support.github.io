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
    { name: 'AI Code Review Assistant', url: '/ai-code-generation', description: 'Automated code analysis', icon: '🔍', popular: false }
  ];

  const aiServices = [
    { name: 'AI Services', url: '/ai-services', description: 'Comprehensive AI solutions' },
    { name: 'AI Marketing', url: '/ai-marketing', description: 'AI-powered marketing automation' },
    { name: 'AI Automation', url: '/ai-automation', description: 'Intelligent process automation' },
    { name: 'AI Healthcare', url: '/ai-healthcare', description: 'Medical AI solutions' },
    { name: 'AI Fintech', url: '/ai-fintech', description: 'Financial AI solutions' },
    { name: 'AI E-commerce', url: '/ai-ecommerce-solutions', description: 'E-commerce AI solutions' }
  ];

  const itServices = [
    { name: 'Cloud Services', url: '/cloud-services', description: 'Cloud migration and setup' },
    { name: 'Cybersecurity', url: '/cybersecurity', description: 'Advanced security solutions' },
    { name: 'DevOps & CI/CD', url: '/devops', description: 'Streamlined development workflows' },
    { name: 'Database Services', url: '/database', description: 'Database design and optimization' },
    { name: 'IT Infrastructure', url: '/it-infrastructure', description: 'Infrastructure design and management' },
    { name: 'Global IT Support', url: '/global-it-support', description: 'Worldwide support' }
  ];

  const emergingTech = [
    { name: 'Quantum Computing', url: '/quantum-computing', description: 'Quantum solutions' },
    { name: 'Robotics', url: '/robotics', description: 'Intelligent robotics' },
    { name: 'IoT & Edge Computing', url: '/iot-edge-computing', description: 'Connected devices' },
    { name: 'Blockchain & Web3', url: '/blockchain-web3', description: 'Decentralized solutions' },
    { name: 'Business Intelligence', url: '/business-intelligence', description: 'Data insights' },
    { name: 'Autonomous Systems', url: '/autonomous-systems', description: 'Self-managing systems' }
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
    { name: 'API Reference', url: '/api-docs' },
    { name: 'System Status', url: '/status' },
    { name: 'Pricing', url: '/pricing' },
    { name: 'FAQ', url: '/faq' }
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
    { name: 'Facebook', url: 'https://facebook.com/ziontechgroup', icon: Facebook },
    { name: 'Twitter', url: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'LinkedIn', url: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
    { name: 'Instagram', url: 'https://instagram.com/ziontechgroup', icon: Instagram },
    { name: 'YouTube', url: 'https://youtube.com/ziontechgroup', icon: Youtube },
    { name: 'GitHub', url: 'https://github.com/ziontechgroup', icon: Github }
  ];

  return (
    <footer className="bg-slate-900 border-t border-cyan-400/20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300ffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">Z</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white cyber-text neon-pulse">Zion Tech Group</h3>
                  <p className="text-sm text-cyan-400">AI & IT Solutions</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm">+1 302 464 0950</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-4 h-4 text-pink-400" />
                  <span className="text-sm">kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="w-4 h-4 text-green-400" />
                  <span className="text-sm">364 E Main St STE 1008, Middletown, DE 19709</span>
                </div>
              </div>
            </div>

            {/* Micro SAAS Solutions */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6 neon-text flex items-center">
                <Brain className="w-5 h-5 mr-2 text-cyan-400" />
                Micro SAAS Solutions
              </h4>
              <ul className="space-y-3">
                {microSaasServices.slice(0, 6).map((service, index) => (
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
                    href="/micro-saas"
                    className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 text-sm font-medium"
                  >
                    View All Solutions →
                  </Link>
                </li>
              </ul>
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
                  <ul className="space-y-2">
                    {aiServices.slice(0, 4).map((service, index) => (
                      <li key={index}>
                        <Link
                          href={service.url}
                          className="flex items-center space-x-2 text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm"
                        >
                          <Brain className="w-3 h-3" />
                          <span>{service.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h5 className="text-sm font-semibold text-blue-400 mb-2">IT Services</h5>
                  <ul className="space-y-2">
                    {itServices.slice(0, 4).map((service, index) => (
                      <li key={index}>
                        <Link
                          href={service.url}
                          className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm"
                        >
                          <Cloud className="w-3 h-3" />
                          <span>{service.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Company & Support */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6 neon-text">Company</h4>
              <div className="space-y-4">
                <div>
                  <h5 className="text-sm font-semibold text-cyan-400 mb-2">Company</h5>
                  <ul className="space-y-2">
                    {companyLinks.map((link, index) => (
                      <li key={index}>
                        <Link
                          href={link.url}
                          className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h5 className="text-sm font-semibold text-pink-400 mb-2">Support</h5>
                  <ul className="space-y-2">
                    {supportLinks.map((link, index) => (
                      <li key={index}>
                        <Link
                          href={link.url}
                          className="text-gray-300 hover:text-pink-400 transition-colors duration-300 text-sm"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media & Newsletter */}
          <div className="border-t border-gray-700 pt-8 mb-8">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
              {/* Social Media */}
              <div>
                <h5 className="text-lg font-semibold text-white mb-4 neon-text">Follow Us</h5>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-800 hover:bg-cyan-600 rounded-lg flex items-center justify-center transition-colors duration-300 group"
                      aria-label={social.name}
                    >
                      <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="lg:max-w-md">
                <h5 className="text-lg font-semibold text-white mb-4 neon-text">Stay Updated</h5>
                <div className="flex space-x-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                  <button className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
              <div className="text-gray-400 text-sm">
                © {currentYear} Zion Tech Group. All rights reserved.
              </div>
              
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4 text-green-400" />
                  <span>Enterprise Security</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="w-4 h-4 text-yellow-400" />
                  <span>ISO 27001 Certified</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Globe className="w-4 h-4 text-blue-400" />
                  <span>Global Reach</span>
                </div>
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