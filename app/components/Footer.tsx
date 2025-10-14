import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Youtube, Github, Star, Circle } from 'lucide-react';
const Footer: React.FC = memo(() => {
  const services = [
    { name: 'AI Services', url: '/ai-services' },
    { name: 'IT Services', url: '/it-services' },
    { name: 'Cloud Solutions', url: '/cloud-services' },
    { name: 'Cybersecurity', url: '/cybersecurity' },
    { name: 'Data Analytics', url: '/data-analytics' },
    {name: 'DevOps', url: '/devops'}
  ];
  const solutions = [
    { name: 'Quantum Computing', url: '/quantum-computing' },
    { name: 'Autonomous Systems', url: '/autonomous-systems' },
    { name: 'Blockchain & Web3', url: '/blockchain-web3' },
    { name: 'IoT & Edge Computing', url: '/iot-edge-computing' },
    { name: 'Business Intelligence', url: '/business-intelligence' },
    {name: 'Robotics', url: '/robotics'}
  ];
  const company = [
    { name: 'About Us', url: '/about' },
    { name: 'Our Team', url: '/team' },
    { name: 'Careers', url: '/careers' },
    { name: 'News', url: '/news' },
    { name: 'Case Studies', url: '/case-studies' },
    {name: 'Blog', url: '/blog'}
  ];
  const support = [
    { name: 'Contact Us', url: '/contact' },
    { name: 'Support Center', url: '/support' },
    { name: 'Documentation', url: '/documentation' },
    { name: 'FAQ', url: '/faq' },
    { name: 'Pricing', url: '/pricing' },
    {name: 'Request Demo', url: '/demo'}
  ];
  const socialLinks = [
    { name: 'Facebook', icon: Facebook, url: 'https:// facebook.com/ziontechgroup' },
    { name: 'Twitter', icon: Twitter, url: 'https:// twitter.com/ziontechgroup' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https:// linkedin.com/company/ziontechgroup' },
    { name: 'Instagram', icon: Instagram, url: 'https:// instagram.com/ziontechgroup' },
    { name: 'YouTube', icon: Youtube, url: 'https:// youtube.com/ziontechgroup' },
    {name: 'GitHub', icon: Github, url: 'https:// github.com/ziontechgroup'}
  ];
  const contactInfo = {
    email: 'contact@ziontechgroup.com',
    phone: '+1 (555) 123-4567',
    address: '123 Tech Street, Innovation District, NY 10001',
    hours: 'Mon-Fri: 9AM-6PM EST'
  };
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">"
      <div className="max-w-7xl mx-auto px-4 py-16">"
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">"
          {/* Company Info */}
          <div className="lg:col-span-2">"
            <div className="flex items-center mb-6">"
              <div className="flex items-center space-x-2">"
                <Circle className="w-8 h-8 text-cyan-400" />"
                <Star className="w-6 h-6 text-yellow-400" />"
              </div>
              <div className="ml-3">"
                <h3 className="text-xl font-bold text-white">Zion Tech Group</h3>"
                <p className="text-sm text-cyan-400">AI & IT Solutions</p>"
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">"
              Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems,
              and digital transformation services. Transform your business with cutting-edge technology.
            </p>
            <div className="space-y-2">"
              <div className="text-white font-medium">{contactInfo.email}</div>"
              <div className="text-white font-medium">{contactInfo.phone}</div>"
              <div className="text-gray-400 text-sm">{contactInfo.address}</div>"
              <div className="text-gray-400 text-sm">Business hours: {contactInfo.hours}</div>"
            </div>
          </div>
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>"
            <ul className="space-y-2">"
              {services.map((service) => (
                <li key={service.name}>
                  <Link>
                    to={service.url}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm""
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Link>
              to="/services""
              className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300 text-sm mt-4""
            >
              View All Services →
            </Link>
          </div>
          {/* Solutions */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Solutions</h4>"
            <ul className="space-y-2">"
              {solutions.map((solution) => (
                <li key={solution.name}>
                  <Link>
                    to={solution.url}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm""
                  >
                    {solution.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Link>
              to="/solutions""
              className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300 text-sm mt-4""
            >
              View All Solutions
              <Circle className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform duration-300" />"
            </Link>
          </div>
          {/* Company & Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>"
            <ul className="space-y-2 mb-6">"
              {company.map((item) => (
                <li key={item.name}>
                  <Link>
                    to={item.url}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm""
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="text-lg font-semibold mb-4">Support</h4>"
            <ul className="space-y-2">"
              {support.map((item) => (
                <li key={item.name}>
                  <Link>
                    to={item.url}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm""
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Social Links */}
        <div className="border-t border-gray-700 mt-12 pt-8">"
          <div className="flex flex-col md:flex-row justify-between items-center">"
            <div className="flex space-x-6 mb-4 md:mb-0">"
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a>
                    key={social.name}
                    href={social.url}
                    target="_blank""
                    rel="noopener noreferrer""
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300""
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />"
                  </a>
                );
              })}
            </div>
            <div className="flex space-x-6 text-sm">"
              <Link>
                to="/privacy""
                className="text-gray-400 hover:text-cyan-400 transition-colors""
              >
                Privacy Policy
              </Link>
              <Link>
                to="/terms""
                className="text-gray-400 hover:text-cyan-400 transition-colors""
              >
                Terms of Service
              </Link>
              <Link>
                to="/cookies""
                className="text-gray-400 hover:text-cyan-400 transition-colors""
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">"
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Zion Tech Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
});
Footer.displayName = 'Footer';
export default Footer;