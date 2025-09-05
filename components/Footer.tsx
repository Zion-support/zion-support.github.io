import React from 'react';
import NextLink from 'next/link';
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Zion Tech Group</h3>
            <p className="text-gray-300 mb-4">
              Leading provider of AI-powered technology solutions, cloud services, and digital transformation for businesses worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><NextLink href="/ai-services" className="text-gray-300 hover:text-white">AI Services</NextLink></li>
              <li><NextLink href="/it-services" className="text-gray-300 hover:text-white">IT Services</NextLink></li>
              <li><NextLink href="/micro-saas" className="text-gray-300 hover:text-white">Micro SaaS</NextLink></li>
              <li><NextLink href="/solutions" className="text-gray-300 hover:text-white">Solutions</NextLink></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><NextLink href="/about" className="text-gray-300 hover:text-white">About Us</NextLink></li>
              <li><NextLink href="/team" className="text-gray-300 hover:text-white">Team</NextLink></li>
              <li><NextLink href="/careers" className="text-gray-300 hover:text-white">Careers</NextLink></li>
              <li><NextLink href="/contact" className="text-gray-300 hover:text-white">Contact</NextLink></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span className="text-gray-300">+1 302 464 0950</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <span className="text-gray-300">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                <span className="text-gray-300">364 E Main St STE 1008<br />Middletown, DE 19709</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Zion Tech Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}