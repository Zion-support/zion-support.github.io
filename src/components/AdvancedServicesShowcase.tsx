import React from 'react';

const AdvancedServicesShowcase: React.FC = () => {
  const services = [
    {
      id: 1,
      title: "Advanced Neural Networks",
      description: "Cutting-edge AI with 99.9% accuracy for complex problem solving",
      icon: "🧠",
      features: ["Deep Learning", "Pattern Recognition", "Cognitive Computing"],
      link: "/pages/AdvancedNeuralNetworks2025",
      color: "from-emerald-500 to-teal-600",
      bgColor: "from-emerald-50 to-teal-50"
    },
    {
      id: 2,
      title: "Blockchain Revolution",
      description: "Web3, DeFi, and enterprise blockchain solutions",
      icon: "🔗",
      features: ["DeFi Protocols", "Smart Contracts", "NFT Marketplaces"],
      link: "/pages/BlockchainRevolution2025",
      color: "from-orange-500 to-red-600",
      bgColor: "from-orange-50 to-red-50"
    },
    {
      id: 3,
      title: "Sustainable Technology",
      description: "Green tech solutions reducing environmental impact by 80%",
      icon: "🌱",
      features: ["Renewable Energy", "Carbon Neutral", "Zero Waste"],
      link: "/pages/SustainableTech2025",
      color: "from-green-500 to-emerald-600",
      bgColor: "from-green-50 to-emerald-50"
    },
    {
      id: 4,
      title: "AI Revolution 2025",
      description: "Autonomous AI agents transforming industries worldwide",
      icon: "🤖",
      features: ["Autonomous Agents", "Edge Computing", "Generative AI"],
      link: "/pages/AIRevolution2025",
      color: "from-purple-500 to-pink-600",
      bgColor: "from-purple-50 to-pink-50"
    },
    {
      id: 5,
      title: "Quantum Computing",
      description: "Exponential speed improvements for impossible problems",
      icon: "⚡",
      features: ["Quantum Speed", "Cryptography", "Simulation"],
      link: "/pages/QuantumComputingBreakthrough",
      color: "from-cyan-500 to-blue-600",
      bgColor: "from-cyan-50 to-blue-50"
    },
    {
      id: 6,
      title: "Neural Interfaces",
      description: "Direct mind-machine communication technology",
      icon: "🧬",
      features: ["Brain-Computer", "Thought Control", "Neural Feedback"],
      link: "/pages/NeuralInterfaceFuture",
      color: "from-teal-500 to-emerald-600",
      bgColor: "from-teal-50 to-emerald-50"
    }
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-sm font-semibold mb-6">
            🚀 REVOLUTIONARY SERVICES 2025
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Advanced Technology Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the future with our cutting-edge technology services that are reshaping industries 
            and creating unprecedented opportunities for growth and innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className={`bg-gradient-to-br ${service.bgColor} rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:scale-105`}
            >
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="text-center">
                <a
                  href={service.link}
                  className={`inline-block bg-gradient-to-r ${service.color} text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold hover:scale-105`}
                >
                  Explore Service →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Join thousands of companies already using our revolutionary technology solutions 
              to achieve unprecedented results and competitive advantages.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-xl transition-all duration-300 font-bold text-lg">
                Get Started Today
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold text-lg">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedServicesShowcase;