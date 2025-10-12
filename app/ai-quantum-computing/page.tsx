import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Zap, Shield, Globe, Cloud, Database, Smartphone, Brain, Cpu, Wifi, Star, Sparkles, Rocket, Atom, Cpu as QuantumIcon, Lock, Target, TrendingUp } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function AIQuantumComputingPage() {
  const features = [
    {
      icon: <Atom className="w-8 h-8 text-cyan-400" />,
      title: 'Quantum Algorithm Development',
      description: 'Custom quantum algorithms for optimization, cryptography, and machine learning applications.',
      benefits: ['Quantum Optimization - $15,000/project', 'Quantum Cryptography - $12,000/setup', 'Quantum ML Models - $20,000/implementation', 'Quantum Simulation - $8,000/month']
    },
    {
      icon: <QuantumIcon className="w-8 h-8 text-purple-400" />,
      title: 'Quantum Hardware Integration',
      description: 'Integration with leading quantum computing platforms and hardware providers.',
      benefits: ['IBM Quantum Access - $5,000/month', 'Google Quantum AI - $7,500/month', 'Rigetti Computing - $4,000/month', 'IonQ Integration - $6,000/month']
    },
    {
      icon: <Lock className="w-8 h-8 text-green-400" />,
      title: 'Quantum Security Solutions',
      description: 'Post-quantum cryptography and quantum-resistant security implementations.',
      benefits: ['Quantum Key Distribution - $25,000/setup', 'Post-Quantum Encryption - $18,000/migration', 'Quantum Random Number Generation - $3,000/month', 'Quantum Authentication - $10,000/implementation']
    },
    {
      icon: <Target className="w-8 h-8 text-orange-400" />,
      title: 'Quantum Optimization Services',
      description: 'Solving complex optimization problems using quantum annealing and variational algorithms.',
      benefits: ['Supply Chain Optimization - $30,000/project', 'Portfolio Optimization - $22,000/implementation', 'Route Optimization - $15,000/setup', 'Resource Allocation - $18,000/project']
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-pink-400" />,
      title: 'Quantum Machine Learning',
      description: 'Quantum-enhanced machine learning algorithms for superior performance.',
      benefits: ['Quantum Neural Networks - $35,000/development', 'Quantum Feature Selection - $12,000/implementation', 'Quantum Clustering - $8,000/setup', 'Quantum Classification - $15,000/project']
    },
    {
      icon: <Database className="w-8 h-8 text-blue-400" />,
      title: 'Quantum Data Processing',
      description: 'High-speed quantum data processing and analysis solutions.',
      benefits: ['Quantum Database Search - $20,000/setup', 'Quantum Data Compression - $12,000/implementation', 'Quantum Pattern Recognition - $18,000/project', 'Quantum Data Mining - $25,000/development']
    }
  ]

  const useCases = [
    {
      title: 'Financial Services',
      description: 'Quantum algorithms for risk analysis, portfolio optimization, and fraud detection.',
      icon: <TrendingUp className="w-6 h-6" />,
      price: 'Starting at $50,000'
    },
    {
      title: 'Pharmaceutical Research',
      description: 'Molecular simulation and drug discovery using quantum computing.',
      icon: <Atom className="w-6 h-6" />,
      price: 'Starting at $75,000'
    },
    {
      title: 'Logistics & Supply Chain',
      description: 'Complex optimization problems for route planning and resource allocation.',
      icon: <Target className="w-6 h-6" />,
      price: 'Starting at $40,000'
    },
    {
      title: 'Cybersecurity',
      description: 'Quantum-resistant encryption and advanced threat detection.',
      icon: <Shield className="w-6 h-6" />,
      price: 'Starting at $30,000'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Quantum Computing Solutions - Zion Tech Group</title>
        <meta name="description" content="Revolutionary quantum computing solutions powered by AI. Advanced quantum algorithms, hardware integration, and optimization services for enterprise applications." />
        <meta name="keywords" content="quantum computing, AI quantum, quantum algorithms, quantum optimization, quantum security, quantum machine learning" />
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] bg-[length:60px_60px] animate-pulse"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Atom className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-300 text-sm font-medium">Next-Generation Quantum Computing</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              AI-Powered <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">Quantum Computing</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto mb-8 px-4 leading-relaxed">
              Harness the power of quantum computing with AI-driven algorithms. Solve complex optimization problems, 
              enhance security, and accelerate innovation with our cutting-edge quantum solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
              >
                Get Quantum Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/ai-services" 
                className="group border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm"
              >
                Explore AI Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Quantum Computing <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Solutions</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Comprehensive quantum computing services designed to solve your most complex challenges
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group-hover:bg-white/15 group-hover:shadow-2xl group-hover:shadow-cyan-500/20 transform group-hover:scale-105">
                  <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="p-4 rounded-xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20 inline-block">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-300 transition-colors">{feature.title}</h3>
                  <p className="text-gray-300 mb-6 group-hover:text-white transition-colors">{feature.description}</p>
                  <ul className="space-y-2 mb-6">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300 group-hover:text-white transition-colors">
                        <CheckCircle className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Industry <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Applications</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Real-world quantum computing applications across various industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-purple-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 mr-4">
                    {useCase.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{useCase.title}</h3>
                    <p className="text-purple-400 font-medium">{useCase.price}</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.3),transparent_50%)]"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.3),transparent_50%)]"></div>
              
              <div className="relative">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 px-4">
                  Ready for Quantum Computing?
                </h2>
                <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-3xl mx-auto px-4">
                  Transform your business with quantum computing solutions. Get started with a free quantum readiness assessment.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact" 
                    className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                  >
                    Get Quantum Assessment
                  </Link>
                  <Link 
                    to="/ai-services" 
                    className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                  >
                    View All AI Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}