'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Lightbulb, Users, TrendingUp, CheckCircle, ArrowRight, Brain, Target, BarChart, MessageSquare, Eye, Clock, Star, Phone, MapPin, Mail, Calendar, FileText, Zap, Shield, Database, Cpu } from 'lucide-react';

const InnovationLabsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Innovation Labs - Zion Tech Group</title>
        <meta name="description" content="Cutting-edge innovation labs focused on research and development of next-generation technologies. Explore the future of technology with our expert team." />
        <meta name="keywords" content="innovation labs, research and development, technology innovation, R&D, future technologies" />
        <meta property="og:title" content="Innovation Labs - Zion Tech Group" />
        <meta property="og:description" content="Cutting-edge innovation labs focused on research and development of next-generation technologies. Explore the future of technology with our expert team." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/innovation-labs" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Innovation Labs - Zion Tech Group" />
        <meta name="twitter:description" content="Cutting-edge innovation labs focused on research and development of next-generation technologies. Explore the future of technology with our expert team." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Innovation Labs
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Cutting-edge innovation labs focused on research and development of next-generation technologies. Explore the future of technology with our expert team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  Explore Labs
                </button>
                <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  View Research
                </button>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="mb-16">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-white text-center mb-12">
                Cutting-Edge Research Areas
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <Brain className="h-8 w-8 text-purple-400 mr-3" />
                    <h3 className="text-xl font-semibold text-white">Artificial Intelligence</h3>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Advanced AI research including machine learning, neural networks, and cognitive computing.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      Machine learning
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      Neural networks
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      Cognitive computing
                    </li>
                  </ul>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <Cpu className="h-8 w-8 text-purple-400 mr-3" />
                    <h3 className="text-xl font-semibold text-white">Quantum Computing</h3>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Revolutionary quantum computing research for next-generation computational power.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      Quantum algorithms
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      Quantum cryptography
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      Quantum simulation
                    </li>
                  </ul>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <Database className="h-8 w-8 text-purple-400 mr-3" />
                    <h3 className="text-xl font-semibold text-white">Blockchain Technology</h3>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Advanced blockchain research for secure, decentralized applications and systems.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      Smart contracts
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      DeFi protocols
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      Consensus mechanisms
                    </li>
                  </ul>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <Eye className="h-8 w-8 text-purple-400 mr-3" />
                    <h3 className="text-xl font-semibold text-white">Computer Vision</h3>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Advanced computer vision research for image recognition and visual intelligence.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      Image recognition
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      Object detection
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      Visual intelligence
                    </li>
                  </ul>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <Zap className="h-8 w-8 text-purple-400 mr-3" />
                    <h3 className="text-xl font-semibold text-white">IoT & Edge Computing</h3>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Research on Internet of Things and edge computing for connected devices.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      IoT protocols
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      Edge computing
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      Sensor networks
                    </li>
                  </ul>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <Shield className="h-8 w-8 text-purple-400 mr-3" />
                    <h3 className="text-xl font-semibold text-white">Cybersecurity</h3>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Advanced cybersecurity research for protecting digital assets and systems.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      Threat detection
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      Encryption methods
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      Security protocols
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Research Areas Section */}
          <section className="mb-16">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-white text-center mb-12">
                Research Focus Areas
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Emerging Technologies</h3>
                  <p className="text-gray-300 mb-6">
                    We focus on cutting-edge technologies that will shape the future, including AI, quantum computing, and blockchain.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                      Artificial Intelligence & Machine Learning
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                      Quantum Computing
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                      Blockchain & Cryptocurrency
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                      Augmented & Virtual Reality
                    </li>
                  </ul>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Applied Research</h3>
                  <p className="text-gray-300 mb-6">
                    Our applied research focuses on practical applications of technology to solve real-world problems.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                      Healthcare Technology
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                      Smart Cities
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                      Environmental Technology
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                      Financial Technology
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="mb-16">
            <div className="max-w-6xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                  <div>
                    <div className="text-4xl font-bold text-purple-400 mb-2">50+</div>
                    <div className="text-gray-300">Research Projects</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-purple-400 mb-2">100+</div>
                    <div className="text-gray-300">Research Papers</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-purple-400 mb-2">25+</div>
                    <div className="text-gray-300">Patents Filed</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-purple-400 mb-2">4.9/5</div>
                    <div className="text-gray-300">Research Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Explore the Future?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join us in pushing the boundaries of technology and creating the future.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  Explore Labs
                </button>
                <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  View Research
                </button>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default InnovationLabsPage;