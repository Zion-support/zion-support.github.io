import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumb: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const getBreadcrumbName = (pathname: string) => {
    const nameMap: { [key: string]: string } = {
      'ai-services': 'AI Services',
      'micro-saas': 'Micro SAAS',
      '5g-solutions': '5G Solutions',
      'about': 'About',
      'contact': 'Contact',
      'services': 'Services',
      'blog': 'Blog',
      'privacy': 'Privacy Policy',
      'terms': 'Terms of Service',
      'ai-analytics': 'AI Analytics',
      'ai-automation': 'AI Automation',
      'ai-business-intelligence': 'AI Business Intelligence',
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
      'cloud-infrastructure': 'Cloud Infrastructure',
      'cybersecurity-solutions': 'Cybersecurity Solutions',
      'web-development': 'Web Development',
      'mobile-development': 'Mobile Development',
      'database-management': 'Database Management',
      'custom-software': 'Custom Software',
      'network-infrastructure': 'Network Infrastructure',
      'zion-analytics-pro': 'Zion Analytics Pro',
      'zion-security-shield': 'Zion Security Shield',
      'zion-cloud-vault': 'Zion Cloud Vault',
      'zion-content-studio': 'Zion Content Studio'
    };
    
    return nameMap[pathname] || pathname.charAt(0).toUpperCase() + pathname.slice(1).replace(/-/g, ' ');
  };

  if (pathnames.length === 0) {
    return null;
  }

  return (
    <nav className="bg-slate-800/50 border-b border-cyan-500/20 py-3 px-4 sm:px-6 lg:px-8">
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
            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;
            
            return (
              <li key={pathname} className="flex items-center">
                <ChevronRight className="w-4 h-4 text-gray-500 mx-2" />
                {isLast ? (
                  <span className="text-cyan-400 font-medium">
                    {getBreadcrumbName(pathname)}
                  </span>
                ) : (
                  <Link
                    to={routeTo}
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    {getBreadcrumbName(pathname)}
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