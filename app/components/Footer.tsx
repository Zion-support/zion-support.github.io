
import React from 'react';
import Link from 'next/link';
import { Github, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  // const services = [
  //   { name: 'AI Solutions', href: '/services/ai' },
  //   { name: 'Cloud Architecture', href: '/services/cloud' },
  //   { name: 'Web Development', href: '/services/web' },
  //   { name: 'Mobile Apps', href: '/services/mobile' },
  //   { name: 'Data Analytics', href: '/services/analytics' },
  //   { name: 'DevOps', href: '/services/devops' },
  // ];

  // const products = [
  //   { name: 'AI Platform', href: '/products/ai-platform' },
  //   { name: 'Cloud Suite', href: '/products/cloud-suite' },
  //   { name: 'Analytics Dashboard', href: '/products/analytics' },
  //   { name: 'Mobile SDK', href: '/products/mobile-sdk' },
  // ];

  // const company = [
  //   { name: 'About Us', href: '/about' },
  //   { name: 'Careers', href: '/careers' },
  //   { name: 'Blog', href: '/blog' },
  //   { name: 'Press', href: '/press' },
  // ];

  // Support links for future use
  // const supportLinks = [
  //   { name: 'Help Center', href: '/help' },
  //   { name: 'Documentation', href: '/docs' },
  //   { name: 'API Reference', href: '/api' },
  //   { name: 'Status', href: '/status' },
  // ];
  return (
    <footer className="bg-white/5 backdrop-blur-lg border-t border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Leading provider of AI and IT solutions for modern businesses. Transform your operations with cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-purple-300 transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-purple-300 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-purple-300 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/ai-services" className="text-gray-300 hover:text-purple-300 transition-colors">
                  AI Services
                </Link>
              </li>
              <li>
                <Link href="/it-services" className="text-gray-300 hover:text-purple-300 transition-colors">
                  IT Services
                </Link>
              </li>
              <li>
                <Link href="/cloud-services" className="text-gray-300 hover:text-purple-300 transition-colors">
                  Cloud Services
                </Link>
              </li>
              <li>
                <Link href="/cybersecurity-solutions" className="text-gray-300 hover:text-purple-300 transition-colors">
                  Cybersecurity
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-purple-300 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-gray-300 hover:text-purple-300 transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-300 hover:text-purple-300 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-purple-300 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-300 text-sm">
              © 2024 Zion Tech Group. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-300 hover:text-purple-300 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-300 hover:text-purple-300 text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-300 hover:text-purple-300 text-sm transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}