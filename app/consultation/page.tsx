'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, Mail, Calendar, CheckCircle, Users, Target } from 'lucide-react';

const ConsultationPage: React.FC = () => {
  const consultationTypes = [
    {
      title: 'AI Strategy Consultation',
      description: 'Get expert advice on implementing AI solutions in your business',
      duration: '2 hours',
      price: '$299'
    },
    {
      title: 'Cloud Migration Planning',
      description: 'Plan your cloud migration with our certified cloud architects',
      duration: '3 hours',
      price: '$499'
    },
    {
      title: 'Cybersecurity Assessment',
      description: 'Comprehensive security assessment and recommendations',
      duration: '4 hours',
      price: '$799'
    }
  ];

  const benefits = [
    'Expert technical guidance',
    'Customized recommendations',
    'Implementation roadmap',
    'Cost optimization strategies',
    'Risk assessment',
    'Technology selection'
  ];

  return (
    <>
      <Helmet>
        <title>Consultation - Zion Tech Group | Expert IT Consulting</title>
        <meta name="description" content="Get expert consultation on AI, cloud computing, cybersecurity, and IT strategy. Book a consultation with our experienced team." />
        <meta name="keywords" content="IT consultation, AI consulting, cloud consulting, cybersecurity consulting, technology strategy" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16 pt-24">
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
              Expert Consultation
            </h1>
            <p className="text-xl text-cyan-400 mb-8 font-medium">
              Get Expert IT & AI Consulting
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
              Book a consultation with our experienced team to get expert advice on AI, 
              cloud computing, cybersecurity, and IT strategy for your business.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
              Consultation Types
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {consultationTypes.map((type, index) => (
                <div key={index} className="cyber-card p-6">
                  <h3 className="text-xl font-bold text-white mb-4">{type.title}</h3>
                  <p className="text-gray-300 mb-4">{type.description}</p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-cyan-400 font-medium">{type.duration}</span>
                    <span className="text-2xl font-bold text-white">{type.price}</span>
                  </div>
                  <button className="cyber-button w-full">Book Now</button>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <div className="cyber-card p-8">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">What You'll Get</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Book your consultation today and get expert guidance on your technology needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="cyber-button">
                Book Consultation
              </a>
              <a href="tel:+13024640950" className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                Call: (302) 464-0950
              </a>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default ConsultationPage;