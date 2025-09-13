import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Brain, 
  TrendingUp, 
  Star, 
  Clock, 
  Users, 
  Award, 
  Rocket, 
  ArrowRight,
  RefreshCw,
  ThumbsUp,
  Eye,
  BookOpen,
  FileText,
  Video,
  Tool,
  Globe,
  Zap
} from 'lucide-react';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  category: string;
  type: 'article' | 'guide' | 'case-study' | 'tool' | 'video' | 'whitepaper' | 'webinar';
  readTime: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  tags: string[];
  featured: boolean;
  trending: boolean;
  new: boolean;
  views: number;
  likes: number;
  publishedAt: string;
  author: string;
  url: string;
  estimatedROI?: string;
  rating?: number;
  completionRate?: number;
  relatedTopics?: string[];
  userInterests?: string[];
  personalizedScore?: number;
}

const contentData: ContentItem[] = [
  {
    id: 'ai-2025-autonomous-operations',
    title: 'AI 2025: Complete Autonomous Operations Implementation Guide',
    description: 'Master the revolutionary AI 2025 autonomous operations framework delivering 2,500-5,000% ROI with 99.9% accuracy and 10,000x faster processing speeds.',
    category: 'AI Implementation',
    type: 'guide',
    readTime: '45 min',
    difficulty: 'expert',
    tags: ['AI 2025', 'Autonomous Operations', 'ROI 2500%', '99.9% Accuracy', 'Implementation'],
    featured: true,
    trending: true,
    new: true,
    views: 15420,
    likes: 892,
    publishedAt: '2025-01-15',
    author: 'Dr. Sarah Chen',
    url: '/guides/ai-2025-autonomous-operations',
    estimatedROI: '2,500-5,000%',
    rating: 4.9,
    completionRate: 87,
    relatedTopics: ['Machine Learning', 'Process Automation', 'ROI Optimization'],
    userInterests: ['AI Implementation', 'ROI Optimization', 'Enterprise Solutions'],
    personalizedScore: 95
  },
  {
    id: 'quantum-neural-fusion-2026',
    title: 'Quantum Neural Fusion: The 2026 Breakthrough Revolution',
    description: 'Explore the revolutionary quantum-neural fusion technology that will transform AI capabilities by 2026, enabling unprecedented computational power and intelligence.',
    category: 'Quantum Computing',
    type: 'whitepaper',
    readTime: '60 min',
    difficulty: 'expert',
    tags: ['Quantum Computing', 'Neural Networks', '2026 Breakthrough', 'Fusion Technology', 'Revolutionary'],
    featured: true,
    trending: true,
    new: true,
    views: 12850,
    likes: 756,
    publishedAt: '2025-01-14',
    author: 'Prof. Michael Rodriguez',
    url: '/whitepapers/quantum-neural-fusion-2026',
    estimatedROI: '10,000x Performance',
    rating: 4.8,
    completionRate: 92,
    relatedTopics: ['Quantum Physics', 'Neural Networks', 'Computational Power'],
    userInterests: ['Quantum Computing', 'Future Technology', 'Research'],
    personalizedScore: 88
  },
  {
    id: 'ai-2027-neural-synthesis',
    title: 'AI 2027: Neural Synthesis and Consciousness Emergence',
    description: 'Discover how AI systems will achieve consciousness-like capabilities through neural synthesis by 2027, revolutionizing human-AI collaboration.',
    category: 'Future AI',
    type: 'article',
    readTime: '30 min',
    difficulty: 'advanced',
    tags: ['AI 2027', 'Neural Synthesis', 'Consciousness', 'Human-AI Collaboration', 'Future Tech'],
    featured: true,
    trending: false,
    new: true,
    views: 9870,
    likes: 634,
    publishedAt: '2025-01-13',
    author: 'Dr. Elena Volkov',
    url: '/articles/ai-2027-neural-synthesis',
    estimatedROI: 'Revolutionary Capabilities',
    rating: 4.7,
    completionRate: 78,
    relatedTopics: ['Consciousness', 'Neural Networks', 'Human-AI Interaction'],
    userInterests: ['Future AI', 'Consciousness', 'Human-AI Collaboration'],
    personalizedScore: 82
  },
  {
    id: 'enterprise-ai-mastery-2026',
    title: 'Enterprise AI Mastery: Complete Implementation Framework 2026',
    description: 'Comprehensive guide to implementing AI mastery across enterprise operations, delivering measurable ROI and competitive advantages.',
    category: 'Enterprise AI',
    type: 'guide',
    readTime: '40 min',
    difficulty: 'advanced',
    tags: ['Enterprise AI', 'Implementation', 'ROI', 'Competitive Advantage', 'Framework'],
    featured: false,
    trending: true,
    new: false,
    views: 15600,
    likes: 723,
    publishedAt: '2025-01-10',
    author: 'Maria Santos',
    url: '/guides/enterprise-ai-mastery-2026',
    estimatedROI: '400-800%',
    rating: 4.8,
    completionRate: 89,
    relatedTopics: ['Enterprise Implementation', 'ROI Optimization', 'Competitive Strategy'],
    userInterests: ['Enterprise AI', 'Implementation', 'ROI Optimization'],
    personalizedScore: 91
  },
  {
    id: 'ai-tools-showcase-2025',
    title: 'Revolutionary AI Tools Showcase 2025',
    description: 'Discover the most powerful AI tools and platforms that will revolutionize your workflow in 2025, from automation to intelligence augmentation.',
    category: 'AI Tools',
    type: 'tool',
    readTime: '20 min',
    difficulty: 'intermediate',
    tags: ['AI Tools', 'Productivity', 'Automation', 'Intelligence Augmentation', '2025'],
    featured: false,
    trending: true,
    new: true,
    views: 13200,
    likes: 567,
    publishedAt: '2025-01-09',
    author: 'Tech Team',
    url: '/tools/ai-tools-showcase-2025',
    estimatedROI: '200-400%',
    rating: 4.5,
    completionRate: 82,
    relatedTopics: ['Productivity Tools', 'Workflow Automation', 'AI Platforms'],
    userInterests: ['AI Tools', 'Productivity', 'Automation'],
    personalizedScore: 76
  },
  {
    id: 'ai-webinar-series-2025',
    title: 'AI Webinar Series: Future of Technology 2025-2030',
    description: 'Join our exclusive webinar series featuring industry experts discussing the future of AI, quantum computing, and emerging technologies.',
    category: 'Education',
    type: 'webinar',
    readTime: '60 min',
    difficulty: 'intermediate',
    tags: ['Webinar', 'Education', 'Future Tech', 'Expert Insights', 'Live Learning'],
    featured: true,
    trending: false,
    new: true,
    views: 8900,
    likes: 423,
    publishedAt: '2025-01-08',
    author: 'Expert Panel',
    url: '/webinars/ai-webinar-series-2025',
    estimatedROI: 'Knowledge Enhancement',
    rating: 4.7,
    completionRate: 76,
    relatedTopics: ['Professional Development', 'Expert Insights', 'Live Learning'],
    userInterests: ['Education', 'Professional Development', 'Expert Insights'],
    personalizedScore: 79
  }
];

