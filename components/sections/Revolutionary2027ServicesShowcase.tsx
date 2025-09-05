import React from 'react';
import Link from 'next/link';

const _Revolutionary2027ServicesShowcase = () => {_const _featuredServices = [
    {
      id: 'quantum-ai-consciousness-platform', _name: 'Quantum AI Consciousness Platform', _description: 'Simulate human consciousness with quantum computing - the first platform to combine quantum computing with advanced AI for breakthrough neuroscience research.', _price: '$9, _999', _period: '/month', _icon: Brain, _color: 'from-purple-600 to-indigo-700', _category: 'Quantum AI & Neuroscience', _features: ['Quantum consciousness simulation', _'Neural pattern recognition', _'Emotional intelligence modeling', _'Real-time brain-computer interface'], _marketSize: '$15B research market', _growthRate: '300% annual growth'},
    {_id: 'autonomous-space-mining-ai', _name: 'Autonomous Space Mining AI', _description: 'AI-powered autonomous mining operations in space - extract rare minerals from asteroids and celestial bodies without human intervention.', _price: '$15, _999', _period: '/month', _icon: Rocket, _color: 'from-blue-600 to-cyan-700', _category: 'Space Technology & AI', _features: ['Autonomous mining operations', _'Resource detection algorithms', _'Risk assessment AI', _'Mission planning automation'], _marketSize: '$3.8T space economy', _growthRate: '400% annual growth'},
    {_id: 'dna-computing-platform', _name: 'DNA Computing Platform', _description: 'Molecular computing for complex problem solving - use DNA-based computation to solve problems exponentially faster than traditional computers.', _price: '$7, _999', _period: '/month', _icon: TestTube, _color: 'from-green-600 to-emerald-700', _category: 'Biotechnology & Computing', _features: ['DNA-based computation', _'Molecular algorithm optimization', _'Real-time molecular analysis', _'Algorithm library (100+ algorithms)'], _marketSize: '$2.1T biotechnology market', _growthRate: '250% annual growth'},
    {_id: 'holographic-metaverse-platform', _name: 'Holographic Metaverse Platform', _description: 'Create immersive 3D holographic experiences - build next-generation virtual worlds with realistic holographic projections.', _price: '$3, _999', _period: '/month', _icon: Globe, _color: 'from-pink-600 to-rose-700', _category: 'Metaverse & Holographics', _features: ['3D holographic rendering', _'Real-time 3D modeling', _'Holographic projection systems', _'AI-powered content generation'], _marketSize: '$800B metaverse market', _growthRate: '350% annual growth'},
    {_id: 'autonomous-healthcare-ai', _name: 'Autonomous Healthcare AI', _description: 'Self-learning AI for autonomous healthcare decisions - make independent diagnoses and treatment recommendations without human intervention.', _price: '$5, _999', _period: '/month', _icon: Microscope, _color: 'from-red-600 to-orange-700', _category: 'Healthcare & AI', _features: ['Autonomous diagnosis', _'Treatment recommendation AI', _'Continuous learning algorithms', _'Predictive health analytics'], _marketSize: '$4.1T healthcare market', _growthRate: '280% annual growth'},
    {_id: 'quantum-internet-security-gateway', _name: 'Quantum Internet Security Gateway', _description: 'Unbreakable encryption for the quantum internet - protect data transmission with quantum key distribution and quantum-resistant algorithms.', _price: '$8, _999', _period: '/month', _icon: Lock, _color: 'from-indigo-600 to-purple-700', _category: 'Quantum Security', _features: ['Quantum key distribution', _'Unbreakable encryption', _'Real-time threat detection', _'Zero-trust architecture'], _marketSize: '$500B cybersecurity market', _growthRate: '500% annual growth'}
  ];

  const _categories = [
    {_name: 'Quantum AI Services', _count: '25+', _icon: Atom, _color: 'from-purple-500 to-indigo-600'},
    {_name: 'Space Technology', _count: '15+', _icon: Satellite, _color: 'from-blue-500 to-cyan-600'},
    {_name: 'Biotechnology', _count: '20+', _icon: TestTube, _color: 'from-green-500 to-emerald-600'},
    {_name: 'Emerging Tech', _count: '30+', _icon: Sparkles, _color: 'from-pink-500 to-rose-600'}
  ];

  const _containerVariants = {_hidden: { opacity: 0},
    visible: {_opacity: 1, _transition: {
        staggerChildren: 0.1}
    }
  };

  const _itemVariants = {_hidden: { opacity: 0, _y: 20},
    visible: {_opacity: 1, _y: 0, _transition: {
        duration: 0.6, _ease: "easeOut" as const}
    }
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {_/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/20 to-cyan-900/20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(0,255,255,0.1),transparent_50%)]"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {_/* Section Header */}
        <motion.div
          initial={_{ opacity: 0, _y: 20}}
          whileInView={_{ opacity: 1, _y: 0}}
          transition={_{ duration: 0.8}}
          viewport={_{ once: true}}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              2027 Revolutionary Services
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Experience the future of technology with our cutting-edge AI, quantum computing, and emerging technology services. 
            Transform your business with solutions that were once science fiction.
          </p>
        </motion.div>

        {_/* Category Overview */}
        <motion.div
          variants={_containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={_{ once: true}}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {_categories.map(_(category, _index) => (
            <motion.div
              key={category.name}
              variants={_itemVariants}
              className="relative group"
            >
              <div className={_`bg-gradient-to-br ${category.color} p-6 rounded-2xl text-center transform transition-all duration-300 group-hover:shadow-xl hover:shadow-cyan-500/30 group-hover:shadow-2xl`}>
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-white/20 rounded-full backdrop-blur-sm">
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{_category.name}</h3>
                <p className="text-2xl font-bold text-white">{_category.count}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {_/* Featured Services Grid */}
        <motion.div
          variants={_containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={_{ once: true}}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {_featuredServices.map(_(service, _index) => (
            <motion.div
              key={service.id}
              variants={_itemVariants}
              className="group relative"
            >
              <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 h-full transform transition-all duration-500 group-hover:shadow-xl hover:shadow-cyan-500/30 group-hover:shadow-2xl group-hover:shadow-purple-500/20">
                {_/* Service Icon */}
                <div className={_`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 transform transition-transform duration-300 group-hover:shadow-lg hover:shadow-cyan-400/40`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {_/* Service Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                    {_service.name}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed">
                    {_service.description}
                  </p>

                  {_/* Features */}
                  <div className="space-y-2">
                    {_service.features.slice(0, _3).map(_(feature, _idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"></div>
                        <span className="text-sm text-gray-400">{_feature}</span>
                      </div>
                    ))}
                  </div>

                  {_/* Market Info */}
                  <div className="pt-4 border-t border-gray-700/50">
                    <div className="flex justify-between items-center text-sm text-gray-400">
                      <span>Market: {_service.marketSize}</span>
                      <span className="text-green-400">↑ {_service.growthRate}</span>
                    </div>
                  </div>

                  {_/* Price and CTA */}
                  <div className="pt-4 flex items-center justify-between">
                    <div className="text-3xl font-bold text-white">
                      {_service.price}
                      <span className="text-lg text-gray-400">{_service.period}</span>
                    </div>
                    <Link 
                      href={_`/services/${service.id}`}
                      className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold transform transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/30 hover:shadow-lg hover:shadow-purple-500/25"
                    >
                      <span>Explore</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                {_/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {_/* Call to Action */}
        <motion.div
          initial={_{ opacity: 0, _y: 20}}
          whileInView={_{ opacity: 1, _y: 0}}
          transition={_{ duration: 0.8, _delay: 0.4}}
          viewport={_{ once: true}}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-purple-900/50 to-cyan-900/50 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the future of technology with our revolutionary 2027 services. 
              Get in touch to discover how we can accelerate your digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="https://ziontechgroup.com/contact"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transform transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/30 hover:shadow-xl hover:shadow-purple-500/25"
              >
                <span>Get Started Today</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a 
                href="tel:+13024640950"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-gray-700 to-gray-800 text-white px-8 py-4 rounded-xl font-semibold text-lg transform transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/30 hover:shadow-xl"
              >
                <span>Call +1 302 464 0950</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Revolutionary2027ServicesShowcase;