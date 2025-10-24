import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Award, Shield, Zap, ArrowRight, Brain, Cloud, Code, BarChart } from 'lucide-react';

const Footer: React.FC = memo(() => {
  const serviceCategories = [
    {
      title: 'AI Services',
      icon: Brain,
      color: 'text-purple-400',
      services: [
        { name: 'AI Analytics', path: '/ai-analytics' },
        { name: 'AI Data Analytics', path: '/ai-data-analytics' },
        { name: 'AI E-commerce Solutions', path: '/ai-ecommerce-solutions' },
        { name: 'AI Mobile App Development', path: '/ai-mobile-app-development' },
        { name: 'AI Workflow Automation', path: '/ai-workflow-automation' },
        { name: 'AI Cybersecurity', path: '/ai-cybersecurity' },
        { name: 'AI Cloud Infrastructure', path: '/ai-cloud-infrastructure' },
        { name: 'Autonomous Systems', path: '/autonomous-systems' },
      ]
    },
    {
      title: 'IT Services',
      icon: Code,
      color: 'text-blue-400',
      services: [
        { name: 'Blockchain Solutions', path: '/blockchain' },
        { name: 'Blockchain Web3', path: '/blockchain-web3' },
        { name: 'Business Intelligence', path: '/business-intelligence' },
        { name: 'Ad Management', path: '/ad-management' },
        { name: 'Accessibility', path: '/accessibility' },
      ]
    },
    {
      title: 'Micro SaaS',
      icon: BarChart,
      color: 'text-green-400',
      services: [
        { name: 'E-commerce Analytics Pro', path: '/ecommerce-analytics-pro' },
        { name: 'Legal Document Manager', path: '/legal-document-manager' },
        { name: 'Medical Records Manager', path: '/medical-records-manager' },
        { name: 'Online Learning Platform', path: '/online-learning-platform' },
        { name: 'Property Management AI', path: '/property-management-ai' },
        { name: 'Supply Chain Optimizer', path: '/supply-chain-optimizer' },
      ]
    }
  ];

  const company = [
    { name: 'About Us', path: '/about' },
    { name: 'Our Team', path: '/team' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Enterprise Solutions', path: '/enterprise' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const resources = [
    { name: 'Blog & Insights', path: '/blog' },
    { name: 'Technical Guides', path: '/guides' },
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' },
    { name: 'Sitemap', path: '/sitemap' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mr-3">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-cyan-400">Zion Tech Group</h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading provider of enterprise AI solutions, quantum computing, and autonomous systems. 
              Transform your business with cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-600 transition-colors cursor-pointer">
                <span className="text-sm font-bold">f</span>
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-600 transition-colors cursor-pointer">
                <span className="text-sm font-bold">t</span>
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-600 transition-colors cursor-pointer">
                <span className="text-sm font-bold">in</span>
              </div>
            </div>
          </div>

          {/* Services */}
          {serviceCategories.map((category, index) => (
            <div key={index} className="space-y-4">
              <div className="flex items-center space-x-2">
                <category.icon className={`w-5 h-5 ${category.color}`} />
                <h4 className="text-lg font-semibold text-white">{category.title}</h4>
              </div>
              <ul className="space-y-2">
                {category.services.map((service, serviceIndex) => (
                  <li key={serviceIndex}>
                    <Link
                      to={service.path}
                      className="text-gray-300 hover:text-purple-400 transition-colors text-sm"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Company */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Company</h4>
            <ul className="space-y-2">
              {company.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className="text-gray-300 hover:text-purple-400 transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Resources</h4>
            <ul className="space-y-2">
              {resources.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className="text-gray-300 hover:text-purple-400 transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-purple-400" />
              <div>
                <p className="text-sm text-gray-400">Phone</p>
                <a href="tel:+13024640950" className="text-white hover:text-purple-400 transition-colors">
                  +1 302 464 0950
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-purple-400" />
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <a href="mailto:kleber@ziontechgroup.com" className="text-white hover:text-purple-400 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-purple-400" />
              <div>
                <p className="text-sm text-gray-400">Address</p>
                <p className="text-white">364 E Main St STE 1008, Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6">
              <p className="text-gray-400 text-sm">
                © 2024 Zion Tech Group. All rights reserved.
              </p>
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-green-400" />
                <span className="text-sm text-gray-400">Secure & Compliant</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/privacy" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
                Terms of Service
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