'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Star, Users, Zap, Shield, Cloud, Brain, Clock, Phone, Mail, MapPin } from 'lucide-react';

const ConsultationPage: React.FC = () => {
  const consultationTypes = [
    {
      icon: Brain,
      title: 'AI Strategy Consultation',
      description: 'Get expert guidance on implementing AI solutions in your business',
      duration: '60 minutes',
      price: '$200/hour',
      features: [
        'AI readiness assessment',
        'Technology recommendations',
        'Implementation roadmap',
        'ROI analysis'
      ]
    },
    {
      icon: Cloud,
      title: 'Cloud Migration Consultation',
      description: 'Plan your cloud migration with our certified cloud architects',
      duration: '90 minutes',
      price: '$250/hour',
      features: [
        'Current infrastructure analysis',
        'Cloud platform selection',
        'Migration strategy',
        'Cost optimization plan'
      ]
    },
    {
      icon: Shield,
      title: 'Cybersecurity Assessment',
      description: 'Evaluate your security posture and get recommendations',
      duration: '120 minutes',
      price: '$300/hour',
      features: [
        'Security vulnerability assessment',
        'Compliance review',
        'Risk mitigation strategies',
        'Security roadmap'
      ]
    }
  ];

  const benefits = [
    'Expert guidance from certified professionals',
    'Personalized recommendations for your business',
    'Actionable implementation roadmap',
    'Cost-benefit analysis',
    'Follow-up support and resources',
    'Access to our knowledge base'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Consultation - Zion Tech Group | Expert Technology Consulting</title>
        <meta name="description" content="Get expert technology consulting from Zion Tech Group. AI strategy, cloud migration, cybersecurity assessment, and digital transformation guidance." />
        <meta name="keywords" content="consultation, technology consulting, AI strategy, cloud migration, cybersecurity assessment, digital transformation" />
      </Helmet>

      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Expert <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Consultation</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Get personalized guidance from our certified experts to transform your business 
              with the right technology solutions.
            </p>
          </div>
        </section>

        {/* Consultation Types */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Consultation Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the consultation that best fits your needs and get expert guidance.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {consultationTypes.map((consultation, index) => (
                <div
                  key={consultation.title}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-cyan-400 transition-all duration-300 group"
                >
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <consultation.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{consultation.title}</h3>
                    <p className="text-gray-300 text-sm mb-4">{consultation.description}</p>
                    <div className="flex items-center justify-center space-x-4 text-sm text-gray-400">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {consultation.duration}
                      </div>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        {consultation.price}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-3">What's Included</h4>
                    <ul className="space-y-2">
                      {consultation.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105">
                    Schedule Consultation
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Why Choose Our Consultation?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Get the expert guidance you need to make informed technology decisions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Schedule your consultation today and take the first step towards 
                transforming your business with technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 inline-flex items-center justify-center"
                >
                  <span>Schedule Now</span>
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all duration-300 inline-flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call (302) 464-0950
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ConsultationPage;
