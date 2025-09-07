import React, { useState } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import { ;
  Star, Clock, Users, TrendingUp, CheckCircle, ExternalLink, ;
  ChevronRight, Shield, Zap, Globe, Rocket, Brain, Atom,;
  Search, Filter, ArrowRight, Award, Target, Cpu, Database;
} from 'lucide-react',;
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';
import { enhancedMicroSaasServices } from '../data/enhanced-micro-saas-services-2025';
;
export default function Comprehensive2025ServicesShowcase() {;
  const [selectedCategory, setSelectedCategory] = useState('all'),;
  const [searchTerm, setSearchTerm] = useState(),;
  const [selectedService, setSelectedService] = useState<string | null>(null),;
</string>
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'rating' | 'popularity'>('popularity'),;
  const categories = [;]
  ],;
  const filteredServices = enhancedMicroSaasServices;
    .filter(service => ;)
      (selectedCategory === 'all' || service.category === selectedCategory) &&;
      (searchTerm ===  || ;')
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||;
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||;
        service.tagline.toLowerCase().includes(searchTerm.toLowerCase()));
    );
    .sort((a, b) => {;
      switch (sortBy) {;
        case 'name':;
          return a.name.localeCompare(b.name),;
        case 'price':;
          return parseFloat(a.price.replace('$', )) - parseFloat(b.price.replace('$', )),;
        case 'rating':;
          return b.rating - a.rating,;
        case 'popularity':;
          return (b.popular ? 1 :0) - (a.popular ? 1 :0),;
        default:return 0;
      }
    }),;
  const getCategoryIcon = (category:string) => {;
    const categoryData = categories.find(cat => cat.id === category),;
  },;
  const getAnnualPrice = (monthlyPrice:string) => {;
    const price = parseFloat(monthlyPrice.replace('$', )),;
    const annualPrice = price * 12 * 0.8, // 20% discount for annual;
    return `$${Math.round(annualPrice)}`,;
  return (;
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">;"
</div>
      <Head>;
"
        <meta property="og: description" content="Explore our comprehensive collection of innovative micro SAAS services;, AI solutions, quantum technologies, and cutting-edge IT services." />;"
</meta>"
        <meta name="keywords" content="micro SAAS, AI services, quantum computing, cybersecurity, edge computing, space technology, neural interfaces, Zion Tech Group, comprehensive services" />;"
        <link rel="canonical" href="https://ziontechgroup.com/comprehensive-2025-services-showcase" />;"
</link>
      <EnhancedNavigation />;
      <section className="relative py-20 px-6">;"
</section>"
        <div className="max-w-7xl mx-auto text-center">;"
          <motion.div;
            initial={{ opacity: 0;, y: 30 ;}}
            animate={{ opacity: 1;, y: 0 ;}}
            transition={{ duration: 0.8 ;}}
          >;
</motion>"
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">;"
</h1>
            </h1>;"
            <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-8">;"
</p>
            </p>;"
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">;"
</div>"
              <div className="text-center">;"
                <div className="text-3xl font-bold text-cyan-400 mb-2">{enhancedMicroSaasServices.length}+</div>;""
                <div className="text-white/70">Innovative Services</div>;"
              </div>;"
                <div className="text-3xl font-bold text-purple-400 mb-2">{categories.length - 1}</div>;""
                <div className="text-white/70">Technology Categories</div>;"
                <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>;""
                <div className="text-white/70">Uptime Guarantee</div>;"
                <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>;""
                <div className="text-white/70">Expert Support</div>;"
              </div>;
          </motion.div>;
      </section>;"
      <section className="px-6 pb-12">;"
        <div className="max-w-7xl mx-auto">;"
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">;"
            <div className="flex flex-col lg:flex-row gap-6 items-center">;"
              <div className="flex-1 relative">;"
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 w-5 h-5" />;"

                <input;"
                  type="text";""
                  placeholder="Search services...";"
                  value={searchTerm})
                  onChange={(e) => setSearchTerm(e.target.value)}
</input>
              <div className="flex items-center gap-3">;"
                <span className="text-white/70">Sort by:</span>;"
                <select;
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
</select>"
                  <option value="popularity">Popularity</option>;""
                  <option value="name">Name</option>;""
                  <option value="price">Price</option>;""
                  <option value="rating">Rating</option>;"
                </select>;
          <div className="flex flex-wrap justify-center gap-3">;"
              <button;
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
</button>
                <span>{category.icon}</span>;"
                <span className="text-xs bg-white/20 px-2 py-1 rounded-full">{category.count}</span>;"
              </button>;
      <section className="px-6 pb-20">;"
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;"
            <AnimatePresence mode="wait">;"

                  key={service.id}
                  exit={{ opacity: 0;, y: -30 ;}}
                  transition={{ duration: 0.6;, delay: index * 0.1 ;}}"
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl";"
                    <div className="absolute top-4 right-4 z-10">;"
                      <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">;"
                        <Star className="w-3 h-3" />;"

                  <div className="p-6">;"
                    <div className="flex items-start justify-between mb-4">;"
                      <div className="text-4xl">{service.icon}</div>;""
                      <div className="text-right">;"
                        <div className="text-2xl font-bold text-white">{service.price}</div>;""
                        <div className="text-sm text-white/60">{service.period}</div>;""
                        <div className="text-xs text-white/40 mt-1">;"
                    <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>;""
                    <p className="text-white/70 text-sm mb-4">{service.tagline}</p>;""
                    <div className="flex items-center gap-2 mb-4">;"
                      <div className="flex items-center gap-1">;"
                          <Star;
                            key={i}`;
                            className={`w-4 h-4 ${;
                              i < Math.floor(service.rating);"
                                ? 'text-yellow-400 fill-current';
                                :'text-white/30';`;
                            }`}
                          />;

                      <span className="text-white/60 text-sm">{service.rating}</span>;""
                      <span className="text-white/40 text-sm">({service.reviews} reviews)</span>;"
                    <div className="space-y-2 mb-6">;"
                        <div key={idx} className="flex items-center gap-2 text-sm text-white/70">;"
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />;"

                        <div className="text-white/50 text-sm">;"
                    <div className="bg-white/5 rounded-lg p-4 mb-6">;"
                      <div className="text-sm text-white/60 mb-2">Expected ROI:</div>;""
                      <div className="text-sm text-white/90 font-medium">{service.roi}</div>;"
                    <div className="flex gap-3">;"
                      <a;
                        href={service.link}"
                        target="_blank";""
                        rel="noopener noreferrer";""
                        className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white text-center py-3 px-4 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2";"
</a>"
                        <ExternalLink className="w-4 h-4" />;"

                      </a>;
                      <a;"
                        href="mailto:kleber@ziontechgroup.com";""
                        className="bg-white/10 hover:bg-white/20 text-white py-3 px-4 rounded-xl font-medium transition-all duration-300 border border-white/20 hover:border-white/40";"
</a>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />;"
              ))}
            <div className="text-center py-20">;"
              <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>;""
              <p className="text-white/70 mb-6">Try adjusting your search or filter criteria</p>;"
                onClick={() => {;
        <div className="max-w-4xl mx-auto text-center">;"
            whileInView={{ opacity: 1;, y: 0 ;}}
            viewport={{ once: true ;}}"
            className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-xl rounded-3xl p-12 border border-blue-500/30";"
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">;"
</h2>
            </h2>;"
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">;"
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2";"
                <ArrowRight className="w-5 h-5" />;"

                href="tel:+13024640950";""
                className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 border border-white/20 hover:border-white/40 flex items-center justify-center gap-2";"
      </section>;
      <EnhancedFooter />;

    </div>;"`;