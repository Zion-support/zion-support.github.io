import React from 'react';
import Link from 'next/link';

export default function RevolutionaryContentShowcase2026() {
  const featuredContent = [
    {
      title: "AI 2026: Neural Interface Breakthrough",
      description: "Explore revolutionary neural interface technologies that will transform human-computer interaction in 2026, enabling direct brain-to-AI communication.",
      href: "/blog/ai-2026-neural-interface-breakthrough",
      category: "Blog",
      readTime: "15 min",
      icon: "🧠",
      gradient: "from-purple-500 to-blue-500",
      badge: "NEW"
    },
    {
      title: "AI 2026: Quantum Machine Learning Revolution",
      description: "Discover how quantum computing is revolutionizing AI and machine learning, enabling breakthroughs in optimization, cryptography, and complex problem solving.",
      href: "/blog/ai-2026-quantum-machine-learning-revolution",
      category: "Blog",
      readTime: "18 min",
      icon: "⚛️",
      gradient: "from-indigo-500 to-purple-500",
      badge: "HOT"
    },
    {
      title: "Global Manufacturing Transformation Success",
      description: "Discover how a Fortune 500 manufacturing giant achieved 300% efficiency gains through comprehensive AI transformation, reducing costs by $2.3B annually.",
      href: "/case-studies/ai-2026-global-manufacturing-transformation-success",
      category: "Case Study",
      readTime: "12 min",
      icon: "🏭",
      gradient: "from-green-500 to-teal-500",
      badge: "SUCCESS"
    },
    {
      title: "AI 2026 Implementation Master Guide",
      description: "The definitive guide to implementing AI in your organization in 2026. Complete roadmap, best practices, and actionable strategies for AI transformation success.",
      href: "/resources/ai-2026-implementation-master-guide",
      category: "Resource",
      readTime: "45 min",
      icon: "📚",
      gradient: "from-blue-500 to-indigo-500",
      badge: "GUIDE"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full px-6 py-2 mb-4">
            <span className="text-sm font-bold">🚀 REVOLUTIONARY CONTENT 2026</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            The Future of AI is Here
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore groundbreaking AI technologies and success stories that are reshaping 
            industries and transforming the way we work, think, and innovate.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {featuredContent.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              {/* Badge */}
              <div className="absolute top-4 right-4 z-10">
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold ${
                  item.badge === 'NEW' ? 'bg-red-500 text-white' :
                  item.badge === 'HOT' ? 'bg-orange-500 text-white' :
                  item.badge === 'SUCCESS' ? 'bg-green-500 text-white' :
                  'bg-blue-500 text-white'
                }`}>
                  {item.badge}
                </span>
              </div>

              {/* Icon and Gradient Background */}
              <div className={`h-32 bg-gradient-to-br ${item.gradient} flex items-center justify-center`}>
                <div className="text-4xl">{item.icon}</div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <span className="font-semibold text-indigo-600">{item.category}</span>
                  <span>•</span>
                  <span>{item.readTime} read</span>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {item.description}
                </p>
                
                <Link
                  href={item.href}
                  className="inline-flex items-center text-indigo-600 font-semibold text-sm hover:text-indigo-800 transition-colors group-hover:translate-x-1 transform duration-200"
                >
                  Read More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Resources Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Complete Your AI Journey
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Access our comprehensive collection of AI resources, tools, and expert guidance 
              to accelerate your organization's AI transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-3xl mb-4">📖</div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Knowledge Base</h4>
              <p className="text-gray-600 text-sm mb-4">
                Access 200+ articles, guides, and resources covering every aspect of AI implementation.
              </p>
              <Link
                href="/resources"
                className="text-indigo-600 font-semibold text-sm hover:text-indigo-800 transition-colors"
              >
                Explore Resources →
              </Link>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-3xl mb-4">🎯</div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Success Stories</h4>
              <p className="text-gray-600 text-sm mb-4">
                Learn from real-world AI transformations and discover proven strategies for success.
              </p>
              <Link
                href="/case-studies"
                className="text-indigo-600 font-semibold text-sm hover:text-indigo-800 transition-colors"
              >
                View Case Studies →
              </Link>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-3xl mb-4">💬</div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Expert Consultation</h4>
              <p className="text-gray-600 text-sm mb-4">
                Get personalized guidance from our AI experts to accelerate your transformation.
              </p>
              <Link
                href="/contact"
                className="text-indigo-600 font-semibold text-sm hover:text-indigo-800 transition-colors"
              >
                Schedule Consultation →
              </Link>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Transform Your Organization with AI?
            </h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Join thousands of organizations that have successfully implemented AI 
              and are reaping the benefits of increased efficiency, innovation, and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                Start Your AI Journey
              </Link>
              <Link
                href="/content-showcase"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-indigo-600 transition-all duration-300 text-lg"
              >
                Explore All Content
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}