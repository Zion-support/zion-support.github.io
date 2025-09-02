import React, { useState, useEffect } from 'react';
import {
  Search,
  Filter,
  Grid,
  List,
  Star,
  ArrowRight,
  Zap,
  Brain,
  Shield,
  Cloud,
  Database,
  Globe,
  TrendingUp,
  Users,
  Building2,
  Heart,
  Award,
  CheckCircle,
  ExternalLink,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useNotifications } from '../components/ui/NotificationSystem';

interface Service {
  id: string;
  name: string;
  category: string;
  description: string;
  features: string[];
  pricing: {
    starting: string;
    popular?: boolean;
  };
  rating: number;
  reviews: number;
  icon: React.ComponentType<any>;
  href: string;
  tags: string[];
  featured?: boolean;
}

const services: Service[] = [
  // AI Services
  {
    id: 'ai-business-intelligence',
    name: 'AI Business Intelligence Platform',
    category: 'AI & Automation',
    description: 'Advanced AI-powered business intelligence with real-time analytics and predictive insights.',
    features: ['Real-time Analytics', 'Predictive Insights', 'Custom Dashboards', 'Data Visualization'],
    pricing: { starting: '$299/month', popular: true },
    rating: 4.9,
    reviews: 127,
    icon: Brain,
    href: '/services/ai-business-intelligence',
    tags: ['AI', 'Analytics', 'Business Intelligence', 'Machine Learning'],
    featured: true
  },
  {
    id: 'ai-cybersecurity',
    name: 'AI Cybersecurity Suite',
    category: 'AI & Automation',
    description: 'Next-generation AI-powered cybersecurity with threat detection and automated response.',
    features: ['Threat Detection', 'Automated Response', 'Risk Assessment', 'Compliance Monitoring'],
    pricing: { starting: '$499/month' },
    rating: 4.8,
    reviews: 89,
    icon: Shield,
    href: '/services/ai-cybersecurity',
    tags: ['AI', 'Cybersecurity', 'Threat Detection', 'Automation']
  },
  {
    id: 'ai-workflow-automation',
    name: 'AI Workflow Orchestrator',
    category: 'AI & Automation',
    description: 'Intelligent workflow automation that adapts and optimizes business processes.',
    features: ['Process Automation', 'Smart Routing', 'Performance Optimization', 'Integration Hub'],
    pricing: { starting: '$199/month' },
    rating: 4.7,
    reviews: 156,
    icon: Zap,
    href: '/services/ai-workflow-automation',
    tags: ['AI', 'Automation', 'Workflow', 'Productivity']
  },
  {
    id: 'ai-healthcare-analytics',
    name: 'AI Healthcare Analytics Platform',
    category: 'AI & Automation',
    description: 'Advanced healthcare analytics with predictive modeling and patient insights.',
    features: ['Predictive Modeling', 'Patient Analytics', 'Clinical Insights', 'Risk Assessment'],
    pricing: { starting: '$799/month' },
    rating: 4.9,
    reviews: 67,
    icon: Heart,
    href: '/services/ai-healthcare-analytics',
    tags: ['AI', 'Healthcare', 'Analytics', 'Predictive Modeling']
  },
  {
    id: 'ai-financial-trading',
    name: 'AI Financial Trading Platform',
    category: 'AI & Automation',
    description: 'AI-powered financial trading with real-time market analysis and automated trading.',
    features: ['Market Analysis', 'Automated Trading', 'Risk Management', 'Portfolio Optimization'],
    pricing: { starting: '$999/month' },
    rating: 4.8,
    reviews: 43,
    icon: TrendingUp,
    href: '/services/ai-financial-trading',
    tags: ['AI', 'Finance', 'Trading', 'Analytics']
  },

  // IT Services
  {
    id: 'cloud-infrastructure',
    name: 'Cloud Infrastructure Management',
    category: 'IT & Infrastructure',
    description: 'Comprehensive cloud infrastructure management with automated scaling and monitoring.',
    features: ['Auto Scaling', 'Performance Monitoring', 'Cost Optimization', 'Security Management'],
    pricing: { starting: '$399/month' },
    rating: 4.6,
    reviews: 234,
    icon: Cloud,
    href: '/services/cloud-infrastructure',
    tags: ['Cloud', 'Infrastructure', 'DevOps', 'Monitoring']
  },
  {
    id: 'devops-automation',
    name: 'DevOps Automation Platform',
    category: 'IT & Infrastructure',
    description: 'End-to-end DevOps automation with CI/CD pipelines and infrastructure as code.',
    features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Automated Testing', 'Deployment Management'],
    pricing: { starting: '$299/month' },
    rating: 4.7,
    reviews: 178,
    icon: Database,
    href: '/services/devops-automation',
    tags: ['DevOps', 'Automation', 'CI/CD', 'Infrastructure']
  },
  {
    id: 'edge-computing',
    name: 'Edge Computing Solutions',
    category: 'IT & Infrastructure',
    description: 'Edge computing infrastructure for low-latency applications and IoT deployments.',
    features: ['Low Latency', 'IoT Integration', 'Distributed Processing', 'Real-time Analytics'],
    pricing: { starting: '$199/month' },
    rating: 4.5,
    reviews: 92,
    icon: Globe,
    href: '/services/edge-computing',
    tags: ['Edge Computing', 'IoT', 'Low Latency', 'Distributed']
  },

  // Micro SAAS
  {
    id: 'micro-crm',
    name: 'Micro CRM Platform',
    category: 'Micro SAAS',
    description: 'Lightweight CRM solution designed for small to medium businesses.',
    features: ['Contact Management', 'Sales Pipeline', 'Email Integration', 'Analytics Dashboard'],
    pricing: { starting: '$49/month' },
    rating: 4.4,
    reviews: 312,
    icon: Users,
    href: '/services/micro-crm',
    tags: ['CRM', 'Sales', 'Customer Management', 'SMB']
  },
  {
    id: 'ai-content-studio',
    name: 'AI Content Creation Studio',
    category: 'Micro SAAS',
    description: 'AI-powered content creation platform for marketing and social media.',
    features: ['Content Generation', 'SEO Optimization', 'Social Media', 'Brand Consistency'],
    pricing: { starting: '$79/month' },
    rating: 4.6,
    reviews: 189,
    icon: Award,
    href: '/services/ai-content-studio',
    tags: ['AI', 'Content Creation', 'Marketing', 'SEO']
  },
  {
    id: 'project-management',
    name: 'AI Project Management Platform',
    category: 'Micro SAAS',
    description: 'Intelligent project management with AI-powered insights and automation.',
    features: ['Task Automation', 'Resource Planning', 'Progress Tracking', 'Risk Assessment'],
    pricing: { starting: '$99/month' },
    rating: 4.7,
    reviews: 145,
    icon: Building2,
    href: '/services/ai-project-management',
    tags: ['Project Management', 'AI', 'Automation', 'Productivity']
  }
];

