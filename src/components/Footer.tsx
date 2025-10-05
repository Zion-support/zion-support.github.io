import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
<<<<<<< HEAD
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Zion Tech Group</h3>
            <p className="text-gray-400">
              Advanced AI and IT Solutions for Enterprise
            </p>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-400 hover:text-white">AI Solutions</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white">IT Consulting</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white">About</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link to="/blog" className="text-gray-400 hover:text-white">Blog</Link></li>
              <li><Link to="/privacy" className="text-gray-400 hover:text-white">Privacy</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Zion Tech Group. All rights reserved.</p>
=======
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Zion Tech Group</h3>
            <p className="text-gray-300 mb-4">
              Leading the future of AI and IT solutions with innovative technology 
              that transforms businesses and drives success.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Twitter
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                GitHub
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">AI Solutions</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">IT Consulting</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Cloud Services</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Data Analytics</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/privacy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © {new Date().getFullYear()} Zion Tech Group. All rights reserved.
          </p>
>>>>>>> cursor/fix-errors-and-merge-to-main-0290
        </div>
      </div>
    </footer>
  );
};

export default Footer;
=======

const Footer: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white p-8 rounded-lg shadow-lg">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">
          Footer
        </h2>
        <p className="text-lg mb-6">
          This component is being restored. Please check back later for full functionality.
        </p>
      </div>
    </div>
  );
};

export default Footer;
>>>>>>> cursor/fix-errors-and-merge-to-main-4daf
