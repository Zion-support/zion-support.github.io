import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Server, Cloud } from 'lucide-react';

const ItSolutionsPage: React.FC = () => {

  return (
    <div className="min-h-screen bg-slate-900 text-white">
>>>>>>> 738f440eeff51c77c81d522cf07739993de2622f
      <Helmet>
        <title>IT Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT solutions including infrastructure management, cybersecurity, cloud solutions, and system integration services." />
        <meta name="keywords" content="IT solutions, infrastructure management, cybersecurity, cloud solutions, system integration, Zion Tech Group" />
      </Helmet>
<<<<<<< HEAD
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              IT Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Comprehensive IT services to power your digital transformation
            </p>
          </div>
          
          <div className="grid md: grid-cols-2 gap-8">;
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Server className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Infrastructure</h3>
              <p className="text-gray-300">
                Robust IT infrastructure solutions for scalable growth.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Cloud className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Cloud Services</h3>
              <p className="text-gray-300">
                Secure and scalable cloud computing solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
import React, { Suspense } from 'react';
};

import React, { Suspense } from 'react';
export default ItSolutionsPage;
=======

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            IT Solutions
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive IT solutions to keep your business running smoothly and securely. 
            From infrastructure to cloud, we've got you covered.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <div key={index} className="bg-slate-800 rounded-xl p-8 border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105">
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-gray-300 text-sm flex items-center">
                        <CheckCircleIcon className="w-4 h-4 text-blue-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <div className="text-2xl font-bold text-blue-400 mb-2">{service.price}</div>
                  <div className="text-gray-400 text-sm mb-4">Benefits: {service.benefits.join(', ')}</div>
                </div>

                <Link
                  to={service.href}
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Learn More
                  <ArrowRightIcon className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/30 to-cyan-900/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Optimize Your IT Infrastructure?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let's discuss how our IT solutions can improve your business operations and security.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </Link>
            <Link
              to="/demo"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
>>>>>>> 738f440eeff51c77c81d522cf07739993de2622f
