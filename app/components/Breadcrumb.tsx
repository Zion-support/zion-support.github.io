'use client';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumb: React.FC = () => {
  const location = useLocation();
  
  // Generate breadcrumb items based on current path
  const generateBreadcrumbs = () => {
    const pathSegments = location.pathname.split('/').filter(segment => segment !== '');
    const breadcrumbs = [{ name: 'Home', path: '/' }];
    
    let currentPath = '';
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      const name = segment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      breadcrumbs.push({ name, path: currentPath });
    });
    
    return breadcrumbs;
  };

  const breadcrumbItems = generateBreadcrumbs();

  // Don't show breadcrumb on home page
  if (location.pathname === '/') {
    return null;
  }

  return (
    <nav aria-label="Breadcrumb" className="bg-slate-800/50 backdrop-blur-sm border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center space-x-2 text-sm py-3">
          {breadcrumbItems.map((item, index) => (
            <li key={item.path} className="flex items-center">
              {index > 0 && (
                <ChevronRight className="w-4 h-4 text-gray-400 mx-2" />
              )}
              <a
                href={item.path}
                className={`flex items-center ${
                  index === breadcrumbItems.length - 1
                    ? 'text-cyan-400 font-medium'
                    : 'text-gray-300 hover:text-cyan-400 transition-colors'
                }`}
              >
                {index === 0 && <Home className="w-4 h-4 mr-1" />}
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