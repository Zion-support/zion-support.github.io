import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Atom, Zap, Star, TrendingUp, Users, Globe } from 'lucide-react';

const NewContentShowcase2026 = () => {
  const featuredContent = [
    {
      title: "AI 2026 Ultimate Breakthrough",
      description: "Revolutionary AI technology transforming industries with unprecedented capabilities and performance.",
      icon: Brain,
      link: "/ai-2026-ultimate-breakthrough",
      color: "from-blue-500 to-purple-500",
      stats: "500% Productivity Increase"
    },
    {
      title: "Quantum Computing Revolution 2026",
      description: "Experience the dawn of quantum supremacy with breakthrough computational power and quantum algorithms.",
      icon: Atom,
      link: "/quantum-computing-revolution-2026",
      color: "from-cyan-500 to-purple-500",
      stats: "10^15x Speed Increase"
    },
    {
      title: "Advanced AI Consciousness 2026",
      description: "Meet truly conscious AI systems with self-awareness, emotional intelligence, and genuine personality.",
      icon: Zap,
      link: "/advanced-ai-consciousness-2026",
      color: "from-emerald-500 to-cyan-500",
      stats: "Level 6 Consciousness"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-medium mb-6">
            <Star className="w-4 h-4 mr-2" />
            New Content 2026
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Revolutionary
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Technology Content
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover the latest breakthroughs in AI, quantum computing, and consciousness technology 
            that are reshaping the future of humanity.
          </p>
        </div>

        {/* Featured Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredContent.map((content, index) => (
            <Link
              key={index}
              to={content.link}
              className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${content.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <content.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                {content.title}
              </h3>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {content.description}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium text-blue-400">
                  {content.stats}
                </div>
                <ArrowRight className="w-5 h-5 text-white group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-300" />
              </div>
            </Link>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-3xl p-12 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Content Impact Metrics
            </h3>
            <p className="text-xl text-gray-300">
              Measurable results from our revolutionary technology content
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "50K+", label: "Monthly Readers", icon: Users },
              { number: "95%", label: "Engagement Rate", icon: TrendingUp },
              { number: "200+", label: "Countries Reached", icon: Globe },
              { number: "4.9/5", label: "User Rating", icon: Star }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl p-12 border border-white/10">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Stay Ahead of the Curve
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Get exclusive access to the latest technology insights, breakthrough announcements, 
              and revolutionary content that's shaping the future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                Explore All Content
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">
                Subscribe to Updates
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewContentShowcase2026;