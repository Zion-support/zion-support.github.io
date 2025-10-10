'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Users, CheckCircle, ArrowRight, Phone, Mail, MapPin, Star, Shield } from 'lucide-react';

interface ConsultationType {
  id: string;
  name: string;
  description: string;
  duration: string;
  price: string;
  features: string[];
  popular?: boolean;
}

const ConsultationPage: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string>('');

  const consultationTypes: ConsultationType[] = [
    {
      id: 'strategy',
      name: 'AI Strategy Consultation',
      description: 'Comprehensive AI strategy development for your business',
      duration: '2-4 hours',
      price: '$2,500',
      features: [
        'AI readiness assessment',
        'Technology roadmap development',
        'ROI analysis and projections',
        'Implementation timeline',
        'Resource planning',
        'Follow-up support'
      ],
      popular: true
    },
    {
      id: 'technical',
      name: 'Technical Architecture Review',
      description: 'Deep dive into your current technical infrastructure',
      duration: '4-6 hours',
      price: '$3,500',
      features: [
        'Infrastructure audit',
        'Security assessment',
        'Performance optimization',
        'Scalability analysis',
        'Technology recommendations',
        'Migration planning'
      ]
    },
    {
      id: 'digital',
      name: 'Digital Transformation Planning',
      description: 'End-to-end digital transformation strategy',
      duration: '6-8 hours',
      price: '$5,000',
      features: [
        'Business process analysis',
        'Digital maturity assessment',
        'Change management strategy',
        'Technology integration plan',
        'Training and adoption roadmap',
        'Success metrics definition'
      ]
    }
  ];

  const processSteps = [
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
    {
      icon: Shield,
      title: 'Expert Guidance',
      description: 'Get insights from industry experts with years of experience'
    },
    {
      icon: Clock,
      title: 'Time Savings',
      description: 'Avoid costly mistakes and accelerate your digital transformation'
    },
    {
      icon: CheckCircle,
      title: 'Proven Results',
      description: 'Our strategies have helped hundreds of businesses succeed'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Consultation Services | Zion Tech Group - Expert AI & IT Consulting</title>
        <meta name="description" content="Get expert consultation for AI strategy, technical architecture, and digital transformation. Schedule your consultation today." />
        <meta name="keywords" content="AI consultation, IT consulting, digital transformation, technical architecture, business strategy" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Expert <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Consultation</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Get personalized guidance from our experts to accelerate your AI and digital transformation journey.
            </p>
          </div>
        </section>

        {/* Consultation Types */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Choose Your Consultation</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Select the consultation type that best fits your needs and business goals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {consultationTypes.map((type) => (
                <div
                  key={type.id}
                  className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border transition-all duration-300 cursor-pointer ${
                    selectedType === type.id
                      ? 'border-purple-400 ring-2 ring-purple-400'
                      : 'border-white/20 hover:border-purple-400'
                  } ${type.popular ? 'ring-2 ring-purple-400' : ''}`}
                  onClick={() => setSelectedType(type.id)}
                >
                  {type.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-4">{type.name}</h3>
                    <p className="text-gray-300 mb-6">{type.description}</p>
                    <div className="flex items-center justify-center gap-4 mb-6">
                      <div className="flex items-center gap-2 text-gray-400">
                        <Clock className="w-5 h-5" />
                        <span>{type.duration}</span>
                      </div>
                      <div className="text-3xl font-bold text-white">{type.price}</div>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {type.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300">
                    Select This Plan
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Our Consultation Process</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A structured approach to ensure you get maximum value from your consultation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-white mb-2">Step {step.step}</div>
                    <h3 className="text-xl font-semibold text-white mb-4">{step.title}</h3>
                    <p className="text-gray-300">{step.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Why Choose Our Consultation?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our expert consultants bring years of experience and proven methodologies to help you succeed.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                    <p className="text-gray-300">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Schedule your consultation today and take the first step towards digital transformation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
                  <Calendar className="w-5 h-5" />
                  Schedule Consultation
                </button>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ConsultationPage;