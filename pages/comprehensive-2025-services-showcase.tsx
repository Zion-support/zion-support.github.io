import React, { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { motion, AnimatePresence } from 'framer-motion';
import {
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';
import EnhancedFooter from '../components/EnhancedFooter';
import { innovative2025MicroSaasExpansionV3 } from '../data/2025-innovative-micro-saas-expansion-v3';

import React, { useState, useEffect } from 'react',;
import Head from 'next/head',;
import { motion, AnimatePresence } from 'framer-motion',;
import { 
  ArrowRight, CheckCircle, ExternalLink,
  Search, Grid, List, Star as StarIcon
} from 'lucide-react';

import { advancedAIAutomationServices2025 } from '../data/2025-advanced-ai-automation-services';
import { innovative2025ITInfrastructureServices } from '../data/2025-innovative-it-infrastructure-services';
import { innovativeMicroSaasSolutions2025 } from '../data/2025-innovative-micro-saas-solutions';
import { cuttingEdgeAIServices2025 } from '../data/2025-cutting-edge-ai-services';

import { realMicroSaasServices } from '../data/real-micro-saas-services';
import { innovativeAIServices } from '../data/innovative-ai-services';
import { enterpriseITServices } from '../data/enterprise-it-services';




export default function Comprehensive2025ServicesShowcase() {
  const categories = [
    { id: 'all', name: 'All Services', icon: <Globe className="w-5 h-5" />, count: allServices.length },
    { id: 'ai', name: 'AI & Machine Learning', icon: <Brain className="w-5 h-5" />, count: allServices.filter(s => s.category.includes('AI') || s.category.includes('Machine Learning')).length },
    { id: 'micro-saas', name: 'Micro SAAS', icon: <Rocket className="w-5 h-5" />, count: allServices.filter(s => s.category.includes('SAAS') || s.category.includes('Business')).length },
    { id: 'it', name: 'IT & Infrastructure', icon: <Cpu className="w-5 h-5" />, count: allServices.filter(s => s.category.includes('IT') || s.category.includes('Infrastructure')).length },
    { id: 'cloud', name: 'Cloud & DevOps', icon: <Cloud className="w-5 h-5" />, count: allServices.filter(s => s.category.includes('Cloud') || s.category.includes('DevOps')).length },
    { id: 'security', name: 'Security & Compliance', icon: <Shield className="w-5 h-5" />, count: allServices.filter(s => s.category.includes('Security') || s.category.includes('Compliance')).length }
  ];

  // Filter and sort services
  const filteredServices = allServices
    .filter(service => {
      const matchesCategory = selectedCategory === 'all' || 
        service.category.toLowerCase().includes(selectedCategory) ||
        service.name.toLowerCase().includes(selectedCategory);
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'popularity':

import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import {;
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';
import EnhancedFooter from '../components/EnhancedFooter';
import { innovative2025MicroSaasExpansionV3 } from '../data/2025-innovative-micro-saas-expansion-v3';
export default function Comprehensive2025ServicesShowcase(req, res) {
  };



  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <SEO 
        title="Comprehensive 2025 Services Showcase - Zion Tech Group"
        description="Explore our comprehensive portfolio of innovative AI automation, IT infrastructure, micro SAAS solutions, and cutting-edge AI services. Transform your business with Zion Tech Group."
        keywords={["AI automation", "IT infrastructure", "micro SAAS", "AI services", "business solutions", "technology services"]}
        image="https://ziontechgroup.com/og-image-2025-services.jpg"
      />

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <motion.div
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              2025 Services Showcase
            </h1>




            </p>
            
            {/* Contact Information */}
            <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/20 max-w-2xl mx-auto">
              <h3 className="text-lg font-semibold text-cyan-400 mb-4">Contact Zion Tech Group</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <Globe className="w-4 h-4 text-cyan-400" />
                  <span>Website: <a href="https://ziontechgroup.com" className="text-cyan-400 hover:underline">ziontechgroup.com</a></span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-purple-400" />
                  <span>Mobile: <a href="tel:+13024640950" className="text-purple-400 hover:underline">+1 302 464 0950</a></span>
                </div>
                <div className="flex items-center space-x-2">
                  <Zap className="w-4 h-4 text-pink-400" />
                  <span>Email: <a href="mailto:kleber@ziontechgroup.com" className="text-pink-400 hover:underline">kleber@ziontechgroup.com</a></span>
                </div>
                <div className="flex items-center space-x-2">
                  <Building className="w-4 h-4 text-green-400" />
                  <span>Address: 364 E Main St STE 1008 Middletown DE 19709</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}




            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."

              <Search className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - gray - 400 w - 5 h - 5" />;



              />
            </div>

            {/* Category Filter */}
            <div className="flex gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-cyan-500 text-black'
                      : 'bg-black/30 text-gray-300 hover:bg-black/50 border border-gray-600'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* View Mode and Sort */}
            <div className="flex gap-2">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 bg-black/30 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-500"
              >
                <option value="name">Sort by Name</option>
                <option value="price">Sort by Price</option>
                <option value="rating">Sort by Rating</option>
                <option value="popularity">Sort by Popularity</option>
              </select>
              
              <div className="flex bg-black/30 border border-gray-600 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${viewMode === 'grid' ? 'bg-cyan-500 text-black' : 'text-gray-400 hover:text-white'}`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                >
                  <List className="w-4 h-4" />
                </button>
              </div>

              <select




                className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                <option value="popularity">Most Popular</option>
                <option value="price">Price: Low to High</option>
                <option value="rating">Highest Rated</option>
                <option value="newest">Newest First</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}



        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"







                  </div>
                )}

                            <DollarSign className="w-4 h-4" />
                            <Clock className="w-4 h-4" />
                            <Star className="w-4 h-4 text-yellow-400" />
                          <ArrowRight className="w-4 h-4" />



                    <StarIcon className="w-5 h-5 text-yellow-400 fill-current" />

                    <StarIcon className="w - 5 h - 5 text - yellow - 400 fill - current" />;

                        <CheckCircle className="w - 4 h - 4 text - cyan - 400 flex - shrink - 0" />;


                        <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />

                      <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                      <p className="text-gray-300 text-sm mb-4 line-clamp-3">{service.tagline}</p>

                      <div className="space-y-3 mb-6">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-400">Price:</span>
                          <span className="text-white font-semibold">{service.price}{service.period}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-400">Setup:</span>
                          <span className="text-white">{service.setupTime}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-400">Rating:</span>
                          <span className="flex items-center gap-1 text-white">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            {service.rating} ({service.reviews})
                          </span>
                        </div>
                      </div>

                      <div className="space-y-3 mb-6">
                        <h4 className="text-sm font-semibold text-gray-300">Key Features:</h4>
                        <ul className="space-y-1">
                          {service.features.slice(0, 3).map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-xs text-gray-400">
                              <Check className="w-3 h-3 text-cyan-400" />
                              {feature}
                            </li>
                          ))}
                          {service.features.length > 3 && (
                            <li className="text-xs text-cyan-400">
                              +{service.features.length - 3} more features
                            </li>
                          )}
                        </ul>
                      </div>


                      <a
                        href={service.link}
                        className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-blue-600 transition-all duration-200"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>









                    <ExternalLink className="w-4 h-4" />


                  </Link>








                    </Link>
                    </Link>







            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div 
            className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 backdrop-blur-sm rounded-3xl p-12 border border-cyan-500/20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}




          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Our comprehensive portfolio of innovative services is designed to drive growth, 
              improve efficiency, and provide competitive advantages in today's digital landscape.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={`tel:${contactInfo.mobile}`}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold text-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <Phone className="w-5 h-5" />
                <ArrowRight className="w-5 h-5" />


              </Link>


              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gray-800 text-white rounded-xl font-semibold text-lg hover:bg-gray-700 transition-all duration-200 border border-gray-600"
              >
                <ExternalLink className="w-5 h-5" />
                Email Us
              </a>
            </div>

            <div className="mt-8 text-sm text-gray-400">
              <p>Visit our website: <a href={contactInfo.website} className="text-cyan-400 hover:text-cyan-300">{contactInfo.website}</a></p>
              <p className="mt-2">{contactInfo.address}</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Comprehensive2025ServicesShowcase;

                <ArrowRight className="w - 5 h - 5" />;
      <EnhancedFooter />;




      <Head>
      
        <script type=&quot;application/ld+json&quot;>{&quot;@context&quot;:&quot;https://schema.org&quot;,&quot;@type&quot;:&quot;WebPage&quot;,&quot;headline&quot;:&quot;Comprehensive 2025 Innovative Services Showcase — Zion Tech Group&quot;,&quot;url&quot;:&quot;https://ziontechgroup.com/comprehensive-2025-services-showcase&quot;,&quot;isPartOf&quot;:{&quot;@type&quot;:&quot;WebSite&quot;,&quot;name&quot;:&quot;Zion Tech Group&quot;,&quot;url&quot;:&quot;https://ziontechgroup.com&quot;}}</script></Head>

      <EnhancedNavigation />

import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import {;
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';
import EnhancedFooter from '../components/EnhancedFooter';
import { innovative2025MicroSaasExpansionV3 } from '../data/2025-innovative-micro-saas-expansion-v3';
export default function Comprehensive2025ServicesShowcase(req, res) {


