import React, { useState } from 'react';

const UltimateContentShowcase2028: React.FC = () => {
  const [activeTab, setActiveTab] = useState('innovations');

  const innovations = [
    {
      id: 1,
      title: "Quantum Consciousness Interface",
      description: "Direct neural interface with quantum computers enabling consciousness transfer and enhanced cognitive capabilities.",
      icon: "🧠",
      gradient: "from-purple-600 to-pink-600",
      features: ["Neural Interface", "Quantum Computing", "Consciousness Transfer"],
      link: "/pages/RevolutionaryTechShowcase2028"
    },
    {
      id: 2,
      title: "Interdimensional Computing",
      description: "Harness parallel dimensions for unlimited computational resources and solutions to impossible problems.",
      icon: "🌌",
      gradient: "from-cyan-600 to-blue-600",
      features: ["Parallel Dimensions", "Infinite Computing", "Reality Manipulation"],
      link: "/pages/RevolutionaryTechShowcase2028"
    },
    {
      id: 3,
      title: "Synthetic Reality Engine",
      description: "Create and manipulate entire realities with perfect fidelity, enabling infinite virtual worlds.",
      icon: "🌍",
      gradient: "from-green-600 to-emerald-600",
      features: ["Reality Creation", "Perfect Simulation", "Infinite Worlds"],
      link: "/pages/RevolutionaryTechShowcase2028"
    },
    {
      id: 4,
      title: "Temporal Computing",
      description: "Process information across multiple time dimensions for predictions that transcend linear time.",
      icon: "⏰",
      gradient: "from-orange-600 to-red-600",
      features: ["Time Manipulation", "Future Prediction", "Temporal Analysis"],
      link: "/pages/RevolutionaryTechShowcase2028"
    },
    {
      id: 5,
      title: "Omniversal AI",
      description: "Artificial intelligence existing across all dimensions simultaneously with infinite wisdom.",
      icon: "🤖",
      gradient: "from-indigo-600 to-purple-600",
      features: ["Omniversal Intelligence", "Infinite Wisdom", "Transcendent AI"],
      link: "/pages/RevolutionaryTechShowcase2028"
    },
    {
      id: 6,
      title: "Cosmic Energy Harvesting",
      description: "Extract unlimited energy from cosmic phenomena for clean, infinite power applications.",
      icon: "⚡",
      gradient: "from-yellow-600 to-orange-600",
      features: ["Cosmic Energy", "Infinite Power", "Clean Energy"],
      link: "/pages/RevolutionaryTechShowcase2028"
    }
  ];

  const caseStudies = [
    {
      id: 1,
      title: "Global AI Transformation",
      company: "Fortune 500 Manufacturing",
      result: "+400% Productivity",
      savings: "$2.3B Cost Savings",
      icon: "🏢",
      gradient: "from-purple-600 to-pink-600",
      link: "/pages/RevolutionaryCaseStudies2028"
    },
    {
      id: 2,
      title: "Healthcare Revolution",
      company: "Major Hospital Network",
      result: "99.8% Diagnostic Accuracy",
      savings: "75% Faster Treatment",
      icon: "🏥",
      gradient: "from-cyan-600 to-blue-600",
      link: "/pages/RevolutionaryCaseStudies2028"
    },
    {
      id: 3,
      title: "Space Exploration Breakthrough",
      company: "International Space Agency",
      result: "100% Mission Success",
      savings: "90% Risk Reduction",
      icon: "🚀",
      gradient: "from-green-600 to-emerald-600",
      link: "/pages/RevolutionaryCaseStudies2028"
    },
    {
      id: 4,
      title: "Financial Markets Revolution",
      company: "Global Investment Bank",
      result: "100% Prediction Accuracy",
      savings: "500% ROI Increase",
      icon: "💰",
      gradient: "from-yellow-600 to-orange-600",
      link: "/pages/RevolutionaryCaseStudies2028"
    }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "Future Tech Trends 2028",
      excerpt: "Explore the revolutionary technology trends that will define the next decade and transform human existence.",
      author: "Dr. Sarah Chen",
      date: "January 25, 2025",
      readTime: "8 min read",
      icon: "📈",
      gradient: "from-purple-600 to-pink-600",
      link: "/pages/FutureTechTrends2028"
    },
    {
      id: 2,
      title: "The AI Consciousness Revolution",
      excerpt: "How artificial intelligence is developing genuine consciousness and what it means for humanity.",
      author: "Prof. Michael Rodriguez",
      date: "January 23, 2025",
      readTime: "6 min read",
      icon: "🧠",
      gradient: "from-cyan-600 to-blue-600",
      link: "/pages/FutureTechTrends2028"
    },
    {
      id: 3,
      title: "Quantum-Neural Fusion Breakthrough",
      excerpt: "The integration of quantum computing with neural interfaces creates unprecedented possibilities.",
      author: "Dr. Elena Volkov",
      date: "January 21, 2025",
      readTime: "7 min read",
      icon: "⚛️",
      gradient: "from-green-600 to-emerald-600",
      link: "/pages/FutureTechTrends2028"
    },
    {
      id: 4,
      title: "Interdimensional Computing Applications",
      excerpt: "How parallel dimensions are revolutionizing computational power and problem-solving.",
      author: "Dr. James Chen",
      date: "January 19, 2025",
      readTime: "9 min read",
      icon: "🌌",
      gradient: "from-orange-600 to-red-600",
      link: "/pages/FutureTechTrends2028"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 ULTIMATE CONTENT SHOWCASE 2028
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            Revolutionary Content Hub
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12">
            Discover the most advanced technologies, success stories, and insights that are 
            reshaping the future of human civilization.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab('innovations')}
            className={`px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 ${
              activeTab === 'innovations'
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                : 'bg-white/10 text-gray-300 hover:bg-white/20'
            }`}
          >
            🌟 Innovations
          </button>
          <button
            onClick={() => setActiveTab('case-studies')}
            className={`px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 ${
              activeTab === 'case-studies'
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                : 'bg-white/10 text-gray-300 hover:bg-white/20'
            }`}
          >
            📊 Case Studies
          </button>
          <button
            onClick={() => setActiveTab('blog')}
            className={`px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 ${
              activeTab === 'blog'
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                : 'bg-white/10 text-gray-300 hover:bg-white/20'
            }`}
          >
            📚 Blog & Insights
          </button>
        </div>

        {/* Content Sections */}
        {activeTab === 'innovations' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {innovations.map((innovation) => (
              <div
                key={innovation.id}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-600/30 hover:scale-105 transition-transform duration-300 group"
              >
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {innovation.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-purple-300 transition-colors duration-300">
                  {innovation.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {innovation.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {innovation.features.map((feature, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 bg-gradient-to-r ${innovation.gradient} rounded-full text-sm font-semibold`}
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                <a
                  href={innovation.link}
                  className={`inline-block w-full bg-gradient-to-r ${innovation.gradient} py-3 rounded-lg font-bold text-center hover:shadow-lg transition-shadow duration-300`}
                >
                  Explore Technology →
                </a>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'case-studies' && (
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <div
                key={study.id}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-600/30 hover:scale-105 transition-transform duration-300 group"
              >
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4 group-hover:scale-110 transition-transform duration-300">
                    {study.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                      {study.title}
                    </h3>
                    <p className="text-gray-400">{study.company}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className={`bg-gradient-to-r ${study.gradient} rounded-lg p-4 text-center`}>
                    <div className="text-2xl font-bold text-white">{study.result}</div>
                    <div className="text-sm text-white/80">Achievement</div>
                  </div>
                  <div className={`bg-gradient-to-r ${study.gradient} rounded-lg p-4 text-center`}>
                    <div className="text-2xl font-bold text-white">{study.savings}</div>
                    <div className="text-sm text-white/80">Impact</div>
                  </div>
                </div>
                <a
                  href={study.link}
                  className={`inline-block w-full bg-gradient-to-r ${study.gradient} py-3 rounded-lg font-bold text-center hover:shadow-lg transition-shadow duration-300`}
                >
                  View Case Study →
                </a>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'blog' && (
          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-600/30 hover:scale-105 transition-transform duration-300 group"
              >
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-4 group-hover:scale-110 transition-transform duration-300">
                    {post.icon}
                  </div>
                  <div className={`w-12 h-12 bg-gradient-to-r ${post.gradient} rounded-lg flex items-center justify-center`}>
                    <span className="text-white font-bold">📝</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-purple-300 transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between mb-6 text-sm text-gray-400">
                  <span>By {post.author}</span>
                  <span>{post.readTime}</span>
                </div>
                <div className="text-sm text-gray-500 mb-4">{post.date}</div>
                <a
                  href={post.link}
                  className={`inline-block w-full bg-gradient-to-r ${post.gradient} py-3 rounded-lg font-bold text-center hover:shadow-lg transition-shadow duration-300`}
                >
                  Read Article →
                </a>
              </div>
            ))}
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-3xl p-12">
            <h3 className="text-4xl font-bold mb-6 text-white">
              Ready to Experience the Future?
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Join thousands of innovators, businesses, and visionaries who are already 
              transforming their world with our revolutionary technologies.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-lg text-xl font-bold hover:scale-105 transition-transform duration-300 shadow-2xl">
                🚀 Start Your Journey
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-xl font-bold hover:bg-white/10 transition-colors duration-300">
                📞 Contact Our Experts
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateContentShowcase2028;