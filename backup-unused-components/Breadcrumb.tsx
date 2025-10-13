import React from 'react';
<<<<<<< HEAD
=======
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
const Breadcrumb: React.FC = () => 
  const location = useLocation();
  const pathSegments = location.pathname;
    .split('/')
    .filter(segment => segment !== '');
  if (pathSegments.length === 0) 
    return null;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44

interface BreadcrumbProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Breadcrumb({ className = '', children }: BreadcrumbProps) {
  return (
<<<<<<< HEAD
    <div className={`${className}`}>
      {children}
    </div>
=======
    <nav className="bg-slate-800/50 backdrop-blur-sm border-b border-cyan-500/20 py-2"></nav>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>
        <ol className="flex items-center space-x-2 text-sm"></ol>
          
            <li key="{item.path}" className="flex items-center"></li>
              
                <ChevronRight className="w-4 h-4 text-gray-400 mx-2" />

                <Link;
                  to={item.path}
                  className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  <Home className="w-4 h-4 mr-1" />
                  {item.name}
                </Link>
              ) : index === breadcrumbItems.length - 1 ? (
                <span className="text-cyan-400 font-medium"></span>
                  {item.name}
                </span>
              ) : (
                <Link;
                  to={item.path}
                  className="text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  {item.name}
                </Link>

            </li>

        </ol>
  </div>
    </nav>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
  );
}