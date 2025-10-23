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
        <meta name=&quot;description&quot; content=&quot;Comprehensive IT infrastructure services including cloud management, DevOps, database administration, and 24/7 support. Enterprise-grade solutions at competitive prices.&quot; />
        <meta name=&quot;keywords&quot; content=&quot;IT infrastructure, cloud management, DevOps, database administration, server management, IT support, cybersecurity&quot; />
      </Helmet>
      <div className=&quot;min-h-screen bg-gradient-to-br from-slate-50 to-blue-50&quot;></div>
        {/* Hero Section */}
        <section className=&quot;relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20&quot;></section>
          <div className=&quot;absolute inset-0 bg-black opacity-20&quot;></div>
          <div className=&quot;relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;></div>
            <div className=&quot;text-center&quot;></div>
              <h1 className=&quot;text-4xl md:text-6xl font-bold mb-6&quot;>
                IT Infrastructure Services
              </h1>
              <p className=&quot;text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto&quot;>
                Enterprise-grade IT infrastructure solutions with 99.9% uptime guarantee and 24/7 expert support
              </p>
              <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;></div>
                <a
                  href=&quot;tel:+13024640950&quot;
                  className=&quot;bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center&quot;
                >
                  📞 +1 302 464 0950
                </a>
                <a
                  href=&quot;mailto:kleber@ziontechgroup.com&quot;
                  className=&quot;border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors&quot;
                >
                  ✉️ Get Free Infrastructure Audit
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* Infrastructure Statistics */}
        <section className=&quot;py-16 bg-white&quot;></section>
          <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;></div>
            <div className=&quot;text-center mb-12&quot;></div>
              <h2 className=&quot;text-3xl md:text-4xl font-bold text-gray-900 mb-4&quot;>
                Our Infrastructure Track Record
              </h2>
              <p className=&quot;text-xl text-gray-600&quot;>
                Proven results from our IT infrastructure services
              </p>
            </div>
            <div className=&quot;grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8&quot;></div>
              {infrastructureStats.map((stat, index) => (
                <div key={index} className=&quot;text-center&quot;></div>
                  <div className=&quot;text-3xl md:text-4xl font-bold text-blue-600 mb-2&quot;>{stat.metric}</div>
                  <div className=&quot;text-lg font-semibold text-gray-900 mb-1&quot;>{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Key Benefits */}
        <section className=&quot;py-16 bg-gray-50&quot;></section>
          <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;></div>
            <div className=&quot;text-center mb-12&quot;></div>
              <h2 className=&quot;text-3xl md:text-4xl font-bold text-gray-900 mb-4&quot;>
                Why Choose Our IT Infrastructure Services?
              </h2>
              <p className=&quot;text-xl text-gray-600&quot;>
                Enterprise-grade solutions with unmatched reliability and support
              </p>
            </div>
            <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8&quot;></div>
              <div className=&quot;text-center&quot;></div>
                <div className=&quot;bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4&quot;></div>
                  <Shield className=&quot;w-8 h-8 text-blue-600&quot; />
                </div>
                <h3 className=&quot;text-xl font-semibold text-gray-900 mb-2&quot;>Enterprise Security</h3>
                <p className=&quot;text-gray-600&quot;>Bank-level security with advanced threat protection and compliance monitoring</p>
              </div>
              <div className=&quot;text-center&quot;></div>
                <div className=&quot;bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4&quot;></div>
                  <Zap className=&quot;w-8 h-8 text-green-600&quot; />
                </div>
                <h3 className=&quot;text-xl font-semibold text-gray-900 mb-2&quot;>99.9% Uptime</h3>
                <p className=&quot;text-gray-600&quot;>Guaranteed uptime with redundant systems and proactive monitoring</p>
              </div>
              <div className=&quot;text-center&quot;></div>
                <div className=&quot;bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4&quot;></div>
                  <Clock className=&quot;w-8 h-8 text-purple-600&quot; />
                </div>
                <h3 className=&quot;text-xl font-semibold text-gray-900 mb-2&quot;>24/7 Support</h3>
                <p className=&quot;text-gray-600&quot;>Round-the-clock expert support with rapid response times</p>
              </div>
              <div className=&quot;text-center&quot;></div>
                <div className=&quot;bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4&quot;></div>
                  <BarChart className=&quot;w-8 h-8 text-orange-600&quot; />
                </div>
                <h3 className=&quot;text-xl font-semibold text-gray-900 mb-2&quot;>Cost Optimization</h3>
                <p className=&quot;text-gray-600&quot;>Reduce IT costs by up to 40% while improving performance and reliability</p>
              </div>
            </div>
          </div>
        </section>
        {/* Services Grid */}
        <section className=&quot;py-16 bg-white&quot;></section>
          <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;></div>
            <div className=&quot;text-center mb-12&quot;></div>
              <h2 className=&quot;text-3xl md:text-4xl font-bold text-gray-900 mb-4&quot;>
                IT Infrastructure Services
              </h2>
              <p className=&quot;text-xl text-gray-600&quot;>
                Comprehensive infrastructure solutions for modern businesses
              </p>
            </div>
            <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;></div>
              {itServices.map((service, index) => (
                <div key={index} className=&quot;bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-200&quot;></div>
                  <div className=&quot;text-4xl mb-4&quot;>{service.icon}</div>
                  <h3 className=&quot;text-xl font-semibold text-gray-900 mb-3&quot;>{service.title}</h3>
                  <p className=&quot;text-gray-600 mb-4&quot;>{service.description}</p>
                  <div className=&quot;mb-4&quot;></div>
                    <div className=&quot;flex items-center justify-between mb-2&quot;></div>
                      <span className=&quot;text-2xl font-bold text-blue-600&quot;>{service.price}</span>
                      <span className=&quot;text-sm text-gray-500&quot;>Market: {service.marketPrice}</span>
                    </div>
                    <div className=&quot;text-sm text-green-600 font-semibold&quot;></div>
                      Save up to 50% vs market rates
                    </div>
                  </div>
                  <div className=&quot;mb-4&quot;></div>
                    <h4 className=&quot;font-semibold text-gray-900 mb-2&quot;>Key Features:</h4>
                    <ul className=&quot;space-y-1&quot;>
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className=&quot;flex items-center text-sm text-gray-600&quot;>
                          <CheckCircle className=&quot;w-4 h-4 text-green-500 mr-2 flex-shrink-0&quot; />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className=&quot;mb-4&quot;></div>
                    <h4 className=&quot;font-semibold text-gray-900 mb-2&quot;>Technologies:</h4>
                    <div className=&quot;flex flex-wrap gap-2&quot;></div>
                      {service.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className=&quot;bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded&quot;>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className=&quot;mb-6&quot;></div>
                    <h4 className=&quot;font-semibold text-gray-900 mb-2&quot;>Business Benefits:</h4>
                    <ul className=&quot;space-y-1&quot;>
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className=&quot;flex items-center text-sm text-gray-600&quot;>
                          <Star className=&quot;w-4 h-4 text-yellow-500 mr-2 flex-shrink-0&quot; />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className=&quot;mb-4 p-3 bg-gray-50 rounded-lg&quot;></div>
                    <p className=&quot;text-sm text-gray-700 font-medium&quot;>{service.contactInfo}</p>
                  </div>
                  <div className=&quot;flex gap-2&quot;></div>
                    <a
                      href=&quot;tel:+13024640950&quot;
                      className=&quot;flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center&quot;
                    >
                      Call Now
                    </a>
                    <a
                      href=&quot;mailto:kleber@ziontechgroup.com&quot;
                      className=&quot;flex-1 border border-blue-600 text-blue-600 py-2 px-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-center&quot;
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
        <section className=&quot;py-16 bg-gray-50&quot;></section>
          <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;></div>
            <div className=&quot;text-center mb-12&quot;></div>
              <h2 className=&quot;text-3xl md:text-4xl font-bold text-gray-900 mb-4&quot;>
                Our Infrastructure Implementation Process
              </h2>
              <p className=&quot;text-xl text-gray-600&quot;>
                How we design, implement, and manage your IT infrastructure
              </p>
            </div>
            <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8&quot;></div>
              <div className=&quot;text-center&quot;></div>
                <div className=&quot;bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold&quot;>1</div>
                <h3 className=&quot;text-xl font-semibold text-gray-900 mb-2&quot;>Assessment & Planning</h3>
                <p className=&quot;text-gray-600&quot;>We analyze your current infrastructure and design an optimal solution</p>
              </div>
              <div className=&quot;text-center&quot;></div>
                <div className=&quot;bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold&quot;>2</div>
                <h3 className=&quot;text-xl font-semibold text-gray-900 mb-2&quot;>Implementation</h3>
                <p className=&quot;text-gray-600&quot;>We implement the infrastructure with minimal downtime and disruption</p>
              </div>
              <div className=&quot;text-center&quot;></div>
                <div className=&quot;bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold&quot;>3</div>
                <h3 className=&quot;text-xl font-semibold text-gray-900 mb-2&quot;>Testing & Optimization</h3>
                <p className=&quot;text-gray-600&quot;>We thoroughly test and optimize the system for peak performance</p>
              </div>
              <div className=&quot;text-center&quot;></div>
                <div className=&quot;bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold&quot;>4</div>
                <h3 className=&quot;text-xl font-semibold text-gray-900 mb-2&quot;>Monitoring & Support</h3>
                <p className=&quot;text-gray-600&quot;>We provide ongoing monitoring and 24/7 support for your infrastructure</p>
              </div>
            </div>
          </div>
        </section>
        {/* Contact Section */}
        <section className=&quot;py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white&quot;></section>
          <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center&quot;></div>
            <h2 className=&quot;text-3xl md:text-4xl font-bold mb-4&quot;>
              Ready to Optimize Your IT Infrastructure?
            </h2>
            <p className=&quot;text-xl mb-8 text-blue-100&quot;>
              Contact our IT infrastructure experts for a free assessment and custom solution design
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center mb-8&quot;></div>
              <a
                href=&quot;tel:+13024640950&quot;
                className=&quot;bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center&quot;
              >
                📞 +1 302 464 0950
              </a>
              <a
                href=&quot;mailto:kleber@ziontechgroup.com&quot;
                className=&quot;border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors&quot;
              >
                ✉️ kleber@ziontechgroup.com
              </a>
            </div>
            <div className=&quot;text-sm text-blue-200&quot;></div>
              <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
              <p className=&quot;mt-2&quot;>🌐 https://ziontechgroup.com</p>
            </div>
          </div>
        </section>
>>>>>>> 33a3472fdd6542a46cedfafebd3b6b0a7cc5e02d
      </div>
    </>
  )
}
export default ITInfrastructurePage
