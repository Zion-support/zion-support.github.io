'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Calendar, Clock, Users, CheckCircle, ArrowRight, Star, Brain, Cloud, Shield, Zap } from 'lucide-react';

const ConsultationPage: React.FC = () => {
  const consultationTypes = [
    {
      icon: Brain,
      title: 'AI Strategy Consultation',
      description: 'Develop a comprehensive AI strategy tailored to your business needs and objectives.',
      duration: '2-4 hours',
      price: '$500/hour',
      features: [
        'AI readiness assessment',
        'Technology roadmap development',
        'ROI analysis and projections',
        'Implementation planning',
        'Risk assessment and mitigation'
      ]
    },
    {
      icon: Cloud,
      title: 'Cloud Migration Consultation',
      description: 'Expert guidance on migrating your infrastructure to the cloud with minimal disruption.',
      duration: '4-8 hours',
      price: '$400/hour',
      features: [
        'Current infrastructure analysis',
        'Cloud platform selection',
        'Migration strategy development',
        'Cost optimization planning',
        'Security and compliance review'
      ]
    },
    {
      icon: Shield,
      title: 'Cybersecurity Assessment',
      description: 'Comprehensive security evaluation and recommendations to protect your business.',
      duration: '6-12 hours',
      price: '$600/hour',
      features: [
        'Security vulnerability assessment',
        'Compliance audit',
        'Incident response planning',
        'Security policy development',
        'Training recommendations'
      ]
    },
    {
      icon: Zap,
      title: 'Digital Transformation',
      description: 'Strategic guidance on modernizing your business processes and technology stack.',
      duration: '8-16 hours',
      price: '$450/hour',
      features: [
        'Current state analysis',
        'Future state vision',
        'Technology selection',
        'Change management planning',
        'Implementation roadmap'
      ]
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: 'Initial Discovery',
      description: 'We start with a comprehensive discovery session to understand your business, challenges, and goals.',
      duration: '1-2 hours'
    },
    {
      step: 2,
      title: 'Analysis & Assessment',
      description: 'Our experts analyze your current state and identify opportunities for improvement.',
      duration: '2-4 hours'
    },
    {
      step: 3,
      title: 'Strategy Development',
      description: 'We develop a customized strategy and roadmap tailored to your specific needs.',
      duration: '2-6 hours'
    },
    {
      step: 4,
      title: 'Implementation Planning',
      description: 'Detailed implementation plan with timelines, resources, and success metrics.',
      duration: '1-3 hours'
    },
    {
      step: 5,
      title: 'Follow-up & Support',
      description: 'Ongoing support and guidance as you implement the recommended solutions.',
      duration: 'Ongoing'
    }
  ];

  const benefits = [
    {
      icon: Star,
      title: 'Expert Guidance',
      description: 'Access to industry experts with decades of combined experience'
    },
    {
      icon: CheckCircle,
      title: 'Proven Methodologies',
      description: 'Battle-tested frameworks and best practices from successful implementations'
    },
    {
      icon: Users,
      title: 'Customized Solutions',
      description: 'Tailored recommendations based on your specific business requirements'
    },
    {
      icon: Clock,
      title: 'Quick Results',
      description: 'Fast-track your digital transformation with expert guidance'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Consultation - Zion Tech Group | Expert IT Consulting</title>
        <meta name="description" content="Get expert consultation on AI, cloud computing, cybersecurity, and IT strategy. Book a consultation with our experienced team." />
        <meta name="keywords" content="IT consultation, AI consulting, cloud consulting, cybersecurity consulting, technology strategy" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Expert Consultation
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Get expert guidance from our experienced team to accelerate your digital transformation and maximize your technology investments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Book Consultation
              </button>
              <button className="border border-white/20 text-white font-semibold py-4 px-8 rounded-lg hover:bg-white/10 transition-all duration-300">
                View Our Experts
              </button>
            </div>
          </div>
        </section>

        {/* Consultation Types */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Consultation Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {consultationTypes.map((type, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <type.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{type.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{type.description}</p>
                  <div className="space-y-2 text-sm mb-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Duration:</span>
                      <span className="text-cyan-400 font-medium">{type.duration}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Price:</span>
                      <span className="text-cyan-400 font-medium">{type.price}</span>
                    </div>
                  </div>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Includes:</h4>
                    <ul className="space-y-1">
                      {type.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300 text-xs">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105">
                    Book Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Consultation Process</h2>
            <div className="grid md:grid-cols-5 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-300 mb-2 text-sm leading-relaxed">{step.description}</p>
                  <div className="text-cyan-400 text-xs font-medium">{step.duration}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Choose Our Consultation</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Book a consultation with our experts and take the first step towards digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Schedule Consultation
              </button>
              <a href="tel:+13024640950" className="border border-white/20 text-white font-semibold py-4 px-8 rounded-lg hover:bg-white/10 transition-all duration-300">
                Call: (302) 464-0950
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ConsultationPage;