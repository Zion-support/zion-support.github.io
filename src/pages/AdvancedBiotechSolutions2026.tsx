import React from 'react';
import { motion } from 'framer-motion';

const AdvancedBiotechSolutions2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 to-cyan-600/10"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-full text-sm font-bold mb-6 animate-pulse">
              🧬 ADVANCED BIOTECH SOLUTIONS • 2026
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
              Advanced Biotech Solutions 2026
            </h1>
            <p className="text-2xl text-gray-700 mb-8 max-w-4xl mx-auto">
              Revolutionary biotechnology solutions that are transforming healthcare, agriculture, and environmental sustainability through cutting-edge genetic engineering and synthetic biology
            </p>
          </motion.div>
        </div>
      </div>

      {/* Key Features */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">🔬 Breakthrough Biotech Innovations</h2>
          <p className="text-xl text-gray-600">Revolutionary solutions for the future of life sciences</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-emerald-200"
          >
            <div className="text-5xl mb-4">🧬</div>
            <h3 className="text-2xl font-bold mb-4 text-emerald-600">CRISPR 3.0 Gene Editing</h3>
            <p className="text-gray-600 mb-6">
              Next-generation gene editing technology with unprecedented precision, enabling targeted modifications for therapeutic applications and agricultural improvements.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• 99.9% precision targeting</li>
              <li>• Off-target reduction by 95%</li>
              <li>• Multi-gene editing capabilities</li>
              <li>• Real-time monitoring</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-teal-200"
          >
            <div className="text-5xl mb-4">🌱</div>
            <h3 className="text-2xl font-bold mb-4 text-teal-600">Synthetic Biology Platform</h3>
            <p className="text-gray-600 mb-6">
              Advanced synthetic biology platform for designing and engineering biological systems with programmable functions and applications.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Automated DNA synthesis</li>
              <li>• Biological circuit design</li>
              <li>• Protein engineering</li>
              <li>• Metabolic pathway optimization</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-cyan-200"
          >
            <div className="text-5xl mb-4">💊</div>
            <h3 className="text-2xl font-bold mb-4 text-cyan-600">Personalized Medicine</h3>
            <p className="text-gray-600 mb-6">
              AI-driven personalized medicine solutions that analyze genetic profiles to create customized treatment plans and drug therapies.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Genomic analysis</li>
              <li>• Drug response prediction</li>
              <li>• Custom treatment protocols</li>
              <li>• Real-time monitoring</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-green-200"
          >
            <div className="text-5xl mb-4">🌾</div>
            <h3 className="text-2xl font-bold mb-4 text-green-600">Agricultural Biotechnology</h3>
            <p className="text-gray-600 mb-6">
              Revolutionary agricultural solutions that enhance crop yields, improve nutritional content, and increase resistance to environmental stresses.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Drought-resistant crops</li>
              <li>• Enhanced nutrition</li>
              <li>• Pest resistance</li>
              <li>• Climate adaptation</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-blue-200"
          >
            <div className="text-5xl mb-4">🧪</div>
            <h3 className="text-2xl font-bold mb-4 text-blue-600">Biomanufacturing</h3>
            <p className="text-gray-600 mb-6">
              Advanced biomanufacturing processes that produce pharmaceuticals, chemicals, and materials using engineered biological systems.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Sustainable production</li>
              <li>• Reduced waste</li>
              <li>• Scalable processes</li>
              <li>• Quality control</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-purple-200"
          >
            <div className="text-5xl mb-4">🔬</div>
            <h3 className="text-2xl font-bold mb-4 text-purple-600">Environmental Biotech</h3>
            <p className="text-gray-600 mb-6">
              Environmental biotechnology solutions for pollution remediation, carbon capture, and sustainable resource management.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Bioremediation</li>
              <li>• Carbon sequestration</li>
              <li>• Waste treatment</li>
              <li>• Ecosystem restoration</li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Applications Section */}
      <div className="bg-gradient-to-r from-emerald-600 to-cyan-600 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">🌍 Real-World Applications</h2>
            <p className="text-xl text-emerald-100">Transforming industries through biotechnology innovation</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center text-white">
              <div className="text-6xl mb-4">🏥</div>
              <h3 className="text-xl font-bold mb-2">Healthcare</h3>
              <p className="text-emerald-100">Personalized treatments and disease prevention</p>
            </div>
            <div className="text-center text-white">
              <div className="text-6xl mb-4">🌱</div>
              <h3 className="text-xl font-bold mb-2">Agriculture</h3>
              <p className="text-emerald-100">Sustainable food production and crop improvement</p>
            </div>
            <div className="text-center text-white">
              <div className="text-6xl mb-4">🌍</div>
              <h3 className="text-xl font-bold mb-2">Environment</h3>
              <p className="text-emerald-100">Ecosystem restoration and pollution control</p>
            </div>
            <div className="text-center text-white">
              <div className="text-6xl mb-4">🏭</div>
              <h3 className="text-xl font-bold mb-2">Industry</h3>
              <p className="text-emerald-100">Sustainable manufacturing and materials</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to Transform Your Industry?</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Discover how our advanced biotechnology solutions can revolutionize your business and create sustainable value for the future
        </p>
        <div className="flex justify-center space-x-4">
          <a href="/contact" className="bg-gradient-to-r from-emerald-600 to-cyan-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
            Get Started →
          </a>
          <a href="/pages/AdvancedTechSolutions2026" className="border border-emerald-600 text-emerald-600 px-8 py-3 rounded-lg hover:bg-emerald-50 transition-colors">
            View All Solutions
          </a>
        </div>
      </div>
    </div>
  );
};

export default AdvancedBiotechSolutions2026;