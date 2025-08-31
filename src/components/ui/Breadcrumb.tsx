import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  name: string;
  path: string;
}

export const Breadcrumb: React.FC = () => {
  const location = useLocation();
  
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const pathnames = location.pathname.split('/').filter((x) => x);
    const breadcrumbs: BreadcrumbItem[] = [];
    
    let currentPath = '';
    
    pathnames.forEach((name, index) => {
      currentPath += `/${name}`;
      
      // Convert kebab-case to Title Case
      const displayName = name
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      
      breadcrumbs.push({
        name: displayName,
        path: currentPath,
      });
    });
    
    return breadcrumbs;
  };
  
  const breadcrumbs = generateBreadcrumbs();
  
  if (breadcrumbs.length === 0) {
    return null;
  }
  
  return (
    <nav className="flex items-center space-x-2 text-sm text-zion-slate-light mb-6 px-4 lg:px-8">
      <Link 
        to="/" 
        className="flex items-center text-zion-cyan hover:text-zion-cyan-light transition-colors"
      >
        <Home className="w-4 h-4 mr-1" />
        Home
      </Link>
      
      {breadcrumbs.map((breadcrumb, index) => (
        <React.Fragment key={breadcrumb.path}>
          <ChevronRight className="w-4 h-4 text-zion-slate-dark" />
          {index === breadcrumbs.length - 1 ? (
            <span className="text-zion-slate-light font-medium">
              {breadcrumb.name}
            </span>
          ) : (
            <Link
              to={breadcrumb.path}
              className="text-zion-cyan hover:text-zion-cyan-light transition-colors"
            >
              {breadcrumb.name}
            </Link>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};