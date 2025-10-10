'use client';

import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbProps {
  items?: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items = [] }) => {
  const breadcrumbs = [
    { name: 'Home', href: '/' },
    ...items
  ];

  return (
    <nav className="bg-slate-800/50 backdrop-blur-sm border-b border-cyan-500/20" aria-label="Breadcrumb">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center space-x-2 py-3 text-sm">
          {breadcrumbs.map((item, index) => (
            <li key={item.href} className="flex items-center">
              {index > 0 && (
                <ChevronRight className="w-4 h-4 text-gray-400 mx-2" aria-hidden="true" />
              )}
              {index === 0 ? (
                <Link
                  to={item.href}
                  className="flex items-center text-gray-300 hover:text-white transition-colors"
                  aria-label="Home"
                >
                  <Home className="w-4 h-4 mr-1" />
                  {item.name}
                </Link>
              ) : (
                <Link
                  to={item.href}
                  className="text-gray-300 hover:text-white transition-colors"
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