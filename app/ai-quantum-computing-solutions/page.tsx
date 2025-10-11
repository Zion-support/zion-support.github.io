'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Brain, Cpu, Zap, CheckCircle, ArrowRight, Star, Users, Clock, Shield, Globe, Code, BarChart, Target, Sparkles, Database, Smartphone, Lock, TrendingUp, Settings, Calendar, MessageCircle, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Server, Package, Workflow, Wifi, MessageSquare, ShoppingCart, Phone, Mail, MapPin, Atom, Layers, CircuitBoard, Quantum } from 'lucide-react';

const AiQuantumComputingSolutionsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
      <Helmet>
        <title>AI Quantum Computing Solutions | Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered quantum computing solutions for optimization, cryptography, and complex problem solving. Harness quantum advantage for your business." />
        <meta name="keywords" content="quantum computing, AI quantum, quantum algorithms, quantum optimization, quantum cryptography, quantum machine learning" />
        <meta property="og:title" content="AI Quantum Computing Solutions | Zion Tech Group" />
        <meta property="og:description" content="Revolutionary AI-powered quantum computing solutions for optimization, cryptography, and complex problem solving. Harness quantum advantage for your business." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-quantum-computing-solutions" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-quantum-computing-solutions" />
      </Helmet>
      
      <Navigation />
      
      <main className="relative">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-100 text-indigo-800 text-sm font-medium mb-6">
                <Atom className="w-4 h-4 mr-2" />
                Next-Generation Quantum Technology
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Quantum Computing <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Solutions</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Revolutionary AI-powered quantum computing solutions that solve complex optimization problems, 
                enhance cryptography, and accelerate machine learning beyond classical limitations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-700 hover:to-blue-700 transition-all duration-300">
                  Explore Quantum Solutions
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a href="#demo" className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300">
                  <CircuitBoard className="w-5 h-5 mr-2" />
                  Quantum Demo
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Quantum Capabilities Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Quantum Computing Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI-enhanced quantum computing solutions leverage quantum mechanics to solve problems 
                that are intractable for classical computers.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-6">
                  <Quantum className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Quantum Optimization</h3>
                <p className="text-gray-300 mb-4">
                  Solve complex optimization problems using quantum annealing and variational algorithms.
                </p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Portfolio optimization</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Supply chain optimization</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Route planning</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Quantum Cryptography</h3>
                <p className="text-gray-300 mb-4">
                  Unbreakable encryption using quantum key distribution and quantum-resistant algorithms.
                </p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Quantum key distribution</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Post-quantum cryptography</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Secure communications</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-6">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Quantum Machine Learning</h3>
                <p className="text-gray-300 mb-4">
                  Accelerate machine learning with quantum algorithms and quantum neural networks.
                </p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Quantum neural networks</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Quantum feature maps</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Quantum classification</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-6">
                  <Layers className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Quantum Simulation</h3>
                <p className="text-gray-300 mb-4">
                  Simulate quantum systems for drug discovery, materials science, and chemistry.
                </p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Molecular simulation</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Material discovery</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Chemical reactions</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mb-6">
                  <CircuitBoard className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Quantum Algorithms</h3>
                <p className="text-gray-300 mb-4">
                  Custom quantum algorithms for specific business problems and use cases.
                </p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Grover's algorithm</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Shor's algorithm</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />QAOA optimization</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Quantum Advantage</h3>
                <p className="text-gray-300 mb-4">
                  Achieve quantum advantage in specific problem domains with proven speedups.
                </p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Exponential speedup</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Parallel processing</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Quantum supremacy</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Applications Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Quantum Industry Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transform your industry with quantum computing solutions tailored to specific challenges and opportunities.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-900/50 to-indigo-900/50 rounded-xl p-8 border border-blue-500/20">
                <h3 className="text-xl font-semibold text-white mb-4">Financial Services</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />Portfolio optimization</li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />Risk assessment</li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />Fraud detection</li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />Algorithmic trading</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-900/50 to-teal-900/50 rounded-xl p-8 border border-green-500/20">
                <h3 className="text-xl font-semibold text-white mb-4">Pharmaceuticals</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />Drug discovery</li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />Molecular simulation</li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />Protein folding</li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />Chemical synthesis</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-xl p-8 border border-purple-500/20">
                <h3 className="text-xl font-semibold text-white mb-4">Logistics & Supply Chain</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />Route optimization</li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />Inventory management</li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />Warehouse optimization</li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />Demand forecasting</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-orange-900/50 to-red-900/50 rounded-xl p-8 border border-orange-500/20">
                <h3 className="text-xl font-semibold text-white mb-4">Energy & Utilities</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />Grid optimization</li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />Energy trading</li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />Renewable integration</li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />Load balancing</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-indigo-900/50 to-blue-900/50 rounded-xl p-8 border border-indigo-500/20">
                <h3 className="text-xl font-semibold text-white mb-4">Cybersecurity</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />Quantum key distribution</li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />Post-quantum cryptography</li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />Secure communications</li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />Threat detection</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-teal-900/50 to-cyan-900/50 rounded-xl p-8 border border-teal-500/20">
                <h3 className="text-xl font-semibold text-white mb-4">Manufacturing</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />Process optimization</li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />Quality control</li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />Predictive maintenance</li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />Material discovery</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Quantum Hardware Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Quantum Hardware & Infrastructure
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Access to cutting-edge quantum hardware and cloud-based quantum computing platforms.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CircuitBoard className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">IBM Quantum</h3>
                <p className="text-gray-300 text-sm">Access to IBM's quantum computers via cloud</p>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Atom className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Google Quantum</h3>
                <p className="text-gray-300 text-sm">Google's quantum processors and algorithms</p>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Layers className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Rigetti Computing</h3>
                <p className="text-gray-300 text-sm">Quantum cloud services and hardware</p>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Quantum className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">IonQ</h3>
                <p className="text-gray-300 text-sm">Trapped ion quantum computers</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Quantum Computing Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Flexible pricing for quantum computing access and development services.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Quantum Access</h3>
                  <p className="text-gray-300 mb-4">Basic quantum computing access</p>
                  <div className="text-4xl font-bold text-white mb-2">$1,999<span className="text-lg text-gray-300">/month</span></div>
                  <p className="text-sm text-gray-400">Up to 100 quantum jobs</p>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-gray-300"><CheckCircle className="w-5 h-5 text-green-400 mr-3" />Cloud quantum access</li>
                  <li className="flex items-center text-gray-300"><CheckCircle className="w-5 h-5 text-green-400 mr-3" />Basic algorithms</li>
                  <li className="flex items-center text-gray-300"><CheckCircle className="w-5 h-5 text-green-400 mr-3" />Documentation & tutorials</li>
                  <li className="flex items-center text-gray-300"><CheckCircle className="w-5 h-5 text-green-400 mr-3" />Community support</li>
                </ul>
                <a href="#contact" className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 text-center block">
                  Get Started
                </a>
              </div>

              <div className="bg-gradient-to-br from-cyan-600 to-blue-600 rounded-xl p-8 border border-cyan-400 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
                </div>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Quantum Development</h3>
                  <p className="text-cyan-100 mb-4">Full quantum development suite</p>
                  <div className="text-4xl font-bold text-white mb-2">$4,999<span className="text-lg text-cyan-100">/month</span></div>
                  <p className="text-sm text-cyan-200">Unlimited quantum jobs</p>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-white"><CheckCircle className="w-5 h-5 text-yellow-400 mr-3" />Unlimited quantum access</li>
                  <li className="flex items-center text-white"><CheckCircle className="w-5 h-5 text-yellow-400 mr-3" />Custom algorithm development</li>
                  <li className="flex items-center text-white"><CheckCircle className="w-5 h-5 text-yellow-400 mr-3" />Priority hardware access</li>
                  <li className="flex items-center text-white"><CheckCircle className="w-5 h-5 text-yellow-400 mr-3" />Expert consultation</li>
                  <li className="flex items-center text-white"><CheckCircle className="w-5 h-5 text-yellow-400 mr-3" />API integration</li>
                  <li className="flex items-center text-white"><CheckCircle className="w-5 h-5 text-yellow-400 mr-3" />24/7 support</li>
                </ul>
                <a href="#contact" className="w-full bg-white text-cyan-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-all duration-300 text-center block">
                  Get Started
                </a>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Enterprise Quantum</h3>
                  <p className="text-gray-300 mb-4">Custom quantum solutions</p>
                  <div className="text-4xl font-bold text-white mb-2">Custom</div>
                  <p className="text-sm text-gray-400">Tailored solutions</p>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-gray-300"><CheckCircle className="w-5 h-5 text-green-400 mr-3" />Dedicated quantum resources</li>
                  <li className="flex items-center text-gray-300"><CheckCircle className="w-5 h-5 text-green-400 mr-3" />Custom quantum algorithms</li>
                  <li className="flex items-center text-gray-300"><CheckCircle className="w-5 h-5 text-green-400 mr-3" />On-premise deployment</li>
                  <li className="flex items-center text-gray-300"><CheckCircle className="w-5 h-5 text-green-400 mr-3" />Dedicated support team</li>
                  <li className="flex items-center text-gray-300"><CheckCircle className="w-5 h-5 text-green-400 mr-3" />SLA guarantee</li>
                  <li className="flex items-center text-gray-300"><CheckCircle className="w-5 h-5 text-green-400 mr-3" />Training & certification</li>
                </ul>
                <a href="#contact" className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 text-center block">
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready for Quantum Computing?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Contact our quantum computing experts to discuss your requirements and explore quantum solutions.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-white mb-8">Get in Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <Phone className="w-6 h-6 text-cyan-400 mr-4" />
                    <div>
                      <p className="text-white font-semibold">Phone</p>
                      <p className="text-gray-300">+1 302 464 0950</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-6 h-6 text-cyan-400 mr-4" />
                    <div>
                      <p className="text-white font-semibold">Email</p>
                      <p className="text-gray-300">kleber@ziontechgroup.com</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-6 h-6 text-cyan-400 mr-4" />
                    <div>
                      <p className="text-white font-semibold">Address</p>
                      <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
                <form className="space-y-6">
                  <div>
                    <label className="block text-white font-semibold mb-2">Name</label>
                    <input type="text" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">Email</label>
                    <input type="email" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500" placeholder="your@email.com" />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">Company</label>
                    <input type="text" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500" placeholder="Your company" />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">Message</label>
                    <textarea rows={4} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500" placeholder="Tell us about your quantum computing needs..."></textarea>
                  </div>
                  <button type="submit" className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-cyan-700 hover:to-blue-700 transition-all duration-300">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AiQuantumComputingSolutionsPage;