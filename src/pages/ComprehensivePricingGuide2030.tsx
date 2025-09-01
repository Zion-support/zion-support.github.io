import React, { useState, useMemo } from 'react.ts';'
import { motion  } from 'framer-motion.ts';'
import { Link  } from 'react-router-dom.ts';
const ComprehensivePricingGuide2030: React.FC = () => {;'
  const [activeCategory, setActiveCategory] = useState('all');'
  const [searchTerm, setSearchTerm] = useState('');

  
    ...innovativeAIServices2030,;
    ...innovativeCybersecurityServices2030,;
    ...innovativeCloudDevOpsServices2030;
  ];

  const filteredServices = allServices.filter (service => {;
    const matchesSearch = service.title.toLowerCase () .includes (searchTerm.toLowerCase () ) ||;
                         service.description.toLowerCase () .includes (searchTerm.toLowerCase () ) ||;
                         service.tags.some (tag => tag.toLowerCase () .includes (searchTerm.toLowerCase () ) ) ;
    return matchesCategory && matchesSearch;
  }) ;

  const categories = [;'
    { id: 'all', name: 'All Services', icon: Star, count: allServices.length },;'
    { id: 'ai', name: 'AI Services', icon: Brain, count: innovativeAIServices2030.length },;'
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, count: innovativeCybersecurityServices2030.length },;'
    { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud, count: innovativeCloudDevOpsServices2030.length };
  ];

  const getCategoryIcon = (category: string) => {;'
    if (category.toLowerCase().includes('ai')) return Brain;'
    if (category.toLowerCase().includes('cybersecurity')) return Shield;'    if (category.toLowerCase().includes('cloud')) return Cloud;
    return Star};

  const getPricingTier = (price: number) => {;'
    if (price < 300) return { tier: 'Starter', color: 'bg-green-600/20 border-green-500/30 text-green-300' };'
    if (price < 600) return { tier: 'Professional', color: 'bg-blue-600/20 border-blue-500/30 text-blue-300' };'
    if (price < 1000) return { tier: 'Enterprise', color: 'bg-purple-600/20 border-purple-500/30 text-purple-300' };'
    return { tier: 'Premium', color: 'bg-orange-600/20 border-orange-500/30 text-orange-300' };
  };

  const pricingTiers = [
    {
'
      name: 'Starter','
      description: 'Perfect for small businesses and startups',
      price: 299,
      features[;'
        'Basic AI features','
        'Email support','
        'Up to 5 users','
        'Standard integrations','
        'Community forum access','
        'Basic analytics','        'Mobile app access'
      ],;'
      color: 'from-cyan-500 to-blue-600',
      popular: false,'
      bestFor: 'Small businesses, startups, individual professionals'
    },
    {
'
      name: 'Professional','
      description: 'Ideal for growing businesses and teams',
      price: 999,
      features[;'
        'Advanced AI capabilities','
        'Priority support','
        'Up to 25 users','
        'Advanced integrations','
        'API access','
        'Custom branding','
        'Advanced analytics dashboard','
        'White-label options','
        'Training and onboarding'
      ],;'
      color: 'from-purple-500 to-pink-600',
      popular: true,'
      bestFor: 'Growing businesses, mid-size companies, agencies'
    },
    {
'
      name: 'Enterprise','
      description: 'For large organizations with complex needs',
      price: 2999,
      features[;'
        'Full AI suite access','
        '24/7 dedicated support','
        'Unlimited users','
        'Custom integrations','
        'White-label solutions','
        'Advanced security features','
        'SLA guarantees','
        'Dedicated account manager','
        'Custom development','
        'On-premise deployment options'
      ],;'
      color: 'from-indigo-500 to-purple-600',
      popular: false,'
      bestFor: 'Large enterprises, government agencies, Fortune 500 companies';
    };
  ];

  const marketInsights = [
    {
'
      title: 'AI Services Market','
      value: '$29.9B','
      growth: '+32.4%','
      description: 'Expected market size by 2025','
      color: 'from-purple-500 to-pink-600'
    },
    {
'
      title: 'Cloud Services Market','
      value: '$832.1B','
      growth: '+17.5%','
      description: 'Global cloud market value','
      color: 'from-blue-500 to-cyan-600'
    },
    {
'
      title: 'IoT Market','
      value: '$1.1T','
      growth: '+25.7%','
      description: 'IoT market by 2027','
      color: 'from-green-500 to-emerald-600'
    },
    {
'
      title: 'Quantum Computing','
      value: '$65.0B','
      growth: '+48.2%','
      description: 'Quantum market by 2030','
      color: 'from-indigo-500 to-purple-600';
    };  ];

  return ("
    <div className = "min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}"
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">"
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial = {

  { opacity: 0,
  y: 20 

}}
            animate = {

  { opacity: 1,
  y: 0 

}}
            transition={{ duration: 0.8 }}
"
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Comprehensive Pricing Guide 2030
            </h1>"
            <p className="text-xl md:text-2xl text-purple-200 mb-8 max-w-4xl mx-auto">'
              Transparent pricing for Zion Tech Group's revolutionary micro SAAS, IT infrastructure, and AI services
            </p>"
            <div className="flex flex-wrap justify-center gap-4 mb-12">"
              <div className="bg-purple-600/20 backdrop-blur-sm rounded-lg p-4 border border-purple-500/30">"
                <div className="text-3xl font-bold text-purple-300">${Math.min(...allServices.map(s => s.pricing.monthly))}</div>"
                <div className="text-purple-200">Starting Price</div>
              </div>"
              <div className="bg-blue-600/20 backdrop-blur-sm rounded-lg p-4 border border-blue-500/30">"
                <div className="text-3xl font-bold text-blue-300">${Math.max(...allServices.map(s => s.pricing.monthly))}</div>"
                <div className="text-blue-200">Premium Tier</div>
              </div>"
              <div className="bg-green-600/20 backdrop-blur-sm rounded-lg p-4 border border-green-500/30">"
                <div className="text-3xl font-bold text-green-300">20%</div>"
                <div className="text-green-200">Annual Discount</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>;

      {/* Contact Banner */}"
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 py-8 px-4">;"
        <div className="max-w-7xl mx-auto text-center">"
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-white">"
            <div className="flex items-center gap-2">"
              <Phone className="w-5 h-5" />"
              <span className="font-semibold">+1 302 464 0950</span>
            </div>"
            <div className="flex items-center gap-2">"
              <Mail className="w-5 h-5" />"
              <span className="font-semibold">kleber@ziontechgroup.com</span>
            </div>"
            <div className="flex items-center gap-2">"
              <MapPin className="w-5 h-5" />"              <span className="font-semibold">364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter */}"
      <section className="py-12 px-4 sm:px-6 lg:px-8">;"
        <div className="max-w-7xl mx-auto">"
          <div className="flex flex-col lg:flex-row gap-6 mb-8">"
            <div className="flex-1">"
              <div className="relative">
                <input"
                  type="text""
                  placeholder="Search services by name, description, or tags..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}"
                  className="w-full px-4 py-3 pl-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />"
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/60 w-5 h-5" />              </div>
            </div>"
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all ${

                    activeCategory === category.id'
                      ? 'bg-purple-600 border-purple-500 text-white''
                      : 'bg-white/10 border-white/20 text-white hover:bg-white/20'`
                  }`}
"
                  <category.icon className="w-4 h-4" />
                  <span>{category.name}</span>"
                  <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                    {category.count}
                  </span>
                </button>;) ) }
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Overview */}"
      <section className="py-12 px-4 sm:px-6 lg:px-8">;"
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial = {

  { opacity: 0,
  y: 20 

}}
            whileInView = {

  { opacity: 1,
  y: 0 

}}
            transition={{ duration: 0.8 }}"
            className="text-3xl font-bold text-center mb-12"
          >
            Market Insights & Trends
          </motion.h2>"
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-6">
            {marketInsights.map((insight, index)  => (
              <motion.div
                key={index}
                initial = {

  { opacity: 0,
  y: 20 

}}
                whileInView = {

  { opacity: 1,
  y: 0 

}}
                transition = {

  { duration: 0.5,
  delay: index * 0.1 

}}
                viewport={{ once: true }}`
                className={`${plan.color} border rounded-xl p-6 text-center`}
              >`
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${insight.color} flex items-center justify-center mx-auto mb-4`}>"
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>"
                <h3 className="text-lg font-semibold text-white mb-2">{insight.title}</h3>"
                <div className="text-3xl font-bold text-cyan-400 mb-1">{insight.value}</div>"
                <div className="text-sm text-green-400 mb-2">{insight.growth} YoY</div>"                <p className="text-sm text-slate-300">{insight.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */};"
      <section className="py-12 px-4 sm:px-6 lg:px-8">;"
        <div className="max-w-7xl mx-auto">;"
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">;
            {filteredServices.map((service, index) => {;
              
              
              return()
                <motion.div
                  key = {service.id}
                  initial = {

  { opacity: 0,
  y: 20 

}}
                  animate = {

  { opacity: 1,
  y: 0 

}}
                  transition = {

  { duration: 0.5,
  delay: index * 0.1 






}}"
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all group"
                >
                  {/* Header */}"
                  <div className="flex items-start justify-between mb-4">`
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${categoryColor} flex items-center justify-center`}>"
                      <CategoryIcon className="w-6 h-6 text-white" />
                    </div>"
                    <div className="text-right">"                      <div className="text-xs uppercase tracking-wide text-cyan-300/70 mb-1">
                        {service.innovationLevel}
                      </div>"
                      <div className="text-2xl font-bold text-cyan-400">
                        {service.currency}{service.price.toLocaleString()}
                      </div>"
                      <div className="text-xs text-slate-400">per {service.pricingModel}</div>
                    </div>
                  </div>

                  {/* Content */}"
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h3>"
                  <p className="text-slate-300 text-sm mb-4 line-clamp-3">
                    {service.description}
                  </p>

                  {/* Category and ROI */}"
                  <div className="flex items-center justify-between mb-4">"
                    <span className="text-xs bg-slate-800 px-2 py-1 rounded text-cyan-300">
                      {service.category}
                    </span>"
                    <div className="text-right">"
                      <div className="text-xs text-slate-400">ROI</div>"
                      <div className="text-sm font-semibold text-green-400">{service.roi}</div>
                    </div>
                  </div>

                  {/* Market Price Comparison */}"
                  <div className="mb-4 p-3 bg-slate-800/50 rounded-lg">"
                    <div className="text-xs text-slate-400 mb-1">Market Price Range</div>"
                    <div className="text-sm font-semibold text-white">{service.marketPrice}</div>"
                    <div className="text-xs text-slate-400 mt-1">
                      Our price: {service.currency}{service.price.toLocaleString()}/{service.pricingModel}
                    </div>
                  </div>

                  {/* Key Benefits */}"
                  <div className="mb-4">"
                    <div className="text-xs text-slate-400 mb-2">Key Benefits:</div>"
                    <div className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, idx) => ("
                        <div key={idx} className="flex items-center text-xs text-slate-300">"
                          <TrendingUp className="w-3 h-3 text-blue-400 mr-2 flex-shrink-0" />                          {benefit}
                        </div>) ) }
                    </div>
                  </div>

                  {/* CTA */}"
                  <div className="flex items-center justify-between">
                    <Link`
                      to={`/services/${service.id}`}"
                      className="inline-flex items-center text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      Learn More"
                      <ArrowRight className="ml-1 h-4 w-4" />                    </Link>
                    <Link"
                      to="/contact""
                      className="inline-flex items-center px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-medium hover:opacity-90 transition-opacity"
                    >"
                      <Mail className="w-4 h-4" />;
                      Get Quote;
                    </a>;
                  </div>;
                </motion.div>;) ;
            }) }          </div>

          {filteredServices.length = == 0 && (;"
            <div className="text-center py-12">;"
              <div className="text-gray-400 text-lg mb-4">No services found matching your criteria</div>;
              <button;
                onClick={() => {;'
                  setSearchTerm('');'
                  setActiveCategory('all');
                }}"                className = "bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition-colors"
              >
                Clear all filters
              </button>
            </div>) }
        </div>
      </section>

      {/* Pricing Benefits */}"
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">;"
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial = {

  { opacity: 0,
  y: 20 

}}
            whileInView = {

  { opacity: 1,
  y: 0 

}}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}"
            className="text-center mb-16"
