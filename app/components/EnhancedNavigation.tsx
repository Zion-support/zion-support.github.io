import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const EnhancedNavigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold">
              Zion Tech Group
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-cyan-400">Home</Link>
            <Link to="/about" className="hover:text-cyan-400">About</Link>
            <Link to="/services" className="hover:text-cyan-400">Services</Link>
            <Link to="/contact" className="hover:text-cyan-400">Contact</Link>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-cyan-400"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default EnhancedNavigation;
