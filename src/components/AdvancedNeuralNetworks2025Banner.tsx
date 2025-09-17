import React from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility

const AdvancedNeuralNetworks2025Banner = () => {
  return (
    <section className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 text-white py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-pink-500/20"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-8 py-3 mb-8">
            <span className="text-sm font-medium">🧠 ADVANCED NEURAL NETWORKS</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent">
            Advanced Neural Networks 2025
          </h2>
          <p className="text-2xl md:text-3xl opacity-90 mb-12 max-w-5xl mx-auto leading-relaxed">
            Discover the next generation of neural network architectures that mimic the human brain 
            with unprecedented accuracy and efficiency. Experience AI that thinks like humans.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="/ai-2025/neural-networks"
              className="bg-white text-orange-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Explore Neural Networks
            </a>
            <a
              href="/neural-networks/demo"
              className="border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-orange-600 transition-all duration-300 transform hover:scale-105"
            >
              Try Neural Demo
            </a>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-opacity-20 transition-all duration-300">
            <div className="text-5xl mb-6">🔗</div>
            <h3 className="text-xl font-bold mb-4">Deep Learning</h3>
            <p className="opacity-90 text-sm">
              Multi-layered neural networks with advanced backpropagation
            </p>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-opacity-20 transition-all duration-300">
            <div className="text-5xl mb-6">🔄</div>
            <h3 className="text-xl font-bold mb-4">Recurrent Networks</h3>
            <p className="opacity-90 text-sm">
              Memory-based networks for sequential data processing
            </p>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-opacity-20 transition-all duration-300">
            <div className="text-5xl mb-6">👁️</div>
            <h3 className="text-xl font-bold mb-4">Convolutional Networks</h3>
            <p className="opacity-90 text-sm">
              Vision-based networks for image and video recognition
            </p>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-opacity-20 transition-all duration-300">
            <div className="text-5xl mb-6">⚡</div>
            <h3 className="text-xl font-bold mb-4">Transformer Networks</h3>
            <p className="opacity-90 text-sm">
              Attention-based networks for natural language processing
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvancedNeuralNetworks2025Banner;