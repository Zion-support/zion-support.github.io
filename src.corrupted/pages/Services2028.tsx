import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, Filter, Star, Sparkles, Zap, Brain, Shield, Cloud, Rocket, Globe, Cpu, Lock, Heart, Users, ShoppingCart, BookOpen, MessageCircle, HelpCircle, DollarSign, Gauge, Workflow, Atom, Target, TrendingUp, Award, Code, Truck, Building, BarChart3, PenTool, Eye, Server, Smartphone, Database, Network, Clock, ArrowRight, ChevronDown, CheckCircle, ExternalLink } from "lucide-react"
import { SEO } from "@/components/SEO"
import { INNOVATIVE_MICRO_SAAS_SERVICES_2028 } from "../data/innovativeMicroSaasServices2028"
import { COMPREHENSIVE_IT_SERVICES_2028 } from "../data/comprehensiveITServices2028"
import { COMPREHENSIVE_PRICING_2028 } from "../data/comprehensivePricingGuide2028"
export default function Services2028() {;
  const [searchQuery, setSearchQuery] = useState(''),;
  const [selectedCategory, setSelectedCategory] = useState('all'),;
  const [selectedPriceRange, setSelectedPriceRange] = useState('all'),;
  const [sortBy, setSortBy] = useState('featured'),;

  //[^;]*
  const allServices = [;
    ...INNOVATIVE_MICRO_SAAS_SERVICES_2028,;
    ...COMPREHENSIVE_IT_SERVICES_2028
  ],;

  //[^;]*
  const categories = ['all', ...Array.from(new Set(allServices.map(s => s.category)))]

  //[^;]*
  const filteredServices = allServices.filter(service => {;
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||;
                         service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||;
                         service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())),;
    ;
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory
    ;
    const matchesPrice = selectedPriceRange === 'all' || 
                        (selectedPriceRange === 'low' && service.price < 2000) ||;&& service.price < 2000) ||; service.price < 2000) ||
                        (selectedPriceRange === 'medium' && service.price >= 2000 && service.price < 5000) ||;&& service.price >= 2000 && service.price < 5000) ||; service.price >= 2000 && service.price < 5000) ||
                        (selectedPriceRange === 'high' && service.price >= 5000),;&& service.price >= 5000),; service.price >= 5000),
    ;
    return matchesSearch && matchesCategory && matchesPrice,;&& matchesCategory && matchesPrice,; matchesCategory && matchesPrice,
  }),;

  //[^;]*
  const sortedServices = [...filteredServices].sort((a, b) => {;
    switch (sortBy) {;
      case 'price-low':;
        return a.price - b.price,;
      case 'price-high':;
        return b.price - a.price
      case 'rating':;
        return b.rating - a.rating
      case 'name':;
        return a.title.localeCompare(b.title)
      default: return b.featured ? 1 : -1
    };
  });
  const contactInfo = {;
    phone: "+1 302 464 0950",email: "kleber@ziontechgroup.com",website: "https://ziontechgroup.com",address: "364 E Main St STE 1008 Middletown DE 19709"
  };
  return (
    <div className="min-h-screen bg-cyber-black">;
      {/* Futuristic Background */};
      <div className="futuristic-bg">;
        {[...Array(15)].map((_, i) => (;
          <div;
            key={i};
            className="[^"]*"
            style={{;
              left: `${Math.random() * 100}%`
              animationDelay: `${Math.random() * 20}s`
              animationDuration: `${15 + Math.random() * 10}s`
            }};
          >;
            {String.fromCharCode(0x30A0 + Math.random() * 96)};
          </[^>]*>
        ))};
        {[...Array(10)].map((_, i) => (;
          <div;
            key={i};
            className="[^"]*"
            style={{;
              left: `${Math.random() * 100}%`
              top: `${Math.random() * 100}%`
              animationDelay: `${Math.random() * 6}s`
            }};
          />;
        ))};
      </[^>]*>

      <SEO ;
        title="2028 Services - Zion Tech Group | Revolutionary AI & IT Solutions"
        description="Discover our comprehensive 2028 services including AI Business Intelligence, Quantum Computing, Blockchain & Web3, Edge Computing, and enterprise IT solutions. Transform your business with cutting-edge technology."
        keywords="2028 services, AI business intelligence, quantum computing, blockchain, web3, edge computing, IT services, Zion Tech Group"
      />;

      {/* Hero Section */};
      <section className="relative pt-32 pb-20 overflow-hidden">;
        <div className="container mx-auto px-4 text-center">;
          <motion.div
            initial={{ opacity: 0, y: 30 }};
            animate={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
          >;
            <h1 className="text-5xl md:text-7xl font-bold mb-6">;
              <span className="bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple bg-clip-text text-transparent">;
                2028 Services;
              </[^>]*>
            </[^>]*>
            <p className="text-xl md:text-2xl text-neon-cyan/80 mb-8 max-w-4xl mx-auto">;
              Revolutionary AI, Quantum Computing, Blockchain & Web3, Edge Computing, and Enterprise IT Solutions;
            </[^>]*>
            <div className="flex flex-wrap justify-center gap-4 mb-8">;
              <div className="flex items-center space-x-2 text-neon-green">;
                <[^>]*/>
                <span>Cutting-edge Technology</[^>]*>
              </[^>]*>
              <div className="flex items-center space-x-2 text-neon-blue">;
                <[^>]*/>
                <span>Enterprise Grade</[^>]*>
              </[^>]*>
              <div className="flex items-center space-x-2 text-neon-purple">;
                <[^>]*/>
                <span>24/7 Support</[^>]*>
              </[^>]*>
            </[^>]*>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <a;
                href="#services"
                className="[^"]*"
              >;
                Explore Services;
              </[^>]*>
              <a;
                href="/contact"
                className="[^"]*"
              >;
                Get Free Quote;
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Search and Filters */};
      <section className="py-12 bg-cyber-gray/30">;
        <div className="container mx-auto px-4">;
          <div className="card-futuristic max-w-6xl mx-auto">;
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">;
              {/* Search */};
              <div className="lg:col-span-2">;
                <div className="relative">;
                  <[^>]*/>
                  <input;
                    type="text"
                    placeholder="Search services..."
                    value={searchQuery};
                    onChange={(e) => setSearchQuery(e.target.value)};
                    className="[^"]*"
                  />;
                </[^>]*>
              </[^>]*>

              {/* Category Filter */};
              <div>;
                <select;
                  value={selectedCategory};
                  onChange={(e) => setSelectedCategory(e.target.value)};
                  className="[^"]*"
                >;
                  {categories.map(category => (;
                    <option key={category} value={category}>;
                      {category === 'all' ? 'All Categories' : category}
                    </[^>]*>
                  ))};
                </[^>]*>
              </[^>]*>

              {/* Price Filter */};
              <div>;
                <select;
                  value={selectedPriceRange};
                  onChange={(e) => setSelectedPriceRange(e.target.value)};
                  className="[^"]*"
                >;
                  <option value="all">All Prices</[^>]*>
                  <option value="low">Under $2,000</[^>]*>
                  <option value="medium">$2,000 - $5,000</[^>]*>
                  <option value="high">Over $5,000</[^>]*>
                </[^>]*>
              </[^>]*>
            </[^>]*>

            {/* Sort Options */};
            <div className="mt-4 flex items-center justify-between">;
              <div className="flex items-center space-x-4">;
                <span className="text-neon-cyan font-semibold">Sort by:</[^>]*>
                <select;
                  value={sortBy};
                  onChange={(e) => setSortBy(e.target.value)};
                  className="[^"]*"
                >;
                  <option value="featured">Featured</[^>]*>
                  <option value="price-low">Price: Low to High</[^>]*>
                  <option value="price-high">Price: High to Low</[^>]*>
                  <option value="rating">Rating</[^>]*>
                  <option value="name">Name</[^>]*>
                </[^>]*>
              </[^>]*>
              <div className="text-neon-cyan">;
                {filteredServices.length} services found;
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Services Grid */};
      <section id="services" className="py-20">;
        <div className="container mx-auto px-4">;
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
            {sortedServices.map((service, index) => (;
              <motion.div
                key={service.id};
                initial={{ opacity: 0, y: 30 }};
                animate={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.6, delay: index * 0.1 }};
                className="[^"]*"
              >;
                {/* Service Header */};
                <div className="flex items-start justify-between mb-4">;
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${;
                    service.featured ? 'bg-gradient-to-br from-neon-cyan to-neon-blue' : 'bg-neon-purple/20'
                  }`}>;
                    {service.featured ? (;
                      <[^>]*/>
                    ) : (;
                      <[^>]*/>
                    )};
                  </[^>]*>
                  {service.featured && (;&& (; (
                    <div className="flex items-center space-x-1 text-neon-yellow">;
                      <[^>]*/>
                      <span className="text-xs font-semibold">FEATURED</[^>]*>
                    </[^>]*>
                  )};
                </[^>]*>

                {/* Service Content */};
                <h3 className="text-xl font-bold text-white mb-3 hover:text-neon-cyan transition-colors duration-300">;
                  {service.title};
                </[^>]*>
                <p className="text-neon-cyan/70 mb-4 line-clamp-3">;
                  {service.description};
                </[^>]*>

                {/* Service Details */};
                <div className="space-y-3 mb-6">;
                  <div className="flex items-center justify-between">;
                    <span className="text-neon-cyan text-sm">Category:</[^>]*>
                    <span className="text-white text-sm font-semibold">{service.category}</[^>]*>
                  </[^>]*>
                  <div className="flex items-center justify-between">;
                    <span className="text-neon-cyan text-sm">Price:</[^>]*>
                    <span className="text-neon-green font-bold text-lg">;
                      ${service.price.toLocaleString()}/month;
                    </[^>]*>
                  </[^>]*>
                  <div className="flex items-center justify-between">;
                    <span className="text-neon-cyan text-sm">Rating:</[^>]*>
                    <div className="flex items-center space-x-1">;
                      <span className="text-white font-semibold">{service.rating}</[^>]*>
                      <[^>]*/>
                      <span className="text-neon-cyan/70 text-sm">({service.reviews})</[^>]*>
                    </[^>]*>
                  </[^>]*>
                </[^>]*>

                {/* Service Features */};
                <div className="mb-6">;
                  <h4 className="text-neon-cyan font-semibold mb-2">Key Features:</[^>]*>
                  <div className="grid grid-cols-1 gap-2">;
                    {service.features.slice(0, 3).map((feature, idx) => (;
                      <div key={idx} className="flex items-center space-x-2 text-sm">;
                        <[^>]*/>
                        <span className="text-white/80">{feature}</[^>]*>
                      </[^>]*>
                    ))};
                    {service.features.length > 3 && (;&& (; (
                      <div className="text-neon-cyan/70 text-sm">;
                        +{service.features.length - 3} more features;
                      </[^>]*>
                    )};
                  </[^>]*>
                </[^>]*>

                {/* Service Actions */};
                <div className="flex flex-col space-y-3">;
                  <a;
                    href={service.href};
                    className="[^"]*"
                  >;
                    Learn More;
                  </[^>]*>
                  <a;
                    href="/contact"
                    className="[^"]*"
                  >;
                    Get Quote;
                  </[^>]*>
                </[^>]*>

                {/* Service Tags */};
                <div className="mt-4 flex flex-wrap gap-2">;
                  {service.tags.slice(0, 3).map((tag, idx) => (;
                    <span;
                      key={idx};
                      className="[^"]*"
                    >;
                      {tag};
                    </[^>]*>
                  ))};
                </[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Contact Section */};
      <section className="py-20 bg-cyber-gray/30">;
        <div className="container mx-auto px-4 text-center">;
          <motion.div
            initial={{ opacity: 0, y: 30 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            viewport={{ once: true }};
          >;
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">;
              Ready to Transform Your Business?;
            </[^>]*>
            <p className="text-xl text-neon-cyan/80 mb-8 max-w-3xl mx-auto">;
              Get in touch with our experts to discuss how our 2028 services can revolutionize your operations;
            </[^>]*>
            ;
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">;
              <div className="text-center">;
                <div className="w-16 h-16 bg-gradient-to-br from-neon-cyan to-neon-blue rounded-full flex items-center justify-center mx-auto mb-4">;
                  <[^>]*/>
                </[^>]*>
                <h3 className="text-xl font-bold text-white mb-2">Contact Sales</[^>]*>
                <p className="text-neon-cyan/70">Speak with our experts</[^>]*>
              </[^>]*>
              ;
              <div className="text-center">;
                <div className="w-16 h-16 bg-gradient-to-br from-neon-purple to-neon-pink rounded-full flex items-center justify-center mx-auto mb-4">;
                  <[^>]*/>
                </[^>]*>
                <h3 className="text-xl font-bold text-white mb-2">Get Quote</[^>]*>
                <p className="text-neon-cyan/70">Custom pricing for your needs</[^>]*>
              </[^>]*>
              ;
              <div className="text-center">;
                <div className="w-16 h-16 bg-gradient-to-br from-neon-green to-neon-cyan rounded-full flex items-center justify-center mx-auto mb-4">;
                  <[^>]*/>
                </[^>]*>
                <h3 className="text-xl font-bold text-white mb-2">24/7 Support</[^>]*>
                <p className="text-neon-cyan/70">Always here to help</[^>]*>
              </[^>]*>
            </[^>]*>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">;
              <a;
                href={`tel:${contactInfo.phone}`};
                className="[^"]*"
              >;
                Call {contactInfo.phone};
              </[^>]*>
              <a;
                href={`mailto:${contactInfo.email}`};
                className="[^"]*"
              >;
                Email Us;
              </[^>]*>
            </[^>]*>

            <div className="text-neon-cyan/70">;
              <p className="mb-2">{contactInfo.address}</[^>]*>
              <p>Visit us at <a href={contactInfo.website} className="text-neon-cyan hover:text-neon-blue transition-colors duration-300" target="_blank" rel="noopener noreferrer">{contactInfo.website}</a></[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
    </[^>]*>
  );
};