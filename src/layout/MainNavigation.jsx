import React from 'react';
import { Link } from 'react-router-dom';

export function MainNavigation() {
  return (
    <nav className="hidden md:flex space-x-8">
<<<<<<< HEAD
      <Link to="/" className="text-gray-700 hover:text-zion-purple transition-colors px-3 py-2 text-sm font-medium">
        Home
      </Link>
      <Link to="/enhanced-services" className="text-gray-700 hover:text-zion-purple transition-colors px-3 py-2 text-sm font-medium">
        Services
      </Link>
      <Link to="/about" className="text-gray-700 hover:text-zion-purple transition-colors px-3 py-2 text-sm font-medium">
        About
      </Link>
      <Link to="/contact" className="text-gray-700 hover:text-zion-purple transition-colors px-3 py-2 text-sm font-medium">
        Contact
      </Link>
    </nav>
  );
}
=======
      <Link to="/" className="text-gray-700 hover:text-zion-purple px-3 py-2 rounded-md text-sm font-medium transition-colors">
        Home
      </Link>
      <Link to="/services" className="text-gray-700 hover:text-zion-purple px-3 py-2 rounded-md text-sm font-medium transition-colors">
        Services
      </Link>
      <Link to="/about" className="text-gray-700 hover:text-zion-purple px-3 py-2 rounded-md text-sm font-medium transition-colors">
        About
      </Link>
      <Link to="/contact" className="text-gray-700 hover:text-zion-purple px-3 py-2 rounded-md text-sm font-medium transition-colors">
        Contact
      </Link>
      <Link to="/login" className="text-gray-700 hover:text-zion-purple px-3 py-2 rounded-md text-sm font-medium transition-colors">
        Login
      </Link>
    </nav>
  );
}
>>>>>>> cursor/website-audit-and-enhancement-1eed
