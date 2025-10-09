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
    { name: 'Machine Learning Solutions', url: '/ai-services', description: 'Custom ML models' },
    { name: 'Natural Language Processing', url: '/ai-services', description: 'Advanced NLP solutions' },
    { name: 'Computer Vision', url: '/ai-services', description: 'Image and video analysis' },
    { name: 'AI Automation', url: '/ai-services', description: 'Intelligent process automation' },
    { name: 'AI Analytics', url: '/ai-analytics', description: 'AI-powered data insights' },
    { name: 'AI Customer Support', url: '/ai-customer-support', description: 'Intelligent support systems' },
    { name: 'AI Marketing', url: '/ai-marketing', description: 'AI-driven marketing solutions' },
    { name: 'AI Workflow Automation', url: '/ai-workflow-automation', description: 'Automated business processes' }
  ];

  const itServices = [
    { name: 'Cloud Services', url: '/cloud-services', description: 'AWS, Azure, GCP solutions' },
    { name: 'Cybersecurity', url: '/cybersecurity', description: 'Advanced security solutions' },
    { name: 'DevOps & CI/CD', url: '/devops', description: 'Streamlined development workflows' },
    { name: 'Database Services', url: '/database', description: 'Database design and optimization' },
    { name: 'IT Infrastructure', url: '/it-infrastructure', description: 'Infrastructure setup and management' },
    { name: 'Networking', url: '/networking', description: 'Network solutions and optimization' },
    { name: 'IT Consulting', url: '/it-consulting', description: 'Expert IT consultation' },
    { name: 'Cloud Migration', url: '/cloud-migration', description: 'Seamless cloud migration' }
  ];

  const emergingTech = [
    { name: 'Quantum Computing', url: '/quantum-computing', description: 'Quantum solutions' },
    { name: 'Robotics', url: '/robotics', description: 'Intelligent robotics' },
    { name: 'IoT & Edge Computing', url: '/iot-edge-computing', description: 'Connected devices' },
    { name: 'Blockchain & Web3', url: '/blockchain-web3', description: 'Decentralized solutions' },
    { name: 'Business Intelligence', url: '/business-intelligence', description: 'Data insights' },
    { name: 'Autonomous Systems', url: '/autonomous-systems', description: 'Self-managing systems' },
    { name: 'AR/VR Solutions', url: '/ar-vr-solutions', description: 'Immersive experiences' },
    { name: 'Smart Cities', url: '/smart-cities', description: 'Urban technology solutions' }
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
    { name: 'Contact Us', url: '/contact' },
    { name: 'Support Center', url: '/support' },
    { name: 'Documentation', url: '/docs' },
    { name: 'API Reference', url: '/api-docs' },
    { name: 'System Status', url: '/status' },
    { name: 'Help Center', url: '/help' }
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
    { name: 'LinkedIn', url: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
    { name: 'Twitter', url: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'GitHub', url: 'https://github.com/ziontechgroup', icon: Github },
    { name: 'YouTube', url: 'https://youtube.com/ziontechgroup', icon: Youtube }
  ];

  return (
    <footer className="bg-slate-900 border-t border-cyan-400/20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <div>
                <div className="text-white font-bold text-lg">Zion Tech Group</div>
                <div className="text-xs text-gray-400">Advanced AI & IT Solutions</div>
              </div>
            </div>
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-800 hover:bg-cyan-600 rounded-lg flex items-center justify-center transition-colors duration-300 group"
                >
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Micro SAAS Solutions */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-cyan-400 neon-text">Micro SAAS Solutions</h3>
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
                </li>
              ))}
              <li>
                <Link 
                  href="/micro-saas"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 text-sm font-medium group flex items-center"
                >
                  View All Micro SAAS →
                  <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </li>
            </ul>
          </div>

          {/* AI & IT Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-purple-400 neon-text">AI & IT Services</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-semibold text-white mb-3">AI Services</h4>
                <ul className="space-y-2">
                  {aiServices.slice(0, 4).map((service, index) => (
                    <li key={index}>
                      <Link 
                        href={service.url}
                        className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm"
                      >
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white mb-3">IT Services</h4>
                <ul className="space-y-2">
                  {itServices.slice(0, 4).map((service, index) => (
                    <li key={index}>
                      <Link 
                        href={service.url}
                        className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm"
                      >
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Company & Support */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-green-400 neon-text">Company & Support</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-semibold text-white mb-3">Company</h4>
                <ul className="space-y-2">
                  {companyLinks.map((link, index) => (
                    <li key={index}>
                      <Link 
                        href={link.url}
                        className="text-gray-300 hover:text-green-400 transition-colors duration-300 text-sm"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white mb-3">Support</h4>
                <ul className="space-y-2">
                  {supportLinks.map((link, index) => (
                    <li key={index}>
                      <Link 
                        href={link.url}
                        className="text-gray-300 hover:text-green-400 transition-colors duration-300 text-sm"
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

        {/* Contact Information */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-cyan-400" />
              <div>
                <div className="text-white font-medium">+1 302 464 0950</div>
                <div className="text-gray-400 text-sm">24/7 Support</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-pink-400" />
              <div>
                <div className="text-white font-medium">kleber@ziontechgroup.com</div>
                <div className="text-gray-400 text-sm">General Inquiries</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-green-400" />
              <div>
                <div className="text-white font-medium">Middletown, DE 19709</div>
                <div className="text-gray-400 text-sm">United States</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex flex-wrap gap-6">
              {legalLinks.map((link, index) => (
                <Link 
                  key={index}
                  href={link.url}
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-6 pt-6 border-t border-gray-700">
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-green-400" />
                <span>SOC 2 Type II Certified</span>
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