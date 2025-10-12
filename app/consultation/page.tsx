'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Mail, Calendar, CheckCircle, Star, Users, Clock } from 'lucide-react';

const ConsultationPage: React.FC = () => {
  const consultationTypes = [
    {
      title: 'AI Strategy Consultation',
      description: 'Get expert guidance on implementing AI solutions in your business',
      duration: '2 hours',
      price: '$500',
      features: ['AI readiness assessment', 'Technology roadmap', 'ROI analysis', 'Implementation plan']
    },
    {
      title: 'IT Infrastructure Review',
      description: 'Comprehensive analysis of your current IT infrastructure and recommendations',
      duration: '3 hours',
      price: '$750',
      features: ['Infrastructure audit', 'Security assessment', 'Performance optimization', 'Cost analysis']
    },
    {
      title: 'Digital Transformation Planning',
      description: 'Strategic planning for your digital transformation journey',
      duration: '4 hours',
      price: '$1000',
      features: ['Current state analysis', 'Future state planning', 'Change management', 'Timeline & budget']
    }
  ];

  const benefits = [
    'Expert guidance from certified professionals',
    'Customized solutions for your business needs',
    'Clear roadmap for implementation',
    'ROI analysis and cost optimization',
    'Ongoing support and follow-up'
  ];

  return (
    <>
      <Helmet>
        <title>Consultation - Zion Tech Group</title>
        <meta name="description" content="Professional consultation services by Zion Tech Group. Transform your business with our expert solutions." />
        <meta name="keywords" content="consultation, AI strategy, IT infrastructure, digital transformation, business consulting" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Expert Consultation
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Get professional guidance from our certified experts to transform your business with cutting-edge AI and IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950" 
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (302) 464-0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center group"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Us
              </a>
            </div>
          </section>

          {/* Consultation Types */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              Consultation Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {consultationTypes.map((consultation, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:transform hover:scale-105 group"
                >
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                    {consultation.title}
                  </h3>
                  <p className="text-gray-300 mb-6">
                    {consultation.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center text-sm text-gray-400">
                      <Clock className="w-4 h-4 mr-2" />
                      {consultation.duration}
                    </div>
                    <div className="text-2xl font-bold text-cyan-400">
                      {consultation.price}
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {consultation.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">
                    Book Consultation
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-slate-800/50 to-purple-900/50 rounded-3xl p-12 border border-cyan-500/20">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
                Why Choose Our Consultation?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-gray-300">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Schedule a free consultation with our experts and discover how we can help you achieve your business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950" 
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (302) 464-0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center group"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Us
              </a>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default ConsultationPage;
