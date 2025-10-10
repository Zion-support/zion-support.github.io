'use client';
<<<<<<< HEAD
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Star, Clock, Users, Shield } from 'lucide-react';
const ConsultationPage: React.FC = () => {
  const services = [
    {
      icon: Star,
      title: 'AI Strategy',
      description: 'Develop a comprehensive AI strategy tailored to your business needs.',
      benefits: ['AI readiness assessment', 'Technology roadmap', 'ROI analysis', 'Implementation planning']
    },
    {
      icon: Shield,
      title: 'Cybersecurity Audit',
      description: 'Comprehensive security assessment and recommendations.',
      benefits: ['Security vulnerability analysis', 'Compliance review', 'Risk assessment', 'Remediation plan']
    },
    {
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
<<<<<<< HEAD
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Users, CheckCircle, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
=======

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Users, CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Target, Award } from 'lucide-react';

>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-fb16
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
<<<<<<< HEAD
  const [selectedType, setSelectedType] = useState<string>('');
=======
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '',
    preferredTime: '',
    urgency: 'medium'
  });

>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-fb16
  const consultationTypes: ConsultationType[] = [
    {
      id: 'strategy',
      name: 'Strategy Consultation',
      description: 'Comprehensive business strategy and technology roadmap planning',
      duration: '2 hours',
      price: '$500',
      features: [
        'Business analysis and assessment',
        'Technology roadmap development',
        'Competitive analysis',
        'Implementation timeline',
        'Follow-up support'
      ],
      popular: true
    },
    {
      id: 'technical',
      name: 'Technical Consultation',
      description: 'Deep dive into technical architecture and implementation details',
      duration: '1.5 hours',
      price: '$350',
      features: [
        'Technical architecture review',
        'Technology stack recommendations',
        'Performance optimization',
        'Security assessment',
        'Implementation guidance'
      ],
      popular: false
    },
    {
      id: 'ai',
      name: 'AI Solutions Consultation',
      description: 'Specialized consultation for AI and machine learning implementation',
      duration: '2.5 hours',
      price: '$750',
      features: [
        'AI strategy development',
        'Use case identification',
        'Model selection and training',
        'Data pipeline design',
        'ROI analysis'
      ],
      popular: false
<<<<<<< HEAD
    },
    {
      id: 'security',
      name: 'Cybersecurity Audit',
      description: 'Comprehensive security assessment and recommendations to protect your digital assets.',
      duration: '6-8 hours',
      price: '$1,500',
      features: [
        'Security vulnerability assessment',
        'Compliance review',
        'Penetration testing',
        'Security policy development',
        'Incident response planning'
      ],
      popular: false
    }
  ];
  const experts = [
=======
    }
  ];

  const services = [
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-fb16
    {
      icon: Zap,
      title: 'AI & Machine Learning',
      description: 'Transform your business with intelligent automation and data-driven insights'
    },
    {
      icon: Target,
      title: 'Cloud Solutions',
      description: 'Scalable, secure, and cost-effective cloud infrastructure and services'
    },
    {
      icon: Users,
      title: 'Digital Transformation',
      description: 'Complete digital overhaul to modernize your business processes'
    },
    {
      icon: Award,
      title: 'Cybersecurity',
      description: 'Protect your business with comprehensive security solutions and compliance'
    }
  ];
