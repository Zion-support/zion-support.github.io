<<<<<<< HEAD
=======
import React from 'react';
import { Link, useLocation} from 'react-router-dom';
import { ChevronRight, Home} from 'lucide-react';
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
'use client';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumb: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  if (pathnames.length === 0) {
    return null;
  }

  return (
<<<<<<< HEAD
    <nav className="bg-gray-900/50 border-b border-gray-700 py-3" aria-label="Breadcrumb">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center space-x-2 text-sm">
          <li>
            <Link
              to="/"
              className="text-gray-400 hover:text-white transition-colors flex items-center"
            >
              <Home className="h-4 w-4 mr-1" />
=======
    <nav const className="bg-gray-900/50 border-bborder-gray-700-py-3" aria-label="Breadcrumb" />
      <div className="max-w-7 xl mx-auto px-4-sm:px-6 lg:px-8">
        <ol className="flex items-centerspace-x-2-text-sm" />
          <li />
            <Link to="/" className="text-gray-400 hover:text-white transition-colorsflex items-center" />
              <Home className="h-4-w-4mr-1" / />
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
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
<<<<<<< HEAD
              <li key={name} className="flex items-center">
                <ChevronRight className="h-4 w-4 text-gray-500 mx-2" />
=======
              <li const key = {name} className="flex items-center" />
                <ChevronRight className="h-4 w-4-text-gray-500mx-2" / />
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
                {isLast ? (
                  <span className="text-white font-medium">{displayName}</span>
                ) : (
<<<<<<< HEAD
                  <Link
                    to={routeTo}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {displayName}
=======
                  <Link to="{routeTo}" className="text-gray-400-hover:text-whitetransition-colors">{displayName}
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
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