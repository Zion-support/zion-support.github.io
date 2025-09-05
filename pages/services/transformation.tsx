<<<<<<< HEAD
import React from 'react',
import Head from 'next/head',
import { motion } from 'framer-motion',
import { 
  Rocket, Zap, Shield, Cpu, Database, Users,
  ArrowRight, CheckCircle, Star, Clock, TrendingUp, Globe
} from 'lucide-react',
import EnhancedNavigation from '../../components/EnhancedNavigation',
import EnhancedFooter from '../../components/EnhancedFooter',
export default function DigitalTransformationPage() {
  const services = [
    {
      title: &quot;Digital Strategy & Roadmap&quot;,
      description: &quot;Comprehensive digital transformation strategy and implementation planning&quot;,
      features: [&quot;Technology Assessment&quot;, &quot;Change Management&quot;, &quot;ROI Planning&quot;, &quot;Implementation Roadmap&quot;],
      price: &quot;From $15,000&quot;,
      icon: Rocket,
      color: &quot;from-yellow-500 to-orange-500&quot;
    },
    {
      title: &quot;Legacy System Modernization&quot;,
      description: &quot;Transform outdated systems into modern, scalable solutions&quot;,
      features: [&quot;System Analysis&quot;, &quot;Migration Planning&quot;, &quot;Data Migration&quot;, &quot;Performance Optimization&quot;],
      price: &quot;From $25,000&quot;,
      icon: Cpu,
      color: &quot;from-blue-500 to-cyan-500&quot;
    },
    {
      title: &quot;Process Automation&quot;,
      description: &quot;AI-powered automation for improved efficiency and productivity&quot;,
      features: [&quot;Workflow Analysis&quot;, &quot;RPA Implementation&quot;, &quot;Integration&quot;, &quot;Monitoring&quot;],
      price: &quot;From $12,000&quot;,
      icon: Zap,
      color: &quot;from-purple-500 to-pink-500&quot;
    },
    {
      title: &quot;Change Management&quot;,
      description: &quot;Comprehensive change management and training programs&quot;,
      features: [&quot;Stakeholder Engagement&quot;, &quot;Training Programs&quot;, &quot;Communication Strategy&quot;, &quot;Success Metrics&quot;],
      price: &quot;From $8,000&quot;,
      icon: Users,
      color: &quot;from-emerald-500 to-teal-500&quot;
    }
  ],

  const stats = [
<<<<<<< HEAD
    { number: "500+", label: "Transformations Completed", icon: Rocket },
    { number: "40%", label: "Average Cost Reduction", icon: TrendingUp },
    { number: "300%", label: "ROI Improvement", icon: Star },
    { number: "24/7", label: "Support Available", icon: Clock }
  ],
=======
    { number: &quot;500+&quot;, label: &quot;Transformations Completed&quot;, icon: Rocket },
    { number: &quot;40%&quot;, label: &quot;Average Cost Reduction&quot;, icon: TrendingUp },
    { number: &quot;300%&quot;, label: &quot;ROI Improvement&quot;, icon: Star },
    { number: &quot;24/7&quot;, label: &quot;Support Available&quot;, icon: Clock }
=======
import React from 'react';
import Head from 'next/head';
import {_Rocket, _Zap, _Shield, _Cpu, _Database, _Users, _ArrowRight, _CheckCircle, _Star, _Clock, _TrendingUp, _Globe} from 'lucide-react';
import EnhancedNavigation from '../../components/EnhancedNavigation';
import EnhancedFooter from '../../components/EnhancedFooter';

export default function DigitalTransformationPage() {_const _services = [
    {
      title: "Digital Strategy & Roadmap", _description: "Comprehensive digital transformation strategy and implementation planning", _features: ["Technology Assessment", _"Change Management", _"ROI Planning", _"Implementation Roadmap"], _price: "From $15, _000", _icon: Rocket, _color: "from-yellow-500 to-orange-500"},
    {_title: "Legacy System Modernization", _description: "Transform outdated systems into modern, _scalable solutions", _features: ["System Analysis", _"Migration Planning", _"Data Migration", _"Performance Optimization"], _price: "From $25, _000", _icon: Cpu, _color: "from-blue-500 to-cyan-500"},
    {_title: "Process Automation", _description: "AI-powered automation for improved efficiency and productivity", _features: ["Workflow Analysis", _"RPA Implementation", _"Integration", _"Monitoring"], _price: "From $12, _000", _icon: Zap, _color: "from-purple-500 to-pink-500"},
    {_title: "Change Management", _description: "Comprehensive change management and training programs", _features: ["Stakeholder Engagement", _"Training Programs", _"Communication Strategy", _"Success Metrics"], _price: "From $8, _000", _icon: Users, _color: "from-emerald-500 to-teal-500"}
  ];

  const _stats = [
    {_number: "500+", _label: "Transformations Completed", _icon: Rocket},
    {_number: "40%", _label: "Average Cost Reduction", _icon: TrendingUp},
    {_number: "300%", _label: "ROI Improvement", _icon: Star},
    {_number: "24/7", _label: "Support Available", _icon: Clock}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  ];
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

<<<<<<< HEAD
  return (
    <div className=&quot;min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white&quot;>
      <Head>
        <title>Digital Transformation Services - Zion Tech Group</title>
        <meta name=&quot;description&quot; content=&quot;End-to-end digital transformation solutions from Zion Tech Group. Strategy, modernization, automation, and change management services.&quot; />
        <meta property=&quot;og:title&quot; content=&quot;Digital Transformation Services - Zion Tech Group&quot; />
        <meta property=&quot;og:description&quot; content=&quot;End-to-end digital transformation solutions for modern businesses.&quot; />
        <link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com/services/transformation&quot; />
=======
  return (_<div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <Head>
        <title>Digital Transformation Services - Zion Tech Group</title>
        <meta name="description" content="End-to-end digital transformation solutions from Zion Tech Group. Strategy, _modernization, _automation, _and change management services." />
        <meta property="og:title" content="Digital Transformation Services - Zion Tech Group" />
        <meta property="og:description" content="End-to-end digital transformation solutions for modern businesses." />
        <link rel="canonical" href="https://ziontechgroup.com/services/transformation" />
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
            <h1 className=&quot;text-5xl md:text-7xl font-bold bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent mb-6&quot;>
              Digital Transformation
            </h1>
            <p className=&quot;text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed&quot;>
              End-to-end digital transformation solutions that modernize your business
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
              From strategy development to implementation, we guide businesses through complete 
              digital transformation journeys that drive innovation, efficiency, and growth.
=======
            initial={_{ opacity: 0, _y: 30}}
            animate={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8, _delay: 0.2}}
            className="mb-12"
          >
            <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">
              From strategy development to implementation, _we guide businesses through complete 
              digital transformation journeys that drive innovation, _efficiency, _and growth.
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </p>
            <button className=&quot;px-8 py-4 bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2 mx-auto&quot;>
              Start Transformation
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
                <div className=&quot;w-16 h-16 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4&quot;>
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
            <h2 className=&quot;text-4xl font-bold text-white mb-6&quot;>Digital Transformation Services</h2>
            <p className=&quot;text-xl text-white/70 max-w-3xl mx-auto&quot;>
              Comprehensive transformation solutions designed to modernize your business operations
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
                className=&quot;bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-orange-500/30 transition-all duration-300&quot;
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
                  <button className=&quot;px-6 py-3 bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 rounded-full font-semibold text-white transition-all duration-300 transform hover:scale-105&quot;>
=======
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {_services.map(_(service, _index) => (_<motion.div
                key={service.title}
                initial={_{ opacity: 0, _y: 30}}
                whileInView={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.6, _delay: index * 0.1}}
                viewport={_{ once: true}}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-orange-500/30 transition-all duration-300"
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
                  <button className="px-6 py-3 bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 rounded-full font-semibold text-white transition-all duration-300 transform hover:scale-105">
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
              Ready to Transform Your Business?
            </h2>
            <p className=&quot;text-xl text-white/70 mb-8 max-w-2xl mx-auto&quot;>
              Let's discuss how our digital transformation solutions can modernize your operations and drive sustainable growth.
            </p>
<<<<<<< HEAD
            <div className="flex flex-col sm: flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">
=======
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
              <button className=&quot;px-8 py-4 bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105&quot;>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
                Transformation Assessment
              </button>
              <button className=&quot;px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10&quot;>
                View Success Stories
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <EnhancedFooter />
    </div>
  )
}