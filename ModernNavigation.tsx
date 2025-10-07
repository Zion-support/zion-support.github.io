import React from 'react';
import { Link } from 'react-router-dom';

interface ModernNavigationProps {
  className?: string;
}

const ModernNavigation: React.FC<ModernNavigationProps> = ({ className = '' }) => {
  const navigationItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className={`bg-white shadow-lg ${className}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold text-blue-600">
            Zion Tech Group
          </Link>
          <div className="hidden md:flex space-x-8">
            {navigationItems.map(item => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default ModernNavigation;
