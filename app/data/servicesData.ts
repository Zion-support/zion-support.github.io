export interface Service {
  id: string
  title: string
  description: string
  features: string[]
  benefits: string[]
  pricing: {
    basic: string
    pro: string
    enterprise: string
  }
  url: string
  category: string
  icon: string
}

export const servicesData: Service[] = [
  {
    id: 'ai-analytics',
    title: 'AI Analytics & Business Intelligence',
    description: 'Transform your data into actionable insights with our advanced AI-powered analytics platform.',
    features: [
      'Real-time data processing',
      'Predictive analytics',
      'Custom dashboards',
      'Automated reporting',
      'Machine learning models'
    ],
    benefits: [
      'Make data-driven decisions',
      'Identify trends and patterns',
      'Improve operational efficiency',
      'Reduce manual analysis time',
      'Scale with your business'
    ],
    pricing: {
      basic: '$99/month',
      pro: '$299/month',
      enterprise: 'Custom'
    },
    url: '/ai-analytics',
    category: 'AI Services',
    icon: '📊'
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
      'Custom integrations'
    ],
    benefits: [
      'Reduce manual work',
      'Increase productivity',
      'Minimize errors',
      'Save time and costs',
      'Improve accuracy'
    ],
    pricing: {
      basic: '$149/month',
      pro: '$399/month',
      enterprise: 'Custom'
    },
    url: '/ai-automation',
    category: 'AI Services',
    icon: '🤖'
  },
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'Custom web applications and websites built with modern technologies and best practices.',
    features: [
      'Responsive design',
      'Modern frameworks',
      'SEO optimization',
      'Performance optimization',
      'Security implementation'
    ],
    benefits: [
      'Professional online presence',
      'Mobile-friendly design',
      'Fast loading times',
      'Search engine visibility',
      'Secure and reliable'
    ],
    pricing: {
      basic: '$2,500',
      pro: '$7,500',
      enterprise: 'Custom'
    },
    url: '/web-development',
    category: 'IT Services',
    icon: '🌐'
  },
  {
    id: 'mobile-development',
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android devices.',
    features: [
      'Native iOS apps',
      'Native Android apps',
      'Cross-platform solutions',
      'App store optimization',
      'Push notifications'
    ],
    benefits: [
      'Reach mobile users',
      'Enhanced user experience',
      'Offline functionality',
      'Device integration',
      'App store presence'
    ],
    pricing: {
      basic: '$5,000',
      pro: '$15,000',
      enterprise: 'Custom'
    },
    url: '/mobile-development',
    category: 'IT Services',
    icon: '📱'
  }
]