import React, { useState } from 'react';
import Link from 'next/link';

export default function InteractiveContentDiscoveryWidget2025() {
  const [activeTab, setActiveTab] = useState('trends');

  const content = {
    trends: {
      title: "AI 2025 Revolutionary Breakthrough Trends",
      description: "Comprehensive analysis of breakthrough AI trends transforming industries worldwide",
      link: "/blog/ai-2025-revolutionary-breakthrough-trends",
      icon: "🔮",
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50",
      borderColor: "border-purple-200",
      stats: ["5000% Average ROI", "99.9% Accuracy", "10,000x Faster Processing"]
    },
    finance: {
      title: "Global Finance Transformation - 1500% ROI",
      description: "Real-world case study of revolutionary AI implementation in finance",
      link: "/case-studies/ai-2025-global-finance-transformation-breakthrough",
      icon: "💰",
      color: "from-green-500 to-blue-500",
      bgColor: "from-green-50 to-blue-50",
      borderColor: "border-green-200",
      stats: ["1500% ROI", "99.8% Trading Accuracy", "$2.5B Revenue Increase"]
    },
    toolkit: {
      title: "Ultimate Implementation Toolkit",
      description: "Complete guide with proven frameworks and templates for AI implementation",
      link: "/resources/ai-2025-ultimate-implementation-toolkit",
      icon: "🛠️",
      color: "from-blue-500 to-indigo-500",
      bgColor: "from-blue-50 to-indigo-50",
      borderColor: "border-blue-200",
      stats: ["Proven Frameworks", "Step-by-Step Guides", "ROI Calculators"]
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 text-sm font-semibold mb-6">
            🚀 NEW REVOLUTIONARY CONTENT 2025
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Discover Revolutionary
            <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              AI Breakthrough Content
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our latest revolutionary content covering AI 2025 trends, real-world success stories, 
            and implementation toolkits that are transforming businesses worldwide.
          </p>
        </div>

        {/* Interactive Tabs */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
          
          {/* Tab Navigation */}
          <div className="flex flex-col sm:flex-row border-b border-gray-200">
            {Object.entries(content).map(([key, item]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex-1 px-6 py-4 text-left transition-all duration-300 ${
                  activeTab === key
                    ? `bg-gradient-to-r ${item.color} text-white`
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <div className="font-semibold">{item.title.split(' - ')[0]}</div>
                    <div className={`text-sm ${activeTab === key ? 'text-white/80' : 'text-gray-500'}`}>
                      {key === 'trends' && 'Revolutionary Trends'}
                      {key === 'finance' && '1500% ROI Success'}
                      {key === 'toolkit' && 'Implementation Ready'}
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Content Preview */}
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <span className="text-4xl">{content[activeTab].icon}</span>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">{content[activeTab].title}</h3>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${content[activeTab].color} text-white`}>
                        {activeTab === 'trends' && 'BREAKTHROUGH'}
                        {activeTab === 'finance' && 'SUCCESS STORY'}
                        {activeTab === 'toolkit' && 'IMPLEMENTATION'}
                      </span>
                    </div>
                  </div>
                </div>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  {content[activeTab].description}
                </p>
                
                <div className="space-y-3">
                  {content[activeTab].stats.map((stat, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${content[activeTab].color}`}></div>
                      <span className="text-gray-700 font-medium">{stat}</span>
                    </div>
                  ))}
                </div>
                
                <Link 
                  href={content[activeTab].link}
                  className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${content[activeTab].color} text-white font-bold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                >
                  {activeTab === 'trends' && '🔮 Read Revolutionary Trends'}
                  {activeTab === 'finance' && '💰 View Success Story'}
                  {activeTab === 'toolkit' && '🛠️ Download Toolkit'}
                </Link>
              </div>
              
              {/* Visual Preview */}
              <div className={`bg-gradient-to-br ${content[activeTab].bgColor} rounded-xl p-8 border ${content[activeTab].borderColor}`}>
                <div className="text-center">
                  <div className="text-6xl mb-4">{content[activeTab].icon}</div>
                  <h4 className="text-xl font-bold text-gray-800 mb-4">
                    {activeTab === 'trends' && 'Revolutionary AI Trends'}
                    {activeTab === 'finance' && 'Finance Transformation'}
                    {activeTab === 'toolkit' && 'Implementation Framework'}
                  </h4>
                  <div className="space-y-3">
                    {activeTab === 'trends' && (
                      <>
                        <div className="bg-white/50 rounded-lg p-3">
                          <div className="text-sm font-semibold text-gray-700">Quantum-AI Fusion</div>
                          <div className="text-xs text-gray-600">10,000x faster processing</div>
                        </div>
                        <div className="bg-white/50 rounded-lg p-3">
                          <div className="text-sm font-semibold text-gray-700">Autonomous Systems</div>
                          <div className="text-xs text-gray-600">99.9% accuracy rate</div>
                        </div>
                        <div className="bg-white/50 rounded-lg p-3">
                          <div className="text-sm font-semibold text-gray-700">Transcendent Intelligence</div>
                          <div className="text-xs text-gray-600">Infinite scalability</div>
                        </div>
                      </>
                    )}
                    {activeTab === 'finance' && (
                      <>
                        <div className="bg-white/50 rounded-lg p-3">
                          <div className="text-sm font-semibold text-gray-700">Trading Accuracy</div>
                          <div className="text-xs text-gray-600">99.8% success rate</div>
                        </div>
                        <div className="bg-white/50 rounded-lg p-3">
                          <div className="text-sm font-semibold text-gray-700">Revenue Increase</div>
                          <div className="text-xs text-gray-600">$2.5B growth</div>
                        </div>
                        <div className="bg-white/50 rounded-lg p-3">
                          <div className="text-sm font-semibold text-gray-700">ROI Achievement</div>
                          <div className="text-xs text-gray-600">1500% return</div>
                        </div>
                      </>
                    )}
                    {activeTab === 'toolkit' && (
                      <>
                        <div className="bg-white/50 rounded-lg p-3">
                          <div className="text-sm font-semibold text-gray-700">Assessment Framework</div>
                          <div className="text-xs text-gray-600">Comprehensive analysis tools</div>
                        </div>
                        <div className="bg-white/50 rounded-lg p-3">
                          <div className="text-sm font-semibold text-gray-700">Implementation Guide</div>
                          <div className="text-xs text-gray-600">Step-by-step roadmap</div>
                        </div>
                        <div className="bg-white/50 rounded-lg p-3">
                          <div className="text-sm font-semibold text-gray-700">ROI Calculator</div>
                          <div className="text-xs text-gray-600">Proven metrics & formulas</div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/blog" className="group">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 group-hover:border-purple-300">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-purple-600">All Blog Posts</h3>
              <p className="text-gray-600 mb-4">Explore our complete library of AI insights and breakthrough analysis.</p>
              <div className="text-purple-600 font-semibold group-hover:text-purple-700">Browse All Posts →</div>
            </div>
          </Link>
          <Link href="/case-studies" className="group">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 group-hover:border-green-300">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-green-600">Success Stories</h3>
              <p className="text-gray-600 mb-4">Real-world case studies showcasing revolutionary AI implementations.</p>
              <div className="text-green-600 font-semibold group-hover:text-green-700">View Case Studies →</div>
            </div>
          </Link>
          <Link href="/resources" className="group">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 group-hover:border-blue-300">
              <div className="text-4xl mb-4">🛠️</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600">Implementation Resources</h3>
              <p className="text-gray-600 mb-4">Toolkits, guides, and frameworks for successful AI implementation.</p>
              <div className="text-blue-600 font-semibold group-hover:text-blue-700">Access Resources →</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}