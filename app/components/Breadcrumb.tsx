import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumb: React.FC = () => {
  const location = useLocation();
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

export default function Breadcrumb() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  if (pathnames.length === 0) {
    return null;
  }

  const pathSegments = location.pathname
    .split('/')
    .filter(segment => segment !== '')
    .map((segment, index, array) => ({
      name: segment.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
      path: '/' + array.slice(0, index + 1).join('/'),
      isLast: index === array.length - 1
    }));

  if (pathSegments.length === 0) {
    return null;
  }

const BreadcrumbPage = () => {
  return (
    <nav className="bg-slate-800/50 backdrop-blur-sm border-b border-white/10 py-2" aria-label="Breadcrumb">
    <nav className="flex items-center space-x-2 text-sm text-gray-400 mb-4">
      <Link
        to="/"
        className="flex items-center hover:text-white transition-colors"
      >
        <Home className="w-4 h-4 mr-1" />
        Home
      </Link>
      {pathSegments.map((segment, index) => (
        <React.Fragment key={segment.path}>
          <ChevronRight className="w-4 h-4" />
          {segment.isLast ? (
            <span className="text-white font-medium">{segment.name}</span>
          ) : (
            <Link
              to={segment.path}
              className="hover:text-white transition-colors"
            >
              {segment.name}
            </Link>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}
