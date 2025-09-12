import React from 'react';
import { Link } from 'react-router-dom';

export default function AI2026BreakthroughContentShowcase() {
  const featuredContent = [
    {
      title: "AI 2026 Breakthrough Innovations",
      description: "Revolutionary technologies reshaping industries with 5000%+ ROI. From neural interfaces to quantum-AI fusion.",
      href: "/blog/ai-2026-breakthrough-innovations",
      category: "Blog",
      roi: "5000%",
      icon: "🧠",
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      title: "Global Enterprise Transformation",
      description: "How a Fortune 500 company achieved 5000% ROI through comprehensive AI 2026 breakthrough innovations.",
      href: "/case-studies/ai-2026-global-enterprise-transformation-breakthrough",
      category: "Case Study",
      roi: "5000%",
      icon: "🏆",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      title: "AI 2027 Future Predictions",
      description: "Revolutionary technologies that will reshape industries by 2027. From quantum consciousness to autonomous cities.",
      href: "/blog/ai-2027-future-predictions",
      category: "Predictions",
      roi: "10,000%",
      icon: "🔮",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      title: "Quantum Computing Solutions",
      description: "Breakthrough quantum computing solutions delivering 8000%+ ROI. Revolutionary quantum-AI integration.",
      href: "/quantum-computing-solutions-breakthrough-2026",
      category: "Solutions",
      roi: "8000%",
      icon: "⚛️",
      gradient: "from-indigo-500 to-purple-600"
    }
  ];

  const additionalContent = [
    {
      title: "Neural Interface Healthcare",
      description: "95% patient recovery success with neural interface technology",
      href: "/case-studies/ai-2026-neural-interface-healthcare-breakthrough",
      category: "Healthcare",
      roi: "4000%",
      icon: "🏥"
    },
    {
      title: "Quantum AI Financial Services",
      description: "12,000% ROI in financial portfolio optimization",
      href: "/case-studies/ai-2026-quantum-ai-breakthrough",
      category: "Finance",
      roi: "12,000%",
      icon: "💰"
    },
    {
      title: "Autonomous Manufacturing",
      description: "85% reduction in production downtime with autonomous systems",
      href: "/case-studies/ai-2026-autonomous-manufacturing-breakthrough",
      category: "Manufacturing",
      roi: "3000%",
      icon: "🏭"
    },
    {
      title: "Multimodal AI Revolution",
      description: "2500% ROI through enhanced customer experience",
      href: "/blog/ai-2026-multimodal-revolution",
      category: "AI Technology",
      roi: "2500%",
      icon: "🎯"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-indigo-100 text-indigo-800 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-semibold">🚀 BREAKTHROUGH CONTENT SHOWCASE</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Revolutionary AI 2026 Content
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Explore our comprehensive collection of breakthrough AI content, featuring real-world case studies, 
            innovative technologies, and implementation guides that are transforming industries worldwide.
          </p>
        </div>

        {/* Featured Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {featuredContent.map((content, index) => (
            <div key={index} className="group">
              <Link to={content.href} className="block">
                <div className={`bg-gradient-to-br ${content.gradient} rounded-2xl p-8 text-white transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl`}>
                  <div className="flex items-start justify-between mb-6">
                    <div className="text-5xl">{content.icon}</div>
                    <div className="text-right">
                      <div className="text-2xl font-bold">{content.roi}</div>
                      <div className="text-sm opacity-90">ROI</div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <span className="inline-block bg-white bg-opacity-20 rounded-full px-3 py-1 text-sm font-semibold mb-3">
                      {content.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-yellow-300 transition-colors">
                    {content.title}
                  </h3>
                  <p className="text-lg opacity-90 mb-6 leading-relaxed">
                    {content.description}
                  </p>
                  <div className="flex items-center text-sm font-semibold group-hover:text-yellow-300 transition-colors">
                    Learn More
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Additional Content Grid */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">More Breakthrough Content</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalContent.map((content, index) => (
              <div key={index} className="group">
                <Link to={content.href} className="block">
                  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:scale-105 border border-gray-200">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-3xl">{content.icon}</div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-green-600">{content.roi}</div>
                        <div className="text-xs text-gray-500">ROI</div>
                      </div>
                    </div>
                    <div className="mb-3">
                      <span className="inline-block bg-gray-100 text-gray-700 rounded-full px-3 py-1 text-xs font-semibold">
                        {content.category}
                      </span>
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                      {content.title}
                    </h4>
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                      {content.description}
                    </p>
                    <div className="flex items-center text-sm font-semibold text-indigo-600 group-hover:text-indigo-800 transition-colors">
                      Read More
                      <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join thousands of companies already achieving 2000-8000% ROI with these revolutionary AI technologies. 
            Start your transformation journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/ai-implementation-guide-2025"
              className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors text-lg shadow-lg"
            >
              Get Implementation Guide
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-indigo-600 transition-colors text-lg"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}