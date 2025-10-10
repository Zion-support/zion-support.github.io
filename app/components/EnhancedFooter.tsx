'use client';
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Zap, Brain, Cloud, Code, Users, ArrowRight } from 'lucide-react';

const EnhancedFooter: React.FC = memo(() => {
  const currentYear = new Date().getFullYear();
  
  // Organized AI Services by category
  const aiServices = {
    'Core AI': [
      { name: 'AI Analytics', url: '/ai-analytics' },
      { name: 'AI Automation', url: '/ai-automation' },
      { name: 'AI Data Analytics', url: '/ai-data-analytics' },
      { name: 'AI Predictive Analytics', url: '/ai-predictive-analytics' }
    ],
    'Communication': [
      { name: 'AI Chatbot Builder', url: '/ai-chatbot-builder' },
      { name: 'AI Voice Solutions', url: '/ai-voice-solutions' },
      { name: 'AI Content Generation', url: '/ai-content-generation' },
      { name: 'AI Speech Synthesis', url: '/ai-speech-synthesis' }
    ],
    'Business Solutions': [
      { name: 'AI CRM', url: '/ai-crm' },
      { name: 'AI Financial Services', url: '/ai-financial-services' },
      { name: 'AI HR Solutions', url: '/ai-hr-solutions' },
      { name: 'AI E-commerce', url: '/ai-ecommerce-solutions' }
    ],
    'Technical': [
      { name: 'AI Cybersecurity', url: '/ai-cybersecurity' },
      { name: 'AI Computer Vision', url: '/ai-computer-vision' },
      { name: 'AI Edge Computing', url: '/ai-edge-computing' },
      { name: 'AI Video Analysis', url: '/ai-video-analysis' }
    ]
  };

  // Organized IT Services by category
  const itServices = {
    'Development': [
      { name: 'Web Development', url: '/web-development' },
      { name: 'Mobile Development', url: '/mobile-development' },
      { name: 'API Development', url: '/api-development' },
      { name: 'Custom Software', url: '/custom-software' }
    ],
    'Cloud & Infrastructure': [
      { name: 'Cloud Infrastructure', url: '/cloud-infrastructure' },
      { name: 'Cloud-Native Development', url: '/cloud-native-development' },
      { name: 'Network Infrastructure', url: '/network-infrastructure' },
      { name: 'Cloud Migration', url: '/cloud-migration-advanced' }
    ],
    'Security': [
      { name: 'Cybersecurity Solutions', url: '/cybersecurity-solutions' },
      { name: 'IT Security Services', url: '/it-security-services' },
      { name: 'Security Automation', url: '/security-automation' },
      { name: 'Compliance Automation', url: '/compliance-automation' }
    ],
    'Data & Analytics': [
      { name: 'Data Analytics & BI', url: '/data-analytics-bi' },
      { name: 'Data Engineering', url: '/data-engineering' },
      { name: 'Data Visualization', url: '/data-visualization' },
      { name: 'Database Management', url: '/database-management' }
    ]
  };

  // Micro SAAS Services (top ones)
  const microSaasServices = [
    { name: 'Zion Analytics Pro', url: '/zion-analytics-pro' },
    { name: 'Zion Chat AI', url: '/zion-chat-ai' },
    { name: 'Zion Security Shield', url: '/zion-security-shield' },
    { name: 'Zion Content Studio', url: '/zion-content-studio' },
    { name: 'Zion CRM Intelligence', url: '/zion-crm-intelligence' },
    { name: 'Zion Project Master', url: '/zion-project-master' },
    { name: 'Zion AI Video Editor', url: '/zion-ai-video-editor' },
    { name: 'Zion AI Email Assistant', url: '/zion-ai-email-assistant' }
  ];

  const companyLinks = [
    { name: 'About Us', url: '/about' },
    { name: 'Case Studies', url: '/case-studies' },
    { name: 'Blog', url: '/blog' },
    { name: 'Careers', url: '/careers' },
    { name: 'Partners', url: '/partners' },
    { name: 'Support', url: '/support' }
  ];

  const resourcesLinks = [
    { name: 'Pricing', url: '/pricing' },
    { name: 'FAQ', url: '/faq' },
    { name: 'Documentation', url: '/docs' },
    { name: 'API Reference', url: '/api' },
    { name: 'Tutorials', url: '/tutorials' },
    { name: 'Community', url: '/community' }
  ];

  const quickLinks = [
    { name: 'Free Consultation', url: '/consultation' },
    { name: 'Request Demo', url: '/demo' },
    { name: 'Contact Sales', url: '/contact' },
    { name: 'Technical Support', url: '/support' }
  ];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 text-sm">
              Leading provider of AI and IT solutions for modern businesses. 
              We help companies transform their operations with cutting-edge technology.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-sm text-gray-300">
                <Phone className="w-4 h-4 mr-2 text-cyan-400" />
                <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors">+1 302 464 0950</a>
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <Mail className="w-4 h-4 mr-2 text-cyan-400" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors">kleber@ziontechgroup.com</a>
              </div>
              <div className="flex items-start text-sm text-gray-300">
                <MapPin className="w-4 h-4 mr-2 text-cyan-400 mt-0.5" />
                <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <Clock className="w-4 h-4 mr-2 text-cyan-400" />
                <span>Mon-Fri: 9AM-6PM EST</span>
              </div>
            </div>
          </div>

          {/* AI Services */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-cyan-400 flex items-center">
              <Brain className="w-5 h-5 mr-2" />
              AI Services
            </h3>
            <div className="space-y-4">
              {Object.entries(aiServices).map(([category, services]) => (
                <div key={category}>
                  <h4 className="text-sm font-medium text-gray-400 mb-2">{category}</h4>
                  <ul className="space-y-1">
                    {services.map((service, index) => (
                      <li key={index}>
                        <Link 
                          to={service.url}
                          className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm">
                          {service.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <div className="pt-2">
                <Link 
                  to="/ai-services"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 text-sm font-medium flex items-center">
                  View All AI Services <ArrowRight className="w-3 h-3 ml-1" />
                </Link>
              </div>
            </div>
          </div>

          {/* IT Services */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-cyan-400 flex items-center">
              <Cloud className="w-5 h-5 mr-2" />
              IT Services
            </h3>
            <div className="space-y-4">
              {Object.entries(itServices).map(([category, services]) => (
                <div key={category}>
                  <h4 className="text-sm font-medium text-gray-400 mb-2">{category}</h4>
                  <ul className="space-y-1">
                    {services.map((service, index) => (
                      <li key={index}>
                        <Link 
                          to={service.url}
                          className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm">
                          {service.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <div className="pt-2">
                <Link 
                  to="/it-services"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 text-sm font-medium flex items-center">
                  View All IT Services <ArrowRight className="w-3 h-3 ml-1" />
                </Link>
              </div>
            </div>
          </div>
          
          {/* Micro SAAS */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-cyan-400 flex items-center">
              <Code className="w-5 h-5 mr-2" />
              Micro SAAS
            </h3>
            <ul className="space-y-2">
              {microSaasServices.map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm">
                    {service.name}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link 
                  to="/micro-saas"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 text-sm font-medium flex items-center">
                  View All Micro SAAS <ArrowRight className="w-3 h-3 ml-1" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Additional Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-8 border-t border-gray-700">
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.url} 
                    className="text-gray-300 hover:text-white text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {resourcesLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.url} 
                    className="text-gray-300 hover:text-white text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.url} 
                    className="text-gray-300 hover:text-white text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://linkedin.com/company/ziontechgroup" className="text-gray-300 hover:text-white transition-colors">
                LinkedIn
              </a>
              <a href="https://twitter.com/ziontechgroup" className="text-gray-300 hover:text-white transition-colors">
                Twitter
              </a>
              <a href="https://github.com/ziontechgroup" className="text-gray-300 hover:text-white transition-colors">
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
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

EnhancedFooter.displayName = 'EnhancedFooter';

export default EnhancedFooter;