"
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Why Our Pricing is Competitive
            </h2>"
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">
              We offer transparent, value-driven pricing that gives you the best ROI in the market
            </p>
          </motion.div>
"
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {

                icon: DollarSign,"
                title: "Transparent Pricing","
                description: "No hidden fees or surprise charges. Clear, upfront pricing for all services."
              },
              {

                icon: Award,"
                title: "Premium Quality","
                description: "Enterprise-grade solutions at competitive prices. Quality that exceeds expectations."
              },
              {

                icon: Users,"
                title: "Scalable Plans","
                description: "Start small and scale up as your business grows. Flexible pricing options."
              },
              {

                icon: Zap,"
                title: "Fast ROI","
                description: "Our services deliver measurable results quickly, maximizing your investment."
              },
              {

                icon: Shield,"
                title: "Risk-Free Trial","
                description: "Try our services with confidence. Free trials and money-back guarantees."
              },
              {

                icon: Clock,"
                title: "24/7 Support","
                description: "Round-the-clock support included in all plans. No additional support fees."

            ].map ( (benefit, index) => (;
              <motion.div
                key={index}
                initial = {

  { opacity: 0,
  y: 20 

}}
                whileInView = {

  { opacity: 1,
  y: 0 

}}
                transition = {

  { duration: 0.5,
  delay: index * 0.1 

}}
                viewport={{ once: true }}"
                className="text-center"
"
                <div className="w-16 h-16 bg-purple-600/20 border border-purple-500/30 rounded-full flex items-center justify-center mx-auto mb-4">"
                  <benefit.icon className="w-8 h-8 text-purple-400" />
                </div>"
                <div className="text-center">"
                  <div className="text-3xl font-bold text-green-400 mb-2">200-600%</div>"
                  <div className="text-slate-300">Average ROI</div>
                </div>"
                <div className="text-center">"
                  <div className="text-3xl font-bold text-purple-400 mb-2">40-80%</div>"
                  <div className="text-slate-300">Cost Reduction</div>
                </div>
              </div>;
              
              <Link "
                to="/contact" "
                className="inline-flex items-center px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:opacity-90 transition-opacity"
              >
                Get Personalized ROI Analysis"
                <ArrowRight className="ml-2 h-5 w-5" />              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}"
      <section className="py-20 px-4 sm:px-6 lg:px-8">;"
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial = {

  { opacity: 0,
  y: 20 

}}
            whileInView = {

  { opacity: 1,
  y: 0 

}}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
"
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </motion.h2>
            <motion.p 
              initial = {

  { opacity: 0,
  y: 20 

}}
              whileInView = {

  { opacity: 1,
  y: 0 

}}
              transition = {

  { duration: 0.8,
  delay: 0.2 

}}"
              className="text-xl text-slate-300 mb-8"
            >
              Our team of experts is ready to help you choose the right services and pricing plan. 
              Get in touch today for a personalized consultation.
            </motion.p>
            
            <motion.div 
              initial = {

  { opacity: 0,
  y: 20 

}}
              whileInView = {

  { opacity: 1,
  y: 0 

}}
              transition = {

  { duration: 0.8,
  delay: 0.4 

}}"
              className="grid md:grid-cols-3 gap-8 mb-12"
            >"
              <div className="flex flex-col items-center">"
                <Phone className="w-8 h-8 text-cyan-400 mb-4" />"                <div className="text-white font-semibold mb-2">Call Us</div>
                <a "
                  href="tel:+13024640950" "
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  +1 302 464 0950
                </a>
              </div>"
              <div className="flex flex-col items-center">"
                <Mail className="w-8 h-8 text-cyan-400 mb-4" />"                <div className="text-white font-semibold mb-2">Email Us</div>
                <a "
                  href="mailto:kleber@ziontechgroup.com" "
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  kleber@ziontechgroup.com
                </a>
              </div>"
              <div className="flex flex-col items-center">"
                <MapPin className="w-8 h-8 text-cyan-400 mb-4" />"
                <div className="text-white font-semibold mb-2">Visit Us</div>"                <div className="text-slate-300 text-center">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial = {

  { opacity: 0,
  y: 20 

}}
              whileInView = {

  { opacity: 1,
  y: 0 

}}
              transition = {

  { duration: 0.8,
  delay: 0.6 

}}"
              className="flex flex-wrap justify-center gap-4"
            >
              <Link "
                to="/contact" "
                className="inline-flex items-center px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:opacity-90 transition-opacity"
              >
                Schedule a Consultation"
                <ArrowRight className="ml-2 h-5 w-5" />              </Link>
              <Link "
                to="/request-quote" "
                className="inline-flex items-center px-8 py-4 rounded-xl border border-cyan-400/30 text-cyan-400 font-semibold hover:bg-cyan-400/10 transition-colors"
              >
                Request a Quote
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}"
      <section className="py-16">;"
        <div className="container mx-auto px-4 text-center">"
          <div className="max-w-3xl mx-auto">"
            <div className="text-slate-300 mb-6">
              <strong>Zion Tech Group</strong> - Your partner in digital transformation and innovation.'
              Visit us at{' '}
              <a "
                href="https://ziontechgroup.com" "
                target="_blank" "
                rel="noopener noreferrer""
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                ziontechgroup.com
              </a>'
              {' '}to explore our full range of services and solutions.
            </div>
            <div>"
              <h3 className = "text-white font-bold text-lg mb-4">Quick Links</h3>"
              <div className="space-y-2">"
                <a href="https://ziontechgroup.com" className="block text-gray-300 hover:text-white transition-colors">
                  Visit Website
                </a>"
                <a href="mailto:kleber@ziontechgroup.com" className="block text-gray-300 hover:text-white transition-colors">
                  Request Quote
                </a>"
                <a href="tel:+13024640950" className="block text-gray-300 hover:text-white transition-colors">
                  Schedule Call
                </a>
              </div>
            </div>
            <div>"
              <h3 className="text-white font-bold text-lg mb-4">Service Categories</h3>"
              <div className="space-y-2">"
                <div className="text-gray-300">AI & Machine Learning</div>"
                <div className="text-gray-300">Cybersecurity Solutions</div>"
                <div className="text-gray-300">Cloud & DevOps</div>"
                <div className="text-gray-300">IT Infrastructure</div>;
              </div>;
            </div>;
          </div>;
        </div>;
      </section>;
    </div>;) ;
};

export default ComprehensivePricingGuide2030;}}'"`