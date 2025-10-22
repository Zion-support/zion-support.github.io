'use client';
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin,
  ArrowRight,
  Brain
} from 'lucide-react';

const Footer: React.FC = () => {
  const aiServices = [
    { name: 'AI Chatbot Builder', href: '/ai-chatbot-builder' },
    { name: 'AI Content Generator', href: '/ai-content-generator' },
    { name: 'AI Data Visualizer', href: '/ai-data-visualizer' },
    { name: 'AI Document Intelligence', href: '/ai-document-intelligence' },
    { name: 'AI Financial Forecasting', href: '/ai-financial-forecasting' },
    { name: 'AI Fraud Detection', href: '/ai-fraud-detection' }
  ];

  const microSaas = [
    { name: 'Analytics Dashboard', href: '/analytics-dashboard' },
    { name: 'Expense Tracker Pro', href: '/expense-tracker-pro' },
    { name: 'Inventory Manager', href: '/inventory-manager' },
    { name: 'Task Manager Pro', href: '/task-manager-pro' },
    { name: 'Social Media Scheduler', href: '/social-media-scheduler' }
  ];

  const itServices = [
    { name: 'Cloud Solutions', href: '/cloud-solutions' },
    { name: 'Cybersecurity', href: '/cybersecurity' },
    { name: 'Data Analytics', href: '/data-analytics' },
    { name: 'DevOps Automation', href: '/devops-automation' },
    { name: 'IT Infrastructure', href: '/it-infrastructure' },
    { name: 'Mobile Development', href: '/mobile-development' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 text-sm">
              Advanced AI and IT solutions for modern businesses. 
              Empowering innovation through cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              <Phone className="h-5 w-5 text-gray-400" />
              <Mail className="h-5 w-5 text-gray-400" />
              <MapPin className="h-5 w-5 text-gray-400" />
            </div>
          </div>

          {/* AI Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">AI Services</h3>
            <ul className="space-y-2">
              {aiServices.map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center group"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform duration-200" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Micro SaaS */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Micro SaaS</h3>
            <ul className="space-y-2">
              {microSaas.map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center group"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform duration-200" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* IT Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">IT Services</h3>
            <ul className="space-y-2">
              {itServices.map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center group"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform duration-200" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Zion Tech Group. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-200">
                Terms of Service
              </Link>
              <Link to="/contact" className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-200">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);