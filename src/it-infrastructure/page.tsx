"use client";
import React from 'react';

import { Server, Lock, Monitor } from 'lucide-react'
import { CheckCircle, Star, Zap, BarChart, Shield, Helmet } from 'lucide-react'
import { Clock } from 'lucide-react'

const ITInfrastructurePage: React.FC = () => {
  const itServices = [
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Page
        </h1>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-600">
            This page is under construction. Please check back later.
          </p>
        </div>
=======
    <>
      <Helmet>
        <title>IT Infrastructure Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT infrastructure services including cloud management, DevOps, database administration, and 24/7 support. Enterprise-grade solutions at competitive prices." />
        <meta name="keywords" content="IT infrastructure, cloud management, DevOps, database administration, server management, IT support, cybersecurity" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50"></div>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20"></section>
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>
            <div className="text-center"></div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                IT Infrastructure Services
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
                Enterprise-grade IT infrastructure solutions with 99.9% uptime guarantee and 24/7 expert support
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
                <a
                  href="tel:+13024640950"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
                >
                  📞 +1 302 464 0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  ✉️ Get Free Infrastructure Audit
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* Infrastructure Statistics */}
        <section className="py-16 bg-white"></section>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>
            <div className="text-center mb-12"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Infrastructure Track Record
              </h2>
              <p className="text-xl text-gray-600">
                Proven results from our IT infrastructure services
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"></div>
              {infrastructureStats.map((stat, index) => (
                <div key={index} className="text-center"></div>
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.metric}</div>
                  <div className="text-lg font-semibold text-gray-900 mb-1">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Key Benefits */}
        <section className="py-16 bg-gray-50"></section>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>
            <div className="text-center mb-12"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our IT Infrastructure Services?
              </h2>
              <p className="text-xl text-gray-600">
                Enterprise-grade solutions with unmatched reliability and support
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
              <div className="text-center"></div>
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise Security</h3>
                <p className="text-gray-600">Bank-level security with advanced threat protection and compliance monitoring</p>
              </div>
              <div className="text-center"></div>
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                  <Zap className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">99.9% Uptime</h3>
                <p className="text-gray-600">Guaranteed uptime with redundant systems and proactive monitoring</p>
              </div>
              <div className="text-center"></div>
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                  <Clock className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 Support</h3>
                <p className="text-gray-600">Round-the-clock expert support with rapid response times</p>
              </div>
              <div className="text-center"></div>
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                  <BarChart className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Cost Optimization</h3>
                <p className="text-gray-600">Reduce IT costs by up to 40% while improving performance and reliability</p>
              </div>
            </div>
          </div>
        </section>
        {/* Services Grid */}
        <section className="py-16 bg-white"></section>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>
            <div className="text-center mb-12"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                IT Infrastructure Services
              </h2>
              <p className="text-xl text-gray-600">
                Comprehensive infrastructure solutions for modern businesses
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
              {itServices.map((service, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-200"></div>
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="mb-4"></div>
                    <div className="flex items-center justify-between mb-2"></div>
                      <span className="text-2xl font-bold text-blue-600">{service.price}</span>
                      <span className="text-sm text-gray-500">Market: {service.marketPrice}</span>
                    </div>
                    <div className="text-sm text-green-600 font-semibold"></div>
                      Save up to 50% vs market rates
                    </div>
                  </div>
                  <div className="mb-4"></div>
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mb-4"></div>
                    <h4 className="font-semibold text-gray-900 mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2"></div>
                      {service.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mb-6"></div>
                    <h4 className="font-semibold text-gray-900 mb-2">Business Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                          <Star className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mb-4 p-3 bg-gray-50 rounded-lg"></div>
                    <p className="text-sm text-gray-700 font-medium">{service.contactInfo}</p>
                  </div>
                  <div className="flex gap-2"></div>
                    <a
                      href="tel:+13024640950"
                      className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center"
                    >
                      Call Now
                    </a>
                    <a
                      href="mailto:kleber@ziontechgroup.com"
                      className="flex-1 border border-blue-600 text-blue-600 py-2 px-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-center"
                    >
                      Email Us
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Process Section */}
        <section className="py-16 bg-gray-50"></section>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>
            <div className="text-center mb-12"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Infrastructure Implementation Process
              </h2>
              <p className="text-xl text-gray-600">
                How we design, implement, and manage your IT infrastructure
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
              <div className="text-center"></div>
                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">1</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Assessment & Planning</h3>
                <p className="text-gray-600">We analyze your current infrastructure and design an optimal solution</p>
              </div>
              <div className="text-center"></div>
                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Implementation</h3>
                <p className="text-gray-600">We implement the infrastructure with minimal downtime and disruption</p>
              </div>
              <div className="text-center"></div>
                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">3</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Testing & Optimization</h3>
                <p className="text-gray-600">We thoroughly test and optimize the system for peak performance</p>
              </div>
              <div className="text-center"></div>
                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">4</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Monitoring & Support</h3>
                <p className="text-gray-600">We provide ongoing monitoring and 24/7 support for your infrastructure</p>
              </div>
            </div>
          </div>
        </section>
        {/* Contact Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white"></section>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"></div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Optimize Your IT Infrastructure?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Contact our IT infrastructure experts for a free assessment and custom solution design
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8"></div>
              <a
                href="tel:+13024640950"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
              >
                📞 +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                ✉️ kleber@ziontechgroup.com
              </a>
            </div>
            <div className="text-sm text-blue-200"></div>
              <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
              <p className="mt-2">🌐 https://ziontechgroup.com</p>
            </div>
          </div>
        </section>
>>>>>>> 33a3472fdd6542a46cedfafebd3b6b0a7cc5e02d
      </div>
    </>
  )
}
export default ITInfrastructurePage
