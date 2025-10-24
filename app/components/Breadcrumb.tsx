'use client';;
import React from 'react';

interface BreadcrumbProps {
  items: Array<{
    label: string;
    href?: string;
  }>;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-sm text-gray-600">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && <span>/</span>}
          {item.href ? (
            <a href={item.href} className="hover:text-gray-900">
              {item.label}
            </a>
          ) : (
            <span className="text-gray-900">{item.label}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumb;

