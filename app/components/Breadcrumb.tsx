<<<<<<< HEAD
'use client';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumb: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <nav className="bg-slate-800/50 backdrop-blur-sm border-b border-cyan-500/20 py-2 px-4">
      <div className="max-w-7xl mx-auto">
        <ol className="flex items-center space-x-2 text-sm">
          <li>
            <Link to="/" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              <Home className="w-4 h-4" />
            </Link>
          </li>
          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;
            const displayName = name.charAt(0).toUpperCase() + name.slice(1).replace(/-/g, ' ');

            return (
              <li key={name} className="flex items-center space-x-2">
                <ChevronRight className="w-4 h-4 text-gray-400" />
                {isLast ? (
                  <span className="text-gray-300">{displayName}</span>
                ) : (
                  <Link to={routeTo} className="text-cyan-400 hover:text-cyan-300 transition-colors">
                    {displayName}
                  </Link>
                )}
              </li>
            );
          })}
=======
'use client'
import React from 'react'
import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'

const Breadcrumb: React.FC = () => {
  const pathSegments = typeof window !== 'undefined' ? window.location.pathname.split('/').filter(segment => segment !== '') : [];
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    ...pathSegments.map(segment => ({
      label: segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' '),
      href: null
    }))
  ]

  return (
    <nav className="bg-slate-800/50 backdrop-blur-sm border-b border-cyan-500/20" aria-label="Breadcrumb">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center space-x-2 py-3 text-sm">
          {breadcrumbItems.map((item, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && (
                <ChevronRight className="w-4 h-4 text-gray-400 mx-2" />
              )}
              {item.href ? (
                <Link
                  href={item.href}
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 flex items-center"
                >
                  {index === 0 && <Home className="w-4 h-4 mr-1" />}
                  {item.label}
                </Link>
              ) : (
                <span className="text-cyan-400 font-medium flex items-center">
                  {index === 0 && <Home className="w-4 h-4 mr-1" />}
                  {item.label}
                </span>
              )}
            </li>
          ))}
>>>>>>> origin/main
        </ol>
      </div>
    </nav>
  );
};

<<<<<<< HEAD
export default Breadcrumb;
=======
export default Breadcrumb
>>>>>>> origin/main
