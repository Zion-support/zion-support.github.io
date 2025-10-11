export interface Service {
  id: string;
  name: string;
  description: string;
  icon: string;
  price: string;
  originalPrice?: string;
  features: string[];
  benefits: string[];
  link: string;
  popular?: boolean;
  category: string;
  rating: number}

export const services: Service[] = [
  {
    id: 'ai-project-manager',
    name: 'AI Project Manager',
    description: 'Intelligent project management with AI-powered planning and optimization',
    icon: 'bar-chart',
    price: '$99/month',
    originalPrice: '$149/month',
    features: ['AI-powered planning', 'Smart task management', 'Predictive analytics', 'Team collaboration', 'Risk assessment', 'Resource optimization', 'Gantt charts', 'Time tracking'],
    benefits: ['40% productivity increase', '70% fewer delays', '85% planning accuracy', '30% cost reduction'],
    link: '/ai-project-manager',
    popular: true,
    category: 'Productivity',
    rating: 4.9
  },
  {
    id: 'ai-meeting-assistant',
    name: 'AI Meeting Assistant',
    description: 'Automated meeting transcription and action item extraction',
    icon: 'target',
    price: '$79/month',
    originalPrice: '$119/month',
    features: ['Real-time transcription', 'Action item extraction', 'Meeting summaries', 'Follow-up automation', 'Calendar integration', 'Voice recognition', 'Multi-language support', 'Meeting analytics'],
    benefits: ['90% meeting efficiency', 'Zero missed action items', 'Automatic follow-ups', 'Better meeting outcomes'],
    link: '/ai-meeting-assistant',
    popular: true,
    category: 'Productivity',
    rating: 4.8
  },
  {
    id: 'ai-content-generator',
    name: 'AI Content Generator',
    description: 'Create high-quality content with AI-powered writing assistance',
    icon: '📄',
    price: '$89/month',
    originalPrice: '$129/month',
    features: ['Blog post generation', 'Social media content', 'Email campaigns', 'SEO optimization', 'Content planning', 'Brand voice consistency', 'Multi-language support', 'Content analytics'],
    benefits: ['10x content production', 'Consistent brand voice', 'SEO-optimized content', 'Time savings'],
    link: '/ai-content-generator',
    popular: true,
    category: 'Marketing',
    rating: 4.7
  },
  {
    id: 'ai-customer-support',
    name: 'AI Customer Support',
    description: '24/7 intelligent customer support with natural language processing',
    icon: 'headphones',
    price: '$149/month',
    originalPrice: '$199/month',
    features: ['24/7 availability', 'Multi-channel support', 'Sentiment analysis', 'Ticket routing', 'Knowledge base', 'Live chat integration', 'Escalation management', 'Performance analytics'],
    benefits: ['Instant responses', 'Reduced support costs', 'Improved satisfaction', 'Scalable support'],
    link: '/ai-customer-support',
    popular: true,
    category: 'Customer Service',
    rating: 4.9
  },
  {
    id: 'ai-data-analytics',
    name: 'AI Data Analytics',
    description: 'Advanced data analysis and business intelligence with AI insights',
    icon: 'trending-up',
    price: '$199/month',
    originalPrice: '$299/month',
    features: ['Predictive analytics', 'Data visualization', 'Custom dashboards', 'Real-time insights', 'Automated reporting', 'Data integration', 'Machine learning models', 'Performance monitoring'],
    benefits: ['Data-driven decisions', 'Predictive insights', 'Automated reporting', 'Competitive advantage'],
    link: '/ai-data-analytics',
    popular: true,
    category: 'Analytics',
    rating: 4.8
  }
];

export default services;