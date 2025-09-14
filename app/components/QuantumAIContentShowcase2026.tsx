import React from 'react';
import Link from 'next/link';

const QuantumAIContentShowcase2026: React.FC = () => {
  const contentItems = [
    {
      title: "AI 2026: The Quantum AI Business Revolution",
      description: "$100B Market Transformation - Organizations achieving 400-600% ROI improvements within 90 days through quantum-enhanced decision making.",
      link: "/blog/ai-2026-quantum-ai-business-revolution",
      type: "Blog Post",
      metrics: {
        roi: "400-600%",
        market: "$100B",
        speed: "1,200%",
        accuracy: "99.97%"
      },
      icon: "🚀"
    },
    {
      title: "Fortune 500 Quantum AI Transformation",
      description: "$2.8B Annual Savings in 6 Months - Comprehensive case study of quantum AI implementation achieving 567% ROI improvement.",
      link: "/case-studies/quantum-ai-fortune-500-transformation-2026",
      type: "Case Study",
      metrics: {
        savings: "$2.8B",
        roi: "567%",
        efficiency: "156%",
        uptime: "99.2%"
      },
      icon: "📊"
    },
    {
      title: "Quantum AI Implementation Guide 2026",
      description: "From Strategy to 567% ROI - Proven framework for implementing Quantum AI solutions that achieve unprecedented business transformation.",
      link: "/resources/quantum-ai-implementation-guide-2026",
      type: "Implementation Guide",
      metrics: {
        roi: "567%",
        timeframe: "6 months",
        phases: "3 phases",
        payback: "3.8 months"
      },
      icon: "📋"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🔬 QUANTUM AI 2026 BREAKTHROUGH</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Revolutionary Quantum AI Content
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Discover the future of business transformation through Quantum AI. Our latest content reveals how organizations are achieving unprecedented ROI improvements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {contentItems.map((item, index) => (
            <Link key={index} href={item.link} className="group">
              <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-4xl">{item.icon}</div>
                    <span className="bg-gradient-to-r from-purple-100 to-blue-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                      {item.type}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {Object.entries(item.metrics).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-lg font-bold text-purple-600">{value}</div>
                        <div className="text-xs text-gray-500 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center text-purple-600 font-semibold group-hover:text-purple-700 transition-colors">
                    <span>Explore Content</span>
                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Success Metrics */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Proven Results</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">567%</div>
              <div className="text-gray-600">Average ROI Improvement</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">$2.8B</div>
              <div className="text-gray-600">Average Annual Savings</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">6</div>
              <div className="text-gray-600">Months to Full ROI</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">99.2%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-lg opacity-90 mb-6">
              Join Fortune 500 companies achieving unprecedented ROI through Quantum AI transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Expert Consultation
              </Link>
              <Link
                href="/resources/quantum-ai-implementation-guide-2026"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                Download Implementation Guide
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuantumAIContentShowcase2026;