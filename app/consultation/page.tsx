'use client';
import React, { useState } from 'react';
import { Calendar, Phone, Mail, CheckCircle, ArrowRight, Star, Users, Clock, Shield, Brain, Cloud, Zap, Target, Globe } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const ConsultationPage: React.FC = () => {
  const [selectedService, setSelectedService] = useState('ai-services');

  const services = [
    {
      id: 'ai-services',
      title: 'AI Services Consultation',
      description: 'Get expert advice on AI implementation, strategy, and optimization',
      icon: Brain,
      duration: '60 minutes',
      price: 'Free',
      features: [
        'AI Strategy Assessment',
        'Technology Recommendations',
        'Implementation Roadmap',
        'ROI Analysis'
      ]
    },
    {
      id: 'it-services',
      title: 'IT Services Consultation',
      description: 'Comprehensive IT infrastructure and security consultation',
      icon: Cloud,
      duration: '45 minutes',
      price: 'Free',
      features: [
        'Infrastructure Assessment',
        'Security Audit',
        'Performance Optimization',
        'Migration Planning'
      ]
    },
    {
      id: 'cloud-migration',
      title: 'Cloud Migration Consultation',
      description: 'Expert guidance on moving your applications to the cloud',
      icon: Globe,
      duration: '90 minutes',
      price: 'Free',
      features: [
        'Cloud Strategy Planning',
        'Cost Optimization',
        'Security Considerations',
        'Migration Timeline'
      ]
    },
    {
      id: 'automation',
      title: 'Automation Consultation',
      description: 'Discover automation opportunities in your business processes',
      icon: Zap,
      duration: '75 minutes',
      price: 'Free',
      features: [
        'Process Analysis',
        'Automation Opportunities',
        'Implementation Strategy',
        'ROI Projections'
      ]
    }
  ];

  const benefits = [
    {
      title: 'Expert Guidance',
      description: 'Get advice from our certified professionals with years of experience',
      icon: Users
    },
    {
      title: 'Customized Solutions',
      description: 'Tailored recommendations based on your specific business needs',
      icon: Target
    },
    {
      title: 'No Obligation',
      description: 'Free consultations with no commitment to purchase our services',
      icon: CheckCircle
    },
    {
      title: 'Actionable Insights',
      description: 'Receive a detailed report with next steps and recommendations',
      icon: ArrowRight
    }
  ];

  const selectedServiceData = services.find(service => service.id === selectedService);

  return (
    <>
      <SEOOptimizer 
        title="Free Consultation - Zion Tech Group"
        description="Schedule a free consultation with our AI and IT experts. Get personalized advice for your business needs."
        keywords="free consultation, AI consultation, IT consultation, expert advice, business strategy"
      />
      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">
                Free Consultation
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
                Get expert advice from our AI and IT professionals. Schedule a free 
                consultation tailored to your business needs.
              </p>
            </div>
          </div>
        </section>

        {/* Service Selection */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-8 text-center">Choose Your Consultation</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((service) => (
                  <div
                    key={service.id}
                    onClick={() => setSelectedService(service.id)}
                    className={`bg-white/5 backdrop-blur-sm rounded-lg p-6 cursor-pointer transition-all duration-300 ${
                      selectedService === service.id
                        ? 'bg-white/10 border-2 border-cyan-500'
                        : 'hover:bg-white/10'
                    }`}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">{service.title}</h3>
                        <p className="text-cyan-400 text-sm">{service.duration}</p>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-white">{service.price}</span>
                      <span className="text-gray-400 text-sm">per session</span>
                    </div>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-cyan-400" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Selected Service Details */}
        {selectedServiceData && (
          <section className="py-12 bg-black/20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <selectedServiceData.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-white">{selectedServiceData.title}</h2>
                      <p className="text-cyan-400">{selectedServiceData.duration} • {selectedServiceData.price}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-6 text-lg">{selectedServiceData.description}</p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-4">What You'll Get</h3>
                      <ul className="space-y-2">
                        {selectedServiceData.features.map((feature, index) => (
                          <li key={index} className="flex items-center gap-2 text-gray-300">
                            <CheckCircle className="w-5 h-5 text-cyan-400" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-4">Consultation Process</h3>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2 text-gray-300">
                          <Clock className="w-5 h-5 text-cyan-400" />
                          Initial assessment and needs analysis
                        </li>
                        <li className="flex items-center gap-2 text-gray-300">
                          <Users className="w-5 h-5 text-cyan-400" />
                          Expert consultation and recommendations
                        </li>
                        <li className="flex items-center gap-2 text-gray-300">
                          <Target className="w-5 h-5 text-cyan-400" />
                          Actionable next steps and roadmap
                        </li>
                        <li className="flex items-center gap-2 text-gray-300">
                          <Mail className="w-5 h-5 text-cyan-400" />
                          Follow-up resources and support
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Benefits Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-8 text-center">Why Choose Our Consultation?</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mb-4">
                      <benefit.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                    <p className="text-gray-300">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-500/20 to-purple-600/20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Get Expert Advice?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Schedule your free consultation today and discover how our AI and IT 
              solutions can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                Schedule Consultation
              </button>
              <button className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ConsultationPage;
