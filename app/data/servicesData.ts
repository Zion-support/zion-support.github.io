// Define the shape of a service
export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  pricing: Record<string, string>; // e.g., { basic: '$99/mo', pro: '$299/mo' }
  category: 'ai' | 'it' | 'cloud' | 'security' | 'data' | 'automation' | 'micro-saas';
  benefits?: string[];
  popular?: boolean;
  icon?: string;
  href?: string;
  industry?: string;
  contactInfo?: {
    website?: string;
    email?: string;
    phone?: string;
    address?: string;
  };
}

// All services offered by Zion Tech Group
export const allServices: Service[] = [
  {
    id: 'ai-powered-analytics',
    title: 'AI-Powered Analytics',
    description: 'Leverage artificial intelligence to uncover insights, predict trends, and make data-driven decisions.',
    features: [
      'Predictive modeling',
      'Anomaly detection',
      'Natural language querying',
      'Real-time dashboards',
      'Custom AI model training'
    ],
    pricing: { basic: '$499/mo', pro: '$1,499/mo', enterprise: 'Custom' },
    category: 'ai'
  },
  {
    id: 'ai-strategy-consulting',
    title: 'AI Strategy Consulting',
    description: 'Expert guidance to develop and implement AI strategies aligned with business goals.',
    features: [
      'AI readiness assessment',
      'Use case identification',
      'Roadmap development',
      'Technology selection',
      'Change management'
    ],
    pricing: { basic: '$2,500/project', pro: '$7,500/project', enterprise: 'Custom' },
    category: 'ai'
  },
  {
    id: 'conversational-ai-solutions',
    title: 'Conversational AI Solutions',
    description: 'Build intelligent chatbots and voice assistants for customer service and internal operations.',
    features: [
      'Multi-language support',
      'Context-aware conversations',
      'Integration with CRM/ERP',
      'Sentiment analysis',
      'Continuous learning'
    ],
    pricing: { basic: '$299/mo', pro: '$899/mo', enterprise: 'Custom' },
    category: 'ai'
  },
  {
    id: 'custom-ai-model-development',
    title: 'Custom AI Model Development',
    description: 'Tailored AI models for specific business problems, from computer vision to NLP.',
    features: [
      'Data collection and labeling',
      'Model architecture design',
      'Training and validation',
      'Deployment and monitoring',
      'MLOps pipeline setup'
    ],
    pricing: { basic: '$5,000/project', pro: '$15,000/project', enterprise: 'Custom' },
    category: 'ai'
  },
  {
    id: 'intelligent-process-automation',
    title: 'Intelligent Process Automation',
    description: 'Automate repetitive tasks with AI-powered bots and workflow orchestration.',
    features: [
      'Robotic Process Automation (RPA)',
      'AI decision making',
      'Process mining',
      'Bot orchestration',
      'Human-in-the-loop'
    ],
    pricing: { basic: '$399/mo', pro: '$1,199/mo', enterprise: 'Custom' },
    category: 'automation'
  },
  {
    id: 'it-endpoint-security-compliance',
    title: 'IT Endpoint Security & Compliance',
    description: 'Comprehensive endpoint protection and compliance management for all devices.',
    features: [
      'Antivirus and anti-malware',
      'Device encryption',
      'Patch management',
      'Compliance reporting (GDPR, HIPAA, etc.)',
      'Remote wipe and lock'
    ],
    pricing: { basic: '$5/device/mo', pro: '$12/device/mo', enterprise: 'Custom' },
    category: 'security'
  },
  {
    id: 'security-compliance-audit-platform',
    title: 'Security Compliance Audit Platform',
    description: 'Automated continuous monitoring and auditing for security standards and regulations.',
    features: [
      'Real-time compliance dashboard',
      'Automated evidence collection',
      'Vulnerability scanning',
      'Policy management',
      'Audit trail and reporting'
    ],
    pricing: { basic: '$199/mo', pro: '$599/mo', enterprise: 'Custom' },
    category: 'security'
  },
  {
    id: 'cloud-migration-optimization',
    title: 'Cloud Migration & Optimization',
    description: 'Seamlessly migrate to the cloud and optimize costs, performance, and security.',
    features: [
      'Cloud readiness assessment',
      'Migration planning and execution',
      'Cost optimization',
      'Performance tuning',
      'Security hardening'
    ],
    pricing: { basic: '$1,000/project', pro: '$3,000/project', enterprise: 'Custom' },
    category: 'cloud'
  },
  {
    id: 'data-warehouse-solutions',
    title: 'Data Warehouse Solutions',
    description: 'Scalable data warehousing for analytics and business intelligence.',
    features: [
      'ETL/ELT pipeline design',
      'Data modeling',
      'Query performance optimization',
      'BI tool integration',
      'Data governance'
    ],
    pricing: { basic: '$799/mo', pro: '$2,499/mo', enterprise: 'Custom' },
    category: 'data'
  },
  {
    id: 'ai-employee-experience',
    title: 'AI Employee Experience Platform',
    description: 'Enhance employee engagement and productivity with AI-driven insights and automation.',
    features: [
      'Sentiment analysis from communications',
      'Personalized learning recommendations',
      'Automated HR query handling',
      'Performance prediction',
      'Wellness monitoring'
    ],
    pricing: { basic: '$4/user/mo', pro: '$12/user/mo', enterprise: 'Custom' },
    category: 'ai'
  },
  {
    id: 'ai-knowledge-management',
    title: 'AI Knowledge Management System',
    description: 'Intelligent knowledge base that learns and surfaces relevant information instantly.',
    features: [
      'Semantic search',
      'Automatic tagging and categorization',
      'Content recommendation',
      'Knowledge gap identification',
      'Multi-language support'
    ],
    pricing: { basic: '$3/user/mo', pro: '$9/user/mo', enterprise: 'Custom' },
    category: 'ai'
  },
  {
    id: 'ai-capacity-planner',
    title: 'AI Capacity Planner',
    description: 'Predict resource needs and optimize infrastructure usage with machine learning.',
    features: [
      'Demand forecasting',
      'Resource allocation optimization',
      'Cost prediction',
      'Scaling recommendations',
      'What-if scenario analysis'
    ],
    pricing: { basic: '$299/mo', pro: '$899/mo', enterprise: 'Custom' },
    category: 'ai'
  }
];