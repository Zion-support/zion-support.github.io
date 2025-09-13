import React from 'react';
import Link from 'next/link';

export default function UltimateContentShowcase2026() {
  const contentItems = [
    {
      title: "AI 2025 Ultimate Breakthrough Revolution",
      description: "Experience the most revolutionary AI breakthrough delivering 10,000% ROI, 99.9% accuracy, and 10,000x faster processing.",
      href: "/ai-2025-ultimate-breakthrough-revolution",
      badge: "BREAKTHROUGH",
      badgeColor: "bg-red-500",
      icon: "🚀",
      metrics: "10,000% ROI"
    },
    {
      title: "AI 2026 Revolutionary Breakthrough Content",
      description: "Quantum-neural fusion technology delivering 15,000% ROI, 99.7% accuracy, and transcendent intelligence.",
      href: "/ai-2026-breakthrough-revolutionary-content",
      badge: "REVOLUTIONARY",
      badgeColor: "bg-cyan-500",
      icon: "🌌",
      metrics: "15,000% ROI"
    },
    {
      title: "Global Transformation Breakthrough Case Study",
      description: "How a Fortune 500 company achieved 10,000% ROI in just 6 months using our AI breakthrough technology.",
      href: "/case-studies/ai-2025-global-transformation-breakthrough",
      badge: "SUCCESS STORY",
      badgeColor: "bg-green-500",
      icon: "🏆",
      metrics: "10,000% ROI"
    },
    {
      title: "Quantum-Neural Fusion Success Story",
      description: "Revolutionary quantum computing breakthrough achieving 15,000% ROI with transcendent intelligence.",
      href: "/case-studies/ai-2026-quantum-neural-fusion-success",
      badge: "QUANTUM",
      badgeColor: "bg-purple-500",
      icon: "⚛️",
      metrics: "15,000% ROI"
    },
    {
      title: "AI 2027 Future Predictions",
      description: "Revolutionary predictions for AI 2027 featuring neural synthesis and quantum-AI fusion breakthroughs.",
      href: "/ai-2027-future-predictions-revolutionary",
      badge: "FUTURE",
      badgeColor: "bg-blue-500",
      icon: "🔮",
      metrics: "99.7% Accuracy"
    },
    {
      title: "AI 2028-2030 Quantum Neural Breakthroughs",
      description: "Ultimate quantum neural fusion technology delivering infinite ROI and universal consciousness.",
      href: "/ai-2028-2030-quantum-neural-breakthroughs",
      badge: "ULTIMATE",
      badgeColor: "bg-indigo-500",
      icon: "🧠",
      metrics: "∞ ROI"
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-8">
            <span className="text-cyan-400 font-semibold text-sm">🌟 ULTIMATE CONTENT SHOWCASE 2026</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Revolutionary AI Content Library
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Discover our complete collection of breakthrough AI content, case studies, and revolutionary technologies 
            that are transforming businesses worldwide.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {contentItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              {/* Badge */}
              <div className="absolute top-4 right-4">
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold text-white ${item.badgeColor}`}>
                  {item.badge}
                </span>
              </div>

              {/* Icon */}
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                {item.description}
              </p>

              {/* Metrics */}
              <div className="flex items-center justify-between">
                <span className="text-cyan-400 font-bold text-lg">
                  {item.metrics}
                </span>
                <svg className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          ))}
        </div>

        {/* Featured Content */}
        <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-8 border border-cyan-500/30">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4 text-cyan-400">
              🌟 Featured: AI 2025 Ultimate Breakthrough Revolution
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              The most revolutionary AI breakthrough in history, delivering unprecedented results for businesses worldwide.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl font-bold text-yellow-400 mb-2">10,000%</div>
                <div className="text-sm text-gray-300">Guaranteed ROI</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
                <div className="text-sm text-gray-300">Accuracy Rate</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl font-bold text-cyan-400 mb-2">10,000x</div>
                <div className="text-sm text-gray-300">Faster Processing</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/ai-2025-ultimate-breakthrough-revolution"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105"
              >
                🚀 Experience the Revolution
              </Link>
              <Link 
                href="/content-showcase"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-cyan-900 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300"
              >
                📚 View All Content
              </Link>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold mb-4 text-white">
            Ready to Transform Your Business?
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses already experiencing the AI revolution. 
            Get your personalized transformation roadmap today.
          </p>
          
          <Link 
            href="/contact"
            className="inline-flex items-center bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105"
          >
            🚀 Start Your Transformation
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}