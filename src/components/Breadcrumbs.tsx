import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const breadcrumbMap: Record<string, string> = {
    about: 'About Us',
    contact: 'Contact',
    services: 'Services',
    'innovative-services-2026': 'Innovative Services 2026',
    'services-overview-2026': 'Services Overview 2026',
    talent: 'Tech Talent',
    equipment: 'Equipment',
    consulting: 'Consulting',
    cybersecurity: 'Cybersecurity',
    cloud: 'Cloud Services',
    ai: 'AI Solutions',
  };

  if (pathnames.length === 0) {
    return null;
  }

  return (
    <nav className="flex items-center space-x-2 text-sm text-slate-400 mb-6" aria-label="Breadcrumb">
      <Link
        to="/"
        className="flex items-center hover:text-cyan-400 transition-colors duration-200"
      >
        <Home className="w-4 h-4 mr-1" />
        Home
      </Link>
      
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;
        const displayName = breadcrumbMap[name] || name.charAt(0).toUpperCase() + name.slice(1);

        return (
          <React.Fragment key={name}>
            <ChevronRight className="w-4 h-4 text-slate-600" />
            {isLast ? (
              <span className="text-cyan-400 font-medium">{displayName}</span>
            ) : (
              <Link
                to={routeTo}
                className="hover:text-cyan-400 transition-colors duration-200"
              >
                {displayName}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};