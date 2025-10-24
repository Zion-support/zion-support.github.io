export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  benefits: string[];
  pricing: {
    basic: string;
    pro: string;
    enterprise: string;
  };
  slug: string;
  category: string;
  icon: string;
  color: string;
  popular?: boolean;
  new?: boolean;
}

export const servicesData = {
  aiServices: [
    {
      id: 'ai-analytics',
      title: 'AI Analytics & Business Intelligence',
      description: 'Transform your data into actionable insights with our advanced AI-powered analytics platform.',
      features: [
        'Real-time data processing',
        'Predictive analytics',
        'Custom dashboard creation',
        'Automated reporting',
        'Natural language queries',
        'Machine learning models'
      ],
      benefits: [
        'Make data-driven decisions faster',
        'Identify trends and opportunities',
        'Reduce manual reporting time',
        'Improve business performance',
        'Gain competitive advantage',
        'Scale analytics capabilities'
      ],
      pricing: {
        basic: '$299/month',
        pro: '$599/month',
        enterprise: 'Custom pricing'
      },
      slug: 'analytics',
      category: 'AI Services',
      icon: 'BarChart3',
      color: 'blue',
      popular: true
    },
    {
      id: 'ai-automation',
      title: 'AI Process Automation',
      description: 'Automate repetitive tasks and streamline workflows with intelligent automation solutions.',
      features: [
        'Workflow automation',
        'Document processing',
        'Email automation',
        'Data entry automation',
        'Task scheduling',
        'Error handling'
      ],
      benefits: [
        'Reduce manual work by 80%',
        'Improve accuracy and consistency',
        'Save time and resources',
        'Scale operations efficiently',
        'Reduce human errors',
        'Focus on strategic tasks'
      ],
      pricing: {
        basic: '$199/month',
        pro: '$399/month',
        enterprise: 'Custom pricing'
      },
      slug: 'automation',
      category: 'AI Services',
      icon: 'Zap',
      color: 'yellow'
    }
  ],
  itServices: [
    {
      id: 'web-development',
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies and best practices.',
      features: [
        'Responsive design',
        'Modern frameworks',
        'Performance optimization',
        'SEO optimization',
        'Security implementation',
        'Cross-browser compatibility'
      ],
      benefits: [
        'Professional online presence',
        'Improved user experience',
        'Better search rankings',
        'Mobile-friendly design',
        'Fast loading times',
        'Secure and reliable'
      ],
      pricing: {
        basic: '$2,999',
        pro: '$5,999',
        enterprise: 'Custom pricing'
      },
      slug: 'web-development',
      category: 'IT Services',
      icon: 'Globe',
      color: 'green'
    }
  ],
  g5Services: [
    {
      id: '5g-solutions',
      title: '5G Network Solutions',
      description: 'Complete 5G infrastructure and implementation services for modern businesses.',
      features: [
        '5G network design',
        'Infrastructure deployment',
        'Performance optimization',
        'Security implementation',
        'Monitoring and maintenance',
        'Scalability planning'
      ],
      benefits: [
        'Ultra-fast connectivity',
        'Low latency communication',
        'Support for IoT devices',
        'Enhanced mobile experience',
        'Future-proof technology',
        'Competitive advantage'
      ],
      pricing: {
        basic: '$9,999',
        pro: '$19,999',
        enterprise: 'Custom pricing'
      },
      slug: 'solutions',
      category: '5G Services',
      icon: 'Wifi',
      color: 'purple'
    }
  ],
  aiServicesSubcategories: [
    {
      id: 'business-intelligence',
      title: 'Business Intelligence',
      description: 'Advanced analytics and reporting solutions for data-driven decision making.',
      slug: 'business-intelligence',
      category: 'AI Services',
      icon: 'TrendingUp',
      color: 'blue'
    }
  ]
};