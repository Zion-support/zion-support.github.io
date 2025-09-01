export interface MarketplaceItem {
  id: string;
  title: string;
  category: 'products' | 'talent' | 'equipment' | 'services';
  description: string;
  price: string;
  rating: number;
  reviews: number;
  views: number;
  likes: number;
  image: string;
  tags: string[];
  featured: boolean;
  seller: {
    name: string;
    rating: number;
    verified: boolean;
  };
  location: string;
  availability: 'available' | 'limited' | 'out-of-stock';
  deliveryTime: string;
  warranty: string;
}

export const marketplaceItems: MarketplaceItem[] = [
  {
    id: 'ai-server-cluster',
    title: 'AI-Powered Server Cluster',
    category: 'products',
    description: 'High-performance computing cluster optimized for AI workloads with GPU acceleration and scalable architecture.',
    price: '$25,000',
    rating: 4.9,
    reviews: 127,
    views: 2847,
    likes: 156,
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80',
    tags: ['AI', 'High Performance', 'Scalable', 'GPU'],
    featured: true,
    seller: {
      name: 'TechCorp Solutions',
      rating: 4.8,
      verified: true,
    },
    location: 'San Francisco, CA',
    availability: 'available',
    deliveryTime: '2-3 weeks',
    warranty: '3 years'
  },
  {
    id: 'cybersecurity-team',
    title: 'Cybersecurity Expert Team',
    category: 'talent',
    description: 'Senior cybersecurity professionals with 10+ years experience in enterprise security, compliance, and threat detection.',
    price: '$150/hr',
    rating: 4.8,
    reviews: 89,
    views: 1956,
    likes: 134,
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    tags: ['Security', 'Expert', 'Certified', 'Compliance'],
    featured: true,
    seller: {
      name: 'SecureNet Professionals',
      rating: 4.9,
      verified: true,
    },
    location: 'Remote',
    availability: 'available',
    deliveryTime: 'Immediate',
    warranty: 'N/A'
  },
  {
    id: 'quantum-hardware',
    title: 'Quantum Computing Hardware',
    category: 'equipment',
    description: 'State-of-the-art quantum computing components and systems for research and development applications.',
    price: '$50,000',
    rating: 4.7,
    reviews: 156,
    views: 3241,
    likes: 189,
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    tags: ['Quantum', 'Research', 'Advanced', 'Experimental'],
    featured: false,
    seller: {
      name: 'QuantumTech Labs',
      rating: 4.6,
      verified: true,
    },
    location: 'Boston, MA',
    availability: 'limited',
    deliveryTime: '4-6 weeks',
    warranty: '1 year'
  }
];

// Generate search suggestions for the enhanced search input
export function generateSearchSuggestions(): string[] {
  return [
    // AI & Automation Services
    'AI Business Intelligence',
    'AI Sales Copilot',
    'AI Compliance Assistant',
    'AI Workflow Automation',
    'Machine Learning Models',
    'Predictive Analytics',
    'Natural Language Processing',
    'Computer Vision',
    'Robotic Process Automation',
    'AI Consulting',
    
    // Cloud & DevOps Services
    'Cloud Infrastructure',
    'DevOps Automation',
    'CI/CD Pipelines',
    'Cloud FinOps',
    'Infrastructure as Code',
    'Container Orchestration',
    'Microservices Architecture',
    'Serverless Computing',
    'Edge Computing',
    'Multi-cloud Strategy',
    
    // Cybersecurity Services
    'Zero Trust Security',
    'AI Threat Detection',
    'Compliance Automation',
    'Security Operations Center',
    'Penetration Testing',
    'Vulnerability Assessment',
    'Incident Response',
    'Security Training',
    'Risk Assessment',
    'Data Protection',
    
    // Industry Solutions
    'Healthcare Technology',
    'Financial Services',
    'Manufacturing Solutions',
    'Government Technology',
    'Retail Innovation',
    'Education Technology',
    'Energy Solutions',
    'Transportation Technology',
    'Real Estate Tech',
    'Entertainment Technology',
    
    // Technology Solutions
    'Digital Transformation',
    'Quantum Computing',
    'Blockchain Technology',
    'IoT Solutions',
    '5G Networks',
    'Augmented Reality',
    'Virtual Reality',
    'Internet of Things',
    'Smart Cities',
    'Sustainable Technology'
  ];
}

// Service categories for navigation and organization
export const serviceCategories = [
  {
    id: 'ai-automation',
    name: 'AI & Automation',
    description: 'Intelligent automation solutions powered by artificial intelligence',
    icon: 'Brain',
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 'cloud-devops',
    name: 'Cloud & DevOps',
    description: 'Cloud infrastructure and DevOps automation services',
    icon: 'HardDrive',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity',
    description: 'Advanced security solutions and compliance automation',
    icon: 'Shield',
    color: 'from-red-500 to-orange-500'
  },
  {
    id: 'industry-solutions',
    name: 'Industry Solutions',
    description: 'Specialized solutions for specific industries',
    icon: 'Building2',
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 'emerging-tech',
    name: 'Emerging Technology',
    description: 'Cutting-edge technology solutions and research',
    icon: 'Sparkles',
    color: 'from-indigo-500 to-purple-500'
  }
];

// Popular services for quick access
export const popularServices = [
  {
    name: 'AI Business Intelligence',
    description: 'Transform your data into actionable insights',
    price: 'Starting at $2,500/month',
    rating: 4.9,
    category: 'ai-automation'
  },
  {
    name: 'Cloud FinOps Optimizer',
    description: 'Optimize your cloud costs and operations',
    price: 'Starting at $1,800/month',
    rating: 4.8,
    category: 'cloud-devops'
  },
  {
    name: 'Zero Trust Security',
    description: 'Implement comprehensive security architecture',
    price: 'Starting at $3,200/month',
    rating: 4.9,
    category: 'cybersecurity'
  },
  {
    name: 'Digital Transformation',
    description: 'Modernize your business with technology',
    price: 'Starting at $5,000/month',
    rating: 4.7,
    category: 'industry-solutions'
  }
];
