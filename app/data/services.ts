export interface Service {
  id: string
  name: string
  description: string
  shortDescription: string
  category: 'ai' | 'it' | 'saas' | 'blockchain' | 'iot' | 'devops' | 'data' | 'security' | 'cloud' | 'mobile' | 'web'
  pricing: {
    basic: number
    pro: number
    enterprise: number
    currency: string
  }
  features: string[]
  benefits: string[]
  useCases: string[]
  technologies: string[]
  demoUrl?: string
  documentationUrl?: string
  apiUrl?: string
  status: 'active' | 'beta' | 'coming-soon'
  launchDate: string
  lastUpdated: string
  icon: string
  gradient: string
  glow: string
  route: string
}

export const services: Service[] = [
  // AI Services
  {
    id: 'ai-chatbot-builder',
    name: 'AI Chatbot Builder',
    description: 'Build intelligent conversational AI chatbots with natural language processing, multi-language support, and seamless integration capabilities.',
    shortDescription: 'Create intelligent chatbots with advanced NLP capabilities',
    category: 'ai',
    pricing: {
      basic: 29,
      pro: 99,
      enterprise: 299,
      currency: 'USD'
    },
    features: [
      'Natural Language Processing',
      'Multi-language Support',
      'Custom Training Models',
      'API Integration',
      'Analytics Dashboard',
      'Voice Recognition',
      'Sentiment Analysis',
      'Real-time Learning'
    ],
    benefits: [
      'Reduce customer support costs by 60%',
      '24/7 automated customer service',
      'Improved customer satisfaction',
      'Scalable conversation handling'
    ],
    useCases: [
      'Customer Support',
      'Lead Generation',
      'E-commerce Assistance',
      'Internal Help Desk'
    ],
    technologies: ['OpenAI GPT', 'TensorFlow', 'React', 'Node.js'],
    demoUrl: 'https://demo.ziontechgroup.com/chatbot',
    documentationUrl: 'https://docs.ziontechgroup.com/chatbot',
    apiUrl: 'https://api.ziontechgroup.com/chatbot',
    status: 'active',
    launchDate: '2024-01-15',
    lastUpdated: '2024-10-08',
    icon: '🤖',
    gradient: 'from-blue-500 to-purple-600',
    glow: 'blue-500',
    route: '/ai-chatbot-builder'
  },
  {
    id: 'ai-project-manager',
    name: 'AI Project Manager Pro',
    description: 'Intelligent project management with AI-powered scheduling, resource allocation, and risk prediction.',
    shortDescription: 'AI-powered project management and planning',
    category: 'ai',
    pricing: {
      basic: 49,
      pro: 149,
      enterprise: 399,
      currency: 'USD'
    },
    features: [
      'AI-powered task prioritization',
      'Automated resource allocation',
      'Risk prediction and mitigation',
      'Smart scheduling',
      'Progress tracking',
      'Team collaboration tools',
      'Budget optimization',
      'Performance analytics'
    ],
    benefits: [
      'Increase project success rate by 40%',
      'Reduce project delays by 60%',
      'Optimize resource utilization',
      'Improve team productivity'
    ],
    useCases: [
      'Software Development',
      'Marketing Campaigns',
      'Construction Projects',
      'Event Planning'
    ],
    technologies: ['Machine Learning', 'React', 'Python', 'PostgreSQL'],
    demoUrl: 'https://demo.ziontechgroup.com/project-manager',
    documentationUrl: 'https://docs.ziontechgroup.com/project-manager',
    apiUrl: 'https://api.ziontechgroup.com/project-manager',
    status: 'active',
    launchDate: '2024-02-01',
    lastUpdated: '2024-10-08',
    icon: '📊',
    gradient: 'from-green-500 to-teal-600',
    glow: 'green-500',
    route: '/ai-project-manager'
  },
  {
    id: 'ai-data-analytics',
    name: 'AI Data Analytics Platform',
    description: 'Advanced data analytics platform with AI-powered insights, predictive modeling, and automated reporting.',
    shortDescription: 'AI-powered data analytics and insights',
    category: 'ai',
    pricing: {
      basic: 79,
      pro: 199,
      enterprise: 599,
      currency: 'USD'
    },
    features: [
      'Predictive Analytics',
      'Automated Insights',
      'Real-time Dashboards',
      'Data Visualization',
      'Machine Learning Models',
      'Custom Reports',
      'Data Integration',
      'Anomaly Detection'
    ],
    benefits: [
      'Make data-driven decisions faster',
      'Identify trends and patterns',
      'Reduce manual analysis time',
      'Improve business outcomes'
    ],
    useCases: [
      'Business Intelligence',
      'Financial Analysis',
      'Marketing Analytics',
      'Operations Optimization'
    ],
    technologies: ['Python', 'TensorFlow', 'React', 'MongoDB'],
    demoUrl: 'https://demo.ziontechgroup.com/data-analytics',
    documentationUrl: 'https://docs.ziontechgroup.com/data-analytics',
    apiUrl: 'https://api.ziontechgroup.com/data-analytics',
    status: 'active',
    launchDate: '2024-01-20',
    lastUpdated: '2024-10-08',
    icon: '📈',
    gradient: 'from-orange-500 to-red-600',
    glow: 'orange-500',
    route: '/ai-data-analytics'
  }
]

export const getServiceById = (id: string): Service | undefined => {
  return services.find(service => service.id === id)
}

export const getServicesByCategory = (category: string): Service[] => {
  return services.filter(service => service.category === category)
}

export const getActiveServices = (): Service[] => {
  return services.filter(service => service.status === 'active')
}

export const getFeaturedServices = (): Service[] => {
  return services.filter(service => service.status === 'active').slice(0, 6)
}

export const getPricingTiers = () => {
  return {
    basic: 'Basic',
    pro: 'Professional',
    enterprise: 'Enterprise'
  }
}

export const contactInfo = {
  phone: '+1 (302) 464-0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008, Middletown, DE 19709',
  website: 'https://ziontechgroup.com',
  hours: 'Mon-Fri: 9AM-6PM EST'
}