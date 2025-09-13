import React from 'react';
import Link from 'next/link';

export default function AI2025ContentDiscoveryWidget() {
  const featuredContent = [
    {
      title: "AI 2025 Ultimate Breakthrough Revolution",
      description: "Revolutionary AI breakthrough delivering 10,000% ROI, 99.9% accuracy, and 10,000x faster processing.",
      href: "/ai-2025-ultimate-breakthrough-revolution",
      icon: "🚀",
      badge: "BREAKTHROUGH",
      badgeColor: "bg-red-500",
      stats: "10,000% ROI"
    },
    {
      title: "Global Transformation Success Story",
      description: "Fortune 500 company achieves 10,000% ROI in just 6 months using our revolutionary AI technology.",
      href: "/case-studies/ai-2025-global-transformation-breakthrough",
      icon: "🏆",
      badge: "SUCCESS",
      badgeColor: "bg-green-500",
      stats: "6 months ROI"
    },
    {
      title: "Revolutionary Trends & Predictions",
      description: "Comprehensive analysis of AI trends and breakthrough predictions for 2025 with 95% accuracy.",
      href: "/blog/ai-2025-revolutionary-trends-predictions",
      icon: "🔮",
      badge: "PREDICTIONS",
      badgeColor: "bg-purple-500",
      stats: "95% Accuracy"
    },
    {
      title: "Quantum-Neural Fusion Technology",
      description: "Revolutionary quantum-neural fusion delivering 15,000% performance improvements and quantum supremacy.",
      href: "/quantum-computing-solutions",
      icon: "⚛️",
      badge: "QUANTUM",
      badgeColor: "bg-indigo-500",
      stats: "15,000% Performance"
    },
    {
      title: "Neural Interface Breakthrough",
      description: "Direct brain-computer interfaces enabling 95% patient recovery rates and instant knowledge transfer.",
      href: "/neural-interface-solutions",
      icon: "🧠",
      badge: "NEURAL",
      badgeColor: "bg-pink-500",
      stats: "95% Recovery Rate"
    },
    {
      title: "Reality Synthesis Engine",
      description: "Advanced AI systems that can create, manipulate, and optimize entire realities for business simulation.",
      href: "/reality-synthesis-solutions",
      icon: "🌌",
      badge: "REALITY",
      badgeColor: "bg-cyan-500",
      stats: "Infinite Testing"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
            Discover Revolutionary AI Content
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Explore our comprehensive library of breakthrough AI content, case studies, and revolutionary technologies 
            that are transforming businesses worldwide with unprecedented ROI and performance gains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredContent.map((content, index) => (
            <Link
              key={index}
              href={content.href}
              className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{content.icon}</div>
                  <span className={`${content.badgeColor} text-white px-3 py-1 rounded-full text-xs font-semibold`}>
                    {content.badge}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {content.title}
                </h3>
                
                <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                  {content.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 px-3 py-1 rounded-full">
                    <span className="text-sm font-semibold text-blue-600">{content.stats}</span>
                  </div>
                  <div className="text-blue-600 group-hover:text-blue-800 font-semibold text-sm">
                    Learn More →
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Additional Content Categories */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">More Revolutionary Content</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <Link
              href="/blog"
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center group"
            >
              <div className="text-2xl mb-2">📝</div>
              <div className="font-semibold text-gray-900 group-hover:text-blue-600">Blog Posts</div>
            </Link>
            
            <Link
              href="/case-studies"
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center group"
            >
              <div className="text-2xl mb-2">📊</div>
              <div className="font-semibold text-gray-900 group-hover:text-blue-600">Case Studies</div>
            </Link>
            
            <Link
              href="/resources"
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center group"
            >
              <div className="text-2xl mb-2">📚</div>
              <div className="font-semibold text-gray-900 group-hover:text-blue-600">Resources</div>
            </Link>
            
            <Link
              href="/webinars"
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center group"
            >
              <div className="text-2xl mb-2">🎥</div>
              <div className="font-semibold text-gray-900 group-hover:text-blue-600">Webinars</div>
            </Link>
            
            <Link
              href="/tools"
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center group"
            >
              <div className="text-2xl mb-2">🛠️</div>
              <div className="font-semibold text-gray-900 group-hover:text-blue-600">Tools</div>
            </Link>
            
            <Link
              href="/contact"
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center group"
            >
              <div className="text-2xl mb-2">💬</div>
              <div className="font-semibold text-gray-900 group-hover:text-blue-600">Contact</div>
            </Link>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-xl mb-6 text-white/90">
              Join thousands of businesses already experiencing the AI 2025 breakthrough revolution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                Start Your Revolution
              </Link>
              <Link
                href="/ai-2025-ultimate-breakthrough-revolution"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors"
              >
                Explore Technology
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}