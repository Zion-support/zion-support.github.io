import React from 'react';
import Link from 'next/link';

export default function AI2025RevolutionaryContentShowcase() {
  const revolutionaryContent = [
    {
      title: "AI 2025 Synthetic Intelligence Revolution",
      description: "Revolutionary AI systems achieving human-level consciousness with unprecedented accuracy and decision-making capabilities.",
      icon: "🧠",
      roi: "3,500%",
      category: "BREAKTHROUGH",
      link: "/blog/ai-2025-synthetic-intelligence-revolution",
      gradient: "from-purple-800/50 to-pink-800/50",
      borderColor: "border-purple-500/30",
      textColor: "text-yellow-400"
    },
    {
      title: "Quantum-Neural Fusion Technology",
      description: "Breakthrough quantum computing integrated with neural networks achieving exponential processing power.",
      icon: "⚛️",
      roi: "5,000%",
      category: "REVOLUTIONARY",
      link: "/blog/quantum-neural-fusion-2026",
      gradient: "from-blue-800/50 to-cyan-800/50",
      borderColor: "border-blue-500/30",
      textColor: "text-cyan-400"
    },
    {
      title: "Autonomous Operations Mastery",
      description: "Fully autonomous AI systems managing complex business operations with minimal human intervention.",
      icon: "🤖",
      roi: "2,800%",
      category: "MASTERY",
      link: "/advanced-automation-solutions-2025",
      gradient: "from-green-800/50 to-emerald-800/50",
      borderColor: "border-green-500/30",
      textColor: "text-green-400"
    },
    {
      title: "Neural Interface Revolution",
      description: "Direct brain-computer interfaces enabling seamless human-AI collaboration and enhanced cognition.",
      icon: "🌌",
      roi: "4,200%",
      category: "BREAKTHROUGH",
      link: "/neural-interface-solutions",
      gradient: "from-red-800/50 to-orange-800/50",
      borderColor: "border-red-500/30",
      textColor: "text-orange-400"
    },
    {
      title: "Space Technology AI Systems",
      description: "Advanced AI powering space exploration, satellite management, and interplanetary communication.",
      icon: "🚀",
      roi: "6,000%",
      category: "FUTURE",
      link: "/space-technology-solutions-2025",
      gradient: "from-indigo-800/50 to-purple-800/50",
      borderColor: "border-indigo-500/30",
      textColor: "text-indigo-400"
    },
    {
      title: "Predictive Analytics Engine",
      description: "Ultra-accurate predictive models forecasting market trends and business outcomes.",
      icon: "💎",
      roi: "3,200%",
      category: "ANALYTICS",
      link: "/advanced-analytics",
      gradient: "from-pink-800/50 to-rose-800/50",
      borderColor: "border-pink-500/30",
      textColor: "text-pink-400"
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-500/20 border border-red-500/50 mb-6 animate-pulse">
            <span className="text-red-400 font-bold text-sm">🚀 REVOLUTIONARY CONTENT</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-transparent">
            AI 2025 Revolutionary Content Showcase
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Explore the most groundbreaking AI content of 2025. Each piece represents a revolutionary leap forward in artificial intelligence, 
            offering unprecedented insights and implementation strategies for enterprise transformation.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {revolutionaryContent.map((content, index) => (
            <div 
              key={index}
              className={`bg-gradient-to-br ${content.gradient} backdrop-blur-sm rounded-xl p-8 border ${content.borderColor} hover:border-opacity-60 transition-all duration-300 transform hover:scale-105 group cursor-pointer`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                  {content.icon}
                </div>
                <div className="bg-red-500/20 border border-red-500/50 rounded-full px-3 py-1">
                  <span className="text-red-400 font-bold text-xs">{content.category}</span>
                </div>
              </div>
              
              <h3 className={`text-2xl font-bold mb-4 ${content.textColor} group-hover:text-white transition-colors duration-300`}>
                {content.title}
              </h3>
              
              <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                {content.description}
              </p>
              
              <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-4 mb-6">
                <div className="text-green-400 font-bold text-lg">ROI: {content.roi}</div>
                <div className="text-sm text-gray-300">Average implementation results</div>
              </div>
              
              <Link 
                href={content.link}
                className={`inline-flex items-center ${content.textColor} hover:text-white font-semibold transition-colors duration-300 group-hover:translate-x-2 transform`}
              >
                Explore Content →
              </Link>
            </div>
          ))}
        </div>

        {/* Featured Success Stories */}
        <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            Featured Success Stories
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-green-800/30 to-emerald-800/30 backdrop-blur-sm rounded-xl p-8 border border-green-500/30">
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-3">🏆</div>
                <h4 className="text-2xl font-bold text-green-400">Global Enterprise Transformation</h4>
              </div>
              <p className="text-gray-300 mb-6">
                Fortune 500 company achieved 10,000% ROI through comprehensive AI implementation, reducing operational costs by 85% while increasing productivity by 400%.
              </p>
              <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-4 mb-4">
                <div className="text-green-400 font-bold text-xl">10,000% ROI</div>
                <div className="text-sm text-gray-300">6-month implementation timeline</div>
              </div>
              <Link href="/case-studies/ai-2025-global-transformation-breakthrough" className="text-green-400 hover:text-green-300 font-semibold">
                Read Full Case Study →
              </Link>
            </div>

            <div className="bg-gradient-to-r from-blue-800/30 to-cyan-800/30 backdrop-blur-sm rounded-xl p-8 border border-blue-500/30">
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-3">🚀</div>
                <h4 className="text-2xl font-bold text-blue-400">Quantum Computing Success</h4>
              </div>
              <p className="text-gray-300 mb-6">
                Leading technology company implemented quantum-neural fusion systems, achieving 15,000% ROI and solving previously impossible computational challenges.
              </p>
              <div className="bg-blue-500/20 border border-blue-500/50 rounded-lg p-4 mb-4">
                <div className="text-blue-400 font-bold text-xl">15,000% ROI</div>
                <div className="text-sm text-gray-300">Quantum breakthrough implementation</div>
              </div>
              <Link href="/case-studies/ai-2026-quantum-neural-fusion-enterprise-transformation-breakthrough" className="text-blue-400 hover:text-blue-300 font-semibold">
                Read Full Case Study →
              </Link>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-transparent">
            Ready to Transform Your Business?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of enterprises already transforming with our revolutionary AI solutions. Get started today with a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Start Your Transformation
            </Link>
            <Link 
              href="/ai-implementation-guide-2025" 
              className="border-2 border-white hover:bg-white hover:text-purple-900 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
            >
              Download Implementation Guide
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}