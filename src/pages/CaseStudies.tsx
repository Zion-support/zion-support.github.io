import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  TrendingUp, 
  Users, 
  Building, 
  Brain, 
  Shield, 
  Cloud, 
  ShoppingCart, 
  Star, 
  Clock, 
  DollarSign, 
  Target, 
  CheckCircle, 
  ArrowRight, 
  Search, 
  Filter, 
  Globe, 
  Award, 
  Zap, 
  Rocket, 
  Heart, 
  Cpu, 
  Atom, 
  Network, 
  Eye, 
  BarChart3, 
  Lock, 
  Leaf, 
  Satellite, 
  MessageCircle, 
  Phone, 
  Mail, 
  Calendar,
  MapPin,
  Industry,
  ChartBar,
  Lightbulb,
  Code,
  Server,
  Database,
  Smartphone,
  Truck,
  GraduationCap,
  BookOpen,
  Video,
  Image,
  Link,
  ChevronDown,
  ChevronRight,
  ExternalLink
} from 'lucide-react';

interface CaseStudy {
  id: string;
  title: string;
  excerpt: string;
  description: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  metrics: {
    revenueIncrease?: string;
    costReduction?: string;
    efficiencyGain?: string;
    timeSaved?: string;
    accuracyImprovement?: string;
  };
  technologies: string[];
  duration: string;
  teamSize: string;
  category: string;
  featured: boolean;
  image: string;
  tags: string[];
  author: string;
  publishDate: string;
  readTime: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: '1',
    title: 'AI-Powered Business Intelligence Drives 35% Revenue Growth for Fortune 500 Retailer',
    excerpt: 'How a major retail chain leveraged our AI Business Intelligence Suite to optimize operations and increase revenue by 35% in just 12 months.',
    description: 'A Fortune 500 retail chain was struggling with fragmented data across multiple systems, leading to poor decision-making and missed opportunities. They needed a unified view of their business operations and predictive insights to drive growth.',
    client: 'Global Retail Corporation',
    industry: 'Retail & E-commerce',
    challenge: 'Fragmented data across multiple systems, poor decision-making, missed revenue opportunities, lack of predictive insights',
    solution: 'Implemented Zion Tech Group\'s AI Business Intelligence Suite with advanced analytics, machine learning algorithms, and real-time dashboards',
    results: [
      '35% increase in overall revenue within 12 months',
      '40% improvement in inventory management efficiency',
      '25% reduction in operational costs',
      '60% faster decision-making process',
      'Predictive analytics prevented $2M in potential losses'
    ],
    metrics: {
      revenueIncrease: '35%',
      costReduction: '25%',
      efficiencyGain: '40%',
      timeSaved: '60%',
      accuracyImprovement: '85%'
    },
    technologies: ['AI/ML', 'Business Intelligence', 'Predictive Analytics', 'Real-time Dashboards', 'Data Integration'],
    duration: '12 months',
    teamSize: '8 people',
    category: 'AI & Analytics',
    featured: true,
    image: '/images/case-studies/retail-ai-bi.jpg',
    tags: ['AI Business Intelligence', 'Retail', 'Revenue Growth', 'Predictive Analytics'],
    author: 'Dr. Sarah Chen',
    publishDate: '2024-01-15',
    readTime: '8 min read'
  },
  {
    id: '2',
    title: 'Quantum Computing Optimization Reduces Manufacturing Costs by 40%',
    excerpt: 'A manufacturing company achieved significant cost savings and efficiency improvements through our quantum computing optimization solutions.',
    description: 'A leading manufacturing company was facing complex optimization challenges in their production scheduling and supply chain management. Traditional computing methods were too slow to find optimal solutions.',
    client: 'Advanced Manufacturing Inc.',
    industry: 'Manufacturing',
    challenge: 'Complex production scheduling optimization, slow traditional computing methods, inefficient supply chain management, high operational costs',
    solution: 'Deployed Zion Tech Group\'s Quantum Computing Optimization Platform with custom algorithms for manufacturing operations',
    results: [
      '40% reduction in manufacturing costs',
      '50% improvement in production efficiency',
      '30% faster supply chain optimization',
      '25% reduction in waste and defects',
      'Quantum advantage demonstrated in real-world applications'
    ],
    metrics: {
      costReduction: '40%',
      efficiencyGain: '50%',
      timeSaved: '30%'
    },
    technologies: ['Quantum Computing', 'Optimization Algorithms', 'Supply Chain Management', 'Production Scheduling'],
    duration: '18 months',
    teamSize: '12 people',
    category: 'Quantum Computing',
    featured: true,
    image: '/images/case-studies/quantum-manufacturing.jpg',
    tags: ['Quantum Computing', 'Manufacturing', 'Cost Reduction', 'Optimization'],
    author: 'Dr. Alex Thompson',
    publishDate: '2024-01-12',
    readTime: '10 min read'
  },
  {
    id: '3',
    title: 'AI Cybersecurity Platform Prevents 99.9% of Advanced Threats',
    excerpt: 'Financial services company achieves unprecedented security levels with our AI-powered cybersecurity platform.',
    description: 'A major financial services company was experiencing sophisticated cyber attacks that traditional security tools couldn\'t detect. They needed advanced threat detection and response capabilities.',
    client: 'Global Financial Services',
    industry: 'Financial Services',
    challenge: 'Sophisticated cyber attacks, traditional security tools ineffective, compliance requirements, real-time threat detection needed',
    solution: 'Implemented Zion Tech Group\'s AI Cybersecurity Platform with machine learning threat detection and automated response systems',
    results: [
      '99.9% threat detection and prevention rate',
      '90% reduction in false positives',
      'Real-time threat response in under 30 seconds',
      'Achieved SOC2 Type II compliance',
      'Zero successful breaches in 18 months'
    ],
    metrics: {
      accuracyImprovement: '99.9%',
      efficiencyGain: '90%',
      timeSaved: '99%'
    },
    technologies: ['AI/ML', 'Cybersecurity', 'Threat Detection', 'Automated Response', 'Compliance'],
    duration: '9 months',
    teamSize: '15 people',
    category: 'Cybersecurity',
    featured: false,
    image: '/images/case-studies/ai-cybersecurity.jpg',
    tags: ['AI Cybersecurity', 'Financial Services', 'Threat Detection', 'Compliance'],
    author: 'Jennifer Kim',
    publishDate: '2024-01-10',
    readTime: '7 min read'
  },
  {
    id: '4',
    title: 'Cloud Migration and DevOps Transformation Saves $2M Annually',
    excerpt: 'Healthcare organization modernizes infrastructure and achieves significant cost savings through cloud migration and DevOps transformation.',
    description: 'A healthcare organization was struggling with legacy infrastructure, high maintenance costs, and slow deployment cycles. They needed to modernize their technology stack and improve operational efficiency.',
    client: 'Regional Healthcare System',
    industry: 'Healthcare',
    challenge: 'Legacy infrastructure, high maintenance costs, slow deployment cycles, compliance requirements, scalability issues',
    solution: 'Executed comprehensive cloud migration strategy with DevOps transformation and automated deployment pipelines',
    results: [
      '$2M annual cost savings',
      '80% reduction in deployment time',
      '99.9% uptime achieved',
      'Improved compliance and security posture',
      'Scalable infrastructure for future growth'
    ],
    metrics: {
      costReduction: '$2M annually',
      efficiencyGain: '80%',
      timeSaved: '80%'
    },
    technologies: ['Cloud Migration', 'DevOps', 'Automation', 'Infrastructure as Code', 'Healthcare IT'],
    duration: '15 months',
    teamSize: '20 people',
    category: 'Cloud & DevOps',
    featured: false,
    image: '/images/case-studies/cloud-healthcare.jpg',
    tags: ['Cloud Migration', 'DevOps', 'Healthcare', 'Cost Savings'],
    author: 'Michael Rodriguez',
    publishDate: '2024-01-08',
    readTime: '9 min read'
  },
  {
    id: '5',
    title: 'Micro SaaS Platform Generates $500K Revenue in First Year',
    excerpt: 'Startup company successfully launches and scales their business using our Micro SaaS platform and development services.',
    description: 'A startup company had a great idea for a specialized software solution but lacked the technical expertise and infrastructure to build and launch it quickly. They needed a complete solution to get to market fast.',
    client: 'InnovationTech Startup',
    industry: 'Technology Startup',
    challenge: 'Lack of technical expertise, infrastructure costs, time to market pressure, limited resources',
    solution: 'Leveraged Zion Tech Group\'s Micro SaaS Platform with custom development services and go-to-market support',
    results: [
      '$500K revenue in first year',
      'Launched product in 6 months instead of 18 months',
      '500+ paying customers acquired',
      'Scalable infrastructure for growth',
      'Successful Series A funding round'
    ],
    metrics: {
      revenueIncrease: '$500K',
      timeSaved: '67%',
      efficiencyGain: '300%'
    },
    technologies: ['Micro SaaS', 'Custom Development', 'Cloud Infrastructure', 'Go-to-Market Strategy'],
    duration: '6 months',
    teamSize: '6 people',
    category: 'Micro SaaS',
    featured: false,
    image: '/images/case-studies/micro-saas-startup.jpg',
    tags: ['Micro SaaS', 'Startup', 'Revenue Generation', 'Rapid Development'],
    author: 'David Park',
    publishDate: '2024-01-05',
    readTime: '6 min read'
  },
  {
    id: '6',
    title: 'AI Content Marketing Suite Increases Lead Generation by 200%',
    excerpt: 'B2B company achieves dramatic improvements in lead generation and content marketing efficiency through AI-powered automation.',
    description: 'A B2B company was struggling with content creation, lead generation, and marketing automation. Their manual processes were time-consuming and produced inconsistent results.',
    client: 'B2B Solutions Corp.',
    industry: 'B2B Services',
    challenge: 'Manual content creation, inconsistent lead generation, time-consuming marketing processes, poor ROI tracking',
    solution: 'Implemented Zion Tech Group\'s AI Content Marketing Suite with automated content generation and lead scoring',
    results: [
      '200% increase in lead generation',
      '80% reduction in content creation time',
      '150% improvement in content engagement',
      'Automated lead scoring and nurturing',
      'Measurable ROI on marketing spend'
    ],
    metrics: {
      revenueIncrease: '200%',
      timeSaved: '80%',
      efficiencyGain: '150%'
    },
    technologies: ['AI Content Generation', 'Marketing Automation', 'Lead Scoring', 'Content Analytics'],
    duration: '8 months',
    teamSize: '10 people',
    category: 'AI Marketing',
    featured: false,
    image: '/images/case-studies/ai-content-marketing.jpg',
    tags: ['AI Content Marketing', 'Lead Generation', 'B2B', 'Marketing Automation'],
    author: 'Lisa Wang',
    publishDate: '2024-01-03',
    readTime: '7 min read'
  }
];

