import React from 'react';
import { motion } from 'framer-motion';

const BiotechRevolution2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-cyan-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🧬 BIOTECH REVOLUTION 2026
            </div>
            <h1 className="text-6xl font-bold text-white mb-6">
              Next-Generation Biotechnology
            </h1>
            <p className="text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Pioneering the future of life sciences with AI-powered biotechnology, synthetic biology, and precision medicine
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Revolutionary Biotech Innovations</h2>
            <p className="text-xl text-gray-300">Cutting-edge technologies transforming healthcare and life sciences</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300"
            >
              <div className="text-6xl mb-4">🧬</div>
              <h3 className="text-2xl font-bold text-white mb-4">Synthetic Biology</h3>
              <p className="text-gray-300 mb-6">
                Engineering biological systems from scratch to create novel organisms and biological circuits
              </p>
              <ul className="text-emerald-200 space-y-2 text-sm">
                <li>• DNA synthesis and editing</li>
                <li>• Synthetic organisms</li>
                <li>• Biological circuits</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300"
            >
              <div className="text-6xl mb-4">💊</div>
              <h3 className="text-2xl font-bold text-white mb-4">Precision Medicine</h3>
              <p className="text-gray-300 mb-6">
                Personalized treatments based on individual genetic profiles and molecular characteristics
              </p>
              <ul className="text-cyan-200 space-y-2 text-sm">
                <li>• Genomic analysis</li>
                <li>• Targeted therapies</li>
                <li>• Pharmacogenomics</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300"
            >
              <div className="text-6xl mb-4">🧠</div>
              <h3 className="text-2xl font-bold text-white mb-4">Neural Interfaces</h3>
              <p className="text-gray-300 mb-6">
                Direct brain-computer interfaces for medical applications and cognitive enhancement
              </p>
              <ul className="text-purple-200 space-y-2 text-sm">
                <li>• Brain-computer interfaces</li>
                <li>• Neural prosthetics</li>
                <li>• Cognitive enhancement</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-gradient-to-br from-orange-600/20 to-red-600/20 backdrop-blur-sm rounded-xl p-8 border border-orange-400/30 hover:scale-105 transition-all duration-300"
            >
              <div className="text-6xl mb-4">🔬</div>
              <h3 className="text-2xl font-bold text-white mb-4">Gene Therapy</h3>
              <p className="text-gray-300 mb-6">
                Advanced gene editing techniques for treating genetic disorders and diseases
              </p>
              <ul className="text-orange-200 space-y-2 text-sm">
                <li>• CRISPR-Cas9 systems</li>
                <li>• Gene replacement therapy</li>
                <li>• Genetic disease treatment</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-gradient-to-br from-pink-600/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-8 border border-pink-400/30 hover:scale-105 transition-all duration-300"
            >
              <div className="text-6xl mb-4">🌱</div>
              <h3 className="text-2xl font-bold text-white mb-4">Bioengineering</h3>
              <p className="text-gray-300 mb-6">
                Engineering biological materials and systems for medical and industrial applications
              </p>
              <ul className="text-pink-200 space-y-2 text-sm">
                <li>• Tissue engineering</li>
                <li>• Biomaterials</li>
                <li>• Organ regeneration</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="bg-gradient-to-br from-indigo-600/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-8 border border-indigo-400/30 hover:scale-105 transition-all duration-300"
            >
              <div className="text-6xl mb-4">🤖</div>
              <h3 className="text-2xl font-bold text-white mb-4">AI Drug Discovery</h3>
              <p className="text-gray-300 mb-6">
                Artificial intelligence accelerating drug discovery and development processes
              </p>
              <ul className="text-indigo-200 space-y-2 text-sm">
                <li>• Molecular design</li>
                <li>• Drug screening</li>
                <li>• Clinical trial optimization</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-emerald-900/50 to-cyan-900/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Medical Applications</h2>
            <p className="text-xl text-gray-300">Transforming healthcare with breakthrough biotechnologies</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="text-4xl">🏥</div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Cancer Treatment</h3>
                  <p className="text-gray-300">Personalized cancer therapies using precision medicine and targeted gene therapies</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="text-4xl">🧬</div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Genetic Disorders</h3>
                  <p className="text-gray-300">Gene therapy treatments for inherited diseases and genetic conditions</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="text-4xl">🧠</div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Neurological Conditions</h3>
                  <p className="text-gray-300">Advanced treatments for Alzheimer's, Parkinson's, and other neurological diseases</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="text-4xl">💉</div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Regenerative Medicine</h3>
                  <p className="text-gray-300">Stem cell therapies and tissue engineering for organ regeneration and repair</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="text-4xl">🔬</div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Diagnostics</h3>
                  <p className="text-gray-300">Advanced diagnostic tools using AI and molecular biomarkers for early disease detection</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="text-4xl">🌱</div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Sustainable Medicine</h3>
                  <p className="text-gray-300">Eco-friendly pharmaceutical production and sustainable healthcare solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Vision Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">The Future of Biotechnology</h2>
            <p className="text-xl text-gray-300">Envisioning tomorrow's healthcare breakthroughs</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30">
              <div className="text-5xl mb-4 text-center">🔮</div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Predictive Medicine</h3>
              <p className="text-gray-300 text-center">
                AI-powered systems that predict disease onset and recommend preventive measures before symptoms appear
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30">
              <div className="text-5xl mb-4 text-center">⚡</div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Instant Diagnostics</h3>
              <p className="text-gray-300 text-center">
                Real-time diagnostic devices that provide instant health assessments and treatment recommendations
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30">
              <div className="text-5xl mb-4 text-center">🌍</div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Global Health</h3>
              <p className="text-gray-300 text-center">
                Democratized access to advanced biotechnologies for improved global health outcomes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-2xl p-12 text-white"
          >
            <h2 className="text-4xl font-bold mb-6">Join the Biotech Revolution</h2>
            <p className="text-xl mb-8 opacity-90">
              Be part of the future of healthcare and life sciences with our cutting-edge biotechnology solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Explore Solutions
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors">
                Contact Experts
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BiotechRevolution2026;