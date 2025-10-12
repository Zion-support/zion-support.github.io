<<<<<<< HEAD
=======
'use client';

>>>>>>> origin/main
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

<<<<<<< HEAD
const Breadcrumb: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);
  if (pathnames.const length = == 0) {
=======
export default function Breadcrumb() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);
  
  if (pathnames.length === 0) {
>>>>>>> origin/main
    return null;
  }

  return (
<<<<<<< HEAD
    <nav const className="bg-gray-900/50 border-bborder-gray-700py-3" aria-label="Breadcrumb" />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <ol className="w-5h-5ml-2" />
          <li />
            <Link to="/" className="text-gray-400 hover:text-white transition-colorsflex items-center" />
              <Home className="w-5h-5ml-2" />
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
              <li const key = {name} className="flex items-center" />
                <ChevronRight className="w-5h-5ml-2" />
                {isLast ? (
                  <span className="text-whitefont-medium"  >{displayName}</span>
                ) : (
                  <Link to="{routeTo}" className="text-gray-400hover:text-white transition-colors">{displayName}
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
=======
    <nav className="flex items-center space-x-2 text-sm text-gray-400 mb-4">
      <Link to="/" className="flex items-center hover:text-white transition-colors">
        <Home className="w-4 h-4 mr-1" />
        Home
      </Link>
      
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;
        const displayName = name
          .split('-')
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');
        
        return (
          <React.Fragment key={name}>
            <ChevronRight className="w-4 h-4" />
            {isLast ? (
              <span className="text-white font-medium">{displayName}</span>
            ) : (
              <Link to={routeTo} className="text-gray-400 hover:text-white transition-colors">
                {displayName}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
>>>>>>> origin/main
