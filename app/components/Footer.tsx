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
    { name: 'AI Lead Generation', url: '/ai-lead-generation', description: 'Smart lead generation' },
    { name: 'AI Document Processing', url: '/ai-document-processing', description: 'Intelligent document handling' },
    { name: 'AI Process Automation', url: '/ai-automation', description: 'End-to-end process automation' },
    { name: 'AI Voice Assistant', url: '/ai-voice-assistant', description: 'Voice AI platform' },
    { name: 'AI Predictive Maintenance', url: '/ai-predictive-maintenance', description: 'Predictive maintenance AI' },
    { name: 'AI Supply Chain', url: '/ai-supply-chain', description: 'Supply chain optimization' },
    { name: 'AI Quality Control', url: '/ai-quality-control', description: 'Quality assurance AI' },
    { name: 'AI Energy Management', url: '/ai-energy-management', description: 'Energy optimization AI' },
    { name: 'AI Legal Analysis', url: '/ai-legal-analysis', description: 'Legal document analysis' },
    { name: 'AI Real Estate', url: '/ai-real-estate', description: 'Real estate AI solutions' },
    { name: 'AI HR Assistant', url: '/ai-hr-assistant', description: 'Human resources AI' },
    { name: 'AI Insurance', url: '/ai-insurance', description: 'Insurance AI applications' },
    { name: 'AI Education', url: '/ai-education', description: 'Educational AI solutions' },
    { name: 'AI Transportation', url: '/ai-transportation', description: 'Transportation AI' },
    { name: 'AI Environmental', url: '/ai-environmental', description: 'Environmental AI solutions' },
    { name: 'AI Retail', url: '/ai-retail', description: 'Retail AI applications' },
    { name: 'AI Sports', url: '/ai-sports', description: 'Sports analytics AI' },
    { name: 'AI Mental Health', url: '/ai-mental-health', description: 'Mental health AI support' }
  ];

  const itServices = [
    { name: 'Cloud Services', url: '/cloud-services', description: 'Comprehensive cloud solutions' },
    { name: 'Cloud Migration', url: '/cloud-migration', description: 'Seamless cloud migration' },
    { name: 'DevOps & CI/CD', url: '/devops', description: 'Development operations' },
    { name: 'Database Services', url: '/database', description: 'Data management solutions' },
    { name: 'Cybersecurity', url: '/cybersecurity', description: 'Security solutions' },
    { name: 'Network Infrastructure', url: '/network-infrastructure', description: 'Network setup and management' },
    { name: 'IT Consulting', url: '/it-consulting', description: 'Strategic IT consulting' },
    { name: 'System Administration', url: '/system-admin', description: 'System management services' },
    { name: 'Data Center Services', url: '/data-center', description: 'Data center solutions' },
    { name: 'Backup & Recovery', url: '/backup-recovery', description: 'Data protection services' },
    { name: 'IT Support', url: '/support', description: '24/7 technical support' },
    { name: 'IT Training', url: '/training', description: 'Professional IT training' }
  ];

  const microSaasServices = [
    { name: 'Analytics Dashboard', url: '/micro-saas/analytics-dashboard', description: 'Business analytics platform' },
    { name: 'Appointment Scheduler', url: '/micro-saas/appointment-scheduler', description: 'Smart scheduling system' },
    { name: 'Chat Analytics', url: '/micro-saas/chat-analytics', description: 'Chat performance analytics' },
    { name: 'Content Generator', url: '/micro-saas/content-generator', description: 'AI content creation tool' },
    { name: 'Document Processor', url: '/micro-saas/document-processor', description: 'Document automation' },
    { name: 'Email Marketing', url: '/micro-saas/email-marketing', description: 'Email campaign management' },
    { name: 'Expense Tracker', url: '/micro-saas/expense-tracker', description: 'Financial tracking tool' },
    { name: 'Inventory Management', url: '/micro-saas/inventory-management', description: 'Inventory control system' },
    { name: 'Lead Scoring', url: '/micro-saas/lead-scoring', description: 'Lead qualification tool' },
    { name: 'SEO Optimizer', url: '/micro-saas/seo-optimizer', description: 'SEO optimization platform' },
    { name: 'Social Manager', url: '/micro-saas/social-manager', description: 'Social media management' },
    { name: 'Support Bot', url: '/micro-saas/support-bot', description: 'AI customer support bot' }
  ];

  const companyLinks = [
    { name: 'About Us', url: '/about' },
    { name: 'Our Team', url: '/team' },
    { name: 'Careers', url: '/careers' },
    { name: 'Partners', url: '/partners' },
    { name: 'Case Studies', url: '/case-studies' },
    { name: 'News', url: '/news' },
    { name: 'Investors', url: '/investors' }
  ];

  const supportLinks = [
    { name: 'Help Center', url: '/help' },
    { name: 'Documentation', url: '/docs' },
    { name: 'API Reference', url: '/api-docs' },
    { name: 'Support Center', url: '/support' },
    { name: 'System Status', url: '/status' },
    { name: 'Privacy Policy', url: '/privacy' },
    { name: 'Terms of Service', url: '/terms' }
  ];

  const contactInfo = {
    phone: '+1 (302) 464-0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown, DE 19709',
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
                    to={service.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/ai-services"
                  className="text-cyan-400 hover:text-cyan-300 font-medium text-sm flex items-center"
                >
                  View All AI Services
                  <Zap className="w-4 h-4 ml-1" />
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
              {itServices.slice(0, 8).map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/it-services"
                  className="text-cyan-400 hover:text-cyan-300 font-medium text-sm flex items-center"
                >
                  View All IT Services
                  <Code className="w-4 h-4 ml-1" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Micro SaaS */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400 flex items-center">
              <Zap className="w-5 h-5 mr-2" />
              Micro SaaS
            </h3>
            <ul className="space-y-2">
              {microSaasServices.slice(0, 8).map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/micro-saas"
                  className="text-cyan-400 hover:text-cyan-300 font-medium text-sm flex items-center"
                >
                  View All Micro SaaS
                  <Zap className="w-4 h-4 ml-1" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400 flex items-center">
              <Users className="w-5 h-5 mr-2" />
              Company
            </h3>
            <ul className="space-y-2">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support & Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400 flex items-center">
              <Phone className="w-5 h-5 mr-2" />
              Support
            </h3>
            <ul className="space-y-2 mb-6">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-sm text-gray-300">
                <Phone className="w-4 h-4 mr-2 text-cyan-400" />
                <a href={`tel:${contactInfo.phone}`} className="hover:text-cyan-400 transition-colors">
                  {contactInfo.phone}
                </a>
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <Mail className="w-4 h-4 mr-2 text-cyan-400" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-cyan-400 transition-colors">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-start text-sm text-gray-300">
                <MapPin className="w-4 h-4 mr-2 text-cyan-400 mt-0.5" />
                <span>{contactInfo.address}</span>
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <Clock className="w-4 h-4 mr-2 text-cyan-400" />
                <span>{contactInfo.hours}</span>
              </div>
              <div className="text-xs text-cyan-400 font-medium">
                {contactInfo.emergency}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a
                href="https://linkedin.com/company/ziontechgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
              >
                LinkedIn
              </a>
              <a
                href="https://twitter.com/ziontechgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
              >
                Twitter
              </a>
              <a
                href="https://github.com/ziontechgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';
export default Footer;