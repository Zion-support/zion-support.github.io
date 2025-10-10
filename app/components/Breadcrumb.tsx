'use client';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumb: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const getBreadcrumbName = (pathname: string) => {
    const nameMap: { [key: string]: string } = {
      'about': 'About Us',
      'services': 'Services',
      'pricing': 'Pricing',
      'contact': 'Contact',
      'blog': 'Blog',
      'case-studies': 'Case Studies',
      'careers': 'Careers',
      'partners': 'Partners',
      'support': 'Support',
      'faq': 'FAQ',
      'demo': 'Demo',
      'consultation': 'Consultation',
      'micro-saas': 'Micro SaaS',
      'ai-services': 'AI Services',
      'it-services': 'IT Services'
    };
    return nameMap[pathname] || pathname.charAt(0).toUpperCase() + pathname.slice(1);
  };

  if (pathnames.length === 0) {
    return null;
  }

  return (
    <nav className="bg-slate-800/50 backdrop-blur-sm border-b border-slate-700 py-3 px-4 sm:px-6 lg:px-8" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2 text-sm">
        <li>
          <a href="/" className="text-gray-400 hover:text-cyan-400 transition-colors">
            <Home className="w-4 h-4" />
            <span className="sr-only">Home</span>
          </a>
        </li>
        {pathnames.map((pathname, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          
          return (
            <li key={pathname} className="flex items-center">
              <ChevronRight className="w-4 h-4 text-gray-500 mx-2" />
              {isLast ? (
                <span className="text-cyan-400 font-medium" aria-current="page">
                  {getBreadcrumbName(pathname)}
                </span>
              ) : (
                <a
                  href={routeTo}
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  {getBreadcrumbName(pathname)}
                </a>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;