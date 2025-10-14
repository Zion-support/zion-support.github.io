import React from 'react';
import Link from 'next/link';

interface BreadcrumbProps {
  className?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ className = '' }) => {
  // const getBreadcrumbName = (pathname: string) => {
  //   const nameMap: Record<string, string> = {
  //     'ai-services': 'AI Services',
  //     'ai-analytics': 'AI Analytics',
  //     'ai-automation-platform': 'AI Automation Platform',
  //     'ai-content-generation': 'AI Content Generation',
  //     'ai-customer-support': 'AI Customer Support',
  //     'ai-cybersecurity': 'AI Cybersecurity',
  //     'ai-data-analytics': 'AI Data Analytics',
  //     'ai-enterprise-solutions': 'AI Enterprise Solutions',
  //     'ai-integration': 'AI Integration',
  //     'ai-machine-learning': 'AI Machine Learning',
  //     'ai-natural-language-processing': 'AI Natural Language Processing',
  //     'ai-predictive-analytics': 'AI Predictive Analytics',
  //     'ai-process-automation': 'AI Process Automation',
  //     'ai-robotic-process-automation': 'AI Robotic Process Automation',
  //     'ai-visual-recognition': 'AI Visual Recognition',
  //     'about': 'About',
  //     'blog': 'Blog',
  //     'careers': 'Careers',
  //     'case-studies': 'Case Studies',
  //     'cloud-infrastructure': 'Cloud Infrastructure',
  //     'contact': 'Contact',
  //     'custom-development': 'Custom Development',
  //     'data-analytics': 'Data Analytics',
  //     'digital-transformation': 'Digital Transformation',
  //     'it-services': 'IT Services',
  //     'marketing-tools': 'Marketing Tools',
  //     'micro-saas-services': 'Micro SaaS Services',
  //     'services': 'Services'
  //   };
  //   
  //   return nameMap[pathname] || pathname.charAt(0).toUpperCase() + pathname.slice(1);
  // };

  return (
    <nav className={`breadcrumb ${className}`}>
      <ol className="flex items-center space-x-2 text-sm text-gray-500">
        <li>
          <Link href="/" className="hover:text-gray-700">
            Home
          </Link>
        </li>
        <li className="text-gray-400">/</li>
        <li className="text-gray-900 font-medium">
          Current Page
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;