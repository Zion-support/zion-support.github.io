import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const AdvancedBiotech2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🧬 BIOTECH REVOLUTION • 2026
          </div>
          <h1 className="text-6xl font-bold text-white mb-6">
            Advanced Biotechnology 2026
          </h1>
          <p className="text-2xl text-emerald-200 max-w-4xl mx-auto mb-8">
            Discover the future of biotechnology with synthetic biology, gene editing, and personalized medicine that's transforming healthcare
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              🧬 Explore Biotech Future →
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-emerald-600 transition-all duration-300 font-semibold text-lg">
              🔬 Research Applications
            </button>
          </div>
        </div>

        {/* Revolutionary Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30">
            <div className="text-6xl mb-4 text-center">🧬</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-white">Synthetic Biology</h3>
            <p className="text-emerald-200 text-center">
              Engineering biological systems from scratch to create new organisms and materials with unprecedented capabilities
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30">
            <div className="text-6xl mb-4 text-center">✂️</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-white">Precision Gene Editing</h3>
            <p className="text-cyan-200 text-center">
              CRISPR 3.0 and beyond enabling precise genetic modifications with zero off-target effects
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30">
            <div className="text-6xl mb-4 text-center">💊</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-white">Personalized Medicine</h3>
            <p className="text-purple-200 text-center">
              Tailored treatments based on individual genetic profiles and real-time health monitoring
            </p>
          </div>
        </div>

        {/* Technology Showcase */}
        <div className="bg-gradient-to-r from-teal-800/50 to-emerald-800/50 rounded-2xl p-12 mb-16 backdrop-blur-sm border border-teal-400/30">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">🔬 Cutting-Edge Biotech Innovations</h2>
            <p className="text-xl text-teal-200">Revolutionary technologies reshaping healthcare and life sciences</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h4 className="text-xl font-semibold text-white mb-3">🧬 DNA Origami Engineering</h4>
                <p className="text-gray-300">
                  Folding DNA into precise 3D structures for drug delivery, nanorobots, and molecular computing applications.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h4 className="text-xl font-semibold text-white mb-3">🔬 Organ-on-Chip Technology</h4>
                <p className="text-gray-300">
                  Microfluidic devices that mimic human organ functions for drug testing and personalized medicine development.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h4 className="text-xl font-semibold text-white mb-3">🧪 Synthetic Protein Design</h4>
                <p className="text-gray-300">
                  AI-powered protein engineering creating novel enzymes and therapeutic proteins with custom functions.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h4 className="text-xl font-semibold text-white mb-3">🌱 Living Materials</h4>
                <p className="text-gray-300">
                  Self-healing, self-replicating materials made from engineered cells for sustainable manufacturing.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h4 className="text-xl font-semibold text-white mb-3">🧠 Brain-Computer Interfaces</h4>
                <p className="text-gray-300">
                  Direct neural interfaces enabling thought-controlled prosthetics and enhanced cognitive capabilities.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h4 className="text-xl font-semibold text-white mb-3">🔬 Quantum Biology</h4>
                <p className="text-gray-300">
                  Exploring quantum effects in biological systems for enhanced photosynthesis and navigation.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Applications Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">🏥 Healthcare Revolution</h2>
            <p className="text-xl text-gray-300">Transforming medicine with advanced biotechnology</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-3 text-center">💉</div>
              <h3 className="text-lg font-bold mb-2 text-center text-white">Gene Therapy</h3>
              <p className="text-emerald-200 text-sm text-center">
                Curing genetic diseases with precision gene editing and delivery systems
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-3 text-center">🧪</div>
              <h3 className="text-lg font-bold mb-2 text-center text-white">Lab-Grown Organs</h3>
              <p className="text-cyan-200 text-sm text-center">
                Bioprinting functional organs for transplantation and research
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-3 text-center">🔬</div>
              <h3 className="text-lg font-bold mb-2 text-center text-white">Cancer Immunotherapy</h3>
              <p className="text-purple-200 text-sm text-center">
                Engineered immune cells that target and destroy cancer cells
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-orange-600/20 to-red-600/20 backdrop-blur-sm rounded-xl p-6 border border-orange-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-3 text-center">🧠</div>
              <h3 className="text-lg font-bold mb-2 text-center text-white">Neuroregeneration</h3>
              <p className="text-orange-200 text-sm text-center">
                Repairing damaged neural tissue and restoring brain function
              </p>
            </div>
          </div>
        </div>

        {/* Environmental Impact */}
        <div className="bg-gradient-to-r from-green-800/50 to-emerald-800/50 rounded-2xl p-12 mb-16 backdrop-blur-sm border border-green-400/30">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">🌍 Environmental Solutions</h2>
            <p className="text-xl text-green-200">Biotechnology for a sustainable future</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-emerald-400 mb-2">-80%</div>
              <div className="text-white font-semibold mb-2">Carbon Emissions</div>
              <div className="text-emerald-200 text-sm">Through synthetic biology solutions</div>
            </div>
            
            <div className="text-center">
              <div className="text-5xl font-bold text-teal-400 mb-2">100%</div>
              <div className="text-white font-semibold mb-2">Biodegradable</div>
              <div className="text-teal-200 text-sm">Materials and packaging</div>
            </div>
            
            <div className="text-center">
              <div className="text-5xl font-bold text-cyan-400 mb-2">10x</div>
              <div className="text-white font-semibold mb-2">Efficiency</div>
              <div className="text-cyan-200 text-sm">In resource utilization</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-2xl p-12 border border-emerald-400/30">
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Shape the Future of Life?</h2>
            <p className="text-xl text-emerald-200 mb-8 max-w-3xl mx-auto">
              Join the biotechnology revolution and be part of creating solutions that will transform healthcare, environment, and human potential.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-10 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                🧬 Start Biotech Journey
              </button>
              <button className="border-2 border-white text-white px-10 py-4 rounded-lg hover:bg-white hover:text-emerald-600 transition-all duration-300 font-semibold text-lg">
                📞 Consult Biotech Experts
              </button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AdvancedBiotech2026;