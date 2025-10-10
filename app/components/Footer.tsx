'use client';
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Zap, Brain, Cloud, Code, Users } from 'lucide-react';

const Footer: React.FC = memo(() => {
  const currentYear = new Date().getFullYear();
  
  const aiServices = [
    { name: 'AI Business Intelligence', url: '/ai-business-intelligence', description: 'Advanced AI analytics' },
    { name: 'AI Customer Support', url: '/ai-customer-support', description: 'AI-powered customer service' },
    { name: 'AI Content Generation', url: '/ai-content-generation', description: 'AI content creation suite' },
    { name: 'AI Cybersecurity Suite', url: '/ai-cybersecurity', description: 'AI security solutions' },
    { name: 'AI E-commerce Optimization', url: '/ai-ecommerce-solutions', description: 'E-commerce AI solutions' },
    { name: 'AI Financial Analytics', url: '/ai-fintech', description: 'Financial AI applications' },
    { name: 'AI Healthcare Solutions', url: '/ai-healthcare', description: 'Medical AI solutions' },
    { name: 'AI HR & Recruitment', url: '/ai-hr', description: 'AI-powered HR solutions' },
    { name: 'AI Marketing Automation', url: '/ai-marketing', description: 'AI marketing automation' },
    { name: 'AI Supply Chain Optimization', url: '/ai-supply-chain', description: 'Supply chain AI' }
  ];

  const itServices = [
    { name: 'Cloud Infrastructure', url: '/cloud-services', description: 'Complete cloud solutions' },
    { name: 'DevOps & CI/CD', url: '/devops', description: 'Development operations' },
    { name: 'Database Management', url: '/database', description: 'Database optimization' },
    { name: 'Cybersecurity Solutions', url: '/cybersecurity', description: 'Advanced security' },
    { name: 'IT Infrastructure', url: '/it-infrastructure', description: 'Infrastructure setup' },
    { name: 'Managed IT Services', url: '/managed-it', description: '24/7 IT management' },
    { name: 'IT Consulting', url: '/it-consulting', description: 'Strategic IT guidance' },
    { name: 'Business Intelligence', url: '/data-analytics', description: 'Data analytics' }
  ];

  const microSaasServices = [
    { name: 'AI Analytics Dashboard Pro', url: '/micro-saas', description: 'Advanced AI analytics' },
    { name: 'AI Customer Support Suite', url: '/micro-saas', description: 'AI customer service' },
    { name: 'AI Content Generator Pro', url: '/micro-saas', description: 'AI content creation' },
    { name: 'AI Security Monitor Pro', url: '/micro-saas', description: 'AI security monitoring' },
    { name: 'AI Workflow Automation', url: '/micro-saas', description: 'Workflow automation' },
    { name: 'AI Lead Generation Engine', url: '/micro-saas', description: 'AI lead generation' }
  ];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
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
            <div className="flex space-x-4">
              <div className="flex items-center text-sm text-gray-300">
                <Phone className="w-4 h-4 mr-2" />
                <span>+1 302 464 0950</span>
              </div>
            </div>
            <div className="flex items-center text-sm text-gray-300">
              <Mail className="w-4 h-4 mr-2" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center text-sm text-gray-300">
              <MapPin className="w-4 h-4 mr-2" />
              <span>364 E Main St STE 1008 Middletown DE 19709</span>
            </div>
          </div>

          {/* AI Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">AI Services</h3>
            <ul className="space-y-2">
              {aiServices.slice(0, 6).map((service, index) => (
                <li key={index}>
                  <Link 
                    href={service.url} 
                    className="text-gray-300 hover:text-white text-sm transition-colors"
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
                    href={service.url} 
                    className="text-gray-300 hover:text-white text-sm transition-colors"
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
              {microSaasServices.map((service, index) => (
                <li key={index}>
                  <Link 
                    href={service.url} 
                    className="text-gray-300 hover:text-white text-sm transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;