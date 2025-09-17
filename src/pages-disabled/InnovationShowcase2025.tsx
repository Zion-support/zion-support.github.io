import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const InnovationShowcase2025: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-blue-900">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6 animate-pulse">
            ✨ INNOVATION SHOWCASE 2025
          </div>
          <h1 className="text-6xl font-bold text-white mb-6 leading-tight">
            Innovation Showcase
            <span className="block bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              2025
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Explore the most innovative solutions and cutting-edge technologies that are revolutionizing 
            industries and transforming the way we live, work, and interact with the world.
          </p>
        </div>

        {/* Featured Innovations */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Featured Innovations</h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <div className="flex items-center mb-6">
                <div className="text-5xl mr-4">🌐</div>
                <div>
                  <h3 className="text-3xl font-bold text-white">Metaverse Integration</h3>
                  <p className="text-green-400 font-semibold">Revolutionary Platform</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 text-lg">
                Seamless integration between physical and virtual worlds, enabling immersive experiences 
                that blur the lines between reality and digital space.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-green-600/20 text-green-400 px-4 py-2 rounded-full text-sm font-semibold">
                  Virtual Reality
                </span>
                <span className="bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full text-sm font-semibold">
                  Augmented Reality
                </span>
                <span className="bg-purple-600/20 text-purple-400 px-4 py-2 rounded-full text-sm font-semibold">
                  AI Integration
                </span>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <div className="flex items-center mb-6">
                <div className="text-5xl mr-4">🔋</div>
                <div>
                  <h3 className="text-3xl font-bold text-white">Clean Energy Revolution</h3>
                  <p className="text-green-400 font-semibold">Sustainable Technology</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 text-lg">
                Breakthrough clean energy solutions including fusion power, advanced solar cells, 
                and next-generation battery technology for a sustainable future.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-green-600/20 text-green-400 px-4 py-2 rounded-full text-sm font-semibold">
                  Fusion Power
                </span>
                <span className="bg-yellow-600/20 text-yellow-400 px-4 py-2 rounded-full text-sm font-semibold">
                  Solar Innovation
                </span>
                <span className="bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full text-sm font-semibold">
                  Energy Storage
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Innovation Categories */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Innovation Categories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-blue-500/30">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-2xl font-bold text-white mb-4">Artificial Intelligence</h3>
              <p className="text-gray-300 mb-6">
                Advanced AI systems with human-like reasoning, creativity, and problem-solving capabilities.
              </p>
              <div className="text-blue-400 font-semibold">12 Innovations →</div>
            </div>

            <div className="bg-gradient-to-br from-green-600/20 to-teal-600/20 rounded-2xl p-8 border border-green-500/30">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-2xl font-bold text-white mb-4">Biotechnology</h3>
              <p className="text-gray-300 mb-6">
                Revolutionary biotech solutions for healthcare, agriculture, and environmental sustainability.
              </p>
              <div className="text-green-400 font-semibold">8 Innovations →</div>
            </div>

            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl p-8 border border-purple-500/30">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold text-white mb-4">Quantum Computing</h3>
              <p className="text-gray-300 mb-6">
                Quantum computing breakthroughs enabling unprecedented computational power and speed.
              </p>
              <div className="text-purple-400 font-semibold">6 Innovations →</div>
            </div>

            <div className="bg-gradient-to-br from-orange-600/20 to-red-600/20 rounded-2xl p-8 border border-orange-500/30">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold text-white mb-4">Space Technology</h3>
              <p className="text-gray-300 mb-6">
                Advanced space exploration technologies and interplanetary mission capabilities.
              </p>
              <div className="text-orange-400 font-semibold">10 Innovations →</div>
            </div>

            <div className="bg-gradient-to-br from-teal-600/20 to-cyan-600/20 rounded-2xl p-8 border border-teal-500/30">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-2xl font-bold text-white mb-4">Neural Interfaces</h3>
              <p className="text-gray-300 mb-6">
                Direct brain-computer interfaces and neural enhancement technologies.
              </p>
              <div className="text-teal-400 font-semibold">7 Innovations →</div>
            </div>

            <div className="bg-gradient-to-br from-indigo-600/20 to-blue-600/20 rounded-2xl p-8 border border-indigo-500/30">
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-2xl font-bold text-white mb-4">Digital Transformation</h3>
              <p className="text-gray-300 mb-6">
                Digital solutions transforming industries and creating new business models.
              </p>
              <div className="text-indigo-400 font-semibold">15 Innovations →</div>
            </div>
          </div>
        </div>

        {/* Success Stories */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="text-3xl mb-4">📈</div>
              <h3 className="text-xl font-bold text-white mb-3">TechCorp AI</h3>
              <p className="text-gray-300 mb-4">
                "Our AI implementation increased productivity by 300% and reduced operational costs by 50%."
              </p>
              <div className="text-green-400 font-semibold">Read Case Study →</div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="text-3xl mb-4">🏥</div>
              <h3 className="text-xl font-bold text-white mb-3">MedTech Solutions</h3>
              <p className="text-gray-300 mb-4">
                "Our biotech innovations helped diagnose diseases 10x faster with 99% accuracy."
              </p>
              <div className="text-green-400 font-semibold">Read Case Study →</div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="text-3xl mb-4">🌍</div>
              <h3 className="text-xl font-bold text-white mb-3">EcoTech Global</h3>
              <p className="text-gray-300 mb-4">
                "Our clean energy solutions reduced carbon emissions by 80% across 50+ countries."
              </p>
              <div className="text-green-400 font-semibold">Read Case Study →</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 rounded-3xl p-12">
          <h2 className="text-4xl font-bold text-white mb-6">
            Join the Innovation Revolution
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Be part of the future. Discover, implement, and scale innovative solutions that will 
            transform your business and make a positive impact on the world.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-green-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              Explore Innovations
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-green-600 transition-all duration-300">
              Submit Your Innovation
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default InnovationShowcase2025;