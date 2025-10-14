import React from 'react';
import { Helmet } from 'react-helmet-async';

const EnhancedFooter: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Enhanced Footer - Zion Tech Group</title>
        <meta name="description" content="Professional enhanced footer services by Zion Tech Group." />
      </Helmet>
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Zion Tech Group</h3>
              <p className="text-gray-300">
                Leading provider of AI-powered enterprise solutions and digital transformation services.
              </p>
            </div>
            <div>
              <h4 className="text-md font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="/ai-services" className="hover:text-white">AI Services</a></li>
                <li><a href="/it-services" className="hover:text-white">IT Solutions</a></li>
                <li><a href="/cloud-services" className="hover:text-white">Cloud Services</a></li>
                <li><a href="/cybersecurity" className="hover:text-white">Cybersecurity</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-md font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="/about" className="hover:text-white">About Us</a></li>
                <li><a href="/team" className="hover:text-white">Team</a></li>
                <li><a href="/careers" className="hover:text-white">Careers</a></li>
                <li><a href="/contact" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-md font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="/documentation" className="hover:text-white">Documentation</a></li>
                <li><a href="/faq" className="hover:text-white">FAQ</a></li>
                <li><a href="/support" className="hover:text-white">Support</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 Zion Tech Group. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default EnhancedFooter;