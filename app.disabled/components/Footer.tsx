import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Zion Tech Group</h3>
            <p className="text-gray-400">
              Leading the future of AI, autonomous systems, and innovative technology solutions.
            </p>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/services/ai-services" className="text-gray-400 hover:text-white transition duration-300">AI Services</Link></li>
              <li><Link href="/services/blockchain" className="text-gray-400 hover:text-white transition duration-300">Blockchain</Link></li>
              <li><Link href="/services/micro-saas" className="text-gray-400 hover:text-white transition duration-300">Micro SaaS</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2">
              <li><Link href="/solutions" className="text-gray-400 hover:text-white transition duration-300">All Solutions</Link></li>
              <li><Link href="/research" className="text-gray-400 hover:text-white transition duration-300">Research</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition duration-300">Contact Us</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Zion Tech Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}