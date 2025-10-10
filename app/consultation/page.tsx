'use client';
import React, { useState } from 'react';
import { Calendar, Phone, Mail, CheckCircle, ArrowRight, Star, Users, Clock, Shield, Brain, Cloud, Zap } from 'lucide-react';
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
      id: 'cloud-solutions',
      title: 'Cloud Solutions Consultation',
      description: 'Expert guidance on cloud migration, architecture, and optimization',
      icon: Cloud,
      duration: '45 minutes',
      price: 'Free',
      features: [
        'Cloud Readiness Assessment',
        'Migration Strategy',
        'Cost Optimization',
        'Security Best Practices'
      ]
    },
    {
      id: 'enterprise-consulting',
      title: 'Enterprise Consulting',
      description: 'Comprehensive enterprise technology strategy and digital transformation',
      icon: Shield,
      duration: '90 minutes',
      price: 'Free',
      features: [
        'Digital Transformation Strategy',
        'Technology Architecture Review',
        'Process Optimization',
        'Change Management Planning'
      ]
    }
  ];

  const benefits = [
    {
      icon: Star,
      title: 'Expert Insights',
      description: 'Get advice from our team of certified AI and IT experts with years of industry experience'
    },
    {
      icon: Users,
      title: 'Personalized Approach',
      description: 'Tailored consultation based on your specific business needs and challenges'
    },
    {
      icon: Clock,
      title: 'Flexible Scheduling',
      description: 'Book a consultation at a time that works best for your schedule'
    },
    {
      icon: CheckCircle,
      title: 'No Obligation',
      description: 'Free consultation with no commitment to purchase our services'
    }
  ];

  const selectedServiceData = services.find(service => service.id === selectedService) || services[0];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer 
        title="Free Consultation - Expert Advice | Zion Tech Group"
        description="Get free expert consultation on AI and IT solutions. Schedule a personalized session with our technology experts."
        keywords="free consultation, expert advice, AI consulting, IT consulting, technology strategy"
      />
      <Navigation />
      
      <main className="relative">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Free
              <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Consultation
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Get expert advice on AI and IT solutions from our certified professionals. 
              Schedule a free consultation to discuss your technology needs and challenges.
            </p>
          </div>
        </section>

        {/* Services Selection */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Choose Your Consultation</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service) => (
                <div
                  key={service.id}
                  onClick={() => setSelectedService(service.id)}
                  className={`bg-white/5 backdrop-blur-sm border rounded-xl p-6 cursor-pointer transition-all duration-300 ${
                    selectedService === service.id
                      ? 'border-purple-400 bg-white/10'
                      : 'border-white/10 hover:bg-white/10'
                  }`}
                >
                  <div className="text-center">
                    <service.icon className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
                        <Clock className="w-4 h-4" />
                        <span>{service.duration}</span>
                      </div>
                      <div className="text-lg font-bold text-green-400">
                        {service.price}
                      </div>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-300">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Selected Service Details */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
              <div className="text-center mb-8">
                <selectedServiceData.icon className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-white mb-4">
                  {selectedServiceData.title}
                </h2>
                <p className="text-xl text-gray-300 mb-6">
                  {selectedServiceData.description}
                </p>
                <div className="flex items-center justify-center gap-6 text-gray-400">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    <span>{selectedServiceData.duration}</span>
                  </div>
                  <div className="text-2xl font-bold text-green-400">
                    {selectedServiceData.price}
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">What You'll Get</h3>
                  <ul className="space-y-2">
                    {selectedServiceData.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">How It Works</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold">1</div>
                      <span className="text-gray-300">Schedule your consultation</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold">2</div>
                      <span className="text-gray-300">Prepare your questions and challenges</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold">3</div>
                      <span className="text-gray-300">Meet with our expert and get advice</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold">4</div>
                      <span className="text-gray-300">Receive follow-up resources and next steps</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  <Calendar className="inline-block mr-2 w-5 h-5" />
                  Schedule Consultation
                  <ArrowRight className="inline-block ml-2 w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Why Choose Our Consultation?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                  <benefit.icon className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Expert Advice?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Don't let technology challenges hold your business back. 
              Schedule a free consultation with our experts and discover the solutions you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                <Calendar className="inline-block mr-2 w-5 h-5" />
                Book Free Consultation
              </button>
              <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                <Phone className="inline-block mr-2 w-5 h-5" />
                Call Us Now
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ConsultationPage;