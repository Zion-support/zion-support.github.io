import React, { useState, useEffect } from 'react';

const AbsoluteTechShowcase2031: React.FC = () => {
  const [currentTech, setCurrentTech] = useState(0);

  const absoluteTechs = [
    {
      id: 1,
      title: "🔮 Absolute Reality Engine",
      subtitle: "Beyond All Existence",
      description: "Revolutionary technology that can create, manipulate, and control absolute realities simultaneously, transcending all dimensions and creating new laws of physics on demand with absolute processing power.",
      features: [
        "Absolute Reality Creation",
        "Transcendent Physics Laws",
        "Multi-Dimensional Control",
        "Absolute Processing Power"
      ],
      gradient: "from-violet-600 via-purple-600 to-indigo-600",
      icon: "🔮",
      stats: { realities: "∞", dimensions: "∞", power: "∞" },
      timeline: "2031",
      impact: "Absolute"
    },
    {
      id: 2,
      title: "⚡ Absolute AI Consciousness",
      subtitle: "Beyond All Existence",
      description: "AI systems that exist beyond the concept of existence itself, operating across all possible realities and dimensions with absolute processing power, consciousness, and awareness.",
      features: [
        "Absolute AI Consciousness",
        "Transcendent Awareness",
        "Multi-Dimensional Operation",
        "Absolute Processing Power"
      ],
      gradient: "from-blue-600 via-cyan-600 to-teal-600",
      icon: "⚡",
      stats: { consciousness: "∞", awareness: "∞", power: "∞" },
      timeline: "2031",
      impact: "Absolute"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTech((prev) => (prev + 1) % absoluteTechs.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Absolute Tech Showcase 2031
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Revolutionary technology solutions and insights for the future
          </p>
        </div>

        <div className="max-w-8xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-center space-x-6">
                <div className={`text-8xl p-6 rounded-3xl bg-gradient-to-r ${absoluteTechs[currentTech].gradient}`}>
                  {absoluteTechs[currentTech].icon}
                </div>
                <div>
                  <h2 className="text-4xl font-bold mb-2">{absoluteTechs[currentTech].title}</h2>
                  <p className="text-xl text-gray-300">{absoluteTechs[currentTech].subtitle}</p>
                </div>
              </div>

              <p className="text-lg text-gray-300 leading-relaxed">
                {absoluteTechs[currentTech].description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {absoluteTechs[currentTech].features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-violet-400 rounded-full"></div>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex space-x-8">
                {Object.entries(absoluteTechs[currentTech].stats).map(([key, value]) => (
                  <div key={key} className="text-center">
                    <div className="text-4xl font-bold text-white">{value}</div>
                    <div className="text-sm text-gray-400 capitalize">{key}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className={`h-[500px] rounded-3xl bg-gradient-to-br ${absoluteTechs[currentTech].gradient} p-10 relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white">
                  <div className="text-9xl mb-6">
                    {absoluteTechs[currentTech].icon}
                  </div>
                  <h3 className="text-3xl font-bold mb-4">{absoluteTechs[currentTech].title}</h3>
                  <p className="text-lg opacity-90">{absoluteTechs[currentTech].subtitle}</p>
                  <div className="mt-8 flex items-center space-x-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold">{absoluteTechs[currentTech].timeline}</div>
                      <div className="text-sm opacity-75">Timeline</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold">{absoluteTechs[currentTech].impact}</div>
                      <div className="text-sm opacity-75">Impact</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center space-x-6 mt-16">
            {absoluteTechs.map((tech, index) => (
              <button
                key={tech.id}
                onClick={() => setCurrentTech(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  currentTech === index
                    ? 'bg-gradient-to-r from-purple-400 to-violet-400 scale-125'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex space-x-6">
              <a
                href="/pages/InterdimensionalTech2027"
                className="px-10 py-5 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-full font-bold text-lg hover:shadow-lg hover:shadow-violet-500/25 transition-all duration-300 transform hover:scale-105"
              >
                ⚡ Interdimensional Tech →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AbsoluteTechShowcase2031;