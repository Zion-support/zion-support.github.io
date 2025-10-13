"use client";

import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

export default function Breadcrumb() {
  const location = useLocation();
<<<<<<< HEAD
  const pathnames = location.pathname.split("/").filter((x) => x);

  if (pathnames.length === 0) {
=======
  
  const getBreadcrumbItems = () => {
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const items = [
      { name: 'Home', path: '/', icon: <Home className="w-4 h-4" /> }
    ];

    let currentPath = '';
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      const name = segment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      
      items.push({
        name,
        path: currentPath,
        icon: null
      });
    });

    return items;
  };

  const breadcrumbItems = getBreadcrumbItems();

  if (breadcrumbItems.length <= 1) {
>>>>>>> cursor/analyze-improve-and-deploy-application-a281
    return null;
  }

  return (
<<<<<<< HEAD
    <nav className="flex items-center space-x-2 text-sm text-gray-400 mb-4">
      <Link
        to="/"
        className="flex items-center hover:text-white transition-colors"
      >
        <Home className="w-4 h-4 mr-1" />
        Home
      </Link>

      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;
        const displayName = name
          .split("-")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ");

        return (
          <React.Fragment key={name}>
            <ChevronRight className="w-4 h-4" />
            {isLast ? (
              <span className="text-white font-medium">{displayName}</span>
            ) : (
              <Link
                to={routeTo}
                className="text-gray-400 hover:text-white transition-colors"
              >
                {displayName}
              </Link>
            )}
          </React.Fragment>
        );
      })}
=======
    <nav className="bg-slate-800/30 backdrop-blur-md border-b border-cyan-500/10 py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center space-x-2 text-sm">
          {breadcrumbItems.map((item, index) => (
            <li key={item.path} className="flex items-center">
              {index > 0 && (
                <ChevronRight className="w-4 h-4 text-gray-400 mx-2" />
              )}
              <a
                href={item.path}
                className={`flex items-center space-x-1 ${
                  index === breadcrumbItems.length - 1
                    ? 'text-cyan-400 font-medium'
                    : 'text-gray-300 hover:text-white transition-colors'
                }`}
              >
                {item.icon}
                <span>{item.name}</span>
              </a>
            </li>
          ))}
        </ol>
      </div>
>>>>>>> cursor/analyze-improve-and-deploy-application-a281
    </nav>
  );
}
