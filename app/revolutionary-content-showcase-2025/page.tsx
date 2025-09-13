import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Revolutionary Content Showcase 2025 - Zion Tech Group',
  description: 'Explore our revolutionary AI content showcase featuring breakthrough technologies, case studies, and implementation guides delivering unprecedented ROI.',
  keywords: ['Content Showcase', 'AI 2025', 'Revolutionary Content', 'Breakthrough Technologies', 'Case Studies', 'Implementation Guides'],
};

export default function RevolutionaryContentShowcase2025() {
  const contentItems = [
    {
      title: "AI 2025 Ultimate Breakthrough Revolution",
      description: "Experience the most revolutionary AI technologies delivering 10,000% ROI",
      href: "/ai-2025-ultimate-breakthrough-revolution",
      category: "Breakthrough",
      roi: "10,000%",
      color: "from-red-500 to-pink-500",
      icon: "🚀"
    },
    {
      title: "AI 2026 Quantum-Neural Fusion",
      description: "Revolutionary quantum computing fused with neural networks delivering 15,000% ROI",
      href: "/ai-2026-quantum-neural-fusion-revolutionary-breakthrough",
      category: "Quantum",
      roi: "15,000%",
      color: "from-cyan-500 to-purple-500",
      icon: "⚛️"
    },
    {
      title: "AI 2027 Future Predictions",
      description: "Comprehensive predictions and trends for the future of AI technology",
      href: "/ai-2027-future-predictions-revolutionary",
      category: "Predictions",
      roi: "5,000%",
      color: "from-purple-500 to-blue-500",
      icon: "🔮"
    },
    {
      title: "AI 2028 Revolutionary Breakthroughs",
      description: "Advanced AI systems and autonomous technologies transforming industries",
      href: "/ai-2028-breakthrough-content-showcase",
      category: "Revolutionary",
      roi: "8,000%",
      color: "from-indigo-500 to-purple-500",
      icon: "🌟"
    },
    {
      title: "AI 2029 Singularity Breakthrough",
      description: "The ultimate AI singularity event and consciousness evolution",
      href: "/ai-2029-breakthrough-showcase",
      category: "Singularity",
      roi: "∞",
      color: "from-pink-500 to-rose-500",
      icon: "🌌"
    },
    {
      title: "AI 2030 Future Vision",
      description: "Comprehensive vision of AI's future impact on humanity and technology",
      href: "/ai-2030-future-predictions",
      category: "Vision",
      roi: "Infinite",
      color: "from-blue-500 to-cyan-500",
      icon: "🔮"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 mb-6">
              <span className="text-purple-400 font-semibold text-sm">📚 REVOLUTIONARY CONTENT</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Revolutionary Content Showcase 2025
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover the most revolutionary AI content ever created. Breakthrough technologies, 
              case studies, and implementation guides delivering unprecedented ROI and transformation.
            </p>
          </div>
        </div>
      </div>

      {/* Content Grid */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">
            Revolutionary Content Collection
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contentItems.map((item, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-8 rounded-xl border border-gray-700/30 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl">{item.icon}</div>
                    <div className="flex space-x-2">
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-xs font-semibold rounded-full">
                        {item.category}
                      </span>
                      <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-semibold rounded-full">
                        {item.roi} ROI
                      </span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-purple-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 mb-6 text-sm">
                    {item.description}
                  </p>
                  <Link 
                    href={item.href}
                    className={`inline-block w-full bg-gradient-to-r ${item.color} hover:opacity-90 text-white font-bold py-3 px-6 rounded-lg text-center transition-all duration-300`}
                  >
                    Explore Content
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Categories */}
      <div className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">
            Content Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-6xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold mb-4 text-red-400">Breakthroughs</h3>
              <p className="text-gray-300 mb-6">
                Revolutionary AI technologies that transform entire industries
              </p>
              <div className="text-sm text-gray-400">
                <span className="text-green-400 font-bold">10,000%+ ROI</span> Average
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-6xl mb-4">⚛️</div>
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">Quantum AI</h3>
              <p className="text-gray-300 mb-6">
                Quantum computing and neural fusion technologies
              </p>
              <div className="text-sm text-gray-400">
                <span className="text-green-400 font-bold">15,000%+ ROI</span> Average
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-6xl mb-4">🔮</div>
              <h3 className="text-2xl font-bold mb-4 text-purple-400">Predictions</h3>
              <p className="text-gray-300 mb-6">
                Future AI trends and technology predictions
              </p>
              <div className="text-sm text-gray-400">
                <span className="text-green-400 font-bold">95%+ Accuracy</span> Rate
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-6xl mb-4">🌌</div>
              <h3 className="text-2xl font-bold mb-4 text-pink-400">Singularity</h3>
              <p className="text-gray-300 mb-6">
                AI singularity and consciousness evolution
              </p>
              <div className="text-sm text-gray-400">
                <span className="text-green-400 font-bold">∞ ROI</span> Potential
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-purple-900/30 to-blue-900/30">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Explore Revolutionary Content?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Access our complete library of revolutionary AI content and transform your understanding 
            of artificial intelligence and its potential.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105"
            >
              Get Full Access
            </Link>
            <Link 
              href="/blog" 
              className="border-2 border-purple-400/50 hover:border-purple-400 text-purple-400 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300"
            >
              Browse All Content
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}