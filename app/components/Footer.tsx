'use client';
<<<<<<< HEAD
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import { Phone, Mail, MapPin, Clock, Zap, Brain, Cloud, Code, Users, Cpu, ArrowRight, BarChart, Shield, Globe, Database, Smartphone, FileText, MessageCircle, Target, CheckSquare, DollarSign, Box, Settings, Heart, Eye, Mic, Workflow, Link as LinkIcon, Wifi, Package, TrendingUp, Calendar, CheckCircle, ShoppingCart, Star, Award, Sparkles } from 'lucide-react';
=======
import { Phone, Mail, MapPin, Clock, Zap, Brain, Cloud, Code, Users, Cpu, ArrowRight, BarChart, Shield, Globe, Database, Smartphone, FileText, MessageCircle, Target, CheckSquare, DollarSign, Box, Settings, Heart, Eye, Mic, Workflow, Link as LinkIcon, Wifi, Package, TrendingUp, Calendar, CheckCircle, ShoppingCart, Star, Award, Sparkles, Github, Linkedin, Twitter } from 'lucide-react';
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-e082
=======
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowRight, Brain, Cloud, Shield, Globe, Database, Smartphone, Zap, Sparkles, Star } from 'lucide-react';
>>>>>>> cursor/fix-errors-and-merge-to-main-2460

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const aiServices = [
<<<<<<< HEAD
=======
    { name: 'AI Analytics & BI', url: '/ai-analytics', description: 'Business intelligence' },
    { name: 'AI Automation', url: '/ai-automation', description: 'Process automation' },
>>>>>>> cursor/fix-errors-and-merge-to-main-2460
    { name: 'AI Chatbots & NLP', url: '/ai-chatbot-builder', description: 'Conversational AI' },
    { name: 'AI Content Generation', url: '/ai-content-generation', description: 'Automated content' },
    { name: 'AI Cybersecurity', url: '/ai-cybersecurity', description: 'AI security' },
    { name: 'AI CRM', url: '/ai-crm', description: 'Smart CRM' },
    { name: 'AI Data Analytics', url: '/ai-data-analytics', description: 'Data insights' },
    { name: 'AI Healthcare', url: '/ai-healthcare', description: 'Medical AI' },
    { name: 'AI Computer Vision', url: '/ai-computer-vision', description: 'Image analysis' },
    { name: 'AI Voice Solutions', url: '/ai-voice-solutions', description: 'Speech recognition' },
    { name: 'AI Financial Services', url: '/ai-financial-services', description: 'Fintech AI' },
<<<<<<< HEAD
    { name: 'AI Document Processing', url: '/ai-document-processing', description: 'Document analysis' },
    { name: 'AI Predictive Analytics', url: '/ai-predictive-analytics', description: 'Business forecasting' },
    { name: 'AI HR Solutions', url: '/ai-hr-solutions', description: 'Human resources AI' },
    { name: 'AI Edge Computing', url: '/ai-edge-computing', description: 'Distributed AI processing' }
=======
    { name: 'AI E-commerce Solutions', url: '/ai-ecommerce-solutions', description: 'E-commerce AI' }
>>>>>>> cursor/fix-errors-and-merge-to-main-2460
  ];

  const itServices = [
    { name: 'Cloud Migration', url: '/cloud-migration', description: 'Cloud infrastructure' },
<<<<<<< HEAD
    { name: 'Cybersecurity Solutions', url: '/cybersecurity-solutions', description: 'Security solutions' },
    { name: 'DevOps & CI/CD', url: '/devops-cicd', description: 'Automation pipelines' },
    { name: 'Data Analytics', url: '/data-analytics', description: 'Business intelligence' },
    { name: 'Mobile Development', url: '/mobile-development', description: 'iOS & Android' },
<<<<<<< HEAD
=======
    { name: 'Web Development', url: '/web-development', description: 'Modern web apps' },
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-e082
    { name: 'API Development', url: '/api-development', description: 'API solutions' },
    { name: 'DevOps & CI/CD', url: '/devops-cicd', description: 'Automation pipelines' },
    { name: 'IT Support', url: '/it-support', description: '24/7 technical support' },
<<<<<<< HEAD
    { name: 'Data Analytics & BI', url: '/data-analytics-bi', description: 'Business intelligence' },
    { name: 'Custom Software', url: '/custom-software', description: 'Tailored solutions' },
    { name: 'Blockchain Development', url: '/blockchain-development', description: 'Blockchain solutions' },
    { name: 'IoT Development', url: '/iot-development', description: 'IoT solutions' },
    { name: 'E-commerce Development', url: '/e-commerce-development', description: 'E-commerce platforms' }
=======
    { name: 'Database Management', url: '/database-management', description: 'Database optimization' },
    { name: 'Custom Software', url: '/custom-software', description: 'Tailored solutions' }
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-e082
  ];

  const microSaasServices = [
    { name: 'Zion Analytics Pro', url: '/zion-analytics-pro', description: 'Business intelligence platform' },
    { name: 'Zion Chat AI', url: '/zion-chat-ai', description: 'AI customer support' },
    { name: 'Zion Security Shield', url: '/zion-security-shield', description: 'Cybersecurity monitoring' },
    { name: 'Zion Cloud Vault', url: '/zion-cloud-vault', description: 'Cloud backup & recovery' },
    { name: 'Zion Content Studio', url: '/zion-content-studio', description: 'Content creation platform' },
    { name: 'Zion CRM Intelligence', url: '/zion-crm-intelligence', description: 'Smart CRM solution' },
    { name: 'Zion Project Master', url: '/zion-project-master', description: 'Project management' },
    { name: 'Zion Email Automation', url: '/zion-email-automation', description: 'Email marketing' },
    { name: 'Zion Inventory Smart', url: '/zion-inventory-smart', description: 'Inventory management' },
    { name: 'Zion Invoice Genius', url: '/zion-invoice-genius', description: 'Invoice automation' }
=======
    { name: 'Cybersecurity', url: '/cybersecurity', description: 'Security solutions' },
    { name: 'Web Development', url: '/web-development', description: 'Custom websites' },
    { name: 'Mobile Development', url: '/mobile-development', description: 'Mobile apps' },
    { name: 'DevOps', url: '/devops', description: 'Development operations' },
    { name: 'Database Management', url: '/database-management', description: 'Data solutions' },
    { name: 'API Development', url: '/api-development', description: 'API services' },
    { name: 'System Integration', url: '/system-integration', description: 'System solutions' }
  ];

  const microSaas = [
    { name: 'Zion Analytics Pro', url: '/zion-analytics-pro', description: 'Business intelligence' },
    { name: 'Zion AI Video Editor', url: '/zion-ai-video-editor', description: 'AI video editing' },
    { name: 'Zion AI Code Reviewer', url: '/zion-ai-code-reviewer', description: 'Code analysis' },
    { name: 'Zion AI Fraud Detector', url: '/zion-ai-fraud-detector', description: 'Fraud detection' },
    { name: 'Zion AI Content Writer', url: '/zion-ai-content-writer', description: 'Content creation' },
    { name: 'Zion AI Email Assistant', url: '/zion-ai-email-assistant', description: 'Email automation' }
>>>>>>> cursor/fix-errors-and-merge-to-main-2460
  ];

  const company = [
    { name: 'About Us', url: '/about' },
    { name: 'Our Team', url: '/team' },
    { name: 'Careers', url: '/careers' },
<<<<<<< HEAD
    { name: 'Case Studies', url: '/case-studies' },
<<<<<<< HEAD
    { name: 'Partners', url: '/partners' },
    { name: 'Press', url: '/press' },
    { name: 'Status', url: '/status' }
=======
    { name: 'Partners', url: '/partners' }
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-e082
=======
    { name: 'Contact', url: '/contact' },
    { name: 'Blog', url: '/blog' },
    { name: 'Case Studies', url: '/case-studies' }
>>>>>>> cursor/fix-errors-and-merge-to-main-2460
  ];

  const support = [
    { name: 'Documentation', url: '/docs' },
    { name: 'API Reference', url: '/api-docs' },
    { name: 'Help Center', url: '/help' },
    { name: 'Community', url: '/community' },
<<<<<<< HEAD
    { name: 'Demo', url: '/demo' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', url: '/privacy' },
    { name: 'Terms of Service', url: '/terms' },
    { name: 'Cookie Policy', url: '/cookies' },
    { name: 'Compliance', url: '/compliance' }
  ];

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/ziontechgroup', icon: Github },
    { name: 'LinkedIn', url: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
    { name: 'Twitter', url: 'https://twitter.com/ziontechgroup', icon: Twitter }
=======
    { name: 'Status', url: '/status' },
    { name: 'Support', url: '/support' }
>>>>>>> cursor/fix-errors-and-merge-to-main-2460
  ];

  return (
    <footer className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Brain className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold">Zion Tech Group</span>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Leading provider of AI solutions, cloud infrastructure, and cutting-edge technology services 
              that transform businesses and drive innovation.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-gray-300">
                <Phone className="h-4 w-4 mr-2" />
                <a href="tel:+13024640950" className="hover:text-purple-400 transition-colors">
                  +1 (302) 464-0950
                </a>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="h-4 w-4 mr-2" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-purple-400 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="h-4 w-4 mr-2" />
<<<<<<< HEAD
                <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
=======
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
>>>>>>> cursor/fix-errors-and-merge-to-main-2460
              </div>
            </div>
          </div>

          {/* AI Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Zap className="h-5 w-5 mr-2 text-purple-400" />
              AI Services
            </h3>
            <ul className="space-y-2">
              {aiServices.slice(0, 6).map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.url}
<<<<<<< HEAD
                    className="text-gray-300 hover:text-white transition-colors text-sm"
=======
                    className="text-gray-300 hover:text-purple-400 transition-colors text-sm"
>>>>>>> cursor/fix-errors-and-merge-to-main-2460
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
<<<<<<< HEAD
              <li>
                <Link
                  to="/ai-services"
                  className="text-purple-400 hover:text-purple-300 transition-colors text-sm font-medium flex items-center"
                >
                  View All AI Services
                  <ArrowRight className="h-3 w-3 ml-1" />
                </Link>
              </li>
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-2460
            </ul>
          </div>

          {/* IT Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Cloud className="h-5 w-5 mr-2 text-cyan-400" />
              IT Services
            </h3>
            <ul className="space-y-2">
              {itServices.slice(0, 6).map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Micro SAAS */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Star className="h-5 w-5 mr-2 text-green-400" />
              Micro SAAS
            </h3>
            <ul className="space-y-2">
<<<<<<< HEAD
              {microSaasServices.slice(0, 6).map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.url}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
=======
              {microSaas.slice(0, 6).map((product, index) => (
                <li key={index}>
                  <Link
                    to={product.url}
                    className="text-gray-300 hover:text-green-400 transition-colors text-sm"
>>>>>>> cursor/fix-errors-and-merge-to-main-2460
                  >
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Globe className="h-5 w-5 mr-2 text-blue-400" />
              Company
            </h3>
            <ul className="space-y-2 mb-6">
              {company.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.url}
                    className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Shield className="h-5 w-5 mr-2 text-red-400" />
              Support
            </h3>
            <ul className="space-y-2">
              {support.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.url}
                    className="text-gray-300 hover:text-red-400 transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-800 mt-12 pt-8">
<<<<<<< HEAD
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                {companyLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.url}
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                {resourceLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.url}
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                {legalLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.url}
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
=======
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-xl font-semibold mb-4">Stay Updated with Our Latest AI & Tech Solutions</h3>
            <p className="text-gray-300 mb-6">
              Get insights, updates, and exclusive offers delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
>>>>>>> cursor/fix-errors-and-merge-to-main-2460
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
<<<<<<< HEAD
            <div className="flex items-center space-x-6">
              <div className="flex items-center text-gray-400 text-sm">
                <Clock className="h-4 w-4 mr-2" />
                24/7 Support Available
              </div>
              <div className="flex items-center text-gray-400 text-sm">
                <Shield className="h-4 w-4 mr-2" />
                Enterprise Security
<<<<<<< HEAD
=======
              </div>
              <div className="flex items-center space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-500 transition-colors duration-200 group"
                  >
                    <social.icon className="w-4 h-4 text-gray-400 group-hover:text-white" />
                  </a>
                ))}
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-e082
              </div>
=======
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </Link>
>>>>>>> cursor/fix-errors-and-merge-to-main-2460
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

<<<<<<< HEAD
export default Footer;
=======
export default Footer;
>>>>>>> cursor/fix-errors-and-merge-to-main-2460
