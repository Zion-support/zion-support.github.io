import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">
              Zion <span className="text-purple-400">Tech</span>
            </h3>
            <p className="text-gray-300 mb-4">
              Advanced AI and IT solutions for modern businesses.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-300 hover:text-purple-400">IT Services</Link></li>
              <li><Link to="/ai-services" className="text-gray-300 hover:text-purple-400">AI Solutions</Link></li>
              <li><Link to="/5g-solutions" className="text-gray-300 hover:text-purple-400">5G Solutions</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-purple-400">About</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-purple-400">Contact</Link></li>
              <li><Link to="/privacy" className="text-gray-300 hover:text-purple-400">Privacy</Link></li>
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
}