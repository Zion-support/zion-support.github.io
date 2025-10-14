import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumb: React.FC = () => {
  const location = useLocation();

  const getBreadcrumbName = (pathname: string) => {
    const nameMap: Record<string, string> = {
      'about': 'About',
      'services': 'Services',
      'ai-services': 'AI Services',
      'ai-solutions': 'AI Solutions',
      'it-services': 'IT Services',
      'it-solutions': 'IT Solutions',
      'cloud-infrastructure': 'Cloud Infrastructure',
      'cybersecurity': 'Cybersecurity',
      'digital-transformation': 'Digital Transformation',
      'blog': 'Blog',
      'contact': 'Contact',
      'solutions': 'Solutions',
      'pricing': 'Pricing',
      'careers': 'Careers',
      'case-studies': 'Case Studies'
    };

    const pathSegments = pathname.split('/').filter(segment => segment !== '');
    
    if (pathSegments.length === 0) {
      return 'Home';
    }

    const lastSegment = pathSegments[pathSegments.length - 1];
    return nameMap[lastSegment] || lastSegment.charAt(0).toUpperCase() + lastSegment.slice(1);
  };

  const generateBreadcrumbs = () => {
    const pathSegments = location.pathname.split('/').filter(segment => segment !== '');
    const breadcrumbs = [{ name: 'Home', path: '/' }];

    let currentPath = '';
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      breadcrumbs.push({
        name: getBreadcrumbName(currentPath),
        path: currentPath
      });
    });

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  if (breadcrumbs.length <= 1) {
    return null;
  }

  return (
    <nav className="bg-slate-800/50 border-b border-slate-700" aria-label="Breadcrumb">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center space-x-2 py-4">
          {breadcrumbs.map((breadcrumb, index) => (
            <li key={breadcrumb.path} className="flex items-center">
              {index > 0 && (
                <ChevronRight className="w-4 h-4 text-gray-400 mx-2" />
              )}
              
              {index === 0 ? (
                <Link
                  to={breadcrumb.path}
                  className="flex items-center text-gray-300 hover:text-white transition-colors"
                >
                  <Home className="w-4 h-4 mr-1" />
                  {breadcrumb.name}
                </Link>
              ) : index === breadcrumbs.length - 1 ? (
                <span className="text-white font-medium" aria-current="page">
                  {breadcrumb.name}
                </span>
              ) : (
                <Link
                  to={breadcrumb.path}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {breadcrumb.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumb;