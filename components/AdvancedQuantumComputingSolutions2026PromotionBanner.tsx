import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Atom, Cpu, Shield, Zap, Globe, Brain, Target } from 'lucide-react';

const AdvancedQuantumComputingSolutions2026PromotionBanner: React.FC = () => {
  const quantumFeatures = [
    { icon: Cpu, title: "Error-Corrected Quantum", description: "99.9% accuracy" },
    { icon: Brain, title: "Quantum ML", description: "Exponential speedup" },
    { icon: Globe, title: "Quantum Internet", description: "Global security" },
    { icon: Target, title: "Optimization", description: "100x efficiency" },
    { icon: Shield, title: "Cryptography", description: "Unbreakable" },
    { icon: Atom, title: "Simulation", description: "Molecular precision" }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.03"%3E%3Cpath d="M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          {/* Badge */}
          <div className="inline-flex items-center bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-6 py-2 rounded-full text-sm font-bold mb-6">
            <Atom className="w-4 h-4 mr-2" />
            Revolutionary: Advanced Quantum Computing Solutions 2026
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Quantum Computing
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Solutions 2026
            </span>
          </h2>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Harness the power of quantum computing with our breakthrough solutions that solve complex problems impossible for classical computers. Experience 10,000x speed improvements and unbreakable security.
          </p>

          {/* Key Benefits */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <span className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold border border-white/20">
              10,000x Speed Improvement
            </span>
            <span className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold border border-white/20">
              Unbreakable Security
            </span>
            <span className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold border border-white/20">
              Quantum Supremacy
            </span>
            <span className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold border border-white/20">
              Global Quantum Internet
            </span>
          </div>
        </div>

        {/* Quantum Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
          {quantumFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="text-center group">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 group-hover:transform group-hover:scale-105">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-sm font-semibold text-white mb-2">
                    {feature.title}
                  </div>
                  <div className="text-xs text-gray-300">
                    {feature.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Be Among the First to Experience Quantum Computing
            </h3>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the quantum revolution with our comprehensive suite of quantum computing solutions. Get exclusive access to implementation guides, case studies, and hands-on support.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                to="/quantum-computing-solutions-2026"
                className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-xl"
              >
                Explore Quantum Solutions
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/quantum-computing-demo"
                className="bg-white/10 hover:bg-white/20 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 border border-white/30 flex items-center justify-center"
              >
                Schedule Demo
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-400">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></div>
                Free Consultation
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                Expert Support
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
                ROI Guaranteed
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-indigo-400 rounded-full mr-2"></div>
                Cutting-Edge Technology
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-8">
          <p className="text-gray-400 text-sm">
            Leading the quantum computing revolution with 50+ successful implementations
          </p>
        </div>
      </div>
    </section>
  );
};

export default AdvancedQuantumComputingSolutions2026PromotionBanner;