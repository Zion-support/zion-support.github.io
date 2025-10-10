'use client';
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Zap, Brain, Cloud, Code, Users } from 'lucide-react';

const Footer: React.FC = memo(() => {
  const currentYear = new Date().getFullYear();
  
  const aiServices = [
    { name: 'AI Services Overview', url: '/ai-services', description: 'Comprehensive AI solutions' },
    { name: 'AI Analytics', url: '/ai-analytics', description: 'Advanced data insights' },
    { name: 'AI Automation', url: '/ai-automation', description: 'Process automation' },
    { name: 'AI Customer Support', url: '/ai-customer-support', description: 'AI-powered customer service' },
    { name: 'AI Content Generation', url: '/ai-content-generation', description: 'AI content creation' },
    { name: 'AI Healthcare', url: '/ai-healthcare', description: 'Medical AI solutions' },
    { name: 'AI Fintech', url: '/ai-fintech', description: 'Financial AI applications' },
    { name: 'AI Cybersecurity', url: '/ai-cybersecurity', description: 'AI security solutions' }
  ];

  const itServices = [
    { name: 'IT Services Overview', url: '/it-services', description: 'Comprehensive IT solutions' },
    { name: 'Cloud Infrastructure', url: '/ai-cloud-infrastructure', description: 'Cloud solutions' },
    { name: 'Cybersecurity', url: '/ai-cybersecurity', description: 'Security solutions' },
    { name: 'Data Analytics', url: '/ai-data-analytics', description: 'Data insights' },
    { name: 'API Management', url: '/ai-api-management', description: 'API solutions' },
    { name: 'Infrastructure Monitoring', url: '/ai-infrastructure-monitoring', description: 'System monitoring' }
  ];

  const microSaasServices = [
    { name: 'Micro SaaS Overview', url: '/micro-saas', description: 'AI-powered business tools' },
    { name: 'Analytics Dashboard', url: '/ai-analytics-dashboard', description: 'Business analytics' },
    { name: 'Content Generator', url: '/ai-content-generation', description: 'AI content creation' },
    { name: 'Email Marketing', url: '/ai-email-marketing', description: 'Email automation' },
    { name: 'CRM Assistant', url: '/ai-crm-assistant', description: 'Customer relationship management' },
    { name: 'Project Management', url: '/ai-automation', description: 'Project management tools' }
  ];

  const companyLinks = [
    { name: 'About Us', url: '/about', description: 'Learn about our company' },
    { name: 'Case Studies', url: '/case-studies', description: 'Success stories' },
    { name: 'Careers', url: '/careers', description: 'Join our team' },
    { name: 'Partners', url: '/partners', description: 'Our partnerships' },
    { name: 'Blog', url: '/blog', description: 'Latest insights' },
    { name: 'Contact', url: '/contact', description: 'Get in touch' }
  ];

  const supportLinks = [
    { name: 'Support Center', url: '/support', description: 'Get help' },
    { name: 'FAQ', url: '/faq', description: 'Frequently asked questions' },
    { name: 'Documentation', url: '/docs', description: 'Technical docs' },
    { name: 'Consultation', url: '/consultation', description: 'Expert guidance' },
    { name: 'Demo', url: '/demo', description: 'Try our solutions' },
    { name: 'Pricing', url: '/pricing', description: 'View pricing plans' }
  ];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
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
            <div className="space-y-2">
              <div className="flex items-center text-sm text-gray-300">
                <Phone className="w-4 h-4 mr-2" />
                <span>+1 (302) 464-0950</span>
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <Mail className="w-4 h-4 mr-2" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <MapPin className="w-4 h-4 mr-2" />
                <span>Middletown, DE 19709</span>
              </div>
            </div>
          </div>

          {/* AI Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">AI Services</h3>
            <ul className="space-y-2">
              {aiServices.map((service, index) => (
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

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.url} 
                    className="text-gray-300 hover:text-white text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.url} 
                    className="text-gray-300 hover:text-white text-sm transition-colors"
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