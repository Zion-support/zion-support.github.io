import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Award, Shield, Zap, ArrowRight } from 'lucide-react';

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

  const companyLinks = [
    { name: 'About Us', url: '/about' },
    { name: 'Our Team', url: '/team' },
    { name: 'Careers', url: '/careers' },
    { name: 'Case Studies', url: '/case-studies' },
    { name: 'Blog', url: '/blog' },
    { name: 'News', url: '/news' },
  ];

  const supportLinks = [
    { name: 'Contact Us', url: '/contact' },
    { name: 'Support Center', url: '/support' },
    { name: 'Documentation', url: '/docs' },
    { name: 'API Reference', url: '/api-docs' },
    { name: 'Status Page', url: '/status' },
    { name: 'System Status', url: '/system-status' },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', url: '/privacy' },
    { name: 'Terms of Service', url: '/terms' },
    { name: 'Cookie Policy', url: '/cookies' },
    { name: 'GDPR Compliance', url: '/gdpr' },
    { name: 'Security', url: '/security' },
    { name: 'Compliance', url: '/compliance' },
  ];

const Footer: React.FC = memo(() => {
  const serviceCategories = [
    {
      title: 'AI Services',
      services: [
        { name: 'AI Consulting', href: '/ai-services' },
        { name: 'Machine Learning', href: '/ai-services' },
        { name: 'Natural Language Processing', href: '/ai-services' },
        { name: 'Computer Vision', href: '/ai-services' },
        { name: 'Predictive Analytics', href: '/ai-services' },
        { name: 'AI Automation', href: '/ai-services' },
      ],
    },
    {
      title: 'IT Solutions',
      services: [
        { name: 'Cloud Infrastructure', href: '/cloud-solutions' },
        { name: 'Cybersecurity', href: '/cybersecurity' },
        { name: 'Data Analytics', href: '/data-analytics' },
        { name: 'Mobile Development', href: '/mobile-development' },
        { name: 'Web Development', href: '/web-development' },
        { name: 'DevOps', href: '/devops' },
      ],
    },
    {
      title: 'Emerging Tech',
      services: [
        { name: 'Blockchain & Web3', href: '/blockchain' },
        { name: 'Quantum Computing', href: '/quantum-computing' },
        { name: 'IoT Solutions', href: '/iot-solutions' },
        { name: 'AR/VR Development', href: '/ar-vr' },
        { name: 'Edge Computing', href: '/edge-computing' },
        { name: '5G Solutions', href: '/5g-solutions' },
      ],
    },
  ];

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'GDPR Compliance', href: '/gdpr' },
    { name: 'Security', href: '/security' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Zion Tech Group</h3>
                <p className="text-gray-400 text-sm">Advanced AI & IT Solutions</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Empowering businesses with cutting-edge AI technology and comprehensive IT solutions. 
              We deliver innovative solutions that drive growth and efficiency.
            </p>
            <div className="flex space-x-4">
              <a href="tel:+1-555-0123" className="text-gray-300 hover:text-white transition-colors">
                <Phone className="w-5 h-5" />
              </a>
              <a href="mailto:info@ziontechgroup.com" className="text-gray-300 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <MapPin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.path} 
                    className="text-gray-300 hover:text-white transition-colors flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* AI Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">AI Services</h4>
            <ul className="space-y-2">
              {aiServices.map((service) => (
                <li key={service.name}>
                  <a 
                    href={service.url} 
                    className="text-gray-300 hover:text-white transition-colors flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    {service.name}
                  </a>
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
                  <a 
                    href={service.url} 
                    className="text-gray-300 hover:text-white transition-colors flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-white transition-colors flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Zion Tech Group. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
              <a href="/cookies" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});

export default Footer;
