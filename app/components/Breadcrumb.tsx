import React from 'react';
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';

export default function BreadcrumbPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Breadcrumb - Zion Tech Group</title>
        <meta name="description" content="Advanced Breadcrumb solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Breadcrumb
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            This page is under development. Please check back later.
          </p>
        </div>
      </div>
    </div>
  );
}
=======
'use client';';
import React from 'react';';';
import { Link, useLocation , ChevronRight, Home  } from 'react-router-dom';';';
import { ChevronRight, Home  } from 'lucide-react';';'
;
const Breadcrumb: React.FC = () => {
  // TODO: Implement
}
  // TODO: Add properties
}
  // TODO: Add properties
}
  // TODO: Implement
}
    <nav className="bg-slate-800/50 backdrop-blur-lg border-b border-white/10 py-4">"
<div className="container mx-auto px-4">"
<ol className="flex items-center space-x-2 text-sm">"
<li>
<Link
              to="/""
              className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors""
            >
<Home className="w-4 h-4 mr-1" />"
              Home
            </Link></li>
          {pathnames.map((name, index) => {;
const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;';
const isLast = index === pathnames.length - 1;
            const displayName = name.charAt(0).toUpperCase() + name.slice(1).replace(/-/g, ' ');'

            return (
  // TODO: Add parameters
)
              <li key={name} className="flex items-center">"
<ChevronRight className="w-4 h-4 text-gray-400 mx-2" />"
                {isLast ? (
  // TODO: Add parameters
)
                  <span className="text-white font-medium">{displayName}</span>"
                ) : (
  // TODO: Add parameters
)
                  <Link
                    to={routeTo}
                    className="text-gray-300 hover:text-cyan-400 transition-colors""
                  >
                    {displayName}
                  </Link></li>
</li>
            );
          }</div>
>>>>>>> origin/main
        </ol></div>
</nav>
  )
}
;
export default Breadcrumb;

}})
>>>>>>> cursor/delete-records-a75e
=======
import { Link, useLocation } from 'react-router-dom';
import { Home, ChevronRight } from 'lucide-react';

const Breadcrumb: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <nav className="bg-slate-800/50 backdrop-blur-sm border-b border-white/10 py-2 px-4">
      <div className="max-w-7xl mx-auto">
        <ol className="flex items-center space-x-2 text-sm">
          <li>
            <Link
              to="/"
              className="text-gray-400 hover:text-white transition-colors flex items-center"
            >
              <Home className="w-4 h-4 mr-1" />
              Home
            </Link>
          </li>
          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;
            
            return (
              <li key={name} className="flex items-center">
                <ChevronRight className="w-4 h-4 text-gray-500 mx-2" />
                {isLast ? (
                  <span className="text-white font-medium capitalize">
                    {name.replace(/-/g, ' ')}
                  </span>
                ) : (
                  <Link
                    to={routeTo}
                    className="text-gray-400 hover:text-white transition-colors capitalize"
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
>>>>>>> cursor/fix-errors-and-merge-to-main-9be1
