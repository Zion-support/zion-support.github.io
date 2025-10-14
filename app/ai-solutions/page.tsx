import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, Zap } from 'lucide-react';

const AiSolutionsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
>>>>>>> 738f440eeff51c77c81d522cf07739993de2622f
      <Helmet>
        <title>AI Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI solutions including machine learning, NLP, computer vision, predictive analytics, and automation services." />
        <meta name="keywords" content="AI solutions, machine learning, NLP, computer vision, predictive analytics, AI automation, Zion Tech Group" />
      </Helmet>
<<<<<<< HEAD
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              AI Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Transform your business with cutting-edge artificial intelligence
            </p>
          </div>
          
          <div className="grid md: grid-cols-2 gap-8">;
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Brain className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Machine Learning</h3>
              <p className="text-gray-300">
                Custom ML models tailored to your specific business requirements.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Zap className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Automation</h3>
              <p className="text-gray-300">
                Intelligent automation solutions to streamline your operations.
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
export default AiSolutionsPage;
=======

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            AI Solutions
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your business with cutting-edge artificial intelligence solutions. 
            From machine learning to automation, we deliver AI that drives real results.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <div key={index} className="bg-slate-800 rounded-xl p-8 border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105">
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
                        <CheckCircleIcon className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <div className="text-2xl font-bold text-purple-400 mb-2">{service.price}</div>
                  <div className="text-gray-400 text-sm mb-4">Benefits: {service.benefits.join(', ')}</div>
                </div>

                <Link
                  to={service.href}
                  className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2"
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
      <section className="py-20 bg-gradient-to-r from-purple-900/30 to-cyan-900/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Harness the Power of AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let's discuss how our AI solutions can transform your business and give you a competitive edge.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
            >
              Start Your AI Journey
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
