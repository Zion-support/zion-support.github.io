import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, ArrowRight, Clock, TrendingUp, Star, Eye, Heart } from 'lucide-react';

const InteractiveContentDiscoveryWidget2026: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedYear, setSelectedYear] = useState('all');
  const [filteredContent, setFilteredContent] = useState([]);

  const contentItems = [
    {
      id: 1,
      title: "AI 2026: Quantum-Neural Fusion Breakthrough",
      description: "Revolutionary integration of quantum computing with neural networks achieving 10,000x processing speed improvements.",
      category: "AI Solutions",
      year: "2026",
      type: "Breakthrough",
      views: 12500,
      likes: 890,
      trending: true,
      featured: true,
      tags: ["Quantum AI", "Neural Networks", "Breakthrough", "2026"],
      image: "/images/ai-2026-quantum.jpg",
      readTime: "8 min read",
      author: "Dr. Sarah Chen",
      publishedDate: "2025-01-15"
    },
    {
      id: 2,
      title: "Advanced Quantum Computing Solutions 2026",
      description: "Comprehensive guide to implementing quantum computing solutions with error-corrected quantum computers.",
      category: "Quantum Computing",
      year: "2026",
      type: "Guide",
      views: 8900,
      likes: 650,
      trending: true,
      featured: false,
      tags: ["Quantum Computing", "Error Correction", "Implementation", "2026"],
      image: "/images/quantum-computing-2026.jpg",
      readTime: "12 min read",
      author: "Prof. Michael Rodriguez",
      publishedDate: "2025-01-14"
    },
    {
      id: 3,
      title: "Revolutionary Automation Solutions 2026",
      description: "Transform your business with intelligent process automation achieving 10x efficiency improvements.",
      category: "Automation",
      year: "2026",
      type: "Solution",
      views: 15600,
      likes: 1200,
      trending: true,
      featured: true,
      tags: ["Automation", "Process Optimization", "Efficiency", "2026"],
      image: "/images/automation-2026.jpg",
      readTime: "10 min read",
      author: "Alex Thompson",
      publishedDate: "2025-01-13"
    },
    {
      id: 4,
      title: "AI 2027: Autonomous Decision Systems",
      description: "Self-evolving AI systems capable of making complex business decisions with human-level reasoning.",
      category: "AI Solutions",
      year: "2027",
      type: "Breakthrough",
      views: 7200,
      likes: 480,
      trending: false,
      featured: false,
      tags: ["Autonomous AI", "Decision Making", "2027", "Business Intelligence"],
      image: "/images/ai-2027-autonomous.jpg",
      readTime: "9 min read",
      author: "Dr. Lisa Wang",
      publishedDate: "2025-01-12"
    },
    {
      id: 5,
      title: "Quantum Internet Infrastructure 2027",
      description: "Global quantum internet enabling ultra-secure communication and distributed quantum computing.",
      category: "Quantum Computing",
      year: "2027",
      type: "Infrastructure",
      views: 5600,
      likes: 320,
      trending: false,
      featured: false,
      tags: ["Quantum Internet", "Security", "Infrastructure", "2027"],
      image: "/images/quantum-internet-2027.jpg",
      readTime: "11 min read",
      author: "Dr. James Wilson",
      publishedDate: "2025-01-11"
    },
    {
      id: 6,
      title: "Predictive Maintenance Systems 2026",
      description: "Advanced AI systems that predict equipment failures before they occur, reducing downtime by 95%.",
      category: "Automation",
      year: "2026",
      type: "Solution",
      views: 9800,
      likes: 750,
      trending: true,
      featured: false,
      tags: ["Predictive Maintenance", "IoT", "Equipment", "2026"],
      image: "/images/predictive-maintenance-2026.jpg",
      readTime: "7 min read",
      author: "Maria Garcia",
      publishedDate: "2025-01-10"
    }
  ];

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'AI Solutions', label: 'AI Solutions' },
    { value: 'Quantum Computing', label: 'Quantum Computing' },
    { value: 'Automation', label: 'Automation' },
    { value: 'Case Studies', label: 'Case Studies' },
    { value: 'Guides', label: 'Implementation Guides' }
  ];

  const years = [
    { value: 'all', label: 'All Years' },
    { value: '2026', label: '2026' },
    { value: '2027', label: '2027' },
    { value: '2028', label: '2028' },
    { value: '2029', label: '2029' },
    { value: '2030', label: '2030' }
  ];

  useEffect(() => {
    let filtered = contentItems;

    if (searchQuery) {
      filtered = filtered.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }

    if (selectedYear !== 'all') {
      filtered = filtered.filter(item => item.year === selectedYear);
    }

    setFilteredContent(filtered);
  }, [searchQuery, selectedCategory, selectedYear]);

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Interactive Content Discovery
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Discover the latest AI breakthroughs, quantum computing solutions, and automation technologies with our intelligent content discovery system
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search content..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
              />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 appearance-none"
              >
                {categories.map(category => (
                  <option key={category.value} value={category.value} className="bg-gray-800 text-white">
                    {category.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Year Filter */}
            <div className="relative">
              <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 appearance-none"
              >
                {years.map(year => (
                  <option key={year.value} value={year.value} className="bg-gray-800 text-white">
                    {year.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105 group"
            >
              {/* Image */}
              <div className="relative mb-6">
                <div className="w-full h-48 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <div className="text-white text-4xl font-bold">
                    {item.title.charAt(0)}
                  </div>
                </div>
                {item.featured && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                    Featured
                  </div>
                )}
                {item.trending && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    Trending
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {item.category}
                  </span>
                  <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {item.year}
                  </span>
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {item.type}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {item.title}
                </h3>

                <p className="text-gray-300 mb-4 leading-relaxed">
                  {item.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.slice(0, 3).map((tag, index) => (
                    <span key={index} className="bg-white/10 text-white px-2 py-1 rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Meta Info */}
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {item.readTime}
                  </div>
                  <div className="flex items-center">
                    <Eye className="w-4 h-4 mr-1" />
                    {item.views.toLocaleString()}
                  </div>
                </div>

                {/* Author and Date */}
                <div className="text-sm text-gray-400 mb-4">
                  <div>By {item.author}</div>
                  <div>{new Date(item.publishedDate).toLocaleDateString()}</div>
                </div>
              </div>

              {/* CTA Button */}
              <Link
                to={`/content/${item.id}`}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center group"
              >
                Read More
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredContent.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-lg mb-4">No content found matching your criteria</div>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setSelectedYear('all');
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated with Latest Content
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Get notified about new AI breakthroughs, quantum computing solutions, and automation technologies as they're published.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/newsletter"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300"
              >
                Subscribe to Newsletter
              </Link>
              <Link
                to="/content-library"
                className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 border border-white/30"
              >
                Browse All Content
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveContentDiscoveryWidget2026;