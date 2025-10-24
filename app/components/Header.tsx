import React from 'react';
import Navigation from './Navigation';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-lg">
      <Navigation />
    </header>
  );
};

export default Header;