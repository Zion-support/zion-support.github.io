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
    { name: 'Cybersecurity Solutions', path: '/cybersecurity-solutions' },
    { name: 'DevOps & CI/CD', path: '/devops-cicd' },
    { name: 'Data Analytics', path: '/data-analytics' },
    { name: 'Mobile Development', path: '/mobile-development' },
    { name: 'Blockchain Solutions', path: '/blockchain' }
  ];

  const microSaasServices = [
    { name: 'AI Task Manager', path: '/ai-task-manager' },
    { name: 'AI Expense Tracker', path: '/ai-expense-tracker' },
    { name: 'AI Password Manager', path: '/ai-password-manager' },
    { name: 'AI Invoice Generator', path: '/ai-invoice-generator' },
    { name: 'AI Health Tracker', path: '/ai-health-tracker' },
    { name: 'AI Smart Calendar', path: '/ai-smart-calendar' }
  ];

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'AI Services', path: '/ai-services' },
    { name: 'IT Services', path: '/it-services' },
    { name: 'Micro SAAS', path: '/micro-saas-services' },
    { name: '5G Solutions', path: '/5g-implementation' },
    { name: 'Contact', path: '/contact' }
  ];

  const legal = [
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' },
    { name: 'Cookie Policy', path: '/cookies' },
    { name: 'Compliance', path: '/compliance' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="text-xl font-bold">Zion Tech Group</span>
            </div>
            <p className="text-gray-400 text-sm max-w-md">
              Leading provider of AI-powered solutions, 5G implementation, and enterprise IT services.
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
          <div>
            <h3 className="text-lg font-semibold mb-4">AI Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/ai-services" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">
                  All AI Services
                </Link>
              </li>
              {aiServices.map((service, index) => (
                <li key={index}>
                  <Link to={service.path} className="text-gray-400 hover:text-white transition-colors text-sm">
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
              <li>
                <Link to="/it-services" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">
                  All IT Services
                </Link>
              </li>
              {itServices.map((service, index) => (
                <li key={index}>
                  <Link to={service.path} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Micro SAAS Services */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">Micro SAAS</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/micro-saas-services" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">
                    All Micro SAAS
                  </Link>
                </li>
                {microSaasServices.map((service, index) => (
                  <li key={index}>
                    <Link to={service.path} className="text-gray-400 hover:text-white transition-colors text-sm">
                      {service.name}
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
                    <Link to={link.path} className="text-gray-400 hover:text-white transition-colors text-sm">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                {legal.map((link, index) => (
                  <li key={index}>
                    <Link to={link.path} className="text-gray-400 hover:text-white transition-colors text-sm">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-purple-400" />
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="text-white">contact@ziontechgroup.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-purple-400" />
              <div>
                <p className="text-sm text-gray-400">Phone</p>
                <p className="text-white">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-purple-400" />
              <div>
                <p className="text-sm text-gray-400">Location</p>
                <p className="text-white">San Francisco, CA</p>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="max-w-md">
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-400 text-sm mb-4">
              Get the latest updates on our AI and IT solutions.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <button className="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-r-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center">
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Zion Tech Group. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {legal.map((link, index) => (
                <Link key={index} to={link.path} className="text-gray-400 hover:text-white transition-colors text-sm">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}