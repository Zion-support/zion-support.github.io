import React from 'react';
import { useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumb: React.FC = () => {
  const location = useLocation();
  
  const pathSegments = location.pathname.split('/').filter(segment => segment);
  
  if (pathSegments.length === 0) return null;

  return (
    <nav className="bg-slate-800/50 backdrop-blur-sm border-b border-cyan-500/20 py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center space-x-2 text-sm">
          <li>
            <Link to="/" className="flex items-center text-gray-400 hover:text-cyan-400 transition-colors">
              <Home className="w-4 h-4" />
            </Link>
          </li>
          {pathSegments.map((segment, index) => (
            <li key={index} className="flex items-center space-x-2">
              <ChevronRight className="w-4 h-4 text-gray-500" />
              <span className="text-gray-300 capitalize">
                {segment.replace(/-/g, ' ')}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumb;