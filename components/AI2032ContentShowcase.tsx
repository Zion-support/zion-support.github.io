import React from 'react';
import Link from 'next/link';

export default function AI2032ContentShowcase() {
  const content = [
    {
      title: "AI 2032 Future Predictions: The Next Quantum Leap",
      description: "Discover the revolutionary AI breakthroughs predicted for 2032, including quantum AI integration, neural interface breakthroughs, and autonomous system evolution.",
      href: "/blog/ai-2032-future-predictions-breakthrough",
      type: "Blog Post",
      category: "Predictions",
      icon: "🔮",
      featured: true
    },
    {
      title: "AI 2032 Quantum Breakthrough: 25,000% ROI Case Study",
      description: "How a Fortune 500 company achieved 25,000% ROI through early adoption of AI 2032 quantum computing integration, revolutionizing their entire business model.",
      href: "/case-studies/ai-2032-quantum-breakthrough-25000-roi",
      type: "Case Study",
      category: "Success Story",
      icon: "🏆",
      featured: true
    },
    {
      title: "AI 2032 Ultimate Implementation Master Guide",
      description: "The complete roadmap to implementing AI 2032 technologies including quantum computing integration, neural interfaces, and autonomous systems.",
      href: "/resources/ai-2032-ultimate-implementation-master-guide",
      type: "Resource",
      category: "Implementation",
      icon: "📚",
      featured: true
    }
  ];

  return (
    <div className="bg-gradient-to-br from-purple-50 via-white to-blue-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-semibold mb-4">
            🚀 AI 2032 BREAKTHROUGH CONTENT
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            The Future of AI is Here
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive AI 2032 content library featuring breakthrough predictions, 
            success stories, and implementation guides that will transform your organization.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {content.map((item, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-8 shadow-lg border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                item.featured ? 'border-purple-200 ring-2 ring-purple-100' : 'border-gray-100'
              }`}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">{item.icon}</span>
                </div>
                <div>
                  <div className="text-sm font-semibold text-purple-600 uppercase tracking-wide">
                    {item.type}
                  </div>
                  <div className="text-sm text-gray-500">{item.category}</div>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {item.title}
              </h3>
              
              <p className="text-gray-600 mb-6">
                {item.description}
              </p>
              
              <Link
                href={item.href}
                className="inline-flex items-center text-purple-600 hover:text-purple-700 font-semibold transition-colors"
              >
                Read More
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        {/* Key Statistics */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">AI 2032 Impact Metrics</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">25,000%</div>
              <div className="text-gray-600">Maximum ROI Achieved</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">10,000x</div>
              <div className="text-gray-600">Processing Speed Increase</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
              <div className="text-gray-600">Decision Accuracy Improvement</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">18</div>
              <div className="text-gray-600">Months to Full Implementation</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">
            Ready to Transform Your Organization with AI 2032?
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Join the AI revolution and achieve breakthrough results with our comprehensive implementation guide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/resources/ai-2032-ultimate-implementation-master-guide"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Implementation Guide
            </Link>
            <Link
              href="/contact"
              className="bg-purple-500 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}