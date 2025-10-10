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
    { name: 'Cloud Services', url: '/cloud-services', description: 'Cloud solutions' },
    { name: 'Cloud Migration', url: '/cloud-migration', description: 'Seamless migration' },
    { name: 'DevOps & CI/CD', url: '/devops', description: 'Development operations' },
    { name: 'Database Services', url: '/database', description: 'Database management' },
    { name: 'Cybersecurity', url: '/cybersecurity', description: 'Security solutions' },
    { name: 'Security Monitoring', url: '/security-monitoring', description: '24/7 security' },
    { name: 'Penetration Testing', url: '/penetration-testing', description: 'Security testing' },
    { name: 'IT Infrastructure', url: '/it-infrastructure', description: 'Enterprise infrastructure' },
    { name: 'Managed IT Services', url: '/managed-it', description: '24/7 IT management' },
    { name: 'IT Consulting', url: '/it-consulting', description: 'Strategic IT planning' },
    { name: 'Data Analytics', url: '/data-analytics', description: 'Business intelligence' },
    { name: 'Mobile Development', url: '/mobile-development', description: 'Mobile applications' },
    { name: 'Web Development', url: '/web-development', description: 'Web applications' },
    { name: 'Process Automation', url: '/process-automation', description: 'Workflow automation' }
  ];
  const microSaasServices = [
    { name: 'Micro SAAS Solutions', url: '/micro-saas', description: '50+ AI-powered tools' },
    { name: 'AI Analytics Dashboard', url: '/ai-analytics-dashboard', description: 'Business intelligence' },
    { name: 'AI-Powered CRM', url: '/ai-crm', description: 'Customer management' },
    { name: 'Security Monitoring Suite', url: '/security-monitoring-suite', description: 'Cybersecurity' },
    { name: 'Cloud Infrastructure Manager', url: '/cloud-infrastructure-manager', description: 'Cloud management' },
    { name: 'Email Marketing Automation', url: '/email-marketing-automation', description: 'Email marketing' },
    { name: 'Project Management Pro', url: '/project-management-pro', description: 'Project management' },
    { name: 'E-commerce Analytics Pro', url: '/ecommerce-analytics-pro', description: 'E-commerce analytics' },
    { name: 'AI Recruitment Assistant', url: '/ai-recruitment-assistant', description: 'HR & recruitment' },
    { name: 'AI Content Studio', url: '/ai-content-studio', description: 'Content creation' },
    { name: 'AI SEO Optimizer', url: '/ai-seo-optimizer', description: 'SEO optimization' },
    { name: 'AI Lead Scoring', url: '/ai-lead-scoring', description: 'Lead qualification' },
    { name: 'AI Chatbot Builder', url: '/ai-chatbot-builder', description: 'Conversational AI' },
    { name: 'AI Email Assistant', url: '/ai-email-assistant', description: 'Email automation' },
    { name: 'AI Content Generator', url: '/ai-content-generator', description: 'Content generation' },
    { name: 'AI Lead Generation', url: '/ai-lead-generation', description: 'Lead generation' }
  ];
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 text-sm">
              Pioneering the future of AI and IT solutions. We transform businesses through innovative technology and cutting-edge artificial intelligence.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-300">
              <Mail className="w-4 h-4" />
              <span>info@ziontechgroup.com</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-300">
              <MapPin className="w-4 h-4" />
              <span>San Francisco, CA</span>
            </div>
          </div>
          {/* AI Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center space-x-2">
              <Brain className="w-5 h-5 text-cyan-400" />
              <span>AI Services</span>
            </h3>
            <ul className="space-y-2">
              {aiServices.slice(0, 8).map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* IT Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center space-x-2">
              <Cloud className="w-5 h-5 text-purple-400" />
              <span>IT Services</span>
            </h3>
            <ul className="space-y-2">
              {itServices.slice(0, 8).map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.url}
                    className="text-gray-300 hover:text-purple-400 transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Micro SAAS */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center space-x-2">
              <Code className="w-5 h-5 text-green-400" />
              <span>Micro SAAS</span>
            </h3>
            <ul className="space-y-2">
              {microSaasServices.slice(0, 8).map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.url}
                    className="text-gray-300 hover:text-green-400 transition-colors text-sm"
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
            <div className="text-gray-300 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-gray-300 hover:text-white transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-300 hover:text-white transition-colors text-sm">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-300 hover:text-white transition-colors text-sm">
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