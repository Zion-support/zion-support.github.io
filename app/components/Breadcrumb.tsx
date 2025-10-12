import React from 'react';
import { useLocation } from 'react-router-dom';

export default function Breadcrumb() {
  const location = useLocation();
  
  if (location.pathname === '/') {
    return null;
  }
  
  return (
    <nav className="bg-gray-800 text-white py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm">
          <a href="/" className="hover:text-gray-300">Home</a>
          <span className="mx-2">/</span>
          <span className="text-gray-300">{location.pathname.slice(1)}</span>
        </p>
      </div>
    </nav>
  );
}