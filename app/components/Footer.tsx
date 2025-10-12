'use client';
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, ArrowRight, Brain, Cloud, Shield, Globe, Database, Smartphone, Zap, Sparkles, Star } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const aiServices = [
    { name: 'AI Chatbots & NLP', url: '/ai-chatbot-builder' },
    { name: 'AI Content Generation', url: '/ai-content-generation' },
    { name: 'AI Data Analytics', url: '/ai-data-analytics' },
    { name: 'AI Computer Vision', url: '/ai-computer-vision' },
    { name: 'AI Automation', url: '/ai-automation' },
    { name: 'AI Voice Solutions', url: '/ai-voice-solutions' }
  ];

  const itServices = [
    { name: 'Cloud Infrastructure', url: '/cloud-infrastructure' },
    { name: 'Cybersecurity', url: '/cybersecurity-solutions' },
    { name: 'Web Development', url: '/web-development' },
    { name: 'Mobile Development', url: '/mobile-development' },
    { name: 'API Development', url: '/api-development' },
    { name: 'DevOps & CI/CD', url: '/devops-cicd' }
  ];

  const microSaas = [
    { name: 'Zion Analytics Pro', url: '/zion-analytics-pro' },
    { name: 'Zion Chat AI', url: '/zion-chat-ai' },
    { name: 'Zion Security Shield', url: '/zion-security-shield' },
    { name: 'Zion Cloud Vault', url: '/zion-cloud-vault' },
    { name: 'Zion Content Studio', url: '/zion-content-studio' },
    { name: 'Zion CRM Intelligence', url: '/zion-crm-intelligence' }
  ];

  const company = [
    { name: 'About Us', url: '/about' },
    { name: 'Our Team', url: '/team' },
    { name: 'Careers', url: '/careers' },
    { name: 'Contact', url: '/contact' },
    { name: 'Blog', url: '/blog' },
    { name: 'Case Studies', url: '/case-studies' }
  ];

  const legal = [
    { name: 'Privacy Policy', url: '/privacy' },
    { name: 'Terms of Service', url: '/terms' },
    { name: 'Cookie Policy', url: '/cookies' },
    { name: 'Compliance', url: '/compliance' }
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mr-3">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">Zion Tech Group</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Leading technology company providing cutting-edge AI solutions, cloud infrastructure, 
              cybersecurity, and custom software development services.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* AI Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">AI Services</h3>
            <ul className="space-y-2">
              {aiServices.map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.url} 
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* IT Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">IT Services</h3>
            <ul className="space-y-2">
              {itServices.map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.url} 
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Micro SAAS */}
          <div>
            <h3 className="text-white font-semibold mb-4">Micro SAAS</h3>
            <ul className="space-y-2">
              {microSaas.map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.url} 
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {company.map((item, index) => (
                <li key={index}>
                  <Link 
                    to={item.url} 
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
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

export default memo(Footer);