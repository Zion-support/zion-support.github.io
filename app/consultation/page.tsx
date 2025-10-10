'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Star, Clock, Users, Shield } from 'lucide-react'
const ConsultationPage: React.FC = () => {
  const services = [
    {
      title: 'AI Strategy Consultation',
      description: 'Develop a comprehensive AI strategy tailored to your business needs.',
      features: ['AI readiness assessment', 'Technology roadmap', 'ROI analysis', 'Implementation planning'],
      price: 'Starting at $2,500',
      duration: '2-4 weeks'    },
    {
      id: 'technical',
      name: 'Technical Architecture Review',
      description: 'Deep dive into your current technical infrastructure',
      duration: '1-2 weeks',
      price: '$3,000',
      features: [
        'Infrastructure audit',
        'Security assessment',
        'Performance analysis',
        'Scalability recommendations',
        'Technology stack optimization',
        'Migration planning'
      ],
      popular: false
    },
    {
      id: 'digital',
      name: 'Digital Transformation Planning',
      description: 'Complete digital transformation strategy and roadmap',
      duration: '4-6 weeks',
      price: '$8,000',
      features: [
        'Current state analysis',
        'Future state vision',
        'Change management strategy',
        'Technology selection',
        'Implementation timeline',
        'Success metrics definition'
      ],
      popular: false
    }
  ];
  const process = [
    {
      step: '1',
    },
    {
      step: '2',
      title: 'Strategy Development',
    },
    {
      step: '3',
      title: 'Implementation Plan',
    },
    {
      step: '4',
      title: 'Ongoing Support',
    }
  ]

  return (
    <>
      <Helmet>
        <title>Consultation Services | Zion Tech Group</title>
        <meta name="description" content="Expert consultation services for AI strategy, cloud migration, and cybersecurity. Get personalized guidance for your technology needs." />
        <meta name="keywords" content="AI consultation, cloud migration, cybersecurity audit, technology consulting, IT strategy" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Expert Consultation Services
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Get personalized guidance and strategic insights to transform your business with cutting-edge technology.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              {services.map((service, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="border-t border-white/10 pt-6">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                      <span className="text-gray-400 flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {service.duration}
                      </span>
                    </div>
                    <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold py-3 rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">
                      Get Started
                    </button>
                  </div>
                </div>
              ))}
            </div>

              </div>
            </div>

      description: 'Provide continuous guidance and support throughout implementation.',
      icon: Clock
    }
  ];

  const selectedConsultation = consultationTypes.find(type => type.id === selectedType);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Consultation - Zion Tech Group | Expert AI & IT Consulting</title>
        <meta name="description" content="Get expert consultation on AI strategy, technical architecture, and digital transformation. Our consultants help you make informed technology decisions." />
        <meta name="keywords" content="AI consultation, IT consulting, digital transformation, technology strategy, technical architecture, business consulting" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Expert <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Consultation</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Get expert guidance on AI strategy, technical architecture, and digital transformation. 
            Our experienced consultants help you make informed technology decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Schedule Consultation
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </button>
            <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Download Brochure
            </button>
          </div>
        </div>
      </section>

      {/* Consultation Types */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Consultation Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the consultation type that best fits your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {consultationTypes.map((type) => (
              <div
                key={type.id}
                className={`relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 cursor-pointer hover:scale-105 ${
                  selectedType === type.id
                    ? 'border-blue-400/50 ring-2 ring-blue-400/20'
                    : 'border-white/20 hover:border-white/40'
                }`}
                onClick={() => setSelectedType(type.id)}
              >
                {type.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{type.name}</h3>
                  <p className="text-gray-300 mb-4">{type.description}</p>
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <span className="text-3xl font-bold text-white">{type.price}</span>
                    <span className="text-gray-400">{type.duration}</span>
                  </div>
                </div>

                <ul className="space-y-3">
                  {type.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Consultation Details */}
      {selectedConsultation && (
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-6">{selectedConsultation.name}</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">{selectedConsultation.description}</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">What's Included</h3>
                <ul className="space-y-4">
                  {selectedConsultation.features.map((feature, index) => (
                    <li key={index} className="flex items-start text-gray-300">
                      <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Schedule Your Consultation</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-300">
                    <Calendar className="w-5 h-5 text-blue-400" />
                    <span>Duration: {selectedConsultation.duration}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <Clock className="w-5 h-5 text-blue-400" />
                    <span>Investment: {selectedConsultation.price}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <Users className="w-5 h-5 text-blue-400" />
                    <span>Team of 2-3 experts</span>
                  </div>
                </div>
                <button className="w-full mt-6 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default ConsultationPage>>>>>>> 55f9bfb92d821ca12ee8dd7824e7a6cd258dc747
