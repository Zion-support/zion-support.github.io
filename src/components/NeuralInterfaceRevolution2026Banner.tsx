import React from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility

const NeuralInterfaceRevolution2026Banner = () => {
  return (
    <section className="bg-gradient-to-r from-emerald-900 via-teal-900 to-cyan-900 text-white py-20 relative overflow-hidden">
      {/* Neural network animation background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-green-600/10 to-cyan-600/10"></div>
        <div className="absolute top-20 left-20 w-40 h-40 bg-emerald-400 rounded-full opacity-5 animate-pulse"></div>
        <div className="absolute top-40 right-32 w-32 h-32 bg-teal-400 rounded-full opacity-8 animate-bounce"></div>
        <div className="absolute bottom-32 left-1/3 w-24 h-24 bg-cyan-400 rounded-full opacity-6 animate-ping"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-green-400 rounded-full opacity-10 animate-pulse"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full px-8 py-3 mb-8">
            <span className="text-lg font-bold text-black">🧠 NEURAL INTERFACE REVOLUTION 2026</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300 bg-clip-text text-transparent">
            Mind-Machine Fusion
          </h1>
          <p className="text-2xl md:text-3xl opacity-90 mb-12 max-w-5xl mx-auto leading-relaxed">
            Experience the ultimate fusion of human consciousness and artificial intelligence. 
            Direct neural interfaces that enable seamless communication between mind and machine.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="/neural-interface-2026"
              className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-10 py-5 rounded-xl font-bold text-lg hover:from-emerald-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              Explore Neural Interface
            </a>
            <a
              href="/brain-computer-interface"
              className="border-2 border-emerald-400 text-emerald-400 px-10 py-5 rounded-xl font-bold text-lg hover:bg-emerald-400 hover:text-black transition-all duration-300"
            >
              BCI Technology
            </a>
          </div>
        </div>

        {/* Neural Interface Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 backdrop-blur-sm rounded-2xl p-8 border border-emerald-400/30">
            <div className="text-5xl mb-6">🎯</div>
            <h3 className="text-2xl font-bold mb-4">Thought Control</h3>
            <p className="text-gray-200 mb-6 text-lg">
              Control devices and applications directly with your thoughts. No physical interaction required.
            </p>
            <div className="text-3xl font-bold text-emerald-300">Instant Response</div>
          </div>
          
          <div className="bg-gradient-to-br from-teal-500/20 to-cyan-500/20 backdrop-blur-sm rounded-2xl p-8 border border-teal-400/30">
            <div className="text-5xl mb-6">💭</div>
            <h3 className="text-2xl font-bold mb-4">Memory Enhancement</h3>
            <p className="text-gray-200 mb-6 text-lg">
              Augment your memory with AI-powered recall and perfect information storage.
            </p>
            <div className="text-3xl font-bold text-teal-300">Perfect Recall</div>
          </div>
          
          <div className="bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30">
            <div className="text-5xl mb-6">🌐</div>
            <h3 className="text-2xl font-bold mb-4">Telepathic Communication</h3>
            <p className="text-gray-200 mb-6 text-lg">
              Communicate directly with other neural interface users through thought transmission.
            </p>
            <div className="text-3xl font-bold text-cyan-300">Mind to Mind</div>
          </div>
        </div>

        {/* Applications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 backdrop-blur-sm rounded-2xl p-8 border border-emerald-400/20">
            <h3 className="text-3xl font-bold mb-6 text-emerald-300">Medical Applications</h3>
            <ul className="space-y-4 text-lg text-gray-200">
              <li className="flex items-center">
                <span className="text-emerald-400 mr-3">✓</span>
                Restore mobility to paralyzed patients
              </li>
              <li className="flex items-center">
                <span className="text-emerald-400 mr-3">✓</span>
                Treat neurological disorders
              </li>
              <li className="flex items-center">
                <span className="text-emerald-400 mr-3">✓</span>
                Enhance cognitive abilities
              </li>
              <li className="flex items-center">
                <span className="text-emerald-400 mr-3">✓</span>
                Real-time brain monitoring
              </li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-teal-500/10 to-cyan-500/10 backdrop-blur-sm rounded-2xl p-8 border border-teal-400/20">
            <h3 className="text-3xl font-bold mb-6 text-teal-300">Professional Applications</h3>
            <ul className="space-y-4 text-lg text-gray-200">
              <li className="flex items-center">
                <span className="text-teal-400 mr-3">✓</span>
                Enhanced learning and training
              </li>
              <li className="flex items-center">
                <span className="text-teal-400 mr-3">✓</span>
                Remote operation of machinery
              </li>
              <li className="flex items-center">
                <span className="text-teal-400 mr-3">✓</span>
                Instant data visualization
              </li>
              <li className="flex items-center">
                <span className="text-teal-400 mr-3">✓</span>
                Collaborative problem solving
              </li>
            </ul>
          </div>
        </div>

        {/* Technology Specifications */}
        <div className="bg-gradient-to-r from-black/30 to-black/50 backdrop-blur-sm rounded-3xl p-12 border border-emerald-400/20">
          <h3 className="text-3xl font-bold text-center mb-12 text-emerald-300">Neural Interface Specifications</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-emerald-300 mb-3">10,000+</div>
              <div className="text-gray-300 text-lg">Neural Channels</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-teal-300 mb-3">1ms</div>
              <div className="text-gray-300 text-lg">Response Time</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyan-300 mb-3">99.9%</div>
              <div className="text-gray-300 text-lg">Accuracy Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-emerald-300 mb-3">24/7</div>
              <div className="text-gray-300 text-lg">Continuous Use</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-xl text-gray-300 mb-8">
            Ready to transcend the limitations of traditional interfaces?
          </p>
          <a
            href="/neural-interface-demo"
            className="inline-flex items-center bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-12 py-4 rounded-xl font-bold text-xl hover:from-emerald-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-2xl"
          >
            Experience Neural Interface
            <span className="ml-2">🧠</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default NeuralInterfaceRevolution2026Banner;