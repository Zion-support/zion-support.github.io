'use client';
import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumb: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  if (pathnames.length === 0) {
    return null;
  }

  const getBreadcrumbName = (pathname: string) => {
    const nameMap: Record<string, string> = {
      'about': 'About Us',
      'services': 'Services',
      'pricing': 'Pricing',
      'contact': 'Contact',
      'blog': 'Blog',
      'case-studies': 'Case Studies',
      'careers': 'Careers',
      'partners': 'Partners',
      'support': 'Support',
      'faq': 'FAQ',
      'demo': 'Demo',
      'consultation': 'Consultation',
      'micro-saas': 'Micro SaaS Solutions',
      'ai-services': 'AI Services',
      'ai-marketing': 'AI Marketing',
      'ai-customer-support': 'AI Customer Support',
      'ai-data-analytics': 'AI Data Analytics',
      'ai-content-generation': 'AI Content Generation',
      'ai-healthcare': 'AI Healthcare',
      'ai-fintech': 'AI Financial Services',
      'ai-ecommerce-solutions': 'AI E-commerce',
      'ai-cybersecurity': 'AI Cybersecurity',
      'cloud-services': 'Cloud Services',
      'cloud-migration': 'Cloud Migration',
      'devops': 'DevOps & CI/CD',
      'database': 'Database Services',
      'cybersecurity': 'Cybersecurity',
      'security-monitoring': 'Security Monitoring',
      'penetration-testing': 'Penetration Testing',
      'it-infrastructure': 'IT Infrastructure',
      'managed-it': 'Managed IT Services',
      'it-consulting': 'IT Consulting',
      'data-analytics': 'Data Analytics',
      'mobile-development': 'Mobile Development',
      'web-development': 'Web Development',
      'process-automation': 'Process Automation'
    };

    return nameMap[pathname] || pathname.charAt(0).toUpperCase() + pathname.slice(1).replace(/-/g, ' ');
  };

  return (
    <nav className="bg-white/5 backdrop-blur-sm border-b border-white/10 py-2" aria-label="Breadcrumb">
      <div className="max-w-7xl mx-auto px-4">
        <ol className="flex items-center space-x-2 text-sm">
          <li>
            <Link
              to="/"
              className="flex items-center text-gray-300 hover:text-white transition-colors duration-200"
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
                <ChevronRight className="w-4 h-4 text-gray-400 mx-2" />
                {isLast ? (
                  <span className="text-white font-medium" aria-current="page">
                    {getBreadcrumbName(pathname)}
                  </span>
                ) : (
                  <Link
                    to={routeTo}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
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