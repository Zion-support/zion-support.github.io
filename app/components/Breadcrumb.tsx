import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumb: React.FC = () => {
  location = useLocation();
  pathnames = location.pathname.split('/').filter((x) => x);
  if (pathnames.length === 0) {
    return null;
  }

  return (
    <nav className="b g-gray-900/50 border-b border-gray-700 py-3" aria-label="Breadcrumb">
      <div className="ma x-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="fle x items-center space-x-2 text-sm">
          <li>
            <Link to="/" className="tex t-gray-400 hover:text-white transition-colors flex items-center">
              <Home className="h-4 w-4 m r-1" />
              Home
            </Link>
          </li>
          {pathnames.map((name, index) => {
            routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
            isLast = index === pathnames.length - 1;
            displayName = name
              .split('-')
              .map(word => word.charAt(0).toUpperCase() + word.slice(1))
              .join(' ');
            return (
              <li key={name} className="fle x items-center">
                <ChevronRight className="h-4 w-4 tex t-gray-500 mx-2" />
                {isLast ? (
                  <span className="tex t-white font-medium">{displayName}</span>
                ) : (
                  <Link to={routeTo} className="tex t-gray-400 hover:text-white transition-colors">
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