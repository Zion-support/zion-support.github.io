'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, Calendar, Clock, Users, Shield } from 'lucide-react';

const ConsultationPage: React.FC = () => {
  const consultationTypes = [
    {
      icon: Users,
      title: 'Strategy Consultation',
      description: 'Comprehensive IT strategy and digital transformation planning',
      duration: '2-4 hours',
      price: 'Starting at $500'
    },
    {
      icon: Shield,
      title: 'Security Audit',
      description: 'Complete security assessment and vulnerability analysis',
      duration: '1-2 days',
      price: 'Starting at $1,500'
    },
    {
      icon: Calendar,
      title: 'Implementation Planning',
      description: 'Detailed project planning and roadmap development',
      duration: '4-8 hours',
      price: 'Starting at $800'
    }
  ];

  const benefits = [
    'Expert technical guidance',
    'Customized solutions for your business',
    'Cost-effective recommendations',
    'Risk assessment and mitigation',
    'Implementation roadmap',
    'Ongoing support and follow-up',
    'Industry best practices',
    'Proven track record of success'
  ];

  return (
    <>
      <Helmet>
        <title>Consultation - Zion Tech Group | Expert IT Consulting</title>
        <meta name="description" content="Get expert consultation on AI, cloud computing, cybersecurity, and IT strategy. Book a consultation with our experienced team." />
        <meta name="keywords" content="IT consultation, AI consulting, cloud consulting, cybersecurity consulting, technology strategy" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Expert Consultation
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Get expert guidance on AI, cloud computing, cybersecurity, and IT strategy from our experienced team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                <Calendar className="mr-2 h-5 w-5" />
                Book Consultation
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </button>
            </div>
          </div>
        </section>

        {/* Consultation Types */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Consultation Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the consultation type that best fits your needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {consultationTypes.map((type, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
                  <div className="w-16 h-16 bg-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <type.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{type.title}</h3>
                  <p className="text-gray-300 mb-4">{type.description}</p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Duration:</span>
                      <span className="text-white">{type.duration}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Price:</span>
                      <span className="text-purple-400 font-semibold">{type.price}</span>
                    </div>
                  </div>
                  <button className="w-full mt-6 bg-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-purple-700 transition-colors">
                    Book This Consultation
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our Consultation?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Get the expert guidance you need to make informed technology decisions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Book your consultation today and get expert guidance for your technology needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Consultation
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ConsultationPage;