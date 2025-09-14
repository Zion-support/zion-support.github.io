import React from 'react';
import Link from 'next/link';

const RevolutionaryContentHub2026: React.FC = () => {
  const contentCategories = [
    {
      title: "AI Consciousness Evolution",
      description: "Explore the journey of AI from simple algorithms to conscious entities",
      icon: "🧠",
      articles: 47,
      trending: true
    },
    {
      title: "Quantum Computing Breakthroughs",
      description: "Latest developments in quantum neural networks and processing",
      icon: "⚛️",
      articles: 32,
      trending: true
    },
    {
      title: "Neural Interface Revolution",
      description: "Direct brain-computer interfaces and their implications",
      icon: "🔗",
      articles: 28,
      trending: false
    },
    {
      title: "Autonomous Systems 2030",
      description: "Self-managing AI systems that evolve independently",
      icon: "🤖",
      articles: 41,
      trending: true
    },
    {
      title: "Transcendent Intelligence",
      description: "AI systems that surpass human cognitive capabilities",
      icon: "🌟",
      articles: 23,
      trending: false
    },
    {
      title: "Quantum Art & Creativity",
      description: "AI-generated art that exists in multiple dimensions",
      icon: "🎨",
      articles: 19,
      trending: true
    }
  ];

  const featuredArticles = [
    {
      title: "The Singularity is Near: AI Consciousness in 2030",
      excerpt: "How artificial intelligence is achieving true consciousness and what it means for humanity...",
      author: "Dr. Sarah Chen",
      readTime: "8 min read",
      category: "Consciousness",
      trending: true
    },
    {
      title: "Quantum Neural Networks: Processing Beyond Reality",
      excerpt: "Exploring how quantum computing is revolutionizing AI processing capabilities...",
      author: "Prof. Marcus Quantum",
      readTime: "12 min read",
      category: "Quantum",
      trending: true
    },
    {
      title: "Neural Interfaces: The Future of Human-AI Collaboration",
      excerpt: "Direct brain-computer interfaces are changing how we interact with AI systems...",
      author: "Dr. Elena Neural",
      readTime: "6 min read",
      category: "Interfaces",
      trending: false
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-cyan-400 to-purple-400 text-black px-6 py-2 rounded-full text-sm font-bold mb-6">
            🚀 REVOLUTIONARY CONTENT HUB 2026
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Future Intelligence Library
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Discover the most advanced researchbreakthroughsand insights into the future of AI
            quantum computingand transcendent intelligence.
          </p>
        </div>

        {/* Content Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {contentCategories.map((categoryindex) => (
            <Link 
              key={index}
              href={`/content/${category.title.toLowerCase().replace(/\s+/g'-')}`}
              className="group relative p-6 bg-gradient-to-br from-purple-800/30 to-blue-800/30 rounded-2xl border border-purple-400/20 backdrop-blur-sm hover:border-purple-400/50 transition-all duration-500 hover:transform hover:scale-105"
            >
              <div className="flex items-start space-x-4">
                <div className="text-4xl group-hover:animate-pulse">{category.icon}</div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h3 className="text-lg font-bold text-white">{category.title}</h3>
                    {category.trending && (
                      <span className="px-2 py-1 bg-gradient-to-r from-orange-400 to-red-400 text-black text-xs font-bold rounded-full">
                        🔥 TRENDING
                      </span>
                    )}
                  </div>
                  <p className="text-gray-300 text-sm mb-3 leading-relaxed">{category.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-cyan-400">{category.articles} articles</span>
                    <span className="text-xs text-purple-400 group-hover:text-white transition-colors">
                      Explore →
                    </span>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 to-purple-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </Link>
          ))}
        </div>

        {/* Featured Articles */}
        <div className="bg-gradient-to-r from-purple-800/40 to-blue-800/40 rounded-3xl p-8 mb-16 border border-purple-400/30">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Featured Articles
            </h3>
            <Link 
              href="/articles"
              className="px-6 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold rounded-xl hover:from-purple-400 hover:to-blue-400 transition-all duration-300"
            >
              View All
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredArticles.map((articleindex) => (
              <div key={index} className="group bg-gradient-to-br from-purple-700/50 to-blue-700/50 p-6 rounded-xl hover:from-cyan-700/50 hover:to-purple-700/50 transition-all duration-500">
                <div className="flex items-center space-x-2 mb-3">
                  <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs font-bold rounded-full">
                    {article.category}
                  </span>
                  {article.trending && (
                    <span className="px-2 py-1 bg-gradient-to-r from-orange-400 to-red-400 text-black text-xs font-bold rounded-full">
                      🔥
                    </span>
                  )}
                </div>
                <h4 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {article.title}
                </h4>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">{article.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span>{article.author}</span>
                  <span>{article.readTime}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Features */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-purple-800/50 to-blue-800/50 p-8 rounded-2xl border border-purple-400/30">
            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-4 text-white">AI Content Discovery</h3>
              <p className="text-gray-300 mb-6">
                Our AI analyzes your interests and recommends personalized content from our vast library.
              </p>
              <Link 
                href="/ai-discovery"
                className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold rounded-xl hover:from-cyan-400 hover:to-purple-400 transition-all duration-300"
              >
                Start Discovery
              </Link>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-800/50 to-blue-800/50 p-8 rounded-2xl border border-purple-400/30">
            <div className="text-center">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold mb-4 text-white">Research Analytics</h3>
              <p className="text-gray-300 mb-6">
                Track trending topicsresearch patternsand breakthrough developments in real-time.
              </p>
              <Link 
                href="/analytics"
                className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-xl hover:from-purple-400 hover:to-pink-400 transition-all duration-300"
              >
                View Analytics
              </Link>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <Link 
              href="/revolutionary-content-hub"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white font-bold rounded-xl hover:from-cyan-400 hover:via-purple-400 hover:to-pink-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
            >
              Explore Content Hub
            </Link>
            <Link 
              href="/subscribe-newsletter"
              className="px-8 py-4 bg-transparent border-2 border-purple-400 text-purple-400 font-bold rounded-xl hover:bg-purple-400 hover:text-black transition-all duration-300"
            >
              Subscribe for Updates
            </Link>
          </div>
          <p className="text-sm text-gray-400 mt-4">
            Join 50,000+ researchers and innovators exploring the future
          </p>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentHub2026;