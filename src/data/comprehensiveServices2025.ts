export interface Service {
  id: string;
  title: string;
  description: string;
  category: string;
  price: number;
  priceRange: string;
  features: string[];
  benefits: string[];
  useCases: string[];
  technologies: string[];
  tags: string[];
  icon: string;
  color: string;
  link: string;
  contactInfo: {
    phone: string;
    email: string;
    address: string;
  };
}

export const COMPREHENSIVE_SERVICES_2025: Service[] = [
  // AI & Machine Learning Services
  {
    id: 'ai-autonomous-research-assistant',
    title: 'AI Autonomous Research Assistant',
    description: 'Advanced AI-powered research automation that conducts comprehensive market analysis, competitive intelligence, and trend forecasting autonomously.',
    category: 'AI & Analytics',
    price: 2500,
    priceRange: '$2,000 - $5,000',
    features: [
      'Autonomous market research and analysis',
      'Real-time competitive intelligence',
      'Predictive trend forecasting',
      'Natural language research queries',
      'Automated report generation',
      'Multi-source data integration'
    ],
    benefits: [
      'Reduce research time by 80%',
      'Improve decision accuracy by 60%',
      '24/7 autonomous operation',
      'Scalable research capabilities'
    ],
    useCases: [
      'Market entry strategy',
      'Competitive analysis',
      'Product development research',
      'Investment due diligence'
    ],
    technologies: ['GPT-4', 'BERT', 'TensorFlow', 'PyTorch', 'NLP', 'Data Mining'],
    tags: ['AI', 'Research', 'Analytics', 'Automation', 'Intelligence'],
    icon: 'Brain',
    color: 'from-purple-500 to-pink-600',
    link: 'https://ziontechgroup.com/services/ai-autonomous-research-assistant',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  },
  {
    id: 'ai-quantum-hybrid-platform',
    title: 'AI Quantum Hybrid Platform',
    description: 'Revolutionary platform combining quantum computing with AI for solving complex optimization problems and advanced simulations.',
    category: 'Quantum Computing',
    price: 15000,
    priceRange: '$10,000 - $25,000',
    features: [
      'Quantum-AI hybrid algorithms',
      'Complex optimization solving',
      'Advanced simulation capabilities',
      'Real-time quantum processing',
      'Scalable quantum resources',
      'Hybrid classical-quantum workflows'
    ],
    benefits: [
      '1000x faster optimization',
      'Unprecedented computational power',
      'Breakthrough problem-solving',
      'Future-proof technology'
    ],
    useCases: [
      'Financial portfolio optimization',
      'Drug discovery simulations',
      'Logistics optimization',
      'Cryptographic applications'
    ],
    technologies: ['Qiskit', 'Cirq', 'TensorFlow Quantum', 'IBM Quantum', 'Google Quantum'],
    tags: ['Quantum', 'AI', 'Optimization', 'Simulation', 'Advanced Computing'],
    icon: 'Atom',
    color: 'from-cyan-500 to-blue-600',
    link: 'https://ziontechgroup.com/services/ai-quantum-hybrid-platform',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  },
  {
    id: 'ai-cybersecurity-threat-detection',
    title: 'AI Cybersecurity Threat Detection',
    description: 'Next-generation AI-powered cybersecurity platform with autonomous threat detection, response, and prevention capabilities.',
    category: 'Cybersecurity',
    price: 3500,
    priceRange: '$3,000 - $7,000',
    features: [
      'Real-time threat detection',
      'Autonomous incident response',
      'Behavioral analysis',
      'Zero-day threat prevention',
      'Compliance automation',
      'Security orchestration'
    ],
    benefits: [
      '99.9% threat detection rate',
      'Reduce response time by 90%',
      'Automated compliance management',
      'Proactive threat prevention'
    ],
    useCases: [
      'Enterprise security',
      'Financial institutions',
      'Healthcare data protection',
      'Government agencies'
    ],
    technologies: ['Machine Learning', 'Deep Learning', 'SIEM', 'EDR', 'SOAR', 'Zero Trust'],
    tags: ['Cybersecurity', 'AI', 'Threat Detection', 'Compliance', 'Security'],
    icon: 'Shield',
    color: 'from-red-500 to-orange-600',
    link: 'https://ziontechgroup.com/services/ai-cybersecurity-threat-detection',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  },
  {
    id: 'ai-financial-trading-platform',
    title: 'AI Financial Trading Platform',
    description: 'Advanced AI-powered trading platform with predictive analytics, risk management, and automated trading strategies.',
    category: 'Finance',
    price: 8000,
    priceRange: '$5,000 - $15,000',
    features: [
      'Predictive market analysis',
      'Automated trading strategies',
      'Risk management systems',
      'Portfolio optimization',
      'Real-time market data',
      'Compliance monitoring'
    ],
    benefits: [
      'Increase trading accuracy by 40%',
      'Reduce risk exposure by 60%',
      '24/7 automated trading',
      'Regulatory compliance'
    ],
    useCases: [
      'Hedge funds',
      'Investment banks',
      'Retail trading',
      'Portfolio management'
    ],
    technologies: ['Deep Learning', 'Reinforcement Learning', 'Time Series Analysis', 'Risk Models', 'Blockchain'],
    tags: ['Finance', 'Trading', 'AI', 'Analytics', 'Automation'],
    icon: 'TrendingUp',
    color: 'from-green-500 to-emerald-600',
    link: 'https://ziontechgroup.com/services/ai-financial-trading-platform',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  },
  {
    id: 'ai-healthcare-predictive-analytics',
    title: 'AI Healthcare Predictive Analytics',
    description: 'Comprehensive healthcare analytics platform for predictive diagnostics, patient care optimization, and medical research.',
    category: 'Healthcare',
    price: 5000,
    priceRange: '$4,000 - $10,000',
    features: [
      'Predictive diagnostics',
      'Patient care optimization',
      'Drug discovery support',
      'Medical image analysis',
      'Clinical trial optimization',
      'Healthcare cost reduction'
    ],
    benefits: [
      'Improve diagnostic accuracy by 30%',
      'Reduce healthcare costs by 25%',
      'Accelerate drug discovery',
      'Enhance patient outcomes'
    ],
    useCases: [
      'Hospitals and clinics',
      'Pharmaceutical companies',
      'Medical research',
      'Health insurance'
    ],
    technologies: ['Computer Vision', 'NLP', 'Predictive Modeling', 'Medical AI', 'HIPAA Compliance'],
    tags: ['Healthcare', 'AI', 'Analytics', 'Medical', 'Predictive'],
    icon: 'Heart',
    color: 'from-pink-500 to-rose-600',
    link: 'https://ziontechgroup.com/services/ai-healthcare-predictive-analytics',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  },
  {
    id: 'ai-supply-chain-optimization',
    title: 'AI Supply Chain Optimization',
    description: 'Intelligent supply chain management platform with predictive analytics, demand forecasting, and logistics optimization.',
    category: 'Logistics',
    price: 4000,
    priceRange: '$3,000 - $8,000',
    features: [
      'Demand forecasting',
      'Inventory optimization',
      'Route optimization',
      'Supplier management',
      'Risk assessment',
      'Cost optimization'
    ],
    benefits: [
      'Reduce inventory costs by 30%',
      'Improve delivery times by 40%',
      'Optimize resource allocation',
      'Enhance supplier relationships'
    ],
    useCases: [
      'Manufacturing',
      'Retail chains',
      'E-commerce',
      'Logistics companies'
    ],
    technologies: ['Machine Learning', 'Optimization Algorithms', 'IoT', 'Blockchain', 'Predictive Analytics'],
    tags: ['Supply Chain', 'Logistics', 'AI', 'Optimization', 'Analytics'],
    icon: 'Truck',
    color: 'from-blue-500 to-indigo-600',
    link: 'https://ziontechgroup.com/services/ai-supply-chain-optimization',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  },
  {
    id: 'ai-content-marketing-suite',
    title: 'AI Content Marketing Suite',
    description: 'Comprehensive AI-powered content creation, optimization, and marketing automation platform.',
    category: 'Marketing',
    price: 2000,
    priceRange: '$1,500 - $4,000',
    features: [
      'AI content generation',
      'SEO optimization',
      'Social media automation',
      'Content performance analytics',
      'Multi-channel publishing',
      'Audience targeting'
    ],
    benefits: [
      'Increase content production by 300%',
      'Improve SEO rankings by 50%',
      'Reduce marketing costs by 40%',
      'Enhance audience engagement'
    ],
    useCases: [
      'Digital marketing agencies',
      'E-commerce businesses',
      'Content creators',
      'B2B marketing'
    ],
    technologies: ['GPT-4', 'BERT', 'SEO Tools', 'Social Media APIs', 'Analytics', 'Automation'],
    tags: ['Marketing', 'Content', 'AI', 'SEO', 'Automation'],
    icon: 'PenTool',
    color: 'from-purple-500 to-violet-600',
    link: 'https://ziontechgroup.com/services/ai-content-marketing-suite',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  },
  {
    id: 'ai-hr-platform',
    title: 'AI HR Platform',
    description: 'Intelligent human resources platform with recruitment automation, employee analytics, and performance management.',
    category: 'HR',
    price: 3000,
    priceRange: '$2,500 - $6,000',
    features: [
      'AI-powered recruitment',
      'Employee performance analytics',
      'Talent management',
      'Workforce planning',
      'Compliance automation',
      'Employee engagement'
    ],
    benefits: [
      'Reduce hiring time by 60%',
      'Improve retention by 35%',
      'Enhance employee satisfaction',
      'Streamline HR processes'
    ],
    useCases: [
      'Enterprise HR departments',
      'Recruitment agencies',
      'Startups',
      'Remote teams'
    ],
    technologies: ['NLP', 'Predictive Analytics', 'HRIS Integration', 'Video AI', 'Assessment Tools'],
    tags: ['HR', 'Recruitment', 'AI', 'Analytics', 'Automation'],
    icon: 'Users',
    color: 'from-indigo-500 to-purple-600',
    link: 'https://ziontechgroup.com/services/ai-hr-platform',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  },
  {
    id: 'ai-workflow-orchestrator',
    title: 'AI Workflow Orchestrator',
    description: 'Intelligent workflow automation platform that optimizes business processes and increases operational efficiency.',
    category: 'Automation',
    price: 2500,
    priceRange: '$2,000 - $5,000',
    features: [
      'Process automation',
      'Workflow optimization',
      'Integration management',
      'Performance monitoring',
      'Custom automation rules',
      'Scalable workflows'
    ],
    benefits: [
      'Increase productivity by 50%',
      'Reduce operational costs by 30%',
      'Eliminate manual errors',
      'Improve process consistency'
    ],
    useCases: [
      'Business process automation',
      'Customer service',
      'Finance operations',
      'Manufacturing'
    ],
    technologies: ['RPA', 'Machine Learning', 'API Integration', 'Workflow Engines', 'Process Mining'],
    tags: ['Automation', 'Workflow', 'AI', 'Productivity', 'Process'],
    icon: 'Workflow',
    color: 'from-teal-500 to-cyan-600',
    link: 'https://ziontechgroup.com/services/ai-workflow-orchestrator',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  },
  {
    id: 'ai-customer-support-automation',
    title: 'AI Customer Support Automation',
    description: 'Advanced customer support platform with AI chatbots, sentiment analysis, and automated issue resolution.',
    category: 'Customer Service',
    price: 1800,
    priceRange: '$1,500 - $3,500',
    features: [
      'AI chatbots',
      'Sentiment analysis',
      'Automated ticket routing',
      'Knowledge base management',
      'Multi-language support',
      'Performance analytics'
    ],
    benefits: [
      'Reduce response time by 80%',
      'Increase customer satisfaction by 40%',
      'Reduce support costs by 60%',
      '24/7 customer support'
    ],
    useCases: [
      'E-commerce platforms',
      'SaaS companies',
      'Financial services',
      'Healthcare providers'
    ],
    technologies: ['NLP', 'Sentiment Analysis', 'Chatbot Frameworks', 'CRM Integration', 'Voice AI'],
    tags: ['Customer Service', 'AI', 'Automation', 'Chatbot', 'Support'],
    icon: 'MessageCircle',
    color: 'from-blue-500 to-cyan-600',
    link: 'https://ziontechgroup.com/services/ai-customer-support-automation',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  },
  {
    id: 'ai-project-management-platform',
    title: 'AI Project Management Platform',
    description: 'Intelligent project management platform with predictive analytics, resource optimization, and automated reporting.',
    category: 'Project Management',
    price: 2200,
    priceRange: '$1,800 - $4,500',
    features: [
      'Predictive project analytics',
      'Resource optimization',
      'Risk assessment',
      'Automated reporting',
      'Team collaboration tools',
      'Progress tracking'
    ],
    benefits: [
      'Improve project success rate by 45%',
      'Reduce project delays by 50%',
      'Optimize resource allocation',
      'Enhance team productivity'
    ],
    useCases: [
      'Software development',
      'Construction projects',
      'Marketing campaigns',
      'Research projects'
    ],
    technologies: ['Predictive Analytics', 'Machine Learning', 'Project Management Tools', 'Collaboration Platforms'],
    tags: ['Project Management', 'AI', 'Analytics', 'Productivity', 'Collaboration'],
    icon: 'Kanban',
    color: 'from-orange-500 to-red-600',
    link: 'https://ziontechgroup.com/services/ai-project-management-platform',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  },
  {
    id: 'ai-legal-document-analyzer',
    title: 'AI Legal Document Analyzer',
    description: 'Advanced legal document analysis platform with contract review, compliance checking, and legal research automation.',
    category: 'Legal',
    price: 3500,
    priceRange: '$3,000 - $7,000',
    features: [
      'Contract analysis',
      'Compliance checking',
      'Legal research automation',
      'Document comparison',
      'Risk assessment',
      'Legal document generation'
    ],
    benefits: [
      'Reduce review time by 70%',
      'Improve accuracy by 60%',
      'Reduce legal costs by 40%',
      'Enhance compliance'
    ],
    useCases: [
      'Law firms',
      'Corporate legal departments',
      'Compliance teams',
      'Contract management'
    ],
    technologies: ['NLP', 'Document AI', 'Legal Databases', 'Compliance Frameworks', 'Machine Learning'],
    tags: ['Legal', 'AI', 'Document Analysis', 'Compliance', 'Automation'],
    icon: 'FileText',
    color: 'from-gray-500 to-slate-600',
    link: 'https://ziontechgroup.com/services/ai-legal-document-analyzer',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  },
  {
    id: 'ai-sales-copilot',
    title: 'AI Sales Copilot',
    description: 'Intelligent sales automation platform with lead scoring, sales forecasting, and customer relationship optimization.',
    category: 'Sales',
    price: 2800,
    priceRange: '$2,500 - $5,500',
    features: [
      'Lead scoring and qualification',
      'Sales forecasting',
      'Customer relationship management',
      'Sales process automation',
      'Performance analytics',
      'Pipeline optimization'
    ],
    benefits: [
      'Increase sales by 35%',
      'Improve lead conversion by 50%',
      'Reduce sales cycle time by 40%',
      'Enhance customer relationships'
    ],
    useCases: [
      'B2B sales teams',
      'E-commerce businesses',
      'Real estate',
      'Financial services'
    ],
    technologies: ['Predictive Analytics', 'CRM Integration', 'Sales Automation', 'Lead Scoring', 'Machine Learning'],
    tags: ['Sales', 'AI', 'Automation', 'CRM', 'Analytics'],
    icon: 'Target',
    color: 'from-green-500 to-emerald-600',
    link: 'https://ziontechgroup.com/services/ai-sales-copilot',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  },
  {
    id: 'ai-devops-automation-platform',
    title: 'AI DevOps Automation Platform',
    description: 'Intelligent DevOps platform with automated deployment, monitoring, and infrastructure management.',
    category: 'DevOps',
    price: 4000,
    priceRange: '$3,500 - $8,000',
    features: [
      'Automated deployment',
      'Infrastructure monitoring',
      'Performance optimization',
      'Security scanning',
      'Incident response',
      'Capacity planning'
    ],
    benefits: [
      'Reduce deployment time by 80%',
      'Improve system reliability by 60%',
      'Reduce operational costs by 40%',
      'Enhance security posture'
    ],
    useCases: [
      'Software development teams',
      'Cloud infrastructure',
      'Microservices architecture',
      'Continuous deployment'
    ],
    technologies: ['Kubernetes', 'Docker', 'CI/CD', 'Monitoring Tools', 'Infrastructure as Code'],
    tags: ['DevOps', 'Automation', 'Cloud', 'Deployment', 'Monitoring'],
    icon: 'Server',
    color: 'from-blue-500 to-indigo-600',
    link: 'https://ziontechgroup.com/services/ai-devops-automation-platform',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  },
  {
    id: 'ai-iot-edge-computing-platform',
    title: 'AI IoT Edge Computing Platform',
    description: 'Intelligent IoT platform with edge computing capabilities for real-time data processing and device management.',
    category: 'IoT',
    price: 5000,
    priceRange: '$4,000 - $10,000',
    features: [
      'Edge computing capabilities',
      'Real-time data processing',
      'Device management',
      'Predictive maintenance',
      'Security monitoring',
      'Scalable architecture'
    ],
    benefits: [
      'Reduce latency by 90%',
      'Lower bandwidth costs by 70%',
      'Improve device reliability',
      'Enhance security'
    ],
    useCases: [
      'Smart cities',
      'Industrial IoT',
      'Connected vehicles',
      'Smart homes'
    ],
    technologies: ['Edge Computing', 'IoT Protocols', 'Machine Learning', '5G', 'Blockchain'],
    tags: ['IoT', 'Edge Computing', 'AI', 'Real-time', 'Automation'],
    icon: 'Cpu',
    color: 'from-purple-500 to-pink-600',
    link: 'https://ziontechgroup.com/services/ai-iot-edge-computing-platform',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  },
  {
    id: 'ai-financial-compliance-assistant',
    title: 'AI Financial Compliance Assistant',
    description: 'Intelligent compliance platform for financial institutions with automated regulatory reporting and risk management.',
    category: 'Finance',
    price: 6000,
    priceRange: '$5,000 - $12,000',
    features: [
      'Regulatory compliance automation',
      'Risk assessment',
      'Audit trail management',
      'Real-time monitoring',
      'Compliance reporting',
      'Policy management'
    ],
    benefits: [
      'Reduce compliance costs by 50%',
      'Improve audit efficiency by 70%',
      'Reduce regulatory risk',
      'Automate reporting processes'
    ],
    useCases: [
      'Banks and financial institutions',
      'Investment firms',
      'Insurance companies',
      'Fintech startups'
    ],
    technologies: ['RegTech', 'Machine Learning', 'Blockchain', 'Compliance Frameworks', 'Risk Models'],
    tags: ['Finance', 'Compliance', 'AI', 'Regulatory', 'Risk Management'],
    icon: 'ShieldCheck',
    color: 'from-green-500 to-teal-600',
    link: 'https://ziontechgroup.com/services/ai-financial-compliance-assistant',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  },
  {
    id: 'ai-customer-experience-analytics',
    title: 'AI Customer Experience Analytics',
    description: 'Comprehensive customer experience analytics platform with sentiment analysis, journey mapping, and optimization insights.',
    category: 'Analytics',
    price: 3200,
    priceRange: '$2,800 - $6,500',
    features: [
      'Customer journey mapping',
      'Sentiment analysis',
      'Behavioral analytics',
      'Experience optimization',
      'Predictive analytics',
      'Real-time insights'
    ],
    benefits: [
      'Improve customer satisfaction by 45%',
      'Increase customer lifetime value by 35%',
      'Reduce churn by 30%',
      'Optimize customer touchpoints'
    ],
    useCases: [
      'E-commerce platforms',
      'SaaS companies',
      'Retail businesses',
      'Service industries'
    ],
    technologies: ['Sentiment Analysis', 'Behavioral Analytics', 'Machine Learning', 'Data Visualization', 'Real-time Processing'],
    tags: ['Analytics', 'Customer Experience', 'AI', 'Insights', 'Optimization'],
    icon: 'BarChart3',
    color: 'from-indigo-500 to-purple-600',
    link: 'https://ziontechgroup.com/services/ai-customer-experience-analytics',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  },
  {
    id: 'ai-content-optimizer-pro',
    title: 'AI Content Optimizer Pro',
    description: 'Advanced content optimization platform with SEO analysis, performance tracking, and automated content improvement.',
    category: 'Marketing',
    price: 1800,
    priceRange: '$1,500 - $3,500',
    features: [
      'SEO optimization',
      'Content performance analysis',
      'Automated content improvement',
      'Keyword research',
      'Competitive analysis',
      'Content strategy recommendations'
    ],
    benefits: [
      'Improve search rankings by 60%',
      'Increase organic traffic by 80%',
      'Reduce content creation time by 50%',
      'Enhance content quality'
    ],
    useCases: [
      'Content creators',
      'Digital marketing agencies',
      'E-commerce businesses',
      'Bloggers and publishers'
    ],
    technologies: ['SEO Tools', 'NLP', 'Content Analysis', 'Performance Tracking', 'Machine Learning'],
    tags: ['Content', 'SEO', 'AI', 'Optimization', 'Marketing'],
    icon: 'Search',
    color: 'from-blue-500 to-cyan-600',
    link: 'https://ziontechgroup.com/services/ai-content-optimizer-pro',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  },
  {
    id: 'ai-code-review-security',
    title: 'AI Code Review Security',
    description: 'Intelligent code review platform with security analysis, vulnerability detection, and automated code quality assessment.',
    category: 'Development',
    price: 2500,
    priceRange: '$2,000 - $5,000',
    features: [
      'Automated code review',
      'Security vulnerability detection',
      'Code quality assessment',
      'Performance analysis',
      'Compliance checking',
      'Best practices enforcement'
    ],
    benefits: [
      'Reduce security vulnerabilities by 80%',
      'Improve code quality by 60%',
      'Reduce review time by 70%',
      'Enhance development productivity'
    ],
    useCases: [
      'Software development teams',
      'DevOps teams',
      'Security teams',
      'Code quality assurance'
    ],
    technologies: ['Static Analysis', 'Security Scanning', 'Code Quality Tools', 'Machine Learning', 'Automation'],
    tags: ['Development', 'Security', 'AI', 'Code Review', 'Quality Assurance'],
    icon: 'Code',
    color: 'from-red-500 to-pink-600',
    link: 'https://ziontechgroup.com/services/ai-code-review-security',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  },
  {
    id: 'ai-supply-chain-risk-management',
    title: 'AI Supply Chain Risk Management',
    description: 'Intelligent supply chain risk management platform with predictive analytics, supplier assessment, and disruption prevention.',
    category: 'Risk Management',
    price: 4500,
    priceRange: '$4,000 - $9,000',
    features: [
      'Risk assessment and monitoring',
      'Supplier evaluation',
      'Disruption prediction',
      'Contingency planning',
      'Real-time alerts',
      'Risk mitigation strategies'
    ],
    benefits: [
      'Reduce supply chain disruptions by 70%',
      'Improve supplier relationships by 50%',
      'Reduce risk exposure by 60%',
      'Enhance business continuity'
    ],
    useCases: [
      'Manufacturing companies',
      'Retail chains',
      'Logistics providers',
      'Global supply chains'
    ],
    technologies: ['Risk Modeling', 'Predictive Analytics', 'Machine Learning', 'IoT', 'Blockchain'],
    tags: ['Supply Chain', 'Risk Management', 'AI', 'Analytics', 'Prevention'],
    icon: 'AlertTriangle',
    color: 'from-orange-500 to-red-600',
    link: 'https://ziontechgroup.com/services/ai-supply-chain-risk-management',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  }
];

