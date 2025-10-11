'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Brain, Cpu, Shield, Zap, CheckCircle, ArrowRight, Star, Users, Globe, Code, BarChart, Target, Sparkles, Database, Smartphone, Lock, TrendingUp, Settings, Calendar, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Server, Package, Mic, Workflow, Eye, Wifi, MessageSquare, ShoppingCart, Rocket } from 'lucide-react';

const AiQuantumComputingPage: React.FC = () => {
  const features = [
    {
      icon: Cpu,
      title: 'Quantum Processing Power',
      description: 'Exponential computational capabilities for complex problem solving',
      benefits: ['1000x faster processing', 'Parallel quantum operations', 'Exponential speedup', 'Revolutionary algorithms']
    },
    {
      icon: Shield,
      title: 'Quantum Security',
      description: 'Unbreakable encryption using quantum key distribution',
      benefits: ['Quantum key distribution', 'Post-quantum cryptography', 'Unbreakable encryption', 'Future-proof security']
    },
    {
      icon: Brain,
      title: 'Quantum Machine Learning',
      description: 'Advanced AI algorithms powered by quantum computing',
      benefits: ['Quantum neural networks', 'Quantum optimization', 'Advanced pattern recognition', 'Exponential learning']
    },
    {
      icon: BarChart,
      title: 'Quantum Analytics',
      description: 'Revolutionary data analysis with quantum algorithms',
      benefits: ['Quantum data processing', 'Complex optimization', 'Advanced simulations', 'Real-time insights']
    }
  ];

  const useCases = [
    {
      title: 'Financial Modeling',
      description: 'Complex risk analysis and portfolio optimization',
      icon: DollarSign,
      price: 'Starting at $2,999/month'
    },
    {
      title: 'Drug Discovery',
      description: 'Molecular simulation and pharmaceutical research',
      icon: Heart,
      price: 'Starting at $4,999/month'
    },
    {
      title: 'Climate Modeling',
      description: 'Advanced weather prediction and climate analysis',
      icon: Globe,
      price: 'Starting at $3,499/month'
    },
    {
      title: 'Cryptography',
      description: 'Quantum-resistant security solutions',
      icon: Lock,
      price: 'Starting at $1,999/month'
    }
  ];

  const stats = [
    { number: '1000x', label: 'Faster Processing' },
    { number: '99.9%', label: 'Accuracy Rate' },
    { number: '24/7', label: 'Quantum Access' },
    { number: '50+', label: 'Quantum Algorithms' }
  ];

  return (
    <>
      <Helmet>
        <title>AI Quantum Computing Solutions | Zion Tech Group</title>
        <meta name="description" content="Revolutionary quantum computing solutions powered by AI. Exponential processing power, quantum security, and advanced algorithms for complex problem solving." />
        <meta name="keywords" content="quantum computing, AI quantum, quantum algorithms, quantum security, quantum machine learning, quantum analytics" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <div className="max-w-6xl mx-auto">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                AI Quantum Computing Solutions
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
                Revolutionary Quantum Computing Powered by AI
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                Experience the future of computing with our AI-powered quantum solutions. Achieve exponential processing power, 
                unbreakable security, and solve complex problems that were previously impossible with classical computing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
                >
                  📞 Call: (302) 464-0950
                </a>
                <a 
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  📧 Email Us
                </a>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
              Quantum Computing Features
            </h2>
            <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
              Harness the power of quantum computing with our advanced AI-powered solutions
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Use Cases Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
              Quantum Computing Use Cases
            </h2>
            <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
              Discover how quantum computing can transform your industry
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
                  <useCase.icon className="w-12 h-12 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-300 mb-4">{useCase.description}</p>
                  <div className="text-cyan-400 font-semibold">{useCase.price}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Stats Section */}
          <section className="mb-16">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                {stats.map((stat, index) => (
                  <div key={index}>
                    <div className="text-4xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                    <div className="text-gray-300">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="bg-slate-800/50 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                Ready to Experience Quantum Computing?
              </h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Contact our quantum computing experts to discuss how our AI-powered quantum solutions can revolutionize your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Get Free Consultation
                </a>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Call: (302) 464-0950
                </a>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default AiQuantumComputingPage;