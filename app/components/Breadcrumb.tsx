<<<<<<< HEAD
import React from 'react';
import { Link } from 'react-router-dom';
'use client;

import React from 'react;

import { useLocation } from 'react-router-dom;

import { ChevronRight, Home } from 'lucide-react;

import { Link } from react-router-dom;

interface BreadcrumbItem {}
  name: string;

  href: string;

  current?: boolean;

interface BreadcrumbProps {
  items: Array<{
    label: string;
    href?: string;
  }>;
  className?: string;
}
export default function Breadcrumb({ items, className = '' }: BreadcrumbProps) {
  return (
    <div>
  )
    </div>
  );
  );
  )
    <nav className={`breadcrumb ${className}`} aria-label="Breadcrumb">"
      <ol className="flex space-x-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">"
            {index > 0 && <span className="mx-2">/</span>}
            {item.href ? (
              <Link to={item.href} className="text-blue-600 hover:text-blue-800">
                {item.label}
              </Link>
            ) : (
              <span className="text-gray-500">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
const Breadcrumb: React.FC = () => {
  const location = useLocation();;;

  const generateBreadcrumbs = (): BreadcrumbItem[] => {;;;

    const pathSegments = location.pathname.split('/').filter(segment => segment !== );;

  const generateBreadcrumbs = (): BreadcrumbItem[] => {}
    const pathSegments = location.pathname.split('/').filter(segment => segment !== '');
    const breadcrumbs: BreadcrumbItem[] = [
      { name: 'Home', href: '/ }'

    ];

    let currentPath = ;;

    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment};

      const isLast = index === pathSegments.length - 1;;


    return breadcrumbs;

  };

  const breadcrumbs = generateBreadcrumbs();;

  // Dont show breadcrumb on home page
  if (location.pathname === '/) {

    <nav className="bg-gray-900/50 backdrop-blur-sm border-b border-gray-700/50" aria-label="Breadcrumb>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8>
        <ol className="flex items-center space-x-2 py-3 text-sm>
          {breadcrumbs.map((item, index) => (

            <li key={item.href} className="flex items-center>
              {index > 0 && (

                <ChevronRight className="w-4 h-4 text-gray-400 mx-2" aria-hidden="true />
              )}

              {index === 0 ? (


}
export default Breadcrumb;
=======
'use client';
import React from 'react';

export default function ComponentsPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Components</h1>
        <p className="text-gray-300 text-lg">
          This page is under development.
        </p>
      </div>
    </div>
  );
}
>>>>>>> cursor/fix-errors-and-merge-to-main-1a0a
