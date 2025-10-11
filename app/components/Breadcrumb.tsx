'use client';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { ChevronRight, Home, Brain, Cloud, Cpu, Zap } from 'lucide-react';

interface BreadcrumbItem {
  name: string;
  path: string;
  icon?: React.ComponentType<{ className?: string }>;
}

const Breadcrumb: React.FC = () => {
  const location = useLocation();
  
  const getBreadcrumbItems = (): BreadcrumbItem[] => {
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const items: BreadcrumbItem[] = [
      { name: 'Home', path: '/', icon: Home }
    ];

    let currentPath = '';
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      const name = segment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

      let icon: React.ComponentType<{ className?: string }> | undefined;
      if (segment.includes('ai')) icon = Brain;
      else if (segment.includes('it') || segment.includes('cloud')) icon = Cloud;
      else if (segment.includes('saas') || segment.includes('micro')) icon = Cpu;
      else if (segment.includes('emerging') || segment.includes('tech')) icon = Zap;

      items.push({
        name,
        path: currentPath,
        icon
      });
    });

    return items;
  };

  const breadcrumbItems = getBreadcrumbItems();

  // Don't show breadcrumb on home page
  if (location.pathname === '/') {
    return null;
  }

  return (
    <nav aria-label="Breadcrumb" className="bg-slate-800/50 backdrop-blur-sm border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center space-x-2 text-sm py-3">
          {breadcrumbItems.map((item, index) => (
            <li key={item.path} className="flex items-center">
              {index > 0 && (
                <ChevronRight className="w-4 h-4 text-gray-400 mx-2" />
              )}
              <a
                href={item.path}
                className={`flex items-center space-x-1 transition-colors duration-200 ${
                  index === breadcrumbItems.length - 1
                    ? 'text-cyan-400 font-medium'
                    : 'text-gray-300 hover:text-cyan-400'
                }`}
              >
                {item.icon && <item.icon className="w-4 h-4" />}
                <span>{item.name}</span>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumb;