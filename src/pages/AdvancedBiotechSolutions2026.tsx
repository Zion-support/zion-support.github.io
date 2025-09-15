import React from 'react';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const AdvancedBiotechSolutions2026: React.FC = () => {
  const biotechSolutions = [
    {
      id: 1,
      title: "Gene Therapy Revolution",
      description: "Advanced gene editing technologies that cure genetic diseases and enhance human capabilities.",
      icon: "🧬",
      features: ["CRISPR 2.0", "Gene Replacement", "Therapeutic Applications"],
      color: "from-emerald-600 to-teal-600"
    },
    {
      id: 2,
      title: "Synthetic Biology",
      description: "Engineering biological systems for pharmaceutical production and environmental solutions.",
      icon: "🔬",
      features: ["Synthetic Organisms", "Bio-Manufacturing", "Environmental Cleanup"],
      color: "from-cyan-600 to-blue-600"
    },
    {
      id: 3,
      title: "Personalized Medicine",
      description: "AI-driven precision medicine tailored to individual genetic profiles and health data.",
      icon: "💊",
      features: ["Genetic Profiling", "Drug Customization", "Predictive Medicine"],
      color: "from-purple-600 to-pink-600"
    },
    {
      id: 4,
      title: "Regenerative Medicine",
      description: "Stem cell therapies and tissue engineering for organ regeneration and repair.",
      icon: "🫀",
      features: ["Stem Cell Therapy", "Organ Regeneration", "Tissue Engineering"],
      color: "from-red-600 to-orange-600"
    },
    {
      id: 5,
      title: "Bioinformatics & AI",
      description: "Advanced computational biology and AI for drug discovery and biological research.",
      icon: "🤖",
      features: ["Drug Discovery", "Protein Folding", "Biological Modeling"],
      color: "from-indigo-600 to-purple-600"
    },
    {
      id: 6,
      title: "Nanobiotechnology",
      description: "Nanoscale biological systems for targeted drug delivery and medical diagnostics.",
      icon: "🔬",
      features: ["Nanomedicine", "Targeted Delivery", "Diagnostic Tools"],
      color: "from-green-600 to-emerald-600"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Advanced Biotech Solutions 2026 | Zion Tech Group</title>
        <meta name="description" content="Revolutionary biotechnology solutions including gene therapy, synthetic biology, personalized medicine, and regenerative medicine." />
        <meta name="keywords" content="Biotechnology 2026, Gene Therapy, Synthetic Biology, Personalized Medicine, Regenerative Medicine, Bioinformatics" />
        <meta property="og:title" content="Advanced Biotech Solutions 2026 | Zion Tech Group" />
        <meta property="og:description" content="Revolutionary biotechnology solutions for the future of healthcare" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Advanced Biotech Solutions 2026" />
        <meta name="twitter:description" content="Revolutionary biotechnology solutions for the future of healthcare" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 text-white">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-cyan-600/20 backdrop-blur-sm"></div>
          <div className="container mx-auto px-4 py-20 relative z-10">
            <div className="text-center">
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full text-sm font-bold mb-6 animate-pulse">
                🧬 ADVANCED BIOTECH • JANUARY 2025
              </div>
              <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Advanced Biotech Solutions 2026
              </h1>
              <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
                Revolutionary biotechnology solutions that are transforming healthcare, 
                curing diseases, and enhancing human capabilities through cutting-edge science.
              </p>
              <div className="flex justify-center space-x-4">
                <button className="bg-gradient-to-r from-emerald-600 to-cyan-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                  Explore Biotech Solutions →
                </button>
                <button className="border border-emerald-400 text-emerald-400 px-8 py-4 rounded-lg hover:bg-emerald-400 hover:text-white transition-colors font-semibold text-lg">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Biotech Solutions Grid */}
        <div className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Revolutionary Biotech Solutions</h2>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                Discover the cutting-edge biotechnology solutions that are reshaping healthcare 
                and human biology
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {biotechSolutions.map((solution) => (
                <div
                  key={solution.id}
                  className={`bg-gradient-to-br ${solution.color} rounded-2xl p-8 text-white hover:scale-105 transition-all duration-300 cursor-pointer`}
                >
                  <div className="text-5xl mb-6 text-center">{solution.icon}</div>
                  <h3 className="text-2xl font-bold mb-4 text-center">{solution.title}</h3>
                  <p className="text-center opacity-90 mb-6">{solution.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {solution.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2 text-sm">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className="w-full bg-white/20 backdrop-blur-sm text-white py-3 rounded-lg hover:bg-white hover:text-emerald-600 transition-all duration-300 font-semibold">
                    Learn More →
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Applications Section */}
        <div className="py-20 px-4 bg-gradient-to-r from-emerald-600/20 to-cyan-600/20">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Biotech Applications</h2>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                See how biotechnology is transforming healthcare, agriculture, and environmental solutions
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-4 text-center">🏥</div>
                <h3 className="text-xl font-bold mb-3 text-center">Healthcare</h3>
                <p className="text-emerald-100 text-center text-sm">Personalized medicine, gene therapy, and regenerative treatments</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-4 text-center">🌾</div>
                <h3 className="text-xl font-bold mb-3 text-center">Agriculture</h3>
                <p className="text-cyan-100 text-center text-sm">Genetically modified crops, sustainable farming, and food security</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-4 text-center">🌍</div>
                <h3 className="text-xl font-bold mb-3 text-center">Environment</h3>
                <p className="text-teal-100 text-center text-sm">Bioremediation, carbon capture, and environmental cleanup</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-4 text-center">🏭</div>
                <h3 className="text-xl font-bold mb-3 text-center">Industry</h3>
                <p className="text-blue-100 text-center text-sm">Bio-manufacturing, synthetic biology, and industrial applications</p>
              </div>
            </div>
          </div>
        </div>

        {/* Future Vision */}
        <div className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-6">The Future of Biotechnology</h2>
              <p className="text-xl opacity-90 max-w-4xl mx-auto mb-12">
                We stand at the threshold of a biotechnology revolution that will transform 
                every aspect of human life, from healthcare to environmental sustainability.
              </p>
              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <div className="bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">2026-2027</h3>
                  <p className="text-emerald-100">First approved gene therapies for common diseases</p>
                </div>
                <div className="bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">2028-2030</h3>
                  <p className="text-teal-100">Widespread personalized medicine and organ regeneration</p>
                </div>
                <div className="bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">2030+</h3>
                  <p className="text-cyan-100">Synthetic biology and human enhancement technologies</p>
                </div>
              </div>
              <div className="mt-12">
                <button className="bg-gradient-to-r from-emerald-600 to-cyan-600 text-white px-10 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                  Join the Biotech Revolution
                </button>
              </div>
            </div>
          </div>
=======
>>>>>>> cursor/create-and-deploy-new-content-f977
        </div>
      </div>
    </>
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
    </div>
  );
};

export default AdvancedBiotechSolutions2026;