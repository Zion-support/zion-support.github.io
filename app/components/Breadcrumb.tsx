import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumb: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const getBreadcrumbName = (pathname: string) => {
    const nameMap: { [key: string]: string } = {
      'ai-services': 'AI Services',
      'micro-saas': 'Micro SAAS',
      '5g-solutions': '5G Solutions',
      'about': 'About',
      'contact': 'Contact',
      'services': 'Services',
      'blog': 'Blog',
      'privacy': 'Privacy Policy',
      'terms': 'Terms of Service',
      'tutorials': 'Tutorials',
      'demo': 'Demo',
      'consultation': 'Consultation',
      'support': 'Support'
    };
    
    return nameMap[pathname] || pathname.charAt(0).toUpperCase() + pathname.slice(1);
  };

  if (pathnames.length === 0) {
    return null;
  }

  return (
    <nav className="bg-slate-800/50 backdrop-blur-sm border-b border-white/10 py-3 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <ol className="flex items-center space-x-2 text-sm">
          <li>
            <Link
              to="/"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 flex items-center"
            >
              <Home className="w-4 h-4 mr-1" />
              Home
            </Link>
          </li>
          
          {pathnames.map((pathname, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;
            
            return (
              <li key={pathname} className="flex items-center">
                <ChevronRight className="w-4 h-4 text-gray-500 mx-2" />
                {isLast ? (
                  <span className="text-cyan-400 font-medium">
                    {getBreadcrumbName(pathname)}
                  </span>
                ) : (
                  <Link
                    to={routeTo}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                  >
                    {getBreadcrumbName(pathname)}
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