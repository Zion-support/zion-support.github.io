import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const NavigationBackup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold text-gray-800">
            Zion Tech Group
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link to="/about" className="text-gray-600 hover:text-gray-800">About</Link>
            <Link to="/services" className="text-gray-600 hover:text-gray-800">Services</Link>
            <Link to="/contact" className="text-gray-600 hover:text-gray-800">Contact</Link>
          </div>
          
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {isOpen && (
          <div className="md:hidden py-4">
            <Link to="/about" className="block py-2 text-gray-600 hover:text-gray-800">About</Link>
            <Link to="/services" className="block py-2 text-gray-600 hover:text-gray-800">Services</Link>
            <Link to="/contact" className="block py-2 text-gray-600 hover:text-gray-800">Contact</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavigationBackup;