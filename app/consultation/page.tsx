'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Calendar, Clock, Users, Mail, Phone, CheckCircle, ArrowRight, Brain, Cloud, Zap, Shield, Code, MapPin } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ConsultationPage: React.FC = () => {
  const [selectedConsultation, setSelectedConsultation] = useState(null);

  const consultationTypes = [
    {
      icon: Brain,
      title: 'AI Strategy Consultation',
      description: 'Get expert guidance on implementing AI solutions in your business',
      duration: '2-3 hours',
      price: 'Free',
      features: ['AI readiness assessment', 'Technology recommendations', 'Implementation roadmap', 'ROI projections']
    },
    {
      icon: Cloud,
      title: 'Cloud Migration Planning',
      description: 'Strategic planning for moving your infrastructure to the cloud',
      duration: '3-4 hours',
      price: 'Free',
      features: ['Current infrastructure analysis', 'Cloud provider selection', 'Migration strategy', 'Cost optimization']
    },
    {
      icon: Shield,
      title: 'Cybersecurity Audit',
      description: 'Comprehensive security assessment and recommendations',
      duration: '4-6 hours',
      price: 'Free',
      features: ['Security vulnerability assessment', 'Compliance review', 'Security recommendations', 'Implementation plan']
    },
    {
      icon: Code,
      title: 'Digital Transformation',
      description: 'Complete digital transformation strategy and planning',
      duration: '6-8 hours',
      price: 'Free',
      features: ['Process analysis', 'Technology selection', 'Change management', 'Timeline planning']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Free Consultation - Zion Tech Group</title>
        <meta name="description" content="Get a free consultation with our AI and IT experts. Strategic planning, technology assessment, and digital transformation guidance." />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        <div className="container mx-auto px-4 py-16">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Free Expert Consultation
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get expert advice on AI implementation, IT strategy, and digital transformation. 
              Our consultation is completely free and tailored to your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Consultation Types */}
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-white mb-6">Consultation Types</h2>
              {consultationTypes.map((type, index) => (
                <div key={index} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-800/70 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <type.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">{type.title}</h3>
                      <p className="text-gray-300 mb-4">{type.description}</p>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-4 text-sm text-gray-400">
                          <span className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {type.duration}
                          </span>
                          <span className="text-cyan-400 font-semibold">{type.price}</span>
                        </div>
                      </div>
                      <ul className="space-y-2">
                        {type.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <button 
                        onClick={() => setSelectedConsultation(type)}
                        className="mt-4 w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300"
                      >
                        Select This Consultation
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-white mb-6">Schedule Your Consultation</h2>
              
              <div className="bg-slate-800/50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Phone className="w-5 h-5 text-blue-400" />
                    <span>+1 (302) 464-0950</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Mail className="w-5 h-5 text-blue-400" />
                    <span>kleber@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Calendar className="w-5 h-5 text-blue-400" />
                    <span>Mon-Fri 9AM-6PM EST</span>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-4">Why Choose Our Consultation?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span>Completely free with no obligations</span>
                  </li>
                  <li className="flex items-start text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span>Expert team with 10+ years experience</span>
                  </li>
                  <li className="flex items-start text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span>Tailored recommendations for your business</span>
                  </li>
                  <li className="flex items-start text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span>Follow-up support and guidance</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+13024640950"
                  className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 text-center flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="flex-1 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 text-center flex items-center justify-center"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Email Us
                </a>
              </div>
            </div>
          </div>

          {/* Selected Consultation Details */}
          {selectedConsultation && (
            <section className="py-16 px-4 bg-white/5 mt-16">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-white mb-6">{selectedConsultation.title}</h2>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">{selectedConsultation.description}</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-white mb-4">What's Included</h3>
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
          )}
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default ConsultationPage;