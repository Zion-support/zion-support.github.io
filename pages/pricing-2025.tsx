import React, {_useState} from 'react';
import Head from 'next/head';
import {_ArrowRight, _Check, _Star, _Users, _Zap, _Shield, _Globe, _TrendingUp, _Award, _Clock, _CheckCircle, _ExternalLink} from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';

export default function Pricing2025() {_const [selectedCategory, _setSelectedCategory] = useState('all');
  const [billingCycle, _setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  const _categories = [
    { id: 'all', _name: 'All Services', _icon: '🚀'},
    {_id: 'AI & Analytics', _name: 'AI & Analytics', _icon: '🧠'},
    {_id: 'Cybersecurity & Quantum', _name: 'Cybersecurity & Quantum', _icon: '🔒'},
    {_id: 'Edge Computing & IoT', _name: 'Edge Computing & IoT', _icon: '🌐'},
    {_id: 'Space Technology & Innovation', _name: 'Space Technology & Innovation', _icon: '🚀'},
    {_id: 'Neural Technology & BCI', _name: 'Neural Technology & BCI', _icon: '🧬'}
  ];

  const _filteredServices = innovative2025MicroSaasExpansionV3.filter(service => 
    selectedCategory === 'all' || service.category.includes(selectedCategory)
  );

  const _getAnnualPrice = (_monthlyPrice: string) => {_const _price = parseFloat(monthlyPrice.replace('$', _''));
    const _annualPrice = price * 12 * 0.8; // 20% discount for annual
    return `$${Math.round(annualPrice)}`;
  };

  const _containerVariants = {_hidden: { opacity: 0},
    visible: {_opacity: 1, _transition: {
        staggerChildren: 0.1}
    }
  };

  const _itemVariants = {_hidden: { opacity: 0, _y: 20},
    visible: {_opacity: 1, _y: 0, _transition: {
        duration: 0.5}
    }
  };

  return (_<div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      <Head>
        <title>2025 Pricing & Services — Zion Tech Group</title>
        <meta name="description" content="Explore our comprehensive pricing for innovative micro SAAS services, _AI solutions, _quantum technologies, _and cutting-edge IT services. Transparent pricing with flexible plans." />
        <meta property="og:title" content="2025 Pricing & Services — Zion Tech Group" />
        <meta property="og:description" content="Explore our comprehensive pricing for innovative micro SAAS services, _AI solutions, _quantum technologies, _and cutting-edge IT services." />
        <meta name="keywords" content="pricing, _micro SAAS, _AI services, _quantum computing, _cybersecurity, _edge computing, _space technology, _neural interfaces, _Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/pricing-2025" />
      
        <script type="application/ld+json">{_"@context":"https://schema.org", _"@type":"WebPage", _"headline":"2025 Pricing & Services — Zion Tech Group", _"url":"https://ziontechgroup.com/pricing-2025", _"isPartOf":{"@type":"WebSite", _"name":"Zion Tech Group", _"url":"https://ziontechgroup.com"}}</script></Head>

      <EnhancedNavigation />

      {_/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            animate={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
              2025 Pricing & Services
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-8">
              Transparent pricing for our comprehensive collection of innovative micro SAAS services, _AI solutions, _quantum technologies, _and revolutionary IT services.
            </p>
            
            {_/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4 mb-12">
              <span className={_`text-lg ${billingCycle === 'monthly' ? 'text-white' : 'text-white/60'}`}>
                Monthly
              </span>
              <button
                onClick={_() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
                className={_`relative w-16 h-8 rounded-full transition-all duration-300 ${
                  billingCycle === 'annual' ? 'bg-cyan-500' : 'bg-white/20'}`}
              >
                <div className={_`absolute top-1 w-6 h-6 bg-white rounded-full transition-all duration-300 ${
                  billingCycle === 'annual' ? 'right-1' : 'left-1'}`} />
              </button>
              <span className={_`text-lg ${billingCycle === 'annual' ? 'text-white' : 'text-white/60'}`}>
                Annual
                <span className="ml-2 px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">
                  Save 20%
                </span>
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {_/* Category Filter */}
      <section className="py-8 px-6 bg-gradient-to-r from-white/5 to-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {_categories.map(_(category) => (_<button
                key={category.id}
                onClick={_() => setSelectedCategory(category.id)}
                className={_`px-6 py-3 rounded-lg text-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                    : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'}`}
              >
                <span>{_category.icon}</span>
                {_category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {_/* Pricing Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={_containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {_filteredServices.map(_(service, _index) => (
              <motion.div
                key={service.id}
                variants={_itemVariants}
                className={_`group relative p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl ${
                  service.popular ? 'ring-2 ring-cyan-400/50' : ''}`}
              >
                {_/* Popular Badge */}
                {_service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-sm font-bold rounded-full">
                    MOST POPULAR
                  </div>
                )}

                {_/* Service Header */}
                <div className="text-center mb-8">
                  <div className={_`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} p-5 mx-auto mb-4 flex items-center justify-center text-3xl`}>
                    {_service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{_service.name}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{_service.tagline}</p>
                </div>

                {_/* Pricing */}
                <div className="text-center mb-8">
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-cyan-400">
                      {_billingCycle === 'monthly' ? service.price : getAnnualPrice(service.price)}
                    </span>
                    <span className="text-white/60 ml-2">
                      {_billingCycle === 'monthly' ? service.period : '/year'}
                    </span>
                  </div>
                  {_billingCycle === 'annual' && (
                    <p className="text-green-400 text-sm">
                      Save ${Math.round(parseFloat(service.price.replace('$', _'')) * 12 * 0.2)} annually
                    </p>
                  )}
                </div>

                {_/* Rating */}
                <div className="flex items-center justify-center gap-2 mb-6">
                  <div className="flex items-center gap-1">
                    {_[...Array(5)].map(_(_, _i) => (
                      <Star
                        key={i}
                        className={_`w-4 h-4 ${
                          i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-white/20'}`}
                      />
                    ))}
                  </div>
                  <span className="text-white/60 text-sm">
                    {_service.rating} ({_service.reviews} reviews)
                  </span>
                </div>

                {_/* Features */}
                <div className="mb-8">
                  <h4 className="text-white font-semibold mb-4 text-center">Key Features:</h4>
                  <div className="space-y-3">
                    {_service.features.slice(0, _5).map(_(feature, _idx) => (
                      <div key={idx} className="flex items-center gap-3 text-sm text-white/80">
                        <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                        <span>{_feature}</span>
                      </div>
                    ))}
                    {_service.features.length > 5 && (
                      <div className="text-cyan-400 text-sm font-medium text-center">
                        +{service.features.length - 5} more features
                      </div>
                    )}
                  </div>
                </div>

                {_/* Market Info */}
                <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                  <div className="text-center p-3 bg-white/5 rounded-lg">
                    <div className="text-white/60 mb-1">Market Size</div>
                    <div className="text-white font-medium">{_service.marketSize}</div>
                  </div>
                  <div className="text-center p-3 bg-white/5 rounded-lg">
                    <div className="text-white/60 mb-1">Growth Rate</div>
                    <div className="text-white font-medium">{_service.growthRate}</div>
                  </div>
                </div>

                {_/* ROI and Setup */}
                <div className="mb-8 p-4 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg border border-cyan-400/20">
                  <div className="text-cyan-400 font-semibold mb-2 text-center">🚀 Expected ROI:</div>
                  <p className="text-white/80 text-sm text-center">{_service.roi}</p>
                  <div className="mt-3 grid grid-cols-2 gap-4 text-center text-sm">
                    <div>
                      <div className="text-white/60">Setup Time</div>
                      <div className="text-white font-medium">{_service.setupTime}</div>
                    </div>
                    <div>
                      <div className="text-white/60">Trial Period</div>
                      <div className="text-white font-medium">{_service.trialDays} days</div>
                    </div>
                  </div>
                </div>

                {_/* Action Buttons */}
                <div className="space-y-3">
                  <a
                    href={_service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-lg font-semibold text-white text-center transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                  >
                    Get Started
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <a
                    href={_`mailto:kleber@ziontechgroup.com?subject=Inquiry about ${service.name}&body=Hi, I'm interested in learning more about your ${_service.name} service. Please provide more information about pricing, features, and implementation.`}
                    className="w-full px-6 py-3 border border-white/20 hover:border-cyan-400/30 rounded-lg font-semibold text-white text-center transition-all duration-300 hover:bg-white/5"
                  >
                    Contact Sales
                  </a>
                </div>

                {_/* Contact Info */}
                <div className="mt-6 pt-4 border-t border-white/10 text-center">
                  <div className="text-white/60 text-sm mb-2">Need help? Contact us:</div>
                  <div className="flex items-center justify-center gap-4 text-sm">
                    <a href={_`tel:${service.contactInfo.mobile}`} className="text-cyan-400 hover:text-cyan-300">
                      📞 {_service.contactInfo.mobile}
                    </a>
                    <a href={_`mailto:${service.contactInfo.email}`} className="text-cyan-400 hover:text-cyan-300">
                      ✉️ {_service.contactInfo.email}
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {_/* No Results */}
          {_filteredServices.length === 0 && (_<div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
              <p className="text-white/70 mb-6">Try selecting a different category</p>
              <button
                onClick={() => setSelectedCategory('all')}
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
              >
                View All Services
              </button>
            </div>
          )}
        </div>
      </section>

      {_/* Enterprise Solutions */}
      <section className="py-20 px-6 bg-gradient-to-r from-white/5 to-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            viewport={_{ once: true}}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Need Enterprise Solutions?
            </h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              We offer custom enterprise solutions, volume discounts, and dedicated support 
              for organizations requiring multiple services or specialized implementations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Enterprise Solutions Inquiry&body=Hi, I'm interested in enterprise solutions and volume pricing. Please provide more information about your enterprise offerings, custom implementations, and dedicated support options."
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2"
              >
                Contact Enterprise Sales
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="tel:+13024640950"
                className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm bg-white/5 hover:bg-white/10"
              >
                Call Us Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {_/* FAQ Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            viewport={_{ once: true}}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-6">
            {_[
              {
                question: "What payment methods do you accept?", _answer: "We accept all major credit cards, _PayPal, _and bank transfers for annual plans. Enterprise customers can arrange custom payment terms."},
              {_question: "Do you offer free trials?", _answer: "Yes! All our services come with free trial periods ranging from 14 to 60 days, _depending on the service complexity."},
              {_question: "Can I cancel my subscription anytime?", _answer: "Absolutely. You can cancel your subscription at any time with no cancellation fees. Your service will remain active until the end of your billing period."},
              {_question: "Do you offer volume discounts?", _answer: "Yes, _we offer volume discounts for organizations using multiple services. Contact our sales team for custom pricing and enterprise solutions."},
              {_question: "What kind of support do you provide?", _answer: "We provide comprehensive support including documentation, _tutorials, _email support, _and priority support for enterprise customers. Some services include dedicated account managers."},
              {_question: "Can I upgrade or downgrade my plan?", _answer: "Yes, _you can upgrade or downgrade your plan at any time. Changes take effect immediately, _and we'll prorate any billing adjustments."}
            ].map(_(faq, _index) => (
              <motion.div
                key={_index}
                initial={_{ opacity: 0, _y: 20}}
                whileInView={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.5, _delay: index * 0.1}}
                viewport={_{ once: true}}
                className="p-6 rounded-xl border border-white/10 bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-xl"
              >
                <h3 className="text-xl font-bold text-white mb-3">{_faq.question}</h3>
                <p className="text-white/70 leading-relaxed">{_faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <EnhancedFooter />
    </div>
  );
}