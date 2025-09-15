import React from 'react';
import { motion } from 'framer-motion';

const BiotechRevolution2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-emerald-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🧬 BIOTECH REVOLUTION • 2026
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Next-Generation Biotechnology
            </h1>
            <p className="text-xl opacity-90 max-w-4xl mx-auto mb-8">
              Revolutionizing healthcare, agriculture, and environmental solutions through 
              cutting-edge biotechnology, gene editing, and synthetic biology innovations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gradient-to-r from-green-600 to-emerald-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Explore Biotech Solutions
              </button>
              <button className="border border-green-400 text-green-400 px-8 py-4 rounded-lg hover:bg-green-400 hover:text-white transition-all duration-300 font-semibold">
                Watch Innovation
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Revolutionary Features */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Revolutionary Biotech Capabilities</h2>
          <p className="text-xl opacity-90">Discover breakthrough technologies reshaping life sciences</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-green-600/30 to-emerald-600/30 backdrop-blur-sm rounded-xl p-8 border border-green-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-5xl mb-4 text-center">🧬</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Gene Editing & CRISPR</h3>
            <p className="text-green-100 mb-6 text-center">
              Advanced gene editing technologies that can precisely modify DNA sequences 
              to treat genetic diseases and enhance human capabilities.
            </p>
            <ul className="text-green-200 space-y-2 text-sm">
              <li>• CRISPR-Cas9 precision editing</li>
              <li>• Base editing technologies</li>
              <li>• Prime editing systems</li>
              <li>• Therapeutic applications</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-5xl mb-4 text-center">🔬</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Synthetic Biology</h3>
            <p className="text-cyan-100 mb-6 text-center">
              Engineering biological systems from scratch to create new organisms, 
              materials, and processes that don't exist in nature.
            </p>
            <ul className="text-cyan-200 space-y-2 text-sm">
              <li>• Artificial life forms</li>
              <li>• Bio-manufacturing</li>
              <li>• Synthetic organs</li>
              <li>• Bio-materials</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-5xl mb-4 text-center">🧠</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Neural Interfaces</h3>
            <p className="text-purple-100 mb-6 text-center">
              Direct brain-computer interfaces that enable thought-controlled devices 
              and enhanced cognitive capabilities through biotechnology.
            </p>
            <ul className="text-purple-200 space-y-2 text-sm">
              <li>• Brain-computer interfaces</li>
              <li>• Neural prosthetics</li>
              <li>• Memory enhancement</li>
              <li>• Cognitive augmentation</li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Healthcare Applications */}
      <div className="bg-gradient-to-r from-emerald-900/50 to-green-900/50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Healthcare Revolution</h2>
            <p className="text-xl opacity-90">Transforming medicine with biotechnology innovations</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-all duration-300">
              <div className="text-4xl mb-4">💊</div>
              <h3 className="text-xl font-bold mb-2">Personalized Medicine</h3>
              <p className="text-sm opacity-90">Customized treatments based on individual genetic profiles and biomarkers</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-all duration-300">
              <div className="text-4xl mb-4">🦠</div>
              <h3 className="text-xl font-bold mb-2">Cancer Immunotherapy</h3>
              <p className="text-sm opacity-90">Advanced immune system engineering to fight cancer cells naturally</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-all duration-300">
              <div className="text-4xl mb-4">🧪</div>
              <h3 className="text-xl font-bold mb-2">Regenerative Medicine</h3>
              <p className="text-sm opacity-90">Growing replacement organs and tissues using stem cell technology</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-all duration-300">
              <div className="text-4xl mb-4">🧬</div>
              <h3 className="text-xl font-bold mb-2">Gene Therapy</h3>
              <p className="text-sm opacity-90">Correcting genetic defects and treating inherited diseases at the DNA level</p>
            </div>
          </div>
        </div>
      </div>

      {/* Agricultural Innovation */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Agricultural Revolution</h2>
          <p className="text-xl opacity-90">Feeding the world with sustainable biotechnology solutions</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold mb-6">Sustainable Agriculture</h3>
            <p className="text-lg opacity-90 mb-6">
              Our biotechnology solutions are revolutionizing agriculture by creating 
              drought-resistant crops, reducing pesticide use, and increasing yields 
              while maintaining environmental sustainability.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <span className="text-green-400">✓</span>
                <span>Climate-resistant crop varieties</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-green-400">✓</span>
                <span>Bio-fertilizers and pest control</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-green-400">✓</span>
                <span>Precision agriculture systems</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-green-400">✓</span>
                <span>Vertical farming solutions</span>
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 backdrop-blur-sm rounded-xl p-8 border border-green-400/30"
          >
            <div className="text-6xl mb-4 text-center">🌱</div>
            <h4 className="text-xl font-bold mb-4 text-center">Lab-Grown Food</h4>
            <p className="text-center opacity-90">
              Cultivating meat, dairy, and other food products in laboratories using 
              cellular agriculture, reducing environmental impact and ensuring food security.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Environmental Solutions */}
      <div className="bg-gradient-to-r from-teal-900/50 to-green-900/50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Environmental Solutions</h2>
            <p className="text-xl opacity-90">Healing the planet with biotechnology innovations</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-teal-600/20 to-green-600/20 backdrop-blur-sm rounded-xl p-8 border border-teal-400/30">
              <div className="text-4xl mb-4">🌊</div>
              <h3 className="text-2xl font-bold mb-4">Ocean Cleanup</h3>
              <p className="opacity-90 mb-4">
                Genetically engineered microorganisms that can break down plastic waste 
                and oil spills in marine environments, restoring ocean health.
              </p>
              <div className="text-sm text-teal-300">
                <div>• Plastic degradation bacteria</div>
                <div>• Oil spill remediation</div>
                <div>• Coral reef restoration</div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-2xl font-bold mb-4">Carbon Capture</h3>
              <p className="opacity-90 mb-4">
                Bio-engineered plants and microorganisms that can capture and store 
                atmospheric carbon dioxide more efficiently than natural processes.
              </p>
              <div className="text-sm text-emerald-300">
                <div>• Enhanced photosynthesis</div>
                <div>• Carbon-fixing bacteria</div>
                <div>• Biofuel production</div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 backdrop-blur-sm rounded-xl p-8 border border-green-400/30">
              <div className="text-4xl mb-4">♻️</div>
              <h3 className="text-2xl font-bold mb-4">Waste Management</h3>
              <p className="opacity-90 mb-4">
                Biological systems that can process and convert various types of waste 
                into valuable resources, creating a circular economy.
              </p>
              <div className="text-sm text-green-300">
                <div>• Organic waste conversion</div>
                <div>• Biodegradable materials</div>
                <div>• Resource recovery</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Research & Development */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Research & Development</h2>
          <p className="text-xl opacity-90">Pioneering the future of biotechnology through cutting-edge research</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/10 transition-all duration-300">
            <div className="text-4xl mb-4">🔬</div>
            <h3 className="text-xl font-bold mb-2">Research Labs</h3>
            <p className="text-sm opacity-90">State-of-the-art facilities for biotechnology research and development</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/10 transition-all duration-300">
            <div className="text-4xl mb-4">👥</div>
            <h3 className="text-xl font-bold mb-2">Expert Team</h3>
            <p className="text-sm opacity-90">World-class scientists and researchers in biotechnology and life sciences</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/10 transition-all duration-300">
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="text-xl font-bold mb-2">Partnerships</h3>
            <p className="text-sm opacity-90">Collaborations with leading universities and research institutions</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/10 transition-all duration-300">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-bold mb-2">Clinical Trials</h3>
            <p className="text-sm opacity-90">Rigorous testing and validation of biotechnology solutions</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Life Sciences?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join the biotechnology revolution and help us create a healthier, more sustainable 
            future through cutting-edge life science innovations.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-green-600 to-emerald-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Your Biotech Journey
            </button>
            <button className="border border-green-400 text-green-400 px-8 py-4 rounded-lg hover:bg-green-400 hover:text-white transition-all duration-300 font-semibold text-lg">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BiotechRevolution2026;