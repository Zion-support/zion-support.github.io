export interface Service {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  category: 'AI' | 'IT' | 'SaaS' | 'Cybersecurity' | 'Cloud' | '5G' | 'Blockchain' | 'IoT';
  icon: string;
  features: string[];
  pricing: {
    basic: number;
    pro: number;
    enterprise: number;
  };
  benefits: string[];
  useCases: string[];
  technologies: string[];
  contactInfo: {
    phone: string;
    email: string;
    website: string;
  };
  href: string;
  glowColor: 'purple' | 'cyan' | 'pink' | 'green' | 'blue' | 'yellow' | 'red' | 'orange';
}

export const services: Service[] = [
  // AI Services
  {
    id: 'ai-chatbot-enterprise',
    title: 'AI Enterprise Chatbot Platform',
    description: 'Advanced conversational AI platform with natural language processing, multi-language support, and seamless integration with existing business systems.',
    shortDescription: 'Enterprise-grade AI chatbots with advanced NLP capabilities',
    category: 'AI',
    icon: '🤖',
    features: [
      'Natural Language Processing (NLP)',
      'Multi-language Support (50+ languages)',
      'Voice Recognition & Synthesis',
      'Sentiment Analysis',
      'Custom Knowledge Base Integration',
      'Real-time Analytics Dashboard',
      'API Integration (REST, GraphQL)',
      '24/7 Customer Support'
    ],
    pricing: {
      basic: 299,
      pro: 799,
      enterprise: 2499
    },
    benefits: [
      'Reduce customer support costs by 60%',
      '24/7 availability for customer inquiries',
      'Scalable to handle unlimited conversations',
      'Easy integration with existing systems',
      'Advanced analytics and reporting'
    ],
    useCases: [
      'Customer Support Automation',
      'Lead Qualification',
      'FAQ Automation',
      'Appointment Scheduling',
      'E-commerce Support'
    ],
    technologies: ['OpenAI GPT-4', 'TensorFlow', 'Python', 'React', 'Node.js', 'MongoDB'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/ai-chatbot-enterprise'
    },
    href: '/ai-chatbot-enterprise',
    glowColor: 'purple'
  },
  {
    id: 'ai-content-generation-pro',
    title: 'AI Content Generation Pro',
    description: 'Revolutionary AI-powered content creation platform that generates high-quality articles, marketing copy, social media posts, and technical documentation.',
    shortDescription: 'AI-powered content creation for all your marketing needs',
    category: 'AI',
    icon: '✍️',
    features: [
      'Article & Blog Post Generation',
      'Marketing Copy Creation',
      'Social Media Content',
      'Technical Documentation',
      'SEO-Optimized Content',
      'Multi-language Support',
      'Brand Voice Customization',
      'Plagiarism Detection'
    ],
    pricing: {
      basic: 199,
      pro: 499,
      enterprise: 1299
    },
    benefits: [
      'Save 80% of content creation time',
      'Consistent brand voice across all content',
      'SEO-optimized content for better rankings',
      'Unlimited content generation',
      'Professional quality output'
    ],
    useCases: [
      'Blog Content Creation',
      'Marketing Campaigns',
      'Social Media Management',
      'Technical Documentation',
      'Product Descriptions'
    ],
    technologies: ['GPT-4', 'BERT', 'Python', 'FastAPI', 'React', 'PostgreSQL'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/ai-content-generation-pro'
    },
    href: '/ai-content-generation-pro',
    glowColor: 'cyan'
  },
  {
    id: 'ai-data-analytics-pro',
    title: 'AI Data Analytics Pro',
    description: 'Advanced AI-powered data analytics platform that provides real-time insights, predictive analytics, and automated reporting for business intelligence.',
    shortDescription: 'AI-driven analytics platform for data-driven decision making',
    category: 'AI',
    icon: '📊',
    features: [
      'Real-time Data Processing',
      'Predictive Analytics',
      'Automated Report Generation',
      'Interactive Dashboards',
      'Machine Learning Models',
      'Data Visualization',
      'Custom Metrics & KPIs',
      'API Integration'
    ],
    pricing: {
      basic: 399,
      pro: 999,
      enterprise: 2999
    },
    benefits: [
      'Make data-driven decisions faster',
      'Identify trends and patterns automatically',
      'Reduce manual reporting by 90%',
      'Real-time insights and alerts',
      'Scalable data processing'
    ],
    useCases: [
      'Business Intelligence',
      'Sales Forecasting',
      'Customer Behavior Analysis',
      'Financial Reporting',
      'Marketing Analytics'
    ],
    technologies: ['Python', 'TensorFlow', 'Apache Spark', 'React', 'D3.js', 'PostgreSQL'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/ai-data-analytics-pro'
    },
    href: '/ai-data-analytics-pro',
    glowColor: 'pink'
  },
  {
    id: 'ai-3d-generation',
    title: 'AI 3D Generation Platform',
    description: 'Cutting-edge AI platform for generating high-quality 3D models, animations, and virtual environments for gaming, architecture, and entertainment industries.',
    shortDescription: 'AI-powered 3D content creation and generation',
    category: 'AI',
    icon: '🎮',
    features: [
      '3D Model Generation',
      'Texture Synthesis',
      'Animation Creation',
      'Virtual Environment Design',
      'Real-time Rendering',
      'VR/AR Integration',
      'Custom Asset Libraries',
      'Export to Multiple Formats'
    ],
    pricing: {
      basic: 499,
      pro: 1299,
      enterprise: 3999
    },
    benefits: [
      'Reduce 3D modeling time by 70%',
      'High-quality output with minimal input',
      'Scalable for large projects',
      'Easy integration with existing workflows',
      'Cost-effective 3D content creation'
    ],
    useCases: [
      'Game Development',
      'Architectural Visualization',
      'Product Design',
      'Virtual Reality',
      'Marketing Materials'
    ],
    technologies: ['Blender', 'Unity', 'Unreal Engine', 'Python', 'OpenGL', 'WebGL'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/ai-3d-generation'
    },
    href: '/ai-3d-generation',
    glowColor: 'green'
  },
  // IT Services
  {
    id: 'web-development',
    title: 'Full-Stack Web Development',
    description: 'Comprehensive web development services including responsive design, backend development, database integration, and cloud deployment.',
    shortDescription: 'Complete web solutions from design to deployment',
    category: 'IT',
    icon: '🌐',
    features: [
      'Responsive Web Design',
      'Frontend Development (React, Vue, Angular)',
      'Backend Development (Node.js, Python, PHP)',
      'Database Design & Integration',
      'API Development',
      'Cloud Deployment',
      'Performance Optimization',
      'Security Implementation'
    ],
    pricing: {
      basic: 2999,
      pro: 7999,
      enterprise: 19999
    },
    benefits: [
      'Modern, scalable web applications',
      'Mobile-first responsive design',
      'Fast loading times and SEO optimization',
      'Secure and maintainable code',
      '24/7 technical support'
    ],
    useCases: [
      'Corporate Websites',
      'E-commerce Platforms',
      'Web Applications',
      'Portfolio Sites',
      'SaaS Platforms'
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'AWS'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/web-development'
    },
    href: '/web-development',
    glowColor: 'blue'
  },
  {
    id: 'mobile-app-development',
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile application development for iOS and Android with modern UI/UX design and seamless performance.',
    shortDescription: 'Professional mobile apps for iOS and Android',
    category: 'IT',
    icon: '📱',
    features: [
      'Native iOS & Android Development',
      'Cross-platform Development (React Native, Flutter)',
      'UI/UX Design',
      'App Store Optimization',
      'Push Notifications',
      'Offline Functionality',
      'API Integration',
      'App Testing & QA'
    ],
    pricing: {
      basic: 4999,
      pro: 12999,
      enterprise: 29999
    },
    benefits: [
      'High-performance mobile applications',
      'Cross-platform compatibility',
      'Modern UI/UX design',
      'App store optimization',
      'Ongoing maintenance and updates'
    ],
    useCases: [
      'Business Applications',
      'E-commerce Apps',
      'Social Media Apps',
      'Gaming Applications',
      'Utility Apps'
    ],
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'AWS'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/mobile-app-development'
    },
    href: '/mobile-app-development',
    glowColor: 'yellow'
  },
  // Cybersecurity Services
  {
    id: 'penetration-testing',
    title: 'Penetration Testing Services',
    description: 'Comprehensive security assessment and penetration testing to identify vulnerabilities and strengthen your organization\'s security posture.',
    shortDescription: 'Professional security testing and vulnerability assessment',
    category: 'Cybersecurity',
    icon: '🔒',
    features: [
      'Web Application Penetration Testing',
      'Network Security Assessment',
      'Social Engineering Testing',
      'Wireless Security Testing',
      'Mobile App Security Testing',
      'Compliance Testing (PCI, HIPAA, SOX)',
      'Security Report & Recommendations',
      'Remediation Support'
    ],
    pricing: {
      basic: 2999,
      pro: 7999,
      enterprise: 19999
    },
    benefits: [
      'Identify security vulnerabilities before attackers',
      'Comply with industry regulations',
      'Protect sensitive data and systems',
      'Improve security awareness',
      'Reduce risk of data breaches'
    ],
    useCases: [
      'Financial Services',
      'Healthcare Organizations',
      'E-commerce Platforms',
      'Government Agencies',
      'Educational Institutions'
    ],
    technologies: ['OWASP ZAP', 'Burp Suite', 'Nmap', 'Metasploit', 'Wireshark', 'Nessus'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/penetration-testing'
    },
    href: '/penetration-testing',
    glowColor: 'red'
  },
  // Cloud Services
  {
    id: 'cloud-migration',
    title: 'Cloud Migration Services',
    description: 'Seamless migration of your applications and data to cloud platforms with minimal downtime and maximum security.',
    shortDescription: 'Secure and efficient cloud migration solutions',
    category: 'Cloud',
    icon: '☁️',
    features: [
      'AWS Migration',
      'Azure Migration',
      'Google Cloud Migration',
      'Data Migration',
      'Application Modernization',
      'Security Configuration',
      'Performance Optimization',
      'Cost Optimization'
    ],
    pricing: {
      basic: 4999,
      pro: 14999,
      enterprise: 39999
    },
    benefits: [
      'Reduced infrastructure costs',
      'Improved scalability and flexibility',
      'Enhanced security and compliance',
      'Better disaster recovery',
      '24/7 monitoring and support'
    ],
    useCases: [
      'Legacy System Migration',
      'Data Center Consolidation',
      'Disaster Recovery Setup',
      'Application Modernization',
      'Hybrid Cloud Solutions'
    ],
    technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/cloud-migration'
    },
    href: '/cloud-migration',
    glowColor: 'orange'
  }
];