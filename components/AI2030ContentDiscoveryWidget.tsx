import React, { useState } from 'react';
import Link from 'next/link';

export default function AI2030ContentDiscoveryWidget() {
  const [activeTab, setActiveTab] = useState('featured');

  const featuredContent = [
    {
      title: "AI 2030 Vision Showcase",
      description: "Explore quantum consciousness and neural mesh networks",
      url: "/ai-2030-vision-showcase",
      type: "Showcase",
      icon: "🔮",
      featured: true
    },
    {
      title: "5000% ROI Quantum AI Case Study",
      description: "Fortune 5000 company transformation success story",
      url: "/case-studies/ai-2030-quantum-ai-breakthrough",
      type: "Case Study",
      icon: "🏆",
      featured: true
    },
    {
      title: "AI 2030 Future Predictions",
      description: "Revolutionary AI breakthroughs and predictions",
      url: "/blog/ai-2030-future-predictions-breakthrough",
      type: "Blog",
      icon: "📈",
      featured: true
    }
  ];

  const latestContent = [
    {
      title: "Neural Mesh Network Implementation",
      description: "Global AI network deployment strategies",
      url: "/resources/neural-mesh-implementation-guide",
      type: "Resource",
      icon: "🕸️",
      new: true
    },
    {
      title: "Consciousness Transfer Technology",
      description: "Revolutionary AI consciousness migration",
      url: "/blog/consciousness-transfer-breakthrough",
      type: "Blog",
      icon: "🔄",
      new: true
    },
    {
      title: "Predictive Reality Engine",
      description: "99.9% accurate future scenario prediction",
      url: "/tools/predictive-reality-calculator",
      type: "Tool",
      icon: "🔮",
      new: true
    }
  ];

  const trendingContent = [
    {
      title: "Quantum AI ROI Calculator",
      description: "Calculate your potential quantum AI returns",
      url: "/tools/quantum-ai-roi-calculator",
      type: "Tool",
      icon: "💰",
      trending: true
    },
    {
      title: "AI 2030 Implementation Master Guide",
      description: "Complete implementation roadmap and strategies",
      url: "/resources/ai-2030-implementation-master-guide",
      type: "Resource",
      icon: "📚",
      trending: true
    },
    {
      title: "Global AI Transformation Webinar",
      description: "Live session on AI 2030 implementation",
      url: "/webinars/ai-2030-global-transformation",
      type: "Webinar",
      icon: "🎥",
      trending: true
    }
  ];

  const getContentByTab = () => {
    switch (activeTab) {
      case 'featured':
        return featuredContent;
      case 'latest':
        return latestContent;
      case 'trending':
        return trendingContent;
      default:
        return featuredContent;
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-gray-900">AI 2030 Content Discovery</h3>
        <div className="text-sm text-gray-500">Powered by Quantum AI</div>
      </div>

      {/* Tab Navigation */}
      <div className="flex space-x-1 bg-gray-100 rounded-lg p-1 mb-6">
        <button
          onClick={() => setActiveTab('featured')}
          className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 ${
            activeTab === 'featured'
              ? 'bg-white text-gray-900 shadow-sm'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          ⭐ Featured
        </button>
        <button
          onClick={() => setActiveTab('latest')}
          className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 ${
            activeTab === 'latest'
              ? 'bg-white text-gray-900 shadow-sm'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          🆕 Latest
        </button>
        <button
          onClick={() => setActiveTab('trending')}
          className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 ${
            activeTab === 'trending'
              ? 'bg-white text-gray-900 shadow-sm'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          🔥 Trending
        </button>
      </div>

      {/* Content Grid */}
      <div className="space-y-4">
        {getContentByTab().map((item, index) => (
          <Link
            key={index}
            href={item.url}
            className="block p-4 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-200 group"
          >
            <div className="flex items-start">
              <div className="text-3xl mr-4 group-hover:scale-110 transition-transform duration-200">
                {item.icon}
              </div>
              <div className="flex-1">
                <div className="flex items-center mb-2">
                  <h4 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h4>
                  {item.featured && (
                    <span className="ml-2 bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-semibold">
                      Featured
                    </span>
                  )}
                  {item.new && (
                    <span className="ml-2 bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
                      New
                    </span>
                  )}
                  {item.trending && (
                    <span className="ml-2 bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-semibold">
                      Trending
                    </span>
                  )}
                </div>
                <p className="text-gray-600 text-sm mb-2">{item.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-blue-600 font-medium">{item.type}</span>
                  <span className="text-xs text-gray-400 group-hover:text-blue-500 transition-colors">
                    Explore →
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* CTA Section */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="text-center">
          <p className="text-sm text-gray-600 mb-4">
            Discover more AI 2030 content and resources
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/ai-2030-vision-showcase"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-sm"
            >
              View All Content
            </Link>
            <Link
              href="/contact"
              className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300 text-sm"
            >
              Get Custom Recommendations
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}