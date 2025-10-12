import React from 'react'
import Navigation from './Navigation'

const Header: React.FC = () => {
  return (
    <header>
      <Navigation />
      {/* Spacer to prevent content from going under fixed header */}
      <div className="h-16 lg:h-20" />
    </header>
  );
};

export default Header;
