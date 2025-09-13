import React, { useState } from 'react';
import Link from 'next/link';
import { Search, Filter, ArrowRight, Star, TrendingUp, Zap, Users, Award, Clock, Eye } from 'lucide-react';

export default function InteractiveContentDiscoveryWidget2025() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const contentItems = [
    {
      id: 1,
      title: 'AI 2025 Breakthrough Showcase',
      description: 'Revolutionary AI technologies delivering 2,500-5,000% ROI with quantum-enhanced intelligence.',
      category: 'ai',
      type: 'showcase',
      roi: '2,500-5,000%',
      rating: 5.0,
      views: '12.5K',
      time: '5 min read',
      href: '/ai-2025-breakthrough-showcase',
      icon: Zap,
      color: 'from-blue-500 to-purple-500'
    },
    {
      id: 2,
      title: 'Quantum Computing Solutions 2025',
      description: 'Error-corrected quantum computers and quantum supremacy delivering unprecedented power.',
      category: 'quantum',
      type: 'solution',
      roi: '2,900-5,200%',
      rating: 5.0,
      views: '8.7K',
      time: '7 min read',
      href: '/quantum-computing-solutions-2025',
      icon: TrendingUp,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      id: 3,
      title: 'Advanced Automation Solutions 2025',
      description: 'Intelligent process automation reducing costs by 95% while increasing efficiency by 10,000x.',
      category: 'automation',
      type: 'solution',
      roi: '2,500-4,000%',
      rating: 5.0,
      views: '15.2K',
      time: '6 min read',
      href: '/advanced-automation-solutions-2025',
      icon: Users,
      color: 'from-green-500 to-blue-500'
    },
    {
      id: 4,
      title: 'AI Services 2025',
      description: 'Comprehensive AI services including machine learning, deep learning, and neural networks.',
      category: 'ai',
      type: 'service',
      roi: '2,200-3,800%',
      rating: 4.9,
      views: '22.1K',
      time: '4 min read',
      href: '/ai-services-2025',
      icon: Award,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Content', count: contentItems.length },
    { id: 'ai', name: 'AI Solutions', count: contentItems.filter(item => item.category === 'ai').length },
    { id: 'quantum', name: 'Quantum Computing', count: contentItems.filter(item => item.category === 'quantum').length },
    { id: 'automation', name: 'Automation', count: contentItems.filter(item => item.category === 'automation').length }
  ];

  const filteredContent = contentItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Discover Revolutionary Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our latest breakthrough technologies, solutions, and services. Find exactly what you need to transform your business.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search content, solutions, or technologies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredContent.map((item) => {
            const IconComponent = item.icon;
            return (
              <div key={item.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-lg flex items-center justify-center`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h3>
                      <div className="flex items-center gap-2">
                        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full font-semibold">
                          {item.type.toUpperCase()}
                        </span>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-500 fill-current" />
                          <span className="text-sm text-gray-600">{item.rating}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{item.description}</p>

                  {/* Stats */}
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <TrendingUp className="w-4 h-4" />
                      <span className="font-semibold text-green-600">{item.roi} ROI</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      <span>{item.views}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{item.time}</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <Link 
                    href={item.href}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 w-full justify-center"
                  >
                    Explore Content
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* No Results */}
        {filteredContent.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No content found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your search terms or category filters.</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="text-blue-600 hover:text-blue-700 font-semibold"
            >
              Clear filters
            </button>
          </div>
        )}

        {/* View All CTA */}
        <div className="text-center mt-12">
          <Link 
            href="/ai-services-2025" 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            View All Content
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}