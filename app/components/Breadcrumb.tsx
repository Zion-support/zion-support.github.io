'use client';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

const Breadcrumb: React.FC = () => {
  const location = useLocation();
  
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const breadcrumbs: BreadcrumbItem[] = [
      { label: 'Home', href: '/' }
    ];

    let currentPath = '';
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      const isLast = index === pathSegments.length - 1;
      
      // Convert segment to readable label
      const label = segment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

      breadcrumbs.push({
        label,
        href: isLast ? undefined : currentPath
      });
    });

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  // Don't show breadcrumb on home page
  if (breadcrumbs.length <= 1) {
    return null;
  }

  return (
    <nav 
      className="bg-gray-800/50 backdrop-blur-sm border-b border-gray-700 py-2 px-4"
      aria-label="Breadcrumb"
    >
      <div className="max-w-7xl mx-auto">
        <ol className="flex items-center space-x-2 text-sm">
          {breadcrumbs.map((item, index) => (
            <li key={index} className="flex items-center">
              {index === 0 ? (
                <Home className="w-4 h-4 text-gray-400" />
              ) : (
                <ChevronRight className="w-4 h-4 text-gray-500 mx-2" />
              )}
              
              {item.href ? (
                <a
                  href={item.href}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                  aria-current={index === breadcrumbs.length - 1 ? 'page' : undefined}
                >
                  {item.label}
                </a>
              ) : (
                <span 
                  className="text-white font-medium"
                  aria-current="page"
                >
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumb;