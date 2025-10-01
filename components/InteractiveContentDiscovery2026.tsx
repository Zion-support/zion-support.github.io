"use client";

// @ts-nocheck
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function InteractiveContentDiscovery2026() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedROI, setSelectedROI] = useState('all');
  const [filteredContent, setFilteredContent] = useState([]);

  const content = [
    {
      id: 1,
      title: "Ultimate Autonomous Revolution",
      category: "breakthrough",
      roi: "100b",
      type: "blog",
      url: "/blog/ai-2026-ultimate-autonomous-revolution",
      description: "99.99% autonomous operations with 1 million times performance boost",
      metrics: { autonomy: "99.99%", performance: "1Mx", value: "$100B" },
      featured: true
    },
    {
      id: 2,
      title: "$100B Success Story",
      category: "success",
      roi: "100b",
      type: "case-study",
      url: "/case-studies/ai-2026-ultimate-autonomous-revolution-100-billion-success",
      description: "How Fortune 100 companies achieved $100 billion ROI",
      metrics: { companies: "15", roi: "$100B", timeline: "6 months" },
      featured: true
    },
    {
      id: 3,
      title: "Ultra-Intelligent AI Systems",
      category: "breakthrough",
      roi: "50b",
      type: "blog",
      url: "/blog/ai-2026-ultra-intelligent-autonomous-systems-breakthrough",
      description: "Revolutionary AI systems achieving 99.99% automation",
      metrics: { automation: "99.99%", roi: "$50B", performance: "100Kx" },
      featured: true
    },
    {
      id: 4,
      title: "Quantum Neural Superintelligence",
      category: "breakthrough",
      roi: "25b",
      type: "blog",
      url: "/blog/ai-2026-quantum-neural-superintelligence-breakthrough",
      description: "Revolutionary cognitive AI with universal consciousness",
      metrics: { consciousness: "99.9999%", value: "$25B", speed: "100Kx" },
      featured: true
    },
    {
      id: 5,
      title: "Adaptive Neural Architectures",
      category: "breakthrough",
      roi: "15b",
      type: "blog",
      url: "/blog/ai-2026-adaptive-neural-architectures-breakthrough",
      description: "100,000x performance boost with adaptive neural systems",
      metrics: { performance: "100Kx", roi: "$15.2B", adaptation: "Real-time" },
      featured: false
    },
    {
      id: 6,
      title: "Cognitive Automation Revolution",
      category: "automation",
      roi: "25b",
      type: "blog",
      url: "/blog/ai-2026-cognitive-automation-revolution",
      description: "99.9% autonomous business process automation",
      metrics: { automation: "99.9%", roi: "$25.3B", processes: "1000+" },
      featured: false
    }
  ];

  const categories = [
    { value: 'all', label: 'All Content', icon: '🌟' },
    { value: 'breakthrough', label: 'Breakthroughs', icon: '🚀' },
    { value: 'success', label: 'Success Stories', icon: '🏆' },
    { value: 'automation', label: 'Automation', icon: '🤖' }
  ];

  const roiRanges = [
    { value: 'all', label: 'All ROI' },
    { value: '100b', label: '$100B+' },
    { value: '50b', label: '$50B+' },
    { value: '25b', label: '$25B+' },
    { value: '15b', label: '$15B+' }
  ];

  useEffect(() => {
    let filtered = content;
    
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }
    
    if (selectedROI !== 'all') {
      filtered = filtered.filter(item => item.roi === selectedROI);
    }
    
    setFilteredContent(filtered);
  }, [selectedCategory, selectedROI]);

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500/20 to-indigo-500/20 border border-blue-500/30 mb-8">
            <span className="text-blue-600 font-bold text-xl tracking-wider uppercase">
              🔍 Interactive Content Discovery 2026
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent leading-tight">
            Discover Revolutionary AI Content
          </h2>
          
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Explore our comprehensive library of AI breakthroughs, success stories, and automation solutions. 
            Filter by category and ROI to find exactly what you need.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 border border-gray-200">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Category Filter */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Content Category</h3>
              <div className="grid grid-cols-2 gap-3">
                {categories.map((category) => (
                  <button
                    key={category.value}
                    onClick={() => setSelectedCategory(category.value)}
                    className={`p-4 rounded-lg border-2 transition-all duration-300 ${
                      selectedCategory === category.value
                        ? 'border-blue-500 bg-blue-50 text-blue-700'
                        : 'border-gray-200 bg-white text-gray-700 hover:border-blue-300 hover:bg-blue-50'
                    }`}
                  >
                    <div className="text-2xl mb-2">{category.icon}</div>
                    <div className="text-sm font-semibold">{category.label}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* ROI Filter */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">ROI Range</h3>
              <div className="space-y-2">
                {roiRanges.map((range) => (
                  <button
                    key={range.value}
                    onClick={() => setSelectedROI(range.value)}
                    className={`w-full p-3 rounded-lg border-2 transition-all duration-300 text-left ${
                      selectedROI === range.value
                        ? 'border-green-500 bg-green-50 text-green-700'
                        : 'border-gray-200 bg-white text-gray-700 hover:border-green-300 hover:bg-green-50'
                    }`}
                  >
                    <div className="font-semibold">{range.label}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item) => (
            <Link
              key={item.id}
              href={item.url}
              className="group block bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 overflow-hidden"
            >
              {/* Featured Badge */}
              {item.featured && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    FEATURED
                  </span>
                </div>
              )}

              {/* Content Header */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">
                    {item.type === 'blog' ? '📖' : '📊'}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    item.type === 'blog' 
                      ? 'bg-blue-100 text-blue-700' 
                      : 'bg-green-100 text-green-700'
                  }`}>
                    {item.type === 'blog' ? 'BREAKTHROUGH' : 'SUCCESS STORY'}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {item.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {Object.entries(item.metrics).map(([key, value]) => (
                    <div key={key} className="text-center p-2 bg-gray-50 rounded-lg">
                      <div className="text-sm font-bold text-gray-900">{value}</div>
                      <div className="text-xs text-gray-500 capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                {/* ROI Badge */}
                <div className="flex justify-center">
                  <span className={`px-4 py-2 rounded-full text-sm font-bold ${
                    item.roi === '100b' ? 'bg-green-100 text-green-700' :
                    item.roi === '50b' ? 'bg-purple-100 text-purple-700' :
                    item.roi === '25b' ? 'bg-blue-100 text-blue-700' :
                    'bg-orange-100 text-orange-700'
                  }`}>
                    ${item.roi.toUpperCase()} ROI
                  </span>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </Link>
          ))}
        </div>

        {/* Results Summary */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Found {filteredContent.length} Revolutionary Content Pieces
            </h3>
            <p className="text-gray-600 mb-6">
              {filteredContent.length === 0 
                ? "No content matches your current filters. Try adjusting your criteria."
                : `Discover ${filteredContent.length} breakthrough technologies and success stories that can transform your business.`
              }
            </p>
            {(selectedCategory !== 'all' || selectedROI !== 'all') && (
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSelectedROI('all');
                }}
                className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-400 hover:to-indigo-500 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
              >
                Clear All Filters
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}