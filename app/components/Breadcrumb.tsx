import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

const Breadcrumb: React.FC = () => {
  const location = useLocation();

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
    return null;
  }

  return (
    <nav className="bg-slate-800/50 backdrop-blur-sm border-b border-cyan-500/20 py-3 px-4 sm:px-6 lg:px-8" aria-label="Breadcrumb">
      <div className="max-w-7xl mx-auto">
        <ol className="flex items-center space-x-2 text-sm">
          {breadcrumbItems.map((item, index) => (
            <li key={item.path} className="flex items-center">
              {index > 0 && (
                <ChevronRight className="w-4 h-4 text-gray-500 mx-2" />
              )}
              {index === breadcrumbItems.length - 1 ? (
                <span className="text-cyan-400 font-medium" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link
                  to={item.path}
                  className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                >
                  {item.icon}
                  <span className="ml-1">{item.name}</span>
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumb;