import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header: React.FC = React.memo(() => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'Services', href: '/services' },
    { 
      name: 'Resources', 
      href: '/resources',
      dropdown: [
        { name: 'Blog', href: '/blog' },
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'Documentation', href: '/docs' },
        { name: 'API Reference', href: '/api' }
      ]
    },
    { name: 'Team', href: '/team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' }
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-950/95 backdrop-blur-md border-b border-slate-800' 
        : 'bg-transparent'
    }`}>
      <nav className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white min-h-screen">
        <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white min-h-screen">
          {/* Logo */}
          <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white min-h-screen">
            <Link 
              to="/" 
              className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white min-h-screen">
              <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white min-h-screen">
                <span className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white min-h-screen">Z</span>
              </div>
              <span className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white min-h-screen">Zion Tech Group</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white min-h-screen">
            <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white min-h-screen">
              {navigation.map((item) => (
                <div key={item.name} className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white min-h-screen">
                  {item.dropdown ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <button className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white min-h-screen">
                        <span>{item.name}</span>
                        <ChevronDown className="w-4 h-4" />
                      </button>
                      
                      {activeDropdown === item.name && (
                        <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white min-h-screen">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white min-h-screen">
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        isActive(item.href)
                          ? 'text-white bg-blue-600'
                          : 'text-gray-300 hover:text-white hover:bg-slate-700'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white min-h-screen">
            <Link
              to="/contact"
              className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white min-h-screen">
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white min-h-screen">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white min-h-screen">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white min-h-screen">
            <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white min-h-screen">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => setActiveDropdown(
                          activeDropdown === item.name ? null : item.name
                        )}
                        className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white min-h-screen">
                        <span>{item.name}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`} />
                      </button>
                      
                      {activeDropdown === item.name && (
                        <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white min-h-screen">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white min-h-screen">
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        isActive(item.href)
                          ? 'text-white bg-blue-600'
                          : 'text-gray-300 hover:text-white hover:bg-slate-700'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              
              <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white min-h-screen">
                <Link
                  to="/contact"
                  className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white min-h-screen">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
});

export default Header);