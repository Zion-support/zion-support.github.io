'use client';
import React from 'react';
import Navigation from './Navigation';
const Header: React.FC = () => {
return (
    <React.Fragment></React>
      <Navigation />
      {/* Spacer to prevent content from going under fixed header */}</Navigation>
      <div className="h-16 lg:h-20" />
    </React.Fragment>
  );
};
export default Header;
;
