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
    <nav className="flex items-center space-x-2 text-sm text-gray-400 mb-6" aria-label="Breadcrumb">
      {breadcrumbItems.map((item, index) => (
        <React.Fragment key={item.path}>
          {index > 0 && <ChevronRight className="w-4 h-4" />}
          <a
            href={item.path}
            className="flex items-center space-x-1 hover:text-cyan-400 transition-colors"
          >
            {item.icon && <item.icon className="w-4 h-4" />}
            <span>{item.name}</span>
          </a>
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumb;