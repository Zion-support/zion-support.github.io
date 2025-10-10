'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  name: string;
  path: string;
  icon?: React.ComponentType<any>;
}

const Breadcrumb: React.FC = () => {
  const pathname = usePathname();
  const breadcrumbItems: BreadcrumbItem[] = [
    { name: 'Home', path: '/', icon: Home }
  ];

  // Parse pathname to create breadcrumb items
  const pathSegments = pathname.split('/').filter(segment => segment !== '');
  
  pathSegments.forEach((segment, index) => {
    const path = '/' + pathSegments.slice(0, index + 1).join('/');
    const name = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ');
    breadcrumbItems.push({ name, path, icon: null });
  });

  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
      <ol className="flex items-center space-x-2">
        {breadcrumbItems.map((item, index) => (
          <li key={item.path} className="flex items-center">
            {index > 0 && (
              <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
            )}
            <Link
              href={item.path}
              className="flex items-center hover:text-purple-600 transition-colors"
            >
              {item.icon && <item.icon className="w-4 h-4 mr-1" />}
              <span>{item.name}</span>
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;