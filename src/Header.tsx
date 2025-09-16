import React from 'react';
import NotificationSystem from './components/NotificationSystem';

const Header: React.FC = () => {
  return (
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </a>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="/" className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Home
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
