import React from 'react';
import { Link } from 'react-router-dom';

export function MainNavigation() {
  return (
    <nav className="hidden md:block">
      <div className="ml-10 flex items-baseline space-x-4">
        <Link
          to="/"
          className="text-gray-700 hover:text-zion-purple px-3 py-2 rounded-md text-sm font-medium transition-colors"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="text-gray-700 hover:text-zion-purple px-3 py-2 rounded-md text-sm font-medium transition-colors"
        >
          About
        </Link>
        <Link
          to="/advanced-services-2027"
          className="text-gray-700 hover:text-zion-purple px-3 py-2 rounded-md text-sm font-medium transition-colors"
        >
          Services
        </Link>
        <Link
          to="/comprehensive-pricing-2027"
          className="text-gray-700 hover:text-zion-purple px-3 py-2 rounded-md text-sm font-medium transition-colors"
        >
          Pricing
        </Link>
        <Link
          to="/contact"
          className="text-gray-700 hover:text-zion-purple px-3 py-2 rounded-md text-sm font-medium transition-colors"
        >
          Contact
        </Link>
        <Link
          to="/login"
          className="bg-zion-purple text-white hover:bg-zion-purple-dark px-4 py-2 rounded-md text-sm font-medium transition-colors"
        >
          Login
        </Link>
      </div>
    </nav>
  );
}
