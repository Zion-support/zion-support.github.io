"use client";
import React{ useState } from 'react';
import Link from 'next/link';
SearchFilterTrendingUpStarClockArrowRightBookOpenUsersTargetZap

const UltimateContentDiscoveryWidget2025 = () => {
  const [searchTermsetSearchTerm] = useState('');
  const [selectedCategorysetSelectedCategory] = useState('all');

  const categories = [
    { id: 'all'name: 'All Content'icon: BookOpen },
    { id: 'trends'name: 'AI Trends'icon: TrendingUp },
    { id: 'case-studies'name: 'Case Studies'icon: Target },
    { id: 'guides'name: 'Implementation Guides'icon: BookOpen },
    { id: 'breakthroughs'name: 'Breakthroughs'icon: Zap }
  ];

  const featuredContent = [
    {
      title: "AI 2025-2026 Ultimate Trends Breakthrough",
      description: "Revolutionary predictions and breakthrough technologies",
      category: "trends",
      type: "Blog Post",
      href: "/blog/ai-2025-2026-ultimate-trends-breakthrough",
      featured: true,
      stats: "50,000% ROI potential"
    },
    {
      title: "Revolutionary Enterprise Transformation: 50,000% ROI",
      description: "Fortune 500 company achieves unprecedented ROI",
      category: "case-studies",
      type: "Case Study",
      href: "/case-studies/ai-2025-revolutionary-enterprise-transformation-50000-roi",
      featured: true,
      stats: "50,000% ROI achieved"
    },
    {
      title: "Ultimate Implementation Master Guide",
      description: "Complete business transformation blueprint",
      category: "guides",
      type: "Resource Guide",
      href: "/resources/ai-2025-ultimate-implementation-master-guide",
      featured: true,
      stats: "100% success rate"
    },
    {
      title: "Quantum Consciousness Integration",
      description: "Breakthrough in quantum-neural fusion",
      category: "breakthroughs",
      type: "Breakthrough",
      href: "/blog/ai-2025-quantum-consciousness-breakthrough",
      featured: false,
      stats: "10,000x faster processing"
    },
    {
      title: "Autonomous Business Operations",
      description: "Complete process automation with 99.9% accuracy",
      category: "trends",
      type: "Trend Analysis",
      href: "/blog/ai-2025-autonomous-operations",
      featured: false,
      stats: "99.9% autonomous"
    },
    {
      title: "Neural Interface Revolution",
      description: "Direct brain-computer interfaces",
      category: "breakthroughs",
      type: "Breakthrough",
      href: "/blog/ai-2025-neural-interface-revolution",
      featured: false,
      stats: "Revolutionary workflow"
    }
  ];

  const filteredContent = featuredContent.filter(content => {
    const matchesSearch = content.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         content.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || content.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ultimate Content Discovery
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Find Your Perfect AI Solution
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Discover the most relevant AI contentcase studiesand implementation guides 
            tailored to your business needs and transformation goals.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search AI contentrendscase studies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20"
              />
            </div>
            
            {/* Category Filter */}
            <div className="flex gap-2 overflow-x-auto pb-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50'
                  }`}
                >
                  <category.icon className="h-4 w-4" />
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredContent.map((contentindex) => (
            <Link
              key={index}
              href={content.href}
              className="group bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-400/50 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-2">
                  {content.featured && (
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  )}
                  <span className="text-sm text-blue-400 font-medium">{content.type}</span>
                </div>
                <div className="text-xs text-gray-400">
                  <Clock className="h-3 w-3 inline mr-1" />
                  {content.category}
                </div>
              </div>
              
              <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                {content.title}
              </h3>
              
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                {content.description}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="text-sm text-green-400 font-medium">
                  {content.stats}
                </div>
                <div className="flex items-center text-sm text-blue-400 group-hover:text-blue-300">
                  <span>Explore</span>
                  <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">
              Can't Find What You're Looking For?
            </h3>
            <p className="text-gray-300 mb-6">
              Our AI experts can help you find the perfect solution for your specific needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                <Users className="h-5 w-5 mr-2" />
                Get Expert Consultation
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center px-6 py-3 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                <BookOpen className="h-5 w-5 mr-2" />
                Browse All Content
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateContentDiscoveryWidget2025;