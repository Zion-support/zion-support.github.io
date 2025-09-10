import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const EnhancedHeader: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services', dropdown: [
      { name: 'AI Solutions', href: '/services/ai-services', description: 'Cutting-edge AI services' },
      { name: 'IT & Security', href: '/services/it-services', description: 'Enterprise security & infrastructure' },
      { name: 'Blockchain & Web3', href: '/services/blockchain-services', description: 'Next-gen blockchain solutions' },
      { name: 'Sustainability', href: '/services/sustainability', description: 'Green tech solutions' },
    ] },
    { name: 'Solutions', href: '/solutions', dropdown: [
      { name: 'Enterprise', href: '/solutions/enterprise', description: 'Large-scale business solutions' },
      { name: 'Startups', href: '/solutions/startups', description: 'Growth-focused solutions' },
      { name: 'Government', href: '/solutions/government', description: 'Public sector solutions' },
    ] },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-gray-900">Zion Tech Group</h1>
            </Link>
          </div>

          <nav className="hidden md:flex space-x-8">
            {navigationItems.map(item => (
              <div key={item.name} className="relative group">
                <Link
                  to={item.href}
                  className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium"
                >
                  {item.name}
                </Link>
                {item.dropdown && (
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    {item.dropdown.map(dropdownItem => (
                      <Link
                        key={dropdownItem.name}
                        to={dropdownItem.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        <div className="font-medium">{dropdownItem.name}</div>
                        <div className="text-xs text-gray-500">{dropdownItem.description}</div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/contact"
              className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700"
            >
              Get Started
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-gray-900"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigationItems.map(item => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default EnhancedHeader;
