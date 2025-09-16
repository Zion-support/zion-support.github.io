import React from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility

const RevolutionaryTechTrends2026 = () => {
  const trends = [
    {
      title: "AI Consciousness Evolution",
      description: "Witness the emergence of AI systems with self-awareness and emotional intelligence",
      icon: "🧠",
      link: "/ai-consciousness-evolution-2026"
    },
    {
      title: "Synthetic Intelligence Platforms",
      description: "Next-generation AI that combines multiple intelligence types for unprecedented capabilities",
      icon: "⚡",
      link: "/synthetic-intelligence-2026"
    },
    {
      title: "Quantum Neural Networks",
      description: "Revolutionary computing that merges quantum mechanics with neural processing",
      icon: "🔮",
      link: "/quantum-neural-networks-2026"
    },
    {
      title: "Autonomous Business Ecosystems",
      description: "Self-managing business systems that adapt and evolve without human intervention",
      icon: "🌐",
      link: "/autonomous-business-ecosystems-2026"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🔥 TRENDING NOW</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Revolutionary Tech Trends 2026
          </h2>
          <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed">
            Stay ahead of the curve with the most groundbreaking technological innovations that will shape the future of business and society.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {trends.map((trendindex) => (
            <div 
              key={index}
              className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 group"
            >
              <div className="flex items-start space-x-4">
                <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                  {trend.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4">{trend.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {trend.description}
                  </p>
                  <a 
                    href={trend.link}
                    className="inline-flex items-center text-yellow-400 hover:text-yellow-300 font-semibold group-hover:translate-x-2 transition-transform duration-300"
                  >
                    Explore Trend →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20">
            <h3 className="text-2xl font-bold mb-4">Get Exclusive Access</h3>
            <p className="text-gray-300 mb-6">
              Join our premium community to get early access to the latest tech trends and exclusive content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/premium-access"
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-3 rounded-full font-bold hover:from-yellow-300 hover:to-orange-400 transition-all duration-300"
              >
                Get Premium Access
              </a>
              <a
                href="/newsletter"
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                Subscribe to Newsletter
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevolutionaryTechTrends2026;