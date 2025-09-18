import React from 'react';

const AdvancedSpaceTech2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🚀 SPACE TECHNOLOGY • JANUARY 2026
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Advanced Space Technology 2026
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Pioneering the next frontier with revolutionary space technologies that enable interplanetary travel, space colonization, and cosmic exploration.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-blue-600 to-cyan-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Explore Space Solutions
              </button>
              <button className="border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-lg hover:bg-blue-400/10 transition-colors font-semibold text-lg">
                Mission Overview
          </motion.div>
        </div>
      </div>
      {/* Mission Overview */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Revolutionary Space Missions</h2>
          <p className="text-xl opacity-80">Leading humanity's expansion into the cosmos</p>
        
        <div className="grid md:grid-cols-3 gap-8">
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-blue-600/30 to-cyan-600/30 backdrop-blur-sm rounded-xl p-8 border border-blue-400/30 hover:scale-105 transition-all duration-300"
            <div className="text-6xl mb-4 text-center">🛸</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Mars Colonization</h3>
            <p className="text-blue-100 mb-6 text-center">
              Establishing the first permanent human settlement on Mars with advanced life support systems
            <ul className="text-blue-200 space-y-2 text-sm">
              <li>• Terraforming technology</li>
              <li>• Advanced life support</li>
              <li>• Sustainable agriculture</li>
            </ul>
          
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300"
            <div className="text-6xl mb-4 text-center">🌌</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Interstellar Travel</h3>
            <p className="text-purple-100 mb-6 text-center">
              Developing faster-than-light propulsion systems for deep space exploration
            <ul className="text-purple-200 space-y-2 text-sm">
              <li>• Warp drive technology</li>
              <li>• Quantum propulsion</li>
              <li>• Cryogenic hibernation</li>
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300"
            <div className="text-6xl mb-4 text-center">🛰️</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Space Infrastructure</h3>
            <p className="text-emerald-100 mb-6 text-center">
              Building orbital platforms and space stations for commercial and research purposes
            <ul className="text-emerald-200 space-y-2 text-sm">
              <li>• Orbital manufacturing</li>
              <li>• Space tourism</li>
              <li>• Asteroid mining</li>
      {/* Technology Showcase */}
          <h2 className="text-4xl font-bold mb-4">Cutting-Edge Space Technologies</h2>
          <p className="text-xl opacity-80">Revolutionary systems powering space exploration</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold mb-2">Ion Propulsion</h3>
            <p className="text-sm opacity-80">High-efficiency electric propulsion for long-duration missions</p>
          </div>
            <div className="text-4xl mb-4">🔋</div>
            <h3 className="text-xl font-semibold mb-2">Nuclear Power</h3>
            <p className="text-sm opacity-80">Compact nuclear reactors for deep space energy needs</p>
            <div className="text-4xl mb-4">🧬</div>
            <h3 className="text-xl font-semibold mb-2">Biotech Solutions</h3>
            <p className="text-sm opacity-80">Advanced biotechnology for space adaptation and health</p>
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-xl font-semibold mb-2">AI Navigation</h3>
            <p className="text-sm opacity-80">Autonomous AI systems for spacecraft navigation and control</p>
      {/* Mission Timeline */}
          <h2 className="text-4xl font-bold mb-4">Mission Timeline</h2>
          <p className="text-xl opacity-80">Our roadmap to the stars</p>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-cyan-500"></div>
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center"
            >
              <div className="w-1/2 pr-8 text-right">
                <div className="bg-gradient-to-r from-blue-600/30 to-cyan-600/30 backdrop-blur-sm rounded-lg p-6">
                  <h3 className="text-2xl font-bold mb-2">Q2 2026</h3>
                  <p className="text-blue-100">Mars Rover Mission Launch</p>
                </div>
              </div>
              <div className="w-8 h-8 bg-blue-500 rounded-full border-4 border-white flex-shrink-0"></div>
              <div className="w-1/2 pl-8"></div>
            </motion.div>
            
              initial={{ opacity: 0, x: 50 }}
              <div className="w-1/2 pr-8"></div>
              <div className="w-8 h-8 bg-cyan-500 rounded-full border-4 border-white flex-shrink-0"></div>
              <div className="w-1/2 pl-8">
                <div className="bg-gradient-to-r from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-lg p-6">
                  <h3 className="text-2xl font-bold mb-2">Q4 2026</h3>
                  <p className="text-cyan-100">Lunar Base Construction</p>
                <div className="bg-gradient-to-r from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-lg p-6">
                  <h3 className="text-2xl font-bold mb-2">Q2 2027</h3>
                  <p className="text-purple-100">First Human Mars Mission</p>
              <div className="w-8 h-8 bg-purple-500 rounded-full border-4 border-white flex-shrink-0"></div>
      {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Join the Space Revolution</h2>
          <p className="text-xl opacity-80 mb-8">Be part of humanity's greatest adventure</p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-blue-600 to-cyan-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Apply for Mission
            </button>
            <button className="border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-lg hover:bg-blue-400/10 transition-colors font-semibold text-lg">
              Learn More
    </div>
  );
};
export default AdvancedSpaceTech2026;
