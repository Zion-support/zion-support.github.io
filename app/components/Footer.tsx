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
    { name: 'AI Predictive Analytics', url: '/ai-predictive-analytics', description: 'Advanced forecasting' },
    { name: 'AI Image Recognition', url: '/ai-image-recognition', description: 'Computer vision solutions' },
    { name: 'AI Voice Processing', url: '/ai-voice-processing', description: 'Speech recognition & synthesis' },
    { name: 'AI Recommendation Engine', url: '/ai-recommendation-engine', description: 'Personalized recommendations' }
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
    { name: 'Managed IT Services', url: '/managed-it', description: '24/7 IT management' }
  ];

  const microSaasServices = [
    { name: 'AI Code Review Assistant', url: '/ai-code-review', description: 'Automated code analysis' },
    { name: 'AI SEO Optimizer', url: '/ai-seo-optimizer', description: 'SEO optimization tools' },
    { name: 'AI Analytics Dashboard', url: '/ai-analytics-dashboard', description: 'Business intelligence' },
    { name: 'AI Marketing Automation', url: '/ai-marketing-automation', description: 'Marketing tools' },
    { name: 'AI Document Processing', url: '/ai-document-processing', description: 'Document analysis' },
    { name: 'AI Customer Support Bot', url: '/ai-customer-support-bot', description: 'Automated support' },
    { name: 'AI Content Generator', url: '/ai-content-generator', description: 'Content creation' },
    { name: 'AI Data Visualization', url: '/ai-data-visualization', description: 'Data visualization' },
    { name: 'AI Email Assistant', url: '/ai-email-assistant', description: 'Email management' },
    { name: 'AI Lead Generation', url: '/ai-lead-generation', description: 'Lead generation tools' },
    { name: 'AI Sales Automation', url: '/ai-sales-automation', description: 'Sales automation' },
    { name: 'AI E-commerce Solutions', url: '/ai-ecommerce-solutions', description: 'E-commerce tools' }
  ];

  const companyLinks = [
    { name: 'About Us', url: '/about' },
    { name: 'Our Team', url: '/team' },
    { name: 'Case Studies', url: '/case-studies' },
    { name: 'Careers', url: '/careers' },
    { name: 'Blog', url: '/blog' },
    { name: 'News', url: '/news' },
    { name: 'Contact', url: '/contact' },
    { name: 'Privacy Policy', url: '/privacy' },
    { name: 'Terms of Service', url: '/terms' }
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
    <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg flex items-center justify-center neon-cyan">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold gradient-text-cyan">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, 
              and digital transformation services. Transform your business with cutting-edge technology.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-cyan-400" />
                <a href="tel:+13024640950" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-cyan-400" />
                <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span className="text-gray-300">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-cyan-500/20 hover:scale-110 transition-all duration-300 group"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5 text-gray-300 group-hover:text-cyan-400" />
                </a>
              ))}
            </div>
          </div>

          {/* AI Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-cyan-400 flex items-center">
              <Brain className="w-5 h-5 mr-2" />
              AI Services
            </h3>
            <ul className="space-y-3">
              {aiServices.slice(0, 8).map((service, index) => (
                <li key={index}>
                  <a
                    href={service.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="text-sm">{service.name}</span>
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/ai-services"
                  className="text-cyan-400 hover:text-cyan-300 font-medium text-sm flex items-center group"
                >
                  View All AI Services
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </a>
              </li>
            </ul>
          </div>

          {/* IT Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-purple-400 flex items-center">
              <Cloud className="w-5 h-5 mr-2" />
              IT Services
            </h3>
            <ul className="space-y-3">
              {itServices.slice(0, 8).map((service, index) => (
                <li key={index}>
                  <a
                    href={service.url}
                    className="text-gray-300 hover:text-purple-400 transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="text-sm">{service.name}</span>
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/it-services"
                  className="text-purple-400 hover:text-purple-300 font-medium text-sm flex items-center group"
                >
                  View All IT Services
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </a>
              </li>
            </ul>
          </div>

          {/* Micro SAAS */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-pink-400 flex items-center">
              <Code className="w-5 h-5 mr-2" />
              Micro SAAS
            </h3>
            <ul className="space-y-3">
              {microSaasServices.slice(0, 8).map((service, index) => (
                <li key={index}>
                  <a
                    href={service.url}
                    className="text-gray-300 hover:text-pink-400 transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="text-sm">{service.name}</span>
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/micro-saas"
                  className="text-pink-400 hover:text-pink-300 font-medium text-sm flex items-center group"
                >
                  View All Micro SAAS
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Stats Section */}
        <div className="border-t border-white/10 pt-12 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">500+</div>
              <div className="text-sm text-gray-300">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
              <div className="text-sm text-gray-300">Enterprise Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-400 mb-2">99.9%</div>
              <div className="text-sm text-gray-300">Uptime Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
              <div className="text-sm text-gray-300">Support Available</div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved. | 
              <a href="/privacy" className="hover:text-cyan-400 transition-colors ml-1">Privacy Policy</a> | 
              <a href="/terms" className="hover:text-cyan-400 transition-colors ml-1">Terms of Service</a>
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-green-400" />
                <span>SSL Secured</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-4 h-4 text-yellow-400" />
                <span>ISO Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4 text-blue-400" />
                <span>Global Service</span>
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