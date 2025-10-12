import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import StructuredData from './StructuredData';

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, className = '' }) => {
  const allItems = [
    { name: 'Home', url: '/' },
    ...items
  ];

  return (
    <>
      <StructuredData type="breadcrumb" data={allItems} />
      <nav className={`flex items-center space-x-1 text-sm ${className}`} aria-label="Breadcrumb">
        <ol className="flex items-center space-x-1">
          {allItems.map((item, index) => (
            <li key={item.url} className="flex items-center">
              {index > 0 && (
                <ChevronRight className="w-4 h-4 text-gray-400 mx-2" />
              )}
              {index === 0 ? (
                <Link
                  to={item.url}
                  className="flex items-center text-gray-500 hover:text-gray-700 transition-colors"
                >
                  <Home className="w-4 h-4 mr-1" />
                  {item.name}
                </Link>
              ) : index === allItems.length - 1 ? (
                <span className="text-gray-900 font-medium" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link
                  to={item.url}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
};

export default Breadcrumb;