import React from 'react';
import { Link } from 'react-router-dom';
// import { Home } from 'lucide-react'; // Unused import

const Breadcrumb: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

export default function Breadcrumb({ className = '', children }: BreadcrumbProps) {

interface BreadcrumbProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Breadcrumb({ className = '', children, ...props }: BreadcrumbProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}
export default function Breadcrumb({ className = '', children, ...props }: BreadcrumbProps) {
    return (
        <div className="component" {...props}>
          {children}
        </div>
      );
}
  return (
    <nav className="bg-slate-800/50 backdrop-blur-sm border-b border-white/10 py-2 px-4">
      <div className="max-w-7xl mx-auto">
        <ol className="flex items-center space-x-2 text-sm">
          <li>
            <Link to="/" className="text-cyan-400 hover:text-cyan-300 flex items-center">
              <Home className="w-4 h-4 mr-1" />
              Home
            </Link>
          </li>
          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;
            const displayName = name.charAt(0).toUpperCase() + name.slice(1).replace(/-/g, ' ');

            return (
              <li key={name} className="flex items-center">
                <ChevronRight className="w-4 h-4 text-gray-400 mx-2" />
                {isLast ? (
                  <span className="text-white font-medium">{displayName}</span>
                ) : (
                  <Link to={routeTo} className="text-cyan-400 hover:text-cyan-300">
                    {displayName}
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

import React from 'react';

export default Breadcrumb;
  );
}

export default Breadcrumb;
}
export default Breadcrumb;
