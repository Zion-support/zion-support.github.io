import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="bg-slate-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">Zion Tech Group</Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link to="/services" className="hover:text-cyan-400">Services</Link></li>
            <li><Link to="/about" className="hover:text-cyan-400">About</Link></li>
            <li><Link to="/contact" className="hover:text-cyan-400">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;