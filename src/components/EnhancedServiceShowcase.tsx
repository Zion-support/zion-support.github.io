import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Cpu, 
  Shield, 
  Cloud, 
  Database, 
  Globe, 
  Eye, 
  Zap,
  Rocket,
  Star,
  CheckCircle,
  ArrowRight,
  TrendingUp,
  DollarSign,
  Clock,
  Users,
  Target,
  Lightbulb,
  BarChart3,
  Lock,
  Network,
  Server,
  Code,
  Settings,
  Monitor,
  Smartphone,
  Tablet,
  Laptop
} from 'lucide-react';

interface Service {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType<any>;
  category: string;
  features: string[];
  pricing: {
    starter: string;
    professional: string;
    enterprise: string;
  };
  benefits: string[];
  useCases: string[];
  technologies: string[];
  implementationTime: string;
  roi: string;
  popularity: number;
  growthRate: number;
  rating: number;
  reviews: number;
}

const services: Service[] = [
  {
    id: 'ai-ml-platform',
    name: 'AI & Machine Learning Platform',
    description: 'Comprehensive AI solutions for business automation, predictive analytics, and intelligent decision-making',
    icon: Brain,
    category: 'Artificial Intelligence',
    features: [
      'Natural Language Processing',
      'Computer Vision',
      'Predictive Analytics',
      'Automated Decision Making',
      'Real-time Learning',
      'Multi-modal AI',
      'Edge AI Deployment',
      'AI Model Management'
    ],
    pricing: {
      starter: '$50K',
      professional: '$200K',
      enterprise: '$500K+'
    },
    benefits: [
      'Increase operational efficiency by 40-60%',
      'Reduce manual errors by 90%',
      'Improve decision accuracy by 35%',
      'Accelerate time-to-market by 50%'
    ],
    useCases: [
      'Customer Service Automation',
      'Predictive Maintenance',
      'Fraud Detection',
      'Content Generation',
      'Process Optimization'
    ],
    technologies: [
      'TensorFlow',
      'PyTorch',
      'OpenAI GPT',
      'Azure ML',
      'AWS SageMaker',
      'Google Cloud AI'
    ],
    implementationTime: '3-6 months',
    roi: '300-500%',
    popularity: 95,
    growthRate: 87,
    rating: 4.8,
    reviews: 127
  },
  {
    id: 'quantum-computing',
    name: 'Quantum Computing Solutions',
    description: 'Next-generation quantum computing for complex problem-solving and optimization challenges',
    icon: Cpu,
    category: 'Quantum Technology',
    features: [
      'Quantum Algorithm Development',
      'Optimization Problems',
      'Cryptography',
      'Material Science',
      'Financial Modeling',
      'Drug Discovery',
      'Climate Modeling',
      'Quantum Machine Learning'
    ],
    pricing: {
      starter: '$200K',
      professional: '$800K',
      enterprise: '$2M+'
    },
    benefits: [
      'Solve previously intractable problems',
      'Exponential speedup for specific algorithms',
      'Future-proof technology investment',
      'Competitive advantage in research'
    ],
    useCases: [
      'Portfolio Optimization',
      'Supply Chain Optimization',
      'Molecular Simulation',
      'Cryptographic Security',
      'Machine Learning Acceleration'
    ],
    technologies: [
      'IBM Qiskit',
      'Google Cirq',
      'Microsoft Q#',
      'Amazon Braket',
      'Rigetti Forest'
    ],
    implementationTime: '6-12 months',
    roi: '500-1000%',
    popularity: 78,
    growthRate: 92,
    rating: 4.9,
    reviews: 89
  },
  {
    id: 'cybersecurity-suite',
    name: 'Advanced Cybersecurity Suite',
    description: 'Comprehensive security solutions protecting against modern cyber threats and ensuring compliance',
    icon: Shield,
    category: 'Security',
    features: [
      'Threat Detection & Response',
      'Vulnerability Assessment',
      'Identity & Access Management',
      'Data Encryption',
      'Compliance Monitoring',
      'Incident Response',
      'Security Training',
      'Penetration Testing'
    ],
    pricing: {
      starter: '$30K',
      professional: '$150K',
      enterprise: '$300K+'
    },
    benefits: [
      'Protect against 99.9% of cyber threats',
      'Meet regulatory compliance requirements',
      'Reduce security incidents by 80%',
      'Build customer trust and confidence'
    ],
    useCases: [
      'Financial Services Security',
      'Healthcare Data Protection',
      'Government Compliance',
      'E-commerce Security',
      'Critical Infrastructure Protection'
    ],
    technologies: [
      'CrowdStrike',
      'Palo Alto Networks',
      'Cisco Security',
      'Microsoft Defender',
      'AWS Security Hub'
    ],
    implementationTime: '2-4 months',
    roi: '200-400%',
    popularity: 92,
    growthRate: 85,
    rating: 4.7,
    reviews: 203
  },
  {
    id: 'cloud-devops-platform',
    name: 'Cloud & DevOps Platform',
    description: 'Scalable cloud infrastructure with automated DevOps practices for continuous delivery',
    icon: Cloud,
    category: 'Cloud & DevOps',
    features: [
      'Multi-cloud Management',
      'Infrastructure as Code',
      'Continuous Integration/Deployment',
      'Container Orchestration',
      'Auto-scaling',
      'Monitoring & Logging',
      'Disaster Recovery',
      'Cost Optimization'
    ],
    pricing: {
      starter: '$25K',
      professional: '$120K',
      enterprise: '$250K+'
    },
    benefits: [
      'Reduce deployment time by 70%',
      'Improve system reliability by 85%',
      'Lower infrastructure costs by 30%',
      'Enable rapid scaling and growth'
    ],
    useCases: [
      'Application Modernization',
      'Microservices Architecture',
      'Big Data Processing',
      'E-commerce Platforms',
      'SaaS Applications'
    ],
    technologies: [
      'AWS',
      'Azure',
      'Google Cloud',
      'Kubernetes',
      'Docker',
      'Terraform',
      'Jenkins',
      'Prometheus'
    ],
    implementationTime: '2-5 months',
    roi: '150-300%',
    popularity: 88,
    growthRate: 79,
    rating: 4.6,
    reviews: 156
  },
  {
    id: 'data-analytics-platform',
    name: 'Data Analytics & Business Intelligence',
    description: 'Data-driven insights platform for informed decision-making and business optimization',
    icon: BarChart3,
    category: 'Data & Analytics',
    features: [
      'Real-time Data Processing',
      'Advanced Analytics',
      'Interactive Dashboards',
      'Predictive Modeling',
      'Data Governance',
      'ETL/ELT Pipelines',
      'Machine Learning Integration',
      'Natural Language Queries'
    ],
    pricing: {
      starter: '$20K',
      professional: '$100K',
      enterprise: '$200K+'
    },
    benefits: [
      'Unlock insights from existing data',
      'Improve operational efficiency by 25%',
      'Identify new business opportunities',
      'Enable data-driven culture'
    ],
    useCases: [
      'Customer Analytics',
      'Operational Intelligence',
      'Financial Reporting',
      'Marketing Optimization',
      'Risk Management'
    ],
    technologies: [
      'Tableau',
      'Power BI',
      'Apache Spark',
      'Snowflake',
      'Databricks',
      'Python/R',
      'SQL Server',
      'MongoDB'
    ],
    implementationTime: '1-3 months',
    roi: '180-350%',
    popularity: 85,
    growthRate: 76,
    rating: 4.5,
    reviews: 134
  }
];

