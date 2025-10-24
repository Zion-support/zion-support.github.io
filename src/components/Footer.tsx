'use client';

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Zion Tech Group</h3>
            <p className="text-gray-300 text-sm">
              Leading provider of AI-powered solutions, IT services, and micro SAAS platforms.
            </p>
          </div>
          
          <div>
            <h4 className="text-md font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="/ai-services" className="hover:text-white">AI Services</a></li>
              <li><a href="/it-services" className="hover:text-white">IT Services</a></li>
              <li><a href="/5g-solutions" className="hover:text-white">5G Solutions</a></li>
              <li><a href="/micro-saas" className="hover:text-white">Micro SAAS</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-md font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="/about" className="hover:text-white">About</a></li>
              <li><a href="/team" className="hover:text-white">Team</a></li>
              <li><a href="/careers" className="hover:text-white">Careers</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-md font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-white">Terms of Service</a></li>
              <li><a href="/cookies" className="hover:text-white">Cookie Policy</a></li>
              <li><a href="/compliance" className="hover:text-white">Compliance</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-300">
          <p>&copy; 2024 Zion Tech Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;