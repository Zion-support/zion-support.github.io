'use client';
import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumb: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <nav className="bg-gray-800 py-2 px-4" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2 text-sm">
        <li>
          <Link to="/" className="text-gray-400 hover:text-white flex items-center">
            <Home className="w-4 h-4 mr-1" />
            Home
          </Link>
        </li>
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          
          return (
            <li key={name} className="flex items-center">
              <ChevronRight className="w-4 h-4 text-gray-400 mx-2" />
              {isLast ? (
                <span className="text-white font-medium capitalize">
                  {name.replace(/-/g, ' ')}
                </span>
              ) : (
                <Link 
                  to={routeTo} 
                  className="text-gray-400 hover:text-white capitalize"
                >
                  {name.replace(/-/g, ' ')}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;