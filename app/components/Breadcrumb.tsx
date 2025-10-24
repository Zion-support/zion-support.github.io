'use client'
import React from 'react';
import { Home, ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  name: string;
  path: string;
  icon?: React.ComponentType<{ className?: string }>;
}

interface BreadcrumbProps {
  className?: string;
  items?: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ className, items = [] }) => {
  return (
    <nav className={`flex items-center space-x-2 text-sm ${className || ''}`}>
      <Home className="h-4 w-4" />
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <ChevronRight className="h-4 w-4" />
          <span className="text-gray-600">{item.name}</span>
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumb;