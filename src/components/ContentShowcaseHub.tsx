import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { 
  ArrowRight, 
  BookOpen, 
  FileText, 
  TrendingUp,
  Star,
  Zap,
  Brain,
  CheckCircle,
  Sparkles,
  Target,
  Award,
  Clock,
  Users,
  DollarSign,
  Search,
  Filter,
  Grid,
  List
} from "lucide-react";

interface ContentItem {
  id: string;
  type: 'blog' | 'case-study' | 'resource';
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  badge: string;
  icon: React.ComponentType<any>;
  gradient: string;
  featured: boolean;
  isNew?: boolean;
  readTime?: string;
  category?: string;
  tags?: string[];
  publishedDate?: string;
  metrics?: {
    views?: number;
    downloads?: number;
    rating?: number;
  };
}

const allContentItems: ContentItem[] = [
  {
    id: 'ai-revolution-2025',
    type: 'blog',
    title: 'The AI Revolution 2025: Transforming Business Operations',
    description: 'Discover how AI is reshaping industries and learn about the latest trends in business automation.',
    ctaText: 'Read Article',
    ctaLink: '/blog/ai-revolution-2025-transforming-business-operations',
    badge: 'Latest Blog',
    icon: BookOpen,
    gradient: 'from-purple-500 to-purple-600',
    featured: true,
    readTime: '8 min read',
    category: 'AI Trends',
    tags: ['AI', 'Business Transformation', '2025 Trends'],
    publishedDate: '2025-01-15',
    metrics: { views: 1250, rating: 4.9 }
  },
  {
    id: 'quantum-ai-breakthrough',
    type: 'blog',
    title: 'Quantum-AI Fusion: The Breakthrough Revolutionizing Everything in 2025',
    description: 'Discover how quantum-AI fusion is creating unprecedented processing power and solving problems 1 billion times faster.',
    ctaText: 'Read Breakthrough',
    ctaLink: '/blog/quantum-ai-breakthrough-2025',
    badge: 'Revolutionary',
    icon: Zap,
    gradient: 'from-purple-500 to-indigo-600',
    featured: true,
    isNew: true,
    readTime: '12 min read',
    category: 'Quantum Computing',
    tags: ['Quantum AI', 'Breakthrough', 'Future Tech'],
    publishedDate: '2025-01-17',
    metrics: { views: 890, rating: 4.8 }
  },
  {
    id: 'globalcorp-success',
    type: 'case-study',
    title: 'GlobalCorp Achieves 300% ROI in 6 Months',
    description: 'Learn how a Fortune 500 company saved $2.3M annually with our AI solutions.',
    ctaText: 'View Case Study',
    ctaLink: '/case-studies/enterprise-ai-transformation-success-story',
    badge: 'Success Story',
    icon: TrendingUp,
    gradient: 'from-green-500 to-green-600',
    featured: true,
    readTime: '10 min read',
    category: 'Case Study',
    tags: ['ROI', 'Enterprise', 'Manufacturing'],
    publishedDate: '2025-01-15',
    metrics: { views: 2100, rating: 4.9 }
  },
  {
    id: 'healthcare-ai-success',
    type: 'case-study',
    title: 'Healthcare AI Transformation: MedTech Solutions Achieves 400% ROI',
    description: 'See how a regional healthcare network saved $13.2M annually and improved patient care quality dramatically.',
    ctaText: 'View Success Story',
    ctaLink: '/case-studies/healthcare-ai-transformation-success',
    badge: 'Success Story',
    icon: TrendingUp,
    gradient: 'from-green-500 to-emerald-600',
    featured: true,
    isNew: true,
    readTime: '15 min read',
    category: 'Case Study',
    tags: ['Healthcare', 'ROI', 'Patient Care'],
    publishedDate: '2025-01-16',
    metrics: { views: 1560, rating: 4.8 }
  },
  {
    id: 'ai-implementation-guide',
    type: 'resource',
    title: 'Complete AI Implementation Guide 2025',
    description: 'Everything you need to know about implementing AI in your business. 50+ pages of expert insights.',
    ctaText: 'Download Guide',
    ctaLink: '/resources/complete-ai-implementation-guide-2025',
    badge: 'Free Guide',
    icon: FileText,
    gradient: 'from-cyan-500 to-cyan-600',
    featured: true,
    readTime: '45 min read',
    category: 'Implementation',
    tags: ['Guide', 'Implementation', 'Best Practices'],
    publishedDate: '2025-01-15',
    metrics: { downloads: 3200, rating: 4.9 }
  },
  {
    id: 'enterprise-automation-guide',
    type: 'blog',
    title: 'Complete Enterprise AI Automation Guide 2025',
    description: 'Comprehensive guide to transforming business operations with cutting-edge AI automation solutions.',
    ctaText: 'Read Guide',
    ctaLink: '/blog/ai-automation-enterprise-guide-2025',
    badge: 'Expert Guide',
    icon: BookOpen,
    gradient: 'from-blue-500 to-cyan-600',
    featured: true,
    isNew: true,
    readTime: '20 min read',
    category: 'Automation',
    tags: ['Automation', 'Enterprise', 'Guide'],
    publishedDate: '2025-01-16',
    metrics: { views: 980, rating: 4.7 }
  },
  {
    id: 'ai-implementation-checklist',
    type: 'resource',
    title: 'AI Implementation Checklist 2025',
    description: 'Your complete roadmap to successful AI deployment with proven methodologies and best practices.',
    ctaText: 'Download Checklist',
    ctaLink: '/resources/ai-implementation-checklist-2025',
    badge: 'Free Resource',
    icon: CheckCircle,
    gradient: 'from-orange-500 to-red-600',
    featured: true,
    isNew: true,
    readTime: '25 min read',
    category: 'Implementation',
    tags: ['Checklist', 'Implementation', 'Roadmap'],
    publishedDate: '2025-01-17',
    metrics: { downloads: 2100, rating: 4.8 }
  },
  {
    id: 'ai-roi-calculator',
    type: 'resource',
    title: 'AI ROI Calculator Guide 2025',
    description: 'Maximize your return on AI investment with our comprehensive ROI calculation tools and benchmarks.',
    ctaText: 'Calculate ROI',
    ctaLink: '/resources/ai-roi-calculator-guide-2025',
    badge: 'ROI Tool',
    icon: Target,
    gradient: 'from-teal-500 to-green-600',
    featured: true,
    isNew: true,
    readTime: '30 min read',
    category: 'ROI Analysis',
    tags: ['ROI', 'Calculator', 'Investment'],
    publishedDate: '2025-01-17',
    metrics: { downloads: 1800, rating: 4.9 }
  }
];

export function ContentShowcaseHub() {
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['all', ...Array.from(new Set(allContentItems.map(item => item.category).filter(Boolean)))];
  const types = ['all', 'blog', 'case-study', 'resource'];

  const filteredItems = allContentItems.filter(item => {
    const matchesType = selectedType === 'all' || item.type === selectedType;
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = searchTerm === '' || 
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.tags?.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesType && matchesCategory && matchesSearch;
  });

  const featuredItems = filteredItems.filter(item => item.featured);
  const regularItems = filteredItems.filter(item => !item.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Sparkles className="w-8 h-8 text-yellow-400" />
            <h1 className="text-5xl font-bold text-white">
              Content Hub
            </h1>
            <Badge className="bg-red-500/20 text-red-400 border-red-500/30 animate-pulse">
              Fresh Content
            </Badge>
          </div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Discover our comprehensive collection of AI insights, success stories, implementation guides, and resources to transform your business
          </p>
        </div>

        {/* Filters and Search */}
        <div className="mb-8 space-y-4">
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search content..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-slate-600 focus:ring-2 focus:ring-slate-600/50"
            />
          </div>

          {/* Filters */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            {/* Type Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="w-4 h-4 text-slate-400" />
              <div className="flex space-x-2">
                {types.map(type => (
                  <button
                    key={type}
                    onClick={() => setSelectedType(type)}
                    className={`px-3 py-1 rounded-full text-sm transition-colors ${
                      selectedType === type
                        ? 'bg-zion-purple text-white'
                        : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                    }`}
                  >
                    {type === 'all' ? 'All' : type === 'case-study' ? 'Case Studies' : type.charAt(0).toUpperCase() + type.slice(1)}s
                  </button>
                ))}
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-2">
              <span className="text-slate-400 text-sm">Category:</span>
              <div className="flex space-x-2">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-3 py-1 rounded-full text-sm transition-colors ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                    }`}
                  >
                    {category === 'all' ? 'All' : category}
                  </button>
                ))}
              </div>
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center space-x-2">
              <span className="text-slate-400 text-sm">View:</span>
              <div className="flex space-x-1 bg-slate-700 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded transition-colors ${
                    viewMode === 'grid' ? 'bg-slate-600 text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded transition-colors ${
                    viewMode === 'list' ? 'bg-slate-600 text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Content */}
        {featuredItems.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Star className="w-6 h-6 text-yellow-400 mr-2" />
              Featured Content
            </h2>
            <div className={`grid gap-6 ${viewMode === 'grid' ? 'md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
              {featuredItems.map((item, index) => (
                <ContentCard key={item.id} item={item} index={index} viewMode={viewMode} />
              ))}
            </div>
          </div>
        )}

        {/* Regular Content */}
        {regularItems.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <BookOpen className="w-6 h-6 text-blue-400 mr-2" />
              All Content
            </h2>
            <div className={`grid gap-6 ${viewMode === 'grid' ? 'md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
              {regularItems.map((item, index) => (
                <ContentCard key={item.id} item={item} index={index} viewMode={viewMode} />
              ))}
            </div>
          </div>
        )}

        {/* No Results */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <Search className="w-16 h-16 text-slate-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">No content found</h3>
            <p className="text-slate-400">Try adjusting your filters or search terms</p>
          </div>
        )}
      </div>
    </div>
  );
}

function ContentCard({ item, index, viewMode }: { item: ContentItem; index: number; viewMode: 'grid' | 'list' }) {
  const IconComponent = item.icon;

  if (viewMode === 'list') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
        className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-slate-800 to-slate-900 border border-slate-700 hover:border-slate-600 transition-all duration-300"
      >
        <div className="flex items-start gap-4 p-6">
          {/* Icon */}
          <div className={`w-12 h-12 bg-gradient-to-br ${item.gradient} rounded-lg flex items-center justify-center flex-shrink-0`}>
            <IconComponent className="h-6 w-6 text-white" />
          </div>
          
          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2">
              <Badge className={`bg-gradient-to-r ${item.gradient} text-white text-xs`}>
                {item.badge}
              </Badge>
              {item.isNew && (
                <Badge className="bg-red-500/20 text-red-400 border-red-500/30 text-xs animate-pulse">
                  <Sparkles className="h-3 w-3 mr-1" />
                  New
                </Badge>
              )}
              <Badge variant="outline" className="border-slate-600 text-slate-400 text-xs">
                {item.type === 'case-study' ? 'Case Study' : item.type.charAt(0).toUpperCase() + item.type.slice(1)}
              </Badge>
            </div>
            
            <h3 className="text-lg font-semibold text-white mb-2">
              {item.title}
            </h3>
            
            <p className="text-gray-400 text-sm mb-4">
              {item.description}
            </p>
            
            {/* Metadata */}
            <div className="flex items-center gap-4 text-xs text-slate-400 mb-4">
              {item.readTime && (
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {item.readTime}
                </div>
              )}
              {item.category && (
                <div className="flex items-center gap-1">
                  <span>•</span>
                  {item.category}
                </div>
              )}
              {item.metrics?.views && (
                <div className="flex items-center gap-1">
                  <Users className="w-3 h-3" />
                  {item.metrics.views.toLocaleString()} views
                </div>
              )}
              {item.metrics?.downloads && (
                <div className="flex items-center gap-1">
                  <DollarSign className="w-3 h-3" />
                  {item.metrics.downloads.toLocaleString()} downloads
                </div>
              )}
            </div>
            
            {/* Tags */}
            {item.tags && (
              <div className="flex flex-wrap gap-1 mb-4">
                {item.tags.slice(0, 3).map(tag => (
                  <span key={tag} className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded">
                    {tag}
                  </span>
                ))}
              </div>
            )}
            
            <Link to={item.ctaLink}>
              <Button 
                size="sm" 
                className={`bg-gradient-to-r ${item.gradient} hover:opacity-90 text-white border-0`}
              >
                {item.ctaText}
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 hover:border-slate-600 transition-all duration-300"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50"></div>
      
      <div className="relative z-10 p-6">
        <div className="flex items-start gap-4 mb-4">
          {/* Icon */}
          <div className={`w-12 h-12 bg-gradient-to-br ${item.gradient} rounded-lg flex items-center justify-center flex-shrink-0`}>
            <IconComponent className="h-6 w-6 text-white" />
          </div>
          
          {/* Badges */}
          <div className="flex flex-col gap-1">
            <Badge className={`bg-gradient-to-r ${item.gradient} text-white text-xs w-fit`}>
              {item.badge}
            </Badge>
            {item.isNew && (
              <Badge className="bg-red-500/20 text-red-400 border-red-500/30 text-xs w-fit animate-pulse">
                <Sparkles className="h-3 w-3 mr-1" />
                New
              </Badge>
            )}
          </div>
        </div>
        
        <h3 className="text-lg font-semibold text-white mb-3 line-clamp-2">
          {item.title}
        </h3>
        
        <p className="text-gray-400 text-sm mb-4 line-clamp-3">
          {item.description}
        </p>
        
        {/* Metadata */}
        <div className="flex items-center gap-4 text-xs text-slate-400 mb-4">
          {item.readTime && (
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {item.readTime}
            </div>
          )}
          {item.metrics?.rating && (
            <div className="flex items-center gap-1">
              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
              {item.metrics.rating}
            </div>
          )}
        </div>
        
        <Link to={item.ctaLink}>
          <Button 
            size="sm" 
            className={`w-full bg-gradient-to-r ${item.gradient} hover:opacity-90 text-white border-0`}
          >
            {item.ctaText}
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </Link>
      </div>
    </motion.div>
  );
}