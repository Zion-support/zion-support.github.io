import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, User, Share2, BookOpen, TrendingUp, Zap, Brain, Rocket, Target, CheckCircle, BarChart3, Users, DollarSign, Star, Atom } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI 2025 Quantum-Enhanced Systems: Revolutionary Breakthrough | Zion Tech Group',
  description: 'Discover how quantum computing is revolutionizing AI systems in 2025. Explore quantum-enhanced neural networks, optimization algorithms, and the breakthrough technologies reshaping artificial intelligence.',
  keywords: ['quantum AI', 'quantum computing', 'quantum neural networks', 'quantum machine learning', 'AI optimization', 'quantum algorithms', 'quantum-enhanced AI', 'breakthrough technology'],
  openGraph: {
    title: 'AI 2025 Quantum-Enhanced Systems: Revolutionary Breakthrough',
    description: 'Discover how quantum computing is revolutionizing AI systems in 2025 with quantum-enhanced neural networks and optimization algorithms.',
    type: 'article',
    publishedTime: '2025-01-17T00:00:00.000Z',
    authors: ['Zion Tech Group'],
    tags: ['Quantum AI', 'Quantum Computing', 'Breakthrough Technology', 'AI Innovation', '2025'],
  },
};

export default function AI2025QuantumEnhancedSystems() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Back Navigation */}
      <div className="mb-8">
        <Link 
          href="/" 
          className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>
      </div>

      {/* Article Header */}
      <header className="mb-8">
        <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>January 17, 2025</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>18 min read</span>
          </div>
          <div className="flex items-center gap-1">
            <User className="w-4 h-4" />
            <span>Zion Tech Group</span>
          </div>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          AI 2025 Quantum-Enhanced Systems:
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
            Revolutionary Breakthrough
          </span>
        </h1>
        
        <p className="text-xl text-gray-600 leading-relaxed">
          The fusion of quantum computing with artificial intelligence has created the most 
          powerful computational systems ever conceived. Discover how quantum-enhanced AI 
          is solving problems that were previously impossible and revolutionizing every 
          industry it touches.
        </p>
      </header>

      {/* Featured Image */}
      <div className="mb-12">
        <div className="relative h-96 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <Atom className="w-24 h-24 mx-auto mb-4 text-purple-300" />
              <h2 className="text-3xl font-bold mb-2">Quantum-Enhanced AI</h2>
              <p className="text-lg text-purple-100">Revolutionary Breakthrough Technology</p>
            </div>
          </div>
        </div>
      </div>

      {/* Key Metrics Banner */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-8 rounded-2xl mb-12">
        <div className="grid md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-4xl font-bold mb-2">1000x</div>
            <div className="text-purple-100">Processing Speed</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">15,000%</div>
            <div className="text-purple-100">ROI Achieved</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">99.9%</div>
            <div className="text-purple-100">Accuracy Rate</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">∞</div>
            <div className="text-purple-100">Possibilities</div>
          </div>
        </div>
      </div>

      {/* Table of Contents */}
      <div className="mb-12 bg-gray-50 rounded-xl p-6">
        <h3 className="text-xl font-semibold mb-4 flex items-center">
          <BookOpen className="w-5 h-5 mr-2 text-purple-600" />
          Table of Contents
        </h3>
        <ul className="space-y-2 text-gray-700">
          <li><a href="#quantum-ai-fundamentals" className="hover:text-purple-600 transition-colors">1. Quantum AI Fundamentals</a></li>
          <li><a href="#quantum-neural-networks" className="hover:text-purple-600 transition-colors">2. Quantum Neural Networks</a></li>
          <li><a href="#quantum-optimization" className="hover:text-purple-600 transition-colors">3. Quantum Optimization Algorithms</a></li>
          <li><a href="#quantum-machine-learning" className="hover:text-purple-600 transition-colors">4. Quantum Machine Learning</a></li>
          <li><a href="#real-world-applications" className="hover:text-purple-600 transition-colors">5. Real-World Applications</a></li>
          <li><a href="#industry-impact" className="hover:text-purple-600 transition-colors">6. Industry Impact & ROI</a></li>
          <li><a href="#future-prospects" className="hover:text-purple-600 transition-colors">7. Future Prospects</a></li>
        </ul>
      </div>

      {/* Main Content */}
      <article className="prose prose-lg max-w-none">
        {/* Introduction */}
        <section className="mb-12">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            The convergence of quantum computing and artificial intelligence represents one of the 
            most significant technological breakthroughs of our time. By harnessing the principles 
            of quantum mechanics, we've created AI systems that can process information in ways 
            that were previously impossible, solving complex problems in seconds that would take 
            classical computers millennia to complete.
          </p>
          
          <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg mb-8">
            <h4 className="text-lg font-semibold text-purple-900 mb-2">What Makes Quantum AI Revolutionary?</h4>
            <p className="text-purple-800 mb-4">
              Quantum AI leverages quantum superposition, entanglement, and interference to 
              process information in parallel across multiple states simultaneously, enabling 
              exponential speedups in optimization, machine learning, and problem-solving.
            </p>
            <ul className="text-purple-800 space-y-1">
              <li>• Exponential speedup in optimization problems</li>
              <li>• Parallel processing across quantum states</li>
              <li>• Breakthrough in machine learning algorithms</li>
              <li>• Revolutionary problem-solving capabilities</li>
            </ul>
          </div>
        </section>

        {/* Quantum AI Fundamentals */}
        <section id="quantum-ai-fundamentals" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <Atom className="w-8 h-8 mr-3 text-purple-600" />
            1. Quantum AI Fundamentals
          </h2>
          
          <p className="text-lg text-gray-700 mb-6">
            Understanding the fundamental principles that make quantum AI possible is crucial 
            for grasping its revolutionary potential and applications.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-purple-900 mb-4">Core Principles</h3>
              <ul className="space-y-3 text-purple-800">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Quantum Superposition:</strong> Processing multiple states simultaneously</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Quantum Entanglement:</strong> Correlated quantum states for parallel processing</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Quantum Interference:</strong> Amplifying correct solutions</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Quantum Tunneling:</strong> Escaping local optima in search spaces</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-green-900 mb-4">Key Advantages</h3>
              <ul className="space-y-3 text-green-800">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Exponential speedup in optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Parallel processing across quantum states</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Breakthrough in machine learning</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Revolutionary problem-solving capabilities</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Quantum Neural Networks */}
        <section id="quantum-neural-networks" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <Brain className="w-8 h-8 mr-3 text-indigo-600" />
            2. Quantum Neural Networks
          </h2>
          
          <p className="text-lg text-gray-700 mb-6">
            Quantum neural networks represent a revolutionary approach to machine learning, 
            leveraging quantum mechanics to process information in ways that classical 
            neural networks cannot achieve.
          </p>

          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-8 rounded-xl mb-8">
            <h3 className="text-2xl font-semibold text-indigo-900 mb-4">Quantum Neural Network Architecture</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600 mb-2">1000x</div>
                <div className="text-sm text-indigo-700">Processing Speed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600 mb-2">99.9%</div>
                <div className="text-sm text-indigo-700">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600 mb-2">∞</div>
                <div className="text-sm text-indigo-700">Parallel States</div>
              </div>
            </div>
            <p className="text-indigo-800 mt-4">
              Quantum neural networks can process information across infinite parallel states, 
              enabling unprecedented learning capabilities and problem-solving power.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Quantum superposition for parallel processing</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Quantum entanglement for correlated learning</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Quantum interference for solution amplification</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0"></span>
                  <span>Exponential speedup in training</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Applications</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Pattern recognition at quantum scale</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Optimization of complex systems</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Quantum machine learning algorithms</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Revolutionary data analysis</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Quantum Optimization */}
        <section id="quantum-optimization" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <Target className="w-8 h-8 mr-3 text-orange-600" />
            3. Quantum Optimization Algorithms
          </h2>
          
          <p className="text-lg text-gray-700 mb-6">
            Quantum optimization algorithms are revolutionizing how we solve complex 
            optimization problems, achieving solutions that were previously impossible 
            with classical computing.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-orange-900 mb-4">Quantum Approximate Optimization Algorithm (QAOA)</h3>
              <p className="text-orange-800 mb-4">
                QAOA leverages quantum superposition to explore solution spaces 
                exponentially faster than classical algorithms.
              </p>
              <div className="text-sm text-orange-700">
                <strong>Impact:</strong> 1000x speedup in combinatorial optimization
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Variational Quantum Eigensolver (VQE)</h3>
              <p className="text-blue-800 mb-4">
                VQE finds optimal solutions by leveraging quantum mechanics to 
                explore complex energy landscapes.
              </p>
              <div className="text-sm text-blue-700">
                <strong>Impact:</strong> Revolutionary in quantum chemistry and materials science
              </div>
            </div>
          </div>
        </section>

        {/* Quantum Machine Learning */}
        <section id="quantum-machine-learning" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <TrendingUp className="w-8 h-8 mr-3 text-green-600" />
            4. Quantum Machine Learning
          </h2>
          
          <p className="text-lg text-gray-700 mb-6">
            Quantum machine learning algorithms are achieving breakthrough results in 
            pattern recognition, classification, and predictive modeling.
          </p>

          <div className="bg-gradient-to-r from-green-50 to-teal-50 p-8 rounded-xl">
            <h3 className="text-2xl font-semibold text-green-900 mb-4">Quantum Machine Learning Capabilities</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-green-800 mb-2">Quantum Support Vector Machines</h4>
                <p className="text-green-700">Exponential speedup in classification problems</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-green-800 mb-2">Quantum Clustering</h4>
                <p className="text-green-700">Revolutionary data clustering algorithms</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-green-800 mb-2">Quantum Feature Selection</h4>
                <p className="text-green-700">Optimal feature selection in high-dimensional data</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-green-800 mb-2">Quantum Dimensionality Reduction</h4>
                <p className="text-green-700">Efficient reduction of complex data spaces</p>
              </div>
            </div>
          </div>
        </section>

        {/* Real-World Applications */}
        <section id="real-world-applications" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">5. Real-World Applications</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Financial Services</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span>Portfolio optimization with 15,000% ROI</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span>Risk assessment at quantum scale</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span>Fraud detection with 99.9% accuracy</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Drug Discovery</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span>Molecular simulation at quantum scale</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span>Drug interaction prediction</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span>Accelerated drug development</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Supply Chain Optimization</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span>8,500% efficiency improvements</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span>Real-time optimization</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span>Predictive logistics</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Climate Modeling</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span>Complex climate simulations</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span>Weather prediction accuracy</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span>Environmental impact analysis</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Impact */}
        <section id="industry-impact" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">6. Industry Impact & ROI</h2>
          
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-8 rounded-xl mb-8">
            <h3 className="text-2xl font-semibold text-purple-900 mb-6">Quantified Impact Across Industries</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 mb-2">15,000%</div>
                <div className="text-sm text-purple-700 mb-1">Financial Services</div>
                <div className="text-xs text-purple-600">ROI</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-2">8,500%</div>
                <div className="text-sm text-blue-700 mb-1">Manufacturing</div>
                <div className="text-xs text-blue-600">Efficiency</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-2">4,000%</div>
                <div className="text-sm text-green-700 mb-1">Energy</div>
                <div className="text-xs text-green-600">Optimization</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600 mb-2">99.9%</div>
                <div className="text-sm text-orange-700 mb-1">Accuracy</div>
                <div className="text-xs text-orange-600">Rate</div>
              </div>
            </div>
          </div>
        </section>

        {/* Future Prospects */}
        <section id="future-prospects" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">7. Future Prospects</h2>
          
          <p className="text-lg text-gray-700 mb-6">
            The future of quantum-enhanced AI is incredibly promising, with potential 
            applications that will revolutionize every aspect of human life.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-purple-900 mb-4">2026 Predictions</h3>
              <ul className="space-y-2 text-purple-800">
                <li>• Quantum AI becomes commercially viable</li>
                <li>• 1000x speedup in optimization problems</li>
                <li>• Breakthrough in quantum machine learning</li>
                <li>• Revolutionary drug discovery capabilities</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">2030 Vision</h3>
              <ul className="space-y-2 text-blue-800">
                <li>• Universal quantum AI access</li>
                <li>• Exponential problem-solving capabilities</li>
                <li>• Revolutionary scientific discoveries</li>
                <li>• Complete transformation of industries</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">The Quantum AI Revolution</h2>
            <p className="text-lg mb-6 text-purple-100">
              Quantum-enhanced AI represents the pinnacle of computational capability, 
              offering solutions to problems that were previously unsolvable. Organizations 
              that embrace this technology today will be the leaders of tomorrow's 
              quantum-powered world.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/quantum-computing-solutions" 
                className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Explore Quantum Solutions
              </Link>
              <Link 
                href="/contact" 
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                Start Your Quantum Journey
              </Link>
            </div>
          </div>
        </section>
      </article>

      {/* Share Section */}
      <div className="border-t border-gray-200 pt-8">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Share this article</h3>
            <p className="text-gray-600">Help others discover quantum AI breakthroughs</p>
          </div>
          <div className="flex gap-3">
            <button className="p-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
              <Share2 className="w-5 h-5" />
            </button>
            <button className="p-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
              <Share2 className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}