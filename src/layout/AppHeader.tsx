<<<<<<< HEAD
import { _useState } from 'react';
import { _Link } from 'react-router-dom';
import { _Menu, _X, _Search } from 'lucide-react';
=======
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search } from 'lucide-react';
>>>>>>> 97898c1e8ff6077b3b3a3ca38c9422c9b60de8e3

export function AppHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b">
<<<<<<< HEAD
      <div className="max-w-7xl mx-auto px-4 _sm:px-6 lg:px-8">
=======
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
>>>>>>> 97898c1e8ff6077b3b3a3ca38c9422c9b60de8e3
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-blue-600">Zion Tech Group</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
              About
            </Link>
            <Link to="/services" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
              Services
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
              Contact
            </Link>
            <Link to="/blog" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
              Blog
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
<<<<<<< HEAD
              className="text-gray-700 _hover:text-blue-600 p-2"
            >
              {mobileMenuOpen ? <X size={_24} /> : <Menu size={_24} />}
=======
              className="text-gray-700 hover:text-blue-600 p-2"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
>>>>>>> 97898c1e8ff6077b3b3a3ca38c9422c9b60de8e3
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                to="/"
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
<<<<<<< HEAD
                className="text-gray-700 _hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
=======
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
>>>>>>> 97898c1e8ff6077b3b3a3ca38c9422c9b60de8e3
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/services"
<<<<<<< HEAD
                className="text-gray-700 _hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
=======
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
>>>>>>> 97898c1e8ff6077b3b3a3ca38c9422c9b60de8e3
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/contact"
<<<<<<< HEAD
                className="text-gray-700 _hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
=======
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
>>>>>>> 97898c1e8ff6077b3b3a3ca38c9422c9b60de8e3
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                to="/blog"
<<<<<<< HEAD
                className="text-gray-700 _hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
=======
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
>>>>>>> 97898c1e8ff6077b3b3a3ca38c9422c9b60de8e3
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}