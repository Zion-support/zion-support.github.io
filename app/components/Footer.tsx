import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 border-t border-white/20">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-white text-xl font-bold mb-4">ZionTechGroup</h3>
            <p className="text-gray-400 mb-4">
              Leading provider of AI solutions, technology services, and digital transformation 
              for businesses worldwide.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/ai-solutions" className="text-gray-400 hover:text-white">AI Solutions</Link></li>
              <li><Link href="/cloud-infrastructure" className="text-gray-400 hover:text-white">Cloud Infrastructure</Link></li>
              <li><Link href="/cybersecurity" className="text-gray-400 hover:text-white">Cybersecurity</Link></li>
              <li><Link href="/digital-transformation" className="text-gray-400 hover:text-white">Digital Transformation</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link href="/careers" className="text-gray-400 hover:text-white">Careers</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-white">Blog</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 ZionTechGroup. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;