import React from 'react';
import { ChevronRightIcon, HomeIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

interface BreadcrumbProps {
  items?: Array<{
    name: string;
    href: string;
  }>;
  className?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items = [], className = '' }) => {

  const breadcrumbItems = [
    { name: 'Home', href: '/' },
    ...items
  ];

  return (
    <nav className={`flex items-center space-x-2 text-sm text-gray-500 ${className}`}>
      {breadcrumbItems.map((item, index) => (
        <React.Fragment key={item.href}>
          {index === 0 ? (
            <Link href={item.href} className="flex items-center hover:text-gray-700">
              <HomeIcon className="w-4 h-4 mr-1" />
              {item.name}
            </Link>
          ) : (
            <Link href={item.href} className="hover:text-gray-700">
              {item.name}
            </Link>
          )}
          {index < breadcrumbItems.length - 1 && (
            <ChevronRightIcon className="w-4 h-4 text-gray-400" />
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumb;