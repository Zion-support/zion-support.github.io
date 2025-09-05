import React from 'react';
import Link from 'next/link';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Github 
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Zion Tech Group</h3>
            <p className="text-gray-300 mb-4">
              Leading provider of cutting-edge technology solutions for modern businesses.
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
              <li><Link href="/ai-services" className="text-gray-300 hover:text-white">AI Services</Link></li>
              <li><Link href="/it-services" className="text-gray-300 hover:text-white">IT Services</Link></li>
              <li><Link href="/micro-saas" className="text-gray-300 hover:text-white">Micro SaaS</Link></li>
              <li><Link href="/cloud-solutions" className="text-gray-300 hover:text-white">Cloud Solutions</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-300 hover:text-white">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
              <li><Link href="/careers" className="text-gray-300 hover:text-white">Careers</Link></li>
              <li><Link href="/blog" className="text-gray-300 hover:text-white">Blog</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                <span className="text-gray-300">364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span className="text-gray-300">+1 302 464 0950</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <span className="text-gray-300">kleber@ziontechgroup.com</span>
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