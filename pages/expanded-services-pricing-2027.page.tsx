import type { NextPage } from 'next';
import Head from 'next/head';
import { useState, useMemo } from 'react';
import { ALL_EXPANDED_SERVICES_PRICING } from '../data/expandedServicesPricing2027';

const ExpandedServicesPricingGuide2027: NextPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSubcategory, setSelectedSubcategory] = useState('all');

  // Get unique categories and subcategories
  const categories = useMemo(() => {
    const cats = ['all', ...Array.from(new Set(ALL_EXPANDED_SERVICES_PRICING.map(s => s.category)))];
    return cats;
  }, []);

  const subcategories = useMemo(() => {
    if (selectedCategory === 'all') {
      const subcats = ['all', ...Array.from(new Set(ALL_EXPANDED_SERVICES_PRICING.map(s => s.subcategory)))];
      return subcats;
    }
    const subcats = ['all', ...Array.from(new Set(ALL_EXPANDED_SERVICES_PRICING.filter(s => s.category === selectedCategory).map(s => s.subcategory)))];
    return subcats;
  }, [selectedCategory]);

  // Filter services based on search and filters
  const filteredServices = useMemo(() => {
    return ALL_EXPANDED_SERVICES_PRICING.filter(service => {
      const matchesSearch = service.serviceName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.subcategory.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      const matchesSubcategory = selectedSubcategory === 'all' || service.subcategory === selectedSubcategory;
      
      return matchesSearch && matchesCategory && matchesSubcategory;
    });
  }, [searchTerm, selectedCategory, selectedSubcategory]);

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedCategory('all');
    setSelectedSubcategory('all');
  };

  const getMarketPositionColor = (position: string) => {
    switch (position) {
      case 'leader': return 'bg-green-600';
      case 'challenger': return 'bg-blue-600';
      case 'niche': return 'bg-purple-600';
      case 'emerging': return 'bg-yellow-600';
      default: return 'bg-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      <Head>
        <title>Expanded Services Pricing Guide 2027 - Zion Tech Group</title>
        <meta name="description" content="Comprehensive pricing guide for our 2027 expanded innovative services. Compare pricing tiers, ROI analysis, and market positioning for cybersecurity, data analytics, cloud solutions, IoT, fintech, and healthcare technology services." />
        <meta name="keywords" content="Zion Tech Group, pricing guide 2027, service pricing, ROI analysis, market comparison, cybersecurity pricing, data analytics pricing, cloud solutions pricing" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ziontechgroup.com/expanded-services-pricing-2027" />
      </Head>

      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center text-white mb-16">
          <h1 className="text-5xl font-bold mb-6">
            Expanded Services Pricing Guide 2027
          </h1>
          <p className="text-xl mb-8 max-w-4xl mx-auto">
            Comprehensive pricing information, ROI analysis, and market positioning for our cutting-edge 
            technology services. Compare pricing tiers, understand value propositions, and make informed decisions.
          </p>
          
          {/* Contact Information */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">Contact Zion Tech Group</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <strong>Phone:</strong><br />
                <a href="tel:+13024640950" className="text-blue-300 hover:text-blue-200">+1 302 464 0950</a>
              </div>
              <div>
                <strong>Email:</strong><br />
                <a href="mailto:kleber@ziontechgroup.com" className="text-blue-300 hover:text-blue-200">kleber@ziontechgroup.com</a>
              </div>
              <div>
                <strong>Address:</strong><br />
                364 E Main St STE 1008<br />
                Middletown DE 19709
              </div>
            </div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            <input
              type="text"
              placeholder="Search services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            
            <select
              value={selectedCategory}
              onChange={(e) => {
                setSelectedCategory(e.target.value);
                setSelectedSubcategory('all');
              }}
              className="px-4 py-2 rounded-lg bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              {categories.map(cat => (
                <option key={cat} value={cat} className="bg-gray-800 text-white">
                  {cat === 'all' ? 'All Categories' : cat}
                </option>
              ))}
            </select>
            
            <select
              value={selectedSubcategory}
              onChange={(e) => setSelectedSubcategory(e.target.value)}
              className="px-4 py-2 rounded-lg bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              {subcategories.map(subcat => (
                <option key={subcat} value={subcat} className="bg-gray-800 text-white">
                  {subcat === 'all' ? 'All Subcategories' : subcat}
                </option>
              ))}
            </select>
            
            <button
              onClick={resetFilters}
              className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white transition-colors"
            >
              Reset Filters
            </button>
          </div>
          
          <div className="text-white">
            <span className="font-semibold">{filteredServices.length}</span> services found
          </div>
        </div>

        {/* Services Pricing Grid */}
        <div className="grid gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.serviceId}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20"
            >
              {/* Service Header */}
              <div className="mb-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">{service.serviceName}</h2>
                    <div className="flex items-center space-x-4 mb-2">
                      <span className="inline-block bg-blue-600 text-white text-sm px-3 py-1 rounded">
                        {service.category}
                      </span>
                      <span className="inline-block bg-purple-600 text-white text-sm px-3 py-1 rounded">
                        {service.subcategory}
                      </span>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold text-white ${getMarketPositionColor(service.marketComparison.marketPosition)}`}>
                      {service.marketComparison.marketPosition.toUpperCase()}
                    </span>
                  </div>
                </div>
              </div>

              {/* Pricing Tiers */}
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
                {Object.entries(service.pricingTiers).map(([tier, details]) => (
                  <div key={tier} className="bg-white/5 rounded-lg p-6 border border-white/10">
                    <h3 className="text-xl font-bold text-white mb-4 capitalize">{tier}</h3>
                    
                    <div className="mb-4">
                      <div className="text-3xl font-bold text-white">
                        {tier === 'custom' ? details.priceRange : `$${details.price}`}
                      </div>
                      <div className="text-white/70 text-sm">
                        {details.billingCycle}
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-white font-semibold mb-2">Features:</h4>
                      <ul className="text-white/70 text-sm space-y-1">
                        {details.features.slice(0, 3).map((feature, index) => (
                          <li key={index} className="flex items-center">
                            <span className="text-green-400 mr-2">✓</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-white font-semibold mb-2">Best For:</h4>
                      <ul className="text-white/70 text-sm space-y-1">
                        {details.bestFor.slice(0, 2).map((item, index) => (
                          <li key={index} className="flex items-center">
                            <span className="text-blue-400 mr-2">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="text-center">
                      <button className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                        Get Started
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Market Comparison */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div className="bg-white/5 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Market Analysis</h3>
                  <div className="space-y-3">
                    <div>
                      <span className="text-white/70">Competitors:</span>
                      <div className="text-white mt-1">
                        {service.marketComparison.competitors.join(', ')}
                      </div>
                    </div>
                    <div>
                      <span className="text-white/70">Market Position:</span>
                      <div className="text-white mt-1">
                        {service.marketComparison.marketPosition}
                      </div>
                    </div>
                    <div>
                      <span className="text-white/70">Price Advantage:</span>
                      <div className="text-white mt-1">
                        {service.marketComparison.priceAdvantage}
                      </div>
                    </div>
                    <div>
                      <span className="text-white/70">Value Proposition:</span>
                      <div className="text-white mt-1">
                        {service.marketComparison.valueProposition}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-white mb-4">ROI Analysis</h3>
                  <div className="space-y-3">
                    <div>
                      <span className="text-white/70">Payback Period:</span>
                      <div className="text-white mt-1">
                        {service.roiAnalysis.paybackPeriod}
                      </div>
                    </div>
                    <div>
                      <span className="text-white/70">Annual ROI:</span>
                      <div className="text-white mt-1">
                        {service.roiAnalysis.annualROI}
                      </div>
                    </div>
                    <div>
                      <span className="text-white/70">Cost Savings:</span>
                      <div className="text-white mt-1">
                        {service.roiAnalysis.costSavings.slice(0, 2).join(', ')}
                      </div>
                    </div>
                    <div>
                      <span className="text-white/70">Revenue Impact:</span>
                      <div className="text-white mt-1">
                        {service.roiAnalysis.revenueImpact.slice(0, 2).join(', ')}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Implementation Details */}
              <div className="bg-white/5 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-4">Implementation & Support</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div>
                    <span className="text-white/70 text-sm">Setup Time</span>
                    <div className="text-white font-semibold">{service.implementation.setupTime}</div>
                  </div>
                  <div>
                    <span className="text-white/70 text-sm">Training Required</span>
                    <div className="text-white font-semibold">{service.implementation.trainingRequired}</div>
                  </div>
                  <div>
                    <span className="text-white/70 text-sm">Integration Complexity</span>
                    <div className="text-white font-semibold capitalize">{service.implementation.integrationComplexity}</div>
                  </div>
                  <div>
                    <span className="text-white/70 text-sm">Support Included</span>
                    <div className="text-white font-semibold">{service.implementation.supportIncluded}</div>
                  </div>
                </div>
                
                <div className="mt-4">
                  <span className="text-white/70 text-sm">Customization Options:</span>
                  <div className="text-white mt-1">
                    {service.implementation.customizationOptions.join(', ')}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-white/80 mb-6">
              Our comprehensive pricing structure is designed to provide maximum value at competitive rates. 
              Contact us today to discuss your specific needs and get a customized quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
              >
                Get Custom Quote
              </a>
              <a
                href="/expanded-services-2027"
                className="px-8 py-3 bg-white/20 hover:bg-white/30 text-white rounded-lg font-semibold transition-colors"
              >
                View All Services
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ExpandedServicesPricingGuide2027;