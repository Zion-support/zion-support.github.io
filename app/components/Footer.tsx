'use client';
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Zap, Brain, Cloud, Code, Users, Cpu, ArrowRight, Github, Linkedin, Twitter, Shield, Globe, Database, Smartphone, Sparkles, Star } from 'lucide-react';

const Footer: React.FC = memo(() => {
  const currentYear = new Date().getFullYear();
  
  const aiServices = [
    { name: 'AI Analytics', url: '/ai-analytics', description: 'Advanced data insights' },
    { name: 'AI Automation', url: '/ai-automation', description: 'Process automation' },
    { name: 'AI Chatbot Builder', url: '/ai-chatbot-builder', description: 'Conversational AI' },
    { name: 'AI Content Generation', url: '/ai-content-generation', description: 'Automated content' },
    { name: 'AI Data Analytics', url: '/ai-data-analytics', description: 'Business intelligence' },
    { name: 'AI Computer Vision', url: '/ai-computer-vision', description: 'Image analysis' },
    { name: 'AI Voice Solutions', url: '/ai-voice-solutions', description: 'Speech processing' },
    { name: 'AI Cybersecurity', url: '/ai-cybersecurity', description: 'AI-powered security' }
  ];

  const itServices = [
    { name: 'Cloud Infrastructure', url: '/cloud-infrastructure', description: 'Scalable cloud solutions' },
    { name: 'Cybersecurity Solutions', url: '/cybersecurity-solutions', description: 'Advanced security' },
    { name: 'Web Development', url: '/web-development', description: 'Modern web apps' },
    { name: 'Mobile Development', url: '/mobile-development', description: 'iOS & Android apps' },
    { name: 'API Development', url: '/api-development', description: 'RESTful APIs' },
    { name: 'Database Management', url: '/database-management', description: 'Data optimization' },
    { name: 'DevOps & CI/CD', url: '/devops-cicd', description: 'Automated deployment' },
    { name: 'IT Support', url: '/it-support', description: '24/7 technical support' }
  ];

  const microSaasServices = [
    { name: 'Zion Analytics Pro', url: '/zion-analytics-pro', description: 'Advanced analytics' },
    { name: 'Zion Chat AI', url: '/zion-chat-ai', description: 'AI chatbot platform' },
    { name: 'Zion Security Shield', url: '/zion-security-shield', description: 'Security monitoring' },
    { name: 'Zion Cloud Vault', url: '/zion-cloud-vault', description: 'Secure cloud storage' },
    { name: 'Zion Content Studio', url: '/zion-content-studio', description: 'Content creation' },
    { name: 'Zion CRM Intelligence', url: '/zion-crm-intelligence', description: 'Smart CRM' },
    { name: 'Zion AI Sales Predictor', url: '/zion-ai-sales-predictor', description: 'Sales forecasting' },
    { name: 'Zion AI Pricing Optimizer', url: '/zion-ai-pricing-optimizer', description: 'Dynamic pricing' }
  ];

  const companyLinks = [
    { name: 'About Us', url: '/about' },
    { name: 'Our Team', url: '/team' },
    { name: 'Careers', url: '/careers' },
    { name: 'Partners', url: '/partners' },
    { name: 'Case Studies', url: '/case-studies' },
    { name: 'Blog', url: '/blog' }
  ];

  const supportLinks = [
    { name: 'Help Center', url: '/support' },
    { name: 'Documentation', url: '/docs' },
    { name: 'API Documentation', url: '/api-docs' },
    { name: 'Community', url: '/community' },
    { name: 'Status Page', url: '/status' },
    { name: 'Contact Support', url: '/contact' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', url: '/privacy' },
    { name: 'Terms of Service', url: '/terms' },
    { name: 'Cookie Policy', url: '/cookies' },
    { name: 'Compliance', url: '/compliance' }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 border-t border-cyan-500/20">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Pioneering the future of AI and IT solutions with cutting-edge technology and expert consulting. 
              Transform your business with our innovative micro SAAS services and comprehensive IT solutions.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm text-gray-300">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-300">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-300">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>364 E Main St STE 1008<br />Middletown, DE 19709</span>
              </div>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* AI Services */}
          <div>
            <h3 className="text-cyan-400 font-semibold mb-6 flex items-center">
              <Brain className="w-5 h-5 mr-2" />
              AI Services
            </h3>
            <div className="space-y-3">
              {aiServices.map((service) => (
                <Link
                  key={service.name}
                  to={service.url}
                  className="block text-gray-300 hover:text-cyan-400 transition-colors text-sm group"
                >
                  <div className="flex items-center justify-between">
                    <span>{service.name}</span>
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{service.description}</p>
                </Link>
              ))}
            </div>
            <Link
              to="/ai-services"
              className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium mt-4"
            >
              View All AI Services
              <ArrowRight className="w-3 h-3 ml-1" />
            </Link>
          </div>

          {/* IT Services */}
          <div>
            <h3 className="text-purple-400 font-semibold mb-6 flex items-center">
              <Code className="w-5 h-5 mr-2" />
              IT Services
            </h3>
            <div className="space-y-3">
              {itServices.map((service) => (
                <Link
                  key={service.name}
                  to={service.url}
                  className="block text-gray-300 hover:text-purple-400 transition-colors text-sm group"
                >
                  <div className="flex items-center justify-between">
                    <span>{service.name}</span>
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{service.description}</p>
                </Link>
              ))}
            </div>
            <Link
              to="/it-services"
              className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors text-sm font-medium mt-4"
            >
              View All IT Services
              <ArrowRight className="w-3 h-3 ml-1" />
            </Link>
          </div>

          {/* Micro SAAS */}
          <div>
            <h3 className="text-pink-400 font-semibold mb-6 flex items-center">
              <Zap className="w-5 h-5 mr-2" />
              Micro SAAS
            </h3>
            <div className="space-y-3">
              {microSaasServices.map((service) => (
                <Link
                  key={service.name}
                  to={service.url}
                  className="block text-gray-300 hover:text-pink-400 transition-colors text-sm group"
                >
                  <div className="flex items-center justify-between">
                    <span>{service.name}</span>
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{service.description}</p>
                </Link>
              ))}
            </div>
            <Link
              to="/micro-saas"
              className="inline-flex items-center text-pink-400 hover:text-pink-300 transition-colors text-sm font-medium mt-4"
            >
              View All Micro SAAS
              <ArrowRight className="w-3 h-3 ml-1" />
            </Link>
          </div>
        </div>

        {/* Additional Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 pt-8 border-t border-gray-700/50">
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <div className="space-y-2">
              {companyLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.url}
                  className="block text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <div className="space-y-2">
              {supportLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.url}
                  className="block text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <div className="space-y-2">
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.url}
                  className="block text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700/50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>Built with ❤️ for innovation</span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>All systems operational</span>
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