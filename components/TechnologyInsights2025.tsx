import React from 'react';
import Link from 'next/link';
import { 
  CpuChipIcon, 
  CloudIcon, 
  BoltIcon, 
  ShieldCheckIcon,
  ArrowRightIcon,
  ChartBarIcon,
  LightBulbIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline';

const TechnologyInsights2025 = () => {
  const insights = [
    {
      id: 1,
      title: "AI Consciousness Breakthrough",
      category: "Artificial Intelligence",
      description: "New research reveals AI systems developing emergent consciousness patterns, revolutionizing human-AI collaboration.",
      impact: "High",
      timeframe: "2025-2026",
      image: "/api/placeholder/400/250",
      tags: ["AI", "Consciousness", "Research", "Breakthrough"]
    },
    {
      id: 2,
      title: "Quantum Supremacy in Business",
      category: "Quantum Computing",
      description: "Quantum computers now solving complex business optimization problems 1000x faster than classical systems.",
      impact: "Revolutionary",
      timeframe: "2025",
      image: "/api/placeholder/400/250",
      tags: ["Quantum", "Business", "Optimization", "Performance"]
    },
    {
      id: 3,
      title: "Neural Interface Revolution",
      category: "Neural Technology",
      description: "Direct brain-computer interfaces enabling seamless thought-to-action control in professional environments.",
      impact: "High",
      timeframe: "2025-2027",
      image: "/api/placeholder/400/250",
      tags: ["Neural", "Interface", "Brain", "Control"]
    },
    {
      id: 4,
      title: "Edge AI Transformation",
      category: "Edge Computing",
      description: "Edge AI systems processing complex tasks locally, reducing latency by 90% and improving privacy.",
      impact: "Medium",
      timeframe: "2025",
      image: "/api/placeholder/400/250",
      tags: ["Edge", "AI", "Latency", "Privacy"]
    },
    {
      id: 5,
      title: "Autonomous Cloud Operations",
      category: "Cloud Computing",
      description: "Self-managing cloud infrastructure automatically optimizing performance, security, and costs in real-time.",
      impact: "High",
      timeframe: "2025-2026",
      image: "/api/placeholder/400/250",
      tags: ["Cloud", "Autonomous", "Optimization", "Real-time"]
    },
    {
      id: 6,
      title: "Synthetic Intelligence Emergence",
      category: "Synthetic AI",
      description: "First generation of synthetic intelligence systems surpassing human cognitive abilities in specific domains.",
      impact: "Revolutionary",
      timeframe: "2025-2027",
      image: "/api/placeholder/400/250",
      tags: ["Synthetic", "Intelligence", "Cognitive", "Human-level"]
    }
  ];

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'Revolutionary':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'High':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
            <LightBulbIcon className="w-4 h-4" />
            Technology Insights
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Future Technology
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Trends & Breakthroughs
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay ahead with our expert analysis of emerging technologies and their potential impact on business and society.
          </p>
        </div>

        {/* Insights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {insights.map((insight) => (
            <div
              key={insight.id}
              className="group bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-white/20 transition-all duration-300 border border-white/20"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={insight.image}
                  alt={insight.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getImpactColor(insight.impact)}`}>
                    {insight.impact}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-sm font-medium">{insight.category}</div>
                  <div className="text-xs opacity-90">{insight.timeframe}</div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                  {insight.title}
                </h3>

                <p className="text-gray-300 mb-4 line-clamp-3">
                  {insight.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {insight.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-white/20 text-white px-2 py-1 rounded text-xs"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/insights/${insight.id}`}
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium group-hover:gap-3 transition-all"
                >
                  Read Analysis
                  <ArrowRightIcon className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Insight */}
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl p-8 mb-16 border border-white/20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <RocketLaunchIcon className="w-6 h-6 text-yellow-400" />
                <span className="text-yellow-400 font-medium">Featured Insight</span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">
                The Convergence of AI and Quantum Computing
              </h3>
              <p className="text-gray-300 text-lg mb-6">
                Discover how the fusion of artificial intelligence and quantum computing is creating unprecedented opportunities 
                for solving complex problems that were previously impossible to tackle.
              </p>
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">1000x</div>
                  <div className="text-sm text-gray-400">Faster Processing</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">99.9%</div>
                  <div className="text-sm text-gray-400">Accuracy Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">24/7</div>
                  <div className="text-sm text-gray-400">Continuous Operation</div>
                </div>
              </div>
              <Link
                href="/insights/ai-quantum-convergence"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all"
              >
                Read Full Analysis
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
            <div className="relative">
              <img
                src="/api/placeholder/600/400"
                alt="AI Quantum Convergence"
                className="w-full h-80 object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl" />
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-3xl font-bold text-white mb-4">Stay Updated with Latest Insights</h3>
            <p className="text-gray-300 mb-8 text-lg">
              Get exclusive access to our technology trend reports and expert analysis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/insights"
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all"
              >
                <ChartBarIcon className="w-5 h-5" />
                Browse All Insights
              </Link>
              <Link
                href="/newsletter"
                className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition-all"
              >
                <LightBulbIcon className="w-5 h-5" />
                Subscribe to Updates
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyInsights2025;