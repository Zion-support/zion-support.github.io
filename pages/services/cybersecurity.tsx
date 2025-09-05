<<<<<<< HEAD
import React from 'react',
import Head from 'next/head',
import { motion } from 'framer-motion',
import { 
  Shield, Lock, Eye, Zap, Cpu, Database,
  ArrowRight, CheckCircle, Star, Users, Clock, TrendingUp
} from 'lucide-react',
import EnhancedNavigation from '../../components/EnhancedNavigation',
import EnhancedFooter from '../../components/EnhancedFooter',
export default function CybersecurityServicesPage() {
  const services = [
    {
      title: &quot;Advanced Threat Detection&quot;,
      description: &quot;AI-powered threat detection and response systems&quot;,
      features: [&quot;Real-time Monitoring&quot;, &quot;Behavioral Analysis&quot;, &quot;Automated Response&quot;, &quot;24/7 Protection&quot;],
      price: &quot;From $8,000&quot;,
      icon: Eye,
      color: &quot;from-red-500 to-orange-500&quot;
    },
    {
      title: &quot;Quantum-Resistant Encryption&quot;,
      description: &quot;Future-proof security with quantum-resistant cryptography&quot;,
      features: [&quot;Post-Quantum Algorithms&quot;, &quot;Key Management&quot;, &quot;Compliance Ready&quot;, &quot;Future-Proof&quot;],
      price: &quot;From $12,000&quot;,
      icon: Lock,
      color: &quot;from-purple-500 to-pink-500&quot;
    },
    {
      title: &quot;Security Auditing & Compliance&quot;,
      description: &quot;Comprehensive security assessments and compliance solutions&quot;,
      features: [&quot;Penetration Testing&quot;, &quot;Vulnerability Assessment&quot;, &quot;SOC2 Compliance&quot;, &quot;GDPR Ready&quot;],
      price: &quot;From $5,000&quot;,
      icon: Shield,
      color: &quot;from-blue-500 to-cyan-500&quot;
    },
    {
      title: &quot;Zero Trust Architecture&quot;,
      description: &quot;Modern security framework for distributed environments&quot;,
      features: [&quot;Identity Verification&quot;, &quot;Access Control&quot;, &quot;Network Segmentation&quot;, &quot;Continuous Monitoring&quot;],
      price: &quot;From $15,000&quot;,
      icon: Zap,
      color: &quot;from-emerald-500 to-teal-500&quot;
    }
  ],

  const stats = [
<<<<<<< HEAD
    { number: "99.99%", label: "Threat Detection Rate", icon: Shield },
    { number: "24/7", label: "Security Monitoring", icon: Eye },
    { number: "0", label: "Security Breaches", icon: Lock },
    { number: "500+", label: "Protected Systems", icon: CheckCircle }
  ],
=======
    { number: &quot;99.99%&quot;, label: &quot;Threat Detection Rate&quot;, icon: Shield },
    { number: &quot;24/7&quot;, label: &quot;Security Monitoring&quot;, icon: Eye },
    { number: &quot;0&quot;, label: &quot;Security Breaches&quot;, icon: Lock },
    { number: &quot;500+&quot;, label: &quot;Protected Systems&quot;, icon: CheckCircle }
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  ];
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

