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
        'Budget planning and optimization',
        'Risk analysis and mitigation',
        'Implementation timeline',
        'Follow-up support'
      ],
      popular: false
    },
    {
      id: 'ai',
      name: 'AI Implementation Consultation',
      description: 'Expert guidance on integrating artificial intelligence solutions into your business processes.',
      duration: '3-5 hours',
      price: '$750',
      features: [
        'AI readiness assessment',
        'Use case identification',
        'Technology stack recommendations',
        'ROI analysis and projections',
        'Implementation strategy',
        'Training and support planning'
      ],
      popular: true
    },
    {
      id: 'cloud',
      name: 'Cloud Migration Consultation',
      description: 'Strategic planning for migrating your infrastructure to the cloud with optimal cost and performance.',
      duration: '4-6 hours',
      price: '$1,000',
      features: [
        'Current infrastructure analysis',
        'Cloud platform evaluation',
        'Migration strategy development',
        'Security and compliance review',
        'Cost optimization planning',
        'Migration timeline and milestones'
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
        'Threat analysis',
        'Security policy recommendations',
        'Incident response planning',
        'Security training recommendations'
      ],
      popular: false
    }
  ];

  const contactInfo = {
    phone: '+1 (555) 123-4567',
    email: 'consultation@ziontechgroup.com',
    address: '123 Tech Street, Innovation District, NY 10001'
  };

  const handleBooking = (typeId: string) => {
    setSelectedType(typeId);
    // In a real application, this would open a booking modal or redirect to a booking page
    console.log('Booking consultation:', typeId);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Consultation Services - Zion Tech Group</title>
        <meta name="description" content="Get expert consultation on AI implementation, cloud migration, cybersecurity, and IT strategy from our experienced team." />
      </Helmet>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              Expert Technology Consultation
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Get personalized guidance from our experts to transform your business with cutting-edge technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="#consultation-types"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
              >
                View Consultation Types
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="#contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Consultation Types */}
      <div id="consultation-types" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Consultation Type</h2>
            <p className="text-xl text-gray-600">
              Select the consultation that best fits your needs and schedule.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {consultationTypes.map((type) => (
              <div
                key={type.id}
                className={`bg-white border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow ${
                  type.popular ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
                }`}
              >
                {type.popular && (
                  <div className="flex justify-center mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{type.name}</h3>
                <p className="text-gray-600 mb-4 text-sm">{type.description}</p>
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{type.duration}</span>
                  </div>
                  <div className="text-lg font-bold text-gray-900">{type.price}</div>
                </div>
                <ul className="space-y-2 mb-6">
                  {type.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => handleBooking(type.id)}
                  className={`w-full py-2 px-4 rounded-lg font-medium transition-colors ${
                    type.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-900 text-white hover:bg-gray-800'
                  }`}
                >
                  Book Consultation
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Consultation Process</h2>
            <p className="text-xl text-gray-600">
              A structured approach to delivering valuable insights and actionable recommendations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">1. Schedule</h3>
              <p className="text-gray-600">Choose your consultation type and schedule a convenient time.</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">2. Meet</h3>
              <p className="text-gray-600">Connect with our experts for a detailed discussion of your needs.</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">3. Analyze</h3>
              <p className="text-gray-600">We analyze your situation and develop tailored recommendations.</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ArrowRight className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">4. Deliver</h3>
              <p className="text-gray-600">Receive detailed reports and actionable next steps.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-600">
              Ready to get started? Contact us to schedule your consultation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600">{contactInfo.phone}</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600">{contactInfo.email}</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Visit Us</h3>
              <p className="text-gray-600">{contactInfo.address}</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8">
            Book your consultation today and take the first step towards digital transformation.
          </p>
          <Link
            to="#consultation-types"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
          >
            Book Your Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ConsultationPage;