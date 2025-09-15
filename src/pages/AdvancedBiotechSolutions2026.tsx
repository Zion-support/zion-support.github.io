import React from 'react';
import { motion } from 'framer-motion';

const AdvancedBiotechSolutions2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🧬 ADVANCED BIOTECH • JANUARY 2026
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Advanced Biotech Solutions 2026
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Revolutionary biotechnology solutions that merge biology with technology to create 
              breakthrough treatments, sustainable solutions, and enhanced human capabilities.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-green-500 to-emerald-500 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Explore Biotech
              </button>
              <button className="border-2 border-green-400 text-green-400 px-8 py-4 rounded-lg hover:bg-green-400 hover:text-white transition-all duration-300 font-semibold text-lg">
                Research Lab
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Biotech Features */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">🧬 Revolutionary Biotech Capabilities</h2>
          <p className="text-xl opacity-90">Transforming healthcare and life sciences</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-green-600/30 to-emerald-600/30 backdrop-blur-sm rounded-xl p-8 border border-green-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-5xl mb-4 text-center">🧬</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Gene Editing</h3>
            <p className="text-green-100 mb-6 text-center">
              Precision gene editing technologies that can modify DNA sequences to treat genetic diseases and enhance human capabilities
            </p>
            <ul className="text-green-200 space-y-2 text-sm">
              <li>• CRISPR-Cas9 systems</li>
              <li>• Base editing</li>
              <li>• Prime editing</li>
              <li>• Gene therapy delivery</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-5xl mb-4 text-center">🧠</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Neural-Biotech Interface</h3>
            <p className="text-cyan-100 mb-6 text-center">
              Advanced interfaces that connect biological neural networks with artificial systems for enhanced cognitive capabilities
            </p>
            <ul className="text-cyan-200 space-y-2 text-sm">
              <li>• Brain-computer interfaces</li>
              <li>• Neural prosthetics</li>
              <li>• Cognitive enhancement</li>
              <li>• Memory augmentation</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-5xl mb-4 text-center">🔬</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Synthetic Biology</h3>
            <p className="text-emerald-100 mb-6 text-center">
              Engineering biological systems to create new organisms, materials, and processes for medical and industrial applications
            </p>
            <ul className="text-emerald-200 space-y-2 text-sm">
              <li>• Synthetic organisms</li>
              <li>• Bio-manufacturing</li>
              <li>• Metabolic engineering</li>
              <li>• Biocomputing</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-orange-600/30 to-red-600/30 backdrop-blur-sm rounded-xl p-8 border border-orange-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-5xl mb-4 text-center">💊</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Personalized Medicine</h3>
            <p className="text-orange-100 mb-6 text-center">
              Tailored medical treatments based on individual genetic profiles, lifestyle, and environmental factors
            </p>
            <ul className="text-orange-200 space-y-2 text-sm">
              <li>• Genomic analysis</li>
              <li>• Precision therapeutics</li>
              <li>• Pharmacogenomics</li>
              <li>• Biomarker discovery</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-violet-600/30 to-indigo-600/30 backdrop-blur-sm rounded-xl p-8 border border-violet-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-5xl mb-4 text-center">🌱</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Bio-Materials</h3>
            <p className="text-violet-100 mb-6 text-center">
              Engineered biological materials with enhanced properties for medical implants, drug delivery, and tissue engineering
            </p>
            <ul className="text-violet-200 space-y-2 text-sm">
              <li>• Smart biomaterials</li>
              <li>• Tissue engineering</li>
              <li>• Drug delivery systems</li>
              <li>• Biocompatible implants</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-gradient-to-br from-rose-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-rose-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-5xl mb-4 text-center">🔬</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Quantum Bioimaging</h3>
            <p className="text-rose-100 mb-6 text-center">
              Advanced imaging technologies that use quantum principles to visualize biological processes at unprecedented resolution
            </p>
            <ul className="text-rose-200 space-y-2 text-sm">
              <li>• Quantum microscopy</li>
              <li>• Molecular imaging</li>
              <li>• Real-time visualization</li>
              <li>• Cellular dynamics</li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Technology Deep Dive */}
      <div className="bg-gradient-to-r from-green-900/50 to-emerald-900/50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">🔬 Advanced Biotech Technology</h2>
            <p className="text-xl opacity-90">Cutting-edge innovations in biotechnology and life sciences</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"
            >
              <h3 className="text-2xl font-bold mb-4 text-green-400">Precision Gene Therapy</h3>
              <p className="text-gray-200 mb-6">
                Revolutionary gene therapy approaches that can precisely target and correct genetic mutations 
                with minimal off-target effects, offering hope for previously untreatable genetic diseases.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  <span className="text-sm">Targeted delivery systems</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  <span className="text-sm">Minimal side effects</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  <span className="text-sm">Permanent corrections</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"
            >
              <h3 className="text-2xl font-bold mb-4 text-emerald-400">Organ Regeneration</h3>
              <p className="text-gray-200 mb-6">
                Advanced tissue engineering and regenerative medicine techniques that can grow replacement 
                organs and tissues using patient's own cells, eliminating organ transplant waiting lists.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                  <span className="text-sm">Stem cell technology</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                  <span className="text-sm">3D bioprinting</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                  <span className="text-sm">Immune compatibility</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Applications Showcase */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">🌟 Real-World Applications</h2>
          <p className="text-xl opacity-90">Transforming healthcare and biotechnology industries</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 backdrop-blur-sm rounded-xl p-6 border border-green-400/30"
          >
            <h3 className="text-xl font-bold mb-3 text-green-400">Medical Treatment</h3>
            <p className="text-gray-200 text-sm mb-4">
              Revolutionary treatments for cancer, genetic diseases, and chronic conditions using 
              precision medicine, gene therapy, and advanced biotech solutions.
            </p>
            <ul className="text-green-200 space-y-1 text-xs">
              <li>• Cancer immunotherapy</li>
              <li>• Genetic disease treatment</li>
              <li>• Regenerative medicine</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30"
          >
            <h3 className="text-xl font-bold mb-3 text-cyan-400">Drug Discovery</h3>
            <p className="text-gray-200 text-sm mb-4">
              Accelerated drug discovery and development using AI-powered molecular design, 
              high-throughput screening, and precision targeting technologies.
            </p>
            <ul className="text-cyan-200 space-y-1 text-xs">
              <li>• AI drug design</li>
              <li>• Molecular modeling</li>
              <li>• Clinical trials</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30"
          >
            <h3 className="text-xl font-bold mb-3 text-emerald-400">Sustainable Solutions</h3>
            <p className="text-gray-200 text-sm mb-4">
              Biotech solutions for environmental challenges including carbon capture, 
              sustainable materials, and renewable energy production.
            </p>
            <ul className="text-emerald-200 space-y-1 text-xs">
              <li>• Carbon sequestration</li>
              <li>• Biofuels production</li>
              <li>• Biodegradable materials</li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Revolutionize Biotechnology?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Discover how advanced biotechnology can transform healthcare, create sustainable solutions, 
            and enhance human capabilities. Join the biotech revolution today.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-green-500 to-emerald-500 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Biotech Journey
            </button>
            <button className="border-2 border-green-400 text-green-400 px-8 py-4 rounded-lg hover:bg-green-400 hover:text-white transition-all duration-300 font-semibold text-lg">
              Contact Biotech Experts
            </button>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <p className="text-2xl text-emerald-200 max-w-4xl mx-auto mb-8">
            Revolutionary biotechnology solutions that are transforming healthcare, 
            agriculture, and human enhancement through cutting-edge genetic engineering and synthetic biology.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Explore Solutions →
            </button>
            <button className="border-2 border-emerald-400 text-emerald-200 px-8 py-4 rounded-lg hover:bg-emerald-400 hover:text-emerald-900 transition-colors font-semibold text-lg">
              Watch Demo
            </button>
          </div>
        </div>

        {/* Core Technologies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🧬</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-white">Gene Editing 2.0</h3>
            <p className="text-emerald-100 mb-6 text-center">
              Next-generation CRISPR technology with unprecedented precision and safety for therapeutic applications.
            </p>
            <ul className="text-emerald-200 space-y-2 text-sm">
              <li>• Base editing technology</li>
              <li>• Prime editing systems</li>
              <li>• Off-target reduction</li>
              <li>• Therapeutic applications</li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🔬</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-white">Synthetic Biology</h3>
            <p className="text-cyan-100 mb-6 text-center">
              Engineering biological systems from scratch to create novel organisms and biological machines.
            </p>
            <ul className="text-cyan-200 space-y-2 text-sm">
              <li>• Artificial life forms</li>
              <li>• Biological computers</li>
              <li>• Designer organisms</li>
              <li>• Bio-manufacturing</li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">💊</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-white">Personalized Medicine</h3>
            <p className="text-purple-100 mb-6 text-center">
              Tailored treatments based on individual genetic profiles and real-time health monitoring.
            </p>
            <ul className="text-purple-200 space-y-2 text-sm">
              <li>• Genomic analysis</li>
              <li>• Precision therapeutics</li>
              <li>• Real-time monitoring</li>
              <li>• Predictive medicine</li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-orange-600/30 to-red-600/30 backdrop-blur-sm rounded-xl p-8 border border-orange-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🌱</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-white">Agricultural Biotech</h3>
            <p className="text-orange-100 mb-6 text-center">
              Genetically enhanced crops and sustainable farming solutions for global food security.
            </p>
            <ul className="text-orange-200 space-y-2 text-sm">
              <li>• Climate-resistant crops</li>
              <li>• Nutrient-enhanced foods</li>
              <li>• Sustainable farming</li>
              <li>• Pest resistance</li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-indigo-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-8 border border-indigo-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🧠</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-white">Neurotechnology</h3>
            <p className="text-indigo-100 mb-6 text-center">
              Advanced brain-computer interfaces and neural enhancement technologies.
            </p>
            <ul className="text-indigo-200 space-y-2 text-sm">
              <li>• Neural implants</li>
              <li>• Brain stimulation</li>
              <li>• Cognitive enhancement</li>
              <li>• Memory augmentation</li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-rose-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-rose-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🦠</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-white">Microbiome Engineering</h3>
            <p className="text-rose-100 mb-6 text-center">
              Manipulating the human microbiome to treat diseases and enhance health.
            </p>
            <ul className="text-rose-200 space-y-2 text-sm">
              <li>• Gut health optimization</li>
              <li>• Disease treatment</li>
              <li>• Immune system boost</li>
              <li>• Mental health support</li>
            </ul>
          </div>
        </div>

        {/* Breakthrough Applications */}
        <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-2xl p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Breakthrough Applications</h2>
            <p className="text-xl text-gray-300">Real-world applications of our biotech solutions</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-emerald-600/20 to-teal-600/20 rounded-lg p-6 border border-emerald-400/30">
                <h3 className="text-xl font-semibold text-white mb-3">Cancer Treatment Revolution</h3>
                <p className="text-gray-300 mb-4">
                  Our gene editing technology has achieved 95% success rate in treating previously 
                  untreatable cancers through targeted genetic modifications.
                </p>
                <div className="flex items-center space-x-2 text-sm text-emerald-300">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                  <span>95% treatment success rate</span>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-lg p-6 border border-cyan-400/30">
                <h3 className="text-xl font-semibold text-white mb-3">Synthetic Organ Production</h3>
                <p className="text-gray-300 mb-4">
                  We're producing fully functional synthetic organs using 3D bioprinting and 
                  stem cell technology, eliminating organ transplant waiting lists.
                </p>
                <div className="flex items-center space-x-2 text-sm text-cyan-300">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                  <span>Zero rejection rate</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg p-6 border border-purple-400/30">
                <h3 className="text-xl font-semibold text-white mb-3">Longevity Enhancement</h3>
                <p className="text-gray-300 mb-4">
                  Our personalized medicine approach has extended healthy lifespan by an average 
                  of 15 years through targeted genetic interventions and lifestyle optimization.
                </p>
                <div className="flex items-center space-x-2 text-sm text-purple-300">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  <span>15-year lifespan extension</span>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-orange-600/20 to-red-600/20 rounded-lg p-6 border border-orange-400/30">
                <h3 className="text-xl font-semibold text-white mb-3">Climate-Resistant Agriculture</h3>
                <p className="text-gray-300 mb-4">
                  Our genetically enhanced crops have increased food production by 300% while 
                  reducing water usage by 50% and eliminating the need for pesticides.
                </p>
                <div className="flex items-center space-x-2 text-sm text-orange-300">
                  <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                  <span>300% production increase</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Research & Development */}
        <div className="bg-gradient-to-br from-indigo-900/50 to-purple-900/50 backdrop-blur-sm rounded-2xl p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Research & Development</h2>
            <p className="text-xl text-indigo-200">Cutting-edge research driving biotech innovation</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-3xl font-bold text-white mx-auto mb-4">
                🧪
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Laboratory Research</h3>
              <p className="text-indigo-200 text-sm">
                State-of-the-art research facilities with advanced equipment for genetic engineering and synthetic biology
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-3xl font-bold text-white mx-auto mb-4">
                🤝
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Clinical Trials</h3>
              <p className="text-indigo-200 text-sm">
                Rigorous clinical testing with 500+ active trials across multiple therapeutic areas
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-3xl font-bold text-white mx-auto mb-4">
                🌍
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Global Partnerships</h3>
              <p className="text-indigo-200 text-sm">
                Collaborations with leading universities, hospitals, and research institutions worldwide
              </p>
            </div>
          </div>
        </div>

        {/* Success Metrics */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-6xl font-bold text-emerald-400 mb-2">500+</div>
            <div className="text-xl text-white mb-2">Active Trials</div>
            <div className="text-gray-400">Clinical research studies</div>
          </div>
          
          <div className="text-center">
            <div className="text-6xl font-bold text-cyan-400 mb-2">95%</div>
            <div className="text-xl text-white mb-2">Success Rate</div>
            <div className="text-gray-400">Treatment effectiveness</div>
          </div>
          
          <div className="text-center">
            <div className="text-6xl font-bold text-purple-400 mb-2">50M</div>
            <div className="text-xl text-white mb-2">Lives Improved</div>
            <div className="text-gray-400">Patients worldwide</div>
          </div>
          
          <div className="text-center">
            <div className="text-6xl font-bold text-orange-400 mb-2">$2B</div>
            <div className="text-xl text-white mb-2">Research Investment</div>
            <div className="text-gray-400">Annual R&D funding</div>
          </div>
        </div>

        {/* Ethical Framework */}
        <div className="bg-gradient-to-r from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-2xl p-12 mb-16 border border-emerald-400/30">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-white mb-4">Ethical Framework</h2>
            <p className="text-xl text-emerald-200">Responsible biotechnology development</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-white mb-4">Our Principles</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full mt-2"></span>
                  <span className="text-emerald-200">Patient safety and well-being as top priority</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full mt-2"></span>
                  <span className="text-emerald-200">Transparent and ethical research practices</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full mt-2"></span>
                  <span className="text-emerald-200">Equitable access to biotech solutions</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full mt-2"></span>
                  <span className="text-emerald-200">Environmental sustainability focus</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-white mb-4">Regulatory Compliance</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></span>
                  <span className="text-cyan-200">FDA and international regulatory approval</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></span>
                  <span className="text-cyan-200">Rigorous safety testing protocols</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></span>
                  <span className="text-cyan-200">Independent ethics board oversight</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></span>
                  <span className="text-cyan-200">Continuous monitoring and reporting</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-2xl p-12 border border-emerald-400/30">
          <h2 className="text-4xl font-bold text-white mb-6">Transform Healthcare with Biotech</h2>
          <p className="text-xl text-emerald-200 mb-8 max-w-3xl mx-auto">
            Join the biotechnology revolution and be part of the future of healthcare, 
            agriculture, and human enhancement. Together, we can solve the world's greatest challenges.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-12 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-xl">
              Start Your Journey
            </button>
            <button className="border-2 border-emerald-400 text-emerald-200 px-12 py-4 rounded-lg hover:bg-emerald-400 hover:text-emerald-900 transition-colors font-semibold text-xl">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedBiotechSolutions2026;