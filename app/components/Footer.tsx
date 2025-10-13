import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Facebook, Twitter, Linkedin, Github, Mail, Phone, MapPin, Zap, Brain, Code, Cloud, Shield, Database, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'AI Services', href: '/ai-services', icon: Brain },
      { name: 'IT Services', href: '/it-services', icon: Code },
      { name: 'Cloud Solutions', href: '/cloud-solutions', icon: Cloud },
      { name: 'Cybersecurity', href: '/cybersecurity', icon: Shield },
      { name: 'Data Analytics', href: '/data-analytics', icon: Database },
      { name: 'Web Development', href: '/web-development', icon: Globe }
    ],
    microServices: [
      { name: 'AI Code Assistant', href: '/ai-code-assistant', price: '$29/mo' },
      { name: 'Smart Analytics', href: '/ai-analytics', price: '$49/mo' },
      { name: 'Content Generator', href: '/ai-content-generator', price: '$19/mo' },
      { name: 'Security Monitor', href: '/ai-cybersecurity', price: '$79/mo' },
      { name: 'Chatbot Builder', href: '/ai-chatbot-builder', price: '$39/mo' },
      { name: 'Data Visualizer', href: '/ai-data-visualization', price: '$59/mo' }
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Blog', href: '/blog' },
      { name: 'Careers', href: '/careers' },
      { name: 'Partners', href: '/partners' },
      { name: 'Press', href: '/press' }
    ],
    support: [
      { name: 'Contact', href: '/contact' },
      { name: 'Support', href: '/support' },
      { name: 'Documentation', href: '/docs' },
      { name: 'Tutorials', href: '/tutorials' },
      { name: 'API Reference', href: '/api-docs' },
      { name: 'Status', href: '/status' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
      { name: 'GDPR', href: '/gdpr' },
      { name: 'SLA', href: '/sla' }
    ]
  };

  const socialLinks = [
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github }
  ];

  const contactInfo = [
    { icon: Phone, text: '+1 302 464 0950', href: 'tel:+13024640950' },
    { icon: Mail, text: 'kleber@ziontechgroup.com', href: 'mailto:kleber@ziontechgroup.com' },
    { icon: MapPin, text: '364 E Main St STE 1008, Middletown DE 19709', href: 'https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709' }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-t border-cyan-500/20">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-6 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                  Zion Tech Group
                </div>
                <div className="text-cyan-400 font-medium">AI & IT Solutions</div>
              </div>
            </Link>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Transforming businesses through cutting-edge AI and IT solutions. 
              We help companies innovate, automate, and grow in the digital age with our comprehensive suite of micro SAAS services.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              {contactInfo.map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <a
                    key={index}
                    href={contact.href}
                    className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300 group"
                  >
                    <Icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-sm">{contact.text}</span>
                  </a>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                    aria-label={social.name}
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Core Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => {
                const Icon = link.icon;
                return (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-all duration-300 group"
                    >
                      <Icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-sm">{link.name}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Micro Services */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Micro SAAS</h3>
            <ul className="space-y-3">
              {footerLinks.microServices.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="flex items-center justify-between text-gray-300 hover:text-cyan-400 transition-all duration-300 group"
                  >
                    <span className="text-sm group-hover:translate-x-1 transition-transform duration-300">{service.name}</span>
                    <span className="text-cyan-500 text-xs font-semibold">{service.price}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-cyan-400 transition-all duration-300 text-sm group flex items-center"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                    <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-cyan-400 transition-all duration-300 text-sm group flex items-center"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                    <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 pt-8 border-t border-slate-700/50">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Stay Ahead with Our Newsletter</h3>
            <p className="text-gray-300 mb-8">
              Get the latest insights on AI trends, IT innovations, and exclusive offers delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-sm"
              />
              <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center font-semibold transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25">
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
            <p className="text-xs text-gray-400 mt-4">
              Join 10,000+ professionals. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-slate-900/50 border-t border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-wrap gap-6 mb-4 md:mb-0">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <span>© {currentYear} Zion Tech Group. All rights reserved.</span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>All systems operational</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;