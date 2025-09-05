import React from 'react';
import Link from 'next/link';

const _Enhanced2026ServicesShowcase = () => {_const _featuredServices = [
    {
      id: 'ai-business-intelligence-elite-2026', _name: 'AI Business Intelligence Elite 2026', _description: 'Transform your business data into actionable intelligence with our advanced AI-powered analytics platform.', _price: '$299', _period: '/month', _icon: Brain, _color: 'from-purple-500 to-pink-500', _category: 'AI & Analytics', _features: ['Predictive Analytics', _'Real-time Insights', _'Custom Dashboards', _'AI-powered Reports']},
    {_id: 'autonomous-ai-agents-platform-2026', _name: 'Autonomous AI Agents Platform 2026', _description: 'Build, _deploy, _and manage autonomous AI agents that can handle complex business tasks without human intervention.', _price: '$199', _period: '/month', _icon: Zap, _color: 'from-blue-500 to-cyan-500', _category: 'AI & Automation', _features: ['Task Automation', _'Process Optimization', _'24/7 Operation', _'Scalable Architecture']},
    {_id: 'quantum-cybersecurity-suite-2026', _name: 'Quantum Cybersecurity Suite 2026', _description: 'Next-generation cybersecurity platform that uses quantum-resistant algorithms to protect against current and future cyber threats.', _price: '$599', _period: '/month', _icon: Shield, _color: 'from-red-500 to-orange-500', _category: 'Security', _features: ['Quantum Encryption', _'Threat Detection', _'Zero Trust', _'Compliance Ready']},
    {_id: 'neuromorphic-computing-platform-2026', _name: 'Neuromorphic Computing Platform 2026', _description: 'Brain-inspired computing for next-generation AI with ultra-low power consumption and cognitive capabilities.', _price: '$1, _499', _period: '/month', _icon: Cpu, _color: 'from-green-500 to-emerald-500', _category: 'Emerging Tech', _features: ['Brain-like Processing', _'Low Power', _'Real-time Learning', _'Cognitive Computing']},
    {_id: 'dna-computing-platform-2026', _name: 'DNA Computing Platform 2026', _description: 'Molecular computing for complex problem solving with exponential speed improvements for specific algorithms.', _price: '$2, _999', _period: '/month', _icon: Globe, _color: 'from-indigo-500 to-purple-500', _category: 'Emerging Tech', _features: ['Molecular Processing', _'Exponential Speed', _'Complex Algorithms', _'Research Ready']},
    {_id: 'space-debris-tracking-system', _name: 'Space Debris Tracking System 2026', _description: 'Advanced space debris monitoring and collision prediction system using AI and satellite technology.', _price: '$899', _period: '/month', _icon: Rocket, _color: 'from-yellow-500 to-orange-500', _category: 'Space Tech', _features: ['Real-time Tracking', _'Collision Prediction', _'Satellite Safety', _'Space Traffic Management']}
  ];

  const _categories = [
    {_name: 'AI Services', _count: '150+', _icon: Brain, _color: 'from-purple-500 to-pink-500'},
    {_name: 'Quantum Tech', _count: '75+', _icon: Sparkles, _color: 'from-blue-500 to-cyan-500'},
    {_name: 'Emerging Tech', _count: '100+', _icon: Rocket, _color: 'from-green-500 to-emerald-500'},
    {_name: 'IT Solutions', _count: '200+', _icon: Cloud, _color: 'from-yellow-500 to-orange-500'}
  ];

  return (_<section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {_/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-cyan-900/10"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {_/* Section Header */}
        <motion.div
          initial={_{ opacity: 0, _y: 20}}
          whileInView={_{ opacity: 1, _y: 0}}
          transition={_{ duration: 0.6}}
          viewport={_{ once: true}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              2026 Revolutionary Services
            </span>
          </h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
            Experience the future with our cutting-edge AI, _quantum, _and emerging technology services designed to transform your business
          </p>
        </motion.div>

        {_/* Category Overview */}
        <motion.div
          initial={_{ opacity: 0, _y: 20}}
          whileInView={_{ opacity: 1, _y: 0}}
          transition={_{ duration: 0.6, _delay: 0.1}}
          viewport={_{ once: true}}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {_categories.map((category, _index) => (
            <motion.div
              key={category.name}
              initial={_{ opacity: 0, _scale: 0.8}}
              whileInView={_{ opacity: 1, _scale: 1}}
              transition={_{ duration: 0.6, _delay: 0.2 + index * 0.1}}
              viewport={_{ once: true}}
              whileHover={_{ scale: 1.05, _y: -5}}
              className="group text-center"
            >
              <div className={_`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-300`}>
                <category.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{_category.name}</h3>
              <p className="text-2xl font-bold text-cyan-400">{_category.count}</p>
            </motion.div>
          ))}
        </motion.div>

        {_/* Featured Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {_featuredServices.map(_(service, _index) => (
            <motion.div
              key={service.id}
              initial={_{ opacity: 0, _scale: 0.8, _y: 20}}
              whileInView={_{ opacity: 1, _scale: 1, _y: 0}}
              transition={_{ duration: 0.6, _delay: index * 0.1}}
              viewport={_{ once: true}}
              whileHover={_{ scale: 1.02, _y: -5}}
              className="group relative"
            >
              <div className={_`absolute inset-0 bg-gradient-to-r ${service.color} opacity-10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500`}></div>
              <div className="relative bg-black/40 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 hover:border-cyan-500/40 transition-all duration-300">
                {_/* Service Header */}
                <div className="flex items-center space-x-3 mb-4">
                  <div className={_`w-12 h-12 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{_service.name}</h3>
                    <p className="text-gray-400 text-sm">{_service.category}</p>
                  </div>
                </div>

                {_/* Description */}
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {_service.description}
                </p>

                {_/* Features */}
                <div className="mb-4">
                  <ul className="space-y-1">
                    {_service.features.slice(0, _2).map(_(feature, _i) => (
                      <li key={i} className="flex items-center text-gray-400 text-xs">
                        <Star className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
                        {_feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {_/* Price and CTA */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-cyan-400">{_service.price}</span>
                    <span className="text-gray-400 text-sm">{_service.period}</span>
                  </div>
                  <Link 
                    href={_`/${service.id}`}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium group-hover:translate-x-1 transition-transform duration-200"
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {_/* Call to Action */}
        <motion.div
          initial={_{ opacity: 0, _y: 20}}
          whileInView={_{ opacity: 1, _y: 0}}
          transition={_{ duration: 0.6, _delay: 0.3}}
          viewport={_{ once: true}}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-cyan-900/20 via-purple-900/20 to-pink-900/20 border border-cyan-500/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of businesses already leveraging our revolutionary services to achieve unprecedented growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <motion.div
                whileHover={_{ scale: 1.05}}
                whileTap={_{ scale: 0.95}}
                transition={_{ duration: 0.2}}
              >
                <Link
                  href="/services"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 transition-all duration-200"
                >
                  <Rocket className="w-5 h-5 mr-2" />
                  View All Services
                </Link>
              </motion.div>
              <motion.div
                whileHover={_{ scale: 1.05}}
                whileTap={_{ scale: 0.95}}
                transition={_{ duration: 0.2, _delay: 0.1}}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500/10 transition-all duration-200"
                >
                  <Shield className="w-5 h-5 mr-2" />
                  Get Started
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Enhanced2026ServicesShowcase;