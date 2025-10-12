'use client';
import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumb: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const getBreadcrumbName = (pathname: string) => {
    const nameMap: { [key: string]: string } = {
      'about': 'About',
      'contact': 'Contact',
      'services': 'Services',
      'pricing': 'Pricing',
      'blog': 'Blog',
      'case-studies': 'Case Studies',
      'careers': 'Careers',
      'ai-services': 'AI Services',
      'it-services': 'IT Services',
      'micro-saas': 'Micro SAAS',
      'tutorials': 'Tutorials',
      'consultation': 'Consultation',
      'demo': 'Demo',
      'support': 'Support',
      'privacy': 'Privacy Policy',
      'terms': 'Terms of Service',
      'cookies': 'Cookie Policy',
      'sitemap': 'Sitemap',
      'team': 'Team',
      'partners': 'Partners',
      'status': 'Status',
      'faq': 'FAQ',
      'docs': 'Documentation',
      'api-docs': 'API Documentation',
      'community': 'Community',
      'compliance': 'Compliance',
      'ai-analytics': 'AI Analytics',
      'ai-automation': 'AI Automation',
      'ai-chatbot-builder': 'AI Chatbot Builder',
      'ai-cybersecurity': 'AI Cybersecurity',
      'ai-crm': 'AI CRM',
      'ai-data-analytics': 'AI Data Analytics',
      'ai-healthcare': 'AI Healthcare',
      'ai-financial-services': 'AI Financial Services',
      'ai-computer-vision': 'AI Computer Vision',
      'ai-voice-solutions': 'AI Voice Solutions',
      'ai-ecommerce-solutions': 'AI E-commerce Solutions',
      'ai-hr-solutions': 'AI HR Solutions',
      'ai-content-generation': 'AI Content Generation',
      'ai-workflow-automation': 'AI Workflow Automation',
      'ai-document-processing': 'AI Document Processing',
      'ai-predictive-analytics': 'AI Predictive Analytics',
      'ai-edge-computing': 'AI Edge Computing',
      'ai-video-analysis': 'AI Video Analysis',
      'ai-speech-synthesis': 'AI Speech Synthesis',
      'ai-recommendation-engine': 'AI Recommendation Engine',
      'ai-sentiment-analysis': 'AI Sentiment Analysis',
      'ai-chatbot-enterprise': 'AI Chatbot Enterprise',
      'ai-content-moderation': 'AI Content Moderation',
      'ai-predictive-modeling': 'AI Predictive Modeling',
      'ai-document-intelligence': 'AI Document Intelligence',
      'ai-conversation-analytics': 'AI Conversation Analytics',
      'ai-supply-chain-ai': 'AI Supply Chain AI',
      'ai-healthcare-diagnostics': 'AI Healthcare Diagnostics',
      'ai-financial-forecasting': 'AI Financial Forecasting',
      'ai-iot-analytics': 'AI IoT Analytics',
      'ai-conversational-ai': 'AI Conversational AI',
      'ai-automated-testing': 'AI Automated Testing',
      'ai-knowledge-management': 'AI Knowledge Management',
      'ai-customer-churn': 'AI Customer Churn',
      'ai-automated-reporting': 'AI Automated Reporting',
      'ai-voice-assistant': 'AI Voice Assistant',
      'ai-content-generation-pro': 'AI Content Generation Pro',
      'cloud-infrastructure': 'Cloud Infrastructure',
      'cybersecurity-solutions': 'Cybersecurity Solutions',
      'web-development': 'Web Development',
      'mobile-development': 'Mobile Development',
      'api-development': 'API Development',
      'database-management': 'Database Management',
      'devops-cicd': 'DevOps CI/CD',
      'it-support': 'IT Support',
      'data-analytics-bi': 'Data Analytics & BI',
      'custom-software': 'Custom Software',
      'network-infrastructure': 'Network Infrastructure',
      'it-asset-management': 'IT Asset Management',
      'it-security-services': 'IT Security Services',
      'it-project-management': 'IT Project Management',
      'cloud-native-development': 'Cloud Native Development',
      'ai-integration-services': 'AI Integration Services',
      'blockchain-development': 'Blockchain Development',
      'iot-development': 'IoT Development',
      'e-commerce-development': 'E-commerce Development',
      'api-development-advanced': 'API Development Advanced',
      'data-engineering': 'Data Engineering',
      'cybersecurity-advanced': 'Cybersecurity Advanced',
      'cloud-migration-advanced': 'Cloud Migration Advanced',
      'devops-advanced': 'DevOps Advanced',
      'machine-learning-ops': 'Machine Learning Ops',
      'enterprise-integration': 'Enterprise Integration',
      'performance-optimization': 'Performance Optimization',
      'disaster-recovery-advanced': 'Disaster Recovery Advanced',
      'compliance-automation': 'Compliance Automation',
      'cloud-cost-optimization': 'Cloud Cost Optimization',
      'security-automation': 'Security Automation',
      'data-visualization': 'Data Visualization',
      'workflow-automation': 'Workflow Automation',
      'cloud-native-security': 'Cloud Native Security',
      'zion-analytics-pro': 'Zion Analytics Pro',
      'zion-chat-ai': 'Zion Chat AI',
      'zion-security-shield': 'Zion Security Shield',
      'zion-cloud-vault': 'Zion Cloud Vault',
      'zion-content-studio': 'Zion Content Studio',
      'zion-crm-intelligence': 'Zion CRM Intelligence',
      'zion-data-sync': 'Zion Data Sync',
      'zion-lead-magnet': 'Zion Lead Magnet',
      'zion-project-master': 'Zion Project Master',
      'zion-email-automation': 'Zion Email Automation',
      'zion-inventory-smart': 'Zion Inventory Smart',
      'zion-invoice-genius': 'Zion Invoice Genius',
      'zion-workflow-automation': 'Zion Workflow Automation',
      'zion-performance-monitor': 'Zion Performance Monitor',
      'zion-compliance-manager': 'Zion Compliance Manager',
      'zion-social-scheduler': 'Zion Social Scheduler',
      'zion-ai-video-editor': 'Zion AI Video Editor',
      'zion-ai-translator-pro': 'Zion AI Translator Pro',
      'zion-ai-code-reviewer': 'Zion AI Code Reviewer',
      'zion-customer-insights': 'Zion Customer Insights',
      'zion-ai-email-assistant': 'Zion AI Email Assistant',
      'zion-ai-meeting-assistant': 'Zion AI Meeting Assistant',
      'zion-ai-seo-optimizer': 'Zion AI SEO Optimizer',
      'zion-ai-data-cleaner': 'Zion AI Data Cleaner',
      'zion-ai-contract-analyzer': 'Zion AI Contract Analyzer',
      'zion-ai-survey-builder': 'Zion AI Survey Builder',
      'zion-ai-accounting-assistant': 'Zion AI Accounting Assistant',
      'zion-ai-recruitment-pro': 'Zion AI Recruitment Pro',
      'zion-ai-content-moderation': 'Zion AI Content Moderation',
      'zion-ai-predictive-maintenance': 'Zion AI Predictive Maintenance',
      'zion-ai-energy-manager': 'Zion AI Energy Manager',
      'zion-ai-supply-chain-optimizer': 'Zion AI Supply Chain Optimizer',
      'zion-ai-fraud-detector': 'Zion AI Fraud Detector',
      'zion-ai-customer-service-pro': 'Zion AI Customer Service Pro',
      'zion-ai-marketing-automation': 'Zion AI Marketing Automation',
      'zion-ai-document-ai': 'Zion AI Document AI',
      '5g-implementation': '5G Implementation',
      'ai-3d-generation': 'AI 3D Generation',
      'ai-holographic-workspace': 'AI Holographic Workspace',
      'ai-autonomous-systems': 'AI Autonomous Systems',
      'ai-blockchain-solutions': 'AI Blockchain Solutions',
      'quantum-computing': 'Quantum Computing',
      'ar-vr-solutions': 'AR/VR Solutions',
      'iot-integration': 'IoT Integration',
      'machine-learning': 'Machine Learning'
    };
    
    return nameMap[pathname] || pathname.charAt(0).toUpperCase() + pathname.slice(1).replace(/-/g, ' ');
  };

  if (pathnames.length === 0) {
    return null;
  }

  return (
    <nav aria-label="Breadcrumb" className="bg-gray-900/50 py-2 px-4">
      <ol className="flex items-center space-x-2 text-sm text-gray-400 max-w-7xl mx-auto">
        <li>
          <Link 
            to="/" 
            className="flex items-center hover:text-purple-400 transition-colors"
            aria-label="Home"
          >
            <Home className="h-4 w-4" />
            <span className="sr-only">Home</span>
          </Link>
        </li>
        {pathnames.map((pathname, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          const name = getBreadcrumbName(pathname);

          return (
            <li key={pathname} className="flex items-center">
              <ChevronRight className="h-4 w-4 mx-2 text-gray-500" />
              {isLast ? (
                <span className="text-white font-medium" aria-current="page">
                  {name}
                </span>
              ) : (
                <Link 
                  to={routeTo} 
                  className="hover:text-purple-400 transition-colors"
                >
                  {name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;