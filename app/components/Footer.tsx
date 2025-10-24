import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 border-t border-white/20">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-white text-xl font-bold mb-4">ZionTechGroup</h3>
            <p className="text-gray-300 mb-4">
              Leading provider of AI solutions, technology services, and digital transformation for businesses worldwide.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/services" className="text-gray-300 hover:text-white">AI Solutions</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-white">Cloud Infrastructure</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-white">Cybersecurity</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-white">Digital Transformation</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-300 hover:text-white">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
              <li><Link href="/pricing" className="text-gray-300 hover:text-white">Pricing</Link></li>
              <li><Link href="/careers" className="text-gray-300 hover:text-white">Careers</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/20">
          <p className="text-gray-300 text-center">
            © 2024 ZionTechGroup. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;