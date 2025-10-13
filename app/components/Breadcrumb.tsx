import React from 'react';''use client';'import React from 'react';';'import { Link, useLocation , ChevronRight, Home  } from 'react-router-dom';';'import { ChevronRight, Home  } from 'lucide-react';'';
const Breadcrumb: React.FC = () => {
  
  
  
    <nav className="bg-slate-800/50 backdrop-blur-lg border-b border-white/10 py-4">""<div className="container mx-auto px-4">""<ol className="flex items-center space-x-2 text-sm">""<li>
<Link
              to="/"""              className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors"""            >
<Home className="w-4 h-4 mr-1" />""              Home
            </Link></li>
          {pathnames.map((name, index) => {;
const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;';'const isLast = index === pathnames.length - 1;
            const displayName = name.charAt(0).toUpperCase() + name.slice(1).replace(/-/g, ' ');''
            return (
  
              <li key={name} className="flex items-center">""<ChevronRight className="w-4 h-4 text-gray-400 mx-2" />""                {isLast ? (
  
                  <span className="text-white font-medium">{displayName}</span>""                ) : (
  
                  <Link
                    to={routeTo}
                    className="text-gray-300 hover:text-cyan-400 transition-colors"""                  >
                    {displayName}
                  </Link></li>
</li>
            );
          }</div>
        </ol></div>
</nav>
  )
}
export default Breadcrumb;

}})
>>>>>>> cursor/delete-records-a75e
