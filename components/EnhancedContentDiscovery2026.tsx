import React, { useState } from 'react';
import Link from 'next/link';

export default function EnhancedContentDiscovery2026() {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All Content', icon: '🎯', count: 150 },
    { id: 'enterprise', name: 'Enterprise AI', icon: '🏢', count: 45 },
    { id: 'automation', name: 'Automation', icon: '🤖', count: 32 },
    { id: 'implementation', name: 'Implementation', icon: '📋', count: 28 },
    { id: 'case-studies', name: 'Case Studies', icon: '📊', count: 25 },
    { id: 'resources', name: 'Resources', icon: '📚', count: 20 }
  ];

  const featuredContent = [
    {
      id: 1,
      title: "AI Enterprise Transformation Mastery",
      description: "Complete guide to enterprise AI transformation with proven frameworks and real-world success stories.",
      category: "enterprise",
      type: "blog",
      readTime: "15 min",
      difficulty: "Advanced",
      rating: 4.9,
      isNew: true,
      url: "/blog/ai-2025-enterprise-transformation-mastery",
      tags: ["Enterprise AI", "Transformation", "Strategy", "ROI"]
    },
    {
      id: 2,
      title: "AI Automation Revolution 2025",
      description: "Transform your business with intelligent automation strategies, tools, and implementation frameworks.",
      category: "automation",
      type: "blog",
      readTime: "12 min",
      difficulty: "Intermediate",
      rating: 4.8,
      isNew: true,
      url: "/blog/ai-2025-automation-revolution",
      tags: ["Automation", "AI", "Business Process", "Efficiency"]
    },
    {
      id: 3,
      title: "AI Implementation Master Checklist",
      description: "200+ actionable items, templates, and best practices for guaranteed AI implementation success.",
      category: "implementation",
      type: "resource",
      readTime: "Download",
      difficulty: "All Levels",
      rating: 4.9,
      isNew: true,
      url: "/resources/ai-implementation-master-checklist-2025",
      tags: ["Checklist", "Implementation", "Templates", "Best Practices"]
    },
    {
      id: 4,
      title: "Manufacturing AI Success Story",
      description: "How a Fortune 500 manufacturer achieved $12M savings with AI-powered predictive maintenance.",
      category: "case-studies",
      type: "case-study",
      readTime: "8 min",
      difficulty: "All Levels",
      rating: 4.7,
      isNew: false,
      url: "/case-studies/manufacturing-ai-predictive-maintenance",
      tags: ["Manufacturing", "Predictive Maintenance", "ROI", "Success Story"]
    },
    {
      id: 5,
      title: "AI Governance Blueprint 2025",
      description: "Comprehensive framework for AI governance, risk management, and compliance in enterprise environments.",
      category: "enterprise",
      type: "blog",
      readTime: "18 min",
      difficulty: "Advanced",
      rating: 4.8,
      isNew: false,
      url: "/blog/ai-governance-blueprint-2025",
      tags: ["Governance", "Risk Management", "Compliance", "Enterprise"]
    },
    {
      id: 6,
      title: "AI ROI Calculator Tool",
      description: "Interactive tool to calculate potential ROI for your AI initiatives with detailed projections.",
      category: "resources",
      type: "tool",
      readTime: "Interactive",
      difficulty: "All Levels",
      rating: 4.6,
      isNew: false,
      url: "/resources/ai-roi-calculator-tool",
      tags: ["ROI", "Calculator", "Tool", "Planning"]
    }
  ];

  const filteredContent = activeCategory === 'all' 
    ? featuredContent 
    : featuredContent.filter(item => item.category === activeCategory);

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Discover Our Latest AI Resources
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive library of AI guides, case studies, tools, and resources 
            designed to accelerate your AI transformation journey.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-indigo-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 border border-gray-200'
              }`}
            >
              <span className="text-lg mr-2">{category.icon}</span>
              <span>{category.name}</span>
              <span className={`ml-2 px-2 py-1 rounded-full text-xs ${
                activeCategory === category.id
                  ? 'bg-white/20 text-white'
                  : 'bg-gray-100 text-gray-600'
              }`}>
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item) => (
            <Link key={item.id} href={item.url} className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105 overflow-hidden">
                {/* Content Header */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl">{item.type === 'blog' ? '📝' : item.type === 'resource' ? '📚' : item.type === 'case-study' ? '📊' : '🛠️'}</span>
                      {item.isNew && (
                        <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-bold animate-pulse">
                          NEW
                        </span>
                      )}
                    </div>
                    <div className="flex items-center space-x-1">
                      <span className="text-yellow-400">★</span>
                      <span className="text-sm font-semibold text-gray-700">{item.rating}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {item.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.slice(0, 3).map((tag, index) => (
                      <span
                        key={index}
                        className="bg-indigo-100 text-indigo-700 text-xs px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                    {item.tags.length > 3 && (
                      <span className="text-gray-400 text-xs px-2 py-1">
                        +{item.tags.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {item.readTime}
                      </span>
                      <span className="bg-gray-100 px-2 py-1 rounded text-xs">
                        {item.difficulty}
                      </span>
                    </div>
                    <div className="flex items-center text-indigo-600 group-hover:text-indigo-800">
                      <span className="font-semibold">Read More</span>
                      <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            href="/content-showcase"
            className="inline-flex items-center bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <span>View All Content</span>
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-indigo-600 mb-2">150+</div>
              <div className="text-gray-600">Total Resources</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-gray-600">New This Month</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">95%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">500+</div>
              <div className="text-gray-600">Organizations Helped</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}