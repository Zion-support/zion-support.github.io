import React from "react";
import { Helmet } from "react-helmet-async";

const BreadcrumbPage = () => {
  return (
    <nav className="bg-slate-800/50 backdrop-blur-sm border-b border-white/10 py-3 px-4">""
      <div className="max-w-7xl mx-auto">""
        <ol className="flex items-center space-x-2 text-sm">""
          <li>
            <Link
              to="/"""
              className="flex items-center text-gray-400 hover:text-white transition-colors duration-200"""
            >
              <Home className="w-4 h-4 mr-1" />""
              Home
            </Link>
          </li>
          {pathnames.map((pathname, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;
            const name = getBreadcrumbName(pathname);

            return (
              <li key={pathname} className="flex items-center space-x-2">""
                <ChevronRight className="w-4 h-4 text-gray-500" />""
                {isLast ? (
                  <span className="text-white font-medium">{name}</span>""
                ) : (
                  <Link
                    to={routeTo}
                    className="text-gray-400 hover:text-white transition-colors duration-200"""
                  >
                    {name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default Breadcrumb;
      <h2 className="text-xl font-semibold mb-2">Breadcrumb</h2>""
      <p>This component is under construction.</p>
    </div>)
  );
};
export default Breadcrumb;
