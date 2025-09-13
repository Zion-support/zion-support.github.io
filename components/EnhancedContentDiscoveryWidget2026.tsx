import React, { useState } from 'react';
import Link from 'next/link';
import { Search, Filter, Star, Clock, TrendingUp, Brain, Atom, Zap } from 'lucide-react';

export default function EnhancedContentDiscoveryWidget2026() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const contentCategories = [
    { id: 'all', label: 'All Content', icon: '📚', count: 156 },
    { id: 'breakthroughs', label: 'Breakthroughs', icon: '🚀', count: 24 },
    { id: 'case-studies', label: 'Case Studies', icon: '🏆', count: 18 },
    { id: 'quantum', label: 'Quantum AI', icon: '⚛️', count: 12 },
    { id: 'neural', label: 'Neural Networks', icon: '🧠', count: 15 },
    { id: 'roi', label: 'High ROI', icon: '💰', count: 8 },
    { id: 'trends', label: 'Trends', icon: '📈', count: 22 },
    { id: 'tools', label: 'Tools', icon: '🛠️', count: 14 }
  ];

  const featuredContent = [
    {
      title: "AI 2025 Revolutionary Breakthroughs",
      description: "Discover the most transformative AI innovations of 2025 that are reshaping industries.",
      href: "/blog/ai-2025-revolutionary-breakthroughs",
      type: "Blog Post",
      category: "breakthroughs",
      readTime: "15 min",
      stats: "2000% ROI",
      icon: "🚀",
      gradient: "from-red-500 to-pink-500",
      featured: true
    },
    {
      title: "AI 2026 Quantum-Neural Fusion",
      description: "The ultimate breakthrough combining quantum computing with neural networks.",
      href: "/blog/ai-2026-quantum-neural-fusion-breakthrough",
      type: "Blog Post",
      category: "quantum",
      readTime: "18 min",
      stats: "15,000% ROI",
      icon: "⚛️",
      gradient: "from-purple-500 to-indigo-500",
      featured: true
    },
    {
      title: "Global Enterprise Transformation",
      description: "How a Fortune 500 company achieved 2000% ROI through AI transformation.",
      href: "/case-studies/ai-2025-global-enterprise-transformation-breakthrough",
      type: "Case Study",
      category: "case-studies",
      readTime: "12 min",
      stats: "2000% ROI",
      icon: "🏆",
      gradient: "from-green-500 to-emerald-500",
      featured: true
    },
    {
      title: "AI 2025 Comprehensive Trends",
      description: "Deep dive into the trends shaping AI in 2025 and beyond.",
      href: "/blog/ai-2025-comprehensive-trends-analysis",
      type: "Analysis",
      category: "trends",
      readTime: "20 min",
      stats: "95% Accuracy",
      icon: "🔮",
      gradient: "from-blue-500 to-purple-500",
      featured: false
    },
    {
      title: "Ultimate Implementation Toolkit",
      description: "Complete guide to implementing AI breakthroughs in your organization.",
      href: "/resources/ai-2025-ultimate-implementation-toolkit",
      type: "Resource",
      category: "tools",
      readTime: "30 min",
      stats: "500+ Deployments",
      icon: "🛠️",
      gradient: "from-purple-500 to-indigo-500",
      featured: false
    },
    {
      title: "AI 2026 Breakthrough Innovations",
      description: "Explore other revolutionary AI innovations shaping 2026.",
      href: "/blog/ai-2026-breakthrough-innovations",
      type: "Blog Post",
      category: "breakthroughs",
      readTime: "16 min",
      stats: "1000x Faster",
      icon: "⚡",
      gradient: "from-yellow-500 to-orange-500",
      featured: false
    }
  ];

  const filteredContent = featuredContent.filter(content => {
    const matchesSearch = content.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         content.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || content.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">
            <Brain className="w-4 h-4 mr-2" />
            CONTENT DISCOVERY
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Discover Revolutionary AI Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive library of AI breakthroughs, case studies, 
            and implementation guides to accelerate your business transformation.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search AI content, case studies, and resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto">
              {contentCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <span className="mr-2">{category.icon}</span>
                  <span>{category.label}</span>
                  <span className="ml-2 text-xs bg-white bg-opacity-20 px-2 py-1 rounded-full">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredContent.map((content, index) => (
            <Link key={index} href={content.href} className="group">
              <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-200">
                {/* Header with gradient */}
                <div className={`bg-gradient-to-r ${content.gradient} p-6 text-white relative overflow-hidden`}>
                  {content.featured && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-yellow-300 text-yellow-800 text-xs px-2 py-1 rounded-full font-semibold">
                        FEATURED
                      </span>
                    </div>
                  )}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-white opacity-10 rounded-full -translate-y-10 translate-x-10"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-3xl">{content.icon}</span>
                      <span className="bg-white bg-opacity-20 text-white text-xs px-3 py-1 rounded-full font-semibold">
                        {content.type}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold mb-2 group-hover:text-yellow-200 transition-colors line-clamp-2">
                      {content.title}
                    </h3>
                    <div className="flex items-center text-sm text-white text-opacity-90">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{content.readTime}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-600 mb-4 line-clamp-3 text-sm">
                    {content.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <Star className="w-4 h-4 mr-1 text-yellow-500" />
                      <span className="font-semibold text-gray-900">{content.stats}</span>
                    </div>
                    <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-800 transition-colors">
                      <span className="text-sm">Read More</span>
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">156</div>
            <div className="text-sm text-gray-600">Total Articles</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">24</div>
            <div className="text-sm text-gray-600">Breakthroughs</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">18</div>
            <div className="text-sm text-gray-600">Case Studies</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">500+</div>
            <div className="text-sm text-gray-600">ROI Examples</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-xl text-center">
          <h3 className="text-2xl font-bold mb-4">
            Can't Find What You're Looking For?
          </h3>
          <p className="text-lg text-blue-100 mb-6">
            Our AI experts can help you discover the perfect content for your specific needs 
            and provide personalized recommendations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center group"
            >
              <Brain className="w-5 h-5 mr-2" />
              <span>Get Personalized Recommendations</span>
            </Link>
            <Link 
              href="/ai-services-2025"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center group"
            >
              <Zap className="w-5 h-5 mr-2" />
              <span>Explore AI Services</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}