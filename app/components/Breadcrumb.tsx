import React from 'react';
import { useLocation } from 'react-router-dom';
import { ChevronRightIcon, HomeIcon } from '@heroicons/react/24/outline';

const Breadcrumb: React.FC = () => {
  const location = useLocation();

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

  const pathSegments = location.pathname.split('/').filter(segment => segment !== '');
  
  if (pathSegments.length === 0) {
    return null; // Don't show breadcrumb on home page
  }

  return (
    <nav className="bg-gray-50 border-b border-gray-200">
      <div className="container mx-auto px-4 py-3">
        <ol className="flex items-center space-x-2 text-sm">
          <li>
            <a href="/" className="text-gray-500 hover:text-gray-700 flex items-center">
              <HomeIcon className="w-4 h-4 mr-1" />
              Home
            </a>
          </li>
          {pathSegments.map((segment, index) => (
            <li key={segment} className="flex items-center">
              <ChevronRightIcon className="w-4 h-4 text-gray-400 mx-2" />
              <span className={index === pathSegments.length - 1 ? 'text-gray-900 font-medium' : 'text-gray-500'}>
                {getBreadcrumbName(segment)}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumb;