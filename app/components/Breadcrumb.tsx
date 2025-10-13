<<<<<<< HEAD
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

export default function Breadcrumb() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  if (pathnames.length === 0) {
<<<<<<< HEAD
=======
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumb: React.FC = () => {
  const location = useLocation();
  
  const pathSegments = location.pathname
    .split('/')
    .filter(segment => segment !== '')
    .map((segment, index, array) => ({
      name: segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' '),
      path: '/' + array.slice(0, index + 1).join('/'),
      isLast: index === array.length - 1
    }));

  if (pathSegments.length === 0) {
>>>>>>> cursor/analyze-improve-and-deploy-application-c573
=======
>>>>>>> cursor/analyze-improve-and-deploy-application-9c39
    return null;
  }

  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-400 mb-4">
      <Link
        to="/"
        className="flex items-center hover:text-white transition-colors"
      >
        <Home className="w-4 h-4 mr-1" />
        Home
      </Link>

      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;
        const displayName = name
          .split("-")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ");

        return (
          <React.Fragment key={name}>
            <ChevronRight className="w-4 h-4" />
            {isLast ? (
              <span className="text-white font-medium">{displayName}</span>
            ) : (
              <Link
                to={routeTo}
                className="text-gray-400 hover:text-white transition-colors"
              >
                {displayName}
              </Link>
            )}
          </React.Fragment>
        );
      })}
<<<<<<< HEAD
    </nav>
  );
}
=======
    <nav className="bg-slate-800/50 backdrop-blur-sm border-b border-white/10 py-2" aria-label="Breadcrumb">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center space-x-2 text-sm">
          <li>
            <Link
              to="/"
              className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center"
            >
              <Home className="w-4 h-4" />
              <span className="sr-only">Home</span>
            </Link>
          </li>
          {pathSegments.map((segment, index) => (
            <li key={segment.path} className="flex items-center">
              <ChevronRight className="w-4 h-4 text-gray-500 mx-2" />
              {segment.isLast ? (
                <span className="text-cyan-400 font-medium" aria-current="page">
                  {segment.name}
                </span>
              ) : (
                <Link
                  to={segment.path}
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  {segment.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
=======
>>>>>>> cursor/analyze-improve-and-deploy-application-9c39
    </nav>
  );
};

export default Breadcrumb;
>>>>>>> cursor/analyze-improve-and-deploy-application-c573
