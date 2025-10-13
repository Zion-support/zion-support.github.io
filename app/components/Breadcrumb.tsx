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
      'ai-marketing': 'AI Marketing',
      'ai-healthcare': 'AI Healthcare',
      'services': 'IT Services',
      'cloud-infrastructure': 'Cloud Infrastructure',
      'cybersecurity-solutions': 'Cybersecurity Solutions',
      'web-development': 'Web Development',
      'mobile-development': 'Mobile Development',
      'database-management': 'Database Management',
      'custom-software': 'Custom Software',
      'micro-saas': 'Micro SAAS',
      'zion-analytics-pro': 'Zion Analytics Pro',
      'zion-security-shield': 'Zion Security Shield',
      'zion-cloud-vault': 'Zion Cloud Vault',
      'zion-content-studio': 'Zion Content Studio',
      '5g-solutions': '5G Solutions',
      '5g-data-analytics': '5G Data Analytics',
      '5g-edge-computing': '5G Edge Computing',
      '5g-implementation': '5G Implementation',
      '5g-mobile-applications': '5G Mobile Applications',
      '5g-network-infrastructure': '5G Network Infrastructure',
      '5g-private-networks': '5G Private Networks',
      'about': 'About',
      'contact': 'Contact',
      'blog': 'Blog',
      'demo': 'Demo',
      'support': 'Support',
      'privacy': 'Privacy Policy',
      'terms': 'Terms of Service'
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
              <li key={routeTo} className="flex items-center">
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
