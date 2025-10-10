'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, Mail, Calendar, CheckCircle, ArrowRight, Star, Clock, Users, Shield, Zap } from 'lucide-react';

const ConsultationPage: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string>('');

  const consultationTypes = [
    {
      id: 'ai-strategy',
      title: 'AI Strategy Consultation',
      description: 'Get expert guidance on implementing AI solutions that align with your business goals.',
      duration: '2-4 hours',
      price: 'Starting at $500/hour',
      features: [
        'AI readiness assessment',
        'Technology roadmap development',
        'ROI analysis and projections',
        'Implementation planning',
        'Risk assessment and mitigation'
      ],
      icon: Star
    },
    {
      id: 'cloud-migration',
      title: 'Cloud Migration Consultation',
      description: 'Plan and execute a seamless migration to the cloud with minimal disruption.',
      duration: '4-8 hours',
      price: 'Starting at $400/hour',
      features: [
        'Current infrastructure analysis',
        'Cloud platform selection',
        'Migration strategy development',
        'Security and compliance planning',
        'Cost optimization recommendations'
      ],
      icon: Shield
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity Audit',
      description: 'Comprehensive security assessment to protect your digital assets.',
      duration: '6-12 hours',
      price: 'Starting at $600/hour',
      features: [
        'Security vulnerability assessment',
        'Compliance review (SOC 2, ISO 27001)',
        'Penetration testing',
        'Security policy development',
        'Incident response planning'
      ],
      icon: Shield
    },
    {
      id: 'digital-transformation',
      title: 'Digital Transformation',
      description: 'Guide your organization through comprehensive digital transformation.',
      duration: '8-16 hours',
      price: 'Starting at $450/hour',
      features: [
        'Digital maturity assessment',
        'Process optimization',
        'Technology integration planning',
        'Change management strategy',
        'Training and development programs'
      ],
      icon: Users
    }
  ];

  const process = [
    {
      step: '1',
      title: 'Initial Assessment',
      description: 'We analyze your current technology landscape and business objectives.',
      icon: CheckCircle
    },
    {
      step: '2',
      title: 'Strategy Development',
      description: 'Create a customized strategy based on your specific needs and goals.',
      icon: Star
    },
    {
      step: '3',
      title: 'Implementation Plan',
      description: 'Develop a detailed roadmap with timelines and milestones.',
      icon: Calendar
    },
    {
      step: '4',
      title: 'Ongoing Support',
      description: 'Provide continuous guidance and support throughout implementation.',
      icon: Users
    }
  ];

  const benefits = [
    'Expert guidance from industry professionals',
    'Customized solutions for your specific needs',
    'Proven methodologies and best practices',
    'Comprehensive documentation and reports',
    'Ongoing support and follow-up',
    'Cost-effective implementation strategies'
  ];

  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Speak directly with our consultants',
      contact: '+1 (555) 123-4567',
      availability: 'Mon-Fri 9AM-6PM EST'
    },
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Send us your requirements',
      contact: 'consultation@ziontechgroup.com',
      availability: 'Response within 2 hours'
    },
    {
      icon: Calendar,
      title: 'Schedule Online',
      description: 'Book a consultation slot',
      contact: 'Book Now',
      availability: 'Available 24/7'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Consultation Services | Zion Tech Group</title>
        <meta name="description" content="Get expert consultation on AI, cloud migration, cybersecurity, and digital transformation. Professional guidance to accelerate your technology initiatives." />
        <meta name="keywords" content="consultation, AI strategy, cloud migration, cybersecurity audit, digital transformation, technology consulting" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Expert Consultation
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Get professional guidance from our industry experts to accelerate your technology initiatives and achieve your business goals.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 text-cyan-400">
              <div className="flex items-center">
                <Star className="w-5 h-5 mr-2" />
                <span>Expert Guidance</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                <span>Flexible Scheduling</span>
              </div>
              <div className="flex items-center">
                <Zap className="w-5 h-5 mr-2" />
                <span>Proven Results</span>
              </div>
            </div>
          </div>
        </section>

        {/* Consultation Types */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Consultation Services</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Choose from our range of specialized consultation services designed to address your specific needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {consultationTypes.map((type) => {
                const IconComponent = type.icon;
                return (
                  <div
                    key={type.id}
                    className={`bg-white/5 backdrop-blur-sm border rounded-xl p-6 hover:bg-white/10 transition-all duration-300 cursor-pointer ${
                      selectedType === type.id ? 'border-cyan-400/50 ring-1 ring-cyan-400/20' : 'border-white/10'
                    }`}
                    onClick={() => setSelectedType(selectedType === type.id ? '' : type.id)}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center">
                        <div className="p-3 bg-purple-500/20 rounded-lg mr-4">
                          <IconComponent className="w-6 h-6 text-purple-400" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white mb-1">{type.title}</h3>
                          <div className="flex items-center gap-4 text-sm text-gray-400">
                            <span className="flex items-center">
                              <Clock className="w-4 h-4 mr-1" />
                              {type.duration}
                            </span>
                            <span className="text-cyan-400 font-medium">{type.price}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-4">{type.description}</p>

                    {selectedType === type.id && (
                      <div className="mt-4 pt-4 border-t border-white/10">
                        <h4 className="text-sm font-semibold text-white mb-3">What's Included:</h4>
                        <ul className="space-y-2">
                          {type.features.map((feature, index) => (
                            <li key={index} className="flex items-center text-sm text-gray-300">
                              <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <button className="w-full mt-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-2 px-4 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">
                          Book This Consultation
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Our Process</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                A structured approach to delivering exceptional consultation services.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="relative mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl font-bold text-white">{step.step}</span>
                      </div>
                      <div className="flex justify-center mb-4">
                        <IconComponent className="w-6 h-6 text-cyan-400" />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-gray-300 text-sm">{step.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Why Choose Our Consultation?</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                We bring decades of combined experience and proven methodologies to every engagement.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center mb-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <h3 className="text-white font-semibold">Consultation Advantage</h3>
                  </div>
                  <p className="text-gray-300 text-sm">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Get Started Today</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Ready to transform your business? Contact us to schedule your consultation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {contactMethods.map((method, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 text-center">
                  <div className="flex justify-center mb-4">
                    <method.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{method.title}</h3>
                  <p className="text-gray-300 mb-4">{method.description}</p>
                  <div className="text-cyan-400 font-medium mb-2">{method.contact}</div>
                  <div className="text-sm text-gray-400">{method.availability}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Accelerate Your Success?
            </h2>
            <p className="text-gray-300 mb-8">
              Book your consultation today and take the first step towards transforming your business with cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">
                Schedule Consultation
              </button>
              <button className="px-8 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300">
                Download Brochure
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ConsultationPage;