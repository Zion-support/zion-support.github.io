import React from 'react';
import { Link } from 'react-router-dom';
import { MainNavigation } from './MainNavigation';
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
export function AppHeader() {
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
=======
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
    </header>);

'"
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
