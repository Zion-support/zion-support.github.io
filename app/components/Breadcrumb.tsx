'use client';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumb: React.FC = () => {
  const location = useLocation();
  
  // Don't show breadcrumb on home page
  if (location.pathname === '/') {
    return null;
  }

  const pathSegments = location.pathname.split('/').filter(segment => segment !== '');
  
  const breadcrumbItems = [
    { name: 'Home', path: '/', icon: Home }
  ];
<<<<<<< HEAD
<<<<<<< HEAD
  
=======

>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-0c44
=======
  
>>>>>>> cursor/analyze-improve-and-deploy-application-fdb6
  pathSegments.forEach((segment, index) => {
    const path = '/' + pathSegments.slice(0, index + 1).join('/');
    const name = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ');
    breadcrumbItems.push({ name, path, icon: null });
  });

  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <nav className="bg-slate-800/50 backdrop-blur-lg border-b border-white/10 py-4">
      <div className="container mx-auto px-4">
        <ol className="flex items-center space-x-2 text-sm">
          {breadcrumbItems.map((item, index) => (
            <li key={index} className="flex items-center">
=======
    <nav className="bg-slate-800/50 backdrop-blur-sm border-b border-gray-700 py-3">
=======
    <nav className="bg-slate-800/30 backdrop-blur-sm border-b border-cyan-500/20 py-2">
>>>>>>> cursor/analyze-improve-and-deploy-application-fdb6
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center space-x-2 text-sm">
          {breadcrumbItems.map((item, index) => (
            <li key={item.path} className="flex items-center">
<<<<<<< HEAD
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-0c44
              {index > 0 && <ChevronRight className="w-4 h-4 text-gray-400 mx-2" />}
              <a
                href={item.path}
                className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors"
              >
                {item.icon && <item.icon className="w-4 h-4 mr-1" />}
                {item.name}
=======
              {index > 0 && <ChevronRight className="w-4 h-4 text-gray-400 mx-2" />}
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
>>>>>>> cursor/analyze-improve-and-deploy-application-fdb6
              </a>
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumb;
