"use client";
'use client';

import React{ useState } from 'react';
import Link from 'next/link';
SearchFilterArrowRightClockTrendingUpStarEyeBookOpenVideoFileTextUsersZap

const UltimateContentDiscovery2025 = () => {
  const [searchQuerysetSearchQuery] = useState('');
  const [selectedCategorysetSelectedCategory] = useState('all');

  const categories = [
    { id: ''all', 'name: 'All 'Content', 'icon: <BookOpen className="w-5 h-5" /> },
    { id: ''ai', 'name: 'AI & Machine 'Learning', 'icon: <Zap className="w-5 h-5" /> },
    { id: ''automation', 'name: ''Automation', 'icon: <TrendingUp className="w-5 h-5" /> },
    { id: ''cloud', 'name: 'Cloud 'Computing', 'icon: <Users className="w-5 h-5" /> },
    { id: ''quantum', 'name: 'Quantum 'Computing', 'icon: <Star className="w-5 h-5" /> }
  ];

  const contentItems = [
    {
      id: 1,
      title: "AI-Powered Business Transformation Guide 2025",
      description: "Complete roadmap for implementing AI solutions in your organization",
      category: 'ai',
      type: 'guide',
      readTime: '15 min',
      views: '12.5k',
      rating: 4.9,
      featured: true,
      image: '/api/placeholder/400/250'
    },
    {
      id: 2,
      title: "Quantum Computing: The Future is Now",
      description: "Exploring quantum computing applications and their business impact",
      category: 'quantum',
      type: 'article',
      readTime: '8 min',
      views: '8.2k',
      rating: 4.8,
      featured: false,
      image: '/api/placeholder/400/250'
    },
    {
      id: 3,
      title: "Automation Mastery: From Zero to Hero",
      description: "Step-by-step guide to implementing automation in your workflow",
      category: 'automation',
      type: 'video',
      readTime: '25 min',
      views: '15.3k',
      rating: 4.9,
      featured: true,
      image: '/api/placeholder/400/250'
    },
    {
      id: 4,
      title: "Cloud Infrastructure Best Practices",
      description: "Essential strategies for building scalable cloud solutions",
      category: 'cloud',
      type: 'whitepaper',
      readTime: '20 min',
      views: '6.7k',
      rating: 4.7,
      featured: false,
      image: '/api/placeholder/400/250'
    },
    {
      id: 5,
      title: "Neural Networks Explained Simply",
      description: "Understanding neural networks without the technical jargon",
      category: 'ai',
      type: 'tutorial',
      readTime: '12 min',
      views: '9.8k',
      rating: 4.8,
      featured: false,
      image: '/api/placeholder/400/250'
    },
    {
      id: 6,
      title: "The Future of Work: AI Integration",
      description: "How AI is reshaping the modern workplace and job roles",
      category: 'ai',
      type: 'article',
      readTime: '10 min',
      views: '11.2k',
      rating: 4.9,
      featured: true,
      image: '/api/placeholder/400/250'
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'video': return <Video className="w-4 h-4" />;
      case 'article': return <FileText className="w-4 h-4" />;
      case 'guide': return <BookOpen className="w-4 h-4" />;
      case 'tutorial': return <Zap className="w-4 h-4" />;
      case 'whitepaper': return <FileText className="w-4 h-4" />;
      default: return <BookOpen className="w-4 h-4" />;
    }
  };

  const filteredContent = contentItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-4">
            <Search className="w-4 h-4 mr-2" />
            Content Discovery
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ultimate Content Hub 2025
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discoverexploreand access our comprehensive library of cutting-edge technology contentguidesand resources.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search Bar */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search contentguidesarticles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.icon}
                  <span className="ml-2">{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              {/* Image */}
              <div className="relative h-48 bg-gradient-to-br from-blue-400 to-purple-500 overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-4 left-4 flex items-center space-x-2">
                  {item.featured && (
                    <span className="bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-medium">
                      Featured
                    </span>
                  )}
                  <span className="bg-white/20 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs font-medium flex items-center">
                    {getTypeIcon(item.type)}
                    <span className="ml-1 capitalize">{item.type}</span>
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 flex items-center space-x-4 text-white text-sm">
                  <span className="flex items-center">
                    <Eye className="w-4 h-4 mr-1" />
                    {item.views}
                  </span>
                  <span className="flex items-center">
                    <Star className="w-4 h-4 mr-1 fill-current" />
                    {item.rating}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {item.description}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    {item.readTime}
                  </span>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(item.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <Link
                  href={`/content/${item.id}`}
                  className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors group"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl">
            Load More Content
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: '500+'label: 'Articles & Guides' },
            { number: '50+'label: 'Video Tutorials' },
            { number: '100+'label: 'Case Studies' },
            { number: '1M+'label: 'Monthly Readers' }
          ].map((statindex) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UltimateContentDiscovery2025;