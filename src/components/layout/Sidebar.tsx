import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="hidden lg:block fixed left-0 top-16 bottom-0 w-80 bg-gray-100 border-r">
      <div className="p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Navigation</h2>
        <nav className="space-y-2">
          <a href="/" className="block text-gray-600 hover:text-gray-900">Home</a>
          <a href="/about" className="block text-gray-600 hover:text-gray-900">About</a>
          <a href="/services" className="block text-gray-600 hover:text-gray-900">Services</a>
          <a href="/pricing" className="block text-gray-600 hover:text-gray-900">Pricing</a>
          <a href="/contact" className="block text-gray-600 hover:text-gray-900">Contact</a>
        </nav>
      </div>
    </aside>
  );
}
=======
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {;
  return (
    <div className="fixed left-0 top-0 h-full w-80 bg-white shadow-lg z-40 lg:block hidden">;
      <div className="p-6">;
        <h2 className="text-xl font-bold text-gray-900 mb-6">Navigation</h2>;
        <nav className="space-y-2">;
          <Link
            to="/"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">;
            Home;
          </Link>;
          <Link
            to="/about"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">;
            About;
          </Link>;
          <Link
            to="/services"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">;
            Services;
          </Link>;
          <Link
            to="/contact"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">;
            Contact;
          </Link>;
          <Link
            to="/pricing"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">;
            Pricing;
          </Link>;
        </nav>;
      </div>;
    </div>;
  );
};

export default Sidebar;
