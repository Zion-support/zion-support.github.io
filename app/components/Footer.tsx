'use client';
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Brain, Zap, Phone, Mail, MapPin, ArrowRight, ChevronRight } from 'lucide-react';

const Footer: React.FC = memo(() => {
  const currentYear = new Date().getFullYear();
  
  const aiServices = [
    { name: 'AI Analytics', url: '/ai-analytics' },
    { name: 'AI Automation', url: '/ai-automation' },
    { name: 'AI Chatbot Builder', url: '/ai-chatbot-builder' },
    { name: 'AI Cybersecurity', url: '/ai-cybersecurity' },
    { name: 'AI CRM', url: '/ai-crm' },
    { name: 'AI Data Analytics', url: '/ai-data-analytics' }
  ];

  const itServices = [
    { name: 'Cloud Infrastructure', url: '/cloud-infrastructure' },
    { name: 'Cybersecurity Solutions', url: '/cybersecurity-solutions' },
    { name: 'Web Development', url: '/web-development' },
    { name: 'Mobile Development', url: '/mobile-development' },
    { name: 'API Development', url: '/api-development' },
    { name: 'Database Management', url: '/database-management' }
  ];

  const microSaasServices = [
    { name: 'Zion Analytics Pro', url: '/zion-analytics-pro' },
    { name: 'Zion Chat AI', url: '/zion-chat-ai' },
    { name: 'Zion Security Shield', url: '/zion-security-shield' },
    { name: 'Zion Cloud Vault', url: '/zion-cloud-vault' },
    { name: 'Zion Content Studio', url: '/zion-content-studio' },
    { name: 'Zion CRM Intelligence', url: '/zion-crm-intelligence' }
  ];

  return (
    <footer className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3 group">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg shadow-cyan-500/25">
                <Brain className="w-7 h-7 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">Zion Tech Group</span>
                <span className="text-sm text-cyan-400 font-medium tracking-wider">AI & IT SOLUTIONS</span>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Leading provider of AI and IT solutions that transform businesses through cutting-edge technology, 
              innovation, and exceptional service delivery.
            </p>
            <div className="flex space-x-4">
              <a href="tel:+13024640950" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Phone className="w-5 h-5" />
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* AI Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-4">
              AI Services
            </h3>
            <ul className="space-y-3">
              {aiServices.map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.url}
                    className="text-gray-300 hover:text-cyan-400 transition-all duration-300 text-sm group flex items-center">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 group-hover:scale-150 transition-transform"></div>
                    {service.name}
                  </Link>
                </li>
              ))}
              <li className="pt-2 border-t border-cyan-500/20">
                <Link 
                  to="/ai-services"
                  className="text-cyan-400 hover:text-cyan-300 transition-all duration-300 text-sm font-semibold flex items-center group">
                  View All AI Services
                  <Zap className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </li>
            </ul>
          </div>

          {/* IT Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-4">
              IT Services
            </h3>
            <ul className="space-y-3">
              {itServices.map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.url}
                    className="text-gray-300 hover:text-cyan-400 transition-all duration-300 text-sm group flex items-center">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 group-hover:scale-150 transition-transform"></div>
                    {service.name}
                  </Link>
                </li>
              ))}
              <li className="pt-2 border-t border-cyan-500/20">
                <Link 
                  to="/it-services"
                  className="text-cyan-400 hover:text-cyan-300 transition-all duration-300 text-sm font-semibold flex items-center group">
                  View All IT Services
                  <Zap className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Micro SAAS */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-4">
              Micro SAAS
            </h3>
            <ul className="space-y-3">
              {microSaasServices.map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.url}
                    className="text-gray-300 hover:text-cyan-400 transition-all duration-300 text-sm group flex items-center">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 group-hover:scale-150 transition-transform"></div>
                    {service.name}
                  </Link>
                </li>
              ))}
              <li className="pt-2 border-t border-cyan-500/20">
                <Link 
                  to="/micro-saas"
                  className="text-cyan-400 hover:text-cyan-300 transition-all duration-300 text-sm font-semibold flex items-center group">
                  View All Micro SAAS
                  <Zap className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Terms of Service
              </Link>
              <Link to="/contact" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Contact
              </Link>
            </div>
          </div>
          
          {/* Contact Info */}
          <div className="mt-6 pt-6 border-t border-gray-700">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span>364 E Main St STE 1008, Middletown DE 19709</span>
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
