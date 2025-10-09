import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Award, Shield, Zap, ArrowRight, Brain, Code, Star, Globe, Users, TrendingUp } from 'lucide-react';

const Footer: React.FC = memo(() => {
  const aiServices = [
    { name: 'AI Solutions', url: '/ai-services', icon: Brain },
    { name: 'AI Marketing', url: '/ai-marketing', icon: TrendingUp },
    { name: 'AI Automation', url: '/ai-automation', icon: Zap },
    { name: 'AI Healthcare', url: '/ai-healthcare', icon: Users },
    { name: 'AI Fintech', url: '/ai-fintech', icon: TrendingUp },
    { name: 'AI Data Analytics', url: '/ai-data-analytics', icon: TrendingUp },
    { name: 'AI Cybersecurity', url: '/ai-cybersecurity', icon: Shield },
    { name: 'AI Cloud Infrastructure', url: '/ai-cloud-infrastructure', icon: Globe },
  ];

  const itServices = [
    { name: 'IT Solutions', url: '/it-services', icon: Code },
    { name: 'Micro SAAS', url: '/micro-saas', icon: Star },
    { name: 'Cybersecurity', url: '/cybersecurity', icon: Shield },
    { name: 'Cloud Infrastructure', url: '/ai-cloud-infrastructure', icon: Globe },
    { name: 'E-commerce Solutions', url: '/ai-ecommerce-solutions', icon: Globe },
    { name: 'Mobile App Development', url: '/ai-mobile-app-development', icon: Code },
  ];

  const emergingTech = [
    { name: 'Quantum Computing', url: '/quantum-computing', icon: Zap },
    { name: 'Blockchain & Web3', url: '/blockchain', icon: Shield },
    { name: 'IoT & Edge Computing', url: '/iot-edge', icon: Globe },
    { name: 'Autonomous Systems', url: '/autonomous-systems', icon: Zap },
    { name: 'Robotics', url: '/robotics', icon: Code },
    { name: 'Business Intelligence', url: '/business-intelligence', icon: TrendingUp },
  ];

  const companyLinks = [
    { name: 'About Us', url: '/about' },
    { name: 'Our Team', url: '/team' },
    { name: 'Case Studies', url: '/case-studies' },
    { name: 'Blog', url: '/blog' },
    { name: 'Careers', url: '/careers' },
    { name: 'News', url: '/news' },
  ];

  const supportLinks = [
    { name: 'Contact Us', url: '/contact' },
    { name: 'Documentation', url: '/docs' },
    { name: 'API Reference', url: '/api-docs' },
    { name: 'Support Center', url: '/support' },
    { name: 'Status Page', url: '/status' },
    { name: 'System Status', url: '/system-status' },
  ];

  const legal = [
    { name: 'Privacy Policy', url: '/privacy' },
    { name: 'Terms of Service', url: '/terms' },
    { name: 'Cookie Policy', url: '/cookies' },
    { name: 'GDPR Compliance', url: '/gdpr' },
    { name: 'Security Policy', url: '/security' },
    { name: 'SLA Agreement', url: '/sla' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading provider of AI-powered enterprise solutions, quantum computing, and autonomous systems. 
              Transform your business with cutting-edge technology.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Clock className="w-4 h-4 text-cyan-400" />
                <span>24/7 Support Available</span>
              </div>
            </div>

            {/* Awards & Certifications */}
            <div className="mt-8">
              <div className="flex items-center space-x-2 mb-4">
                <Award className="w-5 h-5 text-yellow-400" />
                <span className="font-semibold text-gray-200">Certifications</span>
              </div>
              <div className="space-y-2 text-sm text-gray-400">
                <div>• ISO 27001 Certified</div>
                <div>• SOC 2 Type II Compliant</div>
                <div>• GDPR Compliant</div>
                <div>• AWS Advanced Partner</div>
              </div>
            </div>
          </div>

          {/* AI Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <Brain className="w-5 h-5 mr-2 text-cyan-400" />
              AI Services
            </h3>
            <ul className="space-y-3">
              {aiServices.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.url}
                    className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 group"
                  >
                    <service.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span>{service.name}</span>
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* IT Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <Code className="w-5 h-5 mr-2 text-cyan-400" />
              IT Services
            </h3>
            <ul className="space-y-3">
              {itServices.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.url}
                    className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 group"
                  >
                    <service.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span>{service.name}</span>
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>

            {/* Emerging Technologies */}
            <div className="mt-8">
              <h4 className="text-md font-semibold mb-4 text-gray-200">Emerging Tech</h4>
              <ul className="space-y-2">
                {emergingTech.slice(0, 4).map((tech, index) => (
                  <li key={index}>
                    <Link
                      to={tech.url}
                      className="flex items-center space-x-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-200 group"
                    >
                      <tech.icon className="w-3 h-3 group-hover:scale-110 transition-transform" />
                      <span>{tech.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Company & Support */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gray-200">Company</h3>
            <ul className="space-y-3 mb-8">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 group flex items-center"
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="text-md font-semibold mb-4 text-gray-200">Support</h4>
            <ul className="space-y-2 mb-8">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.url}
                    className="text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-200 group flex items-center"
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="text-md font-semibold mb-4 text-gray-200">Legal</h4>
            <ul className="space-y-2">
              {legal.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.url}
                    className="text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-200 group flex items-center"
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Updated with AI Innovation</h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Get the latest insights on AI technology, industry trends, and exclusive offers delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 Zion Tech Group. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span className="flex items-center">
                <Shield className="w-4 h-4 mr-1" />
                Enterprise Security
              </span>
              <span className="flex items-center">
                <Award className="w-4 h-4 mr-1" />
                ISO 27001 Certified
              </span>
              <span className="flex items-center">
                <Globe className="w-4 h-4 mr-1" />
                Global Services
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;