import React, { useState } from 'react',;
import Head from 'next/head',;
import { motion, AnimatePresence } from 'framer-motion',;
import { ;
  ArrowRight, Check, Star, Users, Zap, Shield, Globe, ;
  TrendingUp, Award, Clock, CheckCircle, ExternalLink,;
  Brain, Atom, Rocket, Cpu, Database, Target, Sparkles,;
  ChevronRight, Search, Filter, Grid, List;
} from 'lucide-react',;
import EnhancedNavigation from '../components/EnhancedNavigation',;
import EnhancedFooter from '../components/EnhancedFooter',;
import { advancedMicroSaasServices2026 } from '../data/2026-advanced-micro-saas-expansion',;
import { specializedIndustrySolutions2026 } from '../data/2026-specialized-industry-solutions',;
;
export default function Comprehensive2026ServicesShowcase() {;
  const [selectedCategory, setSelectedCategory] = useState('all'),;
  const [searchTerm, setSearchTerm] = useState(),;
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid'),;
  const [selectedService, setSelectedService] = useState<string | null>(null),;
</string>
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">;"
</div>
      <Head>;
"
        <meta property="og:description" content="Explore our comprehensive collection of innovative micro SAAS services, AI solutions, quantum technologies, and cutting-edge IT services for 2026." />;"
</meta>"
        <meta name="keywords" content="micro SAAS, AI services, quantum computing, cybersecurity, edge computing, space technology, neural interfaces, Zion Tech Group, 2026 services" />;"
        <link rel="canonical" href="https://ziontechgroup.com/comprehensive-2026-services-showcase" />;"
</link>
      <EnhancedNavigation />;
      <section className="relative py-20 px-6">;"
</section>"
        <div className="max-w-7xl mx-auto text-center">;"
          <motion.div;
            initial={{ opacity:0, y:30 }}
            animate={{ opacity:1, y:0 }}
            transition={{ duration:0.8 }}
          >;
</motion>"
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">;"
</h1>
            </h1>;"
            <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-8">;"
</p>
            </p>;"
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">;"
</div>"
              <div className="text-center">;"
                <div className="text-3xl font-bold text-cyan-400">{allServices.length}+</div>;""
                <div className="text-white/60">Services Available</div>;"
              </div>;"
                <div className="text-3xl font-bold text-green-400">15+</div>;""
                <div className="text-white/60">Technology Categories</div>;"
                <div className="text-3xl font-bold text-purple-400">$500B+</div>;""
                <div className="text-white/60">Total Market Size</div>;"
                <div className="text-3xl font-bold text-orange-400">300%+</div>;""
                <div className="text-white/60">Average ROI</div>;"
              </div>;
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 max-w-2xl mx-auto">;"
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">Ready to Transform Your Business?</h3>;""
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">;"
                <div className="flex items-center gap-2">;"
                  <span>Middletown DE 19709</span>;
          </motion.div>;
      </section>;"
      <section className="px-6 mb-12">;"
        <div className="max-w-7xl mx-auto">;"
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">;"
            <div className="relative flex-1 max-w-md">;"
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40 w-5 h-5" />;"

              <input;"
                type="text";""
                placeholder="Search services...";"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
</input>
              <button;"
                onClick={() => setViewMode('grid')}
</button>
                <Grid className="w-5 h-5" />;"

              </button>;
                onClick={() => setViewMode('list')}
                <List className="w-5 h-5" />;"

          <div className="flex flex-wrap justify-center gap-3">;"
              <button;
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                <span>{category.icon}</span>;
                <span>{category.name}</span>;"
                <span className="text-xs bg-white/20 px-2 py-1 rounded-full">{category.count}</span>;"
      <section className="px-6 pb-20">;"
            variants={containerVariants}"
            initial="hidden";""
            animate="visible";""
            className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' :'space-y-6'}
</motion>
            <AnimatePresence mode="wait">;"

                  key={service.id}
                  variants={itemVariants}"
                  className={viewMode === 'grid' ? ;
                    "group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl" :;""
                    "group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300";"
                  }
                  <div className="p-6">;"
                    <div className="flex items-start justify-between mb-4">;"
                      <div className="flex items-center gap-3">;"
                        <span className="text-3xl">{service.icon}</span>;"
                        <div>;
                          <h3 className="text-xl font-bold text-white">{service.name}</h3>;""
                          <p className="text-white/60 text-sm">{service.tagline}</p>;"
                        <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full">;"
</span>
                        </span>;
                    <p className="text-white/80 mb-4 leading-relaxed">{service.description}</p>;""
                    <div className="flex items-center justify-between mb-4">;"
                      <div className="text-2xl font-bold text-cyan-400">;"
                        {service.price}<span className="text-white/60 text-lg">{service.period}</span>;"
                      <div className="text-sm text-white/60">;"
                    <div className="bg-white/5 rounded-lg p-3 mb-4">;"
                      <h4 className="text-sm font-semibold text-cyan-400 mb-2">Market Position</h4>;""
                      <p className="text-xs text-white/70">{service.marketPosition}</p>;"
                    <div className="mb-4">;"
                      <h4 className="text-sm font-semibold text-white mb-2">Key Features</h4>;""
                      <div className="grid grid-cols-1 gap-2">;"
                          <div key={idx} className="flex items-center gap-2 text-sm text-white/70">;"
                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />;"

                            <span>{feature}</span>;
                    <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-lg p-3 mb-4">;"
                      <h4 className="text-sm font-semibold text-green-400 mb-2">Benefits & ROI</h4>;""
                      <p className="text-xs text-white/70">{service.roi}</p>;"
                      <h4 className="text-sm font-semibold text-white mb-2">Technology Stack</h4>;""
                      <div className="flex flex-wrap gap-1">;"
                          <span key={idx} className="text-xs bg-white/10 text-white/60 px-2 py-1 rounded">;"
                      <h4 className="text-sm font-semibold text-white mb-2">Target Audience</h4>;""
                      <p className="text-xs text-white/70">{service.targetAudience}</p>;"
                    <div className="flex items-center justify-between text-sm text-white/60 mb-4">;"
                      <span>Setup:{service.setupTime}</span>;
                      <span>Rating:{service.rating}/5 ({service.reviews} reviews)</span>;
                    <div className="flex gap-3">;"
                      <a;
                        href={service.link}"
                        target="_blank";""
                        rel="noopener noreferrer";""
                        className="flex-1 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg";"
</a>"
                        <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />;"

                      </a>;
                        onClick={() => setSelectedService(service.id)}
              ))}
          {/* No Results */}
          {filteredServices.length === 0 && (;"
            <div className="text-center py-20">;"
              <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>;""
              <p className="text-white/60">Try adjusting your search or filter criteria</p>;"
      </section>;
      <AnimatePresence>;

            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            exit={{ opacity:0 }}"
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6";")
            onClick={() => setSelectedService(null)}
              initial={{ scale:0.9, opacity:0 }}
              animate={{ scale:1, opacity:1 }}
              exit={{ scale:0.9, opacity:0 }}"
              className="bg-slate-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto";"
              onClick={(e) => e.stopPropagation()}
                  <div className="p-8">;"
                    <div className="flex items-start justify-between mb-6">;"
                      <div className="flex items-center gap-4">;"
                        <span className="text-5xl">{service.icon}</span>;"
                          <h2 className="text-3xl font-bold text-white">{service.name}</h2>;""
                          <p className="text-xl text-white/60">{service.tagline}</p>;"
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">;"
                        <div className="mb-6">;"
                          <h3 className="text-xl font-semibold text-cyan-400 mb-3">Description</h3>;""
                          <p className="text-white/80 leading-relaxed">{service.description}</p>;"
                          <h3 className="text-xl font-semibold text-cyan-400 mb-3">Features</h3>;""
                          <div className="space-y-2">;"
                              <div key={idx} className="flex items-center gap-2 text-white/80">;"

                          <h3 className="text-xl font-semibold text-cyan-400 mb-3">Benefits</h3>;""
                                <Star className="w-4 h-4 text-yellow-400 flex-shrink-0" />;"

                                <span>{benefit}</span>;
                          <h3 className="text-xl font-semibold text-cyan-400 mb-3">Pricing & Market</h3>;""
                          <div className="space-y-3">;"
                            <div className="flex justify-between">;"
                              <span className="text-white/60">Our Price:</span>;""
                              <span className="text-2xl font-bold text-cyan-400">{service.price}{service.period}</span>;"
                              <span className="text-white/60">Market Average:</span>;""
                              <span className="text-white/80">{service.averageMarketPrice}</span>;"
                              <span className="text-white/60">Trial Period:</span>;""
                              <span className="text-white/80">{service.trialDays} days</span>;"
                              <span className="text-white/60">Setup Time:</span>;""
                              <span className="text-white/80">{service.setupTime}</span>;"
                          <h3 className="text-xl font-semibold text-cyan-400 mb-3">Technology & Integrations</h3>;""
                              <h4 className="text-sm font-medium text-white/80 mb-2">Technology Stack</h4>;""
                              <h4 className="text-sm font-medium text-white/80 mb-2">Integrations</h4>;""
                          <h3 className="text-xl font-semibold text-cyan-400 mb-3">Market Information</h3>;""
                          <div className="space-y-2 text-sm">;"
                              <span className="text-white/60">Market Size:</span>;""
                              <span className="text-white/80">{service.marketSize}</span>;"
                              <span className="text-white/60">Growth Rate:</span>;""
                              <span className="text-white/80">{service.growthRate}</span>;"
                              <span className="text-white/60">Customers:</span>;""
                              <span className="text-white/80">{service.customers}+</span>;"
                              <span className="text-white/60">Rating:</span>;""
                              <span className="text-white/80">{service.rating}/5 ({service.reviews} reviews)</span>;"
                        <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg p-4">;"
                          <h3 className="text-lg font-semibold text-cyan-400 mb-3">Get Started Today</h3>;""
                              <span className="text-white/80">{service.contactInfo.website}</span>;"
                    <div className="flex gap-4 mt-8 pt-6 border-t border-white/10">;"
                        className="flex-1 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 text-lg";"
                        <ExternalLink className="w-5 h-5" />;"

        )}
      <EnhancedFooter />;
