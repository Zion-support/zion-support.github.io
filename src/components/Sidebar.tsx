import React from 'react';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-3cef
import { X } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose} />
      <div className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <nav className="p-4">
<<<<<<< HEAD
          <ul className="space-y-2">
            <li>
              <Link
                to="/"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
                onClick={onClose}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
                onClick={onClose}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
                onClick={onClose}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/pricing"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
                onClick={onClose}
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
                onClick={onClose}
              >
                Contact
              </Link>
            </li>
          </ul>
=======
          <div className="space-y-2">
            <a href="/" className="block text-gray-300 hover:text-white py-2">Home</a>
            <a href="/about" className="block text-gray-300 hover:text-white py-2">About</a>
            <a href="/services" className="block text-gray-300 hover:text-white py-2">Services</a>
            <a href="/pricing" className="block text-gray-300 hover:text-white py-2">Pricing</a>
            <a href="/contact" className="block text-gray-300 hover:text-white py-2">Contact</a>
          </div>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-3cef
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;