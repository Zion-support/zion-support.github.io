import React from 'react';
import Head from 'next/head';
import {_Brain, _Cpu, _Database, _Zap, _Shield, _Rocket, _ArrowRight, _CheckCircle, _Star, _Users, _Clock, _TrendingUp} from 'lucide-react';
import EnhancedNavigation from '../../components/EnhancedNavigation';
import EnhancedFooter from '../../components/EnhancedFooter';

export default function AIMLServicesPage() {_const _services = [
    {
      title: "Custom AI Solutions", _description: "Tailored AI applications built for your specific business needs", _features: ["Machine Learning Models", _"Neural Networks", _"Predictive Analytics", _"Natural Language Processing"], _price: "From $5, _000", _icon: Brain, _color: "from-purple-500 to-pink-500"},
    {_title: "AI-Powered Automation", _description: "Intelligent automation systems that learn and adapt", _features: ["Process Automation", _"Workflow Optimization", _"Smart Decision Making", _"Continuous Learning"], _price: "From $3, _500", _icon: Zap, _color: "from-blue-500 to-cyan-500"},
    {_title: "Data Intelligence Platform", _description: "Advanced analytics and insights powered by AI", _features: ["Big Data Processing", _"Real-time Analytics", _"Business Intelligence", _"Predictive Insights"], _price: "From $7, _500", _icon: Database, _color: "from-emerald-500 to-teal-500"},
    {_title: "AI Consulting & Strategy", _description: "Strategic guidance for AI implementation and transformation", _features: ["AI Roadmap Planning", _"Technology Assessment", _"Implementation Strategy", _"ROI Optimization"], _price: "From $2, _500", _icon: Rocket, _color: "from-orange-500 to-red-500"}
  ];

  const _stats = [
    {_number: "500+", _label: "AI Models Deployed", _icon: Brain},
    {_number: "99.9%", _label: "Accuracy Rate", _icon: CheckCircle},
    {_number: "24/7", _label: "AI Monitoring", _icon: Clock},
    {_number: "2500%", _label: "Average ROI", _icon: TrendingUp}
  ];

  return (_<div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <Head>
        <title>AI & Machine Learning Services - Zion Tech Group</title>
        <meta name="description" content="Cutting-edge AI and machine learning solutions from Zion Tech Group. Custom AI applications, _automation, _and intelligent systems that drive business growth." />
        <meta property="og:title" content="AI & Machine Learning Services - Zion Tech Group" />
        <meta property="og:description" content="Cutting-edge AI and machine learning solutions that drive business growth and innovation." />
        <link rel="canonical" href="https://ziontechgroup.com/services/ai-ml" />
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
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent mb-6">
              AI & Machine Learning
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Revolutionary AI solutions that adapt, _learn, _and evolve with your business
            </p>
          </motion.div>

          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            animate={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8, _delay: 0.2}}
            className="mb-12"
          >
            <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">
              From custom neural networks to intelligent automation systems, _we deliver AI solutions 
              that provide measurable business outcomes and competitive advantages.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2 mx-auto">
              Get AI Consultation
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
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-purple-400" />
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
            <h2 className="text-4xl font-bold text-white mb-6">Our AI Services</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Comprehensive AI solutions designed to transform your business operations and drive innovation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {_services.map(_(service, _index) => (_<motion.div
                key={service.title}
                initial={_{ opacity: 0, _y: 30}}
                whileInView={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.6, _delay: index * 0.1}}
                viewport={_{ once: true}}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-purple-500/30 transition-all duration-300"
              >
                <div className={_`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{_service.title}</h3>
                <p className="text-white/70 mb-6">{_service.description}</p>
                <ul className="space-y-3 mb-6">
                  {_service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-white/80">
                      <CheckCircle className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                      {_feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-purple-400">{_service.price}</span>
                  <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-full font-semibold text-white transition-all duration-300 transform hover:scale-105">
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
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Let's discuss how our AI solutions can drive innovation, efficiency, and growth for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                Schedule Consultation
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