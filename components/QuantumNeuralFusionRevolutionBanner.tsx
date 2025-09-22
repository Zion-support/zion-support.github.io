import React from 'react';

interface QuantumNeuralFusionRevolutionBannerProps {
  className?: string;
}

export default function QuantumNeuralFusionRevolutionBanner({ 
  className = "" 
}: QuantumNeuralFusionRevolutionBannerProps) {
  return (
    <div className={`bg-gradient-to-br from-cyan-900 via-blue-900 to-purple-900 text-white py-12 ${className}`}>
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          Quantum Neural Fusion Revolution
        </h2>
        <p className="text-lg md:text-xl text-cyan-100 mb-6 max-w-3xl mx-auto">
          The convergence of quantum computing and neural networks creating unprecedented AI capabilities
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Quantum Processing</h3>
            <p className="text-cyan-100">Exponential computational power</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Neural Networks</h3>
            <p className="text-cyan-100">Advanced pattern recognition</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Fusion Technology</h3>
            <p className="text-cyan-100">Revolutionary AI breakthroughs</p>
          </div>
        </div>
      </div>
    </div>
  );
}