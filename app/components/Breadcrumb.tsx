import React from 'react';
import { useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumb: React.FC = () => {
  const location = useLocation();
  
  const pathSegments = location.pathname
    .split('/')
    .filter(segment => segment !== '')
    .map(segment => ({
      name: segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' '),
      path: `/${segment}`
    }));

  if (pathSegments.length === 0) {
    return null;
  }

  return (
    <nav className="bg-gray-50 px-4 py-2 text-sm" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2">
        <li>
          <a href="/" className="text-gray-500 hover:text-gray-700 flex items-center">
            <Home className="w-4 h-4 mr-1" />
            Home
          </a>
        </li>
        {pathSegments.map((segment, index) => (
          <li key={segment.path} className="flex items-center">
            <ChevronRight className="w-4 h-4 text-gray-400 mx-2" />
            {index === pathSegments.length - 1 ? (
              <span className="text-gray-900 font-medium">{segment.name}</span>
            ) : (
              <a href={segment.path} className="text-gray-500 hover:text-gray-700">
                {segment.name}
              </a>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;