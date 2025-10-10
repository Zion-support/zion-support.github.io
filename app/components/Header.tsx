'use client';
import React from 'react';
import Navigation from './Navigation';

<<<<<<< HEAD
const Header: React.FC = () => {,
  return(<React.Fragment>)</React.Fragment>
      <Navigation />
      {/* Spacer to prevent content from going under fixed header */} <div className="h-16 lg: h-20" />,
    </React.Fragment>
=======
const Header: React.FC = () => {
  return (
    <>
      <Navigation />
      {/* Spacer to prevent content from going under fixed header */}
      <div className="h-16 lg:h-20" />
    </>
>>>>>>> origin/main
  );
};

export default Header;
