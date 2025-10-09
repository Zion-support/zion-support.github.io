import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Award, Shield, Zap, ArrowRight, Brain, Code, Star, Globe, Users, TrendingUp } from 'lucide-react';

const Footer: React.FC = memo(() => {
  const aiServices = [
    { name: 'AI Solutions', url: '/ai-services', icon: Brain },
    { name: 'AI Marketing', url: '/ai-marketing', icon: TrendingUp },
    { name: 'AI Automation', url: '/ai-automation', icon: Zap },
    { name: 'AI Healthcare', url: '/ai-healthcare', icon: Shield },
    { name: 'AI Fintech', url: '/ai-fintech', icon: Star },
    { name: 'AI Content Generation', url: '/ai-content-generation', icon: Code }
  ];

  const itServices = [
    { name: 'IT Services', url: '/it-services', icon: Code },
    { name: 'Cloud Solutions', url: '/cloud-services', icon: Globe },
    { name: 'Cybersecurity', url: '/security', icon: Shield },
    { name: 'DevOps', url: '/devops', icon: Zap },
    { name: 'Business Intelligence', url: '/business-intelligence', icon: TrendingUp },
    { name: 'Micro SAAS', url: '/micro-saas', icon: Users }
  ];

  const companyLinks = [
    { name: 'About Us', url: '/about' },
    { name: 'Careers', url: '/careers' },
    { name: 'Contact', url: '/contact' },
    { name: 'Blog', url: '/blog' },
    { name: 'Support', url: '/support' },
    { name: 'Privacy Policy', url: '/privacy' }
  ];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Zion Tech Group</h3>
            <p className="text-gray-300">
              Leading provider of AI and IT solutions, transforming businesses through innovative technology.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center text-sm text-gray-300">
                <MapPin className="w-4 h-4 mr-2" />
                Delaware, USA
              </div>
            </div>
          </div>

          {/* AI Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">AI Services</h4>
            <ul className="space-y-2">
              {aiServices.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.url}
                    className="flex items-center text-gray-300 hover:text-white transition-colors"
                  >
                    <service.icon className="w-4 h-4 mr-2" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* IT Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">IT Services</h4>
            <ul className="space-y-2">
              {itServices.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.url}
                    className="flex items-center text-gray-300 hover:text-white transition-colors"
                  >
                    <service.icon className="w-4 h-4 mr-2" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.url}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Zion Tech Group. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-white text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white text-sm">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-white text-sm">
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