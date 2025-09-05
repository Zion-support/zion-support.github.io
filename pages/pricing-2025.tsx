import React, { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Check, Star, Users, Zap, Shield, Globe, 
  TrendingUp, Award, Clock, CheckCircle, ExternalLink
} from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';
import { innovative2025MicroSaasExpansionV3 } from '../data/2025-innovative-micro-saas-expansion-v3';

export default function Pricing2025() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  const categories = [
    { id: 'all', name: 'All Services', icon: '🚀' },
    { id: 'AI & Analytics', name: 'AI & Analytics', icon: '🧠' },
    { id: 'Cybersecurity & Quantum', name: 'Cybersecurity & Quantum', icon: '🔒' },
    { id: 'Edge Computing & IoT', name: 'Edge Computing & IoT', icon: '🌐' },
    { id: 'Space Technology & Innovation', name: 'Space Technology & Innovation', icon: '🚀' },
    { id: 'Neural Technology & BCI', name: 'Neural Technology & BCI', icon: '🧬' }
  ];

  const filteredServices = innovative2025MicroSaasExpansionV3.filter(service => 
    selectedCategory === 'all' || service.category.includes(selectedCategory)
  );

  const getAnnualPrice = (monthlyPrice: string) => {
    const price = parseFloat(monthlyPrice.replace('$', ''));
    const annualPrice = price * 12 * 0.8; // 20% discount for annual
    return `$${Math.round(annualPrice)}`;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className=&quot;min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden&quot;>
      <Head>
        <title>2025 Pricing & Services — Zion Tech Group</title>
        <meta name=&quot;description&quot; content=&quot;Explore our comprehensive pricing for innovative micro SAAS services, AI solutions, quantum technologies, and cutting-edge IT services. Transparent pricing with flexible plans.&quot; />
        <meta property=&quot;og:title&quot; content=&quot;2025 Pricing & Services — Zion Tech Group&quot; />
        <meta property=&quot;og:description&quot; content=&quot;Explore our comprehensive pricing for innovative micro SAAS services, AI solutions, quantum technologies, and cutting-edge IT services.&quot; />
        <meta name=&quot;keywords&quot; content=&quot;pricing, micro SAAS, AI services, quantum computing, cybersecurity, edge computing, space technology, neural interfaces, Zion Tech Group&quot; />
        <link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com/pricing-2025&quot; />
      
        <script type=&quot;application/ld+json&quot;>{&quot;@context&quot;:&quot;https://schema.org&quot;,&quot;@type&quot;:&quot;WebPage&quot;,&quot;headline&quot;:&quot;2025 Pricing & Services — Zion Tech Group&quot;,&quot;url&quot;:&quot;https://ziontechgroup.com/pricing-2025&quot;,&quot;isPartOf&quot;:{&quot;@type&quot;:&quot;WebSite&quot;,&quot;name&quot;:&quot;Zion Tech Group&quot;,&quot;url&quot;:&quot;https://ziontechgroup.com&quot;}}</script></Head>

      <EnhancedNavigation />

      {/* Hero Section */}
      <section className=&quot;relative py-20 px-6&quot;>
        <div className=&quot;max-w-7xl mx-auto text-center&quot;>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className=&quot;text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent&quot;>
              2025 Pricing & Services
            </h1>
            <p className=&quot;text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-8&quot;>
              Transparent pricing for our comprehensive collection of innovative micro SAAS services, 
              AI solutions, quantum technologies, and revolutionary IT services.
            </p>
            
            {/* Billing Toggle */}
            <div className=&quot;flex items-center justify-center gap-4 mb-12&quot;>
              <span className={`text-lg ${billingCycle === 'monthly' ? 'text-white' : 'text-white/60'}`}>
                Monthly
              </span>
              <button
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
                className={`relative w-16 h-8 rounded-full transition-all duration-300 ${
                  billingCycle === 'annual' ? 'bg-cyan-500' : 'bg-white/20'
                }`}
              >
                <div className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-all duration-300 ${
                  billingCycle === 'annual' ? 'right-1' : 'left-1'
                }`} />
              </button>
              <span className={`text-lg ${billingCycle === 'annual' ? 'text-white' : 'text-white/60'}`}>
                Annual
                <span className=&quot;ml-2 px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full&quot;>
                  Save 20%
                </span>
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className=&quot;py-8 px-6 bg-gradient-to-r from-white/5 to-white/10&quot;>
        <div className=&quot;max-w-7xl mx-auto&quot;>
          <div className=&quot;flex flex-wrap justify-center gap-4&quot;>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg text-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                    : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
                }`}
              >
                <span>{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className=&quot;py-16 px-6&quot;>
        <div className=&quot;max-w-7xl mx-auto&quot;>
          <motion.div
            variants={containerVariants}
            initial=&quot;hidden&quot;
            animate=&quot;visible&quot;
            className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;
          >
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className={`group relative p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl ${
                  service.popular ? 'ring-2 ring-cyan-400/50' : ''
                }`}
              >
                {/* Popular Badge */}
                {service.popular && (
                  <div className=&quot;absolute -top-4 left-1/2 transform -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-sm font-bold rounded-full&quot;>
                    MOST POPULAR
                  </div>
                )}

                {/* Service Header */}
                <div className=&quot;text-center mb-8&quot;>
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} p-5 mx-auto mb-4 flex items-center justify-center text-3xl`}>
                    {service.icon}
                  </div>
                  <h3 className=&quot;text-2xl font-bold text-white mb-2&quot;>{service.name}</h3>
                  <p className=&quot;text-white/70 text-sm leading-relaxed&quot;>{service.tagline}</p>
                </div>

                {/* Pricing */}
                <div className=&quot;text-center mb-8&quot;>
                  <div className=&quot;mb-2&quot;>
                    <span className=&quot;text-4xl font-bold text-cyan-400&quot;>
                      {billingCycle === 'monthly' ? service.price : getAnnualPrice(service.price)}
                    </span>
                    <span className=&quot;text-white/60 ml-2&quot;>
                      {billingCycle === 'monthly' ? service.period : '/year'}
                    </span>
                  </div>
                  {billingCycle === 'annual' && (
                    <p className=&quot;text-green-400 text-sm&quot;>
                      Save ${Math.round(parseFloat(service.price.replace('$', '')) * 12 * 0.2)} annually
                    </p>
                  )}
                </div>

                {/* Rating */}
                <div className=&quot;flex items-center justify-center gap-2 mb-6&quot;>
                  <div className=&quot;flex items-center gap-1&quot;>
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-white/20'
                        }`}
                      />
                    ))}
                  </div>
                  <span className=&quot;text-white/60 text-sm&quot;>
                    {service.rating} ({service.reviews} reviews)
                  </span>
                </div>

                {/* Features */}
                <div className=&quot;mb-8&quot;>
                  <h4 className=&quot;text-white font-semibold mb-4 text-center&quot;>Key Features:</h4>
                  <div className=&quot;space-y-3&quot;>
                    {service.features.slice(0, 5).map((feature, idx) => (
                      <div key={idx} className=&quot;flex items-center gap-3 text-sm text-white/80&quot;>
                        <CheckCircle className=&quot;w-4 h-4 text-cyan-400 flex-shrink-0&quot; />
                        <span>{feature}</span>
                      </div>
                    ))}
                    {service.features.length > 5 && (
                      <div className=&quot;text-cyan-400 text-sm font-medium text-center&quot;>
                        +{service.features.length - 5} more features
                      </div>
                    )}
                  </div>
                </div>

                {/* Market Info */}
                <div className=&quot;grid grid-cols-2 gap-4 mb-6 text-sm&quot;>
                  <div className=&quot;text-center p-3 bg-white/5 rounded-lg&quot;>
                    <div className=&quot;text-white/60 mb-1&quot;>Market Size</div>
                    <div className=&quot;text-white font-medium&quot;>{service.marketSize}</div>
                  </div>
                  <div className=&quot;text-center p-3 bg-white/5 rounded-lg&quot;>
                    <div className=&quot;text-white/60 mb-1&quot;>Growth Rate</div>
                    <div className=&quot;text-white font-medium&quot;>{service.growthRate}</div>
                  </div>
                </div>

                {/* ROI and Setup */}
                <div className=&quot;mb-8 p-4 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg border border-cyan-400/20&quot;>
                  <div className=&quot;text-cyan-400 font-semibold mb-2 text-center&quot;>🚀 Expected ROI:</div>
                  <p className=&quot;text-white/80 text-sm text-center&quot;>{service.roi}</p>
                  <div className=&quot;mt-3 grid grid-cols-2 gap-4 text-center text-sm&quot;>
                    <div>
                      <div className=&quot;text-white/60&quot;>Setup Time</div>
                      <div className=&quot;text-white font-medium&quot;>{service.setupTime}</div>
                    </div>
                    <div>
                      <div className=&quot;text-white/60&quot;>Trial Period</div>
                      <div className=&quot;text-white font-medium&quot;>{service.trialDays} days</div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className=&quot;space-y-3&quot;>
                  <a
                    href={service.link}
                    target=&quot;_blank&quot;
                    rel=&quot;noopener noreferrer&quot;
                    className=&quot;w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-lg font-semibold text-white text-center transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2&quot;
                  >
                    Get Started
                    <ExternalLink className=&quot;w-4 h-4&quot; />
                  </Link>
                  <a
                    href={`mailto:kleber@ziontechgroup.com?subject=Inquiry about ${service.name}&body=Hi, I'm interested in learning more about your ${service.name} service. Please provide more information about pricing, features, and implementation.`}
                    className=&quot;w-full px-6 py-3 border border-white/20 hover:border-cyan-400/30 rounded-lg font-semibold text-white text-center transition-all duration-300 hover:bg-white/5&quot;
                  >
                    Contact Sales
                  </Link>
                </div>

                {/* Contact Info */}
                <div className=&quot;mt-6 pt-4 border-t border-white/10 text-center&quot;>
                  <div className=&quot;text-white/60 text-sm mb-2&quot;>Need help? Contact us:</div>
                  <div className=&quot;flex items-center justify-center gap-4 text-sm&quot;>
                    <a href={`tel:${service.contactInfo.mobile}`} className=&quot;text-cyan-400 hover:text-cyan-300&quot;>
                      📞 {service.contactInfo.mobile}
                    </Link>
                    <a href={`mailto:${service.contactInfo.email}`} className=&quot;text-cyan-400 hover:text-cyan-300&quot;>
                      ✉️ {service.contactInfo.email}
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* No Results */}
          {filteredServices.length === 0 && (
            <div className=&quot;text-center py-20&quot;>
              <div className=&quot;text-6xl mb-4&quot;>🔍</div>
              <h3 className=&quot;text-2xl font-bold text-white mb-2&quot;>No services found</h3>
              <p className=&quot;text-white/70 mb-6&quot;>Try selecting a different category</p>
              <button
                onClick={() => setSelectedCategory('all')}
                className=&quot;px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300&quot;
              >
                View All Services
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Enterprise Solutions */}
      <section className=&quot;py-20 px-6 bg-gradient-to-r from-white/5 to-white/10&quot;>
        <div className=&quot;max-w-4xl mx-auto text-center&quot;>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className=&quot;text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent&quot;>
              Need Enterprise Solutions?
            </h2>
            <p className=&quot;text-xl text-white/70 mb-8 max-w-2xl mx-auto&quot;>
              We offer custom enterprise solutions, volume discounts, and dedicated support 
              for organizations requiring multiple services or specialized implementations.
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
              <a
                href=&quot;mailto:kleber@ziontechgroup.com?subject=Enterprise Solutions Inquiry&body=Hi, I'm interested in enterprise solutions and volume pricing. Please provide more information about your enterprise offerings, custom implementations, and dedicated support options.&quot;
                className=&quot;px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2&quot;
              >
                Contact Enterprise Sales
                <ArrowRight className=&quot;w-5 h-5&quot; />
              </Link>
              <a
                href=&quot;tel:+13024640950&quot;
                className=&quot;px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm bg-white/5 hover:bg-white/10&quot;
              >
                Call Us Now
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className=&quot;py-20 px-6&quot;>
        <div className=&quot;max-w-4xl mx-auto&quot;>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className=&quot;text-center mb-16&quot;
          >
            <h2 className=&quot;text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent&quot;>
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className=&quot;space-y-6&quot;>
            {[
              {
                question: &quot;What payment methods do you accept?&quot;,
                answer: &quot;We accept all major credit cards, PayPal, and bank transfers for annual plans. Enterprise customers can arrange custom payment terms.&quot;
              },
              {
                question: &quot;Do you offer free trials?&quot;,
                answer: &quot;Yes! All our services come with free trial periods ranging from 14 to 60 days, depending on the service complexity.&quot;
              },
              {
                question: &quot;Can I cancel my subscription anytime?&quot;,
                answer: &quot;Absolutely. You can cancel your subscription at any time with no cancellation fees. Your service will remain active until the end of your billing period.&quot;
              },
              {
                question: &quot;Do you offer volume discounts?&quot;,
                answer: &quot;Yes, we offer volume discounts for organizations using multiple services. Contact our sales team for custom pricing and enterprise solutions.&quot;
              },
              {
                question: &quot;What kind of support do you provide?&quot;,
                answer: &quot;We provide comprehensive support including documentation, tutorials, email support, and priority support for enterprise customers. Some services include dedicated account managers.&quot;
              },
              {
                question: &quot;Can I upgrade or downgrade my plan?&quot;,
                answer: &quot;Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing adjustments.&quot;
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className=&quot;p-6 rounded-xl border border-white/10 bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-xl&quot;
              >
                <h3 className=&quot;text-xl font-bold text-white mb-3&quot;>{faq.question}</h3>
                <p className=&quot;text-white/70 leading-relaxed&quot;>{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <EnhancedFooter />
    </div>
  );
}