import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Award, Shield, Zap, Brain, Cloud, Code, BarChart, Users, Globe, ArrowRight } from 'lucide-react';

const Footer: React.FC = memo(() => {
  const serviceCategories = [
    {
      title: 'AI Services',
      icon: Brain,
      color: 'text-purple-400',
      services: [
        { name: 'AI Consulting', path: '/ai-services' },
        { name: 'Machine Learning', path: '/ai-services' },
        { name: 'Natural Language Processing', path: '/ai-services' },
        { name: 'Computer Vision', path: '/ai-services' },
        { name: 'Predictive Analytics', path: '/ai-services' },
        { name: 'AI Automation', path: '/ai-services' }
      ]
    },
    {
      title: 'IT Services',
      icon: Cloud,
      color: 'text-blue-400',
      services: [
        { name: 'IT Infrastructure', path: '/it-services' },
        { name: 'Cloud Services', path: '/it-services' },
        { name: 'Cybersecurity', path: '/it-services' },
        { name: 'DevOps', path: '/it-services' },
        { name: 'Database Services', path: '/it-services' },
        { name: 'Network Solutions', path: '/it-services' }
      ]
    },
    {
      title: 'Micro SAAS',
      icon: Code,
      color: 'text-green-400',
      services: [
        { name: 'Project Management', path: '/micro-saas' },
        { name: 'CRM Solutions', path: '/micro-saas' },
        { name: 'Analytics Dashboard', path: '/micro-saas' },
        { name: 'Email Marketing', path: '/micro-saas' },
        { name: 'Task Automation', path: '/micro-saas' },
        { name: 'Document Management', path: '/micro-saas' }
      ]
    },
    {
      title: 'Specialized',
      icon: Zap,
      color: 'text-orange-400',
      services: [
        { name: 'Quantum Computing', path: '/quantum-computing' },
        { name: 'Autonomous Systems', path: '/autonomous-systems' },
        { name: 'Blockchain & Web3', path: '/blockchain-web3' },
        { name: 'IoT & Edge Computing', path: '/iot-edge-computing' },
        { name: 'Business Intelligence', path: '/business-intelligence' }
      ]
    }
  ];

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'All Services', path: '/services' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Enterprise', path: '/enterprise' },
    { name: 'Our Team', path: '/team' },
    { name: 'Contact Us', path: '/contact' }
  ];

  const resources = [
    { name: 'Blog & Insights', path: '/blog' },
    { name: 'Technical Guides', path: '/guides' },
    { name: 'Documentation', path: '/docs' },
    { name: 'API Reference', path: '/api' },
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Leading provider of AI and IT solutions, empowering businesses with cutting-edge technology 
              and innovative approaches to digital transformation.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-cyan-400 mr-3" />
                <a href="tel:+13024640950" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  +1 (302) 464-0950
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-cyan-400 mr-3" />
                <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-cyan-400 mr-3 mt-1" />
                <span className="text-gray-300">
                  364 E Main St STE 1008<br />
                  Middletown, DE 19709
                </span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 text-cyan-400 mr-3" />
                <span className="text-gray-300">24/7 Support Available</span>
              </div>
            </div>
          </div>

          {/* Service Categories */}
          {serviceCategories.map((category, index) => (
            <div key={index} className="lg:col-span-1">
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                <category.icon className={`w-5 h-5 mr-2 ${category.color}`} />
                {category.title}
              </h4>
              <ul className="space-y-2">
                {category.services.map((service, serviceIndex) => (
                  <li key={serviceIndex}>
                    <Link
                      to={service.path}
                      className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 flex items-center group"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Users className="w-5 h-5 mr-2 text-cyan-400" />
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated with Latest Tech Trends
            </h3>
            <p className="text-gray-300 mb-6">
              Get insights on AI, emerging technologies, and industry best practices delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 flex items-center justify-center">
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-cyan-400 mb-2">500+</div>
              <div className="text-gray-300">Enterprise Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">$2.5B+</div>
              <div className="text-gray-300">Cost Savings Delivered</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">99.9%</div>
              <div className="text-gray-300">Uptime Guarantee</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-gray-300">Support Available</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800 bg-gray-950">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Zion Tech Group. All rights reserved.
            </div>
            
            {/* Legal Links */}
            <div className="flex flex-wrap gap-6 mb-4 md:mb-0">
              {resources.map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  className="text-gray-400 hover:text-cyan-400 text-sm transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/company/ziontechgroup"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Globe className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/ziontechgroup"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                aria-label="Twitter"
              >
                <Globe className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/ziontechgroup"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                aria-label="GitHub"
              >
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t border-gray-700 text-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Zion Tech Group. All rights reserved. 
              Empowering businesses with AI and IT solutions.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;