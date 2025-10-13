import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

export default function Breadcrumb() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  if (pathnames.length === 0) {
    return null;
  }

  return (
    <nav className="bg-slate-800/30 backdrop-blur-md border-b border-cyan-500/10 py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center space-x-2 text-sm">
          <li className="flex items-center">
            <Link
              to="/"
              className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors"
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </Link>
          </li>

          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
            const isLast = index === pathnames.length - 1;
            const displayName = name
              .split("-")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ");

            return (
              <React.Fragment key={name}>
                <ChevronRight className="w-4 h-4 text-gray-400 mx-2" />
                <li className="flex items-center">
                  {isLast ? (
                    <span className="text-cyan-400 font-medium">{displayName}</span>
                  ) : (
                    <Link
                      to={routeTo}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {displayName}
                    </Link>
                  )}
                </li>
              </React.Fragment>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}