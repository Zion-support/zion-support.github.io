'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Star, Clock, Users, Shield } from 'lucide-react';

const ConsultationPage: React.FC = () => {
  const consultationSteps = [
    {
      step: '1',
      title: 'Initial Assessment',
      description: 'Analyze your current technology infrastructure and identify improvement opportunities.'
    },
    {
      step: '2',
      title: 'Strategy Development',
      description: 'Create a customized technology roadmap aligned with your business goals.'
    },
    {
      step: '3',
      title: 'Implementation Planning',
      description: 'Develop detailed implementation plans with timelines and resource requirements.'
    },
    {
      step: '4',
      title: 'Ongoing Support',
      description: 'Provide continuous guidance and support throughout implementation.'
    }
  ];

  const services = [
    {
      title: 'AI Strategy Consulting',
      description: 'Develop AI adoption strategies that align with your business objectives.',
      features: [
        'AI readiness assessment',
        'Technology roadmap development',
        'ROI analysis and planning',
        'Implementation guidance'
      ]
    },
    {
      title: 'Cloud Migration Consulting',
      description: 'Plan and execute seamless cloud migration strategies.',
      features: [
        'Cloud architecture design',
        'Migration planning and execution',
        'Cost optimization strategies',
        'Security and compliance guidance'
      ]
    },
    {
      title: 'Cybersecurity Audit',
      description: 'Comprehensive security assessment and improvement recommendations.',
      features: [
        'Security vulnerability assessment',
        'Compliance gap analysis',
        'Security policy development',
        'Incident response planning'
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Consultation Services | Zion Tech Group</title>
        <meta name="description" content="Get expert consultation on AI, cloud computing, and cybersecurity. Our experienced consultants help you make informed technology decisions." />
        <meta name="keywords" content="IT consultation, AI consulting, cloud consulting, cybersecurity audit, technology strategy" />
      </Helmet>

      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Expert Technology Consultation
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Get personalized guidance from our experienced consultants to make informed technology decisions that drive business growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              {consultationSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-300">
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center">
                    Get Consultation
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ConsultationPage;