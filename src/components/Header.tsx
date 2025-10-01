import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-white/5 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-white">
            Zion Tech Group
          </Link>
          <nav className="flex items-center gap-6">
            <Link to="/" className="text-white hover:text-zion-cyan transition-colors">
              Home
            </Link>
            <Link to="/blog" className="text-white hover:text-zion-cyan transition-colors">
              Blog
            </Link>
            <Link to="/contact" className="text-white hover:text-zion-cyan transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
