import { Menu, X } from 'lucide-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const EnhancedHeader: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-slate-900/95 backdrop-blur-sm border-b border-cyan-500/20 fixed w-full top-0 z-50"></header>
      <div className="container mx-auto px-4"></div>
        <div className="flex items-center justify-between h-16"></div>
          <div className="flex items-center"></div>
            <Link to="/" className="text-2xl font-bold text-white"></Link>
              Zion Tech Group
            </Link>
          </div>
          <div className="hidden md:block"></div>
            <nav className="flex space-x-8"></nav>
              <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
              <Link to="/about" className="text-gray-300 hover:text-white">About</Link>
              <Link to="/services" className="text-gray-300 hover:text-white">Services</Link>
              <Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link>
            </nav>
          </div>
          <div className="md:hidden"></div>
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white"
            ></button
>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default EnhancedHeader;