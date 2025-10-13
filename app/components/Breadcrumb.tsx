import React from 'react';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
'use client;
=======
import { Link, useLocation } from 'react-router-dom';
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0ff3

<<<<<<< HEAD
import React from 'react;

import { useLocation } from 'react-router-dom;

import { ChevronRight, Home } from 'lucide-react;

import { Link } from react-router-dom;

interface BreadcrumbItem {}
  name: string;

  href: string;

  current?: boolean;

interface BreadcrumbProps {
  items: Array<{
    label: string;
    href?: string;
  }>;
  className?: string;
}
export default function Breadcrumb({ items, className = '' }: BreadcrumbProps) {
  return (
    <nav className={`breadcrumb ${className}`} aria-label="Breadcrumb">
      <ol className="flex space-x-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && <span className="mx-2">/</span>}
            {item.href ? (
              <Link to={item.href} className="text-blue-600 hover:text-blue-800">
                {item.label}
              </Link>
            ) : (
              <span className="text-gray-500">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
const Breadcrumb: React.FC = () => {
  const location = useLocation();;;
=======
const Breadcrumb: React.FC = () => {
  const location = useLocation();
  
  const pathnames = location.pathname.split('/').filter((x) => x);
  
  if (pathnames.length === 0) {
    return null;
  }

  const getBreadcrumbName = (path: string) => {
    const nameMap: { [key: string]: string } = {
      'ai-services': 'AI Services',
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
      'services': 'IT Services',
      'cloud-migration': 'Cloud Migration',
      'devops-services': 'DevOps Services',
      'it-consulting': 'IT Consulting',
      'network-security': 'Network Security',
      'software-development': 'Software Development',
      'system-integration': 'System Integration',
      'web-development': 'Web Development',
      'micro-saas': 'Micro SAAS',
      '5g-solutions': '5G Solutions',
      'about': 'About',
      'contact': 'Contact',
      'blog': 'Blog',
      'privacy': 'Privacy Policy',
      'terms': 'Terms of Service'
    };
    
    return nameMap[path] || path.charAt(0).toUpperCase() + path.slice(1).replace(/-/g, ' ');
  };

  return (
    <nav className="bg-slate-800/50 backdrop-blur-sm border-b border-white/10 py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center space-x-2 text-sm">
          <li>
            <Link
              to="/"
              className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center"
            >
              <Home className="w-4 h-4" />
            </Link>
          </li>
          
          {pathnames.map((path, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;
            const name = getBreadcrumbName(path);
            
            return (
              <li key={routeTo} className="flex items-center space-x-2">
                <ChevronRight className="w-4 h-4 text-gray-500" />
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
};
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1091

  const generateBreadcrumbs = (): BreadcrumbItem[] => {;;;

    const pathSegments = location.pathname.split('/').filter(segment => segment !== );;

  const generateBreadcrumbs = (): BreadcrumbItem[] => {}
    const pathSegments = location.pathname.split('/').filter(segment => segment !== '');
    const breadcrumbs: BreadcrumbItem[] = [
      { name: 'Home', href: '/ }

    ];

    let currentPath = ;;

    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment};

      const isLast = index === pathSegments.length - 1;;


    return breadcrumbs;

  };

  const breadcrumbs = generateBreadcrumbs();;

  // Dont show breadcrumb on home page
  if (location.pathname === '/) {

    <nav className="bg-gray-900/50 backdrop-blur-sm border-b border-gray-700/50" aria-label="Breadcrumb>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8>
        <ol className="flex items-center space-x-2 py-3 text-sm>
          {breadcrumbs.map((item, index) => (

            <li key={item.href} className="flex items-center>
              {index > 0 && (

                <ChevronRight className="w-4 h-4 text-gray-400 mx-2" aria-hidden="true />
              )}

              {index === 0 ? (


}
export default Breadcrumb;
