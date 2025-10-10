'use client';

import React from 'react';
import { useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BreadcrumbItem {
  name: string;
  href: string;
  current?: boolean;
}

const Breadcrumb: React.FC = () => {
  const location = useLocation();
  
  // Don't show breadcrumb on home page
  if (location.pathname === '/') {
    return null;
  }

  // Generate breadcrumb items from pathname
  const pathSegments = location.pathname.split('/').filter(Boolean);
  const breadcrumbItems: BreadcrumbItem[] = [
    { name: 'Home', href: '/' }
  ];

  let currentPath = '';
  pathSegments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    const isLast = index === pathSegments.length - 1;
    breadcrumbItems.push({
      name: segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' '),
      href: currentPath,
      current: isLast
    });
  });

  return (
    <nav className="flex" aria-label="Breadcrumb">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center space-x-4">
          {breadcrumbItems.map((item, index) => (
            <li key={item.href} className="flex items-center">
              {index > 0 && (
                <ChevronRight className="flex-shrink-0 h-5 w-5 text-gray-400" />
              )}
              {item.current ? (
                <span className="text-gray-500 font-medium">{item.name}</span>
              ) : (
                <Link
                  to={item.href}
                  className="text-cyan-400 hover:text-cyan-300 font-medium"
                >
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