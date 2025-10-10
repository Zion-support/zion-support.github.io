'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Users, CheckCircle, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

interface ConsultationType {
  id: string;
  name: string;
  description: string;
  duration: string;
  price: string;
  features: string[];
  popular: boolean;
}

const ConsultationPage: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string>('');

  const consultationTypes: ConsultationType[] = [
    {
      id: 'ai-strategy',
      name: 'AI Strategy Consultation',
      description: 'Comprehensive AI strategy development and implementation planning',
      duration: '2-4 hours',
      price: '$500',
      features: [
        'AI readiness assessment',
        'Technology roadmap development',
        'ROI analysis and projections',
        'Implementation timeline planning'
      ],
      popular: true
    },
    {
      id: 'cloud-migration',
      name: 'Cloud Migration Planning',
      description: 'Strategic cloud migration assessment and planning',
      duration: '3-5 hours',
      price: '$750',
      features: [
        'Current infrastructure analysis',
        'Cloud platform recommendations',
        'Migration strategy development',
        'Cost optimization planning'
      ],
      popular: false
    },
    {
      id: 'cybersecurity',
      name: 'Cybersecurity Audit',
      description: 'Comprehensive security assessment and recommendations',
      duration: '4-6 hours',
      price: '$1,000',
      features: [
        'Security vulnerability assessment',
        'Compliance review',
        'Security policy development',
        'Incident response planning'
      ],
      popular: false
    },
    {
      id: 'digital-transformation',
      name: 'Digital Transformation',
      description: 'End-to-end digital transformation strategy',
      duration: '6-8 hours',
      price: '$1,500',
      features: [
        'Business process analysis',
        'Technology stack evaluation',
        'Change management planning',
        'Success metrics definition'
      ],
      popular: false
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: 'Initial Consultation',
      description: 'We discuss your business goals and current challenges',
      icon: Phone
    },
    {
      step: 2,
      title: 'Assessment & Analysis',
      description: 'Deep dive into your current systems and processes',
      icon: Users
    },
    {
      step: 3,
      title: 'Strategy Development',
      description: 'Create a customized roadmap for your success',
      icon: CheckCircle
    },
    {
      step: 4,
      title: 'Implementation Planning',
      description: 'Detailed execution plan with timelines and milestones',
      icon: Calendar
    }
  ];

  const benefits = [
    'Expert insights from industry professionals',
    'Customized solutions for your business',
    'Clear roadmap for implementation',
    'Cost-benefit analysis',
    'Risk assessment and mitigation',
    'Ongoing support and guidance'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Consultation Services - Zion Tech Group</title>
        <meta name="description" content="Get expert consultation for AI strategy, cloud migration, cybersecurity, and digital transformation. Professional guidance to accelerate your business growth." />
        <meta name="keywords" content="consultation, AI strategy, cloud migration, cybersecurity audit, digital transformation, business consulting" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Expert <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Consultation</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Get professional guidance from our experts to accelerate your digital transformation and maximize your technology investments.
          </p>
        </div>
      </section>

      {/* Consultation Types */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Choose Your Consultation</h2>
            <p className="text-gray-300 text-lg">Select the consultation that best fits your needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {consultationTypes.map((type) => (
              <div
                key={type.id}
                className={`bg-white/5 backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 cursor-pointer ${
                  selectedType === type.id
                    ? 'border-purple-400 bg-white/10'
                    : 'border-white/10 hover:bg-white/10'
                } ${type.popular ? 'ring-2 ring-purple-400' : ''}`}
                onClick={() => setSelectedType(type.id)}
              >
                {type.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-white mb-3">{type.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{type.description}</p>
                  
                  <div className="mb-4">
                    <div className="text-3xl font-bold text-purple-400 mb-1">{type.price}</div>
                    <div className="text-gray-400 text-sm">{type.duration}</div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {type.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300">
                    Select This
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Our Process</h2>
            <p className="text-gray-300 text-lg">How we work with you to achieve your goals</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mb-4">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-white mb-2">Step {step.step}</div>
                <h3 className="text-lg font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-gray-300 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Why Choose Our Consultation?</h2>
              <p className="text-gray-300 text-lg mb-8">
                Our expert consultants bring years of experience and deep industry knowledge to help you make informed decisions about your technology investments.
              </p>
              
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Ready to Get Started?</h3>
              <p className="text-gray-300 mb-6">
                Schedule your consultation today and take the first step towards transforming your business with cutting-edge technology.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center text-gray-300">
                  <Phone className="w-5 h-5 text-purple-400 mr-3" />
                  <span>+1 (302) 464-0950</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Mail className="w-5 h-5 text-purple-400 mr-3" />
                  <span>consultation@ziontechgroup.com</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <MapPin className="w-5 h-5 text-purple-400 mr-3" />
                  <span>364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
              </div>

              <div className="mt-8 space-y-3">
                <Link
                  to="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300"
                >
                  <Calendar className="w-5 h-5" />
                  Schedule Consultation
                </Link>
                <button className="w-full inline-flex items-center justify-center gap-2 bg-white/10 text-white px-6 py-3 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <ArrowRight className="w-5 h-5" />
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-6">
              Transform Your Business Today
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Don't let technology challenges hold you back. Get expert guidance and accelerate your digital transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                <Calendar className="w-5 h-5" />
                Book Your Consultation
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <ArrowRight className="w-5 h-5" />
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConsultationPage;