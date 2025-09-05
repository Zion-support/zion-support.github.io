import React from 'react';
import Link from 'next/link';
import { Zap, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold">Zion Tech Group</span>
            </Link>
            
            <p className="text-gray-300 mb-6 max-w-md">
              Leading provider of AI solutions, cloud services, and technology consulting. 
              We help businesses transform and succeed in the digital age.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">364 E Main St STE 1008<br />Middletown, DE 19709</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-blue-400">Services</h3>
            <div className="space-y-2">
              <Link href="/ai-services" className="block text-gray-300 hover:text-white transition-colors">
                AI Services
              </Link>
              <Link href="/it-services" className="block text-gray-300 hover:text-white transition-colors">
                IT Services
              </Link>
              <Link href="/micro-saas" className="block text-gray-300 hover:text-white transition-colors">
                Micro SaaS
              </Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-blue-400">Company</h3>
            <div className="space-y-2">
              <Link href="/about" className="block text-gray-300 hover:text-white transition-colors">
                About Us
              </Link>
              <Link href="/team" className="block text-gray-300 hover:text-white transition-colors">
                Our Team
              </Link>
              <Link href="/careers" className="block text-gray-300 hover:text-white transition-colors">
                Careers
              </Link>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-blue-400">Resources</h3>
            <div className="space-y-2">
              <Link href="/blog" className="block text-gray-300 hover:text-white transition-colors">
                Blog
              </Link>
              <Link href="/docs" className="block text-gray-300 hover:text-white transition-colors">
                Documentation
              </Link>
              <Link href="/support" className="block text-gray-300 hover:text-white transition-colors">
                Support
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              © 2024 Zion Tech Group. All rights reserved. | 
              <span className="ml-2">Delaware, United States</span>
            </div>
            
            <div className="flex flex-wrap items-center space-x-6">
              <Link href="/privacy" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}