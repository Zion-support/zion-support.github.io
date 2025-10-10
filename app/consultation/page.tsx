'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Calendar, Clock, User, CheckCircle } from 'lucide-react';

const ConsultationPage: React.FC = () => {
  const consultationTypes = [
    {
      title: 'AI Strategy Consultation',
      duration: '60 minutes',
      price: '$500',
      description: 'Get expert advice on AI implementation strategy for your business',
      features: [
        'AI readiness assessment',
        'Technology recommendations',
        'Implementation roadmap',
        'ROI analysis',
        'Follow-up support'
      ]
    },
    {
      title: 'Technical Architecture Review',
      duration: '90 minutes',
      price: '$750',
      description: 'Comprehensive review of your current technical infrastructure',
      features: [
        'Infrastructure audit',
        'Security assessment',
        'Performance optimization',
        'Scalability planning',
        'Technology stack recommendations'
      ]
    },
    {
      title: 'Custom Solution Design',
      duration: '120 minutes',
      price: '$1,000',
      description: 'Design a tailored solution for your specific business needs',
      features: [
        'Requirements analysis',
        'Solution architecture design',
        'Technology selection',
        'Implementation timeline',
        'Cost estimation'
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Consultation - Zion Tech Group | Expert AI & IT Consulting</title>
        <meta name="description" content="Schedule a consultation with our AI and IT experts. Get personalized advice and solutions for your business needs." />
        <meta name="keywords" content="consultation, AI consulting, IT consulting, expert advice, strategy, architecture" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        {/* Hero Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Expert Consultation
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Get personalized advice from our AI and IT experts. Schedule a consultation to discuss your project and get expert recommendations.
            </p>
          </div>
        </section>

        {/* Consultation Types */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Choose Your Consultation Type
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {consultationTypes.map((consultation) => (
                <div key={consultation.title} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{consultation.title}</h3>
                  <p className="text-gray-600 mb-4">{consultation.description}</p>
                  
                  <div className="flex items-center mb-4">
                    <Clock className="w-5 h-5 text-cyan-500 mr-2" />
                    <span className="text-gray-700">{consultation.duration}</span>
                  </div>
                  
                  <div className="text-3xl font-bold text-cyan-600 mb-6">
                    {consultation.price}
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {consultation.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                    Schedule Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 px-4 bg-slate-800">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              How It Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Schedule</h3>
                <p className="text-gray-300">Choose your consultation type and schedule a convenient time</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Prepare</h3>
                <p className="text-gray-300">We'll send you a brief questionnaire to understand your needs</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Consult</h3>
                <p className="text-gray-300">Meet with our experts for personalized advice and recommendations</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Follow-up</h3>
                <p className="text-gray-300">Receive detailed recommendations and ongoing support</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Schedule your consultation today and take the first step towards transforming your business with AI and IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Consultation
              </button>
              <button className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ConsultationPage;