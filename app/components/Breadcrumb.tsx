import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumb: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const getBreadcrumbName = (pathname: string) => {
    const nameMap: { [key: string]: string } = {
      'about': 'About',
      'services': 'Services',
      'ai-services': 'AI Services',
      'micro-saas': 'Micro SAAS',
      '5g-solutions': '5G Solutions',
      'blog': 'Blog',
      'contact': 'Contact',
      'privacy': 'Privacy Policy',
      'terms': 'Terms of Service',
      'ai-analytics': 'AI Analytics',
      'ai-content-generation': 'AI Content Generation',
      'ai-customer-support': 'AI Customer Support',
      'ai-cybersecurity': 'AI Cybersecurity',
      'ai-data-analytics': 'AI Data Analytics',
      'ai-document-processing': 'AI Document Processing',
      'ai-marketing-automation': 'AI Marketing Automation',
      'ai-predictive-analytics': 'AI Predictive Analytics',
      'ai-voice-assistant': 'AI Voice Assistant',
      'ai-workflow-automation': 'AI Workflow Automation',
      'cloud-migration': 'Cloud Migration',
      'devops-services': 'DevOps Services',
      'it-consulting': 'IT Consulting',
      'network-security': 'Network Security',
      'software-development': 'Software Development',
      'system-integration': 'System Integration',
      'web-development': 'Web Development',
      '5g-network-infrastructure': '5G Network Infrastructure',
      '5g-edge-computing': '5G Edge Computing',
      '5g-iot-solutions': '5G IoT Solutions',
      '5g-smart-city-solutions': '5G Smart City Solutions',
      '5g-private-networks': '5G Private Networks',
      '5g-mobile-applications': '5G Mobile Applications',
      '5g-data-analytics': '5G Data Analytics',
      '5g-implementation': '5G Implementation',
      'zion-ai-video-generator': 'Zion AI Video Generator',
      'zion-ai-invoice-generator': 'Zion AI Invoice Generator',
      'zion-ai-customer-insights': 'Zion AI Customer Insights',
      'zion-ai-voice-assistant-pro': 'Zion AI Voice Assistant Pro',
      'zion-ai-code-reviewer': 'Zion AI Code Reviewer',
      'zion-ai-contract-analyzer': 'Zion AI Contract Analyzer',
      'zion-ai-supply-chain-optimizer': 'Zion AI Supply Chain Optimizer',
      'zion-ai-translator-pro': 'Zion AI Translator Pro',
      'zion-ai-data-cleaner': 'Zion AI Data Cleaner',
    };

    return nameMap[pathname] || pathname.charAt(0).toUpperCase() + pathname.slice(1).replace(/-/g, ' ');
  };

  if (pathnames.length === 0) {
    return null;
  }

  return (
    <nav className="bg-gray-800/50 backdrop-blur-sm border-b border-gray-700/50 py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            const breadcrumbName = getBreadcrumbName(pathname);

            return (
              <li key={pathname} className="flex items-center">
                <ChevronRight className="w-4 h-4 text-gray-500 mx-2" />
                {isLast ? (
                  <span className="text-white font-medium">{breadcrumbName}</span>
                ) : (
                  <Link
                    to={routeTo}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {breadcrumbName}
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