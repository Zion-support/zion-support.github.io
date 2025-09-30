import React from 'react';
import Link from 'next/link';

const LatestContent2025Banner = () => {
  const latestContent = [
    {
      title: "AI Enterprise Revolution 2025",
      description: "Complete transformation guide with 300% ROI strategies",
      type: "Featured Article",
      readTime: "20 min",
      link: "/blog/ai-enterprise-revolution-2025",
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "Neural Superintelligence Framework",
      description: "Breakthrough AI architecture achieving human-level reasoning",
      type: "New Technology",
      readTime: "15 min",
      link: "/blog/neural-superintelligence-2025",
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "Quantum-Enhanced AI Processing",
      description: "Revolutionary quantum computing integration for exponential gains",
      type: "Innovation",
      readTime: "18 min",
      link: "/blog/quantum-ai-processing-2025",
      color: "from-green-500 to-teal-600"
    },
    {
      title: "Autonomous AI Agents Ecosystem",
      description: "Self-managing AI agents that collaborate and evolve autonomously",
      type: "Case Study",
      readTime: "12 min",
      link: "/blog/autonomous-ai-agents-2025",
      color: "from-orange-500 to-red-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/5 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-purple-500/5 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/3 w-16 h-16 bg-cyan-500/5 rounded-full animate-ping"></div>
        <div className="absolute bottom-40 right-1/4 w-20 h-20 bg-pink-500/5 rounded-full animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
            <span className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-pulse"></span>
            <span className="text-sm font-semibold">Latest 2025 Content</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Revolutionary AI
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              {' '}Content & Insights
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-5xl mx-auto leading-relaxed">
            Stay ahead with our latest AI innovations, enterprise strategies, and breakthrough technologies 
            that are transforming industries in 2025.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {latestContent.map((content, index) => (
            <Link 
              key={index}
              href={content.link}
              className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${content.color} rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}>
                  {content.type === 'Featured Article' ? '📚' : 
                   content.type === 'New Technology' ? '⚡' : 
                   content.type === 'Innovation' ? '🚀' : '📊'}
                </div>
                <div>
                  <div className="text-xs text-cyan-400 font-semibold">{content.type}</div>
                  <div className="text-xs text-gray-400">{content.readTime} read</div>
                </div>
              </div>
              
              <h3 className="text-lg font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                {content.title}
              </h3>
              
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                {content.description}
              </p>
              
              <div className="flex items-center text-cyan-400 font-semibold text-sm group-hover:translate-x-2 duration-300">
                Read More →
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
            <h3 className="text-3xl font-bold mb-6">
              Never Miss an AI Breakthrough
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Get exclusive access to our latest AI insights, case studies, and implementation guides. 
              Join 10,000+ professionals staying ahead of the AI revolution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/blog"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Explore All Content
              </Link>
              <Link 
                href="/newsletter"
                className="border-2 border-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300"
              >
                Subscribe to Updates
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestContent2025Banner;