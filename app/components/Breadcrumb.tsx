import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

export default function Breadcrumb() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  if (pathnames.length === 0) {
    return null;
  }

  const breadcrumbItems = pathnames.map((name, index) => {
    const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
    const isLast = index === pathnames.length - 1;
    
    // Format the name for display
    const displayName = name
      .split("-")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    return {
      name: displayName,
      routeTo,
      isLast
    };
  });

  return (
    <nav className="bg-slate-800/50 backdrop-blur-sm border-b border-white/10 py-2 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <ol className="flex items-center space-x-2 text-sm">
          <li>
            <Link
              to="/"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 flex items-center"
            >
              <Home className="w-4 h-4 mr-1" />
              Home
            </Link>
          </li>
          {breadcrumbItems.map((item, index) => (
            <li key={item.routeTo} className="flex items-center">
              <ChevronRight className="w-4 h-4 text-gray-500 mx-2" />
              {item.isLast ? (
                <span className="text-cyan-400 font-medium">{item.name}</span>
              ) : (
                <Link
                  to={item.routeTo}
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}