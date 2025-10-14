import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumb: React.FC = () => {
  const location = useLocation();
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumb: React.FC = () => {
  const location = useLocation();    return null;
  }

  const getBreadcrumbName = (pathname: string) => {
    const nameMap: Record<string, string> = {
      'about': 'About',
      'services': 'Services',
      'ai-services': 'AI Services',
      'micro-saas': 'Micro SAAS',
      '5g-solutions': '5G Solutions',
      'blog': 'Blog',
      'contact': 'Contact',
      'privacy': 'Privacy Policy',
      'terms': 'Terms of Service',
      'tutorials': 'Tutorials',
      'demo': 'Demo',
      'support': 'Support'
    };

    return nameMap[pathname] || pathname.charAt(0).toUpperCase() + pathname.slice(1);
  };

  return (
    <nav className="bg-slate-800/50 backdrop-blur-sm border-b border-white/10 py-2" aria-label="Breadcrumb">
    <nav className="bg-slate-800/50 backdrop-blur-sm border-b border-cyan-500/20 py-3">              <Home className="w-4 h-4" />
              <span className="sr-only">Home</span>
            </Link>
          </li> cursor/analyze-improve-and-deploy-application-30da
          {pathSegments.map((segment, index) => (
            <li key={segment.path} className="flex items-center">
              <ChevronRight className="w-4 h-4 text-gray-500 mx-2" />
              {segment.isLast ? (
                <span className="text-cyan-400 font-medium"
