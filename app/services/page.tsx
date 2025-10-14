import { Shield, ArrowRight, Star, Cpu } from 'lucide-react';
import React from "react";
import { Helmet } from "react-helmet-async";

export default function Page() {
  return (
    <>
      <Helmet>
        <title>Services - Zion Tech Group</title>"
        <meta name="description" content="Services services and solutions from Zion Tech Group" />
      </Helmet>

      <FuturisticBackground />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7 xl mx-auto text-center">
          <h1 className="text-4 xl md:text-6 xl font-bold text-white mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3 xl mx-auto">
            Comprehensive AI and IT solutions designed to transform your business and drive innovation. 
            From cutting-edge AI technology to robust cybersecurity, we provide everything you need to succeed.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7 xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3 xl md:text-4 xl font-bold text-white mb-4">
              Service Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-3 xl mx-auto">
              Explore our comprehensive range of AI and IT services designed to meet your business needs.
            </p>
          </div>

          <div className="space-y-16">
            {serviceCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white/10 backdrop-blur-sm rounded-2 xl p-8 border border-white/20">
                <div className="flex items-center mb-8">
                  <div className={`p-3 rounded-lg ${category.bgColor} mr-4`}>
                    <category.icon className={`w-8 h-8 ${category.color}`} />
                  </div>
                  <h3 className="text-2 xl font-bold text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                      <div className="flex justify-between items-start mb-4">
                        <h4 className="text-lg font-semibold text-white">
                          {service.name}
                        </h4>
                        <span className="text-cyan-400 font-bold">
                          {service.price}
                        </span>
                      </div>
                      <p className="text-gray-300 mb-4">
                        {service.description}
                      </p>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                            <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4 xl mx-auto text-center">
          <h2 className="text-3 xl md:text-4 xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let our experts help you choose the right services for your business needs and goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
            >
              Get a Free Consultation
            </Link>
            <Link 
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              Schedule a Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
