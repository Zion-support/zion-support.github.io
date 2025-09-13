import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Search, 
  Filter, 
  TrendingUp, 
  Clock, 
  Star, 
  ArrowRight, 
  Brain, 
  Zap, 
  Target, 
  Globe, 
  Rocket,
  Cpu,
  Lightbulb,
  Users,
  BookOpen,
  FileText,
  BarChart3
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const InteractiveContentDiscovery2026 = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('trending');
  const [isSearching, setIsSearching] = useState(false);

  const categories = [
    { id: 'all', label: 'All Content', icon: <Globe className="w-4 h-4" />, count: 156 },
    { id: 'ai-breakthroughs', label: 'AI Breakthroughs', icon: <Brain className="w-4 h-4" />, count: 42 },
    { id: 'case-studies', label: 'Success Stories', icon: <Target className="w-4 h-4" />, count: 28 },
    { id: 'services', label: 'AI Services', icon: <Zap className="w-4 h-4" />, count: 35 },
    { id: 'guides', label: 'Implementation Guides', icon: <BookOpen className="w-4 h-4" />, count: 31 },
    { id: 'innovations', label: 'Innovations', icon: <Lightbulb className="w-4 h-4" />, count: 20 }
  ];

  const sortOptions = [
    { id: 'trending', label: 'Trending', icon: <TrendingUp className="w-4 h-4" /> },
    { id: 'newest', label: 'Newest', icon: <Clock className="w-4 h-4" /> },
    { id: 'popular', label: 'Most Popular', icon: <Star className="w-4 h-4" /> },
    { id: 'relevance', label: 'Most Relevant', icon: <BarChart3 className="w-4 h-4" /> }
  ];

  const contentItems = [
    {
      id: 1,
      title: 'Quantum-AI Fusion: 10,000x Processing Breakthrough',
      description: 'Revolutionary quantum-neural fusion technology delivering unprecedented processing speeds and 99.9% accuracy',
      category: 'ai-breakthroughs',
      type: 'Breakthrough',
      readTime: '12 min',
      popularity: 98,
      trending: true,
      new: true,
      href: '/blog/quantum-ai-fusion-breakthrough-2026',
      icon: <Brain className="w-5 h-5" />,
      color: 'from-purple-500 to-pink-500',
      tags: ['Quantum Computing', 'Neural Networks', 'AI Innovation']
    },
    {
      id: 2,
      title: 'Enterprise AI Transformation: $2.3B Revenue Impact',
      description: 'How a Fortune 500 company achieved unprecedented ROI with our quantum-AI solutions and autonomous systems',
      category: 'case-studies',
      type: 'Case Study',
      readTime: '8 min',
      popularity: 95,
      trending: true,
      new: false,
      href: '/case-studies/enterprise-ai-transformation-2026',
      icon: <Target className="w-5 h-5" />,
      color: 'from-emerald-500 to-cyan-500',
      tags: ['Enterprise AI', 'ROI', 'Business Transformation']
    },
    {
      id: 3,
      title: 'Autonomous Business Systems Implementation Guide',
      description: 'Complete guide to implementing self-healing AI systems for complete business process automation',
      category: 'guides',
      type: 'Guide',
      readTime: '15 min',
      popularity: 92,
      trending: false,
      new: true,
      href: '/guides/autonomous-business-systems-2026',
      icon: <Zap className="w-5 h-5" />,
      color: 'from-orange-500 to-red-500',
      tags: ['Automation', 'Business Systems', 'AI Implementation']
    },
    {
      id: 4,
      title: 'Neural Interface Revolution: Brain-Computer Integration',
      description: 'Breakthrough direct brain-computer interface technology enabling seamless human-AI collaboration',
      category: 'innovations',
      type: 'Innovation',
      readTime: '10 min',
      popularity: 89,
      trending: true,
      new: true,
      href: '/blog/neural-interface-revolution-2026',
      icon: <Cpu className="w-5 h-5" />,
      color: 'from-blue-500 to-indigo-500',
      tags: ['Neural Interfaces', 'Brain-Computer', 'Human-AI']
    },
    {
      id: 5,
      title: 'Global AI Implementation Mastery Program',
      description: 'Comprehensive program covering AI implementation across 50+ countries and multiple industries',
      category: 'guides',
      type: 'Program',
      readTime: '20 min',
      popularity: 87,
      trending: false,
      new: false,
      href: '/programs/global-ai-implementation-mastery',
      icon: <Globe className="w-5 h-5" />,
      color: 'from-green-500 to-emerald-500',
      tags: ['Global Implementation', 'AI Mastery', 'Multi-Country']
    },
    {
      id: 6,
      title: 'Space Technology AI Solutions',
      description: 'Advanced AI-powered systems for space exploration, satellite management, and interplanetary missions',
      category: 'services',
      type: 'Service',
      readTime: '7 min',
      popularity: 85,
      trending: true,
      new: false,
      href: '/services/space-technology-ai-solutions',
      icon: <Rocket className="w-5 h-5" />,
      color: 'from-violet-500 to-purple-500',
      tags: ['Space Technology', 'Satellite AI', 'Space Exploration']
    }
  ];

  const [filteredContent, setFilteredContent] = useState(contentItems);

  useEffect(() => {
    setIsSearching(true);
    const timer = setTimeout(() => {
      let filtered = contentItems;

      // Filter by category
      if (selectedCategory !== 'all') {
        filtered = filtered.filter(item => item.category === selectedCategory);
      }

      // Filter by search query
      if (searchQuery) {
        filtered = filtered.filter(item => 
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
        );
      }

      // Sort content
      switch (sortBy) {
        case 'trending':
          filtered = filtered.sort((a, b) => b.popularity - a.popularity);
          break;
        case 'newest':
          filtered = filtered.sort((a, b) => b.new - a.new);
          break;
        case 'popular':
          filtered = filtered.sort((a, b) => b.popularity - a.popularity);
          break;
        case 'relevance':
          filtered = filtered.sort((a, b) => {
            const aRelevance = a.trending ? 10 : 0 + a.new ? 5 : 0 + a.popularity;
            const bRelevance = b.trending ? 10 : 0 + b.new ? 5 : 0 + b.popularity;
            return bRelevance - aRelevance;
          });
          break;
      }

      setFilteredContent(filtered);
      setIsSearching(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery, selectedCategory, sortBy]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <Badge className="mb-6 bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm px-4 py-2">
              🔍 Interactive Discovery
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-cyan-300 to-purple-300 bg-clip-text text-transparent mb-6">
              Discover Revolutionary Content
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive library of AI breakthroughs, case studies, and implementation guides 
              with intelligent search and filtering capabilities.
            </p>
          </motion.div>

          {/* Search and Filter Section */}
          <motion.div variants={itemVariants} className="mb-12">
            <Card className="bg-slate-800/60 backdrop-blur-sm border-slate-700">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Search Input */}
                  <div className="flex-1">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <Input
                        type="text"
                        placeholder="Search breakthroughs, case studies, guides..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10 pr-4 py-3 bg-slate-700/50 border-slate-600 text-white placeholder-gray-400 focus:border-cyan-500/50 rounded-xl"
                      />
                    </div>
                  </div>

                  {/* Sort Dropdown */}
                  <div className="lg:w-48">
                    <div className="relative">
                      <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 text-white rounded-xl focus:border-cyan-500/50 focus:outline-none appearance-none"
                      >
                        {sortOptions.map((option) => (
                          <option key={option.id} value={option.id} className="bg-slate-800">
                            {option.label}
                          </option>
                        ))}
                      </select>
                      <Filter className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Category Filters */}
                <div className="mt-6">
                  <div className="flex flex-wrap gap-3">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                          selectedCategory === category.id
                            ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg'
                            : 'bg-slate-700/50 text-gray-300 hover:bg-slate-700 border border-slate-600'
                        }`}
                      >
                        {category.icon}
                        {category.label}
                        <Badge variant="secondary" className="text-xs bg-white/20 text-white">
                          {category.count}
                        </Badge>
                      </button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Results Section */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-white">
                {isSearching ? 'Searching...' : `${filteredContent.length} Content Items Found`}
              </h3>
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>Live Results</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  <span>AI-Powered Search</span>
                </div>
              </div>
            </div>

            {/* Content Grid */}
            <AnimatePresence mode="wait">
              {isSearching ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                  {[...Array(6)].map((_, index) => (
                    <Card key={index} className="bg-slate-800/40 border-slate-700 animate-pulse">
                      <CardHeader>
                        <div className="h-4 bg-slate-700 rounded w-3/4 mb-2"></div>
                        <div className="h-3 bg-slate-700 rounded w-1/2"></div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <div className="h-3 bg-slate-700 rounded"></div>
                          <div className="h-3 bg-slate-700 rounded w-5/6"></div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  key={`${searchQuery}-${selectedCategory}-${sortBy}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                  {filteredContent.map((content) => (
                    <motion.div
                      key={content.id}
                      whileHover={{ y: -8 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Card 
                        className="bg-slate-800/60 backdrop-blur-sm border-slate-700 hover:border-cyan-500/50 transition-all duration-500 group cursor-pointer h-full relative overflow-hidden"
                        onClick={() => window.location.href = content.href}
                      >
                        <CardHeader>
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex items-center gap-3">
                              <div className={`p-3 bg-gradient-to-r ${content.color} rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                                {content.icon}
                              </div>
                              <div className="flex flex-col gap-1">
                                <Badge variant="outline" className="text-cyan-400 border-cyan-400/50 bg-cyan-500/10 w-fit">
                                  {content.type}
                                </Badge>
                                {content.trending && (
                                  <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs px-2 py-1 w-fit">
                                    🔥 TRENDING
                                  </Badge>
                                )}
                              </div>
                            </div>
                            {content.new && (
                              <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs px-2 py-1">
                                NEW
                              </Badge>
                            )}
                          </div>
                          <CardTitle className="text-xl text-white group-hover:text-cyan-300 transition-colors line-clamp-2 leading-tight">
                            {content.title}
                          </CardTitle>
                        </CardHeader>
                        
                        <CardContent>
                          <CardDescription className="text-gray-300 mb-4 line-clamp-3 leading-relaxed">
                            {content.description}
                          </CardDescription>
                          
                          <div className="flex flex-wrap gap-2 mb-4">
                            {content.tags.slice(0, 2).map((tag, index) => (
                              <Badge key={index} variant="secondary" className="text-xs bg-slate-700/50 text-gray-300">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <span className="text-sm text-gray-400">{content.readTime}</span>
                              <div className="flex items-center gap-1">
                                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                <span className="text-sm text-gray-400">{content.popularity}%</span>
                              </div>
                            </div>
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10 group-hover:translate-x-1 transition-all duration-300"
                            >
                              Explore
                              <ArrowRight className="w-4 h-4 ml-1" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {filteredContent.length === 0 && !isSearching && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">No content found</h3>
                <p className="text-gray-400 mb-6">Try adjusting your search terms or filters</p>
                <Button 
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                    setSortBy('trending');
                  }}
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white"
                >
                  Reset Filters
                </Button>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default InteractiveContentDiscovery2026;