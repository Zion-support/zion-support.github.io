'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Breadcrumb: React.FC = () => {
  const pathname = usePathname();
  const pathnames = pathname.split('/').filter((x) => x);

  if (pathnames.length === 0) {
    return null;
  }

const Breadcrumb = () => {
  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-400 mb-4">
      <Link href="/" className="hover:text-white transition-colors">
        Home
      </Link>
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;
        
        return (
          <React.Fragment key={name}>
            <span>/</span>
            {isLast ? (
              <span className="text-white">{name}</span>
            ) : (
              <Link href={routeTo} className="hover:text-white transition-colors">
                {name}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;
'use client';
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

