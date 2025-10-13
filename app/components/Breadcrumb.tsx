import React from 'react';
import { Link, useLocation } from 'react-router-dom'; origin/cursor/analyze-improve-and-deploy-application-0ff3
;
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
      '5G-solutions': '5G Solutions',
      'about': 'About',
      'contact': 'Contact',
      'blog': 'Blog',
      'privacy': 'Privacy Policy',
      'terms': 'Terms of Service'
    };
    return nameMap[path] || path.charAt(0).toUpperCase() + path.slice(1).replace(/-/g, ' ');
  };
  return (
    <nav className="bg-slate-800/50 backdrop-blur-sm border-b border-white/10 py-3" /><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" /><ol className="flex items-center space-x-2 text-sm" /><li /><Link;
              to="/"
              className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center"
             /><Home className="w-4 h-4" />
            </Link>
          </li>
          {pathnames.map((path, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;
            const name = getBreadcrumbName(path);
            return (
              <li key={routeTo} className="flex items-center space-x-2" /><ChevronRight className="w-4 h-4 text-gray-500" />
                {isLast ? (
                  <span className="text-cyan-400 font-medium">{name}</span>
                ) : (
                  <Link;
                    to={routeTo}
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    {name}</Link>
                  </Link>
                )}
              </li>
            );
          })}
 origin/cursor/analyze-improve-and-deploy-application-1232;
        </ol>
      </div>
    </nav>
  );
};
 origin/cursor/analyze-improve-and-deploy-application-1247
;
 origin/cursor/analyze-improve-and-deploy-application-1232;
export default Breadcrumb;
