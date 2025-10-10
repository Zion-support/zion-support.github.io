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
}

const ConsultationPage: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string>('');

  const consultationTypes: ConsultationType[] = [
    {
      id: '1',
      name: 'Initial Consultation',
      description: 'Get started with a comprehensive assessment of your business needs and AI opportunities.',
      duration: '1 hour',
      price: 'Free',
      features: [
        'Business needs assessment',
        'AI opportunity analysis',
        'Technology recommendations',
        'Implementation roadmap'
      ]
    },
    {
      id: '2',
      name: 'Strategy Session',
      description: 'Deep dive into your AI strategy with detailed planning and technical guidance.',
      duration: '2-3 hours',
      price: '$500',
      features: [
        'Detailed strategy development',
        'Technical architecture review',
        'ROI analysis and projections',
        'Implementation timeline'
      ]
    },
    {
      id: '3',
      name: 'Technical Review',
      description: 'Comprehensive technical assessment of your current systems and AI integration possibilities.',
      duration: '4-6 hours',
      price: '$1,200',
      features: [
        'System architecture analysis',
        'Integration planning',
        'Security assessment',
        'Performance optimization'
      ]
    }
  ];

  const processSteps = [
    {
      step: '1',
      title: 'Book Consultation',
      description: 'Schedule a time that works for you using our online booking system.'
    },
    {
      step: '2',
      title: 'Initial Assessment',
      description: 'We\'ll analyze your current systems and identify AI opportunities.'
    },
    {
      step: '3',
      title: 'Strategy Development',
      description: 'Create a customized AI strategy tailored to your business goals.'
    },
    {
      step: '4',
      title: 'Implementation Plan',
      description: 'Develop a detailed roadmap for implementing AI solutions.'
    }
  ];

  const handleBooking = (typeId: string) => {
    setSelectedType(typeId);
    // Here you would typically open a booking modal or redirect to booking page
    console.log('Booking consultation type:', typeId);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>AI Consultation - Zion Tech Group</title>
        <meta name="description" content="Get expert AI consultation to transform your business. Schedule a free consultation with our AI experts." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Consultation
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Get expert guidance on implementing AI solutions that transform your business. Schedule a consultation with our AI experts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Book Free Consultation
            </button>
            <Link
              to="/contact"
              className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Consultation Types */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Consultation Type</h2>
            <p className="text-xl text-gray-600">Select the consultation that best fits your needs</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {consultationTypes.map((type) => (
              <div key={type.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{type.name}</h3>
                  <p className="text-gray-600 mb-4">{type.description}</p>
                  <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{type.duration}</span>
                    </div>
                    <div className="text-lg font-bold text-purple-600">{type.price}</div>
                  </div>
                </div>
                <ul className="space-y-2 mb-6">
                  {type.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => handleBooking(type.id)}
                  className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                >
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Consultation Process</h2>
            <p className="text-xl text-gray-600">A structured approach to understanding your AI needs</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-gray-600">Contact us to schedule your consultation</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Phone className="w-8 h-8 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600">+1 (302) 464-0950</p>
            </div>
            <div className="text-center">
              <Mail className="w-8 h-8 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600">consultation@ziontechgroup.com</p>
            </div>
            <div className="text-center">
              <MapPin className="w-8 h-8 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Visit Us</h3>
              <p className="text-gray-600">364 E Main St STE 1008<br />Middletown, DE 19709</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Transform Your Business with AI
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Don't wait to start your AI journey. Book a consultation today and discover how AI can revolutionize your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Book Free Consultation
            </button>
            <Link
              to="/services"
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConsultationPage;