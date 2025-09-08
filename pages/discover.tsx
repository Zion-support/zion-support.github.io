import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function DiscoverPage() {
  const discoveryTopics = [
    {
      title: "Autonomous Cloud Systems",
      description: "Learn how self-managing cloud infrastructure is revolutionizing the industry",
      icon: "☁️",
      difficulty: "Intermediate",
      duration: "45 min",
      topics: ["Auto-scaling", "Load Balancing", "Cost Optimization"]
    },
    {
      title: "AI-Powered Content Creation",
      description: "Discover how artificial intelligence generates and optimizes content automatically",
      icon: "✍️",
      difficulty: "Beginner",
      duration: "30 min",
      topics: ["SEO Optimization", "Brand Consistency", "Multi-language"]
    },
    {
      title: "Intelligent DevOps",
      description: "Explore self-healing CI/CD pipelines and automated deployment strategies",
      icon: "🔄",
      difficulty: "Advanced",
      duration: "60 min",
      topics: ["Auto-deployment", "Testing", "Monitoring"]
    },
    {
      title: "Machine Learning Automation",
      description: "Understand how ML models automate complex decision-making processes",
      icon: "🤖",
      difficulty: "Advanced",
      duration: "90 min",
      topics: ["Model Training", "Inference", "Auto-tuning"]
    }
  ];

  const filteredContent = sampleContent.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const sortedContent = [...filteredContent].sort((a, b) => {
    switch (sortBy) {
      case 'date':
        return new Date(b.date) - new Date(a.date);
      case 'title':
        return a.title.localeCompare(b.title);
      case 'readTime':
        return parseInt(a.readTime) - parseInt(b.readTime);
      default:
        return 0;
    }
  ];

  return (
    <>
      <Head>
        <title>Content Discovery | Zion Tech Group</title>
        <meta name="description" content="Discover and explore our comprehensive content library with AI-powered search and recommendations." />
      </Head>
      
      <main className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
            Content Discovery
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            AI-powered content discovery engine to help you find exactly what you need
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-slate-900/50 border border-white/10 rounded-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-white/80 mb-2">Search Content</label>
              <input
                type="text"
                placeholder="Search by title, content, or tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 bg-slate-800 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-white/80 mb-2">Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-2 bg-slate-800 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.icon} {category.name}
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-white/80 mb-2">Sort By</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-2 bg-slate-800 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                <option value="date">Date (Newest)</option>
                <option value="title">Title (A-Z)</option>
                <option value="readTime">Read Time</option>
              </select>
            </div>
          </div>
        </div>

        {/* Discovery Topics */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What Would You Like to Discover?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {discoveryTopics.map((topic, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="text-6xl mb-4">{topic.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{topic.title}</h3>
                <p className="text-gray-600 mb-4">{topic.description}</p>
                
                <div className="flex items-center gap-4 mb-4 text-sm">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                    {topic.difficulty}
                  </span>
                  <span className="text-gray-500">⏱️ {topic.duration}</span>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Topics:</h4>
                  <ul className="space-y-1">
                    {topic.topics.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-gray-600 text-sm">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                  Start Learning
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Resources */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredResources.map((resource, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-block bg-purple-100 text-purple-800 text-xs font-semibold px-3 py-1 rounded-full">
                    {resource.type}
                  </span>
                  <span className="text-sm text-gray-500">📥 {resource.downloadCount}</span>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-2">{resource.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
                
                <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
                  Download
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Paths */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Learning Paths</h2>
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Beginner</h3>
                <p className="text-gray-600 text-sm mb-4">Start your journey into autonomous automation</p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors">
                  Get Started
                </button>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Intermediate</h3>
                <p className="text-gray-600 text-sm mb-4">Deepen your knowledge and skills</p>
                <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors">
                  Continue
                </button>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏆</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Advanced</h3>
                <p className="text-gray-600 text-sm mb-4">Master advanced concepts and techniques</p>
                <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors">
                  Master
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Start Discovering?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who are already transforming their operations with autonomous automation.
          </p>
          <div className="space-x-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
              Start Learning
            </button>
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-8 rounded-lg transition-colors">
              Browse Resources
            </button>
          </div>
        </div>
      </div>
    </>
  );
}