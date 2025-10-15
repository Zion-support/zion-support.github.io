import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Brain, Wifi, Cloud, Shield, FileText, Users, Code, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const serviceCategories = [
    {
      title: 'AI Services',
      icon: <Brain className="w-5 h-5 text-cyan-400" />,
      services: [
        { name: 'AI Analytics Dashboard Pro', href: '/ai-analytics-dashboard-pro' },
        { name: 'AI Code Assistant Pro', href: '/ai-code-assistant-pro' },
        { name: 'AI Voice Assistant Enterprise', href: '/ai-voice-assistant-enterprise' },
        { name: 'AI Content Generation Pro', href: '/ai-content-generation-pro' },
        { name: 'AI Automation Suite', href: '/ai-automation-suite' },
        { name: 'AI Cybersecurity Platform', href: '/ai-cybersecurity-platform' },
        { name: 'AI E-commerce Platform', href: '/ai-ecommerce-platform' },
        { name: 'AI Healthcare Platform', href: '/ai-healthcare-platform' },
        { name: 'AI Financial Platform', href: '/ai-financial-platform' },
        { name: 'AI Education Platform', href: '/ai-education-platform' }
      ]
    },
    {
      title: 'IT Services',
      icon: <Code className="w-5 h-5 text-purple-400" />,
      services: [
        { name: 'Cloud Infrastructure', href: '/ai-cloud-infrastructure' },
        { name: 'API Management', href: '/ai-api-management' },
        { name: 'Database Solutions', href: '/ai-database-solutions' },
        { name: 'Advanced Security Suite', href: '/advanced-security-suite' },
        { name: 'AI Cybersecurity Suite', href: '/ai-cybersecurity-suite' },
        { name: 'DevOps Solutions', href: '/devops-solutions' }
      ]
    },
    {
      title: '5G Solutions',
      icon: <Wifi className="w-5 h-5 text-green-400" />,
      services: [
        { name: '5G Implementation', href: '/5g-implementation' },
        { name: '5G Network Optimization', href: '/5g-optimization' },
        { name: 'IoT Solutions', href: '/iot-solutions' },
        { name: 'Edge Computing', href: '/edge-computing' },
        { name: 'Smart City Solutions', href: '/5g-smart-city-solutions' }
      ]
    }
  ];

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'AI Solutions', href: '/ai-services' },
    { name: 'IT Services', href: '/it-services' },
    { name: '5G Solutions', href: '/5g-solutions' },
    { name: 'Contact', href: '/contact' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'Sitemap', href: '/sitemap' }
  ];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Zion Tech Group</h3>
                <p className="text-sm text-cyan-400">Advanced AI & IT Solutions</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading provider of AI, IT, and 5G solutions. Transform your business with cutting-edge technology.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300 group hover:text-cyan-400 transition-colors">
                <Phone className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
                <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors">+1-302-464-0950</a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 group hover:text-cyan-400 transition-colors">
                <Mail className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors">kleber@ziontechgroup.com</a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 group hover:text-cyan-400 transition-colors">
                <MapPin className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>
          </div>

          {/* Service Categories */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold text-white mb-6">Our Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {serviceCategories.map((category) => (
                <div key={category.title}>
                  <div className="flex items-center space-x-2 mb-4">
                    {category.icon}
                    <h4 className="text-lg font-semibold text-white">{category.title}</h4>
                  </div>
                  <ul className="space-y-2">
                    {category.services.map((service) => (
                      <li key={service.name}>
                        <Link
                          to={service.href}
                          className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 group"
                        >
                          <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                          <span className="text-sm">{service.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links & Newsletter */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3 mb-8">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 group flex items-center space-x-2"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="text-lg font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-gray-400 hover:text-cyan-400 transition-colors">Sitemap</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cyan-500/20 bg-slate-800/50">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400 text-sm">
                © {currentYear} Zion Tech Group. All rights reserved.
              </div>
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <span>Powered by AI & Innovation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;