import React from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility

const RevolutionaryTechTrends2025 = () => {
  const trends = [
    {
      title: "Autonomous AI Systems",
      description: "Self-managing AI that operates independentlymaking real-time decisions without human intervention.",
      impact: "85% efficiency increase",
      icon: "🤖",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Quantum-Neural Fusion",
      description: "Revolutionary combination of quantum computing and neural networks for unprecedented processing power.",
      impact: "1000x faster processing",
      icon: "⚛️",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Synthetic Intelligence",
      description: "Next-generation AI that mimics human consciousness and emotional intelligence.",
      impact: "95% human-like interaction",
      icon: "🧠",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Omniversal Computing",
      description: "Computing systems that operate across multiple dimensions and realities simultaneously.",
      impact: "Infinite scalability",
      icon: "🌌",
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Consciousness Transfer",
      description: "Technology that enables digital consciousness transfer and preservation.",
      impact: "Digital immortality",
      icon: "👤",
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Reality Manipulation",
      description: "AI systems capable of creating and manipulating virtual realities indistinguishable from physical reality.",
      impact: "Perfect simulation",
      icon: "🌍",
      color: "from-teal-500 to-blue-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🚀 REVOLUTIONARY 2025</span>
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Revolutionary Tech Trends
          </h2>
          <p className="text-xl text-blue-200 max-w-4xl mx-auto leading-relaxed">
            Experience the future of technology with our groundbreaking innovations that are reshaping the digital landscape and transforming how we interact with the world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {trends.map((trendindex) => (
            <div
              key={index}
              className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105"
            >
              <div className={`text-6xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {trend.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                {trend.title}
              </h3>
              <p className="text-blue-200 mb-6 leading-relaxed">
                {trend.description}
              </p>
              <div className={`inline-flex items-center bg-gradient-to-r ${trend.color} text-white px-4 py-2 rounded-full text-sm font-semibold`}>
                <span className="mr-2">📈</span>
                {trend.impact}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4 text-white">
              Ready to Transform Your Business?
            </h3>
            <p className="text-blue-200 mb-8 text-lg">
              Join thousands of forward-thinking companies already leveraging these revolutionary technologies to achieve unprecedented success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/services"
                className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="/contact"
                className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Schedule Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevolutionaryTechTrends2025;