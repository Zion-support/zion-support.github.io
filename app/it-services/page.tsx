<<<<<<< HEAD
'use client';
import React from 'react';
=======
                  ))}
                </ul>
                <div className="text-center">
                  <div className="text-lg font-bold text-indigo-400 mb-3">{service.price}</div>
                  <Link to="/contact" className="text-indigo-400 hover:text-indigo-300 font-medium">
                    Learn More →
                  </Link>
                </div>
              </div>
>>>>>>> origin/main

const ItServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-bold text-white mb-8">IT Services</h1>
        <p className="text-gray-300 text-lg">
          Content coming soon.
        </p>
      </div>
    </div>
  );
};
<<<<<<< HEAD

export default ItServicesPage;
=======
'use client'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Server, Shield, Cloud, Code, CheckCircle, ArrowRight } from 'lucide-react'


      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Need IT Support?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Our expert team is ready to help you with all your IT needs.
          </p>
          <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center mx-auto">
            <ArrowRight className="w-5 h-5 mr-2" />
            Get Started
          </button>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ITServicesPage
>>>>>>> origin/main