<<<<<<< HEAD
  return (
    <div className=&quot;min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white&quot;>
      <Head>
        <title>Cybersecurity Services - Zion Tech Group</title>
        <meta name=&quot;description&quot; content=&quot;Advanced cybersecurity solutions from Zion Tech Group. AI-powered threat detection, quantum-resistant encryption, and comprehensive security services.&quot; />
        <meta property=&quot;og:title&quot; content=&quot;Cybersecurity Services - Zion Tech Group&quot; />
        <meta property=&quot;og:description&quot; content=&quot;Advanced cybersecurity solutions for comprehensive protection.&quot; />
        <link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com/services/cybersecurity&quot; />
=======
  return (_<div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <Head>
        <title>Cybersecurity Services - Zion Tech Group</title>
        <meta name="description" content="Advanced cybersecurity solutions from Zion Tech Group. AI-powered threat detection, _quantum-resistant encryption, _and comprehensive security services." />
        <meta property="og:title" content="Cybersecurity Services - Zion Tech Group" />
        <meta property="og:description" content="Advanced cybersecurity solutions for comprehensive protection." />
        <link rel="canonical" href="https://ziontechgroup.com/services/cybersecurity" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      </Head>

      <EnhancedNavigation />

<<<<<<< HEAD
      {/* Hero Section */}
      <section className=&quot;relative pt-32 pb-20 px-6&quot;>
        <div className=&quot;max-w-7xl mx-auto text-center&quot;>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className=&quot;mb-8&quot;
=======
      {_/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            animate={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            className="mb-8"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          >
            <h1 className=&quot;text-5xl md:text-7xl font-bold bg-gradient-to-r from-red-400 via-orange-400 to-red-400 bg-clip-text text-transparent mb-6&quot;>
              Cybersecurity
            </h1>
            <p className=&quot;text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed&quot;>
              Advanced security solutions that protect your digital assets and ensure business continuity
            </p>
          </motion.div>

          <motion.div
<<<<<<< HEAD
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className=&quot;mb-12&quot;
          >
            <p className=&quot;text-lg text-white/70 max-w-2xl mx-auto mb-8&quot;>
              From AI-powered threat detection to quantum-resistant encryption, we provide 
=======
            initial={_{ opacity: 0, _y: 30}}
            animate={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8, _delay: 0.2}}
            className="mb-12"
          >
            <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">
              From AI-powered threat detection to quantum-resistant encryption, _we provide 
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              comprehensive cybersecurity solutions that keep your business secure and compliant.
            </p>
            <button className=&quot;px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2 mx-auto&quot;>
              Secure Your Business
              <ArrowRight className=&quot;w-5 h-5&quot; />
            </button>
          </motion.div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Stats Section */}
      <section className=&quot;py-16 px-6&quot;>
        <div className=&quot;max-w-7xl mx-auto&quot;>
          <div className=&quot;grid grid-cols-2 md:grid-cols-4 gap-8&quot;>
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className=&quot;text-center&quot;
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              >
                <div className=&quot;w-16 h-16 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4&quot;>
                  <stat.icon className=&quot;w-8 h-8 text-orange-400&quot; />
                </div>
<<<<<<< HEAD
                <div className=&quot;text-3xl font-bold text-white mb-2&quot;>{stat.number}</div>
                <div className=&quot;text-white/70&quot;>{stat.label}</div>
=======
                <div className="text-3xl font-bold text-white mb-2">{_stat.number}</div>
                <div className="text-white/70">{_stat.label}</div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </motion.div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Services Grid */}
      <section className=&quot;py-20 px-6&quot;>
        <div className=&quot;max-w-7xl mx-auto&quot;>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className=&quot;text-center mb-16&quot;
=======
      {_/* Services Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            viewport={_{ once: true}}
            className="text-center mb-16"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          >
            <h2 className=&quot;text-4xl font-bold text-white mb-6&quot;>Cybersecurity Services</h2>
            <p className=&quot;text-xl text-white/70 max-w-3xl mx-auto&quot;>
              Comprehensive security solutions designed to protect your business from evolving threats
            </p>
          </motion.div>

<<<<<<< HEAD
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-8&quot;>
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className=&quot;bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-red-500/30 transition-all duration-300&quot;
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <service.icon className=&quot;w-8 h-8 text-white&quot; />
                </div>
                <h3 className=&quot;text-2xl font-bold text-white mb-4&quot;>{service.title}</h3>
                <p className=&quot;text-white/70 mb-6&quot;>{service.description}</p>
                <ul className=&quot;space-y-3 mb-6&quot;>
                  {service.features.map((feature) => (
                    <li key={feature} className=&quot;flex items-center text-white/80&quot;>
                      <CheckCircle className=&quot;w-5 h-5 text-orange-400 mr-3 flex-shrink-0&quot; />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className=&quot;flex items-center justify-between&quot;>
                  <span className=&quot;text-2xl font-bold text-orange-400&quot;>{service.price}</span>
                  <button className=&quot;px-6 py-3 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 rounded-full font-semibold text-white transition-all duration-300 transform hover:scale-105&quot;>
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    Get Started
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* CTA Section */}
      <section className=&quot;py-20 px-6&quot;>
        <div className=&quot;max-w-4xl mx-auto text-center&quot;>
=======
      {_/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            viewport={_{ once: true}}
          >
            <h2 className=&quot;text-4xl font-bold text-white mb-6&quot;>
              Ready to Secure Your Business?
            </h2>
            <p className=&quot;text-xl text-white/70 mb-8 max-w-2xl mx-auto&quot;>
              Let's discuss how our cybersecurity solutions can protect your digital assets and ensure business continuity.
            </p>
<<<<<<< HEAD
            <div className="flex flex-col sm: flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">
=======
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
              <button className=&quot;px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105&quot;>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
                Security Assessment
              </button>
              <button className=&quot;px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10&quot;>
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <EnhancedFooter />
    </div>
  )
}