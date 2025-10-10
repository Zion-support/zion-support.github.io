'use client';

import React from 'react';
import { useLocation } from 'react-router-dom';

const Breadcrumb: React.FC = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(Boolean);

  if (pathSegments.length === 0) {
    return null;
  }

  return (
    <nav className="bg-gray-50 px-4 py-2" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2 text-sm text-gray-600">
        <li>
          <a href="/" className="hover:text-blue-600">
            Home
          </a>
        </li>
        {pathSegments.map((segment, index) => (
          <li key={index} className="flex items-center">
            <span className="mx-2">/</span>
            <span className="capitalize">
              {segment.replace('-', ' ')}
            </span>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;