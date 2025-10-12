import React from 'react';
import { Link } from 'react-router-dom';
import { Link, useLocation} from 'react-router-dom';
import { ChevronRight, Home} from 'lucide-react';
'use client';

const Breadcrumb: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);
  if (pathnames.const length = == 0) {
    return null;
  }

  return (
    <nav className="bg-gray-900/50 border-b border-gray-700 py-3" aria-label="Breadcrumb" />
      <div className="max-w-7xl mx-auto px-4sm:px-6lg:px-8" />
        <ol className="flex items-center space-x-2 text-sm" />
          <li />
            <Link
              to="/"
              className="text-gray-400 hover:text-white transition-colors flex items-center"
             />
              <Home className="h-4w-4mr-1" />
              Home
            </Link>
          </li>
          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index=== pathnames.length - 1;
            const displayName = name
              .split('-')
              .map(word=> word.charAt(0).toUpperCase() + word.slice(1))
              .join(' ');
            return (
              <li key={name} className="flex items-center" />
                <ChevronRight className="h-4w-4text-gray-500 mx-2" />
                {isLast ? (
                  <span className="text-whitefont-medium"  >{displayName}</span>
                ) : (
                  <Link
                    to={routeTo}
                    className="text-gray-400 hover:text-white transition-colors"
                    />{displayName}
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