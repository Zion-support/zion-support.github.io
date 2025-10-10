export interface MicroSaasService {
  id: string;
  name: string;
  description: string;
  category: string;
  price: string;
  features: string[];
  benefits: string[];
  icon: string;
  popular: boolean;
}

export const microSaasServices: MicroSaasService[] = [
  {
    id: 'task-automation',
    name: 'Task Automation',
    description: 'Automate repetitive tasks and workflows to increase productivity',
    category: 'Productivity',
    price: '$29/month',
    features: ['Workflow automation', 'Task scheduling', 'Integration APIs', 'Custom triggers'],
    benefits: ['Save 10+ hours/week', 'Reduce errors', 'Increase efficiency', 'Scale operations'],
    icon: 'Zap',
    popular: true
  },
  {
    id: 'data-analytics',
    name: 'Data Analytics',
    description: 'Transform raw data into actionable insights with AI-powered analytics',
    category: 'Analytics',
    price: '$49/month',
    features: ['Real-time dashboards', 'Predictive analytics', 'Custom reports', 'Data visualization'],
    benefits: ['Data-driven decisions', 'Identify trends', 'Optimize performance', 'ROI tracking'],
    icon: 'BarChart',
    popular: false
  },
  {
    id: 'customer-support',
    name: 'Customer Support',
    description: 'AI-powered customer support with chatbots and ticket management',
    category: 'Support',
    price: '$39/month',
    features: ['AI chatbots', 'Ticket management', 'Knowledge base', 'Multi-channel support'],
    benefits: ['24/7 support', 'Faster response', 'Reduced costs', 'Better satisfaction'],
    icon: 'MessageCircle',
    popular: true
  },
  {
    id: 'inventory-management',
    name: 'Inventory Management',
    description: 'Smart inventory tracking and management with predictive restocking',
    category: 'Operations',
    price: '$59/month',
    features: ['Real-time tracking', 'Predictive restocking', 'Supplier management', 'Cost optimization'],
    benefits: ['Reduce stockouts', 'Optimize costs', 'Improve cash flow', 'Automate ordering'],
    icon: 'Package',
    popular: false
  },
  {
    id: 'social-media',
    name: 'Social Media Management',
    description: 'Automated social media posting and engagement across platforms',
    category: 'Marketing',
    price: '$34/month',
    features: ['Auto-posting', 'Content scheduling', 'Engagement tracking', 'Analytics'],
    benefits: ['Consistent posting', 'Save time', 'Increase engagement', 'Track performance'],
    icon: 'Share2',
    popular: false
  },
  {
    id: 'email-marketing',
    name: 'Email Marketing',
    description: 'Automated email campaigns with personalization and analytics',
    category: 'Marketing',
    price: '$24/month',
    features: ['Email automation', 'Personalization', 'A/B testing', 'Analytics'],
    benefits: ['Higher open rates', 'Better conversions', 'Automated nurturing', 'ROI tracking'],
    icon: 'Mail',
    popular: true
  },
  {
    id: 'project-management',
    name: 'Project Management',
    description: 'Streamlined project tracking and team collaboration tools',
    category: 'Productivity',
    price: '$44/month',
    features: ['Task tracking', 'Team collaboration', 'Time tracking', 'Progress reports'],
    benefits: ['Better organization', 'Team alignment', 'Deadline tracking', 'Resource optimization'],
    icon: 'CheckSquare',
    popular: false
  },
  {
    id: 'financial-tracking',
    name: 'Financial Tracking',
    description: 'Automated expense tracking and financial reporting for small businesses',
    category: 'Finance',
    price: '$39/month',
    features: ['Expense tracking', 'Invoice generation', 'Financial reports', 'Tax preparation'],
    benefits: ['Better cash flow', 'Tax compliance', 'Financial insights', 'Time savings'],
    icon: 'DollarSign',
    popular: false
  }
];

export const microSaasCategories = [
  { id: 'all', name: 'All Services', count: microSaasServices.length },
  { id: 'Productivity', name: 'Productivity', count: microSaasServices.filter(s => s.category === 'Productivity').length },
  { id: 'Analytics', name: 'Analytics', count: microSaasServices.filter(s => s.category === 'Analytics').length },
  { id: 'Support', name: 'Support', count: microSaasServices.filter(s => s.category === 'Support').length },
  { id: 'Operations', name: 'Operations', count: microSaasServices.filter(s => s.category === 'Operations').length },
  { id: 'Marketing', name: 'Marketing', count: microSaasServices.filter(s => s.category === 'Marketing').length },
  { id: 'Finance', name: 'Finance', count: microSaasServices.filter(s => s.category === 'Finance').length }
];

export const microSaasPricing = {
  basic: {
    name: 'Basic',
    price: '$29/month',
    features: ['Up to 3 services', 'Basic support', 'Standard features', 'Email support'],
    popular: false
  },
  professional: {
    name: 'Professional',
    price: '$59/month',
    features: ['Up to 10 services', 'Priority support', 'Advanced features', 'Phone support'],
    popular: true
  },
  enterprise: {
    name: 'Enterprise',
    price: '$99/month',
    features: ['Unlimited services', '24/7 support', 'Custom features', 'Dedicated manager'],
    popular: false
  }
};