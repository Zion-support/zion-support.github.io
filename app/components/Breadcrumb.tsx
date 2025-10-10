<<<<<<< HEAD
'use client';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
interface BreadcrumbItem {}
=======
'use client;

import React from 'react;

import { useLocation } from 'react-router-dom;

import { ChevronRight, Home } from 'lucide-react;

import { Link } from react-router-dom;

interface BreadcrumbItem {
>>>>>>> origin/main
  name: string;

  href: string;

  current?: boolean;

}

<<<<<<< HEAD
const Breadcrumb: React.FC = () => {}
  const location="useLocation();"
  const generateBreadcrumbs = (): BreadcrumbItem[] => {}
    const pathSegments = location.pathname.split('/').filter(segment => segment !== '');
    const breadcrumbs: BreadcrumbItem[] = []
      { name: 'Home', href: '/' }
    ];
    let currentPath="'';"
    pathSegments.forEach((segment, index) => {}
      currentPath += `/${segment}`;
      const isLast = index === pathSegments.length - 1;
      // Convert segment to readable name;
      const name="segment;"
        .split('-')
        .map(word = "> word.charAt(0).toUpperCase() + word.slice(1))"
        .join(' ');
      breadcrumbs.push({}
=======
const Breadcrumb: React.FC = () => {
  const location = useLocation();;;

  const generateBreadcrumbs = (): BreadcrumbItem[] => {;;;

    const pathSegments = location.pathname.split('/').filter(segment => segment !== );;

    const breadcrumbs: BreadcrumbItem[] = [
      { name: 'Home', href: '/ }

    ];

    let currentPath = ;;

    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment};

      const isLast = index === pathSegments.length - 1;;

      // Convert segment to readable name
      const name = segment;;

        .split('-)
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join( );

      breadcrumbs.push({
>>>>>>> origin/main
        name,
        href: currentPath,
        current: isLast;
      });

    });
    return breadcrumbs;

  };
<<<<<<< HEAD
  const breadcrumbs="generateBreadcrumbs();"
  // Don't show breadcrumb on home page;
  if (location.pathname === '/') {}
=======

  const breadcrumbs = generateBreadcrumbs();;

  // Dont show breadcrumb on home page
  if (location.pathname === '/) {
>>>>>>> origin/main
    return null;

  }

  return (
<<<<<<< HEAD
    <nav className="bg-gray-900/50 backdrop-blur-sm border-b border-gray-700/50" aria-label=""Breadcrumb"></nav>"
      <div className=""max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>"
        <ol className=""flex items-center space-x-2 py-3 text-sm"></ol>"
          {breadcrumbs.map((item, index) => (
            <li key={item.href} className=""flex items-center"></li>"
              {index > 0 && (
                <ChevronRight className="w-4 h-4 text-gray-400 mx-2" aria-hidden=""true" /></ChevronRight>"
=======

    <nav className="bg-gray-900/50 backdrop-blur-sm border-b border-gray-700/50" aria-label="Breadcrumb>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8>
        <ol className="flex items-center space-x-2 py-3 text-sm>
          {breadcrumbs.map((item, index) => (

            <li key={item.href} className="flex items-center>
              {index > 0 && (

                <ChevronRight className="w-4 h-4 text-gray-400 mx-2" aria-hidden="true />
>>>>>>> origin/main
              )}

              {index === 0 ? (
<<<<<<< HEAD
                <Link to = "{item.href}></Link>"
                  className=""flex items-center text-gray-300 hover:text-white transition-colors""
                  aria-label=""Home">"
                  <Home className="w-4 h-4" aria-hidden=""true" /></Home>"
                  <span className=""sr-only">Home</span>"
                </Link>
              ) : item.current ? (
                <span className="text-white font-medium" aria-current=""page"></span>"
=======

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
>>>>>>> origin/main
                  {item.name}

                </span>
              ) : (
<<<<<<< HEAD
                <Link to = "{item.href}></Link>"
                  className=""text-gray-300 hover:text-white transition-colors">"
=======

                <Link
                  to={item.href}

                  className="text-gray-300 hover:text-white transition-colors
                >
>>>>>>> origin/main
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
<<<<<<< HEAD
export default Breadcrumb;
=======

export default Breadcrumb;
>>>>>>> origin/main
