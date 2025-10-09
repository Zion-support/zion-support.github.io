import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Linkedin, Github, ArrowRight, Shield, Award, Users, Zap } from 'lucide-react';

interface FooterProps {
  className?: string;
}

export default function Footer({ className = '' }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'AI Services', path: '/ai-services' },
    { name: 'AI Marketing', path: '/ai-marketing' },
    { name: 'AI Automation', path: '/ai-automation' },
    { name: 'AI Healthcare', path: '/ai-healthcare' },
    { name: 'AI Fintech', path: '/ai-fintech' },
    { name: 'IT Services', path: '/it-services' },
    { name: 'Cloud Services', path: '/cloud-services' },
    { name: 'Cybersecurity', path: '/cybersecurity' },
    { name: 'Micro SAAS', path: '/micro-saas' },
  ];

  const company = [
    { name: 'About Us', path: '/about' },
    { name: 'Our Team', path: '/team' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Careers', path: '/careers' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const resources = [
    { name: 'Documentation', path: '/docs' },
    { name: 'API Reference', path: '/api-docs' },
    { name: 'Support Center', path: '/support' },
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' },
    { name: 'GDPR Compliance', path: '/gdpr' },
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/company/ziontechgroup' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/ziontechgroup' },
    { name: 'GitHub', icon: Github, href: 'https://github.com/ziontechgroup' },
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/ziontechgroup' },
  ];

  return (
    <footer className={`bg-slate-900 text-white ${className}`}>
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Zion Tech Group</h3>
                <p className="text-sm text-gray-400">Advanced AI & IT Solutions</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Leading provider of enterprise AI solutions, quantum computing, autonomous systems, 
              and digital transformation services. Transform your business with cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-cyan-500 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-gray-300 hover:text-cyan-400 transition-colors text-sm flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-gray-300 hover:text-cyan-400 transition-colors text-sm flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact & Resources</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-cyan-400 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-300">Phone</p>
                  <a href="tel:+13024640950" className="text-white hover:text-cyan-400 transition-colors">
                    (302) 464-0950
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-cyan-400 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-300">Email</p>
                  <a href="mailto:info@ziontechgroup.com" className="text-white hover:text-cyan-400 transition-colors">
                    info@ziontechgroup.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-cyan-400 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-300">Location</p>
                  <p className="text-white">Delaware, United States</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-cyan-400 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-300">Support</p>
                  <p className="text-white">24/7 Available</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 pt-8 border-t border-slate-800">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-cyan-500/10 rounded-full mx-auto mb-4">
                <Users className="w-8 h-8 text-cyan-400" />
              </div>
              <h5 className="text-2xl font-bold text-white mb-2">500+</h5>
              <p className="text-gray-400 text-sm">Happy Clients</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-purple-500/10 rounded-full mx-auto mb-4">
                <Zap className="w-8 h-8 text-purple-400" />
              </div>
              <h5 className="text-2xl font-bold text-white mb-2">1000+</h5>
              <p className="text-gray-400 text-sm">Projects Completed</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-green-500/10 rounded-full mx-auto mb-4">
                <Award className="w-8 h-8 text-green-400" />
              </div>
              <h5 className="text-2xl font-bold text-white mb-2">99.9%</h5>
              <p className="text-gray-400 text-sm">Uptime Guarantee</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-orange-500/10 rounded-full mx-auto mb-4">
                <Shield className="w-8 h-8 text-orange-400" />
              </div>
              <h5 className="text-2xl font-bold text-white mb-2">24/7</h5>
              <p className="text-gray-400 text-sm">Expert Support</p>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 pt-8 border-t border-slate-800">
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="text-2xl font-bold text-white mb-4">Stay Updated</h4>
            <p className="text-gray-300 mb-8">
              Get the latest insights on AI, technology trends, and industry updates delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors"
              />
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-slate-950 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
              {resources.map((resource) => (
                <Link
                  key={resource.name}
                  to={resource.path}
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  {resource.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}