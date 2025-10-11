'use client'
import React, { useCallback, useState, useEffect, Suspense, lazy, memo } from 'react'
import { 
// Preload critical components
const preloadComponents = () => {
  if (typeof window !== 'undefined') {
    setTimeout(() => {
  }
};

// Loading skeleton component
const ServiceCardSkeleton: React.FC = memo(() => (
  <div className="bg-white rounded-lg shadow-lg p-6 animate-pulse" role="status" aria-label="Loading service card">
    <div className="h-8 bg-gray-200 rounded mb-4 w-3/4"></div>
    <div className="h-4 bg-gray-200 rounded mb-2"></div>
    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
  </div>
));
ServiceCardSkeleton.displayName = 'ServiceCardSkeleton';

const HomePage: React.FC = () => {
  // Analytics tracking for phone clicks - optimized
  const handlePhoneClick = useCallback(() => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'phone_click', {
        event_category: 'engagement',
        event_label: 'main_phone_number'
      })
    }
      
      {/* Analytics */}
      <Analytics />
      
      {/* Security Enhancer */}
      <SecurityEnhancer />

      {/* Navigation */}
      <Navigation />

      {/* Hero Section with Futuristic Design */}
      <$2 />
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        role="banner"
        aria-label="Zion Tech Group - AI and IT Solutions"
      >
        {/* Animated Background */}
        
        {/* Neon Grid Overlay */}
        <$2 />
          className="absolute inset-0 cyber-grid" 
          aria-hidden="true"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        ></div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent neon-text">
        {/* Neon Grid Overlay */}
        < className="absolute inset-0" style={{$2 />
          backgroundImage: `
            linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              ZION TECH GROUP
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <div className="flex items-center text-cyan-400 text-lg">
                <Phone className="w-6 h-6 mr-2" />
                <a href="tel:+13024640950" onClick={handlePhoneClick} className="hover:text-cyan-300 transition-colors">
                  +1 302 464 0950
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center text-pink-400 text-lg">
                <MapPin className="w-6 h-6 mr-2" aria-hidden="true" />
                <address className="not-italic">
                  364 E Main St STE 1008, Middletown DE 19709
                </address>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto" role="region" aria-label="Key Performance Metrics">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300 hover:scale-105" role="article">
                <div className="text-4xl mb-4" aria-hidden="true">🚀</div>
                <h3 className="text-xl font-bold text-white mb-2">300% ROI</h3>
                <p className="text-gray-300">Average return on AI investments</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-purple-400/30 hover:border-purple-400/60 transition-all duration-300 hover:scale-105" role="article">
                <div className="text-4xl mb-4" aria-hidden="true">⚡</div>
                <h3 className="text-xl font-bold text-white mb-2">70% Cost Reduction</h3>
                <p className="text-gray-300">Through intelligent automation</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-pink-400/30 hover:border-pink-400/60 transition-all duration-300 hover:scale-105" role="article">
                <div className="text-4xl mb-4" aria-hidden="true">🎯</div>
                <h3 className="text-xl font-bold text-white mb-2">90% Efficiency</h3>
                <p className="text-gray-300">Gains with our AI solutions</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Micro SAAS Services Section */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800" role="region" aria-labelledby="micro-saas-heading">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
              Micro SAAS Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Powerful, affordable AI-powered tools designed for modern businesses. 
              Start with our micro SAAS solutions and scale as you grow.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {microSAASServices.map((service, index) => (
              <div key={index} className="group relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border border-cyan-400/20 hover:border-cyan-400/60 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20">
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                  </div>
                )}
                
                <div className="text-center mb-4">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
                    {service.icon}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {service.description}
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-3xl font-bold text-cyan-400">{service.price}
                    <span className="text-sm text-gray-400">/month
                  <div className="flex items-center justify-center gap-2 text-sm">
                    <span className="text-gray-400 line-through">{service.marketPrice}
                    <span className="bg-green-500 text-white px-2 py-1 rounded text-xs font-bold">
                      Save {service.savings}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Features:
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                    ))}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-purple-400 mb-3">Benefits:
                  <ul className="space-y-1">
                    {service.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-sm text-gray-300">
                        ✓ {benefit}
                    ))}
                <div className="text-center">
                  <$2 />
                    href={service.link}
                    className="inline-flex items-center justify-center w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold py-3 px-6 rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
                  </a>
                </div>
              </article>
            ))}
      {/* AI Services Section */}
      <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900" role="region" aria-labelledby="ai-services-heading">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
              AI Services & Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge artificial intelligence solutions tailored for enterprise needs. 
              Transform your business with our advanced AI capabilities.
            </p>
          </div>
          
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`} aria-hidden="true">
                    <service.icon className={`w-8 h-8 ${service.color}`} />
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                    {service.title}
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {service.description}
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-3xl font-bold text-purple-400">{service.price}
                    <span className="text-sm text-gray-400">/month
                  <div className="flex items-center justify-center gap-2 text-sm">
                    <span className="text-gray-400 line-through">{service.marketPrice}
                    <span className="bg-green-500 text-white px-2 py-1 rounded text-xs font-bold">
                      Save {service.savings}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-purple-400 mb-3">Features:
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                    ))}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-pink-400 mb-3">Benefits:
                  <ul className="space-y-1">
                    {service.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-sm text-gray-300">
                        ✓ {benefit}
                    ))}
                <div className="text-center">
                  <$2 />
                    href={`mailto:${service.contact}?subject=Interest in ${service.title}`}
                    className="inline-flex items-center justify-center w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 px-6 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Contact Us
                    <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
                  </a>
                </div>
              </article>
            ))}
      {/* IT Services Section */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800" role="region" aria-labelledby="it-services-heading">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
              IT Services & Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive IT services to support your digital transformation journey. 
              From infrastructure to cybersecurity, we've got you covered.
            </p>
          </div>
          
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-green-500/20 to-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`} aria-hidden="true">
                    <service.icon className={`w-8 h-8 ${service.color}`} />
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
                    {service.title}
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {service.description}
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-3xl font-bold text-green-400">{service.price}
                    <span className="text-sm text-gray-400">/month
                  <div className="flex items-center justify-center gap-2 text-sm">
                    <span className="text-gray-400 line-through">{service.marketPrice}
                    <span className="bg-green-500 text-white px-2 py-1 rounded text-xs font-bold">
                      Save {service.savings}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-green-400 mb-3">Features:
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                    ))}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-3">Benefits:
                  <ul className="space-y-1">
                    {service.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-sm text-gray-300">
                        ✓ {benefit}
                    ))}
                <div className="text-center">
                  <$2 />
                    href={`tel:${service.contact}`}
                    className="inline-flex items-center justify-center w-full bg-gradient-to-r from-green-500 to-cyan-500 text-white font-bold py-3 px-6 rounded-lg hover:from-green-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Call Now
                    <Phone className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </article>
            ))}
      {/* Specialized Services Section */}
      <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specializedServicesData.map((service, index) => (
              <div key={index} className="group relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-orange-400/20 hover:border-orange-400/60 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20">
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className={`w-8 h-8 ${service.color}`} />
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                    {service.title}
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {service.description}
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-3xl font-bold text-orange-400">{service.price}
                    <span className="text-sm text-gray-400">/month
                  <div className="flex items-center justify-center gap-2 text-sm">
                    <span className="text-gray-400 line-through">{service.marketPrice}
                    <span className="bg-green-500 text-white px-2 py-1 rounded text-xs font-bold">
                      Save {service.savings}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-orange-400 mb-3">Features:
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                    ))}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-red-400 mb-3">Benefits:
                  <ul className="space-y-1">
                    {service.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-sm text-gray-300">
                        ✓ {benefit}
                    ))}
                <div className="text-center">
                  <$2 />
                    href={service.contact.startsWith('+') ? `tel:${service.contact}` : `mailto:${service.contact}?subject=Interest in ${service.title}`}
                    className="inline-flex items-center justify-center w-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold py-3 px-6 rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    {service.contact.startsWith('+') ? 'Call Now' : 'Email Us'}
                    <ArrowRight className="w-4 h-4 ml-2" />
            ))}
      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800" role="region" aria-labelledby="contact-heading">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 id="contact-heading" className="text-5xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Ready to Transform Your Business?
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Get in touch with our experts to discuss your specific needs and discover how our AI and IT solutions can drive your success.
            </p>
          </div>
          
              <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
              <p className="text-gray-300 mb-4">Send us your requirements</p>
              <$2 />
                href="mailto:kleber@ziontechgroup.com" 
                className="text-purple-400 hover:text-purple-300 text-lg font-semibold"
                aria-label="Email us at kleber@ziontechgroup.com"
              >
                kleber@ziontechgroup.com
              <h3 className="text-xl font-bold text-white mb-2">Visit Us</h3>
              <p className="text-gray-300 mb-4">Our headquarters location</p>
              <address className="text-pink-400 text-sm not-italic">
                364 E Main St STE 1008<br />
                Middletown DE 19709
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
