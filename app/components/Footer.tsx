import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, ArrowRight, Brain, Cloud, Shield, Globe, Database, Code, Smartphone } from 'lucide-react';

export default function Footer() {
  const aiServices = [
    { name: 'AI Content Generator', path: '/ai-content-generator' },
    { name: 'AI Chatbot Builder', path: '/ai-chatbot-builder' },
    { name: 'AI Analytics Dashboard', path: '/ai-analytics-dashboard' },
    { name: 'AI Email Assistant', path: '/ai-email-assistant' },
    { name: 'AI Voice Assistant', path: '/ai-voice-assistant' },
    { name: 'AI Automation Suite', path: '/ai-automation' }
  ];

  const itServices = [
    { name: 'Cloud Migration', path: '/cloud-migration' },
    { name: 'Cybersecurity', path: '/cybersecurity' },
    { name: 'DevOps', path: '/devops' },
    { name: 'Mobile Development', path: '/mobile-development' },
    { name: 'Data Analytics', path: '/data-analytics' },
    { name: 'IT Consulting', path: '/it-consulting' }
  ];

  const microSaasServices = [
    { name: 'Task Manager Pro', path: '/micro-saas/task-manager-pro' },
    { name: 'Expense Tracker', path: '/micro-saas/expense-tracker' },
    { name: 'Invoice Generator', path: '/micro-saas/invoice-generator' },
    { name: 'Lead Scoring', path: '/micro-saas/lead-scoring' },
    { name: 'Social Media Manager', path: '/micro-saas/social-manager' },
    { name: 'Email Marketing', path: '/micro-saas/email-marketing' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="text-xl font-bold">Zion Tech Group</span>
            </div>
            <p className="text-gray-400 mb-4">
              Leading provider of AI-powered solutions, IT services, and digital transformation for modern businesses.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/ziontechgroup" className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/company/ziontechgroup" className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/ziontechgroup" className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* AI Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">AI Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/ai-services" className="text-gray-400 hover:text-white transition-colors text-sm font-semibold">
                  All AI Services
                </Link>
              </li>
              {aiServices.slice(0, 5).map((service, index) => (
                <li key={index}>
                  <Link to={service.path} className="text-gray-400 hover:text-white transition-colors text-sm flex items-center group">
                    {service.name}
                    <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* IT Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">IT Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/it-services" className="text-gray-400 hover:text-white transition-colors text-sm font-semibold">
                  All IT Services
                </Link>
              </li>
              {itServices.slice(0, 5).map((service, index) => (
                <li key={index}>
                  <Link to={service.path} className="text-gray-400 hover:text-white transition-colors text-sm flex items-center group">
                    {service.name}
                    <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Micro SAAS */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Micro SAAS</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/micro-saas-services" className="text-gray-400 hover:text-white transition-colors text-sm font-semibold">
                  All Micro SAAS
                </Link>
              </li>
              {microSaasServices.slice(0, 5).map((service, index) => (
                <li key={index}>
                  <Link to={service.path} className="text-gray-400 hover:text-white transition-colors text-sm flex items-center group">
                    {service.name}
                    <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-800 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center">
              <Mail className="w-4 h-4 text-purple-400 mr-2" />
              <span className="text-gray-400">contact@ziontechgroup.com</span>
            </div>
            <div className="flex items-center">
              <Phone className="w-4 h-4 text-purple-400 mr-2" />
              <span className="text-gray-400">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-4 h-4 text-purple-400 mr-2" />
              <span className="text-gray-400">New York, NY</span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Zion Tech Group. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white transition-colors text-sm">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-white transition-colors text-sm">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}