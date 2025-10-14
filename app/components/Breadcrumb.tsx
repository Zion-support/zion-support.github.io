import React from 'react';
import Link from 'next/link';
import { ChevronRightIcon, HomeIcon } from '@heroicons/react/24/outline';

interface BreadcrumbProps {
  className?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ className = '' }) => {
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
      'ai-optimization': 'AI Optimization',
      'ai-predictive-analytics': 'AI Predictive Analytics',
      'ai-process-automation': 'AI Process Automation',
      'ai-robotics': 'AI Robotics',
      'ai-voice-assistants': 'AI Voice Assistants',
      'about': 'About',
      'contact': 'Contact',
      'services': 'Services',
      'blog': 'Blog',
      'community': 'Community'
    };
    return nameMap[pathname] || pathname.charAt(0).toUpperCase() + pathname.slice(1);
  };

  // This would typically get the current path from useRouter or props
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '';
  const pathSegments = currentPath.split('/').filter(segment => segment !== '');

  return (
    <nav className={`flex items-center space-x-2 text-sm text-gray-500 ${className}`}>
      <Link href="/" className="flex items-center hover:text-gray-700">
        <HomeIcon className="w-4 h-4 mr-1" />
        Home
      </Link>
      
      {pathSegments.map((segment, index) => {
        const isLast = index === pathSegments.length - 1;
        const href = '/' + pathSegments.slice(0, index + 1).join('/');
        const name = getBreadcrumbName(segment);
        
        return (
          <React.Fragment key={segment}>
            <ChevronRightIcon className="w-4 h-4" />
            {isLast ? (
              <span className="text-gray-900 font-medium">{name}</span>
            ) : (
              <Link href={href} className="hover:text-gray-700">
                {name}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;