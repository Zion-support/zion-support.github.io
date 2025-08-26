import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zion-slate-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Zion Tech Group</h3>
            <p className="text-gray-400 text-sm">
              Transforming businesses through cutting-edge technology solutions
            </p>
          </div>
          
          <div>
            <h4 className="text-md font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/services" className="hover:text-zion-cyan">AI Solutions</Link></li>
              <li><Link to="/services" className="hover:text-zion-cyan">Cybersecurity</Link></li>
              <li><Link to="/services" className="hover:text-zion-cyan">Cloud Services</Link></li>
              <li><Link to="/services" className="hover:text-zion-cyan">Digital Transformation</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-md font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/about" className="hover:text-zion-cyan">About Us</Link></li>
              <li><Link to="/team" className="hover:text-zion-cyan">Our Team</Link></li>
              <li><Link to="/contact" className="hover:text-zion-cyan">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-md font-semibold mb-4">Contact</h4>
            <div className="text-sm text-gray-400 space-y-2">
              <p>kleber@ziontechgroup.com</p>
              <p>+1 302 464 0950</p>
              <p>364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-zion-purple/20 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {currentYear} Zion Tech Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
