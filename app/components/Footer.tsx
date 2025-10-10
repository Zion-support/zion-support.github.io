'use client';

import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Zap, Brain, Cloud, Code, Users } from 'lucide-react';

const Footer: React.FC = memo(() => {
  const currentYear = new Date().getFullYear();

  const aiServices = [
    { name: 'AI Solutions', url: '/ai-services', description: 'Comprehensive AI solutions' },
    { name: 'AI Marketing Automation', url: '/ai-marketing', description: 'AI-powered marketing automation' },
    { name: 'AI Customer Support', url: '/ai-customer-support', description: 'AI-powered customer service' },
    { name: 'AI Data Analytics', url: '/ai-data-analytics', description: 'Advanced data insights' },
    { name: 'AI Content Generation', url: '/ai-content-generation', description: 'AI content creation' },
    { name: 'AI Healthcare Solutions', url: '/ai-healthcare', description: 'Medical AI solutions' },
    { name: 'AI Financial Services', url: '/ai-fintech', description: 'Financial AI applications' },
    { name: 'AI E-commerce Solutions', url: '/ai-ecommerce-solutions', description: 'E-commerce AI solutions' },
    { name: 'AI Cybersecurity', url: '/ai-cybersecurity', description: 'AI security solutions' },
    { name: 'AI Mobile Apps', url: '/ai-mobile-app-development', description: 'Mobile AI applications' },
    { name: 'AI Sales Automation', url: '/ai-sales-automation', description: 'Intelligent sales processes' },
    { name: 'AI Workflow Automation', url: '/ai-workflow-automation', description: 'Workflow optimization' },
    { name: 'AI Data Visualization', url: '/ai-data-visualization', description: 'Advanced data visualization' },
    { name: 'AI Lead Generation', url: '/ai-lead-generation', description: 'AI-powered lead generation' },
    { name: 'AI Document Processing', url: '/ai-document-processing', description: 'AI document processing' },
    { name: 'AI Process Automation', url: '/ai-automation', description: 'Intelligent process automation' }
  ];

  const itServices = [
    { name: 'IT Infrastructure', url: '/it-infrastructure', description: 'Robust IT infrastructure solutions' },
    { name: 'Cloud Services', url: '/cloud-infrastructure', description: 'Scalable cloud solutions' },
    { name: 'Cybersecurity', url: '/cybersecurity', description: 'Advanced security solutions' },
    { name: 'IT Support', url: '/it-support', description: '24/7 IT support services' },
    { name: 'Network Solutions', url: '/network-solutions', description: 'Enterprise network solutions' },
    { name: 'Data Management', url: '/data-management', description: 'Secure data management' },
    { name: 'Backup & Recovery', url: '/backup-recovery', description: 'Data backup and recovery' },
    { name: 'IT Consulting', url: '/it-consulting', description: 'Strategic IT consulting' }
  ];

  const emergingTech = [
    { name: 'Blockchain Solutions', url: '/blockchain', description: 'Blockchain technology solutions' },
    { name: 'Quantum Computing', url: '/quantum-computing', description: 'Quantum computing services' },
    { name: 'IoT & Edge Computing', url: '/iot-edge-computing', description: 'IoT and edge solutions' },
    { name: 'AR/VR Solutions', url: '/ar-vr-solutions', description: 'Augmented and virtual reality' },
    { name: 'Autonomous Systems', url: '/autonomous-systems', description: 'Autonomous system development' },
    { name: '5G Implementation', url: '/5g-implementation', description: '5G network implementation' }
  ];

  const company = [
    { name: 'About Us', url: '/about' },
    { name: 'Our Team', url: '/team' },
    { name: 'Careers', url: '/careers' },
    { name: 'Case Studies', url: '/case-studies' },
    { name: 'Blog', url: '/blog' },
    { name: 'Contact', url: '/contact' }
  ];

  const support = [
    { name: 'Documentation', url: '/docs' },
    { name: 'API Documentation', url: '/api-docs' },
    { name: 'Support Center', url: '/support' },
    { name: 'Status Page', url: '/status' },
    { name: 'Consultation', url: '/consultation' }
  ];

  const legal = [
    { name: 'Privacy Policy', url: '/privacy' },
    { name: 'Terms of Service', url: '/terms' },
    { name: 'Cookie Policy', url: '/cookies' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <div className="flex items-center space-x-2">
                <Zap className="h-8 w-8 text-blue-400" />
                <span className="text-2xl font-bold">Zion Tech Group</span>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Leading provider of AI and IT solutions, transforming businesses through 
              cutting-edge technology and innovative approaches.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Phone className="h-4 w-4 mr-3" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="h-4 w-4 mr-3" />
                <span>info@ziontechgroup.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="h-4 w-4 mr-3" />
                <span>123 Tech Street, Innovation City, IC 12345</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Clock className="h-4 w-4 mr-3" />
                <span>24/7 Support Available</span>
              </div>
            </div>
          </div>

          {/* AI Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Brain className="h-5 w-5 mr-2 text-blue-400" />
              AI Services
            </h3>
            <ul className="space-y-2">
              {aiServices.slice(0, 8).map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.url} 
                    className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                    title={service.description}
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* IT Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Cloud className="h-5 w-5 mr-2 text-blue-400" />
              IT Services
            </h3>
            <ul className="space-y-2">
              {itServices.map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.url} 
                    className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                    title={service.description}
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Emerging Technologies */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Code className="h-5 w-5 mr-2 text-blue-400" />
              Emerging Tech
            </h3>
            <ul className="space-y-2">
              {emergingTech.map((tech, index) => (
                <li key={index}>
                  <Link 
                    to={tech.url} 
                    className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                    title={tech.description}
                  >
                    {tech.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Users className="h-5 w-5 mr-2 text-blue-400" />
              Company
            </h3>
            <ul className="space-y-2 mb-6">
              {company.map((item, index) => (
                <li key={index}>
                  <Link 
                    to={item.url} 
                    className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2 mb-6">
              {support.map((item, index) => (
                <li key={index}>
                  <Link 
                    to={item.url} 
                    className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {legal.map((item, index) => (
                <li key={index}>
                  <Link 
                    to={item.url} 
                    className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
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
              <Link to="/privacy" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
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