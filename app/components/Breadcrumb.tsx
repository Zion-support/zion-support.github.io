'use client';;
import React from 'react';

const Breadcrumb: React.FC = () => {
  const location = useLocation();
  
  // Don't show breadcrumb on home page
  if (location.pathname === '/') {
    return null;
  }

  const pathSegments = location.pathname.split('/').filter(Boolean);
  
  const breadcrumbItems = [
    { name: 'Home', href: '/', icon: Home }
  ];

  pathSegments.forEach((segment, index) => {
    const href = '/' + pathSegments.slice(0, index + 1).join('/');
    const name = segment
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    
    breadcrumbItems.push({ name, href });
  });

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav 
      className="bg-slate-800/30 border-b border-cyan-500/20 py-3 px-4"
      aria-label="Breadcrumb"
    >
      <div className="max-w-7xl mx-auto">
        <ol className="flex items-center space-x-2 text-sm">
          {breadcrumbItems.map((item, index) => (
            <li key={item.href} className="flex items-center">
              {index > 0 && (
                <ChevronRight className="w-4 h-4 text-gray-400 mx-2" />
              )}
              
              {index === breadcrumbItems.length - 1 ? (
                <span className="text-cyan-400 font-medium" aria-current="page">
                  {item.icon && <item.icon className="w-4 h-4 inline mr-1" />}
                  {item.name}
                </span>
              ) : (
                <a
                  href={item.href}
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 flex items-center"
                >
                  {item.icon && <item.icon className="w-4 h-4 mr-1" />}
                  {item.name}
                </a>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumb;

