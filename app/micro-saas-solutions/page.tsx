'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Target, Rocket } from 'lucide-react';

const MicroSaasSolutionsPage: React.FC = () => {

  return (
>>>>>>> 738f440eeff51c77c81d522cf07739993de2622f
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group | AI-Powered Business Tools</title>
        <meta name="description" content="Discover 25+ cutting-edge micro SaaS solutions powered by AI. From analytics dashboards to cybersecurity platforms, transform your business with our intelligent tools. Starting from $99/month." />
        <meta name="keywords" content="micro SaaS, AI solutions, business intelligence, marketing automation, project management, analytics, cybersecurity, Zion Tech Group" />
        <meta property="og:title" content="Micro SaaS Solutions - Zion Tech Group" />
        <meta property="og:description" content="25+ AI-powered micro SaaS solutions to transform your business. Analytics, automation, security, and more." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/micro-saas-solutions" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Micro SaaS Solutions - Zion Tech Group" />
        <meta name="twitter:description" content="25+ AI-powered micro SaaS solutions to transform your business." />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20">
          {/* Animated Background */}
          <div className="absolute inset-0 opacity-20">
            <div className="w-full h-full bg-gradient-to-br from-purple-900/20 to-cyan-900/20 animated-grid"></div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 animate-pulse floating"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full opacity-20 animate-pulse floating" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-20 w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full opacity-20 animate-pulse floating" style={{animationDelay: '2s'}}></div>
          
          <div className="relative z-10 container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-6xl md:text-7xl font-bold mb-6 gradient-text neon-text">
                Micro SaaS Solutions
              </h1>
          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 animate-pulse floating"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full opacity-20 animate-pulse floating" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-20 w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full opacity-20 animate-pulse floating" style={{animationDelay: '2s'}}></div>
          
          <div className="relative z-10 container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-6xl md:text-7xl font-bold mb-6 gradient-text neon-text">
                Micro SaaS Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                25+ AI-Powered Business Tools to Transform Your Operations
>>>>>>> 738f440eeff51c77c81d522cf07739993de2622f
              </p>
              <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
                Discover our comprehensive suite of intelligent micro SaaS solutions designed to automate, 
                optimize, and accelerate your business growth with cutting-edge AI technology.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                <Link 
                  to="/contact" 
                  className="group bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 hover-lift hover-glow flex items-center gap-2 glow-effect"
                >
                  Get Started Today
                  <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  to="/demo" 
                  className="group border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 hover-lift hover-glow flex items-center gap-2 glass"
                >
                  Schedule Demo
                  <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">25+</div>
                  <div className="text-gray-300 text-sm md:text-base">AI Solutions</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">500+</div>
                  <div className="text-gray-300 text-sm md:text-base">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">99.9%</div>
                  <div className="text-gray-300 text-sm md:text-base">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-pink-400 mb-2">24/7</div>
                  <div className="text-gray-300 text-sm md:text-base">Support</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Filters and Sorting */}
        <section className="py-8 bg-slate-800/50 border-b border-slate-700">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Category Filters */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white'
                        : 'bg-slate-700 text-gray-300 hover:bg-slate-600 hover:text-white'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>

              {/* Sorting */}
              <div className="flex items-center gap-4">
                <span className="text-gray-300 text-sm">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-slate-700 text-white px-4 py-2 rounded-lg border border-slate-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="popularity">Popularity</option>
                  <option value="rating">Rating</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedProducts.map((product) => (
                <div
                  key={product.id}
                  className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover-lift hover-glow glass-dark relative overflow-hidden"
                >
                  {/* Badges */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2">
                    {product.isNew && (
                      <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                        NEW
                      </span>
                    )}
                    {product.isFeatured && (
                      <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                        FEATURED
                      </span>
                    )}
                    {product.discount && (
                      <span className="bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                        {product.discount}
                      </span>
                    )}
                  </div>

                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-r ${product.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform floating`}>
                    <product.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title and Description */}
                  <h3 className="text-2xl font-bold text-white mb-4 gradient-text group-hover:text-purple-400 transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <SparklesIcon className="w-4 h-4 text-purple-400" />
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {product.features.slice(0, 4).map((feature, index) => (
                        <li key={index} className="text-gray-300 text-sm flex items-center gap-2">
                          <CheckCircleIcon className="w-4 h-4 text-green-400 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                      {product.features.length > 4 && (
                        <li className="text-purple-400 text-sm font-medium">
                          +{product.features.length - 4} more features
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <BoltIcon className="w-4 h-4 text-yellow-400" />
                      Benefits
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {product.benefits.map((benefit, index) => (
                        <span
                          key={index}
                          className="bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-purple-300 text-xs px-3 py-1 rounded-full border border-purple-500/30"
                        >
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="mb-6 p-4 bg-slate-900/50 rounded-lg border border-slate-600">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl font-bold text-white">{product.price}</span>
                      {product.originalPrice && (
                        <span className="text-gray-400 line-through text-sm">{product.originalPrice}</span>
                      )}
                    </div>
                    <div className="text-gray-300 text-sm">
                      Setup fee: {product.setupFee}
                    </div>
                  </div>

                  {/* Rating and Reviews */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <StarIcon
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(product.rating)
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-400'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-gray-300 text-sm">
                        {product.rating} ({product.reviews} reviews)
                      </span>
                    </div>
                    <div className="text-gray-400 text-sm">
                      {product.popularity}% popular
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col gap-3">
                    <Link
                      to={product.href}
                      className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2 group-hover:scale-105"
                    >
                      Learn More
                      <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    
                    <div className="flex gap-2">
                      <a
                        href={product.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-slate-700 text-white py-2 px-4 rounded-lg font-medium hover:bg-slate-600 transition-colors flex items-center justify-center gap-2"
                      >
                        <EyeIcon className="w-4 h-4" />
                        Demo
                      </a>
                      <a
                        href={product.documentationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-slate-700 text-white py-2 px-4 rounded-lg font-medium hover:bg-slate-600 transition-colors flex items-center justify-center gap-2"
                      >
                        <DocumentTextIcon className="w-4 h-4" />
                        Docs
                      </a>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {product.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-gray-400 text-xs px-2 py-1 bg-slate-800 rounded border border-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900/30 to-cyan-900/30">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Choose from our comprehensive suite of AI-powered micro SaaS solutions 
                and start your digital transformation journey today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  Get Started Today
                  <ArrowRightIcon className="w-5 h-5" />
                </Link>
                <Link
                  to="/pricing"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  View Pricing
                  <CurrencyDollarIcon className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
import React, { Suspense } from 'react';
};

import React, { Suspense } from 'react';
export default MicroSaasSolutionsPage;
=======
export default MicroSaaSSolutionsPage;
>>>>>>> 738f440eeff51c77c81d522cf07739993de2622f
