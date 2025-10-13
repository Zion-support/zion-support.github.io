import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

const Breadcrumb: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  if (pathnames.length === 0) {
    return null;
  }

  const getBreadcrumbName = (pathname: string) => {
    const nameMap: { [key: string]: string } = {
      "about": "About",
      "services": "Services",
      "pricing": "Pricing",
      "contact": "Contact",
      "blog": "Blog",
      "ai-services": "AI Services",
      "it-services": "IT Services",
      "case-studies": "Case Studies",
      "consultation": "Consultation",
      "support": "Support",
      "privacy": "Privacy Policy",
      "terms": "Terms of Service",
      "cookies": "Cookie Policy",
      "sitemap": "Sitemap",
      "careers": "Careers",
      "cloud-services": "Cloud Services",
      "cybersecurity": "Cybersecurity",
      "custom-development": "Custom Development",
      "web-development": "Web Development",
      "mobile-development": "Mobile Development",
      "database-management": "Database Management",
      "network-infrastructure": "Network Infrastructure",
      "data-analytics": "Data Analytics",
    };

    return nameMap[pathname] || pathname.charAt(0).toUpperCase() + pathname.slice(1);
  };

  return (
    <nav className="bg-slate-800/50 backdrop-blur-sm border-b border-cyan-500/20 py-3 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <ol className="flex items-center space-x-2 text-sm">
          <li>
            <Link
              to="/"
              className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center"
            >
              <Home className="w-4 h-4 mr-1" />
              Home
            </Link>
          </li>
          
          {pathnames.map((pathname, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
            const isLast = index === pathnames.length - 1;
            const name = getBreadcrumbName(pathname);

            return (
              <li key={pathname} className="flex items-center">
                <ChevronRight className="w-4 h-4 text-gray-500 mx-2" />
                {isLast ? (
                  <span className="text-cyan-400 font-medium">{name}</span>
                ) : (
                  <Link
                    to={routeTo}
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    {name}
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
