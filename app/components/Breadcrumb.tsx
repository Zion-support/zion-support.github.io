import React from 'react';
import Link from 'next/link';
import { ChevronRightIcon, HomeIcon } from '@heroicons/react/24/outline';

interface BreadcrumbProps {
  pathname: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ pathname }) => {
  const getBreadcrumbName = (pathname: string) => {
    const nameMap: Record<string, string> = {
      'ai-services': 'AI Services',
      'ai-analytics': 'AI Analytics',
      'ai-automation-platform': 'AI Automation Platform',
      'ai-content-generation': 'AI Content Generation',
      'ai-customer-support': 'AI Customer Support',
      'ai-cybersecurity': 'AI Cybersecurity',
      'ai-data-analytics': 'AI Data Analytics',
      'ai-enterprise-solutions': 'AI Enterprise Solutions',
      'ai-integration': 'AI Integration',
      'ai-machine-learning': 'AI Machine Learning',
      'ai-natural-language-processing': 'AI Natural Language Processing',
      'ai-predictive-analytics': 'AI Predictive Analytics',
      'ai-process-automation': 'AI Process Automation',
      'ai-robotics': 'AI Robotics',
      'ai-visual-recognition': 'AI Visual Recognition',
      'about': 'About',
      'contact': 'Contact',
      'services': 'Services',
      'blog': 'Blog',
      'community': 'Community'
    };
    
    return nameMap[pathname] || pathname.charAt(0).toUpperCase() + pathname.slice(1);
  };

  const pathSegments = pathname.split('/').filter(segment => segment !== '');
  
  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
      <Link href="/" className="flex items-center hover:text-gray-700">
        <HomeIcon className="h-4 w-4" />
      </Link>
      {pathSegments.map((segment, index) => {
        const href = '/' + pathSegments.slice(0, index + 1).join('/');
        const isLast = index === pathSegments.length - 1;
        
        return (
          <React.Fragment key={href}>
            <ChevronRightIcon className="h-4 w-4" />
            {isLast ? (
              <span className="text-gray-900 font-medium">
                {getBreadcrumbName(segment)}
              </span>
            ) : (
              <Link href={href} className="hover:text-gray-700">
                {getBreadcrumbName(segment)}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;