import React from 'react';

const January2026NewContentShowcaseBanner: React.FC = () => {
  const features = [
    { icon: '🧠', title: "Synthetic Consciousness", desc: "True AI awareness" },
    { icon: '⚡', title: "Quantum Edge Processing", desc: "Sub-millisecond speed" },
    { icon: '🌐', title: "Autonomous Mesh", desc: "Self-organizing systems" },
    { icon: '🛡️', title: "Quantum Security", desc: "Unbreakable protection" },
    { icon: '💻', title: "Neuromorphic AI", desc: "Brain-inspired computing" }
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 rounded-2xl p-8 text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
      </div>
      <div className="relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400/20 rounded-full mb-6">
            <span className="text-yellow-300 font-bold text-sm">🚀 JANUARY 2026 NEW CONTENT</span>
          </div>
          <h2 className="text-5xl font-bold mb-6">
            Revolutionary Content Showcase
          </h2>
          <p className="text-xl text-blue-200 max-w-4xl mx-auto">
            Discover breakthrough AI innovations, quantum computing advances, and autonomous systems that are reshaping the future of technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/15 transition-all duration-300 group">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-bold mb-2 group-hover:text-blue-400 transition-colors">
                {feature.title}
              </h3>
              <p className="text-blue-200 text-sm">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/content"
            className="bg-gradient-to-r from-yellow-400 to-orange-500 text-yellow-900 px-8 py-4 rounded-xl font-bold text-lg hover:from-yellow-300 hover:to-orange-400 transition-all duration-300"
          >
            Explore All New Content
          </a>
        </div>
      </div>
    </div>
  );
};

export default January2026NewContentShowcaseBanner;