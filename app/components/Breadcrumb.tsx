import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

export default function Breadcrumb() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  if (pathnames.length === 0) {
    return null;
  }

  const breadcrumbItems = [
    { name: "Home", path: "/", icon: <Home className="w-4 h-4" /> }
  ];

  let currentPath = "";
  pathnames.forEach((pathname, index) => {
    currentPath += `/${pathname}`;
    const name = pathname
      .split("-")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    
    breadcrumbItems.push({
      name,
      path: currentPath,
      icon: null
    });
  });

  return (
    <nav className="bg-slate-800/50 backdrop-blur-sm border-b border-cyan-500/20 py-2 px-4">
      <div className="max-w-7xl mx-auto">
        <ol className="flex items-center space-x-2 text-sm">
          {breadcrumbItems.map((item, index) => (
            <li key={item.path} className="flex items-center">
              {index > 0 && (
                <ChevronRight className="w-4 h-4 text-gray-400 mx-2" />
              )}
              <Link
                to={item.path}
                className={`flex items-center space-x-1 transition-colors ${
                  index === breadcrumbItems.length - 1
                    ? "text-cyan-400 font-medium"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}