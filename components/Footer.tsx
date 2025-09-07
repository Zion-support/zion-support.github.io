import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowRight
} from "lucide-react";

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const footerLinks = {
    services: [
      { name: 'AI Services', href: '/services/ai-services' },
      { name: 'Cloud Solutions', href: '/services/cloud-solutions' },
      { name: 'Cybersecurity', href: '/services/cybersecurity' },
      { name: 'Data Analytics', href: '/services/data-analytics' },
      { name: 'IT Support', href: '/services/it-support' },
      { name: 'Software Development', href: '/services/software-development' }
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Team', href: '/team' },
      { name: 'Careers', href: '/careers' },
      { name: 'News', href: '/news' },
      { name: 'Case Studies', href: '/case-studies' }
    ],
    resources: [
      { name: 'Blog', href: '/blog' },
      { name: 'Documentation', href: '/docs' },
      { name: 'API Reference', href: '/api-docs' },
      { name: 'Help Center', href: '/help' },
      { name: 'Community', href: '/community' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
      { name: 'GDPR Compliance', href: '/gdpr' }
    ]
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="text-2xl font-bold text-white mb-4 block">
              Zion Tech Group
            </Link>
            <p className="text-gray-300 mb-6 max-w-md">
              Leading provider of AI-powered technology solutions, cloud services, and cybersecurity expertise. 
              Empowering businesses to thrive in the digital age.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center">
              <Phone className="w-5 h-5 text-blue-400 mr-3" />
              <div>
                <p className="text-sm text-gray-400">Phone</p>
                <p className="text-white">+1 302 464 0950</p>
              </div>
            </div>
            <div className="flex items-center">
              <Mail className="w-5 h-5 text-blue-400 mr-3" />
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="text-white">kleber@ziontechgroup.com</p>
              </div>
            </div>
            <div className="flex items-center">
              <MapPin className="w-5 h-5 text-blue-400 mr-3" />
              <div>
                <p className="text-sm text-gray-400">Location</p>
                <p className="text-white">Delaware, USA</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-wrap gap-4 mb-4 md:mb-0">
              {footerLinks.legal.map((link) => (
                <Link key={link.name} href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                  {link.name}
                </Link>
              ))}
            </div>
            <p className="text-sm text-gray-400">
              © {currentYear} Zion Tech Group. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}