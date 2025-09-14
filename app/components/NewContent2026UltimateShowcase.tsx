import React from 'react';
import Link from 'next/link';

const NewContent2026UltimateShowcase: React.FC = () => {
  const contentItems = [
    {
      title: "AI 2026: Next-Generation Autonomous Systems Revolution",
      description: "Discover how 2026's autonomous systems are achieving 99.9% uptime while reducing costs by 85% and increasing productivity by 400%.",
      category: "Blog Post",
      readTime: "14 min read",
      href: "/blog/ai-2026-next-generation-autonomous-systems-revolution",
      icon: "🤖",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "AI Transformation 2026: $75M Annual Savings Success Story",
      description: "Learn how a Fortune 500 company achieved $75 million in annual savings through strategic AI implementation in just 8 months.",
      category: "Case Study",
      readTime: "18 min read",
      href: "/case-studies/ai-transformation-2026-ultimate-success-story",
      icon: "💼",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "AI Implementation Ultimate Guide 2026: Complete Roadmap",
      description: "Complete roadmap to AI success with proven strategies, technology selection, and implementation frameworks.",
      category: "Implementation Guide",
      readTime: "25 min read",
      href: "/resources/ai-implementation-ultimate-guide-2026",
      icon: "📚",
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">✨ NEW 2026 CONTENT</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Revolutionary AI Content
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              That Drives Results
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover the latest AI insights, success stories, and implementation guides that are transforming businesses in 2026.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {contentItems.map((item, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              {/* Header */}
              <div className={`bg-gradient-to-r ${item.color} p-6 text-white`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">{item.icon}</div>
                  <span className="bg-white bg-opacity-20 text-white text-xs font-medium px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2 leading-tight">
                  {item.title}
                </h3>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {item.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <Link 
                    href={item.href}
                    className="text-blue-600 hover:text-blue-800 font-semibold transition-colors group-hover:underline"
                  >
                    Read More →
                  </Link>
                  <span className="text-sm text-gray-500">{item.readTime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Key Benefits */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Why Our 2026 Content Drives Results
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Data-Driven Insights</h4>
              <p className="text-sm text-gray-600">Based on analysis of 500+ successful implementations</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Proven Strategies</h4>
              <p className="text-sm text-gray-600">Battle-tested approaches that deliver real results</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Actionable Steps</h4>
              <p className="text-sm text-gray-600">Clear, implementable guidance you can use today</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Future-Ready</h4>
              <p className="text-sm text-gray-600">Cutting-edge insights for tomorrow's challenges</p>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-8 text-center">
            Content That Delivers Results
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">1,200%</div>
              <div className="text-blue-200">Average ROI</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">89%</div>
              <div className="text-blue-200">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">8</div>
              <div className="text-blue-200">Months Implementation</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">$2.3M</div>
              <div className="text-blue-200">Average Savings</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Business?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join hundreds of companies already using our AI insights to achieve extraordinary results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
            >
              Explore All Content
            </Link>
            <Link
              href="/contact"
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors text-lg"
            >
              Get Implementation Help
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewContent2026UltimateShowcase;