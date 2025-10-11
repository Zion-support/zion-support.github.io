<<<<<<< HEAD
import { CheckCircle, ArrowRight, Users, Clock, Star, Zap, Target } from 'lucide-react';

=======
import React, { useState } from 'react';
import { CheckCircle, ArrowRight, Clock, Star, Phone, Mail, MapPin } from 'lucide-react';

=======
import React from 'react';
=======
import React from 'react';
import { CheckCircle, ArrowRight, Clock, DollarSign, Star } from 'lucide-react';
>>>>>>> cursor/fix-errors-and-merge-to-main-529a
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

<<<<<<< HEAD
interface ConsultationPackage {
=======
interface ConsultationService {

=======
interface ConsultationService {
>>>>>>> cursor/fix-errors-and-merge-to-main-529a
  id: string;
  name: string;
  description: string;
  duration: string;
  price: string;
  features: string[];
  popular: boolean;
}

const ConsultationPage: React.FC = () => {
<<<<<<< HEAD
const consultationServices: ConsultationService[] = [
=======

=======
  const services: ConsultationService[] = [
>>>>>>> cursor/fix-errors-and-merge-to-main-529a
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
      id: 'ai',
      name: 'AI Implementation Consultation',
      description: 'Expert guidance on integrating AI solutions into your business processes and workflows.',
      duration: '3-5 hours',
      price: '$750',
      features: [
<<<<<<< HEAD
        'Cloud readiness assessment',
        'Migration strategy development',
        'Cost optimization analysis',
        'Security and compliance review',
'Implementation roadmap'
=======
        'Implementation roadmap'

=======
'Implementation roadmap'

=======
        'AI readiness assessment',
        'Use case identification',
        'Technology selection',
        'Implementation strategy',
        'ROI analysis'
>>>>>>> cursor/fix-errors-and-merge-to-main-529a
      ],
      popular: false
    },
    {
<<<<<<< HEAD
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

=======
      id: 'cloud',
      name: 'Cloud Migration Consultation',
      description: 'Strategic planning and execution of cloud migration with minimal disruption to your business.',
      duration: '4-6 hours',
      price: '$1000',
      features: [
        'Cloud readiness assessment',
        'Migration strategy',
        'Cost optimization',
        'Security planning',
        'Post-migration support'
      ],
>>>>>>> cursor/fix-errors-and-merge-to-main-529a
      popular: false
    }
  ];

<<<<<<< HEAD
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
=======
const ConsultationPage: React.FC = () => {
  return (
    <>
      <Helmet>
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

=======
  return (
    <>
      <Helmet>
        <title>Consultation | Zion Tech Group</title>
        <meta name="description" content="Expert IT consultation services to help your business leverage technology for growth and efficiency." />
        <meta name="keywords" content="IT consultation, technology consulting, AI consultation, cloud consulting" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
>>>>>>> cursor/fix-errors-and-merge-to-main-529a
        <Navigation />

        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
<<<<<<< HEAD
<div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" />
=======
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" />
>>>>>>> cursor/fix-errors-and-merge-to-main-529a
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Expert
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Consultation
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
<<<<<<< HEAD
Get expert guidance for your digital transformation journey. Professional IT consultation services by Zion Tech Group.
=======
              Get expert guidance on technology strategy, AI implementation, and digital transformation.
>>>>>>> cursor/fix-errors-and-merge-to-main-529a
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

<<<<<<< HEAD
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

=======
>>>>>>> cursor/fix-errors-and-merge-to-main-529a
        {/* Services Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Consultation Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our range of expert consultation services tailored to your business needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <div key={service.id} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 relative ${service.popular ? 'ring-2 ring-blue-500' : ''}`}>
                  {service.popular && (
<<<<<<< HEAD
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
=======
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-1">
                        <Star className="w-4 h-4" />
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    <div className="flex items-center justify-center gap-4 text-sm text-gray-400">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {service.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <DollarSign className="w-4 h-4" />
                        {service.price}
                      </span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    service.popular
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white'
                      : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                  }`}>
>>>>>>> cursor/fix-errors-and-merge-to-main-529a
                    Book This Service
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
{/* CTA Section */}
=======
        {/* CTA Section */}
>>>>>>> cursor/fix-errors-and-merge-to-main-529a
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Schedule a consultation with our experts and take the first step towards digital transformation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Schedule Now
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
<<<<<<< HEAD
                  Learn More
=======

=======
                  Contact Us
>>>>>>> cursor/fix-errors-and-merge-to-main-529a
                </button>
              </div>
            </div>
          </div>
        </section>
<<<<<<< HEAD
<Footer />
      </div>
    </>
=======

=======
        <title>Consultation - Zion Tech Group</title>
        <meta name="description" content="Get expert consultation for your technology needs." />
      </Helmet>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Consultation
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get expert consultation for your technology needs.
            </p>
          </div>
          
          <div className="text-center">
            <p className="text-gray-600">Consultation services coming soon...</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
=======

        <Footer />
      </div>
    </>
>>>>>>> cursor/fix-errors-and-merge-to-main-529a
  );
};

export default ConsultationPage;
