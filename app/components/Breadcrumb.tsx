import React from "react";
import { useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

const Breadcrumb: React.FC = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(segment => segment !== '');

  if (pathSegments.length === 0) {
    return null; // Don't show breadcrumb on home page
  }

  const getBreadcrumbLabel = (segment: string) => {
    const labels: { [key: string]: string } = {
      'about': 'About Us',
      'contact': 'Contact',
      'services': 'Services',
      'ai-services': 'AI Services',
      'micro-saas': 'Micro SAAS',
      '5g-solutions': '5G Solutions',
      'blog': 'Blog',
      'tutorials': 'Tutorials',
      'demo': 'Demo',
      'support': 'Support',
      'privacy': 'Privacy Policy',
      'terms': 'Terms of Service',
      'ai-analytics': 'AI Analytics',
      'ai-content-generation': 'AI Content Generation',
      'ai-customer-support': 'AI Customer Support',
      'ai-cybersecurity': 'AI Cybersecurity',
      'ai-data-analytics': 'AI Data Analytics',
      'ai-marketing-automation': 'AI Marketing Automation',
      'ai-workflow-automation': 'AI Workflow Automation',
      'cloud-infrastructure': 'Cloud Infrastructure',
      'web-development': 'Web Development',
      'mobile-development': 'Mobile Development',
      'it-consulting': 'IT Consulting',
      'network-security': 'Network Security',
      'zion-analytics-pro': 'Zion Analytics Pro',
      'zion-security-shield': 'Zion Security Shield',
      'zion-cloud-vault': 'Zion Cloud Vault',
      '5g-data-analytics': '5G Data Analytics',
      '5g-edge-computing': '5G Edge Computing',
      '5g-implementation': '5G Implementation'
    };
    
    return labels[segment] || segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ');
  };

  return (
    <nav className="bg-black/10 backdrop-blur-sm border-b border-white/5 py-2" aria-label="Breadcrumb">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center space-x-2 text-sm">
          <li>
            <a
              href="/"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center"
            >
              <Home className="w-4 h-4 mr-1" />
              Home
            </a>
          </li>
          {pathSegments.map((segment, index) => (
            <li key={segment} className="flex items-center">
              <ChevronRight className="w-4 h-4 text-gray-500 mx-2" />
              <span className="text-gray-300">
                {getBreadcrumbLabel(segment)}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumb;