const categories = ['All', 'AI & Analytics', 'Quantum Computing', 'Cybersecurity', 'Cloud & DevOps', 'Micro SaaS', 'AI Marketing'];
const industries = ['All', 'Retail & E-commerce', 'Manufacturing', 'Financial Services', 'Healthcare', 'Technology Startup', 'B2B Services'];

export function CaseStudies() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedIndustry, setSelectedIndustry] = useState('All');
  const [sortBy, setSortBy] = useState<'date' | 'impact' | 'relevance'>('impact');

  const filteredCaseStudies = caseStudies.filter(study => {
    const matchesSearch = study.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         study.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         study.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'All' || study.category === selectedCategory;
    const matchesIndustry = selectedIndustry === 'All' || study.industry === selectedIndustry;
    
    return matchesSearch && matchesCategory && matchesIndustry;
  });

  const sortedCaseStudies = [...filteredCaseStudies].sort((a, b) => {
    switch (sortBy) {
      case 'date':
        return new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime();
      case 'impact':
        return b.featured ? 1 : -1;
      case 'relevance':
        return a.results.length - b.results.length;
      default:
        return 0;
    }
  });

  const featuredCaseStudies = sortedCaseStudies.filter(study => study.featured);
  const regularCaseStudies = sortedCaseStudies.filter(study => !study.featured);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="bg-zion-slate-dark/95 backdrop-blur-md border-b border-cyan-400/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Success Stories & Case Studies
            </h1>
            <p className="text-xl text-cyan-300 max-w-3xl mx-auto">
              Discover how organizations across industries are achieving remarkable results with Zion Tech Group solutions.
            </p>
          </motion.div>

          {/* Search and Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-6xl mx-auto mt-8"
          >
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
              <div className="lg:col-span-2">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search case studies..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-zion-slate-dark/50 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
              </div>
              
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-zion-slate-dark/50 border border-cyan-400/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              
              <select
                value={selectedIndustry}
                onChange={(e) => setSelectedIndustry(e.target.value)}
                className="px-4 py-3 bg-zion-slate-dark/50 border border-cyan-400/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                {industries.map(industry => (
                  <option key={industry} value={industry}>{industry}</option>
                ))}
              </select>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Case Studies */}
        {featuredCaseStudies.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
              <Star className="w-6 h-6 text-yellow-400 mr-2" />
              Featured Success Stories
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredCaseStudies.map((study, index) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="bg-zion-slate-dark/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl overflow-hidden hover:border-cyan-400/40 transition-all duration-300"
                >
                  <div className="h-48 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                    <FileText className="w-16 h-16 text-cyan-400" />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                      <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-xs font-medium">
                        Featured
                      </span>
                      <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-xs font-medium">
                        {study.category}
                      </span>
                      <span className="flex items-center">
                        <Building className="w-4 h-4 mr-1" />
                        {study.industry}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 hover:text-cyan-300 transition-colors">
                      {study.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4">{study.excerpt}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      {study.metrics.revenueIncrease && (
                        <div className="text-center p-3 bg-green-500/20 rounded-lg">
                          <div className="text-green-400 font-bold text-lg">{study.metrics.revenueIncrease}</div>
                          <div className="text-green-300 text-xs">Revenue Increase</div>
                        </div>
                      )}
                      {study.metrics.costReduction && (
                        <div className="text-center p-3 bg-blue-500/20 rounded-lg">
                          <div className="text-blue-400 font-bold text-lg">{study.metrics.costReduction}</div>
                          <div className="text-blue-300 text-xs">Cost Reduction</div>
                        </div>
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {study.duration}
                      </span>
                      <span className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {study.teamSize}
                      </span>
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {formatDate(study.publishDate)}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Regular Case Studies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-white">All Case Studies</h2>
            
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'date' | 'impact' | 'relevance')}
              className="px-4 py-2 bg-zion-slate-dark/50 border border-cyan-400/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            >
              <option value="impact">Sort by Impact</option>
              <option value="date">Sort by Date</option>
              <option value="relevance">Sort by Relevance</option>
            </select>
          </div>
          
          {regularCaseStudies.length === 0 ? (
            <div className="text-center py-12">
              <FileText className="w-16 h-16 text-gray-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No case studies found</h3>
              <p className="text-gray-400 mb-4">
                Try adjusting your search terms or browse all categories
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                  setSelectedIndustry('All');
                }}
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularCaseStudies.map((study, index) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="bg-zion-slate-dark/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl overflow-hidden hover:border-cyan-400/40 transition-all duration-300"
                >
                  <div className="h-40 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                    <FileText className="w-12 h-12 text-cyan-400" />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                      <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-xs font-medium">
                        {study.category}
                      </span>
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs font-medium">
                        {study.industry}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-white mb-3 hover:text-cyan-300 transition-colors">
                      {study.title}
                    </h3>
                    
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">{study.excerpt}</p>
                    
                    <div className="mb-4">
                      <h4 className="text-white text-sm font-medium mb-2">Key Results:</h4>
                      <ul className="space-y-1">
                        {study.results.slice(0, 2).map((result, idx) => (
                          <li key={idx} className="text-xs text-gray-300 flex items-start">
                            <CheckCircle className="w-3 h-3 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                        {study.results.length > 2 && (
                          <li className="text-xs text-cyan-400">
                            +{study.results.length - 2} more results
                          </li>
                        )}
                      </ul>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {study.duration}
                      </span>
                      <span className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {study.teamSize}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/20 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Create Your Success Story?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Let's discuss how Zion Tech Group can help your organization achieve similar results. Our team is ready to understand your challenges and propose tailored solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 font-semibold text-lg"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Start Your Project
              </a>
              <a
                href="mailto:sales@ziontechgroup.com"
                className="inline-flex items-center border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 font-semibold text-lg"
              >
                <Mail className="w-5 h-5 mr-2" />
                Request Consultation
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default CaseStudies;
