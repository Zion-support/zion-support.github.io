'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Calendar, Clock, Users, Award } from 'lucide-react';

const ConsultationPage: React.FC = () => {
  const consultationTypes = [
    {
      title: 'AI Strategy Consultation',
      description: 'Comprehensive AI strategy development and roadmap planning.',
      duration: '2-4 hours',
      price: '$500/hour',
      features: ['AI readiness assessment', 'Technology evaluation', 'Implementation roadmap', 'ROI analysis']
    },
    {
      title: 'Technical Architecture Review',
      description: 'Expert review of your current technical infrastructure and recommendations.',
      duration: '3-6 hours',
      price: '$400/hour',
      features: ['Infrastructure audit', 'Security assessment', 'Performance analysis', 'Optimization recommendations']
    },
    {
      title: 'Custom Solution Design',
      description: 'Tailored solution design for your specific business requirements.',
      duration: '4-8 hours',
      price: '$600/hour',
      features: ['Requirements analysis', 'Solution architecture', 'Technology selection', 'Implementation planning']
    }
  ];

  const process = [
    {
      step: 'Initial Assessment',
      description: 'We analyze your current situation and identify opportunities for improvement.',
      icon: CheckCircle
    },
    {
      step: 'Strategy Development',
      description: 'Create a comprehensive strategy tailored to your business goals.',
      icon: Award
    },
    {
      step: 'Implementation Planning',
      description: 'Develop a detailed implementation plan with timelines and milestones.',
      icon: Calendar
    },
    {
      step: 'Ongoing Support',
      description: 'Provide continuous guidance and support throughout implementation.',
      icon: Users
    }
  ];

  return (
    <React.Fragment>
      <Helmet>
        <title>Consultation - Zion Tech Group | Expert AI & IT Consulting</title>
        <meta name="description" content="Expert AI and IT consulting services. Get personalized guidance for your technology transformation." />
        <meta name="keywords" content="consultation, AI consulting, IT consulting, technology strategy, Zion Tech Group" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Expert Consultation
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Get personalized guidance from our experts to transform your business with AI and IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Schedule Consultation
              </button>
              <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Pricing
              </button>
            </div>
          </div>
        </section>

        {/* Consultation Types Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Consultation Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the consultation type that best fits your needs and budget.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {consultationTypes.map((consultation, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                    {consultation.title}
                  </h3>
                  <p className="text-gray-300 mb-6">{consultation.description}</p>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center text-gray-400">
                      <Clock className="w-5 h-5 mr-2" />
                      <span>{consultation.duration}</span>
                    </div>
                    <div className="text-purple-400 font-bold">{consultation.price}</div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {consultation.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
                    Book Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Our Consultation Process
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A structured approach to ensure you get the most value from your consultation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{step.step}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Schedule your consultation today and take the first step towards transforming your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                Schedule Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default ConsultationPage;
