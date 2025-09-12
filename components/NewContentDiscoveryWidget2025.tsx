import React, { useState } from 'react';
import Link from 'next/link';

const NewContentDiscoveryWidget2025 = () => {
  const [activeTab, setActiveTab] = useState('all');

  const content = {
    all: [
      {
        title: "🚀 AI 2025 Next-Generation Breakthroughs",
        description: "Discover revolutionary AI technologies delivering 5,000-15,000% ROI",
        link: "/blog/ai-2025-next-generation-breakthroughs",
        type: "Blog Post",
        category: "breakthroughs",
        readTime: "15 min",
        badge: "BREAKTHROUGH",
        color: "from-red-500 to-pink-500"
      },
      {
        title: "🏆 Global Tech Giant Transformation: 900% ROI",
        description: "Learn how Fortune 500 companies achieve unprecedented success",
        link: "/case-studies/ai-2025-global-tech-giant-transformation",
        type: "Case Study",
        category: "success-stories",
        readTime: "12 min",
        badge: "SUCCESS STORY",
        color: "from-green-500 to-emerald-500"
      },
      {
        title: "📚 AI 2025 Ultimate Implementation Master Guide",
        description: "Complete step-by-step guide to achieving breakthrough results",
        link: "/resources/ai-2025-ultimate-implementation-master-guide",
        type: "Resource Guide",
        category: "implementation",
        readTime: "45 min",
        badge: "MASTER GUIDE",
        color: "from-purple-500 to-pink-500"
      }
    ],
    breakthroughs: [
      {
        title: "🚀 AI 2025 Next-Generation Breakthroughs",
        description: "Discover revolutionary AI technologies delivering 5,000-15,000% ROI",
        link: "/blog/ai-2025-next-generation-breakthroughs",
        type: "Blog Post",
        category: "breakthroughs",
        readTime: "15 min",
        badge: "BREAKTHROUGH",
        color: "from-red-500 to-pink-500"
      }
    ],
    'success-stories': [
      {
        title: "🏆 Global Tech Giant Transformation: 900% ROI",
        description: "Learn how Fortune 500 companies achieve unprecedented success",
        link: "/case-studies/ai-2025-global-tech-giant-transformation",
        type: "Case Study",
        category: "success-stories",
        readTime: "12 min",
        badge: "SUCCESS STORY",
        color: "from-green-500 to-emerald-500"
      }
    ],
    implementation: [
      {
        title: "📚 AI 2025 Ultimate Implementation Master Guide",
        description: "Complete step-by-step guide to achieving breakthrough results",
        link: "/resources/ai-2025-ultimate-implementation-master-guide",
        type: "Resource Guide",
        category: "implementation",
        readTime: "45 min",
        badge: "MASTER GUIDE",
        color: "from-purple-500 to-pink-500"
      }
    ]
  };

  const tabs = [
    { id: 'all', label: 'All Content', count: content.all.length },
    { id: 'breakthroughs', label: 'Breakthroughs', count: content.breakthroughs.length },
    { id: 'success-stories', label: 'Success Stories', count: content['success-stories'].length },
    { id: 'implementation', label: 'Implementation', count: content.implementation.length }
  ];

  const currentContent = content[activeTab as keyof typeof content];

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 px-6 py-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-900">🎯 New Content Discovery</h2>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-600">Live Updates</span>
          </div>
        </div>
        <p className="text-sm text-gray-600 mt-1">
          Discover the latest AI breakthroughs, success stories, and implementation guides
        </p>
      </div>

      <div className="p-6">
        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {tab.label}
              <span className="ml-2 bg-white bg-opacity-20 px-2 py-0.5 rounded-full text-xs">
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentContent.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="group block bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all duration-200 hover:border-blue-300"
            >
              <div className="flex items-start justify-between mb-3">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gradient-to-r ${item.color} text-white`}>
                  {item.badge}
                </span>
                <span className="text-xs text-gray-500">{item.readTime}</span>
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                {item.title}
              </h3>
              
              <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                {item.description}
              </p>
              
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                  {item.type}
                </span>
                <div className="flex items-center text-blue-600 text-sm font-medium group-hover:text-blue-700">
                  Read More
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Ready to Transform Your Business?
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Get personalized guidance on implementing these breakthrough AI technologies
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Schedule Consultation
            </Link>
            <Link
              href="/resources"
              className="bg-white text-blue-600 border border-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Browse All Resources
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewContentDiscoveryWidget2025;