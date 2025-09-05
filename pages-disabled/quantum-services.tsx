import React from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';
import {_Atom, _Brain, _Rocket, _Shield, _Zap, _Target, _Cpu, _Lock, _Cloud, _Settings, _Eye, _Award, _Clock, _Heart, _Lightbulb, _Search, _Grid, _List, _TrendingUp, _User, _ShoppingCart, _Bell, _HelpCircle, _FileText, _Video, _Headphones, _Code, _Database, _Network, _Server, _Monitor, _Smartphone, _Camera, _Gamepad2, _Palette, _Music, _Film, _BookOpenCheck, _Building, _MessageCircle, _Sparkles, _ArrowRight, _CheckCircle, _Star, _Globe} from 'lucide-react';

const QuantumServicesPage: React.FC = () => {_const _quantumServices = [
    {
      id: 'quantum-neural-networks', _name: 'Quantum Neural Networks', _description: 'Next-generation neural networks powered by quantum computing', _features: ['Quantum Superposition', _'Entanglement Processing', _'Quantum Memory', _'Hybrid Classical-Quantum'], _price: '$3, _999', _period: 'month', _popular: true, _icon: <Brain className="w-8 h-8" />},
    {_id: 'quantum-financial-trading', _name: 'Quantum Financial Trading', _description: 'Quantum-powered algorithmic trading and risk management', _features: ['Quantum Risk Assessment', _'Portfolio Optimization', _'Market Prediction', _'Real-time Analysis'], _price: '$2, _999', _period: 'month', _popular: false, _icon: <TrendingUp className="w-8 h-8" />},
    {_id: 'quantum-materials-discovery', _name: 'Quantum Materials Discovery', _description: 'Accelerated materials research using quantum simulation', _features: ['Quantum Simulation', _'Molecular Modeling', _'Property Prediction', _'Discovery Automation'], _price: '$2, _499', _period: 'month', _popular: false, _icon: <Atom className="w-8 h-8" />},
    {_id: 'quantum-bio-computing', _name: 'Quantum Bio-Computing', _description: 'Quantum computing for biological and pharmaceutical research', _features: ['Protein Folding', _'Drug Discovery', _'Genetic Analysis', _'Bioinformatics'], _price: '$2, _799', _period: 'month', _popular: false, _icon: <Heart className="w-8 h-8" />},
    {_id: 'quantum-internet-security', _name: 'Quantum Internet Security', _description: 'Unbreakable quantum encryption and secure communications', _features: ['Quantum Key Distribution', _'Post-Quantum Cryptography', _'Secure Networks', _'Quantum Authentication'], _price: '$1, _999', _period: 'month', _popular: false, _icon: <Shield className="w-8 h-8" />},
    {_id: 'quantum-cloud-infrastructure', _name: 'Quantum Cloud Infrastructure', _description: 'Quantum-ready cloud computing infrastructure', _features: ['Quantum Processing Units', _'Hybrid Computing', _'Scalable Architecture', _'Performance Optimization'], _price: '$3, _499', _period: 'month', _popular: false, _icon: <Cloud className="w-8 h-8" />}
  ];

  const _quantumCapabilities = [
    {_title: 'Quantum Computing', _description: 'Advanced quantum processing for complex calculations', _icon: <Atom className="w-6 h-6" />},
    {_title: 'Quantum Simulation', _description: 'Accurate simulation of quantum systems', _icon: <Network className="w-6 h-6" />},
    {_title: 'Quantum Cryptography', _description: 'Unbreakable encryption using quantum principles', _icon: <Lock className="w-6 h-6" />},
    {_title: 'Quantum Machine Learning', _description: 'AI enhanced by quantum computing power', _icon: <Brain className="w-6 h-6" />},
    {_title: 'Quantum Sensing', _description: 'Ultra-sensitive quantum measurement systems', _icon: <Eye className="w-6 h-6" />},
    {_title: 'Quantum Communication', _description: 'Secure quantum information transfer', _icon: <Globe className="w-6 h-6" />}
  ];

export default function QuantumServices() {_return (_<Layout>
      <SEO 
        title="Quantum Computing Services - Zion Tech Group"
        description="Revolutionary quantum computing solutions for the future. From neural networks to financial trading, _unlock quantum advantage."
        keywords="quantum computing, _quantum services, _quantum neural networks, _quantum financial trading, _quantum materials discovery"
      />
      
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-[60vh] flex items-center justify-center px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={_{ opacity: 0, _y: 20}}
              animate={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-600 bg-clip-text text-transparent">
                Quantum Computing
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Pioneering the quantum revolution with cutting-edge computing solutions that solve previously impossible problems
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                </a>
                <a 
                  href="/contact" 
                  className="px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-black transition-all duration-300 transform hover:scale-105"
                >
                  Schedule Demo
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {_/* Quantum Capabilities */}
        <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={_{ opacity: 0, _y: 20}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
              viewport={_{ once: true}}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Quantum Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Harness the power of quantum mechanics for revolutionary computing solutions
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {_quantumCapabilities.map((capability, _index) => (
                <motion.div
                  key={capability.title}
                  initial={_{ opacity: 0, _y: 20}}
                  whileInView={_{ opacity: 1, _y: 0}}
                  transition={_{ duration: 0.6, _delay: index * 0.1}}
                  viewport={_{ once: true}}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-blue-500/20 rounded-lg mr-3">
                      {_capability.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white">{_capability.title}</h3>
                  </div>
                  <p className="text-gray-300">{_capability.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {_/* Quantum Services */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={_{ opacity: 0, _y: 20}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
              viewport={_{ once: true}}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Quantum Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive suite of quantum-powered solutions
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {_quantumServices.map(_(service, _index) => (
                <motion.div
                  key={service.id}
                  initial={_{ opacity: 0, _y: 20}}
                  whileInView={_{ opacity: 1, _y: 0}}
                  transition={_{ duration: 0.6, _delay: index * 0.1}}
                  viewport={_{ once: true}}
                  className={_`relative bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border transition-all duration-300 hover:scale-105 ${
                    service.popular 
                      ? 'border-blue-500 shadow-lg shadow-blue-500/25' 
                      : 'border-gray-700 hover:border-blue-500'}`}
                >
                  {_service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <div className="inline-flex p-3 bg-blue-500/20 rounded-full mb-4">
                      {_service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{_service.name}</h3>
                    <p className="text-gray-300 mb-4">{_service.description}</p>
                    <div className="text-3xl font-bold text-blue-400 mb-2">
                      {_service.price}
                      <span className="text-lg text-gray-400">/{_service.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    {_service.features.map(_(feature, _featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                        {_feature}
                      </li>
                    ))}
                  </ul>
                  
                  <a 
                    href="/contact" 
                    className="w-full block text-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                  >
                    Get Started
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {_/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={_{ opacity: 0, _y: 20}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
              viewport={_{ once: true}}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Ready for the Quantum Future?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join the quantum revolution and solve problems that were previously impossible with classical computing
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Start Your Quantum Journey
                </a>
                <a 
                  href="/contact" 
                  className="px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-black transition-all duration-300 transform hover:scale-105"
                >
                  Schedule Consultation
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default QuantumServicesPage;
