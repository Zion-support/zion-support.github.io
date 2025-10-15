import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Zion Tech Group</h3>
            <p className="text-gray-300 mb-4">
              Advanced AI and IT Solutions for the modern world.
            </p>
            <p className="text-gray-300 text-sm">
              © 2024 Zion Tech Group. All rights reserved.
            </p>
          </div>
          
          <div>
            <h4 className="text-md font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-300 hover:text-white">All Services</Link></li>
              <li><Link to="/ai-services" className="text-gray-300 hover:text-white">AI Services</Link></li>
              <li><Link to="/it-services" className="text-gray-300 hover:text-white">IT Services</Link></li>
              <li><Link to="/cloud-infrastructure" className="text-gray-300 hover:text-white">Cloud Infrastructure</Link></li>
              <li><Link to="/5g-solutions" className="text-gray-300 hover:text-white">5G Solutions</Link></li>
              <li><Link to="/digital-transformation" className="text-gray-300 hover:text-white">Digital Transformation</Link></li>
              <li><Link to="/web-development" className="text-gray-300 hover:text-white">Web Development</Link></li>
              <li><Link to="/mobile-development" className="text-gray-300 hover:text-white">Mobile Development</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-md font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-white">About</Link></li>
              <li><Link to="/team" className="text-gray-300 hover:text-white">Team</Link></li>
              <li><Link to="/careers" className="text-gray-300 hover:text-white">Careers</Link></li>
              <li><Link to="/partnerships" className="text-gray-300 hover:text-white">Partnerships</Link></li>
              <li><Link to="/case-studies" className="text-gray-300 hover:text-white">Case Studies</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-md font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link to="/blog" className="text-gray-300 hover:text-white">Blog</Link></li>
              <li><Link to="/pricing" className="text-gray-300 hover:text-white">Pricing</Link></li>
              <li><Link to="/api-docs" className="text-gray-300 hover:text-white">API Docs</Link></li>
              <li><Link to="/help" className="text-gray-300 hover:text-white">Help & Support</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-md font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-gray-300 hover:text-white">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-300 hover:text-white">Terms of Service</Link></li>
              <li><Link to="/cookies" className="text-gray-300 hover:text-white">Cookie Policy</Link></li>
              <li><Link to="/accessibility" className="text-gray-300 hover:text-white">Accessibility</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © 2024 Zion Tech Group. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="https://ziontechgroup.com" className="text-gray-300 hover:text-white text-sm">ziontechgroup.com</a>
              <a href="mailto:contact@ziontechgroup.com" className="text-gray-300 hover:text-white text-sm">contact@ziontechgroup.com</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;