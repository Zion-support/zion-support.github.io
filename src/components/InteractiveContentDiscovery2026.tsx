import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Target, 
  TrendingUp, 
  Star, 
  ArrowRight, 
  Search, 
  Filter,
  Clock,
  Users,
  Award,
  BookOpen,
  FileText,
  PlayCircle,
  MessageSquare,
  Sparkles,
  Rocket,
  Globe,
  Shield,
  ChevronDown,
  ChevronUp,
  X,
  ExternalLink
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  type: 'blog' | 'case-study' | 'resource' | 'service';
  category: string;
  readTime: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  featured: boolean;
  tags: string[];
  author: string;
  date: string;
  link: string;
  icon: React.ReactNode;
  color: string;
  stats?: {
    views: number;
    likes: number;
    shares: number;
  };
}

const contentItems: ContentItem[] = [
  {
    id: 'neural-computing-revolution',
    title: 'AI 2026: The Neural Computing Revolution',
    description: 'Discover how neural computing breakthroughs are delivering 10,000x performance improvements and reshaping entire industries.',
    type: 'blog',
    category: 'AI Innovation',
    readTime: '12 min read',
    difficulty: 'Advanced',
    featured: true,
    tags: ['neural computing', 'AI breakthrough', 'quantum AI', '2026 technology'],
    author: 'Dr. Sarah Chen',
    date: '2025-01-17',
    link: '/blog/ai-2026-neural-computing-revolution',
    icon: <Brain className="w-6 h-6" />,
    color: 'from-purple-600 to-pink-600',
    stats: { views: 15420, likes: 892, shares: 234 }
  },
  {
    id: 'quantum-autonomous-systems',
    title: 'Quantum AI Autonomous Systems: The Future of Business',
    description: 'Explore how quantum AI autonomous systems are revolutionizing business operations with self-healing capabilities.',
    type: 'blog',
    category: 'Quantum Computing',
    readTime: '15 min read',
    difficulty: 'Advanced',
    featured: true,
    tags: ['quantum AI', 'autonomous systems', 'business automation'],
    author: 'Dr. Michael Rodriguez',
    date: '2025-01-17',
    link: '/blog/quantum-ai-autonomous-systems-2026',
    icon: <Zap className="w-6 h-6" />,
    color: 'from-cyan-600 to-blue-600',
    stats: { views: 12850, likes: 756, shares: 189 }
  },
  {
    id: 'enterprise-transformation',
    title: 'Enterprise Quantum AI Transformation: $2.3B Revenue Impact',
    description: 'How a Fortune 500 company achieved $2.3 billion in additional revenue through comprehensive quantum AI transformation.',
    type: 'case-study',
    category: 'Case Study',
    readTime: '20 min read',
    difficulty: 'Intermediate',
    featured: true,
    tags: ['quantum AI', 'enterprise transformation', 'revenue growth'],
    author: 'Zion Tech Group Research Team',
    date: '2025-01-17',
    link: '/case-studies/enterprise-quantum-ai-transformation-2026',
    icon: <Target className="w-6 h-6" />,
    color: 'from-emerald-600 to-teal-600',
    stats: { views: 18920, likes: 1123, shares: 456 }
  },
  {
    id: 'quantum-implementation-guide',
    title: 'Quantum AI Implementation Master Guide 2026',
    description: 'Complete guide to implementing quantum AI systems with step-by-step instructions and real-world case studies.',
    type: 'resource',
    category: 'Implementation Guide',
    readTime: '45 min read',
    difficulty: 'Advanced',
    featured: true,
    tags: ['quantum AI', 'implementation', 'guide', 'best practices'],
    author: 'Zion Tech Group Research Team',
    date: '2025-01-17',
    link: '/resources/quantum-ai-implementation-master-guide-2026',
    icon: <BookOpen className="w-6 h-6" />,
    color: 'from-orange-600 to-red-600',
    stats: { views: 9870, likes: 567, shares: 123 }
  },
  {
    id: 'ai-revolution-2025',
    title: 'AI Revolution 2025: Transforming Business Operations',
    description: 'Comprehensive analysis of AI breakthroughs transforming business operations with 300% ROI improvements.',
    type: 'blog',
    category: 'AI Innovation',
    readTime: '10 min read',
    difficulty: 'Intermediate',
    featured: false,
    tags: ['AI revolution', 'business transformation', 'ROI'],
    author: 'Dr. Sarah Chen',
    date: '2025-01-15',
    link: '/blog/ai-revolution-2025-transforming-business-operations',
    icon: <TrendingUp className="w-6 h-6" />,
    color: 'from-violet-600 to-purple-600',
    stats: { views: 8760, likes: 445, shares: 98 }
  },
  {
    id: 'quantum-breakthrough-2025',
    title: 'Quantum AI Fusion 2025: Breakthrough Technologies',
    description: 'Latest quantum AI fusion technologies delivering unprecedented performance improvements across industries.',
    type: 'blog',
    category: 'Quantum Computing',
    readTime: '14 min read',
    difficulty: 'Advanced',
    featured: false,
    tags: ['quantum AI fusion', 'breakthrough', 'technologies'],
    author: 'Dr. Michael Rodriguez',
    date: '2025-01-14',
    link: '/blog/quantum-ai-fusion-2025-breakthrough',
    icon: <Rocket className="w-6 h-6" />,
    color: 'from-pink-600 to-rose-600',
    stats: { views: 6540, likes: 334, shares: 76 }
  },
  {
    id: 'autonomous-business-platform',
    title: 'Autonomous Business Platform: Complete Automation',
    description: 'Revolutionary autonomous business platform delivering complete operational automation with self-healing capabilities.',
    type: 'service',
    category: 'Services',
    readTime: '8 min read',
    difficulty: 'Beginner',
    featured: false,
    tags: ['autonomous business', 'automation', 'self-healing'],
    author: 'Zion Tech Group',
    date: '2025-01-13',
    link: '/services/autonomous-business-platform',
    icon: <Globe className="w-6 h-6" />,
    color: 'from-indigo-600 to-purple-600',
    stats: { views: 4320, likes: 223, shares: 45 }
  },
  {
    id: 'ai-autonomous-research',
    title: 'AI Autonomous Research Assistant: Revolutionary Discovery',
    description: 'Breakthrough AI autonomous research assistant accelerating scientific discovery with quantum-enhanced capabilities.',
    type: 'service',
    category: 'Services',
    readTime: '6 min read',
    difficulty: 'Intermediate',
    featured: false,
    tags: ['AI research', 'autonomous', 'scientific discovery'],
    author: 'Zion Tech Group',
    date: '2025-01-12',
    link: '/services/ai-autonomous-research-assistant',
    icon: <Shield className="w-6 h-6" />,
    color: 'from-teal-600 to-cyan-600',
    stats: { views: 3890, likes: 198, shares: 34 }
  }
];

