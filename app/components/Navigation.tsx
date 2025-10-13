import React from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  return (
    <nav className="bg-black/20 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold text-white">
            Zion Tech Group
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link to="/about" className="text-gray-300 hover:text-cyan-400">About</Link>
            <Link to="/services" className="text-gray-300 hover:text-cyan-400">Services</Link>
            <Link to="/contact" className="text-gray-300 hover:text-cyan-400">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
