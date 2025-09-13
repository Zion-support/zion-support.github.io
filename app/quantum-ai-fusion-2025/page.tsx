import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Quantum AI Fusion 2025 - Revolutionary Quantum Computing Solutions',
  description: 'Experience the future with Quantum AI Fusion 2025. Revolutionary quantum computing integrated with artificial intelligence delivering unprecedented business transformation.',
  keywords: ['Quantum AI', 'Quantum Computing', 'AI Fusion', 'Quantum Solutions', 'Business Transformation', '2025 Technology'],
};

export default function QuantumAIFusion2025Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full text-black font-bold text-lg mb-8 animate-pulse">
            ⚛️ QUANTUM AI FUSION 2025
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight">
            Quantum AI
            <span className="block bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-600 bg-clip-text text-transparent">
              FUSION 2025
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            The world's first fully integrated quantum computing and artificial intelligence platform. 
            Experience <span className="text-cyan-400 font-bold">unprecedented processing power</span> and 
            <span className="text-purple-400 font-bold"> revolutionary business solutions</span>.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="/contact" 
              className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold text-lg rounded-full hover:scale-105 transition-transform duration-300 shadow-2xl"
            >
              Explore Quantum AI
            </Link>
            <Link 
              href="/case-studies" 
              className="px-8 py-4 border-2 border-white text-white font-bold text-lg rounded-full hover:bg-white hover:text-black transition-all duration-300"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* Quantum Features */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
            Quantum AI Capabilities
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Quantum Supremacy",
                description: "Achieve quantum supremacy with 1000+ qubit processing power for complex problem solving",
                icon: "⚛️💫",
                stats: "1000+ Qubits"
              },
              {
                title: "Quantum Machine Learning",
                description: "Revolutionary quantum algorithms for machine learning with exponential speed improvements",
                icon: "🧠⚡",
                stats: "10^6x Speed Boost"
              },
              {
                title: "Quantum Cryptography",
                description: "Unbreakable quantum encryption for ultimate data security and privacy protection",
                icon: "🔐🛡️",
                stats: "100% Secure"
              },
              {
                title: "Quantum Optimization",
                description: "Solve complex optimization problems in seconds that would take classical computers years",
                icon: "🎯⚡",
                stats: "Instant Solutions"
              },
              {
                title: "Quantum Simulation",
                description: "Simulate complex molecular and material systems for breakthrough discoveries",
                icon: "🔬🌌",
                stats: "Molecular Scale"
              },
              {
                title: "Quantum Neural Networks",
                description: "Hybrid quantum-classical neural networks for unprecedented AI capabilities",
                icon: "🧬🤖",
                stats: "Hybrid Intelligence"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/20">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <div className="text-cyan-400 font-bold text-lg">{feature.stats}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quantum Applications */}
      <section className="py-20 px-4 bg-black/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
            Quantum AI Applications
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Financial Services</h3>
                <p className="text-gray-200 mb-4">Quantum portfolio optimization, risk analysis, and fraud detection with unprecedented accuracy.</p>
                <div className="text-cyan-300 font-bold">99.9% Accuracy Rate</div>
              </div>
              
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Healthcare & Drug Discovery</h3>
                <p className="text-gray-200 mb-4">Quantum simulation for drug discovery, protein folding, and personalized medicine.</p>
                <div className="text-purple-300 font-bold">10x Faster Discovery</div>
              </div>
              
              <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Climate & Energy</h3>
                <p className="text-gray-200 mb-4">Quantum optimization for renewable energy systems and climate modeling.</p>
                <div className="text-green-300 font-bold">Carbon Neutral Solutions</div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Supply Chain Optimization</h3>
                <p className="text-gray-200 mb-4">Quantum algorithms for complex logistics and supply chain optimization.</p>
                <div className="text-orange-300 font-bold">50% Cost Reduction</div>
              </div>
              
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Cybersecurity</h3>
                <p className="text-gray-200 mb-4">Quantum-resistant encryption and advanced threat detection systems.</p>
                <div className="text-indigo-300 font-bold">Future-Proof Security</div>
              </div>
              
              <div className="bg-gradient-to-r from-pink-600 to-rose-600 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">AI Research</h3>
                <p className="text-gray-200 mb-4">Quantum-enhanced AI research and development for next-generation solutions.</p>
                <div className="text-pink-300 font-bold">Breakthrough Innovation</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-16">
            Quantum Performance Metrics
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "10^6x", label: "Speed Improvement" },
              { number: "1000+", label: "Qubit Processing" },
              { number: "99.9%", label: "Accuracy Rate" },
              { number: "24/7", label: "Quantum Uptime" }
            ].map((metric, index) => (
              <div key={index} className="bg-gradient-to-br from-cyan-600 to-purple-600 rounded-2xl p-8">
                <div className="text-5xl font-bold text-white mb-2">{metric.number}</div>
                <div className="text-gray-300 text-lg">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Ready for Quantum AI?
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Join the quantum revolution. Experience the future of computing with our 
            Quantum AI Fusion 2025 platform.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="/contact" 
              className="px-12 py-6 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold text-xl rounded-full hover:scale-105 transition-transform duration-300 shadow-2xl"
            >
              Start Quantum Journey
            </Link>
            <Link 
              href="/pricing" 
              className="px-12 py-6 border-2 border-white text-white font-bold text-xl rounded-full hover:bg-white hover:text-black transition-all duration-300"
            >
              View Quantum Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}