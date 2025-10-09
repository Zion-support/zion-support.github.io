'use client';
import React from 'react';
import { ArrowLeft, Cpu, Zap, Brain, Target, Shield, CheckCircle, Star, Users, Atom, Infinity, Layers } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const QuantumAI: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Back Button */}
        <a
          href="/"
          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8 transition-colors duration-300"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </a>

        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="text-6xl mb-6">⚛️</div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
            Quantum AI Computing
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Next-generation quantum AI solutions for complex optimization and machine learning problems
          </p>
          <div className="text-3xl font-bold text-cyan-400 mb-8">$5,000/month</div>
          <a
            href="/contact"
            className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
          >
            Explore Quantum AI
          </a>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Quantum AI Capabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="cyber-card p-6 text-center">
              <Atom className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Quantum ML Algorithms</h3>
              <p className="text-gray-300">Advanced quantum machine learning algorithms for exponential speedup</p>
            </div>
            <div className="cyber-card p-6 text-center">
              <Target className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Optimization Problems</h3>
              <p className="text-gray-300">Solve complex optimization problems with quantum annealing</p>
            </div>
            <div className="cyber-card p-6 text-center">
              <Shield className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Cryptography</h3>
              <p className="text-gray-300">Quantum-resistant cryptography and secure communications</p>
            </div>
            <div className="cyber-card p-6 text-center">
              <Layers className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Simulation</h3>
              <p className="text-gray-300">Quantum simulation for molecular and material science</p>
            </div>
            <div className="cyber-card p-6 text-center">
              <Brain className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Quantum Neural Networks</h3>
              <p className="text-gray-300">Quantum neural networks for enhanced AI capabilities</p>
            </div>
            <div className="cyber-card p-6 text-center">
              <BarChart className="w-12 h-12 text-red-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Advanced Analytics</h3>
              <p className="text-gray-300">Quantum-powered analytics for complex data processing</p>
            </div>
          </div>
        </section>

        {/* Applications Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Quantum AI Applications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="cyber-card p-6">
              <h3 className="text-xl font-bold text-cyan-400 mb-4">Financial Services</h3>
              <p className="text-gray-300 mb-4">Quantum algorithms for portfolio optimization, risk analysis, and fraud detection</p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Portfolio optimization with quantum annealing
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Monte Carlo simulations
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Risk assessment and management
                </li>
              </ul>
            </div>
            <div className="cyber-card p-6">
              <h3 className="text-xl font-bold text-green-400 mb-4">Drug Discovery</h3>
              <p className="text-gray-300 mb-4">Quantum simulation for molecular modeling and drug development</p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Molecular structure optimization
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Protein folding simulations
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Drug-target interaction modeling
                </li>
              </ul>
            </div>
            <div className="cyber-card p-6">
              <h3 className="text-xl font-bold text-purple-400 mb-4">Supply Chain</h3>
              <p className="text-gray-300 mb-4">Quantum optimization for logistics and supply chain management</p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Route optimization
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Inventory management
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Demand forecasting
                </li>
              </ul>
            </div>
            <div className="cyber-card p-6">
              <h3 className="text-xl font-bold text-yellow-400 mb-4">Climate Science</h3>
              <p className="text-gray-300 mb-4">Quantum computing for climate modeling and environmental research</p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Climate pattern analysis
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Carbon capture optimization
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Renewable energy planning
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Why Choose Quantum AI?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="cyber-card p-6 text-center">
              <Infinity className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Exponential Speedup</h3>
              <p className="text-gray-300">Solve problems that would take classical computers thousands of years in minutes</p>
            </div>
            <div className="cyber-card p-6 text-center">
              <Zap className="w-16 h-16 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Revolutionary Capabilities</h3>
              <p className="text-gray-300">Access computational capabilities impossible with classical computing</p>
            </div>
            <div className="cyber-card p-6 text-center">
              <Target className="w-16 h-16 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Future-Proof</h3>
              <p className="text-gray-300">Stay ahead of the competition with cutting-edge quantum technology</p>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Quantum AI Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="cyber-card p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Research</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$2,500/month</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Basic quantum algorithms
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Simulation tools
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Research support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Documentation
                </li>
              </ul>
              <a href="/contact" className="cyber-button px-6 py-3 w-full">Get Started</a>
            </div>
            <div className="cyber-card p-8 text-center ring-2 ring-cyan-400">
              <div className="bg-cyan-400 text-slate-900 px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$5,000/month</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Advanced quantum algorithms
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Custom optimization
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Quantum ML models
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Priority support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  API access
                </li>
              </ul>
              <a href="/contact" className="cyber-button px-6 py-3 w-full">Get Started</a>
            </div>
            <div className="cyber-card p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$10,000/month</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Full quantum computing access
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Custom quantum hardware
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Dedicated quantum team
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  White-label solutions
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  24/7 quantum support
                </li>
              </ul>
              <a href="/contact" className="cyber-button px-6 py-3 w-full">Get Started</a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8 neon-text">
            Ready to Harness Quantum AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join the quantum revolution and unlock unprecedented computational power
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
            >
              Schedule Consultation
            </a>
            <a
              href="tel:+13024640950"
              className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              <Clock className="w-5 h-5" />
              Call +1 302 464 0950
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default QuantumAI;