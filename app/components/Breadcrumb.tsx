<<<<<<< HEAD
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
=======
<<<<<<< HEAD
import React from 'react';
import { useLocation } from 'react-router-dom';
>>>>>>> origin/main
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumb: React.FC = () => {
  const location = useLocation();
<<<<<<< HEAD
  const pathnames = location.pathname.split('/').filter((x) => x);

  if (pathnames.length === 0) {
=======
  
  const pathSegments = location.pathname
    .split('/')
    .filter(segment => segment !== '')
    .map(segment => ({
      name: segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' '),
      path: `/${segment}`
    }));

  if (pathSegments.length === 0) {
>>>>>>> origin/main
    return null;
  }
=======
import React from "react";
>>>>>>> origin/main

<<<<<<< HEAD
  const getBreadcrumbName = (pathname: string) => {
    const nameMap: Record<string, string> = {
      'ai-services': 'AI Services',
      'ai-analytics': 'AI Analytics',
      'ai-automation-platform': 'AI Automation Platform',
      'ai-content-generation': 'AI Content Generation',
      'ai-customer-support': 'AI Customer Support',
      'ai-cybersecurity': 'AI Cybersecurity',
      'ai-data-analytics': 'AI Data Analytics',
      'ai-document-processing': 'AI Document Processing',
      'ai-marketing-automation': 'AI Marketing Automation',
      'ai-predictive-analytics': 'AI Predictive Analytics',
      'ai-voice-assistant': 'AI Voice Assistant',
      'ai-workflow-automation': 'AI Workflow Automation',
      'services': 'IT Services',
      'cloud-migration': 'Cloud Migration',
      'devops-services': 'DevOps Services',
      'it-consulting': 'IT Consulting',
      'network-security': 'Network Security',
      'software-development': 'Software Development',
      'web-development': 'Web Development',
      'micro-saas': 'Micro SAAS',
      '5g-solutions': '5G Solutions',
      'about': 'About Us',
      'contact': 'Contact',
      'blog': 'Blog',
      'privacy': 'Privacy Policy',
      'terms': 'Terms of Service'
    };

    return nameMap[pathname] || pathname.charAt(0).toUpperCase() + pathname.slice(1);
  };

  return (
    <nav className="bg-slate-800/50 backdrop-blur-sm border-b border-white/10 py-3 px-4">
      <div className="max-w-7xl mx-auto">
        <ol className="flex items-center space-x-2 text-sm">
          <li>
            <Link
              to="/"
              className="flex items-center text-gray-400 hover:text-white transition-colors duration-200"
            >
              <Home className="w-4 h-4 mr-1" />
              Home
            </Link>
          </li>
          {pathnames.map((pathname, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;
            const name = getBreadcrumbName(pathname);

            return (
              <li key={pathname} className="flex items-center space-x-2">
                <ChevronRight className="w-4 h-4 text-gray-500" />
                {isLast ? (
                  <span className="text-white font-medium">{name}</span>
                ) : (
                  <Link
                    to={routeTo}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
=======
const Breadcrumb = () => {
  return (
<<<<<<< HEAD
    <nav className="bg-gray-50 px-4 py-2 text-sm" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2">
        <li>
          <a href="/" className="text-gray-500 hover:text-gray-700 flex items-center">
            <Home className="w-4 h-4 mr-1" />
            Home
          </a>
        </li>
        {pathSegments.map((segment, index) => (
          <li key={segment.path} className="flex items-center">
            <ChevronRight className="w-4 h-4 text-gray-400 mx-2" />
            {index === pathSegments.length - 1 ? (
              <span className="text-gray-900 font-medium">{segment.name}</span>
            ) : (
              <a href={segment.path} className="text-gray-500 hover:text-gray-700">
                {segment.name}
              </a>
            )}
          </li>
        ))}
      </ol>
>>>>>>> origin/main
    </nav>
  );
};

<<<<<<< HEAD
export default Breadcrumb;
=======
export default Breadcrumb;
=======
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-2">Breadcrumb</h2>
      <p>This component is under construction.</p>
    </div>
  );
};

export default Breadcrumb;
>>>>>>> origin/main
>>>>>>> origin/main
