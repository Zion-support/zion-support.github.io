import React from 'react';

import { Lock } from 'lucide-react'

"use client";
const CybersecurityPage: React.FC = () => {
  const securityServices = [
  return (
    <>
      <Helmet>
        <title>Cybersecurity Services - Zion Tech Group</title>
        <meta name="description" content="Advanced cybersecurity services including threat detection, penetration testing, zero trust security, and comprehensive security solutions." />
        <meta name="keywords" content="cybersecurity services, threat detection, penetration testing, zero trust, security consulting, SOC services" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50"></div>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-red-600 to-orange-700 text-white py-20"></section>
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>
            <div className="text-center"></div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Cybersecurity Services
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-red-100 max-w-3xl mx-auto">
                Protect your business with advanced cybersecurity solutions and expert threat protection
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
                <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors">
                  Get Security Assessment
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors">
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* Key Benefits */}
        <section className="py-16 bg-white"></section>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>
            <div className="text-center mb-12"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our Cybersecurity Services?
              </h2>
              <p className="text-xl text-gray-600">
                Expert security professionals delivering comprehensive protection against evolving cyber threats
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
              <div className="text-center"></div>
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                  <Shield className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Advanced Protection</h3>
                <p className="text-gray-600">Cutting-edge security technologies and AI-powered threat detection</p>
              </div>
              <div className="text-center"></div>
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                  <Eye className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 Monitoring</h3>
                <p className="text-gray-600">Round-the-clock security monitoring and incident response</p>
              </div>
              <div className="text-center"></div>
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                  <Lock className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Compliance Ready</h3>
                <p className="text-gray-600">Ensure compliance with GDPR, HIPAA, SOX, and other regulations</p>
              </div>
              <div className="text-center"></div>
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                  <AlertTriangle className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Rapid Response</h3>
                <p className="text-gray-600">Quick incident response and recovery to minimize business impact</p>
              </div>
            </div>
          </div>
        </section>
        {/* Services by Category */}
        {categories.map(category => (
          <section key={category} className="py-16 bg-gray-50"></section>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>
              <div className="text-center mb-12"></div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {category} Solutions
                </h2>
                <p className="text-xl text-gray-600">
                  Specialized {category.toLowerCase()} services for comprehensive security protection
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
                {securityServices
                  .filter(service => service.category === category)
                  .map((service, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"></div>
                      <div className="text-4xl mb-4">{service.icon}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      <div className="mb-4"></div>
                        <div className="flex items-center justify-between mb-2"></div>
                          <span className="text-2xl font-bold text-red-600">{service.price}</span>
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
                            <span key={techIndex} className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded">
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
                      <button className="w-full bg-red-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                        Get Security Consultation
                      </button>
                    </div>
                  ))}
              </div>
            </div>
          </section>
        ))}
        {/* Cybersecurity Capabilities Showcase */}
        <section className="py-16 bg-white"></section>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>
            <div className="text-center mb-12"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Cybersecurity Capabilities
              </h2>
              <p className="text-xl text-gray-600">
                Comprehensive security solutions covering all aspects of cyber protection
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
              <div className="text-center p-6 bg-gradient-to-br from-red-50 to-orange-100 rounded-lg"></div>
                <Shield className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Threat Detection</h3>
                <p className="text-gray-600">AI-powered threat detection and response systems</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-100 rounded-lg"></div>
                <Lock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Zero Trust</h3>
                <p className="text-gray-600">Comprehensive zero trust security architecture</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg"></div>
                <Eye className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">SOC Services</h3>
                <p className="text-gray-600">24/7 security operations center monitoring</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-violet-100 rounded-lg"></div>
                <Database className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Data Protection</h3>
                <p className="text-gray-600">Comprehensive data protection and privacy solutions</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-amber-100 rounded-lg"></div>
                <Globe className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Cloud Security</h3>
                <p className="text-gray-600">Advanced cloud security and compliance solutions</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-indigo-50 to-blue-100 rounded-lg"></div>
                <AlertTriangle className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Incident Response</h3>
                <p className="text-gray-600">Rapid incident response and digital forensics</p>
              </div>
            </div>
          </div>
        </section>
        {/* Contact Section */}
        <section className="py-16 bg-gradient-to-r from-red-600 to-orange-600 text-white"></section>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"></div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Secure Your Business?
            </h2>
            <p className="text-xl mb-8 text-red-100">
              Contact our cybersecurity experts for a free security assessment and custom protection strategy
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <a
                href="tel:+13024640950"
                className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors inline-flex items-center"
              >
                📞 +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors"
              >
                ✉️ kleber@ziontechgroup.com
              </a>
            </div>
            <div className="mt-8 text-sm text-red-200"></div>
              <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
>>>>>>> 33a3472fdd6542a46cedfafebd3b6b0a7cc5e02d
      </div>
    </>
  )
}
export default CybersecurityPage
