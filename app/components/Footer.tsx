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
  ];

  const companyLinks = [
    { name: 'About Us', url: '/about' },
    { name: 'Our Team', url: '/team' },
    { name: 'Careers', url: '/careers' },
    { name: 'Case Studies', url: '/case-studies' },
    { name: 'Blog', url: '/blog' },
    { name: 'News', url: '/news' },
    { name: 'Enterprise', url: '/enterprise' }
  ];

  const supportLinks = [
    { name: 'Contact Us', url: '/contact' },
    { name: 'Support Center', url: '/support' },
    { name: 'Documentation', url: '/docs' },
    { name: 'API Reference', url: '/api-docs' },
    { name: 'Status Page', url: '/status' },
    { name: 'System Status', url: '/system-status' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', url: '/privacy' },
    { name: 'Terms of Service', url: '/terms' },
    { name: 'Cookie Policy', url: '/cookies' },
    { name: 'GDPR Compliance', url: '/gdpr' }
  ];

  const additionalServices = [
    { name: 'AI Tools', url: '/ai-3d-generation', description: 'Creative AI tools', icon: '🎨' },
    { name: 'Business Apps', url: '/business-apps', description: 'Custom applications', icon: '📱' },
    { name: 'Analytics', url: '/analytics-tools', description: 'Data insights', icon: '📊' },
    { name: 'Developer Tools', url: '/developer-tools', description: 'Dev solutions', icon: '🛠️' },
    { name: 'Productivity', url: '/productivity', description: 'Workflow tools', icon: '⚡' },
    { name: 'Marketing', url: '/marketing-tools', description: 'Marketing solutions', icon: '📈' }
  ];

  const socialLinks = [
    { name: 'LinkedIn', url: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
    { name: 'Twitter', url: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'Facebook', url: 'https://facebook.com/ziontechgroup', icon: Facebook },
    { name: 'Instagram', url: 'https://instagram.com/ziontechgroup', icon: Instagram },
    { name: 'YouTube', url: 'https://youtube.com/@ziontechgroup', icon: Youtube },
    { name: 'GitHub', url: 'https://github.com/ziontechgroup', icon: Github }
  ];

  return (
    <footer className="bg-slate-900/95 backdrop-blur-md border-t border-cyan-400/20">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
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
                </div>
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
          </div>

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
            </div>
          </div>

          {/* Additional Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 neon-text flex items-center">
              <Settings className="w-5 h-5 mr-2 text-orange-400" />
              Tools & Apps
            </h4>
            <div className="space-y-3">
              {additionalServices.map((service, index) => (
                <Link
                  key={index}
                  href={service.url}
                  className="flex items-center space-x-3 text-gray-300 hover:text-orange-400 transition-colors duration-300 group"
                >
                  <span className="text-sm">{service.icon}</span>
                  <div className="flex-1">
                    <div className="text-sm font-medium group-hover:text-orange-400 transition-colors">
                      {service.name}
                    </div>
                    <div className="text-xs text-gray-400">{service.description}</div>
                  </div>
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 bg-slate-800/50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
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
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;
