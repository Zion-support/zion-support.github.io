import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, ChevronRight } from 'lucide-react';

const Breadcrumb: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const getBreadcrumbName = (path: string) => {
    const breadcrumbMap: { [key: string]: string } = {
      'about': 'About',
      'services': 'Services',
      'contact': 'Contact',
      'blog': 'Blog',
      'ai-services': 'AI Services',
      'micro-saas': 'Micro SAAS',
      '5g-solutions': '5G Solutions',
      'privacy': 'Privacy Policy',
      'terms': 'Terms of Service',
      'support': 'Support',
      'demo': 'Demo',
      'tutorials': 'Tutorials',
    };
    return breadcrumbMap[path] || path.charAt(0).toUpperCase() + path.slice(1);
  };

  if (pathnames.length === 0) {
    return null;
  }

  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-400 mb-4">
      <Link to="/" className="hover:text-white transition-colors">
        <Home className="w-4 h-4" />
      </Link>
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;
        
        return (
          <React.Fragment key={routeTo}>
            <ChevronRight className="w-4 h-4" />
            {isLast ? (
              <span className="text-white font-medium">
                {getBreadcrumbName(name)}
              </span>
            ) : (
              <Link
                to={routeTo}
                className="hover:text-white transition-colors"
              >
                {getBreadcrumbName(name)}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;