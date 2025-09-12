import React from 'react';

const QuantumComputing: React.FC = () => {
  const applications = [
    {
      title: "Quantum Machine Learning",
      description: "Leverage quantum algorithms for enhanced machine learning capabilities",
      features: ["Quantum Neural Networks", "Quantum Optimization", "Quantum Feature Maps"]
    },
    {
      title: "Cryptography & Security",
      description: "Quantum-resistant encryption and secure communication protocols",
      features: ["Post-Quantum Cryptography", "Quantum Key Distribution", "Quantum Random Number Generation"]
    },
    {
      title: "Financial Modeling",
      description: "Advanced quantum algorithms for financial risk analysis and portfolio optimization",
      features: ["Quantum Monte Carlo", "Portfolio Optimization", "Risk Assessment"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Quantum Computing Solutions</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Harness the power of quantum computing for revolutionary applications
          </p>
        </div>
        
        <div className="space-y-12">
          {applications.map((app, index) => (
            <div key={index} className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">{app.title}</h3>
              <p className="text-gray-300 mb-6">{app.description}</p>
              <div className="grid md:grid-cols-3 gap-4">
                {app.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuantumComputing;