'use client';
import React from 'react';
import Link from 'next/link';
<<<<<<< HEAD
import { Facebook, Github, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const services = [
    { name: 'AI Solutions', href: '/services/ai' },
    { name: 'Cloud Architecture', href: '/services/cloud' },
    { name: 'Web Development', href: '/services/web' },
    { name: 'Mobile Apps', href: '/services/mobile' },
    { name: 'Data Analytics', href: '/services/analytics' },
    { name: 'DevOps', href: '/services/devops' },
  ];

  const products = [
    { name: 'AI Platform', href: '/products/ai-platform' },
    { name: 'Cloud Suite', href: '/products/cloud-suite' },
    { name: 'Analytics Dashboard', href: '/products/analytics' },
    { name: 'Mobile SDK', href: '/products/mobile-sdk' },
  ];

  const company = [
    { name: 'About Us', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Blog', href: '/blog' },
    { name: 'Press', href: '/press' },
  ];

  const support = [
    { name: 'Help Center', href: '/help' },
    { name: 'Documentation', href: '/docs' },
    { name: 'API Reference', href: '/api' },
    { name: 'Status', href: '/status' },
  ];
=======
import { Github, Linkedin, Twitter } from 'lucide-react';
>>>>>>> cursor/fix-errors-and-merge-to-main-dc8d

export default function Footer() {
  return (
<<<<<<< HEAD
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
=======
    <footer className="bg-white/5 backdrop-blur-lg border-t border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
>>>>>>> cursor/fix-errors-and-merge-to-main-dc8d
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
<<<<<<< HEAD
              <span className="text-xl font-bold">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Leading provider of AI-powered solutions and cutting-edge technology services 
              for modern businesses worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
=======
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
>>>>>>> cursor/fix-errors-and-merge-to-main-dc8d
              </a>
            </div>
          </div>

<<<<<<< HEAD
          {/* Services */}
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-dc8d
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

<<<<<<< HEAD
          {/* Products */}
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-dc8d
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
<<<<<<< HEAD
              {products.map((product, index) => (
                <li key={index}>
                  <Link
                    href={product.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {company.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
=======
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
>>>>>>> cursor/fix-errors-and-merge-to-main-dc8d
            </ul>
          </div>
        </div>

<<<<<<< HEAD
        {/* Contact Info */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <MapPin className="h-5 w-5 text-blue-400" />
              <span className="text-gray-300">123 Tech Street, Innovation City, IC 12345</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-blue-400" />
              <span className="text-gray-300">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-blue-400" />
              <span className="text-gray-300">info@ziontechgroup.com</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © 2024 Zion Tech Group. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-300 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-300 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-gray-300 hover:text-white text-sm transition-colors">
              Cookie Policy
            </Link>
=======
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
>>>>>>> cursor/fix-errors-and-merge-to-main-dc8d
          </div>
        </div>
      </div>
    </footer>
  );
}