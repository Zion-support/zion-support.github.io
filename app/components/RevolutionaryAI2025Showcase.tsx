import React from 'react';
import Link from 'next/link';
import { ArrowRight, ExternalLink, Star, Users, TrendingUp, Shield } from 'lucide-react';
import { revolutionaryAIEcosystem2025 } from '../../data/2025-revolutionary-ai-ecosystem';

const RevolutionaryAI2025Showcase = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-100 to-blue-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Star className="w-4 h-4 mr-2" />
            REVOLUTIONARY AI ECOSYSTEM
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Next-Generation AI Solutions
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our cutting-edge AI services that are reshaping industries and pushing the boundaries of what's possible with artificial intelligence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {revolutionaryAIEcosystem2025.map((service) => (
            <div 
              key={service.id}
              className="group bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Service Header */}
              <div className={`bg-gradient-to-r ${service.color} p-8 text-white relative overflow-hidden`}>
                <div className="absolute top-4 right-4 text-4xl opacity-20">
                  {service.icon}
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold">
                      {service.category}
                    </span>
                    {service.popular && (
                      <span className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-3 h-3 mr-1" />
                        Popular
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2">{service.name}</h3>
                  <p className="text-lg opacity-90 mb-4">{service.tagline}</p>
                  
                  <div className="flex items-center text-2xl font-bold">
                    <span className="text-3xl">{service.price}</span>
                    <span className="text-lg opacity-75 ml-1">{service.period}</span>
                  </div>
                </div>
              </div>

              {/* Service Content */}
              <div className="p-8">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <Shield className="w-4 h-4 mr-2 text-purple-500" />
                    Key Features
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.features.slice(0, 6).map((feature, index) => (
                      <div key={index} className="flex items-start text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Service Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 rounded-xl">
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-900">{service.customers}</div>
                    <div className="text-xs text-gray-600">Customers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-900 flex items-center justify-center">
                      {service.rating}
                      <Star className="w-3 h-3 ml-1 text-yellow-400 fill-current" />
                    </div>
                    <div className="text-xs text-gray-600">Rating</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-900">{service.trialDays}</div>
                    <div className="text-xs text-gray-600">Day Trial</div>
                  </div>
                </div>

                {/* Technology Stack */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <TrendingUp className="w-4 h-4 mr-2 text-blue-500" />
                    Technology Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technology.slice(0, 4).map((tech, index) => (
                      <span 
                        key={index}
                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {service.technology.length > 4 && (
                      <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium">
                        +{service.technology.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* ROI Highlight */}
                <div className="mb-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl">
                  <div className="flex items-center mb-2">
                    <TrendingUp className="w-4 h-4 text-green-600 mr-2" />
                    <span className="font-semibold text-green-800">Expected ROI</span>
                  </div>
                  <div className="text-lg font-bold text-green-700">{service.roi}</div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link 
                    href={service.link}
                    className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-semibold text-center transition-all duration-300 flex items-center justify-center group"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  
                  <Link 
                    href="/contact"
                    className="flex-1 border border-gray-300 hover:border-gray-400 text-gray-700 px-6 py-3 rounded-xl font-semibold text-center transition-all duration-300 flex items-center justify-center"
                  >
                    <Users className="w-4 h-4 mr-2" />
                    Contact Sales
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join the AI revolution with our cutting-edge solutions. Get started with a free consultation and see how our revolutionary AI can transform your operations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center group"
            >
              Get Free Consultation
              <ExternalLink className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link 
              href="/revolutionary-ai-ecosystem"
              className="border border-white/30 hover:bg-white/10 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center"
            >
              View All Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevolutionaryAI2025Showcase;