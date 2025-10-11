'use client'
import React, { useState, useEffect } from 'react'
import { Phone, Mail, ExternalLink, Star, CheckCircle, ArrowRight, Zap, Brain, Cloud, Rocket, TrendingUp, Users, Award, Shield, Clock, DollarSign, Target, BarChart, Sparkles } from 'lucide-react'
import { services, serviceCategories, contactInfo } from '../data/services'
interface ServiceCardProps {
    service: typeof services[0],
  index: number
  }
const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
    const [isHovered, setIsHovered] = useState(false)
  const formatPrice = (pricing: typeof service.pricing) => {
    if (pricing.custom) {
      return 'Custom Pricing'
  }
    return `$${pricing.starting.toLocaleString()}/${pricing.period === 'month' ? 'mo' : pricing.period === 'year' ? 'yr' : 'one-time'}`
  }
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'ai': return Brain
      case 'micro-saas': return Zap
      case 'it': return Cloud
      case 'emerging-tech': return Rocket,
      default: return Target
  }
  }
  const CategoryIcon = getCategoryIcon(service.category)
  return (
    <$2 />
      className={`quantum-card p-6 energy-pulse hover:scale-105 transition-all duration-500 ${
        isHovered ? 'shadow-2xl' : 'shadow-lg'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        animationDelay: `${index * 100}ms`,
        background: isHovered 
          ? 'linear-gradient(135deg, rgba(0, 255, 255, 0.15), rgba(255, 0, 255, 0.15))'
          : 'linear-gradient(135deg, rgba(0, 255, 255, 0.1), rgba(255, 0, 255, 0.1))'
      }}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="text-4xl">{service.icon}
          <div>
            <div className="flex items-center space-x-2">
              <CategoryIcon className="w-5 h-5 text-cyan-400" />
              <span className="text-xs text-cyan-400 font-medium uppercase tracking-wide">
                {serviceCategories.find(cat => cat.id === service.category)?.name}
            <h3 className="text-xl font-bold text-white mt-1 neon-text">
              {service.name}
        <div className="flex space-x-2">
          {service.popular && (
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs px-2 py-1 rounded-full font-bold flex items-center">
              <Star className="w-3 h-3 mr-1" />
              Popular
              <Sparkles className="w-3 h-3 mr-1" />
              New
      {/* Description */}
      <p className="text-gray-300 mb-4 leading-relaxed">
        {service.description}
      {/* Key Features */}
      <div className="mb-4">
        <h4 className="text-sm font-semibold text-cyan-400 mb-2 flex items-center">
          <CheckCircle className="w-4 h-4 mr-2" />
          Key Features
          {service.features.slice(0, 3).map((feature, idx) => (
            <li key={idx} className="text-xs text-gray-300 flex items-center">
              <div className="w-1 h-1 bg-cyan-400 rounded-full mr-2 flex-shrink-0" />
              {feature}
          ))}
          {service.features.length > 3 && (
            <li className="text-xs text-cyan-400">+{service.features.length - 3} more features
          )}
      {/* Benefits */}
      <div className="mb-4">
        <h4 className="text-sm font-semibold text-green-400 mb-2 flex items-center">
          <TrendingUp className="w-4 h-4 mr-2" />
          Key Benefits
          {service.benefits.slice(0, 2).map((benefit, idx) => (
            <div key={idx} className="text-xs text-gray-300 bg-slate-800/50 rounded px-2 py-1">
              {benefit}
          ))}
      {/* Pricing */}
      <div className="mb-4 p-3 bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-lg">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-lg font-bold text-white">
              {formatPrice(service.pricing)}
            {service.marketPrice && (
              <div className="text-xs text-gray-400">
                Market: ${service.marketPrice.min}-${service.marketPrice.max}
            )}
          <div className="text-right">
            <div className="text-xs text-cyan-400 font-medium">Starting Price
            <div className="text-xs text-gray-400">per {service.pricing.period}
      {/* Contact Actions */}
      <div className="space-y-2">
        <$2 />
          href={`tel:${contactInfo.phone}`}
          className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 px-4 rounded-lg font-medium hover: from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center group">
          <Phone className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
          Call Now,
  
        <div className="grid grid-cols-2 gap-2">
          <$2 />
            href={`mailto:${contactInfo.email}?subject=Inquiry about ${service.name}`}
            className="bg-slate-800 text-cyan-400 py-2 px-3 rounded-lg font-medium hover: bg-slate-700 transition-all duration-300 flex items-center justify-center text-sm group">
            <Mail className="w-4 h-4 mr-1 group-hover:scale-110 transition-transform" />
            Email,
  
          <$2 />
            href={service.contact.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-800 text-purple-400 py-2 px-3 rounded-lg font-medium hover: bg-slate-700 transition-all duration-300 flex items-center justify-center text-sm group">
            <ExternalLink className="w-4 h-4 mr-1 group-hover:scale-110 transition-transform" />
            Demo,
  
        </div>
      </div>
      {/* Use Cases */}
      <div className="mt-4 pt-4 border-t border-slate-700">
        <h4 className="text-xs font-semibold text-gray-400 mb-2">Perfect For:
        <div className="flex flex-wrap gap-1">
          {service.useCases.slice(0, 2).map((useCase, idx) => (
            <span key={idx} className="text-xs bg-slate-700/50 text-gray-300 px-2 py-1 rounded">
              {useCase}
          ))}
        </div>
      </div>
    </div>
  )
}
const EnhancedServicesShowcase: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [filteredServices, setFilteredServices] = useState(services)
  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredServices(services)
  } else {
    setFilteredServices(services.filter(service => service.category === selectedCategory))
  }
  }, [selectedCategory])
  const popularServices = services.filter(service => service.popular)
  const newServices = services.filter(service => service.new)
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md: text-5xl font-bold text-white mb-4 neon-text">
            Our Services,
  
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive AI, IT, and Micro SAAS solutions designed to transform your business operations
          {/* Contact Info Banner */}
          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg p-6 mb-8 cyber-card">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="flex items-center justify-center space-x-2">
                <Phone className="w-5 h-5 text-cyan-400" />
                <div>
                  <div className="text-white font-medium">{contactInfo.phone}
                  <div className="text-gray-400 text-sm">Call us anytime
              <div className="flex items-center justify-center space-x-2">
                <Mail className="w-5 h-5 text-cyan-400" />
                <div>
                  <div className="text-white font-medium">{contactInfo.email}
                  <div className="text-gray-400 text-sm">Email us
              <div className="flex items-center justify-center space-x-2">
                <ExternalLink className="w-5 h-5 text-cyan-400" />
                <div>
                  <div className="text-white font-medium">{contactInfo.website}
                  <div className="text-gray-400 text-sm">Visit our site
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <$2 />
            onClick={() =>setSelectedCategory('all')}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
              selectedCategory === 'all'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
            }`}
          >
            All Services
          {serviceCategories.map((category) => (
            <$2 />
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                  : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
              }`}
            >
              <span className="text-lg">{category.icon}
              <span>{category.name}
          ))}
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredServices.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        {/* Popular Services Section */}
        {selectedCategory === 'all' && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-white mb-6 text-center neon-text">Most Popular Services
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {popularServices.map((service, index) => (
                <div key={service.id} className="cyber-card p-4 hover:scale-105 transition-all duration-300">
                  <div className="text-3xl mb-3 text-center">{service.icon}
                  <h4 className="text-lg font-semibold text-white mb-2 text-center">{service.name}
                  <p className="text-sm text-gray-300 mb-3 text-center">{service.description}
                  <div className="text-center">
                    <div className="text-lg font-bold text-cyan-400 mb-2">
                      ${service.pricing.starting.toLocaleString()}/{service.pricing.period === 'month' ? 'mo' : 'yr'}
                    <$2 />
                      href={`tel:${contactInfo.phone}`}
                      className="text-cyan-400 hover:text-cyan-300 font-medium text-sm transition-colors">
                      Call Now →
              ))}
        )}
        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg p-8 cyber-card">
          <h3 className="text-2xl font-bold text-white mb-4 neon-text">
            Ready to Transform Your Business?
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Get a free consultation and discover how our AI and IT solutions can drive your business forward.
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <$2 />
              href={`tel:${contactInfo.phone}`}
              className="cyber-button inline-flex items-center justify-center px-8 py-3">
              <Phone className="w-5 h-5 mr-2" />
              Call {contactInfo.phone}
            <$2 />
              href={`mailto:${contactInfo.email}?subject=Free Consultation Request`}
              className="cyber-button inline-flex items-center justify-center px-8 py-3"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              <Mail className="w-5 h-5 mr-2" />
              Get Free Consultation
          </div>
        </div>
      </div>
    </section>
  )
}
export default EnhancedServicesShowcase</a>
  </h3>
  </button>
  </p>
  </h2>
  </string>
  </a>
  </a>
  </a>
  </h4>
  </li>
  </h4>
  </span>
  </span>
  </ServiceCardProps>
</div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></span></span></span></p></p></p></h3></h3></h4></h4></li>