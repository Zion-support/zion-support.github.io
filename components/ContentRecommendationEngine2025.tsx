import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Star, 
  Clock, 
  TrendingUp, 
  BookOpen, 
  Video, 
  FileText,
  BarChart3,
  Brain,
  Cpu,
  Zap,
  Sparkles,
  Rocket,
  Shield,
  Heart,
  Bookmark,
  Share2,
  ExternalLink,
  ChevronRight
} from 'lucide-react';

interface RecommendedContent {
  id: string;
  title: string;
  description: string;
  category: string;
  type: 'article' | 'video' | 'guide' | 'case-study' | 'whitepaper';
  readTime: string;
  rating: number;
  trending: boolean;
  featured: boolean;
  tags: string[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  lastUpdated: string;
  reason: string;
  matchScore: number;
  image: string;
}

const ContentRecommendationEngine2025: React.FC = () => {
  const [recommendations, setRecommendations] = useState<RecommendedContent[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Simulate AI-powered recommendations
  useEffect(() => {
    const generateRecommendations = () => {
      const allContent: RecommendedContent[] = [
        {
          id: '1',
          title: 'AI 2025 Neural Synthesis: Complete Implementation Guide',
          description: 'Master the art of neural synthesis with our comprehensive guide covering everything from basics to advanced implementations.',
          category: 'AI Implementation',
          type: 'guide',
          readTime: '45 min',
          rating: 4.9,
          trending: true,
          featured: true,
          tags: ['AI 2025', 'Neural Networks', 'Implementation', 'ROI'],
          difficulty: 'advanced',
          lastUpdated: '2025-01-15',
          reason: 'Based on your interest in AI implementation',
          matchScore: 95,
          image: '/api/placeholder/400/250'
        },
        {
          id: '2',
          title: 'Quantum Computing Breakthroughs: Error-Corrected Systems',
          description: 'Explore the latest quantum computing innovations that are revolutionizing cryptography and optimization.',
          category: 'Quantum Computing',
          type: 'whitepaper',
          readTime: '32 min',
          rating: 4.8,
          trending: true,
          featured: false,
          tags: ['Quantum Computing', 'Cryptography', 'Optimization'],
          difficulty: 'intermediate',
          lastUpdated: '2025-01-14',
          reason: 'Trending in your field',
          matchScore: 88,
          image: '/api/placeholder/400/250'
        },
        {
          id: '3',
          title: 'Autonomous Business Systems: 2,500% ROI Case Study',
          description: 'Real-world implementation achieving unprecedented ROI with autonomous AI systems.',
          category: 'Case Study',
          type: 'case-study',
          readTime: '28 min',
          rating: 4.9,
          trending: false,
          featured: true,
          tags: ['ROI', 'Automation', 'Business Systems'],
          difficulty: 'intermediate',
          lastUpdated: '2025-01-13',
          reason: 'High ROI potential for your industry',
          matchScore: 92,
          image: '/api/placeholder/400/250'
        },
        {
          id: '4',
          title: 'Future Technology Predictions 2025-2030',
          description: 'Expert predictions and analysis of emerging technologies shaping the next decade.',
          category: 'Future Tech',
          type: 'article',
          readTime: '38 min',
          rating: 4.7,
          trending: true,
          featured: false,
          tags: ['Predictions', 'Future Tech', 'Innovation'],
          difficulty: 'beginner',
          lastUpdated: '2025-01-12',
          reason: 'Popular among similar users',
          matchScore: 85,
          image: '/api/placeholder/400/250'
        },
        {
          id: '5',
          title: 'Neural Interface Solutions: Human-AI Interaction',
          description: 'Cutting-edge neural interface technologies for seamless human-AI communication.',
          category: 'Neural Interfaces',
          type: 'video',
          readTime: '41 min',
          rating: 4.8,
          trending: false,
          featured: false,
          tags: ['Neural Interfaces', 'Human-AI', 'Interaction'],
          difficulty: 'advanced',
          lastUpdated: '2025-01-11',
          reason: 'Matches your advanced skill level',
          matchScore: 90,
          image: '/api/placeholder/400/250'
        },
        {
          id: '6',
          title: 'Space Technology Solutions: AI-Powered Exploration',
          description: 'Revolutionary AI applications in space technology and autonomous mission planning.',
          category: 'Space Tech',
          type: 'article',
          readTime: '35 min',
          rating: 4.6,
          trending: true,
          featured: false,
          tags: ['Space Technology', 'AI Applications', 'Exploration'],
          difficulty: 'intermediate',
          lastUpdated: '2025-01-10',
          reason: 'Emerging technology in your field',
          matchScore: 87,
          image: '/api/placeholder/400/250'
        }
      ];

      // Simulate AI recommendation scoring
      const scoredContent = allContent.map(item => ({
        ...item,
        matchScore: Math.floor(Math.random() * 20) + 80 // 80-100% match
      })).sort((a, b) => b.matchScore - a.matchScore);

      setRecommendations(scoredContent);
      setLoading(false);
    };

    const timer = setTimeout(generateRecommendations, 1500);
    return () => clearTimeout(timer);
  }, []);

  const categories = [
    { id: 'all', name: 'All Recommendations', icon: <Brain className="w-5 h-5" /> },
    { id: 'AI Implementation', name: 'AI Implementation', icon: <Brain className="w-5 h-5" /> },
    { id: 'Quantum Computing', name: 'Quantum Computing', icon: <Cpu className="w-5 h-5" /> },
    { id: 'Case Study', name: 'Case Studies', icon: <BarChart3 className="w-5 h-5" /> },
    { id: 'Future Tech', name: 'Future Tech', icon: <Sparkles className="w-5 h-5" /> },
    { id: 'Neural Interfaces', name: 'Neural Interfaces', icon: <Zap className="w-5 h-5" /> },
    { id: 'Space Tech', name: 'Space Tech', icon: <Rocket className="w-5 h-5" /> }
  ];

  const filteredRecommendations = selectedCategory === 'all' 
    ? recommendations 
    : recommendations.filter(item => item.category === selectedCategory);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'video':
        return <Video className="w-4 h-4" />;
      case 'guide':
        return <BookOpen className="w-4 h-4" />;
      case 'case-study':
        return <BarChart3 className="w-4 h-4" />;
      case 'whitepaper':
        return <FileText className="w-4 h-4" />;
      default:
        return <ExternalLink className="w-4 h-4" />;
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return 'bg-green-100 text-green-800';
      case 'intermediate':
        return 'bg-yellow-100 text-yellow-800';
      case 'advanced':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getMatchScoreColor = (score: number) => {
    if (score >= 95) return 'text-green-500';
    if (score >= 90) return 'text-blue-500';
    if (score >= 85) return 'text-yellow-500';
    return 'text-gray-500';
  };

  if (loading) {
    return (
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-white mb-4"></div>
            <h2 className="text-3xl font-bold text-white mb-4">AI Recommendation Engine</h2>
            <p className="text-gray-300">Analyzing your preferences and generating personalized content recommendations...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 mb-6">
            <Brain className="w-5 h-5 text-blue-400 mr-2" />
            <span className="text-blue-400 font-semibold">AI-POWERED RECOMMENDATIONS</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Personalized Content
            <span className="block text-blue-400">Recommendations</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Our AI recommendation engine analyzes your interests, skill level, and industry to suggest 
            the most relevant and valuable content for your needs.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20'
              }`}
            >
              {category.icon}
              {category.name}
            </button>
          ))}
        </div>

        {/* Recommendations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredRecommendations.map((item, index) => (
            <div
              key={item.id}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group relative"
            >
              {/* Match Score Badge */}
              <div className="absolute top-4 right-4">
                <div className={`px-3 py-1 rounded-full text-sm font-bold ${getMatchScoreColor(item.matchScore)} bg-white/20`}>
                  {item.matchScore}% match
                </div>
              </div>

              {/* Recommendation Rank */}
              <div className="absolute top-4 left-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  #{index + 1}
                </div>
              </div>

              {/* Header */}
              <div className="flex items-start justify-between mb-4 pt-8">
                <div className="flex items-center gap-2">
                  {getTypeIcon(item.type)}
                  <span className="text-sm text-gray-300 capitalize">{item.type}</span>
                </div>
                <div className="flex gap-2">
                  {item.featured && (
                    <span className="bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded-full text-xs font-semibold">
                      Featured
                    </span>
                  )}
                  {item.trending && (
                    <span className="bg-red-500/20 text-red-400 px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" />
                      Trending
                    </span>
                  )}
                </div>
              </div>

              {/* Title and Description */}
              <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-blue-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-300 mb-4 line-clamp-3">
                {item.description}
              </p>

              {/* Recommendation Reason */}
              <div className="bg-blue-500/20 rounded-lg p-3 mb-4">
                <p className="text-blue-300 text-sm font-medium">
                  💡 {item.reason}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {item.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Meta Info */}
              <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{item.readTime}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span>{item.rating}</span>
                  </div>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(item.difficulty)}`}>
                  {item.difficulty}
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2">
                <Link
                  to={`/content/${item.id}`}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-semibold text-center transition-colors flex items-center justify-center"
                >
                  Read Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <button className="p-3 bg-white/10 hover:bg-white/20 text-gray-300 rounded-lg transition-colors">
                  <Heart className="w-4 h-4" />
                </button>
                <button className="p-3 bg-white/10 hover:bg-white/20 text-gray-300 rounded-lg transition-colors">
                  <Bookmark className="w-4 h-4" />
                </button>
                <button className="p-3 bg-white/10 hover:bg-white/20 text-gray-300 rounded-lg transition-colors">
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-12 border border-white/20">
          <h3 className="text-3xl font-bold text-white mb-4">
            Want More Personalized Recommendations?
          </h3>
          <p className="text-xl text-gray-300 mb-8">
            Our AI learns from your interactions to provide increasingly accurate and valuable content suggestions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/ai-2025-2030-ultimate-content-revolution"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              Explore All Content
              <ChevronRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white/40 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Get Custom Recommendations
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentRecommendationEngine2025;