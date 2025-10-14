import React from 'react';
import { Helmet } from 'react-helmet-async';

const EnhancedFooter = () => {
  return (
    <>
      <Helmet>
        <title>Enhanced Footer - Zion Tech Group</title>
        <meta name="description" content="Professional enhanced footer services by Zion Tech Group." />
      </Helmet>
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Zion Tech Group</h3>
              <p className="text-gray-300">
                Advanced AI and IT solutions for businesses worldwide.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><a href="/ai-services" className="text-gray-300 hover:text-cyan-400">AI Services</a></li>
                <li><a href="/it-services" className="text-gray-300 hover:text-cyan-400">IT Services</a></li>
                <li><a href="/cloud-solutions" className="text-gray-300 hover:text-cyan-400">Cloud Solutions</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="/about" className="text-gray-300 hover:text-cyan-400">About</a></li>
                <li><a href="/careers" className="text-gray-300 hover:text-cyan-400">Careers</a></li>
                <li><a href="/contact" className="text-gray-300 hover:text-cyan-400">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="/privacy" className="text-gray-300 hover:text-cyan-400">Privacy Policy</a></li>
                <li><a href="/terms" className="text-gray-300 hover:text-cyan-400">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">&copy; 2024 Zion Tech Group. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default EnhancedFooter;