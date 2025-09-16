import React from 'react';

const UltimateContentShowcase2026: React.FC = () => {
  const content = [
    {
      id: 1,
      title: "AI Consciousness Test",
      description: "Test the consciousness level of our AI systems",
      icon: "🧠",
      gradient: "from-purple-600 to-pink-600",
      link: "/ai-consciousness-test"
    },
    {
      id: 2,
      title: "Quantum Computing Demo",
      description: "Witness quantum supremacy in action",
      icon: "⚛️",
      gradient: "from-cyan-600 to-blue-600",
      link: "/quantum-computing-demo"
    },
    {
      id: 3,
      title: "Neural Interface Lab",
      description: "Experience direct brain-computer interaction",
      icon: "🧬",
      gradient: "from-green-600 to-teal-600",
      link: "/neural-interface-lab"
    }
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 min-h-screen">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900">
        <div className="absolute inset-0 opacity-20" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%239C92AC\" fill-opacity=\"0.1\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"2\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"}}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 via-violet-600/30 to-indigo-600/30"></div>
      </div>

      <div className="relative z-10 p-8 md:p-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-6xl md:text-7xl font-bold text-white mb-6">
            Ultimate Content Showcase 2026
          </h2>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
            Revolutionary technologies and experiences that define the future
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {content.map((item) => (
            <div key={item.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-4">{item.icon}</div>
              <h4 className="text-xl font-bold mb-4 text-white">{item.title}</h4>
              <p className="mb-6 opacity-90 text-gray-300">{item.description}</p>
              <button className={`bg-gradient-to-r ${item.gradient} text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300`}>
                Start Experience
              </button>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="px-10 py-5 bg-gradient-to-r from-purple-600 to-violet-600 text-white rounded-full font-bold text-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105">
            Explore All Content →
          </button>
        </div>
      </div>
    </div>
  );
};

export default UltimateContentShowcase2026;