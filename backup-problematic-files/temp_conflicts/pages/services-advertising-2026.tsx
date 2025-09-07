import React, { useState } from 'react',;
import Head from 'next/head',;
import { motion, AnimatePresence } from 'framer-motion',;
import { ;
  ArrowRight, Check, Star, Users, Zap, Shield, Globe, ;
  TrendingUp, Award, Clock, CheckCircle, ExternalLink,;
  Brain, Atom, Rocket, Cpu, Database, Target, Sparkles,;
  ChevronRight, Search, Filter, Grid, List, Phone, Mail, MapPin,;
  DollarSign, Target as TargetIcon, BarChart3, Users as UsersIcon;
} from 'lucide-react',;
import EnhancedNavigation from '../components/EnhancedNavigation',;
import EnhancedFooter from '../components/EnhancedFooter',;
import { advancedMicroSaasServices2026 } from '../data/2026-advanced-micro-saas-expansion',;
import { specializedIndustrySolutions2026 } from '../data/2026-specialized-industry-solutions',;
;
export default function ServicesAdvertising2026() {;
  const [selectedCategory, setSelectedCategory] = useState('all'),;
  const [searchTerm, setSearchTerm] = useState(),;
  const [selectedService, setSelectedService] = useState<string | null>(null),;
</string>
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">;"
</div>
      <Head>;
"
        <meta property="og:description" content="Comprehensive advertising and marketing for our innovative micro SAAS services, AI solutions, quantum technologies, and cutting-edge IT services." />;"
</meta>"
        <meta name="keywords" content="micro SAAS advertising, AI services marketing, quantum computing services, cybersecurity solutions, edge computing, space technology, neural interfaces, Zion Tech Group, 2026 services" />;"
        <link rel="canonical" href="https://ziontechgroup.com/services-advertising-2026" />;"
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">;"
</div>"
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl p-6 border border-blue-500/30">;"
                <h3 className="text-xl font-bold text-white mb-2">Innovation First</h3>;""
                <p className="text-white/70">Cutting-edge AI, quantum computing, and emerging technologies</p>;"
              </div>;"
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl p-6 border border-green-500/30">;"
                <h3 className="text-xl font-bold text-white mb-2">Proven ROI</h3>;""
                <p className="text-white/70">Average 300%+ return on investment within 6 months</p>;"
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl p-6 border border-purple-500/30">;"
                <h3 className="text-xl font-bold text-white mb-2">Rapid Deployment</h3>;""
                <p className="text-white/70">Setup in days, not months. Start seeing results immediately</p>;"
              </div>;
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 max-w-3xl mx-auto">;"
              <h3 className="text-2xl font-semibold mb-4 text-cyan-400">Ready to Transform Your Business?</h3>;""
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">;"
                <div className="flex flex-col items-center gap-2">;"
                  <Phone className="w-6 h-6 text-cyan-400" />;"
                  <span className="font-semibold">+1 302 464 0950</span>;""
                  <span className="text-sm text-white/60">Call us today</span>;"
                  <Mail className="w-6 h-6 text-cyan-400" />;"
                  <span className="font-semibold">kleber@ziontechgroup.com</span>;""
                  <span className="text-sm text-white/60">Email us</span>;"
                  <MapPin className="w-6 h-6 text-cyan-400" />;"
                  <span className="font-semibold">Middletown DE 19709</span>;""
                  <span className="text-sm text-white/60">Visit us</span>;"
          </motion.div>;
      </section>;"
      <section className="px-6 py-16">;"
        <div className="max-w-7xl mx-auto">;"
            whileInView={{ opacity:1, y:0 }}
            viewport={{ once:true }}"
            className="text-center mb-16";"
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">;"
</h2>
            </h2>;"
            <p className="text-xl text-white/70 max-w-3xl mx-auto">;"
            </p>;
;"
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">;"
              initial={{ opacity:0, y:20 }}
              transition={{ duration:0.6, delay:0.1 }}
              className="bg-white/5 rounded-2xl p-6 border border-white/10";"
              <h3 className="text-xl font-bold text-white mb-2">Market Size</h3>;""
              <p className="text-3xl font-bold text-cyan-400 mb-2">$500B+</p>;""
              <p className="text-white/60">Total addressable market across all service categories</p>;"
              transition={{ duration:0.6, delay:0.2 }}
              <h3 className="text-xl font-bold text-white mb-2">Growth Rate</h3>;""
              <p className="text-3xl font-bold text-green-400 mb-2">300%+</p>;""
              <p className="text-white/60">Annual growth rate across all service categories</p>;"
              transition={{ duration:0.6, delay:0.3 }}
              <h3 className="text-xl font-bold text-white mb-2">Customer ROI</h3>;""
              <p className="text-3xl font-bold text-purple-400 mb-2">300%+</p>;""
              <p className="text-white/60">Average return on investment within 6 months</p>;"
              transition={{ duration:0.6, delay:0.4 }}
              <h3 className="text-xl font-bold text-white mb-2">Setup Time</h3>;""
              <p className="text-3xl font-bold text-orange-400 mb-2">1-4 weeks</p>;""
              <p className="text-white/60">Average implementation time for most services</p>;"
      <section className="px-6 mb-12">;"
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">;"
            <div className="relative flex-1 max-w-md">;"
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40 w-5 h-5" />;"

              <input;"
                type="text";""
                placeholder="Search services...";"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
</input>
            <div className="flex flex-wrap gap-2">;"
                <button;
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
</button>
                  <span>{category.icon}</span>;
                  <span>{category.name}</span>;
                </button>;
      <section className="px-6 pb-20">;"
            variants={containerVariants}"
            initial="hidden";""
            animate="visible";""
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8";"
            <AnimatePresence mode="wait">;"

                  key={service.id}
                  variants={itemVariants}"
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl";"
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
                    <div className="mb-4">;"
                      <div className="flex items-center justify-between mb-2">;"
                        <div className="text-2xl font-bold text-cyan-400">;"
                          {service.price}<span className="text-white/60 text-lg">{service.period}</span>;"
                        <div className="text-sm text-white/60">;"
                      <div className="bg-white/5 rounded-lg p-3">;"
                        <h4 className="text-sm font-semibold text-cyan-400 mb-1">Market Position</h4>;""
                        <p className="text-xs text-white/70">{service.marketPosition}</p>;"
                      <h4 className="text-sm font-semibold text-white mb-2">Key Features</h4>;""
                      <div className="space-y-1">;"
                          <div key={idx} className="flex items-center gap-2 text-sm text-white/70">;"
                            <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />;"

                            <span>{feature}</span>;
                    <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-lg p-3 mb-4">;"
                      <h4 className="text-sm font-semibold text-green-400 mb-1">Benefits & ROI</h4>;""
                      <p className="text-xs text-white/70">{service.roi}</p>;"
                      <h4 className="text-sm font-semibold text-white mb-2">Technology</h4>;""
                      <div className="flex flex-wrap gap-1">;"
                          <span key={idx} className="text-xs bg-white/10 text-white/60 px-2 py-1 rounded">;"
                      <h4 className="text-sm font-semibold text-white mb-2">Target Audience</h4>;""
                      <p className="text-xs text-white/70">{service.targetAudience}</p>;"
                    <div className="flex items-center justify-between text-sm text-white/60 mb-4">;"
                      <span>Setup:{service.setupTime}</span>;
                      <span>Rating:{service.rating}/5 ({service.reviews})</span>;
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
      <section className="px-6 py-20">;"
        <div className="max-w-4xl mx-auto text-center">;"
            viewport={{ once:true }}
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">;"
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">;"
              <div className="text-center">;"
                <div className="text-3xl font-bold text-cyan-400 mb-2">30 Days</div>;""
                <div className="text-white/60">Free Trial</div>;"
                <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>;""
                <div className="text-white/60">Support</div>;"
                <div className="text-3xl font-bold text-purple-400 mb-2">100%</div>;""
                <div className="text-white/60">Satisfaction</div>;"
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;"
              <a;"
                href="tel:+13024640950";""
                className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 text-lg group";"
                <Phone className="w-5 h-5" />;"

                href="mailto:kleber@ziontechgroup.com";""
                className="border border-white/20 text-white hover:border-cyan-400 font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 text-lg group";"
                <Mail className="w-5 h-5" />;"

      </section>;
      <AnimatePresence>;

            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            exit={{ opacity:0 }}"
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6";")
            onClick={() => setSelectedService(null)}
</motion>
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
                                <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />;"

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
                            <div className="flex items-center gap-2">;"
                              <span className="text-white/80">{service.contactInfo.website}</span>;"
                    <div className="flex gap-4 mt-8 pt-6 border-t border-white/10">;"
                        className="flex-1 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 text-lg";"
                        <ExternalLink className="w-5 h-5" />;"

        )}
      <EnhancedFooter />;
