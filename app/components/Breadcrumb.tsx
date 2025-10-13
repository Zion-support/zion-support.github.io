import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, ChevronRight } from 'lucide-react';

const Breadcrumb: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const getDisplayName = (name: string) => {
    return name
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <nav className="bg-slate-800/50 backdrop-blur-sm border-b border-cyan-500/20 py-2 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center space-x-2 text-sm">
          <Link
            to="/"
            className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <Home className="w-4 h-4 mr-1" />
            Home
          </Link>

          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;
            const displayName = getDisplayName(name);

            return (
              <React.Fragment key={routeTo}>
                <ChevronRight className="w-4 h-4" />
                {isLast ? (
                  <span className="text-white font-medium">{displayName}</span>
                ) : (
                  <Link
                    to={routeTo}
                    className="text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    {displayName}
                  </Link>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Breadcrumb;