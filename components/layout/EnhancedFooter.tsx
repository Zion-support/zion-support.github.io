import React from 'react';
// Common interfaces for better type safety
interface ApiResponse<T = unknown> {
  data: T;
  status: number;
  message?: string;
}

interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'user' | 'guest';
}

interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
}

interface FormData {
  [key: string]: string | number | boolean | File;
}

interface ComponentProps {
  className?: string;
  children?: React.ReactNode;
  [key: string]: unknown;
}


import Link from 'next/link';
<<<<<<< HEAD
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Github,
  Facebook,
} from 'lucide-react';
=======
import { Cloud, Facebook, Github, Info, Linkedin, Mail, MapPin, Phone, Twitter, User } from 'lucide-react';
>>>>>>> main

const EnhancedFooter: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
<<<<<<< HEAD
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Zion Tech Group</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Leading provider of revolutionary AI services, innovative micro SaaS solutions, 
              and comprehensive IT services. Transform your business with cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com/company/ziontechgroup" className="text-gray-400 hover:text-white">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://twitter.com/ziontechgroup" className="text-gray-400 hover:text-white">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="https://github.com/ziontechgroup" className="text-gray-400 hover:text-white">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://facebook.com/ziontechgroup" className="text-gray-400 hover:text-white">
                <Facebook className="w-6 h-6" />
=======
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
<<<<<<< HEAD
        <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
=======
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Compunknown Info */}
>>>>>>> main
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <div className="text-xl font-bold">Zion Tech Group</div>
            </div>
            <p className="text-gray-300 mb-4">
              Leading technology solutions provider helping businesses transform
              their digital presence with cutting-edge AI, cloud architecture,
              and innovative development services.
            </p>
            <div className="flex space-x-4">
              <a
<<<<<<< HEAD
                href="https: //linkedin.com"
=======
                href="https://linkedin.com"
>>>>>>> main
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                <Facebook className="w-5 h-5" />
>>>>>>> origin/main
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
<<<<<<< HEAD
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/services/ai-services" className="text-gray-300 hover:text-white">AI Services</Link></li>
              <li><Link href="/services/micro-saas" className="text-gray-300 hover:text-white">Micro SaaS</Link></li>
              <li><Link href="/services/it-services" className="text-gray-300 hover:text-white">IT Services</Link></li>
              <li><Link href="/solutions" className="text-gray-300 hover:text-white">Solutions</Link></li>
=======
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/ai-development"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  AI Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/cloud-services"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Cloud Services
                </Link>
              </li>
              <li>
                <Link
                  href="/services/web-development"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/mobile-development"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Mobile Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/blockchain-solutions"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Blockchain Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/services/iot-platforms"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  IoT Platforms
                </Link>
              </li>
              <li>
                <Link
                  href="/services/cybersecurity"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Cybersecurity
                </Link>
              </li>
>>>>>>> origin/main
            </ul>
          </div>

          {/* Contact */}
          <div>
<<<<<<< HEAD
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-blue-400" />
                <a href="tel:+13024640950" className="text-gray-300 hover:text-white">+1 302 464 0950</a>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-blue-400" />
                <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-white">kleber@ziontechgroup.com</a>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-blue-400 mt-1" />
                <span className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</span>
=======
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/solutions/enterprise"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Enterprise Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/small-business"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Small Business
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/startups"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Startups
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/healthcare"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Healthcare
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/finance"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Finance
                </Link>
              </li>
            </ul>
          </div>

          {/* Compunknown & Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Compunknown</h3>
            <ul className="space-y-2 mb-6">
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Products
                </Link>
              </li>
            </ul>

            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-blue-400" />
                <a
                  href="mailto:info@ziontechgroup.com"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  info@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-blue-400" />
                <a
                  href="tel:+1-555-123-4567"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  +1 (555) 123-4567
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span className="text-gray-300">
                  123 Tech Street, Innovation District
                  <br />
                  San Francisco, CA 94105
                </span>
>>>>>>> origin/main
              </div>
            </div>
          </div>
        </div>

<<<<<<< HEAD
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Zion Tech Group. All rights reserved. | 
            <Link href="/privacy" className="hover:text-white ml-1">Privacy Policy</Link> | 
            <Link href="/terms" className="hover:text-white ml-1">Terms of Service</Link>
          </p>
=======
      {/* Newsletter Section */}
      <div className="border-t border-gray-700 py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for the latest tech insights and
              updates.
            </p>
            <div className="flex max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-l-lg text-gray-900 focus: outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-r-lg font-semibold transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              &copy; 2024 Zion Tech Group. All rights reserved.
            </p>
<<<<<<< HEAD
            <div className="flex space-x-6 mt-4 md: mt-0">
=======
            <div className="flex space-x-6 mt-4 md:mt-0">
>>>>>>> main
              <Link
                href="/privacy"
                className="text-gray-300 hover:text-white text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-300 hover:text-white text-sm transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/sitemap"
                className="text-gray-300 hover:text-white text-sm transition-colors"
              >
                Sitemap
              </Link>
            </div>
          </div>
>>>>>>> origin/main
        </div>
      </div>
    </footer>
  );
};

export default EnhancedFooter;
