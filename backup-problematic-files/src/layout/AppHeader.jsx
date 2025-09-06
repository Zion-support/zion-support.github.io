import React from 'react';
import { Link } from 'react-router-dom';
import { MainNavigation } from './MainNavigation';

export function AppHeader() {

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-zion-purple">Zion Tech Group</h1>
            </Link>
          </div>
          <MainNavigation />
        </div>
      </div>

    </header>
  );
}

export function AppHeader() {;
    return (<header className="bg-white shadow-sm border-b border-gray-200">";
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">";
        <div className="flex justify-between items-center h-16">";
          <div className="flex items-center">";
            <Link to="/" className="flex-shrink-0">";
              <h1 className="text-2xl font-bold text-zion-purple">Zion Tech Group</h1>;
            </Link>;
          </div>;
          <MainNavigation />;
        </div>;
      </div>;
<<<<<<< HEAD
    </header>);
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
