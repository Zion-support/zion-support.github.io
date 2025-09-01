import React, { useState } from 'react';
import { Check, Clock, Users, Shield, Star, ArrowRight, ChevronDown, ChevronUp export const ServiceDetailsSection = ({ services = [] }) => {

  const [expandedService, setExpandedService] = useState(null);

  const displayServices = services.length > 0 ? services : defaultServices;

  const toggleService = (serviceId) => {

    setExpandedService(expandedService === serviceId ? null : serviceId)};

  const getComplexityColor = (complexity) => {

    switch(complexity.toLowerCase()) {

      case 'low':'
        return 'text-green-600 bg-green-100';
      case 'medium':'
        return 'text-yellow-600 bg-yellow-100';
      case 'high':'
        return 'text-red-600 bg-red-100';
      default:'
        return 'text-gray-600 bg-gray-100'}
  };

  return ()
    <section className="py-20 bg-white">"
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}"
        <div className="text-center mb-16">"
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Service Details & Specifications
          </h2>"
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get detailed information about our IT services, including features, requirements,
            timelines, and estimated costs.</p>
        </div>

        {/* Services Grid */}"
        <div className="space-y-6">
          {displayServices.map((service) => (
            <div
              key={service.id}"
              className="bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"

              {/* Service Header */}"
              <div className="p-6 border-b border-gray-100">"
                <div className="flex items-start justify-between">"
                  <div className="flex items-start space-x-4">"
                    <div className="text-4xl">{service.icon}</div>"
                    <div className="flex-1">"
                      <div className="flex items-center space-x-3 mb-2">"
                        <h3 className="text-2xl font-bold text-gray-900">{service.name}</h3>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getComplexityColor(service.complexity)}`}>
                          {service.complexity}
                        </span>
                      </div>"
                      <p className="text-gray-600 text-lg">{service.description}</p>

                      {/* Quick Info */}"
                      <div className="flex items-center space-x-6 mt-4">"
                        <div className="flex items-center space-x-2 text-gray-500">"
                          <Clock className="w-4 h-4" />"
                          <span className="text-sm">{service.duration}</span>
                        </div>"
                        <div className="flex items-center space-x-2 text-gray-500">"
                          <Users className="w-4 h-4" />"
                          <span className="text-sm">{service.teamSize}</span>
                        </div>"
                        <div className="flex items-center space-x-2 text-gray-500">"
                          <Star className="w-4 h-4" />"
                          <span className="text-sm">{service.category}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => toggleService(service.id)}"
                    className="ml-4 p-2 text-gray-400 hover:text-gray-600 transition-colors"

                    {expandedService === service.id ? (;"
                      <ChevronUp className="w-6 h-6" />
                    ) : ("
                      <ChevronDown className="w-6 h-6" />
                    )}
                  </button>
                </div>
              </div>;

              {/* Expanded Content */}
              {expandedService === service.id && ("
                <div className="p-6 bg-gray-50">"
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Features */}
                    <div>"
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">"
                        <Check className="w-5 h-5 text-green-500 mr-2" />
                        Features
                      </h4>"
                      <ul className="space-y-2">
                        {service.features.map((feature, index) => ("
                          <li key={index} className="flex items-start space-x-2">"
                            <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />"
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Benefits */}
                    <div>"
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">"
                        <Star className="w-5 h-5 text-yellow-500 mr-2" />
                        Benefits
                      </h4>"
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, index) => ("
                          <li key={index} className="flex items-start space-x-2">"
                            <Star className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />"
                            <span className="text-gray-700">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Requirements */}
                    <div>"
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">"
                        <Shield className="w-5 h-5 text-blue-500 mr-2" />
                        Requirements
                      </h4>"
                      <ul className="space-y-2">
                        {service.requirements.map((requirement, index) => ("
                          <li key={index} className="flex items-start space-x-2">"
                            <Shield className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />"
                            <span className="text-gray-700">{requirement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Cost and CTA */}"
                  <div className="mt-8 pt-6 border-t border-gray-200">"
                    <div className="flex flex-col lg:flex-row items-center justify-between">"
                      <div className="mb-4 lg:mb-0">"
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Estimated Cost</h4>"
                        <p className="text-2xl font-bold text-blue-600">{service.estimatedCost}</p>"
                        <p className="text-sm text-gray-500">*Final cost depends on specific requirements</p>
                      </div>
"
                      <div className="flex space-x-4">"
                        <button className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors">
                          Download Brochure
                        </button>"
                        <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center space-x-2">
                          <span>Get Quote</span>"
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}"
        <div className="text-center mt-16">"
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 max-w-3xl mx-auto">"
            <h3 className="text-2xl font-bold text-white mb-4">
              Need a Custom Solution?
            </h3>"
            <p className="text-blue-100 mb-6">
              Our team can tailor  service to meet your specific business requirements.</p>"
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a"
                href="#contact"
                className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300"

                Discuss Requirements
              </a>
              <a"
                href="#consultation"
                className="px-8 py-3 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"

                Schedule Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )};
'"`