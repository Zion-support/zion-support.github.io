'use client';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  name: string;
  path: string;
  icon?: React.ReactNode;
}

const Breadcrumb: React.FC = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(segment => segment !== '');
  
  const breadcrumbItems: BreadcrumbItem[] = [
    { name: 'Home', path: '/', icon: <Home className="w-4 h-4" /> }
  ];

  pathSegments.forEach((segment, index) => {
    const path = '/' + pathSegments.slice(0, index + 1).join('/');
    const name = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ');
    breadcrumbItems.push({ name, path, icon: null });
  });

  if (breadcrumbItems.length <= 1) {
    return null;
  }

  return (
    <nav className="bg-slate-800/50 backdrop-blur-md border-b border-cyan-500/20 py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <ol className="flex items-center space-x-2 text-sm">
          {breadcrumbItems.map((item, index) => (
            <li key={item.path} className="flex items-center">
              {index > 0 && (
                <ChevronRight className="w-4 h-4 text-gray-400 mx-2" />
              )}
              {index === breadcrumbItems.length - 1 ? (
                <span className="text-cyan-400 font-medium flex items-center">
                  {item.icon && <span className="mr-1">{item.icon}</span>}
                  {item.name}
                </span>
              ) : (
                <Link
                  to={item.path}
                  className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center"
                >
                  {item.icon && <span className="mr-1">{item.icon}</span>}
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumb;