<<<<<<< HEAD
  const handleBooking = (typeId: string) => {
    setSelectedType(typeId);
    // In a real app, this would open a booking modal or redirect to a booking page
    console.log(`Booking consultation: ${typeId}`);
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
    // In a real app, this would submit the form data
    // Form submitted successfully
    alert('Thank you for your interest! We will contact you within 24 hours.');
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-fb16
  };
  return (
<<<<<<< HEAD
    <React.Fragment>
=======
    <div className="min-h-screen bg-gray-50">
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-fb16
      <Helmet>
        <title>Free Consultation - Zion Tech Group | Expert Technology Consulting</title>
        <meta name="description" content="Get a free consultation with our technology experts. Discuss your AI, cloud, and digital transformation needs with Zion Tech Group." />
        <meta name="keywords" content="free consultation, technology consulting, AI consultation, cloud consulting, digital transformation" />
      </Helmet>
<<<<<<< HEAD
<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Expert IT Consultation;
  </
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Get personalized guidance from our experts to transform your business with cutting-edge AI and IT solutions.
              </p>
            </div>
            {/* Consultation Types */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {consultationTypes.map((type, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-300">
                  <h3 className="text-2xl font-bold text-white mb-4">{type.title}</h3>
                  <p className="text-gray-300 mb-6">{type.description}</p>
                  <div className="mb-6">
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-2">
                      <span>Duration</span>
                      <span className="text-cyan-400 font-medium">{type.duration}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <span>Price</span>
                      <span className="text-cyan-400 font-medium">{type.price}</span>
                    </div>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {type.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold py-3 rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">
                    Schedule Consultation;
  </
                </div>
              ))}
            </div>
            {/* Contact Information */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
                <p className="text-gray-300 mb-8">
                  Contact our experts to discuss your specific needs and schedule a consultation.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
                  <p className="text-gray-300 mb-2">(302) 464-0950</p>
                  <p className="text-sm text-gray-400">Mon-Fri: 9AM-6PM EST</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
                  <p className="text-gray-300 mb-2">kleber@ziontechgroup.com</p>
                  <p className="text-sm text-gray-400">We'll respond within 24 hours</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Schedule Online</h3>
                  <p className="text-gray-300 mb-2">Book a consultation</p>
                  <p className="text-sm text-gray-400">Available 24/7</p>
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Expert <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Consultation</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Get personalized guidance from our experienced team of IT experts. Transform your business with strategic technology solutions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="flex items-center justify-center gap-4 text-white">
                <Calendar className="w-8 h-8 text-purple-400" />
                <div className="text-left">
                  <div className="text-2xl font-bold">Flexible Scheduling</div>
                  <div className="text-gray-400">Book at your convenience</div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-4 text-white">
                <Users className="w-8 h-8 text-purple-400" />
                <div className="text-left">
                  <div className="text-2xl font-bold">Expert Team</div>
                  <div className="text-gray-400">15+ years experience</div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-4 text-white">
                <CheckCircle className="w-8 h-8 text-purple-400" />
                <div className="text-left">
                  <div className="text-2xl font-bold">Proven Results</div>
                  <div className="text-gray-400">98% client satisfaction</div>
                </div>
              </div>
              <div className="text-center mt-8">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 inline-flex items-center">
                  Schedule Your Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </div>
            </div>
          </div>
        </section>
{/* Consultation Types */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Choose Your Consultation Type</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Select the consultation that best fits your needs. All sessions include detailed reports and actionable recommendations.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {consultationTypes.map((type) => (
                <div
                  key={type.id}
                  className={`relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border ${
                    type.popular
                      ? 'border-purple-400 shadow-2xl shadow-purple-500/25 scale-105'
                      : 'border-white/20'
                  }`}
                >
                  {type.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular;
  </
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-white mb-3">{type.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{type.description}</p>
                    <div className="flex items-center justify-center gap-2 text-purple-400 text-sm mb-4">
                      <Clock className="w-4 h-4" />
                      <span>{type.duration}</span>
                    </div>
                    <div className="text-3xl font-bold text-white">{type.price}</div>
=======
    }
  ];

  return (
    <>
      <Helmet>
        <title>Consultation | Zion Tech Group</title>
        <meta name="description" content="Get expert consultation for your AI and IT needs. Our experts will help you develop the right strategy for your business." />
        <meta name="keywords" content="consultation, AI strategy, cybersecurity audit, digital transformation, IT consulting" />
      </Helmet>

      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Expert Consultation
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Get expert guidance for your AI and IT transformation journey.
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
>>>>>>> cursor/fix-errors-and-merge-to-main-d277
                  </div>
                  <ul className="space-y-3 mb-8">
                    {type.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => handleBooking(type.id)}
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      type.popular
                        ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600'
                        : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                    }`}
                  >
                    Book Consultation;
  </
                </div>
              ))}
            </div>
          </div>
        </section>
<<<<<<< HEAD
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
                    {expert.expertise.map((skill, skillIndex) => (
                      <span key={skillIndex} className="bg-white/10 text-gray-300 px-3 py-1 rounded-full text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Contact Information */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
                <p className="text-xl text-gray-300">
                  Contact us today to schedule your consultation or learn more about our services.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                  <p className="text-gray-300">+1 (555) 123-4567</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                  <p className="text-gray-300">consultation@ziontech.com</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
                  <p className="text-gray-300">123 Tech Street, Silicon Valley</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
                  Schedule Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300">
                  View All Services;
  </
              </div>
            </div>
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
            {consultationServices.map((service, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service}</h3>
                <p className="text-gray-300">Expert guidance and strategic planning for your technology initiatives.</p>
              </div>
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
=======

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Free Technology Consultation
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Get expert advice on your technology needs. Our consultants will help you identify opportunities and create a roadmap for success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#consultation-form" className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors duration-200">
                Book Now
              </a>
              <a href="#services" className="border border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-medium transition-colors duration-200">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Our Expertise</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-fb16
            </div>
          </div>
        </div>
      </section>
<<<<<<< HEAD
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
              Schedule Consultation;
  </
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center justify-center">
              <Mail className="mr-2 h-5 w-5" />
              Contact Us;
  </
          </div>
        </div>
      </section>
      </div>
    </React.Fragment>
  );
};
export default ConsultationPage;
  </button>
  </button>
  </Link>
  </button>
  </div>
  </div>
  </div>
  </button>
  </h1>
  </div>
  </section>
  </div>
  </string>
=======

      {/* Consultation Types */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Consultation Types</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {consultationTypes.map((type) => (
                <div key={type.id} className={`bg-white rounded-xl p-8 shadow-lg ${type.popular ? 'ring-2 ring-blue-500 scale-105' : ''}`}>
                  {type.popular && (
                    <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{type.name}</h3>
                  <p className="text-gray-600 mb-6">{type.description}</p>
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <span className="text-3xl font-bold text-gray-900">{type.price}</span>
                      <span className="text-gray-500 ml-2">/session</span>
                    </div>
                    <div className="text-sm text-gray-500">
                      <Clock className="w-4 h-4 inline mr-1" />
                      {type.duration}
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {type.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200">
                    Book This Consultation
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="consultation-form" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Schedule Your Consultation</h2>
            <form onSubmit={handleSubmit} className="bg-gray-50 rounded-xl p-8">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    <option value="ai-ml">AI & Machine Learning</option>
                    <option value="cloud">Cloud Solutions</option>
                    <option value="digital-transformation">Digital Transformation</option>
                    <option value="cybersecurity">Cybersecurity</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-2">
                    Urgency Level
                  </label>
                  <select
                    id="urgency"
                    name="urgency"
                    value={formData.urgency}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="low">Low - Planning phase</option>
                    <option value="medium">Medium - 1-3 months</option>
                    <option value="high">High - Immediate need</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Tell us about your project
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Describe your current challenges, goals, and what you hope to achieve..."
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 flex items-center mx-auto"
                >
                  Schedule Consultation <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Get in Touch</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <Phone className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </div>
              <div className="text-center">
                <Mail className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600">consultation@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <MapPin className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Office</h3>
                <p className="text-gray-600">123 Tech Street, Silicon Valley, CA</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
=======

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Schedule a free consultation with our experts to discuss your project.
            </p>
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 font-semibold flex items-center mx-auto">
              Schedule Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </>
>>>>>>> cursor/fix-errors-and-merge-to-main-d277
  );
};

export default ConsultationPage;
<<<<<<< HEAD
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-fb16
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-d277
