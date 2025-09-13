import React, { useState } from 'react';
import Link from 'next/link';

export default function InteractiveContentDiscoveryWidget2025() {
<<<<<<< HEAD
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const contentCategories = [
    { id: 'all', name: 'All Content', icon: '🚀' },
    { id: 'ai-2025', name: 'AI 2025', icon: '🤖' },
    { id: 'quantum', name: 'Quantum Computing', icon: '⚛️' },
    { id: 'implementation', name: 'Implementation', icon: '🛠️' },
    { id: 'case-studies', name: 'Case Studies', icon: '📊' },
    { id: 'resources', name: 'Resources', icon: '📚' }
  ];

  const contentItems = [
    {
      id: 1,
      title: 'AI 2025 Ultimate Breakthrough Revolution',
      description: 'Revolutionary AI breakthrough delivering 10,000% ROI and 99.9% accuracy',
      category: 'ai-2025',
      type: 'breakthrough',
      roi: '10,000%',
      accuracy: '99.9%',
      link: '/ai-2025-ultimate-breakthrough-revolution',
      featured: true
    },
    {
      id: 2,
      title: 'Quantum Computing Solutions 2025',
      description: 'Revolutionary quantum computing with 15,000% ROI and quantum supremacy',
      category: 'quantum',
      type: 'solution',
      roi: '15,000%',
      accuracy: '99.99%',
      link: '/quantum-computing-solutions-2025',
      featured: true
    },
    {
      id: 3,
      title: 'AI 2025 Ultimate Implementation Toolkit',
      description: 'Complete implementation guide with 99.9% success rate',
      category: 'implementation',
      type: 'toolkit',
      roi: '10,000%',
      accuracy: '99.9%',
      link: '/resources/ai-2025-ultimate-implementation-toolkit',
      featured: true
    },
    {
      id: 4,
      title: 'Global Enterprise Transformation',
      description: 'Fortune 500 company achieved 10,000% ROI in 6 months',
      category: 'case-studies',
      type: 'case-study',
      roi: '10,000%',
      accuracy: '99.9%',
      link: '/case-studies/ai-2025-global-transformation-breakthrough',
      featured: false
    },
    {
      id: 5,
      title: 'Quantum Manufacturing Revolution',
      description: 'Manufacturing company increased efficiency by 10,000x',
      category: 'case-studies',
      type: 'case-study',
      roi: '10,000%',
      accuracy: '99.9%',
      link: '/case-studies/ai-2025-quantum-manufacturing-transformation',
      featured: false
    },
    {
      id: 6,
      title: 'AI 2025 ROI Calculator',
      description: 'Calculate your potential ROI with our advanced calculator',
      category: 'resources',
      type: 'tool',
      roi: 'Variable',
      accuracy: '99.9%',
      link: '/tools/ai-2025-roi-calculator',
      featured: false
    }
  ];

  const filteredContent = selectedCategory === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.category === selectedCategory);

  return (
    <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-20">
=======
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
>>>>>>> cursor/create-and-deploy-new-content-2c50
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
<<<<<<< HEAD
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-semibold mb-6">
            🔍 INTERACTIVE CONTENT DISCOVERY
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Discover Revolutionary AI Content
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our comprehensive library of AI 2025 breakthrough content, case studies, 
            and implementation guides. Find exactly what you need to transform your business.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {contentCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg transform scale-105'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className={`bg-gradient-to-br from-slate-800/50 to-blue-900/50 p-6 rounded-xl border transition-all duration-300 hover:transform hover:scale-105 ${
                item.featured 
                  ? 'border-yellow-500/50 shadow-lg shadow-yellow-500/20' 
                  : 'border-gray-700/50 hover:border-blue-500/50'
              }`}
            >
              {item.featured && (
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold mb-4">
                  ⭐ FEATURED
                </div>
              )}
              
              <h3 className="text-xl font-bold mb-3 text-white">
                {item.title}
              </h3>
              
              <p className="text-gray-300 mb-4 text-sm">
                {item.description}
              </p>
              
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-yellow-400">{item.roi}</div>
                    <div className="text-xs text-gray-400">ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-400">{item.accuracy}</div>
                    <div className="text-xs text-gray-400">Accuracy</div>
                  </div>
                </div>
                <div className="text-xs px-2 py-1 bg-blue-500/20 text-blue-400 rounded">
                  {item.type.replace('-', ' ').toUpperCase()}
                </div>
              </div>
              
              <Link
                href={item.link}
                className="block w-full text-center px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
              >
                Explore Content
              </Link>
            </div>
          ))}
        </div>

        {/* Additional CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-300 mb-6">
            Can't find what you're looking for? Our AI-powered content discovery can help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105"
            >
              Get Personalized Recommendations
            </Link>
            <Link
              href="/content-showcase"
              className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300"
            >
              View All Content
            </Link>
          </div>
=======
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
>>>>>>> cursor/create-and-deploy-new-content-2c50
        </div>
      </div>
    </div>
  );
}