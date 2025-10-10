'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Phone, Mail, Clock } from 'lucide-react';

const ConsultationPage: React.FC = () => {
  const consultationTypes = [
    {
      title: 'AI Strategy Consultation',
      duration: '2 hours',
      price: '$500',
      description: 'Comprehensive AI strategy assessment and roadmap development',
      features: [
        'Current state analysis',
        'AI readiness assessment',
        'Strategic roadmap',
        'Implementation timeline',
        'ROI projections'
      ]
    },
    {
      title: 'Cloud Migration Planning',
      duration: '3 hours',
      price: '$750',
      description: 'Detailed cloud migration strategy and architecture planning',
      features: [
        'Infrastructure assessment',
        'Migration strategy',
        'Cost optimization',
        'Security planning',
        'Timeline and milestones'
      ]
    },
    {
      title: 'Cybersecurity Audit',
      duration: '4 hours',
      price: '$1,000',
      description: 'Comprehensive security assessment and improvement recommendations',
      features: [
        'Security vulnerability assessment',
        'Compliance review',
        'Risk analysis',
        'Improvement recommendations',
        'Implementation plan'
      ]
    }
  ];

  const processSteps = [
    {
      step: '1',
      title: 'Initial Contact',
      description: 'Reach out to us with your consultation needs'
    },
    {
      step: '2',
      title: 'Discovery Call',
      description: 'We discuss your requirements and challenges'
    },
    {
      step: '3',
      title: 'Consultation',
      description: 'Expert consultation session with detailed analysis'
    },
    {
      step: '4',
      title: 'Report & Next Steps',
      description: 'Receive comprehensive report and implementation guidance'
    }
  ];

  return (
    <><Helmet>
        <title>Consultation - Zion Tech Group | Expert IT Consulting</title>
        <meta name="description" content="Get expert consultation on AI, cloud migration, cybersecurity, and IT strategy. Professional guidance to transform your business." />
        <meta name="keywords" content="IT consultation, AI strategy, cloud migration, cybersecurity audit, business transformation, expert consulting" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        </></div><section className="relative py-20 px-4 overflow-hidden">
          </section><div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Expert Consultation
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Get professional guidance on AI, cloud, cybersecurity, and IT strategy from our expert consultants.
            </p>
          </div>
        </section>

        {/* Consultation Types */}
        <section className="py-16 px-4">
          </section><div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Consultation Services
              </h2>
              <p className="text-xl text-gray-300">
                Choose the consultation that best fits your needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {consultationTypes.map((consultation, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-semibold text-white mb-2">{consultation.title}</h3>
                    <p className="text-gray-300 mb-4">{consultation.description}</p>
                    <div className="flex items-center justify-center space-x-4 text-sm text-gray-400 mb-4">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{consultation.duration}</span>
                      </div>
                      <div className="text-2xl font-bold text-cyan-400">{consultation.price}</div>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <h4 className="text-lg font-semibold text-cyan-400 mb-3">What's Included</h4>
                    <ul className="space-y-2">
                      {consultation.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    to="/contact"
                    className="w-full bg-cyan-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-cyan-700 transition-colors duration-200 flex items-center justify-center space-x-2"
                  >
                    <span>Book Consultation</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-16 px-4 bg-white/5">
          </section><div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Process
              </h2>
              <p className="text-xl text-gray-300">
                Simple steps to get the expert guidance you need
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-500/20 rounded-full mb-4">
                    <span className="text-2xl font-bold text-cyan-400">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 px-4">
          </section><div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us today to schedule your consultation and start transforming your business.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="flex items-center justify-center space-x-3">
                <Phone className="w-6 h-6 text-cyan-400" />
                <span className="text-white">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Mail className="w-6 h-6 text-cyan-400" />
                <span className="text-white">consultation@ziontech.com</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Clock className="w-6 h-6 text-cyan-400" />
                <span className="text-white">Mon-Fri 9AM-6PM</span>
              </div>
            </div>

            <Link
              to="/contact"
              className="bg-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-cyan-700 transition-colors duration-200 inline-flex items-center space-x-2"
            >
              <span>Schedule Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default ConsultationPage;