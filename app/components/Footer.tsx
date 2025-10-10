import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Zap, Code, Brain, Cloud, Shield, BarChart, Users, Settings, FileText, Globe, Database, Smartphone, Lock, TrendingUp, Calendar, CheckSquare } from 'lucide-react';

const Footer: React.FC = memo(() => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'AI Solutions', url: '/ai-services' },
    { name: 'IT Services', url: '/it-services' },
    { name: 'Cloud Computing', url: '/cloud-services' },
    { name: 'Cybersecurity', url: '/cybersecurity' },
    { name: 'Digital Transformation', url: '/digital-transformation' },
    { name: 'Consulting', url: '/consulting' }
  ];

  const aiServices = [
    { name: 'AI Analytics', url: '/ai-analytics' },
    { name: 'AI Automation', url: '/ai-automation' },
    { name: 'AI Chatbot Builder', url: '/ai-chatbot-builder' },
    { name: 'AI Content Writer', url: '/ai-content-writer' },
    { name: 'AI Data Visualization', url: '/ai-data-visualization' },
    { name: 'AI Sales Automation', url: '/ai-sales-automation' },
    { name: 'AI Workflow Automation', url: '/ai-workflow-automation' }
  ];

  const itServices = [
    { name: 'Web Development', url: '/web-development' },
    { name: 'Mobile App Development', url: '/mobile-development' },
    { name: 'API Development', url: '/api-development' },
    { name: 'Database Design', url: '/database-design' },
    { name: 'System Integration', url: '/system-integration' },
    { name: 'IT Support', url: '/it-support' }
  ];

  const microSaasServices = [
    { name: 'Project Management', url: '/project-management' },
    { name: 'Customer Support', url: '/customer-support' },
    { name: 'Analytics Dashboard', url: '/analytics-dashboard' },
    { name: 'Email Marketing', url: '/email-marketing' },
    { name: 'Social Media Management', url: '/social-media-management' },
    { name: 'Inventory Management', url: '/inventory-management' }
  ];

  const company = [
    { name: 'About Us', url: '/about' },
    { name: 'Our Team', url: '/team' },
    { name: 'Careers', url: '/careers' },
    { name: 'Case Studies', url: '/case-studies' },
    { name: 'Partners', url: '/partners' },
    { name: 'Contact', url: '/contact' }
  ];

  const support = [
    { name: 'Help Center', url: '/help' },
    { name: 'Documentation', url: '/docs' },
    { name: 'API Reference', url: '/api-docs' },
    { name: 'Status Page', url: '/status' },
    { name: 'Community', url: '/community' },
    { name: 'FAQ', url: '/faq' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400 flex items-center">
              <Settings className="w-5 h-5 mr-2" />
              Services
            </h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* AI Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400 flex items-center">
              <Brain className="w-5 h-5 mr-2" />
              AI Services
            </h3>
            <ul className="space-y-2">
              {aiServices.map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* IT Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400 flex items-center">
              <Code className="w-5 h-5 mr-2" />
              IT Services
            </h3>
            <ul className="space-y-2">
              {itServices.map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Micro SaaS */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400 flex items-center">
              <Zap className="w-5 h-5 mr-2" />
              Micro SaaS
            </h3>
            <ul className="space-y-2">
              {microSaasServices.map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm">
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  to="/micro-saas"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 text-sm font-medium">
                  View All Micro SaaS →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Company & Support Links */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h4 className="text-sm font-semibold text-cyan-400 mb-3">Company</h4>
              <ul className="space-y-2">
                {company.map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link.url} 
                      className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold text-cyan-400 mb-3">Support</h4>
              <ul className="space-y-2">
                {support.map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link.url} 
                      className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-sm font-semibold text-cyan-400 mb-3">Contact Info</h4>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-300">
                  <Phone className="w-4 h-4 mr-2" />
                  <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors">
                    +1 (302) 464-0950
                  </a>
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <Mail className="w-4 h-4 mr-2" />
                  <a href="mailto:info@ziontechgroup.com" className="hover:text-cyan-400 transition-colors">
                    info@ziontechgroup.com
                  </a>
                </div>
                <div className="flex items-start text-sm text-gray-300">
                  <MapPin className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                  <span>364 E Main St STE 1008<br />Middletown, DE 19709</span>
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>Mon-Fri: 9AM-6PM EST</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-sm font-semibold text-cyan-400 mb-3">Follow Us</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://linkedin.com/company/ziontechgroup" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-cyan-400 transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a 
                  href="https://twitter.com/ziontechgroup" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-cyan-400 transition-colors"
                  aria-label="Twitter"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">
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