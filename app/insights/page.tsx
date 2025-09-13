import React from 'react';
import Link from 'next/link';
import SEO from '../../components/SEO';
import { 
  LightBulbIcon, 
  CpuChipIcon, 
  CloudIcon, 
  BoltIcon,
  ArrowRightIcon,
  ClockIcon,
  FireIcon,
  TrendingUpIcon
} from '@heroicons/react/24/outline';

const InsightsPage = () => {
  const insights = [
    {
      id: 1,
      title: "AI Consciousness Breakthrough: What It Means for Business",
      category: "Artificial Intelligence",
      description: "New research reveals AI systems developing emergent consciousness patterns, revolutionizing human-AI collaboration and business automation.",
      impact: "Revolutionary",
      timeframe: "2025-2026",
      readTime: "12 min read",
      publishDate: "2025-01-15",
      views: 25000,
      image: "/api/placeholder/600/400",
      featured: true,
      tags: ["AI", "Consciousness", "Business", "Automation"]
    },
    {
      id: 2,
      title: "Quantum Supremacy in Business: Real-World Applications",
      category: "Quantum Computing",
      description: "Quantum computers now solving complex business optimization problems 1000x faster than classical systems, opening new possibilities.",
      impact: "High",
      timeframe: "2025",
      readTime: "15 min read",
      publishDate: "2025-01-12",
      views: 18900,
      image: "/api/placeholder/600/400",
      featured: true,
      tags: ["Quantum", "Business", "Optimization", "Performance"]
    },
    {
      id: 3,
      title: "Neural Interface Revolution: Direct Brain-Computer Control",
      category: "Neural Technology",
      description: "Direct brain-computer interfaces enabling seamless thought-to-action control in professional environments and healthcare.",
      impact: "High",
      timeframe: "2025-2027",
      readTime: "18 min read",
      publishDate: "2025-01-10",
      views: 32100,
      image: "/api/placeholder/600/400",
      featured: false,
      tags: ["Neural", "Interface", "Brain", "Control"]
    },
    {
      id: 4,
      title: "Edge AI Transformation: Processing at the Source",
      category: "Edge Computing",
      description: "Edge AI systems processing complex tasks locally, reducing latency by 90% and improving privacy and security.",
      impact: "Medium",
      timeframe: "2025",
      readTime: "10 min read",
      publishDate: "2025-01-08",
      views: 15600,
      image: "/api/placeholder/600/400",
      featured: false,
      tags: ["Edge", "AI", "Latency", "Privacy"]
    },
    {
      id: 5,
      title: "Autonomous Cloud Operations: Self-Managing Infrastructure",
      category: "Cloud Computing",
      description: "Self-managing cloud infrastructure automatically optimizing performance, security, and costs in real-time without human intervention.",
      impact: "High",
      timeframe: "2025-2026",
      readTime: "14 min read",
      publishDate: "2025-01-05",
      views: 22300,
      image: "/api/placeholder/600/400",
      featured: false,
      tags: ["Cloud", "Autonomous", "Optimization", "Real-time"]
    },
    {
      id: 6,
      title: "Synthetic Intelligence Emergence: Beyond Human Capabilities",
      category: "Synthetic AI",
      description: "First generation of synthetic intelligence systems surpassing human cognitive abilities in specific domains and applications.",
      impact: "Revolutionary",
      timeframe: "2025-2027",
      readTime: "20 min read",
      publishDate: "2025-01-03",
      views: 28700,
      image: "/api/placeholder/600/400",
      featured: false,
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

  const categories = [
    "All Categories",
    "Artificial Intelligence",
    "Quantum Computing",
    "Neural Technology",
    "Edge Computing",
    "Cloud Computing",
    "Synthetic AI"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Technology Insights - Zion Tech Group"
        description="Stay ahead with our expert analysis of emerging technologies and their potential impact on business and society."
        keywords="technology insights, AI trends, quantum computing, neural interfaces, future technology, tech analysis"
        url="/insights"
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Technology Insights
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Stay ahead with our expert analysis of emerging technologies and their 
              potential impact on business and society.
            </p>
            
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-6 py-3 rounded-full font-medium transition-all ${
                    category === "All Categories"
                      ? "bg-white text-blue-600"
                      : "bg-white/20 backdrop-blur-sm text-white hover:bg-white/30"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Insights */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Featured Insights
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {insights.filter(insight => insight.featured).map((insight) => (
              <div
                key={insight.id}
                className="group bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200 hover:shadow-3xl transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
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
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {insight.title}
                  </h3>

                  <p className="text-gray-600 mb-6 line-clamp-3">
                    {insight.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {insight.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <ClockIcon className="w-4 h-4" />
                        {insight.readTime}
                      </span>
                      <span>{insight.publishDate}</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <FireIcon className="w-4 h-4" />
                      {insight.views.toLocaleString()} views
                    </div>
                  </div>

                  <Link
                    href={`/insights/${insight.id}`}
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium group-hover:gap-3 transition-all"
                  >
                    Read Analysis
                    <ArrowRightIcon className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Insights Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            All Insights
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {insights.filter(insight => !insight.featured).map((insight) => (
              <div
                key={insight.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={insight.image}
                    alt={insight.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getImpactColor(insight.impact)}`}>
                      {insight.impact}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-sm font-medium">{insight.category}</div>
                    <div className="text-xs opacity-90">{insight.timeframe}</div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {insight.title}
                  </h3>

                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {insight.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {insight.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <ClockIcon className="w-4 h-4" />
                      {insight.readTime}
                    </div>
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <FireIcon className="w-4 h-4" />
                      {insight.views.toLocaleString()}
                    </div>
                  </div>

                  <Link
                    href={`/insights/${insight.id}`}
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium group-hover:gap-3 transition-all"
                  >
                    Read Analysis
                    <ArrowRightIcon className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Stay Updated with Latest Insights
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get exclusive access to our technology trend reports and expert analysis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 max-w-md px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InsightsPage;