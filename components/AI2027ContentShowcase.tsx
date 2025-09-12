import React from 'react';
import Link from 'next/link';

export default function AI2027ContentShowcase() {
  const ai2027Content = [
    {
      title: "AI 2027 Future Predictions",
      description: "Comprehensive predictions for AI technology in 2027, including quantum AI, neural interfaces, and autonomous systems.",
      href: "/blog/ai-2027-future-predictions",
      category: "Predictions",
      icon: "🔮",
      featured: true,
      stats: "15 Critical Predictions"
    },
    {
      title: "AI 2027 Implementation Master Guide",
      description: "Complete roadmap for implementing AI 2027 technologies in your enterprise with step-by-step strategies.",
      href: "/resources/ai-2027-implementation-master-guide",
      category: "Implementation",
      icon: "📚",
      featured: true,
      stats: "18-Month Roadmap"
    },
    {
      title: "AI 2027 Automotive Transformation",
      description: "Case study showing 2000% ROI through AI 2027 transformation in automotive manufacturing.",
      href: "/case-studies/ai-2027-automotive-transformation-breakthrough",
      category: "Case Study",
      icon: "🚗",
      featured: true,
      stats: "2000% ROI Achieved"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full text-sm font-semibold mb-4">
            🔮 AI 2027 CONTENT SHOWCASE
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Revolutionary AI 2027 Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the future of AI with our comprehensive collection of predictions, 
            implementation guides, and real-world success stories.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {ai2027Content.map((content, index) => (
            <div 
              key={index}
              className={`bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                content.featured ? 'ring-2 ring-purple-500 ring-opacity-50' : ''
              }`}
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">{content.icon}</div>
                  {content.featured && (
                    <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                      FEATURED
                    </span>
                  )}
                </div>
                
                <div className="mb-3">
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-semibold">
                    {content.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {content.title}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {content.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-purple-600">
                    {content.stats}
                  </span>
                  <Link 
                    href={content.href}
                    className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-colors"
                  >
                    Explore →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Key Features */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Why AI 2027 Content is Essential
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-3">⚛️</div>
              <h4 className="font-semibold text-gray-900 mb-2">Quantum AI</h4>
              <p className="text-sm text-gray-600">
                Revolutionary quantum computing integration for complex optimization
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-3">🧠</div>
              <h4 className="font-semibold text-gray-900 mb-2">Neural Interfaces</h4>
              <p className="text-sm text-gray-600">
                Direct brain-computer communication for enhanced productivity
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-3">🤖</div>
              <h4 className="font-semibold text-gray-900 mb-2">Autonomous Systems</h4>
              <p className="text-sm text-gray-600">
                95% business process automation with minimal human intervention
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-3">💰</div>
              <h4 className="font-semibold text-gray-900 mb-2">Massive ROI</h4>
              <p className="text-sm text-gray-600">
                Proven 2000% ROI through comprehensive AI transformation
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Transform Your Business with AI 2027?
          </h3>
          <p className="text-xl mb-6 opacity-90">
            Join the AI revolution and achieve unprecedented growth with our proven strategies
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/resources/ai-2027-implementation-master-guide"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Implementation Guide
            </Link>
            <Link 
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>

        {/* Related Content */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            More AI 2027 Resources
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Link 
              href="/blog/ai-2026-ultimate-trends-predictions"
              className="block bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-3">
                <span className="text-2xl mr-3">📈</span>
                <h4 className="text-lg font-semibold text-gray-900">AI 2026 Trends</h4>
              </div>
              <p className="text-gray-600">
                Comprehensive analysis of AI trends and predictions for 2026
              </p>
            </Link>
            
            <Link 
              href="/case-studies/ai-2026-global-enterprise-transformation-breakthrough"
              className="block bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-3">
                <span className="text-2xl mr-3">🏢</span>
                <h4 className="text-lg font-semibold text-gray-900">Enterprise Success</h4>
              </div>
              <p className="text-gray-600">
                Real-world case study of enterprise AI transformation success
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}