export function EnhancedServiceShowcase() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'popularity' | 'growth' | 'rating' | 'roi'>('popularity');

  const categories = ['all', ...Array.from(new Set(services.map(s => s.category)))];
  
  const filteredServices = services
    .filter(service => 
      selectedCategory === 'all' || service.category === selectedCategory
    )
    .filter(service =>
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.features.some(f => f.toLowerCase().includes(searchQuery.toLowerCase()))
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'popularity': return b.popularity - a.popularity;
        case 'growth': return b.growthRate - a.growthRate;
        case 'rating': return b.rating - a.rating;
        case 'roi': return parseFloat(b.roi.replace('%', '')) - parseFloat(a.roi.replace('%', ''));
        default: return 0;
      }
    });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Artificial Intelligence': return Brain;
      case 'Quantum Technology': return Cpu;
      case 'Security': return Shield;
      case 'Cloud & DevOps': return Cloud;
      case 'Data & Analytics': return BarChart3;
      default: return Rocket;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Artificial Intelligence': return 'from-purple-500 to-pink-500';
      case 'Quantum Technology': return 'from-blue-500 to-cyan-500';
      case 'Security': return 'from-red-500 to-orange-500';
      case 'Cloud & DevOps': return 'from-green-500 to-emerald-500';
      case 'Data & Analytics': return 'from-indigo-500 to-purple-500';
      default: return 'from-gray-500 to-slate-500';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Header Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Enterprise Technology
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {' '}Solutions
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8"
          >
            Cutting-edge technology solutions designed to transform your business operations, 
            enhance security, and drive innovation across all industries.
          </motion.p>
          
          {/* Search and Filter Controls */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <div className="relative">
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-80 px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:border-gray-600 dark:text-white"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
            
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:border-gray-600 dark:text-white"
            >
              <option value="popularity">Sort by Popularity</option>
              <option value="growth">Sort by Growth</option>
              <option value="rating">Sort by Rating</option>
              <option value="roi">Sort by ROI</option>
            </select>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * index }}
                onClick={() => setSelectedCategory(category)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:shadow-md border border-gray-200 dark:border-gray-600'
                }`}
              >
                {category !== 'all' && (
                  <div className={`w-5 h-5 ${selectedCategory === category ? 'text-white' : 'text-gray-500'}`}>
                    {React.createElement(getCategoryIcon(category))}
                  </div>
                )}
                <span className="capitalize">{category === 'all' ? 'All Services' : category}</span>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer"
                onClick={() => setSelectedService(service)}
              >
                {/* Service Header */}
                <div className={`p-6 bg-gradient-to-r ${getCategoryColor(service.category)} text-white`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-white/20 rounded-xl">
                      <service.icon className="w-8 h-8" />
                    </div>
                    <div className="text-right">
                      <div className="text-sm opacity-90">Rating</div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="font-bold">{service.rating}</span>
                        <span className="text-sm opacity-80">({service.reviews})</span>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                  <p className="text-sm opacity-90 line-clamp-2">{service.description}</p>
                </div>

                {/* Service Content */}
                <div className="p-6">
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">{service.popularity}%</div>
                      <div className="text-xs text-gray-500">Popularity</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">{service.growthRate}%</div>
                      <div className="text-xs text-gray-500">Growth</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">{service.roi}</div>
                      <div className="text-xs text-gray-500">ROI</div>
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Key Features</h4>
                    <div className="space-y-2">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                        </div>
                      ))}
                      {service.features.length > 4 && (
                        <div className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                          +{service.features.length - 4} more features
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Starting From</h4>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">
                      {service.pricing.starter}
                    </div>
                    <div className="text-sm text-gray-500">Implementation: {service.implementationTime}</div>
                  </div>

                  {/* CTA Button */}
                  <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 group-hover:shadow-lg">
                    Learn More
                    <ArrowRight className="w-4 h-4 inline ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredServices.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-gray-500 dark:text-gray-400 text-lg">
                No services found matching your criteria.
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                {/* Modal Header */}
                <div className="flex items-start justify-between mb-8">
                  <div className="flex items-center space-x-4">
                    <div className={`p-4 bg-gradient-to-r ${getCategoryColor(selectedService.category)} rounded-xl`}>
                      <selectedService.icon className="w-12 h-12 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                        {selectedService.name}
                      </h2>
                      <p className="text-gray-600 dark:text-gray-400 mt-2">
                        {selectedService.description}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedService(null)}
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 p-2"
                  >
                    ×
                  </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Left Column */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Features</h3>
                    <div className="space-y-3 mb-6">
                      {selectedService.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Benefits</h3>
                    <div className="space-y-3 mb-6">
                      {selectedService.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <TrendingUp className="w-5 h-5 text-blue-500 flex-shrink-0" />
                          <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Column */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Pricing Tiers</h3>
                    <div className="space-y-4 mb-6">
                      {Object.entries(selectedService.pricing).map(([tier, price]) => (
                        <div key={tier} className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                          <span className="capitalize font-medium text-gray-700 dark:text-gray-300">{tier}</span>
                          <span className="font-bold text-gray-900 dark:text-white">{price}</span>
                        </div>
                      ))}
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Implementation</h3>
                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Timeline:</span>
                        <span className="font-medium text-gray-900 dark:text-white">{selectedService.implementationTime}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Expected ROI:</span>
                        <span className="font-medium text-green-600">{selectedService.roi}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Technologies</h3>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {selectedService.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200">
                    Get Started
                  </button>
                  <button className="px-6 py-3 border border-gray-300 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200">
                    Schedule Demo
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Search icon component
const Search = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);