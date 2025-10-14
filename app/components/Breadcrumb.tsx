import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumb: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  if (pathnames.length === 0) {
    return null;
  }

  const breadcrumbItems = [
    { name: 'Home', href: '/' }
  ];

  let currentPath = '';
  pathnames.forEach((pathname, index) => {
    currentPath += `/${pathname}`;
    const name = pathname
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    
    breadcrumbItems.push({
      name,
      href: currentPath
    });
  });

const Breadcrumb = () => {
  return ("
    <div className="p-4">"
      <h2 className="text-2xl font-bold text-white mb-4">Breadcrumb</h2>"
      <p className="text-gray-300">
        This is a placeholder component for Breadcrumb.
      </p>
    </div>
  );
};
"
export default Breadcrumb;
