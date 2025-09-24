import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-router-dom"
import {;
  Brain,;
  Zap,;
  Lock,;
  Cloud,;
  Shield,;
  Users,;
  Database,;
  Network,;
  ArrowRight,;
  CheckCircle,;
  Star,;
  TrendingUp,;
  Award,;
  Rocket,;
  Target,;
  Globe,;
  Phone,;
  Mail,;
  MapPin,;
  ExternalLink,;
  Filter,;
  Search,;
  ChevronDown,;
  ChevronUp;
} from "lucide-react"
import { innovativeServices2028, serviceCategories, pricingTiers, contactInfo } from "../data/innovativeServices2028"
export default function InnovativeServices2028() {;
  const [selectedCategory, setSelectedCategory] = useState('all'),;
  const [searchTerm, setSearchTerm] = useState(''),;
  const [sortBy, setSortBy] = useState('name'),;
  const [expandedService, setExpandedService] = useState<number | null>(null),;

  const filteredServices = innovativeServices2028.filter(service => {;
    const matchesCategory = selectedCategory === 'all' ||;
      serviceCategories.find(cat => cat.id === selectedCategory)?.services.includes(service.id),;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||;
      service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||;
      service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())),;
    return matchesCategory && matchesSearch,;&& matchesSearch,; matchesSearch,
  }),;

  const sortedServices = [...filteredServices].sort((a, b) => {;
    switch (sortBy) {;
      case 'price':;
        return a.price - b.price
      case 'roi':;
        return parseInt(b.roi.split('%')[0]) - parseInt(a.roi.split('%')[0]);
      case 'name':;
        return a.name.localeCompare(b.name)
      default: return 0;
    };
  });
  const getCategoryIcon = (categoryName: string) => {;
    const category = serviceCategories.find(cat => cat.name === categoryName)
    if (!category) return Brain,;

    const iconMap: { [key: string]: any } = {;
      'Brain': Brain;
      'Zap': Zap,;
      'Lock': Lock,;
      'Cloud': Cloud,;
      'Shield': Shield,;
      'Users': Users,;
      'Database': Database,;
      'Network': Network;
    },;

    return iconMap[category.icon] || Brain,
  },;

  const getCategoryColor = (categoryName: string) => {;
    const category = serviceCategories.find(cat => cat.name === categoryName)
    return category?.color || 'from-purple-500 to-pink-500'
  },;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">;
      {/* Futuristic Background */};
      <div className="fixed inset-0 pointer-events-none z-[-1]">;
        {/* Animated grid */};
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse-slow"></[^>]*>

        {/* Floating particles */};
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-float opacity-60"></[^>]*>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-blue-400 rounded-full animate-float animation-delay-1000 opacity-40"></[^>]*>
        <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-purple-400 rounded-full animate-float animation-delay-2000 opacity-50"></[^>]*>

        {/* Gradient orbs */};
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse-slow"></[^>]*>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse-slow animation-delay-2000"></[^>]*>
      </[^>]*>

      {/* Hero Section */};
      <section className="pt-32 pb-20 relative z-10">;
        <div className="container mx-auto px-4 text-center">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            animate={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            className="[^"]*"
          >;
            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">;
              Innovative Services 2028;
            </[^>]*>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">;
              Discover the future of technology with our cutting-edge micro SAAS services;
              AI solutions, and innovative IT services designed to transform your business;
            </[^>]*>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-12">;
              From AI-powered business intelligence to quantum computing solutions;
              we're pioneering the next generation of digital transformation;
            </[^>]*>

            {/* Contact CTA */};
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">;
              <div className="flex items-center space-x-4 text-cyan-400">;
                <[^>]*/>
                <span className="text-lg font-semibold">{contactInfo.phone}</[^>]*>
              </[^>]*>
              <div className="flex items-center space-x-4 text-cyan-400">;
                <[^>]*/>
                <span className="text-lg font-semibold">{contactInfo.email}</[^>]*>
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Filters and Search */};
      <section className="py-8 relative z-10">;
        <div className="container mx-auto px-4">;
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">;
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">;
              {/* Search */};
              <div className="relative">;
                <[^>]*/>
                <input;
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm};
                  onChange={(e) => setSearchTerm(e.target.value)};
                  className="[^"]*"
                />;
              </[^>]*>

              {/* Category Filter */};
              <div className="relative">;
                <select;
                  value={selectedCategory};
                  onChange={(e) => setSelectedCategory(e.target.value)};
                  className="[^"]*"
                >;
                  <option value="all">All Categories</[^>]*>
                  {serviceCategories.map((category) => (;
                    <option key={category.id} value={category.id}>;
                      {category.name};
                    </[^>]*>
                  ))};
                </[^>]*>
                <[^>]*/>
              </[^>]*>

              {/* Sort */};
              <div className="relative">;
                <select;
                  value={sortBy};
                  onChange={(e) => setSortBy(e.target.value)};
                  className="[^"]*"
                >;
                  <option value="name">Sort by Name</[^>]*>
                  <option value="price">Sort by Price</[^>]*>
                  <option value="roi">Sort by ROI</[^>]*>
                </[^>]*>
                <[^>]*/>
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Services Grid */};
      <section className="py-20 relative z-10">;
        <div className="container mx-auto px-4">;
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">;
            {sortedServices.map((service, index) => (;
              <motion.div
                key={service.id};
                initial={{ opacity: 0, y: 20 }};
                animate={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.5, delay: index * 0.1 }};
                className="[^"]*"
              >;
                {/* Background glow */};
                <div className={`absolute inset-0 bg-gradient-to-r ${getCategoryColor(service.category)} rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></[^>]*>

                {/* Card content */};
                <div className="relative bg-slate-800/50 p-8 rounded-2xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 group-hover:bg-slate-800/70 backdrop-blur-sm h-full">;
                  {/* Header */};
                  <div className="flex items-start justify-between mb-6">;
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${getCategoryColor(service.category)} group-hover:scale-110 transition-transform duration-300`}>;
                      {React.createElement(getCategoryIcon(service.category), { className: "w-8 h-8 text-white" })};
                    </[^>]*>
                    <div className="text-right">;
                      <div className="text-2xl font-bold text-cyan-400">${service.price.toLocaleString()}</[^>]*>
                      <div className="text-sm text-gray-400">per month</[^>]*>
                    </[^>]*>
                  </[^>]*>

                  {/* Service Info */};
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">;
                    {service.name};
                  </[^>]*>
                  <p className="text-gray-400 mb-6 leading-relaxed">;
                    {service.description};
                  </[^>]*>

                  {/* Category Badge */};
                  <div className="mb-6">;
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${getCategoryColor(service.category)} text-white`}>;
                      {service.category};
                    </[^>]*>
                  </[^>]*>

                  {/* Key Features */};
                  <div className="mb-6">;
                    <h4 className="text-sm font-semibold text-gray-300 mb-3">Key Features:</[^>]*>
                    <div className="space-y-2">;
                      {service.features.slice(0, 3).map((feature, idx) => (;
                        <div key={idx} className="flex items-center text-gray-400 text-sm">;
                          <[^>]*/>
                          {feature};
                        </[^>]*>
                      ))};
                      {service.features.length > 3 && (;&& (; (
                        <div className="[^"]*"
                             onClick={() => setExpandedService(expandedService === service.id ? null : service.id)}>
                          {expandedService === service.id ? 'Show less' : `+${service.features.length - 3} more features`}
                        </[^>]*>
                      )};
                    </[^>]*>
                  </[^>]*>

                  {/* Expanded Features */};
                  <AnimatePresence>;
                    {expandedService === service.id && (;&& (; (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }};
                        animate={{ opacity: 1, height: 'auto' }};
                        exit={{ opacity: 0, height: 0 }};
                        transition={{ duration: 0.3 }};
                        className="[^"]*"
                      >;
                        <div className="space-y-2">;
                          {service.features.slice(3).map((feature, idx) => (;
                            <div key={idx} className="flex items-center text-gray-400 text-sm">;
                              <[^>]*/>
                              {feature};
                            </[^>]*>
                          ))};
                        </[^>]*>
                      </[^>]*>
                    )};
                  </[^>]*>

                  {/* Benefits */};
                  <div className="mb-6">;
                    <h4 className="text-sm font-semibold text-gray-300 mb-3">Key Benefits:</[^>]*>
                    <div className="space-y-2">;
                      {service.benefits.slice(0, 2).map((benefit, idx) => (;
                        <div key={idx} className="flex items-center text-gray-400 text-sm">;
                          <[^>]*/>
                          {benefit};
                        </[^>]*>
                      ))};
                    </[^>]*>
                  </[^>]*>

                  {/* ROI and Setup */};
                  <div className="grid grid-cols-2 gap-4 mb-6">;
                    <div className="text-center p-3 bg-slate-700/50 rounded-lg">;
                      <div className="text-lg font-bold text-green-400">{service.roi}</[^>]*>
                      <div className="text-xs text-gray-400">ROI</[^>]*>
                    </[^>]*>
                    <div className="text-center p-3 bg-slate-700/50 rounded-lg">;
                      <div className="text-lg font-bold text-blue-400">{service.setupTime}</[^>]*>
                      <div className="text-xs text-gray-400">Setup</[^>]*>
                    </[^>]*>
                  </[^>]*>

                  {/* Action Buttons */};
                  <div className="flex space-x-3">;
                    <button;
                      onClick={() => window.open(`mailto:${contactInfo.email}?subject=Inquiry about ${service.name}`, '_blank')};
                      className="[^"]*"
                    >;
                      Get Started;
                    </[^>]*>
                    <button;
                      onClick={() => setExpandedService(expandedService === service.id ? null : service.id)}
                      className="[^"]*"
                    >;
                      {expandedService === service.id ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </[^>]*>
                  </[^>]*>

                  {/* Contact Info */};
                  <div className="mt-6 pt-6 border-t border-slate-700/50">;
                    <div className="flex items-center justify-between text-sm text-gray-400">;
                      <div className="flex items-center space-x-2">;
                        <[^>]*/>
                        <span>{contactInfo.phone}</[^>]*>
                      </[^>]*>
                      <div className="flex items-center space-x-2">;
                        <[^>]*/>
                        <span>{contactInfo.email}</[^>]*>
                      </[^>]*>
                    </[^>]*>
                  </[^>]*>
                </[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Pricing Section */};
      <section className="py-20 bg-black/30 relative z-10">;
        <div className="container mx-auto px-4">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            viewport={{ once: true }};
            className="[^"]*"
          >;
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">;
              Flexible Pricing Plans;
            </[^>]*>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
              Choose the perfect plan for your business needs and scale as you grow;
            </[^>]*>
          </[^>]*>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">;
            {pricingTiers.map((tier, index) => (;
              <motion.div
                key={tier.name};
                initial={{ opacity: 0, y: 20 }};
                whileInView={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.5, delay: index * 0.1 }};
                viewport={{ once: true }};
                className={`relative p-8 rounded-2xl border-2 transition-all duration-300 ${;
                  tier.recommended
                    ? 'bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border-cyan-500/50 scale-105'
                    : 'bg-slate-800/50 border-slate-700/50 hover:border-cyan-500/30'
                }`};
              >;
                {tier.recommended && (;&& (; (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">;
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">;
                      Recommended;
                    </[^>]*>
                  </[^>]*>
                )};

                <div className="text-center">;
                  <h3 className="text-2xl font-bold text-white mb-4">{tier.name}</[^>]*>
                  <div className="mb-6">;
                    <span className="text-4xl font-bold text-cyan-400">{tier.price}</[^>]*>
                    <span className="text-gray-400">/{tier.period}</[^>]*>
                  </[^>]*>
                  <p className="text-gray-300 mb-8">{tier.description}</[^>]*>

                  <ul className="space-y-3 mb-8 text-left">;
                    {tier.features.map((feature, idx) => (;
                      <li key={idx} className="flex items-center text-gray-300">;
                        <[^>]*/>
                        {feature};
                      </[^>]*>
                    ))};
                  </[^>]*>

                  <button;
                    onClick={() => window.open(`mailto:${contactInfo.email}?subject=Inquiry about ${tier.name} pricing plan`, '_blank')};
                    className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${;
                      tier.recommended
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                        : 'bg-slate-700 text-white hover:bg-slate-600'
                    }`};
                  >;
                    Get Started;
                  </[^>]*>
                </[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Contact Section */};
      <section className="py-20 relative z-10">;
        <div className="container mx-auto px-4">;
          <div className="max-w-4xl mx-auto text-center">;
            <motion.div
              initial={{ opacity: 0, y: 20 }};
              whileInView={{ opacity: 1, y: 0 }};
              transition={{ duration: 0.8 }};
              viewport={{ once: true }};
            >;
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">;
                Ready to Transform Your Business?;
              </[^>]*>
              <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">;
                Contact our team of experts to discuss how our innovative services can drive your business forward;
              </[^>]*>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">;
                <div className="text-center">;
                  <[^>]*/>
                  <h3 className="text-xl font-semibold text-white mb-2">Call Us</[^>]*>
                  <p className="text-cyan-400 font-semibold">{contactInfo.phone}</[^>]*>
                </[^>]*>
                <div className="text-center">;
                  <[^>]*/>
                  <h3 className="text-xl font-semibold text-white mb-2">Email Us</[^>]*>
                  <p className="text-cyan-400 font-semibold">{contactInfo.email}</[^>]*>
                </[^>]*>
                <div className="text-center">;
                  <[^>]*/>
                  <h3 className="text-xl font-semibold text-white mb-2">Visit Us</[^>]*>
                  <p className="text-cyan-400 font-semibold text-sm">{contactInfo.address}</[^>]*>
                </[^>]*>
              </[^>]*>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">;
                <button;
                  onClick={() => window.open(`mailto:${contactInfo.email}?subject=Business Inquiry`, '_blank')};
                  className="[^"]*"
                >;
                  Start Your Journey;
                </[^>]*>
                <button;
                  onClick={() => window.open(`tel:${contactInfo.phone}`, '_blank')};
                  className="[^"]*"
                >;
                  Schedule a Call;
                </[^>]*>
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
    </[^>]*>
  );
};
