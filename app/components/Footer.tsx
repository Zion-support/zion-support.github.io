'use client';
import React from 'react';
import Link from 'next/link';
import { Brain, Cloud, Code, Zap, Users, Mail, Phone, MapPin, Globe, Shield, BarChart, Target, Smartphone, Settings, Database, Cpu, Sparkles } from 'lucide-react';

const Footer: React.FC = () => {
  const aiServices = [
    { name: 'AI Analytics', url: '/ai-analytics', description: 'Advanced analytics' },
    { name: 'AI Chatbot Builder', url: '/ai-chatbot-builder', description: 'Custom chatbots' },
    { name: 'AI Content Generation', url: '/ai-content-generation', description: 'Content creation' },
    { name: 'AI Customer Support', url: '/ai-customer-support', description: 'Support automation' },
    { name: 'AI Data Visualization', url: '/ai-data-visualization', description: 'Data visualization' },
    { name: 'AI Lead Generation', url: '/ai-lead-generation', description: 'Lead generation' },
    { name: 'AI Document Processing', url: '/ai-document-processing', description: 'Document processing' },
    { name: 'AI Process Automation', url: '/ai-automation', description: 'Process automation' }
  ];

  const itServices = [
    { name: 'Cloud Services', url: '/cloud-services', description: 'Cloud solutions' },
    { name: 'Cloud Migration', url: '/cloud-migration', description: 'Seamless migration' },
    { name: 'DevOps & CI/CD', url: '/devops', description: 'Development operations' },
    { name: 'Database Services', url: '/database', description: 'Database management' },
    { name: 'IT Infrastructure', url: '/it-infrastructure', description: 'Infrastructure setup' },
    { name: 'Managed IT Services', url: '/managed-it', description: '24/7 IT support' },
    { name: 'IT Consulting', url: '/it-consulting', description: 'IT strategy' },
    { name: 'Data Analytics', url: '/data-analytics', description: 'Business intelligence' },
    { name: 'Mobile Development', url: '/mobile-development', description: 'Mobile apps' },
    { name: 'Web Development', url: '/web-development', description: 'Web applications' },
    { name: 'Process Automation', url: '/process-automation', description: 'Workflow automation' }
  ];

  const microSaasServices = [
    { name: 'Micro SAAS Solutions', url: '/micro-saas', description: '50+ AI tools' },
    { name: 'AI Analytics Dashboard', url: '/ai-analytics-dashboard', description: 'Business intelligence' },
    { name: 'AI-Powered CRM', url: '/ai-crm', description: 'Customer management' },
    { name: 'Security Monitoring Suite', url: '/security-monitoring-suite', description: 'Cybersecurity' },
    { name: 'AI Writing Assistant', url: '/ai-writing-assistant', description: 'Content creation' },
    { name: 'AI Design Studio', url: '/ai-design-studio', description: 'Design tools' }
  ];

  const emergingTech = [
    { name: 'Quantum Computing', url: '/quantum-computing', description: 'Quantum solutions' },
    { name: 'Robotics & Automation', url: '/robotics', description: 'Intelligent robotics' },
    { name: 'IoT & Edge Computing', url: '/iot-edge-computing', description: 'Connected devices' },
    { name: 'Blockchain & Web3', url: '/blockchain-web3', description: 'Decentralized solutions' },
    { name: 'Business Intelligence', url: '/business-intelligence', description: 'Data insights' },
    { name: 'Autonomous Systems', url: '/autonomous-systems', description: 'Self-managing systems' },
    { name: '5G Implementation', url: '/5g-implementation', description: '5G solutions' },
    { name: 'AI 3D Generation', url: '/ai-3d-generation', description: '3D AI solutions' },
    { name: 'Holographic Workspace', url: '/ai-holographic-workspace', description: 'Holographic AI' }
  ];

  const companyLinks = [
    { name: 'About Us', url: '/about' },
    { name: 'Careers', url: '/careers' },
    { name: 'Contact', url: '/contact' }
  ];

  const supportLinks = [
    { name: 'Help Center', url: '/help' },
    { name: 'Documentation', url: '/docs' },
    { name: 'API Reference', url: '/api-docs' },
    { name: 'Terms of Service', url: '/terms' }
  ];

  const contactInfo = {
    email: 'info@ziontechgroup.com',
    phone: '+1 (555) 123-4567',
    address: '123 Tech Street, Innovation City, IC 12345',
    hours: 'Mon-Fri: 9AM-6PM EST',
    emergency: '24/7 Emergency Support Available'
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* AI Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400 flex items-center">
              <Brain className="w-5 h-5 mr-2" />
              AI Services
            </h3>
            <ul className="space-y-2">
              {aiServices.slice(0, 8).map((service, index) => (
                <li key={index}>
                  <Link 
                    href={service.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  href="/ai-services"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 text-sm font-medium"
                >
                  View All AI Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* IT Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400 flex items-center">
              <Cloud className="w-5 h-5 mr-2" />
              IT Services
            </h3>
            <ul className="space-y-2">
              {itServices.slice(0, 6).map((service, index) => (
                <li key={index}>
                  <Link 
                    href={service.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  href="/it-services"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 text-sm font-medium"
                >
                  View All IT Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Micro SAAS */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400 flex items-center">
              <Code className="w-5 h-5 mr-2" />
              Micro SAAS
            </h3>
            <ul className="space-y-2">
              {microSaasServices.slice(0, 8).map((service, index) => (
                <li key={index}>
                  <Link 
                    href={service.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  href="/micro-saas"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 text-sm font-medium"
                >
                  View All Micro SAAS →
                </Link>
              </li>
            </ul>
          </div>

          {/* Emerging Technologies */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400 flex items-center">
              <Zap className="w-5 h-5 mr-2" />
              Emerging Tech
            </h3>
            <ul className="space-y-2">
              {emergingTech.map((service, index) => (
                <li key={index}>
                  <Link 
                    href={service.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400 flex items-center">
              <Users className="w-5 h-5 mr-2" />
              Company
            </h3>
            <ul className="space-y-2 mb-6">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <h4 className="text-md font-semibold mb-3 text-cyan-400">Support</h4>
            <ul className="space-y-2">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Information */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-center">
              <Mail className="w-5 h-5 mr-3 text-cyan-400" />
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <a href={`mailto:${contactInfo.email}`} className="text-white hover:text-cyan-400 transition-colors">
                  {contactInfo.email}
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <Phone className="w-5 h-5 mr-3 text-cyan-400" />
              <div>
                <p className="text-sm text-gray-400">Phone</p>
                <a href={`tel:${contactInfo.phone}`} className="text-white hover:text-cyan-400 transition-colors">
                  {contactInfo.phone}
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <MapPin className="w-5 h-5 mr-3 text-cyan-400" />
              <div>
                <p className="text-sm text-gray-400">Address</p>
                <p className="text-white">{contactInfo.address}</p>
              </div>
            </div>
            <div className="flex items-center">
              <Globe className="w-5 h-5 mr-3 text-cyan-400" />
              <div>
                <p className="text-sm text-gray-400">Hours</p>
                <p className="text-white">{contactInfo.hours}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="flex items-center">
              <Brain className="w-8 h-8 text-cyan-400 mr-3" />
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
            <p className="text-sm text-gray-400">
              © 2024 Zion Tech Group. All rights reserved.
            </p>
            <div className="flex space-x-4">
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
};

Footer.displayName = 'Footer';
export default Footer;