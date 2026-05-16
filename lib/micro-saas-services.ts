// Zion Tech Group - Micro SAAS Services Catalog
// Contact: Kleber Garcia Alcatrão
// Mobile: +1 302 464 0950 | Email: kleber@ziontechgroup.com
// Address: 364 E Main St STE 1008, Middletown, DE 19709

export interface MicroSaasService {
  id: string;
  name: string;
  category: string;
  description: string;
  features: string[];
  price: string;
  priceRange?: string;
  deliveryTime: string;
  technologies?: string[];
  link?: string;
}

export const MICRO_SAAS_SERVICES: MicroSaasService[] = [
  // ========== AI SERVICES ==========
  {
    id: 'ai-chatbot-builder',
    name: 'AI Chatbot Builder',
    category: 'AI Services',
    description: 'Custom AI chatbots for customer support, lead generation, and internal automation. Integrates with WhatsApp, Telegram, Slack, and websites.',
    features: ['Multi-platform integration', '24/7 automated support', 'Natural language processing', 'CRM integration', 'Analytics dashboard'],
    price: '$2,500',
    priceRange: '$2,500-$10,000',
    deliveryTime: '2-3 weeks',
    technologies: ['OpenAI GPT-4', 'LangChain', 'Python', 'Node.js'],
    link: '/services/ai-chatbot-builder'
  },
  {
    id: 'ai-content-generator',
    name: 'AI Content Generator',
    category: 'AI Services',
    description: 'Automated blog posts, product descriptions, social media content, and marketing copy generation with brand voice training.',
    features: ['Blog automation', 'Product descriptions', 'Social media posts', 'Brand voice training', 'SEO optimization'],
    price: '$1,800',
    priceRange: '$1,800-$5,000',
    deliveryTime: '1 week',
    technologies: ['GPT-4', 'Claude', 'Custom fine-tuning'],
    link: '/services/ai-content-generator'
  },
  {
    id: 'ai-image-generator',
    name: 'AI Image Generator',
    category: 'AI Services',
    description: 'Generate custom images, logos, product visuals, and marketing graphics using advanced AI models.',
    features: ['High-resolution output', 'Brand consistency', 'Multiple styles', 'Batch generation', 'API access'],
    price: '$1,200',
    priceRange: '$1,200-$3,500',
    deliveryTime: '3-5 days',
    technologies: ['Stable Diffusion', 'DALL-E', 'Midjourney'],
    link: '/services/ai-image-generator'
  },
  {
    id: 'ai-document-analyzer',
    name: 'AI Document Analyzer',
    category: 'AI Services',
    description: 'Extract insights from contracts, invoices, reports, and documents with automated categorization and data extraction.',
    features: ['PDF processing', 'Data extraction', 'Sentiment analysis', 'Classification', 'Export to formats'],
    price: '$2,000',
    priceRange: '$2,000-$6,000',
    deliveryTime: '2 weeks',
    technologies: ['OCR', 'NLP', 'Python', 'TensorFlow'],
    link: '/services/ai-document-analyzer'
  },
  {
    id: 'ai-language-translator',
    name: 'AI Language Translator',
    category: 'AI Services',
    description: 'Real-time translation services with context awareness for websites, apps, and documents.',
    features: ['100+ languages', 'Context preservation', 'Custom terminology', 'Website integration', 'API available'],
    price: '$1,500',
    priceRange: '$1,500-$4,000',
    deliveryTime: '1 week',
    technologies: ['Google Translate API', 'DeepL', 'Custom models'],
    link: '/services/ai-language-translator'
  },

  // ========== MICRO SAAS PRODUCTS ==========
  {
    id: 'email-automation-suite',
    name: 'Email Automation Suite',
    category: 'Micro SAAS',
    description: 'Complete email marketing automation with AI-powered responses, lead nurturing, and campaign management.',
    features: ['Smart replies', 'Lead scoring', 'Campaign automation', 'Analytics', 'A/B testing'],
    price: '$399/month',
    priceRange: '$399-$1,499/month',
    deliveryTime: 'Immediate',
    technologies: ['Gmail API', 'OpenAI', 'Node.js'],
    link: '/products/email-automation-suite'
  },
  {
    id: 'social-media-manager',
    name: 'Social Media Manager',
    category: 'Micro SAAS',
    description: 'Schedule posts, analyze engagement, generate content, and manage multiple social accounts from one dashboard.',
    features: ['Multi-platform posting', 'Content calendar', 'Analytics dashboard', 'AI content creation', 'Team collaboration'],
    price: '$299/month',
    priceRange: '$299-$999/month',
    deliveryTime: 'Immediate',
    technologies: ['React', 'Node.js', 'Social APIs'],
    link: '/products/social-media-manager'
  },
  {
    id: 'seo-optimizer',
    name: 'SEO Optimizer',
    category: 'Micro SAAS',
    description: 'Keyword research, content optimization, ranking tracking, and competitor analysis in one platform.',
    features: ['Keyword tracking', 'Content suggestions', 'Rank monitoring', 'Competitor analysis', 'SEO audits'],
    price: '$199/month',
    priceRange: '$199-$799/month',
    deliveryTime: 'Immediate',
    technologies: ['Next.js', 'Node.js', 'SEO APIs'],
    link: '/products/seo-optimizer'
  },
  {
    id: 'customer-feedback-system',
    name: 'Customer Feedback System',
    category: 'Micro SAAS',
    description: 'Collect, analyze, and act on customer feedback with automated surveys and sentiment analysis.',
    features: ['Survey builder', 'Sentiment analysis', 'Reporting dashboard', 'Integration ready', 'NPS tracking'],
    price: '$249/month',
    priceRange: '$249-$899/month',
    deliveryTime: 'Immediate',
    technologies: ['React', 'Node.js', 'AI sentiment'],
    link: '/products/customer-feedback-system'
  },
  {
    id: 'appointment-scheduler',
    name: 'Smart Appointment Scheduler',
    category: 'Micro SAAS',
    description: 'AI-powered scheduling with automatic timezone detection, reminders, and calendar sync.',
    features: ['Calendar sync', 'Timezone detection', 'Automated reminders', 'Video call integration', 'Payment processing'],
    price: '$149/month',
    priceRange: '$149-$599/month',
    deliveryTime: 'Immediate',
    technologies: ['Calendly API', 'Google Calendar', 'Twilio'],
    link: '/products/appointment-scheduler'
  },

  // ========== IT SERVICES ==========
  {
    id: 'cloud-migration',
    name: 'Cloud Migration Service',
    category: 'IT Services',
    description: 'Migrate your infrastructure to AWS, Google Cloud, or Azure with zero-downtime strategies.',
    features: ['Zero-downtime migration', 'Cost optimization', 'Security hardening', 'Monitoring setup', 'Training provided'],
    price: '$5,000',
    priceRange: '$5,000-$25,000',
    deliveryTime: '2-6 weeks',
    technologies: ['AWS', 'Google Cloud', 'Azure', 'Docker'],
    link: '/services/cloud-migration'
  },
  {
    id: 'cybersecurity-audit',
    name: 'Cybersecurity Audit',
    category: 'IT Services',
    description: 'Comprehensive security assessment with vulnerability scanning, penetration testing, and remediation plans.',
    features: ['Vulnerability scan', 'Penetration testing', 'Security report', 'Remediation plan', 'Compliance check'],
    price: '$3,500',
    priceRange: '$3,500-$10,000',
    deliveryTime: '1-2 weeks',
    technologies: ['OWASP', 'Nmap', 'Burp Suite'],
    link: '/services/cybersecurity-audit'
  },
  {
    id: 'devops-setup',
    name: 'DevOps Setup & CI/CD',
    category: 'IT Services',
    description: 'Implement CI/CD pipelines, monitoring, logging, and automated deployment for your applications.',
    features: ['CI/CD pipelines', 'Monitoring setup', 'Log aggregation', 'Auto-scaling', 'Documentation'],
    price: '$4,500',
    priceRange: '$4,500-$15,000',
    deliveryTime: '2-3 weeks',
    technologies: ['GitHub Actions', 'Docker', 'Kubernetes', 'Prometheus'],
    link: '/services/devops-setup'
  },
  {
    id: 'database-optimization',
    name: 'Database Optimization',
    category: 'IT Services',
    description: 'Improve database performance, implement caching, and optimize queries for better application speed.',
    features: ['Query optimization', 'Indexing strategy', 'Caching layer', 'Performance monitoring', 'Backup setup'],
    price: '$2,800',
    priceRange: '$2,800-$8,000',
    deliveryTime: '2 weeks',
    technologies: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL'],
    link: '/services/database-optimization'
  },
  {
    id: 'api-development',
    name: 'Custom API Development',
    category: 'IT Services',
    description: 'Build scalable RESTful APIs or GraphQL endpoints with authentication, rate limiting, and documentation.',
    features: ['REST/GraphQL', 'Authentication', 'Rate limiting', 'API docs', 'Testing suite'],
    price: '$3,000',
    priceRange: '$3,000-$12,000',
    deliveryTime: '2-3 weeks',
    technologies: ['Node.js', 'Python', 'Fastify', 'Express'],
    link: '/services/api-development'
  },

  // ========== SPECIALIZED SOLUTIONS ==========
  {
    id: 'lead-generation-bot',
    name: 'AI Lead Generation Bot',
    category: 'Specialized',
    description: 'Automated lead discovery and outreach across LinkedIn, web directories, and social platforms.',
    features: ['Lead discovery', 'Automated outreach', 'Lead scoring', 'CRM sync', 'Performance analytics'],
    price: '$2,200',
    priceRange: '$2,200-$6,500',
    deliveryTime: '2 weeks',
    technologies: ['LinkedIn API', 'Web scraping', 'AI classification'],
    link: '/solutions/lead-generation-bot'
  },
  {
    id: 'finance-dashboard',
    name: 'Finance Analytics Dashboard',
    category: 'Specialized',
    description: 'Real-time financial metrics, budget tracking, forecasting, and reporting with AI insights.',
    features: ['Real-time metrics', 'Budget tracking', 'Forecasting', 'AI insights', 'Export reports'],
    price: '$3,200',
    priceRange: '$3,200-$9,500',
    deliveryTime: '3 weeks',
    technologies: ['React', 'D3.js', 'Financial APIs'],
    link: '/solutions/finance-dashboard'
  },
  {
    id: 'inventory-intelligence',
    name: 'Inventory Intelligence System',
    category: 'Specialized',
    description: 'Smart inventory management with demand forecasting, automated reordering, and supplier management.',
    features: ['Demand forecasting', 'Auto-reordering', 'Supplier management', 'Stock alerts', 'Analytics'],
    price: '$4,000',
    priceRange: '$4,000-$12,000',
    deliveryTime: '3-4 weeks',
    technologies: ['Python', 'ML forecasting', 'Barcode scanning'],
    link: '/solutions/inventory-intelligence'
  }
];

export const SERVICE_CATEGORIES = [
  { id: 'ai-services', name: 'AI Services', count: 5 },
  { id: 'micro-saas', name: 'Micro SAAS', count: 5 },
  { id: 'it-services', name: 'IT Services', count: 5 },
  { id: 'specialized', name: 'Specialized Solutions', count: 3 }
];

export const CONTACT_INFO = {
  name: 'Kleber Garcia Alcatrão',
  title: 'CEO, Zion Tech Group',
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008, Middletown, DE 19709',
  website: 'https://www.ziontechgroup.com'
};