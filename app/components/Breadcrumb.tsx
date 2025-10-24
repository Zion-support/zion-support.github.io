'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumb() {
  const pathname = usePathname();
  const pathnames = pathname.split('/').filter((x) => x);
  
  if (pathnames.length === 0) {
    return null;
  }

  return (
    <nav className="bg-gray-800 text-white py-2 px-4">
      <div className="container mx-auto">
        <ol className="flex items-center space-x-2 text-sm">
          <li>
            <Link href="/" className="flex items-center hover:text-blue-400 transition-colors">
              <Home className="w-4 h-4 mr-1" />
              Home
            </Link>
          </li>
          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;
            
            return (
              <li key={name} className="flex items-center">
                <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
                {isLast ? (
                  <span className="text-gray-300 capitalize">{name.replace(/-/g, ' ')}</span>
                ) : (
                  <Link 
                    href={routeTo} 
                    className="hover:text-blue-400 transition-colors capitalize"
                  >
                    {name.replace(/-/g, ' ')}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}