import React from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  return (
    <nav className="bg-g ray-900  text-white">
      <div className="ma x-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="fl ex justify-between items-center py-4">
          <div className="fl ex  items-center">
            <Link to="/" className="te xt-2xl font-bold">
              Zion Tech Group
            </Link>
          </div>
          <div className="hi dden md:block">
            <div className="ml-10 f lex items-baseline  space-x-4">
              <Link
                to="/"
                className="te xt-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="te xt-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="te xt-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Contact
              </Link>
            </div>
        </div>
    </nav>
  );
};

export default Navigation;