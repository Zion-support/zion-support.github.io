<<<<<<< HEAD
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Youtube, Github, Star, Circle } from 'lucide-react';
=======
import { memo } from 'react';
import { Link } from 'react-router-dom';
import { Right, Facebook, Twitter, Linkedin, Instagram, Youtube, Github } from 'lucide-react';
>>>>>>> cursor/fix-errors-and-merge-to-main-ca79

const Footer = memo(() => {
  const services = [
    { name: 'AI Services', url: '/ai-services' },
    { name: 'IT Solutions', url: '/it-services' },
    { name: 'Cloud Services', url: '/cloud-services' },
<<<<<<< HEAD
    { name: 'Cybersecurity', url: '/cybersecurity' },
    { name: 'Data Analytics', url: '/data-analytics' },
    { name: 'DevOps', url: '/devops' }
=======
    { name: 'Cybersecurity', url: '/cybersecurity' }
>>>>>>> cursor/fix-errors-and-merge-to-main-ca79
  ];

  const solutions = [
    { name: 'Quantum Computing', url: '/quantum-computing' },
    { name: 'Autonomous Systems', url: '/autonomous-systems' },
<<<<<<< HEAD
    { name: 'Blockchain & Web3', url: '/blockchain-web3' },
    { name: 'IoT & Edge Computing', url: '/iot-edge-computing' },
    { name: 'Business Intelligence', url: '/business-intelligence' },
    { name: 'Robotics', url: '/robotics' }
=======
    { name: 'Blockchain Web3', url: '/blockchain-web3' },
    { name: 'IoT Edge Computing', url: '/iot-edge-computing' }
>>>>>>> cursor/fix-errors-and-merge-to-main-ca79
  ];

  const company = [
    { name: 'About Us', url: '/about' },
<<<<<<< HEAD
    { name: 'Our Team', url: '/team' },
    { name: 'Careers', url: '/careers' },
    { name: 'News', url: '/news' },
    { name: 'Case Studies', url: '/case-studies' },
    { name: 'Blog', url: '/blog' }
  ];

  const support = [
    { name: 'Contact Us', url: '/contact' },
    { name: 'Support', url: '/support' },
    { name: 'Documentation', url: '/documentation' },
    { name: 'FAQ', url: '/faq' },
    { name: 'Demo', url: '/demo' },
    { name: 'Consultation', url: '/consultation' }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, url: 'https://facebook.com/ziontechgroup' },
    { name: 'Twitter', icon: Twitter, url: 'https://twitter.com/ziontechgroup' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/company/ziontechgroup' },
    { name: 'Instagram', icon: Instagram, url: 'https://instagram.com/ziontechgroup' },
    { name: 'YouTube', icon: Youtube, url: 'https://youtube.com/ziontechgroup' },
    { name: 'GitHub', icon: Github, url: 'https://github.com/ziontechgroup' }
  ];

  const contactInfo = {
    address: '123 Tech Street, Innovation District, CA 90210',
    phone: '+1 (555) 123-4567',
    email: 'info@ziontechgroup.com',
    hours: 'Mon-Fri: 9AM-6PM PST'
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <div className="flex items-center space-x-2">
                <Circle className="w-8 h-8 text-cyan-400" />
                <Star className="w-6 h-6 text-yellow-400" />
              </div>
              <h3 className="text-xl font-bold text-white cyber-text neon-pulse">Zion Tech Group</h3>
            </div>
            <p className="text-sm text-cyan-400 mb-4">AI & IT Solutions</p>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, 
              and digital transformation services. Transform your business with cutting-edge technology.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 mb-6">
              <div className="text-white font-medium">{contactInfo.hours}</div>
              <div className="text-gray-400 text-sm">Business hours</div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                    aria-label={social.name}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.url}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                  >
                    {service.name}
=======
    { name: 'Team', url: '/team' },
    { name: 'Careers', url: '/careers' },
    { name: 'News', url: '/news' }
  ];

  const support = [
    { name: 'Documentation', url: '/documentation' },
    { name: 'Support', url: '/support' },
    { name: 'FAQ', url: '/faq' },
    { name: 'Contact', url: '/contact' }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, url: '#' },
    { name: 'Twitter', icon: Twitter, url: '#' },
    { name: 'LinkedIn', icon: Linkedin, url: '#' },
    { name: 'Instagram', icon: Instagram, url: '#' },
    { name: 'YouTube', icon: Youtube, url: '#' },
    { name: 'GitHub', icon: Github, url: '#' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Zion Tech Group</h3>
            <p className="text-sm text-cyan-400">AI & IT Solutions</p>
            <p className="text-gray-300 text-sm leading-relaxed">
              Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, 
              and digital transformation services. Transform your business with cutting-edge technology.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.url}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/services"
                  className="text-cyan-400 hover:text-white transition-colors duration-300 text-sm flex items-center group"
                >
                  View All AI Services
                  <Right className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Solutions</h4>
            <ul className="space-y-2">
              {solutions.map((solution) => (
                <li key={solution.name}>
                  <Link
                    to={solution.url}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                  >
                    {solution.name}
>>>>>>> cursor/fix-errors-and-merge-to-main-ca79
                  </Link>
                </li>
              ))}
              <li>
                <Link
<<<<<<< HEAD
                  to="/services"
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                >
                  View All AI Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2">
              {solutions.map((solution) => (
                <li key={solution.name}>
                  <Link
                    to={solution.url}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                  >
                    {solution.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/solutions"
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                >
                  View All Solutions
=======
                  to="/solutions"
                  className="text-cyan-400 hover:text-white transition-colors duration-300 text-sm flex items-center group"
                >
                  View All Solutions
                  <Right className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
>>>>>>> cursor/fix-errors-and-merge-to-main-ca79
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Support */}
<<<<<<< HEAD
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 mb-6">
=======
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Company</h4>
            <ul className="space-y-2">
>>>>>>> cursor/fix-errors-and-merge-to-main-ca79
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.url}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
<<<<<<< HEAD

            <h4 className="text-lg font-semibold mb-4">Support</h4>
=======
            
            <h4 className="text-lg font-semibold text-white mt-6">Support</h4>
>>>>>>> cursor/fix-errors-and-merge-to-main-ca79
            <ul className="space-y-2">
              {support.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.url}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

<<<<<<< HEAD
        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Zion Tech Group. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <Link
                to="/privacy"
                className="text-sm text-gray-400 hover:text-cyan-400 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-sm text-gray-400 hover:text-cyan-400 transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                to="/cookies"
                className="text-sm text-gray-400 hover:text-cyan-400 transition-colors"
              >
=======
        {/* Social Links */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-cyan-400 transition-colors">
>>>>>>> cursor/fix-errors-and-merge-to-main-ca79
                Cookie Policy
              </Link>
            </div>
          </div>
<<<<<<< HEAD
=======
          
          <div className="text-center text-gray-400 text-sm mt-4">
            © 2024 Zion Tech Group. All rights reserved.
          </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-ca79
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';
export default Footer;