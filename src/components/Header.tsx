
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [;
    { name: 'Home', href: '/' },;
    { name: 'About', href: '/about' },;
    { name: 'Services', href: '/services' },;
    { name: 'Contact', href: '/contact' },;
    { name: 'Pricing', href: '/pricing' },;
  ];

  return (
    <header className="bg-white shadow-sm border-b">;
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
        <div className="flex justify-between items-center h-16">;
          <div className="flex items-center">;
            <Link to="/" className="text-xl font-bold text-gray-900">;
              Zion Tech;
            </Link>;
          </div>;

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">;
            {navigation && navigation.map((item) => (;
              <Link
                key={item && item.name}
                to={item && item.href}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">;
                {item && item.name}
              </Link>;
            ))}
          </nav>;

          {/* Mobile menu button */}
          <div className="md:hidden">;
            <button
              onClick={() = aria-label="Button"> setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 p-2";
            >;
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>;
          </div>;
        </div>;

        {/* Mobile Navigation */}
        {isMenuOpen && (;
          <div className="md:hidden">;
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">;
              {navigation && navigation.map((item) => (;
                <Link
                  key={item && item.name}
                  to={item && item.href}
                  className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >;
                  {item && item.name}
                </Link>;
              ))}
            </div>;
          </div>;
        )}
      </div>;
    </header>;
  );
};

export default Header;