export const SERVICE_CATEGORIES = [
  { id: 'ai', name: 'AI & Analytics', icon: 'Brain', color: 'from-purple-500 to-pink-600' },
  { id: 'quantum', name: 'Quantum Computing', icon: 'Atom', color: 'from-cyan-500 to-blue-600' },
  { id: 'cybersecurity', name: 'Cybersecurity', icon: 'Shield', color: 'from-red-500 to-orange-600' },
  { id: 'finance', name: 'Finance', icon: 'TrendingUp', color: 'from-green-500 to-emerald-600' },
  { id: 'healthcare', name: 'Healthcare', icon: 'Heart', color: 'from-pink-500 to-rose-600' },
  { id: 'logistics', name: 'Logistics', icon: 'Truck', color: 'from-blue-500 to-indigo-600' },
  { id: 'marketing', name: 'Marketing', icon: 'PenTool', color: 'from-purple-500 to-violet-600' },
  { id: 'hr', name: 'HR', icon: 'Users', color: 'from-indigo-500 to-purple-600' },
  { id: 'automation', name: 'Automation', icon: 'Workflow', color: 'from-teal-500 to-cyan-600' },
  { id: 'customer-service', name: 'Customer Service', icon: 'MessageCircle', color: 'from-blue-500 to-cyan-600' },
  { id: 'project-management', name: 'Project Management', icon: 'Kanban', color: 'from-orange-500 to-red-600' },
  { id: 'legal', name: 'Legal', icon: 'FileText', color: 'from-gray-500 to-slate-600' },
  { id: 'sales', name: 'Sales', icon: 'Target', color: 'from-green-500 to-emerald-600' },
  { id: 'devops', name: 'DevOps', icon: 'Server', color: 'from-blue-500 to-indigo-600' },
  { id: 'iot', name: 'IoT', icon: 'Cpu', color: 'from-purple-500 to-pink-600' },
  { id: 'analytics', name: 'Analytics', icon: 'BarChart3', color: 'from-indigo-500 to-purple-600' },
  { id: 'development', name: 'Development', icon: 'Code', color: 'from-red-500 to-pink-600' },
  { id: 'risk-management', name: 'Risk Management', icon: 'AlertTriangle', color: 'from-orange-500 to-red-600' }
];

export const PRICE_RANGES = [
  { id: 'budget', name: 'Budget', range: '$1,000 - $3,000' },
  { id: 'mid-range', name: 'Mid-Range', range: '$3,000 - $7,000' },
  { id: 'enterprise', name: 'Enterprise', range: '$7,000 - $15,000' },
  { id: 'premium', name: 'Premium', range: '$15,000+' }
];