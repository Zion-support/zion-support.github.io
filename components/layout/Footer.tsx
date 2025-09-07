import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, SparklesIcon } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <SparklesIcon className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Zion Tech Group</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Leading provider of AI-powered technology solutions and digital transformation services.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-gray-300">
                <Phone className="w-4 h-4 mr-2" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="w-4 h-4 mr-2" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-start text-gray-300">
                <MapPin className="w-4 h-4 mr-2 mt-0.5" />
                <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-blue-400 transition-colors">Home</Link></li>
              <li><Link href="/solutions" className="text-gray-300 hover:text-blue-400 transition-colors">Solutions</Link></li>
              <li><Link href="/services/ai-services" className="text-gray-300 hover:text-blue-400 transition-colors">Services</Link></li>
              <li><Link href="/space-tech" className="text-gray-300 hover:text-blue-400 transition-colors">Space Tech</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-blue-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="/privacy" className="text-gray-300 hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-gray-300 hover:text-white">Terms of Service</Link></li>
              <li><Link href="/cookies" className="text-gray-300 hover:text-white">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;