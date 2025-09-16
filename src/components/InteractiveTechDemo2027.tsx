import React, { useState } from 'react';

const InteractiveTechDemo2027: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState(0);

  const demos = [
    {
      title: "AI-Powered Analytics Dashboard",
      description: "Real-time business intelligence with predictive insights",
      features: ["Real-time Data Processing", "Predictive Analytics", "Custom Dashboards", "Automated Reports"],
      image: "📊"
    },
    {
      title: "Quantum Computing Simulator",
      description: "Experience quantum algorithms in action",
      features: ["Quantum Circuit Design", "Algorithm Testing", "Performance Metrics", "Visualization Tools"],
      image: "⚛️"
    },
    {
      title: "Neural Interface Prototype",
      description: "Brain-computer interface demonstration",
      features: ["Thought Recognition", "Neural Mapping", "Real-time Processing", "Safety Protocols"],
      image: "🧠"
    },
    {
      title: "Blockchain Explorer",
      description: "Interactive blockchain network visualization",
      features: ["Transaction Tracking", "Smart Contract Analysis", "Network Health", "Security Monitoring"],
      image: "🔗"
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-gray-900 to-blue-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            Interactive Technology Demonstrations
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Experience our cutting-edge technologies through interactive demos and see the future in action.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {demos.map((demo, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                  activeDemo === index
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                    : 'bg-white/10 backdrop-blur-lg text-white hover:bg-white/20'
                }`}
                onClick={() => setActiveDemo(index)}
              >
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">{demo.image}</div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{demo.title}</h3>
                    <p className="text-blue-200">{demo.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">{demos[activeDemo].image}</div>
              <h3 className="text-3xl font-bold text-white mb-4">{demos[activeDemo].title}</h3>
              <p className="text-blue-200 text-lg">{demos[activeDemo].description}</p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {demos[activeDemo].features.map((feature, index) => (
                <div key={index} className="bg-white/20 rounded-lg p-4 text-center">
                  <div className="text-white font-semibold">{feature}</div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <button className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300">
                Try Interactive Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechDemo2027;