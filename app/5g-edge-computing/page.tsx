import React from 'react';
import { CheckCircle, ArrowRight, Cpu, Zap, Globe, Database, Shield, Clock, Users } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function FiveGEdgeComputingPage() {
  const features = [
    {
      title: "Feature 1",
      description: "Description of feature 1"
    },
    {
      title: "Feature 2",
      description: "Description of feature 2"
    }
  ];

  return (

  const benefits = [
    {
      title: 'Ultra-Low Latency',
      description: 'Sub-millisecond response times for real-time applications',
      icon: <Clock className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'Reduced Bandwidth',
      description: 'Process data locally to reduce network traffic and costs',
      icon: <Zap className="w-6 h-6 text-green-500" />
    },
    {
      title: 'Improved Reliability',
      description: 'Distributed processing ensures high availability',
      icon: <Shield className="w-6 h-6 text-purple-500" />
    },
    {
      title: 'Scalability',
      description: 'Easily scale edge resources based on demand',
      icon: <Users className="w-6 h-6 text-orange-500" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>5G Edge Computing - Zion Tech Group</title>
        <meta name="description" content="5G edge computing solutions including edge server deployment, distributed computing, content delivery optimization, and edge AI integration." />
        <meta name="keywords" content="5G edge computing, edge servers, distributed computing, content delivery, edge AI, ultra-low latency" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              5G Edge Computing
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Edge computing solutions that bring processing power closer to data sources for ultra-low latency 
              applications and real-time processing with 5G connectivity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/5g-implementation" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Back to 5G Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Edge Computing Services</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Complete edge computing solutions for 5G networks
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-20">
            {edgeServices.map((service, index) => (
              {features.map((feature, index) => (

                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-2xl font-bold text-white mb-4">{service.pricing}</div>
                <Link 
                  to="/contact"
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
                >
                  Get Quote
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Edge Computing Benefits</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Why edge computing is essential for 5G applications
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              {features.map((feature, index) => (

                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center">
                <div className="mb-4 flex justify-center">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Deploy Edge Computing?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Get a free edge computing assessment and discover how we can optimize your 5G infrastructure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Free Assessment
                </Link>
                <Link 
                  to="/5g-implementation" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  View All 5G Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FiveGEdgeComputingPage;
  );
}