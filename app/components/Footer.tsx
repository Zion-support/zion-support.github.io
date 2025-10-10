'use client';
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Zap, Brain, Cloud, Code, Users } from 'lucide-react';

const Footer: React.FC = memo(() => {
  const currentYear = new Date().getFullYear();
  
  const aiServices = [
    { name: 'AI Strategy & Consulting', url: '/ai-services', description: 'Strategic AI consulting' },
    { name: 'Machine Learning Solutions', url: '/ai-services', description: 'Custom ML models' },
    { name: 'Natural Language Processing', url: '/ai-services', description: 'NLP and chatbots' },
    { name: 'Computer Vision', url: '/ai-services', description: 'Image and video analysis' },
    { name: 'AI Automation', url: '/ai-services', description: 'Process automation' },
    { name: 'AI Data Analytics', url: '/ai-services', description: 'Intelligent analytics' }
  ];

  const itServices = [
    { name: 'Cloud Infrastructure', url: '/it-services', description: 'AWS, Azure, GCP' },
    { name: 'DevOps & CI/CD', url: '/it-services', description: 'Automation pipelines' },
    { name: 'Cybersecurity', url: '/it-services', description: 'Security solutions' },
    { name: 'Managed IT Services', url: '/it-services', description: '24/7 IT support' },
    { name: 'Database Management', url: '/it-services', description: 'Database optimization' },
    { name: 'Network Solutions', url: '/it-services', description: 'Network infrastructure' }
  ];

  const microSaasServices = [
    { name: 'Business Intelligence', url: '/micro-saas', description: 'Analytics dashboard' },
    { name: 'AI Customer Support', url: '/micro-saas', description: 'Chatbot solutions' },
    { name: 'Email Marketing', url: '/micro-saas', description: 'Marketing automation' },
    { name: 'Project Management', url: '/micro-saas', description: 'Team collaboration' },
    { name: 'Lead Generation', url: '/micro-saas', description: 'Sales automation' },
    { name: 'Financial Analytics', url: '/micro-saas', description: 'Financial management' }
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

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Leading the future of AI and IT solutions. We empower businesses with cutting-edge technology, 
              intelligent automation, and innovative digital transformation strategies.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <Mail className="w-4 h-4" />
                <span>info@ziontechgroup.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-300">
              <MapPin className="w-4 h-4" />
              <span>San Francisco, CA</span>
            </div>
          </div>

          {/* AI Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white flex items-center space-x-2">
              <Zap className="w-5 h-5 text-cyan-400" />
              <span>AI Services</span>
            </h3>
            <ul className="space-y-2">
              {aiServices.map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.url} 
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* IT Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white flex items-center space-x-2">
              <Cloud className="w-5 h-5 text-blue-400" />
              <span>IT Services</span>
            </h3>
            <ul className="space-y-2">
              {itServices.map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.url} 
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Micro SaaS */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white flex items-center space-x-2">
              <Code className="w-5 h-5 text-purple-400" />
              <span>Micro SaaS</span>
            </h3>
            <ul className="space-y-2">
              {microSaasServices.map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.url} 
                    className="text-gray-300 hover:text-purple-400 transition-colors duration-200 text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-gray-400 text-sm">
                © {currentYear} Zion Tech Group. All rights reserved.
              </p>
              <div className="flex space-x-4">
                <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Terms of Service
                </Link>
                <Link to="/cookies" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Cookie Policy
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <Clock className="w-4 h-4" />
              <span>24/7 Support Available</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;