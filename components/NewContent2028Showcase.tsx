import React from 'react';
import Link from 'next/link';

export default function NewContent2028Showcase() {
  const featuredContent = [
    {
      title: "AI 2028: Revolutionary Future Predictions",
      description: "Discover groundbreaking AI predictions for 2028: AGI emergence, quantum AI integration, neural interfaces, and transformative technologies.",
      href: "/blog/ai-2028-future-predictions",
      category: "Future Predictions",
      readTime: "15 min read",
      isNew: true,
      icon: "🔮"
    },
    {
      title: "Energy Sector AI Transformation: 2,400% ROI",
      description: "How a global energy company achieved unprecedented efficiency gains and cost reductions using advanced AI systems.",
      href: "/case-studies/ai-2028-energy-sector-transformation-breakthrough",
      category: "Case Study",
      readTime: "12 min read",
      isNew: true,
      icon: "⚡"
    },
    {
      title: "AI 2028 Implementation Master Guide",
      description: "Complete roadmap for future-ready organizations covering AGI preparation, quantum AI integration, and neural interfaces.",
      href: "/resources/ai-2028-implementation-master-guide",
      category: "Implementation Guide",
      readTime: "25 min read",
      isNew: true,
      icon: "📚"
    }
  ];

  const additionalContent = [
    {
      title: "Quantum AI Breakthrough Technologies",
      description: "Explore the latest quantum computing and AI integration breakthroughs.",
      href: "/blog/ai-2028-quantum-breakthroughs",
      category: "Technology",
      readTime: "10 min read",
      icon: "⚛️"
    },
    {
      title: "Neural Interface Implementation Guide",
      description: "Complete guide to implementing brain-computer interface technologies.",
      href: "/resources/neural-interface-implementation-2028",
      category: "Guide",
      readTime: "18 min read",
      icon: "🧬"
    },
    {
      title: "AGI Safety Protocols & Best Practices",
      description: "Essential safety measures for artificial general intelligence development.",
      href: "/resources/agi-safety-protocols-2028",
      category: "Safety",
      readTime: "20 min read",
      icon: "🛡️"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-bold">
              NEW 2028 CONTENT
            </span>
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-bold">
              FUTURE-READY AI
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            🚀 AI 2028: Revolutionary Content Collection
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore the future of AI with our comprehensive 2028 content collection. 
            From AGI predictions to quantum AI breakthroughs, discover the technologies that will reshape our world.
          </p>
        </div>

        {/* Featured Content */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            ⭐ Featured Content
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredContent.map((content, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{content.icon}</span>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs font-semibold">
                          {content.category}
                        </span>
                        {content.isNew && (
                          <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-bold animate-pulse">
                            NEW
                          </span>
                        )}
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {content.title}
                      </h4>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {content.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{content.readTime}</span>
                    <Link
                      href={content.href}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Content */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            🔬 Additional Resources
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalContent.map((content, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-6 group">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{content.icon}</span>
                  <div>
                    <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-semibold">
                      {content.category}
                    </span>
                  </div>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {content.title}
                </h4>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {content.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{content.readTime}</span>
                  <Link
                    href={content.href}
                    className="text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">
            🎯 Ready to Transform Your Organization for 2028?
          </h3>
          <p className="text-xl text-blue-100 mb-6 max-w-2xl mx-auto">
            Get started with our comprehensive AI 2028 implementation guide and join the organizations 
            already preparing for the next era of artificial intelligence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/resources/ai-2028-implementation-master-guide"
              className="bg-yellow-400 text-purple-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors"
            >
              Get Implementation Guide
            </Link>
            <Link
              href="/contact"
              className="bg-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/30 transition-colors border border-white/30"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <p className="text-4xl font-bold text-purple-600 mb-2">2,400%</p>
            <p className="text-gray-600">ROI Achieved</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-blue-600 mb-2">85%</p>
            <p className="text-gray-600">Cost Reduction</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-green-600 mb-2">300%</p>
            <p className="text-gray-600">Efficiency Increase</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-orange-600 mb-2">100%</p>
            <p className="text-gray-600">Future-Ready</p>
          </div>
        </div>
      </div>
    </div>
  );
}