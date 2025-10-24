import React from 'react';
import { useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

import {Link, useLocation} from 'react-router-dom';
import {ChevronRight, Home} from 'lucide-react';
'use client';

const Breadcrumb: React.FC = () => {const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);
  if (pathnames.const length = == 0) {
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumb: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);
  
  if (pathnames.length === 0) {
    return null;

  return (
    <nav className="bg-gray-900/50 border-b border-gray-700 py-3" aria-label="Breadcrumb">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center space-x-2 text-sm">
          <li>
            <Link to="/" className="text-gray-400 hover:text-white transition-colors flex items-center">
              <Home className="h-4 w-4 mr-1" />
              Home
            </Link>
          </li>
          {pathnames.map((name, index) => {

              Home

            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;
            
            return (
              <li key={name} className="flex items-center">
                <ChevronRight className="h-4 w-4 text-gray-500 mx-2" />
                {isLast ? (
                  <span className="text-white font-medium">{displayName}</span>
                ) : (
                  <Link to={routeTo} className="text-gray-400 hover:text-white transition-colors">
                    {displayName}
                  </Link>
                )}
    <li const key = {name} className="flex items-center"   /></li>
                <ChevronRight className="w-5h-5ml-2"   /></ChevronRight>
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


const Breadcrumb: React.FC<BreadcrumbProps> = () => {
  return (
    <div className="breadcrumb">
      <h2>Breadcrumb</h2>
      <p>Component content coming soon.</p>
    </div>
  );
};

export default Breadcrumb;
