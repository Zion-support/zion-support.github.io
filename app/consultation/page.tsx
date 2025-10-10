'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Users, Clock, Star, Zap, Shield, Target, Award } from 'lucide-react';

interface ConsultationType {
  id: string;
  name: string;
  duration: string;
  price: string;
  description: string;
  features: string[];
  popular: boolean;
  icon: React.ComponentType<any>;
}

const ConsultationPage: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string>('');

  const consultationTypes: ConsultationType[] = [
    {
      id: '1',
      name: 'Discovery Call',
      duration: '30 minutes',
      price: 'Free',
      description: 'Initial consultation to understand your business needs and challenges',
      features: [
        'Business needs assessment',
        'Technology evaluation',
        'Solution recommendations',
        'Next steps planning'
      ],
      popular: false,
      icon: Target
    },
    {
      id: '2',
      name: 'Strategy Session',
      duration: '2 hours',
      price: '$500',
      description: 'Comprehensive analysis and strategic planning for your AI/IT transformation',
      features: [
        'Detailed business analysis',
        'Technology roadmap creation',
        'Implementation timeline',
        'Resource planning',
        'ROI projections'
      ],
      popular: true,
      icon: Award
    },
    {
      id: '3',
      name: 'Technical Deep Dive',
      duration: '4 hours',
      price: '$1,200',
      description: 'In-depth technical consultation with our expert engineers and architects',
      features: [
        'Architecture review',
        'Security assessment',
        'Performance optimization',
        'Integration planning',
        'Technical documentation'
      ],
      popular: false,
      icon: Shield
    }
  ];

  const benefits = [
    'Expert guidance from industry professionals',
    'Customized solutions for your business',
    'Clear implementation roadmap',
    'Cost-effective technology choices',
    'Risk mitigation strategies',
    'Ongoing support and maintenance'
  ];

  const stats = [
    {
      icon: Users,
      value: '500+',
      label: 'Consultations Completed',
      description: 'Successful projects delivered'
    },
    {
      icon: Star,
      value: '98%',
      label: 'Client Satisfaction',
      description: 'Highly rated consultations'
    },
    {
      icon: Clock,
      value: '24/7',
      label: 'Support Available',
      description: 'Always here to help'
    },
    {
      icon: Award,
      value: '15+',
      label: 'Years Experience',
      description: 'Industry expertise'
    }
  ];

  const processSteps = [
    {
      step: '1',
      title: 'Initial Contact',
      description: 'Reach out to us with your project details and requirements'
    },
    {
      step: '2',
      title: 'Discovery Call',
      description: 'We schedule a free consultation to understand your needs'
    },
    {
      step: '3',
      title: 'Proposal Creation',
      description: 'We create a detailed proposal with timeline and pricing'
    },
    {
      step: '4',
      title: 'Project Kickoff',
      description: 'Once approved, we begin implementation with regular updates'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Consultation - Zion Tech Group | Expert AI & IT Consulting</title>
        <meta name="description" content="Get expert consultation for your AI and IT projects. Our experienced team provides strategic guidance and technical expertise to help your business succeed." />
        <meta name="keywords" content="AI consultation, IT consulting, technology consulting, business strategy, digital transformation" />
        <meta property="og:title" content="Consultation - Zion Tech Group" />
        <meta property="og:description" content="Expert AI and IT consulting services" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/consultation" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Expert Consultation
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Get expert guidance for your AI and IT projects. Our experienced team provides strategic consultation to help your business succeed.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-slate-900" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                  <div className="text-gray-500 text-xs mt-1">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Consultation Types */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Consultation Types</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the consultation type that best fits your needs and budget.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {consultationTypes.map((type) => (
                <div
                  key={type.id}
                  className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-2xl p-8 transition-all duration-300 hover:scale-105 ${
                    type.popular
                      ? 'border-cyan-400/50 ring-2 ring-cyan-400/20'
                      : 'border-slate-700 hover:border-cyan-400/30'
                  }`}
                >
                  {type.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                        <Star className="w-3 h-3 fill-current" />
                        Most Popular
                      </div>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <type.icon className="w-8 h-8 text-cyan-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{type.name}</h3>
                    <p className="text-gray-300 mb-4">{type.description}</p>
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <span className="text-3xl font-bold text-cyan-400">{type.price}</span>
                      <span className="text-gray-400">• {type.duration}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {type.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => setSelectedType(type.id)}
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${
                      type.popular
                        ? 'bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 hover:from-cyan-300 hover:to-purple-300'
                        : 'bg-slate-700 text-white hover:bg-slate-600 border border-slate-600'
                    }`}
                  >
                    Book Consultation
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Our Process</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Simple, transparent process to get your project started quickly.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-slate-900">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Choose Our Consultation?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl p-12">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Book your consultation today and take the first step towards transforming your business with AI and IT solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 px-8 py-4 rounded-lg font-semibold hover:from-cyan-300 hover:to-purple-300 transition-all duration-300 transform hover:scale-105"
                >
                  <Zap className="w-5 h-5" />
                  Book Free Discovery Call
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-slate-700 text-white px-8 py-4 rounded-lg font-semibold border border-slate-600 hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300"
                >
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