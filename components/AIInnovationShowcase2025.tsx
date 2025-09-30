import React from 'react';
import Link from 'next/link';

const AIInnovationShowcase2025 = () => {
  const innovations = [
    {
      title: "Neural Superintelligence Framework",
      description: "Breakthrough AI architecture achieving human-level reasoning with 10x faster processing",
      metrics: "95% Accuracy, 10x Speed",
      icon: "🧠",
      color: "from-blue-500 to-purple-600",
      link: "/blog/neural-superintelligence-2025"
    },
    {
      title: "Quantum-Enhanced AI Processing",
      description: "Revolutionary quantum computing integration for exponential AI performance gains",
      metrics: "1000x Processing Power",
      icon: "⚛️",
      color: "from-purple-500 to-pink-600",
      link: "/blog/quantum-ai-processing-2025"
    },
    {
      title: "Autonomous AI Agents Ecosystem",
      description: "Self-managing AI agents that collaborate and evolve without human intervention",
      metrics: "99.9% Autonomy",
      icon: "🤖",
      color: "from-green-500 to-teal-600",
      link: "/blog/autonomous-ai-agents-2025"
    },
    {
      title: "Predictive Business Intelligence",
      description: "AI-powered forecasting with 98% accuracy for market trends and business outcomes",
      metrics: "98% Accuracy",
      icon: "📊",
      color: "from-orange-500 to-red-600",
      link: "/blog/predictive-business-intelligence-2025"
    },
    {
      title: "Real-time AI Decision Engine",
      description: "Instant decision-making AI that processes complex scenarios in milliseconds",
      metrics: "Sub-10ms Response",
      icon: "⚡",
      color: "from-cyan-500 to-blue-600",
      link: "/blog/real-time-ai-decisions-2025"
    },
    {
      title: "AI-Powered Cybersecurity Shield",
      description: "Advanced threat detection and prevention with autonomous incident response",
      metrics: "99.7% Threat Block",
      icon: "🛡️",
      color: "from-red-500 to-pink-600",
      link: "/blog/ai-cybersecurity-shield-2025"
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
            <span className="text-sm font-semibold">2025 AI Innovation Showcase</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Revolutionary AI
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              {' '}Breakthroughs
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-5xl mx-auto leading-relaxed">
            Experience the next generation of AI technologies that are transforming industries, 
            revolutionizing business processes, and creating unprecedented opportunities for growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {innovations.map((innovation, index) => (
            <div 
              key={index}
              className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${innovation.color} rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300`}>
                  {innovation.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{innovation.title}</h3>
                  <div className="text-sm text-cyan-400 font-semibold">{innovation.metrics}</div>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {innovation.description}
              </p>
              
              <Link 
                href={innovation.link}
                className="inline-flex items-center text-cyan-400 font-semibold hover:text-cyan-300 transition-colors group-hover:translate-x-2 duration-300"
              >
                Explore Innovation →
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
            <h3 className="text-3xl font-bold mb-6">
              Ready to Lead the AI Revolution?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join the elite group of forward-thinking enterprises that are already implementing 
              these revolutionary AI technologies and achieving unprecedented results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/services"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Start Your AI Journey
              </Link>
              <Link 
                href="/case-studies"
                className="border-2 border-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300"
              >
                View Success Stories
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIInnovationShowcase2025;