const categories = ['All', 'AI Innovation', 'Quantum Computing', 'Case Study', 'Implementation Guide', 'Services'];
const types = ['All', 'blog', 'case-study', 'resource', 'service'];
const difficulties = ['All', 'Beginner', 'Intermediate', 'Advanced'];

export default function InteractiveContentDiscovery2026() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedType, setSelectedType] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);
  const [filteredContent, setFilteredContent] = useState(contentItems);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  useEffect(() => {
    let filtered = contentItems;

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Category filter
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }

    // Type filter
    if (selectedType !== 'All') {
      filtered = filtered.filter(item => item.type === selectedType);
    }

    // Difficulty filter
    if (selectedDifficulty !== 'All') {
      filtered = filtered.filter(item => item.difficulty === selectedDifficulty);
    }

    // Sort
    switch (sortBy) {
      case 'featured':
        filtered = filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
      case 'recent':
        filtered = filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        break;
      case 'popular':
        filtered = filtered.sort((a, b) => (b.stats?.views || 0) - (a.stats?.views || 0));
        break;
      case 'trending':
        filtered = filtered.sort((a, b) => ((b.stats?.likes || 0) + (b.stats?.shares || 0)) - ((a.stats?.likes || 0) + (a.stats?.shares || 0)));
        break;
    }

    setFilteredContent(filtered);
  }, [searchTerm, selectedCategory, selectedType, selectedDifficulty, sortBy]);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog': return <FileText className="w-4 h-4" />;
      case 'case-study': return <Target className="w-4 h-4" />;
      case 'resource': return <BookOpen className="w-4 h-4" />;
      case 'service': return <Zap className="w-4 h-4" />;
      default: return <FileText className="w-4 h-4" />;
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800 border-green-200';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Advanced': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-zion-purple/20 border border-zion-purple/30 rounded-full px-4 py-2 mb-6"
          >
            <Sparkles className="h-4 w-4 text-zion-purple" />
            <span className="text-zion-purple text-sm font-medium">Interactive Content Discovery</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Discover Revolutionary
            <span className="bg-gradient-to-r from-zion-purple to-zion-cyan bg-clip-text text-transparent"> Content & Solutions</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Explore cutting-edge AI, quantum computing, and autonomous systems content. Find the perfect resources to transform your business.
          </motion.p>

          {/* Search and Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex flex-col lg:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search content, topics, or tags..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-white/10 border-white/20 text-white placeholder-gray-400 focus:bg-white/20"
                />
              </div>
              <Button
                onClick={() => setShowFilters(!showFilters)}
                variant="outline"
                className="border-white/20 text-white hover:bg-white/20"
              >
                <Filter className="w-4 h-4 mr-2" />
                Filters
                {showFilters ? <ChevronUp className="w-4 h-4 ml-2" /> : <ChevronDown className="w-4 h-4 ml-2" />}
              </Button>
            </div>

            <AnimatePresence>
              {showFilters && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6 border border-white/20"
                >
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">Category</label>
                      <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="w-full p-2 bg-white/10 border border-white/20 rounded-lg text-white"
                      >
                        {categories.map(category => (
                          <option key={category} value={category}>{category}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">Type</label>
                      <select
                        value={selectedType}
                        onChange={(e) => setSelectedType(e.target.value)}
                        className="w-full p-2 bg-white/10 border border-white/20 rounded-lg text-white"
                      >
                        {types.map(type => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">Difficulty</label>
                      <select
                        value={selectedDifficulty}
                        onChange={(e) => setSelectedDifficulty(e.target.value)}
                        className="w-full p-2 bg-white/10 border border-white/20 rounded-lg text-white"
                      >
                        {difficulties.map(difficulty => (
                          <option key={difficulty} value={difficulty}>{difficulty}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">Sort By</label>
                      <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="w-full p-2 bg-white/10 border border-white/20 rounded-lg text-white"
                      >
                        <option value="featured">Featured</option>
                        <option value="recent">Recent</option>
                        <option value="popular">Popular</option>
                        <option value="trending">Trending</option>
                      </select>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Content Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredContent.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: index * 0.1 }}
                onHoverStart={() => setHoveredItem(item.id)}
                onHoverEnd={() => setHoveredItem(null)}
              >
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 group h-full">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between mb-3">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${item.color} group-hover:scale-110 transition-transform duration-300`}>
                        {item.icon}
                      </div>
                      <div className="flex items-center gap-2">
                        {item.featured && (
                          <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-500/30">
                            <Star className="w-3 h-3 mr-1" />
                            Featured
                          </Badge>
                        )}
                        <Badge className={`${getDifficultyColor(item.difficulty)}`}>
                          {item.difficulty}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 mb-2">
                      {getTypeIcon(item.type)}
                      <span className="text-sm text-gray-300 capitalize">{item.type}</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-sm text-gray-300">{item.readTime}</span>
                    </div>
                    
                    <CardTitle className="text-white text-lg leading-tight group-hover:text-zion-cyan transition-colors">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <CardDescription className="text-gray-300 mb-4 line-clamp-3">
                      {item.description}
                    </CardDescription>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.tags.slice(0, 3).map(tag => (
                        <Badge key={tag} variant="secondary" className="bg-white/10 text-gray-300 border-white/20">
                          {tag}
                        </Badge>
                      ))}
                      {item.tags.length > 3 && (
                        <Badge variant="secondary" className="bg-white/10 text-gray-300 border-white/20">
                          +{item.tags.length - 3} more
                        </Badge>
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <span>{item.author}</span>
                      <span>{new Date(item.date).toLocaleDateString()}</span>
                    </div>
                    
                    {item.stats && (
                      <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {item.stats.views.toLocaleString()}
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4" />
                          {item.stats.likes}
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageSquare className="w-4 h-4" />
                          {item.stats.shares}
                        </div>
                      </div>
                    )}
                    
                    <Link to={item.link}>
                      <Button className="w-full bg-gradient-to-r from-zion-purple to-zion-cyan hover:from-zion-purple-dark hover:to-zion-cyan-dark text-white group">
                        Explore Content
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* No Results */}
        {filteredContent.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-gray-400 mb-4">
              <Search className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <h3 className="text-xl font-semibold mb-2">No content found</h3>
              <p>Try adjusting your search terms or filters to find what you're looking for.</p>
            </div>
            <Button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
                setSelectedType('All');
                setSelectedDifficulty('All');
              }}
              variant="outline"
              className="border-white/20 text-white hover:bg-white/20"
            >
              Clear Filters
            </Button>
          </motion.div>
        )}

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-zion-cyan mb-2">{contentItems.length}</div>
              <div className="text-gray-400 text-sm">Total Content</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-zion-purple mb-2">
                {contentItems.filter(item => item.featured).length}
              </div>
              <div className="text-gray-400 text-sm">Featured</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">
                {contentItems.reduce((sum, item) => sum + (item.stats?.views || 0), 0).toLocaleString()}
              </div>
              <div className="text-gray-400 text-sm">Total Views</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">
                {contentItems.reduce((sum, item) => sum + (item.stats?.likes || 0), 0)}
              </div>
              <div className="text-gray-400 text-sm">Total Likes</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}