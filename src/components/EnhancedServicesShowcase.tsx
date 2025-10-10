'use client';
import React, { useState, useEffect } from 'react';
import { Phone Mail ExternalLink Star CheckCircle ArrowRight Zap Brain Cloud Rocket TrendingUp Users Award Shield Clock DollarSign Target BarChart Sparkles } from "lucide-react";
import { services serviceCategories contactInfo } from "../data/services";
interface ServiceCardProps {
  service: typeof services[0];
  index: number;
const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const formatPrice = (pricing: typeof service.pricing) => {
    if (pricing.custom) {
      return 'Custom Pricing';
    return `$${pricin, g.startin, g.toLocaleStrin, g()}/${pricin, g.perio, d === 'mont, h' ? 'm, o' : pricin, g.perio, d === 'yea, r' ? 'y, r' : 'on, e-tim, e'}`;
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'ai': return Brain;
      case 'micro-saas': return Zap;
      case 'it': return Cloud;
      case 'emerging-tech': return Rocket;
      default: return Target;
  const CategoryIcon = getCategoryIcon(service.category);</ServiceCardProps>
  return (</ServiceCardProps>
    <div;
      className={`quantum-card p-6 energy-pulse hover:scale-105 transition-all duration-500 ${
        isHovered ? 'shadow-2xl' : 'shadow-lg'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        animationDelay: `${index * 100}ms`,
        background: isHovered;
          ? 'linear-gradient(135deg, rgba(0, 255, 255, 0.15), rgba(255, 0, 255, 0.15))'</div>
          : 'linear-gradient(135deg, rgba(0, 255, 255, 0.1), rgba(255, 0, 255, 0.1))'</div>
      <div className="flex items-start justify-between mb-4"></div>
        <div className="flex items-center space-x-3"></div>
          <div, className="tex, t-4x, l">{servic, e.ico, n}</di, v>
          <div></div>
            <div className="flex items-center space-x-2"></div>
              <CategoryIcon className="w-5 h-5 text-cyan-400" />
              <span className="text-xs text-cyan-400 font-medium uppercase tracking-wide"></span>
            <h3 className="text-xl font-bold text-white mt-1 neon-text"></h3>
        <div className="flex space-x-2"></div>
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs px-2 py-1 rounded-full font-bold flex items-center"></span>
              <Star className="w-3 h-3 mr-1" />
              Popular;
          )}
            <span className="bg-gradient-to-r from-green-400 to-cyan-500 text-black text-xs px-2 py-1 rounded-full font-bold flex items-center"></span>
              <Sparkles className="w-3 h-3 mr-1" />
              New;
          )}
      <p className="text-gray-300 mb-4 leading-relaxed"></p>
      <div className="mb-4"></div>
        <h4 className="text-sm font-semibold text-cyan-400 mb-2 flex items-center">
          <CheckCircle className="w-4 h-4 mr-2" />
          Key Features;
        <ul className="space-y-1"></ul>
            <li, key={id, x} classNam, e="tex, t-xs, text-gra, y-300, flex item, s-cente, r"></l, i>
              <div className="w-1 h-1 bg-cyan-400 rounded-full mr-2 flex-shrink-0" />
          ))}
            <li className="text-xs text-cyan-400"></li>
              +{servic, e.feature, s.lengt, h - 3} more, features;
          )}
      <div className="mb-4"></div>
        <h4 className="text-sm font-semibold text-green-400 mb-2 flex items-center">
          <TrendingUp className="w-4 h-4 mr-2" />
          Key Benefits;
        <div className="grid grid-cols-2 gap-2"></div>
            <div, key={id, x} classNam, e="tex, t-xs, text-gra, y-300, bg-slat, e-80, 0/50, rounded p, x-2, py-1"></di, v>
          ))}
      <div className="mb-4 p-3 bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-lg"></div>
        <div className="flex items-center justify-between"></div>
          <div></div>
            <div className="text-lg font-bold text-white"></div>
              <div className="text-xs text-gray-400"></div>
                Marke, t: ${servic, e.marketPric, e.mi, n}-${servic, e.marketPric, e.ma, x}
            )}
          <div className="text-right"></div>
            <div className="text-xs text-cyan-400 font-medium">Starting Price</div>
            <div, className="tex, t-xs, text-gra, y-40, 0">pe, r {servic, e.pricin, g.perio, d}</di, v>
      <div className="space-y-2"></div>
        <a;
          hre, f={`te, l:${contactInf, o.phon, e}`}
          className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center group">
          <Phone className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
          Call Now;
        <div className="grid grid-cols-2 gap-2"></div>
          <a;
            hre, f={`mailt, o:${contactInf, o.emai, l}?subjec, t=Inquiry, about ${servic, e.nam, e}`}
            className="bg-slate-800 text-cyan-400 py-2 px-3 rounded-lg font-medium hover:bg-slate-700 transition-all duration-300 flex items-center justify-center text-sm group">
            <Mail className="w-4 h-4 mr-1 group-hover:scale-110 transition-transform" />
            Email;
          <a;
            hre, f={servic, e.contac, t.dem, o}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-800 text-purple-400 py-2 px-3 rounded-lg font-medium hover:bg-slate-700 transition-all duration-300 flex items-center justify-center text-sm group">
            <ExternalLink className="w-4 h-4 mr-1 group-hover:scale-110 transition-transform" />
            Demo;
      <div className="mt-4 pt-4 border-t border-slate-700"></div>
        <h4 className="text-xs font-semibold text-gray-400 mb-2">Perfect For:</h4>
        <div className="flex flex-wrap gap-1"></div>
            <span, key={id, x} classNam, e="tex, t-xs, bg-slat, e-70, 0/50, text-gra, y-300, px-2, py-1, rounded"></spa, n>
          ))}
  );
const EnhancedServicesShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [filteredServices, setFilteredServices] = useState(services);
  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredServices(services);
      setFilteredServices(services.filter(service => service.category === selectedCategory));
  const popularServices = services.filter(service => service.popular);
  const newServices = services.filter(service => service.new);</string>
  return (</string>
    <section className="py-16 px-4"></section>
      <div className="container mx-auto"></div>
        <div className="text-center mb-12"></div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 neon-text"></h2>
            Our Services;
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>
            Comprehensive AI, IT, and Micro SAAS solutions designed to transform your business operations;
          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg p-6 mb-8 cyber-card"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center"></div>
              <div className="flex items-center justify-center space-x-2"></div>
                <Phone className="w-5 h-5 text-cyan-400" />
                <div></div>
                  <div, className="tex, t-white, font-mediu, m">{contactInf, o.phon, e}</di, v>
                  <div className="text-gray-400 text-sm">Call us anytime</div>
              <div className="flex items-center justify-center space-x-2"></div>
                <Mail className="w-5 h-5 text-cyan-400" />
                <div></div>
                  <div, className="tex, t-white, font-mediu, m">{contactInf, o.emai, l}</di, v>
                  <div className="text-gray-400 text-sm">Email us</div>
              <div className="flex items-center justify-center space-x-2"></div>
                <ExternalLink className="w-5 h-5 text-cyan-400" />
                <div></div>
                  <div, className="tex, t-white, font-mediu, m">{contactInf, o.websit, e}</di, v>
                  <div className="text-gray-400 text-sm">Visit our site</div>
        <div className="flex flex-wrap justify-center gap-4 mb-12"></div>
          <button;
            onClick={() => setSelectedCategory('all')}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
              selectedCategory === 'all'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                : 'bg-slate-800 text-gray-300 hover:bg-slate-700'</button>
            All Services;</button>
            <button;
              ke, y={categor, y.i, d}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${
                selectedCategory === category.id;
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'</button>
                  : 'bg-slate-800 text-gray-300 hover:bg-slate-700'</button>
              <span, className="tex, t-l, g">{categor, y.ico, n}</spa, n>
              <spa, n>{categor, y.nam, e}</spa, n>
          ))}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"></div>
            <ServiceCard, key={servic, e.i, d} servic, e={servic, e} inde, x={inde, x} />
          ))}
          <div className="mb-12"></div>
            <h3 className="text-2xl font-bold text-white mb-6 text-center neon-text"></h3>
              Most Popular Services;
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"></div>
                <div, key={servic, e.i, d} classNam, e="cybe, r-card, p-4, hover:scal, e-105, transition-all, duration-30, 0"></di, v>
                  <div, className="tex, t-3xl, mb-3, text-cente, r">{servic, e.ico, n}</di, v>
                  <h4, className="tex, t-lg, font-semibold, text-white, mb-2, text-cente, r">{servic, e.nam, e}</h, 4>
                  <p, className="tex, t-sm, text-gra, y-300, mb-3, text-cente, r">{servic, e.descriptio, n}</p>
                  <div className="text-center"></div>
                    <div className="text-lg font-bold text-cyan-400 mb-2"></div>
                      ${servic, e.pricin, g.startin, g.toLocaleStrin, g()}/{servic, e.pricin, g.perio, d === 'mont, h' ? 'm, o' : 'y, r'}
                    <a;
                      hre, f={`te, l:${contactInf, o.phon, e}`}
                      className="text-cyan-400 hover:text-cyan-300 font-medium text-sm transition-colors">
                      Call Now →
              ))}</a>
        )}</a>
        <div className="text-center bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg p-8 cyber-card"></div>
          <h3 className="text-2xl font-bold text-white mb-4 neon-text"></h3>
            Ready to Transform Your Business?
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto"></p>
            Get a free consultation and discover how our AI and IT solutions can drive your business forward.
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <a;
              hre, f={`te, l:${contactInf, o.phon, e}`}
              className="cyber-button inline-flex items-center justify-center px-8 py-3">
              <Phone className="w-5 h-5 mr-2" />
              Cal, l {contactInf, o.phon, e}
            <a;
              hre, f={`mailt, o:${contactInf, o.emai, l}?subjec, t=Free, Consultation Reques, t`}
              className="cyber-button inline-flex items-center justify-center px-8 py-3"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
              <Mail className="w-5 h-5 mr-2" />
              Get Free Consultation;
  );
export default EnhancedServicesShowcase;