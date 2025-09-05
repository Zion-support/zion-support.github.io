import React from 'react';
import Head from 'next/head';
import {_Shield, _Lock, _Eye, _Zap, _Cpu, _Database, _ArrowRight, _CheckCircle, _Star, _Users, _Clock, _TrendingUp} from 'lucide-react';
import EnhancedNavigation from '../../components/EnhancedNavigation';
import EnhancedFooter from '../../components/EnhancedFooter';

export default function CybersecurityServicesPage() {_const _services = [
    {
      title: "Advanced Threat Detection", _description: "AI-powered threat detection and response systems", _features: ["Real-time Monitoring", _"Behavioral Analysis", _"Automated Response", _"24/7 Protection"], _price: "From $8, _000", _icon: Eye, _color: "from-red-500 to-orange-500"},
    {_title: "Quantum-Resistant Encryption", _description: "Future-proof security with quantum-resistant cryptography", _features: ["Post-Quantum Algorithms", _"Key Management", _"Compliance Ready", _"Future-Proof"], _price: "From $12, _000", _icon: Lock, _color: "from-purple-500 to-pink-500"},
    {_title: "Security Auditing & Compliance", _description: "Comprehensive security assessments and compliance solutions", _features: ["Penetration Testing", _"Vulnerability Assessment", _"SOC2 Compliance", _"GDPR Ready"], _price: "From $5, _000", _icon: Shield, _color: "from-blue-500 to-cyan-500"},
    {_title: "Zero Trust Architecture", _description: "Modern security framework for distributed environments", _features: ["Identity Verification", _"Access Control", _"Network Segmentation", _"Continuous Monitoring"], _price: "From $15, _000", _icon: Zap, _color: "from-emerald-500 to-teal-500"}
  ];

  const _stats = [
    {_number: "99.99%", _label: "Threat Detection Rate", _icon: Shield},
    {_number: "24/7", _label: "Security Monitoring", _icon: Eye},
    {_number: "0", _label: "Security Breaches", _icon: Lock},
    {_number: "500+", _label: "Protected Systems", _icon: CheckCircle}
  ];

  return (_<div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <Head>
        <title>Cybersecurity Services - Zion Tech Group</title>
        <meta name="description" content="Advanced cybersecurity solutions from Zion Tech Group. AI-powered threat detection, _quantum-resistant encryption, _and comprehensive security services." />
        <meta property="og:title" content="Cybersecurity Services - Zion Tech Group" />
        <meta property="og:description" content="Advanced cybersecurity solutions for comprehensive protection." />
        <link rel="canonical" href="https://ziontechgroup.com/services/cybersecurity" />
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
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-red-400 via-orange-400 to-red-400 bg-clip-text text-transparent mb-6">
              Cybersecurity
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Advanced security solutions that protect your digital assets and ensure business continuity
            </p>
          </motion.div>

          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            animate={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8, _delay: 0.2}}
            className="mb-12"
          >
            <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">
              From AI-powered threat detection to quantum-resistant encryption, _we provide 
              comprehensive cybersecurity solutions that keep your business secure and compliant.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2 mx-auto">
              Secure Your Business
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
                <div className="w-16 h-16 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-orange-400" />
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
            <h2 className="text-4xl font-bold text-white mb-6">Cybersecurity Services</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Comprehensive security solutions designed to protect your business from evolving threats
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {_services.map(_(service, _index) => (_<motion.div
                key={service.title}
                initial={_{ opacity: 0, _y: 30}}
                whileInView={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.6, _delay: index * 0.1}}
                viewport={_{ once: true}}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-red-500/30 transition-all duration-300"
              >
                <div className={_`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{_service.title}</h3>
                <p className="text-white/70 mb-6">{_service.description}</p>
                <ul className="space-y-3 mb-6">
                  {_service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-white/80">
                      <CheckCircle className="w-5 h-5 text-orange-400 mr-3 flex-shrink-0" />
                      {_feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-orange-400">{_service.price}</span>
                  <button className="px-6 py-3 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 rounded-full font-semibold text-white transition-all duration-300 transform hover:scale-105">
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
              Ready to Secure Your Business?
            </h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Let's discuss how our cybersecurity solutions can protect your digital assets and ensure business continuity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                Security Assessment
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