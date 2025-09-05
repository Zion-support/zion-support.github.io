import React from 'react';
import { Building, Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';

const EnhancedFooter: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <Building className="h-8 w-8 text-blue-400 mr-2" />
              <span className="text-xl font-bold">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 mb-4">
              Leading provider of innovative technology solutions for modern businesses.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center text-gray-300">
                <Mail className="h-4 w-4 mr-2" />
                <span>contact@ziontechgroup.com</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/ai-services" className="text-gray-300 hover:text-white">AI & ML</Link></li>
              <li><Link href="/cybersecurity" className="text-gray-300 hover:text-white">Cybersecurity</Link></li>
              <li><Link href="/blockchain" className="text-gray-300 hover:text-white">Blockchain</Link></li>
              <li><Link href="/micro-saas" className="text-gray-300 hover:text-white">Micro SaaS</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-300 hover:text-white">About</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
              <li><Link href="/pricing" className="text-gray-300 hover:text-white">Pricing</Link></li>
              <li><Link href="/terms" className="text-gray-300 hover:text-white">Terms</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 Zion Tech Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default EnhancedFooter;