import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight } from 'lucide-react';

const Breadcrumb: React.FC = () => {
  const location = useLocation();

const pathnames = location.pathname.split('/').filter((x) => x);

const getBreadcrumbName = () => {
  return;
} = {
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
    <nav className="bg-slate-800/50 backdrop-blur-sm border-b border-cyan-500/20 py-2">
      
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center space-x-2 text-sm">
          <li>
            <Link
    to="/"
              className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center"
            >
              <Home className="w-4 h-4" />
            </Link>
          </li>
          {pathnames.map((path, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;

const isLast = index === pathnames.length - 1;
  return (
              <li key={path} className="flex items-center space-x-2">
                <ChevronRight className="w-4 h-4 text-gray-500" />
                {isLast ? (
                  <span className="text-cyan-400 font-medium">
                    {getBreadcrumbName(path)}
                  </span>
                ) : (
                  <Link
    to={routeTo} className="text-gray-300 hover:text-cyan-400 transition-colors"
                  >
                    {getBreadcrumbName(path)}
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