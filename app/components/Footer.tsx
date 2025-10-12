'use client';
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, ArrowRight, Brain, Cloud, Shield, Globe, Database, Smartphone, Zap, Sparkles, Star } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const aiServices = [
    { name: 'AI Analytics Dashboard', url: '/ai-analytics-dashboard' },
    { name: 'AI Content Generator', url: '/ai-content-generator' },
    { name: 'AI Chatbot Builder', url: '/ai-chatbot-builder' },
    { name: 'AI Voice Assistant', url: '/ai-voice-assistant' },
    { name: 'AI Automation', url: '/ai-automation' },
  ];

  const itServices = [
    { name: 'Cloud Migration', url: '/cloud-migration' },
    { name: 'Cybersecurity Solutions', url: '/cybersecurity-solutions' },
    { name: 'Web Development', url: '/web-development' },
    { name: 'Mobile Development', url: '/mobile-development' },
    { name: 'DevOps & CI/CD', url: '/devops-cicd' },
  ];

  const microSaas = [
    { name: 'Zion Analytics Pro', url: '/zion-analytics-pro' },
    { name: 'Zion Security Shield', url: '/zion-security-shield' },
    { name: 'Zion Content Studio', url: '/zion-content-studio' },
    { name: 'Zion CRM Intelligence', url: '/zion-crm-intelligence' },
    { name: 'Zion Project Manager', url: '/zion-project-manager' },
  ];

  const company = [
    { name: 'About Us', url: '/about' },
    { name: 'Our Team', url: '/team' },
    { name: 'Careers', url: '/careers' },
    { name: 'Case Studies', url: '/case-studies' },
    { name: 'Contact', url: '/contact' },
  ];

  const resources = [
    { name: 'Documentation', url: '/docs' },
    { name: 'API Reference', url: '/api-docs' },
    { name: 'Tutorials', url: '/tutorials' },
    { name: 'Blog', url: '/blog' },
    { name: 'Support', url: '/support' },
  ];

  const legal = [
    { name: 'Privacy Policy', url: '/privacy' },
    { name: 'Terms of Service', url: '/terms' },
    { name: 'Cookie Policy', url: '/cookies' },
    { name: 'Compliance', url: '/compliance' },
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <Zap className="h-5 w-5 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Zion Tech Group
                </span>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Leading technology company providing cutting-edge AI solutions, cloud infrastructure, 
              cybersecurity, and custom software development services.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-cyan-400" />
                <a href="tel:+13024640950" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-cyan-400" />
                <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-cyan-400" />
                <span className="text-gray-300">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </span>
              </div>
            </div>
          </div>

          {/* AI Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <Brain className="h-5 w-5 text-purple-400 mr-2" />
              AI Services
            </h3>
            <ul className="space-y-3">
              {aiServices.map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.url}
                    className="text-gray-300 hover:text-purple-400 transition-colors flex items-center group"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* IT Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <Cloud className="h-5 w-5 text-cyan-400 mr-2" />
              IT Services
            </h3>
            <ul className="space-y-3">
              {itServices.map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center group"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Micro SAAS */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <Database className="h-5 w-5 text-green-400 mr-2" />
              Micro SAAS
            </h3>
            <ul className="space-y-3">
              {microSaas.map((product, index) => (
                <li key={index}>
                  <Link 
                    to={product.url}
                    className="text-gray-300 hover:text-green-400 transition-colors flex items-center group"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <Globe className="h-5 w-5 text-blue-400 mr-2" />
              Company
            </h3>
            <ul className="space-y-3 mb-8">
              {company.map((item, index) => (
                <li key={index}>
                  <Link 
                    to={item.url}
                    className="text-gray-300 hover:text-blue-400 transition-colors flex items-center group"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <Sparkles className="h-5 w-5 text-yellow-400 mr-2" />
              Resources
            </h3>
            <ul className="space-y-3">
              {resources.map((item, index) => (
                <li key={index}>
                  <Link 
                    to={item.url}
                    className="text-gray-300 hover:text-yellow-400 transition-colors flex items-center group"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex space-x-6">
              {legal.map((item, index) => (
                <Link 
                  key={index}
                  to={item.url}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
