import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { advancedMicroSaasInnovations2025 } from '../../data/2025-advanced-micro-saas-innovations';
import { specializedIndustrySolutions2025 } from '../../data/2025-specialized-industry-solutions';

const ComprehensivePricing2025: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  const allServices = [...advancedMicroSaasInnovations2025, ...specializedIndustrySolutions2025];
  
  const categories = ['all', ...Array.from(new Set(allServices.map(service => service.category)))];

  const getAnnualDiscount = (monthlyPrice: string) => {
    const price = parseInt(monthlyPrice.replace('$', ''));
    return Math.round(price * 0.2); // 20% annual discount
  };

  const getAnnualPrice = (monthlyPrice: string) => {
    const price = parseInt(monthlyPrice.replace('$', ''));
    return Math.round(price * 12 * 0.8); // 12 months with 20% discount
  };

  const filteredServices = allServices.filter(service => 
    selectedCategory === 'all' || service.category === selectedCategory
  );

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Business Intelligence & Analytics': 'from-blue-600 to-indigo-700',
      'Cybersecurity & Communication': 'from-purple-600 to-violet-700',
      'Customer Success & Retention': 'from-green-600 to-emerald-700',
      'Supply Chain & Logistics': 'from-orange-600 to-red-700',
      'Legal Technology': 'from-slate-600 to-gray-700',
      'Quantum Computing & AI': 'from-indigo-600 to-purple-700',
      'Content Marketing & SEO': 'from-teal-600 to-cyan-700',
      'Cybersecurity': 'from-red-600 to-pink-700',
      'Sustainability & ESG': 'from-emerald-600 to-green-700',
      'Neuroscience & Performance': 'from-violet-600 to-purple-700',
      'Healthcare Technology': 'from-blue-600 to-cyan-700',
      'Financial Technology': 'from-green-600 to-emerald-700',
      'Manufacturing Technology': 'from-orange-600 to-red-700',
      'Real Estate Technology': 'from-blue-600 to-indigo-700',
      'Educational Technology': 'from-purple-600 to-violet-700',
      'Logistics & Transportation': 'from-teal-600 to-cyan-700',
      'Retail Technology': 'from-pink-600 to-rose-700',
      'Construction Technology': 'from-amber-600 to-orange-700',
      'Hospitality Technology': 'from-indigo-600 to-purple-700'
    };
    return colors[category] || 'from-gray-600 to-slate-700';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Comprehensive
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              {" "}Pricing 2025
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Transparent, competitive pricing for our cutting-edge micro SAAS solutions. 
            Choose the plan that fits your business needs and budget.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className={`text-lg ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
              className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              style={{ backgroundColor: billingCycle === 'annual' ? '#3b82f6' : '#6b7280' }}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  billingCycle === 'annual' ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-lg ${billingCycle === 'annual' ? 'text-white' : 'text-gray-400'}`}>
              Annual
              <span className="ml-2 text-sm text-green-400">Save 20%</span>
            </span>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {category === 'all' ? 'All Categories' : category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105 group"
              >
                {/* Service Header */}
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{service.tagline}</p>
                  
                  {/* Pricing */}
                  <div className="mb-4">
                    {billingCycle === 'monthly' ? (
                      <div>
                        <span className="text-3xl font-bold text-blue-400">{service.price}</span>
                        <span className="text-gray-400">{service.period}</span>
                      </div>
                    ) : (
                      <div>
                        <span className="text-3xl font-bold text-blue-400">${getAnnualPrice(service.price)}</span>
                        <span className="text-gray-400">/year</span>
                        <div className="text-sm text-green-400 mt-1">
                          Save ${getAnnualDiscount(service.price)}/month
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Category Badge */}
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(service.category)} text-white`}>
                    {service.category}
                  </span>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-blue-400 mb-3">Key Features:</h4>
                  <div className="space-y-2">
                    {service.features.slice(0, 6).map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <svg className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>{feature}</span>
                      </div>
                    ))}
                    {service.features.length > 6 && (
                      <div className="text-xs text-gray-500 text-center mt-2">
                        +{service.features.length - 6} more features
                      </div>
                    )}
                  </div>
                </div>

                {/* Market Info */}
                <div className="mb-6 space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Market Size:</span>
                    <span className="text-white">{service.marketSize}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Growth Rate:</span>
                    <span className="text-white">{service.growthRate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">ROI:</span>
                    <span className="text-white">{service.roi}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <Link
                    to={service.link}
                    className="w-full inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 text-sm"
                  >
                    Get Started
                  </Link>
                  <Link
                    to="/contact"
                    className="w-full inline-flex items-center justify-center px-4 py-2 bg-white/10 text-white font-medium rounded-lg hover:bg-white/20 transition-all duration-300 text-sm border border-white/20"
                  >
                    Contact Sales
                  </Link>
                </div>

                {/* Trial Info */}
                <div className="mt-4 text-center">
                  <span className="text-xs text-gray-400">
                    {service.trialDays}-day free trial • Setup in {service.setupTime}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-16">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-white mb-2">No services found</h3>
              <p className="text-gray-300">Try selecting a different category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Enterprise Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/50 to-pink-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Need Enterprise Solutions?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            We offer custom enterprise packages with dedicated support, custom integrations, 
            and white-label solutions for large organizations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
            >
              Contact Enterprise Sales
            </Link>
            <Link
              to="/request-quote"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-300"
            >
              Request Custom Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing FAQ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-3">What's included in the free trial?</h3>
              <p className="text-gray-300">All our services include a free trial period where you get full access to all features. No credit card required to start your trial.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-3">Can I cancel anytime?</h3>
              <p className="text-gray-300">Yes, you can cancel your subscription at any time. There are no long-term contracts or cancellation fees.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-3">Do you offer volume discounts?</h3>
              <p className="text-gray-300">Yes, we offer volume discounts for organizations using multiple services or with large user bases. Contact our sales team for custom pricing.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-3">What support is included?</h3>
              <p className="text-gray-300">All plans include email support, documentation, and video tutorials. Premium plans include priority support and dedicated account management.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/50 to-cyan-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Choose the perfect plan for your business and start transforming your operations today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/advanced-services-showcase-2025"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
            >
              View All Services
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
            >
              Contact Sales Team
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gradient-to-r from-slate-800/50 to-slate-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div>
              <div className="text-blue-400 font-semibold mb-2">Phone</div>
              <div className="text-gray-300">+1 302 464 0950</div>
            </div>
            <div>
              <div className="text-blue-400 font-semibold mb-2">Email</div>
              <div className="text-gray-300">kleber@ziontechgroup.com</div>
            </div>
            <div>
              <div className="text-blue-400 font-semibold mb-2">Address</div>
              <div className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComprehensivePricing2025;