import React from 'react';
import Link from 'next/link';

const EnhancedFooter = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Zion Tech Group</h3>
            <p className="text-gray-300">
              Leading technology solutions provider for modern businesses.
            </p>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/services/ai-services" className="text-gray-300 hover:text-white">AI Services</Link></li>
              <li><Link href="/services/cloud-solutions" className="text-gray-300 hover:text-white">Cloud Solutions</Link></li>
              <li><Link href="/services/cybersecurity" className="text-gray-300 hover:text-white">Cybersecurity</Link></li>
              <li><Link href="/services/devops" className="text-gray-300 hover:text-white">DevOps</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-300 hover:text-white">About Us</Link></li>
              <li><Link href="/team" className="text-gray-300 hover:text-white">Our Team</Link></li>
              <li><Link href="/careers" className="text-gray-300 hover:text-white">Careers</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link href="/blog" className="text-gray-300 hover:text-white">Blog</Link></li>
              <li><Link href="/docs" className="text-gray-300 hover:text-white">Documentation</Link></li>
              <li><Link href="/support" className="text-gray-300 hover:text-white">Support</Link></li>
              <li><Link href="/privacy" className="text-gray-300 hover:text-white">Privacy Policy</Link></li>
            </ul>
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
};

export default EnhancedFooter;