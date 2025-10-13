'use client';
import React, { memo } from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = memo(() => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Zion Tech Group</h3>
            <p className="text-gray-300">
              Leading provider of AI-powered solutions, cybersecurity, cloud infrastructure, 
              and digital transformation services.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">AI Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/ai-chatbot-builder" className="hover:text-white transition-colors">AI Chatbots</Link></li>
              <li><Link to="/ai-content-generation" className="hover:text-white transition-colors">Content Generation</Link></li>
              <li><Link to="/ai-data-analytics" className="hover:text-white transition-colors">Data Analytics</Link></li>
              <li><Link to="/ai-automation" className="hover:text-white transition-colors">Workflow Automation</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p className="text-gray-300 mb-2">Email: info@ziontechgroup.com</p>
            <p className="text-gray-300">Phone: +1-302-464-0950</p>
            <p className="text-gray-300">Address: 364 E Main St STE 1008, Middletown, DE 19709</p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Zion Tech Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;
