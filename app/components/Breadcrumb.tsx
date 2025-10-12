import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
'use client';

const Breadcrumb: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);
  
  if (pathnames.length === 0) {
    return null;
  }

  return (
    <nav className="bg-gray-900/50 border-b border-gray-700 py-3" aria-label="Breadcrumb">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center space-x-2">
          <li>
            <Link to="/" className="text-gray-400 hover:text-white transition-colors flex items-center">
              <Home className="w-5 h-5 mr-1" />
              Home
            </Link>
          </li>
          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;
            const displayName = name
              .split('-')
              .map(word => word.charAt(0).toUpperCase() + word.slice(1))
              .join(' ');
            return (
              <li key={name} className="flex items-center">
                <ChevronRight className="w-5 h-5 mx-2 text-gray-400" />
                {isLast ? (
                  <span className="text-white font-medium">{displayName}</span>
                ) : (
                  <Link to={routeTo} className="text-gray-400 hover:text-white transition-colors">
                    {displayName}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumb;