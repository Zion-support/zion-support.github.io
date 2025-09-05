import React from 'react';
import Head from 'next/head';
import {_Cloud, _Cpu, _Database, _Zap, _Shield, _Rocket, _ArrowRight, _CheckCircle, _Star, _Users, _Clock, _TrendingUp} from 'lucide-react';
import EnhancedNavigation from '../../components/EnhancedNavigation';
import EnhancedFooter from '../../components/EnhancedFooter';

export default function CloudServicesPage() {_const _services = [
    {
      title: "Cloud Migration & Strategy", _description: "Seamless cloud migration with strategic planning and execution", _features: ["Migration Planning", _"Cost Optimization", _"Performance Tuning", _"Security Implementation"], _price: "From $10, _000", _icon: Cloud, _color: "from-emerald-500 to-teal-500"},
    {_title: "DevOps & CI/CD", _description: "Automated development and deployment pipelines", _features: ["CI/CD Automation", _"Infrastructure as Code", _"Monitoring & Alerting", _"Performance Optimization"], _price: "From $6, _000", _icon: Zap, _color: "from-blue-500 to-cyan-500"},
    {_title: "Edge Computing Solutions", _description: "Distributed computing for improved performance and reliability", _features: ["Edge Deployment", _"Load Balancing", _"Global Distribution", _"Low Latency"], _price: "From $8, _000", _icon: Cpu, _color: "from-purple-500 to-pink-500"},
    {_title: "Cloud Security & Compliance", _description: "Comprehensive security and compliance for cloud environments", _features: ["Identity Management", _"Data Protection", _"Compliance Auditing", _"Threat Prevention"], _price: "From $12, _000", _icon: Shield, _color: "from-red-500 to-orange-500"}
  ];

  const _stats = [
    {_number: "99.99%", _label: "Uptime Guarantee", _icon: Cloud},
    {_number: "50%", _label: "Cost Reduction", _icon: TrendingUp},
    {_number: "24/7", _label: "Support Available", _icon: Clock},
    {_number: "100+", _label: "Cloud Projects", _icon: CheckCircle}
  ];

  return (_<div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <Head>
        <title>Cloud Infrastructure Services - Zion Tech Group</title>
        <meta name="description" content="Scalable cloud infrastructure solutions from Zion Tech Group. Cloud migration, _DevOps, _edge computing, _and security services." />
        <meta property="og:title" content="Cloud Infrastructure Services - Zion Tech Group" />
        <meta property="og:description" content="Scalable cloud infrastructure solutions for modern businesses." />
        <link rel="canonical" href="https://ziontechgroup.com/services/cloud" />
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
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent mb-6">
              Cloud Infrastructure
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Scalable cloud solutions that drive efficiency and accelerate digital transformation
            </p>
          </motion.div>

          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            animate={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8, _delay: 0.2}}
            className="mb-12"
          >
            <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">
              From cloud migration to DevOps automation, _we provide comprehensive cloud infrastructure 
              solutions that scale with your business and optimize costs.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2 mx-auto">
              Cloud Consultation
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
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-teal-400" />
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
            <h2 className="text-4xl font-bold text-white mb-6">Cloud Infrastructure Services</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Comprehensive cloud solutions designed to modernize your infrastructure and drive innovation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {_services.map(_(service, _index) => (_<motion.div
                key={service.title}
                initial={_{ opacity: 0, _y: 30}}
                whileInView={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.6, _delay: index * 0.1}}
                viewport={_{ once: true}}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-emerald-500/30 transition-all duration-300"
              >
                <div className={_`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{_service.title}</h3>
                <p className="text-white/70 mb-6">{_service.description}</p>
                <ul className="space-y-3 mb-6">
                  {_service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-white/80">
                      <CheckCircle className="w-5 h-5 text-teal-400 mr-3 flex-shrink-0" />
                      {_feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-teal-400">{_service.price}</span>
                  <button className="px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 rounded-full font-semibold text-white transition-all duration-300 transform hover:scale-105">
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
              Ready to Transform Your Infrastructure?
            </h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Let's discuss how our cloud infrastructure solutions can modernize your business and drive digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                Infrastructure Assessment
              </button>
              <button className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10">
                View Case Studies
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <EnhancedFooter />
    </div>
  );
}