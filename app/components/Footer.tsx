import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Award, Shield, Zap, ArrowRight, Brain, Cloud, Code, BarChart, Users, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  const aiServices = [
    { name: 'AI Services', url: '/ai-services' },
    { name: 'Micro SAAS', url: '/micro-saas' },
    { name: 'Autonomous Systems', url: '/autonomous-systems' },
    { name: 'Quantum Computing', url: '/quantum-computing' },
    { name: 'Business Intelligence', url: '/business-intelligence' },
  ];

  const itServices = [
    { name: 'IT Services', url: '/it-services' },
    { name: 'Cybersecurity', url: '/cybersecurity' },
    { name: 'Blockchain & Web3', url: '/blockchain-web3' },
    { name: 'IoT & Edge Computing', url: '/iot-edge-computing' },
    { name: 'Enterprise Solutions', url: '/enterprise' },
  ];

  const companyLinks = [
    { name: 'About Us', url: '/about' },
    { name: 'Our Team', url: '/team' },
    { name: 'Case Studies', url: '/case-studies' },
    { name: 'Contact', url: '/contact' },
  ];

  const supportLinks = [
    { name: 'Privacy Policy', url: '/privacy' },
    { name: 'Terms of Service', url: '/terms' },
    { name: 'Support Center', url: '/support' },
    { name: 'Documentation', url: '/docs' },
  ];

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <Brain className="w-8 h-8 mr-2 text-blue-400" />
              <h3 className="text-2xl font-bold">Zion Tech Group</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Leading provider of enterprise AI solutions, quantum computing, and autonomous
              systems. Transforming businesses with cutting-edge technology.
            </p>
            <div className="text-gray-300 mb-4">
              <div className="flex items-center mb-2">
                <MapPin className="w-4 h-4 mr-2" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
              <div className="flex items-center mb-2">
                <Phone className="w-4 h-4 mr-2" />
                <a href="tel:+13024640950" className="hover:text-blue-400 transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center mb-2">
                <Mail className="w-4 h-4 mr-2" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-blue-400 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center">
                <Globe className="w-4 h-4 mr-2" />
                <a href="https://ziontechgroup.com" className="hover:text-blue-400 transition-colors">
                  ziontechgroup.com
                </a>
              </div>
            </div>
            <div className="flex space-x-4">
              <a href="https://linkedin.com/company/ziontechgroup" className="text-gray-300 hover:text-white transition-colors">
                LinkedIn
              </a>
              <a href="https://twitter.com/ziontechgroup" className="text-gray-300 hover:text-white transition-colors">
                Twitter
              </a>
              <a href="https://github.com/ziontechgroup" className="text-gray-300 hover:text-white transition-colors">
                GitHub
              </a>
            </div>
          </div>

          {/* AI & Automation Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 flex items-center">
              <Brain className="w-5 h-5 mr-2 text-blue-400" />
              AI & Automation
            </h4>
            <ul className="space-y-2">
              {aiServices.map((service, index) => (
                <li key={index}>
                  <Link to={service.url} className="text-gray-300 hover:text-white transition-colors flex items-center">
                    <ArrowRight className="w-3 h-3 mr-2" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* IT & Infrastructure Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 flex items-center">
              <Code className="w-5 h-5 mr-2 text-green-400" />
              IT & Infrastructure
            </h4>
            <ul className="space-y-2">
              {itServices.map((service, index) => (
                <li key={index}>
                  <Link to={service.url} className="text-gray-300 hover:text-white transition-colors flex items-center">
                    <ArrowRight className="w-3 h-3 mr-2" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4 flex items-center">
              <Users className="w-5 h-5 mr-2 text-purple-400" />
              Company & Support
            </h4>
            <div className="space-y-4">
              <div>
                <h5 className="text-sm font-semibold text-gray-400 mb-2">Company</h5>
                <ul className="space-y-2">
                  {companyLinks.map((link, index) => (
                    <li key={index}>
                      <Link to={link.url} className="text-gray-300 hover:text-white transition-colors text-sm">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h5 className="text-sm font-semibold text-gray-400 mb-2">Support</h5>
                <ul className="space-y-2">
                  {supportLinks.map((link, index) => (
                    <li key={index}>
                      <Link to={link.url} className="text-gray-300 hover:text-white transition-colors text-sm">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Business Hours & Certifications */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-center">
              <Clock className="w-5 h-5 mr-3 text-blue-400" />
              <div>
                <h5 className="font-semibold">Business Hours</h5>
                <p className="text-sm text-gray-300">Mon-Fri: 9AM-6PM EST</p>
                <p className="text-sm text-gray-300">24/7 Emergency Support</p>
              </div>
            </div>
            <div className="flex items-center">
              <Award className="w-5 h-5 mr-3 text-yellow-400" />
              <div>
                <h5 className="font-semibold">Certifications</h5>
                <p className="text-sm text-gray-300">ISO 27001, SOC 2 Type II</p>
                <p className="text-sm text-gray-300">AWS, Microsoft, Google Certified</p>
              </div>
            </div>
            <div className="flex items-center">
              <Shield className="w-5 h-5 mr-3 text-green-400" />
              <div>
                <h5 className="font-semibold">Security & Compliance</h5>
                <p className="text-sm text-gray-300">GDPR, HIPAA, CCPA Compliant</p>
                <p className="text-sm text-gray-300">Enterprise-Grade Security</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 mb-4 md:mb-0">
              &copy; 2024 Zion Tech Group. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-300 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-300 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-300 hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;