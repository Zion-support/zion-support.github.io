'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Star, Clock, Users, Shield, Calendar, Phone, Mail, MapPin } from 'lucide-react';

const ConsultationPage: React.FC = () => {
  const [selectedService, setSelectedService] = useState('ai-strategy');

  const services = [
    {
      id: 'ai-strategy',
      icon: Star,
      title: 'AI Strategy',
      description: 'Develop a comprehensive AI strategy tailored to your business needs.',
      benefits: ['AI readiness assessment', 'Technology roadmap', 'ROI analysis', 'Implementation planning']
    },
    {
      id: 'cybersecurity',
      icon: Shield,
      title: 'Cybersecurity Audit',
      description: 'Comprehensive security assessment and recommendations.',
      benefits: ['Security vulnerability analysis', 'Compliance review', 'Risk assessment', 'Remediation plan']
    },
    {
      id: 'digital-transformation',
      icon: Users,
      title: 'Digital Transformation',
      description: 'Guide your organization through digital transformation.',
      benefits: ['Process optimization', 'Technology integration', 'Change management', 'Training programs']
    }
  ];

  const process = [
    {
      step: '1',
      title: 'Initial Assessment',
      description: 'We analyze your current technology landscape and business objectives.'
    },
    {
      step: '2',
      title: 'Strategy Development',
      description: 'Create a customized strategy based on your specific needs and goals.'
    },
    {
      step: '3',
      title: 'Implementation Plan',
      description: 'Develop a detailed roadmap with timelines and milestones.'
    },
    {
      step: '4',
      title: 'Ongoing Support',
      description: 'Provide continuous guidance and support throughout implementation.'
    }
  ];

  const consultationTypes = [
    {
      id: 'free',
      name: 'Free Consultation',
      duration: '30 minutes',
      price: 'Free',
      description: 'Quick assessment and initial recommendations',
      features: ['Initial assessment', 'Basic recommendations', 'Next steps planning']
    },
    {
      id: 'standard',
      name: 'Standard Consultation',
      duration: '2 hours',
      price: '$500',
      description: 'Comprehensive analysis and detailed strategy',
      features: ['Detailed analysis', 'Custom strategy', 'Implementation roadmap', 'Follow-up support']
    },
    {
      id: 'premium',
      name: 'Premium Consultation',
      duration: 'Full day',
      price: '$2,000',
      description: 'Complete transformation planning and ongoing support',
      features: ['Complete analysis', 'Detailed strategy', 'Implementation plan', '3 months support', 'Priority access']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Consultation - Zion Tech Group | Expert Technology Guidance</title>
        <meta name="description" content="Get expert consultation on AI, cybersecurity, and digital transformation. Book a free consultation with our technology experts." />
        <meta name="keywords" content="technology consultation, AI strategy, cybersecurity audit, digital transformation, expert guidance" />
      </Helmet>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Expert <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Consultation</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Get personalized guidance from our technology experts to transform your business with cutting-edge AI and IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Book Free Consultation
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
                View Our Services
              </button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Consultation Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our specialized consultation services designed to address your specific technology needs.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service) => (
                <div key={service.id} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <service.icon className="h-8 w-8 text-blue-400 mr-3" />
                    <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Consultation Process
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A structured approach to understanding your needs and delivering actionable solutions.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Consultation Types */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Choose Your Consultation
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Select the consultation type that best fits your needs and budget.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {consultationTypes.map((type) => (
                <div key={type.id} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{type.name}</h3>
                    <div className="text-3xl font-bold text-blue-400 mb-2">{type.price}</div>
                    <div className="text-gray-400">{type.duration}</div>
                  </div>
                  <p className="text-gray-300 mb-6 text-center">{type.description}</p>
                  <ul className="space-y-3 mb-8">
                    {type.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                    Book Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us today to schedule your consultation and take the first step towards transforming your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Schedule Consultation
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ConsultationPage;