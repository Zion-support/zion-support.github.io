import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, TrendingUp, Users, Shield, Zap, Brain, Cloud, Database, Lock, Globe, Target, Rocket, CheckCircle, Phone, Mail, MapPin, ExternalLink } from 'lucide-react';
import { comprehensiveRealServices2025 } from '../src/data/comprehensive-real-services-2025';

export default function ComprehensiveServicesShowcase2025() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['all', ...new Set(comprehensiveRealServices2025.map(service => service.category))];

  const filteredServices = comprehensiveRealServices2025.filter(service => 
    (selectedCategory === 'all' || service.category === selectedCategory) &&
    (service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
     service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
     service.tagline.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 py-20 sm:py-32">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-sm">
              <Zap className="h-4 w-4" />
              <span>2025 Innovation Showcase</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Revolutionary AI & Tech Services
            </h1>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              Discover our comprehensive portfolio of cutting-edge AI, cybersecurity, quantum computing, and emerging technology solutions designed to transform your business.
            </p>
            <div className="mt-8 flex items-center justify-center gap-6">
              <div className="flex items-center gap-2 text-sm text-blue-100">
                <Users className="h-4 w-4" />
                <span>1000+ Enterprise Clients</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-blue-100">
                <Star className="h-4 w-4 text-yellow-400" />
                <span>4.8/5 Customer Rating</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-blue-100">
                <Shield className="h-4 w-4" />
                <span>SOC 2 Type II Certified</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Banner */}
      <section className="bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-6 py-4 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-blue-600" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-blue-600" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-blue-600" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <a 
                href="https://ziontechgroup.com" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 transition-colors"
              >
                <span>Visit Website</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Market Overview */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Market-Leading Solutions
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Our services are designed to address the most pressing challenges in today's rapidly evolving technology landscape.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-6 text-center">
              <div className="mx-auto h-12 w-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">AI & Machine Learning</h3>
              <p className="text-sm text-gray-600 mb-3">Advanced AI solutions for business automation and intelligence</p>
              <div className="text-2xl font-bold text-blue-600">$15.7B</div>
              <div className="text-sm text-green-600">+35% YoY Growth</div>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-pink-100 rounded-xl p-6 text-center">
              <div className="mx-auto h-12 w-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Cybersecurity</h3>
              <p className="text-sm text-gray-600 mb-3">Quantum-resistant security and threat protection</p>
              <div className="text-2xl font-bold text-red-600">$182.3B</div>
              <div className="text-sm text-green-600">+12.4% YoY Growth</div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl p-6 text-center">
              <div className="mx-auto h-12 w-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">FinTech & Trading</h3>
              <p className="text-sm text-gray-600 mb-3">Quantum-powered financial solutions</p>
              <div className="text-2xl font-bold text-green-600">$8.9B</div>
              <div className="text-sm text-green-600">+28% YoY Growth</div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-violet-100 rounded-xl p-6 text-center">
              <div className="mx-auto h-12 w-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                <Rocket className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Emerging Tech</h3>
              <p className="text-sm text-gray-600 mb-3">Quantum computing and blockchain solutions</p>
              <div className="text-2xl font-bold text-purple-600">$45.2B</div>
              <div className="text-sm text-green-600">+18.7% YoY Growth</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter and Search */}
      <section className="py-8 bg-gray-50 border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-gray-600">
              Showing {filteredServices.length} of {comprehensiveRealServices2025.length} services
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredServices.map((service) => (
              <div key={service.id} className="group relative bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                    POPULAR
                  </div>
                )}

                <div className="p-6">
                  {/* Service Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="text-3xl">{service.icon}</div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {service.name}
                        </h3>
                        <p className="text-sm text-gray-500">{service.tagline}</p>
                      </div>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mb-4">
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-gray-900">{service.price}</span>
                      <span className="text-gray-500">/{service.billing}</span>
                    </div>
                    {service.trialDays && (
                      <p className="text-sm text-green-600 font-medium">
                        {service.trialDays}-day free trial
                      </p>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {service.description}
                  </p>

                  {/* Key Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-xs text-gray-600">
                          <CheckCircle className="h-3 w-3 text-green-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Market Info */}
                  <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div>
                        <span className="text-gray-500">Market Size:</span>
                        <p className="font-medium">{service.marketSize}</p>
                      </div>
                      <div>
                        <span className="text-gray-500">Growth Rate:</span>
                        <p className="font-medium text-green-600">{service.growthRate}</p>
                      </div>
                    </div>
                  </div>

                  {/* Category and Rating */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {service.category}
                    </span>
                    {service.rating && (
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 text-yellow-400 fill-current" />
                        <span className="text-xs text-gray-600">{service.rating}</span>
                        <span className="text-xs text-gray-400">({service.reviews})</span>
                      </div>
                    )}
                  </div>

                  {/* ROI */}
                  <div className="mb-4 p-3 bg-green-50 rounded-lg">
                    <div className="text-xs">
                      <span className="text-gray-500">ROI:</span>
                      <p className="font-medium text-green-700">{service.roi}</p>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex gap-2">
                    <a
                      href={service.link}
                      className="flex-1 inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                    <a
                      href="tel:+13024640950"
                      className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                    >
                      Contact
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <svg className="h-16 w-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No services found</h3>
              <p className="text-gray-600">Try adjusting your search terms or filters.</p>
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Transform Your Business?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
              Let's discuss how our innovative services can help you achieve your goals and stay ahead of the competition.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+13024640950"
                className="w-full sm:w-auto rounded-md bg-white px-6 py-3 text-sm font-semibold text-blue-600 shadow-sm hover:bg-gray-50 transition-all duration-200"
              >
                Call Now: +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="w-full sm:w-auto rounded-md border border-white px-6 py-3 text-sm font-semibold text-white hover:bg-white hover:text-blue-600 transition-all duration-200"
              >
                Email Us
              </a>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="mx-auto h-12 w-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">Phone Support</h3>
                <p className="mt-2 text-blue-100">
                  +1 302 464 0950<br />
                  24/7 Availability
                </p>
              </div>
              <div>
                <div className="mx-auto h-12 w-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">Email Support</h3>
                <p className="mt-2 text-blue-100">
                  kleber@ziontechgroup.com<br />
                  Fast Response Time
                </p>
              </div>
              <div>
                <div className="mx-auto h-12 w-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">Visit Us</h3>
                <p className="mt-2 text-blue-100">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}