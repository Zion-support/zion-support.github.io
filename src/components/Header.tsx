
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

<<<<<<< HEAD
export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-700/20 bg-slate-900/95 backdrop-blur-md">
      <div className="container flex h-16 items-center px-4 sm:px-6">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex-shrink-0">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Zion Tech Group
            </h1>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex ml-8 space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="text-slate-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Right side actions */}
        <div className="ml-auto flex items-center space-x-4">
          <button className="px-4 py-2 text-cyan-400 border border-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-white transition-colors">
            Login
          </button>
          <button className="px-4 py-2 bg-cyan-400 text-white rounded-lg hover:bg-cyan-500 transition-colors">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-slate-300 hover:text-cyan-400 transition-colors duration-200"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-slate-700/20 bg-slate-900/95 backdrop-blur-md">
          <div className="px-4 py-4 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block text-slate-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  );
};