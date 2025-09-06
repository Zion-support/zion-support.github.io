
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

import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
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
          {navigation.map(item) => (
            <Link
              key={item.name}
              to={item.href}
              className="text-slate-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
              {item.name}
            </Link>
          )}
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
            {navigation.map(item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block text-slate-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
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
            {navigation && navigation.map(item) => (;
              <Link
                key={item && item.name}
                to={item && item.href}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">;
                {item && item.name}
              </Link>;
            )}
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
              {navigation && navigation.map(item) => (;
                <Link
                  key={item && item.name}
                  to={item && item.href}
                  className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >;
                  {item && item.name}
                </Link>;
              )}
            </div>;
          </div>;
        )}
      </div>;
    </header>;
  );

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = (name: string) => {, setActiveDropdown(activeDropdown = = name ? null : name),
  ;

  return (;
    <header className="bg-white shadow-lg sticky top-0 z-50">;
      {/* Top Bar */};
      <div className="bg-blue-900 text-white py-2">;
        <div className="container mx-auto px-4">;
          <div className="flex flex-col md: flex-row justify-between items-center text-sm">, <div className="flex items-center space-x-6 mb-2 md:mb-0">,
              <div className="flex items-center space-x-2">;
                <Phone className="w-4 h-4" />;
                <span>+1 302 464 0950</span>;
              </div>;
              <div className="flex items-center space-x-2">;
                <Mail className="w-4 h-4" />;
                <span>kleber@ziontechgroup.com</span>;
              </div>;
            </div>;
            <div className="flex items-center space-x-2">;
              <MapPin className="w-4 h-4" />;
              <span>364 E Main St STE 1008, Middletown, DE 19709</span>;
            </div>;
          </div>;
        </div>;
      </div>;
      {/* Main Navigation */};
      <nav className="container mx-auto px-4 py-4">;
        <div className="flex justify-between items-center">;
          {/* Logo */};
          <Link href="/" className="flex items-center space-x-2">;
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">;
              <span className="text-white font-bold text-xl">Z</span>;
            </div>;
            <div>;
              <h1 className="text-2xl font-bold text-gray-900">Zion Tech Group</h1>;
              <p className="text-sm text-gray-600">AI & Technology Solutions</p>;
            </div>;
          </Link>;
          {/* Desktop Navigation */};
          <div className="hidden lg: flex items-center space-x-8">, {navigation.map(item) => (,
              <div key={item.name} className="relative group">;
                <button;
                  onClick={() => item.dropdown && toggleDropdown(item.name)};
                  className="flex items-center space-x-1 text-gray-700 hover: text-blue-600 transition-colors duration-200 font-medium", >,
                  <Link href={item.href}>{item.name}</Link>;
                  {item.dropdown && (;
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${, activeDropdown = = item.name ? 'rotate-180' : '', }`} />)};
                </button>;
                {/* Dropdown Menu */};
                {item.dropdown && (;
                  <AnimatePresence>;
                    {activeDropdown = = item.name && (;
                      <motion.div;
                        initial={ opacity: 0, y: 10 };
                        animate={ opacity: 1, y: 0 };
                        exit={ opacity: 0, y: 10 };
                        className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50";
                      >;
                        {item.dropdown.map(subItem) => (;
                          <Link;
                            key={subItem.name};
                            href={subItem.href};
                            className="block px-4 py-2 text-gray-700 hover: bg-blue-50 hover:text-blue-600 transition-colors duration-200", onClick={() => setActiveDropdown(null),
                          >;
                            {subItem.name};
                          </Link>;
                        )};
                      </motion.div>;
                    )};
                  </AnimatePresence>;
                )};
              </div>;
            )};
          </div>;
          {/* Mobile Menu Button */};
          <button;
            onClick={toggleMenu};
            className="lg: hidden p-2 text-gray-700 hover:text-blue-600 transition-colors duration-200", >,
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />;
          </button>;
        </div>;
        {/* Mobile Navigation */};
        <AnimatePresence>;
          {isMenuOpen && (;
            <motion.div;
              initial={ opacity: 0, height: 0 };
              animate={ opacity: 1, height: 'auto' };
              exit={ opacity: 0, height: 0 };
              className="lg: hidden mt-4 border-t border-gray-200 pt-4", >,
              {navigation.map(item) => (;
                <div key={item.name} className="mb-2">;
                  <div className="flex items-center justify-between">;
                    <Link;
                      href={item.href};
                      className="text-gray-700 hover: text-blue-600 transition-colors duration-200 font-medium py-2", onClick={() => setIsMenuOpen(false),
                    >;
                      {item.name};
                    </Link>;
                    {item.dropdown && (;
                      <button;
                        onClick={() => toggleDropdown(item.name)};
                        className="p-1";
                      >;
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${;
                          activeDropdown = = item.name ? 'rotate-180' : '';
                        }`} />;
                      </button>;
                    )};
                  </div>;
                  {item.dropdown && activeDropdown = = item.name && (;
                    <div className="ml-4 mt-2 space-y-1">;
                      {item.dropdown.map(subItem) => (;
                        <Link;
                          key={subItem.name};
                          href={subItem.href};
                          className="block text-gray-600 hover: text-blue-600 transition-colors duration-200 py-1", onClick={() => setIsMenuOpen(false),
                        >;
                          {subItem.name};
                        </Link>;
                      )};
                    </div>;
                  )};
                </div>;
              )};
              <div className="mt-4 pt-4 border-t border-gray-200">;
                <Link;
                  href="/contact";
                  className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center px-6 py-3 rounded-lg hover: shadow-lg transition-all duration-300 font-semibold", onClick={() => setIsMenuOpen(false),
                >;
                  Get Started;
                </Link>;
              </div>;
            </motion.div>;
          )};
        </AnimatePresence>;
      </nav>;
    </header>;
  );

export default Header;
  );
export default Header;
