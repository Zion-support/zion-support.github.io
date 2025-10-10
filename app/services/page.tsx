'use client';
import React, { lazy, useState } from 'react';
import { Phone, Mail, MapPin, CheckCircle, TrendingUp, Star, Users, Award, Zap, Shield, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Bot, Palette, Music, Video, Heart, Briefcase, Wrench, Navigation as NavIcon, PieChart, Lock, Database, Search, FileText, Smartphone, Settings, Truck, DollarSign, Home, Stethoscope, GraduationCap, Scale, Building, BookOpen, Calculator, Calendar, Clock3, Compass, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location, Cube, Mic, Box, Star } from 'lucide-react';
import { comprehensiveMicroSAASServices, serviceCategories } from '../../data/comprehensive-micro-saas-services-2025';
import { advancedAIServices, aiServiceCategories } from '../../data/advanced-ai-services-2025';
import { comprehensiveITServices, itServiceCategories } from '../../data/comprehensive-it-services-2025';

const Navigation = lazy(() => import('../components/Navigation'))
const Footer = lazy(() => import('../components/Footer'))

const ServicesPage: React.FC = React.memo((props) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedServiceType, setSelectedServiceType] = useState('micro-saas');

  // Filter services based on selected category
  const getFilteredServices = () => {
    let services = [];
    switch (selectedServiceType) {
      case 'micro-saas':
        services = comprehensiveMicroSAASServices;
        break;
      case 'ai-services':
        services = advancedAIServices;
        break;
      case 'it-services':
        services = comprehensiveITServices;
        break;
      default:
        services = comprehensiveMicroSAASServices;
    }

    if (selectedCategory === 'All') {
      return services;
    }
    return services.filter(service => service.category === selectedCategory);
  };

  const getCurrentCategories = () => {
    switch (selectedServiceType) {
      case 'micro-saas':
        return serviceCategories;
      case 'ai-services':
        return aiServiceCategories;
      case 'it-services':
        return itServiceCategories;
      default:
        return serviceCategories;
    }
  };

  const filteredServices = getFilteredServices();
  const currentCategories = getCurrentCategories();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain particle-field">
      <Navigation />
      
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-indigo-600 text-white px-4 py-2 rounded-md z-50" aria-label="Skip to main content">Skip to main content</a>
      <main className="container mx-auto px-4 py-16 pt-24" id="main-content">
        {/* Header */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse glitch" data-text="Our Services">
            Our Services
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Comprehensive AI and IT solutions designed to transform your business operations and drive unprecedented growth.
          </p>
          
          {/* Contact Info */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6 mb-12 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span className="text-white font-medium">+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span className="text-white font-medium">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span className="text-white font-medium">Middletown, DE</span>
              </div>
            </div>
          </div>
        </section>

        {/* Service Type Tabs */}
        <section className="mb-12">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button
              onClick={() => setSelectedServiceType('micro-saas')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                selectedServiceType === 'micro-saas'
                  ? 'bg-cyan-400 text-slate-900'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              Micro SAAS Solutions
            </button>
            <button
              onClick={() => setSelectedServiceType('ai-services')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                selectedServiceType === 'ai-services'
                  ? 'bg-cyan-400 text-slate-900'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              Advanced AI Services
            </button>
            <button
              onClick={() => setSelectedServiceType('it-services')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                selectedServiceType === 'it-services'
                  ? 'bg-cyan-400 text-slate-900'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              IT Services
            </button>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {currentCategories.map((category) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category.name
                    ? 'bg-purple-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </section>

        {/* Services Grid */}
        <section className="mb-16" aria-labelledby="services-heading">
          <h2 id="services-heading" className="text-4xl font-bold text-white mb-8 text-center neon-text">
            {selectedServiceType === 'micro-saas' ? 'Micro SAAS Solutions' : 
             selectedServiceType === 'ai-services' ? 'Advanced AI Services' : 
             'IT Services'}
          </h2>
          <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            {selectedServiceType === 'micro-saas' ? 'Powerful, affordable AI-powered tools designed for modern businesses' :
             selectedServiceType === 'ai-services' ? 'Cutting-edge artificial intelligence solutions for enterprise applications' :
             'Comprehensive IT solutions for modern enterprises'}
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
            {filteredServices.map((service, index) => (
              <article key={service.id} className={`cyber-card p-6 hover:scale-105 transition-all duration-300 ${service.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-cyan-400 text-slate-900 px-3 py-1 rounded-full text-xs font-semibold">
                      Popular
                    </div>
                  </div>
                )}
                
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl mb-2">{service.icon}</div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm text-gray-300">{service.rating}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 neon-text">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                    {service.originalPrice && (
                      <span className="text-sm text-gray-400 line-through">{service.originalPrice}</span>
                    )}
                  </div>
                  <div className="text-xs text-gray-400 mb-2">Market: {service.marketPrice}</div>
                  <div className="text-xs text-gray-500">{service.users} users • {service.freeTrial} free trial</div>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                  <ul className="space-y-1" role="list">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-xs text-gray-300">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-pink-400 mb-2">Benefits:</h4>
                  <ul className="space-y-1" role="list">
                    {service.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-xs text-gray-300">
                        <TrendingUp className="w-3 h-3 text-pink-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="text-center">
                  <div className="text-xs text-gray-500 mb-2">{service.contactInfo}</div>
                  <a 
                    href={service.link}
                    className="cyber-button px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-105"
                  >
                    Learn More
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">
                {selectedServiceType === 'micro-saas' ? comprehensiveMicroSAASServices.length :
                 selectedServiceType === 'ai-services' ? advancedAIServices.length :
                 comprehensiveITServices.length}+
              </div>
              <div className="text-gray-300">Services</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">
                {selectedServiceType === 'micro-saas' ? '$49' :
                 selectedServiceType === 'ai-services' ? '$999' :
                 '$799'}
              </div>
              <div className="text-gray-300">Starting Price</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
              <div className="text-gray-300">Uptime</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-gray-300">Support</div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="cyber-card p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4 neon-text">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Contact us today to discuss how our AI and IT solutions can revolutionize your business operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                aria-label="Get Free Consultation"
              >
                Get Free Consultation
              </a>
              <a
                href="tel:+13024640950"
                className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
})

export default ServicesPage