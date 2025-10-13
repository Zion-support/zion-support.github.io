import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumb: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const getBreadcrumbName = (pathname: string): string => {
    const nameMap: { [key: string]: string } = {
      'about': 'About',
      'services': 'Services',
      'ai-solutions': 'AI Solutions',
      'cloud-services': 'Cloud Services',
      'cybersecurity': 'Cybersecurity',
      'data-analytics': 'Data Analytics',
      'it-consulting': 'IT Consulting',
      'blockchain': 'Blockchain',
      'iot': 'IoT Solutions',
      'machine-learning': 'Machine Learning',
      'devops': 'DevOps',
      'enterprise': 'Enterprise',
      'innovation-labs': 'Innovation Labs',
      'investors': 'Investors',
      'community': 'Community',
      'faq': 'FAQ',
      'help': 'Help',
      'docs': 'Documentation',
      'health': 'Health',
      'demo': 'Demo',
      'consultation': 'Consultation',
      'contact': 'Contact'
    };
    
    return nameMap[pathname] || pathname.charAt(0).toUpperCase() + pathname.slice(1);
  };

  // Don't show breadcrumb on home page
  if (location.pathname === '/') {
    return null;
  }

  return (
    <nav className="bg-slate-800/50 backdrop-blur-sm border-b border-white/10 py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center space-x-2 text-sm">
          <li>
            <Link
              to="/"
              className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center"
            >
              <Home className="h-4 w-4" />
              <span className="ml-1">Home</span>
            </Link>
          </li>
          
          {pathnames.map((pathname, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;
            
            return (
              <li key={pathname} className="flex items-center">
                <ChevronRight className="h-4 w-4 text-gray-500 mx-2" />
                {isLast ? (
                  <span className="text-white font-medium">
                    {getBreadcrumbName(pathname)}
                  </span>
                ) : (
                  <Link
                    to={routeTo}
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
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