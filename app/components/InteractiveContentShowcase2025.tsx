import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, BookOpen, Download, FileText, TrendingUp, Users, Zap, Star, Award, Clock, Eye, ThumbsUp, ArrowRight } from 'lucide-react';

const InteractiveContentShowcase2025 = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredItem, setHoveredItem] = useState(null);

  const contentItems = [
    {
      id: 1,
      title: "Generative AI Enterprise Automation Revolution",
      description: "Discover how generative AI is transforming enterprise automation with 400-800% efficiency improvements and $500B market transformation.",
      category: "ai-automation",
      type: "blog",
      readingTime: "18 min read",
      views: "12.5K",
      likes: "98%",
      featured: true,
      url: "/blog/ai-2025-generative-ai-enterprise-automation-revolution",
      icon: "🤖",
      color: "emerald",
      stats: { roi: "800%", savings: "$500B" }
    },
    {
      id: 2,
      title: "MLOps Breakthrough: 10x Faster Deployment",
      description: "Learn how MLOps breakthroughs are enabling 10x faster model deployment with 99.9% reliability and 90% cost reduction.",
      category: "mlops",
      type: "blog",
      readingTime: "16 min read",
      views: "8.7K",
      likes: "96%",
      featured: true,
      url: "/blog/ai-2025-machine-learning-operations-mlops-breakthrough",
      icon: "⚙️",
      color: "cyan",
      stats: { speed: "10x", reliability: "99.9%" }
    },
    {
      id: 3,
      title: "Next-Generation Autonomous Systems Revolution",
      description: "Explore how autonomous systems are achieving 300-600% efficiency improvements with self-healing infrastructure.",
      category: "autonomous",
      type: "blog",
      readingTime: "20 min read",
      views: "15.2K",
      likes: "99%",
      featured: true,
      url: "/blog/ai-2025-next-generation-autonomous-systems-revolution",
      icon: "🔄",
      color: "blue",
      stats: { efficiency: "600%", uptime: "99.99%" }
    },
    {
      id: 4,
      title: "$500B Financial Services AI Transformation",
      description: "Real case study: How a leading financial firm achieved 400% ROI and $2.3B in cost savings through comprehensive AI transformation.",
      category: "case-study",
      type: "case-study",
      readingTime: "12 min read",
      views: "22.1K",
      likes: "97%",
      featured: true,
      url: "/case-studies/ai-transformation-500b-financial-services",
      icon: "🏦",
      color: "yellow",
      stats: { roi: "400%", savings: "$2.3B" }
    },
    {
      id: 5,
      title: "Complete AI 2025 Implementation Guide",
      description: "Download our comprehensive guide with proven strategies, frameworks, and step-by-step implementation plans for 400-800% ROI.",
      category: "resources",
      type: "resource",
      readingTime: "25 min read",
      views: "35.8K",
      likes: "99%",
      featured: true,
      url: "/resources/ai-2025-implementation-guide",
      icon: "📚",
      color: "purple",
      stats: { roi: "800%", downloads: "50K+" }
    },
    {
      id: 6,
      title: "AI 2025: Quantum Computing Breakthrough",
      description: "Discover how quantum computing is revolutionizing AI in 2025 with breakthrough applications and computational capabilities.",
      category: "quantum",
      type: "blog",
      readingTime: "15 min read",
      views: "18.9K",
      likes: "95%",
      featured: false,
      url: "/blog/ai-2025-quantum-computing-breakthrough",
      icon: "⚛️",
      color: "indigo",
      stats: { speed: "1000x", accuracy: "99.97%" }
    }
  ];

  const categories = [
    { id: 'all', name: 'All Content', count: contentItems.length },
    { id: 'ai-automation', name: 'AI Automation', count: contentItems.filter(item => item.category === 'ai-automation').length },
    { id: 'mlops', name: 'MLOps', count: contentItems.filter(item => item.category === 'mlops').length },
    { id: 'autonomous', name: 'Autonomous Systems', count: contentItems.filter(item => item.category === 'autonomous').length },
    { id: 'case-study', name: 'Case Studies', count: contentItems.filter(item => item.category === 'case-study').length },
    { id: 'resources', name: 'Resources', count: contentItems.filter(item => item.category === 'resources').length },
    { id: 'quantum', name: 'Quantum AI', count: contentItems.filter(item => item.category === 'quantum').length }
  ];

  const filteredItems = activeCategory === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.category === activeCategory);

  const getColorClasses = (color) => {
    const colorMap = {
      emerald: 'from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700',
      cyan: 'from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700',
      blue: 'from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700',
      yellow: 'from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700',
      purple: 'from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700',
      indigo: 'from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700'
    };
    return colorMap[color] || 'from-gray-500 to-gray-600';
  };

  const getTextColor = (color) => {
    const colorMap = {
      emerald: 'text-emerald-400',
      cyan: 'text-cyan-400',
      blue: 'text-blue-400',
      yellow: 'text-yellow-400',
      purple: 'text-purple-400',
      indigo: 'text-indigo-400'
    };
    return colorMap[color] || 'text-gray-400';
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-400 to-purple-400 text-black rounded-full px-8 py-3 mb-8 font-bold text-lg">
            <Star className="w-6 h-6 mr-3" />
            🎯 INTERACTIVE CONTENT SHOWCASE 2025
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Explore Our AI Content Library
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-5xl mx-auto leading-relaxed">
            Discover cutting-edge AI content, real-world case studies, and implementation guides. 
            Filter by category and find exactly what you need to transform your business.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white transform scale-105'
                  : 'bg-white bg-opacity-10 text-gray-300 hover:bg-opacity-20 hover:text-white'
              }`}
            >
              {category.name}
              <span className="ml-2 text-sm opacity-75">({category.count})</span>
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className={`bg-white bg-opacity-5 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-10 hover:bg-opacity-10 transition-all duration-300 transform hover:scale-105 ${
                item.featured ? 'ring-2 ring-yellow-400 ring-opacity-50' : ''
              }`}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {/* Featured Badge */}
              {item.featured && (
                <div className="inline-flex items-center bg-yellow-400 text-black rounded-full px-3 py-1 text-xs font-bold mb-4">
                  <Star className="w-3 h-3 mr-1" />
                  FEATURED
                </div>
              )}

              {/* Content Icon and Type */}
              <div className="flex items-center justify-between mb-4">
                <div className="text-4xl">{item.icon}</div>
                <div className="flex items-center space-x-2">
                  <span className="text-xs bg-white bg-opacity-20 px-2 py-1 rounded-full">
                    {item.type === 'blog' ? 'Article' : item.type === 'case-study' ? 'Case Study' : 'Resource'}
                  </span>
                  {item.type === 'resource' && (
                    <Download className="w-4 h-4 text-green-400" />
                  )}
                </div>
              </div>

              {/* Title and Description */}
              <h3 className={`text-xl font-bold mb-3 ${getTextColor(item.color)}`}>
                {item.title}
              </h3>
              <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                {item.description}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {Object.entries(item.stats).map(([key, value]) => (
                  <div key={key} className="text-center">
                    <div className={`text-lg font-bold ${getTextColor(item.color)}`}>
                      {value}
                    </div>
                    <div className="text-xs text-gray-400 capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </div>
                  </div>
                ))}
              </div>

              {/* Engagement Metrics */}
              <div className="flex items-center justify-between text-xs text-gray-400 mb-6">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {item.readingTime}
                  </div>
                  <div className="flex items-center">
                    <Eye className="w-3 h-3 mr-1" />
                    {item.views}
                  </div>
                  <div className="flex items-center">
                    <ThumbsUp className="w-3 h-3 mr-1" />
                    {item.likes}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <Link
                href={item.url}
                className={`w-full bg-gradient-to-r ${getColorClasses(item.color)} text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center`}
              >
                {item.type === 'resource' ? 'Download' : 'Read More'}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-blue-900 to-purple-900 rounded-3xl p-12 border border-white border-opacity-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Our AI experts are constantly creating new content. Contact us to request specific topics or get personalized recommendations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
            >
              Request Content
              <FileText className="w-6 h-6 ml-2 inline" />
            </Link>
            <Link
              href="/resources"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-blue-900 transition-all duration-300"
            >
              Browse All Resources
              <BookOpen className="w-6 h-6 ml-2 inline" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveContentShowcase2025;