const categoryIcons = {
  'AI Implementation': Brain,
  'Quantum Computing': Award,
  'Future AI': Zap,
  'Enterprise AI': Globe,
  'AI Tools': Tool,
  'Education': Users
};

const typeIcons = {
  'article': BookOpen,
  'guide': FileText,
  'case-study': Globe,
  'tool': Tool,
  'video': Video,
  'whitepaper': FileText,
  'webinar': Video
};

const typeColors = {
  'article': 'bg-blue-100 text-blue-800',
  'guide': 'bg-green-100 text-green-800',
  'case-study': 'bg-purple-100 text-purple-800',
  'tool': 'bg-orange-100 text-orange-800',
  'video': 'bg-red-100 text-red-800',
  'whitepaper': 'bg-indigo-100 text-indigo-800',
  'webinar': 'bg-pink-100 text-pink-800'
};

const difficultyColors = {
  'beginner': 'bg-green-100 text-green-800',
  'intermediate': 'bg-yellow-100 text-yellow-800',
  'advanced': 'bg-orange-100 text-orange-800',
  'expert': 'bg-red-100 text-red-800'
};

const ContentRecommendationWidget2025: React.FC = () => {
  const [recommendations, setRecommendations] = useState<ContentItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');

  // Simulate personalized recommendations based on user behavior
  useEffect(() => {
    setIsLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      let filteredContent = [...contentData];
      
      // Filter by category
      if (selectedCategory !== 'all') {
        filteredContent = filteredContent.filter(item => item.category === selectedCategory);
      }
      
      // Filter by type
      if (selectedType !== 'all') {
        filteredContent = filteredContent.filter(item => item.type === selectedType);
      }
      
      // Sort by personalized score and other factors
      const sortedContent = filteredContent.sort((a, b) => {
        // Primary sort by personalized score
        const scoreDiff = (b.personalizedScore || 0) - (a.personalizedScore || 0);
        if (scoreDiff !== 0) return scoreDiff;
        
        // Secondary sort by trending status
        const trendingDiff = (b.trending ? 1 : 0) - (a.trending ? 1 : 0);
        if (trendingDiff !== 0) return trendingDiff;
        
        // Tertiary sort by views
        return b.views - a.views;
      });
      
      setRecommendations(sortedContent.slice(0, 6));
      setIsLoading(false);
    }, 1000);
  }, [selectedCategory, selectedType]);

  const categories = ['all', ...Array.from(new Set(contentData.map(item => item.category)))];
  const types = ['all', ...Array.from(new Set(contentData.map(item => item.type)))];

  const refreshRecommendations = () => {
    setIsLoading(true);
    setTimeout(() => {
      const shuffled = [...contentData].sort(() => Math.random() - 0.5);
      setRecommendations(shuffled.slice(0, 6));
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="py-16 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Personalized Content Recommendations
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Discover content tailored to your interests and learning goals, powered by our advanced AI recommendation engine.
          </motion.p>
        </div>

        {/* Filters */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
              <div className="flex flex-col sm:flex-row gap-4 flex-1">
                {/* Category Filter */}
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {categories.map(category => (
                      <option key={category} value={category} className="bg-gray-800">
                        {category === 'all' ? 'All Categories' : category}
                      </option>
                    ))}
                  </select>
                </div>
                
                {/* Type Filter */}
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-300 mb-2">Type</label>
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {types.map(type => (
                      <option key={type} value={type} className="bg-gray-800">
                        {type === 'all' ? 'All Types' : type.charAt(0).toUpperCase() + type.slice(1)}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              
              {/* Refresh Button */}
              <button
                onClick={refreshRecommendations}
                disabled={isLoading}
                className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-600/50 text-white rounded-lg transition-colors"
              >
                <RefreshCw className={`w-4 h-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
                Refresh
              </button>
            </div>
          </div>
        </motion.div>

        {/* Recommendations Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 animate-pulse">
                  <div className="h-4 bg-white/20 rounded mb-4"></div>
                  <div className="h-6 bg-white/20 rounded mb-2"></div>
                  <div className="h-4 bg-white/20 rounded mb-4"></div>
                  <div className="h-4 bg-white/20 rounded mb-4"></div>
                  <div className="h-8 bg-white/20 rounded"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recommendations.map((item, index) => (
                <motion.div
                  key={item.id}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      {React.createElement(categoryIcons[item.category as keyof typeof categoryIcons] || Brain, {
                        className: "w-5 h-5 text-blue-400"
                      })}
                      <span className="text-sm text-gray-300">{item.category}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      {item.personalizedScore && (
                        <div className="flex items-center text-xs text-green-400">
                          <Star className="w-3 h-3 mr-1" />
                          {item.personalizedScore}% match
                        </div>
                      )}
                      {item.featured && <span className="px-2 py-1 bg-yellow-400/20 text-yellow-400 text-xs rounded">Featured</span>}
                      {item.trending && <span className="px-2 py-1 bg-orange-400/20 text-orange-400 text-xs rounded">Trending</span>}
                      {item.new && <span className="px-2 py-1 bg-green-400/20 text-green-400 text-xs rounded">New</span>}
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors line-clamp-2">
                    {item.title}
                  </h4>
                  
                  {/* Description */}
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                    {item.description}
                  </p>
                  
                  {/* Meta Information */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className={`px-2 py-1 text-xs rounded ${typeColors[item.type]}`}>
                      {React.createElement(typeIcons[item.type] || BookOpen, {
                        className: "w-3 h-3 inline mr-1"
                      })}
                      {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                    </span>
                    <span className={`px-2 py-1 text-xs rounded ${difficultyColors[item.difficulty]}`}>
                      {item.difficulty.charAt(0).toUpperCase() + item.difficulty.slice(1)}
                    </span>
                    <span className="px-2 py-1 text-xs bg-gray-600 text-gray-300 rounded">
                      <Clock className="w-3 h-3 inline mr-1" />
                      {item.readTime}
                    </span>
                    {item.rating && (
                      <span className="px-2 py-1 text-xs bg-yellow-500/20 text-yellow-400 rounded">
                        <Star className="w-3 h-3 inline mr-1" />
                        {item.rating}
                      </span>
                    )}
                  </div>
                  
                  {/* Stats */}
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center">
                      <Eye className="w-4 h-4 mr-1" />
                      {item.views.toLocaleString()}
                    </div>
                    <div className="flex items-center">
                      <ThumbsUp className="w-4 h-4 mr-1" />
                      {item.likes}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {item.author}
                    </div>
                  </div>
                  
                  {/* ROI Badge */}
                  {item.estimatedROI && (
                    <div className="mb-4 p-3 bg-green-500/20 rounded-lg">
                      <div className="flex items-center">
                        <TrendingUp className="w-4 h-4 text-green-400 mr-2" />
                        <span className="text-green-400 font-semibold text-sm">
                          ROI: {item.estimatedROI}
                        </span>
                      </div>
                    </div>
                  )}
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {item.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded">
                        {tag}
                      </span>
                    ))}
                    {item.tags.length > 3 && (
                      <span className="px-2 py-1 bg-gray-600 text-gray-400 text-xs rounded">
                        +{item.tags.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  {/* Action Button */}
                  <Link
                    to={item.url}
                    className="inline-flex items-center justify-center w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors group-hover:bg-blue-500"
                  >
                    {item.type === 'webinar' ? 'Join Webinar' : 
                     item.type === 'guide' ? 'Read Guide' : 
                     item.type === 'article' ? 'Read Article' :
                     item.type === 'case-study' ? 'View Case Study' :
                     item.type === 'tool' ? 'Try Tool' :
                     item.type === 'video' ? 'Watch Video' :
                     item.type === 'whitepaper' ? 'Read Whitepaper' :
                     'View Content'}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Want More Personalized Recommendations?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Sign up for our newsletter to get personalized content recommendations delivered to your inbox weekly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/newsletter"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Subscribe to Newsletter
              </Link>
              <Link
                to="/profile"
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Customize Preferences
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContentRecommendationWidget2025;