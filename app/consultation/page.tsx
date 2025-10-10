'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Clock, Users, Star, ArrowRight, Phone, Mail, Calendar, Shield, Brain, Cloud, Zap } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ConsultationPage: React.FC = () => {
  const [selectedConsultation, setSelectedConsultation] = useState(null);

  const consultations = [
    {
      id: 'ai-strategy',
      name: 'AI Strategy Consultation',
      description: 'Comprehensive AI strategy development and implementation planning for your business',
      duration: '2-3 hours',
      price: 'Free',
      features: ['AI readiness assessment', 'Technology roadmap', 'ROI analysis', 'Implementation timeline'],
      icon: Brain,
      popular: true
    },
    {
      id: 'cloud-migration',
      name: 'Cloud Migration Planning',
      description: 'Strategic cloud migration planning with cost optimization and security assessment',
      duration: '3-4 hours',
      price: 'Free',
      features: ['Current infrastructure analysis', 'Cloud provider selection', 'Migration strategy', 'Cost optimization'],
      icon: Cloud,
      popular: false
    },
    {
      id: 'digital-transformation',
      name: 'Digital Transformation',
      description: 'Complete digital transformation strategy and planning',
      duration: '6-8 hours',
      price: 'Free',
      features: ['Process analysis', 'Technology selection', 'Change management', 'Timeline planning'],
      icon: Zap,
      popular: true
    }
  ];

  const process = [
    {
      step: '1',
      title: 'Initial Assessment',
      description: 'We analyze your current technology stack and business requirements'
    },
    {
      step: '2',
      title: 'Strategy Development',
      description: 'We create a customized technology strategy tailored to your needs'
    },
    {
      step: '3',
      title: 'Implementation Plan',
      description: 'We develop a detailed roadmap for implementing the solution'
    },
    {
      step: '4',
      title: 'Ongoing Support',
      description: 'We provide continuous support and optimization for your systems'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Free Consultation - Zion Tech Group</title>
        <meta name="description" content="Get a free consultation with our AI and IT experts. Strategic planning, technology assessment, and digital transformation guidance." />
      </Helmet>

      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Free <span className="text-cyan-400">Consultation</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Get expert guidance on your AI and IT strategy. Our consultants will help you identify opportunities, 
                plan implementations, and maximize your technology investments.
              </p>
            </div>

            {/* Consultation Types */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Choose Your Consultation</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {consultations.map((consultation) => (
                  <div key={consultation.id} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-800/70 transition-all duration-300 group">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <consultation.icon className="w-6 h-6 text-white" />
                      </div>
                      {consultation.popular && (
                        <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                          <Star className="w-4 h-4 mr-1" />
                          Popular
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3">{consultation.name}</h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">{consultation.description}</p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center text-gray-400">
                        <Clock className="w-4 h-4 mr-2" />
                        <span className="text-sm">{consultation.duration}</span>
                      </div>
                      <div className="text-2xl font-bold text-cyan-400">{consultation.price}</div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-white mb-3">What's Included</h4>
                      <ul className="space-y-2">
                        {consultation.features.map((feature, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <button
                      onClick={() => setSelectedConsultation(consultation)}
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
                    >
                      Book Now
                    </button>
                  </div>
                ))}
              </div>
            </section>

            {/* Process Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Process</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {process.map((step, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-white">{step.step}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-gray-300">{step.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA Section */}
            <section className="text-center">
              <div className="bg-slate-800/50 rounded-lg p-8">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Ready to Get Started?
                </h2>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  Book your free consultation today and discover how our AI and IT solutions can transform your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                    Book Free Consultation
                  </a>
                  <a
                    href="tel:+13024640950"
                    className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                    Call: (302) 464-0950
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default ConsultationPage;