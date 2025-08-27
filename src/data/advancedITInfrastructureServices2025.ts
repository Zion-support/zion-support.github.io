export interface AdvancedITInfrastructureService {
  id: string;
  title: string;
  description: string;
  category: 'Cloud Infrastructure' | 'Edge Computing' | 'Network Optimization' | 'Data Center' | 'DevOps' | 'Hybrid Cloud';
  price: number;
  currency: string;
  pricingModel: 'monthly' | 'yearly' | 'usage-based' | 'project-based';
  features: string[];
  technicalSpecs: {
    performance: string;
    scalability: string;
    reliability: string;
    security: string;
  };
  deploymentTime: string;
  supportLevel: 'Basic' | 'Standard' | 'Premium' | 'Enterprise';
  contactInfo: {
    mobile: string;
    email: string;
    address: string;
    website: string;
  };
}

export const ADVANCED_IT_INFRASTRUCTURE_SERVICES: AdvancedITInfrastructureService[] = [
  {
    id: 'hybrid-cloud-orchestration',
    title: 'Hybrid Cloud Orchestration Platform',
    description: 'Intelligent platform that seamlessly manages and orchestrates workloads across multiple cloud providers and on-premises infrastructure.',
    category: 'Hybrid Cloud',
    price: 3999,
    currency: 'USD',
    pricingModel: 'monthly',
    features: [
      'Multi-cloud workload management',
      'Intelligent workload placement',
      'Cost optimization engine',
      'Unified monitoring dashboard',
      'Automated scaling policies',
      'Disaster recovery automation',
      'Compliance management',
      'Performance optimization'
    ],
    technicalSpecs: {
      performance: '99.9% uptime SLA',
      scalability: 'Unlimited workloads',
      reliability: '99.99% availability',
      security: 'Enterprise-grade encryption'
    },
    deploymentTime: '4-6 weeks',
    supportLevel: 'Premium',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    }
  },
  {
    id: 'edge-computing-platform',
    title: 'Edge Computing Infrastructure Platform',
    description: 'Distributed edge computing platform that brings computation and data storage closer to data sources, reducing latency and bandwidth usage.',
    category: 'Edge Computing',
    price: 2499,
    currency: 'USD',
    pricingModel: 'monthly',
    features: [
      'Distributed edge nodes',
      'Real-time data processing',
      'Low-latency applications',
      'Edge AI capabilities',
      'Automatic failover',
      'Load balancing',
      'Security at the edge',
      'Monitoring and analytics'
    ],
    technicalSpecs: {
      performance: '<10ms latency',
      scalability: 'Up to 1000 edge nodes',
      reliability: '99.95% uptime',
      security: 'Zero-trust edge security'
    },
    deploymentTime: '2-4 weeks',
    supportLevel: 'Standard',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    }
  },
  {
    id: 'ai-powered-devops-automation',
    title: 'AI-Powered DevOps Automation Platform',
    description: 'Intelligent DevOps platform that automates software development, testing, deployment, and operations using AI and machine learning.',
    category: 'DevOps',
    price: 1899,
    currency: 'USD',
    pricingModel: 'monthly',
    features: [
      'Intelligent CI/CD pipelines',
      'Automated testing and QA',
      'Smart deployment strategies',
      'Performance monitoring',
      'Incident prediction',
      'Automated rollbacks',
      'Security scanning',
      'Compliance automation'
    ],
    technicalSpecs: {
      performance: '10x faster deployments',
      scalability: 'Unlimited projects',
      reliability: '99.9% success rate',
      security: 'Built-in security scanning'
    },
    deploymentTime: '1-2 weeks',
    supportLevel: 'Standard',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    }
  },
  {
    id: 'quantum-ready-infrastructure',
    title: 'Quantum-Ready Infrastructure Platform',
    description: 'Future-proof infrastructure designed to seamlessly integrate with quantum computing systems while maintaining classical computing capabilities.',
    category: 'Cloud Infrastructure',
    price: 5999,
    currency: 'USD',
    pricingModel: 'monthly',
    features: [
      'Quantum-classical hybrid architecture',
      'Quantum algorithm optimization',
      'Post-quantum cryptography',
      'Quantum simulation environment',
      'Classical computing integration',
      'Quantum security protocols',
      'Performance benchmarking',
      'Future migration tools'
    ],
    technicalSpecs: {
      performance: 'Quantum advantage ready',
      scalability: 'Hybrid quantum-classical',
      reliability: '99.99% availability',
      security: 'Post-quantum encryption'
    },
    deploymentTime: '8-12 weeks',
    supportLevel: 'Enterprise',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    }
  },
  {
    id: '5g-network-optimization',
    title: '5G Network Optimization & Management',
    description: 'Advanced 5G network optimization platform that maximizes network performance, coverage, and user experience through AI-driven analytics.',
    category: 'Network Optimization',
    price: 3499,
    currency: 'USD',
    pricingModel: 'monthly',
    features: [
      'Real-time network monitoring',
      'AI-powered optimization',
      'Coverage optimization',
      'Capacity planning',
      'Performance analytics',
      'Predictive maintenance',
      'User experience optimization',
      'Network slicing management'
    ],
    technicalSpecs: {
      performance: '99.99% network availability',
      scalability: 'Multi-carrier support',
      reliability: '99.9% uptime',
      security: '5G security standards'
    },
    deploymentTime: '6-8 weeks',
    supportLevel: 'Premium',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    }
  },
  {
    id: 'green-data-center-solutions',
    title: 'Green Data Center & Sustainability Solutions',
    description: 'Eco-friendly data center solutions that reduce carbon footprint while maintaining high performance and reliability standards.',
    category: 'Data Center',
    price: 2799,
    currency: 'USD',
    pricingModel: 'monthly',
    features: [
      'Renewable energy integration',
      'Energy-efficient cooling systems',
      'Carbon footprint monitoring',
      'Sustainable hardware options',
      'Waste heat recycling',
      'Green certification support',
      'Environmental reporting',
      'Sustainability consulting'
    ],
    technicalSpecs: {
      performance: 'PUE <1.2',
      scalability: 'Modular expansion',
      reliability: '99.99% uptime',
      security: 'Enterprise security'
    },
    deploymentTime: '12-16 weeks',
    supportLevel: 'Premium',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    }
  }
];