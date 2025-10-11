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

      <div>
          <div>
          <div className="text-4xl">{service.icon}

          <div>
          <div>
              <CategoryIcon />
              <span className="text-xs text-cyan-400 font-medium uppercase tracking-wide">
                {serviceCategories.find(cat => cat.id === service.category)?.name}

            <h3 className="text-xl font-bold text-white mt-1 neon-text">
              {service.name}

        <div>
          {service.popular && (
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs px-2 py-1 rounded-full font-bold flex items-center">
              <Star />
              Popular
              <Sparkles />
              New
      {/* Description */}

      <p className="text-gray-300 mb-4 leading-relaxed">
        {service.description}

      {/* Key Features */}

      <div>
        <h4 className="text-sm font-semibold text-cyan-400 mb-2 flex items-center">
          <CheckCircle />
          Key Features
          {service.features.slice(0, 3).map((feature, idx) => (
            <li key={idx} className="text-xs text-gray-300 flex items-center">
              <div>
              {feature}

          ))}

          {service.features.length > 3 && (
            <li className="text-xs text-cyan-400">+{service.features.length - 3} more features
          )}

      {/* Benefits */}

      <div>
        <h4 className="text-sm font-semibold text-green-400 mb-2 flex items-center">
          <TrendingUp />
          Key Benefits
          {service.benefits.slice(0, 2).map((benefit, idx) => (
            <div>
              {benefit}

          ))}

      {/* Pricing */}

      <div>
          <div>
          <div>
          <div>
              {formatPrice(service.pricing)}

            {service.marketPrice && (
              <div>
                Market: ${service.marketPrice.min}-${service.marketPrice.max}

            )}

          <div>
            <div className="text-xs text-cyan-400 font-medium">Starting Price
            <div className="text-xs text-gray-400">per {service.pricing.period}

      {/* Contact Actions */}

      <div>
        <$2 />
          href={`tel:${contactInfo.phone}`}

          className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center group">
          <Phone />
          Call Now,
  
        <div>
          <$2 />
            href={`mailto:${contactInfo.email}?subject=Inquiry about ${service.name}`}

            className="bg-slate-800 text-cyan-400 py-2 px-3 rounded-lg font-medium hover:bg-slate-700 transition-all duration-300 flex items-center justify-center text-sm group">
            <Mail />
            Email,
  
          <$2 />
            href={service.contact.demo}

            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-800 text-purple-400 py-2 px-3 rounded-lg font-medium hover:bg-slate-700 transition-all duration-300 flex items-center justify-center text-sm group">
            <ExternalLink />
            Demo,
  
        </div>
      </div>
      {/* Use Cases */}

      <div>
        <h4 className="text-xs font-semibold text-gray-400 mb-2">Perfect For:
        <div>
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
      <div>
        {/* Header */}

        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 neon-text">
            Our Services,
  
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive AI, IT, and Micro SAAS solutions designed to transform your business operations
          {/* Contact Info Banner */}

          <div>
          <div>
              <div>
                <Phone />
                <div>
                  <div className="text-white font-medium">{contactInfo.phone}

                  <div className="text-gray-400 text-sm">Call us anytime
              <div>
                <Mail />
                <div>
                  <div className="text-white font-medium">{contactInfo.email}

                  <div className="text-gray-400 text-sm">Email us
              <div>
                <ExternalLink />
                <div>
                  <div className="text-white font-medium">{contactInfo.website}

                  <div className="text-gray-400 text-sm">Visit our site
        {/* Category Filter */}

        <div>
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

        <div>
          {filteredServices.map((service, index) => (
            <ServiceCard />
          ))}

        {/* Popular Services Section */}

        {selectedCategory === 'all' && (
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 text-center neon-text">Most Popular Services
            <div>
              {popularServices.map((service, index) => (
                <div>
                  <div className="text-3xl mb-3 text-center">{service.icon}

                  <h4 className="text-lg font-semibold text-white mb-2 text-center">{service.name}

                  <p className="text-sm text-gray-300 mb-3 text-center">{service.description}

                  <div>
          <div>
                      ${service.pricing.starting.toLocaleString()}/{service.pricing.period === 'month' ? 'mo' : 'yr'}

                    <$2 />
                      href={`tel:${contactInfo.phone}`}

                      className="text-cyan-400 hover:text-cyan-300 font-medium text-sm transition-colors">
                      Call Now →
              ))}

        )}

        {/* CTA Section */}

        <div>
          <h3 className="text-2xl font-bold text-white mb-4 neon-text">
            Ready to Transform Your Business?
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Get a free consultation and discover how our AI and IT solutions can drive your business forward.
          <div>
            <$2 />
              href={`tel:${contactInfo.phone}`}

              className="cyber-button inline-flex items-center justify-center px-8 py-3">
              <Phone />
              Call {contactInfo.phone}

            <$2 />
              href={`mailto:${contactInfo.email}?subject=Free Consultation Request`}

              className="cyber-button inline-flex items-center justify-center px-8 py-3"
              style={{ background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}

            >
              <Mail />
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