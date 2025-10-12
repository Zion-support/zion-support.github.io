import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Users, Clock, CheckCircle, MessageCircle, Target, Zap } from 'lucide-react';
'use client';

const ConsultationPage: React.FC = () => {
  const consultationTypes = [
    {
      title: 'AI Strategy Consultation',
      description: 'Get expert guidance on implementing AI solutions that align with your business goals.',
      duration: '2-4 hours',
      price: '$500/hour',
      features: [
        'AI readiness assessment',
        'Technology roadmap development',
        'ROI analysis and projections',
        'Implementation timeline planning'
      ],
      icon: <Target className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Cloud Architecture Review',
      description: 'Comprehensive review of your current cloud setup with optimization recommendations.',
      duration: '3-6 hours',
      price: '$400/hour',
      features: [
        'Current architecture analysis',
        'Security and compliance review',
        'Cost optimization strategies',
        'Scalability recommendations'
      ],
      icon: <Zap className="w-6 h-6" />,
      color: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'Cybersecurity Audit',
      description: 'Thorough security assessment to identify vulnerabilities and strengthen your defenses.',
      duration: '4-8 hours',
      price: '$600/hour',
      features: [
        'Security vulnerability assessment',
        'Compliance gap analysis',
        'Incident response planning',
        'Security training recommendations'
      ],
      icon: <CheckCircle className="w-6 h-6" />,
      color: 'from-red-500 to-orange-500'
    },
    {
      title: 'Digital Transformation Strategy',
      description: 'End-to-end digital transformation planning to modernize your business operations.',
      duration: '6-12 hours',
      price: '$450/hour',
      features: [
        'Current state analysis',
        'Future state visioning',
        'Technology stack recommendations',
        'Change management planning'
      ],
      icon: <Users className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: 'Initial Discussion',
      description: 'We start with a free 30-minute call to understand your needs and challenges.',
      icon: <MessageCircle className="w-6 h-6" />
    },
    {
      step: 2,
      title: 'Proposal & Planning',
      description: 'We create a detailed proposal with scope, timeline, and deliverables.',
      icon: <Target className="w-6 h-6" />
    },
    {
      step: 3,
      title: 'Consultation Session',
      description: 'Deep-dive consultation with our experts to address your specific challenges.',
      icon: <Users className="w-6 h-6" />
    },
    {
      step: 4,
      title: 'Deliverables & Follow-up',
      description: 'Receive detailed recommendations and ongoing support for implementation.',
      icon: <CheckCircle className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>Consultation - Zion Tech Group</title>
        <meta name="description" content="Expert consultation services for AI, cloud, cybersecurity, and digital transformation. Get strategic guidance from our experienced team." />
        <meta name="keywords" content="consultation, AI strategy, cloud architecture, cybersecurity audit, digital transformation, IT consulting" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Expert
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              {' '}Consultation
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Get strategic guidance from our team of experts. We help you make informed decisions 
            about AI, cloud, cybersecurity, and digital transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
            >
              Schedule Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              to="/demo" 
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              View Our Process
            </Link>
          </div>
        </div>
      </section>

      {/* Consultation Types */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Consultation Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our specialized consultation services designed to address your specific needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {consultationTypes.map((consultation, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${consultation.color} flex items-center justify-center mr-4`}>
                    {consultation.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{consultation.title}</h3>
                    <div className="flex items-center space-x-4 text-gray-400">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {consultation.duration}
                      </div>
                      <div className="text-cyan-400 font-semibold">{consultation.price}</div>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6">{consultation.description}</p>
                
                <ul className="space-y-2 mb-8">
                  {consultation.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Book Consultation
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Consultation Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A structured approach that ensures you get maximum value from your consultation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center mx-auto mb-6">
                  {step.icon}
                </div>
                <div className="w-8 h-8 rounded-full bg-cyan-500 text-white flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Expert Guidance?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Schedule a consultation with our experts and take the first step towards transforming your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
            >
              Book Your Consultation
              <Calendar className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              to="/demo" 
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConsultationPage;