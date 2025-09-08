export const NEW_PRODUCTS = [
  {
    id: 'zion-hire-ai',
    name: 'Zion Hire AI',
    description: 'Advanced AI-powered recruitment and talent acquisition platform',
    price: 299.99,
    currency: '$',
    period: '/month',
    category: 'AI & HR',
    features: [
      'AI-powered candidate matching',
      'Automated screening',
      'Interview scheduling',
      'Performance analytics',
      'Integration with major job boards'
    ],
    popular: true,
    rating: 4.8,
    reviews: 156,
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&h=500'
  },
  {
    id: 'ai-research-assistant',
    name: 'AI Research Assistant',
    description: 'Intelligent research tool for academic and business research',
    price: 199.99,
    currency: '$',
    period: '/month',
    category: 'AI & Research',
    features: [
      'Natural language queries',
      'Multi-source data analysis',
      'Citation management',
      'Research summaries',
      'Collaborative workspaces'
    ],
    popular: false,
    rating: 4.6,
    reviews: 89,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500'
  },
  {
    id: 'ai-content-generator',
    name: 'AI Content Generator',
    description: 'Professional content creation powered by advanced AI',
    price: 149.99,
    currency: '$',
    period: '/month',
    category: 'AI & Content',
    features: [
      'Multi-format content creation',
      'SEO optimization',
      'Brand voice consistency',
      'Plagiarism detection',
      'Content analytics'
    ],
    popular: true,
    rating: 4.7,
    reviews: 234,
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&h=500'
  },
  {
    id: 'ai-code-review',
    name: 'AI Code Review',
    description: 'Automated code review and quality assurance platform',
    price: 399.99,
    currency: '$',
    period: '/month',
    category: 'AI & Development',
    features: [
      'Automated code analysis',
      'Security vulnerability detection',
      'Performance optimization suggestions',
      'Code style enforcement',
      'Integration with Git platforms'
    ],
    popular: false,
    rating: 4.9,
    reviews: 67,
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&h=500'
  },
  {
    id: 'cloud-cost-optimizer',
    name: 'Cloud Cost Optimizer',
    description: 'Intelligent cloud resource optimization and cost management',
    price: 249.99,
    currency: '$',
    period: '/month',
    category: 'Cloud & DevOps',
    features: [
      'Real-time cost monitoring',
      'Resource optimization recommendations',
      'Budget alerts and notifications',
      'Multi-cloud support',
      'Cost forecasting'
    ],
    popular: true,
    rating: 4.5,
    reviews: 123,
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&h=500'
  },
  {
    id: 'service-description-generator',
    name: 'Service Description Generator',
    description: 'AI-powered service description and proposal generator',
    price: 99.99,
    currency: '$',
    period: '/month',
    category: 'AI & Business',
    features: [
      'Customizable templates',
      'Industry-specific language',
      'SEO optimization',
      'Multi-language support',
      'Brand customization'
    ],
    popular: false,
    rating: 4.4,
    reviews: 78,
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=800&h=500'
  }
];

export const PRODUCT_CATEGORIES = [
  'AI & HR',
  'AI & Research',
  'AI & Content',
  'AI & Development',
  'Cloud & DevOps',
  'AI & Business'
];

export function getProductsByCategory(category) {
  if (category === 'all') return NEW_PRODUCTS;
  return NEW_PRODUCTS.filter(product => product.category === category);
}

export function getPopularProducts() {
  return NEW_PRODUCTS.filter(product => product.popular);
}

export function searchProducts(query) {
  const searchTerm = query.toLowerCase();
  return NEW_PRODUCTS.filter(product => 
    product.name.toLowerCase().includes(searchTerm) ||
    product.description.toLowerCase().includes(searchTerm) ||
    product.category.toLowerCase().includes(searchTerm)
  );
}