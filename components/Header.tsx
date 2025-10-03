import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Blog', href: '/blog' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="text-left">
      <nav className="text-left">
        <div className="text-left">
          {/* Logo */}
          <Link to="/" className="text-left">
            <div className="text-left">
              <span className="text-left">Z<
            </div>
            <span className="text-left">Zion Tech Solutions<
          </Link>

          {/* Desktop Navigation */}
          <div className="text-left">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-left"
              >
                {item.name}
              </Link>
            ))}
            
            <Link
              to="/contact"
              className="text-left"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="text-left"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="text-left" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="text-left">
            <div className="text-left">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-left"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              <Link
                to="/contact"
                className="text-left"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;