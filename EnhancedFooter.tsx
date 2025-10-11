import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Facebook } from 'lucide-react';

const EnhancedFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'AI Development', href: '/ai-development' },
    { name: 'Cloud Solutions', href: '/cloud-solutions' },
    { name: 'Data Analytics', href: '/data-analytics' },
    { name: 'Machine Learning', href: '/machine-learning' },
    { name: 'Automation', href: '/automation' },
    { name: 'Consulting', href: '/consulting' }
  ];

  const products = [
    { name: 'AI Platform', href: '/ai-platform' },
    { name: 'Analytics Dashboard', href: '/analytics-dashboard' },
    { name: 'Cloud Infrastructure', href: '/cloud-infrastructure' },
    { name: 'Mobile Apps', href: '/mobile-apps' },
    { name: 'Web Applications', href: '/web-applications' },
    { name: 'API Services', href: '/api-services' }
  ];

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/careers' },
    { name: 'Support', href: '/support' },
    { name: 'Documentation', href: '/docs' }
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="text-xl font-bold">Zion Tech Group</div>
            <p className="text-gray-300 mb-6 max-w-md">
              Leading technology solutions provider helping businesses transform their digital
              presence with cutting-edge AI, cloud architecture and innovative development services.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/company/ziontechgroup"
                className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/ziontechgroup"
                className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/ziontechgroup"
                className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com/ziontechgroup"
                className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.slice(0, 6).map(service => (
                <li key={service.name}>
                  <Link to={service.href}>
                    <span className="text-gray-300 hover:text-white transition-colors">
                      {service.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              {products.slice(0, 6).map(product => (
                <li key={product.name}>
                  <Link to={product.href}>
                    <span className="text-gray-300 hover:text-white transition-colors">
                      {product.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map(item => (
                <li key={item.name}>
                  <Link to={item.href}>
                    <span className="text-gray-300 hover:text-white transition-colors">
                      {item.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-blue-400" />
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="text-white">info@ziontechgroup.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-blue-400" />
              <div>
                <p className="text-sm text-gray-400">Phone</p>
                <p className="text-white">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-blue-400" />
              <div>
                <p className="text-sm text-gray-400">Address</p>
                <p className="text-white">123 Tech Street, Innovation City</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              &copy; {currentYear} Zion Tech Group. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/legal/privacy">
                <span className="text-gray-400 hover:text-white text-sm transition-colors">
                  Privacy Policy
                </span>
              </Link>
              <Link to="/legal/terms">
                <span className="text-gray-400 hover:text-white text-sm transition-colors">
                  Terms of Service
                </span>
              </Link>
              <Link to="/legal/cookies">
                <span className="text-gray-400 hover:text-white text-sm transition-colors">
                  Cookie Policy
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default EnhancedFooter;