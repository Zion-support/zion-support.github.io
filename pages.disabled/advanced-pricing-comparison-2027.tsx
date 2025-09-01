import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {

  CheckCircle, 
  XCircle, 
  Star, 
  TrendingUp, 
  DollarSign, 
  Clock, 
  Users, 
  Shield, 
  Zap, 
  Brain, 
  Globe, 
  Rocket,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  ArrowRight,
  Award,
  Target,
  BarChart3,
  Lightbulb
} from 'lucide-react';

import { zion2027AdvancedMicroSaasServices } from '../data/zion-2027-advanced-micro-saas-services';
import { zion2027EmergingTechnologyServices } from '../data/zion-2027-emerging-technology-services';

export default function AdvancedPricingComparison2027() {

  const [selectedCategory, setSelectedCategory] = useState('all');

  const title = 'Advanced Pricing Comparison 2027 — Zion Tech Group';
  const description = 'Compare our revolutionary AI and quantum computing services with market alternatives. See why Zion Tech Group delivers superior value and ROI.';

  // Combine all services
  const allServices = [...zion2027AdvancedMicroSaasServices, ...zion2027EmergingTechnologyServices];

  // Get unique categories
  const categories = ['all', ...new Set(allServices.map(service => service.category))];

  // Filter services by category
  const filteredServices = selectedCategory === 'all' 
    ? allServices 
    : allServices.filter(service => service.category === selectedCategory);

  const getCategoryIcon = (category: string) => {

    const iconMap: { [key: string]: any } = {

      'AI & Fintech': Brain,
      'AI & Healthcare': Brain,
      'IoT & Edge Computing': Globe,
      'AI & Legal Tech': Brain,
      'AI & Supply Chain': Globe,
      'AI & Marketing': Brain,
      'Cybersecurity & Critical Infrastructure': Shield,
      'AI & Human Resources': Users,
      'AI & Space Technology': Rocket,
      'AI & Education': Brain,
      'Blockchain & Quantum Computing': Zap,
      'Metaverse & Virtual Reality': Globe,
      'AI & Manufacturing': Globe,
      'AI & Energy Management': Zap,
      'AI & Transportation': Globe,
      'AI & Financial Services': Brain,
      'AI & Retail': Globe,
      'AI & Telecommunications': Globe,
      'AI & Agriculture': Globe
    };
    return iconMap[category] || Brain;
  };

  const getCategoryColor = (category: string) => {

    const colorMap: { [key: string]: string } = {

      'AI & Fintech': 'from-green-600 to-emerald-700',
      'AI & Healthcare': 'from-blue-600 to-cyan-700',
      'IoT & Edge Computing': 'from-purple-600 to-indigo-700',
      'AI & Legal Tech': 'from-slate-600 to-gray-700',
      'AI & Supply Chain': 'from-orange-600 to-red-700',
      'AI & Marketing': 'from-pink-600 to-rose-700',
      'Cybersecurity & Critical Infrastructure': 'from-red-600 to-orange-700',
      'AI & Human Resources': 'from-indigo-600 to-blue-700',
      'AI & Space Technology': 'from-purple-600 to-violet-700',
      'AI & Education': 'from-teal-600 to-cyan-700',
      'Blockchain & Quantum Computing': 'from-blue-600 to-indigo-700',
      'Metaverse & Virtual Reality': 'from-purple-600 to-pink-700',
      'AI & Manufacturing': 'from-gray-600 to-slate-700',
      'AI & Energy Management': 'from-yellow-600 to-orange-700',
      'AI & Transportation': 'from-blue-600 to-cyan-700',
      'AI & Financial Services': 'from-green-600 to-emerald-700',
      'AI & Retail': 'from-pink-600 to-rose-700',
      'AI & Telecommunications': 'from-indigo-600 to-purple-700',
      'AI & Agriculture': 'from-green-600 to-lime-700'
    };
    return colorMap[category] || 'from-blue-600 to-indigo-700';
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Advanced Pricing Comparison 2027
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-600">
              See how our revolutionary AI and quantum computing services compare to market alternatives. 
              Discover why Zion Tech Group delivers superior value, ROI, and competitive advantages.
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <TrendingUp className="h-4 w-4 text-green-500" />
                <span>Superior ROI</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Star className="h-4 w-4 text-yellow-500" />
                <span>Market Leading</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Zap className="h-4 w-4 text-blue-500" />
                <span>Cutting-Edge Tech</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="bg-white py-16 border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">
              Ready to Get Started?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <Phone className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Call Us</h3>
                <p className="text-gray-600">+1 302 464 0950</p>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Us</h3>
                <p className="text-gray-600">kleber@ziontechgroup.com</p>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Visit Us</h3>
                <p className="text-gray-600 text-center">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            <div className="mt-8">
              <a
                href="https://ziontechgroup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-500 font-medium"
              >
                Visit Our Website <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-white py-8 border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${

                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category === 'all' ? 'All Categories' : category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Comparison Grid */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-12">
            {filteredServices.map((service) => {

              const CategoryIcon = getCategoryIcon(service.category);
              const categoryColor = getCategoryColor(service.category);
              
              return (
                <div key={service.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  {/* Service Header */}
                  <div className={`bg-gradient-to-r ${categoryColor} p-6 text-white`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="text-4xl">{service.icon}</div>
                        <div>
                          <h3 className="text-2xl font-bold">{service.name}</h3>
                          <p className="text-white/90">{service.tagline}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold">{service.price}</div>
                        <div className="text-white/90">{service.period}</div>
                      </div>
                    </div>
                  </div>

                  {/* Pricing Comparison Table */}
                  <div className="p-6">
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Market Comparison & Value Analysis</h4>
                      
                      {/* Our Service Highlights */}
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                          <div className="flex items-center gap-2 mb-2">
                            <CheckCircle className="h-5 w-5 text-green-600" />
                            <span className="font-semibold text-green-900">Zion Tech Group</span>
                          </div>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-green-700">Price:</span>
                              <span className="font-semibold text-green-900">{service.price}{service.period}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-green-700">Trial:</span>
                              <span className="font-semibold text-green-900">{service.trialDays} days</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-green-700">Setup:</span>
                              <span className="font-semibold text-green-900">{service.setupTime}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-green-700">ROI:</span>
                              <span className="font-semibold text-green-900">See details below</span>
                            </div>
                          </div>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                          <div className="flex items-center gap-2 mb-2">
                            <Target className="h-5 w-5 text-blue-600" />
                            <span className="font-semibold text-blue-900">Market Position</span>
                          </div>
                          <div className="text-sm text-blue-800">
                            <p className="mb-2 font-medium">Competitive Analysis:</p>
                            <p>{service.marketPosition}</p>
                          </div>
                        </div>

                        <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                          <div className="flex items-center gap-2 mb-2">
                            <TrendingUp className="h-5 w-5 text-purple-600" />
                            <span className="font-semibold text-purple-900">Growth & Market</span>
                          </div>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-purple-700">Market Size:</span>
                              <span className="font-semibold text-purple-900">{service.marketSize}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-purple-700">Growth Rate:</span>
                              <span className="font-semibold text-purple-900">{service.growthRate}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Detailed Comparison */}
                      <div className="space-y-6">
                        {/* ROI Analysis */}
                        <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200">
                          <div className="flex items-center gap-2 mb-4">
                            <DollarSign className="h-6 w-6 text-green-600" />
                            <h5 className="text-lg font-semibold text-green-900">ROI Analysis</h5>
                          </div>
                          <p className="text-green-800 mb-3">{service.roi}</p>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                            <div className="text-center p-3 bg-white rounded-lg">
                              <div className="text-2xl font-bold text-green-600">{service.customers.toLocaleString()}</div>
                              <div className="text-green-700">Active Customers</div>
                            </div>
                            <div className="text-center p-3 bg-white rounded-lg">
                              <div className="text-2xl font-bold text-green-600">{service.rating}</div>
                              <div className="text-green-700">Customer Rating</div>
                            </div>
                            <div className="text-center p-3 bg-white rounded-lg">
                              <div className="text-2xl font-bold text-green-600">{service.reviews.toLocaleString()}</div>
                              <div className="text-green-700">Reviews</div>
                            </div>
                          </div>
                        </div>

                        {/* Technology Stack */}
                        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
                          <div className="flex items-center gap-2 mb-4">
                            <Zap className="h-6 w-6 text-blue-600" />
                            <h5 className="text-lg font-semibold text-blue-900">Technology Stack</h5>
                          </div>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {service.technology.map((tech, index) => (
                              <span key={index} className="px-3 py-1 bg-white text-blue-700 text-sm rounded-full border border-blue-200">
                                {tech}
                              </span>
                            ))}
                          </div>
                          <div className="text-sm text-blue-800">
                            <p className="font-medium mb-2">Implementation Details:</p>
                            <p>{service.implementationDetails}</p>
                          </div>
                        </div>

                        {/* Use Cases & Target Audience */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                          <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg border border-purple-200">
                            <div className="flex items-center gap-2 mb-4">
                              <Target className="h-6 w-6 text-purple-600" />
                              <h5 className="text-lg font-semibold text-purple-900">Target Audience</h5>
                            </div>
                            <div className="space-y-2">
                              {typeof service.targetAudience === 'string' 
                                ? service.targetAudience.split(', ').map((audience, index) => (
                                    <div key={index} className="flex items-center gap-2 text-sm text-purple-800">
                                      <CheckCircle className="h-4 w-4 text-purple-600" />
                                      {audience}
                                    </div>
                                  ))
                                : service.targetAudience.map((audience, index) => (
                                    <div key={index} className="flex items-center gap-2 text-sm text-purple-800">
                                      <CheckCircle className="h-4 w-4 text-purple-600" />
                                      {audience}
                                    </div>
                                  ))
                              }
                            </div>
                          </div>

                          <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-lg border border-orange-200">
                            <div className="flex items-center gap-2 mb-4">
                              <Lightbulb className="h-6 w-6 text-orange-600" />
                              <h5 className="text-lg font-semibold text-orange-900">Use Cases</h5>
                            </div>
                            <div className="space-y-2">
                              {service.useCases.map((useCase, index) => (
                                <div key={index} className="flex items-center gap-2 text-sm text-orange-800">
                                  <CheckCircle className="h-4 w-4 text-orange-600" />
                                  {useCase}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Competitors Analysis */}
                        <div className="bg-gradient-to-r from-gray-50 to-slate-50 p-6 rounded-lg border border-gray-200">
                          <div className="flex items-center gap-2 mb-4">
                            <BarChart3 className="h-6 w-6 text-gray-600" />
                            <h5 className="text-lg font-semibold text-gray-900">Competitive Landscape</h5>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <h6 className="font-medium text-gray-800 mb-2">Main Competitors:</h6>
                              <div className="space-y-1">
                                {service.competitors.map((competitor, index) => (
                                  <div key={index} className="flex items-center gap-2 text-sm text-gray-700">
                                    <XCircle className="h-4 w-4 text-red-500" />
                                    {competitor}
                                  </div>
                                ))}
                              </div>
                            </div>
                            <div>
                              <h6 className="font-medium text-gray-800 mb-2">Our Advantages:</h6>
                              <div className="space-y-1">
                                <div className="flex items-center gap-2 text-sm text-gray-700">
                                  <CheckCircle className="h-4 w-4 text-green-500" />
                                  AI-Powered Automation
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-700">
                                  <CheckCircle className="h-4 w-4 text-green-500" />
                                  Quantum Computing Integration
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-700">
                                  <CheckCircle className="h-4 w-4 text-green-500" />
                                  Superior ROI
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-700">
                                  <CheckCircle className="h-4 w-4 text-green-500" />
                                  Enterprise-Grade Security
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
                      <a
                        href={service.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg text-center font-semibold hover:bg-blue-700 transition-colors duration-200"
                      >
                        Learn More About This Service
                      </a>
                      <Link
                        to="/contact"
                        className="flex-1 bg-gray-100 text-gray-700 px-6 py-3 rounded-lg text-center font-semibold hover:bg-gray-200 transition-colors duration-200"
                      >
                        Contact Sales Team
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-16">
              <Target className="mx-auto h-12 w-12 text-gray-400 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No services found in this category</h3>
              <p className="text-gray-600">Try selecting a different category or view all services.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white mb-6">
              Ready to Experience the Zion Tech Group Advantage?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of businesses already leveraging our cutting-edge AI and quantum computing solutions. 
              Start your free trial today and see the difference autonomous technology can make.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                Start Free Trial
              </Link>
              <a
                href="https://ziontechgroup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
              >
                Visit Website
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Contact */}
      <section className="bg-gray-900 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white mb-8">
              Get in Touch with Zion Tech Group
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="flex flex-col items-center">
                <Phone className="h-8 w-8 text-blue-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                <p className="text-gray-300">+1 302 464 0950</p>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="h-8 w-8 text-blue-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <p className="text-gray-300">kleber@ziontechgroup.com</p>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="h-8 w-8 text-blue-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                <p className="text-gray-300 text-center">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            <div className="border-t border-gray-700 pt-8">
              <a
                href="https://ziontechgroup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium"
              >
                Visit Our Website <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}