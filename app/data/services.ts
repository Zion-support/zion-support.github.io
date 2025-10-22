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
  icon: string
  popular: boolean
  path: string
  contact: {
    phone: string
    email: string
    demo: string
  }
  marketPrice: {
    min: number
    max: number
    currency: string
  }
}

export const services: Service[] = [
  {
    id: 'ai-chatbot',
    name: 'AI Chatbot',
    description: 'Advanced conversational AI with natural language processing',
    shortDescription: 'Smart chatbot for customer support',
    category: 'ai',
    pricing: {
      basic: 299,
      pro: 599,
      enterprise: 1299,
      currency: 'USD'
    },
    features: [
      'Natural language processing',
      'Multi-language support',
      'Sentiment analysis',
      'Custom training'
    ],
    benefits: [
      '24/7 customer support',
      'Reduced response time',
      'Scalable solution',
      'Cost effective'
    ],
    useCases: [
      'Customer support',
      'Lead generation',
      'FAQ automation',
      'Sales assistance'
    ],
    technologies: [
      'OpenAI GPT',
      'TensorFlow',
      'Python',
      'React'
    ],
    demoUrl: 'https://ziontechgroup.com/demo/ai-chatbot',
    documentationUrl: 'https://docs.ziontechgroup.com/ai-chatbot',
    apiUrl: 'https://api.ziontechgroup.com/ai-chatbot',
    status: 'active',
    icon: '🤖',
    popular: true,
    path: '/ai-chatbot',
    contact: {
      phone: '+1 (302) 464-0950',
      email: 'kleber@ziontechgroup.com',
      demo: 'https://ziontechgroup.com/demo/ai-chatbot'
    },
    marketPrice: {
      min: 500,
      max: 2000,
      currency: 'USD'
    }
  }
]

export const serviceCategories = [
  {
    id: 'ai',
    name: 'AI Services',
    description: 'Advanced artificial intelligence solutions',
    icon: '🤖',
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10'
  },
  {
    id: 'it',
    name: 'IT Services',
    description: 'Enterprise-grade IT solutions',
    icon: '☁️',
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10'
  },
  {
    id: 'saas',
    name: 'SAAS Solutions',
    description: 'Software as a Service solutions',
    icon: '⚡',
    color: 'text-cyan-400',
    bgColor: 'bg-cyan-500/10'
  }
]

export const contactInfo = {
  phone: '+1 (302) 464-0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008, Middletown, DE 19709',
  website: 'https://ziontechgroup.com',
  hours: 'Mon-Fri: 9AM-6PM EST'
}
