'use client';
import React from 'react';
import { CheckCircle, ArrowRight, Clock, Phone, Mail, MapPin } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ConsultationPage: React.FC = () => {
  const services = [
    {
      id: 'strategy',
      name: 'IT Strategy Consultation',
      description: 'Comprehensive IT strategy development and digital transformation planning.',
      duration: '2-4 weeks',
      price: 'Starting at $5,000',
      features: ['Current state assessment', 'Technology roadmap', 'ROI analysis', 'Implementation plan']
    },
    {
      id: 'ai',
      name: 'AI Implementation',
      description: 'AI strategy and implementation consultation for your business needs.',
      duration: '4-8 weeks',
      price: 'Starting at $10,000',
      features: ['AI readiness assessment', 'Use case identification', 'Technology selection', 'Pilot project planning']
    },
    {
      id: 'cloud',
      name: 'Cloud Migration',
      description: 'Cloud strategy and migration planning for optimal performance and cost.',
      duration: '3-6 weeks',
      price: 'Starting at $7,500',
      features: ['Cloud readiness assessment', 'Migration strategy', 'Cost optimization', 'Security planning']
    },
    {
      id: 'security',
      name: 'Security Audit',
      description: 'Comprehensive security assessment and improvement recommendations.',
      duration: '2-3 weeks',
      price: 'Starting at $3,500',
      features: ['Security assessment', 'Vulnerability analysis', 'Compliance review', 'Remediation plan']
    }
  ];

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-blue-400" />,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      description: 'Call us for immediate assistance'
    },
    {
      icon: <Mail className="w-6 h-6 text-green-400" />,
      title: 'Email',
      value: 'consultation@ziontechgroup.com',
      description: 'Send us your requirements'
    },
    {
      icon: <MapPin className="w-6 h-6 text-purple-400" />,
      title: 'Office',
      value: 'San Francisco, CA',
      description: 'Visit our headquarters'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Consultation | Zion Tech Group</title>
        <meta name="description" content="Get expert IT consultation from Zion Tech Group. AI strategy, cloud migration, security audits, and digital transformation planning." />
        <meta name="keywords" content="IT consultation, AI strategy, cloud migration, security audit, digital transformation, Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />

        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Expert
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Consultation
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Get expert guidance on your IT strategy, AI implementation, cloud migration, and digital transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
                Book Consultation
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </button>
              <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Services
              </button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Our Consultation Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive consultation services to help you make informed technology decisions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service) => (
                <div key={service.id} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white">{service.name}</h3>
                    <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {service.price}
                    </span>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-300 mb-6">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {service.duration}
                    </span>
                  </div>
                  
                  <h4 className="text-lg font-semibold text-white mb-3">What's Included:</h4>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300">
                    Book This Service
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Get In Touch
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Ready to start your consultation? Contact us today to discuss your needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {contactInfo.map((info, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center">
                  <div className="flex justify-center mb-4">
                    {info.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{info.title}</h3>
                  <p className="text-lg text-blue-400 mb-2">{info.value}</p>
                  <p className="text-gray-300 text-sm">{info.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let's discuss how our expert consultation can help you achieve your technology goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Schedule Consultation
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  Download Brochure
                </button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default ConsultationPage;
