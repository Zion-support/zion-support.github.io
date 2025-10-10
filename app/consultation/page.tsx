'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Clock, Users, Shield, Zap } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

interface ConsultationService {
  id: string;
  title: string;
  description: string;
  duration: string;
  price: string;
  features: string[];
  icon: React.ComponentType<any>;
}

const ConsultationPage: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const consultationServices: ConsultationService[] = [
    {
      id: '1',
      title: 'Technology Assessment',
      description: 'Comprehensive evaluation of your current technology stack and infrastructure.',
      duration: '2-4 weeks',
      price: '$5,000 - $15,000',
      features: [
        'Current system analysis',
        'Security audit',
        'Performance evaluation',
        'Recommendations report',
        'Implementation roadmap'
      ],
      icon: Shield
    },
    {
      id: '2',
      title: 'AI Strategy Consultation',
      description: 'Develop a comprehensive AI strategy tailored to your business needs.',
      duration: '4-6 weeks',
      price: '$10,000 - $25,000',
      features: [
        'AI readiness assessment',
        'Use case identification',
        'Technology selection',
        'Implementation planning',
        'ROI projections'
      ],
      icon: Zap
    },
    {
      id: '3',
      title: 'Cloud Migration Planning',
      description: 'Plan and execute a seamless migration to the cloud.',
      duration: '6-12 weeks',
      price: '$15,000 - $50,000',
      features: [
        'Migration strategy',
        'Architecture design',
        'Security planning',
        'Cost optimization',
        'Implementation support'
      ],
      icon: Users
    }
  ];

  const consultationSteps = [
    {
      step: '1',
      title: 'Initial Consultation',
      description: 'We discuss your business goals and challenges in a free 30-minute call.',
      duration: '30 minutes'
    },
    {
      step: '2',
      title: 'Proposal & Planning',
      description: 'We create a detailed proposal with timeline and deliverables.',
      duration: '1-2 days'
    },
    {
      step: '3',
      title: 'Project Execution',
      description: 'Our experts work on your project with regular updates and check-ins.',
      duration: '2-12 weeks'
    },
    {
      step: '4',
      title: 'Delivery & Support',
      description: 'We deliver results and provide ongoing support as needed.',
      duration: 'Ongoing'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Consultation - Zion Tech Group | Expert Technology Consulting</title>
        <meta name="description" content="Get expert technology consultation from Zion Tech Group. We help businesses with AI strategy, cloud migration, and digital transformation." />
        <meta name="keywords" content="technology consultation, AI strategy, cloud migration, digital transformation, tech consulting" />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Expert <span className="text-blue-400">Consultation</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Get personalized technology guidance from our team of experts. We help you make informed decisions and achieve your business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                Schedule Free Consultation
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-3 border border-white/30 text-white rounded-lg font-semibold hover:bg-white/10 transition-colors">
                View Our Services
              </button>
            </div>
          </div>
        </section>

        {/* Consultation Services */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Our Consultation Services
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {consultationServices.map((service) => {
                const IconComponent = service.icon;
                return (
                  <div 
                    key={service.id} 
                    className={`bg-gray-800 rounded-lg p-6 hover:transform hover:scale-105 transition-all duration-300 cursor-pointer ${
                      selectedService === service.id ? 'ring-2 ring-blue-500' : ''
                    }`}
                    onClick={() => setSelectedService(selectedService === service.id ? null : service.id)}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-400">{service.duration}</div>
                        <div className="text-lg font-semibold text-green-400">{service.price}</div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Consultation Process */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Our Consultation Process
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {consultationSteps.map((step) => (
                <div key={step.step} className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 mb-2">
                    {step.description}
                  </p>
                  <div className="flex items-center justify-center gap-1 text-sm text-gray-400">
                    <Clock className="w-4 h-4" />
                    {step.duration}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Schedule a free consultation with our experts and discover how we can help transform your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                  Schedule Free Consultation
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="px-8 py-3 border border-white/30 text-white rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  Download Our Brochure
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default ConsultationPage;