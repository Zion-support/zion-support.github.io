import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Facebook } from 'lucide-react';

const EnhancedFooter: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <div className="text-xl font-bold">Zion Tech Group</div>
            </div>
            <p className="text-gray-300 mb-4">
              Leading technology solutions provider helping businesses transform their digital presence 
              with cutting-edge AI, cloud architecture, and innovative development services.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services" className="text-gray-300 hover:text-white transition-colors">AI Solutions</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-white transition-colors">Cloud Architecture</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-white transition-colors">DevOps</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-white transition-colors">Cybersecurity</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-white transition-colors">Digital Transformation</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/team" className="text-gray-300 hover:text-white transition-colors">Our Team</Link></li>
              <li><Link href="/careers" className="text-gray-300 hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/news" className="text-gray-300 hover:text-white transition-colors">News</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-blue-400" />
                <span className="text-gray-300">info@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-blue-400" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-blue-400 mt-1" />
                <span className="text-gray-300">
                  123 Tech Street<br />
                  Innovation District<br />
                  San Francisco, CA 94105
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Zion Tech Group. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default EnhancedFooter;