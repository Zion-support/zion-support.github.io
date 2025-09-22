import React from 'react';

interface QuantumNeuralFusionShowcaseProps {
  className?: string;
}

export default function QuantumNeuralFusionShowcase({ 
  className = "" 
}: QuantumNeuralFusionShowcaseProps) {
  const features = [
    {
      title: "Quantum Processing Units",
      description: "Revolutionary quantum processors that operate at speeds previously thought impossible",
      icon: "⚛️"
    },
    {
      title: "Neural Network Integration",
      description: "Advanced neural networks that learn and adapt in real-time",
      icon: "🧠"
    },
    {
      title: "Fusion Algorithms",
      description: "Breakthrough algorithms that combine quantum and neural processing",
      icon: "🔬"
    },
    {
      title: "Real-time Adaptation",
      description: "AI systems that continuously evolve and improve their capabilities",
      icon: "🔄"
    }
  ];

  return (
    <div className={`py-16 ${className}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Quantum Neural Fusion Showcase
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the future of AI with our revolutionary quantum neural fusion technology
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4 text-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">Ready to Experience the Future?</h3>
            <p className="text-blue-100 mb-6">
              Join us in the quantum neural fusion revolution and transform your business with next-generation AI
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}