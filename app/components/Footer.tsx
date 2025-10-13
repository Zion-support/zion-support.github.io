'use client';
import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { title: 'AI Services', href: '/ai-services' },
    { title: 'IT Solutions', href: '/it-solutions' },
    { title: 'Micro SAAS', href: '/micro-saas' },
    { title: '5G Solutions', href: '/5g-solutions' },
    { title: 'Cloud Services', href: '/cloud-services' },
    { title: 'Cybersecurity', href: '/cybersecurity-solutions' },
  ];

  const aiServices = [
    { title: 'AI Analytics Dashboard', href: '/ai-analytics-dashboard' },
    { title: 'AI Content Generation', href: '/ai-content-generation' },
    { title: 'AI Customer Support', href: '/ai-customer-support' },
    { title: 'AI Voice Assistant', href: '/ai-voice-assistant' },
    { title: 'AI Project Management', href: '/ai-project-management' },
    { title: 'AI Financial Services', href: '/ai-financial-services' },
  ];

  const company = [
    { title: 'About Us', href: '/about' },
    { title: 'Careers', href: '/careers' },
    { title: 'Case Studies', href: '/case-studies' },
    { title: 'Blog', href: '/blog' },
    { title: 'Press', href: '/press' },
    { title: 'Contact', href: '/contact' },
  ];

  const legal = [
    { title: 'Privacy Policy', href: '/privacy-policy' },
    { title: 'Terms of Service', href: '/terms-of-service' },
    { title: 'Cookie Policy', href: '/cookie-policy' },
    { title: 'GDPR Compliance', href: '/gdpr' },
    { title: 'Accessibility', href: '/accessibility' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <span className="ml-3 text-xl font-bold">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Leading provider of AI services, IT solutions, and micro SAAS platforms. 
              Transform your business with cutting-edge technology and innovative solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.title}>
                  <Link
                    href={service.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* AI Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">AI Services</h3>
            <ul className="space-y-2">
              {aiServices.map((service) => (
                <li key={service.title}>
                  <Link
                    href={service.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">+1 302 464 0950</p>
                  <p className="text-gray-400 text-xs">24/7 Support</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">kleber@ziontechgroup.com</p>
                  <p className="text-gray-400 text-xs">Business Inquiries</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">364 E Main St STE 1008</p>
                  <p className="text-gray-300 text-sm">Middletown DE 19709</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-gray-400 text-sm">
                © {currentYear} Zion Tech Group. All rights reserved.
              </p>
              <div className="flex space-x-6">
                {legal.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm">Pricing starts at $99/month</span>
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
              >
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;