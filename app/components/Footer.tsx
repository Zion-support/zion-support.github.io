'use client';
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Mail, MapPin, Phone } from 'lucide-react';
const Footer: React.FC = () => {
  const aiServices = [
    { name: 'AI Chatbot Builder', href: '/ai-chatbot-builder' },
    { name: 'AI Content Generator', href: '/ai-content-generator' },
    { name: 'AI Data Visualizer', href: '/ai-data-visualizer' },
    { name: 'AI Document Intelligence', href: '/ai-document-intelligence' },
    { name: 'AI Financial Forecasting', href: '/ai-financial-forecasting' },
    { name: 'AI Fraud Detection', href: '/ai-fraud-detection' }
  ];

  const itServices = [
    { name: 'Web Development', href: '/web-development' },
    { name: 'Mobile Development', href: '/mobile-development' },
    { name: 'API Development', href: '/api-development' },
    { name: 'Cloud Solutions', href: '/cloud-solutions' },
    { name: 'Cybersecurity', href: '/cybersecurity' },
    { name: 'Data Analytics', href: '/data-analytics' }
  ];

  const microSaas = [
    { name: 'Analytics Dashboard', href: '/analytics-dashboard' },
    { name: 'Expense Tracker Pro', href: '/expense-tracker-pro' },
    { name: 'Inventory Manager', href: '/inventory-manager' },
    { name: 'Task Manager Pro', href: '/task-manager-pro' },
    { name: 'Social Media Scheduler', href: '/social-media-scheduler' }
  ];

  const companyLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Partnerships', href: '/partnerships' }
  ];

  const supportLinks = [
    { name: 'Help Center', href: '/help' },
    { name: 'Documentation', href: '/docs' },
    { name: 'Tutorials', href: '/tutorials' },
    { name: 'API Documentation', href: '/api-docs' },
    { name: 'Status Page', href: '/status' }
  ];

  const quickLinks = [
    { name: 'Free Consultation', href: '/consultation' },
    { name: 'Request Demo', href: '/demo' },
    { name: 'Contact Sales', href: '/contact' },
    { name: 'Technical Support', href: '/support' }
  ];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Leading provider of AI and IT solutions for modern businesses.
            </p>
            <div className="flex space-x-4">
              <a href="tel:+1234567890" className="text-gray-400 hover:text-white transition-colors">
                <Phone className="w-5 h-5" />
              </a>
              <a href="mailto:info@ziontechgroup.com" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <MapPin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* AI Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">AI Services</h3>
            <ul className="space-y-2">
              {aiServices.map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.href} 
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* IT Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">IT Services</h3>
            <ul className="space-y-2">
              {itServices.map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.href} 
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Micro SaaS */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Micro SaaS</h3>
            <ul className="space-y-2">
              {microSaas.map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.href} 
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 mb-6">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href} 
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href} 
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Zion Tech Group. All rights reserved.
            </div>
            <div className="flex space-x-6">
              {quickLinks.map((link, index) => (
                <Link 
                  key={index}
                  to={link.href} 
                  className="text-gray-400 hover:text-white transition-colors text-sm flex items-center"
                >
                  {link.name}
                  <ArrowRight className="w-4 h-4 ml-1" />
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