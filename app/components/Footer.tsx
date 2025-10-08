import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Award, Shield, ArrowRight } from 'lucide-react';

const Footer: React.FC = memo(() => {
  const aiServices = [
    { name: 'AI Services', url: '/ai-services' },
    { name: 'AI Marketing', url: '/ai-marketing' },
    { name: 'AI Automation', url: '/ai-automation' },
    { name: 'AI Healthcare', url: '/ai-healthcare' },
    { name: 'AI Fintech', url: '/ai-fintech' },
    { name: 'AI Data Analytics', url: '/ai-data-analytics' },
    { name: 'AI Cybersecurity', url: '/ai-cybersecurity' },
    { name: 'AI Workflow Automation', url: '/ai-workflow-automation' },
  ];

  const itServices = [
    { name: 'IT Services', url: '/it-services' },
    { name: 'Micro SAAS', url: '/micro-saas' },
    { name: 'Cybersecurity', url: '/cybersecurity' },
    { name: 'Cloud Infrastructure', url: '/ai-cloud-infrastructure' },
    { name: 'E-commerce Solutions', url: '/ai-ecommerce-solutions' },
    { name: 'Mobile App Development', url: '/ai-mobile-app-development' },
  ];

  const technologies = [
    { name: 'Quantum Computing', url: '/quantum-computing' },
    { name: 'Autonomous Systems', url: '/autonomous-systems' },
    { name: 'Business Intelligence', url: '/business-intelligence' },
    { name: 'Blockchain & Web3', url: '/blockchain-web3' },
    { name: 'IoT & Edge Computing', url: '/iot-edge-computing' },
  ];

  const company = [
    { name: 'About Us', url: '/about' },
    { name: 'Our Team', url: '/team' },
    { name: 'Case Studies', url: '/case-studies' },
    { name: 'Enterprise Solutions', url: '/enterprise' },
    { name: 'Contact Us', url: '/contact' },
  ];

  const resources = [
    { name: 'Blog & Insights', url: '/blog' },
    { name: 'Technical Guides', url: '/guides' },
    { name: 'Privacy Policy', url: '/privacy' },
    { name: 'Terms of Service', url: '/terms' },
    { name: 'Sitemap', url: '/sitemap' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <span className="text-3xl mr-2">⚡</span>
              <h3 className="text-2xl font-bold text-cyan-400">Zion Tech Group</h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading provider of enterprise AI solutions, quantum computing, and autonomous systems. 
              Transform your business with cutting-edge technology.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Phone className="w-4 h-4 mr-3 text-cyan-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="w-4 h-4 mr-3 text-cyan-400" />
                <span>info@ziontechgroup.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="w-4 h-4 mr-3 text-cyan-400" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* AI Services */}
          <div>
            <h4 className="text-lg font-semibold text-cyan-400 mb-4">AI Services</h4>
            <ul className="space-y-2">
              {aiServices.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* IT Services */}
          <div>
            <h4 className="text-lg font-semibold text-cyan-400 mb-4">IT Services</h4>
            <ul className="space-y-2">
              {itServices.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="text-lg font-semibold text-cyan-400 mb-4">Technologies</h4>
            <ul className="space-y-2">
              {technologies.map((tech) => (
                <li key={tech.name}>
                  <Link
                    to={tech.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {tech.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Resources */}
          <div>
            <h4 className="text-lg font-semibold text-cyan-400 mb-4">Company</h4>
            <ul className="space-y-2 mb-6">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <h4 className="text-lg font-semibold text-cyan-400 mb-4">Resources</h4>
            <ul className="space-y-2">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <Link
                    to={resource.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <div className="flex items-center text-gray-300">
                <Clock className="w-4 h-4 mr-2 text-cyan-400" />
                <span className="text-sm">24/7 Support</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Award className="w-4 h-4 mr-2 text-cyan-400" />
                <span className="text-sm">Certified Experts</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Shield className="w-4 h-4 mr-2 text-cyan-400" />
                <span className="text-sm">Secure & Reliable</span>
              </div>
            </div>
            
            <div className="text-gray-400 text-sm">
              © 2024 Zion Tech Group. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;