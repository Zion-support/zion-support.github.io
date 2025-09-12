import React, { useState } from 'react';
import Link from 'next/link';

const InteractiveContentDiscovery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');

  const categories = [
    { id: 'all', name: 'All Topics', icon: '🌟' },
    { id: 'ai-innovation', name: 'AI Innovation', icon: '🚀' },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: '🛡️' },
    { id: 'automation', name: 'Automation', icon: '🤖' },
    { id: 'sustainability', name: 'Sustainability', icon: '🌱' },
    { id: 'healthcare', name: 'Healthcare', icon: '🏥' },
    { id: 'manufacturing', name: 'Manufacturing', icon: '🏭' },
    { id: 'finance', name: 'Finance', icon: '🏦' }
  ];

  const contentTypes = [
    { id: 'all', name: 'All Content', icon: '📚' },
    { id: 'articles', name: 'Articles', icon: '📖' },
    { id: 'case-studies', name: 'Case Studies', icon: '📊' },
    { id: 'resources', name: 'Resources', icon: '📋' },
    { id: 'webinars', name: 'Webinars', icon: '🎥' }
  ];

  const contentItems = [
    {
      title: "AI Advanced Automation 2025: Next-Generation Business Process Automation",
      description: "Discover the latest advances in AI-powered business process automation for 2025. Learn about intelligent workflows, autonomous decision-making, and enterprise automation strategies that deliver 300%+ ROI.",
      href: "/blog/ai-2025-advanced-automation",
      type: "articles",
      category: "automation",
      icon: "🤖",
      readTime: "22 min read",
      isNew: true,
      trending: false,
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "AI Cybersecurity Threats 2025: Protecting Against Advanced AI-Powered Attacks",
      description: "Comprehensive analysis of AI-powered cybersecurity threats in 2025. Learn about adversarial AI, deepfake attacks, automated exploits, and defense strategies to protect your organization.",
      href: "/blog/ai-2025-cybersecurity-threats",
      type: "articles",
      category: "cybersecurity",
      icon: "🛡️",
      readTime: "28 min read",
      isNew: true,
      trending: true,
      gradient: "from-red-500 to-orange-600"
    },
    {
      title: "AI Multimodal Applications 2025: The Future of Cross-Modal Intelligence",
      description: "Explore the revolutionary world of AI multimodal applications in 2025. Learn about vision-language models, audio-visual AI, and cross-modal intelligence transforming industries.",
      href: "/blog/ai-2025-multimodal-applications",
      type: "articles",
      category: "ai-innovation",
      icon: "🎭",
      readTime: "24 min read",
      isNew: true,
      trending: false,
      gradient: "from-purple-500 to-pink-600"
    },
    {
      title: "$12M Healthcare Success: AI Diagnosis Case Study 2025",
      description: "Discover how a major healthcare system achieved 95% diagnostic accuracy and $12M in annual savings through AI-powered medical imaging and diagnosis automation.",
      href: "/case-studies/ai-healthcare-diagnosis-success-2025",
      type: "case-studies",
      category: "healthcare",
      icon: "🏥",
      readTime: "Case Study",
      isNew: true,
      trending: false,
      gradient: "from-green-500 to-teal-600"
    },
    {
      title: "$200M Manufacturing Success: Autonomous AI Systems Case Study",
      description: "How a Fortune 500 manufacturing company transformed their operations with autonomous AI systems, achieving $200M in annual savings, 60% faster processing times, and 99.7% uptime.",
      href: "/case-studies/ai-autonomous-manufacturing-success-2025",
      type: "case-studies",
      category: "manufacturing",
      icon: "💰",
      readTime: "Case Study",
      isNew: false,
      trending: true,
      gradient: "from-yellow-500 to-orange-600"
    },
    {
      title: "AI Implementation Master Guide 2026: Complete 200+ Page Resource",
      description: "Download our comprehensive AI Implementation Master Guide for 2025. Step-by-step instructions, templates, checklists, and best practices for successful AI deployment.",
      href: "/resources/ai-implementation-master-guide-2026",
      type: "resources",
      category: "ai-innovation",
      icon: "📚",
      readTime: "200+ Pages",
      isNew: true,
      trending: true,
      gradient: "from-indigo-500 to-blue-600"
    },
    {
      title: "AI Sustainability & Green Tech 2025: Building Eco-Friendly AI Systems",
      description: "Discover how AI is driving sustainability initiatives and reducing carbon footprints. Learn about smart energy management, intelligent waste management, and climate risk assessment solutions.",
      href: "/blog/ai-sustainability-green-tech-2025",
      type: "articles",
      category: "sustainability",
      icon: "🌱",
      readTime: "20 min read",
      isNew: false,
      trending: false,
      gradient: "from-green-500 to-emerald-600"
    },
    {
      title: "Financial Services AI Transformation: $50M Savings Case Study",
      description: "Complete case study of AI transformation in financial services with 300% ROI. Learn how a Fortune 500 company achieved $50M in cost savings and 300% ROI through comprehensive AI transformation.",
      href: "/case-studies/ai-financial-services-transformation-2025",
      type: "case-studies",
      category: "finance",
      icon: "🏦",
      readTime: "Case Study",
      isNew: false,
      trending: false,
      gradient: "from-blue-500 to-cyan-600"
    }
  ];

  const filteredContent = contentItems.filter(item => {
    const categoryMatch = selectedCategory === 'all' || item.category === selectedCategory;
    const typeMatch = selectedType === 'all' || item.type === selectedType;
    return categoryMatch && typeMatch;
  });

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-indigo-100 text-indigo-800 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🔍 INTERACTIVE DISCOVERY</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Discover Your Perfect AI Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Use our interactive filters to find exactly the content you need. 
            Browse by topic, content type, or explore trending articles and resources.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Category Filter */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Filter by Topic</h3>
                <div className="grid grid-cols-2 gap-3">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`flex items-center gap-3 p-3 rounded-lg text-left transition-all duration-200 ${
                        selectedCategory === category.id
                          ? 'bg-indigo-100 text-indigo-800 border-2 border-indigo-300'
                          : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border-2 border-transparent'
                      }`}
                    >
                      <span className="text-xl">{category.icon}</span>
                      <span className="text-sm font-medium">{category.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Type Filter */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Filter by Content Type</h3>
                <div className="grid grid-cols-1 gap-3">
                  {contentTypes.map((type) => (
                    <button
                      key={type.id}
                      onClick={() => setSelectedType(type.id)}
                      className={`flex items-center gap-3 p-3 rounded-lg text-left transition-all duration-200 ${
                        selectedType === type.id
                          ? 'bg-indigo-100 text-indigo-800 border-2 border-indigo-300'
                          : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border-2 border-transparent'
                      }`}
                    >
                      <span className="text-xl">{type.icon}</span>
                      <span className="text-sm font-medium">{type.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Active Filters */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex items-center gap-4 flex-wrap">
                <span className="text-sm text-gray-600">Active filters:</span>
                {selectedCategory !== 'all' && (
                  <span className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">
                    {categories.find(c => c.id === selectedCategory)?.icon}
                    {categories.find(c => c.id === selectedCategory)?.name}
                    <button
                      onClick={() => setSelectedCategory('all')}
                      className="text-indigo-600 hover:text-indigo-800"
                    >
                      ×
                    </button>
                  </span>
                )}
                {selectedType !== 'all' && (
                  <span className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">
                    {contentTypes.find(t => t.id === selectedType)?.icon}
                    {contentTypes.find(t => t.id === selectedType)?.name}
                    <button
                      onClick={() => setSelectedType('all')}
                      className="text-indigo-600 hover:text-indigo-800"
                    >
                      ×
                    </button>
                  </span>
                )}
                {(selectedCategory !== 'all' || selectedType !== 'all') && (
                  <button
                    onClick={() => {
                      setSelectedCategory('all');
                      setSelectedType('all');
                    }}
                    className="text-sm text-gray-600 hover:text-gray-800 underline"
                  >
                    Clear all filters
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-8">
          <p className="text-lg text-gray-600">
            Showing <span className="font-semibold text-indigo-600">{filteredContent.length}</span> results
            {selectedCategory !== 'all' && ` in ${categories.find(c => c.id === selectedCategory)?.name}`}
            {selectedType !== 'all' && ` of type ${contentTypes.find(t => t.id === selectedType)?.name}`}
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item, index) => (
            <Link key={index} href={item.href} className="group">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 h-full">
                <div className={`bg-gradient-to-r ${item.gradient} p-6 text-white relative`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-5xl group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <div className="flex gap-2">
                      {item.isNew && (
                        <span className="bg-yellow-400 text-yellow-900 rounded-full px-3 py-1 text-xs font-medium">
                          NEW
                        </span>
                      )}
                      {item.trending && (
                        <span className="bg-red-400 text-red-900 rounded-full px-3 py-1 text-xs font-medium">
                          🔥 TRENDING
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="text-sm opacity-90 mb-2">
                    {categories.find(c => c.id === item.category)?.name} • {contentTypes.find(t => t.id === item.type)?.name}
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:underline line-clamp-2">
                    {item.title}
                  </h3>
                  <div className="text-sm opacity-75">{item.readTime}</div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 leading-relaxed line-clamp-3">
                    {item.description}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-indigo-600 font-medium group-hover:underline">
                      Read More →
                    </span>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <span>{item.readTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* No Results */}
        {filteredContent.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">No content found</h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your filters to see more content.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedType('all');
              }}
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
            >
              Clear All Filters
            </button>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Can't Find What You're Looking For?</h3>
            <p className="text-xl text-indigo-100 mb-6">
              Our content library is constantly growing. Let us know what topics you'd like to see covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
              >
                Request Content
              </Link>
              <Link
                href="/content-showcase"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors text-lg"
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

export default InteractiveContentDiscovery;