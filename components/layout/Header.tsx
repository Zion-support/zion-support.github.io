import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-blue-600">Zion Tech Group</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;