'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Users, CheckCircle, ArrowRight, Phone, Mail, MessageCircle, Video, Star } from 'lucide-react';

interface ConsultationType {
  id: string;
  name: string;
  duration: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
  icon: React.ComponentType<{ className?: string }>;
}

const ConsultationPage: React.FC = () => {
  const [selectedType, setSelectedType] = useState('');

  const consultationTypes: ConsultationType[] = [
    {
      id: 'discovery',
      name: 'Discovery Call',
      duration: '30 minutes',
      price: 'Free',
      description: 'Initial consultation to understand your needs and challenges',
      features: [
        'Needs assessment',
        'Solution recommendations',
        'Project scope discussion',
        'Next steps planning'
      ],
      icon: MessageCircle
    },
    {
      id: 'strategy',
      name: 'Strategy Session',
      duration: '60 minutes',
      price: '$299',
      description: 'Comprehensive strategy development for your AI and IT initiatives',
      features: [
        'Detailed requirements analysis',
        'Technology roadmap creation',
        'Implementation timeline',
        'Resource planning',
        'Risk assessment'
      ],
      popular: true,
      icon: Users
    },
    {
      id: 'technical',
      name: 'Technical Deep Dive',
      duration: '90 minutes',
      price: '$499',
      description: 'In-depth technical consultation with our expert team',
      features: [
        'Architecture review',
        'Technical feasibility analysis',
        'Integration planning',
        'Performance optimization',
        'Security assessment',
        'Code review (if applicable)'
      ],
      icon: Video
    }
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: 'Expert Guidance',
      description: 'Get advice from industry experts with years of experience'
    },
    {
      icon: Clock,
      title: 'Time-Saving',
      description: 'Avoid costly mistakes and accelerate your project timeline'
    },
    {
      icon: Star,
      title: 'Proven Results',
      description: 'Our strategies have helped hundreds of businesses succeed'
    }
  ];

  const processSteps = [
    {
      step: '1',
      title: 'Schedule Consultation',
      description: 'Choose your preferred consultation type and schedule a time that works for you'
    },
    {
      step: '2',
      title: 'Pre-Consultation Prep',
      description: 'We\'ll send you a brief questionnaire to understand your specific needs'
    },
    {
      step: '3',
      title: 'Expert Consultation',
      description: 'Meet with our experts for a focused discussion on your challenges and goals'
    },
    {
      step: '4',
      title: 'Action Plan',
      description: 'Receive a detailed action plan with recommendations and next steps'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Consultation - Zion Tech Group | Expert IT Consulting</title>
        <meta name="description" content="Get expert consultation for your AI and IT projects. Free discovery calls, strategy sessions, and technical deep dives with our experienced team." />
        <meta name="keywords" content="consultation, IT consulting, AI consulting, strategy session, technical consultation, expert advice" />
        <meta property="og:title" content="Consultation - Zion Tech Group" />
        <meta property="og:description" content="Get expert consultation for your AI and IT projects." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/consultation" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Expert <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Consultation</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Get expert guidance for your AI and IT projects. Our experienced team is ready to help you succeed.
            </p>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose Our Consultation?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-slate-900" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Consultation Types */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Choose Your Consultation</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {consultationTypes.map((type) => (
                <div
                  key={type.id}
                  className={`bg-slate-800/50 backdrop-blur-sm border rounded-lg p-8 hover:border-cyan-500/50 transition-all duration-300 ${
                    type.popular ? 'border-cyan-400/50 ring-2 ring-cyan-400/20' : 'border-slate-700'
                  }`}
                >
                  {type.popular && (
                    <div className="flex items-center justify-center mb-4">
                      <span className="px-3 py-1 bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 text-sm rounded-full font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                      <type.icon className="w-8 h-8 text-slate-900" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{type.name}</h3>
                    <p className="text-gray-300 mb-4">{type.description}</p>
                    <div className="text-3xl font-bold text-cyan-400 mb-2">{type.price}</div>
                    <div className="text-gray-400">{type.duration}</div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {type.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => setSelectedType(type.id)}
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      type.popular
                        ? 'bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 hover:from-cyan-300 hover:to-purple-300'
                        : 'bg-slate-700 text-white hover:bg-slate-600'
                    }`}
                  >
                    Select {type.name}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-900 font-bold text-lg">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-300 text-sm">{step.description}</p>
                </div>
              ))}
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
              Schedule your consultation today and take the first step towards transforming your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 px-8 py-3 rounded-lg font-semibold hover:from-cyan-300 hover:to-purple-300 transition-all duration-300"
              >
                Schedule Consultation
                <Calendar className="w-5 h-5" />
              </Link>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center gap-2 bg-slate-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-slate-600 transition-all duration-300"
              >
                Call Now
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ConsultationPage;
