import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Globe, Users, Award, BookOpen, HelpCircle, Shield, DollarSign } from 'lucide-react';

const navigationItems = [
  {
    name: 'Home',
    path: '/',
    icon: <Globe className="w-4 h-4" />,
  },
  {
    name: 'Blog',
    path: '/blog',
    icon: <BookOpen className="w-4 h-4" />,
  },
  {
    name: 'Tutorials',
    path: '/tutorials',
    icon: <BookOpen className="w-4 h-4" />,
  },
  {
    name: 'Demo',
    path: '/demo',
    icon: <Award className="w-4 h-4" />,
  },
  {
    name: 'Support',
    path: '/support',
    icon: <HelpCircle className="w-4 h-4" />,
  },
  {
    name: 'Privacy',
    path: '/privacy',
    icon: <Shield className="w-4 h-4" />,
  },
  {
    name: 'Terms',
    path: '/terms',
    icon: <Shield className="w-4 h-4" />,
  },
  {
    name: 'Pricing',
    path: '/pricing',
    icon: <DollarSign className="w-4 h-4" />,
  },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-white">Zion AI</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center space-x-1"
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium flex items-center space-x-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}