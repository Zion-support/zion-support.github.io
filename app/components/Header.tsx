'use client';
import React from 'react';
import Navigation from './Navigation'
const Header: React.FC = () => {
<<<<<<< HEAD
  return (
    <React.Fragment>
      <Navigation />
=======
}
return (
    <React .Fragment>
      <Navigation />
);
};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
      {/* Spacer to prevent content from going under fixed header */}
      <div className="h-16 lg:h-20" />
    </React.Fragment>
  )
}

export default Header