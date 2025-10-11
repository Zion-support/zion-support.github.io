import React, { useState } from 'react';
import { CheckCircle, ArrowRight, Clock, Star, Phone, Mail, MapPin } from 'lucide-react';
=======
import { CheckCircle, ArrowRight, Users, Clock, Star, Zap, Target } from 'lucide-react';

=======
import React, { useState } from 'react';
import { CheckCircle, ArrowRight, Clock, Star, Phone, Mail, MapPin } from 'lucide-react';

import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

=======
interface ConsultationPackage {
=======
interface ConsultationService {

  id: string;
  name: string;
  description: string;
  duration: string;
  price: string;
  features: string[];
  popular: boolean;
}

const ConsultationPage: React.FC = () => {
const consultationServices: ConsultationService[] = [
=======

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
        'Implementation timeline'
      ],
      popular: true
    },
    {
      id: 'cloud',
      name: 'Cloud Migration Consultation',
      description: 'Expert guidance on migrating your infrastructure to the cloud with minimal disruption.',
      duration: '3-5 hours',
      price: '$750',
      features: [
        'Cloud readiness assessment',
        'Migration strategy development',
        'Cost optimization analysis',
        'Security and compliance review',
'Implementation roadmap'
=======
        'Implementation roadmap'

=======
'Implementation roadmap'

      ],
      popular: false
    },
    {
      id: 'ai',
      name: 'AI Implementation Consultation',
description: 'Strategic guidance on implementing AI solutions to enhance your business operations.',
=======
      description: 'Strategic guidance on implementing AI solutions to enhance your business operations.',

=======
description: 'Strategic guidance on implementing AI solutions to enhance your business operations.',

      duration: '4-6 hours',
      price: '$1000',
      features: [
        'AI opportunity assessment',
        'Use case identification',
'Technology stack selection',
=======
'Technology stack selection',
        'ROI analysis and planning',
        'Implementation strategy'
      ],
=======
        'Technology selection',
        'ROI analysis',
        'Implementation strategy'
      ],
      popular: true
    },
    {
      id: 'security',
      name: 'Cybersecurity Consultation',
      description: 'Comprehensive security assessment and recommendations to protect your digital assets.',
      duration: '3-4 hours',
      price: '$600',
      features: [
        'Security vulnerability assessment',
        'Compliance review',
        'Security policy development',
        'Incident response planning',
        'Training recommendations'
      ],
      popular: false
    },
    {
      id: 'devops',
      name: 'DevOps Transformation',
      description: 'Guidance on implementing DevOps practices to improve development and deployment processes.',
      duration: '4-5 hours',
      price: '$800',
      features: [
        'Current process analysis',
        'DevOps maturity assessment',
        'Tool selection and setup',
        'CI/CD pipeline design',
        'Team training plan'
      ],
      popular: false
    },
    {
      id: 'data',
      name: 'Data Strategy Consultation',
      description: 'Strategic planning for data management, analytics, and business intelligence solutions.',
      duration: '3-4 hours',
      price: '$650',
      features: [
        'Data architecture review',
        'Analytics strategy development',
        'Data governance planning',
        'Tool and platform selection',
        'Implementation roadmap'
      ],

      popular: false
    }
  ];

const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
=======
const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };
const benefits = [
    {
      title: 'Expert Guidance',
      description: 'Get advice from experienced professionals with deep industry knowledge.',
      icon: Users
    },
    {
      title: 'Time Efficient',
      description: 'Quick, focused sessions that deliver actionable insights and recommendations.',
      icon: Clock
    },
    {
      title: 'Cost Effective',
      description: 'Avoid costly mistakes with expert guidance before making major investments.',
      icon: Target
    },
    {
      title: 'Customized Solutions',
      description: 'Tailored recommendations based on your specific business needs and goals.',
      icon: Zap
    }
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
=======
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Consultation | Zion Tech Group</title>
        <meta name="description" content="Professional IT consultation services by Zion Tech Group. Expert guidance for your digital transformation journey." />
        <meta name="keywords" content="IT consultation, digital transformation, cloud migration, AI implementation, Zion Tech Group" />
      </Helmet>
<title>Consultation Services | Zion Tech Group</title>
        <meta name="description" content="Professional IT consultation services by Zion Tech Group. Expert guidance for your digital transformation journey." />
        <meta name="keywords" content="IT consultation, technology consulting, digital transformation, AI consultation, cloud migration, Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
=======

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
Get expert guidance for your digital transformation journey. Professional IT consultation services by Zion Tech Group.
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

{/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Why Choose Our Consultation?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Professional consultation services to help your business succeed and grow.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center">
                  <benefit.icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Consultation Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our range of professional consultation services.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              {consultationServices.map((service) => (
                <div key={service.id} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 ${service.popular ? 'ring-2 ring-blue-400' : ''}`}>
                  {service.popular && (
                    <div className="flex items-center mb-4">
                      <Star className="w-5 h-5 text-yellow-400 mr-2" />
                      <span className="text-yellow-400 font-semibold">Most Popular</span>
                    </div>
                  )}
<h3 className="text-2xl font-bold text-white mb-4">{service.name}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-gray-400">Duration:</span>
                      <span className="text-white font-semibold">{service.duration}</span>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-gray-400">Price:</span>
                      <span className="text-2xl font-bold text-blue-400">{service.price}</span>
                    </div>
                    
                    <ul className="space-y-3">
                      {pkg.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
<div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">What's Included:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition-colors">
                    Book This Service
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

{/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Contact us today to schedule your consultation and start your digital transformation journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Contact Us
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  Learn More
=======

                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Contact Info Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Contact Information
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Get in touch with us through any of these channels.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                  <Phone className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
                  <p className="text-gray-300">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                  <Mail className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                  <p className="text-gray-300">consultation@ziontech.com</p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                  <MapPin className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Office</h3>
                  <p className="text-gray-300">123 Tech Street, San Francisco, CA</p>
                </div>
              </div>
            </div>
          </div>
        </section>
<Footer />
      </div>
    </>
=======

  );
};

export default ConsultationPage;