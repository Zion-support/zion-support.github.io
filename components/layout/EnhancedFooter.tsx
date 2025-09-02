import React from 'react';
import Link from 'next/link';

const EnhancedFooter: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-400">Zion Tech Group</h3>
            <p className="text-gray-300 mb-4">
              Leading technology solutions provider helping businesses transform their digital presence 
              with cutting-edge AI, cloud architecture, and innovative development services.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com/company/ziontechgroup" className="text-gray-300 hover:text-blue-400 transition-colors">
                LinkedIn
              </a>
              <a href="https://twitter.com/ziontechgroup" className="text-gray-300 hover:text-blue-400 transition-colors">
                Twitter
              </a>
              <a href="https://github.com/ziontechgroup" className="text-gray-300 hover:text-blue-400 transition-colors">
                GitHub
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="text-gray-300 space-y-2">
              <li><Link href="/services/ai-model-development-chat" className="hover:text-blue-400 transition-colors">AI Development</Link></li>
              <li><Link href="/services/web-application-development-chat" className="hover:text-blue-400 transition-colors">Web Development</Link></li>
              <li><Link href="/services/mobile-app-development-chat" className="hover:text-blue-400 transition-colors">Mobile Apps</Link></li>
              <li><Link href="/services/cloud-migration-services-chat" className="hover:text-blue-400 transition-colors">Cloud Solutions</Link></li>
              <li><Link href="/services/business-intelligence-chat" className="hover:text-blue-400 transition-colors">Data Analytics</Link></li>
              <li><Link href="/services/network-security-chat" className="hover:text-blue-400 transition-colors">Cybersecurity</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="text-gray-300 space-y-2">
              <li><Link href="/blockchain-solutions" className="hover:text-blue-400 transition-colors">Blockchain Solutions</Link></li>
              <li><Link href="/iot-platforms" className="hover:text-blue-400 transition-colors">IoT Platforms</Link></li>
              <li><Link href="/products" className="hover:text-blue-400 transition-colors">AI Models</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="text-gray-300 space-y-2">
              <li><Link href="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link href="/blog" className="hover:text-blue-400 transition-colors">Blog</Link></li>
              <li><Link href="/talent" className="hover:text-blue-400 transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
            </ul>
            <div className="mt-4">
              <h4 className="text-sm font-semibold mb-2">Contact Info</h4>
              <p className="text-gray-300 text-sm">Email: info@ziontechgroup.com</p>
              <p className="text-gray-300 text-sm">Phone: +1 (555) 123-4567</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 Zion Tech Group. All rights reserved. | <Link href="/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link> | <Link href="/terms" className="hover:text-blue-400 transition-colors">Terms of Service</Link></p>
        </div>
      </div>
    </footer>
  );
};

export default EnhancedFooter;
