
import React from 'react';

export const FeatureHighlights = () => {
  const highlights = [
    {
      title: "AI-Powered Innovation",
      description: "Cutting-edge artificial intelligence solutions that drive business transformation",
      icon: "🚀",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Enterprise Security",
      description: "Bank-grade security measures to protect your data and applications",
      icon: "🛡️",
      color: "from-red-500 to-orange-500"
    },
    {
      title: "Global Expertise",
      description: "Access to a worldwide network of certified technology professionals",
      icon: "🌍",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock assistance whenever you need help or have questions",
      icon: "⏰",
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Zion Tech</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the difference with our comprehensive technology solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="group text-center"
            >
              <div className="bg-gradient-to-br from-slate-700 to-slate-800 p-8 rounded-2xl border border-slate-600 hover:border-cyan-400 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/25">
                <div className={`w-20 h-20 bg-gradient-to-r ${highlight.color} rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-4xl">{highlight.icon}</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                  {highlight.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
