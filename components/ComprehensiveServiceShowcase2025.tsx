<<<<<<< HEAD
import React from 'react';
=======
"use client";
'use client';

import React, { useState, useEffect } from 'react';

import { 
  Brain
  Zap
  Shield
  Globe
  Database
  Cpu
  Network
  BarChart3,
  Users,
  Target,
  Rocket,
  CheckCircle,
  ArrowRight,
  Star,
  TrendingUp,
  Clock,
  Award,
  Lightbulb,
  Code,
  Settings,
  Search,
  Filter,
  Grid,
  List
} from 'lucide-react';

interface Service {
  id: string;
  title: string;
  description: string;
  category: string;
  pricing: {
    type: 'free' | 'starter' | 'professional' | 'enterprise';
    price: number;
    period: 'month' | 'year';
  };
  features: string[];
  benefits: string[];
  icon: React.ComponentType<any>;
  color: string;
  rating: number;
  reviews: number;
  deliveryTime: string;
  complexity: 'simple' | 'moderate' | 'complex' | 'expert';
  tags: string[];
}

const services: Service[] = [
  {
    id: 'ai-consulting',
    title: 'AI Strategy Consulting',
    description: 'Comprehensive AI strategy development and implementation planning for businesses of all sizes.',
    category: 'Consulting',
    pricing: { type: ''professional', 'price: 5000period: 'month' },
    features: ['Strategy 'Development', 'Technology 'Assessment', 'Implementation 'Roadmap', 'ROI Analysis'],
    benefits: ['Increased 'Efficiency', 'Cost 'Reduction', 'Competitive 'Advantage', 'Future-Proofing'],
    icon: Brain,
    color: 'from-purple-500 to-pink-500',
    rating: 4.9,
    reviews: 127,
    deliveryTime: '2-4 weeks',
    complexity: 'expert',
    tags: [', 'AI', 'Strategy', 'Consulting', 'Planning']
  },
  {
    id: 'ml-implementation',
    title: 'Machine Learning Implementation',
    description: 'End-to-end machine learning model developmentrainingand deployment services.',
    category: 'Development',
    pricing: { type: ''professional', 'price: 8000period: 'month' },
    features: ['Model 'Development', 'Data 'Processing', 'Training & 'Validation', 'Deployment'],
    benefits: ['Automated Decision 'Making', 'Predictive 'Analytics', 'Process 'Optimization', 'Scalable Solutions'],
    icon: Cpu,
    color: 'from-blue-500 to-cyan-500',
    rating: 4.8,
    reviews: 89,
    deliveryTime: '4-8 weeks',
    complexity: 'expert',
    tags: [', 'ML', 'Development'Data 'Science', 'Deployment']
  },
  {
    id: 'ai-automation',
    title: 'AI-Powered Automation',
    description: 'Intelligent automation solutions that streamline business processes and reduce manual work.',
    category: 'Automation',
    pricing: { type: ''starter', 'price: 2500period: 'month' },
    features: ['Process 'Automation', 'Workflow 'Optimization', 'Integration 'Services', 'Monitoring'],
    benefits: ['Time 'Savings', 'Error 'Reduction', 'Cost 'Efficiency', 'Scalability'],
    icon: Zap,
    color: 'from-green-500 to-emerald-500',
    rating: 4.7,
    reviews: 156,
    deliveryTime: '2-6 weeks',
    complexity: 'moderate',
    tags: [', 'Automation', 'RPA', 'Workflow', 'Efficiency']
  },
  {
    id: 'data-analytics',
    title: 'Advanced Data Analytics',
    description: 'Comprehensive data analysis and visualization services to unlock business insights.',
    category: 'Analytics',
    pricing: { type: ''professional', 'price: 4000period: 'month' },
    features: ['Data 'Mining', 'Statistical 'Analysis', 'Visualization'Reporting'],
    benefits: ['Data-Driven 'Decisions', 'Performance 'Insights', 'Trend 'Analysis', 'Predictive Modeling'],
    icon: BarChart3,
    color: 'from-orange-500 to-red-500',
    rating: 4.6,
    reviews: 98,
    deliveryTime: '3-5 weeks',
    complexity: 'complex',
    tags: [', 'Analytics', 'Data', 'Visualization', 'Insights']
  },
  {
    id: 'ai-security',
    title: 'AI Security Solutions',
    description: 'Advanced AI-powered security systems to protect your digital assets and infrastructure.',
    category: 'Security',
    pricing: { type: ''enterprise', 'price: 12000period: 'month' },
    features: ['Threat 'Detection', 'Anomaly 'Detection', 'Security 'Monitoring', 'Incident Response'],
    benefits: ['Enhanced 'Security', 'Real-time 'Protection', 'Risk 'Mitigation', 'Compliance'],
    icon: Shield,
    color: 'from-red-500 to-pink-500',
    rating: 4.9,
    reviews: 73,
    deliveryTime: '4-6 weeks',
    complexity: 'expert',
    tags: [', 'Security', 'AI', 'Protection', 'Monitoring']
  },
  {
    id: 'cloud-ai',
    title: 'Cloud AI Infrastructure',
    description: 'Scalable cloud-based AI infrastructure setup and management services.',
    category: 'Infrastructure',
    pricing: { type: ''professional', 'price: 6000period: 'month' },
    features: ['Cloud 'Setup', 'Resource 'Management', 'Scaling 'Solutions', 'Monitoring'],
    benefits: [', 'Scalability', 'Cost 'Optimization', 'High 'Availability', 'Global Access'],
    icon: Globe,
    color: 'from-indigo-500 to-purple-500',
    rating: 4.7,
    reviews: 112,
    deliveryTime: '3-4 weeks',
    complexity: 'complex',
    tags: [', 'Cloud', 'Infrastructure', 'Scalability', 'AWS']
  },
  {
    id: 'ai-integration',
    title: 'AI System Integration',
    description: 'Seamless integration of AI capabilities into existing business systems and workflows.',
    category: 'Integration',
    pricing: { type: ''starter', 'price: 3000period: 'month' },
    features: ['API 'Development', 'System 'Integration', 'Data 'Migration', 'Testing'],
    benefits: ['Seamless 'Integration', 'Improved 'Workflows', 'Data 'Consistency', 'User Experience'],
    icon: Network,
    color: 'from-teal-500 to-blue-500',
    rating: 4.5,
    reviews: 84,
    deliveryTime: '2-5 weeks',
    complexity: 'moderate',
    tags: [', 'Integration', 'API', 'Systems', 'Workflow']
  },
  {
    id: 'ai-training',
    title: 'AI Training & Education',
    description: 'Comprehensive AI training programs for teams and organizations.',
    category: 'Education',
    pricing: { type: ''starter', 'price: 2000period: 'month' },
    features: ['Custom 'Training', 'Workshops', 'Certification', 'Ongoing Support'],
    benefits: ['Skill 'Development', 'Team 'Empowerment', 'Knowledge 'Transfer', 'Best Practices'],
    icon: Users,
    color: 'from-yellow-500 to-orange-500',
    rating: 4.8,
    reviews: 145,
    deliveryTime: '1-3 weeks',
    complexity: 'simple',
    tags: [', 'Training', 'Education', 'Skills', 'Workshops']
  }
];

const categories = [', 'All', 'Consulting', 'Development', 'Automation', 'Analytics', 'Security', 'Infrastructure', 'Integration'Education'];

const pricingTypes = {
  free: { label: ''Free', 'color: 'bg-gray-100 text-gray-800' },
  starter: { label: ''Starter', 'color: 'bg-green-100 text-green-800' },
  professional: { label: ''Professional', 'color: 'bg-blue-100 text-blue-800' },
  enterprise: { label: ''Enterprise', 'color: 'bg-purple-100 text-purple-800' }
};

const complexityLevels = {
  simple: { label: ''Simple', 'color: 'text-green-400' },
  moderate: { label: ''Moderate', 'color: 'text-yellow-400' },
  complex: { label: ''Complex', 'color: 'text-orange-400' },
  expert: { label: ''Expert', 'color: 'text-red-400' }
};

export default function ComprehensiveServiceShowcase2025() {
  const [selectedCategorysetSelectedCategory] = useState('All');
  const [selectedServicesetSelectedService] = useState<Service | null>(null);
  const [viewModesetViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBysetSortBy] = useState<'rating' | 'price' | 'delivery'>('rating');
  const [searchTermsetSearchTerm] = useState('');

  const filteredServices = services
    .filter(service => 
      selectedCategory === 'All' || service.category === selectedCategory
    )
    .filter(service =>
      service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    .sort((ab) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating;
        case 'price':
          return a.pricing.price - b.pricing.price;
        case 'delivery':
          return parseInt(a.deliveryTime) - parseInt(b.deliveryTime);
        default:
          return 0;
      }
    });

  const getPricingColor = (type: string) => {
    return pricingTypes[type as keyof typeof pricingTypes]?.color || 'bg-gray-100 text-gray-800';
  };

  const getComplexityColor = (complexity: string) => {
    return complexityLevels[complexity as keyof typeof complexityLevels]?.color || 'text-gray-400';
  };
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d

const ComprehensiveServiceShowcase2025: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">ComprehensiveServiceShowcase2025</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default ComprehensiveServiceShowcase2025;