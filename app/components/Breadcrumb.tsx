import React from 'react';
        </ol></div>
</nav>
  )
}
;
export default Breadcrumb;

}})
import { Link, useLocation } from 'react-router-dom';
import { Home, ChevronRight } from 'lucide-react';

const Breadcrumb: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <nav className="bg-slate-800/50 backdrop-blur-sm border-b border-white/10 py-2 px-4">
        <ol className="flex items-center space-x-2 text-sm"
              className="text-gray-400 hover:text-white transition-colors flex items-center" />
              Home
            </Link>
          </li>
          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;
            
            return (
              <li key={name} className="flex items-center" />
                {isLast ? (
                  <span className="text-white font-medium capitalize"
                  >
                    {name.replace(/-/g, ' ')}
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

interface BreadcrumbProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Breadcrumb({ className = '', children }: BreadcrumbProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
