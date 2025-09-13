import React, { useState, useEffect } from 'react';
import { Search, Filter, TrendingUp, Clock, Star, ArrowRight } from 'lucide-react';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  trending: boolean;
  rating: number;
  tags: string[];
  link: string;
}

const InteractiveContentRecommendationWidget: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [recommendations, setRecommendations] = useState<ContentItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const categories = [
    { id: 'all', name: 'All Content' },
    { id: 'ai', name: 'AI & Machine Learning' },
    { id: 'quantum', name: 'Quantum Computing' },
    { id: 'automation', name: 'Automation' },
    { id: 'blockchain', name: 'Blockchain' },
    { id: 'analytics', name: 'Analytics' },
    { id: 'tutorials', name: 'Tutorials' }
  ];

  useEffect(() => {
    const mockContent: ContentItem[] = [
      {
        id: '1',
        title: 'Neural Networks: The Future of AI Processing',
        description: 'Explore how neural networks are revolutionizing AI with 99.97% accuracy rates and real-world applications.',
        category: 'ai',
        readTime: '8 min',
        trending: true,
        rating: 4.9,
        tags: ['AI', 'Neural Networks', 'Machine Learning'],
        link: '/neural-networks-future'
      },
      {
        id: '2',
        title: 'Quantum Computing Breakthrough 2025',
        description: 'Discover the latest quantum computing advances that promise 50,000x faster processing capabilities.',
        category: 'quantum',
        readTime: '12 min',
        trending: true,
        rating: 4.8,
        tags: ['Quantum', 'Computing', 'Breakthrough'],
        link: '/quantum-computing-2025'
      },
      {
        id: '3',
        title: 'Autonomous Business Systems Guide',
        description: 'Learn how to implement self-managing systems that operate with zero downtime and maximum efficiency.',
        category: 'automation',
        readTime: '15 min',
        trending: false,
        rating: 4.7,
        tags: ['Automation', 'Business Systems', 'AI'],
        link: '/autonomous-business-systems'
      },
      {
        id: '4',
        title: 'Blockchain Integration Best Practices',
        description: 'Comprehensive guide to integrating blockchain technology for secure and transparent operations.',
        category: 'blockchain',
        readTime: '10 min',
        trending: false,
        rating: 4.6,
        tags: ['Blockchain', 'Security', 'Integration'],
        link: '/blockchain-integration-guide'
      },
      {
        id: '5',
        title: 'Predictive Analytics Mastery',
        description: 'Master predictive analytics with advanced forecasting techniques and real-world case studies.',
        category: 'analytics',
        readTime: '20 min',
        trending: true,
        rating: 4.9,
        tags: ['Analytics', 'Predictive', 'Data Science'],
        link: '/predictive-analytics-mastery'
      },
      {
        id: '6',
        title: 'AI Implementation Tutorial Series',
        description: 'Step-by-step tutorials for implementing AI solutions in your organization with practical examples.',
        category: 'tutorials',
        readTime: '25 min',
        trending: false,
        rating: 4.8,
        tags: ['Tutorial', 'AI Implementation', 'Guide'],
        link: '/ai-implementation-tutorials'
      }
    ];

    setRecommendations(mockContent);
  }, []);

  const filteredRecommendations = recommendations.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const trendingRecommendations = recommendations.filter(item => item.trending);

  return (
    <div className="py-16 bg-gradient-to-br from-slate-800 via-purple-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Interactive Content Recommendation Engine
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover personalized content recommendations powered by AI. Find the most relevant articles, guides, and insights tailored to your interests.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8">
          <div className="max-w-2xl mx-auto">
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search content, topics, or tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white/20"
              />
            </div>
            
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category.id
                      ? 'bg-blue-500 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Trending Content */}
        {selectedCategory === 'all' && searchTerm === '' && (
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <TrendingUp className="w-6 h-6 text-orange-400 mr-2" />
              <h3 className="text-2xl font-bold text-white">Trending Now</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {trendingRecommendations.map((item) => (
                <div key={item.id} className="bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-sm rounded-xl p-6 border border-orange-500/30">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      Trending
                    </span>
                    <div className="flex items-center text-yellow-400">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-sm">{item.rating}</span>
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-gray-300 text-sm mb-4">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {item.readTime}
                    </span>
                    <a 
                      href={item.link}
                      className="text-orange-400 hover:text-orange-300 transition-colors flex items-center text-sm"
                    >
                      Read More
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRecommendations.map((item) => (
            <div key={item.id} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300 group">
              <div className="flex items-center justify-between mb-3">
                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                  item.category === 'ai' ? 'bg-blue-500/20 text-blue-300' :
                  item.category === 'quantum' ? 'bg-purple-500/20 text-purple-300' :
                  item.category === 'automation' ? 'bg-green-500/20 text-green-300' :
                  item.category === 'blockchain' ? 'bg-yellow-500/20 text-yellow-300' :
                  item.category === 'analytics' ? 'bg-pink-500/20 text-pink-300' :
                  'bg-gray-500/20 text-gray-300'
                }`}>
                  {categories.find(c => c.id === item.category)?.name || item.category}
                </span>
                {item.trending && (
                  <span className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    Hot
                  </span>
                )}
              </div>
              
              <h4 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                {item.title}
              </h4>
              <p className="text-gray-400 text-sm mb-4">{item.description}</p>
              
              <div className="flex flex-wrap gap-1 mb-4">
                {item.tags.map((tag) => (
                  <span key={tag} className="bg-white/10 text-gray-300 px-2 py-1 rounded text-xs">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="flex items-center text-yellow-400 mr-4">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="ml-1 text-sm">{item.rating}</span>
                  </div>
                  <span className="text-gray-400 text-sm flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {item.readTime}
                  </span>
                </div>
                <a 
                  href={item.link}
                  className="text-blue-400 hover:text-blue-300 transition-colors flex items-center text-sm"
                >
                  Read
                  <ArrowRight className="w-3 h-3 ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredRecommendations.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-lg mb-4">No content found matching your criteria</div>
            <button 
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              Clear filters
            </button>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-xl p-8 border border-blue-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              Want More Personalized Recommendations?
            </h3>
            <p className="text-gray-300 mb-6">
              Sign up for our newsletter to receive AI-powered content recommendations tailored to your interests.
            </p>
            <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all transform hover:scale-105">
              Get Personalized Recommendations
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveContentRecommendationWidget;