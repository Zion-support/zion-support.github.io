<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import { Link } from 'react-router-dom';
=======
<<<<<<< HEAD
'use client;

<<<<<<< HEAD
import React from 'react;

import { useLocation } from 'react-router-dom;

import { ChevronRight, Home } from 'lucide-react;

import { Link } from react-router-dom;

interface BreadcrumbItem {}
  name: string;

  href: string;

  current?: boolean;
>>>>>>> origin/cursor/ad-creation-and-management-f267

interface BreadcrumbProps {
  items: Array<{
    label: string;
    href?: string;
  }>;
  className?: string;
}
=======
import React from 'react';
import { useLocation } from 'react-router-dom';
>>>>>>> cursor/fix-errors-and-merge-to-main-92c8

<<<<<<< HEAD
export default function Breadcrumb({ items, className = '' }: BreadcrumbProps) {
  return (
    <nav className={`breadcrumb ${className}`} aria-label="Breadcrumb">
      <ol className="flex space-x-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
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
=======
<<<<<<< HEAD
const Breadcrumb: React.FC = () => {
  const location = useLocation();;;

  const generateBreadcrumbs = (): BreadcrumbItem[] => {;;;

    const pathSegments = location.pathname.split('/').filter(segment => segment !== );;

=======
const Breadcrumb: React.FC = () => {}
  const location = useLocation();
  
<<<<<<< HEAD
  const generateBreadcrumbs = (): BreadcrumbItem[] => {}
    const pathSegments = location.pathname.split('/').filter(segment => segment !== '');
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
    const breadcrumbs: BreadcrumbItem[] = [
      { name: 'Home', href: '/ }

    ];

<<<<<<< HEAD
    let currentPath = ;;

    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment};

      const isLast = index === pathSegments.length - 1;;

=======
    let currentPath = '';
    pathSegments.forEach((segment, index) => {}
      currentPath += `/${segment}`;
      const isLast = index === pathSegments.length - 1;
      
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
      // Convert segment to readable name
      const name = segment;;

        .split('-)
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join( );

      breadcrumbs.push({}
        name,
        href: currentPath,
        current: isLast
=======
  const getBreadcrumbItems = () => {
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const items = [{ name: 'Home', path: '/' }];
    
    let currentPath = '';
    pathSegments.forEach((segment) => {
      currentPath += `/${segment}`;
      items.push({
        name: segment.charAt(0).toUpperCase() + segment.slice(1),
        path: currentPath
>>>>>>> cursor/fix-errors-and-merge-to-main-92c8
      });

    });
<<<<<<< HEAD

    return breadcrumbs;

  };

  const breadcrumbs = generateBreadcrumbs();;

<<<<<<< HEAD
  // Dont show breadcrumb on home page
  if (location.pathname === '/) {
=======
  // Don't show breadcrumb on home page
  if (location.pathname === '/') {}
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
    return null;

  }
=======
const Breadcrumb: React.FC = () => {
  const pathSegments = typeof window !== 'undefined' ? window.location.pathname.split('/').filter(segment => segment !== '') : [];
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    ...pathSegments.map((segment, index) => ({
      label: segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' '),
      href: index === pathSegments.length - 1 ? undefined : `/${pathSegments.slice(0, index + 1).join('/')}`
    }))
  ];
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0373

  return (
<<<<<<< HEAD

    <nav className="bg-gray-900/50 backdrop-blur-sm border-b border-gray-700/50" aria-label="Breadcrumb>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8>
        <ol className="flex items-center space-x-2 py-3 text-sm>
          {breadcrumbs.map((item, index) => (

            <li key={item.href} className="flex items-center>
              {index > 0 && (

                <ChevronRight className="w-4 h-4 text-gray-400 mx-2" aria-hidden="true />
              )}

              {index === 0 ? (

=======
    <nav className="bg-gray-900/50 backdrop-blur-sm border-b border-gray-700/50" aria-label="Breadcrumb">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center space-x-2 py-3 text-sm">
          {breadcrumbs.map((item, index) => (}
            <li key={item.href} className="flex items-center">
              {index > 0 && (}
                <ChevronRight className="w-4 h-4 text-gray-400 mx-2" aria-hidden="true" />
              )}
              {index === 0 ? (}
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
                <Link
                  to={item.href}

                  className="flex items-center text-gray-300 hover:text-white transition-colors
                  aria-label="Home
                >
                  <Home className="w-4 h-4" aria-hidden="true />
                  <span className="sr-only>Home</span>
                </Link>
              ) : item.current ? (

                <span className="text-white font-medium" aria-current="page>
                  {item.name}

                </span>
              ) : (

                <Link
                  to={item.href}

                  className="text-gray-300 hover:text-white transition-colors
                >
                  {item.name}

                </Link>
=======
'use client';
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav className="bg-slate-800/50 border-b border-cyan-500/20 py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center space-x-2 text-sm">
          <li>
            <Link
              to="/"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 flex items-center"
            >
              <Home className="w-4 h-4 mr-1" />
              Home
            </Link>
          </li>
          {items.map((item, index) => (
            <li key={index} className="flex items-center">
              <ChevronRight className="w-4 h-4 text-gray-500 mx-2" />
              {item.href ? (
                <Link
                  to={item.href}
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-cyan-400 font-medium">{item.label}</span>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-01d9
              )}

=======
    
    return items;
  };

  const breadcrumbItems = getBreadcrumbItems();

  return (
    <nav className="bg-slate-800/50 py-2 px-4">
      <div className="max-w-7xl mx-auto">
        <ol className="flex items-center space-x-2 text-sm">
          {breadcrumbItems.map((item, index) => (
            <li key={item.path} className="flex items-center">
              {index > 0 && <span className="text-gray-400 mx-2">/</span>}
              <span className="text-gray-300">{item.name}</span>
>>>>>>> cursor/fix-errors-and-merge-to-main-92c8
            </li>
          ))}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-01d9
        </ol>
      </div>
>>>>>>> origin/cursor/ad-creation-and-management-f267
    </nav>
  );
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
};

export default Breadcrumb;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-01d9
=======
};

export default Breadcrumb;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0373