const categories = [
  'All Services',
  'AI & Automation',
  'IT & Infrastructure',
  'Micro SAAS',
  'Cybersecurity',
  'Cloud Services',
  'Data Analytics',
  'Healthcare Tech',
  'Financial Services'
];

export const ComprehensiveServicesShowcase: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Services');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'rating' | 'price' | 'name'>('rating');
  const [expandedService, setExpandedService] = useState<string | null>(null);
  const [filteredServices, setFilteredServices] = useState(services);

  const { theme, config } = useTheme();
  const { addNotification } = useNotifications();

  useEffect(() => {
    let filtered = services;

    // Filter by category
    if (selectedCategory !== 'All Services') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(service =>
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Sort services
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating;
        case 'price':
          return parseFloat(a.pricing.starting.replace(/[^0-9.]/g, '')) - parseFloat(b.pricing.starting.replace(/[^0-9.]/g, ''));
        case 'name':
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

    setFilteredServices(filtered);
  }, [searchTerm, selectedCategory, sortBy]);

  const handleServiceClick = (service: Service) => {
    addNotification({
      type: 'info',
      title: 'Service Selected',
      message: `Redirecting to ${service.name}...`
    });
    // In a real app, you would navigate to the service page
    window.open(service.href, '_blank');
  };

  const renderServiceCard = (service: Service) => {
    const IconComponent = service.icon;
    const isExpanded = expandedService === service.id;

    return (
      <div
        key={service.id}
        className={`bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300 hover:shadow-lg ${
          service.featured ? 'ring-2 ring-blue-500' : ''
        }`}
      >
        {service.featured && (
          <div className="bg-blue-500 text-white text-xs font-medium px-3 py-1 text-center">
            Featured Service
          </div>
        )}
        
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                <IconComponent className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {service.name}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {service.category}
                </p>
              </div>
            </div>
            {service.pricing.popular && (
              <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
                Popular
              </span>
            )}
          </div>

          <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
            {service.description}
          </p>

          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(service.rating)
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {service.rating} ({service.reviews} reviews)
              </span>
            </div>
            <div className="text-right">
              <div className="text-lg font-bold text-gray-900 dark:text-white">
                {service.pricing.starting}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                starting price
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {service.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full"
              >
                {tag}
              </span>
            ))}
            {service.tags.length > 3 && (
              <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full">
                +{service.tags.length - 3} more
              </span>
            )}
          </div>

          <div className="space-y-3">
            <button
              onClick={() => setExpandedService(isExpanded ? null : service.id)}
              className="w-full flex items-center justify-between text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
            >
              <span>View Features</span>
              {isExpanded ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </button>

            {isExpanded && (
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-gray-900 dark:text-white">Key Features:</h4>
                <ul className="space-y-1">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <button
              onClick={() => handleServiceClick(service)}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
            >
              <span>Learn More</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Comprehensive Services Showcase
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Discover our extensive portfolio of AI, IT, and Micro SAAS solutions designed to transform your business
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="lg:w-64">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <div className="lg:w-48">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'rating' | 'price' | 'name')}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              >
                <option value="rating">Sort by Rating</option>
                <option value="price">Sort by Price</option>
                <option value="name">Sort by Name</option>
              </select>
            </div>

            {/* View Mode */}
            <div className="flex space-x-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg ${
                  viewMode === 'grid'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg ${
                  viewMode === 'list'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Results Summary */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-gray-600 dark:text-gray-400">
            Showing {filteredServices.length} of {services.length} services
          </p>
          <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
            <span>Featured: {services.filter(s => s.featured).length}</span>
            <span>Categories: {categories.length - 1}</span>
            <span>Total Reviews: {services.reduce((sum, s) => sum + s.reviews, 0)}</span>
          </div>
        </div>

        {/* Services Grid */}
        <div className={`grid gap-6 ${
          viewMode === 'grid'
            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
            : 'grid-cols-1'
        }`}>
          {filteredServices.map(renderServiceCard)}
        </div>

        {/* No Results */}
        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 dark:text-gray-600 mb-4">
              <Search className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              No services found
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Try adjusting your search terms or filters
            </p>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-12 bg-blue-600 rounded-lg p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Our team can create a tailored solution that perfectly fits your business needs. 
            Contact us for a free consultation and custom quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Get Custom Quote
            </button>
            <button className="border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComprehensiveServicesShowcase;