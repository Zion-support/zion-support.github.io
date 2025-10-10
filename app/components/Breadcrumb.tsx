'use client';
import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumb: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-400 mb-4" aria-label="Breadcrumb">
      <Link to="/" className="flex items-center hover:text-cyan-400 transition-colors">
        <Home className="w-4 h-4 mr-1" />
        Home
      </Link>
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;
        const displayName = name.charAt(0).toUpperCase() + name.slice(1).replace(/-/g, ' ');

        return (
          <React.Fragment key={name}>
            <ChevronRight className="w-4 h-4" />
            {isLast ? (
              <span className="text-white font-medium">{displayName}</span>
            ) : (
              <Link to={routeTo} className="hover:text-cyan-400 transition-colors">
                {displayName}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;