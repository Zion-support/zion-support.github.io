import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumb: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const getBreadcrumbName = (pathname: string) => {
    const nameMap: Record<string, string> = {
      'ai-services': 'AI Services',
      'micro-saas': 'Micro SAAS',
      '5g-solutions': '5G Solutions',
      'about': 'About',
      'contact': 'Contact',
      'services': 'Services',
      'pricing': 'Pricing',
      'blog': 'Blog',
      'tutorials': 'Tutorials',
      'demo': 'Demo',
      'support': 'Support',
      'privacy': 'Privacy Policy',
      'terms': 'Terms of Service',
      'cookies': 'Cookie Policy',
      'sitemap': 'Sitemap',
    };

    return nameMap[pathname] || pathname.charAt(0).toUpperCase() + pathname.slice(1);
  };

  if (pathnames.length === 0) {
    return null; // Don't show breadcrumb on home page
  }

  return (
    <nav className="bg-slate-800/50 backdrop-blur-sm border-b border-white/10 py-3 px-4 sm:px-6 lg:px-8" aria-label="Breadcrumb">
      <div className="max-w-7xl mx-auto">
        <ol className="flex items-center space-x-2 text-sm">
          <li>
            <Link
              to="/"
              className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center"
              aria-label="Home"
            >
              <Home className="w-4 h-4" />
            </Link>
          </li>
          {pathnames.map((pathname, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;
            const name = getBreadcrumbName(pathname);

            return (
              <li key={pathname} className="flex items-center">
                <ChevronRight className="w-4 h-4 text-gray-500 mx-2" />
                {isLast ? (
                  <span className="text-white font-medium" aria-current="page">
                    {name}
                  </span>
                ) : (
                  <Link
                    to={routeTo}
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    {name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumb;