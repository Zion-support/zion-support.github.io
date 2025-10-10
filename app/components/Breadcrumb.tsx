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

  // Build breadcrumb items from path segments
  let currentPath = '';
  pathSegments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    const name = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ');
    breadcrumbItems.push({
      name,
      path: currentPath,
      icon: null
    });
  });

  return (
    <nav className="bg-slate-800/50 backdrop-blur-sm border-b border-white/10 py-3" aria-label="Breadcrumb">
      <div className="container mx-auto px-4">
        <ol className="flex items-center space-x-2 text-sm">
          {breadcrumbItems.map((item, index) => (
            <li key={item.path} className="flex items-center">
              {index > 0 && (
                <ChevronRight className="w-4 h-4 text-gray-400 mx-2" aria-hidden="true" />
              )}
              {index === breadcrumbItems.length - 1 ? (
                <span className="text-cyan-400 font-medium" aria-current="page">
                  {item.icon && <item.icon className="w-4 h-4 mr-1 inline" />}
                  {item.name}
                </span>
              ) : (
                <a
                  href={item.path}
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                >
                  {item.icon && <item.icon className="w-4 h-4 mr-1 inline" />}
                  {item.name}
                </a>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

Breadcrumb.displayName = 'Breadcrumb';

export default Breadcrumb;