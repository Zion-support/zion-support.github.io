import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'AI Services', href: '/ai-services' },
      { name: 'IT Services', href: '/services' },
      { name: 'Micro SAAS', href: '/micro-saas' },
      { name: '5G Solutions', href: '/5g-solutions' },
      { name: 'Cloud Migration', href: '/cloud-migration' },
      { name: 'Cybersecurity', href: '/network-security' },
      { name: 'DevOps Services', href: '/devops-services' },
      { name: 'Data Analytics', href: '/data-analytics' },
    ],
    microSaas: [
      { name: 'AI Analytics Pro', href: '/zion-ai-analytics-pro' },
      { name: 'AI Security Suite', href: '/zion-ai-security-suite' },
      { name: 'AI CRM Enterprise', href: '/zion-ai-crm-enterprise' },
      { name: 'AI Marketing Automation', href: '/zion-ai-marketing-automation' },
      { name: 'AI Project Management', href: '/zion-ai-project-management-pro' },
      { name: 'AI Content Studio', href: '/zion-ai-content-studio' },
      { name: 'AI Financial Analytics', href: '/zion-ai-financial-analytics' },
      { name: 'AI Inventory Optimizer', href: '/zion-ai-inventory-optimizer' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Team', href: '/team' },
      { name: 'Careers', href: '/careers' },
      { name: 'Contact', href: '/contact' },
      { name: 'Portfolio', href: '/portfolio' },
      { name: 'Demo', href: '/demo' },
      { name: 'Partners', href: '/partners' },
      { name: 'News', href: '/news' },
    ],
    resources: [
      { name: 'Blog', href: '/blog' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Support', href: '/support' },
      { name: 'Documentation', href: '/docs' },
      { name: 'Tutorials', href: '/tutorials' },
      { name: 'FAQ', href: '/faq' },
      { name: 'API Documentation', href: '/api-docs' },
      { name: 'Status Page', href: '/status' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
      { name: 'Sitemap', href: '/sitemap' },
      { name: 'GDPR Compliance', href: '/gdpr' },
      { name: 'Security Policy', href: '/security' },
    ]
  };

  return (
    <footer className="bg-black/20 backdrop-blur-sm border-t border-white/10 py-16 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-2xl font-bold text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 holographic-text">
                Zion Tech Group
              </span>
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed max-w-md">
              Leading provider of AI-powered solutions, IT services, micro SAAS, and digital transformation for modern businesses. Transform your operations with cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center neon-border">
                <span className="text-white text-sm font-bold">Z</span>
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-white text-sm font-semibold">Trusted by 50,000+</span>
                <span className="text-gray-400 text-xs">Businesses Worldwide</span>
              </div>
            </div>
          </div>

          {/* AI Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">AI Services</h4>
            <div className="space-y-3">
<<<<<<< HEAD
              {footerLinks.aiServices.map((link) => (
                <Link key={link.href} to={link.href} className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Micro SAAS */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Micro SAAS</h4>
            <div className="space-y-3">
              {footerLinks.microSaas.map((link) => (
                <Link key={link.href} to={link.href} className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* IT Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">IT Services</h4>
            <div className="space-y-3">
              {footerLinks.itServices.map((link) => (
                <Link key={link.href} to={link.href} className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
=======
              {footerLinks.services.map((link) => (
                <Link key={link.href} to={link.href} className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm group">
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-7775
                  {link.name}
                  <span className="block w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300"></span>
                </Link>
              ))}
            </div>
          </div>

          {/* Micro SAAS */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Micro SAAS</h4>
            <div className="space-y-3">
              {footerLinks.microSaas.map((link) => (
                <Link key={link.href} to={link.href} className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm group">
                  {link.name}
                  <span className="block w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300"></span>
                </Link>
              ))}
            </div>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Company</h4>
            <div className="space-y-3">
              {footerLinks.company.map((link) => (
                <Link key={link.href} to={link.href} className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm group">
                  {link.name}
                  <span className="block w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300"></span>
                </Link>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Resources</h4>
            <div className="space-y-3">
              {footerLinks.resources.map((link) => (
                <Link key={link.href} to={link.href} className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm group">
                  {link.name}
                  <span className="block w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300"></span>
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