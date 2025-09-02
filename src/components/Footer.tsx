import Link from 'next/link';
import { Phone, Mail, MapPin, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <div className="text-xl font-bold">Zion Tech Group</div>
            </div>
            <p className="text-gray-300 text-sm">
              Leading provider of AI-powered solutions, cloud infrastructure, and digital transformation services.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com/company/ziontechgroup" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/ziontechgroup" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://facebook.com/ziontechgroup" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://instagram.com/ziontechgroup" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-gray-300">info@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-gray-300">San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/about" className="block text-sm text-gray-300 hover:text-white transition-colors">
                About Us
              </Link>
              <Link href="/services" className="block text-sm text-gray-300 hover:text-white transition-colors">
                Services
              </Link>
              <Link href="/products" className="block text-sm text-gray-300 hover:text-white transition-colors">
                Products
              </Link>
              <Link href="/contact" className="block text-sm text-gray-300 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <div className="space-y-2">
              <Link href="/ai-services" className="block text-sm text-gray-300 hover:text-white transition-colors">
                AI Services
              </Link>
              <Link href="/it-services" className="block text-sm text-gray-300 hover:text-white transition-colors">
                IT Services
              </Link>
              <Link href="/micro-saas" className="block text-sm text-gray-300 hover:text-white transition-colors">
                Micro SaaS
              </Link>
              <Link href="/consulting" className="block text-sm text-gray-300 hover:text-white transition-colors">
                Consulting
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}