'use client';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumb: React.FC = () => {
  const location = useLocation();
  
  // Don't show breadcrumb on home page
  if (location.pathname === '/') {
    return null;
  }

  const pathSegments = location.pathname.split('/').filter(segment => segment !== '');
  
  const formatSegment = (segment: string) => {
    return segment
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <nav className="bg-slate-800/50 backdrop-blur-sm border-b border-cyan-500/20 py-3" aria-label="Breadcrumb">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center space-x-2 text-sm">
          <li>
            <a
              href="/"
              className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 flex items-center"
            >
              <Home className="w-4 h-4 mr-1" />
              Home
            </a>
          </li>
          {pathSegments.map((segment, index) => (
            <li key={index} className="flex items-center">
              <ChevronRight className="w-4 h-4 text-gray-400 mx-2" />
              {index === pathSegments.length - 1 ? (
                <span className="text-white font-medium" aria-current="page">
                  {formatSegment(segment)}
                </span>
              ) : (
                <a
                  href={`/${pathSegments.slice(0, index + 1).join('/')}`}
                  className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                >
                  {formatSegment(segment)}
                </a>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumb;