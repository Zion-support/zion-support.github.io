import React from 'react';

const BiotechRevolution2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-teal-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🧬 BREAKTHROUGH 2026 • BIOTECH REVOLUTION
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
            Biotechnology Revolution 2026
          </h1>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Discover the future of life sciences with our revolutionary biotechnology solutions that are 
            transforming healthcare, agriculture, and environmental sustainability through genetic engineering and synthetic biology.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-green-600 to-teal-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Explore Biotech →
            </button>
            <button className="border-2 border-green-400 text-green-400 px-8 py-4 rounded-lg hover:bg-green-400 hover:text-white transition-all duration-300 font-semibold text-lg">
              Learn More
            </button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-green-600/30 to-emerald-600/30 backdrop-blur-sm rounded-xl p-8 border border-green-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🧬</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Gene Editing</h3>
            <p className="text-green-100 mb-6 text-center">
              Precision gene editing technologies that can cure genetic diseases, 
              enhance human capabilities, and create new life forms.
            </p>
            <ul className="text-green-200 space-y-2 text-sm">
              <li>• CRISPR-Cas9 advanced</li>
              <li>• Base editing systems</li>
              <li>• Prime editing technology</li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-teal-600/30 to-cyan-600/30 backdrop-blur-sm rounded-xl p-8 border border-teal-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🌱</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Synthetic Biology</h3>
            <p className="text-teal-100 mb-6 text-center">
              Engineering biological systems to create new organisms, 
              materials, and solutions for global challenges.
            </p>
            <ul className="text-teal-200 space-y-2 text-sm">
              <li>• Designer organisms</li>
              <li>• Bio-manufacturing</li>
              <li>• Living materials</li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-emerald-600/30 to-green-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">💊</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Personalized Medicine</h3>
            <p className="text-emerald-100 mb-6 text-center">
              Tailored medical treatments based on individual genetic profiles, 
              lifestyle, and environmental factors for optimal health outcomes.
            </p>
            <ul className="text-emerald-200 space-y-2 text-sm">
              <li>• Genomic medicine</li>
              <li>• Precision therapeutics</li>
              <li>• Predictive diagnostics</li>
            </ul>
          </div>
        </div>

        {/* Technology Showcase */}
        <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">🔬 Revolutionary Biotech Technologies</h2>
            <p className="text-xl opacity-90">Cutting-edge biotechnology that's reshaping life as we know it</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="text-3xl">🧪</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Lab-Grown Organs</h3>
                  <p className="text-gray-300">3D bioprinting and tissue engineering to create replacement organs and tissues.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="text-3xl">🦠</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Synthetic Microbes</h3>
                  <p className="text-gray-300">Engineered microorganisms that can clean up pollution, produce biofuels, and treat diseases.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="text-3xl">🧠</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Brain-Computer Interfaces</h3>
                  <p className="text-gray-300">Direct neural interfaces that restore mobility and communication for people with disabilities.</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="text-3xl">🌾</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Climate-Resilient Crops</h3>
                  <p className="text-gray-300">Genetically modified crops that can thrive in extreme weather and poor soil conditions.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="text-3xl">🔬</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">DNA Data Storage</h3>
                  <p className="text-gray-300">Using DNA as a storage medium for massive amounts of data with incredible density and longevity.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="text-3xl">🦠</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Living Therapeutics</h3>
                  <p className="text-gray-300">Living cells and organisms engineered to treat diseases from within the body.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Applications */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">💼 Biotech Applications</h2>
            <p className="text-xl opacity-90">Transforming industries through biotechnology innovation</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 backdrop-blur-sm rounded-lg p-6 border border-green-400/30">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-lg font-semibold mb-2">Healthcare</h3>
              <p className="text-sm text-gray-300">Personalized medicine, gene therapy, and regenerative medicine solutions.</p>
            </div>
            
            <div className="bg-gradient-to-br from-teal-600/20 to-cyan-600/20 backdrop-blur-sm rounded-lg p-6 border border-teal-400/30">
              <div className="text-4xl mb-4">🌾</div>
              <h3 className="text-lg font-semibold mb-2">Agriculture</h3>
              <p className="text-sm text-gray-300">Sustainable farming, crop improvement, and food security solutions.</p>
            </div>
            
            <div className="bg-gradient-to-br from-emerald-600/20 to-green-600/20 backdrop-blur-sm rounded-lg p-6 border border-emerald-400/30">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-lg font-semibold mb-2">Environment</h3>
              <p className="text-sm text-gray-300">Bioremediation, carbon capture, and environmental restoration technologies.</p>
            </div>
            
            <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-lg p-6 border border-cyan-400/30">
              <div className="text-4xl mb-4">🏭</div>
              <h3 className="text-lg font-semibold mb-2">Manufacturing</h3>
              <p className="text-sm text-gray-300">Bio-based materials, sustainable production, and circular economy solutions.</p>
            </div>
          </div>
        </div>

        {/* Ethical Considerations */}
        <div className="bg-gradient-to-r from-yellow-600/20 to-orange-600/20 backdrop-blur-sm rounded-2xl p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">⚖️ Ethical Biotechnology</h2>
            <p className="text-xl opacity-90 max-w-4xl mx-auto">
              We are committed to responsible biotechnology development that benefits humanity while 
              respecting ethical boundaries and ensuring safety for all life on Earth.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-6xl mb-4">🛡️</div>
              <h3 className="text-2xl font-bold mb-4">Safety First</h3>
              <p className="text-gray-300">Rigorous safety protocols and risk assessment for all biotech applications.</p>
            </div>
            
            <div className="text-center">
              <div className="text-6xl mb-4">🌍</div>
              <h3 className="text-2xl font-bold mb-4">Global Benefit</h3>
              <p className="text-gray-300">Ensuring biotech solutions benefit all of humanity, not just privileged few.</p>
            </div>
            
            <div className="text-center">
              <div className="text-6xl mb-4">🔬</div>
              <h3 className="text-2xl font-bold mb-4">Transparent Research</h3>
              <p className="text-gray-300">Open science and transparent research practices for public trust and oversight.</p>
            </div>
          </div>
        </div>

        {/* Future Vision */}
        <div className="bg-gradient-to-r from-green-600/20 to-teal-600/20 backdrop-blur-sm rounded-2xl p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">🌟 The Future of Biotechnology</h2>
            <p className="text-xl opacity-90 max-w-4xl mx-auto">
              By 2030, biotechnology will have transformed healthcare, agriculture, and environmental sustainability, 
              creating a world where genetic diseases are cured, food security is guaranteed, and environmental damage is reversed.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="text-3xl">💊</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Disease-Free Future</h3>
                  <p className="text-gray-300">Genetic diseases eliminated through advanced gene therapy and personalized medicine.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="text-3xl">🌱</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Sustainable Agriculture</h3>
                  <p className="text-gray-300">Climate-resilient crops and sustainable farming practices ensuring global food security.</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="text-3xl">🌍</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Environmental Restoration</h3>
                  <p className="text-gray-300">Biotech solutions for cleaning up pollution and restoring damaged ecosystems.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="text-3xl">🧬</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Human Enhancement</h3>
                  <p className="text-gray-300">Ethical human enhancement technologies that improve quality of life and capabilities.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-green-600/20 to-teal-600/20 backdrop-blur-sm rounded-2xl p-12">
          <h2 className="text-4xl font-bold mb-6">Ready to Shape the Future of Life?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join the biotechnology revolution and help us create a healthier, more sustainable world 
            through the power of genetic engineering and synthetic biology.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-green-600 to-teal-600 text-white px-12 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Biotech Project
            </button>
            <button className="border-2 border-white text-white px-12 py-4 rounded-lg hover:bg-white hover:text-green-600 transition-all duration-300 font-semibold text-lg">
              Contact Biotech Team
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BiotechRevolution2026;