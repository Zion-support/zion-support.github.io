import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumb: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const getBreadcrumbName = (pathname: string) => {
    const nameMap: { [key: string]: string } = {
      'ai-services': 'AI Services',
      'micro-saas': 'Micro SAAS',
      '5g-solutions': '5G Solutions',
      'about': 'About Us',
      'contact': 'Contact',
      'services': 'Services',
      'blog': 'Blog',
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
      'ai-chatbot-builder': 'AI Chatbot Builder',
      'ai-code-assistant': 'AI Code Assistant',
      'ai-design-studio': 'AI Design Studio',
      'ai-business-intelligence': 'AI Business Intelligence',
      'ai-automation': 'AI Automation',
      'ai-computer-vision': 'AI Computer Vision',
      'ai-conversational-ai': 'AI Conversational AI',
      'ai-crm': 'AI CRM',
      'ai-customer-insights': 'AI Customer Insights',
      'ai-data-visualization': 'AI Data Visualization',
      'ai-devops-automation': 'AI DevOps Automation',
      'ai-document-intelligence': 'AI Document Intelligence',
      'cloud-migration': 'Cloud Migration',
      'it-consulting': 'IT Consulting',
      'network-security': 'Network Security',
      'system-integration': 'System Integration',
      'web-development': 'Web Development',
      'it-services': 'IT Services',
      'it-security-services': 'IT Security Services',
      'it-project-management': 'IT Project Management',
      'it-infrastructure': 'IT Infrastructure',
      'it-support': 'IT Support',
      'cloud-infrastructure': 'Cloud Infrastructure',
      'cybersecurity-solutions': 'Cybersecurity Solutions',
      'mobile-development': 'Mobile Development',
      'database-management': 'Database Management',
      'custom-software': 'Custom Software',
      'network-infrastructure': 'Network Infrastructure',
      '5g-data-analytics': '5G Data Analytics',
      '5g-edge-computing': '5G Edge Computing',
      '5g-implementation': '5G Implementation',
      '5g-mobile-applications': '5G Mobile Applications',
      '5g-network-infrastructure': '5G Network Infrastructure',
      '5g-private-networks': '5G Private Networks',
      '5g-smart-city-solutions': '5G Smart City Solutions',
      '5g-iot-solutions': '5G IoT Solutions',
      'micro-saas-services': 'Micro SAAS Services',
      'ai-analytics-dashboard': 'AI Analytics Dashboard',
      'ai-lead-generation': 'AI Lead Generation',
      'ai-content-generator': 'AI Content Generator',
      'ai-email-assistant': 'AI Email Assistant',
      'zion-analytics-pro': 'Zion Analytics Pro',
      'zion-security-shield': 'Zion Security Shield',
      'zion-cloud-vault': 'Zion Cloud Vault',
      'zion-ai-crm-pro': 'Zion AI CRM Pro',
      'zion-ai-marketing-automation-pro': 'Zion AI Marketing Automation Pro',
      'zion-ai-project-manager-pro': 'Zion AI Project Manager Pro',
      'tutorials': 'Tutorials',
      'demo': 'Demo',
      'support': 'Support'
    };

    return nameMap[pathname] || pathname.charAt(0).toUpperCase() + pathname.slice(1);
  };

  if (pathnames.length === 0) {
    return null;
  }

  return (
    <nav className="bg-black/10 backdrop-blur-sm border-b border-white/5 py-2" aria-label="Breadcrumb">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center space-x-2 text-sm">
          <li>
            <Link
              to="/"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center"
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
              <li key={pathname} className="flex items-center">
                <ChevronRight className="w-4 h-4 text-gray-500 mx-2" />
                {isLast ? (
                  <span className="text-cyan-400 font-medium" aria-current="page">
                    {name}
                  </span>
                ) : (
                  <Link
                    to={routeTo}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
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