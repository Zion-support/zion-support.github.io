import React from 'react';

export const InnovationResearchSection = () => {
  const innovations = [
    {
      title: "Quantum Computing Solutions",
      description: "Pioneering quantum algorithms for complex problem-solving and optimization",
      status: "Research Phase",
      icon: "⚛️",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "AI Ethics Framework",
      description: "Developing responsible AI guidelines and ethical decision-making systems",
      status: "Development",
      icon: "🧠",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Edge AI Computing",
      description: "Optimizing AI models for edge devices and IoT applications",
      status: "Production Ready",
      icon: "🌐",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Blockchain Integration",
      description: "Secure and transparent blockchain solutions for enterprise applications",
      status: "Beta Testing",
      icon: "🔗",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Innovation & <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Research</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Pushing the boundaries of technology with cutting-edge research and development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {innovations.map((innovation, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-slate-700 to-slate-800 p-6 rounded-2xl border border-slate-600 hover:border-cyan-400 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/25"
            >
              <div className={`w-20 h-20 bg-gradient-to-r ${innovation.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <span className="text-3xl">{innovation.icon}</span>
              </div>
              
              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                {innovation.title}
              </h3>
              
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                {innovation.description}
              </p>
              
              <div className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-medium rounded-full border border-cyan-500/30">
                {innovation.status}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};