import React, {_useState} from 'react';
import Head from 'next/head';
import {_Check, _Star, _Users, _Clock, _Shield, _Zap, _Globe, _Rocket, _Brain, _Atom, _ArrowRight, _ExternalLink, _TrendingUp, _Award, _Target, _ChevronDown} from 'lucide-react';

export default function ComprehensivePricingPage() {_const [selectedCategory, _setSelectedCategory] = useState('all');
  const [billingCycle, _setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [expandedService, _setExpandedService] = useState<string | null>(null);

  // Combine all services
  const _allServices = [...comprehensiveMicroSaasServices, _...specializedEmergingTechServices];

  const _categories = [
    { id: 'all', _name: 'All Services', _icon: '🚀'},
    {_id: 'AI & Machine Learning', _name: 'AI & ML', _icon: '🧠'},
    {_id: 'Healthcare AI', _name: 'Healthcare', _icon: '🏥'},
    {_id: 'Fintech AI', _name: 'Fintech', _icon: '💰'},
    {_id: 'Cybersecurity', _name: 'Security', _icon: '🛡️'},
    {_id: 'IoT & Smart Cities', _name: 'Smart Cities', _icon: '🏙️'},
    {_id: 'Blockchain & DeFi', _name: 'Blockchain', _icon: '🔗'},
    {_id: 'Quantum Computing', _name: 'Quantum', _icon: '⚛️'},
    {_id: 'Space Technology', _name: 'Space Tech', _icon: '🚀'},
    {_id: 'Autonomous Systems', _name: 'Autonomous', _icon: '🤖'},
    {_id: 'AR/VR & Metaverse', _name: 'AR/VR', _icon: '🥽'},
    {_id: '5G/6G Networks', _name: '5G/6G', _icon: '📡'},
    {_id: 'Biotechnology AI', _name: 'Biotech', _icon: '🧬'},
    {_id: 'Renewable Energy', _name: 'Energy', _icon: '⚡'},
    {_id: 'Edge Computing', _name: 'Edge', _icon: '🌐'},
    {_id: 'Quantum Internet', _name: 'Q-Internet', _icon: '🌍'},
    {_id: 'Neuromorphic Computing', _name: 'Neuro', _icon: '🧠'}
  ];

  const _filteredServices = selectedCategory === 'all' 
    ? allServices 
    : allServices.filter(service => service.category === selectedCategory);

  const _getCategoryIcon = (_category: string) => {_const _categoryData = categories.find(cat => cat.id === category);
    return categoryData?.icon || '🚀';};

  const _calculateYearlyPrice = (_monthlyPrice: string) => {_const _price = parseFloat(monthlyPrice.replace('$', _'').replace(', _', _''));
    return `$${(price * 12 * 0.8).toFixed(0)}`; // 20% discount for yearly
  };

  const _toggleServiceExpansion = (_serviceId: string) => {_setExpandedService(expandedService === serviceId ? null : serviceId);};

  return (_<>
      <Head>
        <title>Comprehensive Pricing 2025 - Zion Tech Group</title>
        <meta name="description" content="Discover our revolutionary micro SAAS services pricing for 2025. AI, _quantum computing, _cybersecurity, _and emerging technology solutions." />
        <meta name="keywords" content="micro SAAS pricing, _AI services, _quantum computing, _cybersecurity, _emerging technology, _Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/comprehensive-pricing-2025" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        {_/* Header */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={_{ opacity: 0, _y: 30}}
              animate={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                Comprehensive Pricing 2025
              </h1>
              <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8">
                Revolutionary micro SAAS services that transform businesses with cutting-edge AI, _quantum computing, _and emerging technologies
              </p>
              
              {_/* Billing Toggle */}
              <div className="flex items-center justify-center gap-4 mb-12">
                <span className="text-white/60">Monthly</span>
                <button
                  onClick={_() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                  className={_`relative w-16 h-8 rounded-full transition-all duration-300 ${
                    billingCycle === 'yearly' ? 'bg-blue-600' : 'bg-white/20'}`}
                >
                  <div className={_`absolute top-1 w-6 h-6 bg-white rounded-full transition-all duration-300 ${
                    billingCycle === 'yearly' ? 'translate-x-8' : 'translate-x-1'}`} />
                </button>
                <span className="text-white/60">Yearly</span>
                {_billingCycle === 'yearly' && (
                  <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                    Save 20%
                  </span>
                )}
              </div>

              {_/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                  <div className="text-3xl font-bold text-blue-400">{_allServices.length}+</div>
                  <div className="text-white/60">Services Available</div>
                </div>
                <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                  <div className="text-3xl font-bold text-green-400">99.9%</div>
                  <div className="text-white/60">Uptime Guarantee</div>
                </div>
                <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                  <div className="text-3xl font-bold text-purple-400">24/7</div>
                  <div className="text-white/60">Support Available</div>
                </div>
                <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                  <div className="text-3xl font-bold text-orange-400">500%+</div>
                  <div className="text-white/60">Average ROI</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {_/* Category Filter */}
        <section className="px-6 mb-16">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={_{ opacity: 0, _y: 20}}
              animate={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.6}}
              className="flex flex-wrap justify-center gap-3"
            >
              {_categories.map(_(category) => (_<button
                  key={category.id}
                  onClick={_() => setSelectedCategory(category.id)}
                  className={_`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg'
                      : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'}`}
                >
                  <span>{_category.icon}</span>
                  {_category.name}
                </button>
              ))}
            </motion.div>
          </div>
        </section>

        {_/* Services Grid */}
        <section className="px-6 pb-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              <AnimatePresence mode="wait">
                {_filteredServices.map(_(service, _index) => (
                  <motion.div
                    key={service.id}
                    initial={_{ opacity: 0, _y: 30}}
                    animate={_{ opacity: 1, _y: 0}}
                    exit={_{ opacity: 0, _y: -30}}
                    transition={_{ duration: 0.6, _delay: index * 0.1}}
                    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300"
                  >
                    {_/* Popular Badge */}
                    {_service.popular && (
                      <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 z-10">
                        <Star className="w-3 h-3" />
                        Popular
                      </div>
                    )}

                    {_/* Service Header */}
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="text-4xl">{_service.icon}</div>
                        <div className="text-right">
                          <div className="text-3xl font-bold text-white">
                            {_billingCycle === 'yearly' ? calculateYearlyPrice(service.price) : service.price}
                          </div>
                          <div className="text-white/60">
                            {_billingCycle === 'yearly' ? '/year' : service.period}
                          </div>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-2">{_service.name}</h3>
                      <p className="text-white/70 text-sm mb-4">{_service.tagline}</p>

                      {_/* Key Features */}
                      <div className="space-y-2 mb-6">
                        {_service.features.slice(0, _4).map(_(feature, _idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-white/60">
                            <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                            <span className="line-clamp-2">{_feature}</span>
                          </div>
                        ))}
                      </div>

                      {_/* Service Stats */}
                      <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                        <div>
                          <div className="text-lg font-bold text-blue-400">{_service.rating}</div>
                          <div className="text-xs text-white/60">Rating</div>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-green-400">{_service.customers}+</div>
                          <div className="text-xs text-white/60">Customers</div>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-purple-400">{_service.trialDays}d</div>
                          <div className="text-xs text-white/60">Trial</div>
                        </div>
                      </div>

                      {_/* Expand/Collapse Button */}
                      <button
                        onClick={_() => toggleServiceExpansion(service.id)}
                        className="w-full bg-white/10 text-white py-3 px-4 rounded-xl font-medium hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2 mb-4"
                      >
                        {_expandedService === service.id ? 'Show Less' : 'View Details'}
                        <ChevronDown className={_`w-4 h-4 transition-transform duration-300 ${
                          expandedService === service.id ? 'rotate-180' : ''}`} />
                      </button>

                      {_/* CTA Button */}
                      <a
                        href={_service.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 px-4 rounded-xl font-medium text-center block hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        Get Started
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>

                    {_/* Expanded Details */}
                    <AnimatePresence>
                      {_expandedService === service.id && (_<motion.div
                          initial={{ height: 0, _opacity: 0}}
                          animate={_{ height: 'auto', _opacity: 1}}
                          exit={_{ height: 0, _opacity: 0}}
                          transition={_{ duration: 0.3}}
                          className="overflow-hidden border-t border-white/10"
                        >
                          <div className="p-6 bg-white/5">
                            {_/* Market Position */}
                            <div className="mb-6">
                              <h4 className="text-lg font-semibold text-white mb-2">Market Position</h4>
                              <p className="text-white/70 text-sm">{_service.marketPosition}</p>
                            </div>

                            {_/* Technology Stack */}
                            <div className="mb-6">
                              <h4 className="text-lg font-semibold text-white mb-2">Technology Stack</h4>
                              <div className="flex flex-wrap gap-2">
                                {_service.technology.map((tech, _idx) => (
                                  <span key={idx} className="bg-white/10 text-white/70 px-3 py-1 rounded-full text-xs">
                                    {_tech}
                                  </span>
                                ))}
                              </div>
                            </div>

                            {_/* Use Cases */}
                            <div className="mb-6">
                              <h4 className="text-lg font-semibold text-white mb-2">Use Cases</h4>
                              <div className="space-y-1">
                                {_service.useCases.map(_(useCase, _idx) => (
                                  <div key={idx} className="flex items-center gap-2 text-sm text-white/60">
                                    <Target className="w-3 h-3 text-blue-400" />
                                    {_useCase}
                                  </div>
                                ))}
                              </div>
                            </div>

                            {_/* ROI and Benefits */}
                            <div className="mb-6">
                              <h4 className="text-lg font-semibold text-white mb-2">ROI & Benefits</h4>
                              <p className="text-white/70 text-sm mb-3">{_service.roi}</p>
                              <div className="grid grid-cols-2 gap-2">
                                {_service.benefits.map(_(benefit, _idx) => (
                                  <div key={idx} className="flex items-center gap-2 text-sm text-white/60">
                                    <TrendingUp className="w-3 h-3 text-green-400" />
                                    {_benefit}
                                  </div>
                                ))}
                              </div>
                            </div>

                            {_/* Contact Information */}
                            <div className="bg-white/5 rounded-xl p-4">
                              <h4 className="text-lg font-semibold text-white mb-3">Contact Information</h4>
                              <div className="space-y-2 text-sm text-white/60">
                                <div>📱 {_service.contactInfo.mobile}</div>
                                <div>✉️ {_service.contactInfo.email}</div>
                                <div>📍 {_service.contactInfo.address}</div>
                                <div>🌐 {_service.contactInfo.website}</div>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {_/* Contact CTA */}
        <section className="px-6 pb-20">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={_{ opacity: 0, _y: 30}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
              viewport={_{ once: true}}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-3xl p-12 border border-blue-500/30">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Ready to Get Started?
                </h2>
                <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
                  Contact our sales team to discuss your specific needs and get a customized quote for our revolutionary micro SAAS services.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-4 px-8 rounded-xl font-medium hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Contact Sales Team
                    <ArrowRight className="w-5 h-5" />
                  </a>
                  <a
                    href="tel:+13024640950"
                    className="bg-white/10 text-white py-4 px-8 rounded-xl font-medium hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Call +1 302 464 0950
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}