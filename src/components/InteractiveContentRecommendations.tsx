import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Clock, Users, Star, Sparkles } from 'lucide-react';

interface ContentItem {
  id: string;
  title: string;
  type: 'blog' | 'case-study';
  category: string;
  readTime?: string;
  featured?: boolean;
  trending?: boolean;
  newBadge?: boolean;
  metrics?: {
    value: string;
    label: string;
  }[];
  excerpt: string;
}

const InteractiveContentRecommendations: React.FC = () => {
  const [recommendations, setRecommendations] = useState<ContentItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  useEffect(() => {
    // Simulate loading recommendations
    const loadRecommendations = async () => {
      setIsLoading(true);
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const mockRecommendations: ContentItem[] = [
        {
          id: 'ai-agent-orchestration-2026',
          title: 'AI Agent Orchestration 2026: Multi-Agent System Architecture',
          type: 'blog',
          category: 'AI Orchestration',
          readTime: '22 min read',
          featured: true,
          trending: true,
          newBadge: true,
          metrics: [
            { value: '95%', label: 'Automation' },
            { value: '$5M+', label: 'ROI' }
          ],
          excerpt: 'Master multi-agent systems with 95% automation efficiency and $5M+ ROI through advanced orchestration patterns.'
        },
        {
          id: 'ai-sustainability-transformation-2026',
          title: 'AI Sustainability Transformation 2026: $10M ROI Case Study',
          type: 'case-study',
          category: 'Sustainability',
          readTime: '15 min read',
          featured: true,
          newBadge: true,
          metrics: [
            { value: '$10M', label: 'ROI' },
            { value: '100%', label: 'Carbon Neutral' }
          ],
          excerpt: 'See how a Fortune 500 company achieved carbon neutrality and $10M ROI with comprehensive AI sustainability transformation.'
        },
        {
          id: 'ai-quantum-optimization-2026',
          title: 'AI Quantum Optimization 2026: 1000x Speed Improvement Case Study',
          type: 'case-study',
          category: 'Quantum Computing',
          readTime: '18 min read',
          featured: true,
          newBadge: true,
          metrics: [
            { value: '1000x', label: 'Speed' },
            { value: '$12M', label: 'Returns' }
          ],
          excerpt: 'See how a financial services company achieved 1000x optimization speed and $12M additional returns with quantum-enhanced AI.'
        },
        {
          id: 'ai-sustainability-green-tech-2026',
          title: 'AI Sustainability & Green Tech 2026: Carbon-Neutral Operations',
          type: 'blog',
          category: 'Sustainability',
          readTime: '18 min read',
          featured: true,
          newBadge: true,
          metrics: [
            { value: '80%', label: 'Energy Reduction' },
            { value: '$2M+', label: 'Savings' }
          ],
          excerpt: 'Achieve carbon-neutral AI operations with 80% energy reduction and $2M+ savings through sustainable technology.'
        },
        {
          id: 'ai-quantum-computing-2026',
          title: 'AI Quantum Computing 2026: Next-Generation Intelligence',
          type: 'blog',
          category: 'Quantum Computing',
          readTime: '25 min read',
          featured: true,
          newBadge: true,
          metrics: [
            { value: '1000x', label: 'Faster' },
            { value: '95%', label: 'Accuracy' }
          ],
          excerpt: 'Harness quantum computing for AI breakthroughs with 1000x faster optimization and revolutionary capabilities.'
        }
      ];
      
      setRecommendations(mockRecommendations);
      setIsLoading(false);
    };

    loadRecommendations();
  }, []);

  const categories = [
    { id: 'all', label: 'All Content', count: recommendations.length },
    { id: 'AI Orchestration', label: 'AI Orchestration', count: recommendations.filter(r => r.category === 'AI Orchestration').length },
    { id: 'Sustainability', label: 'Sustainability', count: recommendations.filter(r => r.category === 'Sustainability').length },
    { id: 'Quantum Computing', label: 'Quantum Computing', count: recommendations.filter(r => r.category === 'Quantum Computing').length },
  ];

  const filteredRecommendations = selectedCategory === 'all' 
    ? recommendations 
    : recommendations.filter(rec => rec.category === selectedCategory);

  if (isLoading) {
    return (
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Personalized Content Recommendations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              AI-powered content suggestions based on your interests and reading history
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm p-6 animate-pulse">
                <div className="h-4 bg-gray-200 rounded mb-4"></div>
                <div className="h-3 bg-gray-200 rounded mb-2"></div>
                <div className="h-3 bg-gray-200 rounded mb-4"></div>
                <div className="flex gap-2">
                  <div className="h-6 bg-gray-200 rounded w-16"></div>
                  <div className="h-6 bg-gray-200 rounded w-16"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            AI-Powered Recommendations
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Personalized Content Recommendations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover content tailored to your interests and industry. Our AI analyzes your preferences to suggest the most relevant articles and case studies.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              {category.label}
              <span className="ml-2 text-sm opacity-75">({category.count})</span>
            </button>
          ))}
        </div>

        {/* Recommendations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredRecommendations.map((item) => (
            <Link
              key={item.id}
              to={`/${item.type === 'blog' ? 'blog' : 'case-studies'}/${item.id}`}
              className="group"
            >
              <div className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-blue-200 hover:scale-105">
                {/* Badges */}
                <div className="flex items-center gap-2 mb-4">
                  {item.newBadge && (
                    <span className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      NEW 2026
                    </span>
                  )}
                  {item.featured && (
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      FEATURED
                    </span>
                  )}
                  {item.trending && (
                    <span className="bg-gradient-to-r from-red-400 to-pink-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      TRENDING
                    </span>
                  )}
                </div>

                {/* Content Type & Category */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-blue-600 font-medium">
                    {item.type === 'blog' ? '📝 Article' : '📊 Case Study'}
                  </span>
                  <span className="text-sm text-gray-500">{item.category}</span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {item.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {item.excerpt}
                </p>

                {/* Metrics */}
                {item.metrics && (
                  <div className="flex gap-4 mb-4">
                    {item.metrics.map((metric, index) => (
                      <div key={index} className="text-center">
                        <div className="text-lg font-bold text-blue-600">{metric.value}</div>
                        <div className="text-xs text-gray-500">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Read Time & Footer */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    {item.readTime}
                  </div>
                  <div className="flex items-center text-blue-600 font-semibold text-sm group-hover:text-blue-700 transition-colors">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            to="/blog"
            className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <Sparkles className="w-5 h-5 mr-2" />
            Explore All Content
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default InteractiveContentRecommendations;