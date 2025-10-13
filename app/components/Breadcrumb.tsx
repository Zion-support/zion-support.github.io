import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumb() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  const getBreadcrumbName = (path: string) => {
    const nameMap: { [key: string]: string } = {
      'ai-services': 'AI Services',
      'ai-analytics': 'AI Analytics',
      'ai-automation': 'AI Automation',
      'ai-content-generation': 'AI Content Generation',
      'ai-customer-service': 'AI Customer Service',
      'ai-data-analytics': 'AI Data Analytics',
      'ai-email-automation': 'AI Email Automation',
      'ai-fraud-detection': 'AI Fraud Detection',
      'ai-healthcare': 'AI Healthcare',
      'ai-marketing': 'AI Marketing',
      'ai-predictive-analytics': 'AI Predictive Analytics',
      'ai-project-management': 'AI Project Management',
      'ai-recommendation-engine': 'AI Recommendation Engine',
      'ai-sales-automation': 'AI Sales Automation',
      'ai-workflow-automation': 'AI Workflow Automation',
      'services': 'Services',
      'micro-saas': 'Micro SAAS',
      '5g-solutions': '5G Solutions',
      'about': 'About Us',
      'contact': 'Contact',
      'privacy': 'Privacy Policy',
      'terms': 'Terms of Service',
    };

    return nameMap[path] || path.charAt(0).toUpperCase() + path.slice(1).replace(/-/g, ' ');
  };

  if (pathnames.length === 0) {
    return null;
  }

  return (
    <nav className="bg-slate-800/50 backdrop-blur-sm border-b border-cyan-500/20 py-3 px-4">
      <div className="max-w-7xl mx-auto">
        <ol className="flex items-center space-x-2 text-sm">
          <li>
            <Link
              to="/"
              className="flex items-center text-gray-400 hover:text-cyan-400 transition-colors"
            >
              <Home className="w-4 h-4 mr-1" />
              Home
            </Link>
          </li>
          {pathnames.map((path, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
            const isLast = index === pathnames.length - 1;
            const name = getBreadcrumbName(path);

            return (
              <li key={path} className="flex items-center">
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
}
