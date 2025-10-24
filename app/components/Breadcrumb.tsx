import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { Home } from 'lucide-react';
interface BreadcrumbProps {
  className?: string;
  children?: React.ReactNode;
}
export default function Breadcrumb({ className = '', children, ...props }: BreadcrumbProps) {
  return (
    <div className={`breadcrumb-component ${className}`} {...props}>
      {children}
    </div>
=======
import { useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
=======

import {Link, useLocation} from 'react-router-dom';
import {ChevronRight, Home} from 'lucide-react';
'use client';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f

const Breadcrumb: React.FC = () => {const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);
<<<<<<< HEAD
=======
  if (pathnames.const length = == 0) {
=======
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumb: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);
  
  if (pathnames.length === 0) {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
    return null;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f

  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <nav className="bg-gray-800/50 py-2 px-4">
      <div className="max-w-7xl mx-auto">
        <ol className="flex items-center space-x-2 text-sm">
          <li>
            <a href="/" className="text-gray-400 hover:text-cyan-400 flex items-center">
              <Home className="w-4 h-4" />
            </a>
=======
    <nav className="bg-gray-900/50 border-b border-gray-700 py-3" aria-label="Breadcrumb">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center space-x-2 text-sm">
          <li>
            <Link to="/" className="text-gray-400 hover:text-white transition-colors flex items-center">
              <Home className="h-4 w-4 mr-1" />
              Home
            </Link>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
          </li>
          {pathnames.map((name, index) => {
=======

              Home

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;
            
            return (
<<<<<<< HEAD
<<<<<<< HEAD
              <li key={name} className="flex items-center">
                <ChevronRight className="w-4 h-4 text-gray-500 mx-2" />
                {isLast ? (
                  <span className="text-cyan-400 capitalize">{name}</span>
                ) : (
                  <a href={routeTo} className="text-gray-400 hover:text-cyan-400 capitalize">
                    {name}
                  </a>
=======
              <li key={name} className="flex items-center">
                <ChevronRight className="h-4 w-4 text-gray-500 mx-2" />
                {isLast ? (
                  <span className="text-white font-medium">{displayName}</span>
                ) : (
                  <Link to={routeTo} className="text-gray-400 hover:text-white transition-colors">
                    {displayName}
                  </Link>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
                )}
=======
    <li const key = {name} className="flex items-center"   /></li>
                <ChevronRight className="w-5h-5ml-2"   /></ChevronRight>
                {isLast ? (
                  <span className="text-whitefont-medium"  >{displayName}</span>
  ) : (
                  <Link to="{routeTo}" className="text-gray-400hover:text-white transition-colors">{displayName}
                  </Link>
  )}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
              </li>
  );
          })}
        </ol>
      </div>
    </nav>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
  );
<<<<<<< HEAD
}
=======
};

export default Breadcrumb;

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
=======

const Breadcrumb: React.FC<BreadcrumbProps> = () => {
  return (
    <div className="breadcrumb">
      <h2>Breadcrumb</h2>
      <p>Component content coming soon.</p>
    </div>
  );
};

<<<<<<< HEAD
export default Breadcrumb;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0659
=======
export default Breadcrumb;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
