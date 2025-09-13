import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Users, Star, ExternalLink } from 'lucide-react';

const AI2025UltimateBreakthroughContentShowcase: React.FC = () => {
  const featuredContent = [
    {
      id: 1,
      title: "AI 2025 Neural Architecture Revolution",
      description: "Complete guide to implementing next-generation neural networks with 10,000x performance improvements.",
      category: "Neural Networks",
      readTime: "15 min read",
      views: "12.5k",
      rating: 4.9,
      featured: true,
      image: "/api/placeholder/400/250",
      href: "/ai-2025-neural-architecture-revolution"
    },
    {
      id: 2,
      title: "Quantum-AI Fusion Implementation",
      description: "Breakthrough techniques for combining quantum computing with AI for unprecedented processing power.",
      category: "Quantum Computing",
      readTime: "20 min read",
      views: "8.7k",
      rating: 4.8,
      featured: true,
      image: "/api/placeholder/400/250",
      href: "/quantum-ai-fusion-implementation"
    },
    {
      id: 3,
      title: "Autonomous Business Systems 2025",
      description: "Complete blueprint for building self-managing business systems with 99.9% accuracy.",
      category: "Automation",
      readTime: "25 min read",
      views: "15.2k",
      rating: 4.9,
      featured: true,
      image: "/api/placeholder/400/250",
      href: "/autonomous-business-systems-2025"
    },
    {
      id: 4,
      title: "AI-Powered Content Generation Mastery",
      description: "Advanced techniques for creating high-quality content at scale with AI assistance.",
      category: "Content Creation",
      readTime: "18 min read",
      views: "9.3k",
      rating: 4.7,
      featured: false,
      image: "/api/placeholder/400/250",
      href: "/ai-content-generation-mastery"
    },
    {
      id: 5,
      title: "Machine Learning ROI Optimization",
      description: "Proven strategies for maximizing return on investment in ML implementations.",
      category: "Business Strategy",
      readTime: "12 min read",
      views: "6.8k",
      rating: 4.8,
      featured: false,
      image: "/api/placeholder/400/250",
      href: "/ml-roi-optimization"
    },
    {
      id: 6,
      title: "Future of AI: 2030 Predictions",
      description: "Exclusive insights into AI development trends and future technological breakthroughs.",
      category: "Future Tech",
      readTime: "22 min read",
      views: "11.4k",
      rating: 4.9,
      featured: false,
      image: "/api/placeholder/400/250",
      href: "/ai-2030-predictions"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ultimate AI 2025 Content Collection
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Access the most comprehensive collection of AI breakthrough content, 
            implementation guides, and revolutionary insights.
          </p>
        </div>

        {/* Featured content grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredContent.map((content) => (
            <div 
              key={content.id} 
              className={`group relative bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden hover:border-blue-400/50 transition-all duration-300 ${
                content.featured ? 'ring-2 ring-blue-400/30' : ''
              }`}
            >
              {content.featured && (
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-semibold rounded-full">
                    Featured
                  </span>
                </div>
              )}
              
              <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 relative overflow-hidden">
                <img 
                  src={content.image} 
                  alt={content.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="px-2 py-1 bg-blue-500/80 text-white text-xs font-semibold rounded">
                    {content.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {content.title}
                </h3>
                <p className="text-gray-300 mb-4 line-clamp-3">
                  {content.description}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {content.readTime}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {content.views}
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 mr-1" />
                    {content.rating}
                  </div>
                </div>

                <Link 
                  to={content.href}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold group-hover:translate-x-1 transition-all duration-300"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105">
            <Link to="/ai-2025-content-hub" className="flex items-center">
              Explore All Content
              <ExternalLink className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AI2025UltimateBreakthroughContentShowcase;