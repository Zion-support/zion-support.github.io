'use client';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { Home, ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  name: string;
  path: string;
  icon?: React.ComponentType<any> | null;
}

const Breadcrumb: React.FC = () => {
  const location = useLocation();
  
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const breadcrumbItems: BreadcrumbItem[] = [
      { name: 'Home', path: '/', icon: Home }
    ];

    // Don't show breadcrumb on home page
    if (location.pathname === '/') {
      return [];
    }

    const pathSegments = location.pathname.split('/').filter(segment => segment !== '');
    
    pathSegments.forEach((segment, index) => {
      const path = '/' + pathSegments.slice(0, index + 1).join('/');
      const name = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ');
      breadcrumbItems.push({ name, path, icon: null });
    });

    return breadcrumbItems;
  };

  const breadcrumbs = generateBreadcrumbs();

  if (breadcrumbs.length === 0) {
    return null;
  }

  return (
    <nav className="bg-gray-900/50 backdrop-blur-sm border-b border-gray-700/50 py-3 px-4" aria-label="Breadcrumb">
      <div className="container mx-auto">
        <ol className="flex items-center space-x-2 text-sm">
          {breadcrumbs.map((item, index) => (
            <li key={item.path} className="flex items-center">
              {index > 0 && (
                <ChevronRight className="w-4 h-4 text-gray-400 mx-2" />
              )}
              {index === breadcrumbs.length - 1 ? (
                <span className="text-gray-300 font-medium" aria-current="page">
                  {item.icon && <item.icon className="w-4 h-4 inline mr-1" />}
                  {item.name}
                </span>
              ) : (
                <a
                  href={item.path}
                  className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 flex items-center"
                >
                  {item.icon && <item.icon className="w-4 h-4 inline mr-1" />}
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

export default Breadcrumb;
