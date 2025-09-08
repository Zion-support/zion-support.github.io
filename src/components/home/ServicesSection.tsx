interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  path: string;
  features: string[];
  category: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  price: string;
  popular?: boolean;
  gradient: string;
}

const ServicesSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  const services: Service[] = [
    {
      id: 'ai-solutions',
      title: 'AI-Powered Solutions',
      description: 'Transform your business with cutting-edge artificial intelligence and machine learning solutions.',
      icon: Brain,
      path: '/ai-solutions',
      features: ['Machine Learning', 'Predictive Analytics', 'Natural Language Processing', 'Computer Vision'],
      category: 'AI & ML',
      difficulty: 'Advanced',
      duration: '8-12 weeks',
      price: 'From $25,000',
      popular: true,
      gradient: 'from-purple-600 to-blue-600'
    },
    {
      id: 'cloud-devops',
      title: 'Cloud & DevOps',
      description: 'Streamline your development and deployment processes with modern cloud infrastructure.',
      icon: Cloud,
      path: '/cloud-devops',
      features: ['AWS/Azure/GCP', 'CI/CD Pipelines', 'Container Orchestration', 'Infrastructure as Code'],
      category: 'Infrastructure',
      difficulty: 'Intermediate',
      duration: '6-10 weeks',
      price: 'From $18,000',
      gradient: 'from-blue-600 to-cyan-600'
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
      description: 'Protect your digital assets with comprehensive security solutions and compliance frameworks.',
      icon: Shield,
      path: '/services/cybersecurity',
      features: ['Security Audits', 'Penetration Testing', 'SOC2 Compliance', 'Incident Response'],
      category: 'Security',
      difficulty: 'Advanced',
      duration: '4-8 weeks',
      price: 'From $20,000',
      gradient: 'from-green-600 to-emerald-600'
    },
    {
      id: 'micro-saas',
      title: 'Micro-SaaS Solutions',
      description: 'Custom software solutions designed to streamline operations and boost productivity.',
      icon: Code,
      path: '/services/micro-saas-solutions',
      features: ['Custom Development', 'API Integration', 'User Management', 'Analytics Dashboard'],
      category: 'Software',
      difficulty: 'Intermediate',
      duration: '10-16 weeks',
      price: 'From $30,000',
      popular: true,
      gradient: 'from-orange-600 to-red-600'
    },
    {
      id: 'quantum-tech',
      title: 'Quantum Technology',
      description: 'Explore the future of computing with quantum algorithms and quantum-safe cryptography.',
      icon: Cpu,
      path: '/services/quantum-technology',
      features: ['Quantum Algorithms', 'Quantum Cryptography', 'Quantum Simulation', 'Research & Development'],
      category: 'Emerging Tech',
      difficulty: 'Advanced',
      duration: '12-20 weeks',
      price: 'From $50,000',
      gradient: 'from-indigo-600 to-purple-600'
    },
    {
      id: 'data-analytics',
      title: 'Data Analytics',
      description: 'Turn your data into actionable insights with advanced analytics and visualization tools.',
      icon: BarChart3,
      path: '/services/data-analytics',
      features: ['Data Mining', 'Business Intelligence', 'Real-time Analytics', 'Predictive Modeling'],
      category: 'Analytics',
      difficulty: 'Intermediate',
      duration: '6-12 weeks',
      price: 'From $22,000',
      gradient: 'from-teal-600 to-green-600'
    }
  ];

  const categories = ['all', 'AI & ML', 'Infrastructure', 'Security', 'Software', 'Emerging Tech', 'Analytics'];

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory);
