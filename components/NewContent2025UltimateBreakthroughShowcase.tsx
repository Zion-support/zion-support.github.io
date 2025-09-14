import React from 'react';
import Link from 'next/link';

export default function NewContent2025UltimateBreakthroughShowcase() {
  const featuredContent = [
    {
      title: "AI 2025 Ultimate Breakthrough Revolution",
      description: "Discover revolutionary AI breakthroughs with 10,000% ROI success stories and cutting-edge implementations.",
      href: "/ai-2025-ultimate-breakthrough-revolution",
      image: "🚀",
      category: "BREAKTHROUGH",
      roi: "10,000%",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "AI 2026 Future Predictions Interactive",
      description: "Explore revolutionary AI predictions for 2026 with interactive insights and breakthrough technologies.",
      href: "/ai-2026-future-predictions-interactive",
      image: "🔮",
      category: "INTERACTIVE",
      roi: "15,000%",
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Quantum Computing Solutions 2030",
      description: "Revolutionary quantum computing solutions with infinite scalability and unprecedented computational power.",
      href: "/quantum-computing-solutions-breakthrough-2030",
      image: "⚛️",
      category: "QUANTUM",
      roi: "∞",
      color: "from-cyan-500 to-blue-500"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-sm font-bold mb-6">
            🚀 NEW ULTIMATE BREAKTHROUGH CONTENT
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Revolutionary AI Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our latest breakthrough content featuring revolutionary AI technologies, 
            interactive predictions, and quantum computing solutions that will transform your business.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featuredContent.map((content, index) => (
            <div key={index} className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${content.color} rounded-2xl flex items-center justify-center text-white text-2xl font-bold mr-4`}>
                  {content.image}
                </div>
                <div>
                  <div className="text-sm font-bold text-purple-600 mb-1">{content.category}</div>
                  <h3 className="text-xl font-bold text-gray-900">{content.title}</h3>
                </div>
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                {content.description}
              </p>
              
              <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-4 mb-6">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-purple-600">{content.roi}</div>
                    <div className="text-sm text-gray-600">Expected ROI</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600">99.9%</div>
                    <div className="text-sm text-gray-600">Success Rate</div>
                  </div>
                </div>
              </div>
              
              <Link 
                href={content.href}
                className={`inline-flex items-center w-full justify-center px-6 py-3 bg-gradient-to-r ${content.color} text-white rounded-xl font-bold hover:shadow-lg transition-all duration-300`}
              >
                Explore Content
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/content-showcase"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-bold text-lg hover:shadow-lg transition-all duration-300"
          >
            View All Revolutionary Content
            <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}