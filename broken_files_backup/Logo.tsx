import React from 'react';
import { Link } from 'react-router-dom';
export const Logo: React.FC = () => {
  return (
    <Link to="/" className="flex items-center space-x-2">
      <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-zion-cyan via-blue-500 to-zion-cyan bg-clip-text text-transparent">
        Zion Tech
      </div>
      <div className="text-xs lg:text-sm text-gray-300 font-medium">Group</div>
    </Link>
  );
};