import { 
  Check, Star, Users, Clock, Shield, Zap, Globe, Rocket, Brain, Atom;
  ArrowRight, ExternalLink, TrendingUp, Award, Target, ChevronDown
} from 'lucide-react'
import { comprehensiveMicroSaasServices } from '../data/comprehensive-2025-micro-saas-expansion';
import { specializedEmergingTechServices } from '../data/specialized-emerging-tech-services-2025';
export default function ComprehensivePricingPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly')
  const [expandedService, setExpandedService] = useState<string | null>(null)
  // Combine all services
  const allServices = [...comprehensiveMicroSaasServices, ...specializedEmergingTechServices];
  const categories = [
import React, { useState } from 'react',
import Head from 'next / head',
import { motion, AnimatePresence } from 'framer-motion',
import {
  Check, Star, Users, Clock, Shield, Zap, Globe, Rocket, Brain, Atom,
  ArrowRight, ExternalLink, TrendingUp, Award, Target, ChevronDown;
} from 'lucide-react',
import { comprehensiveMicroSaasServices } from '../data / comprehensive - 2025 - micro - saas - expansion',
import { specializedEmergingTechServices } from '../data / specialized - emerging - tech - services - 2025',
export default /**
 * ComprehensivePricingPage - Function description
 */
function ComprehensivePricingPage() {
  const [selected_category, setSelectedCategory] = useState ('all'),
  const [billing_cycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly'),
  const [expanded_service, setExpandedService] = useState < string | null>(null),
  // Combine all services;
  const all_services = [...comprehensiveMicroSaasServices, ...specializedEmergingTechServices],
  const categories = [;
    { id: 'all', name: 'All Services', icon: '🚀' },
    { id: 'AI & Machine Learning', name: 'AI & ML', icon: '🧠' },
    { id: 'Healthcare AI', name: 'Healthcare', icon: '🏥' },
    { id: 'Fintech AI', name: 'Fintech', icon: '💰' },
    { id: 'Cybersecurity', name: 'Security', icon: '🛡️' },
    { id: 'IoT & Smart Cities', name: 'Smart Cities', icon: '🏙️' },
    { id: 'Blockchain & DeFi', name: 'Blockchain', icon: '🔗' },
    { id: 'Quantum Computing', name: 'Quantum', icon: '⚛️' },
    { id: 'Space Technology', name: 'Space Tech', icon: '🚀' },
    { id: 'Autonomous Systems', name: 'Autonomous', icon: '🤖' },
{ id: 'AR / VR & Metaverse', name: 'AR / VR', icon: '🥽' },
    { id: '5G / 6G Networks', name: '5G / 6G', icon: '📡' },
    { id: 'Biotechnology AI', name: 'Biotech', icon: '🧬' },
    { id: 'Renewable Energy', name: 'Energy', icon: '⚡' },
    { id: 'Edge Computing', name: 'Edge', icon: '🌐' },
  };
  return (
    <>
      <Head>
        <title>Comprehensive Pricing 2025 - Zion Tech Group</title>
        <meta name="description" content="Discover our revolutionary micro SAAS services pricing for 2025. AI, quantum computing, cybersecurity, and emerging technology solutions." />
        <meta name="keywords" content="micro SAAS pricing, AI services, quantum computing, cybersecurity, emerging technology, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/comprehensive-pricing-2025" />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
    { id: 'Quantum Internet', name: 'Q - Internet', icon: '🌍' },
    { id: 'Neuromorphic Computing', name: 'Neuro', icon: '🧠' }
  ],
  const filtered_services = selected_category === 'all';
    ? all_services;
    : all_services.filter (service => service.category === selected_category),
  const getCategoryIcon = (category: string) =>: any {
    const category_data = categories.find (cat => cat.id === category),
    return category_data?.icon || '🚀';
  },
  const calculateYearlyPrice = (monthly_price: string) =>: any {
    const price = parse_float (monthly_price.replace ('$', '').replace (, '')),
    return `$${(price * 12 * 0.8).to_fixed (0)}`, // 20% discount for yearly;
  },
  const toggleServiceExpansion = (service_id: string) =>: any {
    setExpandedService (expanded_service === service_id ? null : service_id);
  },
  return (
    <>;
      <Head>;
        <title > Comprehensive Pricing 2025 - Zion Tech Group</title>;
        <meta name="description" content="Discover our revolutionary micro SAAS services pricing for 2025. AI, quantum computing, cybersecurity, and emerging technology solutions." />;
        <meta name="keywords" content="micro SAAS pricing, AI services, quantum computing, cybersecurity, emerging technology, Zion Tech Group" />;
        <link rel="canonical" href="https://ziontechgroup.com / comprehensive - pricing - 2025" />;
      </Head>;
      <div className="min - h-screen bg - gradient - to - br from - slate - 950 via - slate - 900 to - slate - 950">;
        {/* Header */}
        <section className="py - 20 px - 6">;
          <div className="max - w-7xl mx - auto text - center">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 30 }}
              animate={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
            >;
              <h1 className="text - 5xl md:text - 6xl font - bold mb - 6 bg - gradient - to - r from - white to - blue - 100 bg - clip - text text - transparent">;
                Comprehensive Pricing 2025;
              </h1>;
              <p className="text - xl text - white / 70 max - w-3xl mx - auto mb - 8">;
                Revolutionary micro SAAS services that transform businesses with cutting - edge AI, quantum computing, and emerging technologies;
              </p>;
              {/* Billing Toggle */}
              <div className="flex items - center justify - center gap - 4 mb - 12">;
                <span className="text - white / 60">Monthly</span>;
                <button;
                  on_click={() => setBillingCycle (billing_cycle === 'monthly' ? 'yearly' : 'monthly')}
                  className={`relative w - 16 h - 8 rounded - full transition - all duration - 300 ${
                    billing_cycle === 'yearly' ? 'bg - blue - 600' : 'bg - white / 20';
                  }`}
                >;
                  <div className={`absolute top - 1 w - 6 h - 6 bg - white rounded - full transition - all duration - 300 ${
                    billing_cycle === 'yearly' ? 'translate - x-8' : 'translate - x-1';
                  }`} />;
                </button>;
                <span className="text - white / 60">Yearly</span>;
                {billing_cycle === 'yearly' && (
                  <span className="bg - green - 500 / 20 text - green - 400 px - 3 py - 1 rounded - full text - sm font - medium">;
                    Save 20%;
                  </span>)}
              </div>;
              {/* Stats */}
              <div className="grid grid - cols - 1 md:grid - cols - 4 gap - 6 max - w-4xl mx - auto">;
                <div className="bg - white / 5 rounded - 2xl p - 6 border border - white / 10">;
                  <div className="text - 3xl font - bold text - blue - 400">{all_services.length}+</div>;
                  <div className="text - white / 60">Services Available</div>;
                </div>;
                <div className="bg - white / 5 rounded - 2xl p - 6 border border - white / 10">;
                  <div className="text - 3xl font - bold text - green - 400">99.9%</div>;
                  <div className="text - white / 60">Uptime Guarantee</div>;
                </div>;
                <div className="bg - white / 5 rounded - 2xl p - 6 border border - white / 10">;
                  <div className="text - 3xl font - bold text - purple - 400">24 / 7</div>;
                  <div className="text - white / 60">Support Available</div>;
                </div>;
                <div className="bg - white / 5 rounded - 2xl p - 6 border border - white / 10">;
                  <div className="text - 3xl font - bold text - orange - 400">500%+</div>;
                  <div className="text - white / 60">Average ROI</div>;
                </div>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
        {/* Category Filter */}
        <section className="px - 6 mb - 16">;
          <div className="max - w-7xl mx - auto">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 20 }}
              animate={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex - wrap justify - center gap - 3";
            >;
              {categories.map ((category) => (
                <button;
                  key={category.id}
                  on_click={() => setSelectedCategory (category.id)}
                  className={`px - 6 py - 3 rounded - full font - medium transition - all duration - 300 flex items - center gap - 2 ${
                    selected_category === category.id;
                      ? 'bg - gradient - to - r from - blue - 600 to - cyan - 600 text - white shadow - lg';
                      : 'bg - white / 10 text - white / 70 hover:bg - white / 20 hover:text - white';
                  }`}
                >;
                  <span>{category.icon}</span>;
                  {category.name}
                </button>))}
            </motion.div>;
          </div>;
        </section>;
        {/* Services Grid */}
        <section className="px - 6 pb - 20">;
          <div className="max - w-7xl mx - auto">;
            <div className="grid grid - cols - 1 lg:grid - cols - 2 xl:grid - cols - 3 gap - 8">;
              <AnimatePresence mode="wait">;
                {filtered_services.map ((service, index) => (
                  <motion.div;
                    key={service.id}
                    initial={{ opacity: 0, coordinate_y: 30 }}
                    animate={{ opacity: 1, coordinate_y: 0 }}
                    exit={{ opacity: 0, coordinate_y: -30 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group relative overflow - hidden rounded - 2xl border border - white / 10 bg - gradient - to - br from - white / 5 to - white / 10 backdrop - blur - xl hover:border - cyan - 400 / 30 transition - all duration - 300";
                  >;
                    {/* Popular Badge */}
                    {service.popular && (
                      <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                      <p className="text-white/70 text-sm mb-4">{service.tagline}</p>
                      {/* Key Features */}
                      <div className="space-y-2 mb-6">
                        {service.features.slice(0, 4).map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-white/60">
                            <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                            <span className="line-clamp-2">{feature}</span>
                          </div>
                        ))}
                      </div>
                      {/* Service Stats */}
                      <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                        <div>
                          <div className="text-lg font-bold text-blue-400">{service.rating}</div>
                          <div className="text-xs text-white/60">Rating</div>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-green-400">{service.customers}+</div>
                          <div className="text-xs text-white/60">Customers</div>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-purple-400">{service.trialDays}d</div>
                          <div className="text-xs text-white/60">Trial</div>
                        </div>
                      </div>
                      {/* Expand/Collapse Button */}
                      <button
                        onClick={() => toggleServiceExpansion(service.id)}
                        className="w-full bg-white/10 text-white py-3 px-4 rounded-xl font-medium hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2 mb-4"
                      >
                        {expandedService === service.id ? 'Show Less' : 'View Details'}
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                          expandedService === service.id ? 'rotate-180' : ''
                        }`} />
                      </button>
                      <div className="absolute top - 4 right - 4 bg - gradient - to - r from - yellow - 400 to - orange - 500 text - black text - xs font - bold px - 3 py - 1 rounded - full flex items - center gap - 1 z - 10">;
                        <Star className="w - 3 h - 3" />;
                        Popular;
                      </div>)}
                    {/* Service Header */}
                    <div className="p - 6">;
                      <div className="flex items - start justify - between mb - 4">;
                        <div className="text - 4xl">{service.icon}</div>;
                        <div className="text - right">;
                          <div className="text - 3xl font - bold text - white">;
                            {billing_cycle === 'yearly' ? calculateYearlyPrice (service.price) : service.price}
                          </div>;
                          <div className="text - white / 60">;
                            {billing_cycle === 'yearly' ? '/year' : service.period}
                          </div>;
                        </div>;
                      </div>;
                      <h3 className="text - xl font - bold text - white mb - 2">{service.name}</h3>;
                      <p className="text - white / 70 text - sm mb - 4">{service.tagline}</p>;
                      {/* Key Features */}
                      <div className="space - y-2 mb - 6">;
                        {service.features.slice (0, 4).map ((feature, idx) => (
                          <div key={idx} className="flex items - center gap - 2 text - sm text - white / 60">;
                            <Check className="w - 4 h - 4 text - green - 400 flex - shrink - 0" />;
                            <span className="line - clamp - 2">{feature}</span>;
                          </div>))}
                      </div>;
                      {/* Service Stats */}
                      <div className="grid grid - cols - 3 gap - 4 mb - 6 text - center">;
                        <div>;
                          <div className="text - lg font - bold text - blue - 400">{service.rating}</div>;
                          <div className="text - xs text - white / 60">Rating</div>;
                        </div>;
                        <div>;
                          <div className="text - lg font - bold text - green - 400">{service.customers}+</div>;
                          <div className="text - xs text - white / 60">Customers</div>;
                        </div>;
                        <div>;
                          <div className="text - lg font - bold text - purple - 400">{service.trial_days}d</div>;
                          <div className="text - xs text - white / 60">Trial</div>;
                        </div>;
                      </div>;
                      {/* Expand / Collapse Button */}
                      <button;
                        on_click={() => toggleServiceExpansion (service.id)}
                        className="w - full bg - white / 10 text - white py - 3 px - 4 rounded - xl font - medium hover:bg - white / 20 transition - all duration - 300 flex items - center justify - center gap - 2 mb - 4";
                      >;
                        {expanded_service === service.id ? 'Show Less' : 'View Details'}
                        <ChevronDown className={`w - 4 h - 4 transition - transform duration - 300 ${
                          expanded_service === service.id ? 'rotate - 180' : '';
                        }`} />;
                      </button>;
                      {/* CTA Button */}
                      <a;
                        href={service.link}
                        target="_blank";
                        rel="noopener noreferrer";
                        className="w - full bg - gradient - to - r from - blue - 600 to - cyan - 600 text - white py - 3 px - 4 rounded - xl font - medium text - center block hover:from - blue - 700 hover:to - cyan - 700 transition - all duration - 300 flex items - center justify - center gap - 2";
                      >;
                        Get Started;
                        <ExternalLink className="w - 4 h - 4" />;
                      </a>;
                    </div>;
                    {/* Expanded Details */}
                    <AnimatePresence>;
                      {expanded_service === service.id && (
                        <motion.div;

  const _filteredServices = selectedCategory === 'all' 
    ? allServices 
    : allServices.filter(service => service.category === selectedCategory),

  const getCategoryIcon = (category: string) => {
    const categoryData = categories.find(cat => cat.id === category)
    return categoryData?.icon || '🚀'
  },

  const calculateYearlyPrice = (monthlyPrice: string) => {
    const price = parseFloat(monthlyPrice.replace('$', '').replace(, '')),
    return `$${(price * 12 * 0.8).toFixed(0)}`, // 20% discount for yearly
  },

  return (_<>
      <Head>
        <title>Comprehensive Pricing 2025 - Zion Tech Group</title>
        <meta name=&quot;description&quot; content=&quot;Discover our revolutionary micro SAAS services pricing for 2025. AI, quantum computing, cybersecurity, and emerging technology solutions.&quot; />
        <meta name=&quot;keywords&quot; content=&quot;micro SAAS pricing, AI services, quantum computing, cybersecurity, emerging technology, Zion Tech Group&quot; />
        <link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com/comprehensive-pricing-2025&quot; />
      </Head>

      <div className=&quot;min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950&quot;>
        {/* Header */}
        <section className=&quot;py-20 px-6&quot;>
          <div className=&quot;max-w-7xl mx-auto text-center&quot;>
            <motion.div
              initial={_{ opacity: 0, _y: 30}}
              animate={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
            >
              <h1 className=&quot;text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent&quot;>
                Comprehensive Pricing 2025
              </h1>
              <p className=&quot;text-xl text-white/70 max-w-3xl mx-auto mb-8&quot;>
                Revolutionary micro SAAS services that transform businesses with cutting-edge AI, quantum computing, and emerging technologies
              </p>
              
              {/* Billing Toggle */}
              <div className=&quot;flex items-center justify-center gap-4 mb-12&quot;>
                <span className=&quot;text-white/60&quot;>Monthly</span>
                <button
                  onClick={_() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                  className={_`relative w-16 h-8 rounded-full transition-all duration-300 ${
                    billingCycle === 'yearly' ? 'bg-blue-600' : 'bg-white/20'}`}
                >
                  <div className={_`absolute top-1 w-6 h-6 bg-white rounded-full transition-all duration-300 ${
                    billingCycle === 'yearly' ? 'translate-x-8' : 'translate-x-1'}`} />
                </button>
                <span className=&quot;text-white/60&quot;>Yearly</span>
                {billingCycle === 'yearly' && (
                  <span className=&quot;bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium&quot;>
                    Save 20%
                  </span>
                )}
              </div>

              {/* Stats */}
              <div className=&quot;grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto&quot;>
                <div className=&quot;bg-white/5 rounded-2xl p-6 border border-white/10&quot;>
                  <div className=&quot;text-3xl font-bold text-blue-400&quot;>{allServices.length}+</div>
                  <div className=&quot;text-white/60&quot;>Services Available</div>
                </div>
                <div className=&quot;bg-white/5 rounded-2xl p-6 border border-white/10&quot;>
                  <div className=&quot;text-3xl font-bold text-green-400&quot;>99.9%</div>
                  <div className=&quot;text-white/60&quot;>Uptime Guarantee</div>
                </div>
                <div className=&quot;bg-white/5 rounded-2xl p-6 border border-white/10&quot;>
                  <div className=&quot;text-3xl font-bold text-purple-400&quot;>24/7</div>
                  <div className=&quot;text-white/60&quot;>Support Available</div>
                </div>
                <div className=&quot;bg-white/5 rounded-2xl p-6 border border-white/10&quot;>
                  <div className=&quot;text-3xl font-bold text-orange-400&quot;>500%+</div>
                  <div className=&quot;text-white/60&quot;>Average ROI</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Category Filter */}
        <section className=&quot;px-6 mb-16&quot;>
          <div className=&quot;max-w-7xl mx-auto&quot;>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className=&quot;flex flex-wrap justify-center gap-3&quot;
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

        {/* Services Grid */}
        <section className=&quot;px-6 pb-20&quot;>
          <div className=&quot;max-w-7xl mx-auto&quot;>
            <div className=&quot;grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8&quot;>
              <AnimatePresence mode=&quot;wait&quot;>
                {filteredServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300&quot;
                  >
                    {/* Popular Badge */}
                    {service.popular && (
                      <div className=&quot;absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 z-10&quot;>
                        <Star className=&quot;w-3 h-3&quot; />
                        Popular
                      </div>
                    )}

                    {/* Service Header */}
                    <div className=&quot;p-6&quot;>
                      <div className=&quot;flex items-start justify-between mb-4&quot;>
                        <div className=&quot;text-4xl&quot;>{service.icon}</div>
                        <div className=&quot;text-right&quot;>
                          <div className=&quot;text-3xl font-bold text-white&quot;>
                            {billingCycle === 'yearly' ? calculateYearlyPrice(service.price) : service.price}
                          </div>
                          <div className=&quot;text-white/60&quot;>
                            {billingCycle === 'yearly' ? '/year' : service.period}
                          </div>
                        </div>
                      </div>

                      <h3 className=&quot;text-xl font-bold text-white mb-2&quot;>{service.name}</h3>
                      <p className=&quot;text-white/70 text-sm mb-4&quot;>{service.tagline}</p>

                      {/* Key Features */}
                      <div className=&quot;space-y-2 mb-6&quot;>
                        {service.features.slice(0, 4).map((feature, idx) => (
                          <div key={idx} className=&quot;flex items-center gap-2 text-sm text-white/60&quot;>
                            <Check className=&quot;w-4 h-4 text-green-400 flex-shrink-0&quot; />
                            <span className=&quot;line-clamp-2&quot;>{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* Service Stats */}
                      <div className=&quot;grid grid-cols-3 gap-4 mb-6 text-center&quot;>
                        <div>
                          <div className=&quot;text-lg font-bold text-blue-400&quot;>{service.rating}</div>
                          <div className=&quot;text-xs text-white/60&quot;>Rating</div>
                        </div>
                        <div>
                          <div className=&quot;text-lg font-bold text-green-400&quot;>{service.customers}+</div>
                          <div className=&quot;text-xs text-white/60&quot;>Customers</div>
                        </div>
                        <div>
                          <div className=&quot;text-lg font-bold text-purple-400&quot;>{service.trialDays}d</div>
                          <div className=&quot;text-xs text-white/60&quot;>Trial</div>
                        </div>
                      </div>

                      {_/* Expand/Collapse Button */}
                      <button
                        onClick={() => toggleServiceExpansion(service.id)}
                        className=&quot;w-full bg-white/10 text-white py-3 px-4 rounded-xl font-medium hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2 mb-4&quot;
                      >
                        {_expandedService === service.id ? 'Show Less' : 'View Details'}
                        <ChevronDown className={_`w-4 h-4 transition-transform duration-300 ${
                          expandedService === service.id ? 'rotate-180' : ''}`} />
                      </button>

                      {_/* CTA Button */}
                      <a
                        href={service.link}
                        target=&quot;_blank&quot;
                        rel=&quot;noopener noreferrer&quot;
                        className=&quot;w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 px-4 rounded-xl font-medium text-center block hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2&quot;
                      >
                        Get Started
                        <ExternalLink className=&quot;w-4 h-4&quot; />
                      </Link>
                    </div>

                    {_/* Expanded Details */}
                    <AnimatePresence>
                      {expandedService === service.id && (
                        <motion.div

                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
className="overflow - hidden border - t border - white / 10";
                        >;
                          <div className="p - 6 bg - white / 5">;
                            {/* Market Position */}
                            <div className="mb - 6">;
                              <h4 className="text - lg font - semibold text - white mb - 2">Market Position</h4>;
                              <p className="text - white / 70 text - sm">{service.market_position}</p>;
                            </div>;
                            {/* Technology Stack */}
                            <div className="mb - 6">;
                              <h4 className="text - lg font - semibold text - white mb - 2">Technology Stack</h4>;
                              <div className="flex flex - wrap gap - 2">;
                                {service.technology.map ((tech, idx) => (
                                  <span key={idx} className="bg - white / 10 text - white / 70 px - 3 py - 1 rounded - full text - xs">;
                                    {tech}
                                  </span>))}
                              </div>;
                            </div>;
                            {/* Use Cases */}
                            <div className="mb - 6">;
                              <h4 className="text - lg font - semibold text - white mb - 2">Use Cases</h4>;
                              <div className="space - y-1">;
                                {service.use_cases.map ((use_case, idx) => (
                                  <div key={idx} className="flex items - center gap - 2 text - sm text - white / 60">;
                                    <Target className="w - 3 h - 3 text - blue - 400" />;
                                    {use_case}
                                  </div>))}
                              </div>;
                            </div>;
                            {/* ROI and Benefits */}
                            <div className="mb - 6">;
                              <h4 className="text - lg font - semibold text - white mb - 2">ROI & Benefits</h4>;
                              <p className="text - white / 70 text - sm mb - 3">{service.roi}</p>;
                              <div className="grid grid - cols - 2 gap - 2">;
                                {service.benefits.map ((benefit, idx) => (
                                  <div key={idx} className="flex items - center gap - 2 text - sm text - white / 60">;
                                    <TrendingUp className="w - 3 h - 3 text - green - 400" />;
                                    {benefit}
                                  </div>))}
                              </div>;
                            </div>;
                            {/* Contact Information */}
                            <div className="bg - white / 5 rounded - xl p - 4">;
                              <h4 className="text - lg font - semibold text - white mb - 3">Contact Information</h4>;
                              <div className="space - y-2 text - sm text - white / 60">;
                                <div>📱 {service.contact_info.mobile}</div>;
                                <div>✉️ {service.contact_info.email}</div>;
                                <div>📍 {service.contact_info.address}</div>;
                                <div>🌐 {service.contact_info.website}</div>;
                              </div>;
                            </div>;
                          </div>;
                        </motion.div>)}
                    </AnimatePresence>;
                  </motion.div>))}
              </AnimatePresence>;
            </div>;
          </div>;
        </section>;
        {/* Contact CTA */}
        <section className="px - 6 pb - 20">;
          <div className="max - w-4xl mx - auto">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 30 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
}
              className="text - center";
            >;
              <div className="bg - gradient - to - r from - blue - 600 / 20 to - cyan - 600 / 20 rounded - 3xl p - 12 border border - blue - 500 / 30">;
                <h2 className="text - 3xl font - bold text - white mb - 4">;
                  Ready to Get Started?;
                </h2>;
                <p className="text - xl text - white / 70 mb - 8 max - w-2xl mx - auto">;
                  Contact our sales team to discuss your specific needs and get a customized quote for our revolutionary micro SAAS services.;
                </p>;
                <div className="flex flex - col sm: flex - row gap - 4 justify - center">;
                  <a;
                    href="mailto:kleber@ziontechgroup.com";
                    className="bg - gradient - to - r from - blue - 600 to - cyan - 600 text - white py - 4 px - 8 rounded - xl font - medium hover:from - blue - 700 hover:to - cyan - 700 transition - all duration - 300 flex items - center justify - center gap - 2";
                  >;
                    Contact Sales Team;
                    <ArrowRight className="w - 5 h - 5" />;
                  </a>;
                  <a;
                    href="tel:+13024640950";
                    className="bg - white / 10 text - white py - 4 px - 8 rounded - xl font - medium hover:bg - white / 20 transition - all duration - 300 flex items - center justify - center gap - 2";
                  >;
                    Call +1 302 464 0950;
                  </a>;
                </div>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
      </div>;
    </>);
                  <a
                    href=&quot;mailto:kleber@ziontechgroup.com&quot;
                    className=&quot;bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-4 px-8 rounded-xl font-medium hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2&quot;
                  >
                    Contact Sales Team
                    <ArrowRight className=&quot;w-5 h-5&quot; />
                  </Link>
                  <a
                    href=&quot;tel:+13024640950&quot;
                    className=&quot;bg-white/10 text-white py-4 px-8 rounded-xl font-medium hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2&quot;
                  >
                    Call +1 302 464 0950
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )

}