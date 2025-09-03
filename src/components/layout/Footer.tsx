import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="h-8 w-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="ml-2 text-xl font-bold">Zion Tech Group</span>
            </div>
            <p className="text-gray-400">
              Leading provider of AI-powered technology solutions.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-300 uppercase mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/ai-services" className="text-gray-400 hover:text-white">AI Services</Link></li>
              <li><Link to="/it-services" className="text-gray-400 hover:text-white">IT Services</Link></li>
              <li><Link to="/micro-saas" className="text-gray-400 hover:text-white">Micro SaaS</Link></li>
              <li><Link to="/services/cybersecurity" className="text-gray-400 hover:text-white">Cybersecurity</Link></li>
              <li><Link to="/services/cloud-devops" className="text-gray-400 hover:text-white">Cloud Solutions</Link></li>
              <li><Link to="/services/consulting" className="text-gray-400 hover:text-white">Consulting</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-300 uppercase mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link to="/team" className="text-gray-400 hover:text-white">Our Team</Link></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-white">Careers</Link></li>
              <li><Link to="/partners" className="text-gray-400 hover:text-white">Partners</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
              <li><Link to="/news" className="text-gray-400 hover:text-white">News</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-300 uppercase mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/blog" className="text-gray-400 hover:text-white">Blog</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-white">FAQ</Link></li>
              <li><Link to="/help" className="text-gray-400 hover:text-white">Help Center</Link></li>
              <li><Link to="/documentation" className="text-gray-400 hover:text-white">Documentation</Link></li>
              <li><Link to="/status" className="text-gray-400 hover:text-white">Status</Link></li>
              <li><Link to="/sitemap" className="text-gray-400 hover:text-white">Sitemap</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-300 uppercase mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-400 hover:text-white">Terms of Service</Link></li>
              <li><Link to="/cookies" className="text-gray-400 hover:text-white">Cookie Policy</Link></li>
              <li><Link to="/accessibility" className="text-gray-400 hover:text-white">Accessibility</Link></li>
              <li><Link to="/data-protection" className="text-gray-400 hover:text-white">Data Protection</Link></li>
              <li><Link to="/security" className="text-gray-400 hover:text-white">Security</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          © {currentYear} Zion Tech Group. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;