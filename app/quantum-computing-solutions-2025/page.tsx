import React from 'react';
import SEO from '../../components/SEO';
import Link from 'next/link';
import { ArrowRight, Atom, Zap, Shield, Globe, Cpu, Brain, Star, Sparkles, Target, TrendingUp } from 'lucide-react';

export default function QuantumComputingSolutions2025() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50">
      <SEO
        title="Quantum Computing Solutions 2025 - Revolutionary Quantum Technology | Zion Tech Group"
        description="Explore cutting-edge quantum computing solutions, quantum algorithms, and quantum cryptography that are revolutionizing industries worldwide in 2025."
        keywords="quantum computing, quantum algorithms, quantum cryptography, quantum technology, quantum solutions, quantum development"
        url="/quantum-computing-solutions-2025"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
              <Atom className="w-4 h-4 mr-2" />
              QUANTUM COMPUTING SOLUTIONS 2025
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Quantum
              <span className="block bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
                Computing
              </span>
              <span className="block text-3xl md:text-5xl text-indigo-200">
                Revolution
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-indigo-100 mb-10 leading-relaxed">
              Harness the power of quantum mechanics to solve complex problems that are impossible for classical computers. Transform your business with quantum advantage.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-indigo-600 font-bold rounded-xl hover:bg-indigo-50 transition-colors"
              >
                Explore Quantum Solutions
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                href="/success-stories"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-colors"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quantum Solutions Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Quantum Computing Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Revolutionary quantum computing platforms and algorithms designed to solve the most complex challenges in science, finance, and technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Quantum Financial Risk Assessment */}
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quantum Financial Risk Assessment</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Advanced quantum algorithms for portfolio optimization and risk modeling that outperform classical methods by orders of magnitude.
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <Target className="w-4 h-4 mr-2 text-green-500" />
                  Improve risk assessment accuracy by 85%
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <TrendingUp className="w-4 h-4 mr-2 text-green-500" />
                  Reduce portfolio volatility by 30%
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Star className="w-4 h-4 mr-2 text-green-500" />
                  Real-time market analysis
                </div>
              </div>
              
              <div className="text-2xl font-bold text-indigo-600 mb-4">$3,500/month</div>
              <Link 
                href="/contact"
                className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-700 transition-colors"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            {/* Quantum Cryptography Platform */}
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quantum Cryptography Platform</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Unbreakable encryption using quantum key distribution and quantum-resistant cryptographic protocols.
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <Target className="w-4 h-4 mr-2 text-green-500" />
                  Unbreakable encryption security
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <TrendingUp className="w-4 h-4 mr-2 text-green-500" />
                  Future-proof against quantum attacks
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Star className="w-4 h-4 mr-2 text-green-500" />
                  Real-time secure communication
                </div>
              </div>
              
              <div className="text-2xl font-bold text-cyan-600 mb-4">$4,500/month</div>
              <Link 
                href="/contact"
                className="inline-flex items-center text-cyan-600 font-semibold hover:text-cyan-700 transition-colors"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            {/* Quantum Drug Discovery */}
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6">
                <Brain className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quantum Drug Discovery Platform</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Revolutionary quantum molecular modeling and drug interaction prediction that accelerates pharmaceutical research.
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <Target className="w-4 h-4 mr-2 text-green-500" />
                  Accelerate drug discovery by 10x
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <TrendingUp className="w-4 h-4 mr-2 text-green-500" />
                  Reduce development costs by 60%
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Star className="w-4 h-4 mr-2 text-green-500" />
                  Toxicity assessment
                </div>
              </div>
              
              <div className="text-2xl font-bold text-green-600 mb-4">$6,000/month</div>
              <Link 
                href="/contact"
                className="inline-flex items-center text-green-600 font-semibold hover:text-green-700 transition-colors"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quantum Technology Features */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Quantum Technology Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leverage the fundamental principles of quantum mechanics to achieve computational advantages impossible with classical computers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Revolutionary Quantum Advantages
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <Atom className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Quantum Supremacy</h4>
                    <p className="text-gray-600">Solve problems exponentially faster than classical computers using quantum parallelism.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <Shield className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Quantum Security</h4>
                    <p className="text-gray-600">Unbreakable encryption using quantum key distribution and quantum-resistant algorithms.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <Cpu className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Quantum Optimization</h4>
                    <p className="text-gray-600">Advanced optimization algorithms for complex systems and resource allocation.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <Zap className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Quantum Simulation</h4>
                    <p className="text-gray-600">Simulate quantum systems and molecular interactions with unprecedented accuracy.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Atom className="w-12 h-12 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready for Quantum?</h3>
                <p className="text-gray-600 mb-6">
                  Join the quantum revolution and gain competitive advantage with our cutting-edge quantum computing solutions.
                </p>
                
                <Link 
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold rounded-xl hover:from-indigo-600 hover:to-purple-700 transition-all duration-300"
                >
                  Start Your Quantum Journey
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quantum Applications */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Quantum Applications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how quantum computing is transforming industries and solving previously intractable problems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Financial Services</h3>
              <p className="text-gray-600">Risk modeling, portfolio optimization, and algorithmic trading</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Pharmaceuticals</h3>
              <p className="text-gray-600">Drug discovery, molecular modeling, and toxicity assessment</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Climate Science</h3>
              <p className="text-gray-600">Climate modeling, carbon capture, and renewable energy optimization</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Cybersecurity</h3>
              <p className="text-gray-600">Quantum cryptography and post-quantum security protocols</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Enter the Quantum Era?
            </h2>
            <p className="text-xl text-indigo-100 mb-10 leading-relaxed">
              Transform your business with quantum computing solutions that provide exponential computational advantages. Get started with a quantum consultation today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="inline-flex items-center px-10 py-5 bg-white text-indigo-600 font-bold text-lg rounded-xl hover:bg-indigo-50 transition-colors"
              >
                Schedule Quantum Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              
              <Link 
                href="/success-stories"
                className="inline-flex items-center px-10 py-5 border-2 border-white text-white font-bold text-lg rounded-xl hover:bg-white/10 transition-colors"
              >
                View Quantum Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}