import React from 'react';
import Link from 'next/link';

export default function AI2033ContentShowcase() {
  const contentItems = [
    {
      title: "AI 2033 Future Predictions: Revolutionary Breakthroughs",
      description: "Discover the most advanced AI technologies and predictions for 2033 that will revolutionize industries and reshape humanity.",
      type: "Blog Post",
      icon: "🔮",
      href: "/blog/ai-2033-future-predictions-breakthrough",
      featured: true,
      metrics: "15 min read • Breakthrough Predictions"
    },
    {
      title: "AI 2033 Quantum Breakthrough: 30,000% ROI Success Story",
      description: "How a Fortune 500 company achieved unprecedented returns through early adoption of AI 2033 quantum technologies.",
      type: "Case Study",
      icon: "🏆",
      href: "/case-studies/ai-2033-quantum-breakthrough-30000-roi",
      featured: true,
      metrics: "12 min read • 30,000% ROI"
    },
    {
      title: "AI 2033 Ultimate Implementation Master Guide",
      description: "The definitive roadmap to implementing AI 2033 quantum technologies with step-by-step instructions and best practices.",
      type: "Resource Guide",
      icon: "📚",
      href: "/resources/ai-2033-ultimate-implementation-master-guide",
      featured: true,
      metrics: "20 min read • Complete Guide"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
            🚀 NEW CONTENT DROP
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            AI 2033: Revolutionary Breakthrough Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our latest collection of AI 2033 content featuring breakthrough predictions, 
            success stories, and comprehensive implementation guides.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {contentItems.map((item, index) => (
            <div 
              key={index}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ${
                item.featured ? 'ring-2 ring-purple-500' : ''
              }`}
            >
              {item.featured && (
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 text-center text-sm font-semibold">
                  ⭐ FEATURED CONTENT
                </div>
              )}
              
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{item.icon}</span>
                  <div>
                    <span className="inline-block bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded-full">
                      {item.type}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {item.description}
                </p>
                
                <div className="text-sm text-gray-500 mb-4">
                  {item.metrics}
                </div>
                
                <Link 
                  href={item.href}
                  className="inline-flex items-center text-purple-600 hover:text-purple-800 font-semibold transition-colors"
                >
                  Read More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              🎯 Why AI 2033 Content Matters
            </h3>
            <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
              The AI revolution of 2033 will be the most significant transformation in human history. 
              Our content provides the insights, strategies, and tools you need to prepare for and 
              succeed in this quantum leap forward.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">30,000%</div>
                <div className="text-gray-600">Average ROI</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">95%</div>
                <div className="text-gray-600">Cost Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">500%</div>
                <div className="text-gray-600">Efficiency Gain</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/blog"
                className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
              >
                Explore All Content
              </Link>
              <Link 
                href="/contact"
                className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-colors"
              >
                Get Expert Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}