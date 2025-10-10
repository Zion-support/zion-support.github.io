'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Phone, Mail, Clock } from 'lucide-react';

const ConsultationPage: React.FC = () => {
  const consultationTypes = [
    {
      title: 'AI Strategy Consultation',
      description: 'Get expert guidance on implementing AI solutions for your business',
      duration: '2-4 hours',
      price: '$500',
      features: [
        'AI readiness assessment',
        'Technology roadmap',
        'Implementation strategy',
        'ROI analysis',
        'Follow-up support'
      ]
    },
    {
      title: 'Cloud Migration Planning',
      description: 'Comprehensive planning for your cloud migration journey',
      duration: '4-6 hours',
      price: '$800',
      features: [
        'Current infrastructure audit',
        'Migration strategy',
        'Cost optimization',
        'Security assessment',
        'Timeline planning'
      ]
    },
    {
      title: 'Digital Transformation',
      description: 'Complete digital transformation strategy and implementation plan',
      duration: '6-8 hours',
      price: '$1,200',
      features: [
        'Business process analysis',
        'Technology assessment',
        'Change management plan',
        'Implementation roadmap',
        'Success metrics definition'
      ]
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: 'Initial Assessment',
      description: 'We analyze your current systems and business requirements'
    },
    {
      step: 2,
      title: 'Strategy Development',
      description: 'Create a customized solution strategy based on your needs'
    },
    {
      step: 3,
      title: 'Implementation Plan',
      description: 'Develop a detailed roadmap with timelines and milestones'
    },
    {
      step: 4,
      title: 'Ongoing Support',
      description: 'Provide continuous guidance and support throughout implementation'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Consultation - Zion Tech Group | Expert IT Consultation</title>
        <meta name="description" content="Get expert consultation for AI implementation, cloud migration, and digital transformation. Professional guidance to accelerate your technology journey." />
        <meta name="keywords" content="IT consultation, AI strategy, cloud migration, digital transformation, technology consulting, expert guidance" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Expert Consultation
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Get professional guidance from our experts to accelerate your technology transformation journey.
            </p>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4 text-center">Consultation Services</h2>
            <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
              Choose from our range of expert consultation services designed to meet your specific needs.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {consultationTypes.map((type, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-4">{type.title}</h3>
                    <p className="text-gray-300 mb-4">{type.description}</p>
                    <div className="flex items-center justify-center space-x-4 mb-4">
                      <div className="flex items-center space-x-1 text-cyan-400">
                        <Clock className="w-4 h-4" />
                        <span>{type.duration}</span>
                      </div>
                      <div className="text-2xl font-bold text-white">{type.price}</div>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {type.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-3 px-6 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">
                    Book Consultation
                  </button>
                </div>
              ))}
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10 mb-16">
              <h2 className="text-2xl font-bold text-white mb-8 text-center">Our Process</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {processSteps.map((step, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                      {step.step}
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                    <p className="text-gray-300">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Contact us today to schedule your consultation and take the first step towards digital transformation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Schedule Call
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white/10 transition-all duration-300"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Send Email
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