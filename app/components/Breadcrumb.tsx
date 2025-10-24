'use client';
import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD

const Breadcrumb: React.FC = () => {
  return null;
=======
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-400 py-4" aria-label="Breadcrumb">
      <Link to="/" className="flex items-center hover:text-cyan-400 transition-colors">
        <Home className="w-4 h-4 mr-1" />
        Home
      </Link>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <ChevronRight className="w-4 h-4" />
          {item.href ? (
            <Link to={item.href} className="hover:text-cyan-400 transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-white">{item.label}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
>>>>>>> cursor/delete-records-bf70
};

export default Breadcrumb;
=======
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumb: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <nav className="bg-slate-800/50 backdrop-blur-lg border-b border-white/10 py-4">
      <div className="container mx-auto px-4">
        <ol className="flex items-center space-x-2 text-sm">
          <li>
            <Link
              to="/"
              className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors"
            >
              <Home className="w-4 h-4 mr-1" />
              Home
            </Link>
          </li>
          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;
            const displayName = name.charAt(0).toUpperCase() + name.slice(1).replace(/-/g, ' ');

            return (
              <li key={name} className="flex items-center">
                <ChevronRight className="w-4 h-4 text-gray-400 mx-2" />
                {isLast ? (
                  <span className="text-white font-medium">{displayName}</span>
                ) : (
                  <Link
                    to={routeTo}
                    className="text-gray-300 hover:text-cyan-400 transition-colors"
                  >
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
>>>>>>> cursor/delete-records-30ea
