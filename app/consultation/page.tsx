'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Calendar, Clock, User, Mail, Phone, CheckCircle, ArrowRight, Star, Award, Target } from 'lucide-react';

interface ConsultationType {
  id: string;
  name: string;
  description: string;
  duration: string;
  price: string;
  features: string[];
  popular: boolean;
  icon: React.ReactNode;
}

const ConsultationPage: React.FC = () => {
  const [selectedType, setSelectedType] = useState('Strategy');

  const consultationTypes: ConsultationType[] = [
    {
      id: 'strategy',
      name: 'Strategy Consultation',
      description: 'Comprehensive business strategy and technology roadmap planning',
      duration: '2-4 hours',
      price: '$500',
      features: [
        'Business analysis',
        'Technology assessment',
        'Strategic roadmap',
        'Implementation plan',
        'Follow-up support'
      ],
      popular: true,
      icon: <Target className="w-8 h-8 text-blue-500" />
    },
    {
      id: 'technical',
      name: 'Technical Consultation',
      description: 'Deep dive into technical architecture and implementation details',
      duration: '1-2 hours',
      price: '$300',
      features: [
        'Technical architecture review',
        'Code review',
        'Performance optimization',
        'Security assessment',
        'Best practices guidance'
      ],
      popular: false,
      icon: <Award className="w-8 h-8 text-green-500" />
    },
    {
      id: 'ai',
      name: 'AI Implementation',
      description: 'AI strategy and implementation planning for your business',
      duration: '3-5 hours',
      price: '$750',
      features: [
        'AI readiness assessment',
        'Use case identification',
        'Implementation roadmap',
        'ROI analysis',
        'Pilot project planning'
      ],
      popular: false,
      icon: <Star className="w-8 h-8 text-purple-500" />
    },
    {
      id: 'cloud',
      name: 'Cloud Migration',
      description: 'Cloud strategy and migration planning consultation',
      duration: '2-3 hours',
      price: '$600',
      features: [
        'Cloud readiness assessment',
        'Migration strategy',
        'Cost optimization',
        'Security planning',
        'Timeline and milestones'
      ],
      popular: false,
      icon: <Award className="w-8 h-8 text-cyan-500" />
    }
  ];

  const benefits = [
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Expert Guidance',
      description: 'Get advice from industry experts with years of experience'
    },
    {
      icon: <Target className="w-6 h-6 text-blue-500" />,
      title: 'Customized Solutions',
      description: 'Tailored recommendations based on your specific needs'
    },
    {
      icon: <Clock className="w-6 h-6 text-purple-500" />,
      title: 'Time-Saving',
      description: 'Avoid costly mistakes and accelerate your project timeline'
    },
    {
      icon: <Award className="w-6 h-6 text-yellow-500" />,
      title: 'Proven Results',
      description: 'Based on successful implementations across various industries'
    }
  ];

  const process = [
    {
      step: '1',
      title: 'Initial Assessment',
      description: 'We review your current situation and identify key challenges'
    },
    {
      step: '2',
      title: 'Strategy Development',
      description: 'Create a customized strategy and implementation plan'
    },
    {
      step: '3',
      title: 'Recommendations',
      description: 'Provide detailed recommendations and next steps'
    },
    {
      step: '4',
      title: 'Follow-up Support',
      description: 'Ongoing support to ensure successful implementation'
    }
  ];

  const filteredTypes = consultationTypes.filter(type => 
    selectedType === 'All' || type.name.toLowerCase().includes(selectedType.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Consultation - Zion Tech Group | Expert Technology Consulting</title>
        <meta name="description" content="Get expert technology consultation from Zion Tech Group. Strategic planning, technical guidance, and implementation support for your business." />
        <meta name="keywords" content="consultation, technology consulting, strategy, technical guidance, AI implementation, cloud migration" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Expert <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Consultation</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Get personalized guidance from our technology experts to accelerate your digital transformation and achieve your business goals.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Why Choose Our Consultation?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get the expertise and guidance you need to make informed technology decisions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center hover:border-cyan-400 transition-all duration-300">
                <div className="w-16 h-16 bg-white/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
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
              Choose the consultation that best fits your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredTypes.map((type) => (
              <div
                key={type.id}
                className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border transition-all duration-300 hover:scale-105 ${
                  type.popular
                    ? 'border-cyan-400 shadow-2xl shadow-cyan-500/25'
                    : 'border-white/20 hover:border-cyan-400/50'
                }`}
              >
                {type.popular && (
                  <div className="flex items-center justify-center mb-6">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-white/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                    {type.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{type.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{type.description}</p>
                  <div className="flex items-center justify-center text-sm text-gray-400 mb-4">
                    <Clock className="w-4 h-4 mr-2" />
                    {type.duration}
                  </div>
                  <div className="text-3xl font-bold text-cyan-400">{type.price}</div>
                </div>

                <ul className="space-y-3 mb-8">
                  {type.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">
                  Book Consultation
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Our Process</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A structured approach to ensure you get the most value from your consultation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Book your consultation today and take the first step towards transforming your business with technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Book Now
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 font-semibold py-4 px-8 rounded-lg transition-all duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConsultationPage;
