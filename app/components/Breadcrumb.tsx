'use client'
import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom'
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumb: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <nav className="bg-slate-800/50 backdrop-blur-sm border-b border-cyan-500/20 py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-2 text-sm">
          <Link to="/" className="text-gray-400 hover:text-cyan-400 transition-colors">
            <Home className="w-4 h-4" />
          </Link>
          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;
            
            return (
              <React.Fragment key={name}>
                <ChevronRight className="w-4 h-4 text-gray-500" />
                {isLast ? (
                  <span className="text-cyan-400 font-medium capitalize">
                    {name.replace(/-/g, ' ')}
                  </span>
                ) : (
                  <Link
                    to={routeTo}
                    className="text-gray-400 hover:text-cyan-400 transition-colors capitalize"
                  >
                    {name.replace(/-/g, ' ')}
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