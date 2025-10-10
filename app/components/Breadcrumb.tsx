import React from 'react';
import { useLocation } from 'react-router-dom';

const Breadcrumb: React.FC = () => {
  const location = useLocation();
  
  const getBreadcrumbItems = () => {
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const items = [{ name: 'Home', path: '/' }];
    
    let currentPath = '';
    pathSegments.forEach((segment) => {
      currentPath += `/${segment}`;
      items.push({
        name: segment.charAt(0).toUpperCase() + segment.slice(1),
        path: currentPath
      });
    });
    
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
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumb;
