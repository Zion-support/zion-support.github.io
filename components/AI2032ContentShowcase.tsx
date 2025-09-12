import React from 'react';
import Link from 'next/link';

export default function AI2032ContentShowcase() {
  const ai2032Content = [
    {
      title: "AI 2032 Future Predictions: The Ultimate Breakthrough Guide",
      description: "Discover revolutionary AI predictions that will reshape our world by 2032. From quantum AI breakthroughs to neural interfaces.",
      href: "/ai-2032-future-predictions-breakthrough",
      category: "Future Predictions",
      icon: "🔮",
      featured: true,
      roi: "50,000%"
    },
    {
      title: "AI 2032 Quantum Breakthrough: 50,000% ROI Case Study",
      description: "Real-world results: How early adopters achieved 50,000% ROI with AI 2032 quantum breakthrough technologies.",
      href: "/case-studies/ai-2032-quantum-breakthrough-50000-roi",
      category: "Case Study",
      icon: "🏆",
      featured: true,
      roi: "50,000%"
    },
    {
      title: "AI 2032 Ultimate Implementation Master Guide",
      description: "Complete step-by-step roadmap to implement AI 2032 breakthrough technologies and achieve unprecedented ROI.",
      href: "/resources/ai-2032-ultimate-implementation-master-guide",
      category: "Implementation Guide",
      icon: "📚",
      featured: true,
      roi: "50,000%"
    }
  ];

  return (
    <div className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full text-sm font-semibold mb-4">
            🚀 AI 2032 BREAKTHROUGH CONTENT
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            The Future of AI is Here
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore revolutionary AI 2032 technologies that will transform everything. 
            From quantum AI to neural interfaces, discover the breakthrough content that's reshaping our world.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {ai2032Content.map((content, index) => (
            <div key={index} className="group">
              <Link href={content.href} className="block">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2 border border-gray-200 overflow-hidden">
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-4xl">{content.icon}</div>
                      <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {content.roi} ROI
                      </div>
                    </div>
                    
                    <div className="mb-3">
                      <span className="inline-block bg-purple-100 text-purple-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                        {content.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                      {content.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {content.description}
                    </p>
                    
                    <div className="flex items-center text-purple-600 font-semibold group-hover:text-purple-700 transition-colors">
                      Explore Content
                      <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">Ready to Lead the AI 2032 Revolution?</h3>
            <p className="text-lg mb-6 opacity-90">
              Get exclusive access to our complete AI 2032 implementation strategies and be among the first to capitalize on these breakthrough technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Implementation Support
              </Link>
              <Link 
                href="/resources/ai-2032-ultimate-implementation-master-guide"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                Download Master Guide
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}