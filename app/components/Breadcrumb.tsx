import React from 'react';
import { useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumb: React.FC = () => {
  const location = useLocation();
  
  const pathSegments = location.pathname.split('/').filter(segment => segment !== '');
  
  const getBreadcrumbName = (segment: string) => {
    const nameMap: Record<string, string> = {
      'ai-services': 'AI Services',
      'micro-saas': 'Micro SAAS',
      '5g-solutions': '5G Solutions',
      'about': 'About',
      'contact': 'Contact',
      'services': 'Services',
      'blog': 'Blog',
      'privacy': 'Privacy Policy',
      'terms': 'Terms of Service',
      'support': 'Support'
    };
    
    return nameMap[segment] || segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ');
  };

  if (pathSegments.length === 0) {
    return null;
  }

  return (
    <nav className="bg-slate-800/50 backdrop-blur-sm border-b border-cyan-500/20 py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center space-x-2 text-sm">
          <li>
            <a href="/" className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors">
              <Home className="w-4 h-4 mr-1" />
              Home
            </a>
          </li>
          {pathSegments.map((segment, index) => (
            <li key={segment} className="flex items-center">
              <ChevronRight className="w-4 h-4 text-gray-400 mx-2" />
              <span className={`${
                index === pathSegments.length - 1 
                  ? 'text-white font-medium' 
                  : 'text-gray-300 hover:text-cyan-400 transition-colors'
              }`}>
                {getBreadcrumbName(segment)}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumb;
