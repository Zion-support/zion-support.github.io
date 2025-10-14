<<<<<<< HEAD
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumb: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  if (pathnames.length === 0) {
    return null;
  }
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-54ad

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

  return (
<<<<<<< HEAD
    <nav className="bg-slate-800/50 backdrop-blur-sm border-b border-white/10 py-3 px-4">
      <div className="max-w-7xl mx-auto">
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
            const name = getBreadcrumbName(pathname);

            return (
              <li key={pathname} className="flex items-center space-x-2">
                <ChevronRight className="w-4 h-4 text-gray-500" />
                {isLast ? (
                  <span className="text-white font-medium">{name}</span>
                ) : (
                  <Link
                    to={routeTo}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
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
      <h2 className="text-xl font-semibold mb-2">Breadcrumb</h2>
      <p>This component is under construction.</p>
    </div>)
  );
};
;
export default Breadcrumb;
>>>>>>> origin/main
>>>>>>> origin/main
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-54ad
