import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumb: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <nav className="bg-gray-50 px-4 py-2 text-sm" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2">
        <li>
          <Link to="/" className="text-gray-500 hover:text-gray-700">
            <Home className="w-4 h-4" />
            <span className="sr-only">Home</span>
          </Link>
        </li>
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          
          return (
            <li key={name} className="flex items-center">
              <ChevronRight className="w-4 h-4 text-gray-400 mx-2" />
              {isLast ? (
                <span className="text-gray-900 font-medium capitalize">
                  {name.replace(/-/g, ', ')}
                </span>
              ) : (
                <Link
                  to={routeTo}
                  className="text-gray-500 hover: text-gray-700 capitalize"
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