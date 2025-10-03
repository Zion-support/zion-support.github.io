import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {/* content */}
  return (
  <div></div>
    <header className="bg-slate-900 border-b border-slate-800">
      <div className="container mx-auto px-4 py-4"></div>
        <div className="flex items-center justify-between"></div>
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Zion Tech Group
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className="text-gray-300 hover:text-white transition-colors"
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-gray-300 hover:text-white transition-colors"
            >
              About
            </Link>
            <Link 
              to="/services" 
              className="text-gray-300 hover:text-white transition-colors"
            >
              Services
            </Link>
            <Link 
              to="/blog" 
              className="text-gray-300 hover:text-white transition-colors"
            >
              Blog
            </Link>
            <Link 
              to="/contact" 
              className="text-gray-300 hover:text-white transition-colors"
            >
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-4"></div>
            <a 
              href="/contact" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300"
            ></a>
              Get Started
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;