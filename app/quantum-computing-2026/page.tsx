import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Atom, 
  Cpu, 
  Zap, 
  Shield, 
  Globe, 
  Lock, 
  Network,
  TrendingUp,
  Target,
  Rocket,
  Award,
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  Database,
  Brain,
  Layers,
  BookOpen,
  Download,
  Play
} from 'lucide-react';

const QuantumComputing2026Page: React.FC = () => {
  const [activeBreakthrough, setActiveBreakthrough] = useState(0);

  const breakthroughs = [
    {
      title: 'Quantum Supremacy 2.0',
      description: 'Achieved quantum advantage in practical applications beyond classical simulation',
      impact: '10,000x faster problem solving',
      applications: ['Drug Discovery', 'Financial Modeling', 'Climate Simulation', 'Cryptography'],
      icon: <Atom className="w-12 h-12" />,
      color: 'from-blue-600 to-cyan-600',
      details: 'Quantum computers now solve real-world problems that would take classical computers thousands of years to complete. This breakthrough enables rapid drug discovery, complex financial modeling, and accurate climate predictions.',
      timeline: 'Q2 2026',
      status: 'Achieved'
    },
    {
      title: 'Error-Corrected Quantum Computers',
      description: 'First commercially viable quantum computers with logical qubits',
      impact: '99.9% accuracy in quantum operations',
      applications: ['Quantum Machine Learning', 'Optimization', 'Simulation', 'Cryptography'],
      icon: <Shield className="w-12 h-12" />,
      color: 'from-purple-600 to-pink-600',
      details: 'Error correction technology has made quantum computers reliable enough for commercial use. Logical qubits maintain quantum states despite physical errors, enabling practical quantum applications.',
      timeline: 'Q3 2026',
      status: 'In Development'
    },
    {
      title: 'Quantum Internet',
      description: 'Global quantum communication network enabling unbreakable encryption',
      impact: '100% secure global communication',
      applications: ['Secure Banking', 'Government Communications', 'Healthcare Data', 'IoT Security'],
      icon: <Globe className="w-12 h-12" />,
      color: 'from-green-600 to-emerald-600',
      details: 'The quantum internet provides unbreakable encryption through quantum key distribution. This network ensures absolute security for sensitive communications and data transmission.',
      timeline: 'Q4 2026',
      status: 'Pilot Phase'
    },
    {
      title: 'Quantum-AI Hybrid Systems',
      description: 'Integration of quantum computing with artificial intelligence',
      impact: 'Exponential AI performance boost',
      applications: ['Pattern Recognition', 'Decision Making', 'Creative AI', 'Predictive Analytics'],
      icon: <Brain className="w-12 h-12" />,
      color: 'from-orange-600 to-red-600',
      details: 'Quantum-AI fusion combines the parallel processing power of quantum computers with machine learning algorithms, creating AI systems that can process exponentially more data and make more accurate predictions.',
      timeline: 'Q1 2027',
      status: 'Research Phase'
    }
  ];

  const benefits = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Exponential Speed',
      description: 'Solve complex problems in seconds that would take classical computers years'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Unbreakable Security',
      description: 'Quantum encryption provides absolute security for sensitive data'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Perfect Accuracy',
      description: 'Achieve 99.9% accuracy in quantum operations with error correction'
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Future-Ready',
      description: 'Prepare for the quantum revolution that will transform every industry'
    }
  ];

  const industries = [
    { 
      name: 'Healthcare', 
      applications: ['Drug Discovery', 'Protein Folding', 'Personalized Medicine'],
      impact: '90% faster drug development',
      savings: '$2.5B annually'
    },
    { 
      name: 'Finance', 
      applications: ['Risk Modeling', 'Portfolio Optimization', 'Fraud Detection'],
      impact: 'Real-time risk assessment',
      savings: '$1.8B annually'
    },
    { 
      name: 'Climate Science', 
      applications: ['Climate Modeling', 'Carbon Capture', 'Renewable Energy'],
      impact: 'Accurate climate predictions',
      savings: '$3.2B annually'
    },
    { 
      name: 'Manufacturing', 
      applications: ['Supply Chain Optimization', 'Quality Control', 'Predictive Maintenance'],
      impact: 'Zero-defect production',
      savings: '$2.1B annually'
    }
  ];

  const stats = [
    { number: '1,000+', label: 'Qubits in Latest Systems' },
    { number: '99.9%', label: 'Quantum Gate Fidelity' },
    { number: '10,000x', label: 'Speed Improvement' },
    { number: '100%', label: 'Security Guarantee' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
      {/* Header */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold mb-6"
            >
              <Atom className="w-5 h-5 mr-2" />
              Quantum Computing Breakthroughs 2026
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              The Quantum Revolution is{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Here
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              Witness the most significant quantum computing breakthroughs of 2026. 
              From quantum supremacy to error-corrected systems, the future of computing is quantum.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Breakthrough */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Featured Breakthrough
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Explore the most significant quantum computing breakthrough of 2026
            </p>
          </div>

          <motion.div
            key={activeBreakthrough}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r ${breakthroughs[activeBreakthrough].color} mb-6`}>
                  {breakthroughs[activeBreakthrough].icon}
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">
                  {breakthroughs[activeBreakthrough].title}
                </h3>
                <p className="text-gray-300 text-lg mb-6">
                  {breakthroughs[activeBreakthrough].description}
                </p>
                <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg p-4 mb-6">
                  <div className="text-2xl font-bold text-white mb-2">
                    {breakthroughs[activeBreakthrough].impact}
                  </div>
                  <div className="text-gray-300 text-sm">
                    Performance Impact
                  </div>
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-300">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {breakthroughs[activeBreakthrough].timeline}
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                    {breakthroughs[activeBreakthrough].status}
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-white mb-4">Key Applications</h4>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {breakthroughs[activeBreakthrough].applications.map((app, index) => (
                    <div key={index} className="bg-gray-700/50 rounded-lg p-3 flex items-center">
                      <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
                      <span className="text-gray-300 text-sm">{app}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-gray-700/50 rounded-lg p-4">
                  <h5 className="text-white font-semibold mb-2">Technical Details</h5>
                  <p className="text-gray-300 text-sm">
                    {breakthroughs[activeBreakthrough].details}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Breakthrough Navigation */}
          <div className="flex justify-center mt-8">
            <div className="flex space-x-2">
              {breakthroughs.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveBreakthrough(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeBreakthrough === index ? 'bg-blue-400' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Breakthroughs Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              All Quantum Breakthroughs
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Explore all the quantum computing breakthroughs that will shape 2026
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {breakthroughs.map((breakthrough, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className={`bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-blue-400/50 transition-all duration-300 cursor-pointer ${
                  activeBreakthrough === index ? 'ring-2 ring-blue-400' : ''
                }`}
                onClick={() => setActiveBreakthrough(index)}
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r ${breakthrough.color} mb-4`}>
                  {breakthrough.icon}
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  {breakthrough.title}
                </h4>
                <p className="text-gray-300 text-sm mb-4">
                  {breakthrough.description}
                </p>
                <div className="text-blue-400 text-sm font-semibold mb-2">
                  {breakthrough.impact}
                </div>
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span>{breakthrough.timeline}</span>
                  <span className="flex items-center">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    {breakthrough.status}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Impact */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Industry Impact & Results
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              See how quantum computing is transforming industries across the globe
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold text-white mb-4">{industry.name}</h3>
                <div className="space-y-3 mb-4">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">Applications:</h4>
                    <ul className="space-y-1">
                      {industry.applications.map((app, idx) => (
                        <li key={idx} className="text-gray-400 text-sm flex items-center">
                          <ArrowRight className="w-3 h-3 mr-2" />
                          {app}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 text-sm">Impact:</span>
                    <span className="text-green-400 font-semibold text-sm">{industry.impact}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 text-sm">Savings:</span>
                    <span className="text-blue-400 font-semibold text-sm">{industry.savings}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Why Quantum Computing Matters
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Understanding the benefits of quantum computing is crucial for future success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-gray-700/50 transition-all duration-300"
              >
                <div className="text-blue-400 mb-4 flex justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 text-sm">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready for the Quantum Future?
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join the quantum revolution. Get access to our comprehensive quantum computing 
              solutions and be among the first to leverage these breakthrough technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                <Rocket className="w-5 h-5 mr-2" />
                Explore Quantum Solutions
              </button>
              <button className="border border-gray-400 text-gray-300 px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 flex items-center justify-center">
                <Download className="w-5 h-5 mr-2" />
                Download Report
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuantumComputing2026Page;