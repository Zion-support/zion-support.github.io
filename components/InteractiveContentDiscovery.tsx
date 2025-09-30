'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Search, Filter, ArrowRight, Clock, TrendingUp, Star, Users } from 'lucide-react';

export default function InteractiveContentDiscovery() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');

  const categories = [
    { id: 'all', name: 'All Categories', count: 45 },
    { id: 'transformation', name: 'AI Transformation', count: 12 },
    { id: 'automation', name: 'Process Automation', count: 8 },
    { id: 'analytics', name: 'Data Analytics', count: 10 },
    { id: 'quantum', name: 'Quantum Computing', count: 6 },
    { id: 'sustainability', name: 'Sustainability', count: 4 },
    { id: 'security', name: 'Cybersecurity', count: 5 }
  ];

  const contentTypes = [
    { id: 'all', name: 'All Content', count: 45 },
    { id: 'articles', name: 'Articles', count: 25 },
    { id: 'case-studies', name: 'Case Studies', count: 12 },
    { id: 'guides', name: 'Guides', count: 8 }
  ];

  const contentItems = [
    {
      id: 1,
      title: "AI Business Transformation 2026: Complete Guide",
      description: "Master the proven 7-phase framework delivering $50M+ ROI and 500% productivity gains across Fortune 500 companies.",
      category: "transformation",
      type: "guides",
      readTime: "45 min",
      views: "125K",
      rating: 4.9,
      href: "/blog/ai-business-transformation-2026-complete-guide",
      featured: true,
      metrics: { value: "$50M+", label: "ROI" }
    },
    {
      id: 2,
      title: "AI Mega Transformation Success: $150M ROI Case Study",
      description: "Discover how a Fortune 500 company achieved unprecedented success with comprehensive AI transformation.",
      category: "transformation",
      type: "case-studies",
      readTime: "25 min",
      views: "89K",
      rating: 4.8,
      href: "/case-studies/ai-mega-transformation-success-2026",
      featured: true,
      metrics: { value: "$150M", label: "ROI" }
    },
    {
      id: 3,
      title: "AI Autonomous Enterprise Systems 2026",
      description: "Revolutionary autonomous AI systems delivering 95% automation efficiency and $50M+ ROI across enterprise operations.",
      category: "automation",
      type: "articles",
      readTime: "28 min",
      views: "67K",
      rating: 4.7,
      href: "/blog/ai-autonomous-enterprise-systems-2026",
      featured: false,
      metrics: { value: "95%", label: "Automation" }
    },
    {
      id: 4,
      title: "Manufacturing AI Transformation: $200M Success Story",
      description: "Fortune 500 manufacturing company achieved $200M ROI with 800% productivity gains and 99.8% system uptime.",
      category: "transformation",
      type: "case-studies",
      readTime: "20 min",
      views: "54K",
      rating: 4.9,
      href: "/case-studies/ai-manufacturing-transformation-mega-success-2026",
      featured: false,
      metrics: { value: "$200M", label: "ROI" }
    },
    {
      id: 5,
      title: "AI Quantum Computing Breakthrough 2026",
      description: "Revolutionary quantum computing applications delivering 1000x optimization speed and $12M additional returns.",
      category: "quantum",
      type: "articles",
      readTime: "32 min",
      views: "43K",
      rating: 4.6,
      href: "/blog/ai-quantum-computing-breakthrough-2026",
      featured: false,
      metrics: { value: "1000x", label: "Faster" }
    },
    {
      id: 6,
      title: "AI Sustainability Transformation: $10M ROI Case Study",
      description: "See how a Fortune 500 company achieved carbon neutrality and $10M ROI with comprehensive AI sustainability transformation.",
      category: "sustainability",
      type: "case-studies",
      readTime: "15 min",
      views: "38K",
      rating: 4.8,
      href: "/case-studies/ai-sustainability-transformation-2026",
      featured: false,
      metrics: { value: "$10M", label: "ROI" }
    }
  ];

  const filteredContent = contentItems.filter(item => {
    const categoryMatch = selectedCategory === 'all' || item.category === selectedCategory;
    const typeMatch = selectedType === 'all' || item.type === selectedType;
    return categoryMatch && typeMatch;
  });

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium mb-6">
            <Search className="w-4 h-4 mr-2" />
            Interactive Content Discovery
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Discover Your Perfect AI Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive library of AI content tailored to your interests. Use our interactive filters 
            to find articles, case studies, and guides that match your specific needs and goals.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Search Bar */}
            <div className="md:col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">Search Content</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles, case studies..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="md:col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
                >
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Content Type Filter */}
            <div className="md:col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">Content Type</label>
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
                >
                  {contentTypes.map(type => (
                    <option key={type.id} value={type.id}>
                      {type.name} ({type.count})
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Filter Tags */}
          <div className="mt-6 flex flex-wrap gap-2">
            {selectedCategory !== 'all' && (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800">
                {categories.find(c => c.id === selectedCategory)?.name}
                <button
                  onClick={() => setSelectedCategory('all')}
                  className="ml-2 text-blue-600 hover:text-blue-800"
                >
                  ×
                </button>
              </span>
            )}
            {selectedType !== 'all' && (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-purple-100 text-purple-800">
                {contentTypes.find(t => t.id === selectedType)?.name}
                <button
                  onClick={() => setSelectedType('all')}
                  className="ml-2 text-purple-600 hover:text-purple-800"
                >
                  ×
                </button>
              </span>
            )}
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {filteredContent.map((item, index) => (
            <Link key={item.id} href={item.href} className="group">
              <div className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-blue-200 hover:scale-105 ${
                item.featured ? 'ring-2 ring-blue-500 ring-opacity-50' : ''
              }`}>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      item.type === 'guides' ? 'bg-blue-100 text-blue-600' :
                      item.type === 'case-studies' ? 'bg-green-100 text-green-600' :
                      'bg-purple-100 text-purple-600'
                    }`}>
                      {item.type === 'guides' ? 'Guide' : 
                       item.type === 'case-studies' ? 'Case Study' : 'Article'}
                    </span>
                    {item.featured && (
                      <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-semibold">
                        Featured
                      </span>
                    )}
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-600 mb-1">{item.metrics.value}</div>
                    <div className="text-xs text-gray-500">{item.metrics.label}</div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {item.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {item.readTime}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {item.views}
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500" />
                      {item.rating}
                    </div>
                  </div>
                  <div className="flex items-center text-blue-600 font-semibold text-sm group-hover:text-blue-700 transition-colors">
                    Read More →
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Results Summary */}
        <div className="text-center mb-12">
          <p className="text-gray-600">
            Showing {filteredContent.length} of {contentItems.length} content items
            {selectedCategory !== 'all' && ` in ${categories.find(c => c.id === selectedCategory)?.name}`}
            {selectedType !== 'all' && ` of type ${contentTypes.find(t => t.id === selectedType)?.name}`}
          </p>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8 text-center">
          <h3 className="text-3xl font-bold mb-4">Can't Find What You're Looking For?</h3>
          <p className="text-xl mb-8 opacity-90">
            Let us help you find the perfect content for your AI transformation journey. 
            Our experts can recommend personalized content based on your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg flex items-center justify-center"
            >
              <span className="mr-2">📞</span>
              Call +1 302 464 0950
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center"
            >
              <span className="mr-2">📧</span>
              Get Personalized Recommendations
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}