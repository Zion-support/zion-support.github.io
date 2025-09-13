import React from 'react';
import Link from 'next/link';
import { ArrowRight, Atom, Cpu, Zap, Shield, Target, TrendingUp, Users, Award, CheckCircle, Star, Globe, Lock } from 'lucide-react';

export const metadata = {
  title: 'Quantum Computing Solutions 2025 - Revolutionary Quantum AI Technology',
  description: 'Discover breakthrough quantum computing solutions: error-corrected quantum computers, quantum supremacy, and quantum-AI fusion delivering unprecedented computational power.',
  keywords: ['Quantum Computing 2025', 'Quantum Supremacy', 'Error-Corrected Quantum', 'Quantum AI', 'Quantum Machine Learning', 'Quantum Internet'],
};

export default function QuantumComputingSolutions2025() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 to-purple-600/10"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-pulse">
            <Atom className="w-4 h-4" />
            QUANTUM BREAKTHROUGH 2025
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Quantum Computing
            <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Solutions 2025
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Experience the future of computing with our revolutionary quantum solutions. 
            Error-corrected quantum computers, quantum supremacy, and quantum-AI fusion delivering unprecedented computational power.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="#quantum-solutions" 
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Explore Quantum Solutions
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </Link>
            <Link 
              href="/contact" 
              className="border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-600 hover:text-white transition-all duration-300"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Quantum Stats */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">1M+</div>
              <div className="text-gray-600 font-semibold">Quantum Qubits</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">99.99%</div>
              <div className="text-gray-600 font-semibold">Error Correction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">10^18</div>
              <div className="text-gray-600 font-semibold">Computational Speed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">24/7</div>
              <div className="text-gray-600 font-semibold">Quantum Operations</div>
            </div>
          </div>
        </div>
      </section>

      {/* Quantum Solutions */}
      <section id="quantum-solutions" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Revolutionary Quantum Computing Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Harness the power of quantum mechanics to solve the world's most complex computational problems with unprecedented speed and accuracy.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Error-Corrected Quantum Computers */}
            <div className="bg-gradient-to-br from-indigo-50 to-blue-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Error-Corrected Quantum Computers</h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Revolutionary quantum computers with 99.99% error correction, enabling stable quantum operations for complex problem-solving and breakthrough discoveries.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">1M+ logical qubits with error correction</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Quantum error correction algorithms</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Stable quantum operations 24/7</span>
                </li>
              </ul>
              <div className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-semibold inline-block">
                ROI: 4,500%
              </div>
            </div>

            {/* Quantum Supremacy */}
            <div className="bg-gradient-to-br from-purple-50 to-violet-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Quantum Supremacy</h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Achieve computational supremacy with quantum systems that outperform classical computers by orders of magnitude in specific problem domains.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">10^18x faster than classical computers</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Quantum advantage in optimization</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Breakthrough problem-solving capabilities</span>
                </li>
              </ul>
              <div className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-semibold inline-block">
                ROI: 5,200%
              </div>
            </div>

            {/* Quantum-AI Fusion */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Cpu className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Quantum-AI Fusion</h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Revolutionary fusion of quantum computing and artificial intelligence, creating hybrid systems with unprecedented computational and learning capabilities.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Quantum neural networks</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Quantum machine learning algorithms</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Hybrid quantum-classical AI</span>
                </li>
              </ul>
              <div className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold inline-block">
                ROI: 3,800%
              </div>
            </div>

            {/* Quantum Internet */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Quantum Internet</h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Ultra-secure quantum communication network enabling unhackable data transmission and quantum entanglement-based connectivity.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Quantum key distribution (QKD)</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Quantum entanglement networks</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Unhackable quantum communication</span>
                </li>
              </ul>
              <div className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold inline-block">
                ROI: 2,900%
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quantum Applications */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Quantum Applications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how quantum computing is revolutionizing industries and solving previously impossible problems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Drug Discovery</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Quantum algorithms accelerate drug discovery by simulating molecular interactions at quantum scale, reducing development time from years to months.
              </p>
              <div className="text-indigo-600 font-semibold">10,000x faster molecular simulation</div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                  <Lock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Cryptography</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Quantum-resistant cryptography and quantum key distribution provide unbreakable security for sensitive data and communications.
              </p>
              <div className="text-purple-600 font-semibold">Unhackable quantum security</div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Financial Modeling</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Quantum algorithms optimize complex financial portfolios and risk models, providing unprecedented accuracy in market predictions.
              </p>
              <div className="text-blue-600 font-semibold">99.9% prediction accuracy</div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Quantum Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how leading organizations are leveraging quantum computing to achieve breakthrough results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-indigo-50 to-blue-100 p-8 rounded-2xl shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Pharmaceutical Giant</h3>
                  <p className="text-gray-600">Fortune 100 Company</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Quantum computing accelerated our drug discovery process by 10,000x, identifying new cancer treatments in months instead of years. ROI exceeded 4,500%."
              </p>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                <span className="text-gray-600 ml-2">5.0/5.0</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-violet-100 p-8 rounded-2xl shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Financial Institution</h3>
                  <p className="text-gray-600">Global Bank</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Quantum-AI fusion revolutionized our trading algorithms, achieving 5,200% ROI and 99.9% accuracy in market predictions. Game-changing technology!"
              </p>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                <span className="text-gray-600 ml-2">5.0/5.0</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Harness Quantum Power?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join the quantum revolution and unlock unprecedented computational power. 
            Start your quantum computing journey with 2,900-5,200% ROI potential.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-indigo-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Start Quantum Journey
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </Link>
            <Link 
              href="/ai-services-2025" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
            >
              Explore All Solutions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}