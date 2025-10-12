import { Link } from 'react-router-dom';

'use client';

import React from 'react';
import { useLocation } from 'react-router-dom';

export default function Breadcrumb() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);
  
  if (pathnames.length === 0) {
    return null;
  }

  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-400 mb-4">
      <Link to="/" className="flex items-center hover:text-white transition-colors">
        <Home className="w-4 h-4 mr-1" />
        Home
      </Link>
      
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;
        const displayName = name
          .split('-')
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');
        
        return (
          <React.Fragment key={name}>
            <ChevronRight className="w-4 h-4" />
            {isLast ? (
              <span className="text-white font-medium">{displayName}</span>
            ) : (
              <Link to={routeTo} className="text-gray-400 hover:text-white transition-colors">
                {displayName}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
