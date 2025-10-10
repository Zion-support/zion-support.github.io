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
  popular: boolean}
;
const ConsultationPage: React.FC = () => {
return (;
const [selectedType, setSelectedType] = useState<string>
);
}('');
;
const consultationTypes: ConsultationType[] = [
    {
      id: 'strategy',
      name: 'IT Strategy Consultation',
      description: 'Comprehensive analysis of your current IT infrastructure and strategic planning for digital transformation.',
      duration: '2-4 hours',
      price: '$500',
      features: [
        'Current IT assessment',
        'Technology roadmap',
        'Budget planning',
        'Risk analysis',
        'Implementation timeline'
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
        'ROI analysis',
        'Implementation strategy'
      ],
      popular: false
    },
    {
      id: 'security',
      name: 'Cybersecurity Audit',
      description: 'Comprehensive security assessment and recommendations to protect your digital assets.',
      duration: '4-6 hours',
      price: '$1,000',
      features: [
        'Security vulnerability assessment',
        'Compliance review',
        'Penetration testing',
        'Security policy development',
        'Incident response planning'
      ],
      popular: true
    },
    {
      id: 'cloud',
      name: 'Cloud Migration Consultation',
      description: 'Strategic planning and execution guidance for migrating your infrastructure to the cloud.',
      duration: '2-3 hours',
      price: '$400',
      features: [
        'Cloud readiness assessment',
        'Migration strategy',
        'Cost optimization',
        'Security considerations',
        'Timeline planning'
      ],
      popular: false
    }
  ];
const benefits = [
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: 'Expert Guidance',
      description: 'Get advice from certified professionals with years of industry experience'
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-blue-600" />,
      title: 'Proven Methodologies',
      description: 'Benefit from tested frameworks and best practices used by leading organizations'
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-600" />,
      title: 'Time-Saving',
      description: 'Avoid costly mistakes and accelerate your project timeline with expert insights'
    },
    {
      icon: <ArrowRight className="w-8 h-8 text-blue-600" />,
      title: 'Actionable Results',
      description: 'Receive concrete recommendations and implementation plans you can execute immediately'
    }
  ];
const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-blue-600" />,
      title: 'Phone',
      details: '+1 (555) 123-4567',
      description: 'Call us for immediate assistance'
    },
    {
      icon: <Mail className="w-6 h-6 text-blue-600" />,
      title: 'Email',
      details: 'consultation@ziontechgroup.com',
      description: 'Send us your requirements'
    },
    {
      icon: <MapPin className="w-6 h-6 text-blue-600" />,
      title: 'Office',
      details: '123 Tech Street, San Francisco, CA',
      description: 'Visit our headquarters'
    }
  ];
;
const handleBooking = (typeId: string) => {
    setSelectedType(typeId);
    // In a real app, this would open a booking modal or redirect to a booking page
    console.log(`Booking consultation: ${typeId}`);
  };

  return (
    <>
      <Helmet>
        <title>Consultation Services - Zion Tech Group</title>
        <meta name="description" content="Get expert consultation on IT strategy, AI implementation, cybersecurity, and cloud migration. Professional guidance to accelerate your digital transformation." />
        <meta name="keywords" content="IT consultation, AI consulting, cybersecurity audit, cloud migration, technology strategy, digital transformation" />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Expert Consultation
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Get professional guidance to accelerate your digital transformation and maximize your technology investments
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Schedule Consultation
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors">
                  View Services
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Consultation Services?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our expert consultants bring years of experience and proven methodologies to help you succeed
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map(($1) => (
                    $2
                  ))}
                </div>
          </div>
        </section>

        {/* Consultation Types */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Consultation Services</h2>
              <p className="text-xl text-gray-600">Choose the consultation type that best fits your needs</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {consultationTypes.map((type) => (
                <div
                  key={type.id}
                  className={`bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow cursor-pointer ${
                    selectedType === type.id ? 'ring-2 ring-blue-500' : ''
                  } ${type.popular ? 'border-2 border-blue-200' : ''}`}
                  onClick={() => setSelectedType(type.id);
                >
                  {type.popular && (
                    <div className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full text-center mb-4">
                      Most Popular
                    </div>);
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{type.name}</h3>
                  <p className="text-gray-600 mb-4">{type.description}</p>
                  <div className="space-y-2 mb-6">
                    {type.features.map(($1) => (
                    $2
                  ))}
                </div>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-gray-900">{type.price}</span>
                      <div className="flex items-center text-sm text-gray-500 mt-1">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{type.duration}</span>
                      </div>
                    </div>
                  </div>
                  <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    Select This Service
                  </button>
                </div>
              ));
                  Schedule Consultation
                </button>
              </form>
                  {type.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>);
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-white mb-3">{type.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{type.description}</p>
                    <div className="flex items-center justify-center gap-2 text-purple-400 text-sm mb-4">
                      <Clock className="w-4 h-4" />
                      <span>{type.duration}</span>
                    </div>
                    <div className="text-3xl font-bold text-white">{type.price}</div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {type.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ));
                  </ul>

                  <button
                    onClick={() => handleBooking(type.id);
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      type.popular
                        ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600'
                        : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                    }`}
                  >
                    Book Consultation
                  </button>
                </div>
              ));
            </div>
          </div>
        </section>

        {/* Expert Team */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Meet Our Experts</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our team of experienced professionals brings deep expertise across all areas of technology.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {experts.map((expert, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <Users className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{expert.name}</h3>
                  <p className="text-purple-400 mb-2">{expert.role}</p>
                  <p className="text-gray-400 text-sm mb-4">{expert.experience} experience</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {expert.expertise.map(($1) => (
                    $2
                  ))}
                </div>
                </div>
              ));
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
              <p className="text-xl text-gray-600">Ready to schedule your consultation? Contact us today</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {contactInfo.map(($1) => (
                    $2
                  ))}
                </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Schedule your consultation today and take the first step towards digital transformation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Schedule Now
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors">
                Download Brochure
              </button>
            </div>
          </div>
        </section>
        </section>
      </div>
    </>
  );
};

        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Consultation Services</h2>
            <p className="text-xl text-gray-300">Comprehensive technology consulting tailored to your business needs</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {consultationServices.map(($1) => (
                    $2
                  ))}
                </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our Process</h2>
            <p className="text-xl text-gray-300">How we deliver exceptional consultation services</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Discovery</h3>
              <p className="text-gray-300">We analyze your current technology landscape and business objectives.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Strategy</h3>
              <p className="text-gray-300">We develop a customized roadmap aligned with your goals.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Implementation</h3>
              <p className="text-gray-300">We guide you through execution and provide ongoing support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Schedule a consultation with our experts and discover how technology can drive your success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
              <Calendar className="mr-2 h-5 w-5" />
              Schedule Consultation
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center justify-center">
              <Mail className="mr-2 h-5 w-5" />
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>)
export default ConsultationPage;