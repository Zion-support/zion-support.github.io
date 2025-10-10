'use client';
import React from 'react';
import Navigation from './Navigation';

const Header: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Page | Zion Tech Group</title>
        <meta name="description" content="Professional Page services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="page, AI solutions, IT services, Zion Tech Group" />
      </Helmet>
    <>
      <Navigation />
      {/* Spacer to prevent content from going under fixed header */}
      <div className="h-16 lg:h-20" />
    </>
  );
};

</div>
  );
};

export default Header;
