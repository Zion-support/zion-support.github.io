'use client';
import React from 'react';
import Navigation from './Navigation';

<<<<<<< HEAD
const Header: React.FC = () => {
  return (
    <>
      <Navigation >{/* Spacer to prevent content from going under fixed header */}</Navigation>
      </Navigation><div className="h-16 lg:h-20" />
    </>
=======
const Header: React.FC = () => {,
  return(<>,)
      <Navigation />),
      {/* Spacer to prevent content from going under fixed header */}
      <div className="h-16 lg: h-20" />,
    </>,
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
  );
};

export default Header;