import React from 'react';
import Link from 'next/link';

export default function UltimateContentShowcase2025() {
  const contentItems = [
    {
      title: "AI 2025 Ultimate Breakthrough Revolution",
      description: "Revolutionary AI technologies delivering unprecedented results across industries",
      href: "/ai-2025-ultimate-breakthrough-revolution",
      category: "Breakthrough",
      roi: "10,000%",
      icon: "🚀",
      gradient: "from-red-500 to-pink-500",
      bgGradient: "from-red-50 to-pink-50",
      borderColor: "border-red-200"
    },
    {
      title: "AI 2025 Revolutionary Trends & Predictions",
      description: "Comprehensive analysis of AI trends and predictions for 2025 with 95% accuracy",
      href: "/blog/ai-2025-revolutionary-trends-predictions",
      category: "Predictions",
      roi: "2,500%",
      icon: "🔮",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
      borderColor: "border-purple-200"
    },
    {
      title: "Quantum Computing Solutions 2025",
      description: "Next-generation quantum computing solutions delivering 15,000% performance gains",
      href: "/quantum-computing-solutions",
      category: "Quantum",
      roi: "15,000%",
      icon: "⚛️",
      gradient: "from-indigo-500 to-purple-500",
      bgGradient: "from-indigo-50 to-purple-50",
      borderColor: "border-indigo-200"
    },
    {
      title: "Neural Interface Revolution",
      description: "Direct brain-computer integration with 99.7% accuracy and 3,000% ROI",
      href: "/neural-interface-solutions",
      category: "Neural",
      roi: "3,000%",
      icon: "🧠",
      gradient: "from-green-500 to-teal-500",
      bgGradient: "from-green-50 to-teal-50",
      borderColor: "border-green-200"
    },
    {
      title: "Automation Mastery Guide",
      description: "Complete automation implementation guide delivering 10,000x productivity gains",
      href: "/automation-solutions",
      category: "Automation",
      roi: "8,500%",
      icon: "🤖",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
      borderColor: "border-blue-200"
    },
    {
      title: "Enterprise Transformation Case Studies",
      description: "Real-world success stories from Fortune 500 companies achieving massive ROI",
      href: "/case-studies",
      category: "Case Studies",
      roi: "5,000%",
      icon: "🏆",
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-50 to-red-50",
      borderColor: "border-orange-200"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-semibold mb-6 animate-pulse">
            🚀 ULTIMATE CONTENT SHOWCASE 2025
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Revolutionary AI Content
            <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Library
            </span>
          </h2>
          
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Access the most comprehensive collection of AI breakthroughs, quantum computing solutions, 
            and revolutionary automation technologies. Each piece of content delivers proven ROI 
            and implementation strategies.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {contentItems.map((item, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 ${item.borderColor} ${item.bgGradient}`}
            >
              {/* Category Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${item.gradient} text-white`}>
                  {item.category}
                </span>
                <span className="text-3xl">{item.icon}</span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                {item.description}
              </p>

              {/* ROI Badge */}
              <div className="flex items-center justify-between mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">{item.roi}</div>
                  <div className="text-xs text-gray-600">ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">99.9%</div>
                  <div className="text-xs text-gray-600">Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">NEW</div>
                  <div className="text-xs text-gray-600">Content</div>
                </div>
              </div>

              {/* CTA Button */}
              <Link
                href={item.href}
                className={`block w-full bg-gradient-to-r ${item.gradient} text-white text-center py-3 rounded-lg font-semibold hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg`}
              >
                Explore Content
              </Link>
            </div>
          ))}
        </div>

        {/* Featured Content Section */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 md:p-12 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Get Complete Access to All Content
            </h3>
            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
              Join thousands of business leaders who have transformed their organizations 
              using our revolutionary AI content and implementation guides.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-purple-200">Content Pieces</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">50,000+</div>
                <div className="text-purple-200">Business Leaders</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">2,500%</div>
                <div className="text-purple-200">Average ROI</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/ai-2025-ultimate-content-revolution"
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Access All Content
              </Link>
              <Link
                href="/contact"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-105"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>

        {/* Additional Resources */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link
            href="/resources"
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center"
          >
            <div className="text-4xl mb-4">📚</div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">Implementation Guides</h4>
            <p className="text-gray-600 text-sm">Step-by-step implementation strategies</p>
          </Link>

          <Link
            href="/tools"
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center"
          >
            <div className="text-4xl mb-4">🛠️</div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">ROI Calculators</h4>
            <p className="text-gray-600 text-sm">Interactive tools and calculators</p>
          </Link>

          <Link
            href="/webinars"
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center"
          >
            <div className="text-4xl mb-4">🔥</div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">Live Webinars</h4>
            <p className="text-gray-600 text-sm">Expert-led training sessions</p>
          </Link>

          <Link
            href="/contact"
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center"
          >
            <div className="text-4xl mb-4">💬</div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">Expert Support</h4>
            <p className="text-gray-600 text-sm">Direct access to AI experts</p>
          </Link>
        </div>
      </div>
    </section>
  );
}