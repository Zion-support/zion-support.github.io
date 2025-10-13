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
      id: 'strategy',
      name: 'IT Strategy Consultation',
      description: 'Comprehensive analysis of your current IT infrastructure and strategic planning for digital transformation.',
      duration: '2-4 hours',
      price: '$500',
      features: [
        'Current IT assessment',
        'Technology roadmap development',
        'Digital transformation strategy',
        'Implementation timeline',
        'Follow-up support'
      ],
      popular: true
    },
    {
      id: 'ai',
      name: 'AI Implementation Consultation',
      description: 'Expert guidance on integrating AI solutions into your business processes and workflows.',
      duration: '3-5 hours',
      price: '$750',
      features: [
        'AI readiness assessment',
        'Use case identification',
        'Technology selection',
        'Implementation planning',
        'ROI analysis'
      ],
      popular: false
    },
    {
      id: 'cloud',
      name: 'Cloud Migration Consultation',
      description: 'Strategic planning and execution guidance for migrating your infrastructure to the cloud.',
      duration: '4-6 hours',
      price: '$1,000',
      features: [
        'Current infrastructure analysis',
        'Cloud platform selection',
        'Migration strategy',
        'Security considerations',
        'Cost optimization'
      ],
      popular: false
    },
    {
      id: 'security',
      name: 'Cybersecurity Assessment',
      description: 'Comprehensive security evaluation and recommendations to protect your digital assets.',
      duration: '2-3 hours',
      price: '$400',
      features: [
        'Security vulnerability assessment',
        'Compliance review',
        'Risk analysis',
        'Security recommendations',
        'Implementation guidance'
      ],
      popular: false
    }
  ];

  const handleBooking = (typeId: string) => {
    setSelectedType(typeId);
    // In a real app, this would open a booking modal or redirect to a booking page
    console.log(`Booking consultation: ${typeId}`);
  };

  return (
    <>
      <Helmet>
        <title>Consultation Services - Expert IT & AI Guidance | Zion Tech Group</title>
        <meta name="description" content="Get expert consultation on IT strategy, AI implementation, cloud migration, and cybersecurity. Professional guidance to transform your business." />
        <meta name="keywords" content="IT consultation, AI consultation, cloud migration, cybersecurity, digital transformation, business strategy" />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Expert Technology Consultation
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Get personalized guidance from our experts to transform your business with cutting-edge technology
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => document.getElementById('consultation-types')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  View Consultation Types
                </button>
                <Link
                  to="/contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Consultation Types */}
        <section id="consultation-types" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
                Choose Your Consultation Type
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {consultationTypes.map((type) => (
                  <div
                    key={type.id}
                    className={`bg-white rounded-lg shadow-lg p-8 border-2 transition-all duration-300 hover:shadow-xl ${
                      type.popular
                        ? 'border-blue-500 relative'
                        : 'border-gray-200 hover:border-blue-300'
                    }`}
                  >
                    {type.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                          Most Popular
                        </span>
                      </div>
                    )}
                    
                    <div className="text-center mb-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {type.name}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">
                        {type.description}
                      </p>
                      <div className="flex items-center justify-center gap-4 text-sm text-gray-500 mb-4">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {type.duration}
                        </div>
                        <div className="text-2xl font-bold text-blue-600">
                          {type.price}
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-3 mb-6">
                      {type.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <button
                      onClick={() => handleBooking(type.id)}
                      className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                        type.popular
                          ? 'bg-blue-600 text-white hover:bg-blue-700'
                          : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                      }`}
                    >
                      Book Consultation
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
                Why Choose Our Consultation Services?
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">
                    Expert Team
                  </h3>
                  <p className="text-gray-600">
                    Our consultants have years of experience in AI, cloud computing, and digital transformation.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">
                    Proven Results
                  </h3>
                  <p className="text-gray-600">
                    We've helped hundreds of businesses successfully implement technology solutions.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ArrowRight className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">
                    Actionable Insights
                  </h3>
                  <p className="text-gray-600">
                    Get practical, implementable recommendations tailored to your specific needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8 text-gray-900">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Contact us today to schedule your consultation and take the first step toward digital transformation.
              </p>
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="flex items-center justify-center">
                  <Phone className="w-6 h-6 text-blue-600 mr-3" />
                  <span className="text-gray-700">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center justify-center">
                  <Mail className="w-6 h-6 text-blue-600 mr-3" />
                  <span className="text-gray-700">consultation@ziontechgroup.com</span>
                </div>
                <div className="flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-blue-600 mr-3" />
                  <span className="text-gray-700">Available Worldwide</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Schedule Consultation
                </Link>
                <Link
                  to="/about"
                  className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
                >
                  Learn More About Us
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