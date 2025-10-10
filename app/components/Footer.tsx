'use client';

import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Zap, Brain, Cloud, Code, Users } from 'lucide-react';

const Footer: React.FC = memo(() => {
  const currentYear = new Date().getFullYear();

  const aiServices = [
    { name: 'AI Solutions', url: '/ai-services', description: 'Comprehensive AI solutions' },
    { name: 'AI Marketing Automation', url: '/ai-marketing', description: 'AI-powered marketing automation' },
    { name: 'AI Customer Support', url: '/ai-customer-support', description: 'AI-powered customer service' },
    { name: 'AI Data Analytics', url: '/ai-data-analytics', description: 'Advanced data insights' },
    { name: 'AI Content Generation', url: '/ai-content-generation', description: 'AI content creation' },
    { name: 'AI Healthcare Solutions', url: '/ai-healthcare', description: 'Medical AI solutions' },
    { name: 'AI Financial Services', url: '/ai-fintech', description: 'Financial AI applications' },
    { name: 'AI Cybersecurity', url: '/ai-cybersecurity', description: 'AI-powered security' },
  ];

  const itServices = [
    { name: 'Cloud Infrastructure', url: '/cloud-services', description: 'Scalable cloud solutions' },
    { name: 'Cybersecurity', url: '/cybersecurity', description: 'Advanced security solutions' },
    { name: 'Blockchain Development', url: '/blockchain', description: 'Blockchain solutions' },
    { name: 'DevOps & CI/CD', url: '/devops', description: 'Development operations' },
    { name: 'Data Analytics', url: '/data-analytics', description: 'Data insights and visualization' },
    { name: 'Mobile Development', url: '/mobile-development', description: 'Mobile app development' },
    { name: 'Web Development', url: '/web-development', description: 'Modern web applications' },
    { name: 'IT Consulting', url: '/it-consulting', description: 'Strategic IT guidance' },
  ];

  const companyLinks = [
    { name: 'About Us', url: '/about' },
    { name: 'Our Team', url: '/team' },
    { name: 'Careers', url: '/careers' },
    { name: 'Partners', url: '/partners' },
    { name: 'Case Studies', url: '/case-studies' },
    { name: 'Blog', url: '/blog' },
    { name: 'News', url: '/news' },
    { name: 'Press', url: '/press' },
  ];

  const supportLinks = [
    { name: 'Support Center', url: '/support' },
    { name: 'Documentation', url: '/docs' },
    { name: 'API Reference', url: '/api-docs' },
    { name: 'Status Page', url: '/status' },
    { name: 'Contact Us', url: '/contact' },
    { name: 'Help Center', url: '/help' },
    { name: 'Community', url: '/community' },
    { name: 'Training', url: '/training' },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', url: '/privacy' },
    { name: 'Terms of Service', url: '/terms' },
    { name: 'Cookie Policy', url: '/cookies' },
    { name: 'Compliance', url: '/compliance' },
    { name: 'Security', url: '/security' },
    { name: 'GDPR', url: '/gdpr' },
    { name: 'SLA', url: '/sla' },
    { name: 'Licenses', url: '/licenses' },
  ];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* AI Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400 flex items-center">
              <Brain className="w-5 h-5 mr-2" />
              AI Services
            </h3>
            <ul className="space-y-2">
              {aiServices.slice(0, 8).map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/ai-services"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 text-sm font-medium"
                >
                  View All AI Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* IT Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400 flex items-center">
              <Code className="w-5 h-5 mr-2" />
              IT Services
            </h3>
            <ul className="space-y-2">
              {itServices.slice(0, 8).map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/it-services"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 text-sm font-medium"
                >
                  View All IT Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400 flex items-center">
              <Users className="w-5 h-5 mr-2" />
              Company
            </h3>
            <ul className="space-y-2">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400 flex items-center">
              <Zap className="w-5 h-5 mr-2" />
              Support
            </h3>
            <ul className="space-y-2">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400 flex items-center">
              <Clock className="w-5 h-5 mr-2" />
              Legal
            </h3>
            <ul className="space-y-2">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-12 pt-8 border-t border-slate-700">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4 text-cyan-400">Contact Information</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-cyan-400" />
                  <a
                    href="tel:+13024640950"
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                  >
                    +1 (302) 464-0950
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-cyan-400" />
                  <a
                    href="mailto:info@ziontechgroup.com"
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                  >
                    info@ziontechgroup.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                  <span className="text-gray-300">
                    364 E Main St STE 1008<br />
                    Middletown, DE 19709
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-cyan-400">Business Hours</h4>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-cyan-400" />
                  <span>Monday - Friday: 9:00 AM - 6:00 PM EST</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-cyan-400" />
                  <span>Saturday: 10:00 AM - 4:00 PM EST</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-cyan-400" />
                  <span>Sunday: Closed</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-cyan-400">Follow Us</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <Cloud className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                  aria-label="Twitter"
                >
                  <Brain className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                  aria-label="GitHub"
                >
                  <Code className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-slate-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="mt-4 md:mt-0">
              <p className="text-gray-400 text-sm">
                Empowering businesses with cutting-edge AI and IT solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';
export default Footer;