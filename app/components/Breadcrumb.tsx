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
  const breadcrumbItems = [
    { name: 'Home', path: '/', icon: Home }
  ];

  pathSegments.forEach((segment, index) => {
    const path = '/' + pathSegments.slice(0, index + 1).join('/');
    const name = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ');
    breadcrumbItems.push({ name, path, icon: null });
  });

  return (
    <nav className="bg-slate-800/50 backdrop-blur-sm border-b border-gray-700 py-2">
      <div className="container mx-auto px-4">
        <ol className="flex items-center space-x-2 text-sm">
          {breadcrumbItems.map((item, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && <ChevronRight className="w-4 h-4 text-gray-400 mx-2" />}
              <a
                href={item.path}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center"
              >
                {item.icon && <item.icon className="w-4 h-4 mr-1" />}
                {item.name}
              </a>
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumb;