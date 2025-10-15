import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    aiServices: [
      { name: 'AI Analytics', href: '/ai-analytics' },
      { name: 'Content Generation', href: '/ai-content-generation' },
      { name: 'Customer Support', href: '/ai-customer-support' },
      { name: 'AI Cybersecurity', href: '/ai-cybersecurity' },
      { name: 'Marketing Automation', href: '/ai-marketing-automation' },
      { name: 'Data Analytics', href: '/ai-data-analytics' },
      { name: 'Voice Assistant', href: '/ai-voice-assistant' },
      { name: 'Workflow Automation', href: '/ai-workflow-automation' },
    ],
    itServices: [
      { name: 'Cloud Migration', href: '/cloud-migration' },
      { name: 'DevOps Services', href: '/devops-services' },
      { name: 'IT Consulting', href: '/it-consulting' },
      { name: 'Network Security', href: '/network-security' },
      { name: 'Web Development', href: '/web-development' },
      { name: 'System Integration', href: '/system-integration' },
      { name: 'Software Development', href: '/software-development' },
      { name: 'Managed Services', href: '/managed-services' },
    ],
    microSaas: [
      { name: 'Content Studio', href: '/zion-content-studio' },
      { name: 'AI CRM Pro', href: '/zion-ai-crm-pro' },
      { name: 'Inventory Smart', href: '/zion-inventory-smart' },
      { name: 'Financial Analytics', href: '/ai-financial-analytics-pro' },
      { name: 'Performance Monitor', href: '/zion-performance-monitor' },
      { name: 'Marketing Automation', href: '/zion-ai-marketing-automation' },
      { name: 'Email Automation', href: '/zion-email-automation' },
      { name: 'Data Analytics', href: '/data-analytics' },
    ],
    fiveGSolutions: [
      { name: 'Network Infrastructure', href: '/5g-network-infrastructure' },
      { name: 'Edge Computing', href: '/5g-edge-computing' },
      { name: 'IoT Solutions', href: '/5g-iot-solutions' },
      { name: 'Smart City Solutions', href: '/5g-smart-city-solutions' },
      { name: 'Private Networks', href: '/5g-private-networks' },
      { name: 'Mobile Applications', href: '/5g-mobile-applications' },
      { name: 'Data Analytics', href: '/5g-data-analytics' },
      { name: 'Implementation', href: '/5g-implementation' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Portfolio', href: '/portfolio' },
      { name: 'Contact', href: '/contact' },
      { name: 'Demo', href: '/demo' },
      { name: 'Support', href: '/support' },
      { name: 'FAQ', href: '/faq' },
    ],
    resources: [
      { name: 'Blog', href: '/blog' },
      { name: 'Tutorials', href: '/tutorials' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Documentation', href: '/docs' },
      { name: 'API Reference', href: '/api-docs' },
      { name: 'Developer Tools', href: '/developer-tools' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
      { name: 'Sitemap', href: '/sitemap' },
    ]
  };

  return (
    <footer className="bg-black/20 backdrop-blur-sm border-t border-white/10 py-16 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-2xl font-bold text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Zion Tech Group
              </span>
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed max-w-md">
              Leading provider of AI-powered solutions, IT services, micro SAAS, and digital transformation for modern businesses. Transform your operations with cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-sm font-bold">Z</span>
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-white text-sm font-semibold">Trusted by 10,000+</span>
                <span className="text-gray-400 text-xs">Businesses Worldwide</span>
              </div>
            </div>
          </div>

          {/* AI Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">AI Services</h4>
            <div className="space-y-2">
              {footerLinks.aiServices.slice(0, 6).map((link) => (
                <Link key={link.href} to={link.href} className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* IT Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">IT Services</h4>
            <div className="space-y-2">
              {footerLinks.itServices.slice(0, 6).map((link) => (
                <Link key={link.href} to={link.href} className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Micro SAAS */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Micro SAAS</h4>
            <div className="space-y-2">
              {footerLinks.microSaas.slice(0, 6).map((link) => (
                <Link key={link.href} to={link.href} className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* 5G Solutions */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">5G Solutions</h4>
            <div className="space-y-2">
              {footerLinks.fiveGSolutions.slice(0, 6).map((link) => (
                <Link key={link.href} to={link.href} className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Links Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Company</h4>
            <div className="space-y-2">
              {footerLinks.company.map((link) => (
                <Link key={link.href} to={link.href} className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Resources</h4>
            <div className="space-y-2">
              {footerLinks.resources.map((link) => (
                <Link key={link.href} to={link.href} className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Legal</h4>
            <div className="space-y-2">
              {footerLinks.legal.map((link) => (
                <Link key={link.href} to={link.href} className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Mail className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="text-white text-sm font-medium">Email</p>
                <p className="text-gray-300 text-sm">kleber@ziontechgroup.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Phone className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="text-white text-sm font-medium">Phone</p>
                <p className="text-gray-300 text-sm">+1 302 464 0950</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mt-0.5">
                <MapPin className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="text-white text-sm font-medium">Address</p>
                <p className="text-gray-300 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-300 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-6">
              {footerLinks.legal.map((link) => (
                <Link key={link.href} to={link.href} className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;