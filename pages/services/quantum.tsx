import React from 'react';
import Head from 'next/head';
import {_Atom, _Cpu, _Shield, _Rocket, _Zap, _Database, _ArrowRight, _CheckCircle, _Star, _Users, _Clock, _TrendingUp} from 'lucide-react';
import EnhancedNavigation from '../../components/EnhancedNavigation';
import EnhancedFooter from '../../components/EnhancedFooter';

export default function QuantumServicesPage() {_const _services = [
    {
      title: "Quantum Algorithm Development", _description: "Custom quantum algorithms designed for specific business problems", _features: ["Optimization Algorithms", _"Machine Learning", _"Cryptography", _"Simulation"], _price: "From $15, _000", _icon: Atom, _color: "from-blue-500 to-cyan-500"},
    {_title: "Quantum Security Solutions", _description: "Quantum-resistant cryptography and security protocols", _features: ["Post-Quantum Cryptography", _"Quantum Key Distribution", _"Security Auditing", _"Compliance"], _price: "From $12, _000", _icon: Shield, _color: "from-red-500 to-orange-500"},
    {_title: "Quantum Computing Infrastructure", _description: "Quantum computing hardware and cloud access solutions", _features: ["Cloud Quantum Access", _"Hardware Integration", _"Performance Optimization", _"Scalability"], _price: "From $8, _000", _icon: Cpu, _color: "from-indigo-500 to-purple-500"},
    {_title: "Quantum AI Integration", _description: "Hybrid quantum-classical AI systems for enhanced performance", _features: ["Quantum Neural Networks", _"Hybrid Algorithms", _"Performance Enhancement", _"Future-Proofing"], _price: "From $20, _000", _icon: Zap, _color: "from-emerald-500 to-teal-500"}
  ];

  const _stats = [
    {_number: "100+", _label: "Quantum Algorithms", _icon: Atom},
    {_number: "99.99%", _label: "Security Guarantee", _icon: Shield},
    {_number: "10x", _label: "Performance Boost", _icon: TrendingUp},
    {_number: "24/7", _label: "Quantum Support", _icon: Clock}
  ];

  return (_<div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <Head>
        <title>Quantum Computing Services - Zion Tech Group</title>
        <meta name="description" content="Revolutionary quantum computing solutions from Zion Tech Group. Quantum algorithms, _security, _and AI integration for the future of computing." />
        <meta property="og:title" content="Quantum Computing Services - Zion Tech Group" />
        <meta property="og:description" content="Revolutionary quantum computing solutions for the future of computing." />
        <link rel="canonical" href="https://ziontechgroup.com/services/quantum" />
      </Head>

      <EnhancedNavigation />

      {_/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            animate={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">
              Quantum Computing
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Revolutionary quantum solutions that unlock unprecedented computational power
            </p>
          </motion.div>

          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            animate={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8, _delay: 0.2}}
            className="mb-12"
          >
            <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">
              Experience the future of computing with our quantum solutions. From algorithm development 
              to security protocols, _we're pioneering the quantum revolution.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2 mx-auto">
              Explore Quantum Solutions
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>

      {_/* Stats Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {_stats.map((stat, _index) => (
              <motion.div
                key={stat.label}
                initial={_{ opacity: 0, _y: 20}}
                whileInView={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.6, _delay: index * 0.1}}
                viewport={_{ once: true}}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{_stat.number}</div>
                <div className="text-white/70">{_stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {_/* Services Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            viewport={_{ once: true}}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Quantum Computing Services</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Cutting-edge quantum solutions designed to solve complex problems and secure the future
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {_services.map(_(service, _index) => (_<motion.div
                key={service.title}
                initial={_{ opacity: 0, _y: 30}}
                whileInView={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.6, _delay: index * 0.1}}
                viewport={_{ once: true}}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-300"
              >
                <div className={_`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{_service.title}</h3>
                <p className="text-white/70 mb-6">{_service.description}</p>
                <ul className="space-y-3 mb-6">
                  {_service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-white/80">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {_feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-cyan-400">{_service.price}</span>
                  <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold text-white transition-all duration-300 transform hover:scale-105">
                    Get Started
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {_/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            viewport={_{ once: true}}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Experience Quantum Computing?
            </h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Let's explore how quantum computing can revolutionize your business operations and solve previously impossible problems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                Schedule Quantum Demo
              </button>
              <button className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <EnhancedFooter />
    </div>
  );
}