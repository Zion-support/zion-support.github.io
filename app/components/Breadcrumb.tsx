import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumb: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const getBreadcrumbName = (pathname: string) => {
    const nameMap: Record<string, string> = {
      'about': 'About',
      'contact': 'Contact',
      'services': 'Services',
      'pricing': 'Pricing',
      'blog': 'Blog',
      'demo': 'Demo',
      'support': 'Support',
      'privacy': 'Privacy Policy',
      'terms': 'Terms of Service',
      'cookies': 'Cookie Policy',
      'sitemap': 'Sitemap',
      'ai-services': 'AI Services',
      'micro-saas': 'Micro SAAS',
      '5g-solutions': '5G Solutions',
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
      'zion-ai-crm-pro': 'Zion AI CRM Pro',
      'zion-ai-marketing-automation-pro': 'Zion AI Marketing Automation Pro',
      'zion-ai-project-manager-pro': 'Zion AI Project Manager Pro',
      'zion-content-studio': 'Zion Content Studio',
      '5g-data-analytics': '5G Data Analytics',
      '5g-edge-computing': '5G Edge Computing',
      '5g-implementation': '5G Implementation',
      '5g-mobile-applications': '5G Mobile Applications',
      '5g-network-infrastructure': '5G Network Infrastructure',
      '5g-private-networks': '5G Private Networks',
      '5g-smart-city-solutions': '5G Smart City Solutions',
      '5g-iot-solutions': '5G IoT Solutions'
    };

    return nameMap[pathname] || pathname.charAt(0).toUpperCase() + pathname.slice(1);
  };

  if (pathnames.length === 0) {
    return null; // Don't show breadcrumb on home page
  }

  return (
    <nav className="bg-slate-800/50 backdrop-blur-sm border-b border-white/10" aria-label="Breadcrumb">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center space-x-2 py-3 text-sm">
          <li>
            <Link
              to="/"
              className="flex items-center text-gray-400 hover:text-cyan-400 transition-colors"
              aria-label="Home"
            >
              <Home className="w-4 h-4" />
            </Link>
          </li>
          
          {pathnames.map((pathname, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;
            const name = getBreadcrumbName(pathname);

            return (
              <li key={pathname} className="flex items-center">
                <ChevronRight className="w-4 h-4 text-gray-500 mx-2" />
                {isLast ? (
                  <span className="text-white font-medium" aria-current="page">
                    {name}
                  </span>
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
