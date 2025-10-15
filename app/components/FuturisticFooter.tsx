import React from 'react';
import { Link } from 'react-router-dom';

const FuturisticFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const serviceCategories = [
    {
      title: 'AI Services',
      services: [
        { name: 'AI Development', path: '/ai-services' },
        { name: 'AI Consulting', path: '/ai-services' },
        { name: 'AI Content Generator', path: '/ai-content-generator' },
        { name: 'AI Voice Assistant', path: '/ai-services/ai-voice-assistant' },
        { name: 'AI Image Generator', path: '/ai-services/ai-image-generator' },
        { name: 'AI Code Assistant', path: '/ai-services/ai-code-assistant' }
      ]
    },
    {
      title: 'IT Solutions',
      services: [
        { name: 'Cloud Infrastructure', path: '/cloud-infrastructure' },
        { name: 'Web Development', path: '/web-development' },
        { name: 'Mobile Development', path: '/mobile-development' },
        { name: 'Database Management', path: '/database-management' },
        { name: 'Cybersecurity', path: '/it-services/cybersecurity' },
        { name: 'Blockchain Solutions', path: '/it-services/blockchain-solutions' }
      ]
    },
    {
      title: 'Micro SaaS',
      services: [
        { name: 'CRM Pro', path: '/micro-saas-solutions/crm-pro' },
        { name: 'HR Management', path: '/micro-saas-solutions/hr-management' },
        { name: 'Project Management', path: '/micro-saas-solutions/project-management' },
        { name: 'Invoicing Pro', path: '/micro-saas-solutions/invoicing-pro' },
        { name: 'Analytics Pro', path: '/micro-saas-solutions/analytics-pro' },
        { name: 'Chatbot Builder', path: '/micro-saas-solutions/chatbot-builder' }
      ]
    },
    {
      title: 'AI Tools',
      services: [
        { name: 'Content Moderator', path: '/zion-ai-content-moderator' },
        { name: 'Churn Predictor', path: '/zion-ai-customer-churn-predictor' },
        { name: 'Sales Predictor', path: '/zion-ai-sales-predictor' },
        { name: 'Workflow Automator', path: '/zion-ai-workflow-automator' },
        { name: 'Financial Forecaster', path: '/zion-ai-financial-forecaster' },
        { name: 'Document Analyzer', path: '/zion-ai-document-analyzer' }
      ]
    }
  ];

  const companyLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Our Team', path: '/team' },
    { name: 'Careers', path: '/careers' },
    { name: 'Partnerships', path: '/partnerships' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Pricing', path: '/pricing' }
  ];

  const supportLinks = [
    { name: 'Contact Us', path: '/contact' },
    { name: 'Help Center', path: '/help' },
    { name: 'API Documentation', path: '/api-docs' },
    { name: 'Blog', path: '/blog' },
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' }
  ];

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">Z</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                    Zion Tech Group
                  </h3>
                  <p className="text-sm text-gray-400">Advanced AI & IT Solutions</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Empowering businesses with cutting-edge AI and IT solutions. We deliver innovative technology 
                that drives growth, efficiency, and competitive advantage in the digital age.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-sm">
                  <div className="w-5 h-5 bg-cyan-500 rounded-full flex items-center justify-center">
                    <span className="text-xs">📞</span>
                  </div>
                  <a href="tel:+13024640950" className="text-gray-300 hover:text-cyan-400 transition-colors">
                    +1 302 464 0950
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <div className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-xs">✉️</span>
                  </div>
                  <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-cyan-400 transition-colors">
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div className="flex items-start space-x-3 text-sm">
                  <div className="w-5 h-5 bg-pink-500 rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-xs">📍</span>
                  </div>
                  <div className="text-gray-300">
                    <div>364 E Main St STE 1008</div>
                    <div>Middletown, DE 19709</div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4 mt-6">
                <a href="https://linkedin.com/company/ziontechgroup" className="w-10 h-10 bg-gray-800 hover:bg-cyan-500 rounded-lg flex items-center justify-center transition-colors group">
                  <span className="text-lg group-hover:scale-110 transition-transform">💼</span>
                </a>
                <a href="https://twitter.com/ziontechgroup" className="w-10 h-10 bg-gray-800 hover:bg-purple-500 rounded-lg flex items-center justify-center transition-colors group">
                  <span className="text-lg group-hover:scale-110 transition-transform">🐦</span>
                </a>
                <a href="https://github.com/ziontechgroup" className="w-10 h-10 bg-gray-800 hover:bg-pink-500 rounded-lg flex items-center justify-center transition-colors group">
                  <span className="text-lg group-hover:scale-110 transition-transform">💻</span>
                </a>
              </div>
            </div>

            {/* Services */}
            {serviceCategories.map((category, index) => (
              <div key={index}>
                <h4 className="text-lg font-semibold mb-4 text-cyan-400 relative">
                  {category.title}
                  <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500"></div>
                </h4>
                <ul className="space-y-2">
                  {category.services.map((service) => (
                    <li key={service.name}>
                      <Link 
                        to={service.path} 
                        className="text-gray-300 hover:text-cyan-400 text-sm transition-colors duration-200 hover:translate-x-1 inline-block"
                      >
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Company & Support */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-cyan-400 relative">
                Company
                <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500"></div>
              </h4>
              <ul className="space-y-2 mb-8">
                {companyLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.path} 
                      className="text-gray-300 hover:text-cyan-400 text-sm transition-colors duration-200 hover:translate-x-1 inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <h4 className="text-lg font-semibold mb-4 text-cyan-400 relative">
                Support
                <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500"></div>
              </h4>
              <ul className="space-y-2">
                {supportLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.path} 
                      className="text-gray-300 hover:text-cyan-400 text-sm transition-colors duration-200 hover:translate-x-1 inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400 text-sm">
                © {currentYear} Zion Tech Group. All rights reserved.
              </div>
              
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <span>Powered by AI & Innovation</span>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></div>
                  <span>Online</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FuturisticFooter;