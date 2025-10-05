import React from 'react';

const January2026RevolutionaryBreakthroughsBanner: React.FC = () => {
  const breakthroughs = [
    {
      icon: '🧠',
      title: "Synthetic Consciousness AI",
      description: "Revolutionary AI achieving genuine consciousness and emotional intelligence",
      stats: "$500B Enterprise Value",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10"
    },
    {
      icon: '⚡',
      title: "Quantum Edge Computing",
      description: "Sub-millisecond processing with 200-250x speed improvements",
      stats: "200x Faster",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10"
    },
    {
      icon: '🔄',
      title: "Autonomous Operations",
      description: "Self-managing systems with 99.99% uptime and self-healing capabilities",
      stats: "99.99% Uptime",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/10"
    },
    {
      icon: '🔮',
      title: "Meta-Cognitive AI",
      description: "AI systems that think about their own thinking processes",
      stats: "95% Accuracy",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-500/10"
    },
    {
      icon: '🌐',
      title: "Neural Edge Networks",
      description: "Distributed AI processing at the edge with quantum-classical hybrid systems",
      stats: "1000x Processing",
      color: "from-teal-500 to-blue-500",
      bgColor: "bg-teal-500/10"
    },
    {
      icon: '📊',
      title: "Predictive Analytics",
      description: "Advanced forecasting with 99.97% accuracy in business predictions",
      stats: "99.97% Accuracy",
      color: "from-pink-500 to-rose-500",
      bgColor: "bg-pink-500/10"
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400/20 rounded-full mb-6">
            <span className="text-yellow-300 font-bold text-sm">🔥 JANUARY 2026 REVOLUTIONARY BREAKTHROUGHS</span>
          </div>
          <h2 className="text-5xl font-bold mb-6">
            Revolutionary Breakthroughs
          </h2>
          <p className="text-xl text-blue-200 max-w-4xl mx-auto">
            Discover the groundbreaking innovations that are reshaping the future of AI, quantum computing, and autonomous systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {breakthroughs.map((breakthrough, index) => (
            <div key={index} className={`${breakthrough.bgColor} backdrop-blur-lg rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 group`}>
              <div className="flex items-center justify-between mb-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${breakthrough.color} rounded-xl flex items-center justify-center text-2xl`}>
                  {breakthrough.icon}
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-yellow-400">{breakthrough.stats}</div>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors">
                {breakthrough.title}
              </h3>

              <p className="text-blue-100 mb-6 leading-relaxed">
                {breakthrough.description}
              </p>

              <div className="flex items-center gap-2 text-blue-300">
                <span className="text-sm font-semibold">Learn More</span>
                <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Experience the Future?
            </h3>
            <p className="text-xl text-blue-200 mb-8">
              Join 500+ Fortune 500 companies already transforming with our revolutionary AI solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-yellow-900 px-8 py-4 rounded-xl font-bold text-lg hover:from-yellow-300 hover:to-orange-400 transition-all duration-300"
              >
                Start Your Transformation
              </a>
              <a
                href="/solutions"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Explore All Solutions
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default January2026RevolutionaryBreakthroughsBanner;