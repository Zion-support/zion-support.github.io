import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

const Breadcrumb: React.FC = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(segment => segment !== '');

  if (pathSegments.length === 0) {
    return null;
  }

  return (
    <nav className="bg-black/20 backdrop-blur-md border-b border-white/10 py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center space-x-2 text-sm">
          <li>
            <Link to="/" className="text-gray-400 hover:text-white transition-colors">
              <Home className="h-4 w-4" />
            </Link>
          </li>
          {pathSegments.map((segment, index) => {
            const href = '/' + pathSegments.slice(0, index + 1).join('/');
            const isLast = index === pathSegments.length - 1;
            const displayName = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ');

            return (
              <li key={href} className="flex items-center space-x-2">
                <ChevronRight className="h-4 w-4 text-gray-400" />
                {isLast ? (
                  <span className="text-white font-medium">{displayName}</span>
                ) : (
                  <Link to={href} className="text-gray-400 hover:text-white transition-colors">
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