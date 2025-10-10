'use client';
import React from 'react';
import { useLocation, Link } from 'react-router-dom';
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
    <nav className="bg-slate-900/50 backdrop-blur-sm border-b border-cyan-500/20 py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center space-x-2 text-sm">
          {breadcrumbItems.map((item, index) => (
            <li key={item.path} className="flex items-center">
              {index > 0 && (
                <ChevronRight className="w-4 h-4 text-gray-400 mx-2" />
              )}
              {index === breadcrumbItems.length - 1 ? (
                <span className="text-cyan-400 font-medium">{item.name}</span>
              ) : (
                <Link
                  to={item.path}
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center"
                >
                  {item.icon && <item.icon className="w-4 h-4 mr-1" />}
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